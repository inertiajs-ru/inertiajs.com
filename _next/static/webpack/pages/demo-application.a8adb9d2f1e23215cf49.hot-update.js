webpackHotUpdate_N_E("pages/demo-application",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiY2xhc3NOYW1lIiwicm91dGVyIiwidXNlUm91dGVyIiwibGlua0NsYXNzIiwicGF0aCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sT0FBbUI7QUFBQTs7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQzdCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsV0FBU0MsU0FBVCxDQUFtQkMsSUFBbkIsRUFBeUI7QUFDdkIsV0FBUUEsSUFBSSxLQUFLLEdBQVQsSUFBZ0JILE1BQU0sQ0FBQ0ksUUFBUCxLQUFvQixHQUFyQyxJQUE4Q0QsSUFBSSxLQUFLLEdBQVQsSUFBZ0JILE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQkMsVUFBaEIsQ0FBMkJGLElBQTNCLENBQTlELG9OQUFQO0FBR0Q7O0FBRUQsU0FDRTtBQUFLLGFBQVMsRUFBRUosU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDZEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxnRUFEWjtBQUVFLFFBQUksRUFBQyw4QkFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBc0MsV0FBTyxFQUFDLFdBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFNLEtBQUMsRUFBQyxzZUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRUEsU0FBUyxDQUFDLFFBQUQsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3REFERixDQURGLENBWEYsRUFnQkU7QUFBSSxhQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVBLFNBQVMsQ0FBQyxRQUFELENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBREYsQ0FERixDQWhCRixFQXFCRTtBQUFJLGFBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxnQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVBLFNBQVMsQ0FBQyxnQkFBRCxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1HQURGLENBREYsQ0FyQkYsRUEwQkU7QUFBSSxhQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVBLFNBQVMsQ0FBQyxZQUFELENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOERBREYsQ0FERixDQTFCRixFQStCRTtBQUFJLGFBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7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QUFBQTtBQUFBLEtBQ0UsMERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsOENBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLGNBQWI7QUFBNEIsVUFBTSxFQUFDLFFBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBFQURGLEVBRUU7QUFBSyxTQUFLLEVBQUMsSUFBWDtBQUFnQixVQUFNLEVBQUMsSUFBdkI7QUFBNEIsV0FBTyxFQUFDLFdBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFFBQUksRUFBQyxTQUFYO0FBQXFCLEtBQUMsRUFBQyx5Q0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBTSxRQUFJLEVBQUMsU0FBWDtBQUFxQixLQUFDLEVBQUMsbURBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUZGLENBREYsQ0FERixDQURGLENBbk1GLENBREY7QUFtTkQsQ0E1TkQ7O0dBQU1KLEc7VUFDV0cscUQ7OztLQURYSCxHO0FBOE5TQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kZW1vLWFwcGxpY2F0aW9uLmE4YWRiOWQyZjFlMjMyMTVjZjQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgTmF2ID0gKHsgY2xhc3NOYW1lIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBmdW5jdGlvbiBsaW5rQ2xhc3MocGF0aCkge1xyXG4gICAgcmV0dXJuIChwYXRoID09PSAnLycgJiYgcm91dGVyLnBhdGhuYW1lID09PSAnLycpIHx8IChwYXRoICE9PSAnLycgJiYgcm91dGVyLnBhdGhuYW1lLnN0YXJ0c1dpdGgocGF0aCkpXHJcbiAgICAgID8gYGJsb2NrIC1tbC0zIHBsLTMgcHItMiBweS0xIG1kOnB5LTIgZm9udC1tZWRpdW0gYm9yZGVyLWwtNCByb3VuZGVkLXIgYm9yZGVyLXB1cnBsZS00MDAgYmctcHVycGxlLTEwMCB0ZXh0LXB1cnBsZS03MDBgXHJcbiAgICAgIDogYGlubGluZS1ibG9jayBweS0xIG1kOnB5LTIgaG92ZXI6dGV4dC1ibHVlLTcwMCBob3Zlcjp1bmRlcmxpbmUgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMGBcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1kOmhpZGRlbiAtbXgtNiBtdC00IG1iLTYgcGItNCBib3JkZXItYlwiPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS03MDAgbXItNVwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2luZXJ0aWFqc1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdy01IGgtNVwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cclxuICAgICAgICAgICAgPHRpdGxlPkdpdEh1YjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAgMGExMCAxMCAwIDAgMC0zLjE2IDE5LjQ5Yy41LjEuNjgtLjIyLjY4LS40OGwtLjAxLTEuN2MtMi43OC42LTMuMzctMS4zNC0zLjM3LTEuMzQtLjQ2LTEuMTYtMS4xMS0xLjQ3LTEuMTEtMS40Ny0uOS0uNjIuMDctLjYuMDctLjYgMSAuMDcgMS41MyAxLjAzIDEuNTMgMS4wMy45IDEuNTIgMi4zNCAxLjA4IDIuOTEuODMuMS0uNjUuMzUtMS4wOS42My0xLjM0LTIuMjItLjI1LTQuNTUtMS4xMS00LjU1LTQuOTQgMC0xLjEuMzktMS45OSAxLjAzLTIuNjlhMy42IDMuNiAwIDAgMSAuMS0yLjY0cy44NC0uMjcgMi43NSAxLjAyYTkuNTggOS41OCAwIDAgMSA1IDBjMS45MS0xLjMgMi43NS0xLjAyIDIuNzUtMS4wMi41NSAxLjM3LjIgMi40LjEgMi42NC42NC43IDEuMDMgMS42IDEuMDMgMi42OSAwIDMuODQtMi4zNCA0LjY4LTQuNTcgNC45My4zNi4zMS42OC45Mi42OCAxLjg1bC0uMDEgMi43NWMwIC4yNi4xOC41OC42OS40OEExMCAxMCAwIDAgMCAxMCAwXCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktNzAwIG1yLTVcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaW5lcnRpYWpzXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB3LTUgaC01XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG4gICAgICAgICAgICA8dGl0bGU+VHdpdHRlcjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNi4yOSAxOC4yNWM3LjU1IDAgMTEuNjctNi4yNSAxMS42Ny0xMS42N3YtLjUzYy44LS41OSAxLjQ5LTEuMyAyLjA0LTIuMTMtLjc1LjMzLTEuNTQuNTUtMi4zNi42NWE0LjEyIDQuMTIgMCAwIDAgMS44LTIuMjdjLS44LjQ4LTEuNjguODEtMi42IDFhNC4xIDQuMSAwIDAgMC03IDMuNzQgMTEuNjUgMTEuNjUgMCAwIDEtOC40NS00LjMgNC4xIDQuMSAwIDAgMCAxLjI3IDUuNDlDMi4wMSA4LjIgMS4zNyA4LjAzLjggNy43di4wNWE0LjEgNC4xIDAgMCAwIDMuMyA0LjAzIDQuMSA0LjEgMCAwIDEtMS44Ni4wNyA0LjEgNC4xIDAgMCAwIDMuODMgMi44NUE4LjIzIDguMjMgMCAwIDEgMCAxNi40YTExLjYyIDExLjYyIDAgMCAwIDYuMjkgMS44NFwiIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmxvY2sgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktNzAwXCIgaHJlZj1cImh0dHBzOi8vZGlzY29yZC5nZy9nd2d4TjhZXCI+XHJcbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB3LTUgaC01XCIgdmlld0JveD1cIjAgMCAxNDYgMTQ2XCI+XHJcbiAgICAgICAgICAgIDx0aXRsZT5EaXNjb3JkPC90aXRsZT5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBkPVwiTTEwNy43NSAxMjUuMDAxcy00LjUtNS4zNzUtOC4yNS0xMC4xMjVjMTYuMzc1LTQuNjI1IDIyLjYyNS0xNC44NzUgMjIuNjI1LTE0Ljg3NS01LjEyNSAzLjM3NS0xMCA1Ljc1LTE0LjM3NSA3LjM3NS02LjI1IDIuNjI1LTEyLjI1IDQuMzc1LTE4LjEyNSA1LjM3NS0xMiAyLjI1LTIzIDEuNjI1LTMyLjM3NS0uMTI1LTcuMTI1LTEuMzc1LTEzLjI1LTMuMzc1LTE4LjM3NS01LjM3NS0yLjg3NS0xLjEyNS02LTIuNS05LjEyNS00LjI1LS4zNzUtLjI1LS43NS0uMzc1LTEuMTI1LS42MjUtLjI1LS4xMjUtLjM3NS0uMjUtLjUtLjM3NS0yLjI1LTEuMjUtMy41LTIuMTI1LTMuNS0yLjEyNXM2IDEwIDIxLjg3NSAxNC43NWMtMy43NSA0Ljc1LTguMzc1IDEwLjM3NS04LjM3NSAxMC4zNzUtMjcuNjI1LS44NzUtMzguMTI1LTE5LTM4LjEyNS0xOSAwLTQwLjI1IDE4LTcyLjg3NSAxOC03Mi44NzUgMTgtMTMuNSAzNS4xMjUtMTMuMTI1IDM1LjEyNS0xMy4xMjVsMS4yNSAxLjVjLTIyLjUgNi41LTMyLjg3NSAxNi4zNzUtMzIuODc1IDE2LjM3NXMyLjc1LTEuNSA3LjM3NS0zLjYyNWMxMy4zNzUtNS44NzUgMjQtNy41IDI4LjM3NS03Ljg3NS43NS0uMTI1IDEuMzc1LS4yNSAyLjEyNS0uMjUgNy42MjUtMSAxNi4yNS0xLjI1IDI1LjI1LS4yNSAxMS44NzUgMS4zNzUgMjQuNjI1IDQuODc1IDM3LjYyNSAxMiAwIDAtOS44NzUtOS4zNzUtMzEuMTI1LTE1Ljg3NWwxLjc1LTJTMTEwIDE5LjYyNiAxMjggMzMuMTI2YzAgMCAxOCAzMi42MjUgMTggNzIuODc1IDAgMC0xMC42MjUgMTguMTI1LTM4LjI1IDE5ek00OS42MjUgNjYuNjI2Yy03LjEyNSAwLTEyLjc1IDYuMjUtMTIuNzUgMTMuODc1czUuNzUgMTMuODc1IDEyLjc1IDEzLjg3NWM3LjEyNSAwIDEyLjc1LTYuMjUgMTIuNzUtMTMuODc1LjEyNS03LjYyNS01LjYyNS0xMy44NzUtMTIuNzUtMTMuODc1em00NS42MjUgMGMtNy4xMjUgMC0xMi43NSA2LjI1LTEyLjc1IDEzLjg3NXM1Ljc1IDEzLjg3NSAxMi43NSAxMy44NzVjNy4xMjUgMCAxMi43NS02LjI1IDEyLjc1LTEzLjg3NXMtNS42MjUtMTMuODc1LTEyLjc1LTEzLjg3NXpcIlxyXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwibm9uemVyb1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvJyl9PtCS0YHRgtGD0L/Qu9C10L3QuNC1PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGVtby1hcHBsaWNhdGlvblwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL2RlbW8tYXBwbGljYXRpb24nKX0+0JTQtdC80L4t0L/RgNC40LvQvtC20LXQvdC40LU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zcG9uc29yc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3Nwb25zb3JzJyl9PtCh0L/QvtC90YHQvtGA0Ys8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWxlYXNlc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3JlbGVhc2VzJyl9PtCg0LXQu9C40LfRizwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggbWQ6bXQtMTIgbWItMyB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1ncmF5LTUwMCB0cmFja2luZy13aWRlc3RcIj7QntGB0L3QvtCy0L3Ri9C1INC60L7QvdGG0LXQv9GG0LjQuDwvZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd2hvLWlzLWl0LWZvclwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3doby1pcy1pdC1mb3InKX0+0JTQu9GPINC60L7Qs9C+INGN0YLQvjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2hvdy1pdC13b3Jrc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL2hvdy1pdC13b3JrcycpfT7QmtCw0Log0Y3RgtC+INGA0LDQsdC+0YLQsNC10YI8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi90aGUtcHJvdG9jb2xcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy90aGUtcHJvdG9jb2wnKX0+0J/RgNC+0YLQvtC60L7QuzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggbWQ6bXQtMTIgbWItMyB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1ncmF5LTUwMCB0cmFja2luZy13aWRlc3RcIj7Qo9GB0YLQsNC90L7QstC60LA8L2Rpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZlci1zaWRlLXNldHVwXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvc2VydmVyLXNpZGUtc2V0dXAnKX0+0KHQtdGA0LLQtdGAPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2xpZW50LXNpZGUtc2V0dXBcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9jbGllbnQtc2lkZS1zZXR1cCcpfT7QmtC70LjQtdC90YI8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IG1kOm10LTEyIG1iLTMgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtZ3JheS01MDAgdHJhY2tpbmctd2lkZXN0XCI+0J7RgdC90L7QstC90YvQtTwvZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcm91dGluZ1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3JvdXRpbmcnKX0+0JzQsNGA0YjRgNGD0YLQuNC30LDRhtC40Y88L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXNwb25zZXNcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9yZXNwb25zZXMnKX0+0J7RgtCy0LXRgtGLPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGFnZXNcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9wYWdlcycpfT7QodGC0YDQsNC90LjRhtGLPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbGlua3NcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9saW5rcycpfT7QodGB0YvQu9C60Lg8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9tYW51YWwtdmlzaXRzXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvbWFudWFsLXZpc2l0cycpfT7QoNGD0YfQvdGL0LUg0L/QvtGB0LXRidC10L3QuNGPPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVkaXJlY3RzXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvcmVkaXJlY3RzJyl9PtCg0LXQtNC40YDQtdC60YLRizwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2Zvcm1zXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvZm9ybXMnKX0+0KTQvtGA0LzRizwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3ZhbGlkYXRpb25cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy92YWxpZGF0aW9uJyl9PtCS0LDQu9C40LTQsNGG0LjRjzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NoYXJlZC1kYXRhXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvc2hhcmVkLWRhdGEnKX0+0J7QsdGJ0LjQtSDQtNCw0L3QvdGL0LU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IG1kOm10LTEyIG1iLTMgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtZ3JheS01MDAgdHJhY2tpbmctd2lkZXN0XCI+0J/RgNC+0LTQstC40L3Rg9GC0YvQtTwvZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXZlbnRzXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvZXZlbnRzJyl9PtCh0L7QsdGL0YLQuNGPPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGFydGlhbC1yZWxvYWRzXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvcGFydGlhbC1yZWxvYWRzJyl9PtCn0LDRgdGC0LjRh9C90YvQtSDQv9C10YDQtdC30LDQs9GA0YPQt9C60Lg8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zY3JvbGwtbWFuYWdlbWVudFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3Njcm9sbC1tYW5hZ2VtZW50Jyl9PtCj0L/RgNCw0LLQu9C10L3QuNC1INC/0YDQvtC60YDRg9GC0LrQvtC5PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aGVudGljYXRpb25cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9hdXRoZW50aWNhdGlvbicpfT7QkNGD0YLQtdC90YLQuNGE0LjQutCw0YbQuNGPPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aG9yaXphdGlvblwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL2F1dGhvcml6YXRpb24nKX0+0JDQstGC0L7RgNC40LfQsNGG0LjRjzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NzcmYtcHJvdGVjdGlvblwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL2NzcmYtcHJvdGVjdGlvbicpfT5DU1JGINC30LDRidC40YLQsDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2Vycm9yLWhhbmRsaW5nXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvZXJyb3ItaGFuZGxpbmcnKX0+0J7QsdGA0LDQsdC+0YLQutCwINC+0YjQuNCx0L7QujwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fzc2V0LXZlcnNpb25pbmdcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9hc3NldC12ZXJzaW9uaW5nJyl9PtCj0L/RgNCw0LLQu9C10L3QuNC1INCy0LXRgNGB0LjRj9C80Lgg0LDQutGC0LjQstC+0LI8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9ncmVzcy1pbmRpY2F0b3JzXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvcHJvZ3Jlc3MtaW5kaWNhdG9ycycpfT7QmNC90LTQuNC60LDRgtC+0YDRiyDQstGL0L/QvtC70L3QtdC90LjRjzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3JlbWVtYmVyaW5nLXN0YXRlXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvcmVtZW1iZXJpbmctc3RhdGUnKX0+0KHQvtGB0YLQvtGP0L3QuNC1INC30LDQv9C+0LzQuNC90LDQvdC40Y88L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi90cmFuc2Zvcm1pbmctcHJvcHNcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy90cmFuc2Zvcm1pbmctcHJvcHMnKX0+0J/RgNC10L7QsdGA0LDQt9C+0LLQsNC90LjQtSDRgdCy0L7QudGB0YLQsjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZlci1zaWRlLXJlbmRlcmluZ1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3NlcnZlci1zaWRlLXJlbmRlcmluZycpfT7QodC10YDQstC10YDQvdGL0Lkg0YDQtdC90LTQtdGA0LjQvdCzPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBtZDptdC0xMiBtYi0zIHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LWdyYXktNTAwIHRyYWNraW5nLXdpZGVzdFwiPtCf0LXRgNC10LLQvtC0PC9kaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9pbmVydGlhanMtcnUvaW5lcnRpYWpzLnJ1XCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IFwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByLTFcIj7QoNC10L/QvtC30LjRgtC+0YDQuNC5PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiM0NDQ0NDRcIiBkPVwiTTE0IDE2di0xMWwtMSAxdjloLTEydi0xMmg5bDEtMWgtMTF2MTR6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cIiM0NDQ0NDRcIiBkPVwiTTE2IDBoLTVsMS44IDEuOC02LjggNi44IDEuNCAxLjQgNi44LTYuOCAxLjggMS44elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L25hdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlxyXG4iXSwic291cmNlUm9vdCI6IiJ9