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
function LandingPage() {
  return __jacJsx("div", {
    "style": {
      "minHeight": "100vh",
      "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }
  }, [__jacJsx("div", {
    "style": {
      "maxWidth": "1200px",
      "margin": "0 auto",
      "padding": "20px"
    }
  }, [__jacJsx("header", {
    "style": {
      "display": "flex",
      "justifyContent": "space-between",
      "alignItems": "center",
      "padding": "20px 0"
    }
  }, [__jacJsx("div", {
    "style": {
      "fontSize": "24px",
      "fontWeight": "bold",
      "color": "white"
    }
  }, ["Jaseci Learning Platform"]), __jacJsx("div", {}, [__jacJsx("a", {
    "href": "/login",
    "style": {
      "color": "white",
      "marginRight": "20px",
      "textDecoration": "none"
    }
  }, ["Login"]), __jacJsx("a", {
    "href": "/register",
    "style": {
      "color": "white",
      "textDecoration": "none"
    }
  }, ["Sign Up"])])]), __jacJsx("main", {
    "style": {
      "textAlign": "center",
      "padding": "100px 20px"
    }
  }, [__jacJsx("h1", {
    "style": {
      "fontSize": "48px",
      "color": "white",
      "marginBottom": "20px"
    }
  }, ["Welcome to LearnPlatform"]), __jacJsx("p", {
    "style": {
      "fontSize": "20px",
      "color": "rgba(255, 255, 255, 0.8)",
      "maxWidth": "600px",
      "margin": "0 auto 40px"
    }
  }, ["The ultimate platform for tutors and students to create, share, and learn from interactive educational content."]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "justifyContent": "center",
      "gap": "20px"
    }
  }, [__jacJsx("a", {
    "href": "/register",
    "style": {
      "padding": "15px 30px",
      "background": "white",
      "color": "#667eea",
      "borderRadius": "30px",
      "textDecoration": "none",
      "fontWeight": "bold",
      "fontSize": "16px"
    }
  }, ["Get Started Free"]), __jacJsx("a", {
    "href": "/login",
    "style": {
      "padding": "15px 30px",
      "background": "transparent",
      "color": "white",
      "border": "2px solid white",
      "borderRadius": "30px",
      "textDecoration": "none",
      "fontWeight": "bold",
      "fontSize": "16px"
    }
  }, ["Try Demo"])])]), __jacJsx("section", {
    "style": {
      "background": "white",
      "borderRadius": "10px",
      "padding": "60px 40px",
      "marginTop": "60px"
    }
  }, [__jacJsx("h2", {
    "style": {
      "textAlign": "center",
      "marginBottom": "40px",
      "color": "#333"
    }
  }, ["Why Choose LearnPlatform?"]), __jacJsx("div", {
    "style": {
      "display": "grid",
      "gridTemplateColumns": "repeat(3, 1fr)",
      "gap": "30px"
    }
  }, [__jacJsx("div", {
    "style": {
      "textAlign": "center"
    }
  }, [__jacJsx("div", {
    "style": {
      "fontSize": "40px",
      "marginBottom": "20px"
    }
  }, ["📚"]), __jacJsx("h3", {
    "style": {
      "color": "#333"
    }
  }, ["Interactive Content"]), __jacJsx("p", {}, ["Create engaging lessons with multimedia support"])]), __jacJsx("div", {
    "style": {
      "textAlign": "center"
    }
  }, [__jacJsx("div", {
    "style": {
      "fontSize": "40px",
      "marginBottom": "20px"
    }
  }, ["👨‍🏫"]), __jacJsx("h3", {
    "style": {
      "color": "#333"
    }
  }, ["For Tutors"]), __jacJsx("p", {}, ["Build and manage your course materials easily"])]), __jacJsx("div", {
    "style": {
      "textAlign": "center"
    }
  }, [__jacJsx("div", {
    "style": {
      "fontSize": "40px",
      "marginBottom": "20px"
    }
  }, ["🎓"]), __jacJsx("h3", {
    "style": {
      "color": "#333"
    }
  }, ["For Students"]), __jacJsx("p", {}, ["Learn at your own pace with structured content"])])])])])]);
}
function TutorNavigation() {
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    userInfo = _useState2[0],
    setUserInfo = _useState2[1];
  var navigate = useNavigate();
  useEffect(function () {
    function loadUserInfo() {
      return _loadUserInfo.apply(this, arguments);
    }
    function _loadUserInfo() {
      _loadUserInfo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var currentSessionId, _result;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              currentSessionId = localStorage.getItem("session_id");
              if (!currentSessionId) {
                _context.n = 2;
                break;
              }
              _context.n = 1;
              return __jacSpawn("get_session_user", "", {
                "session_id": currentSessionId
              });
            case 1:
              _result = _context.v;
              if (_result.reports && _result.reports.length > 0) {
                setUserInfo(_result.reports[0]);
              }
            case 2:
              return _context.a(2);
          }
        }, _callee);
      }));
      return _loadUserInfo.apply(this, arguments);
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
  return __jacJsx("nav", {
    "style": {
      "padding": "12px 24px",
      "background": "#7c3aed",
      "color": "#ffffff",
      "display": "flex",
      "justifyContent": "space-between",
      "alignItems": "center"
    }
  }, [__jacJsx("div", {
    "style": {
      "fontWeight": "600",
      "fontSize": "18px"
    }
  }, ["Jac Tutor Dashboard"]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "gap": "16px",
      "alignItems": "center"
    }
  }, [__jacJsx("span", {}, ["Welcome, Tutor ", userInfo.name]), __jacJsx(Link, {
    "to": "/tutor/dashboard",
    "style": {
      "color": "#ffffff",
      "textDecoration": "none"
    }
  }, ["Dashboard"]), __jacJsx(Link, {
    "to": "/tutor/lessons",
    "style": {
      "color": "#ffffff",
      "textDecoration": "none"
    }
  }, ["Manage Lessons"]), __jacJsx(Link, {
    "to": "/tutor/students",
    "style": {
      "color": "#ffffff",
      "textDecoration": "none"
    }
  }, ["Students"]), __jacJsx("button", {
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
function TutorSidebar() {
  var navigate = useNavigate();
  function handleNavigation(path) {
    navigate(path);
  }
  return __jacJsx("div", {
    "style": {
      "width": "250px",
      "background": "#f8fafc",
      "borderRight": "1px solid #e5e7eb",
      "padding": "20px",
      "height": "calc(100vh - 64px)"
    }
  }, [__jacJsx("h3", {
    "style": {
      "color": "#374151",
      "marginBottom": "20px"
    }
  }, ["Tutor Menu"]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "flexDirection": "column",
      "gap": "8px"
    }
  }, [__jacJsx("button", {
    "onClick": function onClick() {
      handleNavigation("/tutor/dashboard");
    },
    "style": {
      "padding": "10px 15px",
      "background": "#ede9fe",
      "color": "#7c3aed",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer",
      "textAlign": "left",
      "fontWeight": "500"
    }
  }, ["Overview"]), __jacJsx("button", {
    "onClick": function onClick() {
      handleNavigation("/tutor/lessons");
    },
    "style": {
      "padding": "10px 15px",
      "background": "#f0f9ff",
      "color": "#0369a1",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer",
      "textAlign": "left",
      "fontWeight": "500"
    }
  }, ["📚 Lessons"]), __jacJsx("button", {
    "onClick": function onClick() {
      handleNavigation("/tutor/students");
    },
    "style": {
      "padding": "10px 15px",
      "background": "#fef3c7",
      "color": "#92400e",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer",
      "textAlign": "left",
      "fontWeight": "500"
    }
  }, ["Students"]), __jacJsx("button", {
    "onClick": function onClick() {
      handleNavigation("/tutor/quizzes");
    },
    "style": {
      "padding": "10px 15px",
      "background": "#d1fae5",
      "color": "#065f46",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer",
      "textAlign": "left",
      "fontWeight": "500"
    }
  }, ["Quizzes"]), __jacJsx("button", {
    "onClick": function onClick() {
      handleNavigation("/tutor/analytics");
    },
    "style": {
      "padding": "10px 15px",
      "background": "#fce7f3",
      "color": "#9d174d",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer",
      "textAlign": "left",
      "fontWeight": "500"
    }
  }, ["Analytics"]), __jacJsx("button", {
    "onClick": function onClick() {
      handleNavigation("/tutor/onlinetutor");
    },
    "style": {
      "padding": "10px 15px",
      "background": "#fce7f3",
      "color": "#9d174d",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer",
      "textAlign": "left",
      "fontWeight": "500"
    }
  }, ["Online Class"])])]);
}
function TutorDashboardPage() {
  if (!jacIsLoggedIn()) {
    return __jacJsx(Navigate, {
      "to": "/login"
    }, []);
  }
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    userInfo = _useState4[0],
    setUserInfo = _useState4[1];
  var _useState5 = useState({
      "totalLessons": 0,
      "totalStudents": 0,
      "activeQuizzes": 0,
      "avgScore": 0
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    stats = _useState6[0],
    setStats = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    recentActivity = _useState8[0],
    setRecentActivity = _useState8[1];
  var _useState9 = useState(true),
    _useState0 = _slicedToArray(_useState9, 2),
    loading = _useState0[0],
    setLoading = _useState0[1];
  useEffect(function () {
    function loadUserInfo() {
      return _loadUserInfo2.apply(this, arguments);
    }
    function _loadUserInfo2() {
      _loadUserInfo2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var currentSessionId, _result2, userData;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              currentSessionId = localStorage.getItem("session_id");
              if (!currentSessionId) {
                _context2.n = 2;
                break;
              }
              _context2.n = 1;
              return __jacSpawn("get_session_user", "", {
                "session_id": currentSessionId
              });
            case 1:
              _result2 = _context2.v;
              if (_result2.reports && _result2.reports.length > 0) {
                userData = _result2.reports[0];
                setUserInfo(userData);
                if (userData.role !== "tutor") {
                  window.location.href = "/dashboard";
                }
              }
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }));
      return _loadUserInfo2.apply(this, arguments);
    }
    loadUserInfo();
  }, []);
  useEffect(function () {
    function loadData() {
      return _loadData.apply(this, arguments);
    }
    function _loadData() {
      _loadData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var statsResult, statsData, activityResult;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              if (!(userInfo && userInfo.email)) {
                _context3.n = 3;
                break;
              }
              _context3.n = 1;
              return __jacSpawn("get_tutor_stats", "", {
                "user_email": userInfo.email
              });
            case 1:
              statsResult = _context3.v;
              if (statsResult.reports && statsResult.reports.length > 0) {
                statsData = statsResult.reports[0];
                setStats({
                  "totalLessons": statsData.total_lessons,
                  "totalStudents": statsData.total_students,
                  "activeQuizzes": statsData.active_quizzes,
                  "avgScore": statsData.avg_score
                });
              }
              _context3.n = 2;
              return __jacSpawn("get_tutor_recent_activity", "", {
                "user_email": userInfo.email
              });
            case 2:
              activityResult = _context3.v;
              if (activityResult.reports && activityResult.reports.length > 0) {
                setRecentActivity(activityResult.reports[0]);
              }
              setLoading(false);
            case 3:
              return _context3.a(2);
          }
        }, _callee3);
      }));
      return _loadData.apply(this, arguments);
    }
    loadData();
  }, [userInfo]);
  if (loading || !userInfo) {
    return __jacJsx("div", {
      "style": {
        "minHeight": "100vh",
        "backgroundColor": "#f9fafb"
      }
    }, [__jacJsx(TutorNavigation, {}, []), __jacJsx("div", {
      "style": {
        "display": "flex"
      }
    }, [__jacJsx(TutorSidebar, {}, []), __jacJsx("div", {
      "style": {
        "flex": "1",
        "padding": "30px"
      }
    }, [__jacJsx("h1", {
      "style": {
        "color": "#1f2937",
        "marginBottom": "30px"
      }
    }, ["Loading Dashboard..."]), __jacJsx("div", {}, ["Please wait while we load your data..."])])])]);
  }
  return __jacJsx("div", {
    "style": {
      "minHeight": "100vh",
      "backgroundColor": "#f9fafb"
    }
  }, [__jacJsx(TutorNavigation, {}, []), __jacJsx("div", {
    "style": {
      "display": "flex"
    }
  }, [__jacJsx(TutorSidebar, {}, []), __jacJsx("div", {
    "style": {
      "flex": "1",
      "padding": "30px"
    }
  }, [__jacJsx("h1", {
    "style": {
      "color": "#1f2937",
      "marginBottom": "30px"
    }
  }, ["Tutor Dashboard Overview"]), __jacJsx("div", {
    "style": {
      "display": "grid",
      "gridTemplateColumns": "repeat(2, 1fr)",
      "gap": "20px",
      "marginBottom": "30px"
    }
  }, [__jacJsx("div", {
    "style": {
      "background": "white",
      "padding": "20px",
      "borderRadius": "10px",
      "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("h3", {
    "style": {
      "color": "#6b7280",
      "marginBottom": "10px"
    }
  }, ["Total Lessons"]), __jacJsx("div", {
    "style": {
      "fontSize": "32px",
      "fontWeight": "bold",
      "color": "#7c3aed"
    }
  }, [stats.totalLessons])]), __jacJsx("div", {
    "style": {
      "background": "white",
      "padding": "20px",
      "borderRadius": "10px",
      "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("h3", {
    "style": {
      "color": "#6b7280",
      "marginBottom": "10px"
    }
  }, ["Total Students"]), __jacJsx("div", {
    "style": {
      "fontSize": "32px",
      "fontWeight": "bold",
      "color": "#10b981"
    }
  }, [stats.totalStudents])]), __jacJsx("div", {
    "style": {
      "background": "white",
      "padding": "20px",
      "borderRadius": "10px",
      "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("h3", {
    "style": {
      "color": "#6b7280",
      "marginBottom": "10px"
    }
  }, ["Active Quizzes"]), __jacJsx("div", {
    "style": {
      "fontSize": "32px",
      "fontWeight": "bold",
      "color": "#f59e0b"
    }
  }, [stats.activeQuizzes])]), __jacJsx("div", {
    "style": {
      "background": "white",
      "padding": "20px",
      "borderRadius": "10px",
      "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("h3", {
    "style": {
      "color": "#6b7280",
      "marginBottom": "10px"
    }
  }, ["Avg. Student Score"]), __jacJsx("div", {
    "style": {
      "fontSize": "32px",
      "fontWeight": "bold",
      "color": "#ef4444"
    }
  }, [stats.avgScore, "%"])])]), __jacJsx("div", {
    "style": {
      "background": "white",
      "padding": "25px",
      "borderRadius": "10px",
      "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("h2", {
    "style": {
      "color": "#1f2937",
      "marginBottom": "20px"
    }
  }, ["Recent Activity"]), __jacJsx("div", {
    "style": {
      "color": "#6b7280"
    }
  }, [recentActivity.length > 0 && recentActivity.map(function (activity) {
    return __jacJsx("p", {
      "key": activity.timestamp
    }, ["• ", activity.message]);
  }), recentActivity.length === 0 && __jacJsx("p", {}, ["No recent activity"])])])])])]);
}
function TutorLessonsPage() {
  var _useState1 = useState([]),
    _useState10 = _slicedToArray(_useState1, 2),
    books = _useState10[0],
    setBooks = _useState10[1];
  var _useState11 = useState({}),
    _useState12 = _slicedToArray(_useState11, 2),
    chapters = _useState12[0],
    setChapters = _useState12[1];
  var _useState13 = useState(true),
    _useState14 = _slicedToArray(_useState13, 2),
    loading = _useState14[0],
    setLoading = _useState14[1];
  var _useState15 = useState(null),
    _useState16 = _slicedToArray(_useState15, 2),
    activeBook = _useState16[0],
    setActiveBook = _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    showBookModal = _useState18[0],
    setShowBookModal = _useState18[1];
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    showChapterModal = _useState20[0],
    setShowChapterModal = _useState20[1];
  var _useState21 = useState(null),
    _useState22 = _slicedToArray(_useState21, 2),
    currentBook = _useState22[0],
    setCurrentBook = _useState22[1];
  var _useState23 = useState(null),
    _useState24 = _slicedToArray(_useState23, 2),
    currentChapter = _useState24[0],
    setCurrentChapter = _useState24[1];
  var _useState25 = useState({
      "title": "",
      "description": "",
      "subject": "",
      "color": "#7c3aed"
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    bookForm = _useState26[0],
    setBookForm = _useState26[1];
  var _useState27 = useState({
      "title": "",
      "description": "",
      "order": 1
    }),
    _useState28 = _slicedToArray(_useState27, 2),
    chapterForm = _useState28[0],
    setChapterForm = _useState28[1];
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
  var bookColors = ["#7c3aed", "#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];
  useEffect(function () {
    function loadBooksAndChapters() {
      return _loadBooksAndChapters.apply(this, arguments);
    }
    function _loadBooksAndChapters() {
      _loadBooksAndChapters = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var userEmail, booksResult, booksData, updatedBooksData, _iterator, _step, _book, updatedBook, bookKeys, _i, _bookKeys, key, chaptersMap, _iterator2, _step2, book, chaptersResult, _t, _t2;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              setLoading(true);
              userEmail = localStorage.getItem("user_email");
              console.log("User email from storage:", userEmail);
              if (userEmail) {
                _context4.n = 1;
                break;
              }
              console.error("No user email found. User might not be logged in.");
              setLoading(false);
              return _context4.a(2);
            case 1:
              _context4.n = 2;
              return __jacSpawn("list_books", "", {
                "user_email": userEmail
              });
            case 2:
              booksResult = _context4.v;
              console.log("Books result:", booksResult);
              if (!booksResult.error) {
                _context4.n = 3;
                break;
              }
              console.error("Error loading books:", booksResult.error);
              setLoading(false);
              return _context4.a(2);
            case 3:
              if (!(booksResult.reports && booksResult.reports.length > 0)) {
                _context4.n = 22;
                break;
              }
              booksData = booksResult.reports[0] || [];
              console.log("Books data:", booksData, "Is array:", Array.isArray(booksData));
              updatedBooksData = [];
              _iterator = _createForOfIteratorHelper(booksData);
              _context4.p = 4;
              _iterator.s();
            case 5:
              if ((_step = _iterator.n()).done) {
                _context4.n = 8;
                break;
              }
              _book = _step.value;
              if (_book) {
                _context4.n = 6;
                break;
              }
              return _context4.a(3, 7);
            case 6:
              updatedBook = {};
              bookKeys = Object.keys(_book);
              for (_i = 0, _bookKeys = bookKeys; _i < _bookKeys.length; _i++) {
                key = _bookKeys[_i];
                updatedBook[key] = _book[key];
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
            case 7:
              _context4.n = 5;
              break;
            case 8:
              _context4.n = 10;
              break;
            case 9:
              _context4.p = 9;
              _t = _context4.v;
              _iterator.e(_t);
            case 10:
              _context4.p = 10;
              _iterator.f();
              return _context4.f(10);
            case 11:
              console.log("Final books array:", updatedBooksData);
              setBooks(updatedBooksData);
              if (!(updatedBooksData.length > 0)) {
                _context4.n = 20;
                break;
              }
              setActiveBook(updatedBooksData[0].id);
              chaptersMap = {};
              _iterator2 = _createForOfIteratorHelper(updatedBooksData);
              _context4.p = 12;
              _iterator2.s();
            case 13:
              if ((_step2 = _iterator2.n()).done) {
                _context4.n = 16;
                break;
              }
              book = _step2.value;
              _context4.n = 14;
              return __jacSpawn("list_chapters", "", {
                "user_email": userEmail,
                "book_id": book.id
              });
            case 14:
              chaptersResult = _context4.v;
              if (chaptersResult.report && chaptersResult.report.length > 0) {
                chaptersMap[book.id] = chaptersResult.report[0] || [];
              } else {}
            case 15:
              _context4.n = 13;
              break;
            case 16:
              _context4.n = 18;
              break;
            case 17:
              _context4.p = 17;
              _t2 = _context4.v;
              _iterator2.e(_t2);
            case 18:
              _context4.p = 18;
              _iterator2.f();
              return _context4.f(18);
            case 19:
              setChapters(chaptersMap);
              _context4.n = 21;
              break;
            case 20:
              setBooks([]);
              setChapters({});
            case 21:
              _context4.n = 23;
              break;
            case 22:
              console.log("No books found for user:", userEmail);
              setBooks([]);
              setChapters({});
            case 23:
              setLoading(false);
            case 24:
              return _context4.a(2);
          }
        }, _callee4, null, [[12, 17, 18, 19], [4, 9, 10, 11]]);
      }));
      return _loadBooksAndChapters.apply(this, arguments);
    }
    loadBooksAndChapters();
  }, []);
  function handleAddBook() {
    setShowBookModal(true);
    setBookForm({
      "title": "",
      "description": "",
      "subject": "",
      "color": bookColors[Math.floor(Math.random() * bookColors.length)]
    });
  }
  function handleAddChapter(bookId) {
    var foundBook = null;
    var _iterator3 = _createForOfIteratorHelper(books),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var book = _step3.value;
        if (book.id === bookId) {
          foundBook = book;
          break;
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    setCurrentBook(foundBook);
    var nextOrder = 1;
    if (chapters[bookId]) {
      nextOrder = chapters[bookId].length + 1;
    }
    setChapterForm({
      "title": "",
      "description": "",
      "order": nextOrder
    });
    setShowChapterModal(true);
  }
  function handleEditBook(book) {
    if (!book) {
      return;
    }
    setCurrentBook(book);
    setBookForm({
      "title": book.title || "Untitled Book",
      "description": book.description || "",
      "subject": book.subject || "",
      "color": book.color || bookColors[0]
    });
    setShowBookModal(true);
  }
  function handleEditChapter(bookId, chapter) {
    if (!chapter) {
      return;
    }
    var foundBook = null;
    var _iterator4 = _createForOfIteratorHelper(books),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var book = _step4.value;
        if (book.id === bookId) {
          foundBook = book;
          break;
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    setCurrentBook(foundBook);
    setCurrentChapter(chapter);
    setChapterForm({
      "title": chapter.title || "",
      "description": chapter.description || "",
      "order": chapter.order || 1
    });
    setShowChapterModal(true);
  }
  function handleViewChapter(chapter) {
    window.location.href = "/tutor/chapter/{chapter.id}";
  }
  function saveBook() {
    return _saveBook.apply(this, arguments);
  }
  function _saveBook() {
    _saveBook = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var userEmail, bookData, _result3, newBook, newBooksArray, _iterator1, _step1, _book2, newChaptersObject, _iterator10, _step10, key;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            if (bookForm.title.trim()) {
              _context5.n = 1;
              break;
            }
            alert("Please enter a book title");
            return _context5.a(2);
          case 1:
            userEmail = localStorage.getItem("user_email");
            console.log("User email from storage:", userEmail);
            if (userEmail) {
              _context5.n = 2;
              break;
            }
            console.error("No user email found. User might not be logged in.");
            return _context5.a(2);
          case 2:
            bookData = {
              "title": bookForm.title,
              "description": bookForm.description,
              "subject": bookForm.subject,
              "color": bookForm.color
            };
            if (!(currentBook && !showChapterModal)) {
              _context5.n = 4;
              break;
            }
            bookData["id"] = currentBook.id;
            _context5.n = 3;
            return __jacSpawn("update_book", "", {
              "id": bookData
            });
          case 3:
            _result3 = _context5.v;
            if (_result3 && _result3.success) {
              setBooks(books.map(function (book) {
                if (book.id === currentBook.id) {
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
                console.log("Book", book);
              }));
            }
            _context5.n = 6;
            break;
          case 4:
            _context5.n = 5;
            return __jacSpawn("create_book", "", {
              "user_email": userEmail,
              "title": bookData.title,
              "description": bookData.description,
              "subject": bookData.subject,
              "color": bookData.color
            });
          case 5:
            result = _context5.v;
            if (result && result.reports && result.reports.length > 0) {
              newBook = result.reports[0];
              newBooksArray = [];
              _iterator1 = _createForOfIteratorHelper(books);
              try {
                for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
                  _book2 = _step1.value;
                  newBooksArray.append(_book2);
                }
              } catch (err) {
                _iterator1.e(err);
              } finally {
                _iterator1.f();
              }
              newBooksArray.append(newBook);
              setBooks(newBooksArray);
              setActiveBook(newBook.id);
              newChaptersObject = {};
              _iterator10 = _createForOfIteratorHelper(chapters);
              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  key = _step10.value;
                  newChaptersObject[key] = chapters[key];
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
              newChaptersObject[newBook.id] = [];
              setChapters(newChaptersObject);
            }
          case 6:
            setShowBookModal(false);
            setCurrentBook(null);
          case 7:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return _saveBook.apply(this, arguments);
  }
  function saveChapter() {
    return _saveChapter.apply(this, arguments);
  }
  function _saveChapter() {
    _saveChapter = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var userEmail, chapterData, _result4, newChapters, _iterator11, _step11, key, updatedChaptersList, _iterator12, _step12, _chapter, updatedChapter, newChapter, _newChapters, _iterator13, _step13, _key, currentChapters, _iterator14, _step14, _chapter2;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            if (chapterForm.title.trim()) {
              _context6.n = 1;
              break;
            }
            alert("Please enter a chapter title");
            return _context6.a(2);
          case 1:
            if (currentBook) {
              _context6.n = 2;
              break;
            }
            alert("No book selected");
            return _context6.a(2);
          case 2:
            userEmail = localStorage.getItem("user_email");
            console.log("User email from storage:", userEmail);
            if (userEmail) {
              _context6.n = 3;
              break;
            }
            console.error("No user email found. User might not be logged in.");
            return _context6.a(2);
          case 3:
            chapterData = {
              "bookId": currentBook.id,
              "title": chapterForm.title,
              "description": chapterForm.description,
              "order": chapterForm.order
            };
            if (!currentChapter) {
              _context6.n = 5;
              break;
            }
            chapterData["id"] = currentChapter.id;
            _context6.n = 4;
            return __jacSpawn("update_chapter", "", {
              "user_email": userEmail,
              "book_id": chapterData.bookId,
              "title": chapterData.title,
              "description": chapterData.description,
              "order": chapterData.order
            });
          case 4:
            _result4 = _context6.v;
            if (_result4 && _result4.success) {
              newChapters = {};
              _iterator11 = _createForOfIteratorHelper(chapters);
              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  key = _step11.value;
                  newChapters[key] = chapters[key];
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
              if (currentBook.id in chapters) {
                updatedChaptersList = [];
                _iterator12 = _createForOfIteratorHelper(chapters[currentBook.id]);
                try {
                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                    _chapter = _step12.value;
                    if (_chapter.id === currentChapter.id) {
                      updatedChapter = {
                        "id": _chapter.id,
                        "book_id": _chapter.book_id,
                        "title": chapterData.title,
                        "description": chapterData.description,
                        "order": chapterData.order,
                        "content": _chapter.content || "",
                        "created_by": _chapter.created_by,
                        "created_at": _chapter.created_at,
                        "updated_at": std.time_now(),
                        "is_published": _chapter.is_published,
                        "student_access": _chapter.student_access
                      };
                      updatedChaptersList.append(updatedChapter);
                    } else {
                      updatedChaptersList.append(_chapter);
                    }
                  }
                } catch (err) {
                  _iterator12.e(err);
                } finally {
                  _iterator12.f();
                }
                newChapters[currentBook.id] = updatedChaptersList;
              }
              setChapters(newChapters);
            }
            _context6.n = 7;
            break;
          case 5:
            _context6.n = 6;
            return __jacSpawn("create_chapter", "", {
              "user_email": userEmail,
              "book_id": chapterData.bookId,
              "title": chapterData.title,
              "description": chapterData.description,
              "order": chapterData.order
            });
          case 6:
            result = _context6.v;
            if (result && result.reports && result.reports.length > 0) {
              newChapter = result.reports[0];
              _newChapters = {};
              _iterator13 = _createForOfIteratorHelper(chapters);
              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                  _key = _step13.value;
                  _newChapters[_key] = chapters[_key];
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }
              currentChapters = [];
              if (currentBook.id in chapters) {
                _iterator14 = _createForOfIteratorHelper(chapters[currentBook.id]);
                try {
                  for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                    _chapter2 = _step14.value;
                    currentChapters.append(_chapter2);
                  }
                } catch (err) {
                  _iterator14.e(err);
                } finally {
                  _iterator14.f();
                }
              }
              currentChapters.append(newChapter);
              _newChapters[currentBook.id] = currentChapters;
              setChapters(_newChapters);
            }
          case 7:
            setShowChapterModal(false);
            setCurrentChapter(null);
            setCurrentBook(null);
          case 8:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return _saveChapter.apply(this, arguments);
  }
  function deleteBook(_x) {
    return _deleteBook.apply(this, arguments);
  }
  function _deleteBook() {
    _deleteBook = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(bookId) {
      var _result5, newChapters, _iterator15, _step15, key;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            if (!confirm("Are you sure you want to delete this book and all its chapters?")) {
              _context7.n = 2;
              break;
            }
            _context7.n = 1;
            return __jacSpawn("delete_book", "", {
              "id": {
                "id": bookId
              }
            });
          case 1:
            _result5 = _context7.v;
            if (_result5 && _result5.success) {
              setBooks(books.filter(function (book) {
                return book.id !== bookId;
              }));
              newChapters = {};
              _iterator15 = _createForOfIteratorHelper(chapters);
              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  key = _step15.value;
                  if (key !== bookId) {
                    newChapters[key] = chapters[key];
                  }
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }
              setChapters(newChapters);
              if (activeBook === bookId && books.length > 0) {
                setActiveBook(books[0].id);
              }
              alert("Book deleted successfully");
            }
          case 2:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    return _deleteBook.apply(this, arguments);
  }
  function deleteChapter(_x2, _x3) {
    return _deleteChapter.apply(this, arguments);
  }
  function _deleteChapter() {
    _deleteChapter = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(bookId, chapterId) {
      var _result6, newChapters, _iterator16, _step16, key, filteredChapters, _iterator17, _step17, _chapter3;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            if (!confirm("Are you sure you want to delete this chapter?")) {
              _context8.n = 2;
              break;
            }
            _context8.n = 1;
            return __jacSpawn("delete_chapter", "", {
              "user_email": {
                "id": chapterId
              }
            });
          case 1:
            _result6 = _context8.v;
            if (_result6 && _result6.success) {
              newChapters = {};
              _iterator16 = _createForOfIteratorHelper(chapters);
              try {
                for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                  key = _step16.value;
                  if (key === bookId) {
                    filteredChapters = [];
                    _iterator17 = _createForOfIteratorHelper(chapters[key]);
                    try {
                      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                        _chapter3 = _step17.value;
                        if (_chapter3.id !== chapterId) {
                          filteredChapters.append(_chapter3);
                        }
                      }
                    } catch (err) {
                      _iterator17.e(err);
                    } finally {
                      _iterator17.f();
                    }
                    newChapters[key] = filteredChapters;
                  } else {
                    newChapters[key] = chapters[key];
                  }
                }
              } catch (err) {
                _iterator16.e(err);
              } finally {
                _iterator16.f();
              }
              setChapters(newChapters);
              alert("Chapter deleted successfully");
            }
          case 2:
            return _context8.a(2);
        }
      }, _callee8);
    }));
    return _deleteChapter.apply(this, arguments);
  }
  function reorderChapters(_x4, _x5, _x6) {
    return _reorderChapters.apply(this, arguments);
  }
  function _reorderChapters() {
    _reorderChapters = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(bookId, fromIndex, toIndex) {
      var bookChapters, _iterator18, _step18, _chapter4, newChaptersList, _iterator19, _step19, _i2, _iterator20, _step20, _i3, updatedChaptersList, _iterator21, _step21, _i5, _chapter6, updatedChapter, newChaptersState, _iterator22, _step22, key, _i4, _updatedChaptersList, _chapter5, _t3;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            bookChapters = [];
            if (bookId in chapters) {
              _iterator18 = _createForOfIteratorHelper(chapters[bookId]);
              try {
                for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                  _chapter4 = _step18.value;
                  bookChapters.append(_chapter4);
                }
              } catch (err) {
                _iterator18.e(err);
              } finally {
                _iterator18.f();
              }
            }
            if (!(bookChapters.length === 0 || fromIndex === toIndex)) {
              _context9.n = 1;
              break;
            }
            return _context9.a(2);
          case 1:
            newChaptersList = [];
            if (!(fromIndex < toIndex)) {
              _context9.n = 10;
              break;
            }
            _iterator19 = _createForOfIteratorHelper(range(bookChapters.length));
            _context9.p = 2;
            _iterator19.s();
          case 3:
            if ((_step19 = _iterator19.n()).done) {
              _context9.n = 6;
              break;
            }
            _i2 = _step19.value;
            if (!(_i2 === fromIndex)) {
              _context9.n = 4;
              break;
            }
            return _context9.a(3, 5);
          case 4:
            if (_i2 === toIndex) {
              newChaptersList.append(bookChapters[fromIndex]);
            }
            newChaptersList.append(bookChapters[_i2]);
          case 5:
            _context9.n = 3;
            break;
          case 6:
            _context9.n = 8;
            break;
          case 7:
            _context9.p = 7;
            _t3 = _context9.v;
            _iterator19.e(_t3);
          case 8:
            _context9.p = 8;
            _iterator19.f();
            return _context9.f(8);
          case 9:
            if (toIndex === bookChapters.length - 1) {
              newChaptersList.append(bookChapters[fromIndex]);
            }
            _context9.n = 11;
            break;
          case 10:
            _iterator20 = _createForOfIteratorHelper(range(bookChapters.length));
            try {
              for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                _i3 = _step20.value;
                if (_i3 === toIndex) {
                  newChaptersList.append(bookChapters[fromIndex]);
                }
                if (_i3 !== fromIndex) {
                  newChaptersList.append(bookChapters[_i3]);
                }
              }
            } catch (err) {
              _iterator20.e(err);
            } finally {
              _iterator20.f();
            }
          case 11:
            updatedChaptersList = [];
            _iterator21 = _createForOfIteratorHelper(range(newChaptersList.length));
            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                _i5 = _step21.value;
                _chapter6 = newChaptersList[_i5];
                updatedChapter = {
                  "id": _chapter6.id,
                  "book_id": _chapter6.book_id,
                  "title": _chapter6.title,
                  "description": _chapter6.description,
                  "order": _i5 + 1,
                  "content": _chapter6.content || "",
                  "created_by": _chapter6.created_by,
                  "created_at": _chapter6.created_at,
                  "updated_at": std.time_now(),
                  "is_published": _chapter6.is_published,
                  "student_access": _chapter6.student_access
                };
                updatedChaptersList.append(updatedChapter);
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }
            newChaptersState = {};
            _iterator22 = _createForOfIteratorHelper(chapters);
            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                key = _step22.value;
                if (key === bookId) {
                  newChaptersState[key] = updatedChaptersList;
                } else {
                  newChaptersState[key] = chapters[key];
                }
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
            setChapters(newChaptersState);
            _i4 = 0, _updatedChaptersList = updatedChaptersList;
          case 12:
            if (!(_i4 < _updatedChaptersList.length)) {
              _context9.n = 14;
              break;
            }
            _chapter5 = _updatedChaptersList[_i4];
            _context9.n = 13;
            return __jacSpawn("update_chapter_order", "", {
              "user_email": {
                "id": _chapter5.id,
                "order": _chapter5.order
              }
            });
          case 13:
            _i4++;
            _context9.n = 12;
            break;
          case 14:
            return _context9.a(2);
        }
      }, _callee9, null, [[2, 7, 8, 9]]);
    }));
    return _reorderChapters.apply(this, arguments);
  }
  function getChapterCount(bookId) {
    var count = 0;
    if (chapters[bookId]) {
      count = chapters[bookId].length;
    }
    return func(count) + " chapters";
  }
  function renderBookDescription(book) {
    if (!book) {
      return __jacJsx("p", {
        "style": {
          "color": "#6b7280",
          "fontSize": "12px",
          "margin": "0",
          "marginBottom": "8px",
          "height": "1em"
        }
      }, ["&nbsp;"]);
    }
    var descText = getBookDescription(book);
    if (descText.trim() !== "") {
      if (descText.length > 60) {
        descText = descText.slice(0, 60) + "...";
      }
      return __jacJsx("p", {
        "style": {
          "color": "#6b7280",
          "fontSize": "12px",
          "margin": "0",
          "marginBottom": "8px"
        }
      }, [descText]);
    } else {
      return __jacJsx("p", {
        "style": {
          "color": "#6b7280",
          "fontSize": "12px",
          "margin": "0",
          "marginBottom": "8px",
          "height": "1em"
        }
      }, ["&nbsp;"]);
    }
  }
  function updateBookFormField(field, value) {
    var newForm = {};
    var _iterator5 = _createForOfIteratorHelper(bookForm),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var key = _step5.value;
        newForm[key] = bookForm[key];
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    newForm[field] = value;
    setBookForm(newForm);
  }
  var activeBookData = null;
  if (activeBook) {
    var _iterator6 = _createForOfIteratorHelper(books),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var book = _step6.value;
        if (book.id === activeBook) {
          activeBookData = book;
          break;
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }
  var activeBookChapters = [];
  if (activeBook && chapters[activeBook]) {
    activeBookChapters = chapters[activeBook];
  }
  var sortedChapters = [];
  if (activeBookChapters.length > 0) {
    var _iterator7 = _createForOfIteratorHelper(activeBookChapters),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var chapter = _step7.value;
        sortedChapters.append(chapter);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    var _iterator8 = _createForOfIteratorHelper(range(sortedChapters.length)),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var i = _step8.value;
        var _iterator9 = _createForOfIteratorHelper(range(i + 1, sortedChapters.length)),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var j = _step9.value;
            var orderI = sortedChapters[i].order || 0;
            var orderJ = sortedChapters[j].order || 0;
            if (orderI > orderJ) {
              var temp = sortedChapters[i];
              sortedChapters[i] = sortedChapters[j];
              sortedChapters[j] = temp;
            }
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
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
    var items = [];
    var _iterator0 = _createForOfIteratorHelper(books),
      _step0;
    try {
      var _loop = function _loop() {
        var book = _step0.value;
        if (!book) {
          return 1; // continue
        }
        var backgroundValue = "transparent";
        var borderValue = "2px solid transparent";
        var boxShadowValue = "none";
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
        var item = __jacJsx("div", {
          "key": book.id,
          "style": {
            "padding": "15px",
            "background": backgroundValue,
            "borderRadius": "8px",
            "border": borderValue,
            "cursor": "pointer",
            "boxShadow": boxShadowValue,
            "transition": "all 0.2s"
          },
          "onClick": handleBookClick
        }, [__jacJsx("div", {
          "style": {
            "display": "flex",
            "alignItems": "center",
            "marginBottom": "8px"
          }
        }, [__jacJsx("div", {
          "style": {
            "width": "12px",
            "height": "12px",
            "borderRadius": "50%",
            "background": book.color || "#7c3aed",
            "marginRight": "10px"
          }
        }, []), __jacJsx("h4", {
          "style": {
            "color": "#1f2937",
            "margin": "0",
            "flex": "1"
          }
        }, [getBookTitle(book)])]), renderBookDescription(book), __jacJsx("div", {
          "style": {
            "display": "flex",
            "justifyContent": "space-between",
            "alignItems": "center"
          }
        }, [__jacJsx("span", {
          "style": {
            "color": "#9ca3af",
            "fontSize": "11px"
          }
        }, []), __jacJsx("div", {
          "style": {
            "display": "flex",
            "gap": "5px"
          }
        }, [__jacJsx("button", {
          "style": {
            "padding": "2px 6px",
            "background": "transparent",
            "color": "#3b82f6",
            "border": "1px solid #3b82f6",
            "borderRadius": "4px",
            "cursor": "pointer",
            "fontSize": "11px"
          },
          "onClick": handleEditClick
        }, ["Edit"]), __jacJsx("button", {
          "style": {
            "padding": "2px 6px",
            "background": "transparent",
            "color": "#ef4444",
            "border": "1px solid #ef4444",
            "borderRadius": "4px",
            "cursor": "pointer",
            "fontSize": "11px"
          },
          "onClick": handleDeleteClick
        }, ["Delete"])])])]);
        items.push(item);
      };
      for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
        if (_loop()) continue;
      }
    } catch (err) {
      _iterator0.e(err);
    } finally {
      _iterator0.f();
    }
    return items;
  }
  if (loading) {
    return __jacJsx("div", {
      "style": {
        "minHeight": "100vh",
        "backgroundColor": "#f9fafb"
      }
    }, [__jacJsx(TutorNavigation, {}, []), __jacJsx("div", {
      "style": {
        "display": "flex"
      }
    }, [__jacJsx(TutorSidebar, {}, []), __jacJsx("div", {
      "style": {
        "flex": "1",
        "padding": "30px"
      }
    }, [__jacJsx("div", {
      "style": {
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "marginBottom": "30px"
      }
    }, [__jacJsx("h1", {
      "style": {
        "color": "#1f2937"
      }
    }, ["Manage Books & Chapters"]), __jacJsx("button", {
      "style": {
        "padding": "10px 20px",
        "background": "#7c3aed",
        "color": "white",
        "border": "none",
        "borderRadius": "6px",
        "cursor": "pointer"
      },
      "onClick": handleAddBook
    }, ["+ Add New Book"])]), __jacJsx("div", {}, ["Loading books and chapters..."])])])]);
  }
  return __jacJsx("div", {
    "style": {
      "minHeight": "100vh",
      "backgroundColor": "#f9fafb"
    }
  }, [__jacJsx(TutorNavigation, {}, []), __jacJsx("div", {
    "style": {
      "display": "flex"
    }
  }, [__jacJsx(TutorSidebar, {}, []), __jacJsx("div", {
    "style": {
      "flex": "1",
      "padding": "30px"
    }
  }, [__jacJsx("div", {
    "style": {
      "display": "flex",
      "justifyContent": "space-between",
      "alignItems": "center",
      "marginBottom": "30px"
    }
  }, [__jacJsx("h1", {
    "style": {
      "color": "#1f2937"
    }
  }, ["Manage Books & Chapters"]), __jacJsx("button", {
    "style": {
      "padding": "10px 20px",
      "background": "#7c3aed",
      "color": "white",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer"
    },
    "onClick": handleAddBook
  }, ["+ Add New Book"])]), books.length === 0 ? __jacJsx("div", {
    "style": {
      "textAlign": "center",
      "padding": "50px",
      "background": "white",
      "borderRadius": "10px",
      "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("div", {
    "style": {
      "fontSize": "48px",
      "marginBottom": "20px",
      "color": "#d1d5db"
    }
  }, ["📚"]), __jacJsx("h3", {
    "style": {
      "color": "#4b5563",
      "marginBottom": "10px"
    }
  }, ["No books yet"]), __jacJsx("p", {
    "style": {
      "color": "#6b7280",
      "marginBottom": "20px"
    }
  }, ["Create your first book to organize your lessons into chapters."]), __jacJsx("button", {
    "style": {
      "padding": "10px 20px",
      "background": "#7c3aed",
      "color": "white",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer"
    },
    "onClick": handleAddBook
  }, ["Create Your First Book"])]) : __jacJsx("div", {
    "style": {
      "display": "flex",
      "gap": "30px"
    }
  }, [__jacJsx("div", {
    "style": {
      "width": "250px",
      "flexShrink": "0"
    }
  }, [__jacJsx("div", {
    "style": {
      "marginBottom": "20px"
    }
  }, [__jacJsx("h3", {
    "style": {
      "color": "#374151",
      "marginBottom": "15px"
    }
  }, ["Books"]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "flexDirection": "column",
      "gap": "10px"
    }
  }, [renderBooksList(), "  ", __jacJsx("p", {}, ["lessons "]), "                 "])])]), __jacJsx("div", {
    "style": {
      "flex": "1"
    }
  }, [!activeBookData ? __jacJsx("div", {
    "style": {
      "textAlign": "center",
      "padding": "50px",
      "background": "white",
      "borderRadius": "10px",
      "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("div", {
    "style": {
      "fontSize": "48px",
      "marginBottom": "20px",
      "color": "#d1d5db"
    }
  }, ["📚"]), __jacJsx("h3", {
    "style": {
      "color": "#4b5563",
      "marginBottom": "10px"
    }
  }, ["Select a Book"]), __jacJsx("p", {
    "style": {
      "color": "#6b7280"
    }
  }, ["Choose a book from the sidebar to view and manage its chapters."])]) : __jacJsx("div", {}, [__jacJsx("div", {
    "style": {
      "display": "flex",
      "justifyContent": "space-between",
      "alignItems": "center",
      "marginBottom": "20px"
    }
  }, [__jacJsx("div", {}, [__jacJsx("h2", {
    "style": {
      "color": "#1f2937",
      "marginBottom": "5px"
    }
  }, [getBookTitle(activeBookData)]), getBookDescription(activeBookData) ? __jacJsx("p", {
    "style": {
      "color": "#6b7280",
      "fontSize": "14px"
    }
  }, [getBookDescription(activeBookData)]) : null]), __jacJsx("button", {
    "style": {
      "padding": "8px 16px",
      "background": "#10b981",
      "color": "white",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer",
      "fontSize": "14px"
    },
    "onClick": function onClick() {
      return handleAddChapter(activeBook);
    }
  }, ["+ Add Chapter"])]), activeBookChapters.length === 0 ? __jacJsx("div", {
    "style": {
      "textAlign": "center",
      "padding": "40px",
      "background": "white",
      "borderRadius": "10px",
      "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("div", {
    "style": {
      "fontSize": "48px",
      "marginBottom": "20px",
      "color": "#d1d5db"
    }
  }, ["📖"]), __jacJsx("h3", {
    "style": {
      "color": "#4b5563",
      "marginBottom": "10px"
    }
  }, ["No chapters yet"]), __jacJsx("p", {
    "style": {
      "color": "#6b7280",
      "marginBottom": "20px"
    }
  }, ["Add chapters to organize your lesson content."]), __jacJsx("button", {
    "style": {
      "padding": "10px 20px",
      "background": "#10b981",
      "color": "white",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer"
    },
    "onClick": function onClick() {
      return handleAddChapter(activeBook);
    }
  }, ["Add First Chapter"])]) : __jacJsx("div", {
    "style": {
      "display": "flex",
      "flexDirection": "column",
      "gap": "15px"
    }
  }, [sortedChapters.map(function (chapter, index) {
    return __jacJsx("div", {
      "key": chapter.id,
      "style": {
        "background": "white",
        "padding": "20px",
        "borderRadius": "10px",
        "boxShadow": "0 2px 4px rgba(0,0,0,0.1)",
        "display": "flex",
        "alignItems": "center",
        "gap": "15px"
      }
    }, [__jacJsx("div", {
      "style": {
        "width": "40px",
        "height": "40px",
        "background": activeBookData.color || "#7c3aed",
        "color": "white",
        "borderRadius": "8px",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "fontWeight": "bold",
        "fontSize": "16px",
        "flexShrink": "0"
      }
    }, [index + 1]), __jacJsx("div", {
      "style": {
        "flex": "1"
      }
    }, [__jacJsx("h3", {
      "style": {
        "color": "#1f2937",
        "marginBottom": "5px"
      }
    }, [chapter.title]), chapter.description ? __jacJsx("p", {
      "style": {
        "color": "#6b7280",
        "fontSize": "14px",
        "margin": "0"
      }
    }, [chapter.description]) : null]), __jacJsx("div", {
      "style": {
        "display": "flex",
        "gap": "10px",
        "flexShrink": "0"
      }
    }, [__jacJsx("button", {
      "style": {
        "padding": "8px 16px",
        "background": "#3b82f6",
        "color": "white",
        "border": "none",
        "borderRadius": "6px",
        "cursor": "pointer",
        "fontSize": "14px"
      },
      "onClick": function onClick() {
        return handleViewChapter(chapter);
      }
    }, ["View Content"]), __jacJsx("button", {
      "style": {
        "padding": "6px 12px",
        "background": "transparent",
        "color": "#6b7280",
        "border": "1px solid #d1d5db",
        "borderRadius": "6px",
        "cursor": "pointer",
        "fontSize": "13px"
      },
      "onClick": function onClick() {
        return handleEditChapter(activeBook, chapter);
      }
    }, ["Edit"]), __jacJsx("button", {
      "style": {
        "padding": "6px 12px",
        "background": "transparent",
        "color": "#ef4444",
        "border": "1px solid #ef4444",
        "borderRadius": "6px",
        "cursor": "pointer",
        "fontSize": "13px"
      },
      "onClick": function onClick() {
        return deleteChapter(activeBook, chapter.id);
      }
    }, ["Delete"])])]);
  })])])])])])]), __jacJsx("div", {}, [showBookModal ? __jacJsx("div", {
    "style": {
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
    }
  }, [__jacJsx("div", {
    "style": {
      "background": "white",
      "padding": "30px",
      "borderRadius": "10px",
      "width": "500px",
      "maxWidth": "90%",
      "maxHeight": "80vh",
      "overflow": "auto"
    }
  }, [__jacJsx("h2", {
    "style": {
      "marginBottom": "20px",
      "color": "#1f2937"
    }
  }, [currentBook ? new Set(["Edit Book"]) : new Set(["Add New Book "])]), __jacJsx("div", {
    "style": {
      "marginBottom": "15px"
    }
  }, [__jacJsx("label", {
    "style": {
      "display": "block",
      "marginBottom": "5px",
      "color": "#374151",
      "fontWeight": "500"
    }
  }, ["Book Title *"]), __jacJsx("input", {
    "type": "text",
    "style": {
      "width": "100%",
      "padding": "10px",
      "border": "1px solid #d1d5db",
      "borderRadius": "6px",
      "fontSize": "16px"
    },
    "value": bookForm.title,
    "onChange": function onChange(e) {
      setBookForm({
        title: e.target.value,
        description: bookForm.description,
        subject: bookForm.subject,
        color: bookForm.color
      });
    },
    "placeholder": "e.g., Jac Language Basics"
  }, [])]), __jacJsx("div", {
    "style": {
      "marginBottom": "15px"
    }
  }, [__jacJsx("label", {
    "style": {
      "display": "block",
      "marginBottom": "5px",
      "color": "#374151",
      "fontWeight": "500"
    }
  }, ["Description"]), __jacJsx("textarea", {
    "style": {
      "width": "100%",
      "padding": "10px",
      "border": "1px solid #d1d5db",
      "borderRadius": "6px",
      "minHeight": "80px",
      "fontSize": "14px"
    },
    "value": bookForm.description,
    "onChange": function onChange(e) {
      setBookForm({
        title: bookForm.title,
        description: e.target.value,
        subject: bookForm.subject,
        color: bookForm.color
      });
    },
    "placeholder": "Describe what this book covers"
  }, [])]), __jacJsx("div", {
    "style": {
      "display": "grid",
      "gridTemplateColumns": "2fr 1fr",
      "gap": "15px",
      "marginBottom": "20px"
    }
  }, [__jacJsx("div", {}, [__jacJsx("label", {
    "style": {
      "display": "block",
      "marginBottom": "5px",
      "color": "#374151",
      "fontWeight": "500"
    }
  }, ["Subject/Category"]), __jacJsx("input", {
    "type": "text",
    "style": {
      "width": "100%",
      "padding": "10px",
      "border": "1px solid #d1d5db",
      "borderRadius": "6px"
    },
    "value": bookForm.subject,
    "onChange": function onChange(e) {
      setBookForm({
        title: bookForm.title,
        description: bookForm.description,
        subject: e.target.value,
        color: bookForm.color
      });
    },
    "placeholder": "e.g., Programming, Jac Language"
  }, [])]), __jacJsx("div", {}, [__jacJsx("label", {
    "style": {
      "display": "block",
      "marginBottom": "5px",
      "color": "#374151",
      "fontWeight": "500"
    }
  }, ["Color"]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "gap": "8px",
      "flexWrap": "wrap"
    }
  }, [bookColors.map(function (color) {
    var isSelected = bookForm.color === color;
    return __jacJsx("div", {
      "key": color,
      "style": {
        "width": "30px",
        "height": "30px",
        "borderRadius": "6px",
        "background": color,
        "cursor": "pointer",
        "border": isSelected ? new Set(["3px solid white"]) : new Set(["none"]),
        "outline": isSelected ? new Set(["2px solid #374151"]) : new Set(["none"])
      },
      "onClick": function onClick(e) {
        setBookForm({
          title: bookForm.title,
          description: bookForm.description,
          subject: bookForm.subject,
          color: e.target.value
        });
      }
    }, []);
  })])])]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "gap": "10px",
      "justifyContent": "flex-end"
    }
  }, [__jacJsx("button", {
    "style": {
      "padding": "10px 20px",
      "background": "#6b7280",
      "color": "white",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer"
    },
    "onClick": function onClick() {
      setShowBookModal(false);
      setCurrentBook(null);
    }
  }, ["Cancel"]), __jacJsx("button", {
    "style": {
      "padding": "10px 20px",
      "background": "#7c3aed",
      "color": "white",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer"
    },
    "onClick": saveBook
  }, [currentBook ? new Set(["Update Book"]) : new Set(["Create Book"])])])])]) : new Set([null])]), "Add", showChapterModal && currentBook ? __jacJsx("div", {
    "style": {
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
    }
  }, [__jacJsx("div", {
    "style": {
      "background": "white",
      "padding": "30px",
      "borderRadius": "10px",
      "width": "500px",
      "maxWidth": "90%",
      "maxHeight": "80vh",
      "overflow": "auto"
    }
  }, [__jacJsx("h2", {
    "style": {
      "marginBottom": "20px",
      "color": "#1f2937"
    }
  }, [getChapterModalTitleText(), __jacJsx("div", {
    "style": {
      "fontSize": "14px",
      "color": "#6b7280",
      "fontWeight": "normal",
      "marginTop": "5px"
    }
  }, [getChapterModalTitle()])]), __jacJsx("div", {
    "style": {
      "marginBottom": "15px"
    }
  }, [__jacJsx("label", {
    "style": {
      "display": "block",
      "marginBottom": "5px",
      "color": "#374151",
      "fontWeight": "500"
    }
  }, ["Chapter Title *"]), __jacJsx("input", {
    "type": "text",
    "style": {
      "width": "100%",
      "padding": "10px",
      "border": "1px solid #d1d5db",
      "borderRadius": "6px",
      "fontSize": "16px"
    },
    "value": chapterForm.title,
    "onChange": function onChange(e) {
      setChapterForm({
        title: e.target.value,
        description: chapterForm.description,
        order: chapterForm.order
      });
    },
    "placeholder": "e.g., Introduction to Variables"
  }, [])]), __jacJsx("div", {
    "style": {
      "marginBottom": "15px"
    }
  }, [__jacJsx("label", {
    "style": {
      "display": "block",
      "marginBottom": "5px",
      "color": "#374151",
      "fontWeight": "500"
    }
  }, ["Description"]), __jacJsx("textarea", {
    "style": {
      "width": "100%",
      "padding": "10px",
      "border": "1px solid #d1d5db",
      "borderRadius": "6px",
      "minHeight": "80px",
      "fontSize": "14px"
    },
    "value": chapterForm.description,
    "onChange": function onChange(e) {
      setChapterForm({
        title: chapterForm.title,
        description: e.target.value,
        order: chapterForm.order
      });
    },
    "placeholder": "What will students learn in this chapter?"
  }, [])]), __jacJsx("div", {
    "style": {
      "marginBottom": "20px"
    }
  }, [__jacJsx("label", {
    "style": {
      "display": "block",
      "marginBottom": "5px",
      "color": "#374151",
      "fontWeight": "500"
    }
  }, ["Order Position"]), __jacJsx("input", {
    "type": "number",
    "min": "1",
    "style": {
      "width": "100px",
      "padding": "10px",
      "border": "1px solid #d1d5db",
      "borderRadius": "6px"
    },
    "value": chapterForm.order,
    "onChange": function onChange(e) {
      setChapterForm({
        title: chapterForm.title,
        description: chapterForm.description,
        order: e.target.value
      });
    }
  }, [])]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "gap": "10px",
      "justifyContent": "flex-end"
    }
  }, [__jacJsx("button", {
    "style": {
      "padding": "10px 20px",
      "background": "#6b7280",
      "color": "white",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer"
    },
    "onClick": function onClick() {
      setShowChapterModal(false);
      setCurrentChapter(null);
      setCurrentBook(null);
    }
  }, ["Cancel"]), __jacJsx("button", {
    "style": {
      "padding": "10px 20px",
      "background": "#10b981",
      "color": "white",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer"
    },
    "onClick": saveChapter
  }, [getChapterButtonText()])])])]) : new Set([null])]);
}
function StudentNavigation() {
  var _useState29 = useState(null),
    _useState30 = _slicedToArray(_useState29, 2),
    userInfo = _useState30[0],
    setUserInfo = _useState30[1];
  var navigate = useNavigate();
  useEffect(function () {
    function loadUserInfo() {
      return _loadUserInfo3.apply(this, arguments);
    }
    function _loadUserInfo3() {
      _loadUserInfo3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        var currentSessionId, _result7;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              currentSessionId = localStorage.getItem("session_id");
              if (!currentSessionId) {
                _context0.n = 2;
                break;
              }
              _context0.n = 1;
              return __jacSpawn("get_session_user", "", {
                "session_id": currentSessionId
              });
            case 1:
              _result7 = _context0.v;
              if (_result7.reports && _result7.reports.length > 0) {
                setUserInfo(_result7.reports[0]);
              }
            case 2:
              return _context0.a(2);
          }
        }, _callee0);
      }));
      return _loadUserInfo3.apply(this, arguments);
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
  return __jacJsx("nav", {
    "style": {
      "padding": "12px 24px",
      "background": "#4361ee",
      "color": "#ffffff",
      "display": "flex",
      "justifyContent": "space-between",
      "alignItems": "center"
    }
  }, [__jacJsx("div", {
    "style": {
      "fontWeight": "600",
      "fontSize": "18px"
    }
  }, ["Jac Student Portal"]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "gap": "16px",
      "alignItems": "center"
    }
  }, [__jacJsx("span", {}, ["Welcome, ", userInfo.name]), __jacJsx(Link, {
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
  }, ["My Lessons"]), __jacJsx(Link, {
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
function StudentSidebar() {
  var navigate = useNavigate();
  function handleNavigation(path) {
    navigate(path);
  }
  return __jacJsx("div", {
    "style": {
      "width": "250px",
      "background": "#f0f9ff",
      "borderRight": "1px solid #e5e7eb",
      "padding": "20px",
      "height": "calc(100vh - 64px)"
    }
  }, [__jacJsx("h3", {
    "style": {
      "color": "#0369a1",
      "marginBottom": "20px"
    }
  }, ["My Learning"]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "flexDirection": "column",
      "gap": "8px"
    }
  }, [__jacJsx("button", {
    "onClick": function onClick() {
      handleNavigation("/dashboard");
    },
    "style": {
      "padding": "10px 15px",
      "background": "#dbeafe",
      "color": "#1d4ed8",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer",
      "textAlign": "left",
      "fontWeight": "500"
    }
  }, ["🏠 Home"]), __jacJsx("button", {
    "onClick": function onClick() {
      handleNavigation("/lessons");
    },
    "style": {
      "padding": "10px 15px",
      "background": "#fef3c7",
      "color": "#92400e",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer",
      "textAlign": "left",
      "fontWeight": "500"
    }
  }, ["📚 Lessons"]), __jacJsx("button", {
    "onClick": function onClick() {
      handleNavigation("/progress");
    },
    "style": {
      "padding": "10px 15px",
      "background": "#dcfce7",
      "color": "#166534",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer",
      "textAlign": "left",
      "fontWeight": "500"
    }
  }, ["📈 Progress"]), __jacJsx("button", {
    "onClick": function onClick() {
      handleNavigation("/quizzes");
    },
    "style": {
      "padding": "10px 15px",
      "background": "#f3e8ff",
      "color": "#7c3aed",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer",
      "textAlign": "left",
      "fontWeight": "500"
    }
  }, ["✏️ Quizzes"]), __jacJsx("button", {
    "onClick": function onClick() {
      handleNavigation("/ai-tutor");
    },
    "style": {
      "padding": "10px 15px",
      "background": "#ffe4e6",
      "color": "#be123c",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer",
      "textAlign": "left",
      "fontWeight": "500"
    }
  }, ["🤖 AI Tutor"])])]);
}
function DashboardPage() {
  if (!jacIsLoggedIn()) {
    return __jacJsx(Navigate, {
      "to": "/login"
    }, []);
  }
  var _useState31 = useState(null),
    _useState32 = _slicedToArray(_useState31, 2),
    userInfo = _useState32[0],
    setUserInfo = _useState32[1];
  var _useState33 = useState({
      "progressPercent": 0,
      "avgScore": 0,
      "completedLessons": 0,
      "totalLessons": 0,
      "streakDays": 0
    }),
    _useState34 = _slicedToArray(_useState33, 2),
    stats = _useState34[0],
    setStats = _useState34[1];
  var _useState35 = useState([]),
    _useState36 = _slicedToArray(_useState35, 2),
    recentLessons = _useState36[0],
    setRecentLessons = _useState36[1];
  var _useState37 = useState([]),
    _useState38 = _slicedToArray(_useState37, 2),
    books = _useState38[0],
    setBooks = _useState38[1];
  var _useState39 = useState(true),
    _useState40 = _slicedToArray(_useState39, 2),
    loading = _useState40[0],
    setLoading = _useState40[1];
  var _useState41 = useState("overview"),
    _useState42 = _slicedToArray(_useState41, 2),
    activeTab = _useState42[0],
    setActiveTab = _useState42[1];
  useEffect(function () {
    function loadUserInfo() {
      return _loadUserInfo4.apply(this, arguments);
    }
    function _loadUserInfo4() {
      _loadUserInfo4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        var currentSessionId, _result8, userData;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              currentSessionId = localStorage.getItem("session_id");
              if (!currentSessionId) {
                _context1.n = 2;
                break;
              }
              _context1.n = 1;
              return __jacSpawn("get_session_user", "", {
                "session_id": currentSessionId
              });
            case 1:
              _result8 = _context1.v;
              if (_result8.reports && _result8.reports.length > 0) {
                userData = _result8.reports[0];
                setUserInfo(userData);
                if (userData.role === "tutor") {
                  window.location.href = "/tutor/dashboard";
                }
              }
            case 2:
              return _context1.a(2);
          }
        }, _callee1);
      }));
      return _loadUserInfo4.apply(this, arguments);
    }
    loadUserInfo();
  }, []);
  useEffect(function () {
    function loadData() {
      return _loadData2.apply(this, arguments);
    }
    function _loadData2() {
      _loadData2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
        var statsResult, statsData, lessonsResult, booksResult;
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.n) {
            case 0:
              if (!(userInfo && userInfo.email)) {
                _context10.n = 4;
                break;
              }
              setLoading(true);
              _context10.n = 1;
              return __jacSpawn("get_student_progress_summary", "", {
                "user_email": userInfo.email
              });
            case 1:
              statsResult = _context10.v;
              if (statsResult.reports && statsResult.reports.length > 0) {
                statsData = statsResult.reports[0];
                setStats({
                  "progressPercent": statsData.progress_percent,
                  "avgScore": statsData.avg_score,
                  "completedLessons": statsData.completed_lessons,
                  "totalLessons": statsData.total_lessons,
                  "streakDays": statsData.streak_days
                });
              }
              _context10.n = 2;
              return __jacSpawn("get_student_recent_lessons", "", {
                "user_email": userInfo.email,
                "limit": 4
              });
            case 2:
              lessonsResult = _context10.v;
              if (lessonsResult.reports && lessonsResult.reports.length > 0) {
                setRecentLessons(lessonsResult.reports[0]);
              }
              _context10.n = 3;
              return __jacSpawn("get_student_books", "", {
                "user_email": userInfo.email
              });
            case 3:
              booksResult = _context10.v;
              if (booksResult.reports && booksResult.reports.length > 0) {
                setBooks(booksResult.reports[0]);
              }
              setLoading(false);
            case 4:
              return _context10.a(2);
          }
        }, _callee10);
      }));
      return _loadData2.apply(this, arguments);
    }
    loadData();
  }, [userInfo]);
  function loadBookChapters(bookId) {
    function loadChapters() {
      return _loadChapters.apply(this, arguments);
    }
    function _loadChapters() {
      _loadChapters = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
        var chaptersResult;
        return _regenerator().w(function (_context11) {
          while (1) switch (_context11.n) {
            case 0:
              if (!(userInfo && userInfo.email)) {
                _context11.n = 2;
                break;
              }
              _context11.n = 1;
              return __jacSpawn("get_chapter_for_student", "", {
                "user_email": userInfo.email,
                "book_id": bookId
              });
            case 1:
              chaptersResult = _context11.v;
              if (chaptersResult.reports && chaptersResult.reports.length > 0) {
                setBooks(function (prevBooks) {
                  var updatedBooks = [];
                  var _iterator23 = _createForOfIteratorHelper(prevBooks),
                    _step23;
                  try {
                    for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                      var book = _step23.value;
                      if (book.id === bookId) {
                        var updatedBook = {
                          "id": book.id,
                          "title": book.title,
                          "description": book.description,
                          "subject": book.subject,
                          "color": book.color,
                          "created_by": book.created_by,
                          "chapter_count": book.chapter_count,
                          "chapters": chaptersResult.reports[0],
                          "chaptersLoaded": true
                        };
                        updatedBooks.append(updatedBook);
                      } else {
                        updatedBooks.append(book);
                      }
                      return updatedBooks;
                    }
                  } catch (err) {
                    _iterator23.e(err);
                  } finally {
                    _iterator23.f();
                  }
                });
              }
            case 2:
              return _context11.a(2);
          }
        }, _callee11);
      }));
      return _loadChapters.apply(this, arguments);
    }
    loadChapters();
  }
  if (loading || !userInfo) {
    return __jacJsx("div", {
      "style": {
        "minHeight": "100vh",
        "backgroundColor": "#f9fafb"
      }
    }, [__jacJsx(StudentNavigation, {}, []), __jacJsx("div", {
      "style": {
        "display": "flex"
      }
    }, [__jacJsx(StudentSidebar, {}, []), __jacJsx("div", {
      "style": {
        "flex": "1",
        "padding": "30px"
      }
    }, [__jacJsx("h1", {
      "style": {
        "color": "#1f2937",
        "marginBottom": "30px"
      }
    }, ["Loading..."]), __jacJsx("div", {}, ["Please wait while we load your dashboard..."])])])]);
  }
  return __jacJsx("div", {
    "style": {
      "minHeight": "100vh",
      "backgroundColor": "#f9fafb"
    }
  }, [__jacJsx(StudentNavigation, {}, []), __jacJsx("div", {
    "style": {
      "display": "flex"
    }
  }, [__jacJsx(StudentSidebar, {}, []), __jacJsx("div", {
    "style": {
      "flex": "1",
      "padding": "30px"
    }
  }, [__jacJsx("div", {
    "style": {
      "display": "flex",
      "justifyContent": "space-between",
      "alignItems": "center",
      "marginBottom": "30px"
    }
  }, [__jacJsx("h1", {
    "style": {
      "color": "#1f2937",
      "margin": "0"
    }
  }, ["Welcome back, ", userInfo.name, "!"]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "gap": "10px",
      "background": "#e5e7eb",
      "padding": "5px",
      "borderRadius": "8px"
    }
  }, [__jacJsx("button", {
    "onClick": function onClick() {
      return setActiveTab("overview");
    },
    "style": {
      "padding": "8px 16px",
      "background": activeTab === "overview" ? "white" : "transparent",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer",
      "fontWeight": activeTab === "overview" ? "bold" : "normal",
      "color": activeTab === "overview" ? "#1f2937" : "#6b7280"
    }
  }, ["Overview"]), __jacJsx("button", {
    "onClick": function onClick() {
      return setActiveTab("books");
    },
    "style": {
      "padding": "8px 16px",
      "background": activeTab === "books" ? "white" : "transparent",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer",
      "fontWeight": activeTab === "books" ? bold : "normal",
      "color": activeTab === "books" ? "#1f2937" : "#6b7280"
    }
  }, ["My Books (", books.length, ")"])])]), activeTab === "overview" && __jacJsx(null, {}, [__jacJsx("div", {
    "style": {
      "display": "grid",
      "gridTemplateColumns": "repeat(2, 1fr)",
      "gap": "20px",
      "marginBottom": "30px"
    }
  }, [__jacJsx("div", {
    "style": {
      "background": "white",
      "padding": "20px",
      "borderRadius": "10px",
      "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("h3", {
    "style": {
      "color": "#6b7280",
      "marginBottom": "10px"
    }
  }, ["Overall Progress"]), __jacJsx("div", {
    "style": {
      "fontSize": "32px",
      "fontWeight": "bold",
      "color": "#4361ee"
    }
  }, [stats.progressPercent, "%"]), __jacJsx("div", {
    "style": {
      "height": "8px",
      "background": "#e5e7eb",
      "borderRadius": "4px",
      "marginTop": "10px",
      "overflow": "hidden"
    }
  }, [__jacJsx("div", {
    "style": {
      "width": new Set([stats.progressPercent]) + "%",
      "height": "100%",
      "background": "#4361ee"
    }
  }, [])])]), __jacJsx("div", {
    "style": {
      "background": "white",
      "padding": "20px",
      "borderRadius": "10px",
      "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("h3", {
    "style": {
      "color": "#6b7280",
      "marginBottom": "10px"
    }
  }, ["Average Score"]), __jacJsx("div", {
    "style": {
      "fontSize": "32px",
      "fontWeight": "bold",
      "color": "#10b981"
    }
  }, [stats.avgScore, "%"])]), __jacJsx("div", {
    "style": {
      "background": "white",
      "padding": "20px",
      "borderRadius": "10px",
      "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("h3", {
    "style": {
      "color": "#6b7280",
      "marginBottom": "10px"
    }
  }, ["Completed Lessons"]), __jacJsx("div", {
    "style": {
      "fontSize": "32px",
      "fontWeight": "bold",
      "color": "#f59e0b"
    }
  }, [stats.completedLessons, "/", stats.totalLessons])]), __jacJsx("div", {
    "style": {
      "background": "white",
      "padding": "20px",
      "borderRadius": "10px",
      "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("h3", {
    "style": {
      "color": "#6b7280",
      "marginBottom": "10px"
    }
  }, ["Active Streak"]), __jacJsx("div", {
    "style": {
      "fontSize": "32px",
      "fontWeight": "bold",
      "color": "#ef4444"
    }
  }, [stats.streakDays, " days"])])]), __jacJsx("div", {
    "style": {
      "background": "white",
      "padding": "25px",
      "borderRadius": "10px",
      "boxShadow": "0 2px 4px rgba(0,0,0,0.1)",
      "marginBottom": "30px"
    }
  }, [__jacJsx("h2", {
    "style": {
      "color": "#1f2937",
      "marginBottom": "20px"
    }
  }, ["Continue Learning"]), __jacJsx("div", {
    "style": {
      "display": "grid",
      "gridTemplateColumns": "repeat(auto-fill, minmax(250px, 1fr))",
      "gap": "15px"
    }
  }, [recentLessons.length > 0 && recentLessons.map(function (lesson) {
    var lessonScore = "";
    if (lesson.is_completed && lesson.progress) {
      lessonScore = Math.round(lesson.progress.score * 100) + "%";
    }
    var badgeBackgroundValue = "";
    var badgeColorValue = "";
    var badgeTextValue = "";
    if (lesson.is_completed) {
      badgeBackgroundValue = "#d1fae5";
      badgeColorValue = "#065f46";
      badgeTextValue = "Completed";
    } else {
      badgeBackgroundValue = "#fef3c7";
      badgeColorValue = "#92400e";
      badgeTextValue = "Start";
    }
    return __jacJsx("div", {
      "key": lesson.id,
      "style": {
        "padding": "15px",
        "border": "1px solid #e5e7eb",
        "borderRadius": "8px",
        "cursor": "pointer"
      },
      "onClick": function onClick() {
        window.location.href = "/lesson/" + lesson.id;
      }
    }, [__jacJsx("h4", {
      "style": {
        "color": "#1f2937",
        "marginBottom": "8px"
      }
    }, [lesson.title]), __jacJsx("div", {
      "style": {
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center"
      }
    }, [__jacJsx("span", {
      "style": {
        "background": badgeBackgroundValue,
        "color": badgeColorValue,
        "borderRadius": "12px",
        "fontSize": "12px",
        "padding": "3px 8px"
      }
    }, [badgeTextValue]), __jacJsx("span", {
      "style": {
        "color": "#6b7280",
        "fontSize": "12px"
      }
    }, [lessonScore])])]);
  }), recentLessons.length === 0 && __jacJsx("div", {}, ["No lessons available"])])])]), activeTab === "books" && __jacJsx("div", {
    "style": {
      "background": "white",
      "padding": "25px",
      "borderRadius": "10px",
      "boxShadow": "0 2px 4px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("h2", {
    "style": {
      "color": "#1f2937",
      "marginBottom": "20px"
    }
  }, ["My Books"]), books.length > 0 && __jacJsx("div", {
    "style": {
      "display": "grid",
      "gridTemplateColumns": "repeat(auto-fill, minmax(300px, 1fr))",
      "gap": "20px"
    }
  }, [books.map(function (book) {
    return __jacJsx("div", {
      "key": book.id,
      "style": {
        "border": "1px solid #e5e7eb",
        "borderRadius": "10px",
        "overflow": "hidden",
        "background": "white"
      }
    }, [__jacJsx("div", {
      "style": {
        "height": "120px",
        "background": book.color || "#4361ee",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
      }
    }, [__jacJsx("span", {
      "style": {
        "color": "white",
        "fontSize": "32px",
        "fontWeight": "bold"
      }
    }, [book.title.slice(0, 1).toUpperCase()])]), __jacJsx("div", {
      "style": {
        "padding": "20px"
      }
    }, [__jacJsx("h3", {
      "style": {
        "color": "#1f2937",
        "marginBottom": "10px"
      }
    }, [book.title]), __jacJsx("p", {
      "style": {
        "color": "#6b7280",
        "fontSize": "14px",
        "marginBottom": "15px"
      }
    }, [book.description || "No description"]), __jacJsx("div", {
      "style": {
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "marginBottom": "15px"
      }
    }, [__jacJsx("span", {
      "style": {
        "color": "#9ca3af",
        "fontSize": "12px"
      }
    }, [book.chapter_count || 0, " chapters"]), __jacJsx("span", {
      "style": {
        "color": "#9ca3af",
        "fontSize": "12px"
      }
    }, ["Subject: ", book.subject || "General"])]), book.chaptersLoaded && __jacJsx("div", {
      "style": {
        "marginTop": "15px",
        "borderTop": "1px solid #e5e7eb",
        "paddingTop": "15px"
      }
    }, [__jacJsx("h4", {
      "style": {
        "color": "#4b5563",
        "fontSize": "14px",
        "marginBottom": "10px"
      }
    }, ["Chapters:"]), book.chapters && book.chapters.length > 0 && __jacJsx("div", {
      "style": {
        "display": "flex",
        "flexDirection": "column",
        "gap": "8px"
      }
    }, [book.chapters.map(function (chapter) {
      return __jacJsx("div", {
        "key": chapter.id,
        "style": {
          "padding": "8px",
          "background": "#f9fafb",
          "borderRadius": "6px",
          "cursor": "pointer",
          "display": "flex",
          "justifyContent": "space-between",
          "alignItems": "center"
        },
        "onClick": window.location.href("/chapter/" + chapter.id)
      }, [__jacJsx("span", {
        "style": {
          "fontSize": "14px",
          "color": "#374151"
        }
      }, [chapter.order, ". ", chapter.title]), __jacJsx("span", {
        "style": {
          "fontSize": "12px",
          "color": "#9ca3af"
        }
      }, [chapter.is_published ? "Published" : new Set(["Draft"])])]);
    })]), !book.chapters || book.chapters.length === 0 && __jacJsx("div", {
      "style": {
        "color": "#9ca3af",
        "fontSize": "14px",
        "textAlign": "center",
        "padding": "10px"
      }
    }, ["No chapters available"])]), !book.chaptersLoaded && __jacJsx("button", {
      "onClick": function onClick() {
        return loadBookChapters(book.id);
      },
      "style": {
        "width": "100%",
        "padding": "10px",
        "background": "#f3f4f6",
        "border": "1px solid #d1d5db",
        "borderRadius": "6px",
        "color": "#4b5563",
        "cursor": "pointer",
        "fontSize": "14px"
      }
    }, ["Show Chapters"]), __jacJsx("button", {
      "onClick": window.location.href("/books/" + book.id),
      "style": {
        "width": "100%",
        "marginTop": "15px",
        "padding": "10px",
        "background": "#4361ee",
        "color": "white",
        "border": "none",
        "borderRadius": "6px",
        "cursor": "pointer",
        "fontWeight": "bold"
      }
    }, ["Open Book"])])]);
  })]), books.length === 0 && __jacJsx("div", {
    "style": {
      "textAlign": "center",
      "padding": "40px"
    }
  }, [__jacJsx("div", {
    "style": {
      "fontSize": "48px",
      "color": "#d1d5db",
      "marginBottom": "20px"
    }
  }, ["📚"]), __jacJsx("h3", {
    "style": {
      "color": "#6b7280",
      "marginBottom": "10px"
    }
  }, ["No Books Yet"]), __jacJsx("p", {
    "style": {
      "color": "#9ca3af"
    }
  }, ["You don't have access to any books yet. ", "Ask your tutor to share books with you or explore available courses."])])])])])]);
}
function LoginPage() {
  var _useState43 = useState(""),
    _useState44 = _slicedToArray(_useState43, 2),
    email = _useState44[0],
    setEmail = _useState44[1];
  var _useState45 = useState(""),
    _useState46 = _slicedToArray(_useState45, 2),
    password = _useState46[0],
    setPassword = _useState46[1];
  var _useState47 = useState(""),
    _useState48 = _slicedToArray(_useState47, 2),
    error = _useState48[0],
    setError = _useState48[1];
  var navigate = useNavigate();
  function handleLogin(_x7) {
    return _handleLogin.apply(this, arguments);
  }
  function _handleLogin() {
    _handleLogin = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(e) {
      var success, _result9, sessionData, userRole, errorMsg;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.n) {
          case 0:
            e.preventDefault();
            setError("");
            if (!(!email || !password)) {
              _context12.n = 1;
              break;
            }
            setError("Please fill in all fields");
            return _context12.a(2);
          case 1:
            _context12.n = 2;
            return jacLogin(email, password);
          case 2:
            success = _context12.v;
            if (!success) {
              _context12.n = 4;
              break;
            }
            _context12.n = 3;
            return __jacSpawn("login_user", "", {
              "email": email,
              "password": password
            });
          case 3:
            _result9 = _context12.v;
            if (_result9.reports && _result9.reports.length > 0 && _result9.reports[0].success) {
              sessionData = _result9.reports[0];
              localStorage.setItem("session_id", sessionData.session_id);
              localStorage.setItem("current_user", JSON.stringify(sessionData.user));
              localStorage.setItem("user_email", email);
              userRole = "student";
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
              errorMsg = "Login failed";
              if (_result9.reports && _result9.reports.length > 0 && _result9.reports[0].error) {
                errorMsg = _result9.reports[0].error;
              }
              setError(errorMsg);
            }
            _context12.n = 5;
            break;
          case 4:
            setError("Invalid email or password");
          case 5:
            return _context12.a(2);
        }
      }, _callee12);
    }));
    return _handleLogin.apply(this, arguments);
  }
  return __jacJsx("div", {
    "style": {
      "minHeight": "100vh",
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
  var _useState49 = useState(""),
    _useState50 = _slicedToArray(_useState49, 2),
    email = _useState50[0],
    setEmail = _useState50[1];
  var _useState51 = useState(""),
    _useState52 = _slicedToArray(_useState51, 2),
    password = _useState52[0],
    setPassword = _useState52[1];
  var _useState53 = useState(""),
    _useState54 = _slicedToArray(_useState53, 2),
    name = _useState54[0],
    setName = _useState54[1];
  var _useState55 = useState("student"),
    _useState56 = _slicedToArray(_useState55, 2),
    role = _useState56[0],
    setRole = _useState56[1];
  var _useState57 = useState(""),
    _useState58 = _slicedToArray(_useState57, 2),
    error = _useState58[0],
    setError = _useState58[1];
  var navigate = useNavigate();
  function handleSignup(_x8) {
    return _handleSignup.apply(this, arguments);
  }
  function _handleSignup() {
    _handleSignup = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(e) {
      var result, profileResult, success, loginResult, sessionData;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.n) {
          case 0:
            e.preventDefault();
            setError("");
            if (!(!email || !password || !name)) {
              _context13.n = 1;
              break;
            }
            setError("Please fill in all fields");
            return _context13.a(2);
          case 1:
            _context13.n = 2;
            return jacSignup(email, password);
          case 2:
            result = _context13.v;
            if (!result["success"]) {
              _context13.n = 7;
              break;
            }
            _context13.n = 3;
            return __jacSpawn("create_user_profile", "", {
              "email": email,
              "name": name,
              "role": role
            });
          case 3:
            profileResult = _context13.v;
            _context13.n = 4;
            return jacLogin(email, password);
          case 4:
            success = _context13.v;
            if (!success) {
              _context13.n = 6;
              break;
            }
            _context13.n = 5;
            return __jacSpawn("login_user", "", {
              "email": email,
              "password": password
            });
          case 5:
            loginResult = _context13.v;
            if (loginResult.reports && loginResult.reports.length > 0 && loginResult.reports[0].success) {
              sessionData = loginResult.reports[0];
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
          case 6:
            _context13.n = 8;
            break;
          case 7:
            setError(result["error"] ? result["error"] : "Signup failed");
          case 8:
            return _context13.a(2);
        }
      }, _callee13);
    }));
    return _handleSignup.apply(this, arguments);
  }
  return __jacJsx("div", {
    "style": {
      "minHeight": "100vh",
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
  }, []), __jacJsx("div", {
    "style": {
      "marginBottom": "10px"
    }
  }, [__jacJsx("label", {
    "style": {
      "display": "block",
      "marginBottom": "4px",
      "color": "#374151",
      "fontWeight": "500"
    }
  }, ["Role"]), __jacJsx("select", {
    "value": role,
    "onChange": function onChange(e) {
      setRole(e.target.value);
    },
    "style": {
      "width": "100%",
      "padding": "8px",
      "border": "1px solid #ddd",
      "borderRadius": "4px",
      "boxSizing": "border-box"
    }
  }, [__jacJsx("option", {
    "value": "student"
  }, ["Student"]), __jacJsx("option", {
    "value": "tutor"
  }, ["Tutor"])])]), error && __jacJsx("div", {
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
    var userRole = localStorage.getItem("user_role") || "student";
    if (userRole === "tutor") {
      return __jacJsx(Navigate, {
        "to": "/tutor/dashboard"
      }, []);
    } else {
      return __jacJsx(Navigate, {
        "to": "/dashboard"
      }, []);
    }
  }
  return __jacJsx(LandingPage, {}, []);
}
function app() {
  return __jacJsx(Router, {}, [__jacJsx("div", {
    "style": {
      "fontFamily": "system-ui, sans-serif"
    }
  }, [__jacJsx(Routes, {}, [__jacJsx(Route, {
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
    "element": __jacJsx(DashboardPage, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/tutor/dashboard",
    "element": __jacJsx(TutorDashboardPage, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/tutor/lessons",
    "element": __jacJsx(TutorLessonsPage, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/tutor/students",
    "element": __jacJsx(TutorDashboardPage, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/tutor/quizzes",
    "element": __jacJsx(TutorDashboardPage, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/tutor/analytics",
    "element": __jacJsx(TutorDashboardPage, {}, [])
  }, []), __jacJsx(Route, {
    "path": "*",
    "element": __jacJsx(Navigate, {
      "to": "/"
    }, [])
  }, [])])])]);
}
export { DashboardPage, HomePage, LandingPage, LoginPage, SignupPage, StudentNavigation, StudentSidebar, TutorDashboardPage, TutorLessonsPage, TutorNavigation, TutorSidebar, app };