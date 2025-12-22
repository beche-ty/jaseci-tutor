import {__jacJsx, __jacSpawn} from "@jac-client/utils";
import { useState, useEffect } from "react";
import { Router, Routes, Route, Link, Navigate, useNavigate, useLocation, jacSignup, jacLogin, jacLogout, jacIsLoggedIn } from "@jac-client/utils";
function Landing() {
  return __jacJsx("div", {"style": {"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center", "backgroundColor": "#f0fdfa", "color": "#065f46", "fontFamily": "sans-serif"}}, [__jacJsx("div", {"style": {"textAlign": "center", "padding": "40px", "backgroundColor": "#ffffff", "borderRadius": "16px", "boxShadow": "0 10px 25px rgba(0,0,0,0.1)", "width": "400px"}}, [__jacJsx("h1", {"style": {"fontSize": "3rem", "marginBottom": "1rem", "color": "#065f46"}}, ["Welcome to Jaseci Master"]), __jacJsx("p", {"style": {"fontSize": "1.25rem", "marginBottom": "3rem", "color": "#4b5563"}}, ["Your self-paced learning portal for Jac and Jaseci"]), __jacJsx("div", {"style": {"display": "flex", "gap": "1rem", "justifyContent": "center"}}, [__jacJsx(Link, {"to": "/login", "style": {"backgroundColor": "#065f46", "color": "#ffffff", "padding": "1rem 2rem", "borderRadius": "8px", "textDecoration": "none", "fontWeight": "bold"}}, ["Login"]), __jacJsx(Link, {"to": "/signup", "style": {"backgroundColor": "#ffffff", "color": "#065f46", "padding": "1rem 2rem", "borderRadius": "8px", "border": "2px solid #065f46", "textDecoration": "none", "fontWeight": "bold"}}, ["Sign Up"]), jacIsLoggedIn() && __jacJsx(Link, {"to": "/dashboard", "style": {"backgroundColor": "#10b981", "color": "#ffffff", "padding": "1rem 2rem", "borderRadius": "8px", "textDecoration": "none", "fontWeight": "bold"}}, ["Go to Dashboard"])])])]);
}
function TutorNavigation() {
  let isLoggedIn = jacIsLoggedIn();
  let navigate = useNavigate();
  let [userInfo, setUserInfo] = useState(null);
  let [sessionId, setSessionId] = useState("");
  useEffect(() => {
    if (isLoggedIn) {
      let storedSessionId = localStorage.getItem("session_id");
      if (storedSessionId) {
        setSessionId(storedSessionId);
      }
    }
  }, [isLoggedIn]);
  useEffect(() => {
    async function loadUserInfo() {
      if (isLoggedIn && sessionId) {
        let result = await __jacSpawn("get_session_user", "", {"session_id": sessionId});
        if (result.reports && result.reports.length > 0) {
          setUserInfo(result.reports[0]);
        }
      }
    }
    loadUserInfo();
  }, [isLoggedIn, sessionId]);
  function handleLogout(e) {
    e.preventDefault();
    sessionId = localStorage.getItem("session_id");
    jacLogout();
    navigate("/login");
  }
  if (isLoggedIn && userInfo && userInfo.role === "tutor") {
    return __jacJsx("nav", {"style": {"padding": "12px 24px", "background": "#7c3aed", "color": "#ffffff", "display": "flex", "justifyContent": "space-between"}}, [__jacJsx("div", {"style": {"fontWeight": "600", "fontSize": "18px"}}, ["Jac Tutor Dashboard"]), __jacJsx("div", {"style": {"display": "flex", "gap": "16px", "alignItems": "center"}}, [__jacJsx("span", {}, ["Welcome, Tutor ", userInfo.name]), __jacJsx(Link, {"to": "/tutor/dashboard", "style": {"color": "#ffffff", "textDecoration": "none"}}, ["Manage Lessons"]), __jacJsx(Link, {"to": "/tutor/create", "style": {"color": "#ffffff", "textDecoration": "none"}}, ["Create Lesson"]), __jacJsx(Link, {"to": "/dashboard", "style": {"color": "#ffffff", "textDecoration": "none"}}, ["Student View"]), __jacJsx("button", {"onClick": handleLogout, "style": {"background": "none", "color": "#ffffff", "border": "1px solid #ffffff", "padding": "2px 10px", "borderRadius": "4px", "cursor": "pointer"}}, ["Logout"])])]);
  }
  return null;
}
function TutorDashboardPage() {
  if (!jacIsLoggedIn()) {
    return __jacJsx(Navigate, {"to": "/login"}, []);
  }
  let [userInfo, setUserInfo] = useState(null);
  let [lessons, setLessons] = useState([]);
  let [sessionId, setSessionId] = useState("");
  useEffect(() => {
    async function loadUserInfo() {
      let currentSessionId = localStorage.getItem("session_id");
      if (currentSessionId) {
        setSessionId(currentSessionId);
        let result = await __jacSpawn("get_session_user", "", {"session_id": currentSessionId});
        if (result.reports && result.reports.length > 0) {
          let userData = result.reports[0];
          setUserInfo(userData);
          if (userData.role !== "tutor") {
            window.location.href = "/dashboard";
          }
        }
      }
    }
    loadUserInfo();
  }, []);
  useEffect(() => {
    async function loadLessons() {
      let result = await __jacSpawn("list_lessons", "", {});
      if (result.reports && result.reports.length > 0) {
        let lessonsData = result.reports[0];
        if (lessonsData.length === 0) {
          print("No lessons found. Syncing from GitHub...");
          let syncResult = await __jacSpawn("sync_lessons_from_github", "", {});
          if (syncResult.reports && syncResult.reports.length > 0) {
            print("Sync completed:", syncResult.reports[0]);
            result = await __jacSpawn("list_lessons", "", {});
            if (result.reports && result.reports.length > 0) {
              setLessons(result.reports[0]);
            }
          }
        } else {
          setLessons(lessonsData);
        }
      } else {
        print("Failed to load lessons");
      }
    }
    loadLessons();
  }, []);
  function handleDeleteLesson(lessonId) {
    print("Delete lesson:", lessonId);
  }
  if (!userInfo || userInfo.role !== "tutor") {
    return __jacJsx("div", {}, ["Loading..."]);
  }
  return __jacJsx("div", {"style": {"minHeight": "calc(100vh - 48px)", "background": "#f9fafb", "padding": "24px"}}, [__jacJsx("div", {"style": {"maxWidth": "1200px", "margin": "0 auto"}}, [__jacJsx("h1", {"style": {"color": "#1f2937", "marginBottom": "24px"}}, ["Tutor Dashboard"]), __jacJsx("div", {"style": {"display": "flex", "justifyContent": "space-between", "marginBottom": "24px"}}, [__jacJsx("h2", {"style": {"color": "#374151"}}, ["Manage Lessons"]), __jacJsx(Link, {"to": "/tutor/create"}, [__jacJsx("button", {"style": {"padding": "8px 16px", "background": "#7c3aed", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}}, ["+ Create New Lesson"])])]), __jacJsx("div", {"style": {"background": "#ffffff", "borderRadius": "8px", "padding": "24px", "boxShadow": "0 1px 3px rgba(0,0,0,0.1)"}}, [__jacJsx("table", {"style": {"width": "100%", "borderCollapse": "collapse"}}, [__jacJsx("thead", {}, [__jacJsx("tr", {"style": {"borderBottom": "2px solid #e5e7eb"}}, [__jacJsx("th", {"style": {"textAlign": "left", "padding": "12px", "color": "#374151"}}, ["Chapter"]), __jacJsx("th", {"style": {"textAlign": "left", "padding": "12px", "color": "#374151"}}, ["Title"]), __jacJsx("th", {"style": {"textAlign": "left", "padding": "12px", "color": "#374151"}}, ["Description"]), __jacJsx("th", {"style": {"textAlign": "left", "padding": "12px", "color": "#374151"}}, ["Actions"])])]), __jacJsx("tbody", {}, [lessons.map(lesson => {
    return __jacJsx("tr", {"key": lesson.id, "style": {"borderBottom": "1px solid #e5e7eb"}}, [__jacJsx("td", {"style": {"padding": "12px", "color": "#6b7280"}}, [lesson.id]), __jacJsx("td", {"style": {"padding": "12px", "color": "#1f2937", "fontWeight": "500"}}, [lesson.title]), __jacJsx("td", {"style": {"padding": "12px", "color": "#6b7280"}}, [lesson.description]), __jacJsx("td", {"style": {"padding": "12px"}}, [__jacJsx("div", {"style": {"display": "flex", "gap": "8px"}}, [__jacJsx(Link, {"to": "/tutor/edit/" + lesson.id}, [__jacJsx("button", {"style": {"padding": "4px 12px", "background": "#3b82f6", "color": "white", "border": "none", "borderRadius": "4px", "cursor": "pointer"}}, ["Edit"])]), __jacJsx("button", {"onClick": () => {
      handleDeleteLesson(lesson.id);
    }, "style": {"padding": "4px 12px", "background": "#ef4444", "color": "white", "border": "none", "borderRadius": "4px", "cursor": "pointer"}}, ["Delete"]), __jacJsx(Link, {"to": "/tutor/quiz/" + lesson.id}, [__jacJsx("button", {"style": {"padding": "4px 12px", "background": "#10b981", "color": "white", "border": "none", "borderRadius": "4px", "cursor": "pointer"}}, ["Add Quiz"])])])])]);
  })])])])])]);
}
function Navigation() {
  let isLoggedIn = jacIsLoggedIn();
  let navigate = useNavigate();
  let [sessionId, setSessionId] = useState("");
  let [userInfo, setUserInfo] = useState(null);
  let [userRole, setUserRole] = useState("student");
  useEffect(() => {
    if (isLoggedIn) {
      let storedSessionId = localStorage.getItem("session_id");
      if (storedSessionId) {
        setSessionId(storedSessionId);
      }
      let storedRole = localStorage.getItem("user_role");
      if (storedRole) {
        setUserRole(storedRole);
      }
    }
  }, [isLoggedIn]);
  useEffect(() => {
    async function loadUserInfo() {
      if (isLoggedIn && sessionId) {
        let result = await __jacSpawn("get_session_user", "", {"session_id": sessionId});
        if (result.reports && result.reports.length > 0) {
          let userData = result.reports[0];
          if (!userData.error) {
            setUserInfo(userData);
            if (userData.role) {
              setUserRole(userData.role);
            }
          }
        }
      }
    }
    loadUserInfo();
  }, [isLoggedIn, sessionId]);
  function handleLogout(e) {
    e.preventDefault();
    sessionId = localStorage.getItem("session_id");
    navigate("/login");
  }
  if (isLoggedIn) {
    let userName = "Student";
    if (userInfo && userInfo.name) {
      userName = userInfo.name;
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
  let [lessons, setLessons] = useState([]);
  let [currentLesson, setCurrentLesson] = useState(null);
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
  function selectLesson(lessonId) {
    async function loadLesson() {
      let result = await __jacSpawn("get_lesson_detail", "", {"lesson_id": lessonId});
      if (result.reports && result.reports.length > 0) {
        setCurrentLesson(result.reports[0]);
      }
    }
    loadLesson();
  }
  let lessonElements = [];
  for (const lesson of lessons) {
    let isActive = false;
    if (currentLesson && currentLesson.id === lesson.id) {
      isActive = true;
    }
    let backgroundColor = "#ffffff";
    let border = "1px solid #e5e7eb";
    if (isActive) {
      backgroundColor = "#eff6ff";
      border = "2px solid #3b82f6";
    }
    let lessonElement = __jacJsx("div", {"key": lesson.id, "onClick": () => {
      selectLesson(lesson.id);
    }, "style": {"padding": "12px", "backgroundColor": backgroundColor, "border": border, "borderRadius": "8px", "cursor": "pointer", "marginBottom": "8px"}}, [__jacJsx("div", {"style": {"fontWeight": "bold", "color": "#1f2937"}}, [lesson.title]), __jacJsx("div", {"style": {"fontSize": "12px", "color": "#6b7280", "marginTop": "4px"}}, [lesson.description])]);
    lessonElements.push(lessonElement);
  }
  let mainContent = __jacJsx("div", {"style": {"padding": "40px", "textAlign": "center", "color": "#9ca3af"}}, [__jacJsx("h3", {}, ["Select a Lesson"]), __jacJsx("p", {}, ["Choose a lesson from the left panel to get started"])]);
  if (currentLesson) {
    mainContent = __jacJsx("div", {}, [__jacJsx("h2", {"style": {"color": "#1f2937", "marginBottom": "20px"}}, [currentLesson.title]), __jacJsx("div", {"style": {"backgroundColor": "#f9fafb", "borderRadius": "8px", "padding": "20px", "whiteSpace": "pre-wrap"}}, [currentLesson.content])]);
  }
  let sidebarContent = __jacJsx("div", {"style": {"padding": "20px", "textAlign": "center", "color": "#9ca3af"}}, [__jacJsx("p", {}, ["No lessons available"])]);
  if (lessons.length > 0) {
    sidebarContent = __jacJsx("div", {}, [__jacJsx("h3", {"style": {"color": "#374151", "marginBottom": "16px"}}, ["Lessons"]), lessonElements]);
  }
  return __jacJsx("div", {"style": {"minHeight": "100vh", "backgroundColor": "#f9fafb"}}, [__jacJsx("div", {"style": {"maxWidth": "1200px", "margin": "0 auto", "padding": "20px"}}, [__jacJsx("h1", {"style": {"color": "#1f2937", "marginBottom": "20px"}}, ["Student Dashboard"]), __jacJsx("div", {"style": {"display": "flex", "gap": "20px"}}, [__jacJsx("div", {"style": {"width": "300px", "backgroundColor": "white", "borderRadius": "8px", "padding": "20px"}}, [sidebarContent]), __jacJsx("div", {"style": {"flex": "1", "backgroundColor": "white", "borderRadius": "8px", "padding": "20px"}}, [mainContent])])])]);
}
function ProgressPage() {
  if (!jacIsLoggedIn()) {
    return __jacJsx(Navigate, {"to": "/login"}, []);
  }
  let [userProgress, setUserProgress] = useState([]);
  let [lessons, setLessons] = useState([]);
  let [userInfo, setUserInfo] = useState(null);
  let userEmail = "";
  if (userInfo) {
    userEmail = userInfo.email;
  }
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
        if (progressResult.reports) {}
        setUserProgress(progressResult.reports[0]);
      }
      loadData();
    }
  }, [userEmail]);
  function calculateProgress() {
    let completed = [];
    for (const p of userProgress) {
      if (p.status === "completed" || p.status === "quiz_completed") {
        completed.append(p);
      }
    }
    let totalScore = 0;
    if (len(completed) > 0) {
      let sumScore = 0;
      for (const p of completed) {
        sumScore = sumScore + p.score;
      }
      totalScore = sumScore / len(completed);
    }
    return {"completed": len(completed), "total": len(lessons), "avgScore": totalScore};
  }
  let overall = calculateProgress();
  return __jacJsx("div", {"style": {"minHeight": "calc(100vh - 48px)", "background": "#f9fafb", "padding": "24px"}}, [__jacJsx("div", {"style": {"maxWidth": "800px", "margin": "0 auto"}}, [__jacJsx("h1", {"style": {"color": "#1f2937", "marginBottom": "32px"}}, ["Learning Progress"]), __jacJsx("div", {"style": {"display": "flex", "gap": "16px", "marginBottom": "32px"}}, [__jacJsx("div", {"style": {"flex": "1", "background": "#ffffff", "padding": "20px", "borderRadius": "12px", "boxShadow": "0 1px 3px rgba(0,0,0,0.1)"}}, [__jacJsx("div", {"style": {"fontSize": "14px", "color": "#6b7280", "marginBottom": "8px"}}, ["Lessons Completed"]), __jacJsx("div", {"style": {"fontSize": "32px", "fontWeight": "bold", "color": "#1f2937"}}, [overall.completed, "/", overall.total])]), __jacJsx("div", {"style": {"flex": "1", "background": "#ffffff", "padding": "20px", "borderRadius": "12px", "boxShadow": "0 1px 3px rgba(0,0,0,0.1)"}}, [__jacJsx("div", {"style": {"fontSize": "14px", "color": "#6b7280", "marginBottom": "8px"}}, ["Average Score"]), __jacJsx("div", {"style": {"fontSize": "32px", "fontWeight": "bold", "color": "#10b981"}}, [Math.round(overall.avgScore * 100), "%"])])]), __jacJsx("div", {"style": {"background": "#ffffff", "borderRadius": "12px", "padding": "24px", "boxShadow": "0 1px 3px rgba(0,0,0,0.1)"}}, [__jacJsx("h3", {"style": {"color": "#1f2937", "marginBottom": "16px"}}, ["Lesson Progress Details"]), __jacJsx("div", {"style": {"display": "flex", "flexDirection": "column", "gap": "12px"}}, [lessons.map(lesson => {
    let progress = {"status": "not_started", "score": 0.0};
    for (const p of userProgress) {
      if (p.lesson_id === lesson.id) {
        progress = p;
        break;
      }
    }
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
    let statusText = progress.status;
    if (progress.status === "not_started") {
      statusText = "Not Started";
    } else if (progress.status === "started") {
      statusText = "In Progress";
    } else if (progress.status === "completed") {
      statusText = "Completed";
    } else if (progress.status === "quiz_completed") {
      statusText = "Quiz Completed";
    }
    let progressColor = "";
    if (progress.score >= 0.7) {
      progressColor = "#10b981";
    } else if (progress.score >= 0.4) {
      progressColor = "#f59e0b";
    } else {
      progressColor = "#ef4444";
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
      if (result.reports && result.reports.length > 0 && result.reports[0].success) {
        let sessionData = result.reports[0];
        console.log("Session data received:", sessionData);
        localStorage.setItem("session_id", sessionData.session_id);
        localStorage.setItem("current_user", JSON.stringify(sessionData.user));
        localStorage.setItem("user_email", email);
        let userRole = "student";
        if (sessionData.user && sessionData.user.role) {
          userRole = sessionData.user.role;
        }
        console.log("Role of user", userRole);
        if (userRole === "tutor") {
          navigate("/tutor/dashboard");
        } else {
          navigate("/dashboard");
        }
      } else {
        let errorMsg = "Login failed";
        if (result.reports && result.reports.length > 0 && result.reports[0].error) {
          errorMsg = result.reports[0].error;
        }
        setError(errorMsg);
      }
    } else {
      setError("Invalid email or password");
    }
  }
  return __jacJsx("div", {"style": {"minHeight": "calc(100vh - 48px)", "display": "flex", "alignItems": "center", "justifyContent": "center", "background": "#f5f5f5"}}, [__jacJsx("div", {"style": {"background": "#ffffff", "padding": "30px", "borderRadius": "8px", "width": "280px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("h2", {"style": {"marginBottom": "20px"}}, ["Login to Jac Tutor"]), __jacJsx("form", {"onSubmit": handleLogin}, [__jacJsx("input", {"type": "email", "value": email, "onChange": e => {
    setEmail(e.target.value);
  }, "placeholder": "Email", "style": {"width": "100%", "padding": "8px", "marginBottom": "10px", "border": "1px solid #ddd", "borderRadius": "4px", "boxSizing": "border-box"}}, []), __jacJsx("input", {"type": "password", "value": password, "onChange": e => {
    setPassword(e.target.value);
  }, "placeholder": "Password", "style": {"width": "100%", "padding": "8px", "marginBottom": "10px", "border": "1px solid #ddd", "borderRadius": "4px", "boxSizing": "border-box"}}, []), error && __jacJsx("div", {"style": {"color": "#dc2626", "fontSize": "14px", "marginBottom": "10px"}}, [error]), __jacJsx("button", {"type": "submit", "style": {"width": "100%", "padding": "8px", "background": "#4361ee", "color": "#ffffff", "border": "none", "borderRadius": "4px", "cursor": "pointer", "fontWeight": "600"}}, ["Login"])]), __jacJsx("p", {"style": {"textAlign": "center", "marginTop": "12px", "fontSize": "14px"}}, ["Need an account? ", __jacJsx(Link, {"to": "/signup"}, ["Sign up"])]), __jacJsx("div", {"style": {"marginTop": "12px", "textAlign": "center"}}, [__jacJsx("p", {"style": {"color": "#6b7280", "fontSize": "12px", "marginBottom": "4px"}}, ["Sign up as:"]), __jacJsx("div", {"style": {"display": "flex", "justifyContent": "center", "gap": "12px"}}, [__jacJsx("span", {"style": {"color": "#1d4ed8", "fontSize": "12px", "fontWeight": "500"}}, ["Student"]), __jacJsx("span", {"style": {"color": "#6b7280", "fontSize": "12px"}}, ["or"]), __jacJsx("span", {"style": {"color": "#0369a1", "fontSize": "12px", "fontWeight": "500"}}, ["Tutor"])])])])]);
}
function SignupPage() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [name, setName] = useState("");
  let [role, setRole] = useState("student");
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
      let profileResult = await __jacSpawn("create_user_profile", "", {"email": email, "name": name, "role": role});
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
  }, "placeholder": "Password", "style": {"width": "100%", "padding": "8px", "marginBottom": "10px", "border": "1px solid #ddd", "borderRadius": "4px", "boxSizing": "border-box"}}, []), __jacJsx("div", {"style": {"marginBottom": "10px"}}, [__jacJsx("label", {"style": {"display": "block", "marginBottom": "4px", "color": "#374151", "fontWeight": "500"}}, ["Role"]), __jacJsx("select", {"value": role, "onChange": e => {
    setRole(e.target.value);
  }, "style": {"width": "100%", "padding": "8px", "border": "1px solid #ddd", "borderRadius": "4px", "boxSizing": "border-box"}}, [__jacJsx("option", {"value": "student"}, ["Student"]), __jacJsx("option", {"value": "tutor"}, ["Tutor"])])]), error && __jacJsx("div", {"style": {"color": "#dc2626", "fontSize": "14px", "marginBottom": "10px"}}, [error]), __jacJsx("button", {"type": "submit", "style": {"width": "100%", "padding": "8px", "background": "#4361ee", "color": "#ffffff", "border": "none", "borderRadius": "4px", "cursor": "pointer", "fontWeight": "600"}}, ["Sign Up"])]), __jacJsx("p", {"style": {"textAlign": "center", "marginTop": "12px", "fontSize": "14px"}}, ["Have an account? ", __jacJsx(Link, {"to": "/login"}, ["Login"])])])]);
}
function HomePage() {
  if (jacIsLoggedIn()) {
    return __jacJsx(Navigate, {"to": "/dashboard"}, []);
    return __jacJsx(Navigate, {"to": "/login"}, []);
  }
}
function app() {
  let [userRole, setUserRole] = useState(null);
  useEffect(() => {
    async function checkUserRole() {
      if (jacIsLoggedIn()) {
        let currentSessionId = localStorage.getItem("session_id");
        if (currentSessionId) {
          let result = await __jacSpawn("get_session_user", "", {"session_id": currentSessionId});
          if (result.reports && result.reports.length > 0) {
            let userData = result.reports[0];
            if (!userData.error && userData.role) {
              setUserRole(userData.role);
            }
          }
        }
      }
      checkUserRole();
    }
  }, []);
  function renderNavigation() {
    if (userRole === "tutor") {
      return __jacJsx(TutorNavigation, {}, []);
    }
    return __jacJsx(Navigation, {}, []);
  }
  return __jacJsx(Router, {}, [__jacJsx("div", {"style": {"fontFamily": "system-ui, sans-serif"}}, [renderNavigation(), __jacJsx(Routes, {}, [__jacJsx(Route, {"path": "/", "element": __jacJsx(Landing, {}, [])}, []), __jacJsx(Route, {"path": "/login", "element": __jacJsx(LoginPage, {}, [])}, []), __jacJsx(Route, {"path": "/signup", "element": __jacJsx(SignupPage, {}, [])}, []), __jacJsx(Route, {"path": "/dashboard", "element": __jacJsx(DashboardPage, {}, [])}, []), __jacJsx(Route, {"path": "/lessons", "element": __jacJsx(DashboardPage, {}, [])}, []), __jacJsx(Route, {"path": "/progress", "element": __jacJsx(ProgressPage, {}, [])}, []), userRole === "tutor" && __jacJsx(null, {}, [__jacJsx(Route, {"path": "/tutor/dashboard", "element": __jacJsx(TutorDashboardPage, {}, [])}, []), __jacJsx(Route, {"path": "/tutor/create", "element": __jacJsx(TutorCreateLessonPage, {}, [])}, []), __jacJsx(Route, {"path": "/tutor/edit/:lessonId", "element": __jacJsx(TutorCreateLessonPage, {}, [])}, [])])])])]);
}
export { DashboardPage, HomePage, Landing, LoginPage, Navigation, ProgressPage, SignupPage, TutorDashboardPage, TutorNavigation, app };
