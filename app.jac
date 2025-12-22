# ============================================================================
# Jac Interactive Tutor Backend - Integrated Version
# Combines both backends with user_email support
# ============================================================================

# ----------------------------------------------------------------------------
# Inline Python: GitHub helpers + Gemini
# ----------------------------------------------------------------------------
::py::
import os
import requests
from datetime import datetime,timedelta
from dotenv import load_dotenv
import uuid
import byllm
import json


# Load environment variables
load_dotenv()
# GitHub config
OWNER = "jaseci-labs"
REPO = "jaseci"
BRANCH = "main"
BOOK_PATH = "docs/docs/jac_book"

def _github_raw_url(path: str) -> str:
    return f"https://raw.githubusercontent.com/{OWNER}/{REPO}/{BRANCH}/{path}"


def generate_session_id():
    return str(uuid.uuid4())

def get_current_time():
    return datetime.utcnow()

def format_time(dt):
    return dt.isoformat() + "Z"

def now_iso() -> str:
    return datetime.utcnow().isoformat() + "Z"

def add_hours(dt, hours):
    return dt + timedelta(hours=hours)

def fetch_lessons_index():
    lessons = []
    for i in range(1, 21):
        fname = f"chapter_{i}.md"
        lesson_id = f"chapter_{i}"
        title = f"Chapter {i}"
        github_path = f"{BOOK_PATH}/{fname}"
        lessons.append({
            "id": lesson_id,
            "title": title,
            "description": f"Jac Book {title}",
            "path": github_path,
        })
    return lessons

def fetch_lesson_content(github_path: str) -> str:
    url = _github_raw_url(github_path)
    print(f"DEBUG: Fetching from URL: {url}")
    try:
        r = requests.get(url, timeout=10)
        print(f"DEBUG: Response status: {r.status_code}")
        r.raise_for_status()
        return r.text
    except Exception as e:
        print(f"DEBUG: Error fetching {url}: {e}")
        return f"Error fetching content: {e}"

# Gemini support
try:
    import google.generativeai as genai
    GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
    GEMINI_MODEL = os.environ.get("GEMINI_MODEL", "gemini-2.5-flash")
    
    if GEMINI_API_KEY:
        genai.configure(api_key=GEMINI_API_KEY)
    
    def ask_gemini(prompt: str) -> str:
        if not GEMINI_API_KEY:
            return "Gemini API key not configured on server."
        try:
            model = genai.GenerativeModel(GEMINI_MODEL)
            resp = model.generate_content(prompt)
            if hasattr(resp, "text") and resp.text:
                return resp.text
            return "Gemini returned no text."
        except Exception as e:
            return f"Error calling Gemini: {e}"
except ImportError:
    def ask_gemini(prompt: str) -> str:
        return "google-generativeai is not installed on the server."

::py::

# ============================================================================
# DATA MODEL
# ============================================================================

node User {
    has email: str;
    has name: str;
    has role: str;   # "student" | "tutor"
}

node UserSession{
    has user_email:str;
    has session_id:str;
    has created_at:str;
    has expires_at:str;
}

node Lesson {
    has lesson_id: str;
    has title: str;
    has description: str;
    has github_path: str;
    has order: int;
}

node LessonAttempt {
    has user_email: str;
    has lesson_id: str;
    has status: str;          # "started", "completed", "quiz_completed"
    has timestamp: str = "";  # from now_iso()
    has score: float = 0.0;
}

edge UserAttempt {}    # User --UserAttempt--> LessonAttempt
edge AttemptLesson {}  # LessonAttempt --AttemptLesson--> Lesson

# Add these to your existing nodes
node Book {
    has id: str;
    has title: str;
    has description: str;
    has subject: str;
    has color: str;
    has created_by: str;  # user_email
    has created_at: str;
    has updated_at: str;
}

node Chapter {
    has id: str;
    has book_id: str;
    has title: str;
    has description: str;
    has content: str;
    has order: int;
    has created_by: str;  # user_email
    has created_at: str;
    has updated_at: str;
    has is_published: bool = false;
}

node Quiz {
    has id: str;
    has chapter_id: str;
    has title: str;
    has questions: list;
    has created_at: str;
    has is_active: bool = True;
}

node StudentAccess {
    has student_email: str;
    has id: str;
    has chapter_id: str;
    
    has granted_by: str;  # tutor_email
    has granted_at: str;
}

node StudentProgress {
    has student_email: str;
    has id: str;
    
    has chapter_id: str;
    has last_viewed: str;
    has view_count: int = 0;
    
    has completed: bool = false;
    has quiz_score: float = 0.0;
    has time_spent: int = 0;  # in seconds
}

# Edges for relationships
edge HasChapters {}          # Book --HasChapters--> Chapter
edge HasQuiz {}              # Chapter --HasQuiz--> Quiz
edge HasAccess {}            # Chapter --HasAccess--> StudentAccess
edge HasProgress {}          # Chapter --HasProgress--> StudentProgress
edge CreatedBy {}            # Book/CreatedBy/User, Chapter/CreatedBy/User
# ============================================================================
# UTILITY WALKERS
# ============================================================================

walker now_iso {
    can run with `root entry {
        report now_iso();
    }
}

# ============================================================================
# AUTH & USER MANAGEMENT
# ============================================================================

walker create_user_profile {
    has email: str;
    has name: str;
    has role: str = "student";

    can create with `root entry {
        user = here ++> User(
            email = self.email,
            name = self.name,
            role = self.role
        );
        report {
            "email": user.email,
            "name": user.name,
            "role": user.role
        };
    }
}

walker login_user {
    has email: str;
    has password: str;

    can run with `root entry {
        user_found = None;
        for u in [-->(`?User)] {
            if u.email == self.email {
                user_found = u;
                break;
            }
        }

        if not user_found {
            report {"success": False, "error": "user_not_found"};
            return;
        }
        session_id = generate_session_id();
        created_at = get_current_time();
        expires_at = add_hours(created_at, 24);  # 24 hour session
        
        # Store session
        session_node = here ++> UserSession(
            session_id = session_id,
            user_email = user_found.email,
            created_at = format_time(created_at),
            expires_at = format_time(expires_at)
        );
        print("Session saved with ID:", session_id);
        print("Session expires_at stored:", format_time(expires_at));

        report {
            "success": True,
            "session_id": session_id,
            "user": {
                "email": user_found.email,
                "name": user_found.name,
                "role": user_found.role
            }
        };
    }
}

walker get_session_user {
    has session_id: str;

    can read with `root entry {
        # Find valid session
        session_found = None;
        current_time = get_current_time();
        current_time_iso = format_time(get_current_time());

        print("Current time:", current_time_iso);

        
        for s in [-->(`?UserSession)] {
            if s.session_id == self.session_id {
                # Check if session is still valid
                
                if current_time_iso < s.expires_at {
                    session_found = s;
                    break;
                } else {
                    # Session expired - delete it
                    s.destroy();
                }
            }
        }
        if not session_found {
            report {"error": "invalid_or_expired_session"};
            return;
        }


        user_found = None;
        for u in [-->(`?User)] {
            if u.email == session_found.user_email {
                user_found = u;
                break;
            }
        }

        if not user_found {
            report {"error": "user_not_found"};
            return;
        }
        

        report {
            "email": user_found.email,
            "name": user_found.name,
            "role": user_found.role
        };
    }
}

walker logout_user {
    has session_id: str;

    can run with `root entry {
        # Find and delete session
        sessions_deleted = 0;
        for s in [-->(`?UserSession)] {
            if s.session_id == self.session_id {
                s.destroy();
                sessions_deleted += 1;
            }
        }

        report {
            "success": True,
            "sessions_deleted": sessions_deleted
        };
    }
}

# ============================================================================
# LESSON MANAGEMENT
# ============================================================================

walker sync_lessons_from_github {
    can sync with `root entry {
         print("=== DEBUG: Starting sync_lessons_from_github ===");
        lessons_data = fetch_lessons_index();
        existing_lessons = [-->(`?Lesson)];
        # print("DEBUG: Existing lessons in graph:", existing_lessons.length);
        existing_by_id = {};
        
        for l in existing_lessons {
            existing_by_id[l.lesson_id] = l;
        }

        created = [];
        updated = [];
        i = 1;

        for raw in lessons_data {
             print("DEBUG: Processing lesson:", raw["id"], "-", raw["title"]);
            id = raw["id"];
            title = raw["title"];
            description = raw["description"];
            github_path = raw["path"];
            lesson_node = None;

            if id in existing_by_id {
                lesson_node = existing_by_id[id];
                lesson_node.title = title;
                lesson_node.description = description;
                lesson_node.github_path = github_path;
                lesson_node.order = i;
                updated.append(lesson_node);
            } else {
                lesson_node = here ++> Lesson(
                    lesson_id = id,
                    title = title,
                    description = description,
                    github_path = github_path,
                    order = i
                );
                created.append(lesson_node);
            }
            i += 1;
        }
        print("DEBUG: Created", len(created), "lessons");
        print("DEBUG: Updated", len(updated), "lessons");

        report {
            "created": len(created),
            "updated": len(updated)
        };
    }
}

walker list_lessons {
    can list with `root entry {
        lessons = [-->(`?Lesson)];
        result = [];
        
        for l in lessons {
            result.append({
                "id": l.lesson_id,
                "title": l.title,
                "description": l.description,
                "github_path": l.github_path,
                "order": l.order
            });
        }

        # Sort by order
        # result = result.sort(key="order");
        report result;
    }
}

walker get_lesson_detail {
    has lesson_id: str;

    can get with `root entry {
        lessons = [-->(`?Lesson)];
        target = None;

        for l in lessons {
            if l.lesson_id == self.lesson_id {
                target = l;
                break;
            }
        }

        if not target {
            report {
                "error": "lesson_not_found",
                "lesson_id": self.lesson_id
            };
            return;
        }

        content = "";
        if target.github_path {
            content = fetch_lesson_content(target.github_path);
        }

        report {
            "id": target.lesson_id,
            "title": target.title,
            "description": target.description,
            "github_path": target.github_path,
            "order": target.order,
            "content": content
        };
    }
}

# ============================================================================
# PROGRESS & ATTEMPTS
# ============================================================================

walker record_attempt {
    has user_email: str;
    has lesson_id: str;
    has status: str;          # "started", "completed"
    has score: float = 0.0;

    can save with `root entry {
        # Ensure user exists
        users = [-->(`?User)];
        user_node = None;

        for u in users {
            if u.email == self.user_email {
                user_node = u;
                break;
            }
        }

        if not user_node {
            report {"error": "user_not_found"};
            return;
        }

        # Find lesson
        lessons = [-->(`?Lesson)];
        lesson_node = None;

        for l in lessons {
            if l.lesson_id == self.lesson_id {
                lesson_node = l;
                break;
            }
        }

        if not lesson_node {
            report {"error": "lesson_not_found"};
            return;
        }

        # Create attempt node + edges
        attempt = here ++> LessonAttempt(
            user_email = self.user_email,
            lesson_id = self.lesson_id,
            status = self.status,
            score = self.score,
            timestamp = now_iso()
        );

        user_node +>:UserAttempt:+> attempt;
        attempt +>:AttemptLesson:+> lesson_node;

        report {
            "user_email": attempt.user_email,
            "lesson_id": attempt.lesson_id,
            "status": attempt.status,
            "score": attempt.score,
            "timestamp": attempt.timestamp
        };
    }
}

walker get_user_attempts {
    has user_email: str;

    can get with `root entry {
        attempts = [-->(`?LessonAttempt)];
        result = [];

        for a in attempts {
            if a.user_email == self.user_email {
                result.append({
                    "lesson_id": a.lesson_id,
                    "status": a.status,
                    "score": a.score,
                    "timestamp": a.timestamp
                });
            }
        }

        report result;
    }
}

# ============================================================================
# AI TUTOR & QUIZ
# ============================================================================

walker ai_chat {
    has message: str;

    can chat with `root entry {
        full_prompt = """
You are JacTutor, a concise AI assistant helping students learn Jac programming and related concepts.

Answer the student's question with:
- Plain text only (no markdown, no bullet points, no headings, no bold).
- A direct, focused explanation of exactly what they asked.
- 3–6 short sentences unless they explicitly ask for a long or step-by-step answer.
- No introductions like "Sure!" or "Here's your answer".

Student question:
""" + self.message;

        reply = ask_gemini(full_prompt);
        report {"reply": reply};
    }
}

walker generate_quiz_questions {
    has lesson_id: str;

    can ask with `root entry {
        lessons = [-->(`?Lesson)];
        target = None;

        for l in lessons {
            if l.lesson_id == self.lesson_id {
                target = l;
                break;
            }
        }

        if not target {
            report {"error": "lesson_not_found"};
            return;
        }

        chapter = fetch_lesson_content(target.github_path);

        prompt = """
Generate 20 multiple choice questions (MCQs) from this Jac chapter.
Rules:
- Plain text only.
- No markdown.
- Each question must have exactly 4 options: A, B, C, D.
- Correct answer must be indicated as: Correct: A
- Keep questions short and based ONLY on the chapter.

Chapter:
""" + chapter;

        text = ask_gemini(prompt);
        report {"questions_raw": text};
    }
}

walker evaluate_answer {
    has question: str;
    has selected: str;

    can check with `root entry {
        prompt = """
Evaluate this MCQ answer.

Rules:
- Reply ONLY in this JSON format:
{"correct": True/false, "explanation": "short explanation"}

Do not add markdown.

Question:
""" + self.question + """

Student selected: """ + self.selected;

        reply = ask_gemini(prompt);
        
        # Check if reply looks like JSON
        is_json = false;
        if reply.contains("{") and reply.contains("}") and reply.contains("correct") {
            # Try to parse using Python's json module
            eval_result = python.json.loads(reply);
            if eval_result and "correct" in eval_result {
                report {"eval": eval_result};
                return;
            }
        }
        
        # If not valid JSON, return default
        report {"eval": {"correct": False, "explanation": "Invalid response format"}};
    }
}

walker quiz_record_attempt {
    has user_email: str;
    has lesson_id: str;
    has correct: int;
    has wrong: int;

    can save with `root entry {
        score = 0.0;
        total = self.correct + self.wrong;
        
        if total > 0 {
            score = self.correct / total;
        }

        attempt = here ++> LessonAttempt(
            user_email = self.user_email,
            lesson_id = self.lesson_id,
            status = "quiz_completed",
            score = score,
            timestamp = now_iso()
        );

        report {
            "user_email": self.user_email,
            "lesson_id": self.lesson_id,
            "correct": self.correct,
            "wrong": self.wrong,
            "score": score
        };
    }
}

# ============================================================================
# TUTOR DATA WALKERS (ADD THESE TO YOUR EXISTING BACKEND)
# ============================================================================

walker get_tutor_stats {
    has user_email: str;
    
    can get with `root entry {
        # Get total lessons
        lessons = [-->(`?Lesson)];
        total_lessons = lessons.length;
        
        # Get total students (count unique users with attempts)
        all_attempts = [-->(`?LessonAttempt)];
        student_emails = {};
        for a in all_attempts {
            student_emails[a.user_email] = True;
        }
        total_students = student_emails.length;
        
        # Get active quizzes (lessons with quiz attempts in last 7 days)
        active_quizzes = 0;
        current_time = datetime.utcnow();
        seven_days_ago = current_time - timedelta(days=7);
        
        recent_quiz_attempts = [];
        for a in all_attempts {
            if a.status == "quiz_completed" {
                attempt_time = datetime.fromisoformat(a.timestamp.replace("Z", ""));
                if attempt_time > seven_days_ago {
                    recent_quiz_attempts.append(a.lesson_id);
                }
            }
        }
        
        # Count unique lessons with recent quiz attempts
        active_quizzes_set = {};
        for lesson_id in recent_quiz_attempts {
            active_quizzes_set[lesson_id] = True;
        }
        active_quizzes = active_quizzes_set.length;
        
        # Get average student score
        total_score = 0.0;
        total_quiz_attempts = 0;
        for a in all_attempts {
            if a.status == "quiz_completed" {
                total_score = total_score + a.score;
                total_quiz_attempts = total_quiz_attempts + 1;
            }
        }
        
        avg_score = 0;
        if total_quiz_attempts > 0 {
            avg_score = (total_score / total_quiz_attempts) * 100;
        }
        
        report {
            "total_lessons": total_lessons,
            "total_students": total_students,
            "active_quizzes": active_quizzes,
            "avg_score": Math.round(avg_score)
        };
    }
}

walker get_tutor_recent_activity {
    has user_email: str;
    
    can get with `root entry {
        all_attempts = [-->(`?LessonAttempt)];
        activities = [];
        current_time = datetime.utcnow();
        
        # Get users for display names
        users = [-->(`?User)];
        user_map = {};
        for u in users {
            user_map[u.email] = u.name;
        }
        
        # Get lessons for display
        lessons = [-->(`?Lesson)];
        lesson_map = {};
        for l in lessons {
            lesson_map[l.lesson_id] = l.title;
        }
        
        # Process recent attempts (last 10)
        count = 0;
        for a in all_attempts {
            if count >= 10 {
                break;
            }
            
            user_name = user_map[a.user_email] if a.user_email in user_map else a.user_email;
            lesson_title = lesson_map[a.lesson_id] if a.lesson_id in lesson_map else a.lesson_id;
            
            if a.status == "quiz_completed" {
                score_percent = Math.round(a.score * 100);
                activity = {
                    "type": "quiz_completed",
                    "message": "Student '" + user_name + "' completed quiz for '" + lesson_title + "' with " + str(score_percent) + "% score",
                    "timestamp": a.timestamp,
                    "user_email": a.user_email,
                    "lesson_id": a.lesson_id
                };
                activities.append(activity);
                count = count + 1;
            } elif a.status == "completed" {
                activity = {
                    "type": "lesson_completed",
                    "message": "Student '" + user_name + "' completed lesson '" + lesson_title + "'",
                    "timestamp": a.timestamp,
                    "user_email": a.user_email,
                    "lesson_id": a.lesson_id
                };
                activities.append(activity);
                count = count + 1;
            }
        }
        
        # Sort by timestamp (most recent first)
        activities = activities.sort(key="timestamp", reverse=True);
        
        # Add some system activities if we don't have enough user activities
        if len(activities) < 5 {
            # Mock system activities
            system_activities = [
                {
                    "type": "system",
                    "message": "New lesson 'Advanced JAC Features' added to curriculum",
                    "timestamp": now_iso()
                },
                {
                    "type": "system", 
                    "message": "System maintenance completed - all features are now available",
                    "timestamp": now_iso()
                },
                {
                    "type": "system",
                    "message": "3 new students registered this week",
                    "timestamp": now_iso()
                }
            ];
            for activity in system_activities {
                activities.append(activity);
            }
        }
        
        # Take only first 5 activities
        if len(activities) > 5 {
            activities = activities.slice(0, 5);
        }
        
        report activities;
    }
}

walker get_student_progress_summary {
    has user_email: str;
    
    can get with `root entry {
        # Get all attempts for this user
        attempts = [-->(`?LessonAttempt)];
        user_attempts = [];
        for a in attempts {
            if a.user_email == self.user_email {
                user_attempts.append(a);
            }
        }
        
        # Get all lessons
        lessons = [-->(`?Lesson)];
        total_lessons = lessons.length;
        
        # Calculate completed lessons
        completed_lessons = 0;
        for a in user_attempts {
            if a.status == "completed" or a.status == "quiz_completed" {
                completed_lessons = completed_lessons + 1;
            }
        }
        
        # Calculate average score
        total_score = 0.0;
        quiz_count = 0;
        for a in user_attempts {
            if a.status == "quiz_completed" {
                total_score = total_score + a.score;
                quiz_count = quiz_count + 1;
            }
        }
        
        avg_score = 0;
        if quiz_count > 0 {
            avg_score = (total_score / quiz_count) * 100;
        }
        
        # Calculate streak (based on last 7 days)
        streak_days = 0;
        if len(user_attempts) > 0 {
            # Sort attempts by date
            sorted_attempts = user_attempts.sort(key="timestamp", reverse=True);
            
            # Check last 7 days for activity
            current_time = datetime.utcnow();
            for day_offset in range(0, 7) {
                check_date = current_time - timedelta(days=day_offset);
                check_date_str = check_date.date().isoformat();
                
                has_activity = false;
                for a in sorted_attempts {
                    attempt_time = datetime.fromisoformat(a.timestamp.replace("Z", ""));
                    attempt_date_str = attempt_time.date().isoformat();
                    
                    if attempt_date_str == check_date_str {
                        has_activity = True;
                        break;
                    }
                }
                
                if has_activity {
                    streak_days = streak_days + 1;
                } else {
                    break;  # Streak broken
                }
            }
        }
        
        progress_percent = 0;
        if total_lessons > 0 {
            progress_percent = Math.round((completed_lessons / total_lessons) * 100);
        }
        
        report {
            "total_lessons": total_lessons,
            "completed_lessons": completed_lessons,
            "progress_percent": progress_percent,
            "avg_score": Math.round(avg_score),
            "streak_days": streak_days,
            "total_attempts": len(user_attempts)
        };
    }
}

walker get_student_recent_lessons {
    has user_email: str;
    has limit: int = 4;
    
    can get with `root entry {
        # Get all lessons
        lessons = [-->(`?Lesson)];
        
        # Get user attempts
        attempts = [-->(`?LessonAttempt)];
        user_attempts = [];
        for a in attempts {
            if a.user_email == self.user_email {
                user_attempts.append(a);
            }
        }
        
        # Create lesson progress map
        progress_map = {};
        for a in user_attempts {
            progress_map[a.lesson_id] = {
                "status": a.status,
                "score": a.score,
                "timestamp": a.timestamp
            };
        }
        
        # Prepare result with progress info
        result = [];
        count = 0;
        
        for l in lessons {
            if count >= self.limit {
                break;
            }
            
            lesson_progress = None;
            if l.lesson_id in progress_map {
                lesson_progress = progress_map[l.lesson_id];
            }
            
            is_completed = false;
            if lesson_progress and (lesson_progress.status == "completed" or lesson_progress.status == "quiz_completed") {
                is_completed = True;
            }
            
            result.append({
                "id": l.lesson_id,
                "title": l.title,
                "description": l.description,
                "progress": lesson_progress,
                "is_completed": is_completed
            });
            
            count = count + 1;
        }
        
        report result;
    }
}

walker get_lesson_with_progress {
    has user_email: str;
    has lesson_id: str;
    
    can get with `root entry {
        # Get lesson details
        lessons = [-->(`?Lesson)];
        target = None;
        
        for l in lessons {
            if l.lesson_id == self.lesson_id {
                target = l;
                break;
            }
        }
        
        if not target {
            report {"error": "Lesson not found"};
            return;
        }
        
        content = "";
        if target.github_path {
            content = fetch_lesson_content(target.github_path);
        }
        
        lesson_data = {
            "id": target.lesson_id,
            "title": target.title,
            "description": target.description,
            "github_path": target.github_path,
            "order": target.order,
            "content": content
        };
        
        # Get user progress for this lesson
        attempts = [-->(`?LessonAttempt)];
        user_progress = None;
        
        for a in attempts {
            if a.user_email == self.user_email and a.lesson_id == self.lesson_id {
                user_progress = {
                    "status": a.status,
                    "score": a.score,
                    "timestamp": a.timestamp
                };
                break;
            }
        }
        
        report {
            "lesson": lesson_data,
            "progress": user_progress
        };
    }
}

# ============================================================================
# BOOK MANAGEMENT WALKERS
# ============================================================================

walker create_book {
    has user_email: str; 
    has title: str;
    has description: str = "";
    has subject: str = "";
    has color: str = "#7c3aed";
     # tutor's email
    
    can create with `root entry {
        # Check if user exists
        user = None;
        for u in [-->(`?User)] {
            if u.email == self.user_email and u.role == "tutor" {
                user = u;
                break;
            }
        }
        
        if not user {
            report {"success": False, "error": "Tutor not found"};
            return;
        }
        
        book_id = str(uuid.uuid4());
        now = now_iso();
        
        book_list = here ++> Book(
            id = book_id,
            title = self.title,
            description = self.description,
            subject = self.subject,
            color = self.color,
            created_by = self.user_email,
            created_at = now,
            updated_at = now
        );

        book = book_list[0];

        
        # Connect book to user
        user +>:CreatedBy:+> book;
        
        report {
            "success": True,
            "book": {
                "id": book.id,
                "title": book.title,
                "description": book.description,
                "subject": book.subject,
                "color": book.color,
                "created_by": book.created_by,
                "created_at": book.created_at,
                "updated_at": book.updated_at
            }
        };
    }
}

walker update_book {
    has id: str;
    has title: str;
    has description: str;
    has subject: str;
    has color: str;
    has user_email: str;  # for authorization check
    
    can update with `root entry {
        # Find the book
        book = none;
        for b in [-->(`?Book)] {
            if b.id == self.id and b.created_by == self.user_email {
                book = b;
                break;
            }
        }
        
        if not book {
            report {"success": false, "error": "Book not found or unauthorized"};
            return;
        }
        
        # Update book
        book.title = self.title;
        book.description = self.description;
        book.subject = self.subject;
        book.color = self.color;
        book.updated_at = now_iso();
        
        report {
            "success": True,
            "book": {
                "id": book.id,
                "title": book.title,
                "description": book.description,
                "subject": book.subject,
                "color": book.color,
                "created_by": book.created_by,
                "created_at": book.created_at,
                "updated_at": book.updated_at
            }
        };
    }
}

walker delete_book {
    has id: str;
    has user_email: str;
    
    can delete with entry {
        # Find the book
        book = none;
        for b in [-->(`?Book)] {
            if b.id == self.id and b.created_by == self.user_email {
                book = b;
                break;
            }
        }
        
        if not book {
            report {"success": false, "error": "Book not found or unauthorized"};
            return;
        }
        
        # Delete associated chapters first
        chapters_deleted = 0;
        for node in [book -->] {
            if node is Chapter {
                chapter = node;
                # Delete chapter's quizzes, access records, and progress
                for quiz in [chapter --> Quiz] {
                    quiz.destroy();
                }
                for access in [chapter --> StudentAccess] {
                    access.destroy();
                }
                for progress in [chapter --> StudentProgress] {
                    progress.destroy();
                }
                chapter.destroy();
                chapters_deleted = chapters_deleted + 1;
            }
        }
        
        # Delete the book
        book.destroy();
        
        report {
            "success": True,
            "message": "Book deleted successfully",
            "chapters_deleted": chapters_deleted
        };
    }
}

walker list_books {
    has user_email: str;

    can list with `root entry {
        books = [];

        # Traverse all Book nodes from root
        for book in [-->(`?Book)] {
            if book.created_by == self.user_email {

                # Count chapters for this book
                chapter_count = 0;
                for node in [book -->] {
                    if node is Chapter {
                        chapter_count += 1;
                    }
                }

                # Add book to list
                books.append({
                    "id": book.id,
                    "title": book.title,
                    "description": book.description,
                    "subject": book.subject,
                    "color": book.color,
                    "created_by": book.created_by,
                    "created_at": book.created_at,
                    "updated_at": book.updated_at,
                    "chapter_count": chapter_count
                });
            }
        }

        report books;
    }
}


# ============================================================================
# CHAPTER MANAGEMENT WALKERS
# ============================================================================

walker create_chapter {
    has user_email: str;
    has book_id: str;
    has title: str;
    has description: str = "";
    has content: str = "";
    has order: int = 1;
    
    
    can create with `root entry {
        # Verify book exists and user owns it
        book = None;
        for b in [-->(`?Book)] {
            if b.id == self.book_id and b.created_by == self.user_email {
                book = b;
                break;
            }
        }
        
        if not book {
            report {"success": False, "error": "Book not found or unauthorized"};
            return;
        }
        
        chapter_id = str(uuid.uuid4());
        now = now_iso();
        
        chapter_list = here ++> Chapter(
            id = chapter_id,
            book_id = self.book_id,
            title = self.title,
            description = self.description,
            content = self.content,
            order = self.order,
            created_by = self.user_email,
            created_at = now,
            updated_at = now,
            is_published = len(self.content) > 0
        );
        
        chapter = chapter_list[0];
        # Connect chapter to book
        book +>:HasChapters:+> chapter;
        
        # Connect chapter to user
        for user in [-->(`?User)] {
            if user.email == self.user_email {
                user +>:CreatedBy:+> chapter;
                break;
            }
        }
        
        report {
            "success": True,
            "chapter": {
                "id": chapter.id,
                "book_id": chapter.book_id,
                "title": chapter.title,
                "description": chapter.description,
                "content": chapter.content,
                "order": chapter.order,
                "created_by": chapter.created_by,
                "created_at": chapter.created_at,
                "updated_at": chapter.updated_at,
                "is_published": chapter.is_published
            }
        };
    }
}

walker update_chapter {
     has id: str;
    has user_email: str;
    has order: int;
   
    has title: str;
    has description: str;
    has content: str = "";
    
    
    can update with `root entry {
        # Find the chapter
        chapter = None;
        for c in [-->(`?Chapter)] {
            if c.id == self.id and c.created_by == self.user_email {
                chapter = c;
                break;
            }
        }
        
        if not chapter {
            report {"success": false, "error": "Chapter not found or unauthorized"};
            return;
        }
        
        # Update chapter
        chapter.order = self.order;
        chapter.title = self.title;
        chapter.description = self.description;
        
        chapter.updated_at = now_iso();
        
        # Only update content if provided (to avoid overwriting with empty string)
        if len(self.content) > 0 {
            chapter.content = self.content;
            chapter.is_published = True;
        }
        
        report {
            "success": True,
            "chapter": {
                "id": chapter.id,
                "book_id": chapter.book_id,
                "order": chapter.order,
                "title": chapter.title,
                "description": chapter.description,
                "content": chapter.content,
                
                "created_by": chapter.created_by,
                "created_at": chapter.created_at,
                "updated_at": chapter.updated_at,
                "is_published": chapter.is_published
            }
        };
    }
}

walker update_chapter_order {
    has user_email: str;
    has id: str;
    has order: int;
    
    
    can update with `root entry {
        # Find the chapter
        chapter = None;
        for c in [-->(`?Chapter)] {
            if c.id == self.id and c.created_by == self.user_email {
                chapter = c;
                break;
            }
        }
        
        if not chapter {
            report {"success": false, "error": "Chapter not found or unauthorized"};
            return;
        }
        
        chapter.order = self.order;
        chapter.updated_at = now_iso();
        
        report {"success": true};
    }
}

walker delete_chapter {
     has user_email: str;
    has id: str;
   
    
    can delete with `root entry {
        # Find the chapter
        chapter = None;
        for c in [-->(`?Chapter)] {
            if c.id == self.id and c.created_by == self.user_email {
                chapter = c;
                break;
            }
        }
        
        if not chapter {
            report {"success": false, "error": "Chapter not found or unauthorized"};
            return;
        }
        
        # Delete associated data
        for quiz in [chapter --> `Quiz] {
            quiz.destroy();
        }
        for access in [chapter --> `StudentAccess] {
            access.destroy();
        }
        for progress in [chapter --> `StudentProgress ]{
            progress.destroy();
        }
        
        # Delete the chapter
        chapter.destroy();
        
        report {"success": true, "message": "Chapter deleted successfully"};
    }
}

walker list_chapters {
    has book_id: str;
    has user_email: str;
    
    can list with `root entry {
        # Verify book exists and user owns it
        book = None;
        for b in [-->(`?Book)] {
            if b.id == self.book_id and b.created_by == self.user_email {
                book = b;
                break;
            }
        }
        print("=== Looking for chapters for book:", book);
        if not book {
            report {"success": false, "error": "Book not found or unauthorized"};
            return;
        }
        
        chapters = [];
        for node in [book -->]{
            if node is Chapter {
            # Count students with access
            # access_count = 0;}
            # for access in [chapter --> StudentAccess ]{
            #     access_count = access_count + 1;
             }
            
            chapters.append({
                 "id": chapter.id,
                "book_id": chapter.book_id,
                "title": chapter.title,
                "description": chapter.description,
                "content": chapter.content,
                "order": chapter.order,
                "created_by": chapter.created_by,
                "created_at": chapter.created_at,
                "updated_at": chapter.updated_at,
                "is_published": chapter.is_published,
                "access_count": access_count
            });
        }
        print(f"chapters in the book: {chapters} ");
        # Sort by order
        # chapters = chapters.sort(key="order");
        
        report chapters;
    }
}

walker get_chapter_detail {
    has id: str;
    has user_email: str;
    
    can get with `root entry {
        # Find the chapter
        chapter = None;
        for c in [-->(`?Chapter)] {
            if c.id == self.id and c.created_by == self.user_email {
                chapter = c;
                break;
            }
        }
        
        if not chapter {
            report {"success": false, "error": "Chapter not found or unauthorized"};
            return;
        }
        
        # Get book info
        book = None;
        for b in [-->(`?Book)] {
            if b.id == chapter.book_id {
                book = b;
                break;
            }
        }
        
        # Get quiz if exists
        quiz = None;
        for q in [chapter --> Quiz] {
            if q.is_active {
                quiz = q;
                break;
            }
        }
        
        # Get students with access
        students_with_access = [];
        for access in [chapter --> `StudentAccess] {
            # Get student user info
            for user in [-->(`?User)] {
                if user.email == access.student_email {
                    students_with_access.append({
                        "email": user.email,
                        "name": user.name,
                        "granted_at": access.granted_at,
                        "granted_by": access.granted_by
                    });
                    break;
                }
            }
        }
        
        report {
            "success": true,
            "chapter": {
                "id": chapter.id,
                "book_id": chapter.book_id,
                "title": chapter.title,
                "description": chapter.description,
                "content": chapter.content,
                "order": chapter.order,
                "created_by": chapter.created_by,
                "created_at": chapter.created_at,
                "updated_at": chapter.updated_at,
                "is_published": chapter.is_published
            },
            "book": {
                "id": book.id,
                "title": book.title,
                "color": book.color
            } if book else None,
            "quiz": {
                "id": quiz.id,
                "title": quiz.title,
                "questions_count": len(quiz.questions) if quiz else 0
            } if quiz else None,
            "students_with_access": students_with_access
        };
    }
}

# ============================================================================
# QUIZ MANAGEMENT WALKERS
# ============================================================================

walker create_quiz {
    has chapter_id: str;
    has title: str;
    has questions: list;
    has user_email: str;
    
    can create with `root entry {
        # Verify chapter exists and user owns it
        chapter = None;
        for c in [-->(`?Chapter)] {
            if c.id == self.chapter_id and c.created_by == self.user_email {
                chapter = c;
                break;
            }
        }
        
        if not chapter {
            report {"success": false, "error": "Chapter not found or unauthorized"};
            return;
        }
        
        quiz_id = str(uuid.uuid4());
        now = now_iso();
        
        quiz = here ++> Quiz(
            id = quiz_id,
            chapter_id = self.chapter_id,
            title = self.title,
            questions = self.questions,
            created_at = now,
            is_active = true
        );
        
        # Connect quiz to chapter
        chapter +>:HasQuiz:+> quiz;
        
        report {
            "success": True,
            "quiz": {
                "id": quiz.id,
                "chapter_id": quiz.chapter_id,
                "title": quiz.title,
                "questions": quiz.questions,
                "created_at": quiz.created_at,
                "is_active": quiz.is_active
            }
        };
    }
}

walker update_quiz {
    has id: str;
    has title: str;
    has questions: list;
    has is_active: bool;
    has user_email: str;
    
    can update with `root entry {
        # Find the quiz
        quiz = none;
        for q in [-->(`?Quiz)] {
            # Get chapter to check ownership
            chapter = none;
            for c in [-->(`?Chapter)] {
                if c.id == q.chapter_id and c.created_by == self.user_email {
                    chapter = c;
                    break;
                }
            }
            
            if chapter and q.id == self.id {
                quiz = q;
                break;
            }
        }
        
        if not quiz {
            report {"success": False, "error": "Quiz not found or unauthorized"};
            return;
        }
        
        quiz.title = self.title;
        quiz.questions = self.questions;
        quiz.is_active = self.is_active;
        
        report {"success": True};
    }
}

walker get_chapter_quiz {
    has chapter_id: str;
    has user_email: str;
    
    can get with `root entry {
        # Verify chapter exists and user owns it
        chapter = none;
        for c in [-->(`?Chapter)] {
            if c.id == self.chapter_id and c.created_by == self.user_email {
                chapter = c;
                break;
            }
        }
        
        if not chapter {
            report {"success": False, "error": "Chapter not found or unauthorized"};
            return;
        }
        
        # Find quiz for this chapter
        quiz = none;
        for q in [chapter --> Quiz ]{
            if q.is_active {
                quiz = q;
                break;
            }
        }
        
        if not quiz {
            report {"success": False, "error": "No quiz found for this chapter"};
            return;
        }
        
        report {
            "success": true,
            "quiz": {
                "id": quiz.id,
                "title": quiz.title,
                "questions": quiz.questions,
                "created_at": quiz.created_at
            }
        };
    }
}

# ============================================================================
# STUDENT ACCESS MANAGEMENT WALKERS
# ============================================================================

walker grant_student_access {
    has chapter_id: str;
    has student_email: str;
    has user_email: str;  # tutor's email
    
    can create with `root entry {
        # Verify chapter exists and user owns it
        chapter = none;
        for c in [-->(`?Chapter)] {
            if c.id == self.chapter_id and c.created_by == self.user_email {
                chapter = c;
                break;
            }
        }
        
        if not chapter {
            report {"success": False, "error": "Chapter not found or unauthorized"};
            return;
        }
        
        # Check if student exists
        student = none;
        for user in [-->(`?User)] {
            if user.email == self.student_email and user.role == "student" {
                student = user;
                break;
            }
        }
        
        if not student {
            report {"success": False, "error": "Student not found"};
            return;
        }
        
        # Check if access already exists
        existing_access = none;
        for access in [chapter--> StudentAccess] {
            if access.student_email == self.student_email {
                existing_access = access;
                break;
            }
        }
        
        if existing_access {
            report {"success": true, "message": "Student already has access"};
            return;
        }
        
        access_id = str(uuid.uuid4());
        now = now_iso();
        
        access = here ++> StudentAccess(
            id = access_id,
            chapter_id = self.chapter_id,
            student_email = self.student_email,
            granted_by = self.user_email,
            granted_at = now
        );
        
        # Connect access to chapter
        chapter +>:HasAccess:+> access;
        
        report {"success": true, "message": "Access granted successfully"};
    }
}

walker revoke_student_access {
    has chapter_id: str;
    has student_email: str;
    has user_email: str;  # tutor's email
    
    can delete with `root entry {
        # Verify chapter exists and user owns it
        chapter = none;
        for c in [-->(`?Chapter)] {
            if c.id == self.chapter_id and c.created_by == self.user_email {
                chapter = c;
                break;
            }
        }
        
        if not chapter {
            report {"success": False, "error": "Chapter not found or unauthorized"};
            return;
        }
        
        # Find and delete access
        access_deleted = False;
        for access in [chapter --> StudentAccess] {
            if access.student_email == self.student_email {
                access.destroy();
                access_deleted = true;
                break;
            }
        }
        
        if access_deleted {
            report {"success": true, "message": "Access revoked successfully"};
        } else {
            report {"success": False, "error": "Access not found"};
        }
    }
}

walker get_chapter_students {
    has chapter_id: str;
    has user_email: str;
    
    can list with `root entry {
        # Verify chapter exists and user owns it
        chapter = none;
        for c in [-->(`?Chapter)] {
            if c.id == self.chapter_id and c.created_by == self.user_email {
                chapter = c;
                break;
            }
        }
        
        if not chapter {
            report {"success": False, "error": "Chapter not found or unauthorized"};
            return;
        }
        
        students = [];
        for access in[chapter --> `StudentAccess] {
            # Get student details
            student = none;
            for user in [-->(`?User)] {
                if user.email == access.student_email {
                    student = user;
                    break;
                }
            }
            
            # Get student progress for this chapter
            progress = none;
            for p in [chapter --> `StudentProgress] {
                if p.student_email == access.student_email {
                    progress = p;
                    break;
                }
            }
            
            students.append({
                "email": access.student_email,
                "name": student.name if student else access.student_email,
                "granted_at": access.granted_at,
                "granted_by": access.granted_by,
                "progress": {
                    "view_count": progress.view_count if progress else 0,
                    "completed": progress.completed if progress else false,
                    "quiz_score": progress.quiz_score if progress else 0,
                    "last_viewed": progress.last_viewed if progress else null
                } if progress else null
            });
        }
        
        report {
            "success": True,
            "students": students
        };
    }
}

# ============================================================================
# STUDENT PROGRESS WALKERS
# ============================================================================

walker record_chapter_view {
    has chapter_id: str;
    has student_email: str;
    
    can update with `root entry {
        # Find the chapter
        chapter = none;
        for c in [-->(`?Chapter)] {
            if c.id == self.chapter_id {
                chapter = c;
                break;
            }
        }
        
        if not chapter {
            report {"success": false, "error": "Chapter not found"};
            return;
        }
        
        # Check if student has access
        has_access = false;
        for access in [chapter --> StudentAccess ]{
            if access.student_email == self.student_email {
                has_access = True;
                break;
            }
        }
        
        if not has_access {
            report {"success": false, "error": "Student does not have access"};
            return;
        }
        
        # Find or create progress record
        progress = none;
        for p in [chapter --> `StudentProgress ]{
            if p.student_email == self.student_email {
                progress = p;
                break;
            }
        }
        
        now = now_iso();
        
        if progress {
            # Update existing progress
            progress.view_count = progress.view_count + 1;
            progress.last_viewed = now;
            progress.updated_at = now;
        } else {
            # Create new progress record
            progress_id = str(uuid.uuid4());
            progress = here ++> StudentProgress(
                id = progress_id,
                student_email = self.student_email,
                chapter_id = self.chapter_id,
                view_count = 1,
                last_viewed = now,
                completed = false,
                quiz_score = 0.0,
                time_spent = 0,
                created_at = now,
                updated_at = now
            );
            
            # Connect progress to chapter
            chapter +>:HasProgress:+> progress;
        }
        
        report {"success": True};
    }
}

walker update_student_progress {
    has chapter_id: str;
    has student_email: str;
    has completed: bool = false;
    has quiz_score: float = 0.0;
    has time_spent: int = 0;  # in seconds
    
    can update with `root entry {
        # Find the chapter
        chapter = none;
        for c in [-->(`?Chapter)] {
            if c.id == self.chapter_id {
                chapter = c;
                break;
            }
        }
        
        if not chapter {
            report {"success": false, "error": "Chapter not found"};
            return;
        }
        
        # Find progress record
        progress = none;
        for p in [chapter --> `StudentProgress ]{
            if p.student_email == self.student_email {
                progress = p;
                break;
            }
        }
        
        if not progress {
            report {"success": false, "error": "Progress record not found"};
            return;
        }
        
        now = now_iso();
        
        # Update progress
        if self.completed {
            progress.completed = True;
        }
        
        if self.quiz_score > 0 {
            progress.quiz_score = self.quiz_score;
            progress.completed = True;  # Quiz completion counts as chapter completion
        }
        
        if self.time_spent > 0 {
            progress.time_spent = progress.time_spent + self.time_spent;
        }
        
        progress.updated_at = now;
        
        report {"success": True};
    }
}

walker get_student_progress {
    has student_email: str;
    
    can get with `root entry {
        # Get all progress records for this student
        all_progress = [];
        for progress in [-->(`?StudentProgress)] {
            if progress.student_email == self.student_email {
                all_progress.append(progress);
            }
        }
        
        # Calculate statistics
        total_chapters = 0;
        completed_chapters = 0;
        total_time_spent = 0;
        total_quiz_score = 0.0;
        quiz_count = 0;
        
        for progress in all_progress {
            total_chapters = total_chapters + 1;
            if progress.completed {
                completed_chapters = completed_chapters + 1;
            }
            total_time_spent = total_time_spent + progress.time_spent;
            if progress.quiz_score > 0 {
                total_quiz_score = total_quiz_score + progress.quiz_score;
                quiz_count = quiz_count + 1;
            }
        }
        
        avg_quiz_score = 0;
        if quiz_count > 0 {
            avg_quiz_score = (total_quiz_score / quiz_count) * 100;
        }
        
        completion_rate = 0;
        if total_chapters > 0 {
            completion_rate = (completed_chapters / total_chapters) * 100;
        }
        
        # Format time spent
        hours = Math.floor(total_time_spent / 3600);
        minutes = Math.floor((total_time_spent % 3600) / 60);

         progress_list = [];
        for p in all_progress {
            progress_list.append({
                "chapter_id": p.chapter_id,
                "view_count": p.view_count,
                "completed": p.completed,
                "quiz_score": p.quiz_score,
                "time_spent": p.time_spent,
                "last_viewed": p.last_viewed
            });
        }         
        
        report {
            "success": True,
            "stats": {
                "total_chapters": total_chapters,
                "completed_chapters": completed_chapters,
                "completion_rate": Math.round(completion_rate),
                "total_time_spent": total_time_spent,
                "time_spent_formatted": f"{hours}h {minutes}m",
                "avg_quiz_score": Math.round(avg_quiz_score),
                "quiz_count": quiz_count
            },
            "progress": progress_list
            };
        
    }
}

# ============================================================================
# STUDENT DASHBOARD WALKERS
# ============================================================================

walker get_student_available_content {
    has student_email: str;
    
    can get with `root entry {
        # Get all chapters this student can access
        accessible_chapters = [];
        
        for node  in [-->(`?Chapter)] {
            chapter = node ;
            # Check if student has access
            has_access = false;
            for access in [chapter --> `StudentAccess] {
                if access.student_email == self.student_email {
                    has_access = True;
                    break;
                }
            }
            
            if has_access and chapter.is_published {
                # Get book info
                book = none;
                for b in [-->(`?Book)] {
                    if b.id == chapter.book_id {
                        book = b;
                        break;
                    }
                }
                
                # Get student progress for this chapter
                progress = none;
                for p in [chapter --> `StudentProgress] {
                    if p.student_email == self.student_email {
                        progress = p;
                        break;
                    }
                }
                
                # Get quiz if exists
                quiz = none;
                for q in[ chapter --> `Quiz] {
                    if q.is_active {
                        quiz = q;
                        break;
                    }
                }
                
                accessible_chapters.append({
                    "id": chapter.id,
                    "book_id": chapter.book_id,
                    "book_title": book.title if book else "Unknown Book",
                    "book_color": book.color if book else "#7c3aed",
                    "title": chapter.title,
                    "description": chapter.description,
                    "order": chapter.order,
                    "content": chapter.content,
                    "progress": {
                        "view_count": progress.view_count if progress else 0,
                        "completed": progress.completed if progress else false,
                        "quiz_score": progress.quiz_score if progress else 0,
                        "last_viewed": progress.last_viewed if progress else null
                    } if progress else null,
                    "has_quiz": quiz != null
                });
            }
        }
        
        # Group by book
        books_map = {};
        for chapter in accessible_chapters {
            book_id = chapter.book_id;
            if book_id not in books_map {
                books_map[book_id] = {
                    "book": {
                        "id": book_id,
                        "title": chapter.book_title,
                        "color": chapter.book_color
                    },
                    "chapters": []
                };
            }
            books_map[book_id].chapters.append(chapter);
        }
        
        # Convert to list
        books_list = [];
        for book_data in books_map.values() {
            # Sort chapters by order
            book_data.chapters = book_data.chapters.sort(key="order");
            books_list.append(book_data);
        }
        
        report {
            "success": True,
            "books": books_list
        };
    }
}

walker get_chapter_for_student {
    has chapter_id: str;
    has student_email: str;
    
    can get with `root entry {
        # Find the chapter
        chapter = none;
        for c in [-->(`?Chapter)] {
            if c.id == self.chapter_id {
                chapter = c;
                break;
            }
        }
        
        if not chapter {
            report {"success": false, "error": "Chapter not found"};
            return;
        }
        
        # Check if student has access
        has_access = false;
        for access in [chapter --> `StudentAccess] {
            if access.student_email == self.student_email {
                has_access = True;
                break;
            }
        }
        
        if not has_access {
            report {"success": false, "error": "Access denied"};
            return;
        }
        
        # Get book info
        book = none;
        for b in [-->(`?Book)] {
            if b.id == chapter.book_id {
                book = b;
                break;
            }
        }
        
        # Get quiz if exists
        quiz = none;
        for q in [ chapter --> `Quiz] {
            if q.is_active {
                quiz = q;
                break;
            }
        }
        
        # Get student progress
        progress = none;
        for p in [chapter --> `StudentProgress] {
            if p.student_email == self.student_email {
                progress = p;
                break;
            }
        }
        
        # Record view (or update existing progress)
        spawn record_chapter_view({
            "chapter_id": self.chapter_id,
            "student_email": self.student_email
        });
        
        report {
            "success": True,
            "chapter": {
                "id": chapter.id,
                "book_id": chapter.book_id,
                "title": chapter.title,
                "description": chapter.description,
                "content": chapter.content,
                "order": chapter.order,
                "is_published": chapter.is_published
            },
            "book": {
                "id": book.id,
                "title": book.title,
                "color": book.color
            } if book else null,
            "quiz": {
                "id": quiz.id,
                "title": quiz.title,
                "questions": quiz.questions
            } if quiz else null,
            "progress": {
                "view_count": progress.view_count if progress else 0,
                "completed": progress.completed if progress else false,
                "quiz_score": progress.quiz_score if progress else 0,
                "last_viewed": progress.last_viewed if progress else null
            } if progress else null
        };
    }
}

walker submit_quiz_answers {
    has quiz_id: str;
    has student_email: str;
    has answers: list;  # list of answer indices
    
    can submit with `root entry {
        # Find the quiz
        quiz = none;
        for q in [-->(`?Quiz)] {
            if q.id == self.quiz_id {
                quiz = q;
                break;
            }
        }
        
        if not quiz {
            report {"success": false, "error": "Quiz not found"};
            return;
        }
        
        # Calculate score
        correct = 0;
        results = [];
        i = 0;
        for question in quiz.questions {
            student_answer = self.answers[i] if i < len(self.answers) else -1;
            is_correct = student_answer == question.correct_answer;
            
            if is_correct {
                correct = correct + 1;
            }
            
            results.append({
                "question": question.question,
                "student_answer": student_answer,
                "correct_answer": question.correct_answer,
                "is_correct": is_correct,
                "explanation": question.explanation if "explanation" in question else ""
            });
        }
        
        score = 0;
        if len(quiz.questions) > 0 {
            score = (correct / len(quiz.questions)) * 100;
        }
        
        # Update student progress
        spawn update_student_progress({
            "chapter_id": quiz.chapter_id,
            "student_email": self.student_email,
            "quiz_score": score / 100,  # Convert to decimal
            "completed": True
        });
        
        report {
            "success": True,
            "score": Math.round(score),
            "correct": correct,
            "total": len(quiz.questions),
            "results": results
        };
    }
}






















































