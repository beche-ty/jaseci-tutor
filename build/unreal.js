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
function Landing() {
  return __jacJsx("div", {
    "style": {
      "minHeight": "100vh",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "center",
      "backgroundColor": "#f0fdfa",
      "color": "#065f46",
      "fontFamily": "sans-serif"
    }
  }, [__jacJsx("div", {
    "style": {
      "textAlign": "center",
      "padding": "40px",
      "backgroundColor": "#ffffff",
      "borderRadius": "16px",
      "boxShadow": "0 10px 25px rgba(0,0,0,0.1)",
      "width": "400px"
    }
  }, [__jacJsx("h1", {
    "style": {
      "fontSize": "3rem",
      "marginBottom": "1rem",
      "color": "#065f46"
    }
  }, ["Welcome to Jaseci Master"]), __jacJsx("p", {
    "style": {
      "fontSize": "1.25rem",
      "marginBottom": "3rem",
      "color": "#4b5563"
    }
  }, ["Your self-paced learning portal for Jac and Jaseci"]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "gap": "1rem",
      "justifyContent": "center"
    }
  }, [__jacJsx(Link, {
    "to": "/login",
    "style": {
      "backgroundColor": "#065f46",
      "color": "#ffffff",
      "padding": "1rem 2rem",
      "borderRadius": "8px",
      "textDecoration": "none",
      "fontWeight": "bold"
    }
  }, ["Login"]), __jacJsx(Link, {
    "to": "/signup",
    "style": {
      "backgroundColor": "#ffffff",
      "color": "#065f46",
      "padding": "1rem 2rem",
      "borderRadius": "8px",
      "border": "2px solid #065f46",
      "textDecoration": "none",
      "fontWeight": "bold"
    }
  }, ["Sign Up"]), jacIsLoggedIn() && __jacJsx(Link, {
    "to": "/dashboard",
    "style": {
      "backgroundColor": "#10b981",
      "color": "#ffffff",
      "padding": "1rem 2rem",
      "borderRadius": "8px",
      "textDecoration": "none",
      "fontWeight": "bold"
    }
  }, ["Go to Dashboard"])])])]);
}
function TutorNavigation() {
  var isLoggedIn = jacIsLoggedIn();
  var navigate = useNavigate();
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    userInfo = _useState2[0],
    setUserInfo = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    sessionId = _useState4[0],
    setSessionId = _useState4[1];
  useEffect(function () {
    if (isLoggedIn) {
      var storedSessionId = localStorage.getItem("session_id");
      if (storedSessionId) {
        setSessionId(storedSessionId);
      }
    }
  }, [isLoggedIn]);
  useEffect(function () {
    function loadUserInfo() {
      return _loadUserInfo.apply(this, arguments);
    }
    function _loadUserInfo() {
      _loadUserInfo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var result;
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
                setUserInfo(result.reports[0]);
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
    jacLogout();
    navigate("/login");
  }
  if (isLoggedIn && userInfo && userInfo.role === "tutor") {
    return __jacJsx("nav", {
      "style": {
        "padding": "12px 24px",
        "background": "#7c3aed",
        "color": "#ffffff",
        "display": "flex",
        "justifyContent": "space-between"
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
    }, ["Manage Lessons"]), __jacJsx(Link, {
      "to": "/tutor/create",
      "style": {
        "color": "#ffffff",
        "textDecoration": "none"
      }
    }, ["Create Lesson"]), __jacJsx(Link, {
      "to": "/dashboard",
      "style": {
        "color": "#ffffff",
        "textDecoration": "none"
      }
    }, ["Student View"]), __jacJsx("button", {
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
  return null;
}
function TutorDashboardPage() {
  if (!jacIsLoggedIn()) {
    return __jacJsx(Navigate, {
      "to": "/login"
    }, []);
  }
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    userInfo = _useState6[0],
    setUserInfo = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    lessons = _useState8[0],
    setLessons = _useState8[1];
  var _useState9 = useState(""),
    _useState0 = _slicedToArray(_useState9, 2),
    sessionId = _useState0[0],
    setSessionId = _useState0[1];
  useEffect(function () {
    function loadUserInfo() {
      return _loadUserInfo2.apply(this, arguments);
    }
    function _loadUserInfo2() {
      _loadUserInfo2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var currentSessionId, result, userData;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              currentSessionId = localStorage.getItem("session_id");
              if (!currentSessionId) {
                _context2.n = 2;
                break;
              }
              setSessionId(currentSessionId);
              _context2.n = 1;
              return __jacSpawn("get_session_user", "", {
                "session_id": currentSessionId
              });
            case 1:
              result = _context2.v;
              if (result.reports && result.reports.length > 0) {
                userData = result.reports[0];
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
    function loadLessons() {
      return _loadLessons.apply(this, arguments);
    }
    function _loadLessons() {
      _loadLessons = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var result, lessonsData, syncResult;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return __jacSpawn("list_lessons", "", {});
            case 1:
              result = _context3.v;
              if (!(result.reports && result.reports.length > 0)) {
                _context3.n = 7;
                break;
              }
              lessonsData = result.reports[0];
              if (!(lessonsData.length === 0)) {
                _context3.n = 5;
                break;
              }
              print("No lessons found. Syncing from GitHub...");
              _context3.n = 2;
              return __jacSpawn("sync_lessons_from_github", "", {});
            case 2:
              syncResult = _context3.v;
              if (!(syncResult.reports && syncResult.reports.length > 0)) {
                _context3.n = 4;
                break;
              }
              print("Sync completed:", syncResult.reports[0]);
              _context3.n = 3;
              return __jacSpawn("list_lessons", "", {});
            case 3:
              result = _context3.v;
              if (result.reports && result.reports.length > 0) {
                setLessons(result.reports[0]);
              }
            case 4:
              _context3.n = 6;
              break;
            case 5:
              setLessons(lessonsData);
            case 6:
              _context3.n = 8;
              break;
            case 7:
              print("Failed to load lessons");
            case 8:
              return _context3.a(2);
          }
        }, _callee3);
      }));
      return _loadLessons.apply(this, arguments);
    }
    loadLessons();
  }, []);
  function handleDeleteLesson(lessonId) {
    print("Delete lesson:", lessonId);
  }
  if (!userInfo || userInfo.role !== "tutor") {
    return __jacJsx("div", {}, ["Loading..."]);
  }
  return __jacJsx("div", {
    "style": {
      "minHeight": "calc(100vh - 48px)",
      "background": "#f9fafb",
      "padding": "24px"
    }
  }, [__jacJsx("div", {
    "style": {
      "maxWidth": "1200px",
      "margin": "0 auto"
    }
  }, [__jacJsx("h1", {
    "style": {
      "color": "#1f2937",
      "marginBottom": "24px"
    }
  }, ["Tutor Dashboard"]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "justifyContent": "space-between",
      "marginBottom": "24px"
    }
  }, [__jacJsx("h2", {
    "style": {
      "color": "#374151"
    }
  }, ["Manage Lessons"]), __jacJsx(Link, {
    "to": "/tutor/create"
  }, [__jacJsx("button", {
    "style": {
      "padding": "8px 16px",
      "background": "#7c3aed",
      "color": "white",
      "border": "none",
      "borderRadius": "6px",
      "cursor": "pointer"
    }
  }, ["+ Create New Lesson"])])]), __jacJsx("div", {
    "style": {
      "background": "#ffffff",
      "borderRadius": "8px",
      "padding": "24px",
      "boxShadow": "0 1px 3px rgba(0,0,0,0.1)"
    }
  }, [__jacJsx("table", {
    "style": {
      "width": "100%",
      "borderCollapse": "collapse"
    }
  }, [__jacJsx("thead", {}, [__jacJsx("tr", {
    "style": {
      "borderBottom": "2px solid #e5e7eb"
    }
  }, [__jacJsx("th", {
    "style": {
      "textAlign": "left",
      "padding": "12px",
      "color": "#374151"
    }
  }, ["Chapter"]), __jacJsx("th", {
    "style": {
      "textAlign": "left",
      "padding": "12px",
      "color": "#374151"
    }
  }, ["Title"]), __jacJsx("th", {
    "style": {
      "textAlign": "left",
      "padding": "12px",
      "color": "#374151"
    }
  }, ["Description"]), __jacJsx("th", {
    "style": {
      "textAlign": "left",
      "padding": "12px",
      "color": "#374151"
    }
  }, ["Actions"])])]), __jacJsx("tbody", {}, [lessons.map(function (lesson) {
    return __jacJsx("tr", {
      "key": lesson.id,
      "style": {
        "borderBottom": "1px solid #e5e7eb"
      }
    }, [__jacJsx("td", {
      "style": {
        "padding": "12px",
        "color": "#6b7280"
      }
    }, [lesson.id]), __jacJsx("td", {
      "style": {
        "padding": "12px",
        "color": "#1f2937",
        "fontWeight": "500"
      }
    }, [lesson.title]), __jacJsx("td", {
      "style": {
        "padding": "12px",
        "color": "#6b7280"
      }
    }, [lesson.description]), __jacJsx("td", {
      "style": {
        "padding": "12px"
      }
    }, [__jacJsx("div", {
      "style": {
        "display": "flex",
        "gap": "8px"
      }
    }, [__jacJsx(Link, {
      "to": "/tutor/edit/" + lesson.id
    }, [__jacJsx("button", {
      "style": {
        "padding": "4px 12px",
        "background": "#3b82f6",
        "color": "white",
        "border": "none",
        "borderRadius": "4px",
        "cursor": "pointer"
      }
    }, ["Edit"])]), __jacJsx("button", {
      "onClick": function onClick() {
        handleDeleteLesson(lesson.id);
      },
      "style": {
        "padding": "4px 12px",
        "background": "#ef4444",
        "color": "white",
        "border": "none",
        "borderRadius": "4px",
        "cursor": "pointer"
      }
    }, ["Delete"]), __jacJsx(Link, {
      "to": "/tutor/quiz/" + lesson.id
    }, [__jacJsx("button", {
      "style": {
        "padding": "4px 12px",
        "background": "#10b981",
        "color": "white",
        "border": "none",
        "borderRadius": "4px",
        "cursor": "pointer"
      }
    }, ["Add Quiz"])])])])]);
  })])])])])]);
}
function Navigation() {
  var isLoggedIn = jacIsLoggedIn();
  var navigate = useNavigate();
  var _useState1 = useState(""),
    _useState10 = _slicedToArray(_useState1, 2),
    sessionId = _useState10[0],
    setSessionId = _useState10[1];
  var _useState11 = useState(null),
    _useState12 = _slicedToArray(_useState11, 2),
    userInfo = _useState12[0],
    setUserInfo = _useState12[1];
  var _useState13 = useState("student"),
    _useState14 = _slicedToArray(_useState13, 2),
    userRole = _useState14[0],
    setUserRole = _useState14[1];
  useEffect(function () {
    if (isLoggedIn) {
      var storedSessionId = localStorage.getItem("session_id");
      if (storedSessionId) {
        setSessionId(storedSessionId);
      }
      var storedRole = localStorage.getItem("user_role");
      if (storedRole) {
        setUserRole(storedRole);
      }
    }
  }, [isLoggedIn]);
  useEffect(function () {
    function loadUserInfo() {
      return _loadUserInfo3.apply(this, arguments);
    }
    function _loadUserInfo3() {
      _loadUserInfo3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var result, userData;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              if (!(isLoggedIn && sessionId)) {
                _context4.n = 2;
                break;
              }
              _context4.n = 1;
              return __jacSpawn("get_session_user", "", {
                "session_id": sessionId
              });
            case 1:
              result = _context4.v;
              if (result.reports && result.reports.length > 0) {
                userData = result.reports[0];
                if (!userData.error) {
                  setUserInfo(userData);
                  if (userData.role) {
                    setUserRole(userData.role);
                  }
                }
              }
            case 2:
              return _context4.a(2);
          }
        }, _callee4);
      }));
      return _loadUserInfo3.apply(this, arguments);
    }
    loadUserInfo();
  }, [isLoggedIn, sessionId]);
  function handleLogout(e) {
    e.preventDefault();
    sessionId = localStorage.getItem("session_id");
    navigate("/login");
  }
  if (isLoggedIn) {
    var userName = "Student";
    if (userInfo && userInfo.name) {
      userName = userInfo.name;
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
  var _useState15 = useState([]),
    _useState16 = _slicedToArray(_useState15, 2),
    lessons = _useState16[0],
    setLessons = _useState16[1];
  var _useState17 = useState(null),
    _useState18 = _slicedToArray(_useState17, 2),
    currentLesson = _useState18[0],
    setCurrentLesson = _useState18[1];
  useEffect(function () {
    function loadLessons() {
      return _loadLessons2.apply(this, arguments);
    }
    function _loadLessons2() {
      _loadLessons2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var syncResult, result, lessonsData;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return __jacSpawn("sync_lessons_from_github", "", {});
            case 1:
              syncResult = _context5.v;
              _context5.n = 2;
              return __jacSpawn("list_lessons", "", {});
            case 2:
              result = _context5.v;
              if (result.reports && result.reports.length > 0) {
                lessonsData = result.reports[0];
                setLessons(lessonsData);
                if (lessonsData.length > 0) {
                  selectLesson(lessonsData[0].id);
                }
              }
            case 3:
              return _context5.a(2);
          }
        }, _callee5);
      }));
      return _loadLessons2.apply(this, arguments);
    }
    loadLessons();
  }, []);
  function selectLesson(lessonId) {
    function loadLesson() {
      return _loadLesson.apply(this, arguments);
    }
    function _loadLesson() {
      _loadLesson = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var result;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.n = 1;
              return __jacSpawn("get_lesson_detail", "", {
                "lesson_id": lessonId
              });
            case 1:
              result = _context6.v;
              if (result.reports && result.reports.length > 0) {
                setCurrentLesson(result.reports[0]);
              }
            case 2:
              return _context6.a(2);
          }
        }, _callee6);
      }));
      return _loadLesson.apply(this, arguments);
    }
    loadLesson();
  }
  var lessonElements = [];
  var _iterator = _createForOfIteratorHelper(lessons),
    _step;
  try {
    var _loop = function _loop() {
      var lesson = _step.value;
      var isActive = false;
      if (currentLesson && currentLesson.id === lesson.id) {
        isActive = true;
      }
      var backgroundColor = "#ffffff";
      var border = "1px solid #e5e7eb";
      if (isActive) {
        backgroundColor = "#eff6ff";
        border = "2px solid #3b82f6";
      }
      var lessonElement = __jacJsx("div", {
        "key": lesson.id,
        "onClick": function onClick() {
          selectLesson(lesson.id);
        },
        "style": {
          "padding": "12px",
          "backgroundColor": backgroundColor,
          "border": border,
          "borderRadius": "8px",
          "cursor": "pointer",
          "marginBottom": "8px"
        }
      }, [__jacJsx("div", {
        "style": {
          "fontWeight": "bold",
          "color": "#1f2937"
        }
      }, [lesson.title]), __jacJsx("div", {
        "style": {
          "fontSize": "12px",
          "color": "#6b7280",
          "marginTop": "4px"
        }
      }, [lesson.description])]);
      lessonElements.push(lessonElement);
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var mainContent = __jacJsx("div", {
    "style": {
      "padding": "40px",
      "textAlign": "center",
      "color": "#9ca3af"
    }
  }, [__jacJsx("h3", {}, ["Select a Lesson"]), __jacJsx("p", {}, ["Choose a lesson from the left panel to get started"])]);
  if (currentLesson) {
    mainContent = __jacJsx("div", {}, [__jacJsx("h2", {
      "style": {
        "color": "#1f2937",
        "marginBottom": "20px"
      }
    }, [currentLesson.title]), __jacJsx("div", {
      "style": {
        "backgroundColor": "#f9fafb",
        "borderRadius": "8px",
        "padding": "20px",
        "whiteSpace": "pre-wrap"
      }
    }, [currentLesson.content])]);
  }
  var sidebarContent = __jacJsx("div", {
    "style": {
      "padding": "20px",
      "textAlign": "center",
      "color": "#9ca3af"
    }
  }, [__jacJsx("p", {}, ["No lessons available"])]);
  if (lessons.length > 0) {
    sidebarContent = __jacJsx("div", {}, [__jacJsx("h3", {
      "style": {
        "color": "#374151",
        "marginBottom": "16px"
      }
    }, ["Lessons"]), lessonElements]);
  }
  return __jacJsx("div", {
    "style": {
      "minHeight": "100vh",
      "backgroundColor": "#f9fafb"
    }
  }, [__jacJsx("div", {
    "style": {
      "maxWidth": "1200px",
      "margin": "0 auto",
      "padding": "20px"
    }
  }, [__jacJsx("h1", {
    "style": {
      "color": "#1f2937",
      "marginBottom": "20px"
    }
  }, ["Student Dashboard"]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "gap": "20px"
    }
  }, [__jacJsx("div", {
    "style": {
      "width": "300px",
      "backgroundColor": "white",
      "borderRadius": "8px",
      "padding": "20px"
    }
  }, [sidebarContent]), __jacJsx("div", {
    "style": {
      "flex": "1",
      "backgroundColor": "white",
      "borderRadius": "8px",
      "padding": "20px"
    }
  }, [mainContent])])])]);
}
function ProgressPage() {
  if (!jacIsLoggedIn()) {
    return __jacJsx(Navigate, {
      "to": "/login"
    }, []);
  }
  var _useState19 = useState([]),
    _useState20 = _slicedToArray(_useState19, 2),
    userProgress = _useState20[0],
    setUserProgress = _useState20[1];
  var _useState21 = useState([]),
    _useState22 = _slicedToArray(_useState21, 2),
    lessons = _useState22[0],
    setLessons = _useState22[1];
  var _useState23 = useState(null),
    _useState24 = _slicedToArray(_useState23, 2),
    userInfo = _useState24[0],
    setUserInfo = _useState24[1];
  var userEmail = "";
  if (userInfo) {
    userEmail = userInfo.email;
  }
  useEffect(function () {
    function loadUserInfo() {
      return _loadUserInfo4.apply(this, arguments);
    }
    function _loadUserInfo4() {
      _loadUserInfo4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var currentSessionId, result, userData;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              currentSessionId = localStorage.getItem("session_id");
              if (!currentSessionId) {
                _context7.n = 2;
                break;
              }
              _context7.n = 1;
              return __jacSpawn("get_session_user", "", {
                "session_id": currentSessionId
              });
            case 1:
              result = _context7.v;
              if (result.reports && result.reports.length > 0) {
                userData = result.reports[0];
                if (!userData.error) {
                  setUserInfo(userData);
                }
              }
            case 2:
              return _context7.a(2);
          }
        }, _callee7);
      }));
      return _loadUserInfo4.apply(this, arguments);
    }
    loadUserInfo();
  }, []);
  useEffect(function () {
    function loadData() {
      return _loadData.apply(this, arguments);
    }
    function _loadData() {
      _loadData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var lessonsResult, progressResult;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              _context8.n = 1;
              return __jacSpawn("list_lessons", "", {});
            case 1:
              lessonsResult = _context8.v;
              if (lessonsResult.reports) {
                setLessons(lessonsResult.reports[0]);
              }
              if (!userEmail) {
                _context8.n = 3;
                break;
              }
              _context8.n = 2;
              return __jacSpawn("get_user_attempts", "", {
                "user_email": userEmail
              });
            case 2:
              progressResult = _context8.v;
              if (progressResult.reports) {}
              setUserProgress(progressResult.reports[0]);
            case 3:
              loadData();
            case 4:
              return _context8.a(2);
          }
        }, _callee8);
      }));
      return _loadData.apply(this, arguments);
    }
  }, [userEmail]);
  function calculateProgress() {
    var completed = [];
    var _iterator2 = _createForOfIteratorHelper(userProgress),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _p = _step2.value;
        if (_p.status === "completed" || _p.status === "quiz_completed") {
          completed.append(_p);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    var totalScore = 0;
    if (len(completed) > 0) {
      var sumScore = 0;
      var _iterator3 = _createForOfIteratorHelper(completed),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var p = _step3.value;
          sumScore = sumScore + p.score;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      totalScore = sumScore / len(completed);
    }
    return {
      "completed": len(completed),
      "total": len(lessons),
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
    var progress = {
      "status": "not_started",
      "score": 0.0
    };
    var _iterator4 = _createForOfIteratorHelper(userProgress),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var p = _step4.value;
        if (p.lesson_id === lesson.id) {
          progress = p;
          break;
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
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
    var statusText = progress.status;
    if (progress.status === "not_started") {
      statusText = "Not Started";
    } else if (progress.status === "started") {
      statusText = "In Progress";
    } else if (progress.status === "completed") {
      statusText = "Completed";
    } else if (progress.status === "quiz_completed") {
      statusText = "Quiz Completed";
    }
    var progressColor = "";
    if (progress.score >= 0.7) {
      progressColor = "#10b981";
    } else if (progress.score >= 0.4) {
      progressColor = "#f59e0b";
    } else {
      progressColor = "#ef4444";
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
  var _useState25 = useState(""),
    _useState26 = _slicedToArray(_useState25, 2),
    email = _useState26[0],
    setEmail = _useState26[1];
  var _useState27 = useState(""),
    _useState28 = _slicedToArray(_useState27, 2),
    password = _useState28[0],
    setPassword = _useState28[1];
  var _useState29 = useState(""),
    _useState30 = _slicedToArray(_useState29, 2),
    error = _useState30[0],
    setError = _useState30[1];
  var navigate = useNavigate();
  function handleLogin(_x) {
    return _handleLogin.apply(this, arguments);
  }
  function _handleLogin() {
    _handleLogin = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(e) {
      var success, result, sessionData, userRole, errorMsg;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            e.preventDefault();
            setError("");
            if (!(!email || !password)) {
              _context9.n = 1;
              break;
            }
            setError("Please fill in all fields");
            return _context9.a(2);
          case 1:
            _context9.n = 2;
            return jacLogin(email, password);
          case 2:
            success = _context9.v;
            if (!success) {
              _context9.n = 4;
              break;
            }
            _context9.n = 3;
            return __jacSpawn("login_user", "", {
              "email": email,
              "password": password
            });
          case 3:
            result = _context9.v;
            if (result.reports && result.reports.length > 0 && result.reports[0].success) {
              sessionData = result.reports[0];
              console.log("Session data received:", sessionData);
              localStorage.setItem("session_id", sessionData.session_id);
              localStorage.setItem("current_user", JSON.stringify(sessionData.user));
              localStorage.setItem("user_email", email);
              userRole = "student";
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
              errorMsg = "Login failed";
              if (result.reports && result.reports.length > 0 && result.reports[0].error) {
                errorMsg = result.reports[0].error;
              }
              setError(errorMsg);
            }
            _context9.n = 5;
            break;
          case 4:
            setError("Invalid email or password");
          case 5:
            return _context9.a(2);
        }
      }, _callee9);
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
  }, ["Sign up"])]), __jacJsx("div", {
    "style": {
      "marginTop": "12px",
      "textAlign": "center"
    }
  }, [__jacJsx("p", {
    "style": {
      "color": "#6b7280",
      "fontSize": "12px",
      "marginBottom": "4px"
    }
  }, ["Sign up as:"]), __jacJsx("div", {
    "style": {
      "display": "flex",
      "justifyContent": "center",
      "gap": "12px"
    }
  }, [__jacJsx("span", {
    "style": {
      "color": "#1d4ed8",
      "fontSize": "12px",
      "fontWeight": "500"
    }
  }, ["Student"]), __jacJsx("span", {
    "style": {
      "color": "#6b7280",
      "fontSize": "12px"
    }
  }, ["or"]), __jacJsx("span", {
    "style": {
      "color": "#0369a1",
      "fontSize": "12px",
      "fontWeight": "500"
    }
  }, ["Tutor"])])])])]);
}
function SignupPage() {
  var _useState31 = useState(""),
    _useState32 = _slicedToArray(_useState31, 2),
    email = _useState32[0],
    setEmail = _useState32[1];
  var _useState33 = useState(""),
    _useState34 = _slicedToArray(_useState33, 2),
    password = _useState34[0],
    setPassword = _useState34[1];
  var _useState35 = useState(""),
    _useState36 = _slicedToArray(_useState35, 2),
    name = _useState36[0],
    setName = _useState36[1];
  var _useState37 = useState("student"),
    _useState38 = _slicedToArray(_useState37, 2),
    role = _useState38[0],
    setRole = _useState38[1];
  var _useState39 = useState(""),
    _useState40 = _slicedToArray(_useState39, 2),
    error = _useState40[0],
    setError = _useState40[1];
  var navigate = useNavigate();
  function handleSignup(_x2) {
    return _handleSignup.apply(this, arguments);
  }
  function _handleSignup() {
    _handleSignup = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(e) {
      var result, profileResult;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            e.preventDefault();
            setError("");
            if (!(!email || !password || !name)) {
              _context0.n = 1;
              break;
            }
            setError("Please fill in all fields");
            return _context0.a(2);
          case 1:
            _context0.n = 2;
            return jacSignup(email, password);
          case 2:
            result = _context0.v;
            if (!result["success"]) {
              _context0.n = 4;
              break;
            }
            _context0.n = 3;
            return __jacSpawn("create_user_profile", "", {
              "email": email,
              "name": name,
              "role": role
            });
          case 3:
            profileResult = _context0.v;
            navigate("/dashboard");
            _context0.n = 5;
            break;
          case 4:
            setError(result["error"] ? result["error"] : "Signup failed");
          case 5:
            return _context0.a(2);
        }
      }, _callee0);
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
    return __jacJsx(Navigate, {
      "to": "/dashboard"
    }, []);
    return __jacJsx(Navigate, {
      "to": "/login"
    }, []);
  }
}
function app() {
  var _useState41 = useState(null),
    _useState42 = _slicedToArray(_useState41, 2),
    userRole = _useState42[0],
    setUserRole = _useState42[1];
  useEffect(function () {
    function checkUserRole() {
      return _checkUserRole.apply(this, arguments);
    }
    function _checkUserRole() {
      _checkUserRole = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        var currentSessionId, result, userData;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              if (!jacIsLoggedIn()) {
                _context1.n = 2;
                break;
              }
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
              result = _context1.v;
              if (result.reports && result.reports.length > 0) {
                userData = result.reports[0];
                if (!userData.error && userData.role) {
                  setUserRole(userData.role);
                }
              }
            case 2:
              checkUserRole();
            case 3:
              return _context1.a(2);
          }
        }, _callee1);
      }));
      return _checkUserRole.apply(this, arguments);
    }
  }, []);
  function renderNavigation() {
    if (userRole === "tutor") {
      return __jacJsx(TutorNavigation, {}, []);
    }
    return __jacJsx(Navigation, {}, []);
  }
  return __jacJsx(Router, {}, [__jacJsx("div", {
    "style": {
      "fontFamily": "system-ui, sans-serif"
    }
  }, [renderNavigation(), __jacJsx(Routes, {}, [__jacJsx(Route, {
    "path": "/",
    "element": __jacJsx(Landing, {}, [])
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
  }, []), userRole === "tutor" && __jacJsx(null, {}, [__jacJsx(Route, {
    "path": "/tutor/dashboard",
    "element": __jacJsx(TutorDashboardPage, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/tutor/create",
    "element": __jacJsx(TutorCreateLessonPage, {}, [])
  }, []), __jacJsx(Route, {
    "path": "/tutor/edit/:lessonId",
    "element": __jacJsx(TutorCreateLessonPage, {}, [])
  }, [])])])])]);
}
export { DashboardPage, HomePage, Landing, LoginPage, Navigation, ProgressPage, SignupPage, TutorDashboardPage, TutorNavigation, app };