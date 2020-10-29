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
  }), "\u043E\u0431\u044A\u0435\u043A\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"), " is a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 43
    }
  }, "version"), " identifier. This version identifier is set server-side, and can be a number, string, file hash, whatever. It doesn't matter, as long as it changes when the site's assets have been updated."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGhlLXByb3RvY29sLm1keCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJsaW5rcyIsInVybCIsIm5hbWUiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIkxheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJiYWNrZ3JvdW5kIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsVUFEVztBQUVsQkMsT0FBSyxFQUFFLENBQUM7QUFDTkMsT0FBRyxFQUFFLGNBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxpQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLGtCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsd0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSSxFQVlKO0FBQ0RELE9BQUcsRUFBRSx5QkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVpJO0FBRlcsQ0FBYjtBQW9CUCxJQUFNQyxXQUFXLEdBQUc7QUFDbEJMLE1BQUksRUFBSkE7QUFEa0IsQ0FBcEI7QUFHQSxJQUFNTSxTQUFTLEdBQUdDLDBEQUFsQjtBQUVlLFNBQVNDLFVBQVQsT0FHWjtBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVDLEtBQ0Y7O0FBQ0QsU0FBTywwREFBQyxTQUFELHlGQUFlTCxXQUFmLEVBQWdDSyxLQUFoQztBQUF1QyxjQUFVLEVBQUVELFVBQW5EO0FBQStELFdBQU8sRUFBQyxXQUF2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RixZQWpCRixFQW9CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FERixZQXBCRixFQXVCRTtBQUFLLGFBQVMsRUFBQyxnREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZCRixFQXdCRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBeEJGLEVBeUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLHNCQXpCRixDQUhFLEVBZ0NGLDBEQUFDLHdEQUFEO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFxQyxZQUFRLEVBQUMsTUFBOUM7QUFBcUQsV0FBTyxFQUFDLE1BQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsZ0RBREgscUJBaENFLENBdkpLLENBQVA7QUF1TUQ7S0EzTXVCSixVO0FBNk14QjtBQUNBQSxVQUFVLENBQUNLLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGhlLXByb3RvY29sLmZhM2NkNThiODljZGE4OTIwNmNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTm90aWNlIGZyb20gJy4uL2NvbXBvbmVudHMvTm90aWNlJ1xuaW1wb3J0IENvZGUgZnJvbSAnLi4vY29tcG9uZW50cy9Db2RlJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0J/RgNC+0YLQvtC60L7QuycsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyNodG1sLdC+0YLQstC10YLRiycsXG4gICAgbmFtZTogJ0hUTUwt0L7RgtCy0LXRgtGLJ1xuICB9LCB7XG4gICAgdXJsOiAnI2luZXJ0aWEt0L7RgtCy0LXRgtGLJyxcbiAgICBuYW1lOiAnSW5lcnRpYS3QvtGC0LLQtdGC0YsnXG4gIH0sIHtcbiAgICB1cmw6ICcj0L7QsdGK0LXQutGCLdGB0YLRgNCw0L3QuNGG0YsnLFxuICAgIG5hbWU6ICfQntCx0YrQtdC60YIg0YHRgtGA0LDQvdC40YbRiydcbiAgfSwge1xuICAgIHVybDogJyPQstC10YDRgdC40L7QvdC90L7RgdGC0Ywt0YDQtdGB0YPRgNGB0L7QsicsXG4gICAgbmFtZTogJ9CS0LXRgNGB0LjQvtC90L3QvtGB0YLRjCDRgNC10YHRg9GA0YHQvtCyJ1xuICB9LCB7XG4gICAgdXJsOiAnI9GH0LDRgdGC0LjRh9C90YvQtS3Qv9C10YDQtdC30LDQs9GA0YPQt9C60LgnLFxuICAgIG5hbWU6ICfQp9Cw0YHRgtC40YfQvdGL0LUg0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutC4J1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0J/RgNC+0YLQvtC60L7Qu2B9PC9oMT5cbiAgICA8cD57YNCd0LjQttC1INC/0YDQuNCy0LXQtNC10L3QsCDQv9C+0LTRgNC+0LHQvdCw0Y8g0YHQv9C10YbQuNGE0LjQutCw0YbQuNGPINC/0YDQvtGC0L7QutC+0LvQsCBJbmVydGlhLiDQodC90LDRh9Cw0LvQsCDQvtC30L3QsNC60L7QvNGM0YLQtdGB0Ywg0YHQviDRgdGC0YDQsNC90LjRhtC10LkgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9ob3ctaXQtd29ya3NcIlxuICAgICAgfX0+e2DQutCw0Log0Y3RgtC+INGA0LDQsdC+0YLQsNC10YJgfTwvYT57YCDQtNC70Y8g0L/QvtC70YPRh9C10L3QuNGPINC+0LHRidC10LPQviDQv9GA0LXQtNGB0YLQsNCy0LvQtdC90LjQtS5gfTwvcD5cbiAgICA8aDI+e2BIVE1MLdC+0YLQstC10YLRi2B9PC9oMj5cbiAgICA8cD57YNCh0LDQvNGL0Lkg0L/QtdGA0LLRi9C5INC30LDQv9GA0L7RgSDQuiDQv9GA0LjQu9C+0LbQtdC90LjRjiBJbmVydGlhIC0g0Y3RgtC+INC+0LHRi9GH0L3Ri9C5INC/0L7Qu9C90L7RhNGD0L3QutGG0LjQvtC90LDQu9GM0L3Ri9C5INC30LDQv9GA0L7RgSDQsdGA0LDRg9C30LXRgNCwINCx0LXQtyDRgdC/0LXRhtC40LDQu9GM0L3Ri9GFINC30LDQs9C+0LvQvtCy0LrQvtCyINC40LvQuCDQtNCw0L3QvdGL0YUgSW5lcnRpYS4g0JTQu9GPINGN0YLQuNGFINC30LDQv9GA0L7RgdC+0LIg0YHQtdGA0LLQtdGAINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC/0L7Qu9C90YvQuSBIVE1MLdC00L7QutGD0LzQtdC90YIuYH08L3A+XG4gICAgPHA+e2DQrdGC0L7RgiBIVE1MLdC+0YLQstC10YIg0LLQutC70Y7Rh9Cw0LXRgiDRgNC10YHRg9GA0YHRiyDRgdCw0LnRgtCwIChDU1MsIEphdmFTY3JpcHQpLCDQsCDRgtCw0LrQttC1INC60L7RgNC90LXQstC+0Lkg0Y3Qu9C10LzQtdC90YIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgPGRpdj5gfTwvaW5saW5lQ29kZT57YCDQsiDRgtC10LvQtS4g0JrQvtGA0L3QtdCy0L7QuSDRjdC70LXQvNC10L3RgiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A8ZGl2PmB9PC9pbmxpbmVDb2RlPntgINGB0LvRg9C20LjRgiDRgtC+0YfQutC+0Lkg0LzQvtC90YLQuNGA0L7QstCw0L3QuNGPINC00LvRjyDQutC70LjQtdC90YLRgdC60L7Qs9C+INC/0YDQuNC70L7QttC10L3QuNGPINC4INCy0LrQu9GO0YfQsNC10YIg0LDRgtGA0LjQsdGD0YIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZGF0YS1wYWdlYH08L2lubGluZUNvZGU+e2Ag0YEg0LfQsNC60L7QtNC40YDQvtCy0LDQvdC90YvQvCDQsiBKU09OIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIjJUQwJUJFJUQwJUIxJUQxJThBJUQwJUI1JUQwJUJBJUQxJTgyLSVEMSU4MSVEMSU4MiVEMSU4MCVEMCVCMCVEMCVCRCVEMCVCOCVEMSU4NiVEMSU4QlwiXG4gICAgICB9fT57YNC+0LHRitC10LrRgiDRgdGC0YDQsNC90LjRhtGLYH08L2E+e2Ag0LTQu9GPINC90LDRh9Cw0LvRjNC90L7QuSDRgdGC0YDQsNC90LjRhtGLLiBJbmVydGlhINC40YHQv9C+0LvRjNC30YPQtdGCINGN0YLRgyDQuNC90YTQvtGA0LzQsNGG0LjRjiDQtNC70Y8g0LfQsNCz0YDRg9C30LrQuCDQktCw0YjQtdC5INC60LvQuNC10L3RgtGB0LrQvtC5INGB0YDQtdC00Ysg0Lgg0L7RgtC+0LHRgNCw0LbQtdC90LjRjyDQutC+0LzQv9C+0L3QtdC90YLQsCDQvdCw0YfQsNC70YzQvdC+0Lkg0YHRgtGA0LDQvdC40YbRiy5gfTwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuXCIgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmQ6ICcjMjAyZTU5J1xuICAgIH19PlxuICA8ZGl2IGNsYXNzTmFtZT1cInB0LTYgcHgtNiB0ZXh0LXdoaXRlIGZvbnQtbW9ubyB0ZXh0LXNtXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhzIHVwcGVyY2FzZVwiPlJlcXVlc3Q8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5HRVQ6PC9zcGFuPiBodHRwOi8vZXhhbXBsZS5jb20vZXZlbnRzLzgwXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5BY2NlcHQ6PC9zcGFuPiB0ZXh0L2h0bWwsIGFwcGxpY2F0aW9uL3hodG1sK3htbFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhzIHVwcGVyY2FzZVwiPlJlc3BvbnNlPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+SFRUUC8xLjEgMjAwIE9LPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5Db250ZW50LVR5cGU6PC9zcGFuPiB0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxDb2RlIGNsYXNzTmFtZT1cInAtNiBsZWFkaW5nLW5vcm1hbFwiIGxhbmd1YWdlPVwiaHRtbFwiIG1keFR5cGU9XCJDb2RlXCI+XG4gICAge2RlZGVudGBcbiAgICAgIDxodG1sPlxuICAgICAgPGhlYWQ+XG4gICAgICAgICAgPHRpdGxlPtCc0L7QtSDQv9GA0LjQu9C+0LbQtdC90LjQtTwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cIi9jc3MvYXBwLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9hcHAuanNcIiBkZWZlcj48L3NjcmlwdD5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxcblxuICAgICAgPGRpdiBpZD1cImFwcFwiIGRhdGEtcGFnZT0ne1wiY29tcG9uZW50XCI6XCJFdmVudFwiLFwicHJvcHNcIjp7XCJldmVudFwiOntcImlkXCI6ODAsXCJ0aXRsZVwiOlwiQmlydGhkYXkgcGFydHlcIixcInN0YXJ0X2RhdGVcIjpcIjIwMTktMDYtMDJcIixcImRlc2NyaXB0aW9uXCI6XCJDb21lIG91dCBhbmQgY2VsZWJyYXRlIEpvbmF0aGFuJmFwb3M7cyAzNnRoIGJpcnRoZGF5IHBhcnR5IVwifX0sXCJ1cmxcIjpcIi9ldmVudHMvODBcIixcInZlcnNpb25cIjpcImMzMmI4ZTQ5NjVmNDE4YWQxNmVhZWJiYTFkNGU5NjBmXCJ9Jz48L2Rpdj5cXG5cbiAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICBgfVxuICA8L0NvZGU+XG4gICAgPC9kaXY+XG4gICAgPE5vdGljZSBtZHhUeXBlPVwiTm90aWNlXCI+0KXQvtGC0Y8g0L/QtdGA0LLQvtC90LDRh9Cw0LvRjNC90YvQvCDQvtGC0LLQtdGC0L7QvCDRj9Cy0LvRj9C10YLRgdGPIEhUTUwsIEluZXJ0aWEg0L3QtSDQvtGC0L7QsdGA0LDQttCw0LXRgiDQutC+0LzQv9C+0L3QtdC90YLRiyDRgdGC0YDQsNC90LjRhtGLIEphdmFTY3JpcHQg0L3QsCDRgdGC0L7RgNC+0L3QtSDRgdC10YDQstC10YDQsC48L05vdGljZT5cbiAgICA8aDI+e2BJbmVydGlhLdC+0YLQstC10YLRi2B9PC9oMj5cbiAgICA8cD57YNCf0L7RgdC70LUg0LfQsNCz0YDRg9C30LrQuCDQv9GA0LjQu9C+0LbQtdC90LjRjyBJbmVydGlhINCy0YHQtSDQv9C+0YHQu9C10LTRg9GO0YnQuNC1INC30LDQv9GA0L7RgdGLINC6INGB0LDQudGC0YMg0LLRi9C/0L7Qu9C90Y/RjtGC0YHRjyDRh9C10YDQtdC3IFhIUiDRgdC+INGB0L/QtdGG0LjQsNC70YzQvdGL0Lwg0LfQsNCz0L7Qu9C+0LLQutC+0LwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhYH08L2lubGluZUNvZGU+e2AsINGD0YHRgtCw0L3QvtCy0LvQtdC90L3Ri9C8INCyINC30L3QsNGH0LXQvdC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdHJ1ZWB9PC9pbmxpbmVDb2RlPntgLiDQrdGC0L7RgiDQt9Cw0LPQvtC70L7QstC+0Log0YPQutCw0LfRi9Cy0LDQtdGCLCDRh9GC0L4g0LfQsNC/0YDQvtGBINCy0YvQv9C+0LvQvdGP0LXRgiBJbmVydGlhLCDQsCDQvdC1INGB0YLQsNC90LTQsNGA0YLQvdGL0Lwg0L/QvtGB0LXRidC10L3QuNC10Lwg0L/QvtC70L3QvtC5INGB0YLRgNCw0L3QuNGG0YsuYH08L3A+XG4gICAgPHA+e2DQmtC+0LPQtNCwINGB0LXRgNCy0LXRgCDQvtCx0L3QsNGA0YPQttC40LLQsNC10YIg0LfQsNCz0L7Qu9C+0LLQvtC6IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFgtSW5lcnRpYWB9PC9pbmxpbmVDb2RlPntgLCDQstC80LXRgdGC0L4g0L7RgtCy0LXRgtCwINC/0L7Qu9C90YvQvCBIVE1MLdC00L7QutGD0LzQtdC90YLQvtC8INC+0L0g0LLQvtC30LLRgNCw0YnQsNC10YIg0L7RgtCy0LXRgiBKU09OINGBINC30LDQutC+0LTQuNGA0L7QstCw0L3QvdGL0LwgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIiMlRDAlQkUlRDAlQjElRDElOEElRDAlQjUlRDAlQkElRDElODItJUQxJTgxJUQxJTgyJUQxJTgwJUQwJUIwJUQwJUJEJUQwJUI4JUQxJTg2JUQxJThCXCJcbiAgICAgIH19Pntg0L7QsdGK0LXQutGC0L7QvCDRgdGC0YDQsNC90LjRhtGLYH08L2E+e2AuYH08L3A+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIG92ZXJmbG93LWhpZGRlblwiIHN0eWxlPXt7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzIwMmU1OSdcbiAgICB9fT5cbiAgPGRpdiBjbGFzc05hbWU9XCJwdC02IHB4LTYgdGV4dC13aGl0ZSBmb250LW1vbm8gdGV4dC1zbVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBmb250LWJvbGQgdGV4dC14cyB1cHBlcmNhc2VcIj5SZXF1ZXN0PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+R0VUOjwvc3Bhbj4gaHR0cDovL2V4YW1wbGUuY29tL2V2ZW50cy84MFxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+QWNjZXB0Ojwvc3Bhbj4gdGV4dC9odG1sLCBhcHBsaWNhdGlvbi94aHRtbCt4bWxcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtUmVxdWVzdGVkLVdpdGg6PC9zcGFuPiBYTUxIdHRwUmVxdWVzdFxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1JbmVydGlhOjwvc3Bhbj4gdHJ1ZVxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1JbmVydGlhLVZlcnNpb246PC9zcGFuPiA2YjE2Yjk0ZDdjNTFjYmU1YjFmYTQyYWFjOTgyNDFkNVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhzIHVwcGVyY2FzZVwiPlJlc3BvbnNlPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+SFRUUC8xLjEgMjAwIE9LPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5Db250ZW50LVR5cGU6PC9zcGFuPiBhcHBsaWNhdGlvbi9qc29uXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5WYXJ5Ojwvc3Bhbj4gQWNjZXB0XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5YLUluZXJ0aWE6PC9zcGFuPiB0cnVlXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8Q29kZSBjbGFzc05hbWU9XCJwLTYgbGVhZGluZy1ub3JtYWxcIiBsYW5ndWFnZT1cImpzb25cIiBtZHhUeXBlPVwiQ29kZVwiPlxuICAgIHtkZWRlbnRgXG4gICAgICB7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiRXZlbnRcIixcbiAgICAgICAgXCJwcm9wc1wiOiB7XG4gICAgICAgICAgXCJldmVudFwiOiB7XG4gICAgICAgICAgICBcImlkXCI6IDgwLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkJpcnRoZGF5IHBhcnR5XCIsXG4gICAgICAgICAgICBcInN0YXJ0X2RhdGVcIjogXCIyMDE5LTA2LTAyXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ29tZSBvdXQgYW5kIGNlbGVicmF0ZSBKb25hdGhhbidzIDM2dGggYmlydGhkYXkgcGFydHkhXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidXJsXCI6IFwiL2V2ZW50cy84MFwiLFxuICAgICAgICBcInZlcnNpb25cIjogXCJjMzJiOGU0OTY1ZjQxOGFkMTZlYWViYmExZDRlOTYwZlwiXG4gICAgICB9XG4gICAgYH1cbiAgPC9Db2RlPlxuICAgIDwvZGl2PlxuICAgIDxoMj57YNCe0LHRitC10LrRgiDRgdGC0YDQsNC90LjRhtGLYH08L2gyPlxuICAgIDxwPntgSW5lcnRpYSDQvtCx0LzQtdC90LjQstCw0LXRgtGB0Y8g0LTQsNC90L3Ri9C80Lgg0LzQtdC20LTRgyDRgdC10YDQstC10YDQvtC8INC4INC60LvQuNC10L3RgtC+0Lwg0YfQtdGA0LXQtyDQvtCx0YrQtdC60YIg0YHRgtGA0LDQvdC40YbRiy4g0K3RgtC+0YIg0L7QsdGK0LXQutGCINCy0LrQu9GO0YfQsNC10YIg0LIg0YHQtdCx0Y8g0L3QtdC+0LHRhdC+0LTQuNC80YPRjiDQuNC90YTQvtGA0LzQsNGG0LjRjiwg0L3QtdC+0LHRhdC+0LTQuNC80YPRjiDQtNC70Y8g0LLQuNC30YPQsNC70LjQt9Cw0YbQuNC4INC60L7QvNC/0L7QvdC10L3RgtCwINGB0YLRgNCw0L3QuNGG0YssINC+0LHQvdC+0LLQu9C10L3QuNGPINGB0L7RgdGC0L7Rj9C90LjRjyDQuNGB0YLQvtGA0LjQuCDQuCDQvtGC0YHQu9C10LbQuNCy0LDQvdC40Y8g0LLQtdGA0YHQuNC4INGA0LXRgdGD0YDRgdCwINGB0LDQudGC0LAuINCe0LHRitC10LrRgiDRgdGC0YDQsNC90LjRhtGLINCy0LrQu9GO0YfQsNC10YIg0YHQu9C10LTRg9GO0YnQuNC1INGH0LXRgtGL0YDQtSDRgdCy0L7QudGB0YLQstCwOmB9PC9wPlxuICAgIDxvbD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwib2xcIj48c3Ryb25nIHBhcmVudE5hbWU9XCJsaVwiPntgY29tcG9uZW50YH08L3N0cm9uZz57YDog0JjQvNGPINC60L7QvNC/0L7QvdC10L3RgtCwINGB0YLRgNCw0L3QuNGG0YsgSmF2YVNjcmlwdC5gfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cIm9sXCI+PHN0cm9uZyBwYXJlbnROYW1lPVwibGlcIj57YHByb3BzYH08L3N0cm9uZz57YDog0KDQtdC60LLQuNC30LjRgtGLINGB0YLRgNCw0L3QuNGG0YsgKNC00LDQvdC90YvQtSkuYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJvbFwiPjxzdHJvbmcgcGFyZW50TmFtZT1cImxpXCI+e2B1cmxgfTwvc3Ryb25nPntgOiBVUkwt0LDQtNGA0LXRgSDRgdGC0YDQsNC90LjRhtGLLmB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwib2xcIj48c3Ryb25nIHBhcmVudE5hbWU9XCJsaVwiPntgdmVyc2lvbmB9PC9zdHJvbmc+e2A6INCi0LXQutGD0YnQsNGPINCy0LXRgNGB0LjRjyDRgNC10YHRg9GA0YHQvtCyLmB9PC9saT5cbiAgICA8L29sPlxuICAgIDxwPntg0J/RgNC4INGB0YLQsNC90LTQsNGA0YLQvdGL0YUg0L/QvtGB0LXRidC10L3QuNGP0YUg0L/QvtC70L3QvtC5INGB0YLRgNCw0L3QuNGG0Ysg0L7QsdGK0LXQutGCINGB0YLRgNCw0L3QuNGG0Ysg0LrQvtC00LjRgNGD0LXRgtGB0Y8g0LIg0YTQvtGA0LzQsNGC0LUgSlNPTiDQsiDQsNGC0YDQuNCx0YPRgtC1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGRhdGEtcGFnZWB9PC9pbmxpbmVDb2RlPntgINCyINC60L7RgNC90LXQstC+0Lwg0LrQsNGC0LDQu9C+0LPQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A8ZGl2PmB9PC9pbmxpbmVDb2RlPntgLiDQn9GA0Lgg0L/QvtGB0LXRidC10L3QuNC4IEluZXJ0aWEg0L7QsdGK0LXQutGCINGB0YLRgNCw0L3QuNGG0Ysg0LLQvtC30LLRgNCw0YnQsNC10YLRgdGPINCyINC60LDRh9C10YHRgtCy0LUg0L/QvtC70LXQt9C90L7QuSDQvdCw0LPRgNGD0LfQutC4IEpTT04uYH08L3A+XG4gICAgPGgyPntg0JLQtdGA0YHQuNC+0L3QvdC+0YHRgtGMINGA0LXRgdGD0YDRgdC+0LJgfTwvaDI+XG4gICAgPHA+e2DQntC00L3QsCDQuNC3INGA0LDRgdC/0YDQvtGB0YLRgNCw0L3QtdC90L3Ri9GFINC/0YDQvtCx0LvQtdC8INGBINC+0LTQvdC+0YHRgtGA0LDQvdC40YfQvdGL0LzQuCDQv9GA0LjQu9C+0LbQtdC90LjRj9C80LggLSDQvtCx0L3QvtCy0LvQtdC90LjQtSDRgNC10YHRg9GA0YHQvtCyINGB0LDQudGC0LAsINC60L7Qs9C00LAg0L7QvdC4INCx0YvQu9C4INC40LfQvNC10L3QtdC90YsuIEluZXJ0aWEg0YPQv9GA0L7RidCw0LXRgiDRjdGC0L4g0LfQsCDRgdGH0LXRgiDQvdC10L7QsdGP0LfQsNGC0LXQu9GM0L3QvtCz0L4g0L7RgtGB0LvQtdC20LjQstCw0L3QuNGPINGC0LXQutGD0YnQtdC5INCy0LXRgNGB0LjQuCDRgNC10YHRg9GA0YHQvtCyINGB0LDQudGC0LAuINCSINGB0LvRg9GH0LDQtSDQuNC30LzQtdC90LXQvdC40Y8g0LDQutGC0LjQstCwIEluZXJ0aWEg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0LLRi9C/0L7Qu9C90LjRgiDQttC10YHRgtC60L7QtSAo0L/QvtC70L3QvtC1KSDQv9C+0YHQtdGJ0LXQvdC40LUg0YHRgtGA0LDQvdC40YbRiyDQstC80LXRgdGC0L4g0L/QvtGB0LXRidC10L3QuNGPIFhIUi5gfTwvcD5cbiAgICA8cD57YNCSIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIjJUQwJUJFJUQwJUIxJUQxJThBJUQwJUI1JUQwJUJBJUQxJTgyLSVEMSU4MSVEMSU4MiVEMSU4MCVEMCVCMCVEMCVCRCVEMCVCOCVEMSU4NiVEMSU4QlwiXG4gICAgICB9fT57YNC+0LHRitC10LrRgiDRgdGC0YDQsNC90LjRhtGLYH08L2E+e2AgaXMgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B2ZXJzaW9uYH08L2lubGluZUNvZGU+e2AgaWRlbnRpZmllci4gVGhpcyB2ZXJzaW9uIGlkZW50aWZpZXIgaXMgc2V0IHNlcnZlci1zaWRlLCBhbmQgY2FuIGJlIGEgbnVtYmVyLCBzdHJpbmcsIGZpbGUgaGFzaCwgd2hhdGV2ZXIuIEl0IGRvZXNuJ3QgbWF0dGVyLCBhcyBsb25nIGFzIGl0IGNoYW5nZXMgd2hlbiB0aGUgc2l0ZSdzIGFzc2V0cyBoYXZlIGJlZW4gdXBkYXRlZC5gfTwvcD5cbiAgICA8cD57YFdoZW5ldmVyIGFuIEluZXJ0aWEgcmVxdWVzdCBpcyBtYWRlLCBJbmVydGlhIHdpbGwgaW5jbHVkZSB0aGUgY3VycmVudCBhc3NldCB2ZXJzaW9uIGluIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BYLUluZXJ0aWEtVmVyc2lvbmB9PC9pbmxpbmVDb2RlPntgIGhlYWRlci4gV2hlbiB0aGUgc2VydmVyIHJlY2VpdmVzIHRoZSByZXF1ZXN0LCBpdCBjb21wYXJlcyB0aGUgYXNzZXQgdmVyc2lvbiBwcm92aWRlZCBpbiB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhLVZlcnNpb25gfTwvaW5saW5lQ29kZT57YCBoZWFkZXIgd2l0aCB0aGUgY3VycmVudCBhc3NldCB2ZXJzaW9uLiBUaGlzIGlzIHR5cGljYWxseSBoYW5kbGVkIGluIGEgbWlkZGxld2FyZSBsYXllci5gfTwvcD5cbiAgICA8cD57YElmIHRoZSBhc3NldCB2ZXJzaW9ucyBhcmUgdGhlIHNhbWUsIHRoZSByZXF1ZXN0IHNpbXBseSBjb250aW51ZXMgYXMgZXhwZWN0ZWQuIEhvd2V2ZXIsIGlmIHRoZXkgYXJlIGRpZmZlcmVudCwgdGhlIHNlcnZlciBpbW1lZGlhdGVseSByZXR1cm5zIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDA5IENvbmZsaWN0YH08L2lubGluZUNvZGU+e2AgcmVzcG9uc2UsIGFuZCBpbmNsdWRlcyB0aGUgVVJMIGluIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhLUxvY2F0aW9uYH08L2lubGluZUNvZGU+e2AgaGVhZGVyLiBUaGlzIGhlYWRlciBpcyBuZWNlc3NhcnksIHNpbmNlIHNlcnZlci1zaWRlIHJlZGlyZWN0cyBtYXkgaGF2ZSBvY2N1cnJlZC4gVGhpcyB0ZWxscyBJbmVydGlhIHdoYXQgdGhlIGZpbmFsIGludGVuZGVkIGRlc3RpbmF0aW9uIFVSTCBpcy5gfTwvcD5cbiAgICA8cD57YE5vdGUsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDQwOSBDb25mbGljdGB9PC9pbmxpbmVDb2RlPntgIHJlc3BvbnNlcyBhcmUgb25seSBzZW50IGZvciBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BHRVRgfTwvaW5saW5lQ29kZT57YCByZXF1ZXN0cywgYW5kIG5vdCBmb3IgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgUE9TVC9QVVQvUEFUQ0gvREVMRVRFYH08L2lubGluZUNvZGU+e2AgcmVxdWVzdHMuIFRoYXQgc2FpZCwgdGhleSB3aWxsIGJlIHNlbnQgaW4gdGhlIGV2ZW50IHRoYXQgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BHRVRgfTwvaW5saW5lQ29kZT57YCByZWRpcmVjdCBvY2N1cnMgYWZ0ZXIgb25lIG9mIHRoZXNlIHJlcXVlc3RzLmB9PC9wPlxuICAgIDxwPntgRmluYWxseSwgaW4gdGhlIGV2ZW50IHRoYXQgZmxhc2ggc2Vzc2lvbiBkYXRhIGV4aXN0cyB3aGVuIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDA5IENvbmZsaWN0YH08L2lubGluZUNvZGU+e2AgcmVzcG9uc2Ugb2NjdXJzLCB0aGUgc2VydmVyIHdpbGwgYXV0b21hdGljYWxseSByZWZsYXNoIHRoaXMgZGF0YS5gfTwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuXCIgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmQ6ICcjMjAyZTU5J1xuICAgIH19PlxuICA8ZGl2IGNsYXNzTmFtZT1cInAtNiB0ZXh0LXdoaXRlIGZvbnQtbW9ubyB0ZXh0LXNtXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhzIHVwcGVyY2FzZVwiPlJlcXVlc3Q8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5HRVQ6PC9zcGFuPiBodHRwOi8vZXhhbXBsZS5jb20vZXZlbnRzLzgwXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5BY2NlcHQ6PC9zcGFuPiB0ZXh0L2h0bWwsIGFwcGxpY2F0aW9uL3hodG1sK3htbFxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1SZXF1ZXN0ZWQtV2l0aDo8L3NwYW4+IFhNTEh0dHBSZXF1ZXN0XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5YLUluZXJ0aWE6PC9zcGFuPiB0cnVlXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5YLUluZXJ0aWEtVmVyc2lvbjo8L3NwYW4+IDZiMTZiOTRkN2M1MWNiZTViMWZhNDJhYWM5ODI0MWQ1XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHRleHQtZ3JheS02MDAgZm9udC1ib2xkIHRleHQteHMgdXBwZXJjYXNlXCI+UmVzcG9uc2U8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj40MDk6IENvbmZsaWN0PC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5YLUluZXJ0aWEtTG9jYXRpb246PC9zcGFuPiBodHRwOi8vZXhhbXBsZS5jb20vZXZlbnRzLzgwXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxoMj57YNCn0LDRgdGC0LjRh9C90YvQtSDQv9C10YDQtdC30LDQs9GA0YPQt9C60LhgfTwvaDI+XG4gICAgPHA+e2BXaGVuIG1ha2luZyBJbmVydGlhIHJlcXVlc3RzLCB0aGUgcGFydGlhbCByZWxvYWRzIG9wdGlvbiBhbGxvd3MgeW91IHRvIHJlcXVlc3QgYSBzdWJzZXQgb2YgdGhlIHByb3BzIChkYXRhKSBmcm9tIHRoZSBzZXJ2ZXIgb24gc3Vic2VxdWVudCB2aXNpdHMgdG8gdGhlIGB9PGVtIHBhcmVudE5hbWU9XCJwXCI+e2BzYW1lYH08L2VtPntgIHBhZ2UgY29tcG9uZW50LiBUaGlzIGNhbiBiZSBhIGhlbHBmdWwgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIGlmIGl0J3MgYWNjZXB0YWJsZSB0aGF0IHNvbWUgcGFnZSBkYXRhIGJlY29tZXMgc3RhbGUuYH08L3A+XG4gICAgPHA+e2BXaGVuIGEgcGFydGlhbCByZWxvYWQgcmVxdWVzdCBpcyBtYWRlLCBJbmVydGlhIGluY2x1ZGVzIHR3byBhZGRpdGlvbmFsIGhlYWRlcnMgd2l0aCB0aGUgcmVxdWVzdDogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhLVBhcnRpYWwtRGF0YWB9PC9pbmxpbmVDb2RlPntgIGFuZCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BYLUluZXJ0aWEtUGFydGlhbC1Db21wb25lbnRgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BYLUluZXJ0aWEtUGFydGlhbC1EYXRhYH08L2lubGluZUNvZGU+e2AgaGVhZGVyIGlzIGEgY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdGhlIGRlc2lyZWQgcHJvcHMgKGRhdGEpIGtleXMgdGhhdCBzaG91bGQgYmUgcmV0dXJuZWQuYH08L3A+XG4gICAgPHA+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhLVBhcnRpYWwtQ29tcG9uZW50YH08L2lubGluZUNvZGU+e2AgaGVhZGVyIGluY2x1ZGVzIHRoZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgdGhhdCBpcyBiZWluZyBwYXJ0aWFsbHkgcmVsb2FkZWQuIFRoaXMgaXMgbmVjZXNzYXJ5LCBzaW5jZSBwYXJ0aWFsIHJlbG9hZHMgb25seSB3b3JrIGZvciByZXF1ZXN0cyBtYWRlIHRvIHRoZSBzYW1lIHBhZ2UgY29tcG9uZW50LiBJZiB0aGUgZmluYWwgZGVzdGluYXRpb24gaXMgZGlmZmVyZW50IGZvciB3aGF0ZXZlciByZWFzb24gKGVnLiB0aGUgdXNlciB3YXMgbG9nZ2VkIG91dCBhbmQgaXMgbm93IG9uIHRoZSBsb2dpbiBwYWdlKSwgdGhlbiBubyBwYXJ0aWFsIHJlbG9hZGluZyB3aWxsIG9jY3VyLmB9PC9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBvdmVyZmxvdy1oaWRkZW5cIiBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZDogJyMyMDJlNTknXG4gICAgfX0+XG4gIDxkaXYgY2xhc3NOYW1lPVwicHQtNiBweC02IHRleHQtd2hpdGUgZm9udC1tb25vIHRleHQtc21cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgZm9udC1ib2xkIHRleHQteHMgdXBwZXJjYXNlXCI+UmVxdWVzdDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPkdFVDo8L3NwYW4+IGh0dHA6Ly9leGFtcGxlLmNvbS9ldmVudHNcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPkFjY2VwdDo8L3NwYW4+IHRleHQvaHRtbCwgYXBwbGljYXRpb24veGh0bWwreG1sXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5YLVJlcXVlc3RlZC1XaXRoOjwvc3Bhbj4gWE1MSHR0cFJlcXVlc3RcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtSW5lcnRpYTo8L3NwYW4+IHRydWVcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtSW5lcnRpYS1WZXJzaW9uOjwvc3Bhbj4gNmIxNmI5NGQ3YzUxY2JlNWIxZmE0MmFhYzk4MjQxZDVcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtSW5lcnRpYS1QYXJ0aWFsLURhdGE6PC9zcGFuPiBldmVudHNcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtSW5lcnRpYS1QYXJ0aWFsLUNvbXBvbmVudDo8L3NwYW4+IEV2ZW50c1xuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhzIHVwcGVyY2FzZVwiPlJlc3BvbnNlPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+SFRUUC8xLjEgMjAwIE9LPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5Db250ZW50LVR5cGU6PC9zcGFuPiBhcHBsaWNhdGlvbi9qc29uXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8Q29kZSBjbGFzc05hbWU9XCJwLTYgbGVhZGluZy1ub3JtYWxcIiBsYW5ndWFnZT1cImpzb25cIiBtZHhUeXBlPVwiQ29kZVwiPlxuICAgIHtkZWRlbnRgXG4gICAgICB7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiRXZlbnRzXCIsXG4gICAgICAgIFwicHJvcHNcIjoge1xuICAgICAgICAgIFwiYXV0aFwiOiB7Li4ufSwgICAgICAgLy8gTk9UIGluY2x1ZGVkXG4gICAgICAgICAgXCJjYXRlZ29yaWVzXCI6IFsuLi5dLCAvLyBOT1QgaW5jbHVkZWRcbiAgICAgICAgICBcImV2ZW50c1wiOiBbLi4uXSAgICAgIC8vIGluY2x1ZGVkXG4gICAgICAgIH0sXG4gICAgICAgIFwidXJsXCI6IFwiL2V2ZW50cy84MFwiLFxuICAgICAgICBcInZlcnNpb25cIjogXCJjMzJiOGU0OTY1ZjQxOGFkMTZlYWViYmExZDRlOTYwZlwiXG4gICAgICB9XG4gICAgYH1cbiAgPC9Db2RlPlxuICAgIDwvZGl2PlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==