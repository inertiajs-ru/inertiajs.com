webpackHotUpdate_N_E("pages/the-protocol",{

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
  }, "\u041D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
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
  }, "Client-side")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "mt-8 md:mt-12 mb-3 text-xs font-bold uppercase text-gray-500 tracking-widest",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, "The basics"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("ul", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiXSwibmFtZXMiOlsiTmF2IiwiY2xhc3NOYW1lIiwicm91dGVyIiwidXNlUm91dGVyIiwibGlua0NsYXNzIiwicGF0aCIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFtQjtBQUFBOztBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxXQUFTQyxTQUFULENBQW1CQyxJQUFuQixFQUF5QjtBQUN2QixXQUFPSCxNQUFNLENBQUNJLFFBQVAsS0FBb0JELElBQXBCLG9OQUFQO0FBR0Q7O0FBRUQsU0FDRTtBQUFLLGFBQVMsRUFBRUosU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDZEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxnRUFEWjtBQUVFLFFBQUksRUFBQyw4QkFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBc0MsV0FBTyxFQUFDLFdBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFNLEtBQUMsRUFBQyxzZUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FKRixDQURGLEVBVUU7QUFDRSxhQUFTLEVBQUMsZ0VBRFo7QUFFRSxRQUFJLEVBQUMsK0JBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUssYUFBUyxF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LEtBQ0U7QUFBSSxhQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUVBLFNBQVMsQ0FBQyxVQUFELENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQURGLENBREYsRUFNRTtBQUFJLGFBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxZQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRUEsU0FBUyxDQUFDLFlBQUQsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQURGLENBTkYsRUFXRTtBQUFJLGFBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRUEsU0FBUyxDQUFDLFFBQUQsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBREYsQ0FYRixFQWdCRTtBQUFJLGFBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRUEsU0FBUyxDQUFDLFFBQUQsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBREYsQ0FoQkYs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ImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90aGUtcHJvdG9jb2wuYjkyYjI3NTNjZWY4MTZhZGZkMjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBOYXYgPSAoeyBjbGFzc05hbWUgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGZ1bmN0aW9uIGxpbmtDbGFzcyhwYXRoKSB7XHJcbiAgICByZXR1cm4gcm91dGVyLnBhdGhuYW1lID09PSBwYXRoXHJcbiAgICAgID8gYGJsb2NrIC1tbC0zIHBsLTMgcHItMiBweS0xIG1kOnB5LTIgZm9udC1tZWRpdW0gYm9yZGVyLWwtNCByb3VuZGVkLXIgYm9yZGVyLXB1cnBsZS00MDAgYmctcHVycGxlLTEwMCB0ZXh0LXB1cnBsZS03MDBgXHJcbiAgICAgIDogYGlubGluZS1ibG9jayBweS0xIG1kOnB5LTIgaG92ZXI6dGV4dC1ibHVlLTcwMCBob3Zlcjp1bmRlcmxpbmUgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMGBcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1kOmhpZGRlbiAtbXgtNiBtdC00IG1iLTYgcGItNCBib3JkZXItYlwiPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS03MDAgbXItNVwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2luZXJ0aWFqc1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgdy01IGgtNVwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cclxuICAgICAgICAgICAgPHRpdGxlPkdpdEh1YjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAgMGExMCAxMCAwIDAgMC0zLjE2IDE5LjQ5Yy41LjEuNjgtLjIyLjY4LS40OGwtLjAxLTEuN2MtMi43OC42LTMuMzctMS4zNC0zLjM3LTEuMzQtLjQ2LTEuMTYtMS4xMS0xLjQ3LTEuMTEtMS40Ny0uOS0uNjIuMDctLjYuMDctLjYgMSAuMDcgMS41MyAxLjAzIDEuNTMgMS4wMy45IDEuNTIgMi4zNCAxLjA4IDIuOTEuODMuMS0uNjUuMzUtMS4wOS42My0xLjM0LTIuMjItLjI1LTQuNTUtMS4xMS00LjU1LTQuOTQgMC0xLjEuMzktMS45OSAxLjAzLTIuNjlhMy42IDMuNiAwIDAgMSAuMS0yLjY0cy44NC0uMjcgMi43NSAxLjAyYTkuNTggOS41OCAwIDAgMSA1IDBjMS45MS0xLjMgMi43NS0xLjAyIDIuNzUtMS4wMi41NSAxLjM3LjIgMi40LjEgMi42NC42NC43IDEuMDMgMS42IDEuMDMgMi42OSAwIDMuODQtMi4zNCA0LjY4LTQuNTcgNC45My4zNi4zMS42OC45Mi42OCAxLjg1bC0uMDEgMi43NWMwIC4yNi4xOC41OC42OS40OEExMCAxMCAwIDAgMCAxMCAwXCIgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktNzAwIG1yLTVcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vaW5lcnRpYWpzXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB3LTUgaC01XCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxyXG4gICAgICAgICAgICA8dGl0bGU+VHdpdHRlcjwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNi4yOSAxOC4yNWM3LjU1IDAgMTEuNjctNi4yNSAxMS42Ny0xMS42N3YtLjUzYy44LS41OSAxLjQ5LTEuMyAyLjA0LTIuMTMtLjc1LjMzLTEuNTQuNTUtMi4zNi42NWE0LjEyIDQuMTIgMCAwIDAgMS44LTIuMjdjLS44LjQ4LTEuNjguODEtMi42IDFhNC4xIDQuMSAwIDAgMC03IDMuNzQgMTEuNjUgMTEuNjUgMCAwIDEtOC40NS00LjMgNC4xIDQuMSAwIDAgMCAxLjI3IDUuNDlDMi4wMSA4LjIgMS4zNyA4LjAzLjggNy43di4wNWE0LjEgNC4xIDAgMCAwIDMuMyA0LjAzIDQuMSA0LjEgMCAwIDEtMS44Ni4wNyA0LjEgNC4xIDAgMCAwIDMuODMgMi44NUE4LjIzIDguMjMgMCAwIDEgMCAxNi40YTExLjYyIDExLjYyIDAgMCAwIDYuMjkgMS44NFwiIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmxvY2sgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC1ncmF5LTUwMCBob3Zlcjp0ZXh0LWdyYXktNzAwXCIgaHJlZj1cImh0dHBzOi8vZGlzY29yZC5nZy9nd2d4TjhZXCI+XHJcbiAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCB3LTUgaC01XCIgdmlld0JveD1cIjAgMCAxNDYgMTQ2XCI+XHJcbiAgICAgICAgICAgIDx0aXRsZT5EaXNjb3JkPC90aXRsZT5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBkPVwiTTEwNy43NSAxMjUuMDAxcy00LjUtNS4zNzUtOC4yNS0xMC4xMjVjMTYuMzc1LTQuNjI1IDIyLjYyNS0xNC44NzUgMjIuNjI1LTE0Ljg3NS01LjEyNSAzLjM3NS0xMCA1Ljc1LTE0LjM3NSA3LjM3NS02LjI1IDIuNjI1LTEyLjI1IDQuMzc1LTE4LjEyNSA1LjM3NS0xMiAyLjI1LTIzIDEuNjI1LTMyLjM3NS0uMTI1LTcuMTI1LTEuMzc1LTEzLjI1LTMuMzc1LTE4LjM3NS01LjM3NS0yLjg3NS0xLjEyNS02LTIuNS05LjEyNS00LjI1LS4zNzUtLjI1LS43NS0uMzc1LTEuMTI1LS42MjUtLjI1LS4xMjUtLjM3NS0uMjUtLjUtLjM3NS0yLjI1LTEuMjUtMy41LTIuMTI1LTMuNS0yLjEyNXM2IDEwIDIxLjg3NSAxNC43NWMtMy43NSA0Ljc1LTguMzc1IDEwLjM3NS04LjM3NSAxMC4zNzUtMjcuNjI1LS44NzUtMzguMTI1LTE5LTM4LjEyNS0xOSAwLTQwLjI1IDE4LTcyLjg3NSAxOC03Mi44NzUgMTgtMTMuNSAzNS4xMjUtMTMuMTI1IDM1LjEyNS0xMy4xMjVsMS4yNSAxLjVjLTIyLjUgNi41LTMyLjg3NSAxNi4zNzUtMzIuODc1IDE2LjM3NXMyLjc1LTEuNSA3LjM3NS0zLjYyNWMxMy4zNzUtNS44NzUgMjQtNy41IDI4LjM3NS03Ljg3NS43NS0uMTI1IDEuMzc1LS4yNSAyLjEyNS0uMjUgNy42MjUtMSAxNi4yNS0xLjI1IDI1LjI1LS4yNSAxMS44NzUgMS4zNzUgMjQuNjI1IDQuODc1IDM3LjYyNSAxMiAwIDAtOS44NzUtOS4zNzUtMzEuMTI1LTE1Ljg3NWwxLjc1LTJTMTEwIDE5LjYyNiAxMjggMzMuMTI2YzAgMCAxOCAzMi42MjUgMTggNzIuODc1IDAgMC0xMC42MjUgMTguMTI1LTM4LjI1IDE5ek00OS42MjUgNjYuNjI2Yy03LjEyNSAwLTEyLjc1IDYuMjUtMTIuNzUgMTMuODc1czUuNzUgMTMuODc1IDEyLjc1IDEzLjg3NWM3LjEyNSAwIDEyLjc1LTYuMjUgMTIuNzUtMTMuODc1LjEyNS03LjYyNS01LjYyNS0xMy44NzUtMTIuNzUtMTMuODc1em00NS42MjUgMGMtNy4xMjUgMC0xMi43NSA2LjI1LTEyLjc1IDEzLjg3NXM1Ljc1IDEzLjg3NSAxMi43NSAxMy44NzVjNy4xMjUgMCAxMi43NS02LjI1IDEyLjc1LTEzLjg3NXMtNS42MjUtMTMuODc1LTEyLjc1LTEzLjg3NXpcIlxyXG4gICAgICAgICAgICAgIGZpbGxSdWxlPVwibm9uemVyb1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvJyl9PtCS0YHRgtGD0L/Qu9C10L3QuNC1PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGVtby1hcHBsaWNhdGlvblwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL2RlbW8tYXBwbGljYXRpb24nKX0+0JTQtdC80L4t0L/RgNC40LvQvtC20LXQvdC40LU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zcG9uc29yc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3Nwb25zb3JzJyl9PtCh0L/QvtC90YHQvtGA0Ys8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IG1kOm10LTEyIG1iLTMgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtZ3JheS01MDAgdHJhY2tpbmctd2lkZXN0XCI+0J7RgdC90L7QstC90YvQtSDQutC+0L3RhtC10L/RhtC40Lg8L2Rpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3doby1pcy1pdC1mb3JcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy93aG8taXMtaXQtZm9yJyl9PtCa0YLQviDRjdGC0L4g0LTQu9GPPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG93LWl0LXdvcmtzXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvaG93LWl0LXdvcmtzJyl9PtCa0LDQuiDRjdGC0L4g0YDQsNCx0L7RgtCw0LXRgjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3RoZS1wcm90b2NvbFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3RoZS1wcm90b2NvbCcpfT7Qn9GA0L7RgtC+0LrQvtC7PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBtZDptdC0xMiBtYi0zIHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LWdyYXktNTAwIHRyYWNraW5nLXdpZGVzdFwiPtCj0YHRgtCw0L3QvtCy0LrQsDwvZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmVyLXNpZGUtc2V0dXBcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9zZXJ2ZXItc2lkZS1zZXR1cCcpfT7QndCwINGB0YLQvtGA0L7QvdC1INGB0LXRgNCy0LXRgNCwPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2xpZW50LXNpZGUtc2V0dXBcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9jbGllbnQtc2lkZS1zZXR1cCcpfT5DbGllbnQtc2lkZTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggbWQ6bXQtMTIgbWItMyB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1ncmF5LTUwMCB0cmFja2luZy13aWRlc3RcIj5UaGUgYmFzaWNzPC9kaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yb3V0aW5nXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvcm91dGluZycpfT5Sb3V0aW5nPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVzcG9uc2VzXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvcmVzcG9uc2VzJyl9PlJlc3BvbnNlczwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3BhZ2VzXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvcGFnZXMnKX0+UGFnZXM8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9saW5rc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL2xpbmtzJyl9PkxpbmtzPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWFudWFsLXZpc2l0c1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL21hbnVhbC12aXNpdHMnKX0+TWFudWFsIHZpc2l0czwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3JlZGlyZWN0c1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3JlZGlyZWN0cycpfT5SZWRpcmVjdHM8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9mb3Jtc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL2Zvcm1zJyl9PkZvcm1zPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hhcmVkLWRhdGFcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9zaGFyZWQtZGF0YScpfT5TaGFyZWQgZGF0YTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggbWQ6bXQtMTIgbWItMyB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1ncmF5LTUwMCB0cmFja2luZy13aWRlc3RcIj5BZHZhbmNlZDwvZGl2PlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXZlbnRzXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvZXZlbnRzJyl9PkV2ZW50czwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3BhcnRpYWwtcmVsb2Fkc1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3BhcnRpYWwtcmVsb2FkcycpfT5QYXJ0aWFsIHJlbG9hZHM8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zY3JvbGwtbWFuYWdlbWVudFwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3Njcm9sbC1tYW5hZ2VtZW50Jyl9PlNjcm9sbCBtYW5hZ2VtZW50PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXV0aGVudGljYXRpb25cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9hdXRoZW50aWNhdGlvbicpfT5BdXRoZW50aWNhdGlvbjwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2F1dGhvcml6YXRpb25cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9hdXRob3JpemF0aW9uJyl9PkF1dGhvcml6YXRpb248L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jc3JmLXByb3RlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9jc3JmLXByb3RlY3Rpb24nKX0+Q1NSRiBwcm90ZWN0aW9uPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXJyb3ItaGFuZGxpbmdcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9lcnJvci1oYW5kbGluZycpfT5FcnJvciBoYW5kbGluZzwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fzc2V0LXZlcnNpb25pbmdcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtsaW5rQ2xhc3MoJy9hc3NldC12ZXJzaW9uaW5nJyl9PkFzc2V0IHZlcnNpb25pbmc8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWQ6cHItM1wiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2NhbC1zdGF0ZS1jYWNoaW5nXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvbG9jYWwtc3RhdGUtY2FjaGluZycpfT5Mb2NhbCBzdGF0ZSBjYWNoaW5nPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1kOnByLTNcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdHJhbnNmb3JtaW5nLXByb3BzXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17bGlua0NsYXNzKCcvdHJhbnNmb3JtaW5nLXByb3BzJyl9PlRyYW5zZm9ybWluZyBwcm9wczwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZDpwci0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZlci1zaWRlLXJlbmRlcmluZ1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2xpbmtDbGFzcygnL3NlcnZlci1zaWRlLXJlbmRlcmluZycpfT5TZXJ2ZXItc2lkZSByZW5kZXJpbmc8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvbmF2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=