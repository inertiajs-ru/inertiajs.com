webpackHotUpdate_N_E("pages/shared-data",{

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
  }, "Routing"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
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
  }, "Responses"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
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
  }, "Pages"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
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
  }, "Links"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
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
  }, "Manual visits"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
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
  }, "Redirects"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
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
  }, "Forms"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
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
  }, "Shared data")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiY2xhc3NOYW1lIiwicm91dGVyIiwidXNlUm91dGVyIiwibGlua0NsYXNzIiwicGF0aCIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFtQjtBQUFBOztBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxXQUFTQyxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUN2QixXQUFPSCxNQUFNLENBQUNJLFFBQVAsS0FBb0JELElBQXBCLG9OQUFQO0FBR0Q7O0FBRUQsU0FDRTtBQUFLLGFBQVMsRUFBRUosU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDZEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxnRUFEWjtBQUVFLFFBQUksRUFBQyw4QkFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBc0MsV0FBTyxFQUFDLFdBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFNLEtBQUMsRUFBQyxzZUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FKRixDQURGLEVBVUU7QUFDRSxhQUFTLEVBQUMsZ0VBRFo7QUFFRSxRQUFJLEVBQUMsK0JBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUssYUFBUyxF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LEtBQ0U7QUFBSSxhQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVBLFNBQVMsQ0FBQyxVQUFELENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQURGLENBREYsRUFNRTtBQUFJLGFBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRUEsU0FBUyxDQUFDLFlBQUQsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQURGLENBTkYsRUFXRTtBQUFJLGFBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRUEsU0FBUyxDQUFDLFFBQUQsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBREYsQ0FYRixFQWdCRTtBQUFJLGFBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRUEsU0FBUyxDQUFDLFFBQUQsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBREYsQ0FoQkYs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ImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaGFyZWQtZGF0YS5hNDM1NjM4MDljZjk4YjRmODc2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IE5hdiA9ICh7IGNsYXNzTmFtZSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgZnVuY3Rpb24gbGlua0NsYXNzKHBhdGgpIHtcclxuICAgIHJldHVybiByb3V0ZXIucGF0aG5hbWUgPT09IHBhdGhcclxuICAgICAgPyBgYmxvY2sgLW1sLTMgcGwtMyBwci0yIHB5LTEgbWQ6cHktMiBmb250LW1lZGl1bSBib3JkZXItbC00IHJvdW5kZWQtciBib3JkZXItcHVycGxlLTQwMCBiZy1wdXJwbGUtMTAwIHRleHQtcHVycGxlLTcwMGBcclxuICAgICAgOiBgaW5saW5lLWJsb2NrIHB5LTEgbWQ6cHktMiBob3Zlcjp0ZXh0LWJsdWUtNzAwIGhvdmVyOnVuZGVybGluZSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwYFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbWQ6aGlkZGVuIC1teC02IG10LTQgbWItNiBwYi00IGJvcmRlci1iXCI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGZsZXggaXRlbXMtY2VudGVyIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTcwMCBtci01XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vaW5lcnRpYWpzXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB3LTUgaC01XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG4gICAgICAgICAgICA8dGl0bGU+R2l0SHViPC90aXRsZT5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMCAwYTEwIDEwIDAgMCAwLTMuMTYgMTkuNDljLjUuMS42OC0uMjIuNjgtLjQ4bC0uMDEtMS43Yy0yLjc4LjYtMy4zNy0xLjM0LTMuMzctMS4zNC0uNDYtMS4xNi0xLjExLTEuNDctMS4xMS0xLjQ3LS45LS42Mi4wNy0uNi4wNy0uNiAxIC4wNyAxLjUzIDEuMDMgMS41MyAxLjAzLjkgMS41MiAyLjM0IDEuMDggMi45MS44My4xLS42NS4zNS0xLjA5LjYzLTEuMzQtMi4yMi0uMjUtNC41NS0xLjExLTQuNTUtNC45NCAwLTEuMS4zOS0xLjk5IDEuMDMtMi42OWEzLjYgMy42IDAgMCAxIC4xLTIuNjRzLjg0LS4yNyAyLjc1IDEuMDJhOS41OCA5LjU4IDAgMCAxIDUgMGMxLjkxLTEuMyAyLjc1LTEuMDIgMi43NS0xLjAyLjU1IDEuMzcuMiAyLjQuMSAyLjY0LjY0LjcgMS4wMyAxLjYgMS4wMyAyLjY5IDAgMy44NC0yLjM0IDQuNjgtNC41NyA0LjkzLjM2LjMxLjY4LjkyLjY4IDEuODVsLS4wMSAyLjc1YzAgLjI2LjE4LjU4LjY5LjQ4QTEwIDEwIDAgMCAwIDEwIDBcIiAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS03MDAgbXItNVwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pbmVydGlhanNcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHctNSBoLTVcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XHJcbiAgICAgICAgICAgIDx0aXRsZT5Ud2l0dGVyPC90aXRsZT5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk02LjI5IDE4LjI1YzcuNTUgMCAxMS42Ny02LjI1IDExLjY3LTExLjY3di0uNTNjLjgtLjU5IDEuNDktMS4zIDIuMDQtMi4xMy0uNzUuMzMtMS41NC41NS0yLjM2LjY1YTQuMTIgNC4xMiAwIDAgMCAxLjgtMi4yN2MtLjguNDgtMS42OC44MS0yLjYgMWE0LjEgNC4xIDAgMCAwLTcgMy43NCAxMS42NSAxMS42NSAwIDAgMS04LjQ1LTQuMyA0LjEgNC4xIDAgMCAwIDEuMjcgNS40OUMyLjAxIDguMiAxLjM3IDguMDMuOCA3Ljd2LjA1YTQuMSA0LjEgMCAwIDAgMy4zIDQuMDMgNC4xIDQuMSAwIDAgMS0xLjg2LjA3IDQuMSA0LjEgMCAwIDAgMy44MyAyLjg1QTguMjMgOC4yMyAwIDAgMSAwIDE2LjRhMTEuNjIgMTEuNjIgMCAwIDAgNi4yOSAxLjg0XCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJibG9jayBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS03MDBcIiBocmVmPVwiaHR0cHM6Ly9kaXNjb3JkLmdnL2d3Z3hOOFlcIj5cclxuICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IHctNSBoLTVcIiB2aWV3Qm94PVwiMCAwIDE0NiAxNDZcIj5cclxuICAgICAgICAgICAgPHRpdGxlPkRpc2NvcmQ8L3RpdGxlPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGQ9XCJNMTA3Ljc1IDEyNS4wMDFzLTQuNS01LjM3NS04LjI1LTEwLjEyNWMxNi4zNzUtNC42MjUgMjIuNjI1LTE0Ljg3NSAyMi42MjUtMTQuODc1LTUuMTI1IDMuMzc1LTEwIDUuNzUtMTQuMzc1IDcuMzc1LTYuMjUgMi42MjUtMTIuMjUgNC4zNzUtMTguMTI1IDUuMzc1LTEyIDIuMjUtMjMgMS42MjUtMzIuMzc1LS4xMjUtNy4xMjUtMS4zNzUtMTMuMjUtMy4zNzUtMTguMzc1LTUuMzc1LTIuODc1LTEuMTI1LTYtMi41LTkuMTI1LTQuMjUtLjM3NS0uMjUtLjc1LS4zNzUtMS4xMjUtLjYyNS0uMjUtLjEyNS0uMzc1LS4yNS0uNS0uMzc1LTIuMjUtMS4yNS0zLjUtMi4xMjUtMy41LTIuMTI1czYgMTAgMjEuODc1IDE0Ljc1Yy0zLjc1IDQuNzUtOC4zNzUgMTAuMzc1LTguMzc1IDEwLjM3NS0yNy42MjUtLjg3NS0zOC4xMjUtMTktMzguMTI1LTE5IDAtNDAuMjUgMTgtNzIuODc1IDE4LTcyLjg3NSAxOC0xMy41IDM1LjEyNS0xMy4xMjUgMzUuMTI1LTEzLjEyNWwxLjI1IDEuNWMtMjIuNSA2LjUtMzIuODc1IDE2LjM3NS0zMi44NzUgMTYuMzc1czIuNzUtMS41IDcuMzc1LTMuNjI1YzEzLjM3NS01Ljg3NSAyNC03LjUgMjguMzc1LTcuODc1Ljc1LS4xMjUgMS4zNzUtLjI1IDIuMTI1LS4yNSA3LjYyNS0xIDE2LjI1LTEuMjUgMjUuMjUtLjI1IDExLjg3NSAxLjM3NSAyNC42MjUgNC44NzUgMzcuNjI1IDEyIDAgMC05Ljg3NS05LjM3NS0zMS4xMjUtMTUuODc1bDEuNzUtMlMxMTAgMTkuNjI2IDEyOCAzMy4xMjZjMCAwIDE4IDMyLjYyNSAxOCA3Mi44NzUgMCAwLTEwLjYyNSAxOC4xMjUtMzguMjUgMTl6TTQ5LjYyNSA2Ni42MjZjLTcuMTI1IDAtMTIuNzUgNi4yNS0xMi43NSAxMy44NzVzNS43NSAxMy44NzUgMTIuNzUgMTMuODc1YzcuMTI1IDAgMTIuNzUtNi4yNSAxMi43NS0xMy44NzUuMTI1LTcuNjI1LTUuNjI1LTEzLjg3NS0xMi43NS0xMy44NzV6bTQ1LjYyNSAwYy03LjEyNSAwLTEyLjc1IDYuMjUtMTIuNzUgMTMuODc1czUuNzUgMTMuODc1IDEyLjc1IDEzLjg3NWM3LjEyNSAwIDEyLjc1LTYuMjUgMTIuNzUtMTMuODc1cy01LjYyNS0xMy44NzUtMTIuNzUtMTMuODc1elwiXHJcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJub256ZXJvXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy8nKX0+0JLRgdGC0YPQv9C70LXQvdC40LU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9kZW1vLWFwcGxpY2F0aW9uXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvZGVtby1hcHBsaWNhdGlvbicpfT7QlNC10LzQvi3Qv9GA0LjQu9C+0LbQtdC90LjQtTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Nwb25zb3JzXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvc3BvbnNvcnMnKX0+0KHQv9C+0L3RgdC+0YDRizwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggbWQ6bXQtMTIgbWItMyB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1ncmF5LTUwMCB0cmFja2luZy13aWRlc3RcIj7QntGB0L3QvtCy0L3Ri9C1INC60L7QvdGG0LXQv9GG0LjQuDwvZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd2hvLWlzLWl0LWZvclwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3doby1pcy1pdC1mb3InKX0+0JrRgtC+INGN0YLQviDQtNC70Y88L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9ob3ctaXQtd29ya3NcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9ob3ctaXQtd29ya3MnKX0+0JrQsNC6INGN0YLQviDRgNCw0LHQvtGC0LDQtdGCPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGhlLXByb3RvY29sXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvdGhlLXByb3RvY29sJyl9PtCf0YDQvtGC0L7QutC+0Ls8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IG1kOm10LTEyIG1iLTMgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtZ3JheS01MDAgdHJhY2tpbmctd2lkZXN0XCI+0KPRgdGC0LDQvdC+0LLQutCwPC9kaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2ZXItc2lkZS1zZXR1cFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3NlcnZlci1zaWRlLXNldHVwJyl9PtCh0LXRgNCy0LXRgDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2NsaWVudC1zaWRlLXNldHVwXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvY2xpZW50LXNpZGUtc2V0dXAnKX0+0JrQu9C40LXQvdGCPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBtZDptdC0xMiBtYi0zIHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LWdyYXktNTAwIHRyYWNraW5nLXdpZGVzdFwiPtCe0YHQvdC+0LLRizwvZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcm91dGluZ1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3JvdXRpbmcnKX0+Um91dGluZzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc3BvbnNlc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3Jlc3BvbnNlcycpfT5SZXNwb25zZXM8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wYWdlc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3BhZ2VzJyl9PlBhZ2VzPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbGlua3NcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9saW5rcycpfT5MaW5rczwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL21hbnVhbC12aXNpdHNcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9tYW51YWwtdmlzaXRzJyl9Pk1hbnVhbCB2aXNpdHM8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWRpcmVjdHNcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9yZWRpcmVjdHMnKX0+UmVkaXJlY3RzPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZm9ybXNcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9mb3JtcycpfT5Gb3JtczwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NoYXJlZC1kYXRhXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvc2hhcmVkLWRhdGEnKX0+U2hhcmVkIGRhdGE8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IG1kOm10LTEyIG1iLTMgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtZ3JheS01MDAgdHJhY2tpbmctd2lkZXN0XCI+QWR2YW5jZWQ8L2Rpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2V2ZW50c1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL2V2ZW50cycpfT5FdmVudHM8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wYXJ0aWFsLXJlbG9hZHNcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9wYXJ0aWFsLXJlbG9hZHMnKX0+UGFydGlhbCByZWxvYWRzPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2Nyb2xsLW1hbmFnZW1lbnRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9zY3JvbGwtbWFuYWdlbWVudCcpfT5TY3JvbGwgbWFuYWdlbWVudDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGhlbnRpY2F0aW9uXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvYXV0aGVudGljYXRpb24nKX0+QXV0aGVudGljYXRpb248L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hdXRob3JpemF0aW9uXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvYXV0aG9yaXphdGlvbicpfT5BdXRob3JpemF0aW9uPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3NyZi1wcm90ZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvY3NyZi1wcm90ZWN0aW9uJyl9PkNTUkYgcHJvdGVjdGlvbjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2Vycm9yLWhhbmRsaW5nXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvZXJyb3ItaGFuZGxpbmcnKX0+RXJyb3IgaGFuZGxpbmc8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hc3NldC12ZXJzaW9uaW5nXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvYXNzZXQtdmVyc2lvbmluZycpfT5Bc3NldCB2ZXJzaW9uaW5nPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9jYWwtc3RhdGUtY2FjaGluZ1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL2xvY2FsLXN0YXRlLWNhY2hpbmcnKX0+TG9jYWwgc3RhdGUgY2FjaGluZzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3RyYW5zZm9ybWluZy1wcm9wc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3RyYW5zZm9ybWluZy1wcm9wcycpfT5UcmFuc2Zvcm1pbmcgcHJvcHM8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2ZXItc2lkZS1yZW5kZXJpbmdcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9zZXJ2ZXItc2lkZS1yZW5kZXJpbmcnKX0+U2VydmVyLXNpZGUgcmVuZGVyaW5nPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L25hdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlxyXG4iXSwic291cmNlUm9vdCI6IiJ9