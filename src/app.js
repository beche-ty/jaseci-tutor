import {__jacJsx, __jacSpawn} from "@jac-client/utils";
import { useState, useEffect } from "react";
import { Router, Routes, Route, Link, Navigate, useNavigate, useLocation, jacSignup, jacLogin, jacLogout, jacIsLoggedIn } from "@jac-client/utils";
function LandingPage() {
  return __jacJsx("div", {"style": {"minHeight": "100vh", "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}}, [__jacJsx("div", {"style": {"maxWidth": "1200px", "margin": "0 auto", "padding": "20px"}}, [__jacJsx("header", {"style": {"display": "flex", "justifyContent": "space-between", "alignItems": "center", "padding": "20px 0"}}, [__jacJsx("div", {"style": {"fontSize": "24px", "fontWeight": "bold", "color": "white"}}, ["Jaseci Learning Platform"]), __jacJsx("div", {}, [__jacJsx("a", {"href": "/login", "style": {"color": "white", "marginRight": "20px", "textDecoration": "none"}}, ["Login"]), __jacJsx("a", {"href": "/register", "style": {"color": "white", "textDecoration": "none"}}, ["Sign Up"])])]), __jacJsx("main", {"style": {"textAlign": "center", "padding": "100px 20px"}}, [__jacJsx("h1", {"style": {"fontSize": "48px", "color": "white", "marginBottom": "20px"}}, ["Welcome to LearnPlatform"]), __jacJsx("p", {"style": {"fontSize": "20px", "color": "rgba(255, 255, 255, 0.8)", "maxWidth": "600px", "margin": "0 auto 40px"}}, ["The ultimate platform for tutors and students to create, share, and learn from interactive educational content."]), __jacJsx("div", {"style": {"display": "flex", "justifyContent": "center", "gap": "20px"}}, [__jacJsx("a", {"href": "/register", "style": {"padding": "15px 30px", "background": "white", "color": "#667eea", "borderRadius": "30px", "textDecoration": "none", "fontWeight": "bold", "fontSize": "16px"}}, ["Get Started Free"]), __jacJsx("a", {"href": "/login", "style": {"padding": "15px 30px", "background": "transparent", "color": "white", "border": "2px solid white", "borderRadius": "30px", "textDecoration": "none", "fontWeight": "bold", "fontSize": "16px"}}, ["Try Demo"])])]), __jacJsx("section", {"style": {"background": "white", "borderRadius": "10px", "padding": "60px 40px", "marginTop": "60px"}}, [__jacJsx("h2", {"style": {"textAlign": "center", "marginBottom": "40px", "color": "#333"}}, ["Why Choose LearnPlatform?"]), __jacJsx("div", {"style": {"display": "grid", "gridTemplateColumns": "repeat(3, 1fr)", "gap": "30px"}}, [__jacJsx("div", {"style": {"textAlign": "center"}}, [__jacJsx("div", {"style": {"fontSize": "40px", "marginBottom": "20px"}}, ["📚"]), __jacJsx("h3", {"style": {"color": "#333"}}, ["Interactive Content"]), __jacJsx("p", {}, ["Create engaging lessons with multimedia support"])]), __jacJsx("div", {"style": {"textAlign": "center"}}, [__jacJsx("div", {"style": {"fontSize": "40px", "marginBottom": "20px"}}, ["👨‍🏫"]), __jacJsx("h3", {"style": {"color": "#333"}}, ["For Tutors"]), __jacJsx("p", {}, ["Build and manage your course materials easily"])]), __jacJsx("div", {"style": {"textAlign": "center"}}, [__jacJsx("div", {"style": {"fontSize": "40px", "marginBottom": "20px"}}, ["🎓"]), __jacJsx("h3", {"style": {"color": "#333"}}, ["For Students"]), __jacJsx("p", {}, ["Learn at your own pace with structured content"])])])])])]);
}
function TutorNavigation() {
  let [userInfo, setUserInfo] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    async function loadUserInfo() {
      let currentSessionId = localStorage.getItem("session_id");
      if (currentSessionId) {
        let result = await __jacSpawn("get_session_user", "", {"session_id": currentSessionId});
        if (result.reports && result.reports.length > 0) {
          setUserInfo(result.reports[0]);
        }
      }
    }
    loadUserInfo();
  }, []);
  function handleLogout(e) {
    e.preventDefault();
    jacLogout();
    localStorage.removeItem("session_id");
    localStorage.removeItem("user_role");
    localStorage.removeItem("current_user");
    navigate("/login");
  }
  if (!userInfo) {
    return __jacJsx("div", {}, ["Loading..."]);
  }
  return __jacJsx("nav", {"style": {"padding": "12px 24px", "background": "#7c3aed", "color": "#ffffff", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}, [__jacJsx("div", {"style": {"fontWeight": "600", "fontSize": "18px"}}, ["Jac Tutor Dashboard"]), __jacJsx("div", {"style": {"display": "flex", "gap": "16px", "alignItems": "center"}}, [__jacJsx("span", {}, ["Welcome, Tutor ", userInfo.name]), __jacJsx(Link, {"to": "/tutor/dashboard", "style": {"color": "#ffffff", "textDecoration": "none"}}, ["Dashboard"]), __jacJsx(Link, {"to": "/tutor/lessons", "style": {"color": "#ffffff", "textDecoration": "none"}}, ["Manage Lessons"]), __jacJsx(Link, {"to": "/tutor/students", "style": {"color": "#ffffff", "textDecoration": "none"}}, ["Students"]), __jacJsx("button", {"onClick": handleLogout, "style": {"background": "none", "color": "#ffffff", "border": "1px solid #ffffff", "padding": "2px 10px", "borderRadius": "4px", "cursor": "pointer"}}, ["Logout"])])]);
}
function TutorSidebar() {
  let navigate = useNavigate();
  function handleNavigation(path) {
    navigate(path);
  }
  return __jacJsx("div", {"style": {"width": "250px", "background": "#f8fafc", "borderRight": "1px solid #e5e7eb", "padding": "20px", "height": "calc(100vh - 64px)"}}, [__jacJsx("h3", {"style": {"color": "#374151", "marginBottom": "20px"}}, ["Tutor Menu"]), __jacJsx("div", {"style": {"display": "flex", "flexDirection": "column", "gap": "8px"}}, [__jacJsx("button", {"onClick": () => {
    handleNavigation("/tutor/dashboard");
  }, "style": {"padding": "10px 15px", "background": "#ede9fe", "color": "#7c3aed", "border": "none", "borderRadius": "6px", "cursor": "pointer", "textAlign": "left", "fontWeight": "500"}}, ["Overview"]), __jacJsx("button", {"onClick": () => {
    handleNavigation("/tutor/lessons");
  }, "style": {"padding": "10px 15px", "background": "#f0f9ff", "color": "#0369a1", "border": "none", "borderRadius": "6px", "cursor": "pointer", "textAlign": "left", "fontWeight": "500"}}, ["📚 Lessons"]), __jacJsx("button", {"onClick": () => {
    handleNavigation("/tutor/students");
  }, "style": {"padding": "10px 15px", "background": "#fef3c7", "color": "#92400e", "border": "none", "borderRadius": "6px", "cursor": "pointer", "textAlign": "left", "fontWeight": "500"}}, ["Students"]), __jacJsx("button", {"onClick": () => {
    handleNavigation("/tutor/quizzes");
  }, "style": {"padding": "10px 15px", "background": "#d1fae5", "color": "#065f46", "border": "none", "borderRadius": "6px", "cursor": "pointer", "textAlign": "left", "fontWeight": "500"}}, ["Quizzes"]), __jacJsx("button", {"onClick": () => {
    handleNavigation("/tutor/analytics");
  }, "style": {"padding": "10px 15px", "background": "#fce7f3", "color": "#9d174d", "border": "none", "borderRadius": "6px", "cursor": "pointer", "textAlign": "left", "fontWeight": "500"}}, ["Analytics"]), __jacJsx("button", {"onClick": () => {
    handleNavigation("/tutor/onlinetutor");
  }, "style": {"padding": "10px 15px", "background": "#fce7f3", "color": "#9d174d", "border": "none", "borderRadius": "6px", "cursor": "pointer", "textAlign": "left", "fontWeight": "500"}}, ["Online Class"])])]);
}
function TutorDashboardPage() {
  if (!jacIsLoggedIn()) {
    return __jacJsx(Navigate, {"to": "/login"}, []);
  }
  let [userInfo, setUserInfo] = useState(null);
  let [stats, setStats] = useState({"totalLessons": 0, "totalStudents": 0, "activeQuizzes": 0, "avgScore": 0});
  let [recentActivity, setRecentActivity] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadUserInfo() {
      let currentSessionId = localStorage.getItem("session_id");
      if (currentSessionId) {
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
    async function loadData() {
      if (userInfo && userInfo.email) {
        let statsResult = await __jacSpawn("get_tutor_stats", "", {"user_email": userInfo.email});
        if (statsResult.reports && statsResult.reports.length > 0) {
          let statsData = statsResult.reports[0];
          setStats({"totalLessons": statsData.total_lessons, "totalStudents": statsData.total_students, "activeQuizzes": statsData.active_quizzes, "avgScore": statsData.avg_score});
        }
        let activityResult = await __jacSpawn("get_tutor_recent_activity", "", {"user_email": userInfo.email});
        if (activityResult.reports && activityResult.reports.length > 0) {
          setRecentActivity(activityResult.reports[0]);
        }
        setLoading(false);
      }
    }
    loadData();
  }, [userInfo]);
  if (loading || !userInfo) {
    return __jacJsx("div", {"style": {"minHeight": "100vh", "backgroundColor": "#f9fafb"}}, [__jacJsx(TutorNavigation, {}, []), __jacJsx("div", {"style": {"display": "flex"}}, [__jacJsx(TutorSidebar, {}, []), __jacJsx("div", {"style": {"flex": "1", "padding": "30px"}}, [__jacJsx("h1", {"style": {"color": "#1f2937", "marginBottom": "30px"}}, ["Loading Dashboard..."]), __jacJsx("div", {}, ["Please wait while we load your data..."])])])]);
  }
  return __jacJsx("div", {"style": {"minHeight": "100vh", "backgroundColor": "#f9fafb"}}, [__jacJsx(TutorNavigation, {}, []), __jacJsx("div", {"style": {"display": "flex"}}, [__jacJsx(TutorSidebar, {}, []), __jacJsx("div", {"style": {"flex": "1", "padding": "30px"}}, [__jacJsx("h1", {"style": {"color": "#1f2937", "marginBottom": "30px"}}, ["Tutor Dashboard Overview"]), __jacJsx("div", {"style": {"display": "grid", "gridTemplateColumns": "repeat(2, 1fr)", "gap": "20px", "marginBottom": "30px"}}, [__jacJsx("div", {"style": {"background": "white", "padding": "20px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("h3", {"style": {"color": "#6b7280", "marginBottom": "10px"}}, ["Total Lessons"]), __jacJsx("div", {"style": {"fontSize": "32px", "fontWeight": "bold", "color": "#7c3aed"}}, [stats.totalLessons])]), __jacJsx("div", {"style": {"background": "white", "padding": "20px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("h3", {"style": {"color": "#6b7280", "marginBottom": "10px"}}, ["Total Students"]), __jacJsx("div", {"style": {"fontSize": "32px", "fontWeight": "bold", "color": "#10b981"}}, [stats.totalStudents])]), __jacJsx("div", {"style": {"background": "white", "padding": "20px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("h3", {"style": {"color": "#6b7280", "marginBottom": "10px"}}, ["Active Quizzes"]), __jacJsx("div", {"style": {"fontSize": "32px", "fontWeight": "bold", "color": "#f59e0b"}}, [stats.activeQuizzes])]), __jacJsx("div", {"style": {"background": "white", "padding": "20px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("h3", {"style": {"color": "#6b7280", "marginBottom": "10px"}}, ["Avg. Student Score"]), __jacJsx("div", {"style": {"fontSize": "32px", "fontWeight": "bold", "color": "#ef4444"}}, [stats.avgScore, "%"])])]), __jacJsx("div", {"style": {"background": "white", "padding": "25px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("h2", {"style": {"color": "#1f2937", "marginBottom": "20px"}}, ["Recent Activity"]), __jacJsx("div", {"style": {"color": "#6b7280"}}, [recentActivity.length > 0 && recentActivity.map(activity => {
    return __jacJsx("p", {"key": activity.timestamp}, ["• ", activity.message]);
  }), recentActivity.length === 0 && __jacJsx("p", {}, ["No recent activity"])])])])])]);
}
function TutorLessonsPage() {
  let [books, setBooks] = useState([]);
  let [chapters, setChapters] = useState({});
  let [loading, setLoading] = useState(true);
  let [activeBook, setActiveBook] = useState(null);
  let [showBookModal, setShowBookModal] = useState(false);
  let [showChapterModal, setShowChapterModal] = useState(false);
  let [currentBook, setCurrentBook] = useState(null);
  let [currentChapter, setCurrentChapter] = useState(null);
  let [bookForm, setBookForm] = useState({"title": "", "description": "", "subject": "", "color": "#7c3aed"});
  let [chapterForm, setChapterForm] = useState({"title": "", "description": "", "order": 1});
  function getBookTitle(book) {
    if (!book) {
      return "Untitled Book";
    }
    return book.title || "Untitled Book";
  }
  function getBookDescription(book) {
    if (!book) {
      return "";
    }
    return book.description || "No desc ";
  }
  let bookColors = ["#7c3aed", "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];
  useEffect(() => {
    async function loadBooksAndChapters() {
      setLoading(true);
      let userEmail = localStorage.getItem("user_email");
      console.log("User email from storage:", userEmail);
      if (!userEmail) {
        console.error("No user email found. User might not be logged in.");
        setLoading(false);
        return;
      }
      let booksResult = await __jacSpawn("list_books", "", {"user_email": userEmail});
      console.log("Books result:", booksResult);
      if (booksResult.error) {
        console.error("Error loading books:", booksResult.error);
        setLoading(false);
        return;
      }
      if (booksResult.reports && booksResult.reports.length > 0) {
        let booksData = booksResult.reports[0] || [];
        console.log("Books data:", booksData, "Is array:", Array.isArray(booksData));
        let updatedBooksData = [];
        for (const book of booksData) {
          if (!book) {
            continue;
          }
          let updatedBook = {};
          let bookKeys = Object.keys(book);
          for (const key of bookKeys) {
            updatedBook[key] = book[key];
          }
          if (!updatedBook.title) {
            updatedBook.title = "Untitled Book";
          }
          if (!updatedBook.color) {
            updatedBook.color = bookColors[Math.floor(Math.random() * bookColors.length)];
          }
          if (!updatedBook.description) {
            updatedBook.description = "";
          }
          if (!updatedBook.subject) {
            updatedBook.subject = "";
          }
          updatedBooksData.push(updatedBook);
        }
        console.log("Final books array:", updatedBooksData);
        setBooks(updatedBooksData);
        if (updatedBooksData.length > 0) {
          setActiveBook(updatedBooksData[0].id);
          let chaptersMap = {};
          for (const book of updatedBooksData) {
            let chaptersResult = await __jacSpawn("list_chapters", "", {"user_email": userEmail, "book_id": book.id});
            if (chaptersResult.report && chaptersResult.report.length > 0) {
              chaptersMap[book.id] = chaptersResult.report[0] || [];
            } else {}
          }
          setChapters(chaptersMap);
        } else {
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
  function handleAddBook() {
    setShowBookModal(true);
    setBookForm({"title": "", "description": "", "subject": "", "color": bookColors[Math.floor(Math.random() * bookColors.length)]});
  }
  function handleAddChapter(bookId) {
    let foundBook = null;
    for (const book of books) {
      if (book.id === bookId) {
        foundBook = book;
        break;
      }
    }
    setCurrentBook(foundBook);
    let nextOrder = 1;
    if (chapters[bookId]) {
      nextOrder = chapters[bookId].length + 1;
    }
    setChapterForm({"title": "", "description": "", "order": nextOrder});
    setShowChapterModal(true);
  }
  function handleEditBook(book) {
    if (!book) {
      return;
    }
    setCurrentBook(book);
    setBookForm({"title": book.title || "Untitled Book", "description": book.description || "", "subject": book.subject || "", "color": book.color || bookColors[0]});
    setShowBookModal(true);
  }
  function handleEditChapter(bookId, chapter) {
    if (!chapter) {
      return;
    }
    let foundBook = null;
    for (const book of books) {
      if (book.id === bookId) {
        foundBook = book;
        break;
      }
    }
    setCurrentBook(foundBook);
    setCurrentChapter(chapter);
    setChapterForm({"title": chapter.title || "", "description": chapter.description || "", "order": chapter.order || 1});
    setShowChapterModal(true);
  }
  function handleViewChapter(chapter) {
    window.location.href = "/tutor/chapter/{chapter.id}";
  }
  async function saveBook() {
    if (!bookForm.title.trim()) {
      alert("Please enter a book title");
      return;
    }
    let userEmail = localStorage.getItem("user_email");
    console.log("User email from storage:", userEmail);
    if (!userEmail) {
      console.error("No user email found. User might not be logged in.");
      return;
    }
    let bookData = {"title": bookForm.title, "description": bookForm.description, "subject": bookForm.subject, "color": bookForm.color};
    if (currentBook && !showChapterModal) {
      bookData["id"] = currentBook.id;
      let result = await __jacSpawn("update_book", "", {"id": bookData});
      if (result && result.success) {
        setBooks(books.map(book => {
          if (book.id === currentBook.id) {
            return {"id": book.id, "title": bookData.title, "description": bookData.description, "subject": bookData.subject, "color": bookData.color, "created_by": book.created_by, "created_at": book.created_at, "updated_at": std.time_now()};
          }
          return book;
          console.log("Book", book);
        }));
      }
    } else {
      result = await __jacSpawn("create_book", "", {"user_email": userEmail, "title": bookData.title, "description": bookData.description, "subject": bookData.subject, "color": bookData.color});
      if (result && result.reports && result.reports.length > 0) {
        let newBook = result.reports[0];
        let newBooksArray = [];
        for (const book of books) {
          newBooksArray.append(book);
        }
        newBooksArray.append(newBook);
        setBooks(newBooksArray);
        setActiveBook(newBook.id);
        let newChaptersObject = {};
        for (const key of chapters) {
          newChaptersObject[key] = chapters[key];
        }
        newChaptersObject[newBook.id] = [];
        setChapters(newChaptersObject);
      }
    }
    setShowBookModal(false);
    setCurrentBook(null);
  }
  async function saveChapter() {
    if (!chapterForm.title.trim()) {
      alert("Please enter a chapter title");
      return;
    }
    if (!currentBook) {
      alert("No book selected");
      return;
    }
    let userEmail = localStorage.getItem("user_email");
    console.log("User email from storage:", userEmail);
    if (!userEmail) {
      console.error("No user email found. User might not be logged in.");
      return;
    }
    let chapterData = {"bookId": currentBook.id, "title": chapterForm.title, "description": chapterForm.description, "order": chapterForm.order};
    if (currentChapter) {
      chapterData["id"] = currentChapter.id;
      let result = await __jacSpawn("update_chapter", "", {"user_email": userEmail, "book_id": chapterData.bookId, "title": chapterData.title, "description": chapterData.description, "order": chapterData.order});
      if (result && result.success) {
        let newChapters = {};
        for (const key of chapters) {
          newChapters[key] = chapters[key];
        }
        if (currentBook.id in chapters) {
          let updatedChaptersList = [];
          for (const chapter of chapters[currentBook.id]) {
            if (chapter.id === currentChapter.id) {
              let updatedChapter = {"id": chapter.id, "book_id": chapter.book_id, "title": chapterData.title, "description": chapterData.description, "order": chapterData.order, "content": chapter.content || "", "created_by": chapter.created_by, "created_at": chapter.created_at, "updated_at": std.time_now(), "is_published": chapter.is_published, "student_access": chapter.student_access};
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
      result = await __jacSpawn("create_chapter", "", {"user_email": userEmail, "book_id": chapterData.bookId, "title": chapterData.title, "description": chapterData.description, "order": chapterData.order});
      if (result && result.reports && result.reports.length > 0) {
        let newChapter = result.reports[0];
        let newChapters = {};
        for (const key of chapters) {
          newChapters[key] = chapters[key];
        }
        let currentChapters = [];
        if (currentBook.id in chapters) {
          for (const chapter of chapters[currentBook.id]) {
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
  async function deleteBook(bookId) {
    if (confirm("Are you sure you want to delete this book and all its chapters?")) {
      let result = await __jacSpawn("delete_book", "", {"id": {"id": bookId}});
      if (result && result.success) {
        setBooks(books.filter(book => {
          return book.id !== bookId;
        }));
        let newChapters = {};
        for (const key of chapters) {
          if (key !== bookId) {
            newChapters[key] = chapters[key];
          }
        }
        setChapters(newChapters);
        if (activeBook === bookId && books.length > 0) {
          setActiveBook(books[0].id);
        }
        alert("Book deleted successfully");
      }
    }
  }
  async function deleteChapter(bookId, chapterId) {
    if (confirm("Are you sure you want to delete this chapter?")) {
      let result = await __jacSpawn("delete_chapter", "", {"user_email": {"id": chapterId}});
      if (result && result.success) {
        let newChapters = {};
        for (const key of chapters) {
          if (key === bookId) {
            let filteredChapters = [];
            for (const chapter of chapters[key]) {
              if (chapter.id !== chapterId) {
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
  async function reorderChapters(bookId, fromIndex, toIndex) {
    let bookChapters = [];
    if (bookId in chapters) {
      for (const chapter of chapters[bookId]) {
        bookChapters.append(chapter);
      }
    }
    if (bookChapters.length === 0 || fromIndex === toIndex) {
      return;
    }
    let newChaptersList = [];
    if (fromIndex < toIndex) {
      for (const i of range(bookChapters.length)) {
        if (i === fromIndex) {
          continue;
        }
        if (i === toIndex) {
          newChaptersList.append(bookChapters[fromIndex]);
        }
        newChaptersList.append(bookChapters[i]);
      }
      if (toIndex === bookChapters.length - 1) {
        newChaptersList.append(bookChapters[fromIndex]);
      }
    } else {
      for (const i of range(bookChapters.length)) {
        if (i === toIndex) {
          newChaptersList.append(bookChapters[fromIndex]);
        }
        if (i !== fromIndex) {
          newChaptersList.append(bookChapters[i]);
        }
      }
    }
    let updatedChaptersList = [];
    for (const i of range(newChaptersList.length)) {
      let chapter = newChaptersList[i];
      let updatedChapter = {"id": chapter.id, "book_id": chapter.book_id, "title": chapter.title, "description": chapter.description, "order": i + 1, "content": chapter.content || "", "created_by": chapter.created_by, "created_at": chapter.created_at, "updated_at": std.time_now(), "is_published": chapter.is_published, "student_access": chapter.student_access};
      updatedChaptersList.append(updatedChapter);
    }
    let newChaptersState = {};
    for (const key of chapters) {
      if (key === bookId) {
        newChaptersState[key] = updatedChaptersList;
      } else {
        newChaptersState[key] = chapters[key];
      }
    }
    setChapters(newChaptersState);
    for (const chapter of updatedChaptersList) {
      await __jacSpawn("update_chapter_order", "", {"user_email": {"id": chapter.id, "order": chapter.order}});
    }
  }
  function getChapterCount(bookId) {
    let count = 0;
    if (chapters[bookId]) {
      count = chapters[bookId].length;
    }
    return func(count) + " chapters";
  }
  function renderBookDescription(book) {
    if (!book) {
      return __jacJsx("p", {"style": {"color": "#6b7280", "fontSize": "12px", "margin": "0", "marginBottom": "8px", "height": "1em"}}, ["&nbsp;"]);
    }
    let descText = getBookDescription(book);
    if (descText.trim() !== "") {
      if (descText.length > 60) {
        descText = descText.slice(0, 60) + "...";
      }
      return __jacJsx("p", {"style": {"color": "#6b7280", "fontSize": "12px", "margin": "0", "marginBottom": "8px"}}, [descText]);
    } else {
      return __jacJsx("p", {"style": {"color": "#6b7280", "fontSize": "12px", "margin": "0", "marginBottom": "8px", "height": "1em"}}, ["&nbsp;"]);
    }
  }
  function updateBookFormField(field, value) {
    let newForm = {};
    for (const key of bookForm) {
      newForm[key] = bookForm[key];
    }
    newForm[field] = value;
    setBookForm(newForm);
  }
  let activeBookData = null;
  if (activeBook) {
    for (const book of books) {
      if (book.id === activeBook) {
        activeBookData = book;
        break;
      }
    }
  }
  let activeBookChapters = [];
  if (activeBook && chapters[activeBook]) {
    activeBookChapters = chapters[activeBook];
  }
  let sortedChapters = [];
  if (activeBookChapters.length > 0) {
    for (const chapter of activeBookChapters) {
      sortedChapters.append(chapter);
    }
    for (const i of range(sortedChapters.length)) {
      for (const j of range(i + 1, sortedChapters.length)) {
        let orderI = sortedChapters[i].order || 0;
        let orderJ = sortedChapters[j].order || 0;
        if (orderI > orderJ) {
          let temp = sortedChapters[i];
          sortedChapters[i] = sortedChapters[j];
          sortedChapters[j] = temp;
        }
      }
    }
  }
  function getChapterModalTitleText() {
    if (currentChapter) {
      return "Edit Chapter";
    } else {
      return "Add New Chapter";
    }
  }
  function getChapterModalTitle() {
    if (currentBook) {
      return "in " + getBookTitle(currentBook);
    }
    return "";
  }
  function getChapterButtonText() {
    if (currentChapter) {
      return "Update Chapter";
    } else {
      return "Create Chapter";
    }
  }
  function renderBooksList() {
    let items = [];
    for (const book of books) {
      if (!book) {
        continue;
      }
      let backgroundValue = "transparent";
      let borderValue = "2px solid transparent";
      let boxShadowValue = "none";
      if (activeBook === book.id) {
        backgroundValue = "white";
        borderValue = "2px solid " + book.color || "#7c3aed";
        boxShadowValue = "0 2px 8px rgba(0,0,0,0.1)";
      }
      function handleBookClick() {
        setActiveBook(book.id);
      }
      function handleEditClick(e) {
        e.stopPropagation();
        handleEditBook(book);
      }
      function handleDeleteClick(e) {
        e.stopPropagation();
        deleteBook(book.id);
      }
      let item = __jacJsx("div", {"key": book.id, "style": {"padding": "15px", "background": backgroundValue, "borderRadius": "8px", "border": borderValue, "cursor": "pointer", "boxShadow": boxShadowValue, "transition": "all 0.2s"}, "onClick": handleBookClick}, [__jacJsx("div", {"style": {"display": "flex", "alignItems": "center", "marginBottom": "8px"}}, [__jacJsx("div", {"style": {"width": "12px", "height": "12px", "borderRadius": "50%", "background": book.color || "#7c3aed", "marginRight": "10px"}}, []), __jacJsx("h4", {"style": {"color": "#1f2937", "margin": "0", "flex": "1"}}, [getBookTitle(book)])]), renderBookDescription(book), __jacJsx("div", {"style": {"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}, [__jacJsx("span", {"style": {"color": "#9ca3af", "fontSize": "11px"}}, []), __jacJsx("div", {"style": {"display": "flex", "gap": "5px"}}, [__jacJsx("button", {"style": {"padding": "2px 6px", "background": "transparent", "color": "#3b82f6", "border": "1px solid #3b82f6", "borderRadius": "4px", "cursor": "pointer", "fontSize": "11px"}, "onClick": handleEditClick}, ["Edit"]), __jacJsx("button", {"style": {"padding": "2px 6px", "background": "transparent", "color": "#ef4444", "border": "1px solid #ef4444", "borderRadius": "4px", "cursor": "pointer", "fontSize": "11px"}, "onClick": handleDeleteClick}, ["Delete"])])])]);
      items.push(item);
    }
    return items;
  }
  if (loading) {
    return __jacJsx("div", {"style": {"minHeight": "100vh", "backgroundColor": "#f9fafb"}}, [__jacJsx(TutorNavigation, {}, []), __jacJsx("div", {"style": {"display": "flex"}}, [__jacJsx(TutorSidebar, {}, []), __jacJsx("div", {"style": {"flex": "1", "padding": "30px"}}, [__jacJsx("div", {"style": {"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "30px"}}, [__jacJsx("h1", {"style": {"color": "#1f2937"}}, ["Manage Books & Chapters"]), __jacJsx("button", {"style": {"padding": "10px 20px", "background": "#7c3aed", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}, "onClick": handleAddBook}, ["+ Add New Book"])]), __jacJsx("div", {}, ["Loading books and chapters..."])])])]);
  }
  return __jacJsx("div", {"style": {"minHeight": "100vh", "backgroundColor": "#f9fafb"}}, [__jacJsx(TutorNavigation, {}, []), __jacJsx("div", {"style": {"display": "flex"}}, [__jacJsx(TutorSidebar, {}, []), __jacJsx("div", {"style": {"flex": "1", "padding": "30px"}}, [__jacJsx("div", {"style": {"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "30px"}}, [__jacJsx("h1", {"style": {"color": "#1f2937"}}, ["Manage Books & Chapters"]), __jacJsx("button", {"style": {"padding": "10px 20px", "background": "#7c3aed", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}, "onClick": handleAddBook}, ["+ Add New Book"])]), books.length === 0 ? __jacJsx("div", {"style": {"textAlign": "center", "padding": "50px", "background": "white", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("div", {"style": {"fontSize": "48px", "marginBottom": "20px", "color": "#d1d5db"}}, ["📚"]), __jacJsx("h3", {"style": {"color": "#4b5563", "marginBottom": "10px"}}, ["No books yet"]), __jacJsx("p", {"style": {"color": "#6b7280", "marginBottom": "20px"}}, ["Create your first book to organize your lessons into chapters."]), __jacJsx("button", {"style": {"padding": "10px 20px", "background": "#7c3aed", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}, "onClick": handleAddBook}, ["Create Your First Book"])]) : __jacJsx("div", {"style": {"display": "flex", "gap": "30px"}}, [__jacJsx("div", {"style": {"width": "250px", "flexShrink": "0"}}, [__jacJsx("div", {"style": {"marginBottom": "20px"}}, [__jacJsx("h3", {"style": {"color": "#374151", "marginBottom": "15px"}}, ["Books"]), __jacJsx("div", {"style": {"display": "flex", "flexDirection": "column", "gap": "10px"}}, [renderBooksList(), "  ", __jacJsx("p", {}, ["lessons "]), "                 "])])]), __jacJsx("div", {"style": {"flex": "1"}}, [!activeBookData ? __jacJsx("div", {"style": {"textAlign": "center", "padding": "50px", "background": "white", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("div", {"style": {"fontSize": "48px", "marginBottom": "20px", "color": "#d1d5db"}}, ["📚"]), __jacJsx("h3", {"style": {"color": "#4b5563", "marginBottom": "10px"}}, ["Select a Book"]), __jacJsx("p", {"style": {"color": "#6b7280"}}, ["Choose a book from the sidebar to view and manage its chapters."])]) : __jacJsx("div", {}, [__jacJsx("div", {"style": {"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "20px"}}, [__jacJsx("div", {}, [__jacJsx("h2", {"style": {"color": "#1f2937", "marginBottom": "5px"}}, [getBookTitle(activeBookData)]), getBookDescription(activeBookData) ? __jacJsx("p", {"style": {"color": "#6b7280", "fontSize": "14px"}}, [getBookDescription(activeBookData)]) : null]), __jacJsx("button", {"style": {"padding": "8px 16px", "background": "#10b981", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer", "fontSize": "14px"}, "onClick": () => handleAddChapter(activeBook)}, ["+ Add Chapter"])]), activeBookChapters.length === 0 ? __jacJsx("div", {"style": {"textAlign": "center", "padding": "40px", "background": "white", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("div", {"style": {"fontSize": "48px", "marginBottom": "20px", "color": "#d1d5db"}}, ["📖"]), __jacJsx("h3", {"style": {"color": "#4b5563", "marginBottom": "10px"}}, ["No chapters yet"]), __jacJsx("p", {"style": {"color": "#6b7280", "marginBottom": "20px"}}, ["Add chapters to organize your lesson content."]), __jacJsx("button", {"style": {"padding": "10px 20px", "background": "#10b981", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}, "onClick": () => handleAddChapter(activeBook)}, ["Add First Chapter"])]) : __jacJsx("div", {"style": {"display": "flex", "flexDirection": "column", "gap": "15px"}}, [sortedChapters.map((chapter, index) => {
    return __jacJsx("div", {"key": chapter.id, "style": {"background": "white", "padding": "20px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)", "display": "flex", "alignItems": "center", "gap": "15px"}}, [__jacJsx("div", {"style": {"width": "40px", "height": "40px", "background": activeBookData.color || "#7c3aed", "color": "white", "borderRadius": "8px", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontWeight": "bold", "fontSize": "16px", "flexShrink": "0"}}, [index + 1]), __jacJsx("div", {"style": {"flex": "1"}}, [__jacJsx("h3", {"style": {"color": "#1f2937", "marginBottom": "5px"}}, [chapter.title]), chapter.description ? __jacJsx("p", {"style": {"color": "#6b7280", "fontSize": "14px", "margin": "0"}}, [chapter.description]) : null]), __jacJsx("div", {"style": {"display": "flex", "gap": "10px", "flexShrink": "0"}}, [__jacJsx("button", {"style": {"padding": "8px 16px", "background": "#3b82f6", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer", "fontSize": "14px"}, "onClick": () => handleViewChapter(chapter)}, ["View Content"]), __jacJsx("button", {"style": {"padding": "6px 12px", "background": "transparent", "color": "#6b7280", "border": "1px solid #d1d5db", "borderRadius": "6px", "cursor": "pointer", "fontSize": "13px"}, "onClick": () => handleEditChapter(activeBook, chapter)}, ["Edit"]), __jacJsx("button", {"style": {"padding": "6px 12px", "background": "transparent", "color": "#ef4444", "border": "1px solid #ef4444", "borderRadius": "6px", "cursor": "pointer", "fontSize": "13px"}, "onClick": () => deleteChapter(activeBook, chapter.id)}, ["Delete"])])]);
  })])])])])])]), __jacJsx("div", {}, [showBookModal ? __jacJsx("div", {"style": {"position": "fixed", "top": "0", "left": "0", "right": "0", "bottom": "0", "backgroundColor": "rgba(0,0,0,0.5)", "display": "flex", "justifyContent": "center", "alignItems": "center", "zIndex": "1000"}}, [__jacJsx("div", {"style": {"background": "white", "padding": "30px", "borderRadius": "10px", "width": "500px", "maxWidth": "90%", "maxHeight": "80vh", "overflow": "auto"}}, [__jacJsx("h2", {"style": {"marginBottom": "20px", "color": "#1f2937"}}, [currentBook ? new Set(["Edit Book"]) : new Set(["Add New Book "])]), __jacJsx("div", {"style": {"marginBottom": "15px"}}, [__jacJsx("label", {"style": {"display": "block", "marginBottom": "5px", "color": "#374151", "fontWeight": "500"}}, ["Book Title *"]), __jacJsx("input", {"type": "text", "style": {"width": "100%", "padding": "10px", "border": "1px solid #d1d5db", "borderRadius": "6px", "fontSize": "16px"}, "value": bookForm.title, "onChange": e => {
    setBookForm({title: e.target.value, description: bookForm.description, subject: bookForm.subject, color: bookForm.color});
  }, "placeholder": "e.g., Jac Language Basics"}, [])]), __jacJsx("div", {"style": {"marginBottom": "15px"}}, [__jacJsx("label", {"style": {"display": "block", "marginBottom": "5px", "color": "#374151", "fontWeight": "500"}}, ["Description"]), __jacJsx("textarea", {"style": {"width": "100%", "padding": "10px", "border": "1px solid #d1d5db", "borderRadius": "6px", "minHeight": "80px", "fontSize": "14px"}, "value": bookForm.description, "onChange": e => {
    setBookForm({title: bookForm.title, description: e.target.value, subject: bookForm.subject, color: bookForm.color});
  }, "placeholder": "Describe what this book covers"}, [])]), __jacJsx("div", {"style": {"display": "grid", "gridTemplateColumns": "2fr 1fr", "gap": "15px", "marginBottom": "20px"}}, [__jacJsx("div", {}, [__jacJsx("label", {"style": {"display": "block", "marginBottom": "5px", "color": "#374151", "fontWeight": "500"}}, ["Subject/Category"]), __jacJsx("input", {"type": "text", "style": {"width": "100%", "padding": "10px", "border": "1px solid #d1d5db", "borderRadius": "6px"}, "value": bookForm.subject, "onChange": e => {
    setBookForm({title: bookForm.title, description: bookForm.description, subject: e.target.value, color: bookForm.color});
  }, "placeholder": "e.g., Programming, Jac Language"}, [])]), __jacJsx("div", {}, [__jacJsx("label", {"style": {"display": "block", "marginBottom": "5px", "color": "#374151", "fontWeight": "500"}}, ["Color"]), __jacJsx("div", {"style": {"display": "flex", "gap": "8px", "flexWrap": "wrap"}}, [bookColors.map(color => {
    let isSelected = bookForm.color === color;
    return __jacJsx("div", {"key": color, "style": {"width": "30px", "height": "30px", "borderRadius": "6px", "background": color, "cursor": "pointer", "border": isSelected ? new Set(["3px solid white"]) : new Set(["none"]), "outline": isSelected ? new Set(["2px solid #374151"]) : new Set(["none"])}, "onClick": e => {
      setBookForm({title: bookForm.title, description: bookForm.description, subject: bookForm.subject, color: e.target.value});
    }}, []);
  })])])]), __jacJsx("div", {"style": {"display": "flex", "gap": "10px", "justifyContent": "flex-end"}}, [__jacJsx("button", {"style": {"padding": "10px 20px", "background": "#6b7280", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}, "onClick": () => {
    setShowBookModal(false);
    setCurrentBook(null);
  }}, ["Cancel"]), __jacJsx("button", {"style": {"padding": "10px 20px", "background": "#7c3aed", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}, "onClick": saveBook}, [currentBook ? new Set(["Update Book"]) : new Set(["Create Book"])])])])]) : new Set([null])]), "Add", showChapterModal && currentBook ? __jacJsx("div", {"style": {"position": "fixed", "top": "0", "left": "0", "right": "0", "bottom": "0", "backgroundColor": "rgba(0,0,0,0.5)", "display": "flex", "justifyContent": "center", "alignItems": "center", "zIndex": "1000"}}, [__jacJsx("div", {"style": {"background": "white", "padding": "30px", "borderRadius": "10px", "width": "500px", "maxWidth": "90%", "maxHeight": "80vh", "overflow": "auto"}}, [__jacJsx("h2", {"style": {"marginBottom": "20px", "color": "#1f2937"}}, [getChapterModalTitleText(), __jacJsx("div", {"style": {"fontSize": "14px", "color": "#6b7280", "fontWeight": "normal", "marginTop": "5px"}}, [getChapterModalTitle()])]), __jacJsx("div", {"style": {"marginBottom": "15px"}}, [__jacJsx("label", {"style": {"display": "block", "marginBottom": "5px", "color": "#374151", "fontWeight": "500"}}, ["Chapter Title *"]), __jacJsx("input", {"type": "text", "style": {"width": "100%", "padding": "10px", "border": "1px solid #d1d5db", "borderRadius": "6px", "fontSize": "16px"}, "value": chapterForm.title, "onChange": e => {
    setChapterForm({title: e.target.value, description: chapterForm.description, order: chapterForm.order});
  }, "placeholder": "e.g., Introduction to Variables"}, [])]), __jacJsx("div", {"style": {"marginBottom": "15px"}}, [__jacJsx("label", {"style": {"display": "block", "marginBottom": "5px", "color": "#374151", "fontWeight": "500"}}, ["Description"]), __jacJsx("textarea", {"style": {"width": "100%", "padding": "10px", "border": "1px solid #d1d5db", "borderRadius": "6px", "minHeight": "80px", "fontSize": "14px"}, "value": chapterForm.description, "onChange": e => {
    setChapterForm({title: chapterForm.title, description: e.target.value, order: chapterForm.order});
  }, "placeholder": "What will students learn in this chapter?"}, [])]), __jacJsx("div", {"style": {"marginBottom": "20px"}}, [__jacJsx("label", {"style": {"display": "block", "marginBottom": "5px", "color": "#374151", "fontWeight": "500"}}, ["Order Position"]), __jacJsx("input", {"type": "number", "min": "1", "style": {"width": "100px", "padding": "10px", "border": "1px solid #d1d5db", "borderRadius": "6px"}, "value": chapterForm.order, "onChange": e => {
    setChapterForm({title: chapterForm.title, description: chapterForm.description, order: e.target.value});
  }}, [])]), __jacJsx("div", {"style": {"display": "flex", "gap": "10px", "justifyContent": "flex-end"}}, [__jacJsx("button", {"style": {"padding": "10px 20px", "background": "#6b7280", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}, "onClick": () => {
    setShowChapterModal(false);
    setCurrentChapter(null);
    setCurrentBook(null);
  }}, ["Cancel"]), __jacJsx("button", {"style": {"padding": "10px 20px", "background": "#10b981", "color": "white", "border": "none", "borderRadius": "6px", "cursor": "pointer"}, "onClick": saveChapter}, [getChapterButtonText()])])])]) : new Set([null])]);
}
function StudentNavigation() {
  let [userInfo, setUserInfo] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    async function loadUserInfo() {
      let currentSessionId = localStorage.getItem("session_id");
      if (currentSessionId) {
        let result = await __jacSpawn("get_session_user", "", {"session_id": currentSessionId});
        if (result.reports && result.reports.length > 0) {
          setUserInfo(result.reports[0]);
        }
      }
    }
    loadUserInfo();
  }, []);
  function handleLogout(e) {
    e.preventDefault();
    jacLogout();
    localStorage.removeItem("session_id");
    localStorage.removeItem("user_role");
    localStorage.removeItem("current_user");
    navigate("/login");
  }
  if (!userInfo) {
    return __jacJsx("div", {}, ["Loading..."]);
  }
  return __jacJsx("nav", {"style": {"padding": "12px 24px", "background": "#4361ee", "color": "#ffffff", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}, [__jacJsx("div", {"style": {"fontWeight": "600", "fontSize": "18px"}}, ["Jac Student Portal"]), __jacJsx("div", {"style": {"display": "flex", "gap": "16px", "alignItems": "center"}}, [__jacJsx("span", {}, ["Welcome, ", userInfo.name]), __jacJsx(Link, {"to": "/dashboard", "style": {"color": "#ffffff", "textDecoration": "none"}}, ["Dashboard"]), __jacJsx(Link, {"to": "/lessons", "style": {"color": "#ffffff", "textDecoration": "none"}}, ["My Lessons"]), __jacJsx(Link, {"to": "/progress", "style": {"color": "#ffffff", "textDecoration": "none"}}, ["Progress"]), __jacJsx("button", {"onClick": handleLogout, "style": {"background": "none", "color": "#ffffff", "border": "1px solid #ffffff", "padding": "2px 10px", "borderRadius": "4px", "cursor": "pointer"}}, ["Logout"])])]);
}
function StudentSidebar() {
  let navigate = useNavigate();
  function handleNavigation(path) {
    navigate(path);
  }
  return __jacJsx("div", {"style": {"width": "250px", "background": "#f0f9ff", "borderRight": "1px solid #e5e7eb", "padding": "20px", "height": "calc(100vh - 64px)"}}, [__jacJsx("h3", {"style": {"color": "#0369a1", "marginBottom": "20px"}}, ["My Learning"]), __jacJsx("div", {"style": {"display": "flex", "flexDirection": "column", "gap": "8px"}}, [__jacJsx("button", {"onClick": () => {
    handleNavigation("/dashboard");
  }, "style": {"padding": "10px 15px", "background": "#dbeafe", "color": "#1d4ed8", "border": "none", "borderRadius": "6px", "cursor": "pointer", "textAlign": "left", "fontWeight": "500"}}, ["🏠 Home"]), __jacJsx("button", {"onClick": () => {
    handleNavigation("/lessons");
  }, "style": {"padding": "10px 15px", "background": "#fef3c7", "color": "#92400e", "border": "none", "borderRadius": "6px", "cursor": "pointer", "textAlign": "left", "fontWeight": "500"}}, ["📚 Lessons"]), __jacJsx("button", {"onClick": () => {
    handleNavigation("/progress");
  }, "style": {"padding": "10px 15px", "background": "#dcfce7", "color": "#166534", "border": "none", "borderRadius": "6px", "cursor": "pointer", "textAlign": "left", "fontWeight": "500"}}, ["📈 Progress"]), __jacJsx("button", {"onClick": () => {
    handleNavigation("/quizzes");
  }, "style": {"padding": "10px 15px", "background": "#f3e8ff", "color": "#7c3aed", "border": "none", "borderRadius": "6px", "cursor": "pointer", "textAlign": "left", "fontWeight": "500"}}, ["✏️ Quizzes"]), __jacJsx("button", {"onClick": () => {
    handleNavigation("/ai-tutor");
  }, "style": {"padding": "10px 15px", "background": "#ffe4e6", "color": "#be123c", "border": "none", "borderRadius": "6px", "cursor": "pointer", "textAlign": "left", "fontWeight": "500"}}, ["🤖 AI Tutor"])])]);
}
function DashboardPage() {
  if (!jacIsLoggedIn()) {
    return __jacJsx(Navigate, {"to": "/login"}, []);
  }
  let [userInfo, setUserInfo] = useState(null);
  let [stats, setStats] = useState({"progressPercent": 0, "avgScore": 0, "completedLessons": 0, "totalLessons": 0, "streakDays": 0});
  let [recentLessons, setRecentLessons] = useState([]);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadUserInfo() {
      let currentSessionId = localStorage.getItem("session_id");
      if (currentSessionId) {
        let result = await __jacSpawn("get_session_user", "", {"session_id": currentSessionId});
        if (result.reports && result.reports.length > 0) {
          let userData = result.reports[0];
          setUserInfo(userData);
          if (userData.role === "tutor") {
            window.location.href = "/tutor/dashboard";
          }
        }
      }
    }
    loadUserInfo();
  }, []);
  useEffect(() => {
    async function loadData() {
      if (userInfo && userInfo.email) {
        let statsResult = await __jacSpawn("get_student_progress_summary", "", {"user_email": userInfo.email});
        if (statsResult.reports && statsResult.reports.length > 0) {
          let statsData = statsResult.reports[0];
          setStats({"progressPercent": statsData.progress_percent, "avgScore": statsData.avg_score, "completedLessons": statsData.completed_lessons, "totalLessons": statsData.total_lessons, "streakDays": statsData.streak_days});
        }
        let lessonsResult = await __jacSpawn("get_student_recent_lessons", "", {"user_email": userInfo.email, "limit": 4});
        if (lessonsResult.reports && lessonsResult.reports.length > 0) {
          setRecentLessons(lessonsResult.reports[0]);
        }
        setLoading(false);
      }
    }
    loadData();
  }, [userInfo]);
  if (loading || !userInfo) {
    return __jacJsx("div", {"style": {"minHeight": "100vh", "backgroundColor": "#f9fafb"}}, [__jacJsx(StudentNavigation, {}, []), __jacJsx("div", {"style": {"display": "flex"}}, [__jacJsx(StudentSidebar, {}, []), __jacJsx("div", {"style": {"flex": "1", "padding": "30px"}}, [__jacJsx("h1", {"style": {"color": "#1f2937", "marginBottom": "30px"}}, ["Loading..."]), __jacJsx("div", {}, ["Please wait while we load your dashboard..."])])])]);
  }
  return __jacJsx("div", {"style": {"minHeight": "100vh", "backgroundColor": "#f9fafb"}}, [__jacJsx(StudentNavigation, {}, []), __jacJsx("div", {"style": {"display": "flex"}}, [__jacJsx(StudentSidebar, {}, []), __jacJsx("div", {"style": {"flex": "1", "padding": "30px"}}, [__jacJsx("h1", {"style": {"color": "#1f2937", "marginBottom": "30px"}}, ["Welcome back, ", userInfo.name, "!"]), __jacJsx("div", {"style": {"display": "grid", "gridTemplateColumns": "repeat(2, 1fr)", "gap": "20px", "marginBottom": "30px"}}, [__jacJsx("div", {"style": {"background": "white", "padding": "20px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("h3", {"style": {"color": "#6b7280", "marginBottom": "10px"}}, ["Overall Progress"]), __jacJsx("div", {"style": {"fontSize": "32px", "fontWeight": "bold", "color": "#4361ee"}}, [stats.progressPercent, "%"]), __jacJsx("div", {"style": {"height": "8px", "background": "#e5e7eb", "borderRadius": "4px", "marginTop": "10px", "overflow": "hidden"}}, [__jacJsx("div", {"style": {"width": new Set([stats.progressPercent]) + "%", "height": "100%", "background": "#4361ee"}}, [])])]), __jacJsx("div", {"style": {"background": "white", "padding": "20px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("h3", {"style": {"color": "#6b7280", "marginBottom": "10px"}}, ["Average Score"]), __jacJsx("div", {"style": {"fontSize": "32px", "fontWeight": "bold", "color": "#10b981"}}, [stats.avgScore, "%"])]), __jacJsx("div", {"style": {"background": "white", "padding": "20px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("h3", {"style": {"color": "#6b7280", "marginBottom": "10px"}}, ["Completed Lessons"]), __jacJsx("div", {"style": {"fontSize": "32px", "fontWeight": "bold", "color": "#f59e0b"}}, [stats.completedLessons, "/", stats.totalLessons])]), __jacJsx("div", {"style": {"background": "white", "padding": "20px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("h3", {"style": {"color": "#6b7280", "marginBottom": "10px"}}, ["Active Streak"]), __jacJsx("div", {"style": {"fontSize": "32px", "fontWeight": "bold", "color": "#ef4444"}}, [stats.streakDays, " days"])])]), __jacJsx("div", {"style": {"background": "white", "padding": "25px", "borderRadius": "10px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)", "marginBottom": "30px"}}, [__jacJsx("h2", {"style": {"color": "#1f2937", "marginBottom": "20px"}}, ["Continue Learning"]), __jacJsx("div", {"style": {"display": "grid", "gridTemplateColumns": "repeat(auto-fill, minmax(250px, 1fr))", "gap": "15px"}}, [recentLessons.length > 0 && recentLessons.map(lesson => {
    let lessonScore = "";
    if (lesson.is_completed && lesson.progress) {
      lessonScore = Math.round(lesson.progress.score * 100) + "%";
    }
    let badgeBackgroundValue = "";
    let badgeColorValue = "";
    let badgeTextValue = "";
    if (lesson.is_completed) {
      badgeBackgroundValue = "#d1fae5";
      badgeColorValue = "#065f46";
      badgeTextValue = "Completed";
    } else {
      badgeBackgroundValue = "#fef3c7";
      badgeColorValue = "#92400e";
      badgeTextValue = "Start";
    }
    return __jacJsx("div", {"key": lesson.id, "style": {"padding": "15px", "border": "1px solid #e5e7eb", "borderRadius": "8px", "cursor": "pointer"}, "onClick": () => {
      window.location.href = "/lesson/" + lesson.id;
    }}, [__jacJsx("h4", {"style": {"color": "#1f2937", "marginBottom": "8px"}}, [lesson.title]), __jacJsx("div", {"style": {"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}, [__jacJsx("span", {"style": {"background": badgeBackgroundValue, "color": badgeColorValue, "borderRadius": "12px", "fontSize": "12px", "padding": "3px 8px"}}, [badgeTextValue]), __jacJsx("span", {"style": {"color": "#6b7280", "fontSize": "12px"}}, [lessonScore])])]);
  }), recentLessons.length === 0 && __jacJsx("div", {}, ["No lessons available"])])])])])]);
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
        localStorage.setItem("session_id", sessionData.session_id);
        localStorage.setItem("current_user", JSON.stringify(sessionData.user));
        localStorage.setItem("user_email", email);
        let userRole = "student";
        if (sessionData.user && sessionData.user.role) {
          userRole = sessionData.user.role;
          localStorage.setItem("user_role", userRole);
        }
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
  return __jacJsx("div", {"style": {"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center", "background": "#f5f5f5"}}, [__jacJsx("div", {"style": {"background": "#ffffff", "padding": "30px", "borderRadius": "8px", "width": "280px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("h2", {"style": {"marginBottom": "20px"}}, ["Login to Jac Tutor"]), __jacJsx("form", {"onSubmit": handleLogin}, [__jacJsx("input", {"type": "email", "value": email, "onChange": e => {
    setEmail(e.target.value);
  }, "placeholder": "Email", "style": {"width": "100%", "padding": "8px", "marginBottom": "10px", "border": "1px solid #ddd", "borderRadius": "4px", "boxSizing": "border-box"}}, []), __jacJsx("input", {"type": "password", "value": password, "onChange": e => {
    setPassword(e.target.value);
  }, "placeholder": "Password", "style": {"width": "100%", "padding": "8px", "marginBottom": "10px", "border": "1px solid #ddd", "borderRadius": "4px", "boxSizing": "border-box"}}, []), error && __jacJsx("div", {"style": {"color": "#dc2626", "fontSize": "14px", "marginBottom": "10px"}}, [error]), __jacJsx("button", {"type": "submit", "style": {"width": "100%", "padding": "8px", "background": "#4361ee", "color": "#ffffff", "border": "none", "borderRadius": "4px", "cursor": "pointer", "fontWeight": "600"}}, ["Login"])]), __jacJsx("p", {"style": {"textAlign": "center", "marginTop": "12px", "fontSize": "14px"}}, ["Need an account? ", __jacJsx(Link, {"to": "/signup"}, ["Sign up"])])])]);
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
      let success = await jacLogin(email, password);
      if (success) {
        let loginResult = await __jacSpawn("login_user", "", {"email": email, "password": password});
        if (loginResult.reports && loginResult.reports.length > 0 && loginResult.reports[0].success) {
          let sessionData = loginResult.reports[0];
          localStorage.setItem("session_id", sessionData.session_id);
          localStorage.setItem("current_user", JSON.stringify(sessionData.user));
          localStorage.setItem("user_email", email);
          localStorage.setItem("user_role", role);
          if (role === "tutor") {
            navigate("/tutor/dashboard");
          } else {
            navigate("/dashboard");
          }
        }
      }
    } else {
      setError(result["error"] ? result["error"] : "Signup failed");
    }
  }
  return __jacJsx("div", {"style": {"minHeight": "100vh", "display": "flex", "alignItems": "center", "justifyContent": "center", "background": "#f5f5f5"}}, [__jacJsx("div", {"style": {"background": "#ffffff", "padding": "30px", "borderRadius": "8px", "width": "280px", "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"}}, [__jacJsx("h2", {"style": {"marginBottom": "20px"}}, ["Sign Up for Jac Tutor"]), __jacJsx("form", {"onSubmit": handleSignup}, [__jacJsx("input", {"type": "text", "value": name, "onChange": e => {
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
    let userRole = localStorage.getItem("user_role") || "student";
    if (userRole === "tutor") {
      return __jacJsx(Navigate, {"to": "/tutor/dashboard"}, []);
    } else {
      return __jacJsx(Navigate, {"to": "/dashboard"}, []);
    }
  }
  return __jacJsx(LandingPage, {}, []);
}
function app() {
  return __jacJsx(Router, {}, [__jacJsx("div", {"style": {"fontFamily": "system-ui, sans-serif"}}, [__jacJsx(Routes, {}, [__jacJsx(Route, {"path": "/", "element": __jacJsx(HomePage, {}, [])}, []), __jacJsx(Route, {"path": "/login", "element": __jacJsx(LoginPage, {}, [])}, []), __jacJsx(Route, {"path": "/signup", "element": __jacJsx(SignupPage, {}, [])}, []), __jacJsx(Route, {"path": "/dashboard", "element": __jacJsx(DashboardPage, {}, [])}, []), __jacJsx(Route, {"path": "/lessons", "element": __jacJsx(DashboardPage, {}, [])}, []), __jacJsx(Route, {"path": "/progress", "element": __jacJsx(DashboardPage, {}, [])}, []), __jacJsx(Route, {"path": "/tutor/dashboard", "element": __jacJsx(TutorDashboardPage, {}, [])}, []), __jacJsx(Route, {"path": "/tutor/lessons", "element": __jacJsx(TutorLessonsPage, {}, [])}, []), __jacJsx(Route, {"path": "/tutor/students", "element": __jacJsx(TutorDashboardPage, {}, [])}, []), __jacJsx(Route, {"path": "/tutor/quizzes", "element": __jacJsx(TutorDashboardPage, {}, [])}, []), __jacJsx(Route, {"path": "/tutor/analytics", "element": __jacJsx(TutorDashboardPage, {}, [])}, []), __jacJsx(Route, {"path": "*", "element": __jacJsx(Navigate, {"to": "/"}, [])}, [])])])]);
}
export { DashboardPage, HomePage, LandingPage, LoginPage, SignupPage, StudentNavigation, StudentSidebar, TutorDashboardPage, TutorLessonsPage, TutorNavigation, TutorSidebar, app };
