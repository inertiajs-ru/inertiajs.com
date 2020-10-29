webpackHotUpdate_N_E("pages/redirects",{

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
    _jsxFileName = "C:\\OSPanel\\projects\\inertiajs.com\\components\\Nav.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Nav = function Nav(_ref) {
  _s();

  var className = _ref.className;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  function linkClass(path) {
    return router.pathname === path ? "block -ml-3 pl-3 pr-2 py-1 md:py-2 font-medium border-l-4 rounded-r border-purple-400 bg-purple-100 text-purple-700" : "inline-block py-1 md:py-2 hover:text-blue-700 hover:underline font-medium text-gray-700";
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
  }, "\u0421\u043F\u043E\u043D\u0441\u043E\u0440\u044B")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "mt-8 md:mt-12 mb-3 text-xs font-bold uppercase text-gray-500 tracking-widest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u0438"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/who-is-it-for",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/who-is-it-for'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "\u041A\u0442\u043E \u044D\u0442\u043E \u0434\u043B\u044F"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/how-it-works",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/how-it-works'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/the-protocol",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/the-protocol'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, "\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "mt-8 md:mt-12 mb-3 text-xs font-bold uppercase text-gray-500 tracking-widest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/server-side-setup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/server-side-setup'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "\u0421\u0435\u0440\u0432\u0435\u0440"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/client-side-setup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/client-side-setup'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "\u041A\u043B\u0438\u0435\u043D\u0442")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "mt-8 md:mt-12 mb-3 text-xs font-bold uppercase text-gray-500 tracking-widest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, "\u041E\u0441\u043D\u043E\u0432\u044B"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/routing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/routing'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044F"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/responses",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/responses'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, "\u041E\u0442\u0432\u0435\u0442\u044B"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/pages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/pages'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/links",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/links'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, "\u0421\u0441\u044B\u043B\u043A\u0438"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/manual-visits",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/manual-visits'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, "\u0420\u0443\u0447\u043D\u044B\u0435 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/redirects",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/redirects'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, "\u0420\u0435\u0434\u0438\u0440\u0435\u043A\u0442\u044B"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/forms",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/forms'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, "\u0424\u043E\u0440\u043C\u044B"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/shared-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/shared-data'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }, "\u041E\u0431\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "mt-8 md:mt-12 mb-3 text-xs font-bold uppercase text-gray-500 tracking-widest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, "Advanced"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/events",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/events'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, "Events"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/partial-reloads",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/partial-reloads'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, "Partial reloads"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/scroll-management",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/scroll-management'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }, "Scroll management"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/authentication",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/authentication'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }, "Authentication"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/authorization",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/authorization'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, "Authorization"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/csrf-protection",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/csrf-protection'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }, "CSRF protection"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/error-handling",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/error-handling'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, "Error handling"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/asset-versioning",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/asset-versioning'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, "Asset versioning"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/local-state-caching",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/local-state-caching'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }, "Local state caching"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/transforming-props",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/transforming-props'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }, "Transforming props"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
    className: "md:pr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/server-side-rendering",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 11
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
    className: linkClass('/server-side-rendering'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }, "Server-side rendering")))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiY2xhc3NOYW1lIiwicm91dGVyIiwidXNlUm91dGVyIiwibGlua0NsYXNzIiwicGF0aCIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFtQjtBQUFBOztBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxXQUFTQyxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUN2QixXQUFPSCxNQUFNLENBQUNJLFFBQVAsS0FBb0JELElBQXBCLG9OQUFQO0FBR0Q7O0FBRUQsU0FDRTtBQUFLLGFBQVMsRUFBRUosU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDZEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxnRUFEWjtBQUVFLFFBQUksRUFBQyw4QkFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBc0MsV0FBTyxFQUFDLFdBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFNLEtBQUMsRUFBQyxzZUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FKRixDQURGLEVBVUU7QUFDRSxhQUFTLEVBQUMsZ0VBRFo7QUFFRSxRQUFJLEVBQUMsK0JBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUssYUFBUyxF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LEtBQ0U7QUFBSSxhQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVBLFNBQVMsQ0FBQyxVQUFELENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0ZBREYsQ0FERixDQURGLEVBTUU7QUFBSSxhQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVBLFNBQVMsQ0FBQyxZQUFELENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBREYsQ0FERixDQU5GLEVBV0U7QUFBSSxhQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVBLFNBQVMsQ0FBQyxRQUFELENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0RBREYsQ0FERixDQVhGLEVBZ0JFO0FBQUksYUFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLDBEQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFFQSxTQUFTLENBQUMsUUFBRCxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQURGLENBREYsQ0Fo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QWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVkaXJlY3RzLmRlZGViMGY5OTg1OTc0NjRkY2EzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgTmF2ID0gKHsgY2xhc3NOYW1lIH0pID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBmdW5jdGlvbiBsaW5rQ2xhc3MocGF0aCkge1xyXG4gICAgcmV0dXJuIHJvdXRlci5wYXRobmFtZSA9PT0gcGF0aFxyXG4gICAgICA/IGBibG9jayAtbWwtMyBwbC0zIHByLTIgcHktMSBtZDpweS0yIGZvbnQtbWVkaXVtIGJvcmRlci1sLTQgcm91bmRlZC1yIGJvcmRlci1wdXJwbGUtNDAwIGJnLXB1cnBsZS0xMDAgdGV4dC1wdXJwbGUtNzAwYFxyXG4gICAgICA6IGBpbmxpbmUtYmxvY2sgcHktMSBtZDpweS0yIGhvdmVyOnRleHQtYmx1ZS03MDAgaG92ZXI6dW5kZXJsaW5lIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBgXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtZDpoaWRkZW4gLW14LTYgbXQtNCBtYi02IHBiLTQgYm9yZGVyLWJcIj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktNzAwIG1yLTVcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9pbmVydGlhanNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHctNSBoLTVcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XHJcbiAgICAgICAgICAgIDx0aXRsZT5HaXRIdWI8L3RpdGxlPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEwIDBhMTAgMTAgMCAwIDAtMy4xNiAxOS40OWMuNS4xLjY4LS4yMi42OC0uNDhsLS4wMS0xLjdjLTIuNzguNi0zLjM3LTEuMzQtMy4zNy0xLjM0LS40Ni0xLjE2LTEuMTEtMS40Ny0xLjExLTEuNDctLjktLjYyLjA3LS42LjA3LS42IDEgLjA3IDEuNTMgMS4wMyAxLjUzIDEuMDMuOSAxLjUyIDIuMzQgMS4wOCAyLjkxLjgzLjEtLjY1LjM1LTEuMDkuNjMtMS4zNC0yLjIyLS4yNS00LjU1LTEuMTEtNC41NS00Ljk0IDAtMS4xLjM5LTEuOTkgMS4wMy0yLjY5YTMuNiAzLjYgMCAwIDEgLjEtMi42NHMuODQtLjI3IDIuNzUgMS4wMmE5LjU4IDkuNTggMCAwIDEgNSAwYzEuOTEtMS4zIDIuNzUtMS4wMiAyLjc1LTEuMDIuNTUgMS4zNy4yIDIuNC4xIDIuNjQuNjQuNyAxLjAzIDEuNiAxLjAzIDIuNjkgMCAzLjg0LTIuMzQgNC42OC00LjU3IDQuOTMuMzYuMzEuNjguOTIuNjggMS44NWwtLjAxIDIuNzVjMCAuMjYuMTguNTguNjkuNDhBMTAgMTAgMCAwIDAgMTAgMFwiIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTcwMCBtci01XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2luZXJ0aWFqc1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdy01IGgtNVwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cclxuICAgICAgICAgICAgPHRpdGxlPlR3aXR0ZXI8L3RpdGxlPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTYuMjkgMTguMjVjNy41NSAwIDExLjY3LTYuMjUgMTEuNjctMTEuNjd2LS41M2MuOC0uNTkgMS40OS0xLjMgMi4wNC0yLjEzLS43NS4zMy0xLjU0LjU1LTIuMzYuNjVhNC4xMiA0LjEyIDAgMCAwIDEuOC0yLjI3Yy0uOC40OC0xLjY4LjgxLTIuNiAxYTQuMSA0LjEgMCAwIDAtNyAzLjc0IDExLjY1IDExLjY1IDAgMCAxLTguNDUtNC4zIDQuMSA0LjEgMCAwIDAgMS4yNyA1LjQ5QzIuMDEgOC4yIDEuMzcgOC4wMy44IDcuN3YuMDVhNC4xIDQuMSAwIDAgMCAzLjMgNC4wMyA0LjEgNC4xIDAgMCAxLTEuODYuMDcgNC4xIDQuMSAwIDAgMCAzLjgzIDIuODVBOC4yMyA4LjIzIDAgMCAxIDAgMTYuNGExMS42MiAxMS42MiAwIDAgMCA2LjI5IDEuODRcIiAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cImJsb2NrIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTcwMFwiIGhyZWY9XCJodHRwczovL2Rpc2NvcmQuZ2cvZ3dneE44WVwiPlxyXG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdy01IGgtNVwiIHZpZXdCb3g9XCIwIDAgMTQ2IDE0NlwiPlxyXG4gICAgICAgICAgICA8dGl0bGU+RGlzY29yZDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZD1cIk0xMDcuNzUgMTI1LjAwMXMtNC41LTUuMzc1LTguMjUtMTAuMTI1YzE2LjM3NS00LjYyNSAyMi42MjUtMTQuODc1IDIyLjYyNS0xNC44NzUtNS4xMjUgMy4zNzUtMTAgNS43NS0xNC4zNzUgNy4zNzUtNi4yNSAyLjYyNS0xMi4yNSA0LjM3NS0xOC4xMjUgNS4zNzUtMTIgMi4yNS0yMyAxLjYyNS0zMi4zNzUtLjEyNS03LjEyNS0xLjM3NS0xMy4yNS0zLjM3NS0xOC4zNzUtNS4zNzUtMi44NzUtMS4xMjUtNi0yLjUtOS4xMjUtNC4yNS0uMzc1LS4yNS0uNzUtLjM3NS0xLjEyNS0uNjI1LS4yNS0uMTI1LS4zNzUtLjI1LS41LS4zNzUtMi4yNS0xLjI1LTMuNS0yLjEyNS0zLjUtMi4xMjVzNiAxMCAyMS44NzUgMTQuNzVjLTMuNzUgNC43NS04LjM3NSAxMC4zNzUtOC4zNzUgMTAuMzc1LTI3LjYyNS0uODc1LTM4LjEyNS0xOS0zOC4xMjUtMTkgMC00MC4yNSAxOC03Mi44NzUgMTgtNzIuODc1IDE4LTEzLjUgMzUuMTI1LTEzLjEyNSAzNS4xMjUtMTMuMTI1bDEuMjUgMS41Yy0yMi41IDYuNS0zMi44NzUgMTYuMzc1LTMyLjg3NSAxNi4zNzVzMi43NS0xLjUgNy4zNzUtMy42MjVjMTMuMzc1LTUuODc1IDI0LTcuNSAyOC4zNzUtNy44NzUuNzUtLjEyNSAxLjM3NS0uMjUgMi4xMjUtLjI1IDcuNjI1LTEgMTYuMjUtMS4yNSAyNS4yNS0uMjUgMTEuODc1IDEuMzc1IDI0LjYyNSA0Ljg3NSAzNy42MjUgMTIgMCAwLTkuODc1LTkuMzc1LTMxLjEyNS0xNS44NzVsMS43NS0yUzExMCAxOS42MjYgMTI4IDMzLjEyNmMwIDAgMTggMzIuNjI1IDE4IDcyLjg3NSAwIDAtMTAuNjI1IDE4LjEyNS0zOC4yNSAxOXpNNDkuNjI1IDY2LjYyNmMtNy4xMjUgMC0xMi43NSA2LjI1LTEyLjc1IDEzLjg3NXM1Ljc1IDEzLjg3NSAxMi43NSAxMy44NzVjNy4xMjUgMCAxMi43NS02LjI1IDEyLjc1LTEzLjg3NS4xMjUtNy42MjUtNS42MjUtMTMuODc1LTEyLjc1LTEzLjg3NXptNDUuNjI1IDBjLTcuMTI1IDAtMTIuNzUgNi4yNS0xMi43NSAxMy44NzVzNS43NSAxMy44NzUgMTIuNzUgMTMuODc1YzcuMTI1IDAgMTIuNzUtNi4yNSAxMi43NS0xMy44NzVzLTUuNjI1LTEzLjg3NS0xMi43NS0xMy44NzV6XCJcclxuICAgICAgICAgICAgICBmaWxsUnVsZT1cIm5vbnplcm9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnLycpfT7QktGB0YLRg9C/0LvQtdC90LjQtTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2RlbW8tYXBwbGljYXRpb25cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9kZW1vLWFwcGxpY2F0aW9uJyl9PtCU0LXQvNC+LdC/0YDQuNC70L7QttC10L3QuNC1PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3BvbnNvcnNcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9zcG9uc29ycycpfT7QodC/0L7QvdGB0L7RgNGLPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBtZDptdC0xMiBtYi0zIHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LWdyYXktNTAwIHRyYWNraW5nLXdpZGVzdFwiPtCe0YHQvdC+0LLQvdGL0LUg0LrQvtC90YbQtdC/0YbQuNC4PC9kaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi93aG8taXMtaXQtZm9yXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvd2hvLWlzLWl0LWZvcicpfT7QmtGC0L4g0Y3RgtC+INC00LvRjzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2hvdy1pdC13b3Jrc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL2hvdy1pdC13b3JrcycpfT7QmtCw0Log0Y3RgtC+INGA0LDQsdC+0YLQsNC10YI8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi90aGUtcHJvdG9jb2xcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy90aGUtcHJvdG9jb2wnKX0+0J/RgNC+0YLQvtC60L7QuzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggbWQ6bXQtMTIgbWItMyB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1ncmF5LTUwMCB0cmFja2luZy13aWRlc3RcIj7Qo9GB0YLQsNC90L7QstC60LA8L2Rpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZlci1zaWRlLXNldHVwXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvc2VydmVyLXNpZGUtc2V0dXAnKX0+0KHQtdGA0LLQtdGAPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2xpZW50LXNpZGUtc2V0dXBcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9jbGllbnQtc2lkZS1zZXR1cCcpfT7QmtC70LjQtdC90YI8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IG1kOm10LTEyIG1iLTMgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtZ3JheS01MDAgdHJhY2tpbmctd2lkZXN0XCI+0J7RgdC90L7QstGLPC9kaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yb3V0aW5nXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvcm91dGluZycpfT7QnNCw0YDRiNGA0YPRgtC40LfQsNGG0LjRjzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc3BvbnNlc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3Jlc3BvbnNlcycpfT7QntGC0LLQtdGC0Ys8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdlc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3BhZ2VzJyl9PtCh0YLRgNCw0L3QuNGG0Ys8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9saW5rc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL2xpbmtzJyl9PtCh0YHRi9C70LrQuDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL21hbnVhbC12aXNpdHNcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9tYW51YWwtdmlzaXRzJyl9PtCg0YPRh9C90YvQtSDQv9C+0YHQtdGJ0LXQvdC40Y88L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWRpcmVjdHNcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9yZWRpcmVjdHMnKX0+0KDQtdC00LjRgNC10LrRgtGLPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZm9ybXNcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9mb3JtcycpfT7QpNC+0YDQvNGLPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hhcmVkLWRhdGFcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9zaGFyZWQtZGF0YScpfT7QntCx0YnQuNC1INC00LDQvdC90YvQtTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggbWQ6bXQtMTIgbWItMyB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1ncmF5LTUwMCB0cmFja2luZy13aWRlc3RcIj5BZHZhbmNlZDwvZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXZlbnRzXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvZXZlbnRzJyl9PkV2ZW50czwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3BhcnRpYWwtcmVsb2Fkc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3BhcnRpYWwtcmVsb2FkcycpfT5QYXJ0aWFsIHJlbG9hZHM8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zY3JvbGwtbWFuYWdlbWVudFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3Njcm9sbC1tYW5hZ2VtZW50Jyl9PlNjcm9sbCBtYW5hZ2VtZW50PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aGVudGljYXRpb25cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9hdXRoZW50aWNhdGlvbicpfT5BdXRoZW50aWNhdGlvbjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGhvcml6YXRpb25cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9hdXRob3JpemF0aW9uJyl9PkF1dGhvcml6YXRpb248L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jc3JmLXByb3RlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9jc3JmLXByb3RlY3Rpb24nKX0+Q1NSRiBwcm90ZWN0aW9uPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXJyb3ItaGFuZGxpbmdcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9lcnJvci1oYW5kbGluZycpfT5FcnJvciBoYW5kbGluZzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fzc2V0LXZlcnNpb25pbmdcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9hc3NldC12ZXJzaW9uaW5nJyl9PkFzc2V0IHZlcnNpb25pbmc8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2NhbC1zdGF0ZS1jYWNoaW5nXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvbG9jYWwtc3RhdGUtY2FjaGluZycpfT5Mb2NhbCBzdGF0ZSBjYWNoaW5nPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdHJhbnNmb3JtaW5nLXByb3BzXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvdHJhbnNmb3JtaW5nLXByb3BzJyl9PlRyYW5zZm9ybWluZyBwcm9wczwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZlci1zaWRlLXJlbmRlcmluZ1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3NlcnZlci1zaWRlLXJlbmRlcmluZycpfT5TZXJ2ZXItc2lkZSByZW5kZXJpbmc8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=