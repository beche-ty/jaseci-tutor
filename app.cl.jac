cl import from react {
    useState,
    useEffect
}
cl import from "@jac-client/utils" {
    Router,
    Routes,
    Route,
    Link,
    Navigate,
    useNavigate,
    useLocation,
    jacSignup,
    jacLogin,
    jacLogout,
    jacIsLoggedIn
}



cl {
    # ============================================================================
    # LANDING PAGE
    # ============================================================================
        def LandingPage -> any {
                return (
                    <div style={{"minHeight": "100vh", "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}}>
                        <div style={{"maxWidth": "1200px", "margin": "0 auto", "padding": "20px"}}>
                            <header style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "padding": "20px 0"}}>
                                <div style={{"fontSize": "24px", "fontWeight": "bold", "color": "white"}}>
                                    Jaseci Learning Platform
                                </div>
                                <div>
                                    <a href="/login" style={{"color": "white", "marginRight": "20px", "textDecoration": "none"}}>
                                        Login
                                    </a>
                                    <a href="/register" style={{"color": "white", "textDecoration": "none"}}>
                                        Sign Up
                                    </a>
                                </div>
                            </header>
                            
                            <main style={{"textAlign": "center", "padding": "100px 20px"}}>
                                <h1 style={{"fontSize": "48px", "color": "white", "marginBottom": "20px"}}>
                                    Welcome to LearnPlatform
                                </h1>
                                <p style={{"fontSize": "20px", "color": "rgba(255, 255, 255, 0.8)", "maxWidth": "600px", "margin": "0 auto 40px"}}>
                                    The ultimate platform for tutors and students to create, share, and learn from interactive educational content.
                                </p>
                                <div style={{"display": "flex", "justifyContent": "center", "gap": "20px"}}>
                                    <a href="/register" style={{
                                        "padding": "15px 30px",
                                        "background": "white",
                                        "color": "#667eea",
                                        "borderRadius": "30px",
                                        "textDecoration": "none",
                                        "fontWeight": "bold",
                                        "fontSize": "16px"
                                    }}>
                                        Get Started Free
                                    </a>
                                    <a href="/login" style={{
                                        "padding": "15px 30px",
                                        "background": "transparent",
                                        "color": "white",
                                        "border": "2px solid white",
                                        "borderRadius": "30px",
                                        "textDecoration": "none",
                                        "fontWeight": "bold",
                                        "fontSize": "16px"
                                    }}>
                                        Try Demo
                                    </a>
                                </div>
                            </main>
                            
                            <section style={{"background": "white", "borderRadius": "10px", "padding": "60px 40px", "marginTop": "60px"}}>
                                <h2 style={{"textAlign": "center", "marginBottom": "40px", "color": "#333"}}>
                                    Why Choose LearnPlatform?
                                </h2>
                                <div style={{"display": "grid", "gridTemplateColumns": "repeat(3, 1fr)", "gap": "30px"}}>
                                    <div style={{"textAlign": "center"}}>
                                        <div style={{"fontSize": "40px", "marginBottom": "20px"}}>📚</div>
                                        <h3 style={{"color": "#333"}}>Interactive Content</h3>
                                        <p>Create engaging lessons with multimedia support</p>
                                    </div>
                                    <div style={{"textAlign": "center"}}>
                                        <div style={{"fontSize": "40px", "marginBottom": "20px"}}>👨‍🏫</div>
                                        <h3 style={{"color": "#333"}}>For Tutors</h3>
                                        <p>Build and manage your course materials easily</p>
                                    </div>
                                    <div style={{"textAlign": "center"}}>
                                        <div style={{"fontSize": "40px", "marginBottom": "20px"}}>🎓</div>
                                        <h3 style={{"color": "#333"}}>For Students</h3>
                                        <p>Learn at your own pace with structured content</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
        );
    }



    # ============================================================================
    # TUTOR DASHBOARD COMPONENTS
    # ============================================================================
    
    # Tutor Navigation Bar
    def TutorNavigation -> any {
        [userInfo, setUserInfo] = useState(null);
        navigate = useNavigate();

        useEffect(lambda -> None {
            async def loadUserInfo() -> None {
                currentSessionId = localStorage.getItem("session_id");
                if currentSessionId {
                    result = root spawn get_session_user(session_id=currentSessionId);
                    if result.reports and result.reports.length > 0 {
                        setUserInfo(result.reports[0]);
                    }
                }
            }
            loadUserInfo();
        }, []);

        def handleLogout(e: any) -> None {
            e.preventDefault();
            jacLogout();
            localStorage.removeItem("session_id");
            localStorage.removeItem("user_role");
            localStorage.removeItem("current_user");
            navigate("/login");
        }

        if not userInfo {
            return <div>Loading...</div>;
        }

        return <nav style={{
                "padding": "12px 24px",
                "background": "#7c3aed",
                "color": "#ffffff",
                "display": "flex",
                "justifyContent": "space-between",
                "alignItems": "center"
            }}>
            <div style={{"fontWeight": "600", "fontSize": "18px"}}>
                Jac Tutor Dashboard
            </div>
            <div style={{"display": "flex", "gap": "16px", "alignItems": "center"}}>
                <span>Welcome, Tutor {userInfo.name}</span>
                <Link to="/tutor/dashboard" style={{"color": "#ffffff", "textDecoration": "none"}}>
                    Dashboard
                </Link>
                <Link to="/tutor/lessons" style={{"color": "#ffffff", "textDecoration": "none"}}>
                    Manage Lessons
                </Link>
                <Link to="/tutor/students" style={{"color": "#ffffff", "textDecoration": "none"}}>
                    Students
                </Link>
                <button onClick={handleLogout} style={{
                        "background": "none",
                        "color": "#ffffff",
                        "border": "1px solid #ffffff",
                        "padding": "2px 10px",
                        "borderRadius": "4px",
                        "cursor": "pointer"
                    }}>
                    Logout
                </button>
            </div>
        </nav>;
    }

    # Tutor Sidebar
    def TutorSidebar -> any {
        navigate = useNavigate();
        
        def handleNavigation(path: str) -> None {
            navigate(path);
        }

        return <div style={{
                "width": "250px",
                "background": "#f8fafc",
                "borderRight": "1px solid #e5e7eb",
                "padding": "20px",
                "height": "calc(100vh - 64px)"
            }}>
            <h3 style={{"color": "#374151", "marginBottom": "20px"}}>Tutor Menu</h3>
            <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                <button onClick={lambda -> None { handleNavigation("/tutor/dashboard"); }} style={{
                        "padding": "10px 15px",
                        "background": "#ede9fe",
                        "color": "#7c3aed",
                        "border": "none",
                        "borderRadius": "6px",
                        "cursor": "pointer",
                        "textAlign": "left",
                        "fontWeight": "500"
                    }}>
                     Overview
                </button>
                <button onClick={lambda -> None { handleNavigation("/tutor/lessons"); }} style={{
                        "padding": "10px 15px",
                        "background": "#f0f9ff",
                        "color": "#0369a1",
                        "border": "none",
                        "borderRadius": "6px",
                        "cursor": "pointer",
                        "textAlign": "left",
                        "fontWeight": "500"
                    }}>
                    📚 Lessons
                </button>
                <button onClick={lambda -> None { handleNavigation("/tutor/students"); }} style={{
                        "padding": "10px 15px",
                        "background": "#fef3c7",
                        "color": "#92400e",
                        "border": "none",
                        "borderRadius": "6px",
                        "cursor": "pointer",
                        "textAlign": "left",
                        "fontWeight": "500"
                    }}>
                     Students
                </button>
                <button onClick={lambda -> None { handleNavigation("/tutor/quizzes"); }} style={{
                        "padding": "10px 15px",
                        "background": "#d1fae5",
                        "color": "#065f46",
                        "border": "none",
                        "borderRadius": "6px",
                        "cursor": "pointer",
                        "textAlign": "left",
                        "fontWeight": "500"
                    }}>
                    Quizzes
                </button>
                <button onClick={lambda -> None { handleNavigation("/tutor/analytics"); }} style={{
                        "padding": "10px 15px",
                        "background": "#fce7f3",
                        "color": "#9d174d",
                        "border": "none",
                        "borderRadius": "6px",
                        "cursor": "pointer",
                        "textAlign": "left",
                        "fontWeight": "500"
                    }}>
                    Analytics
                </button>
                <button onClick={lambda -> None { handleNavigation("/tutor/onlinetutor"); }} style={{
                        "padding": "10px 15px",
                        "background": "#fce7f3",
                        "color": "#9d174d",
                        "border": "none",
                        "borderRadius": "6px",
                        "cursor": "pointer",
                        "textAlign": "left",
                        "fontWeight": "500"
                    }}>
                     Online Class
                </button>
            </div>
        </div>;
    }

    # Tutor Dashboard Main Page 
    def TutorDashboardPage -> any {
        if not jacIsLoggedIn() {
            return <Navigate to="/login" />;
        }

        [userInfo, setUserInfo] = useState(null);
        [stats, setStats] = useState({
            "totalLessons": 0,
            "totalStudents": 0,
            "activeQuizzes": 0,
            "avgScore": 0
        });
        [recentActivity, setRecentActivity] = useState([]);
        [loading, setLoading] = useState(true);

        # Load user info
        useEffect(lambda -> None {
            async def loadUserInfo() -> None {
                currentSessionId = localStorage.getItem("session_id");
                if currentSessionId {
                    result = root spawn get_session_user(session_id=currentSessionId);
                    if result.reports and result.reports.length > 0 {
                        userData = result.reports[0];
                        setUserInfo(userData);
                        
                        # Check if user is actually a tutor
                        if userData.role != "tutor" {
                            # Redirect to student dashboard
                            window.location.href = "/dashboard";
                        }
                    }
                }
            }
            loadUserInfo();
        }, []);

        # Load stats and activity
        useEffect(lambda -> None {
            async def loadData() -> None {
                if userInfo and userInfo.email {
                    # Load tutor stats using new walker
                    statsResult = root spawn get_tutor_stats(user_email=userInfo.email);
                    if statsResult.reports and statsResult.reports.length > 0 {
                        statsData = statsResult.reports[0];
                        setStats({
                            "totalLessons": statsData.total_lessons,
                            "totalStudents": statsData.total_students,
                            "activeQuizzes": statsData.active_quizzes,
                            "avgScore": statsData.avg_score
                        });
                    }
                    
                    # Load recent activity using new walker
                    activityResult = root spawn get_tutor_recent_activity(user_email=userInfo.email);
                    if activityResult.reports and activityResult.reports.length > 0 {
                        setRecentActivity(activityResult.reports[0]);
                    }
                    
                    setLoading(false);
                }
            }
            loadData();
        }, [userInfo]);

        # Handle loading state
        if loading or not userInfo {
            return <div style={{"minHeight": "100vh", "backgroundColor": "#f9fafb"}}>
                <TutorNavigation />
                <div style={{"display": "flex"}}>
                    <TutorSidebar />
                    <div style={{"flex": "1", "padding": "30px"}}>
                        <h1 style={{"color": "#1f2937", "marginBottom": "30px"}}>Loading Dashboard...</h1>
                        <div>Please wait while we load your data...</div>
                    </div>
                </div>
            </div>;
        }

        return <div style={{"minHeight": "100vh", "backgroundColor": "#f9fafb"}}>
            <TutorNavigation />
            <div style={{"display": "flex"}}>
                <TutorSidebar />
                <div style={{"flex": "1", "padding": "30px"}}>
                    <h1 style={{"color": "#1f2937", "marginBottom": "30px"}}>Tutor Dashboard Overview</h1>
                    
                    # Stats Cards
                    <div style={{"display": "grid", "gridTemplateColumns": "repeat(2, 1fr)", "gap": "20px", "marginBottom": "30px"}}>
                        <div style={{"background": "white", "padding": "20px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}>
                            <h3 style={{"color": "#6b7280", "marginBottom": "10px"}}>Total Lessons</h3>
                            <div style={{"fontSize": "32px", "fontWeight": "bold", "color": "#7c3aed"}}>{stats.totalLessons}</div>
                        </div>
                        <div style={{"background": "white", "padding": "20px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}>
                            <h3 style={{"color": "#6b7280", "marginBottom": "10px"}}>Total Students</h3>
                            <div style={{"fontSize": "32px", "fontWeight": "bold", "color": "#10b981"}}>{stats.totalStudents}</div>
                        </div>
                        <div style={{"background": "white", "padding": "20px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}>
                            <h3 style={{"color": "#6b7280", "marginBottom": "10px"}}>Active Quizzes</h3>
                            <div style={{"fontSize": "32px", "fontWeight": "bold", "color": "#f59e0b"}}>{stats.activeQuizzes}</div>
                        </div>
                        <div style={{"background": "white", "padding": "20px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}>
                            <h3 style={{"color": "#6b7280", "marginBottom": "10px"}}>Avg. Student Score</h3>
                            <div style={{"fontSize": "32px", "fontWeight": "bold", "color": "#ef4444"}}>{stats.avgScore}%</div>
                        </div>
                    </div>

                    # Recent Activity (UPDATED WITH REAL DATA) - FIXED SYNTAX
                    <div style={{"background": "white", "padding": "25px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}>
                        <h2 style={{"color": "#1f2937", "marginBottom": "20px"}}>Recent Activity</h2>
                        <div style={{"color": "#6b7280"}}>
                            {recentActivity.length > 0 and recentActivity.map(lambda activity: any -> any {
                                return <p key={activity.timestamp}>
                                    • {activity.message}
                                </p>;
                            })}
                            {recentActivity.length == 0 and <p>No recent activity</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }

    # Tutor Lessons Management Page
    def TutorLessonsPage -> any {
        [books, setBooks] = useState([]);
        [chapters, setChapters] = useState({});
        [loading, setLoading] = useState(true);
        [activeBook, setActiveBook] = useState(null);
        [showBookModal, setShowBookModal] = useState(false);
        [showChapterModal, setShowChapterModal] = useState(false);
        [currentBook, setCurrentBook] = useState(null);
        [currentChapter, setCurrentChapter] = useState(null);
        
        [bookForm, setBookForm] = useState({
            "title": "",
            "description": "",
            "subject": "",
            "color": "#7c3aed"
        });
        
        [chapterForm, setChapterForm] = useState({
            "title": "",
            "description": "",
            "order": 1
        });

         def getBookTitle(book:any) {
            if not book {
                return "Untitled Book";
            }
            return book.title or "Untitled Book";
        }

        
        def getBookDescription(book:any) {
            if not book {
                return "";
            }
            return book.description or "No desc ";
        }

        bookColors = ["#7c3aed", "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

            useEffect(lambda -> None {
                async def loadBooksAndChapters() -> None {
                    setLoading(True);
                    # Get user email from localStorage
                    userEmail = localStorage.getItem("user_email");
                    console.log("User email from storage:", userEmail);
                    
                    if not userEmail {
                        console.error("No user email found. User might not be logged in.");
                        setLoading(false);
                        return;
                    }

                    # Load books with user_email parameter
                    booksResult = await root spawn list_books(user_email= userEmail);
                    console.log("Books result:", booksResult);
                    
                    if booksResult.error {
                        console.error("Error loading books:", booksResult.error);
                        setLoading(False);
                        return;
                    }
                    
                    
                    if booksResult.reports and booksResult.reports.length > 0 {
                        booksData = booksResult.reports[0]  || [];
                        console.log("Books data:", booksData,  "Is array:", Array.isArray(booksData));
                        
                        # Add default values for missing properties
                        updatedBooksData = [];
                        for book in booksData {
                            # Ensure book is not null
                            if not book {
                                continue;
                            }
                            
                            updatedBook = {};
                            # Copy all existing properties
                            bookKeys = Object.keys(book);
                            for key in bookKeys {
                             updatedBook[key] = book[key];}
                            
                            # Ensure required properties exist
                            if not updatedBook.title {
                                updatedBook.title = "Untitled Book";
                            }
                            if not updatedBook.color {
                                updatedBook.color = bookColors[Math.floor(Math.random() * bookColors.length)];
                            }
                            if not updatedBook.description {
                                updatedBook.description = "";
                            }
                            if not updatedBook.subject {
                                updatedBook.subject = "";
                            }
                            updatedBooksData.push(updatedBook);
                        }
                        
                        console.log("Final books array:", updatedBooksData);
                        setBooks(updatedBooksData);
                        
                        if updatedBooksData.length > 0 {
                            setActiveBook(updatedBooksData[0].id);
                            
                            # Load chapters for each book
                            chaptersMap = {};
                            for book in updatedBooksData {

                                chaptersResult = await root spawn list_chapters(user_email = userEmail ,book_id = book.id);
                                if chaptersResult.report and chaptersResult.report.length > 0 {
                                    chaptersMap[book.id] = chaptersResult.report[0] || [];
                                }
                                else{}
                            }
                            setChapters(chaptersMap);
                        } else {
                            # No books found after processing
                            setBooks([]);
                            setChapters({});
                        }
                    } else {
                        console.log("No books found for user:", userEmail);
                        setBooks([]);
                        setChapters({});
                    }
                    setLoading(false);
                }
                loadBooksAndChapters();
            }, []);


        def handleAddBook  {
            setShowBookModal(true);
            setBookForm({
                "title": "",
                "description": "",
                "subject": "",
                "color": bookColors[Math.floor(Math.random() * bookColors.length)]
            });
        }

        def handleAddChapter ( bookId:str) -> None {
            # Find the book
            foundBook = null;
            for book in books {
                if book.id == bookId {
                    foundBook = book;
                    break;
                }
            }
            setCurrentBook(foundBook);
            
            # Calculate next order
            nextOrder = 1;
            if chapters[bookId] {
                nextOrder = chapters[bookId].length + 1;
            }
            
            setChapterForm({
                "title": "",
                "description": "",
                "order": nextOrder
            });
            setShowChapterModal(true);
        }

        def handleEditBook ( book:str )-> None {
            if not book {
            return;
            }
            setCurrentBook(book);
            setBookForm({
                "title": book.title or "Untitled Book",
                "description": book.description or "",
                "subject": book.subject or "",
                "color": book.color or bookColors[0]
            });
            setShowBookModal(true);
        }

        def handleEditChapter (bookId:str, chapter:str )-> None {
            if not chapter {
            return;
            }

            # Find the book
            foundBook = null;
            for book in books {
                if book.id == bookId {
                    foundBook = book;
                    break;
                }
            }
            setCurrentBook(foundBook);
            setCurrentChapter(chapter);
            setChapterForm({
                "title": chapter.title or "",
                "description": chapter.description or "",
                "order": chapter.order or 1
            });
            setShowChapterModal(true);
        }

        def handleViewChapter( chapter:str )-> None {
            window.location.href = "/tutor/chapter/{chapter.id}";
        }

        async def saveBook() {
            if not bookForm.title.trim() {
                alert("Please enter a book title");
                return;
            }
            userEmail = localStorage.getItem("user_email");
                console.log("User email from storage:", userEmail);
                    
            if not userEmail {
                console.error("No user email found. User might not be logged in.");
                # setLoading(false);
                return;
                }
            
            bookData = {
                 
                "title": bookForm.title,
                "description": bookForm.description,
                "subject": bookForm.subject,
                "color": bookForm.color
            };
            
            if currentBook and not showChapterModal {
                bookData["id"] = currentBook.id;
                result = await root spawn update_book(bookData);
                
                if result and result.success {
                    # Update local state
                    setBooks(books.map(lambda book: any -> any {
                        if book.id == currentBook.id {
                            return {
                                "id": book.id,
                                "title": bookData.title,
                                "description": bookData.description,
                                "subject": bookData.subject,
                                "color": bookData.color,
                                "created_by": book.created_by,
                                "created_at": book.created_at,
                                "updated_at": std.time_now()
                            };
                        }
                        return book;
                        console.log("Book" ,book);
                    }));
                }
            } else {
                # Create new book
                result = await root spawn create_book(
                    user_email = userEmail,
                    title = bookData.title,
                    description = bookData.description,
                    subject = bookData.subject,
                    color = bookData.color
                );
                
                if result and result.reports and result.reports.length > 0 {
                    newBook = result.reports[0];
                    
                    # Add to books array
                    newBooksArray = [];
                    for book in books {
                        newBooksArray.append(book);
                    }
                    newBooksArray.append(newBook);
                    setBooks(newBooksArray);
                    
                    setActiveBook(newBook.id);
                    
                    # Add to chapters object
                    newChaptersObject = {};
                    for key in chapters {
                        newChaptersObject[key] = chapters[key];
                    }
                    newChaptersObject[newBook.id] = [];
                    setChapters(newChaptersObject);
                }
            }
            
            setShowBookModal(false);
            setCurrentBook(null);
        }



        async def saveChapter()  {
            
            if not chapterForm.title.trim() {
                alert("Please enter a chapter title");
                return;
            }
            
            if not currentBook {
                alert("No book selected");
                return;
            }
            userEmail = localStorage.getItem("user_email");
            console.log("User email from storage:", userEmail);
                    
            if not userEmail {
                console.error("No user email found. User might not be logged in.");
                # setLoading(false);
                return;
            }
            chapterData = {
                "bookId": currentBook.id,
                "title": chapterForm.title,
                "description": chapterForm.description,
                "order": chapterForm.order
            };         
            if currentChapter {
                chapterData["id"] = currentChapter.id;
                result = await root spawn update_chapter(
                    user_email = userEmail,
                    book_id = chapterData.bookId,
                    title = chapterData.title,
                    description = chapterData.description,
                    order = chapterData.order);

                if result and result.success {
                    # Update local state
                    newChapters = {};
                    for key in chapters {
                        newChapters[key] = chapters[key];
                    }
                    
                    if currentBook.id in chapters {
                        updatedChaptersList = [];
                        for chapter in chapters[currentBook.id] {
                            if chapter.id == currentChapter.id {
                                updatedChapter = {
                                    "id": chapter.id,
                                    "book_id": chapter.book_id,
                                    "title": chapterData.title,
                                    "description": chapterData.description,
                                    "order": chapterData.order,
                                    "content": chapter.content or "",
                                    "created_by": chapter.created_by,
                                    "created_at": chapter.created_at,
                                    "updated_at": std.time_now(),
                                    "is_published": chapter.is_published,
                                    "student_access": chapter.student_access
                                };
                                updatedChaptersList.append(updatedChapter);
                            } else {
                                updatedChaptersList.append(chapter);
                            }
                        }
                        newChapters[currentBook.id] = updatedChaptersList;
                    }
                    setChapters(newChapters);
                }
            } else {
                result = await root spawn create_chapter(
                    user_email = userEmail,
                    book_id = chapterData.bookId,
                    title = chapterData.title,
                    description = chapterData.description,
                    order = chapterData.order);
                
                if result and result.reports and result.reports.length > 0 {
                    newChapter = result.reports[0];
                    
                    newChapters = {};
                    for key in chapters {
                        newChapters[key] = chapters[key];
                    }
                    
                    currentChapters = [];
                    if currentBook.id in chapters {
                        for chapter in chapters[currentBook.id] {
                            currentChapters.append(chapter);
                        }
                    }
                    
                    currentChapters.append(newChapter);
                    newChapters[currentBook.id] = currentChapters;
                    setChapters(newChapters);
                }
            }
            
            setShowChapterModal(false);
            setCurrentChapter(null);
            setCurrentBook(null);
        }

        async def deleteBook(bookId:str) {
            if confirm("Are you sure you want to delete this book and all its chapters?") {
                result = await root spawn delete_book({"id": bookId});
                if result and result.success {
                    setBooks(books.filter(lambda book: any -> any {
                        return book.id != bookId;
                    }));
                    
                    newChapters = {};
                    for key in chapters {
                        if key != bookId {
                            newChapters[key] = chapters[key];
                        }
                    }
                    setChapters(newChapters);
                    
                    if activeBook == bookId and books.length > 0 {
                        setActiveBook(books[0].id);
                    }
                    
                    alert("Book deleted successfully");
                }
            }
        }

        async def deleteChapter(bookId:str, chapterId:str)  {
            if confirm("Are you sure you want to delete this chapter?") {
                result = await root spawn delete_chapter({"id": chapterId});
                if result and result.success {
                    newChapters = {};
                    for key in chapters {
                        if key == bookId {
                            filteredChapters = [];
                            for chapter in chapters[key] {
                                if chapter.id != chapterId {
                                    filteredChapters.append(chapter);
                                }
                            }
                            newChapters[key] = filteredChapters;
                        } else {
                            newChapters[key] = chapters[key];
                        }
                    }
                    setChapters(newChapters);
                    alert("Chapter deleted successfully");
                }
            }
        }

        async def reorderChapters(bookId:str, fromIndex:str, toIndex:str) {
            bookChapters = [];
            if bookId in chapters {
                for chapter in chapters[bookId] {
                    bookChapters.append(chapter);
                }
            }
            
            if bookChapters.length == 0 or fromIndex == toIndex {
                return;
            }
            
            # Create reordered list
            newChaptersList = [];
            
            if fromIndex < toIndex {
                for i in range(bookChapters.length) {
                    if i == fromIndex {
                        continue;
                    }
                    if i == toIndex {
                        newChaptersList.append(bookChapters[fromIndex]);
                    }
                    newChaptersList.append(bookChapters[i]);
                }
                if toIndex == bookChapters.length - 1 {
                    newChaptersList.append(bookChapters[fromIndex]);
                }
            } else {
                for i in range(bookChapters.length) {
                    if i == toIndex {
                        newChaptersList.append(bookChapters[fromIndex]);
                    }
                    if i != fromIndex {
                        newChaptersList.append(bookChapters[i]);
                    }
                }
            }
            
            # Update order numbers
            updatedChaptersList = [];
            
            for i in range(newChaptersList.length) {
                chapter = newChaptersList[i];
                updatedChapter = {
                    "id": chapter.id,
                    "book_id": chapter.book_id,
                    "title": chapter.title,
                    "description": chapter.description,
                    "order": i + 1,
                    "content": chapter.content or "",
                    "created_by": chapter.created_by,
                    "created_at": chapter.created_at,
                    "updated_at": std.time_now(),
                    "is_published": chapter.is_published,
                    "student_access": chapter.student_access
                };
                updatedChaptersList.append(updatedChapter);
            }
            
            # Update state
            newChaptersState = {};
            for key in chapters {
                if key == bookId {
                    newChaptersState[key] = updatedChaptersList;
                } else {
                    newChaptersState[key] = chapters[key];
                }
            }
            setChapters(newChaptersState);
            
            # Update backend
            for chapter in updatedChaptersList {
                await root spawn update_chapter_order({
                    "id": chapter.id,
                    "order": chapter.order
                });
            }
        }

        # Helper functions
        def getChapterCount (bookId:str ){
            count = 0;
            if chapters[bookId] {
                count = chapters[bookId].length;
            }
            return str(count) + " chapters";
        }

        def renderBookDescription(book:str ){
            if not book {
                return <p style={{"color": "#6b7280", "fontSize": "12px", "margin": "0", "marginBottom": "8px", "height": "1em"}}>
                    &nbsp;
                </p>;
            }
            
            # Use the getBookDescription helper function
            descText = getBookDescription(book);
            
            # Check if description exists and is not empty
            if descText.trim() != "" {
                if descText.length > 60 {
                    descText = descText[0:60] + "...";
                }
                return <p style={{"color": "#6b7280", "fontSize": "12px", "margin": "0", "marginBottom": "8px"}}>
                    {descText}
                </p>;
            } else {
                return <p style={{"color": "#6b7280", "fontSize": "12px", "margin": "0", "marginBottom": "8px", "height": "1em"}}>
                    &nbsp;
                </p>;
            }
        }

        def updateBookFormField ( field:str, value:str) {
            newForm = {};
            for key in bookForm {
                newForm[key] = bookForm[key];
            }
            newForm[field] = value;
            setBookForm(newForm);
        }

        # Compute data for rendering
        activeBookData = null;
        if activeBook {
            for book in books {
                if book.id == activeBook {
                    activeBookData = book;
                    break;
                }
            }
        }

        activeBookChapters = [];
        if activeBook and chapters[activeBook] {
            activeBookChapters = chapters[activeBook];
        }

        sortedChapters = [];
        if activeBookChapters.length > 0 {
            for chapter in activeBookChapters {
                sortedChapters.append(chapter);
            }
            for i in range(sortedChapters.length) {
                for j in range(i + 1, sortedChapters.length) {
                    orderI = sortedChapters[i].order or 0;
                    orderJ = sortedChapters[j].order or 0;
                    if orderI > orderJ {
                        temp = sortedChapters[i];
                        sortedChapters[i] = sortedChapters[j];
                        sortedChapters[j] = temp;
                    }
                }
            }
        }
        def getChapterModalTitleText() {
            if currentChapter {
                return "Edit Chapter";
            } else {
                return "Add New Chapter";
            }
        }
        def getChapterModalTitle() {
            if currentBook {
                return "in " + getBookTitle(currentBook);
            }
            return "";
        }
        def getChapterButtonText() {
            if currentChapter {
                return "Update Chapter";
            } else {
                return "Create Chapter";
            }
        }
       def renderBooksList() {
            items = [];
            for book in books {
                if not book {
                    continue;
                }
                
                backgroundValue = "transparent";
                borderValue = "2px solid transparent";
                boxShadowValue = "none";

                if activeBook == book.id {
                    backgroundValue = "white";
                    borderValue = "2px solid " + (book.color or "#7c3aed");
                    boxShadowValue = "0 2px 8px rgba(0,0,0,0.1)";
                }
                
                # Create wrapper functions for the click handlers
                def handleBookClick() {
                    setActiveBook(book.id);
                }
                
                def handleEditClick(e:any) {
                    e.stopPropagation();
                    handleEditBook(book);
                }
                
                def handleDeleteClick(e:any) {
                    e.stopPropagation();
                    deleteBook(book.id);
                }
                
                item = <div key={book.id}
                    style={{
                        "padding": "15px",
                        "background": backgroundValue,
                        "borderRadius": "8px",
                        "border": borderValue,
                        "cursor": "pointer",
                        "boxShadow": boxShadowValue,
                        "transition": "all 0.2s"
                    }}
                    onClick={handleBookClick}>
                    <div style={{"display": "flex", "alignItems": "center", "marginBottom": "8px"}}>
                        <div style={{
                            "width": "12px",
                            "height": "12px",
                            "borderRadius": "50%",
                            "background": book.color or "#7c3aed",
                            "marginRight": "10px"
                        }} />
                        <h4 style={{"color": "#1f2937", "margin": "0", "flex": "1"}}>{getBookTitle(book)}</h4>
                    </div>
                     {renderBookDescription(book)}
                    <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                        <span style={{"color": "#9ca3af", "fontSize": "11px"}}>
                            # {getChapterCount(book.id)}
                        </span>
                        <div style={{"display": "flex", "gap": "5px"}}>
                            <button style={{
                                "padding": "2px 6px",
                                "background": "transparent",
                                "color": "#3b82f6",
                                "border": "1px solid #3b82f6",
                                "borderRadius": "4px",
                                "cursor": "pointer",
                                "fontSize": "11px"
                            }}
                            onClick={handleEditClick}>
                                Edit
                            </button>
                            <button style={{
                                "padding": "2px 6px",
                                "background": "transparent",
                                "color": "#ef4444",
                                "border": "1px solid #ef4444",
                                "borderRadius": "4px",
                                "cursor": "pointer",
                                "fontSize": "11px"
                            }}
                            onClick={handleDeleteClick}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>;
                
                items.push(item);
            }
            return items;
        }

        

        # Loading state
        if loading {
            return <div style={{"minHeight": "100vh", "backgroundColor": "#f9fafb"}}>
                <TutorNavigation />
                <div style={{"display": "flex"}}>
                    <TutorSidebar />
                    <div style={{"flex": "1", "padding": "30px"}}>
                        <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "30px"}}>
                            <h1 style={{"color": "#1f2937"}}>Manage Books & Chapters</h1>
                            <button style={{
                                    "padding": "10px 20px",
                                    "background": "#7c3aed",
                                    "color": "white",
                                    "border": "none",
                                    "borderRadius": "6px",
                                    "cursor": "pointer"
                                }}
                                onClick={handleAddBook}>
                                + Add New Book
                            </button>
                        </div>
                        <div>Loading books and chapters...</div>
                    </div>
                </div>
            </div>;
        }

        # Main return
        return <div style={{"minHeight": "100vh", "backgroundColor": "#f9fafb"}}>
            <TutorNavigation />
            <div style={{"display": "flex"}}>
                <TutorSidebar />
                <div style={{"flex": "1", "padding": "30px"}}>
                    <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "30px"}}>
                        <h1 style={{"color": "#1f2937"}}>Manage Books & Chapters</h1>
                        <button style={{
                                "padding": "10px 20px",
                                "background": "#7c3aed",
                                "color": "white",
                                "border": "none",
                                "borderRadius": "6px",
                                "cursor": "pointer"
                            }}
                            onClick={handleAddBook}>
                            + Add New Book
                        </button>
                    </div>

                    {(
                        <div style={{
                            "textAlign": "center",
                            "padding": "50px",
                            "background": "white",
                            "borderRadius": "10px",
                            "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
                        }}>
                            <div style={{"fontSize": "48px", "marginBottom": "20px", "color": "#d1d5db"}}>
                                📚
                            </div>
                            <h3 style={{"color": "#4b5563", "marginBottom": "10px"}}>No books yet</h3>
                            <p style={{"color": "#6b7280", "marginBottom": "20px"}}>
                                Create your first book to organize your lessons into chapters.
                            </p>
                            <button style={{
                                "padding": "10px 20px",
                                "background": "#7c3aed",
                                "color": "white",
                                "border": "none",
                                "borderRadius": "6px",
                                "cursor": "pointer"
                            }}
                            onClick={handleAddBook}>
                                Create Your First Book
                            </button>
                        </div>
                    ) if books.length == 0 else (
                        <div style={{"display": "flex", "gap": "30px"}}>
                            # {/* Left sidebar */}
                            <div style={{"width": "250px", "flexShrink": "0"}}>
                                <div style={{"marginBottom": "20px"}}>
                                    <h3 style={{"color": "#374151", "marginBottom": "15px"}}>Books</h3>
                                    <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
                                         {renderBooksList()}  
                                        <p>lessons </p>                 
                                    </div>
                                </div>
                            </div>
                            # {/* Right content */}
                            <div style={{"flex": "1"}}>
                                {(
                                    <div style={{
                                        "textAlign": "center",
                                        "padding": "50px",
                                        "background": "white",
                                        "borderRadius": "10px",
                                        "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
                                    }}>
                                        <div style={{"fontSize": "48px", "marginBottom": "20px", "color": "#d1d5db"}}>
                                            📚
                                        </div>
                                        <h3 style={{"color": "#4b5563", "marginBottom": "10px"}}>Select a Book</h3>
                                        <p style={{"color": "#6b7280"}}>
                                            Choose a book from the sidebar to view and manage its chapters.
                                        </p>
                                    </div>
                                ) if not activeBookData else (
                                    <div>
                                        <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "20px"}}>
                                            <div>
                                                <h2 style={{"color": "#1f2937", "marginBottom": "5px"}}>
                                                    {getBookTitle(activeBookData)}
                                                </h2>
                                                {(
                                                    <p style={{"color": "#6b7280", "fontSize": "14px"}}>
                                                        {getBookDescription(activeBookData)}
                                                    </p>
                                                ) if getBookDescription(activeBookData) else null}
                                            </div>
                                            <button style={{
                                                    "padding": "8px 16px",
                                                    "background": "#10b981",
                                                    "color": "white",
                                                    "border": "none",
                                                    "borderRadius": "6px",
                                                    "cursor": "pointer",
                                                    "fontSize": "14px"
                                                }}
                                                onClick={lambda: handleAddChapter(activeBook)}>
                                                + Add Chapter
                                            </button>
                                        </div>

                                        {(
                                            <div style={{
                                                "textAlign": "center",
                                                "padding": "40px",
                                                "background": "white",
                                                "borderRadius": "10px",
                                                "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
                                            }}>
                                                <div style={{"fontSize": "48px", "marginBottom": "20px", "color": "#d1d5db"}}>
                                                    📖
                                                </div>
                                                <h3 style={{"color": "#4b5563", "marginBottom": "10px"}}>No chapters yet</h3>
                                                <p style={{"color": "#6b7280", "marginBottom": "20px"}}>
                                                    Add chapters to organize your lesson content.
                                                </p>
                                                <button style={{
                                                    "padding": "10px 20px",
                                                    "background": "#10b981",
                                                    "color": "white",
                                                    "border": "none",
                                                    "borderRadius": "6px",
                                                    "cursor": "pointer"
                                                }}
                                                onClick={lambda: handleAddChapter(activeBook)}>
                                                    Add First Chapter
                                                </button>
                                            </div>
                                        ) if activeBookChapters.length == 0 else (
                                            <div style={{"display": "flex", "flexDirection": "column", "gap": "15px"}}>
                                                {sortedChapters.map(lambda chapter:str, index: any -> any {
                                                    return <div key={chapter.id} style={{
                                                        "background": "white",
                                                        "padding": "20px",
                                                        "borderRadius": "10px",
                                                        "boxShadow": "0 2px 4px rgba(0,0,0,0.1)",
                                                        "display": "flex",
                                                        "alignItems": "center",
                                                        "gap": "15px"
                                                    }}>
                                                        <div style={{
                                                            "width": "40px",
                                                            "height": "40px",
                                                            "background": activeBookData.color or "#7c3aed",
                                                            "color": "white",
                                                            "borderRadius": "8px",
                                                            "display": "flex",
                                                            "alignItems": "center",
                                                            "justifyContent": "center",
                                                            "fontWeight": "bold",
                                                            "fontSize": "16px",
                                                            "flexShrink": "0"
                                                        }}>
                                                            {index + 1}
                                                        </div>
                                                        
                                                        <div style={{"flex": "1"}}>
                                                            <h3 style={{"color": "#1f2937", "marginBottom": "5px"}}>
                                                                {chapter.title}
                                                            </h3>
                                                            {(
                                                                <p style={{"color": "#6b7280", "fontSize": "14px", "margin": "0"}}>
                                                                    {chapter.description}
                                                                </p>
                                                            ) if chapter.description else null}
                                                        </div>
                                                        
                                                        <div style={{"display": "flex", "gap": "10px", "flexShrink": "0"}}>
                                                            <button style={{
                                                                "padding": "8px 16px",
                                                                "background": "#3b82f6",
                                                                "color": "white",
                                                                "border": "none",
                                                                "borderRadius": "6px",
                                                                "cursor": "pointer",
                                                                "fontSize": "14px"
                                                            }}
                                                            onClick={lambda: handleViewChapter(chapter)}>
                                                                View Content
                                                            </button>
                                                            
                                                            <button style={{
                                                                "padding": "6px 12px",
                                                                "background": "transparent",
                                                                "color": "#6b7280",
                                                                "border": "1px solid #d1d5db",
                                                                "borderRadius": "6px",
                                                                "cursor": "pointer",
                                                                "fontSize": "13px"
                                                            }}
                                                            onClick={lambda: handleEditChapter(activeBook, chapter)}>
                                                                Edit
                                                            </button>
                                                            
                                                            <button style={{
                                                                "padding": "6px 12px",
                                                                "background": "transparent",
                                                                "color": "#ef4444",
                                                                "border": "1px solid #ef4444",
                                                                "borderRadius": "6px",
                                                                "cursor": "pointer",
                                                                "fontSize": "13px"
                                                            }}
                                                            onClick={lambda: deleteChapter(activeBook, chapter.id)}>
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>;
                                                })}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div>
                # {/* Book Modal */}
                {(
                    <div style={{
                        "position": "fixed",
                        "top": "0",
                        "left": "0",
                        "right": "0",
                        "bottom": "0",
                        "backgroundColor": "rgba(0,0,0,0.5)",
                        "display": "flex",
                        "justifyContent": "center",
                        "alignItems": "center",
                        "zIndex": "1000"
                    }}>
                        <div style={{
                            "background": "white",
                            "padding": "30px",
                            "borderRadius": "10px",
                            "width": "500px",
                            "maxWidth": "90%",
                            "maxHeight": "80vh",
                            "overflow": "auto"
                        }}>
                            <h2 style={{"marginBottom": "20px", "color": "#1f2937"}}>
                            {{"Edit Book"}  if currentBook  else {"Add New Book " }}
                            </h2>
                            
                            <div style={{"marginBottom": "15px"}}>
                                <label style={{"display": "block", "marginBottom": "5px", "color": "#374151", "fontWeight": "500"}}>
                                    Book Title *
                                </label>
                                <input type="text" style={{
                                    "width": "100%",
                                    "padding": "10px",
                                    "border": "1px solid #d1d5db",
                                    "borderRadius": "6px",
                                    "fontSize": "16px"
                                }}
                                value={bookForm.title}
                                onChange={lambda e: any->None {
                                    setBookForm({
                                        title: e.target.value,
                                        description: bookForm.description,
                                        subject: bookForm.subject,
                                        color: bookForm.color
                                    });
                                }}
                                placeholder="e.g., Jac Language Basics" />
                            </div>
                            
                            <div style={{"marginBottom": "15px"}}>
                                <label style={{"display": "block", "marginBottom": "5px", "color": "#374151", "fontWeight": "500"}}>
                                    Description
                                </label>
                                <textarea style={{
                                    "width": "100%",
                                    "padding": "10px",
                                    "border": "1px solid #d1d5db",
                                    "borderRadius": "6px",
                                    "minHeight": "80px",
                                    "fontSize": "14px"
                                }}
                                value={bookForm.description}
                                onChange={lambda e: any-> None {
                                    setBookForm({
                                        title:bookForm.title,
                                        description: e.target.value,
                                        subject: bookForm.subject,
                                        color: bookForm.color
                                    });
                                }}
                                placeholder="Describe what this book covers" />
                            </div>
                            
                            <div style={{"display": "grid", "gridTemplateColumns": "2fr 1fr", "gap": "15px", "marginBottom": "20px"}}>
                                <div>
                                    <label style={{"display": "block", "marginBottom": "5px", "color": "#374151", "fontWeight": "500"}}>
                                        Subject/Category
                                    </label>
                                    <input type="text" style={{
                                        "width": "100%",
                                        "padding": "10px",
                                        "border": "1px solid #d1d5db",
                                        "borderRadius": "6px"
                                    }}
                                    value={bookForm.subject}
                                    onChange={lambda e: any-> None {
                                        setBookForm({
                                        title:bookForm.title,
                                        description: bookForm.description,
                                        subject: e.target.value,
                                        color: bookForm.color
                                    });
                                        
                                    }}
                                    placeholder="e.g., Programming, Jac Language" />
                                </div>
                                
                                <div>
                                    <label style={{"display": "block", "marginBottom": "5px", "color": "#374151", "fontWeight": "500"}}>
                                        Color
                                    </label>
                                    <div style={{"display": "flex", "gap": "8px", "flexWrap": "wrap"}}>
                                        {bookColors.map(lambda color: any -> any {
                                            isSelected = (bookForm.color == color);
                                            return <div key={color}
                                                style={{
                                                    "width": "30px",
                                                    "height": "30px",
                                                    "borderRadius": "6px",
                                                    "background": color,
                                                    "cursor": "pointer",
                                                    "border": { "3px solid white" } if isSelected  else { "none" },
                                                    "outline": { "2px solid #374151" }  if isSelected else { "none" }
                                                }}
                                                onClick={lambda e: any-> None  {
                                                    setBookForm({
                                                        title:bookForm.title,
                                                        description: bookForm.description,
                                                        subject: bookForm.subject,
                                                        color: e.target.value
                                                    });
                                                }} />;
                                        })}
                                    </div>
                                </div>
                            </div>
                            
                            <div style={{"display": "flex", "gap": "10px", "justifyContent": "flex-end"}}>
                                <button style={{
                                    "padding": "10px 20px",
                                    "background": "#6b7280",
                                    "color": "white",
                                    "border": "none",
                                    "borderRadius": "6px",
                                    "cursor": "pointer"
                                }}
                                onClick={lambda->any {
                                    setShowBookModal(false);
                                    setCurrentBook(null);
                                }}>
                                    Cancel
                                </button>
                                <button style={{
                                    "padding": "10px 20px",
                                    "background": "#7c3aed",
                                    "color": "white",
                                    "border": "none",
                                    "borderRadius": "6px",
                                    "cursor": "pointer"
                                }}
                                onClick={saveBook}>
                                   { { "Update Book" }if  currentBook  else { "Create Book" }}
                                </button>
                            </div>
                        </div>
                    </div>
                )if showBookModal else {
                    null
                }}
            </div>
            Add
            # {/* Chapter Modal */}
            {(
                <div style={{
                    "position": "fixed",
                    "top": "0",
                    "left": "0",
                    "right": "0",
                    "bottom": "0",
                    "backgroundColor": "rgba(0,0,0,0.5)",
                    "display": "flex",
                    "justifyContent": "center",
                    "alignItems": "center",
                    "zIndex": "1000"
                }}>
                    <div style={{
                        "background": "white",
                        "padding": "30px",
                        "borderRadius": "10px",
                        "width": "500px",
                        "maxWidth": "90%",
                        "maxHeight": "80vh",
                        "overflow": "auto"
                    }}>
                        <h2 style={{"marginBottom": "20px", "color": "#1f2937"}}>
                            {getChapterModalTitleText()}
                            <div style={{"fontSize": "14px", "color": "#6b7280", "fontWeight": "normal", "marginTop": "5px"}}>
                              {getChapterModalTitle()}
                            </div>
                        </h2>
                    
                        <div style={{"marginBottom": "15px"}}>
                            <label style={{"display": "block", "marginBottom": "5px", "color": "#374151", "fontWeight": "500"}}>
                                Chapter Title *
                            </label>
                            <input type="text" style={{
                                "width": "100%",
                                "padding": "10px",
                                "border": "1px solid #d1d5db",
                                "borderRadius": "6px",
                                "fontSize": "16px"
                            }}
                            value={chapterForm.title}
                            onChange={lambda e: any->None {
                                setChapterForm({
                                        title:e.target.value,
                                        description: chapterForm.description,
                                        order: chapterForm.order
                                    });
                            }}
                            placeholder="e.g., Introduction to Variables" />
                        </div>
                        
                        <div style={{"marginBottom": "15px"}}>
                            <label style={{"display": "block", "marginBottom": "5px", "color": "#374151", "fontWeight": "500"}}>
                                Description
                            </label>
                            <textarea style={{
                                "width": "100%",
                                "padding": "10px",
                                "border": "1px solid #d1d5db",
                                "borderRadius": "6px",
                                "minHeight": "80px",
                                "fontSize": "14px"
                            }}
                            value={chapterForm.description}
                            onChange={lambda e: any ->None{
                                setChapterForm({
                                        title:chapterForm.title,
                                        description: e.target.value,
                                        order: chapterForm.order
                                    });
                            }}
                            placeholder="What will students learn in this chapter?" />
                        </div>
                        
                        <div style={{"marginBottom": "20px"}}>
                            <label style={{"display": "block", "marginBottom": "5px", "color": "#374151", "fontWeight": "500"}}>
                                Order Position
                            </label>
                            <input type="number" min="1" style={{
                                "width": "100px",
                                "padding": "10px",
                                "border": "1px solid #d1d5db",
                                "borderRadius": "6px"
                            }}
                            value={chapterForm.order}
                            onChange={lambda e: any {
                                setChapterForm({
                                        title: chapterForm.title,
                                        description: chapterForm.description,
                                        order: e.target.value
                                    });
                            }} />
                        </div>
                        
                        <div style={{"display": "flex", "gap": "10px", "justifyContent": "flex-end"}}>
                            <button style={{
                                "padding": "10px 20px",
                                "background": "#6b7280",
                                "color": "white",
                                "border": "none",
                                "borderRadius": "6px",
                                "cursor": "pointer"
                            }}
                            onClick={lambda->any {
                                setShowChapterModal(false);
                                setCurrentChapter(null);
                                setCurrentBook(null);
                            }}>
                                Cancel
                            </button>
                            <button style={{
                                "padding": "10px 20px",
                                "background": "#10b981",
                                "color": "white",
                                "border": "none",
                                "borderRadius": "6px",
                                "cursor": "pointer"
                            }}
                            onClick={saveChapter}>
                                {getChapterButtonText()}
                            </button>
                        </div>
                    </div>
                </div>
            ) if (showChapterModal and currentBook )else {
                null
            }}
        </div>;
    }


    
    # ============================================================================
    # STUDENT DASHBOARD COMPONENTS 
    # ============================================================================
    
    # Student Navigation Bar
    def StudentNavigation -> any {
        [userInfo, setUserInfo] = useState(null);
        navigate = useNavigate();

        useEffect(lambda -> None {
            async def loadUserInfo() -> None {
                currentSessionId = localStorage.getItem("session_id");
                if currentSessionId {
                    result = root spawn get_session_user(session_id=currentSessionId);
                    if result.reports and result.reports.length > 0 {
                        setUserInfo(result.reports[0]);
                    }
                }
            }
            loadUserInfo();
        }, []);

        def handleLogout(e: any) -> None {
            e.preventDefault();
            jacLogout();
            localStorage.removeItem("session_id");
            localStorage.removeItem("user_role");
            localStorage.removeItem("current_user");
            navigate("/login");
        }

        if not userInfo {
            return <div>Loading...</div>;
        }

        return <nav style={{
                "padding": "12px 24px",
                "background": "#4361ee",
                "color": "#ffffff",
                "display": "flex",
                "justifyContent": "space-between",
                "alignItems": "center"
            }}>
            <div style={{"fontWeight": "600", "fontSize": "18px"}}>
                Jac Student Portal
            </div>
            <div style={{"display": "flex", "gap": "16px", "alignItems": "center"}}>
                <span>Welcome, {userInfo.name}</span>
                <Link to="/dashboard" style={{"color": "#ffffff", "textDecoration": "none"}}>
                    Dashboard
                </Link>
                <Link to="/lessons" style={{"color": "#ffffff", "textDecoration": "none"}}>
                    My Lessons
                </Link>
                <Link to="/progress" style={{"color": "#ffffff", "textDecoration": "none"}}>
                    Progress
                </Link>
                <button onClick={handleLogout} style={{
                        "background": "none",
                        "color": "#ffffff",
                        "border": "1px solid #ffffff",
                        "padding": "2px 10px",
                        "borderRadius": "4px",
                        "cursor": "pointer"
                    }}>
                    Logout
                </button>
            </div>
        </nav>;
    }

    # Student Sidebar
    def StudentSidebar -> any {
        navigate = useNavigate();
        
        def handleNavigation(path: str) -> None {
            navigate(path);
        }

        return <div style={{
                "width": "250px",
                "background": "#f0f9ff",
                "borderRight": "1px solid #e5e7eb",
                "padding": "20px",
                "height": "calc(100vh - 64px)"
            }}>
            <h3 style={{"color": "#0369a1", "marginBottom": "20px"}}>My Learning</h3>
            <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                <button onClick={lambda -> None { handleNavigation("/dashboard"); }} style={{
                        "padding": "10px 15px",
                        "background": "#dbeafe",
                        "color": "#1d4ed8",
                        "border": "none",
                        "borderRadius": "6px",
                        "cursor": "pointer",
                        "textAlign": "left",
                        "fontWeight": "500"
                    }}>
                    🏠 Home
                </button>
                <button onClick={lambda -> None { handleNavigation("/lessons"); }} style={{
                        "padding": "10px 15px",
                        "background": "#fef3c7",
                        "color": "#92400e",
                        "border": "none",
                        "borderRadius": "6px",
                        "cursor": "pointer",
                        "textAlign": "left",
                        "fontWeight": "500"
                    }}>
                    📚 Lessons
                </button>
                <button onClick={lambda -> None { handleNavigation("/progress"); }} style={{
                        "padding": "10px 15px",
                        "background": "#dcfce7",
                        "color": "#166534",
                        "border": "none",
                        "borderRadius": "6px",
                        "cursor": "pointer",
                        "textAlign": "left",
                        "fontWeight": "500"
                    }}>
                    📈 Progress
                </button>
                <button onClick={lambda -> None { handleNavigation("/quizzes"); }} style={{
                        "padding": "10px 15px",
                        "background": "#f3e8ff",
                        "color": "#7c3aed",
                        "border": "none",
                        "borderRadius": "6px",
                        "cursor": "pointer",
                        "textAlign": "left",
                        "fontWeight": "500"
                    }}>
                    ✏️ Quizzes
                </button>
                <button onClick={lambda -> None { handleNavigation("/ai-tutor"); }} style={{
                        "padding": "10px 15px",
                        "background": "#ffe4e6",
                        "color": "#be123c",
                        "border": "none",
                        "borderRadius": "6px",
                        "cursor": "pointer",
                        "textAlign": "left",
                        "fontWeight": "500"
                    }}>
                    🤖 AI Tutor
                </button>
            </div>
        </div>;
    }

    # Student Dashboard Main Page 
    def DashboardPage -> any {
        if not jacIsLoggedIn() {
            return <Navigate to="/login" />;
        }

        [userInfo, setUserInfo] = useState(null);
        [stats, setStats] = useState({
            "progressPercent": 0,
            "avgScore": 0,
            "completedLessons": 0,
            "totalLessons": 0,
            "streakDays": 0
        });
        [recentLessons, setRecentLessons] = useState([]);
        [books, setBooks] = useState([]);  # New: All books for student
        [loading, setLoading] = useState(true);
        [activeTab, setActiveTab] = useState("overview");  # New: Tab state - "overview" or "books"

        # Load user info
        useEffect(lambda -> None {
            async def loadUserInfo() -> None {
                currentSessionId = localStorage.getItem("session_id");
                if currentSessionId {
                    result = root spawn get_session_user(session_id=currentSessionId);
                    if result.reports and result.reports.length > 0 {
                        userData = result.reports[0];
                        setUserInfo(userData);
                        
                        # Check if user is actually a student
                        if userData.role == "tutor" {
                            # Redirect to tutor dashboard
                            window.location.href = "/tutor/dashboard";
                        }
                    }
                }
            }
            loadUserInfo();
        }, []);

        # Load student data including books
        useEffect(lambda -> None {
            async def loadData() -> None {
                if userInfo and userInfo.email {
                    setLoading(true);
                    
                    # Load student progress summary
                    statsResult = root spawn get_student_progress_summary(user_email=userInfo.email);
                    if statsResult.reports and statsResult.reports.length > 0 {
                        statsData = statsResult.reports[0];
                        setStats({
                            "progressPercent": statsData.progress_percent,
                            "avgScore": statsData.avg_score,
                            "completedLessons": statsData.completed_lessons,
                            "totalLessons": statsData.total_lessons,
                            "streakDays": statsData.streak_days
                        });
                    }
                    
                    # Load recent lessons with progress
                    lessonsResult = root spawn get_student_recent_lessons(user_email=userInfo.email, limit=4);
                    if lessonsResult.reports and lessonsResult.reports.length > 0 {
                        setRecentLessons(lessonsResult.reports[0]);
                    }
                    
                    # NEW: Load all books available to student
                    booksResult = root spawn get_student_books(user_email=userInfo.email);
                    if booksResult.reports and booksResult.reports.length > 0 {
                        setBooks(booksResult.reports[0]);
                    }
                    
                    setLoading(false);
                }
            }
            loadData();
        }, [userInfo]);

        # Function to load chapters for a book
        def loadBookChapters(bookId: str) -> any {
            async def loadChapters() -> None {
                if userInfo and userInfo.email {
                    chaptersResult = root spawn get_chapter_for_student(
                        user_email=userInfo.email, 
                        book_id=bookId
                    );
                    if chaptersResult.reports and chaptersResult.reports.length > 0 {
                        setBooks(lambda prevBooks:any->None {
                            updatedBooks = [];
                            for book in prevBooks{
                                if book.id == bookId{
                                    # Create new book object with chapters
                                    updatedBook = {
                                        "id": book.id,
                                        "title": book.title,
                                        "description": book.description,
                                        "subject": book.subject,
                                        "color": book.color,
                                        "created_by": book.created_by,
                                        "chapter_count": book.chapter_count,
                                        "chapters": chaptersResult.reports[0],
                                        "chaptersLoaded": True
                                    };
                                    updatedBooks.append(updatedBook);}
                                else{
                                    updatedBooks.append(book);}
                            return updatedBooks;}
                        }
                        );
                    }
                }
            }
            loadChapters();
        }

        # Handle loading state
        if loading or not userInfo {
            return <div style={{"minHeight": "100vh", "backgroundColor": "#f9fafb"}}>
                <StudentNavigation />
                <div style={{"display": "flex"}}>
                    <StudentSidebar />
                    <div style={{"flex": "1", "padding": "30px"}}>
                        <h1 style={{"color": "#1f2937", "marginBottom": "30px"}}>Loading...</h1>
                        <div>Please wait while we load your dashboard...</div>
                    </div>
                </div>
            </div>;
        }

        return <div style={{"minHeight": "100vh", "backgroundColor": "#f9fafb"}}>
            <StudentNavigation />
            <div style={{"display": "flex"}}>
                <StudentSidebar />
                <div style={{"flex": "1", "padding": "30px"}}>
                    <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "30px"}}>
                        <h1 style={{"color": "#1f2937", "margin": "0"}}>Welcome back, {userInfo.name}!</h1>
                        
                        # Tab navigation
                        <div style={{"display": "flex", "gap": "10px", "background": "#e5e7eb", "padding": "5px", "borderRadius": "8px"}}>
                            <button 
                                onClick={lambda: setActiveTab("overview")}
                                style={{
                                    "padding": "8px 16px",
                                    "background": ("white"if activeTab == "overview"  else  "transparent"),
                                    "border": "none",
                                    "borderRadius": "6px",
                                    "cursor": "pointer",
                                    "fontWeight":("bold" if activeTab == "overview"  else "normal"),
                                    "color": ( "#1f2937" if activeTab == "overview" else "#6b7280")
                                }}
                            >
                                Overview
                            </button>
                            <button 
                                onClick={lambda: setActiveTab("books")}
                                style={{
                                    "padding": "8px 16px",
                                    "background": "white" if activeTab == "books"   else "transparent",
                                    "border": "none",
                                    "borderRadius": "6px",
                                    "cursor": "pointer",
                                    "fontWeight": bold if activeTab == "books" else "normal",
                                    "color": "#1f2937"  if activeTab == "books" else  "#6b7280"
                                }}
                            >
                                My Books ({books.length})
                            </button>
                        </div>
                    </div>
                    
                    {activeTab == "overview" and 
                        <>
                            # Stats Cards
                            <div style={{"display": "grid", "gridTemplateColumns": "repeat(2, 1fr)", "gap": "20px", "marginBottom": "30px"}}>
                                <div style={{"background": "white", "padding": "20px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}>
                                    <h3 style={{"color": "#6b7280", "marginBottom": "10px"}}>Overall Progress</h3>
                                    <div style={{"fontSize": "32px", "fontWeight": "bold", "color": "#4361ee"}}>
                                        {stats.progressPercent}%
                                    </div>
                                    <div style={{"height": "8px", "background": "#e5e7eb", "borderRadius": "4px", "marginTop": "10px", "overflow": "hidden"}}>
                                        <div style={{
                                            "width": {stats.progressPercent} + "%",
                                            "height": "100%",
                                            "background": "#4361ee"
                                        }}></div>
                                    </div>
                                </div>
                                <div style={{"background": "white", "padding": "20px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}>
                                    <h3 style={{"color": "#6b7280", "marginBottom": "10px"}}>Average Score</h3>
                                    <div style={{"fontSize": "32px", "fontWeight": "bold", "color": "#10b981"}}>
                                        {stats.avgScore}%
                                    </div>
                                </div>
                                <div style={{"background": "white", "padding": "20px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}>
                                    <h3 style={{"color": "#6b7280", "marginBottom": "10px"}}>Completed Lessons</h3>
                                    <div style={{"fontSize": "32px", "fontWeight": "bold", "color": "#f59e0b"}}>
                                        {stats.completedLessons}/{stats.totalLessons}
                                    </div>
                                </div>
                                <div style={{"background": "white", "padding": "20px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}>
                                    <h3 style={{"color": "#6b7280", "marginBottom": "10px"}}>Active Streak</h3>
                                    <div style={{"fontSize": "32px", "fontWeight": "bold", "color": "#ef4444"}}>
                                        {stats.streakDays} days
                                    </div>
                                </div>
                            </div>

                            # Recent Lessons
                            <div style={{"background": "white", "padding": "25px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)", "marginBottom": "30px"}}>
                                <h2 style={{"color": "#1f2937", "marginBottom": "20px"}}>Continue Learning</h2>
                                <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fill, minmax(250px, 1fr))", "gap": "15px"}}>
                                    {recentLessons.length > 0 and recentLessons.map(lambda lesson: any -> any {
                                        lessonScore = "";
                                        if lesson.is_completed and lesson.progress {
                                            lessonScore = Math.round(lesson.progress.score * 100) + "%";
                                        }
                                        badgeBackgroundValue = "";
                                        badgeColorValue = "";   
                                        badgeTextValue = "";
                                        
                                        if lesson.is_completed {
                                            badgeBackgroundValue = "#d1fae5";
                                            badgeColorValue = "#065f46";
                                            badgeTextValue = "Completed";
                                        } else {
                                            badgeBackgroundValue = "#fef3c7";
                                            badgeColorValue = "#92400e";
                                            badgeTextValue = "Start";
                                        }
                                        
                                        return <div key={lesson.id} style={{
                                                "padding": "15px",
                                                "border": "1px solid #e5e7eb",
                                                "borderRadius": "8px",
                                                "cursor": "pointer"
                                            }} onClick={lambda -> None { window.location.href = "/lesson/" + lesson.id; }}>
                                            <h4 style={{"color": "#1f2937", "marginBottom": "8px"}}>{lesson.title}</h4>
                                            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                                                <span style={{
                                                    "background": badgeBackgroundValue,
                                                    "color": badgeColorValue,
                                                    "borderRadius": "12px",
                                                    "fontSize": "12px",
                                                    "padding": "3px 8px"
                                                }}>
                                                    {badgeTextValue}
                                                </span>
                                                <span style={{"color": "#6b7280", "fontSize": "12px"}}>
                                                    {lessonScore}
                                                </span>
                                            </div>
                                        </div>;
                                    })}
                                    {recentLessons.length == 0 and <div>No lessons available</div>}
                                </div>
                            </div>
                        </>
                    }
                    
                    {activeTab == "books" and 
                        <div style={{"background": "white", "padding": "25px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}>
                            <h2 style={{"color": "#1f2937", "marginBottom": "20px"}}>My Books</h2>
                            
                            {books.length > 0 and 
                                <div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fill, minmax(300px, 1fr))", "gap": "20px"}}>
                                    {books.map(lambda book: any -> any {
                                        return <div key={book.id} style={{
                                            "border": "1px solid #e5e7eb",
                                            "borderRadius": "10px",
                                            "overflow": "hidden",
                                            "background": "white"
                                        }}>
                                            <div style={{
                                                "height": "120px",
                                                "background": book.color || "#4361ee",
                                                "display": "flex",
                                                "alignItems": "center",
                                                "justifyContent": "center"
                                            }}>
                                                <span style={{
                                                    "color": "white",
                                                    "fontSize": "32px",
                                                    "fontWeight": "bold"
                                                }}>
                                                    {book.title[0:1].toUpperCase()}
                                                </span>
                                            </div>
                                            <div style={{"padding": "20px"}}>
                                                <h3 style={{"color": "#1f2937", "marginBottom": "10px"}}>{book.title}</h3>
                                                <p style={{"color": "#6b7280", "fontSize": "14px", "marginBottom": "15px"}}>
                                                    {book.description || "No description"}
                                                </p>
                                                <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "15px"}}>
                                                    <span style={{"color": "#9ca3af", "fontSize": "12px"}}>
                                                        {book.chapter_count || 0} chapters
                                                    </span>
                                                    <span style={{"color": "#9ca3af", "fontSize": "12px"}}>
                                                        Subject: {book.subject || "General"}
                                                    </span>
                                                </div>
                                                
                                                # Chapters section
                                                {book.chaptersLoaded and 
                                                    <div style={{"marginTop": "15px", "borderTop": "1px solid #e5e7eb", "paddingTop": "15px"}}>
                                                        <h4 style={{"color": "#4b5563", "fontSize": "14px", "marginBottom": "10px"}}>Chapters:</h4>
                                                        {book.chapters and book.chapters.length > 0 and 
                                                            <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                                                                {book.chapters.map(lambda chapter: any -> any {
                                                                    return <div key={chapter.id} 
                                                                        style={{
                                                                            "padding": "8px",
                                                                            "background": "#f9fafb",
                                                                            "borderRadius": "6px",
                                                                            "cursor": "pointer",
                                                                            "display": "flex",
                                                                            "justifyContent": "space-between",
                                                                            "alignItems": "center"
                                                                        }}
                                                                        onClick={ window.location.href ( "/chapter/" + chapter.id)}
                                                                    >
                                                                        <span style={{"fontSize": "14px", "color": "#374151"}}>
                                                                            {chapter.order}. {chapter.title}
                                                                        </span>
                                                                        <span style={{"fontSize": "12px", "color": "#9ca3af"}}>
                                                                            {"Published" if chapter.is_published else {"Draft"}}
                                                                        </span>
                                                                    </div>;
                                                                })}
                                                            </div>
                                                        }
                                                        {( not book.chapters or book.chapters.length == 0) and 
                                                            <div style={{"color": "#9ca3af", "fontSize": "14px", "textAlign": "center", "padding": "10px"}}>
                                                                No chapters available
                                                            </div>
                                                        }
                                                    </div>
                                                }
                                                
                                                # Load chapters button
                                                {not book.chaptersLoaded and 
                                                    <button 
                                                        onClick={lambda: loadBookChapters(book.id)}
                                                        style={{
                                                            "width": "100%",
                                                            "padding": "10px",
                                                            "background": "#f3f4f6",
                                                            "border": "1px solid #d1d5db",
                                                            "borderRadius": "6px",
                                                            "color": "#4b5563",
                                                            "cursor": "pointer",
                                                            "fontSize": "14px"
                                                        }}
                                                    >
                                                        Show Chapters
                                                    </button>
                                                }
                                                
                                                # View book button
                                                <button 
                                                    onClick={window.location.href ('/books/' + book.id)}
                                                    style={{
                                                        "width": "100%",
                                                        "marginTop": "15px",
                                                        "padding": "10px",
                                                        "background": "#4361ee",
                                                        "color": "white",
                                                        "border": "none",
                                                        "borderRadius": "6px",
                                                        "cursor": "pointer",
                                                        "fontWeight": "bold"
                                                    }}
                                                >
                                                    Open Book
                                                </button>
                                            </div>
                                        </div>;
                                    })}
                                </div>
                            }
                            
                            {books.length == 0 and 
                                <div style={{"textAlign": "center", "padding": "40px"}}>
                                    <div style={{"fontSize": "48px", "color": "#d1d5db", "marginBottom": "20px"}}>📚</div>
                                    <h3 style={{"color": "#6b7280", "marginBottom": "10px"}}>No Books Yet</h3>
                                    <p style={{"color": "#9ca3af"}}>
                                        You don't have access to any books yet. 
                                        Ask your tutor to share books with you or explore available courses.
                                    </p>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>;
    }

    # ============================================================================
    # COMMON COMPONENTS
    # ============================================================================
    
    # Login Page
    def LoginPage -> any {
        [email, setEmail] = useState("");
        [password, setPassword] = useState("");
        [error, setError] = useState("");
        navigate = useNavigate();

        async def handleLogin(e: any) -> None {
            e.preventDefault();
            setError("");
            
            if (not email or not password) {
                setError("Please fill in all fields");
                return;
            }
            
            success = await jacLogin(email, password);
            
            if (success) {
                result = await root spawn login_user(
                    email=email,
                    password=password
                );
                
                if (result.reports and result.reports.length > 0 and result.reports[0].success) {
                    sessionData = result.reports[0];
                    localStorage.setItem("session_id", sessionData.session_id);
                    localStorage.setItem("current_user", JSON.stringify(sessionData.user));
                    localStorage.setItem("user_email", email);
                    
                    userRole = "student";
                    if (sessionData.user and sessionData.user.role) {
                        userRole = sessionData.user.role;
                        localStorage.setItem("user_role", userRole);
                    }
                    
                    # Redirect based on role
                    if (userRole == "tutor") {
                        navigate("/tutor/dashboard");
                    } else {
                        navigate("/dashboard");
                    }
                } else {
                    errorMsg = "Login failed";
                    if (result.reports and result.reports.length > 0 and result.reports[0].error) {
                        errorMsg = result.reports[0].error;
                    }
                    setError(errorMsg);
                }
            } else {
                setError("Invalid email or password");
            }
        }

        return <div style={{
                "minHeight": "100vh",
                "display": "flex",
                "alignItems": "center",
                "justifyContent": "center",
                "background": "#f5f5f5"
            }}>
            <div style={{
                "background": "#ffffff",
                "padding": "30px",
                "borderRadius": "8px",
                "width": "280px",
                "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
            }}>
                <h2 style={{"marginBottom": "20px"}}>Login to Jac Tutor</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        value={email}
                        onChange={lambda e: any -> None { setEmail(e.target.value); }}
                        placeholder="Email"
                        style={{
                            "width": "100%",
                            "padding": "8px",
                            "marginBottom": "10px",
                            "border": "1px solid #ddd",
                            "borderRadius": "4px",
                            "boxSizing": "border-box"
                        }}
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={lambda e: any -> None { setPassword(e.target.value); }}
                        placeholder="Password"
                        style={{
                            "width": "100%",
                            "padding": "8px",
                            "marginBottom": "10px",
                            "border": "1px solid #ddd",
                            "borderRadius": "4px",
                            "boxSizing": "border-box"
                        }}
                    />
                    {error && <div style={{"color": "#dc2626", "fontSize": "14px", "marginBottom": "10px"}}>{error}</div>}
                    <button type="submit" style={{
                            "width": "100%",
                            "padding": "8px",
                            "background": "#4361ee",
                            "color": "#ffffff",
                            "border": "none",
                            "borderRadius": "4px",
                            "cursor": "pointer",
                            "fontWeight": "600"
                        }}>
                        Login
                    </button>
                </form>
                <p style={{"textAlign": "center", "marginTop": "12px", "fontSize": "14px"}}>
                    Need an account? <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>;
    }
    
    # Signup Page
    def SignupPage -> any {
        [email, setEmail] = useState("");
        [password, setPassword] = useState("");
        [name, setName] = useState("");
        [role, setRole] = useState("student");
        [error, setError] = useState("");
        navigate = useNavigate();

        async def handleSignup(e: any) -> None {
            e.preventDefault();
            setError("");
            if not email or not password or not name {
                setError("Please fill in all fields");
                return;
            }
            result = await jacSignup(email, password);
            if result["success"] {
                # Create user profile
                profileResult = root spawn create_user_profile(
                    email=email,
                    name=name,
                    role=role
                );
                
                # Auto-login after signup
                success = await jacLogin(email, password);
                if success {
                    # Create session
                    loginResult = await root spawn login_user(
                        email=email,
                        password=password
                    );
                    
                    if loginResult.reports and loginResult.reports.length > 0 and loginResult.reports[0].success {
                        sessionData = loginResult.reports[0];
                        localStorage.setItem("session_id", sessionData.session_id);
                        localStorage.setItem("current_user", JSON.stringify(sessionData.user));
                        localStorage.setItem("user_email", email);
                        localStorage.setItem("user_role", role);
                        
                        # Redirect based on role
                        if (role == "tutor") {
                            navigate("/tutor/dashboard");
                        } else {
                            navigate("/dashboard");
                        }
                    }
                }
            } else {
                setError(result["error"] if result["error"] else "Signup failed");
            }
        }

        return <div style={{
                "minHeight": "100vh",
                "display": "flex",
                "alignItems": "center",
                "justifyContent": "center",
                "background": "#f5f5f5"
            }}>
            <div style={{
                "background": "#ffffff",
                "padding": "30px",
                "borderRadius": "8px",
                "width": "280px",
                "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
            }}>
                <h2 style={{"marginBottom": "20px"}}>Sign Up for Jac Tutor</h2>
                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        value={name}
                        onChange={lambda e: any -> None { setName(e.target.value); }}
                        placeholder="Full Name"
                        style={{
                            "width": "100%",
                            "padding": "8px",
                            "marginBottom": "10px",
                            "border": "1px solid #ddd",
                            "borderRadius": "4px",
                            "boxSizing": "border-box"
                        }}
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={lambda e: any -> None { setEmail(e.target.value); }}
                        placeholder="Email"
                        style={{
                            "width": "100%",
                            "padding": "8px",
                            "marginBottom": "10px",
                            "border": "1px solid #ddd",
                            "borderRadius": "4px",
                            "boxSizing": "border-box"
                        }}
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={lambda e: any -> None { setPassword(e.target.value); }}
                        placeholder="Password"
                        style={{
                            "width": "100%",
                            "padding": "8px",
                            "marginBottom": "10px",
                            "border": "1px solid #ddd",
                            "borderRadius": "4px",
                            "boxSizing": "border-box"
                        }}
                    />
                    <div style={{"marginBottom": "10px"}}>
                        <label style={{"display": "block", "marginBottom": "4px", "color": "#374151", "fontWeight": "500"}}>Role</label>
                        <select
                            value={role}
                            onChange={lambda e: any -> None { setRole(e.target.value); }}
                            style={{
                                "width": "100%",
                                "padding": "8px",
                                "border": "1px solid #ddd",
                                "borderRadius": "4px",
                                "boxSizing": "border-box"
                            }}
                        >
                            <option value="student">Student</option>
                            <option value="tutor">Tutor</option>
                        </select>
                    </div>
                    {error and <div style={{"color": "#dc2626", "fontSize": "14px", "marginBottom": "10px"}}>{error}</div>}
                    <button type="submit" style={{
                            "width": "100%",
                            "padding": "8px",
                            "background": "#4361ee",
                            "color": "#ffffff",
                            "border": "none",
                            "borderRadius": "4px",
                            "cursor": "pointer",
                            "fontWeight": "600"
                        }}>
                        Sign Up
                    </button>
                </form>
                <p style={{"textAlign": "center", "marginTop": "12px", "fontSize": "14px"}}>
                    Have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>;
    }

    # Home Page - redirects based on authentication
    def HomePage -> any {
        
        if jacIsLoggedIn() {
            # Get user role
            userRole = localStorage.getItem("user_role") || "student";
            
            if userRole == "tutor" {
                return <Navigate to="/tutor/dashboard" />;
            } else {
                return <Navigate to="/dashboard" />;
            }
        }
        return <LandingPage/>;
    }

    # ============================================================================
    # MAIN APP ROUTER
    # ============================================================================
    
    def app -> any {
        return <Router>
            <div style={{"fontFamily": "system-ui, sans-serif"}}>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    
                    # Student Routes
                     <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/lessons" element={<DashboardPage />} />
                    <Route path="/progress" element={<DashboardPage />} />
                    
                    # Tutor Routes
                    <Route path="/tutor/dashboard" element={<TutorDashboardPage />} />
                    <Route path="/tutor/lessons" element={<TutorLessonsPage />} />
                    <Route path="/tutor/students" element={<TutorDashboardPage />} />
                    <Route path="/tutor/quizzes" element={<TutorDashboardPage />} />
                    <Route path="/tutor/analytics" element={<TutorDashboardPage />} />
                    
                    # Catch-all route
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>;
    }
}