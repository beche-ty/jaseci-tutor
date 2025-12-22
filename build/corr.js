function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { __jacJsx, __jacSpawn } from "@jac-client/utils";
import { useState, useEffect } from "react";
import { Router, Routes, Route, Link, Navigate, useNavigate, useLocation, jacSignup, jacLogin, jacLogout, jacIsLoggedIn } from "@jac-client/utils";
function Navigation() {
  var isLoggedIn = jacIsLoggedIn();
  var navigate = useNavigate();
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    sessionId = _useState2[0],
    setSessionId = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    userInfo = _useState4[0],
    setUserInfo = _useState4[1];
  useEffect(function () {
    if (isLoggedIn) {
      var storedSessionId = localStorage.getItem("session_id");
      if (storedSessionId) {
        setSessionId(storedSessionId);
      } else {
        setSessionId("");
      }
    }
  }, [isLoggedIn]);
  useEffect(function () {
    function loadUserInfo() {
      return _loadUserInfo.apply(this, arguments);
    }
    function _loadUserInfo() {
      _loadUserInfo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var result, _userData, storedUser, _storedUser;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              if (!(isLoggedIn && sessionId)) {
                _context.n = 2;
                break;
              }
              _context.n = 1;
              return __jacSpawn("get_session_user", "", {
                "session_id": sessionId
              });
            case 1:
              result = _context.v;
              if (result.reports && result.reports.length > 0) {
                _userData = result.reports[0];
                console.log("User Data", _userData);
                if (_userData.error) {
                  storedUser = localStorage.getItem("current_user");
                  if (storedUser) {
                    _userData = JSON.parse(storedUser);
                    setUserInfo(_userData);
                  }
                } else {
                  setUserInfo(_userData);
                }
              } else {
                _storedUser = localStorage.getItem("current_user");
                if (_storedUser) {
                  userData = JSON.parse(_storedUser);
                  setUserInfo(userData);
                }
              }
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }));
      return _loadUserInfo.apply(this, arguments);
    }
    loadUserInfo();
  }, [isLoggedIn, sessionId]);
  function handleLogout(e) {
    e.preventDefault();
    sessionId = localStorage.getItem("session_id");
  }
  if (isLoggedIn) {
    var userName = "Student";
    if (userInfo) {
      if (userInfo.name) {
        userName = userInfo.name;
      }
    }
    return __jacJsx("nav", {
      "style": {
        "padding": "12px 24px",
        "background": "#4361ee",
        "color": "#ffffff",
        "display": "flex",
        "justifyContent": "space-between"
      }
    }, [__jacJsx("div", {
      "style": {
        "fontWeight": "600",
        "fontSize": "18px"
      }
    }, ["Jac Interactive Tutor"]), __jacJsx("div", {
      "style": {
        "display": "flex",
        "gap": "16px",
        "alignItems": "center"
      }
    }, [__jacJsx("span", {}, ["Welcome, ", userName]), __jacJsx(Link, {
      "to": "/dashboard",
      "style": {
        "color": "#ffffff",
        "textDecoration": "none"
      }
    }, ["Dashboard"]), __jacJsx(Link, {
      "to": "/lessons",
      "style": {
        "color": "#ffffff",
        "textDecoration": "none"
      }
    }, ["Lessons"]), __jacJsx(Link, {
      "to": "/progress",
      "style": {
        "color": "#ffffff",
        "textDecoration": "none"
      }
    }, ["Progress"]), __jacJsx("button", {
      "onClick": handleLogout,
      "style": {
        "background": "none",
        "color": "#ffffff",
        "border": "1px solid #ffffff",
        "padding": "2px 10px",
        "borderRadius": "4px",
        "cursor": "pointer"
      }
    }, ["Logout"])])]);
  }
  return __jacJsx("nav", {
    "style": {
      "padding": "12px 24px",
      "background": "#4361ee",
      "color": "#ffffff",
      "display": "flex",
      "justifyContent": "space-between"
    }
  }, [__jacJsx("div", {
    "style": {
      "fontWeight": "600",
      "fontSize": "18px"
    }
  }, ["Jac Interactive Tutor"]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "gap": "16px"
    }
  }, [__jacJsx(Link, {
    "to": "/login",
    "style": {
      "color": "#ffffff",
      "textDecoration": "none"
    }
  }, ["Login"]), __jacJsx(Link, {
    "to": "/signup",
    "style": {
      "color": "#ffffff",
      "textDecoration": "none"
    }
  }, ["Sign Up"])])]);
}
function DashboardPage() {
  console.log("DashboardPage rendering");
  if (!jacIsLoggedIn()) {
    return __jacJsx(Navigate, {
      "to": "/login"
    }, []);
  }
  console.log("User is logged in, loading dashboard");
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    lessons = _useState6[0],
    setLessons = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    currentLesson = _useState8[0],
    setCurrentLesson = _useState8[1];
  var _useState9 = useState({}),
    _useState0 = _slicedToArray(_useState9, 2),
    userProgress = _useState0[0],
    setUserProgress = _useState0[1];
  var _useState1 = useState("lessons"),
    _useState10 = _slicedToArray(_useState1, 2),
    activeTab = _useState10[0],
    setActiveTab = _useState10[1];
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    chatMessages = _useState12[0],
    setChatMessages = _useState12[1];
  var _useState13 = useState(""),
    _useState14 = _slicedToArray(_useState13, 2),
    chatInput = _useState14[0],
    setChatInput = _useState14[1];
  var _useState15 = useState([]),
    _useState16 = _slicedToArray(_useState15, 2),
    quizQuestions = _useState16[0],
    setQuizQuestions = _useState16[1];
  var _useState17 = useState(0),
    _useState18 = _slicedToArray(_useState17, 2),
    currentQuizIndex = _useState18[0],
    setCurrentQuizIndex = _useState18[1];
  var _useState19 = useState({
      "correct": 0,
      "wrong": 0
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    quizScore = _useState20[0],
    setQuizScore = _useState20[1];
  var _useState21 = useState(null),
    _useState22 = _slicedToArray(_useState21, 2),
    userInfo = _useState22[0],
    setUserInfo = _useState22[1];
  var userEmail = "";
  if (userInfo && userInfo.email) {
    userEmail = userInfo.email;
  }
  useEffect(function () {
    function loadData() {
      return _loadData.apply(this, arguments);
    }
    function _loadData() {
      _loadData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var currentSessionId, userResult, _userData2, progressResult, progressMap, _iterator, _step, attempt;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              currentSessionId = localStorage.getItem("session_id");
              if (!currentSessionId) {
                _context3.n = 3;
                break;
              }
              _context3.n = 1;
              return __jacSpawn("get_session_user", "", {
                "session_id": currentSessionId
              });
            case 1:
              userResult = _context3.v;
              if (!(userResult.reports && userResult.reports.length > 0)) {
                _context3.n = 3;
                break;
              }
              _userData2 = userResult.reports[0];
              console.log("userData", _userData2);
              if (_userData2.error) {
                _context3.n = 3;
                break;
              }
              setUserInfo(_userData2);
              useEffect(function () {
                function loadLessons() {
                  return _loadLessons.apply(this, arguments);
                }
                function _loadLessons() {
                  _loadLessons = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
                    var syncResult, result, lessonsData;
                    return _regenerator().w(function (_context2) {
                      while (1) switch (_context2.n) {
                        case 0:
                          _context2.n = 1;
                          return __jacSpawn("sync_lessons_from_github", "", {});
                        case 1:
                          syncResult = _context2.v;
                          _context2.n = 2;
                          return __jacSpawn("list_lessons", "", {});
                        case 2:
                          result = _context2.v;
                          if (result.reports && result.reports.length > 0) {
                            lessonsData = result.reports[0];
                            setLessons(lessonsData);
                            if (lessonsData.length > 0) {
                              selectLesson(lessonsData[0].id);
                            }
                          }
                        case 3:
                          return _context2.a(2);
                      }
                    }, _callee2);
                  }));
                  return _loadLessons.apply(this, arguments);
                }
                loadLessons();
              }, []);
              if (!_userData2.email) {
                _context3.n = 3;
                break;
              }
              _context3.n = 2;
              return __jacSpawn("get_user_attempts", "", {
                "user_email": _userData2.email
              });
            case 2:
              progressResult = _context3.v;
              if (progressResult.reports && progressResult.reports.length > 0) {
                progressMap = {};
                _iterator = _createForOfIteratorHelper(progressResult.reports[0]);
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    attempt = _step.value;
                    progressMap[attempt.lesson_id] = attempt;
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                setUserProgress(progressMap);
              }
            case 3:
              return _context3.a(2);
          }
        }, _callee3);
      }));
      return _loadData.apply(this, arguments);
    }
    loadData();
  }, []);
  function selectLesson(lessonId) {
    function loadLesson() {
      return _loadLesson.apply(this, arguments);
    }
    function _loadLesson() {
      _loadLesson = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var result;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return __jacSpawn("get_lesson_detail", "", {
                "lesson_id": lessonId
              });
            case 1:
              result = _context4.v;
              if (!(result.reports[0] && !result.reports[0].error)) {
                _context4.n = 2;
                break;
              }
              setCurrentLesson(result.reports[0]);
              setActiveTab("lessons");
              if (!(userEmail && !userProgress[lessonId])) {
                _context4.n = 2;
                break;
              }
              _context4.n = 2;
              return __jacSpawn("record_attempt", "", {
                "user_email": userEmail,
                "lesson_id": lessonId,
                "status": "started",
                "score": 0.0
              });
            case 2:
              return _context4.a(2);
          }
        }, _callee4);
      }));
      return _loadLesson.apply(this, arguments);
    }
    loadLesson();
  }
  function getLessonProgress(lessonId) {
    return userProgress[lessonId] ? userProgress[lessonId] : {
      "status": "not_started",
      "score": 0.0
    };
  }
  function renderProgressBadge(lessonId) {
    var progress = getLessonProgress(lessonId);
    if (progress.status === "not_started") {
      return __jacJsx("span", {
        "style": {
          "background": "#e5e7eb",
          "color": "#6b7280",
          "padding": "2px 8px",
          "borderRadius": "12px",
          "fontSize": "12px"
        }
      }, ["Not Started"]);
    } else if (progress.status === "started") {
      return __jacJsx("span", {
        "style": {
          "background": "#fef3c7",
          "color": "#92400e",
          "padding": "2px 8px",
          "borderRadius": "12px",
          "fontSize": "12px"
        }
      }, ["In Progress"]);
    } else {
      return __jacJsx("span", {
        "style": {
          "background": "#d1fae5",
          "color": "#065f46",
          "padding": "2px 8px",
          "borderRadius": "12px",
          "fontSize": "12px"
        }
      }, [Math.round(progress.score * 100), "%"]);
    }
  }
  function generateQuiz() {
    if (!currentLesson) {
      return;
    }
    function loadQuiz() {
      return _loadQuiz.apply(this, arguments);
    }
    function _loadQuiz() {
      _loadQuiz = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var result, questionsText, questions;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return __jacSpawn("generate_quiz_questions", "", {
                "lesson_id": currentLesson.id
              });
            case 1:
              result = _context5.v;
              if (result.reports[0] && result.reports[0].questions_raw) {
                questionsText = result.reports[0].questions_raw;
                questions = parseQuizQuestions(questionsText);
                setQuizQuestions(questions);
                setCurrentQuizIndex(0);
                setQuizScore({
                  "correct": 0,
                  "wrong": 0
                });
                setActiveTab("quiz");
              }
            case 2:
              return _context5.a(2);
          }
        }, _callee5);
      }));
      return _loadQuiz.apply(this, arguments);
    }
    loadQuiz();
  }
  function parseQuizQuestions(text) {
    var questions = [];
    var lines = text.split("\\n");
    var currentQuestion = "";
    var currentOptions = [];
    var correctAnswer = "";
    var _iterator2 = _createForOfIteratorHelper(lines),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var line = _step2.value;
        {
          var _line = _line.trim();
          if (!_line) {
            continue;
          }
          if (_line.startsWith("Q") && _line.includes(":")) {
            if (currentQuestion) {
              questions.push({
                "question": currentQuestion,
                "options": currentOptions,
                "correct": correctAnswer
              });
            }
            var parts = _line.split(":", 1);
            currentQuestion = parts[1].trim();
            currentOptions = [];
            correctAnswer = "";
          } else if (_line.startsWith("A)") || _line.startsWith("B)") || _line.startsWith("C)") || _line.startsWith("D)")) {
            var optionLetter = _line[0];
            var optionText = _line.slice(3).trim();
            currentOptions.push({
              "letter": optionLetter,
              "text": optionText
            });
          } else if (_line.startsWith("Correct:")) {
            correctAnswer = _line.replace("Correct:", "").trim();
          }
          if (currentQuestion) {
            questions.push({
              "question": currentQuestion,
              "options": currentOptions,
              "correct": correctAnswer
            });
          }
          return questions;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    function handleQuizAnswer(selected) {
      if (currentQuizIndex >= quizQuestions.length) {
        return;
      }
      var currentQ = quizQuestions[currentQuizIndex];
      var isCorrect = selected === currentQ.correct;
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
      function saveQuizResult() {
        return _saveQuizResult.apply(this, arguments);
      }
      function _saveQuizResult() {
        _saveQuizResult = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
          var result;
          return _regenerator().w(function (_context6) {
            while (1) switch (_context6.n) {
              case 0:
                _context6.n = 1;
                return __jacSpawn("quiz_record_attempt", "", {
                  "user_email": userEmail,
                  "lesson_id": currentLesson.id,
                  "correct": quizScore.correct,
                  "wrong": quizScore.wrong
                });
              case 1:
                result = _context6.v;
              case 2:
                return _context6.a(2);
            }
          }, _callee6);
        }));
        return _saveQuizResult.apply(this, arguments);
      }
      saveQuizResult();
    }
    function sendChatMessage() {
      if (!chatInput.trim()) {
        return;
      }
      var newMessages = chatMessages.copy();
      newMessages.append({
        "role": "user",
        "content": chatInput,
        "time": Date().toLocaleTimeString()
      });
      setChatMessages(newMessages);
      function getAIResponse() {
        return _getAIResponse.apply(this, arguments);
      }
      function _getAIResponse() {
        _getAIResponse = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
          var result, aiMessages;
          return _regenerator().w(function (_context7) {
            while (1) switch (_context7.n) {
              case 0:
                _context7.n = 1;
                return __jacSpawn("ai_chat", "", {
                  "message": chatInput
                });
              case 1:
                result = _context7.v;
                if (result.reports[0] && result.reports[0].reply) {
                  aiMessages = newMessages.copy();
                  aiMessages.append({
                    "role": "assistant",
                    "content": result.reports[0].reply,
                    "time": Date().toLocaleTimeString()
                  });
                  setChatMessages(aiMessages);
                }
                setChatInput("");
              case 2:
                return _context7.a(2);
            }
          }, _callee7);
        }));
        return _getAIResponse.apply(this, arguments);
      }
      getAIResponse();
    }
    function renderLessonsList() {
      return __jacJsx("div", {
        "style": {
          "display": "flex",
          "flexDirection": "column",
          "gap": "12px"
        }
      }, [lessons.map(function (lesson) {
        var isActive = currentLesson && currentLesson.id === lesson.id;
        var background = "";
        var border = "";
        if (isActive) {
          background = "#eff6ff";
          border = "2px solid #3b82f6";
        } else {
          background = "#ffffff";
          border = "1px solid #e5e7eb";
        }
        return __jacJsx("div", {
          "key": lesson.id,
          "style": {
            "padding": "16px",
            "background": background,
            "border": border,
            "borderRadius": "8px",
            "cursor": "pointer",
            "transition": "all 0.2s"
          },
          "onClick": function onClick() {
            selectLesson(lesson.id);
          }
        }, [__jacJsx("div", {
          "style": {
            "display": "flex",
            "justifyContent": "space-between",
            "alignItems": "center"
          }
        }, [__jacJsx("h4", {
          "style": {
            "margin": "0",
            "color": "#1f2937"
          }
        }, [lesson.title]), renderProgressBadge(lesson.id)]), __jacJsx("p", {
          "style": {
            "margin": "8px 0 0 0",
            "color": "#6b7280",
            "fontSize": "14px"
          }
        }, [lesson.description])]);
      })]);
    }
    function renderLessonContent() {
      if (!currentLesson) {
        return __jacJsx("div", {
          "style": {
            "padding": "32px",
            "textAlign": "center",
            "color": "#9ca3af"
          }
        }, [__jacJsx("h3", {}, ["Select a lesson to begin"]), __jacJsx("p", {}, ["Choose a lesson from the left to start learning"])]);
      }
      return __jacJsx("div", {
        "style": {
          "height": "100%"
        }
      }, [__jacJsx("div", {
        "style": {
          "display": "flex",
          "justifyContent": "space-between",
          "alignItems": "center",
          "marginBottom": "24px"
        }
      }, [__jacJsx("h2", {
        "style": {
          "margin": "0",
          "color": "#1f2937"
        }
      }, [currentLesson.title]), __jacJsx("div", {
        "style": {
          "display": "flex",
          "gap": "8px"
        }
      }, [__jacJsx("button", {
        "onClick": generateQuiz,
        "style": {
          "padding": "8px 16px",
          "background": "#3b82f6",
          "color": "white",
          "border": "none",
          "borderRadius": "6px",
          "cursor": "pointer"
        }
      }, ["Take Quiz"]), __jacJsx("button", {
        "onClick": function onClick() {
          setActiveTab("chat");
        },
        "style": {
          "padding": "8px 16px",
          "background": "#8b5cf6",
          "color": "white",
          "border": "none",
          "borderRadius": "6px",
          "cursor": "pointer"
        }
      }, ["Ask AI Tutor"])])]), __jacJsx("div", {
        "style": {
          "background": "#ffffff",
          "borderRadius": "8px",
          "padding": "24px",
          "height": "calc(100% - 80px)",
          "overflowY": "auto",
          "border": "1px solid #e5e7eb"
        }
      }, [__jacJsx("div", {
        "style": {
          "whiteSpace": "pre-wrap",
          "lineHeight": "1.6",
          "color": "#374151"
        }
      }, [currentLesson.content])])]);
    }
    function renderQuizTab() {
      if (quizQuestions.length === 0) {
        return __jacJsx("div", {
          "style": {
            "padding": "32px",
            "textAlign": "center",
            "color": "#9ca3af"
          }
        }, [__jacJsx("h3", {}, ["No Quiz Available"]), __jacJsx("p", {}, ["Click 'Take Quiz' button to generate questions"]), __jacJsx("button", {
          "onClick": function onClick() {
            return setActiveTab("lessons");
          },
          "style": {
            "padding": "8px 16px",
            "background": "#6b7280",
            "color": "white",
            "border": "none",
            "borderRadius": "6px",
            "cursor": "pointer",
            "marginTop": "16px"
          }
        }, ["Back to Lessons"])]);
      }
      if (currentQuizIndex >= quizQuestions.length) {
        return __jacJsx("div", {
          "style": {
            "padding": "32px",
            "textAlign": "center"
          }
        }, [__jacJsx("h3", {}, ["Quiz Completed!"]), __jacJsx("p", {}, ["Score: ", quizScore.correct, " / ", quizScore.correct + quizScore.wrong]), __jacJsx("button", {
          "onClick": function onClick() {
            return setActiveTab("lessons");
          },
          "style": {
            "padding": "8px 16px",
            "background": "#3b82f6",
            "color": "white",
            "border": "none",
            "borderRadius": "6px",
            "cursor": "pointer",
            "marginTop": "16px"
          }
        }, ["Back to Lessons"])]);
      }
      var currentQ = quizQuestions[currentQuizIndex];
      var progressPercent = currentQuizIndex + 1 / quizQuestions.length * 100;
      var quizTitleText = "Quiz: Unknown";
      var hasTitle = false;
      if (currentLesson) {
        hasTitle = currentLesson.title;
      }
      if (hasTitle) {
        quizTitleText = "Quiz: " + currentLesson.title;
      }
      return __jacJsx("div", {
        "style": {
          "height": "100%"
        }
      }, [__jacJsx("div", {
        "style": {
          "display": "flex",
          "justifyContent": "space-between",
          "alignItems": "center",
          "marginBottom": "24px"
        }
      }, [__jacJsx("h2", {
        "style": {
          "margin": "0",
          "color": "#1f2937"
        }
      }, [quizTitleText]), __jacJsx("div", {
        "style": {
          "display": "flex",
          "gap": "16px",
          "alignItems": "center"
        }
      }, [__jacJsx("span", {}, ["Question ", currentQuizIndex + 1, " of ", quizQuestions.length]), __jacJsx("span", {}, ["Score: ", quizScore.correct, " / ", quizScore.correct + quizScore.wrong])])]), __jacJsx("div", {
        "style": {
          "background": "#ffffff",
          "borderRadius": "8px",
          "padding": "24px",
          "marginBottom": "16px"
        }
      }, [__jacJsx("div", {
        "style": {
          "height": "6px",
          "background": "#e5e7eb",
          "borderRadius": "3px",
          "marginBottom": "16px"
        }
      }, [__jacJsx("div", {
        "style": {
          "width": progressPercent + "%",
          "height": "100%",
          "background": "#3b82f6",
          "borderRadius": "3px"
        }
      }, [])]), __jacJsx("h3", {
        "style": {
          "color": "#1f2937",
          "marginBottom": "16px"
        }
      }, [currentQ.question]), __jacJsx("div", {
        "style": {
          "display": "flex",
          "flexDirection": "column",
          "gap": "8px"
        }
      }, [currentQ.options.map(function (opt) {
        __jacJsx("button", {
          "key": idx,
          "onClick": function onClick() {
            return handleQuizAnswer(opt.letter);
          },
          "style": {
            "padding": "12px",
            "background": "#ffffff",
            "border": "1px solid #e5e7eb",
            "borderRadius": "6px",
            "textAlign": "left",
            "cursor": "pointer",
            "transition": "all 0.2s"
          }
        }, [__jacJsx("strong", {}, [opt.letter, ")"]), " ", opt.text]);
      })])])]);
    }
    function renderChatTab() {
      var chatContent;
      if (chatMessages.length === 0) {
        chatContent = __jacJsx("div", {
          "style": {
            "textAlign": "center",
            "color": "#9ca3af",
            "padding": "32px"
          }
        }, [__jacJsx("h4", {}, ["Start a conversation with the AI Tutor"]), __jacJsx("p", {}, ["Ask questions about Jac programming, lessons, or concepts"])]);
      } else {
        var messageList = chatMessages.map(function (msg, idx) {
          var isUser = msg.role === "user";
          var textAlignStyle = isUser ? "right" : "left";
          var backgroundColor = isUser ? "#eff6ff" : "#f1f5f9";
          var senderName = isUser ? "You" : "AI Tutor";
          return __jacJsx("div", {
            "key": idx,
            "style": {
              "marginBottom": "16px",
              "textAlign": textAlignStyle
            }
          }, [__jacJsx("div", {
            "style": {
              "display": "inline-block",
              "background": backgroundColor,
              "padding": "12px 16px",
              "borderRadius": "12px",
              "maxWidth": "80%",
              "textAlign": "left"
            }
          }, [__jacJsx("div", {
            "style": {
              "fontSize": "12px",
              "color": "#6b7280",
              "marginBottom": "4px"
            }
          }, [senderName, " • ", msg.time]), __jacJsx("div", {}, [msg.content])])]);
        });
        chatContent = messageList;
      }
      return __jacJsx("div", {
        "style": {
          "height": "100%",
          "display": "flex",
          "flexDirection": "column"
        }
      }, [__jacJsx("div", {
        "style": {
          "display": "flex",
          "justifyContent": "space-between",
          "alignItems": "center",
          "marginBottom": "24px"
        }
      }, [__jacJsx("h2", {
        "style": {
          "margin": "0",
          "color": "#1f2937"
        }
      }, ["AI Tutor Chat"]), __jacJsx("button", {
        "onClick": function onClick() {
          setActiveTab("lessons");
        },
        "style": {
          "padding": "8px 16px",
          "background": "#6b7280",
          "color": "white",
          "border": "none",
          "borderRadius": "6px",
          "cursor": "pointer"
        }
      }, ["Back to Lessons"])]), __jacJsx("div", {
        "style": {
          "flex": "1",
          "background": "#ffffff",
          "borderRadius": "8px",
          "padding": "16px",
          "marginBottom": "16px",
          "overflowY": "auto",
          "border": "1px solid #e5e7eb"
        }
      }, [chatContent]), __jacJsx("div", {
        "style": {
          "display": "flex",
          "gap": "8px"
        }
      }, [__jacJsx("textarea", {
        "value": chatInput,
        "onChange": function onChange(e) {
          setChatInput(e.target.value);
        },
        "placeholder": "Ask a question about Jac...",
        "style": {
          "flex": "1",
          "padding": "12px",
          "border": "1px solid #e5e7eb",
          "borderRadius": "6px",
          "minHeight": "60px",
          "resize": "vertical"
        },
        "onKeyDown": function onKeyDown(e) {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendChatMessage();
          }
        }
      }, []), __jacJsx("button", {
        "onClick": sendChatMessage,
        "disabled": !chatInput.trim(),
        "style": {
          "padding": "12px 24px",
          "background": "#3b82f6",
          "color": "white",
          "border": "none",
          "borderRadius": "6px",
          "cursor": "pointer",
          "height": "60px"
        }
      }, ["Send"])])]);
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
    return __jacJsx("div", {
      "style": {
        "minHeight": "calc(100vh - 48px)",
        "background": "#f9fafb"
      }
    }, [__jacJsx("div", {
      "style": {
        "maxWidth": "1200px",
        "margin": "0 auto",
        "padding": "24px"
      }
    }, [__jacJsx("h1", {
      "style": {
        "color": "#1f2937",
        "marginBottom": "24px"
      }
    }, ["Student Dashboard"]), __jacJsx("div", {
      "style": {
        "display": "flex",
        "gap": "24px",
        "height": "600px"
      }
    }, [__jacJsx("div", {
      "style": {
        "width": "320px",
        "display": "flex",
        "flexDirection": "column"
      }
    }, [__jacJsx("div", {
      "style": {
        "marginBottom": "16px"
      }
    }, [__jacJsx("h3", {
      "style": {
        "color": "#374151",
        "marginBottom": "8px"
      }
    }, ["Jac Book Chapters"]), __jacJsx("p", {
      "style": {
        "color": "#6b7280",
        "fontSize": "14px"
      }
    }, ["Select a chapter to learn"])]), __jacJsx("div", {
      "style": {
        "flex": "1",
        "overflowY": "auto"
      }
    }, [renderLessonsList()])]), __jacJsx("div", {
      "style": {
        "flex": "1",
        "background": "#ffffff",
        "borderRadius": "12px",
        "padding": "24px",
        "boxShadow": "0 1px 3px rgba(0,0,0,0.1)"
      }
    }, [renderMainContent()])])])]);
  }
}
function ProgressPage() {
  if (!jacIsLoggedIn()) {
    return __jacJsx(Navigate, {
      "to": "/login"
    }, []);
  }
  var _useState23 = useState([]),
    _useState24 = _slicedToArray(_useState23, 2),
    userProgress = _useState24[0],
    setUserProgress = _useState24[1];
  var _useState25 = useState([]),
    _useState26 = _slicedToArray(_useState25, 2),
    lessons = _useState26[0],
    setLessons = _useState26[1];
  var _useState27 = useState(null),
    _useState28 = _slicedToArray(_useState27, 2),
    userInfo = _useState28[0],
    setUserInfo = _useState28[1];
  var userEmail = "";
  userEmail = userInfo ? userInfo.email : "";
  useEffect(function () {
    function loadUserInfo() {
      return _loadUserInfo2.apply(this, arguments);
    }
    function _loadUserInfo2() {
      _loadUserInfo2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var currentSessionId, result, _userData3;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              currentSessionId = localStorage.getItem("session_id");
              if (!currentSessionId) {
                _context8.n = 2;
                break;
              }
              _context8.n = 1;
              return __jacSpawn("get_session_user", "", {
                "session_id": currentSessionId
              });
            case 1:
              result = _context8.v;
              if (result.reports && result.reports.length > 0) {
                _userData3 = result.reports[0];
                if (!_userData3.error) {
                  setUserInfo(_userData3);
                }
              }
            case 2:
              return _context8.a(2);
          }
        }, _callee8);
      }));
      return _loadUserInfo2.apply(this, arguments);
    }
    loadUserInfo();
  }, []);
  useEffect(function () {
    function loadData() {
      return _loadData2.apply(this, arguments);
    }
    function _loadData2() {
      _loadData2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var lessonsResult, progressResult;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              _context9.n = 1;
              return __jacSpawn("list_lessons", "", {});
            case 1:
              lessonsResult = _context9.v;
              if (lessonsResult.reports) {
                setLessons(lessonsResult.reports[0]);
              }
              if (!userEmail) {
                _context9.n = 3;
                break;
              }
              _context9.n = 2;
              return __jacSpawn("get_user_attempts", "", {
                "user_email": userEmail
              });
            case 2:
              progressResult = _context9.v;
              if (progressResult.reports) {
                setUserProgress(progressResult.reports[0]);
              }
            case 3:
              return _context9.a(2);
          }
        }, _callee9);
      }));
      return _loadData2.apply(this, arguments);
    }
    loadData();
  }, [userEmail]);
  function calculateProgress() {
    var completed = userProgress.filter(function (p) {
      return p.status === "completed" || p.status === "quiz_completed";
    });
    var totalScore = 0;
    if (completed.length > 0) {
      totalScore = completed.reduce(function (sum, p) {
        return sum + p.score;
      }, 0) / completed.length;
    }
    return {
      "completed": completed.length,
      "total": lessons.length,
      "avgScore": totalScore
    };
  }
  var overall = calculateProgress();
  return __jacJsx("div", {
    "style": {
      "minHeight": "calc(100vh - 48px)",
      "background": "#f9fafb",
      "padding": "24px"
    }
  }, [__jacJsx("div", {
    "style": {
      "maxWidth": "800px",
      "margin": "0 auto"
    }
  }, [__jacJsx("h1", {
    "style": {
      "color": "#1f2937",
      "marginBottom": "32px"
    }
  }, ["Learning Progress"]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "gap": "16px",
      "marginBottom": "32px"
    }
  }, [__jacJsx("div", {
    "style": {
      "flex": "1",
      "background": "#ffffff",
      "padding": "20px",
      "borderRadius": "12px",
      "boxShadow": "0 1px 3px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("div", {
    "style": {
      "fontSize": "14px",
      "color": "#6b7280",
      "marginBottom": "8px"
    }
  }, ["Lessons Completed"]), __jacJsx("div", {
    "style": {
      "fontSize": "32px",
      "fontWeight": "bold",
      "color": "#1f2937"
    }
  }, [overall.completed, "/", overall.total])]), __jacJsx("div", {
    "style": {
      "flex": "1",
      "background": "#ffffff",
      "padding": "20px",
      "borderRadius": "12px",
      "boxShadow": "0 1px 3px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("div", {
    "style": {
      "fontSize": "14px",
      "color": "#6b7280",
      "marginBottom": "8px"
    }
  }, ["Average Score"]), __jacJsx("div", {
    "style": {
      "fontSize": "32px",
      "fontWeight": "bold",
      "color": "#10b981"
    }
  }, [Math.round(overall.avgScore * 100), "%"])])]), __jacJsx("div", {
    "style": {
      "background": "#ffffff",
      "borderRadius": "12px",
      "padding": "24px",
      "boxShadow": "0 1px 3px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("h3", {
    "style": {
      "color": "#1f2937",
      "marginBottom": "16px"
    }
  }, ["Lesson Progress Details"]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "flexDirection": "column",
      "gap": "12px"
    }
  }, [lessons.map(function (lesson) {
    var progress = userProgress.find(function (p) {
      return p.lesson_id === lesson.id;
    }) || {
      "status": "not_started",
      "score": 0.0
    };
    var statusBackground = "";
    var statusColor = "";
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
    return __jacJsx("div", {
      "key": lesson.id,
      "style": {
        "padding": "16px",
        "border": "1px solid #e5e7eb",
        "borderRadius": "8px"
      }
    }, [__jacJsx("div", {
      "style": {
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "marginBottom": "8px"
      }
    }, [__jacJsx("h4", {
      "style": {
        "margin": "0",
        "color": "#1f2937"
      }
    }, [lesson.title]), __jacJsx("span", {
      "style": {
        "background": statusBackground,
        "color": statusColor,
        "padding": "4px 12px",
        "borderRadius": "12px",
        "fontSize": "12px",
        "fontWeight": "600"
      }
    }, [statusText])]), __jacJsx("div", {
      "style": {
        "marginTop": "12px"
      }
    }, [__jacJsx("div", {
      "style": {
        "display": "flex",
        "justifyContent": "space-between",
        "marginBottom": "4px"
      }
    }, [__jacJsx("span", {
      "style": {
        "fontSize": "14px",
        "color": "#6b7280"
      }
    }, ["Progress"]), __jacJsx("span", {
      "style": {
        "fontSize": "14px",
        "color": "#1f2937"
      }
    }, [Math.round(progress.score * 100), "%"])]), __jacJsx("div", {
      "style": {
        "height": "6px",
        "background": "#e5e7eb",
        "borderRadius": "3px",
        "overflow": "hidden"
      }
    }, [__jacJsx("div", {
      "style": {
        "width": new Set([progress.score * 100]) + "%",
        "height": "100%",
        "background": new Set([progressColor]),
        "transition": "width 0.3s"
      }
    }, [])])])]);
  })])])])]);
}
function LoginPage() {
  var _useState29 = useState(""),
    _useState30 = _slicedToArray(_useState29, 2),
    email = _useState30[0],
    setEmail = _useState30[1];
  var _useState31 = useState(""),
    _useState32 = _slicedToArray(_useState31, 2),
    password = _useState32[0],
    setPassword = _useState32[1];
  var _useState33 = useState(""),
    _useState34 = _slicedToArray(_useState33, 2),
    error = _useState34[0],
    setError = _useState34[1];
  var navigate = useNavigate();
  function handleLogin(_x) {
    return _handleLogin.apply(this, arguments);
  }
  function _handleLogin() {
    _handleLogin = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(e) {
      var success, result, sessionData;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            e.preventDefault();
            setError("");
            if (!(!email || !password)) {
              _context0.n = 1;
              break;
            }
            setError("Please fill in all fields");
            return _context0.a(2);
          case 1:
            _context0.n = 2;
            return jacLogin(email, password);
          case 2:
            success = _context0.v;
            if (!success) {
              _context0.n = 4;
              break;
            }
            _context0.n = 3;
            return __jacSpawn("login_user", "", {
              "email": email,
              "password": password
            });
          case 3:
            result = _context0.v;
            if (result.reports && result.reports[0].success) {
              sessionData = result.reports[0];
              console.log("Session data received:", sessionData);
              console.log("Session ID to store:", sessionData.session_id);
              console.log("User data to store:", sessionData.user);
              localStorage.setItem("session_id", sessionData.session_id);
              localStorage.setItem("current_user", JSON.stringify(sessionData.user));
              localStorage.setItem("user_email", email);
              navigate("/dashboard");
            }
            _context0.n = 5;
            break;
          case 4:
            setError("Invalid credentials");
          case 5:
            return _context0.a(2);
        }
      }, _callee0);
    }));
    return _handleLogin.apply(this, arguments);
  }
  return __jacJsx("div", {
    "style": {
      "minHeight": "calc(100vh - 48px)",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center",
      "background": "#f5f5f5"
    }
  }, [__jacJsx("div", {
    "style": {
      "background": "#ffffff",
      "padding": "30px",
      "borderRadius": "8px",
      "width": "280px",
      "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("h2", {
    "style": {
      "marginBottom": "20px"
    }
  }, ["Login to Jac Tutor"]), __jacJsx("form", {
    "onSubmit": handleLogin
  }, [__jacJsx("input", {
    "type": "email",
    "value": email,
    "onChange": function onChange(e) {
      setEmail(e.target.value);
    },
    "placeholder": "Email",
    "style": {
      "width": "100%",
      "padding": "8px",
      "marginBottom": "10px",
      "border": "1px solid #ddd",
      "borderRadius": "4px",
      "boxSizing": "border-box"
    }
  }, []), __jacJsx("input", {
    "type": "password",
    "value": password,
    "onChange": function onChange(e) {
      setPassword(e.target.value);
    },
    "placeholder": "Password",
    "style": {
      "width": "100%",
      "padding": "8px",
      "marginBottom": "10px",
      "border": "1px solid #ddd",
      "borderRadius": "4px",
      "boxSizing": "border-box"
    }
  }, []), error && __jacJsx("div", {
    "style": {
      "color": "#dc2626",
      "fontSize": "14px",
      "marginBottom": "10px"
    }
  }, [error]), __jacJsx("button", {
    "type": "submit",
    "style": {
      "width": "100%",
      "padding": "8px",
      "background": "#4361ee",
      "color": "#ffffff",
      "border": "none",
      "borderRadius": "4px",
      "cursor": "pointer",
      "fontWeight": "600"
    }
  }, ["Login"])]), __jacJsx("p", {
    "style": {
      "textAlign": "center",
      "marginTop": "12px",
      "fontSize": "14px"
    }
  }, ["Need an account? ", __jacJsx(Link, {
    "to": "/signup"
  }, ["Sign up"])])])]);
}
function SignupPage() {
  var _useState35 = useState(""),
    _useState36 = _slicedToArray(_useState35, 2),
    email = _useState36[0],
    setEmail = _useState36[1];
  var _useState37 = useState(""),
    _useState38 = _slicedToArray(_useState37, 2),
    password = _useState38[0],
    setPassword = _useState38[1];
  var _useState39 = useState(""),
    _useState40 = _slicedToArray(_useState39, 2),
    name = _useState40[0],
    setName = _useState40[1];
  var _useState41 = useState(""),
    _useState42 = _slicedToArray(_useState41, 2),
    error = _useState42[0],
    setError = _useState42[1];
  var navigate = useNavigate();
  function handleSignup(_x2) {
    return _handleSignup.apply(this, arguments);
  }
  function _handleSignup() {
    _handleSignup = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(e) {
      var result, profileResult;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            e.preventDefault();
            setError("");
            if (!(!email || !password || !name)) {
              _context1.n = 1;
              break;
            }
            setError("Please fill in all fields");
            return _context1.a(2);
          case 1:
            _context1.n = 2;
            return jacSignup(email, password);
          case 2:
            result = _context1.v;
            if (!result["success"]) {
              _context1.n = 4;
              break;
            }
            _context1.n = 3;
            return __jacSpawn("create_user_profile", "", {
              "email": email,
              "name": name,
              "role": "student"
            });
          case 3:
            profileResult = _context1.v;
            navigate("/dashboard");
            _context1.n = 5;
            break;
          case 4:
            setError(result["error"] ? result["error"] : "Signup failed");
          case 5:
            return _context1.a(2);
        }
      }, _callee1);
    }));
    return _handleSignup.apply(this, arguments);
  }
  return __jacJsx("div", {
    "style": {
      "minHeight": "calc(100vh - 48px)",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center",
      "background": "#f5f5f5"
    }
  }, [__jacJsx("div", {
    "style": {
      "background": "#ffffff",
      "padding": "30px",
      "borderRadius": "8px",
      "width": "280px",
      "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("h2", {
    "style": {
      "marginBottom": "20px"
    }
  }, ["Sign Up for Jac Tutor"]), __jacJsx("form", {
    "onSubmit": handleSignup
  }, [__jacJsx("input", {
    "type": "text",
    "value": name,
    "onChange": function onChange(e) {
      setName(e.target.value);
    },
    "placeholder": "Full Name",
    "style": {
      "width": "100%",
      "padding": "8px",
      "marginBottom": "10px",
      "border": "1px solid #ddd",
      "borderRadius": "4px",
      "boxSizing": "border-box"
    }
  }, []), __jacJsx("input", {
    "type": "email",
    "value": email,
    "onChange": function onChange(e) {
      setEmail(e.target.value);
    },
    "placeholder": "Email",
    "style": {
      "width": "100%",
      "padding": "8px",
      "marginBottom": "10px",
      "border": "1px solid #ddd",
      "borderRadius": "4px",
      "boxSizing": "border-box"
    }
  }, []), __jacJsx("input", {
    "type": "password",
    "value": password,
    "onChange": function onChange(e) {
      setPassword(e.target.value);
    },
    "placeholder": "Password",
    "style": {
      "width": "100%",
      "padding": "8px",
      "marginBottom": "10px",
      "border": "1px solid #ddd",
      "borderRadius": "4px",
      "boxSizing": "border-box"
    }
  }, []), error && __jacJsx("div", {
    "style": {
      "color": "#dc2626",
      "fontSize": "14px",
      "marginBottom": "10px"
    }
  }, [error]), __jacJsx("button", {
    "type": "submit",
    "style": {
      "width": "100%",
      "padding": "8px",
      "background": "#4361ee",
      "color": "#ffffff",
      "border": "none",
      "borderRadius": "4px",
      "cursor": "pointer",
      "fontWeight": "600"
    }
  }, ["Sign Up"])]), __jacJsx("p", {
    "style": {
      "textAlign": "center",
      "marginTop": "12px",
      "fontSize": "14px"
    }
  }, ["Have an account? ", __jacJsx(Link, {
    "to": "/login"
  }, ["Login"])])])]);
}
function HomePage() {
  if (jacIsLoggedIn()) {
    return __jacJsx(Navigate, {
      "to": "/dashboard"
    }, []);
  }
  return __jacJsx(Navigate, {
    "to": "/login"
  }, []);
}
function app() {
  return __jacJsx(Router, {}, [__jacJsx("div", {
    "style": {
      "fontFamily": "system-ui, sans-serif"
    }
  }, [__jacJsx(Navigation, {}, []), __jacJsx(Routes, {}, [__jacJsx(Route, {
    "path": "/",
    "element": __jacJsx(HomePage, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/login",
    "element": __jacJsx(LoginPage, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/signup",
    "element": __jacJsx(SignupPage, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/dashboard",
    "element": __jacJsx(DashboardPage, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/lessons",
    "element": __jacJsx(DashboardPage, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/progress",
    "element": __jacJsx(ProgressPage, {}, [])
  }, [])])])]);
}
export { DashboardPage, HomePage, LoginPage, Navigation, ProgressPage, SignupPage, app };