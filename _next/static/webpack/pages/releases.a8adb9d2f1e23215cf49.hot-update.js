webpackHotUpdate_N_E("pages/releases",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\OSPanel\\projects\\inertiajs.ru\\components\\Nav.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Nav = function Nav(_ref) {
  _s();

  var className = _ref.className;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  function linkClass(path) {
    return path === '/' && router.pathname === '/' || path !== '/' && router.pathname.startsWith(path) ? "block -ml-3 pl-3 pr-2 py-1 md:py-2 font-medium border-l-4 rounded-r border-purple-400 bg-purple-100 text-purple-700" : "inline-block py-1 md:py-2 hover:text-blue-700 hover:underline font-medium text-gray-700";
  }

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("nav", {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "flex justify-center md:hidden -mx-6 mt-4 mb-6 pb-4 border-b",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: "block flex items-center text-gray-500 hover:text-gray-700 mr-5",
    href: "https://github.com/inertiajs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("svg", {
    className: "fill-current w-5 h-5",
    viewBox: "0 0 20 20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "GitHub"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("path", {
    d: "M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: "block flex items-center text-gray-500 hover:text-gray-700 mr-5",
    href: "https://twitter.com/inertiajs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("svg", {
    className: "fill-current w-5 h-5",
    viewBox: "0 0 20 20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "Twitter"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("path", {
    d: "M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: "block flex items-center text-gray-500 hover:text-gray-700",
    href: "https://discord.gg/gwgxN8Y",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("svg", {
    className: "fill-current w-5 h-5",
    viewBox: "0 0 146 146",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "Discord"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("path", {
    d: "M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z",
    fillRule: "nonzero",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, "\u0412\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/demo-application",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/demo-application'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "\u0414\u0435\u043C\u043E-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/sponsors",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/sponsors'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "\u0421\u043F\u043E\u043D\u0441\u043E\u0440\u044B"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/releases",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/releases'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "\u0420\u0435\u043B\u0438\u0437\u044B")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "mt-8 md:mt-12 mb-3 text-xs font-bold uppercase text-gray-500 tracking-widest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u0438"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/who-is-it-for",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/who-is-it-for'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "\u0414\u043B\u044F \u043A\u043E\u0433\u043E \u044D\u0442\u043E"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/how-it-works",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/how-it-works'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, "\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/the-protocol",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/the-protocol'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, "\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "mt-8 md:mt-12 mb-3 text-xs font-bold uppercase text-gray-500 tracking-widest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/server-side-setup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/server-side-setup'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "\u0421\u0435\u0440\u0432\u0435\u0440"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/client-side-setup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/client-side-setup'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "\u041A\u043B\u0438\u0435\u043D\u0442")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "mt-8 md:mt-12 mb-3 text-xs font-bold uppercase text-gray-500 tracking-widest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/routing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/routing'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044F"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/responses",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/responses'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, "\u041E\u0442\u0432\u0435\u0442\u044B"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/pages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/pages'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/links'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, "\u0421\u0441\u044B\u043B\u043A\u0438"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/manual-visits",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/manual-visits'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, "\u0420\u0443\u0447\u043D\u044B\u0435 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/redirects",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/redirects'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, "\u0420\u0435\u0434\u0438\u0440\u0435\u043A\u0442\u044B"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/forms",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/forms'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, "\u0424\u043E\u0440\u043C\u044B"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/validation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/validation'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, "\u0412\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u044F"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shared-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/shared-data'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, "\u041E\u0431\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "mt-8 md:mt-12 mb-3 text-xs font-bold uppercase text-gray-500 tracking-widest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, "\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0435"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/events",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/events'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, "\u0421\u043E\u0431\u044B\u0442\u0438\u044F"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/partial-reloads",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/partial-reloads'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }, "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/scroll-management",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/scroll-management'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u043E\u0439"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/authentication",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/authentication'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }, "\u0410\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/authorization",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/authorization'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/csrf-protection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/csrf-protection'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, "CSRF \u0437\u0430\u0449\u0438\u0442\u0430"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/error-handling",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/error-handling'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }, "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/asset-versioning",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/asset-versioning'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }, "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u044F\u043C\u0438 \u0430\u043A\u0442\u0438\u0432\u043E\u0432"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/progress-indicators",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/progress-indicators'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }, "\u0418\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440\u044B \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/remembering-state",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/remembering-state'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }
  }, "\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/transforming-props",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/transforming-props'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }
  }, "\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/server-side-rendering",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/server-side-rendering'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 13
    }
  }, "\u0421\u0435\u0440\u0432\u0435\u0440\u043D\u044B\u0439 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u043D\u0433")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "mt-8 md:mt-12 mb-3 text-xs font-bold uppercase text-gray-500 tracking-widest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }
  }, "\u041F\u0435\u0440\u0435\u0432\u043E\u0434"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "https://github.com/inertiajs-ru/inertiajs.ru",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: "inline-flex ",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("span", {
    className: "pr-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 15
    }
  }, "\u0420\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0439"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 15
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("path", {
    fill: "#444444",
    d: "M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 17
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("path", {
    fill: "#444444",
    d: "M16 0h-5l1.8 1.8-6.8 6.8 1.4 1.4 6.8-6.8 1.8 1.8z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 17
    }
  })))))));
};

_s(Nav, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiY2xhc3NOYW1lIiwicm91dGVyIiwidXNlUm91dGVyIiwibGlua0NsYXNzIiwicGF0aCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBbUI7QUFBQTs7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQzdCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsV0FBU0MsU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUI7QUFDdkIsV0FBUUEsSUFBSSxLQUFLLEdBQVQsSUFBZ0JILE1BQU0sQ0FBQ0ksUUFBUCxLQUFvQixHQUFyQyxJQUE4Q0QsSUFBSSxLQUFLLEdBQVQsSUFBZ0JILE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQkMsVUFBaEIsQ0FBMkJGLElBQTNCLENBQTlELG9OQUFQO0FBR0Q7O0FBRUQsU0FDRTtBQUFLLGFBQVMsRUFBRUosU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDZEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxnRUFEWjtBQUVFLFFBQUksRUFBQyw4QkFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBc0MsV0FBTyxFQUFDLFdBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFNLEtBQUMsRUFBQyxzZUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRUEsU0FBUyxDQUFDLFFBQUQsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3REFERixDQURGLENBWEYsRUFnQkU7QUFBSSxhQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVBLFNBQVMsQ0FBQyxRQUFELENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBREYsQ0FERixDQWhCRixFQXFCRTtBQUFJLGFBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxnQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVBLFNBQVMsQ0FBQyxnQkFBRCxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1HQURGLENBREYsQ0FyQkYsRUEwQkU7QUFBSSxhQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVBLFNBQVMsQ0FBQyxZQUFELENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOERBREYsQ0FERixDQTFCRixFQStCRTtBQUFJLGFBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7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QUFBQTtBQUFBLEtBQ0UsMERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsOENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGNBQWI7QUFBNEIsVUFBTSxFQUFDLFFBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBFQURGLEVBRUU7QUFBSyxTQUFLLEVBQUMsSUFBWDtBQUFnQixVQUFNLEVBQUMsSUFBdkI7QUFBNEIsV0FBTyxFQUFDLFdBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFFBQUksRUFBQyxTQUFYO0FBQXFCLEtBQUMsRUFBQyx5Q0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTSxRQUFJLEVBQUMsU0FBWDtBQUFxQixLQUFDLEVBQUMsbURBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUZGLENBREYsQ0FERixDQURGLENBbk1GLENBREY7QUFtTkQsQ0E1TkQ7O0dBQU1KLEc7VUFDV0cscUQ7OztLQURYSCxHO0FBOE5TQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWxlYXNlcy5hOGFkYjlkMmYxZTIzMjE1Y2Y0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IE5hdiA9ICh7IGNsYXNzTmFtZSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgZnVuY3Rpb24gbGlua0NsYXNzKHBhdGgpIHtcclxuICAgIHJldHVybiAocGF0aCA9PT0gJy8nICYmIHJvdXRlci5wYXRobmFtZSA9PT0gJy8nKSB8fCAocGF0aCAhPT0gJy8nICYmIHJvdXRlci5wYXRobmFtZS5zdGFydHNXaXRoKHBhdGgpKVxyXG4gICAgICA/IGBibG9jayAtbWwtMyBwbC0zIHByLTIgcHktMSBtZDpweS0yIGZvbnQtbWVkaXVtIGJvcmRlci1sLTQgcm91bmRlZC1yIGJvcmRlci1wdXJwbGUtNDAwIGJnLXB1cnBsZS0xMDAgdGV4dC1wdXJwbGUtNzAwYFxyXG4gICAgICA6IGBpbmxpbmUtYmxvY2sgcHktMSBtZDpweS0yIGhvdmVyOnRleHQtYmx1ZS03MDAgaG92ZXI6dW5kZXJsaW5lIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBgXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtZDpoaWRkZW4gLW14LTYgbXQtNCBtYi02IHBiLTQgYm9yZGVyLWJcIj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktNzAwIG1yLTVcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9pbmVydGlhanNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHctNSBoLTVcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XHJcbiAgICAgICAgICAgIDx0aXRsZT5HaXRIdWI8L3RpdGxlPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEwIDBhMTAgMTAgMCAwIDAtMy4xNiAxOS40OWMuNS4xLjY4LS4yMi42OC0uNDhsLS4wMS0xLjdjLTIuNzguNi0zLjM3LTEuMzQtMy4zNy0xLjM0LS40Ni0xLjE2LTEuMTEtMS40Ny0xLjExLTEuNDctLjktLjYyLjA3LS42LjA3LS42IDEgLjA3IDEuNTMgMS4wMyAxLjUzIDEuMDMuOSAxLjUyIDIuMzQgMS4wOCAyLjkxLjgzLjEtLjY1LjM1LTEuMDkuNjMtMS4zNC0yLjIyLS4yNS00LjU1LTEuMTEtNC41NS00Ljk0IDAtMS4xLjM5LTEuOTkgMS4wMy0yLjY5YTMuNiAzLjYgMCAwIDEgLjEtMi42NHMuODQtLjI3IDIuNzUgMS4wMmE5LjU4IDkuNTggMCAwIDEgNSAwYzEuOTEtMS4zIDIuNzUtMS4wMiAyLjc1LTEuMDIuNTUgMS4zNy4yIDIuNC4xIDIuNjQuNjQuNyAxLjAzIDEuNiAxLjAzIDIuNjkgMCAzLjg0LTIuMzQgNC42OC00LjU3IDQuOTMuMzYuMzEuNjguOTIuNjggMS44NWwtLjAxIDIuNzVjMCAuMjYuMTguNTguNjkuNDhBMTAgMTAgMCAwIDAgMTAgMFwiIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTcwMCBtci01XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2luZXJ0aWFqc1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdy01IGgtNVwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cclxuICAgICAgICAgICAgPHRpdGxlPlR3aXR0ZXI8L3RpdGxlPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTYuMjkgMTguMjVjNy41NSAwIDExLjY3LTYuMjUgMTEuNjctMTEuNjd2LS41M2MuOC0uNTkgMS40OS0xLjMgMi4wNC0yLjEzLS43NS4zMy0xLjU0LjU1LTIuMzYuNjVhNC4xMiA0LjEyIDAgMCAwIDEuOC0yLjI3Yy0uOC40OC0xLjY4LjgxLTIuNiAxYTQuMSA0LjEgMCAwIDAtNyAzLjc0IDExLjY1IDExLjY1IDAgMCAxLTguNDUtNC4zIDQuMSA0LjEgMCAwIDAgMS4yNyA1LjQ5QzIuMDEgOC4yIDEuMzcgOC4wMy44IDcuN3YuMDVhNC4xIDQuMSAwIDAgMCAzLjMgNC4wMyA0LjEgNC4xIDAgMCAxLTEuODYuMDcgNC4xIDQuMSAwIDAgMCAzLjgzIDIuODVBOC4yMyA4LjIzIDAgMCAxIDAgMTYuNGExMS42MiAxMS42MiAwIDAgMCA2LjI5IDEuODRcIiAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJsb2NrIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTcwMFwiIGhyZWY9XCJodHRwczovL2Rpc2NvcmQuZ2cvZ3dneE44WVwiPlxyXG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdy01IGgtNVwiIHZpZXdCb3g9XCIwIDAgMTQ2IDE0NlwiPlxyXG4gICAgICAgICAgICA8dGl0bGU+RGlzY29yZDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZD1cIk0xMDcuNzUgMTI1LjAwMXMtNC41LTUuMzc1LTguMjUtMTAuMTI1YzE2LjM3NS00LjYyNSAyMi42MjUtMTQuODc1IDIyLjYyNS0xNC44NzUtNS4xMjUgMy4zNzUtMTAgNS43NS0xNC4zNzUgNy4zNzUtNi4yNSAyLjYyNS0xMi4yNSA0LjM3NS0xOC4xMjUgNS4zNzUtMTIgMi4yNS0yMyAxLjYyNS0zMi4zNzUtLjEyNS03LjEyNS0xLjM3NS0xMy4yNS0zLjM3NS0xOC4zNzUtNS4zNzUtMi44NzUtMS4xMjUtNi0yLjUtOS4xMjUtNC4yNS0uMzc1LS4yNS0uNzUtLjM3NS0xLjEyNS0uNjI1LS4yNS0uMTI1LS4zNzUtLjI1LS41LS4zNzUtMi4yNS0xLjI1LTMuNS0yLjEyNS0zLjUtMi4xMjVzNiAxMCAyMS44NzUgMTQuNzVjLTMuNzUgNC43NS04LjM3NSAxMC4zNzUtOC4zNzUgMTAuMzc1LTI3LjYyNS0uODc1LTM4LjEyNS0xOS0zOC4xMjUtMTkgMC00MC4yNSAxOC03Mi44NzUgMTgtNzIuODc1IDE4LTEzLjUgMzUuMTI1LTEzLjEyNSAzNS4xMjUtMTMuMTI1bDEuMjUgMS41Yy0yMi41IDYuNS0zMi44NzUgMTYuMzc1LTMyLjg3NSAxNi4zNzVzMi43NS0xLjUgNy4zNzUtMy42MjVjMTMuMzc1LTUuODc1IDI0LTcuNSAyOC4zNzUtNy44NzUuNzUtLjEyNSAxLjM3NS0uMjUgMi4xMjUtLjI1IDcuNjI1LTEgMTYuMjUtMS4yNSAyNS4yNS0uMjUgMTEuODc1IDEuMzc1IDI0LjYyNSA0Ljg3NSAzNy42MjUgMTIgMCAwLTkuODc1LTkuMzc1LTMxLjEyNS0xNS44NzVsMS43NS0yUzExMCAxOS42MjYgMTI4IDMzLjEyNmMwIDAgMTggMzIuNjI1IDE4IDcyLjg3NSAwIDAtMTAuNjI1IDE4LjEyNS0zOC4yNSAxOXpNNDkuNjI1IDY2LjYyNmMtNy4xMjUgMC0xMi43NSA2LjI1LTEyLjc1IDEzLjg3NXM1Ljc1IDEzLjg3NSAxMi43NSAxMy44NzVjNy4xMjUgMCAxMi43NS02LjI1IDEyLjc1LTEzLjg3NS4xMjUtNy42MjUtNS42MjUtMTMuODc1LTEyLjc1LTEzLjg3NXptNDUuNjI1IDBjLTcuMTI1IDAtMTIuNzUgNi4yNS0xMi43NSAxMy44NzVzNS43NSAxMy44NzUgMTIuNzUgMTMuODc1YzcuMTI1IDAgMTIuNzUtNi4yNSAxMi43NS0xMy44NzVzLTUuNjI1LTEzLjg3NS0xMi43NS0xMy44NzV6XCJcclxuICAgICAgICAgICAgICBmaWxsUnVsZT1cIm5vbnplcm9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnLycpfT7QktGB0YLRg9C/0LvQtdC90LjQtTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2RlbW8tYXBwbGljYXRpb25cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9kZW1vLWFwcGxpY2F0aW9uJyl9PtCU0LXQvNC+LdC/0YDQuNC70L7QttC10L3QuNC1PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3BvbnNvcnNcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9zcG9uc29ycycpfT7QodC/0L7QvdGB0L7RgNGLPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVsZWFzZXNcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9yZWxlYXNlcycpfT7QoNC10LvQuNC30Ys8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IG1kOm10LTEyIG1iLTMgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtZ3JheS01MDAgdHJhY2tpbmctd2lkZXN0XCI+0J7RgdC90L7QstC90YvQtSDQutC+0L3RhtC10L/RhtC40Lg8L2Rpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3doby1pcy1pdC1mb3JcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy93aG8taXMtaXQtZm9yJyl9PtCU0LvRjyDQutC+0LPQviDRjdGC0L48L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9ob3ctaXQtd29ya3NcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9ob3ctaXQtd29ya3MnKX0+0JrQsNC6INGN0YLQviDRgNCw0LHQvtGC0LDQtdGCPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGhlLXByb3RvY29sXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvdGhlLXByb3RvY29sJyl9PtCf0YDQvtGC0L7QutC+0Ls8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IG1kOm10LTEyIG1iLTMgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtZ3JheS01MDAgdHJhY2tpbmctd2lkZXN0XCI+0KPRgdGC0LDQvdC+0LLQutCwPC9kaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2ZXItc2lkZS1zZXR1cFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3NlcnZlci1zaWRlLXNldHVwJyl9PtCh0LXRgNCy0LXRgDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NsaWVudC1zaWRlLXNldHVwXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvY2xpZW50LXNpZGUtc2V0dXAnKX0+0JrQu9C40LXQvdGCPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBtZDptdC0xMiBtYi0zIHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LWdyYXktNTAwIHRyYWNraW5nLXdpZGVzdFwiPtCe0YHQvdC+0LLQvdGL0LU8L2Rpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3JvdXRpbmdcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9yb3V0aW5nJyl9PtCc0LDRgNGI0YDRg9GC0LjQt9Cw0YbQuNGPPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVzcG9uc2VzXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvcmVzcG9uc2VzJyl9PtCe0YLQstC10YLRizwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3BhZ2VzXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvcGFnZXMnKX0+0KHRgtGA0LDQvdC40YbRizwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2xpbmtzXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvbGlua3MnKX0+0KHRgdGL0LvQutC4PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWFudWFsLXZpc2l0c1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL21hbnVhbC12aXNpdHMnKX0+0KDRg9GH0L3Ri9C1INC/0L7RgdC10YnQtdC90LjRjzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3JlZGlyZWN0c1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3JlZGlyZWN0cycpfT7QoNC10LTQuNGA0LXQutGC0Ys8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9mb3Jtc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL2Zvcm1zJyl9PtCk0L7RgNC80Ys8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi92YWxpZGF0aW9uXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvdmFsaWRhdGlvbicpfT7QktCw0LvQuNC00LDRhtC40Y88L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaGFyZWQtZGF0YVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3NoYXJlZC1kYXRhJyl9PtCe0LHRidC40LUg0LTQsNC90L3Ri9C1PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBtZDptdC0xMiBtYi0zIHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LWdyYXktNTAwIHRyYWNraW5nLXdpZGVzdFwiPtCf0YDQvtC00LLQuNC90YPRgtGL0LU8L2Rpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2V2ZW50c1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL2V2ZW50cycpfT7QodC+0LHRi9GC0LjRjzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3BhcnRpYWwtcmVsb2Fkc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3BhcnRpYWwtcmVsb2FkcycpfT7Qp9Cw0YHRgtC40YfQvdGL0LUg0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutC4PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2Nyb2xsLW1hbmFnZW1lbnRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9zY3JvbGwtbWFuYWdlbWVudCcpfT7Qo9C/0YDQsNCy0LvQtdC90LjQtSDQv9GA0L7QutGA0YPRgtC60L7QuTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGhlbnRpY2F0aW9uXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvYXV0aGVudGljYXRpb24nKX0+0JDRg9GC0LXQvdGC0LjRhNC40LrQsNGG0LjRjzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGhvcml6YXRpb25cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9hdXRob3JpemF0aW9uJyl9PtCQ0LLRgtC+0YDQuNC30LDRhtC40Y88L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jc3JmLXByb3RlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9jc3JmLXByb3RlY3Rpb24nKX0+Q1NSRiDQt9Cw0YnQuNGC0LA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9lcnJvci1oYW5kbGluZ1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL2Vycm9yLWhhbmRsaW5nJyl9PtCe0LHRgNCw0LHQvtGC0LrQsCDQvtGI0LjQsdC+0Lo8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hc3NldC12ZXJzaW9uaW5nXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvYXNzZXQtdmVyc2lvbmluZycpfT7Qo9C/0YDQsNCy0LvQtdC90LjQtSDQstC10YDRgdC40Y/QvNC4INCw0LrRgtC40LLQvtCyPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZ3Jlc3MtaW5kaWNhdG9yc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3Byb2dyZXNzLWluZGljYXRvcnMnKX0+0JjQvdC00LjQutCw0YLQvtGA0Ysg0LLRi9C/0L7Qu9C90LXQvdC40Y88L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yZW1lbWJlcmluZy1zdGF0ZVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3JlbWVtYmVyaW5nLXN0YXRlJyl9PtCh0L7RgdGC0L7Rj9C90LjQtSDQt9Cw0L/QvtC80LjQvdCw0L3QuNGPPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdHJhbnNmb3JtaW5nLXByb3BzXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvdHJhbnNmb3JtaW5nLXByb3BzJyl9PtCf0YDQtdC+0LHRgNCw0LfQvtCy0LDQvdC40LUg0YHQstC+0LnRgdGC0LI8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2ZXItc2lkZS1yZW5kZXJpbmdcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9zZXJ2ZXItc2lkZS1yZW5kZXJpbmcnKX0+0KHQtdGA0LLQtdGA0L3Ri9C5INGA0LXQvdC00LXRgNC40L3QszwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggbWQ6bXQtMTIgbWItMyB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1ncmF5LTUwMCB0cmFja2luZy13aWRlc3RcIj7Qn9C10YDQtdCy0L7QtDwvZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaW5lcnRpYWpzLXJ1L2luZXJ0aWFqcy5ydVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwci0xXCI+0KDQtdC/0L7Qt9C40YLQvtGA0LjQuTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjNDQ0NDQ0XCIgZD1cIk0xNCAxNnYtMTFsLTEgMXY5aC0xMnYtMTJoOWwxLTFoLTExdjE0elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjNDQ0NDQ0XCIgZD1cIk0xNiAwaC01bDEuOCAxLjgtNi44IDYuOCAxLjQgMS40IDYuOC02LjggMS44IDEuOHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9uYXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==