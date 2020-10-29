webpackHotUpdate_N_E("pages/the-protocol",{

/***/ "./pages/the-protocol.mdx":
/*!********************************!*\
  !*** ./pages/the-protocol.mdx ***!
  \********************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var dedent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dedent-js */ "./node_modules/dedent-js/lib/index.js");
/* harmony import */ var dedent_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dedent_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Notice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Notice */ "./components/Notice.js");
/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Code */ "./components/Code.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");



var _jsxFileName = "C:\\OSPanel\\projects\\inertiajs.com\\pages\\the-protocol.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      {\n        \"component\": \"Events\",\n        \"props\": {\n          \"auth\": {...},       // NOT included\n          \"categories\": [...], // NOT included\n          \"events\": [...]      // included\n        },\n        \"url\": \"/events/80\",\n        \"version\": \"c32b8e4965f418ad16eaebba1d4e960f\"\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      {\n        \"component\": \"Event\",\n        \"props\": {\n          \"event\": {\n            \"id\": 80,\n            \"title\": \"Birthday party\",\n            \"start_date\": \"2019-06-02\",\n            \"description\": \"Come out and celebrate Jonathan's 36th birthday party!\"\n          }\n        },\n        \"url\": \"/events/80\",\n        \"version\": \"c32b8e4965f418ad16eaebba1d4e960f\"\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      <html>\n      <head>\n          <title>\u041C\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435</title>\n          <link href=\"/css/app.css\" rel=\"stylesheet\">\n          <script src=\"/js/app.js\" defer></script>\n      </head>\n      <body>\n\n      <div id=\"app\" data-page='{\"component\":\"Event\",\"props\":{\"event\":{\"id\":80,\"title\":\"Birthday party\",\"start_date\":\"2019-06-02\",\"description\":\"Come out and celebrate Jonathan&apos;s 36th birthday party!\"}},\"url\":\"/events/80\",\"version\":\"c32b8e4965f418ad16eaebba1d4e960f\"}'></div>\n\n      </body>\n      </html>\n    "], ["\n      <html>\n      <head>\n          <title>\u041C\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435</title>\n          <link href=\"/css/app.css\" rel=\"stylesheet\">\n          <script src=\"/js/app.js\" defer></script>\n      </head>\n      <body>\\n\n      <div id=\"app\" data-page='{\"component\":\"Event\",\"props\":{\"event\":{\"id\":80,\"title\":\"Birthday party\",\"start_date\":\"2019-06-02\",\"description\":\"Come out and celebrate Jonathan&apos;s 36th birthday party!\"}},\"url\":\"/events/80\",\"version\":\"c32b8e4965f418ad16eaebba1d4e960f\"}'></div>\\n\n      </body>\n      </html>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */






var meta = {
  title: 'Протокол',
  links: [{
    url: '#html-ответы',
    name: 'HTML-ответы'
  }, {
    url: '#inertia-ответы',
    name: 'Inertia-ответы'
  }, {
    url: '#объект-страницы',
    name: 'Объект страницы'
  }, {
    url: '#версионность-ресурсов',
    name: 'Версионность ресурсов'
  }, {
    url: '#частичные-перезагрузки',
    name: 'Частичные перезагрузки'
  }]
};
var layoutProps = {
  meta: meta
};
var MDXLayout = _components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"];
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, "\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, "\u041D\u0438\u0436\u0435 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u0430 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u0430 Inertia. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u044C\u0442\u0435\u0441\u044C \u0441\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435\u0439 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/how-it-works"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 103
    }
  }), "\u043A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"), " \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u043E\u0431\u0449\u0435\u0433\u043E \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, "HTML-\u043E\u0442\u0432\u0435\u0442\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, "\u0421\u0430\u043C\u044B\u0439 \u043F\u0435\u0440\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 \u043A \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044E Inertia - \u044D\u0442\u043E \u043E\u0431\u044B\u0447\u043D\u044B\u0439 \u043F\u043E\u043B\u043D\u043E\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u0431\u0435\u0437 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u0432 \u0438\u043B\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 Inertia. \u0414\u043B\u044F \u044D\u0442\u0438\u0445 \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 \u0441\u0435\u0440\u0432\u0435\u0440 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043F\u043E\u043B\u043D\u044B\u0439 HTML-\u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, "\u042D\u0442\u043E\u0442 HTML-\u043E\u0442\u0432\u0435\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0440\u0435\u0441\u0443\u0440\u0441\u044B \u0441\u0430\u0439\u0442\u0430 (CSS, JavaScript), \u0430 \u0442\u0430\u043A\u0436\u0435 \u043A\u043E\u0440\u043D\u0435\u0432\u043E\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 95
    }
  }, "<div>"), " \u0432 \u0442\u0435\u043B\u0435. \u041A\u043E\u0440\u043D\u0435\u0432\u043E\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 174
    }
  }, "<div>"), " \u0441\u043B\u0443\u0436\u0438\u0442 \u0442\u043E\u0447\u043A\u043E\u0439 \u043C\u043E\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u043E\u0433\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0438 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0430\u0442\u0440\u0438\u0431\u0443\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 301
    }
  }, "data-page"), " \u0441 \u0437\u0430\u043A\u043E\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u0432 JSON ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "#%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%8B"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 383
    }
  }), "\u043E\u0431\u044A\u0435\u043A\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"), " \u0434\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. Inertia \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u044D\u0442\u0443 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0412\u0430\u0448\u0435\u0439 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u043E\u0439 \u0441\u0440\u0435\u0434\u044B \u0438 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "rounded overflow-hidden",
    style: {
      background: '#202e59'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "pt-6 px-6 text-white font-mono text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 3
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "text-gray-600 font-bold text-xs uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, "Request"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, "GET:"), " http://example.com/events/80"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, "Accept:"), " text/html, application/xhtml+xml"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "mt-8 text-gray-600 font-bold text-xs uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, "Response"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, "HTTP/1.1 200 OK"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, "Content-Type:"), " text/html; charset=utf-8")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Code__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "p-6 leading-normal",
    language: "html",
    mdxType: "Code",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 3
    }
  }, dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mdxType: "Notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, "\u0425\u043E\u0442\u044F \u043F\u0435\u0440\u0432\u043E\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u043C \u043E\u0442\u0432\u0435\u0442\u043E\u043C \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F HTML, Inertia \u043D\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B JavaScript \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, "Inertia-\u043E\u0442\u0432\u0435\u0442\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0441\u043B\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F Inertia \u0432\u0441\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u043A \u0441\u0430\u0439\u0442\u0443 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u044E\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 XHR \u0441\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u043C \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u043C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 126
    }
  }, "X-Inertia"), ", \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044B\u043C \u0432 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 210
    }
  }, "true"), ". \u042D\u0442\u043E\u0442 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u0447\u0442\u043E \u0437\u0430\u043F\u0440\u043E\u0441 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u0435\u0442 Inertia, \u0430 \u043D\u0435 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u043C \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0435\u043C \u043F\u043E\u043B\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, "\u041A\u043E\u0433\u0434\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0438\u0432\u0430\u0435\u0442 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 48
    }
  }, "X-Inertia"), ", \u0432\u043C\u0435\u0441\u0442\u043E \u043E\u0442\u0432\u0435\u0442\u0430 \u043F\u043E\u043B\u043D\u044B\u043C HTML-\u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u043C \u043E\u043D \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043E\u0442\u0432\u0435\u0442 JSON \u0441 \u0437\u0430\u043A\u043E\u0434\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "#%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%8B"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 186
    }
  }), "\u043E\u0431\u044A\u0435\u043A\u0442\u043E\u043C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "rounded overflow-hidden",
    style: {
      background: '#202e59'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "pt-6 px-6 text-white font-mono text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 3
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "text-gray-600 font-bold text-xs uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, "Request"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, "GET:"), " http://example.com/events/80"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }
  }, "Accept:"), " text/html, application/xhtml+xml"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, "X-Requested-With:"), " XMLHttpRequest"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, "X-Inertia:"), " true"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, "X-Inertia-Version:"), " 6b16b94d7c51cbe5b1fa42aac98241d5"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "mt-8 text-gray-600 font-bold text-xs uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, "Response"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }, "HTTP/1.1 200 OK"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, "Content-Type:"), " application/json"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, "Vary:"), " Accept"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, "X-Inertia:"), " true")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Code__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "p-6 leading-normal",
    language: "json",
    mdxType: "Code",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 3
    }
  }, dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2()))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 5
    }
  }, "\u041E\u0431\u044A\u0435\u043A\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 5
    }
  }, "Inertia \u043E\u0431\u043C\u0435\u043D\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u043C\u0435\u0436\u0434\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C \u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C \u0447\u0435\u0440\u0435\u0437 \u043E\u0431\u044A\u0435\u043A\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u042D\u0442\u043E\u0442 \u043E\u0431\u044A\u0435\u043A\u0442 \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u044F \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0443\u044E \u0434\u043B\u044F \u0432\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0438 \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u0432\u0435\u0440\u0441\u0438\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430 \u0441\u0430\u0439\u0442\u0430. \u041E\u0431\u044A\u0435\u043A\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0447\u0435\u0442\u044B\u0440\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ol", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 27
    }
  }, "component"), ": \u0418\u043C\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B JavaScript."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 27
    }
  }, "props"), ": \u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B (\u0434\u0430\u043D\u043D\u044B\u0435)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 27
    }
  }, "url"), ": URL-\u0430\u0434\u0440\u0435\u0441 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
    parentName: "ol",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("strong", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 27
    }
  }, "version"), ": \u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 5
    }
  }, "\u041F\u0440\u0438 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0445 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F\u0445 \u043F\u043E\u043B\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043E\u0431\u044A\u0435\u043A\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043A\u043E\u0434\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 JSON \u0432 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 108
    }
  }, "data-page"), " \u0432 \u043A\u043E\u0440\u043D\u0435\u0432\u043E\u043C \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 186
    }
  }, "<div>"), ". \u041F\u0440\u0438 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438 Inertia \u043E\u0431\u044A\u0435\u043A\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043F\u043E\u043B\u0435\u0437\u043D\u043E\u0439 \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0438 JSON."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 5
    }
  }, "\u0412\u0435\u0440\u0441\u0438\u043E\u043D\u043D\u043E\u0441\u0442\u044C \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 5
    }
  }, "\u041E\u0434\u043D\u0430 \u0438\u0437 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0441 \u043E\u0434\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u043C\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C\u0438 - \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432 \u0441\u0430\u0439\u0442\u0430, \u043A\u043E\u0433\u0434\u0430 \u043E\u043D\u0438 \u0431\u044B\u043B\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u044B. Inertia \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u044D\u0442\u043E \u0437\u0430 \u0441\u0447\u0435\u0442 \u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u0442\u0435\u043A\u0443\u0449\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432 \u0441\u0430\u0439\u0442\u0430. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0430\u043A\u0442\u0438\u0432\u0430 Inertia \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442 \u0436\u0435\u0441\u0442\u043A\u043E\u0435 (\u043F\u043E\u043B\u043D\u043E\u0435) \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0432\u043C\u0435\u0441\u0442\u043E \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F XHR."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 5
    }
  }, "\u0412 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "#%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%8B"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 14
    }
  }), "\u043E\u0431\u044A\u0435\u043A\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"), " \u0432\u043A\u043B\u044E\u0447\u0435\u043D \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0432\u0435\u0440\u0441\u0438\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 67
    }
  }, "version"), ". This version identifier is set server-side, and can be a number, string, file hash, whatever. It doesn't matter, as long as it changes when the site's assets have been updated."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 5
    }
  }, "Whenever an Inertia request is made, Inertia will include the current asset version in the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 103
    }
  }, "X-Inertia-Version"), " header. When the server receives the request, it compares the asset version provided in the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 261
    }
  }, "X-Inertia-Version"), " header with the current asset version. This is typically handled in a middleware layer."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 5
    }
  }, "If the asset versions are the same, the request simply continues as expected. However, if they are different, the server immediately returns a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 155
    }
  }, "409 Conflict"), " response, and includes the URL in a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 252
    }
  }, "X-Inertia-Location"), " header. This header is necessary, since server-side redirects may have occurred. This tells Inertia what the final intended destination URL is."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 5
    }
  }, "Note, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 18
    }
  }, "409 Conflict"), " responses are only sent for ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 107
    }
  }, "GET"), " requests, and not for ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 181
    }
  }, "POST/PUT/PATCH/DELETE"), " requests. That said, they will be sent in the event that a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 310
    }
  }, "GET"), " redirect occurs after one of these requests."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 5
    }
  }, "Finally, in the event that flash session data exists when a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 72
    }
  }, "409 Conflict"), " response occurs, the server will automatically reflash this data."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "rounded overflow-hidden",
    style: {
      background: '#202e59'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "p-6 text-white font-mono text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 3
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "text-gray-600 font-bold text-xs uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 5
    }
  }, "Request"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, "GET:"), " http://example.com/events/80"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 7
    }
  }, "Accept:"), " text/html, application/xhtml+xml"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }, "X-Requested-With:"), " XMLHttpRequest"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }, "X-Inertia:"), " true"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }
  }, "X-Inertia-Version:"), " 6b16b94d7c51cbe5b1fa42aac98241d5"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "mt-8 text-gray-600 font-bold text-xs uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 5
    }
  }, "Response"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 5
    }
  }, "409: Conflict"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }, "X-Inertia-Location:"), " http://example.com/events/80"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 5
    }
  }, "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 5
    }
  }, "When making Inertia requests, the partial reloads option allows you to request a subset of the props (data) from the server on subsequent visits to the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("em", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 164
    }
  }, "same"), " page component. This can be a helpful performance optimization if it's acceptable that some page data becomes stale."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 5
    }
  }, "When a partial reload request is made, Inertia includes two additional headers with the request: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 109
    }
  }, "X-Inertia-Partial-Data"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 184
    }
  }, "X-Inertia-Partial-Component"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 16
    }
  }, "X-Inertia-Partial-Data"), " header is a comma separated list of the desired props (data) keys that should be returned."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 5
    }
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 16
    }
  }, "X-Inertia-Partial-Component"), " header includes the name of the component that is being partially reloaded. This is necessary, since partial reloads only work for requests made to the same page component. If the final destination is different for whatever reason (eg. the user was logged out and is now on the login page), then no partial reloading will occur."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "rounded overflow-hidden",
    style: {
      background: '#202e59'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "pt-6 px-6 text-white font-mono text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 3
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "text-gray-600 font-bold text-xs uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 5
    }
  }, "Request"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }
  }, "GET:"), " http://example.com/events"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 7
    }
  }, "Accept:"), " text/html, application/xhtml+xml"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }
  }, "X-Requested-With:"), " XMLHttpRequest"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }
  }, "X-Inertia:"), " true"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 7
    }
  }, "X-Inertia-Version:"), " 6b16b94d7c51cbe5b1fa42aac98241d5"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 7
    }
  }, "X-Inertia-Partial-Data:"), " events"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }
  }, "X-Inertia-Partial-Component:"), " Events"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "mt-8 text-gray-600 font-bold text-xs uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }, "Response"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "mt-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 5
    }
  }, "HTTP/1.1 200 OK"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("span", {
    className: "text-blue-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 7
    }
  }, "Content-Type:"), " application/json")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Code__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "p-6 leading-normal",
    language: "json",
    mdxType: "Code",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 3
    }
  }, dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3()))));
}
_c = MDXContent;
;
MDXContent.isMDXComponent = true;

var _c;

$RefreshReg$(_c, "MDXContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGhlLXByb3RvY29sLm1keCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJsaW5rcyIsInVybCIsIm5hbWUiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIkxheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJiYWNrZ3JvdW5kIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsVUFEVztBQUVsQkMsT0FBSyxFQUFFLENBQUM7QUFDTkMsT0FBRyxFQUFFLGNBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxpQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLGtCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsd0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSSxFQVlKO0FBQ0RELE9BQUcsRUFBRSx5QkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVpJO0FBRlcsQ0FBYjtBQW9CUCxJQUFNQyxXQUFXLEdBQUc7QUFDbEJMLE1BQUksRUFBSkE7QUFEa0IsQ0FBcEI7QUFHQSxJQUFNTSxTQUFTLEdBQUdDLDBEQUFsQjtBQUVlLFNBQVNDLFVBQVQsT0FHWjtBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVDLEtBQ0Y7O0FBQ0QsU0FBTywwREFBQyxTQUFELHlGQUFlTCxXQUFmLEVBQWdDSyxLQUFoQztBQUF1QyxjQUFVLEVBQUVELFVBQW5EO0FBQStELFdBQU8sRUFBQyxXQUF2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REYsWUFqQkYsRUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREYsWUFwQkYsRUF1QkU7QUFBSyxhQUFTLEVBQUMsZ0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2QkYsRUF3QkU7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXhCRixFQXlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixzQkF6QkYsQ0FIRSxFQWdDRiwwREFBQyx3REFBRDtBQUFNLGFBQVMsRUFBQyxvQkFBaEI7QUFBcUMsWUFBUSxFQUFDLE1BQTlDO0FBQXFELFdBQU8sRUFBQyxNQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLGdEQURILHFCQWhDRSxDQXZKSyxDQUFQO0FBdU1EO0tBM011QkosVTtBQTZNeEI7QUFDQUEsVUFBVSxDQUFDSyxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RoZS1wcm90b2NvbC42YTUyMjJmN2YyMzczNzM3NmMwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IE5vdGljZSBmcm9tICcuLi9jb21wb25lbnRzL05vdGljZSdcbmltcG9ydCBDb2RlIGZyb20gJy4uL2NvbXBvbmVudHMvQ29kZSdcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9Cf0YDQvtGC0L7QutC+0LsnLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcjaHRtbC3QvtGC0LLQtdGC0YsnLFxuICAgIG5hbWU6ICdIVE1MLdC+0YLQstC10YLRiydcbiAgfSwge1xuICAgIHVybDogJyNpbmVydGlhLdC+0YLQstC10YLRiycsXG4gICAgbmFtZTogJ0luZXJ0aWEt0L7RgtCy0LXRgtGLJ1xuICB9LCB7XG4gICAgdXJsOiAnI9C+0LHRitC10LrRgi3RgdGC0YDQsNC90LjRhtGLJyxcbiAgICBuYW1lOiAn0J7QsdGK0LXQutGCINGB0YLRgNCw0L3QuNGG0YsnXG4gIH0sIHtcbiAgICB1cmw6ICcj0LLQtdGA0YHQuNC+0L3QvdC+0YHRgtGMLdGA0LXRgdGD0YDRgdC+0LInLFxuICAgIG5hbWU6ICfQktC10YDRgdC40L7QvdC90L7RgdGC0Ywg0YDQtdGB0YPRgNGB0L7QsidcbiAgfSwge1xuICAgIHVybDogJyPRh9Cw0YHRgtC40YfQvdGL0LUt0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutC4JyxcbiAgICBuYW1lOiAn0KfQsNGB0YLQuNGH0L3Ri9C1INC/0LXRgNC10LfQsNCz0YDRg9C30LrQuCdcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCf0YDQvtGC0L7QutC+0LtgfTwvaDE+XG4gICAgPHA+e2DQndC40LbQtSDQv9GA0LjQstC10LTQtdC90LAg0L/QvtC00YDQvtCx0L3QsNGPINGB0L/QtdGG0LjRhNC40LrQsNGG0LjRjyDQv9GA0L7RgtC+0LrQvtC70LAgSW5lcnRpYS4g0KHQvdCw0YfQsNC70LAg0L7Qt9C90LDQutC+0LzRjNGC0LXRgdGMINGB0L4g0YHRgtGA0LDQvdC40YbQtdC5IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvaG93LWl0LXdvcmtzXCJcbiAgICAgIH19Pntg0LrQsNC6INGN0YLQviDRgNCw0LHQvtGC0LDQtdGCYH08L2E+e2Ag0LTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQvtCx0YnQtdCz0L4g0L/RgNC10LTRgdGC0LDQstC70LXQvdC40LUuYH08L3A+XG4gICAgPGgyPntgSFRNTC3QvtGC0LLQtdGC0YtgfTwvaDI+XG4gICAgPHA+e2DQodCw0LzRi9C5INC/0LXRgNCy0YvQuSDQt9Cw0L/RgNC+0YEg0Log0L/RgNC40LvQvtC20LXQvdC40Y4gSW5lcnRpYSAtINGN0YLQviDQvtCx0YvRh9C90YvQuSDQv9C+0LvQvdC+0YTRg9C90LrRhtC40L7QvdCw0LvRjNC90YvQuSDQt9Cw0L/RgNC+0YEg0LHRgNCw0YPQt9C10YDQsCDQsdC10Lcg0YHQv9C10YbQuNCw0LvRjNC90YvRhSDQt9Cw0LPQvtC70L7QstC60L7QsiDQuNC70Lgg0LTQsNC90L3Ri9GFIEluZXJ0aWEuINCU0LvRjyDRjdGC0LjRhSDQt9Cw0L/RgNC+0YHQvtCyINGB0LXRgNCy0LXRgCDQstC+0LfQstGA0LDRidCw0LXRgiDQv9C+0LvQvdGL0LkgSFRNTC3QtNC+0LrRg9C80LXQvdGCLmB9PC9wPlxuICAgIDxwPntg0K3RgtC+0YIgSFRNTC3QvtGC0LLQtdGCINCy0LrQu9GO0YfQsNC10YIg0YDQtdGB0YPRgNGB0Ysg0YHQsNC50YLQsCAoQ1NTLCBKYXZhU2NyaXB0KSwg0LAg0YLQsNC60LbQtSDQutC+0YDQvdC10LLQvtC5INGN0LvQtdC80LXQvdGCIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDxkaXY+YH08L2lubGluZUNvZGU+e2Ag0LIg0YLQtdC70LUuINCa0L7RgNC90LXQstC+0Lkg0Y3Qu9C10LzQtdC90YIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgPGRpdj5gfTwvaW5saW5lQ29kZT57YCDRgdC70YPQttC40YIg0YLQvtGH0LrQvtC5INC80L7QvdGC0LjRgNC+0LLQsNC90LjRjyDQtNC70Y8g0LrQu9C40LXQvdGC0YHQutC+0LPQviDQv9GA0LjQu9C+0LbQtdC90LjRjyDQuCDQstC60LvRjtGH0LDQtdGCINCw0YLRgNC40LHRg9GCIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGRhdGEtcGFnZWB9PC9pbmxpbmVDb2RlPntgINGBINC30LDQutC+0LTQuNGA0L7QstCw0L3QvdGL0Lwg0LIgSlNPTiBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiIyVEMCVCRSVEMCVCMSVEMSU4QSVEMCVCNSVEMCVCQSVEMSU4Mi0lRDElODElRDElODIlRDElODAlRDAlQjAlRDAlQkQlRDAlQjglRDElODYlRDElOEJcIlxuICAgICAgfX0+e2DQvtCx0YrQtdC60YIg0YHRgtGA0LDQvdC40YbRi2B9PC9hPntgINC00LvRjyDQvdCw0YfQsNC70YzQvdC+0Lkg0YHRgtGA0LDQvdC40YbRiy4gSW5lcnRpYSDQuNGB0L/QvtC70YzQt9GD0LXRgiDRjdGC0YMg0LjQvdGE0L7RgNC80LDRhtC40Y4g0LTQu9GPINC30LDQs9GA0YPQt9C60Lgg0JLQsNGI0LXQuSDQutC70LjQtdC90YLRgdC60L7QuSDRgdGA0LXQtNGLINC4INC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0LrQvtC80L/QvtC90LXQvdGC0LAg0L3QsNGH0LDQu9GM0L3QvtC5INGB0YLRgNCw0L3QuNGG0YsuYH08L3A+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIG92ZXJmbG93LWhpZGRlblwiIHN0eWxlPXt7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzIwMmU1OSdcbiAgICB9fT5cbiAgPGRpdiBjbGFzc05hbWU9XCJwdC02IHB4LTYgdGV4dC13aGl0ZSBmb250LW1vbm8gdGV4dC1zbVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBmb250LWJvbGQgdGV4dC14cyB1cHBlcmNhc2VcIj5SZXF1ZXN0PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+R0VUOjwvc3Bhbj4gaHR0cDovL2V4YW1wbGUuY29tL2V2ZW50cy84MFxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+QWNjZXB0Ojwvc3Bhbj4gdGV4dC9odG1sLCBhcHBsaWNhdGlvbi94aHRtbCt4bWxcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggdGV4dC1ncmF5LTYwMCBmb250LWJvbGQgdGV4dC14cyB1cHBlcmNhc2VcIj5SZXNwb25zZTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPkhUVFAvMS4xIDIwMCBPSzwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+Q29udGVudC1UeXBlOjwvc3Bhbj4gdGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8Q29kZSBjbGFzc05hbWU9XCJwLTYgbGVhZGluZy1ub3JtYWxcIiBsYW5ndWFnZT1cImh0bWxcIiBtZHhUeXBlPVwiQ29kZVwiPlxuICAgIHtkZWRlbnRgXG4gICAgICA8aHRtbD5cbiAgICAgIDxoZWFkPlxuICAgICAgICAgIDx0aXRsZT7QnNC+0LUg0L/RgNC40LvQvtC20LXQvdC40LU8L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCIvY3NzL2FwcC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCI+XG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCIvanMvYXBwLmpzXCIgZGVmZXI+PC9zY3JpcHQ+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cXG5cbiAgICAgIDxkaXYgaWQ9XCJhcHBcIiBkYXRhLXBhZ2U9J3tcImNvbXBvbmVudFwiOlwiRXZlbnRcIixcInByb3BzXCI6e1wiZXZlbnRcIjp7XCJpZFwiOjgwLFwidGl0bGVcIjpcIkJpcnRoZGF5IHBhcnR5XCIsXCJzdGFydF9kYXRlXCI6XCIyMDE5LTA2LTAyXCIsXCJkZXNjcmlwdGlvblwiOlwiQ29tZSBvdXQgYW5kIGNlbGVicmF0ZSBKb25hdGhhbiZhcG9zO3MgMzZ0aCBiaXJ0aGRheSBwYXJ0eSFcIn19LFwidXJsXCI6XCIvZXZlbnRzLzgwXCIsXCJ2ZXJzaW9uXCI6XCJjMzJiOGU0OTY1ZjQxOGFkMTZlYWViYmExZDRlOTYwZlwifSc+PC9kaXY+XFxuXG4gICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgYH1cbiAgPC9Db2RlPlxuICAgIDwvZGl2PlxuICAgIDxOb3RpY2UgbWR4VHlwZT1cIk5vdGljZVwiPtCl0L7RgtGPINC/0LXRgNCy0L7QvdCw0YfQsNC70YzQvdGL0Lwg0L7RgtCy0LXRgtC+0Lwg0Y/QstC70Y/QtdGC0YHRjyBIVE1MLCBJbmVydGlhINC90LUg0L7RgtC+0LHRgNCw0LbQsNC10YIg0LrQvtC80L/QvtC90LXQvdGC0Ysg0YHRgtGA0LDQvdC40YbRiyBKYXZhU2NyaXB0INC90LAg0YHRgtC+0YDQvtC90LUg0YHQtdGA0LLQtdGA0LAuPC9Ob3RpY2U+XG4gICAgPGgyPntgSW5lcnRpYS3QvtGC0LLQtdGC0YtgfTwvaDI+XG4gICAgPHA+e2DQn9C+0YHQu9C1INC30LDQs9GA0YPQt9C60Lgg0L/RgNC40LvQvtC20LXQvdC40Y8gSW5lcnRpYSDQstGB0LUg0L/QvtGB0LvQtdC00YPRjtGJ0LjQtSDQt9Cw0L/RgNC+0YHRiyDQuiDRgdCw0LnRgtGDINCy0YvQv9C+0LvQvdGP0Y7RgtGB0Y8g0YfQtdGA0LXQtyBYSFIg0YHQviDRgdC/0LXRhtC40LDQu9GM0L3Ri9C8INC30LDQs9C+0LvQvtCy0LrQvtC8IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFgtSW5lcnRpYWB9PC9pbmxpbmVDb2RlPntgLCDRg9GB0YLQsNC90L7QstC70LXQvdC90YvQvCDQsiDQt9C90LDRh9C10L3QuNC1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHRydWVgfTwvaW5saW5lQ29kZT57YC4g0K3RgtC+0YIg0LfQsNCz0L7Qu9C+0LLQvtC6INGD0LrQsNC30YvQstCw0LXRgiwg0YfRgtC+INC30LDQv9GA0L7RgSDQstGL0L/QvtC70L3Rj9C10YIgSW5lcnRpYSwg0LAg0L3QtSDRgdGC0LDQvdC00LDRgNGC0L3Ri9C8INC/0L7RgdC10YnQtdC90LjQtdC8INC/0L7Qu9C90L7QuSDRgdGC0YDQsNC90LjRhtGLLmB9PC9wPlxuICAgIDxwPntg0JrQvtCz0LTQsCDRgdC10YDQstC10YAg0L7QsdC90LDRgNGD0LbQuNCy0LDQtdGCINC30LDQs9C+0LvQvtCy0L7QuiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BYLUluZXJ0aWFgfTwvaW5saW5lQ29kZT57YCwg0LLQvNC10YHRgtC+INC+0YLQstC10YLQsCDQv9C+0LvQvdGL0LwgSFRNTC3QtNC+0LrRg9C80LXQvdGC0L7QvCDQvtC9INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC+0YLQstC10YIgSlNPTiDRgSDQt9Cw0LrQvtC00LjRgNC+0LLQsNC90L3Ri9C8IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIjJUQwJUJFJUQwJUIxJUQxJThBJUQwJUI1JUQwJUJBJUQxJTgyLSVEMSU4MSVEMSU4MiVEMSU4MCVEMCVCMCVEMCVCRCVEMCVCOCVEMSU4NiVEMSU4QlwiXG4gICAgICB9fT57YNC+0LHRitC10LrRgtC+0Lwg0YHRgtGA0LDQvdC40YbRi2B9PC9hPntgLmB9PC9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBvdmVyZmxvdy1oaWRkZW5cIiBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZDogJyMyMDJlNTknXG4gICAgfX0+XG4gIDxkaXYgY2xhc3NOYW1lPVwicHQtNiBweC02IHRleHQtd2hpdGUgZm9udC1tb25vIHRleHQtc21cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgZm9udC1ib2xkIHRleHQteHMgdXBwZXJjYXNlXCI+UmVxdWVzdDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPkdFVDo8L3NwYW4+IGh0dHA6Ly9leGFtcGxlLmNvbS9ldmVudHMvODBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPkFjY2VwdDo8L3NwYW4+IHRleHQvaHRtbCwgYXBwbGljYXRpb24veGh0bWwreG1sXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5YLVJlcXVlc3RlZC1XaXRoOjwvc3Bhbj4gWE1MSHR0cFJlcXVlc3RcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtSW5lcnRpYTo8L3NwYW4+IHRydWVcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtSW5lcnRpYS1WZXJzaW9uOjwvc3Bhbj4gNmIxNmI5NGQ3YzUxY2JlNWIxZmE0MmFhYzk4MjQxZDVcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggdGV4dC1ncmF5LTYwMCBmb250LWJvbGQgdGV4dC14cyB1cHBlcmNhc2VcIj5SZXNwb25zZTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPkhUVFAvMS4xIDIwMCBPSzwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+Q29udGVudC1UeXBlOjwvc3Bhbj4gYXBwbGljYXRpb24vanNvblxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+VmFyeTo8L3NwYW4+IEFjY2VwdFxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1JbmVydGlhOjwvc3Bhbj4gdHJ1ZVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPENvZGUgY2xhc3NOYW1lPVwicC02IGxlYWRpbmctbm9ybWFsXCIgbGFuZ3VhZ2U9XCJqc29uXCIgbWR4VHlwZT1cIkNvZGVcIj5cbiAgICB7ZGVkZW50YFxuICAgICAge1xuICAgICAgICBcImNvbXBvbmVudFwiOiBcIkV2ZW50XCIsXG4gICAgICAgIFwicHJvcHNcIjoge1xuICAgICAgICAgIFwiZXZlbnRcIjoge1xuICAgICAgICAgICAgXCJpZFwiOiA4MCxcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJCaXJ0aGRheSBwYXJ0eVwiLFxuICAgICAgICAgICAgXCJzdGFydF9kYXRlXCI6IFwiMjAxOS0wNi0wMlwiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNvbWUgb3V0IGFuZCBjZWxlYnJhdGUgSm9uYXRoYW4ncyAzNnRoIGJpcnRoZGF5IHBhcnR5IVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInVybFwiOiBcIi9ldmVudHMvODBcIixcbiAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiYzMyYjhlNDk2NWY0MThhZDE2ZWFlYmJhMWQ0ZTk2MGZcIlxuICAgICAgfVxuICAgIGB9XG4gIDwvQ29kZT5cbiAgICA8L2Rpdj5cbiAgICA8aDI+e2DQntCx0YrQtdC60YIg0YHRgtGA0LDQvdC40YbRi2B9PC9oMj5cbiAgICA8cD57YEluZXJ0aWEg0L7QsdC80LXQvdC40LLQsNC10YLRgdGPINC00LDQvdC90YvQvNC4INC80LXQttC00YMg0YHQtdGA0LLQtdGA0L7QvCDQuCDQutC70LjQtdC90YLQvtC8INGH0LXRgNC10Lcg0L7QsdGK0LXQutGCINGB0YLRgNCw0L3QuNGG0YsuINCt0YLQvtGCINC+0LHRitC10LrRgiDQstC60LvRjtGH0LDQtdGCINCyINGB0LXQsdGPINC90LXQvtCx0YXQvtC00LjQvNGD0Y4g0LjQvdGE0L7RgNC80LDRhtC40Y4sINC90LXQvtCx0YXQvtC00LjQvNGD0Y4g0LTQu9GPINCy0LjQt9GD0LDQu9C40LfQsNGG0LjQuCDQutC+0LzQv9C+0L3QtdC90YLQsCDRgdGC0YDQsNC90LjRhtGLLCDQvtCx0L3QvtCy0LvQtdC90LjRjyDRgdC+0YHRgtC+0Y/QvdC40Y8g0LjRgdGC0L7RgNC40Lgg0Lgg0L7RgtGB0LvQtdC20LjQstCw0L3QuNGPINCy0LXRgNGB0LjQuCDRgNC10YHRg9GA0YHQsCDRgdCw0LnRgtCwLiDQntCx0YrQtdC60YIg0YHRgtGA0LDQvdC40YbRiyDQstC60LvRjtGH0LDQtdGCINGB0LvQtdC00YPRjtGJ0LjQtSDRh9C10YLRi9GA0LUg0YHQstC+0LnRgdGC0LLQsDpgfTwvcD5cbiAgICA8b2w+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cIm9sXCI+PHN0cm9uZyBwYXJlbnROYW1lPVwibGlcIj57YGNvbXBvbmVudGB9PC9zdHJvbmc+e2A6INCY0LzRjyDQutC+0LzQv9C+0L3QtdC90YLQsCDRgdGC0YDQsNC90LjRhtGLIEphdmFTY3JpcHQuYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJvbFwiPjxzdHJvbmcgcGFyZW50TmFtZT1cImxpXCI+e2Bwcm9wc2B9PC9zdHJvbmc+e2A6INCg0LXQutCy0LjQt9C40YLRiyDRgdGC0YDQsNC90LjRhtGLICjQtNCw0L3QvdGL0LUpLmB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwib2xcIj48c3Ryb25nIHBhcmVudE5hbWU9XCJsaVwiPntgdXJsYH08L3N0cm9uZz57YDogVVJMLdCw0LTRgNC10YEg0YHRgtGA0LDQvdC40YbRiy5gfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cIm9sXCI+PHN0cm9uZyBwYXJlbnROYW1lPVwibGlcIj57YHZlcnNpb25gfTwvc3Ryb25nPntgOiDQotC10LrRg9GJ0LDRjyDQstC10YDRgdC40Y8g0YDQtdGB0YPRgNGB0L7Qsi5gfTwvbGk+XG4gICAgPC9vbD5cbiAgICA8cD57YNCf0YDQuCDRgdGC0LDQvdC00LDRgNGC0L3Ri9GFINC/0L7RgdC10YnQtdC90LjRj9GFINC/0L7Qu9C90L7QuSDRgdGC0YDQsNC90LjRhtGLINC+0LHRitC10LrRgiDRgdGC0YDQsNC90LjRhtGLINC60L7QtNC40YDRg9C10YLRgdGPINCyINGE0L7RgNC80LDRgtC1IEpTT04g0LIg0LDRgtGA0LjQsdGD0YLQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BkYXRhLXBhZ2VgfTwvaW5saW5lQ29kZT57YCDQsiDQutC+0YDQvdC10LLQvtC8INC60LDRgtCw0LvQvtCz0LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgPGRpdj5gfTwvaW5saW5lQ29kZT57YC4g0J/RgNC4INC/0L7RgdC10YnQtdC90LjQuCBJbmVydGlhINC+0LHRitC10LrRgiDRgdGC0YDQsNC90LjRhtGLINCy0L7Qt9Cy0YDQsNGJ0LDQtdGC0YHRjyDQsiDQutCw0YfQtdGB0YLQstC1INC/0L7Qu9C10LfQvdC+0Lkg0L3QsNCz0YDRg9C30LrQuCBKU09OLmB9PC9wPlxuICAgIDxoMj57YNCS0LXRgNGB0LjQvtC90L3QvtGB0YLRjCDRgNC10YHRg9GA0YHQvtCyYH08L2gyPlxuICAgIDxwPntg0J7QtNC90LAg0LjQtyDRgNCw0YHQv9GA0L7RgdGC0YDQsNC90LXQvdC90YvRhSDQv9GA0L7QsdC70LXQvCDRgSDQvtC00L3QvtGB0YLRgNCw0L3QuNGH0L3Ri9C80Lgg0L/RgNC40LvQvtC20LXQvdC40Y/QvNC4IC0g0L7QsdC90L7QstC70LXQvdC40LUg0YDQtdGB0YPRgNGB0L7QsiDRgdCw0LnRgtCwLCDQutC+0LPQtNCwINC+0L3QuCDQsdGL0LvQuCDQuNC30LzQtdC90LXQvdGLLiBJbmVydGlhINGD0L/RgNC+0YnQsNC10YIg0Y3RgtC+INC30LAg0YHRh9C10YIg0L3QtdC+0LHRj9C30LDRgtC10LvRjNC90L7Qs9C+INC+0YLRgdC70LXQttC40LLQsNC90LjRjyDRgtC10LrRg9GJ0LXQuSDQstC10YDRgdC40Lgg0YDQtdGB0YPRgNGB0L7QsiDRgdCw0LnRgtCwLiDQkiDRgdC70YPRh9Cw0LUg0LjQt9C80LXQvdC10L3QuNGPINCw0LrRgtC40LLQsCBJbmVydGlhINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INCy0YvQv9C+0LvQvdC40YIg0LbQtdGB0YLQutC+0LUgKNC/0L7Qu9C90L7QtSkg0L/QvtGB0LXRidC10L3QuNC1INGB0YLRgNCw0L3QuNGG0Ysg0LLQvNC10YHRgtC+INC/0L7RgdC10YnQtdC90LjRjyBYSFIuYH08L3A+XG4gICAgPHA+e2DQkiBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiIyVEMCVCRSVEMCVCMSVEMSU4QSVEMCVCNSVEMCVCQSVEMSU4Mi0lRDElODElRDElODIlRDElODAlRDAlQjAlRDAlQkQlRDAlQjglRDElODYlRDElOEJcIlxuICAgICAgfX0+e2DQvtCx0YrQtdC60YIg0YHRgtGA0LDQvdC40YbRi2B9PC9hPntgINCy0LrQu9GO0YfQtdC9INC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINCy0LXRgNGB0LjQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B2ZXJzaW9uYH08L2lubGluZUNvZGU+e2AuIFRoaXMgdmVyc2lvbiBpZGVudGlmaWVyIGlzIHNldCBzZXJ2ZXItc2lkZSwgYW5kIGNhbiBiZSBhIG51bWJlciwgc3RyaW5nLCBmaWxlIGhhc2gsIHdoYXRldmVyLiBJdCBkb2Vzbid0IG1hdHRlciwgYXMgbG9uZyBhcyBpdCBjaGFuZ2VzIHdoZW4gdGhlIHNpdGUncyBhc3NldHMgaGF2ZSBiZWVuIHVwZGF0ZWQuYH08L3A+XG4gICAgPHA+e2BXaGVuZXZlciBhbiBJbmVydGlhIHJlcXVlc3QgaXMgbWFkZSwgSW5lcnRpYSB3aWxsIGluY2x1ZGUgdGhlIGN1cnJlbnQgYXNzZXQgdmVyc2lvbiBpbiB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhLVZlcnNpb25gfTwvaW5saW5lQ29kZT57YCBoZWFkZXIuIFdoZW4gdGhlIHNlcnZlciByZWNlaXZlcyB0aGUgcmVxdWVzdCwgaXQgY29tcGFyZXMgdGhlIGFzc2V0IHZlcnNpb24gcHJvdmlkZWQgaW4gdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFgtSW5lcnRpYS1WZXJzaW9uYH08L2lubGluZUNvZGU+e2AgaGVhZGVyIHdpdGggdGhlIGN1cnJlbnQgYXNzZXQgdmVyc2lvbi4gVGhpcyBpcyB0eXBpY2FsbHkgaGFuZGxlZCBpbiBhIG1pZGRsZXdhcmUgbGF5ZXIuYH08L3A+XG4gICAgPHA+e2BJZiB0aGUgYXNzZXQgdmVyc2lvbnMgYXJlIHRoZSBzYW1lLCB0aGUgcmVxdWVzdCBzaW1wbHkgY29udGludWVzIGFzIGV4cGVjdGVkLiBIb3dldmVyLCBpZiB0aGV5IGFyZSBkaWZmZXJlbnQsIHRoZSBzZXJ2ZXIgaW1tZWRpYXRlbHkgcmV0dXJucyBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDQwOSBDb25mbGljdGB9PC9pbmxpbmVDb2RlPntgIHJlc3BvbnNlLCBhbmQgaW5jbHVkZXMgdGhlIFVSTCBpbiBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFgtSW5lcnRpYS1Mb2NhdGlvbmB9PC9pbmxpbmVDb2RlPntgIGhlYWRlci4gVGhpcyBoZWFkZXIgaXMgbmVjZXNzYXJ5LCBzaW5jZSBzZXJ2ZXItc2lkZSByZWRpcmVjdHMgbWF5IGhhdmUgb2NjdXJyZWQuIFRoaXMgdGVsbHMgSW5lcnRpYSB3aGF0IHRoZSBmaW5hbCBpbnRlbmRlZCBkZXN0aW5hdGlvbiBVUkwgaXMuYH08L3A+XG4gICAgPHA+e2BOb3RlLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A0MDkgQ29uZmxpY3RgfTwvaW5saW5lQ29kZT57YCByZXNwb25zZXMgYXJlIG9ubHkgc2VudCBmb3IgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgR0VUYH08L2lubGluZUNvZGU+e2AgcmVxdWVzdHMsIGFuZCBub3QgZm9yIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFBPU1QvUFVUL1BBVENIL0RFTEVURWB9PC9pbmxpbmVDb2RlPntgIHJlcXVlc3RzLiBUaGF0IHNhaWQsIHRoZXkgd2lsbCBiZSBzZW50IGluIHRoZSBldmVudCB0aGF0IGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgR0VUYH08L2lubGluZUNvZGU+e2AgcmVkaXJlY3Qgb2NjdXJzIGFmdGVyIG9uZSBvZiB0aGVzZSByZXF1ZXN0cy5gfTwvcD5cbiAgICA8cD57YEZpbmFsbHksIGluIHRoZSBldmVudCB0aGF0IGZsYXNoIHNlc3Npb24gZGF0YSBleGlzdHMgd2hlbiBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDQwOSBDb25mbGljdGB9PC9pbmxpbmVDb2RlPntgIHJlc3BvbnNlIG9jY3VycywgdGhlIHNlcnZlciB3aWxsIGF1dG9tYXRpY2FsbHkgcmVmbGFzaCB0aGlzIGRhdGEuYH08L3A+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIG92ZXJmbG93LWhpZGRlblwiIHN0eWxlPXt7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzIwMmU1OSdcbiAgICB9fT5cbiAgPGRpdiBjbGFzc05hbWU9XCJwLTYgdGV4dC13aGl0ZSBmb250LW1vbm8gdGV4dC1zbVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBmb250LWJvbGQgdGV4dC14cyB1cHBlcmNhc2VcIj5SZXF1ZXN0PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+R0VUOjwvc3Bhbj4gaHR0cDovL2V4YW1wbGUuY29tL2V2ZW50cy84MFxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+QWNjZXB0Ojwvc3Bhbj4gdGV4dC9odG1sLCBhcHBsaWNhdGlvbi94aHRtbCt4bWxcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtUmVxdWVzdGVkLVdpdGg6PC9zcGFuPiBYTUxIdHRwUmVxdWVzdFxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1JbmVydGlhOjwvc3Bhbj4gdHJ1ZVxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1JbmVydGlhLVZlcnNpb246PC9zcGFuPiA2YjE2Yjk0ZDdjNTFjYmU1YjFmYTQyYWFjOTgyNDFkNVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhzIHVwcGVyY2FzZVwiPlJlc3BvbnNlPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+NDA5OiBDb25mbGljdDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1JbmVydGlhLUxvY2F0aW9uOjwvc3Bhbj4gaHR0cDovL2V4YW1wbGUuY29tL2V2ZW50cy84MFxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8aDI+e2DQp9Cw0YHRgtC40YfQvdGL0LUg0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutC4YH08L2gyPlxuICAgIDxwPntgV2hlbiBtYWtpbmcgSW5lcnRpYSByZXF1ZXN0cywgdGhlIHBhcnRpYWwgcmVsb2FkcyBvcHRpb24gYWxsb3dzIHlvdSB0byByZXF1ZXN0IGEgc3Vic2V0IG9mIHRoZSBwcm9wcyAoZGF0YSkgZnJvbSB0aGUgc2VydmVyIG9uIHN1YnNlcXVlbnQgdmlzaXRzIHRvIHRoZSBgfTxlbSBwYXJlbnROYW1lPVwicFwiPntgc2FtZWB9PC9lbT57YCBwYWdlIGNvbXBvbmVudC4gVGhpcyBjYW4gYmUgYSBoZWxwZnVsIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbiBpZiBpdCdzIGFjY2VwdGFibGUgdGhhdCBzb21lIHBhZ2UgZGF0YSBiZWNvbWVzIHN0YWxlLmB9PC9wPlxuICAgIDxwPntgV2hlbiBhIHBhcnRpYWwgcmVsb2FkIHJlcXVlc3QgaXMgbWFkZSwgSW5lcnRpYSBpbmNsdWRlcyB0d28gYWRkaXRpb25hbCBoZWFkZXJzIHdpdGggdGhlIHJlcXVlc3Q6IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFgtSW5lcnRpYS1QYXJ0aWFsLURhdGFgfTwvaW5saW5lQ29kZT57YCBhbmQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhLVBhcnRpYWwtQ29tcG9uZW50YH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHA+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhLVBhcnRpYWwtRGF0YWB9PC9pbmxpbmVDb2RlPntgIGhlYWRlciBpcyBhIGNvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIHRoZSBkZXNpcmVkIHByb3BzIChkYXRhKSBrZXlzIHRoYXQgc2hvdWxkIGJlIHJldHVybmVkLmB9PC9wPlxuICAgIDxwPntgVGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFgtSW5lcnRpYS1QYXJ0aWFsLUNvbXBvbmVudGB9PC9pbmxpbmVDb2RlPntgIGhlYWRlciBpbmNsdWRlcyB0aGUgbmFtZSBvZiB0aGUgY29tcG9uZW50IHRoYXQgaXMgYmVpbmcgcGFydGlhbGx5IHJlbG9hZGVkLiBUaGlzIGlzIG5lY2Vzc2FyeSwgc2luY2UgcGFydGlhbCByZWxvYWRzIG9ubHkgd29yayBmb3IgcmVxdWVzdHMgbWFkZSB0byB0aGUgc2FtZSBwYWdlIGNvbXBvbmVudC4gSWYgdGhlIGZpbmFsIGRlc3RpbmF0aW9uIGlzIGRpZmZlcmVudCBmb3Igd2hhdGV2ZXIgcmVhc29uIChlZy4gdGhlIHVzZXIgd2FzIGxvZ2dlZCBvdXQgYW5kIGlzIG5vdyBvbiB0aGUgbG9naW4gcGFnZSksIHRoZW4gbm8gcGFydGlhbCByZWxvYWRpbmcgd2lsbCBvY2N1ci5gfTwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuXCIgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmQ6ICcjMjAyZTU5J1xuICAgIH19PlxuICA8ZGl2IGNsYXNzTmFtZT1cInB0LTYgcHgtNiB0ZXh0LXdoaXRlIGZvbnQtbW9ubyB0ZXh0LXNtXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhzIHVwcGVyY2FzZVwiPlJlcXVlc3Q8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5HRVQ6PC9zcGFuPiBodHRwOi8vZXhhbXBsZS5jb20vZXZlbnRzXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5BY2NlcHQ6PC9zcGFuPiB0ZXh0L2h0bWwsIGFwcGxpY2F0aW9uL3hodG1sK3htbFxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1SZXF1ZXN0ZWQtV2l0aDo8L3NwYW4+IFhNTEh0dHBSZXF1ZXN0XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5YLUluZXJ0aWE6PC9zcGFuPiB0cnVlXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5YLUluZXJ0aWEtVmVyc2lvbjo8L3NwYW4+IDZiMTZiOTRkN2M1MWNiZTViMWZhNDJhYWM5ODI0MWQ1XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5YLUluZXJ0aWEtUGFydGlhbC1EYXRhOjwvc3Bhbj4gZXZlbnRzXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5YLUluZXJ0aWEtUGFydGlhbC1Db21wb25lbnQ6PC9zcGFuPiBFdmVudHNcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggdGV4dC1ncmF5LTYwMCBmb250LWJvbGQgdGV4dC14cyB1cHBlcmNhc2VcIj5SZXNwb25zZTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPkhUVFAvMS4xIDIwMCBPSzwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+Q29udGVudC1UeXBlOjwvc3Bhbj4gYXBwbGljYXRpb24vanNvblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPENvZGUgY2xhc3NOYW1lPVwicC02IGxlYWRpbmctbm9ybWFsXCIgbGFuZ3VhZ2U9XCJqc29uXCIgbWR4VHlwZT1cIkNvZGVcIj5cbiAgICB7ZGVkZW50YFxuICAgICAge1xuICAgICAgICBcImNvbXBvbmVudFwiOiBcIkV2ZW50c1wiLFxuICAgICAgICBcInByb3BzXCI6IHtcbiAgICAgICAgICBcImF1dGhcIjogey4uLn0sICAgICAgIC8vIE5PVCBpbmNsdWRlZFxuICAgICAgICAgIFwiY2F0ZWdvcmllc1wiOiBbLi4uXSwgLy8gTk9UIGluY2x1ZGVkXG4gICAgICAgICAgXCJldmVudHNcIjogWy4uLl0gICAgICAvLyBpbmNsdWRlZFxuICAgICAgICB9LFxuICAgICAgICBcInVybFwiOiBcIi9ldmVudHMvODBcIixcbiAgICAgICAgXCJ2ZXJzaW9uXCI6IFwiYzMyYjhlNDk2NWY0MThhZDE2ZWFlYmJhMWQ0ZTk2MGZcIlxuICAgICAgfVxuICAgIGB9XG4gIDwvQ29kZT5cbiAgICA8L2Rpdj5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=