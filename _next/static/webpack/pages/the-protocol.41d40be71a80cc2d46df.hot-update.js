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
    url: '#asset-versioning',
    name: 'Asset versioning'
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
  }, "url"), ": The page url."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
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
  }, "version"), ": The current asset version.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 5
    }
  }, "On standard full page visits, the page object is JSON encoded into the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 83
    }
  }, "data-page"), " attribute in the root ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 163
    }
  }, "<div>"), ". On Inertia visits, the page object is returned as the JSON payload."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 5
    }
  }, "Asset versioning"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 5
    }
  }, "One common challenge with single-page apps is refreshing site assets when they've been changed. Inertia makes this easy by optionally tracking the current version of the site's assets. In the event that an asset changes, Inertia will automatically make a hard (full) page visit instead of an XHR visit."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 5
    }
  }, "Included in the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "#the-page-object"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 28
    }
  }), "page object"), " is a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 39
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGhlLXByb3RvY29sLm1keCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJsaW5rcyIsInVybCIsIm5hbWUiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIkxheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJiYWNrZ3JvdW5kIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsVUFEVztBQUVsQkMsT0FBSyxFQUFFLENBQUM7QUFDTkMsT0FBRyxFQUFFLGNBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxpQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLGtCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsbUJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSSxFQVlKO0FBQ0RELE9BQUcsRUFBRSx5QkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVpJO0FBRlcsQ0FBYjtBQW9CUCxJQUFNQyxXQUFXLEdBQUc7QUFDbEJMLE1BQUksRUFBSkE7QUFEa0IsQ0FBcEI7QUFHQSxJQUFNTSxTQUFTLEdBQUdDLDBEQUFsQjtBQUVlLFNBQVNDLFVBQVQsT0FHWjtBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVDLEtBQ0Y7O0FBQ0QsU0FBTywwREFBQyxTQUFELHlGQUFlTCxXQUFmLEVBQWdDSyxLQUFoQztBQUF1QyxjQUFVLEVBQUVELFVBQW5EO0FBQStELFdBQU8sRUFBQyxXQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3REFKSyxFQUtMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaWRBQWtHO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDcEgsWUFBUTtBQUQ0RyxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtGQUFsRyxvTUFMSyxFQVFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBUkssRUFTTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG83QkFUSyxFQVVMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc1ZBQTBGO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBMUYsb0lBQXlLO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBekssZ1pBQXdTO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXhTLCtHQUEwWDtBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQzVZLFlBQVE7QUFEb1ksR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4RkFBMVgscXNCQVZLLEVBYUw7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBeUMsU0FBSyxFQUFFO0FBQzlDRSxnQkFBVSxFQUFFO0FBRGtDLEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHRjtBQUFLLGFBQVMsRUFBQyx3Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsMkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGtDQUZGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixzQ0FMRixFQVFFO0FBQUssYUFBUyxFQUFDLGdEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkYsRUFTRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVEYsRUFVRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERiw4QkFWRixDQUhFLEVBaUJGLDBEQUFDLHdEQUFEO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFxQyxZQUFRLEVBQUMsTUFBOUM7QUFBcUQsV0FBTyxFQUFDLE1BQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsZ0RBREgsb0JBakJFLENBYkssRUE2Q0wsMERBQUMsMERBQUQ7QUFBUSxXQUFPLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzZ0JBN0NLLEVBOENMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBOUNLLEVBK0NMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd2pCQUF5SDtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUF6SCwrSUFBNk07QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUE3TSxpZkEvQ0ssRUFnREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2TUFBMkM7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBM0MsbVlBQXFMO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDdk0sWUFBUTtBQUQrTCxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBHQUFyTCxNQWhESyxFQW1ETDtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUF5QyxTQUFLLEVBQUU7QUFDOUNELGdCQUFVLEVBQUU7QUFEa0MsS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdGO0FBQUssYUFBUyxFQUFDLHdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQywyQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsa0NBRkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLHNDQUxGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsb0JBUkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixVQVhGLEVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsc0NBZEYsRUFpQkU7QUFBSyxhQUFTLEVBQUMsZ0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQkYsRUFrQkU7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWxCRixFQW1CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixzQkFuQkYsRUFzQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixZQXRCRixFQXlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixVQXpCRixDQUhFLEVBZ0NGLDBEQUFDLHdEQUFEO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFxQyxZQUFRLEVBQUMsTUFBOUM7QUFBcUQsV0FBTyxFQUFDLE1BQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsZ0RBREgscUJBaENFLENBbkRLLEVBcUdMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkZBckdLLEVBc0dMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbWhEQXRHSyxFQXVHTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxjQUFVLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9CO0FBQVEsY0FBVSxFQUFDLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXBCLG1KQURGLEVBRUU7QUFBSSxjQUFVLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9CO0FBQVEsY0FBVSxFQUFDLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBcEIsc0pBRkYsRUFHRTtBQUFJLGNBQVUsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0I7QUFBUSxjQUFVLEVBQUMsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFwQixvQkFIRixFQUlFO0FBQUksY0FBVSxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQjtBQUFRLGNBQVUsRUFBQyxJQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXBCLGlDQUpGLENBdkdLLEVBNkdMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0ZBQThFO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQTlFLDZCQUE4SjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTlKLDBFQTdHSyxFQThHTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQTlHSyxFQStHTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNUQS9HSyxFQWdITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUF1QjtBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ3pDLFlBQVE7QUFEaUMsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBdkIsWUFFa0M7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZsQyxrTUFoSEssRUFtSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvR0FBa0c7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBbEcsbUdBQWdRO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQWhRLDZGQW5ISyxFQW9ITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdKQUFzSjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUF0SiwyQ0FBdVA7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBdlAscUpBcEhLLEVBcUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBYTtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFiLG1DQUFzRztBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQXRHLDZCQUFnTDtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFoTCxrRUFBaVQ7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFqVCxrREFySEssRUFzSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxRUFBbUU7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBbkUsdUVBdEhLLEVBdUhMO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQXlDLFNBQUssRUFBRTtBQUM5Q0QsZ0JBQVUsRUFBRTtBQURrQyxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0Y7QUFBSyxhQUFTLEVBQUMsa0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDJDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixrQ0FGRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsc0NBTEYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixvQkFSRixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLFVBWEYsRUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixzQ0FkRixFQWlCRTtBQUFLLGFBQVMsRUFBQyxnREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCRixFQWtCRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbEJGLEVBbUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGtDQW5CRixDQUhFLENBdkhLLEVBa0pMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUlBbEpLLEVBbUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUtBQStKO0FBQUksY0FBVSxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUEvSiwwSEFuSkssRUFvSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwR0FBd0c7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBeEcsV0FBbUw7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FBbkwsTUFwSkssRUFxSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFXO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQVgsZ0dBckpLLEVBc0pMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBVztBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUFYLDhVQXRKSyxFQXVKTDtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUF5QyxTQUFLLEVBQUU7QUFDOUNBLGdCQUFVLEVBQUU7QUFEa0MsS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdGO0FBQUssYUFBUyxFQUFDLHdDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQywyQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsK0JBRkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLHNDQUxGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsb0JBUkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixVQVhGLEVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsc0NBZEYsRUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsWUFqQkYsRUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREYsWUFwQkYsRUF1QkU7QUFBSyxhQUFTLEVBQUMsZ0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2QkYsRUF3QkU7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXhCRixFQXlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixzQkF6QkYsQ0FIRSxFQWdDRiwwREFBQyx3REFBRDtBQUFNLGFBQVMsRUFBQyxvQkFBaEI7QUFBcUMsWUFBUSxFQUFDLE1BQTlDO0FBQXFELFdBQU8sRUFBQyxNQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLGdEQURILHFCQWhDRSxDQXZKSyxDQUFQO0FBdU1EO0tBM011QkosVTtBQTZNeEI7QUFDQUEsVUFBVSxDQUFDSyxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RoZS1wcm90b2NvbC40MWQ0MGJlNzFhODBjYzJkNDZkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IE5vdGljZSBmcm9tICcuLi9jb21wb25lbnRzL05vdGljZSdcbmltcG9ydCBDb2RlIGZyb20gJy4uL2NvbXBvbmVudHMvQ29kZSdcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9Cf0YDQvtGC0L7QutC+0LsnLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcjaHRtbC3QvtGC0LLQtdGC0YsnLFxuICAgIG5hbWU6ICdIVE1MLdC+0YLQstC10YLRiydcbiAgfSwge1xuICAgIHVybDogJyNpbmVydGlhLdC+0YLQstC10YLRiycsXG4gICAgbmFtZTogJ0luZXJ0aWEt0L7RgtCy0LXRgtGLJ1xuICB9LCB7XG4gICAgdXJsOiAnI9C+0LHRitC10LrRgi3RgdGC0YDQsNC90LjRhtGLJyxcbiAgICBuYW1lOiAn0J7QsdGK0LXQutGCINGB0YLRgNCw0L3QuNGG0YsnXG4gIH0sIHtcbiAgICB1cmw6ICcjYXNzZXQtdmVyc2lvbmluZycsXG4gICAgbmFtZTogJ0Fzc2V0IHZlcnNpb25pbmcnXG4gIH0sIHtcbiAgICB1cmw6ICcj0YfQsNGB0YLQuNGH0L3Ri9C1LdC/0LXRgNC10LfQsNCz0YDRg9C30LrQuCcsXG4gICAgbmFtZTogJ9Cn0LDRgdGC0LjRh9C90YvQtSDQv9C10YDQtdC30LDQs9GA0YPQt9C60LgnXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQn9GA0L7RgtC+0LrQvtC7YH08L2gxPlxuICAgIDxwPntg0J3QuNC20LUg0L/RgNC40LLQtdC00LXQvdCwINC/0L7QtNGA0L7QsdC90LDRjyDRgdC/0LXRhtC40YTQuNC60LDRhtC40Y8g0L/RgNC+0YLQvtC60L7Qu9CwIEluZXJ0aWEuINCh0L3QsNGH0LDQu9CwINC+0LfQvdCw0LrQvtC80YzRgtC10YHRjCDRgdC+INGB0YLRgNCw0L3QuNGG0LXQuSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL2hvdy1pdC13b3Jrc1wiXG4gICAgICB9fT57YNC60LDQuiDRjdGC0L4g0YDQsNCx0L7RgtCw0LXRgmB9PC9hPntgINC00LvRjyDQv9C+0LvRg9GH0LXQvdC40Y8g0L7QsdGJ0LXQs9C+INC/0YDQtdC00YHRgtCw0LLQu9C10L3QuNC1LmB9PC9wPlxuICAgIDxoMj57YEhUTUwt0L7RgtCy0LXRgtGLYH08L2gyPlxuICAgIDxwPntg0KHQsNC80YvQuSDQv9C10YDQstGL0Lkg0LfQsNC/0YDQvtGBINC6INC/0YDQuNC70L7QttC10L3QuNGOIEluZXJ0aWEgLSDRjdGC0L4g0L7QsdGL0YfQvdGL0Lkg0L/QvtC70L3QvtGE0YPQvdC60YbQuNC+0L3QsNC70YzQvdGL0Lkg0LfQsNC/0YDQvtGBINCx0YDQsNGD0LfQtdGA0LAg0LHQtdC3INGB0L/QtdGG0LjQsNC70YzQvdGL0YUg0LfQsNCz0L7Qu9C+0LLQutC+0LIg0LjQu9C4INC00LDQvdC90YvRhSBJbmVydGlhLiDQlNC70Y8g0Y3RgtC40YUg0LfQsNC/0YDQvtGB0L7QsiDRgdC10YDQstC10YAg0LLQvtC30LLRgNCw0YnQsNC10YIg0L/QvtC70L3Ri9C5IEhUTUwt0LTQvtC60YPQvNC10L3Rgi5gfTwvcD5cbiAgICA8cD57YNCt0YLQvtGCIEhUTUwt0L7RgtCy0LXRgiDQstC60LvRjtGH0LDQtdGCINGA0LXRgdGD0YDRgdGLINGB0LDQudGC0LAgKENTUywgSmF2YVNjcmlwdCksINCwINGC0LDQutC20LUg0LrQvtGA0L3QtdCy0L7QuSDRjdC70LXQvNC10L3RgiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A8ZGl2PmB9PC9pbmxpbmVDb2RlPntgINCyINGC0LXQu9C1LiDQmtC+0YDQvdC10LLQvtC5INGN0LvQtdC80LXQvdGCIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDxkaXY+YH08L2lubGluZUNvZGU+e2Ag0YHQu9GD0LbQuNGCINGC0L7Rh9C60L7QuSDQvNC+0L3RgtC40YDQvtCy0LDQvdC40Y8g0LTQu9GPINC60LvQuNC10L3RgtGB0LrQvtCz0L4g0L/RgNC40LvQvtC20LXQvdC40Y8g0Lgg0LLQutC70Y7Rh9Cw0LXRgiDQsNGC0YDQuNCx0YPRgiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BkYXRhLXBhZ2VgfTwvaW5saW5lQ29kZT57YCDRgSDQt9Cw0LrQvtC00LjRgNC+0LLQsNC90L3Ri9C8INCyIEpTT04gYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIiMlRDAlQkUlRDAlQjElRDElOEElRDAlQjUlRDAlQkElRDElODItJUQxJTgxJUQxJTgyJUQxJTgwJUQwJUIwJUQwJUJEJUQwJUI4JUQxJTg2JUQxJThCXCJcbiAgICAgIH19Pntg0L7QsdGK0LXQutGCINGB0YLRgNCw0L3QuNGG0YtgfTwvYT57YCDQtNC70Y8g0L3QsNGH0LDQu9GM0L3QvtC5INGB0YLRgNCw0L3QuNGG0YsuIEluZXJ0aWEg0LjRgdC/0L7Qu9GM0LfRg9C10YIg0Y3RgtGDINC40L3RhNC+0YDQvNCw0YbQuNGOINC00LvRjyDQt9Cw0LPRgNGD0LfQutC4INCS0LDRiNC10Lkg0LrQu9C40LXQvdGC0YHQutC+0Lkg0YHRgNC10LTRiyDQuCDQvtGC0L7QsdGA0LDQttC10L3QuNGPINC60L7QvNC/0L7QvdC10L3RgtCwINC90LDRh9Cw0LvRjNC90L7QuSDRgdGC0YDQsNC90LjRhtGLLmB9PC9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBvdmVyZmxvdy1oaWRkZW5cIiBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZDogJyMyMDJlNTknXG4gICAgfX0+XG4gIDxkaXYgY2xhc3NOYW1lPVwicHQtNiBweC02IHRleHQtd2hpdGUgZm9udC1tb25vIHRleHQtc21cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgZm9udC1ib2xkIHRleHQteHMgdXBwZXJjYXNlXCI+UmVxdWVzdDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPkdFVDo8L3NwYW4+IGh0dHA6Ly9leGFtcGxlLmNvbS9ldmVudHMvODBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPkFjY2VwdDo8L3NwYW4+IHRleHQvaHRtbCwgYXBwbGljYXRpb24veGh0bWwreG1sXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHRleHQtZ3JheS02MDAgZm9udC1ib2xkIHRleHQteHMgdXBwZXJjYXNlXCI+UmVzcG9uc2U8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5IVFRQLzEuMSAyMDAgT0s8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPkNvbnRlbnQtVHlwZTo8L3NwYW4+IHRleHQvaHRtbDsgY2hhcnNldD11dGYtOFxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPENvZGUgY2xhc3NOYW1lPVwicC02IGxlYWRpbmctbm9ybWFsXCIgbGFuZ3VhZ2U9XCJodG1sXCIgbWR4VHlwZT1cIkNvZGVcIj5cbiAgICB7ZGVkZW50YFxuICAgICAgPGh0bWw+XG4gICAgICA8aGVhZD5cbiAgICAgICAgICA8dGl0bGU+0JzQvtC1INC/0YDQuNC70L7QttC10L3QuNC1PC90aXRsZT5cbiAgICAgICAgICA8bGluayBocmVmPVwiL2Nzcy9hcHAuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiL2pzL2FwcC5qc1wiIGRlZmVyPjwvc2NyaXB0PlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XFxuXG4gICAgICA8ZGl2IGlkPVwiYXBwXCIgZGF0YS1wYWdlPSd7XCJjb21wb25lbnRcIjpcIkV2ZW50XCIsXCJwcm9wc1wiOntcImV2ZW50XCI6e1wiaWRcIjo4MCxcInRpdGxlXCI6XCJCaXJ0aGRheSBwYXJ0eVwiLFwic3RhcnRfZGF0ZVwiOlwiMjAxOS0wNi0wMlwiLFwiZGVzY3JpcHRpb25cIjpcIkNvbWUgb3V0IGFuZCBjZWxlYnJhdGUgSm9uYXRoYW4mYXBvcztzIDM2dGggYmlydGhkYXkgcGFydHkhXCJ9fSxcInVybFwiOlwiL2V2ZW50cy84MFwiLFwidmVyc2lvblwiOlwiYzMyYjhlNDk2NWY0MThhZDE2ZWFlYmJhMWQ0ZTk2MGZcIn0nPjwvZGl2PlxcblxuICAgICAgPC9ib2R5PlxuICAgICAgPC9odG1sPlxuICAgIGB9XG4gIDwvQ29kZT5cbiAgICA8L2Rpdj5cbiAgICA8Tm90aWNlIG1keFR5cGU9XCJOb3RpY2VcIj7QpdC+0YLRjyDQv9C10YDQstC+0L3QsNGH0LDQu9GM0L3Ri9C8INC+0YLQstC10YLQvtC8INGP0LLQu9GP0LXRgtGB0Y8gSFRNTCwgSW5lcnRpYSDQvdC1INC+0YLQvtCx0YDQsNC20LDQtdGCINC60L7QvNC/0L7QvdC10L3RgtGLINGB0YLRgNCw0L3QuNGG0YsgSmF2YVNjcmlwdCDQvdCwINGB0YLQvtGA0L7QvdC1INGB0LXRgNCy0LXRgNCwLjwvTm90aWNlPlxuICAgIDxoMj57YEluZXJ0aWEt0L7RgtCy0LXRgtGLYH08L2gyPlxuICAgIDxwPntg0J/QvtGB0LvQtSDQt9Cw0LPRgNGD0LfQutC4INC/0YDQuNC70L7QttC10L3QuNGPIEluZXJ0aWEg0LLRgdC1INC/0L7RgdC70LXQtNGD0Y7RidC40LUg0LfQsNC/0YDQvtGB0Ysg0Log0YHQsNC50YLRgyDQstGL0L/QvtC70L3Rj9GO0YLRgdGPINGH0LXRgNC10LcgWEhSINGB0L4g0YHQv9C10YbQuNCw0LvRjNC90YvQvCDQt9Cw0LPQvtC70L7QstC60L7QvCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BYLUluZXJ0aWFgfTwvaW5saW5lQ29kZT57YCwg0YPRgdGC0LDQvdC+0LLQu9C10L3QvdGL0Lwg0LIg0LfQvdCw0YfQtdC90LjQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0cnVlYH08L2lubGluZUNvZGU+e2AuINCt0YLQvtGCINC30LDQs9C+0LvQvtCy0L7QuiDRg9C60LDQt9GL0LLQsNC10YIsINGH0YLQviDQt9Cw0L/RgNC+0YEg0LLRi9C/0L7Qu9C90Y/QtdGCIEluZXJ0aWEsINCwINC90LUg0YHRgtCw0L3QtNCw0YDRgtC90YvQvCDQv9C+0YHQtdGJ0LXQvdC40LXQvCDQv9C+0LvQvdC+0Lkg0YHRgtGA0LDQvdC40YbRiy5gfTwvcD5cbiAgICA8cD57YNCa0L7Qs9C00LAg0YHQtdGA0LLQtdGAINC+0LHQvdCw0YDRg9C20LjQstCw0LXRgiDQt9Cw0LPQvtC70L7QstC+0LogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhYH08L2lubGluZUNvZGU+e2AsINCy0LzQtdGB0YLQviDQvtGC0LLQtdGC0LAg0L/QvtC70L3Ri9C8IEhUTUwt0LTQvtC60YPQvNC10L3RgtC+0Lwg0L7QvSDQstC+0LfQstGA0LDRidCw0LXRgiDQvtGC0LLQtdGCIEpTT04g0YEg0LfQsNC60L7QtNC40YDQvtCy0LDQvdC90YvQvCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiIyVEMCVCRSVEMCVCMSVEMSU4QSVEMCVCNSVEMCVCQSVEMSU4Mi0lRDElODElRDElODIlRDElODAlRDAlQjAlRDAlQkQlRDAlQjglRDElODYlRDElOEJcIlxuICAgICAgfX0+e2DQvtCx0YrQtdC60YLQvtC8INGB0YLRgNCw0L3QuNGG0YtgfTwvYT57YC5gfTwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuXCIgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmQ6ICcjMjAyZTU5J1xuICAgIH19PlxuICA8ZGl2IGNsYXNzTmFtZT1cInB0LTYgcHgtNiB0ZXh0LXdoaXRlIGZvbnQtbW9ubyB0ZXh0LXNtXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhzIHVwcGVyY2FzZVwiPlJlcXVlc3Q8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5HRVQ6PC9zcGFuPiBodHRwOi8vZXhhbXBsZS5jb20vZXZlbnRzLzgwXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5BY2NlcHQ6PC9zcGFuPiB0ZXh0L2h0bWwsIGFwcGxpY2F0aW9uL3hodG1sK3htbFxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1SZXF1ZXN0ZWQtV2l0aDo8L3NwYW4+IFhNTEh0dHBSZXF1ZXN0XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5YLUluZXJ0aWE6PC9zcGFuPiB0cnVlXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5YLUluZXJ0aWEtVmVyc2lvbjo8L3NwYW4+IDZiMTZiOTRkN2M1MWNiZTViMWZhNDJhYWM5ODI0MWQ1XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHRleHQtZ3JheS02MDAgZm9udC1ib2xkIHRleHQteHMgdXBwZXJjYXNlXCI+UmVzcG9uc2U8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5IVFRQLzEuMSAyMDAgT0s8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPkNvbnRlbnQtVHlwZTo8L3NwYW4+IGFwcGxpY2F0aW9uL2pzb25cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlZhcnk6PC9zcGFuPiBBY2NlcHRcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtSW5lcnRpYTo8L3NwYW4+IHRydWVcbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxDb2RlIGNsYXNzTmFtZT1cInAtNiBsZWFkaW5nLW5vcm1hbFwiIGxhbmd1YWdlPVwianNvblwiIG1keFR5cGU9XCJDb2RlXCI+XG4gICAge2RlZGVudGBcbiAgICAgIHtcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJFdmVudFwiLFxuICAgICAgICBcInByb3BzXCI6IHtcbiAgICAgICAgICBcImV2ZW50XCI6IHtcbiAgICAgICAgICAgIFwiaWRcIjogODAsXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiQmlydGhkYXkgcGFydHlcIixcbiAgICAgICAgICAgIFwic3RhcnRfZGF0ZVwiOiBcIjIwMTktMDYtMDJcIixcbiAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDb21lIG91dCBhbmQgY2VsZWJyYXRlIEpvbmF0aGFuJ3MgMzZ0aCBiaXJ0aGRheSBwYXJ0eSFcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cmxcIjogXCIvZXZlbnRzLzgwXCIsXG4gICAgICAgIFwidmVyc2lvblwiOiBcImMzMmI4ZTQ5NjVmNDE4YWQxNmVhZWJiYTFkNGU5NjBmXCJcbiAgICAgIH1cbiAgICBgfVxuICA8L0NvZGU+XG4gICAgPC9kaXY+XG4gICAgPGgyPntg0J7QsdGK0LXQutGCINGB0YLRgNCw0L3QuNGG0YtgfTwvaDI+XG4gICAgPHA+e2BJbmVydGlhINC+0LHQvNC10L3QuNCy0LDQtdGC0YHRjyDQtNCw0L3QvdGL0LzQuCDQvNC10LbQtNGDINGB0LXRgNCy0LXRgNC+0Lwg0Lgg0LrQu9C40LXQvdGC0L7QvCDRh9C10YDQtdC3INC+0LHRitC10LrRgiDRgdGC0YDQsNC90LjRhtGLLiDQrdGC0L7RgiDQvtCx0YrQtdC60YIg0LLQutC70Y7Rh9Cw0LXRgiDQsiDRgdC10LHRjyDQvdC10L7QsdGF0L7QtNC40LzRg9GOINC40L3RhNC+0YDQvNCw0YbQuNGOLCDQvdC10L7QsdGF0L7QtNC40LzRg9GOINC00LvRjyDQstC40LfRg9Cw0LvQuNC30LDRhtC40Lgg0LrQvtC80L/QvtC90LXQvdGC0LAg0YHRgtGA0LDQvdC40YbRiywg0L7QsdC90L7QstC70LXQvdC40Y8g0YHQvtGB0YLQvtGP0L3QuNGPINC40YHRgtC+0YDQuNC4INC4INC+0YLRgdC70LXQttC40LLQsNC90LjRjyDQstC10YDRgdC40Lgg0YDQtdGB0YPRgNGB0LAg0YHQsNC50YLQsC4g0J7QsdGK0LXQutGCINGB0YLRgNCw0L3QuNGG0Ysg0LLQutC70Y7Rh9Cw0LXRgiDRgdC70LXQtNGD0Y7RidC40LUg0YfQtdGC0YvRgNC1INGB0LLQvtC50YHRgtCy0LA6YH08L3A+XG4gICAgPG9sPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJvbFwiPjxzdHJvbmcgcGFyZW50TmFtZT1cImxpXCI+e2Bjb21wb25lbnRgfTwvc3Ryb25nPntgOiDQmNC80Y8g0LrQvtC80L/QvtC90LXQvdGC0LAg0YHRgtGA0LDQvdC40YbRiyBKYXZhU2NyaXB0LmB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwib2xcIj48c3Ryb25nIHBhcmVudE5hbWU9XCJsaVwiPntgcHJvcHNgfTwvc3Ryb25nPntgOiDQoNC10LrQstC40LfQuNGC0Ysg0YHRgtGA0LDQvdC40YbRiyAo0LTQsNC90L3Ri9C1KS5gfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cIm9sXCI+PHN0cm9uZyBwYXJlbnROYW1lPVwibGlcIj57YHVybGB9PC9zdHJvbmc+e2A6IFRoZSBwYWdlIHVybC5gfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cIm9sXCI+PHN0cm9uZyBwYXJlbnROYW1lPVwibGlcIj57YHZlcnNpb25gfTwvc3Ryb25nPntgOiBUaGUgY3VycmVudCBhc3NldCB2ZXJzaW9uLmB9PC9saT5cbiAgICA8L29sPlxuICAgIDxwPntgT24gc3RhbmRhcmQgZnVsbCBwYWdlIHZpc2l0cywgdGhlIHBhZ2Ugb2JqZWN0IGlzIEpTT04gZW5jb2RlZCBpbnRvIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BkYXRhLXBhZ2VgfTwvaW5saW5lQ29kZT57YCBhdHRyaWJ1dGUgaW4gdGhlIHJvb3QgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgPGRpdj5gfTwvaW5saW5lQ29kZT57YC4gT24gSW5lcnRpYSB2aXNpdHMsIHRoZSBwYWdlIG9iamVjdCBpcyByZXR1cm5lZCBhcyB0aGUgSlNPTiBwYXlsb2FkLmB9PC9wPlxuICAgIDxoMj57YEFzc2V0IHZlcnNpb25pbmdgfTwvaDI+XG4gICAgPHA+e2BPbmUgY29tbW9uIGNoYWxsZW5nZSB3aXRoIHNpbmdsZS1wYWdlIGFwcHMgaXMgcmVmcmVzaGluZyBzaXRlIGFzc2V0cyB3aGVuIHRoZXkndmUgYmVlbiBjaGFuZ2VkLiBJbmVydGlhIG1ha2VzIHRoaXMgZWFzeSBieSBvcHRpb25hbGx5IHRyYWNraW5nIHRoZSBjdXJyZW50IHZlcnNpb24gb2YgdGhlIHNpdGUncyBhc3NldHMuIEluIHRoZSBldmVudCB0aGF0IGFuIGFzc2V0IGNoYW5nZXMsIEluZXJ0aWEgd2lsbCBhdXRvbWF0aWNhbGx5IG1ha2UgYSBoYXJkIChmdWxsKSBwYWdlIHZpc2l0IGluc3RlYWQgb2YgYW4gWEhSIHZpc2l0LmB9PC9wPlxuICAgIDxwPntgSW5jbHVkZWQgaW4gdGhlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIjdGhlLXBhZ2Utb2JqZWN0XCJcbiAgICAgIH19PntgcGFnZSBvYmplY3RgfTwvYT57YCBpcyBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHZlcnNpb25gfTwvaW5saW5lQ29kZT57YCBpZGVudGlmaWVyLiBUaGlzIHZlcnNpb24gaWRlbnRpZmllciBpcyBzZXQgc2VydmVyLXNpZGUsIGFuZCBjYW4gYmUgYSBudW1iZXIsIHN0cmluZywgZmlsZSBoYXNoLCB3aGF0ZXZlci4gSXQgZG9lc24ndCBtYXR0ZXIsIGFzIGxvbmcgYXMgaXQgY2hhbmdlcyB3aGVuIHRoZSBzaXRlJ3MgYXNzZXRzIGhhdmUgYmVlbiB1cGRhdGVkLmB9PC9wPlxuICAgIDxwPntgV2hlbmV2ZXIgYW4gSW5lcnRpYSByZXF1ZXN0IGlzIG1hZGUsIEluZXJ0aWEgd2lsbCBpbmNsdWRlIHRoZSBjdXJyZW50IGFzc2V0IHZlcnNpb24gaW4gdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFgtSW5lcnRpYS1WZXJzaW9uYH08L2lubGluZUNvZGU+e2AgaGVhZGVyLiBXaGVuIHRoZSBzZXJ2ZXIgcmVjZWl2ZXMgdGhlIHJlcXVlc3QsIGl0IGNvbXBhcmVzIHRoZSBhc3NldCB2ZXJzaW9uIHByb3ZpZGVkIGluIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BYLUluZXJ0aWEtVmVyc2lvbmB9PC9pbmxpbmVDb2RlPntgIGhlYWRlciB3aXRoIHRoZSBjdXJyZW50IGFzc2V0IHZlcnNpb24uIFRoaXMgaXMgdHlwaWNhbGx5IGhhbmRsZWQgaW4gYSBtaWRkbGV3YXJlIGxheWVyLmB9PC9wPlxuICAgIDxwPntgSWYgdGhlIGFzc2V0IHZlcnNpb25zIGFyZSB0aGUgc2FtZSwgdGhlIHJlcXVlc3Qgc2ltcGx5IGNvbnRpbnVlcyBhcyBleHBlY3RlZC4gSG93ZXZlciwgaWYgdGhleSBhcmUgZGlmZmVyZW50LCB0aGUgc2VydmVyIGltbWVkaWF0ZWx5IHJldHVybnMgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A0MDkgQ29uZmxpY3RgfTwvaW5saW5lQ29kZT57YCByZXNwb25zZSwgYW5kIGluY2x1ZGVzIHRoZSBVUkwgaW4gYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BYLUluZXJ0aWEtTG9jYXRpb25gfTwvaW5saW5lQ29kZT57YCBoZWFkZXIuIFRoaXMgaGVhZGVyIGlzIG5lY2Vzc2FyeSwgc2luY2Ugc2VydmVyLXNpZGUgcmVkaXJlY3RzIG1heSBoYXZlIG9jY3VycmVkLiBUaGlzIHRlbGxzIEluZXJ0aWEgd2hhdCB0aGUgZmluYWwgaW50ZW5kZWQgZGVzdGluYXRpb24gVVJMIGlzLmB9PC9wPlxuICAgIDxwPntgTm90ZSwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDA5IENvbmZsaWN0YH08L2lubGluZUNvZGU+e2AgcmVzcG9uc2VzIGFyZSBvbmx5IHNlbnQgZm9yIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEdFVGB9PC9pbmxpbmVDb2RlPntgIHJlcXVlc3RzLCBhbmQgbm90IGZvciBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BQT1NUL1BVVC9QQVRDSC9ERUxFVEVgfTwvaW5saW5lQ29kZT57YCByZXF1ZXN0cy4gVGhhdCBzYWlkLCB0aGV5IHdpbGwgYmUgc2VudCBpbiB0aGUgZXZlbnQgdGhhdCBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEdFVGB9PC9pbmxpbmVDb2RlPntgIHJlZGlyZWN0IG9jY3VycyBhZnRlciBvbmUgb2YgdGhlc2UgcmVxdWVzdHMuYH08L3A+XG4gICAgPHA+e2BGaW5hbGx5LCBpbiB0aGUgZXZlbnQgdGhhdCBmbGFzaCBzZXNzaW9uIGRhdGEgZXhpc3RzIHdoZW4gYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A0MDkgQ29uZmxpY3RgfTwvaW5saW5lQ29kZT57YCByZXNwb25zZSBvY2N1cnMsIHRoZSBzZXJ2ZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHJlZmxhc2ggdGhpcyBkYXRhLmB9PC9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBvdmVyZmxvdy1oaWRkZW5cIiBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZDogJyMyMDJlNTknXG4gICAgfX0+XG4gIDxkaXYgY2xhc3NOYW1lPVwicC02IHRleHQtd2hpdGUgZm9udC1tb25vIHRleHQtc21cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgZm9udC1ib2xkIHRleHQteHMgdXBwZXJjYXNlXCI+UmVxdWVzdDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPkdFVDo8L3NwYW4+IGh0dHA6Ly9leGFtcGxlLmNvbS9ldmVudHMvODBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPkFjY2VwdDo8L3NwYW4+IHRleHQvaHRtbCwgYXBwbGljYXRpb24veGh0bWwreG1sXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5YLVJlcXVlc3RlZC1XaXRoOjwvc3Bhbj4gWE1MSHR0cFJlcXVlc3RcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtSW5lcnRpYTo8L3NwYW4+IHRydWVcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtSW5lcnRpYS1WZXJzaW9uOjwvc3Bhbj4gNmIxNmI5NGQ3YzUxY2JlNWIxZmE0MmFhYzk4MjQxZDVcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggdGV4dC1ncmF5LTYwMCBmb250LWJvbGQgdGV4dC14cyB1cHBlcmNhc2VcIj5SZXNwb25zZTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPjQwOTogQ29uZmxpY3Q8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtSW5lcnRpYS1Mb2NhdGlvbjo8L3NwYW4+IGh0dHA6Ly9leGFtcGxlLmNvbS9ldmVudHMvODBcbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGgyPntg0KfQsNGB0YLQuNGH0L3Ri9C1INC/0LXRgNC10LfQsNCz0YDRg9C30LrQuGB9PC9oMj5cbiAgICA8cD57YFdoZW4gbWFraW5nIEluZXJ0aWEgcmVxdWVzdHMsIHRoZSBwYXJ0aWFsIHJlbG9hZHMgb3B0aW9uIGFsbG93cyB5b3UgdG8gcmVxdWVzdCBhIHN1YnNldCBvZiB0aGUgcHJvcHMgKGRhdGEpIGZyb20gdGhlIHNlcnZlciBvbiBzdWJzZXF1ZW50IHZpc2l0cyB0byB0aGUgYH08ZW0gcGFyZW50TmFtZT1cInBcIj57YHNhbWVgfTwvZW0+e2AgcGFnZSBjb21wb25lbnQuIFRoaXMgY2FuIGJlIGEgaGVscGZ1bCBwZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24gaWYgaXQncyBhY2NlcHRhYmxlIHRoYXQgc29tZSBwYWdlIGRhdGEgYmVjb21lcyBzdGFsZS5gfTwvcD5cbiAgICA8cD57YFdoZW4gYSBwYXJ0aWFsIHJlbG9hZCByZXF1ZXN0IGlzIG1hZGUsIEluZXJ0aWEgaW5jbHVkZXMgdHdvIGFkZGl0aW9uYWwgaGVhZGVycyB3aXRoIHRoZSByZXF1ZXN0OiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BYLUluZXJ0aWEtUGFydGlhbC1EYXRhYH08L2lubGluZUNvZGU+e2AgYW5kIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFgtSW5lcnRpYS1QYXJ0aWFsLUNvbXBvbmVudGB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwPntgVGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFgtSW5lcnRpYS1QYXJ0aWFsLURhdGFgfTwvaW5saW5lQ29kZT57YCBoZWFkZXIgaXMgYSBjb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiB0aGUgZGVzaXJlZCBwcm9wcyAoZGF0YSkga2V5cyB0aGF0IHNob3VsZCBiZSByZXR1cm5lZC5gfTwvcD5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BYLUluZXJ0aWEtUGFydGlhbC1Db21wb25lbnRgfTwvaW5saW5lQ29kZT57YCBoZWFkZXIgaW5jbHVkZXMgdGhlIG5hbWUgb2YgdGhlIGNvbXBvbmVudCB0aGF0IGlzIGJlaW5nIHBhcnRpYWxseSByZWxvYWRlZC4gVGhpcyBpcyBuZWNlc3NhcnksIHNpbmNlIHBhcnRpYWwgcmVsb2FkcyBvbmx5IHdvcmsgZm9yIHJlcXVlc3RzIG1hZGUgdG8gdGhlIHNhbWUgcGFnZSBjb21wb25lbnQuIElmIHRoZSBmaW5hbCBkZXN0aW5hdGlvbiBpcyBkaWZmZXJlbnQgZm9yIHdoYXRldmVyIHJlYXNvbiAoZWcuIHRoZSB1c2VyIHdhcyBsb2dnZWQgb3V0IGFuZCBpcyBub3cgb24gdGhlIGxvZ2luIHBhZ2UpLCB0aGVuIG5vIHBhcnRpYWwgcmVsb2FkaW5nIHdpbGwgb2NjdXIuYH08L3A+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIG92ZXJmbG93LWhpZGRlblwiIHN0eWxlPXt7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzIwMmU1OSdcbiAgICB9fT5cbiAgPGRpdiBjbGFzc05hbWU9XCJwdC02IHB4LTYgdGV4dC13aGl0ZSBmb250LW1vbm8gdGV4dC1zbVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBmb250LWJvbGQgdGV4dC14cyB1cHBlcmNhc2VcIj5SZXF1ZXN0PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+R0VUOjwvc3Bhbj4gaHR0cDovL2V4YW1wbGUuY29tL2V2ZW50c1xuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+QWNjZXB0Ojwvc3Bhbj4gdGV4dC9odG1sLCBhcHBsaWNhdGlvbi94aHRtbCt4bWxcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtUmVxdWVzdGVkLVdpdGg6PC9zcGFuPiBYTUxIdHRwUmVxdWVzdFxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1JbmVydGlhOjwvc3Bhbj4gdHJ1ZVxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1JbmVydGlhLVZlcnNpb246PC9zcGFuPiA2YjE2Yjk0ZDdjNTFjYmU1YjFmYTQyYWFjOTgyNDFkNVxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1JbmVydGlhLVBhcnRpYWwtRGF0YTo8L3NwYW4+IGV2ZW50c1xuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1JbmVydGlhLVBhcnRpYWwtQ29tcG9uZW50Ojwvc3Bhbj4gRXZlbnRzXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHRleHQtZ3JheS02MDAgZm9udC1ib2xkIHRleHQteHMgdXBwZXJjYXNlXCI+UmVzcG9uc2U8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5IVFRQLzEuMSAyMDAgT0s8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPkNvbnRlbnQtVHlwZTo8L3NwYW4+IGFwcGxpY2F0aW9uL2pzb25cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxDb2RlIGNsYXNzTmFtZT1cInAtNiBsZWFkaW5nLW5vcm1hbFwiIGxhbmd1YWdlPVwianNvblwiIG1keFR5cGU9XCJDb2RlXCI+XG4gICAge2RlZGVudGBcbiAgICAgIHtcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJFdmVudHNcIixcbiAgICAgICAgXCJwcm9wc1wiOiB7XG4gICAgICAgICAgXCJhdXRoXCI6IHsuLi59LCAgICAgICAvLyBOT1QgaW5jbHVkZWRcbiAgICAgICAgICBcImNhdGVnb3JpZXNcIjogWy4uLl0sIC8vIE5PVCBpbmNsdWRlZFxuICAgICAgICAgIFwiZXZlbnRzXCI6IFsuLi5dICAgICAgLy8gaW5jbHVkZWRcbiAgICAgICAgfSxcbiAgICAgICAgXCJ1cmxcIjogXCIvZXZlbnRzLzgwXCIsXG4gICAgICAgIFwidmVyc2lvblwiOiBcImMzMmI4ZTQ5NjVmNDE4YWQxNmVhZWJiYTFkNGU5NjBmXCJcbiAgICAgIH1cbiAgICBgfVxuICA8L0NvZGU+XG4gICAgPC9kaXY+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9