import {__jacJsx, __jacSpawn} from "@jac-client/utils";
import { useState, useEffect } from "react";
import { Router, Routes, Route, Link, Navigate, useNavigate, useLocation, jacSignup, jacLogin, jacLogout, jacIsLoggedIn } from "@jac-client/utils";
function Navigation() {
  let isLoggedIn = jacIsLoggedIn();
  let navigate = useNavigate();
  let [sessionId, setSessionId] = useState("");
  let [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    if (isLoggedIn) {
      let storedSessionId = localStorage.getItem("session_id");
      if (storedSessionId) {
        setSessionId(storedSessionId);
      } else {
        setSessionId("");
      }
    }
  }, [isLoggedIn]);
  useEffect(() => {
    async function loadUserInfo() {
      if (isLoggedIn && sessionId) {
        let result = await __jacSpawn("get_session_user", "", {"session_id": sessionId});
        if (result.reports && result.reports.length > 0) {
          let userData = result.reports[0];
          console.log("User Data", userData);
          if (userData.error) {
            let storedUser = localStorage.getItem("current_user");
            if (storedUser) {
              userData = JSON.parse(storedUser);
              setUserInfo(userData);
            }
          } else {
            setUserInfo(userData);
          }
        } else {
          let storedUser = localStorage.getItem("current_user");
          if (storedUser) {
            userData = JSON.parse(storedUser);
            setUserInfo(userData);
          }
        }
      }
    }
    loadUserInfo();
  }, [isLoggedIn, sessionId]);
  function handleLogout(e) {
    e.preventDefault();
    sessionId = localStorage.getItem("session_id");
  }
  if (isLoggedIn) {
    let userName = "Student";
    if (userInfo) {
      if (userInfo.name) {
        userName = userInfo.name;
      }
    }
    return __jacJsx("nav", {"style": {"padding": "12px 24px", "background": "#4361ee", "color": "#ffffff", "display": "flex", "justifyContent": "space-between"}}, [__jacJsx("div", {"style": {"fontWeight": "600", "fontSize": "18px"}}, ["Jac Interactive Tutor"]), __jacJsx("div", {"style": {"display": "flex", "gap": "16px", "alignItems": "center"}}, [__jacJsx("span", {}, ["Welcome, ", userName]), __jacJsx(Link, {"to": "/dashboard", "style": {"color": "#ffffff", "textDecoration": "none"}}, ["Dashboard"]), __jacJsx(Link, {"to": "/lessons", "style": {"color": "#ffffff", "textDecoration": "none"}}, ["Lessons"]), __jacJsx(Link, {"to": "/progress", "style": {"color": "#ffffff", "textDecoration": "none"}}, ["Progress"]), __jacJsx("button", {"onClick": handleLogout, "style": {"background": "none", "color": "#ffffff", "border": "1px solid #ffffff", "padding": "2px 10px", "borderRadius": "4px", "cursor": "pointer"}}, ["Logout"])])]);
  }
  return __jacJsx("nav", {"style": {"padding": "12px 24px", "background": "#4361ee", "color": "#ffffff", "display": "flex", "justifyContent": "space-between"}}, [__jacJsx("div", {"style": {"fontWeight": "600", "fontSize": "18px"}}, ["Jac Interactive Tutor"]), __jacJsx("div", {"style": {"display": "flex", "gap": "16px"}}, [__jacJsx(Link, {"to": "/login", "style": {"color": "#ffffff", "textDecoration": "none"}}, ["Login"]), __jacJsx(Link, {"to": "/signup", "style": {"color": "#ffffff", "textDecoration": "none"}}, ["Sign Up"])])]);
}
function DashboardPage() {
  console.log("DashboardPage rendering");
  if (!jacIsLoggedIn()) {
    return __jacJsx(Navigate, {"to": "/login"}, []);
  }
  console.log("User is logged in, loading dashboard");
  let [lessons, setLessons] = useState([]);
  let [currentLesson, setCurrentLesson] = useState(null);
  let [userProgress, setUserProgress] = useState({});
  let [activeTab, setActiveTab] = useState("lessons");
  let [chatMessages, setChatMessages] = useState([]);
  let [chatInput, setChatInput] = useState("");
  let [quizQuestions, setQuizQuestions] = useState([]);
  let [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  let [quizScore, setQuizScore] = useState({"correct": 0, "wrong": 0});
  let [userInfo, setUserInfo] = useState(null);
  let userEmail = "";
  if (userInfo && userInfo.email) {
    userEmail = userInfo.email;
  }
  useEffect(() => {
    async function loadData() {
      let currentSessionId = localStorage.getItem("session_id");
      if (currentSessionId) {
        let userResult = await __jacSpawn("get_session_user", "", {"session_id": currentSessionId});
        if (userResult.reports && userResult.reports.length > 0) {
          let userData = userResult.reports[0];
          console.log("userData", userData);
          if (!userData.error) {
            setUserInfo(userData);
            useEffect(() => {
              async function loadLessons() {
                let syncResult = await __jacSpawn("sync_lessons_from_github", "", {});
                let result = await __jacSpawn("list_lessons", "", {});
                if (result.reports && result.reports.length > 0) {
                  let lessonsData = result.reports[0];
                  setLessons(lessonsData);
                  if (lessonsData.length > 0) {
                    selectLesson(lessonsData[0].id);
                  }
                }
              }
              loadLessons();
            }, []);
            if (userData.email) {
              let progressResult = await __jacSpawn("get_user_attempts", "", {"user_email": userData.email});
              if (progressResult.reports && progressResult.reports.length > 0) {
                let progressMap = {};
                for (const attempt of progressResult.reports[0]) {
                  progressMap[attempt.lesson_id] = attempt;
                }
                setUserProgress(progressMap);
              }
            }
          }
        }
      }
    }
    loadData();
  }, []);
  function selectLesson(lessonId) {
    async function loadLesson() {
      let result = await __jacSpawn("get_lesson_detail", "", {"lesson_id": lessonId});
      if (result.reports[0] && !result.reports[0].error) {
        setCurrentLesson(result.reports[0]);
        setActiveTab("lessons");
        if (userEmail && !userProgress[lessonId]) {
          await __jacSpawn("record_attempt", "", {"user_email": userEmail, "lesson_id": lessonId, "status": "started", "score": 0.0});
        }
      }
    }
    loadLesson();
  }
  function getLessonProgress(lessonId) {
    return userProgress[lessonId] ? userProgress[lessonId] : {"status": "not_started", "score": 0.0};
  }
  function renderProgressBadge(lessonId) {
    let progress = getLessonProgress(lessonId);
    if (progress.status === "not_started") {
      return __jacJsx("span", {"style": {"background": "#e5e7eb", "color": "#6b7280", "padding": "2px 8px", "borderRadius": "12px", "fontSize": "12px"}}, ["Not Started"]);
    } else if (progress.status === "started") {
      return __jacJsx("span", {"style": {"background": "#fef3c7", "color": "#92400e", "padding": "2px 8px", "borderRadius": "12px", "fontSize": "12px"}}, ["In Progress"]);
    } else {
      return __jacJsx("span", {"style": {"background": "#d1fae5", "color": "#065f46", "padding": "2px 8px", "borderRadius": "12px", "fontSize": "12px"}}, [Math.round(progress.score * 100), "%"]);
    }
  }
  function generateQuiz() {
    if (!currentLesson) {
      return;
    }
    async function loadQuiz() {
      let result = await __jacSpawn("generate_quiz_questions", "", {"lesson_id": currentLesson.id});
      if (result.reports[0] && result.reports[0].questions_raw) {
        let questionsText = result.reports[0].questions_raw;
        let questions = parseQuizQuestions(questionsText);
        setQuizQuestions(questions);
        setCurrentQuizIndex(0);
        setQuizScore({"correct": 0, "wrong": 0});
        setActiveTab("quiz");
      }
    }
    loadQuiz();
  }
  function parseQuizQuestions(text) {
    let questions = [];
    let lines = text.split("\\n");
    let currentQuestion = "";
    let currentOptions = [];
    let correctAnswer = "";
    for (const line of lines) {
      let line = line.trim();
      if (!line) {
        continue;
      }
      if (line.startsWith("Q") && line.includes(":")) {
        if (currentQuestion) {
          questions.push({"question": currentQuestion, "options": currentOptions, "correct": correctAnswer});
        }
        let parts = line.split(":", 1);
        currentQuestion = parts[1].trim();
        currentOptions = [];
        correctAnswer = "";
      } else if (line.startsWith("A)") || line.startsWith("B)") || line.startsWith("C)") || line.startsWith("D)")) {
        let optionLetter = line[0];
        let optionText = line.slice(3).trim();
        currentOptions.push({"letter": optionLetter, "text": optionText});
      } else if (line.startsWith("Correct:")) {
        correctAnswer = line.replace("Correct:", "").trim();
      }
      if (currentQuestion) {
        questions.push({"question": currentQuestion, "options": currentOptions, "correct": correctAnswer});
      }
      return questions;
    }
    function handleQuizAnswer(selected) {
      if (currentQuizIndex >= quizQuestions.length) {
        return;
      }
      let currentQ = quizQuestions[currentQuizIndex];
      let isCorrect = selected === currentQ.correct;
      if (currentQuizIndex < quizQuestions.length - 1) {
        setCurrentQuizIndex(currentQuizIndex + 1);
      } else {
        completeQuiz();
      }
    }
    function completeQuiz() {
      if (!currentLesson || !userEmail) {
        return;
      }
      async function saveQuizResult() {
        let result = await __jacSpawn("quiz_record_attempt", "", {"user_email": userEmail, "lesson_id": currentLesson.id, "correct": quizScore.correct, "wrong": quizScore.wrong});
      }
      saveQuizResult();
    }
    function sendChatMessage() {
      if (!chatInput.trim()) {
        return;
      }
      let newMessages = chatMessages.copy();
      newMessages.append({"role": "user", "content": chatInput, "time": Date().toLocaleTimeString()});
      setChatMessages(newMessages);
      async function getAIResponse() {
        let result = await __jacSpawn("ai_chat", "", {"message": chatInput});
        if (result.reports[0] && result.reports[0].reply) {
          let aiMessages = newMessages.copy();
          aiMessages.append({"role": "assistant", "content": result.reports[0].reply, "time": Date().toLocaleTimeString()});
          setChatMessages(aiMessages);
        }
        setChatInput("");
      }
      getAIResponse();
    }
    function renderLessonsList() {
      return __jacJsx("div", {"style": {"display": "flex", "flexDirection": "column", "gap": "12px"}}, [lessons.map(lesson => {
        let isActive = currentLesson && currentLesson.id === lesson.id;
        let background = "";
        let border = "";
        if (isActive) {
          background = "#eff6ff";
          border = "2px solid #3b82f6";
        } else {
          background = "#ffffff";
          border = "1px solid #e5e7eb";
        }
        return __jacJsx("div", {"key": lesson.id, "style": {"padding": "16px", "background": background, "border": border, "borderRadius": "8px", "cursor": "pointer", "transition": "all 0.2s"}, "onClick": () => {
          selectLesson(lesson.id);
        }}, [__jacJsx("div", {"style": {"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}, [__jacJsx("h4", {"style": {"margin": "0", "color": "#1f2937"}}, [lesson.title]), renderProgressBadge(lesson.id)]), __jacJsx("p", {"style": {"margin": "8px 0 0 0", "color": "#6b7280", "fontSize": "14px"}}, [lesson.description])]);
      })]);
    }
    function renderLessonContent() {
      if (!currentLesson) {
        return __jacJsx("div", {"style": {"padding": "32px", "textAlign": "center", "color": "#9ca3af"}}, [__jacJsx("h3", {}, ["Select a lesson to begin"]), __jacJsx("p", {}, ["Choose a lesson from the left to start learning"])]);
      }
      return __jacJsx("div", {"style": {"height": "100%"}}, [__jacJsx("div", {"style": {"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "24px"}}, [__jacJsx("h2", {"style": {"margin": "0", "color": "#1f2937"}}, [currentLesson.title]), __jacJsx("div", {"style": {"display": "flex", "gap": "8px"}}, [__jacJsx("button", {"onClick": generateQuiz, "style": {"padding": "8px 16px", "background": "#3b82f6", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}}, ["Take Quiz"]), __jacJsx("button", {"onClick": () => {
        setActiveTab("chat");
      }, "style": {"padding": "8px 16px", "background": "#8b5cf6", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}}, ["Ask AI Tutor"])])]), __jacJsx("div", {"style": {"background": "#ffffff", "borderRadius": "8px", "padding": "24px", "height": "calc(100% - 80px)", "overflowY": "auto", "border": "1px solid #e5e7eb"}}, [__jacJsx("div", {"style": {"whiteSpace": "pre-wrap", "lineHeight": "1.6", "color": "#374151"}}, [currentLesson.content])])]);
    }
    function renderQuizTab() {
      if (quizQuestions.length === 0) {
        return __jacJsx("div", {"style": {"padding": "32px", "textAlign": "center", "color": "#9ca3af"}}, [__jacJsx("h3", {}, ["No Quiz Available"]), __jacJsx("p", {}, ["Click 'Take Quiz' button to generate questions"]), __jacJsx("button", {"onClick": () => setActiveTab("lessons"), "style": {"padding": "8px 16px", "background": "#6b7280", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer", "marginTop": "16px"}}, ["Back to Lessons"])]);
      }
      if (currentQuizIndex >= quizQuestions.length) {
        return __jacJsx("div", {"style": {"padding": "32px", "textAlign": "center"}}, [__jacJsx("h3", {}, ["Quiz Completed!"]), __jacJsx("p", {}, ["Score: ", quizScore.correct, " / ", quizScore.correct + quizScore.wrong]), __jacJsx("button", {"onClick": () => setActiveTab("lessons"), "style": {"padding": "8px 16px", "background": "#3b82f6", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer", "marginTop": "16px"}}, ["Back to Lessons"])]);
      }
      let currentQ = quizQuestions[currentQuizIndex];
      let progressPercent = currentQuizIndex + 1 / quizQuestions.length * 100;
      let quizTitleText = "Quiz: Unknown";
      let hasTitle = false;
      if (currentLesson) {
        hasTitle = currentLesson.title;
      }
      if (hasTitle) {
        quizTitleText = "Quiz: " + currentLesson.title;
      }
      return __jacJsx("div", {"style": {"height": "100%"}}, [__jacJsx("div", {"style": {"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "24px"}}, [__jacJsx("h2", {"style": {"margin": "0", "color": "#1f2937"}}, [quizTitleText]), __jacJsx("div", {"style": {"display": "flex", "gap": "16px", "alignItems": "center"}}, [__jacJsx("span", {}, ["Question ", currentQuizIndex + 1, " of ", quizQuestions.length]), __jacJsx("span", {}, ["Score: ", quizScore.correct, " / ", quizScore.correct + quizScore.wrong])])]), __jacJsx("div", {"style": {"background": "#ffffff", "borderRadius": "8px", "padding": "24px", "marginBottom": "16px"}}, [__jacJsx("div", {"style": {"height": "6px", "background": "#e5e7eb", "borderRadius": "3px", "marginBottom": "16px"}}, [__jacJsx("div", {"style": {"width": progressPercent + "%", "height": "100%", "background": "#3b82f6", "borderRadius": "3px"}}, [])]), __jacJsx("h3", {"style": {"color": "#1f2937", "marginBottom": "16px"}}, [currentQ.question]), __jacJsx("div", {"style": {"display": "flex", "flexDirection": "column", "gap": "8px"}}, [currentQ.options.map(opt => {
        __jacJsx("button", {"key": idx, "onClick": () => handleQuizAnswer(opt.letter), "style": {"padding": "12px", "background": "#ffffff", "border": "1px solid #e5e7eb", "borderRadius": "6px", "textAlign": "left", "cursor": "pointer", "transition": "all 0.2s"}}, [__jacJsx("strong", {}, [opt.letter, ")"]), " ", opt.text]);
      })])])]);
    }
    function renderChatTab() {
      let chatContent;
      if (chatMessages.length === 0) {
        chatContent = __jacJsx("div", {"style": {"textAlign": "center", "color": "#9ca3af", "padding": "32px"}}, [__jacJsx("h4", {}, ["Start a conversation with the AI Tutor"]), __jacJsx("p", {}, ["Ask questions about Jac programming, lessons, or concepts"])]);
      } else {
        let messageList = chatMessages.map((msg, idx) => {
          let isUser = msg.role === "user";
          let textAlignStyle = isUser ? "right" : "left";
          let backgroundColor = isUser ? "#eff6ff" : "#f1f5f9";
          let senderName = isUser ? "You" : "AI Tutor";
          return __jacJsx("div", {"key": idx, "style": {"marginBottom": "16px", "textAlign": textAlignStyle}}, [__jacJsx("div", {"style": {"display": "inline-block", "background": backgroundColor, "padding": "12px 16px", "borderRadius": "12px", "maxWidth": "80%", "textAlign": "left"}}, [__jacJsx("div", {"style": {"fontSize": "12px", "color": "#6b7280", "marginBottom": "4px"}}, [senderName, " • ", msg.time]), __jacJsx("div", {}, [msg.content])])]);
        });
        chatContent = messageList;
      }
      return __jacJsx("div", {"style": {"height": "100%", "display": "flex", "flexDirection": "column"}}, [__jacJsx("div", {"style": {"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "24px"}}, [__jacJsx("h2", {"style": {"margin": "0", "color": "#1f2937"}}, ["AI Tutor Chat"]), __jacJsx("button", {"onClick": () => {
        setActiveTab("lessons");
      }, "style": {"padding": "8px 16px", "background": "#6b7280", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}}, ["Back to Lessons"])]), __jacJsx("div", {"style": {"flex": "1", "background": "#ffffff", "borderRadius": "8px", "padding": "16px", "marginBottom": "16px", "overflowY": "auto", "border": "1px solid #e5e7eb"}}, [chatContent]), __jacJsx("div", {"style": {"display": "flex", "gap": "8px"}}, [__jacJsx("textarea", {"value": chatInput, "onChange": e => {
        setChatInput(e.target.value);
      }, "placeholder": "Ask a question about Jac...", "style": {"flex": "1", "padding": "12px", "border": "1px solid #e5e7eb", "borderRadius": "6px", "minHeight": "60px", "resize": "vertical"}, "onKeyDown": e => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          sendChatMessage();
        }
      }}, []), __jacJsx("button", {"onClick": sendChatMessage, "disabled": !chatInput.trim(), "style": {"padding": "12px 24px", "background": "#3b82f6", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer", "height": "60px"}}, ["Send"])])]);
    }
    function renderMainContent() {
      if (activeTab === "lessons") {
        return renderLessonContent();
      } else if (activeTab === "quiz") {
        return renderQuizTab();
      } else if (activeTab === "chat") {
        return renderChatTab();
      }
      return null;
    }
    return __jacJsx("div", {"style": {"minHeight": "calc(100vh - 48px)", "background": "#f9fafb"}}, [__jacJsx("div", {"style": {"maxWidth": "1200px", "margin": "0 auto", "padding": "24px"}}, [__jacJsx("h1", {"style": {"color": "#1f2937", "marginBottom": "24px"}}, ["Student Dashboard"]), __jacJsx("div", {"style": {"display": "flex", "gap": "24px", "height": "600px"}}, [__jacJsx("div", {"style": {"width": "320px", "display": "flex", "flexDirection": "column"}}, [__jacJsx("div", {"style": {"marginBottom": "16px"}}, [__jacJsx("h3", {"style": {"color": "#374151", "marginBottom": "8px"}}, ["Jac Book Chapters"]), __jacJsx("p", {"style": {"color": "#6b7280", "fontSize": "14px"}}, ["Select a chapter to learn"])]), __jacJsx("div", {"style": {"flex": "1", "overflowY": "auto"}}, [renderLessonsList()])]), __jacJsx("div", {"style": {"flex": "1", "background": "#ffffff", "borderRadius": "12px", "padding": "24px", "boxShadow": "0 1px 3px rgba(0,0,0,0.1)"}}, [renderMainContent()])])])]);
  }
}
function ProgressPage() {
  if (!jacIsLoggedIn()) {
    return __jacJsx(Navigate, {"to": "/login"}, []);
  }
  let [userProgress, setUserProgress] = useState([]);
  let [lessons, setLessons] = useState([]);
  let [userInfo, setUserInfo] = useState(null);
  let userEmail = "";
  userEmail = userInfo ? userInfo.email : "";
  useEffect(() => {
    async function loadUserInfo() {
      let currentSessionId = localStorage.getItem("session_id");
      if (currentSessionId) {
        let result = await __jacSpawn("get_session_user", "", {"session_id": currentSessionId});
        if (result.reports && result.reports.length > 0) {
          let userData = result.reports[0];
          if (!userData.error) {
            setUserInfo(userData);
          }
        }
      }
    }
    loadUserInfo();
  }, []);
  useEffect(() => {
    async function loadData() {
      let lessonsResult = await __jacSpawn("list_lessons", "", {});
      if (lessonsResult.reports) {
        setLessons(lessonsResult.reports[0]);
      }
      if (userEmail) {
        let progressResult = await __jacSpawn("get_user_attempts", "", {"user_email": userEmail});
        if (progressResult.reports) {
          setUserProgress(progressResult.reports[0]);
        }
      }
    }
    loadData();
  }, [userEmail]);
  function calculateProgress() {
    let completed = userProgress.filter(p => {
      return p.status === "completed" || p.status === "quiz_completed";
    });
    let totalScore = 0;
    if (completed.length > 0) {
      totalScore = completed.reduce((sum, p) => {
        return sum + p.score;
      }, 0) / completed.length;
    }
    return {"completed": completed.length, "total": lessons.length, "avgScore": totalScore};
  }
  let overall = calculateProgress();
  return __jacJsx("div", {"style": {"minHeight": "calc(100vh - 48px)", "background": "#f9fafb", "padding": "24px"}}, [__jacJsx("div", {"style": {"maxWidth": "800px", "margin": "0 auto"}}, [__jacJsx("h1", {"style": {"color": "#1f2937", "marginBottom": "32px"}}, ["Learning Progress"]), __jacJsx("div", {"style": {"display": "flex", "gap": "16px", "marginBottom": "32px"}}, [__jacJsx("div", {"style": {"flex": "1", "background": "#ffffff", "padding": "20px", "borderRadius": "12px", "boxShadow": "0 1px 3px rgba(0,0,0,0.1)"}}, [__jacJsx("div", {"style": {"fontSize": "14px", "color": "#6b7280", "marginBottom": "8px"}}, ["Lessons Completed"]), __jacJsx("div", {"style": {"fontSize": "32px", "fontWeight": "bold", "color": "#1f2937"}}, [overall.completed, "/", overall.total])]), __jacJsx("div", {"style": {"flex": "1", "background": "#ffffff", "padding": "20px", "borderRadius": "12px", "boxShadow": "0 1px 3px rgba(0,0,0,0.1)"}}, [__jacJsx("div", {"style": {"fontSize": "14px", "color": "#6b7280", "marginBottom": "8px"}}, ["Average Score"]), __jacJsx("div", {"style": {"fontSize": "32px", "fontWeight": "bold", "color": "#10b981"}}, [Math.round(overall.avgScore * 100), "%"])])]), __jacJsx("div", {"style": {"background": "#ffffff", "borderRadius": "12px", "padding": "24px", "boxShadow": "0 1px 3px rgba(0,0,0,0.1)"}}, [__jacJsx("h3", {"style": {"color": "#1f2937", "marginBottom": "16px"}}, ["Lesson Progress Details"]), __jacJsx("div", {"style": {"display": "flex", "flexDirection": "column", "gap": "12px"}}, [lessons.map(lesson => {
    let progress = userProgress.find(p => {
      return p.lesson_id === lesson.id;
    }) || {"status": "not_started", "score": 0.0};
    let statusBackground = "";
    let statusColor = "";
    if (progress.status === "completed" || progress.status === "quiz_completed") {
      statusBackground = "#d1fae5";
      statusColor = "#065f46";
    } else if (progress.status === "started") {
      statusBackground = "#fef3c7";
      statusColor = "#92400e";
    } else {
      statusBackground = "#e5e7eb";
      statusColor = "#6b7280";
    }
    if (progress.status === "not_started") {
      statusText === "Not Started";
    } else if (progress.status === "started") {
      statusText === "In Progress";
    } else if (progress.status === "completed") {
      statusText === "Completed";
    } else if (progress.status === "quiz_completed") {
      statusText === "Quiz Completed";
    } else {
      statusText === progress.status;
    }
    progressColor === "";
    if (progress.score >= 0.7) {
      progressColor === "#10b981";
    } else if (progress.score >= 0.4) {
      progressColor === "#f59e0b";
    } else {
      progressColor === "#ef4444";
    }
    return __jacJsx("div", {"key": lesson.id, "style": {"padding": "16px", "border": "1px solid #e5e7eb", "borderRadius": "8px"}}, [__jacJsx("div", {"style": {"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "8px"}}, [__jacJsx("h4", {"style": {"margin": "0", "color": "#1f2937"}}, [lesson.title]), __jacJsx("span", {"style": {"background": statusBackground, "color": statusColor, "padding": "4px 12px", "borderRadius": "12px", "fontSize": "12px", "fontWeight": "600"}}, [statusText])]), __jacJsx("div", {"style": {"marginTop": "12px"}}, [__jacJsx("div", {"style": {"display": "flex", "justifyContent": "space-between", "marginBottom": "4px"}}, [__jacJsx("span", {"style": {"fontSize": "14px", "color": "#6b7280"}}, ["Progress"]), __jacJsx("span", {"style": {"fontSize": "14px", "color": "#1f2937"}}, [Math.round(progress.score * 100), "%"])]), __jacJsx("div", {"style": {"height": "6px", "background": "#e5e7eb", "borderRadius": "3px", "overflow": "hidden"}}, [__jacJsx("div", {"style": {"width": new Set([progress.score * 100]) + "%", "height": "100%", "background": new Set([progressColor]), "transition": "width 0.3s"}}, [])])])]);
  })])])])]);
}
function LoginPage() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let navigate = useNavigate();
  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    let success = await jacLogin(email, password);
    if (success) {
      let result = await __jacSpawn("login_user", "", {"email": email, "password": password});
      if (result.reports && result.reports[0].success) {
        let sessionData = result.reports[0];
        console.log("Session data received:", sessionData);
        console.log("Session ID to store:", sessionData.session_id);
        console.log("User data to store:", sessionData.user);
        localStorage.setItem("session_id", sessionData.session_id);
        localStorage.setItem("current_user", JSON.stringify(sessionData.user));
        localStorage.setItem("user_email", email);
        navigate("/dashboard");
      }
    } else {
      setError("Invalid credentials");
    }
  }
  return __jacJsx("div", {"style": {"minHeight": "calc(100vh - 48px)", "display": "flex", "alignItems": "center", "justifyContent": "center", "background": "#f5f5f5"}}, [__jacJsx("div", {"style": {"background": "#ffffff", "padding": "30px", "borderRadius": "8px", "width": "280px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("h2", {"style": {"marginBottom": "20px"}}, ["Login to Jac Tutor"]), __jacJsx("form", {"onSubmit": handleLogin}, [__jacJsx("input", {"type": "email", "value": email, "onChange": e => {
    setEmail(e.target.value);
  }, "placeholder": "Email", "style": {"width": "100%", "padding": "8px", "marginBottom": "10px", "border": "1px solid #ddd", "borderRadius": "4px", "boxSizing": "border-box"}}, []), __jacJsx("input", {"type": "password", "value": password, "onChange": e => {
    setPassword(e.target.value);
  }, "placeholder": "Password", "style": {"width": "100%", "padding": "8px", "marginBottom": "10px", "border": "1px solid #ddd", "borderRadius": "4px", "boxSizing": "border-box"}}, []), error && __jacJsx("div", {"style": {"color": "#dc2626", "fontSize": "14px", "marginBottom": "10px"}}, [error]), __jacJsx("button", {"type": "submit", "style": {"width": "100%", "padding": "8px", "background": "#4361ee", "color": "#ffffff", "border": "none", "borderRadius": "4px", "cursor": "pointer", "fontWeight": "600"}}, ["Login"])]), __jacJsx("p", {"style": {"textAlign": "center", "marginTop": "12px", "fontSize": "14px"}}, ["Need an account? ", __jacJsx(Link, {"to": "/signup"}, ["Sign up"])])])]);
}
function SignupPage() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [name, setName] = useState("");
  let [error, setError] = useState("");
  let navigate = useNavigate();
  async function handleSignup(e) {
    e.preventDefault();
    setError("");
    if (!email || !password || !name) {
      setError("Please fill in all fields");
      return;
    }
    let result = await jacSignup(email, password);
    if (result["success"]) {
      let profileResult = await __jacSpawn("create_user_profile", "", {"email": email, "name": name, "role": "student"});
      navigate("/dashboard");
    } else {
      setError(result["error"] ? result["error"] : "Signup failed");
    }
  }
  return __jacJsx("div", {"style": {"minHeight": "calc(100vh - 48px)", "display": "flex", "alignItems": "center", "justifyContent": "center", "background": "#f5f5f5"}}, [__jacJsx("div", {"style": {"background": "#ffffff", "padding": "30px", "borderRadius": "8px", "width": "280px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("h2", {"style": {"marginBottom": "20px"}}, ["Sign Up for Jac Tutor"]), __jacJsx("form", {"onSubmit": handleSignup}, [__jacJsx("input", {"type": "text", "value": name, "onChange": e => {
    setName(e.target.value);
  }, "placeholder": "Full Name", "style": {"width": "100%", "padding": "8px", "marginBottom": "10px", "border": "1px solid #ddd", "borderRadius": "4px", "boxSizing": "border-box"}}, []), __jacJsx("input", {"type": "email", "value": email, "onChange": e => {
    setEmail(e.target.value);
  }, "placeholder": "Email", "style": {"width": "100%", "padding": "8px", "marginBottom": "10px", "border": "1px solid #ddd", "borderRadius": "4px", "boxSizing": "border-box"}}, []), __jacJsx("input", {"type": "password", "value": password, "onChange": e => {
    setPassword(e.target.value);
  }, "placeholder": "Password", "style": {"width": "100%", "padding": "8px", "marginBottom": "10px", "border": "1px solid #ddd", "borderRadius": "4px", "boxSizing": "border-box"}}, []), error && __jacJsx("div", {"style": {"color": "#dc2626", "fontSize": "14px", "marginBottom": "10px"}}, [error]), __jacJsx("button", {"type": "submit", "style": {"width": "100%", "padding": "8px", "background": "#4361ee", "color": "#ffffff", "border": "none", "borderRadius": "4px", "cursor": "pointer", "fontWeight": "600"}}, ["Sign Up"])]), __jacJsx("p", {"style": {"textAlign": "center", "marginTop": "12px", "fontSize": "14px"}}, ["Have an account? ", __jacJsx(Link, {"to": "/login"}, ["Login"])])])]);
}
function HomePage() {
  if (jacIsLoggedIn()) {
    return __jacJsx(Navigate, {"to": "/dashboard"}, []);
  }
  return __jacJsx(Navigate, {"to": "/login"}, []);
}
function app() {
  return __jacJsx(Router, {}, [__jacJsx("div", {"style": {"fontFamily": "system-ui, sans-serif"}}, [__jacJsx(Navigation, {}, []), __jacJsx(Routes, {}, [__jacJsx(Route, {"path": "/", "element": __jacJsx(HomePage, {}, [])}, []), __jacJsx(Route, {"path": "/login", "element": __jacJsx(LoginPage, {}, [])}, []), __jacJsx(Route, {"path": "/signup", "element": __jacJsx(SignupPage, {}, [])}, []), __jacJsx(Route, {"path": "/dashboard", "element": __jacJsx(DashboardPage, {}, [])}, []), __jacJsx(Route, {"path": "/lessons", "element": __jacJsx(DashboardPage, {}, [])}, []), __jacJsx(Route, {"path": "/progress", "element": __jacJsx(ProgressPage, {}, [])}, [])])])]);
}
export { DashboardPage, HomePage, LoginPage, Navigation, ProgressPage, SignupPage, app };
