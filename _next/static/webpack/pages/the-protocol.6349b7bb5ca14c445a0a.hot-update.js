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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      <html>\n      <head>\n          <title>My app</title>\n          <link href=\"/css/app.css\" rel=\"stylesheet\">\n          <script src=\"/js/app.js\" defer></script>\n      </head>\n      <body>\n\n      <div id=\"app\" data-page='{\"component\":\"Event\",\"props\":{\"event\":{\"id\":80,\"title\":\"Birthday party\",\"start_date\":\"2019-06-02\",\"description\":\"Come out and celebrate Jonathan&apos;s 36th birthday party!\"}},\"url\":\"/events/80\",\"version\":\"c32b8e4965f418ad16eaebba1d4e960f\"}'></div>\n\n      </body>\n      </html>\n    "], ["\n      <html>\n      <head>\n          <title>My app</title>\n          <link href=\"/css/app.css\" rel=\"stylesheet\">\n          <script src=\"/js/app.js\" defer></script>\n      </head>\n      <body>\\n\n      <div id=\"app\" data-page='{\"component\":\"Event\",\"props\":{\"event\":{\"id\":80,\"title\":\"Birthday party\",\"start_date\":\"2019-06-02\",\"description\":\"Come out and celebrate Jonathan&apos;s 36th birthday party!\"}},\"url\":\"/events/80\",\"version\":\"c32b8e4965f418ad16eaebba1d4e960f\"}'></div>\\n\n      </body>\n      </html>\n    "]);

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
  }, "The very first request to an Inertia app is just a regular full-page browser request, with no special Inertia headers or data. For these requests, the server returns a full HTML document."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, "This HTML response includes the site assets (CSS, JavaScript) as well as a root ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 92
    }
  }, "<div>"), " in the body. The root ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 168
    }
  }, "<div>"), " serves as a mounting point for the client-side app, and includes a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 289
    }
  }, "data-page"), " attribute with a JSON encoded ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "#the-page-object"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 377
    }
  }), "page object"), " for the initial page. Inertia uses this information to boot your client-side framework, and display the initial page component."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
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
  }, "While the initial response is HTML, Inertia does not server-side render the JavaScript page components."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
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
  }, "Once an Inertia app has been booted, all subsequent requests to the site are made via XHR with a special ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 117
    }
  }, "X-Inertia"), " header set to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 189
    }
  }, "true"), ". This header indicates that the request is being made by Inertia, and isn't a standard full-page visit."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, "When the server detects the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 40
    }
  }, "X-Inertia"), " header, instead of responding with a full HTML document, it returns a JSON response with an encoded ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "#the-page-object"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 198
    }
  }), "page object"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
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
  }, "Inertia shares data between the server and client via a page object. This object includes the necessary information required to render the page component, update the history state, and track the site's asset version. The page object includes the following four properties:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("ol", {
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
  }, "component"), ": The name of the JavaScript page component."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
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
  }, "props"), ": The page props (data)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("li", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGhlLXByb3RvY29sLm1keCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJsaW5rcyIsInVybCIsIm5hbWUiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIkxheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJiYWNrZ3JvdW5kIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsVUFEVztBQUVsQkMsT0FBSyxFQUFFLENBQUM7QUFDTkMsT0FBRyxFQUFFLGNBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxpQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLGtCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsbUJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSSxFQVlKO0FBQ0RELE9BQUcsRUFBRSx5QkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVpJO0FBRlcsQ0FBYjtBQW9CUCxJQUFNQyxXQUFXLEdBQUc7QUFDbEJMLE1BQUksRUFBSkE7QUFEa0IsQ0FBcEI7QUFHQSxJQUFNTSxTQUFTLEdBQUdDLDBEQUFsQjtBQUVlLFNBQVNDLFVBQVQsT0FHWjtBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVDLEtBQ0Y7O0FBQ0QsU0FBTywwREFBQyxTQUFELHlGQUFlTCxXQUFmLEVBQWdDSyxLQUFoQztBQUF1QyxjQUFVLEVBQUVELFVBQW5EO0FBQStELFdBQU8sRUFBQyxXQUF2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akJGLEVBb0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQURGLFlBcEJGLEVBdUJFO0FBQUssYUFBUyxFQUFDLGdEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkJGLEVBd0JFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkF4QkYsRUF5QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsc0JBekJGLENBSEUsRUFnQ0YsMERBQUMsd0RBQUQ7QUFBTSxhQUFTLEVBQUMsb0JBQWhCO0FBQXFDLFlBQVEsRUFBQyxNQUE5QztBQUFxRCxXQUFPLEVBQUMsTUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxnREFESCxxQkFoQ0UsQ0F2SkssQ0FBUDtBQXVNRDtLQTNNdUJKLFU7QUE2TXhCO0FBQ0FBLFVBQVUsQ0FBQ0ssY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy90aGUtcHJvdG9jb2wuNjM0OWI3YmI1Y2ExNGM0NDVhMGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCBkZWRlbnQgZnJvbSAnZGVkZW50LWpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBOb3RpY2UgZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RpY2UnXG5pbXBvcnQgQ29kZSBmcm9tICcuLi9jb21wb25lbnRzL0NvZGUnXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6ICfQn9GA0L7RgtC+0LrQvtC7JyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI2h0bWwt0L7RgtCy0LXRgtGLJyxcbiAgICBuYW1lOiAnSFRNTC3QvtGC0LLQtdGC0YsnXG4gIH0sIHtcbiAgICB1cmw6ICcjaW5lcnRpYS3QvtGC0LLQtdGC0YsnLFxuICAgIG5hbWU6ICdJbmVydGlhLdC+0YLQstC10YLRiydcbiAgfSwge1xuICAgIHVybDogJyPQvtCx0YrQtdC60YIt0YHRgtGA0LDQvdC40YbRiycsXG4gICAgbmFtZTogJ9Ce0LHRitC10LrRgiDRgdGC0YDQsNC90LjRhtGLJ1xuICB9LCB7XG4gICAgdXJsOiAnI2Fzc2V0LXZlcnNpb25pbmcnLFxuICAgIG5hbWU6ICdBc3NldCB2ZXJzaW9uaW5nJ1xuICB9LCB7XG4gICAgdXJsOiAnI9GH0LDRgdGC0LjRh9C90YvQtS3Qv9C10YDQtdC30LDQs9GA0YPQt9C60LgnLFxuICAgIG5hbWU6ICfQp9Cw0YHRgtC40YfQvdGL0LUg0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutC4J1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0J/RgNC+0YLQvtC60L7Qu2B9PC9oMT5cbiAgICA8cD57YNCd0LjQttC1INC/0YDQuNCy0LXQtNC10L3QsCDQv9C+0LTRgNC+0LHQvdCw0Y8g0YHQv9C10YbQuNGE0LjQutCw0YbQuNGPINC/0YDQvtGC0L7QutC+0LvQsCBJbmVydGlhLiDQodC90LDRh9Cw0LvQsCDQvtC30L3QsNC60L7QvNGM0YLQtdGB0Ywg0YHQviDRgdGC0YDQsNC90LjRhtC10LkgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9ob3ctaXQtd29ya3NcIlxuICAgICAgfX0+e2DQutCw0Log0Y3RgtC+INGA0LDQsdC+0YLQsNC10YJgfTwvYT57YCDQtNC70Y8g0L/QvtC70YPRh9C10L3QuNGPINC+0LHRidC10LPQviDQv9GA0LXQtNGB0YLQsNCy0LvQtdC90LjQtS5gfTwvcD5cbiAgICA8aDI+e2BIVE1MLdC+0YLQstC10YLRi2B9PC9oMj5cbiAgICA8cD57YFRoZSB2ZXJ5IGZpcnN0IHJlcXVlc3QgdG8gYW4gSW5lcnRpYSBhcHAgaXMganVzdCBhIHJlZ3VsYXIgZnVsbC1wYWdlIGJyb3dzZXIgcmVxdWVzdCwgd2l0aCBubyBzcGVjaWFsIEluZXJ0aWEgaGVhZGVycyBvciBkYXRhLiBGb3IgdGhlc2UgcmVxdWVzdHMsIHRoZSBzZXJ2ZXIgcmV0dXJucyBhIGZ1bGwgSFRNTCBkb2N1bWVudC5gfTwvcD5cbiAgICA8cD57YFRoaXMgSFRNTCByZXNwb25zZSBpbmNsdWRlcyB0aGUgc2l0ZSBhc3NldHMgKENTUywgSmF2YVNjcmlwdCkgYXMgd2VsbCBhcyBhIHJvb3QgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgPGRpdj5gfTwvaW5saW5lQ29kZT57YCBpbiB0aGUgYm9keS4gVGhlIHJvb3QgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgPGRpdj5gfTwvaW5saW5lQ29kZT57YCBzZXJ2ZXMgYXMgYSBtb3VudGluZyBwb2ludCBmb3IgdGhlIGNsaWVudC1zaWRlIGFwcCwgYW5kIGluY2x1ZGVzIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZGF0YS1wYWdlYH08L2lubGluZUNvZGU+e2AgYXR0cmlidXRlIHdpdGggYSBKU09OIGVuY29kZWQgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIiN0aGUtcGFnZS1vYmplY3RcIlxuICAgICAgfX0+e2BwYWdlIG9iamVjdGB9PC9hPntgIGZvciB0aGUgaW5pdGlhbCBwYWdlLiBJbmVydGlhIHVzZXMgdGhpcyBpbmZvcm1hdGlvbiB0byBib290IHlvdXIgY2xpZW50LXNpZGUgZnJhbWV3b3JrLCBhbmQgZGlzcGxheSB0aGUgaW5pdGlhbCBwYWdlIGNvbXBvbmVudC5gfTwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuXCIgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmQ6ICcjMjAyZTU5J1xuICAgIH19PlxuICA8ZGl2IGNsYXNzTmFtZT1cInB0LTYgcHgtNiB0ZXh0LXdoaXRlIGZvbnQtbW9ubyB0ZXh0LXNtXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhzIHVwcGVyY2FzZVwiPlJlcXVlc3Q8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5HRVQ6PC9zcGFuPiBodHRwOi8vZXhhbXBsZS5jb20vZXZlbnRzLzgwXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5BY2NlcHQ6PC9zcGFuPiB0ZXh0L2h0bWwsIGFwcGxpY2F0aW9uL3hodG1sK3htbFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhzIHVwcGVyY2FzZVwiPlJlc3BvbnNlPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+SFRUUC8xLjEgMjAwIE9LPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5Db250ZW50LVR5cGU6PC9zcGFuPiB0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxDb2RlIGNsYXNzTmFtZT1cInAtNiBsZWFkaW5nLW5vcm1hbFwiIGxhbmd1YWdlPVwiaHRtbFwiIG1keFR5cGU9XCJDb2RlXCI+XG4gICAge2RlZGVudGBcbiAgICAgIDxodG1sPlxuICAgICAgPGhlYWQ+XG4gICAgICAgICAgPHRpdGxlPk15IGFwcDwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cIi9jc3MvYXBwLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9hcHAuanNcIiBkZWZlcj48L3NjcmlwdD5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxcblxuICAgICAgPGRpdiBpZD1cImFwcFwiIGRhdGEtcGFnZT0ne1wiY29tcG9uZW50XCI6XCJFdmVudFwiLFwicHJvcHNcIjp7XCJldmVudFwiOntcImlkXCI6ODAsXCJ0aXRsZVwiOlwiQmlydGhkYXkgcGFydHlcIixcInN0YXJ0X2RhdGVcIjpcIjIwMTktMDYtMDJcIixcImRlc2NyaXB0aW9uXCI6XCJDb21lIG91dCBhbmQgY2VsZWJyYXRlIEpvbmF0aGFuJmFwb3M7cyAzNnRoIGJpcnRoZGF5IHBhcnR5IVwifX0sXCJ1cmxcIjpcIi9ldmVudHMvODBcIixcInZlcnNpb25cIjpcImMzMmI4ZTQ5NjVmNDE4YWQxNmVhZWJiYTFkNGU5NjBmXCJ9Jz48L2Rpdj5cXG5cbiAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICBgfVxuICA8L0NvZGU+XG4gICAgPC9kaXY+XG4gICAgPE5vdGljZSBtZHhUeXBlPVwiTm90aWNlXCI+V2hpbGUgdGhlIGluaXRpYWwgcmVzcG9uc2UgaXMgSFRNTCwgSW5lcnRpYSBkb2VzIG5vdCBzZXJ2ZXItc2lkZSByZW5kZXIgdGhlIEphdmFTY3JpcHQgcGFnZSBjb21wb25lbnRzLjwvTm90aWNlPlxuICAgIDxoMj57YEluZXJ0aWEt0L7RgtCy0LXRgtGLYH08L2gyPlxuICAgIDxwPntgT25jZSBhbiBJbmVydGlhIGFwcCBoYXMgYmVlbiBib290ZWQsIGFsbCBzdWJzZXF1ZW50IHJlcXVlc3RzIHRvIHRoZSBzaXRlIGFyZSBtYWRlIHZpYSBYSFIgd2l0aCBhIHNwZWNpYWwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhYH08L2lubGluZUNvZGU+e2AgaGVhZGVyIHNldCB0byBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0cnVlYH08L2lubGluZUNvZGU+e2AuIFRoaXMgaGVhZGVyIGluZGljYXRlcyB0aGF0IHRoZSByZXF1ZXN0IGlzIGJlaW5nIG1hZGUgYnkgSW5lcnRpYSwgYW5kIGlzbid0IGEgc3RhbmRhcmQgZnVsbC1wYWdlIHZpc2l0LmB9PC9wPlxuICAgIDxwPntgV2hlbiB0aGUgc2VydmVyIGRldGVjdHMgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFgtSW5lcnRpYWB9PC9pbmxpbmVDb2RlPntgIGhlYWRlciwgaW5zdGVhZCBvZiByZXNwb25kaW5nIHdpdGggYSBmdWxsIEhUTUwgZG9jdW1lbnQsIGl0IHJldHVybnMgYSBKU09OIHJlc3BvbnNlIHdpdGggYW4gZW5jb2RlZCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiI3RoZS1wYWdlLW9iamVjdFwiXG4gICAgICB9fT57YHBhZ2Ugb2JqZWN0YH08L2E+e2AuYH08L3A+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIG92ZXJmbG93LWhpZGRlblwiIHN0eWxlPXt7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzIwMmU1OSdcbiAgICB9fT5cbiAgPGRpdiBjbGFzc05hbWU9XCJwdC02IHB4LTYgdGV4dC13aGl0ZSBmb250LW1vbm8gdGV4dC1zbVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBmb250LWJvbGQgdGV4dC14cyB1cHBlcmNhc2VcIj5SZXF1ZXN0PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+R0VUOjwvc3Bhbj4gaHR0cDovL2V4YW1wbGUuY29tL2V2ZW50cy84MFxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+QWNjZXB0Ojwvc3Bhbj4gdGV4dC9odG1sLCBhcHBsaWNhdGlvbi94aHRtbCt4bWxcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtUmVxdWVzdGVkLVdpdGg6PC9zcGFuPiBYTUxIdHRwUmVxdWVzdFxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1JbmVydGlhOjwvc3Bhbj4gdHJ1ZVxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1JbmVydGlhLVZlcnNpb246PC9zcGFuPiA2YjE2Yjk0ZDdjNTFjYmU1YjFmYTQyYWFjOTgyNDFkNVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhzIHVwcGVyY2FzZVwiPlJlc3BvbnNlPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+SFRUUC8xLjEgMjAwIE9LPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5Db250ZW50LVR5cGU6PC9zcGFuPiBhcHBsaWNhdGlvbi9qc29uXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5WYXJ5Ojwvc3Bhbj4gQWNjZXB0XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5YLUluZXJ0aWE6PC9zcGFuPiB0cnVlXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8Q29kZSBjbGFzc05hbWU9XCJwLTYgbGVhZGluZy1ub3JtYWxcIiBsYW5ndWFnZT1cImpzb25cIiBtZHhUeXBlPVwiQ29kZVwiPlxuICAgIHtkZWRlbnRgXG4gICAgICB7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiRXZlbnRcIixcbiAgICAgICAgXCJwcm9wc1wiOiB7XG4gICAgICAgICAgXCJldmVudFwiOiB7XG4gICAgICAgICAgICBcImlkXCI6IDgwLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkJpcnRoZGF5IHBhcnR5XCIsXG4gICAgICAgICAgICBcInN0YXJ0X2RhdGVcIjogXCIyMDE5LTA2LTAyXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ29tZSBvdXQgYW5kIGNlbGVicmF0ZSBKb25hdGhhbidzIDM2dGggYmlydGhkYXkgcGFydHkhXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidXJsXCI6IFwiL2V2ZW50cy84MFwiLFxuICAgICAgICBcInZlcnNpb25cIjogXCJjMzJiOGU0OTY1ZjQxOGFkMTZlYWViYmExZDRlOTYwZlwiXG4gICAgICB9XG4gICAgYH1cbiAgPC9Db2RlPlxuICAgIDwvZGl2PlxuICAgIDxoMj57YNCe0LHRitC10LrRgiDRgdGC0YDQsNC90LjRhtGLYH08L2gyPlxuICAgIDxwPntgSW5lcnRpYSBzaGFyZXMgZGF0YSBiZXR3ZWVuIHRoZSBzZXJ2ZXIgYW5kIGNsaWVudCB2aWEgYSBwYWdlIG9iamVjdC4gVGhpcyBvYmplY3QgaW5jbHVkZXMgdGhlIG5lY2Vzc2FyeSBpbmZvcm1hdGlvbiByZXF1aXJlZCB0byByZW5kZXIgdGhlIHBhZ2UgY29tcG9uZW50LCB1cGRhdGUgdGhlIGhpc3Rvcnkgc3RhdGUsIGFuZCB0cmFjayB0aGUgc2l0ZSdzIGFzc2V0IHZlcnNpb24uIFRoZSBwYWdlIG9iamVjdCBpbmNsdWRlcyB0aGUgZm9sbG93aW5nIGZvdXIgcHJvcGVydGllczpgfTwvcD5cbiAgICA8b2w+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cIm9sXCI+PHN0cm9uZyBwYXJlbnROYW1lPVwibGlcIj57YGNvbXBvbmVudGB9PC9zdHJvbmc+e2A6IFRoZSBuYW1lIG9mIHRoZSBKYXZhU2NyaXB0IHBhZ2UgY29tcG9uZW50LmB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwib2xcIj48c3Ryb25nIHBhcmVudE5hbWU9XCJsaVwiPntgcHJvcHNgfTwvc3Ryb25nPntgOiBUaGUgcGFnZSBwcm9wcyAoZGF0YSkuYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJvbFwiPjxzdHJvbmcgcGFyZW50TmFtZT1cImxpXCI+e2B1cmxgfTwvc3Ryb25nPntgOiBUaGUgcGFnZSB1cmwuYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJvbFwiPjxzdHJvbmcgcGFyZW50TmFtZT1cImxpXCI+e2B2ZXJzaW9uYH08L3N0cm9uZz57YDogVGhlIGN1cnJlbnQgYXNzZXQgdmVyc2lvbi5gfTwvbGk+XG4gICAgPC9vbD5cbiAgICA8cD57YE9uIHN0YW5kYXJkIGZ1bGwgcGFnZSB2aXNpdHMsIHRoZSBwYWdlIG9iamVjdCBpcyBKU09OIGVuY29kZWQgaW50byB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZGF0YS1wYWdlYH08L2lubGluZUNvZGU+e2AgYXR0cmlidXRlIGluIHRoZSByb290IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDxkaXY+YH08L2lubGluZUNvZGU+e2AuIE9uIEluZXJ0aWEgdmlzaXRzLCB0aGUgcGFnZSBvYmplY3QgaXMgcmV0dXJuZWQgYXMgdGhlIEpTT04gcGF5bG9hZC5gfTwvcD5cbiAgICA8aDI+e2BBc3NldCB2ZXJzaW9uaW5nYH08L2gyPlxuICAgIDxwPntgT25lIGNvbW1vbiBjaGFsbGVuZ2Ugd2l0aCBzaW5nbGUtcGFnZSBhcHBzIGlzIHJlZnJlc2hpbmcgc2l0ZSBhc3NldHMgd2hlbiB0aGV5J3ZlIGJlZW4gY2hhbmdlZC4gSW5lcnRpYSBtYWtlcyB0aGlzIGVhc3kgYnkgb3B0aW9uYWxseSB0cmFja2luZyB0aGUgY3VycmVudCB2ZXJzaW9uIG9mIHRoZSBzaXRlJ3MgYXNzZXRzLiBJbiB0aGUgZXZlbnQgdGhhdCBhbiBhc3NldCBjaGFuZ2VzLCBJbmVydGlhIHdpbGwgYXV0b21hdGljYWxseSBtYWtlIGEgaGFyZCAoZnVsbCkgcGFnZSB2aXNpdCBpbnN0ZWFkIG9mIGFuIFhIUiB2aXNpdC5gfTwvcD5cbiAgICA8cD57YEluY2x1ZGVkIGluIHRoZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiI3RoZS1wYWdlLW9iamVjdFwiXG4gICAgICB9fT57YHBhZ2Ugb2JqZWN0YH08L2E+e2AgaXMgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B2ZXJzaW9uYH08L2lubGluZUNvZGU+e2AgaWRlbnRpZmllci4gVGhpcyB2ZXJzaW9uIGlkZW50aWZpZXIgaXMgc2V0IHNlcnZlci1zaWRlLCBhbmQgY2FuIGJlIGEgbnVtYmVyLCBzdHJpbmcsIGZpbGUgaGFzaCwgd2hhdGV2ZXIuIEl0IGRvZXNuJ3QgbWF0dGVyLCBhcyBsb25nIGFzIGl0IGNoYW5nZXMgd2hlbiB0aGUgc2l0ZSdzIGFzc2V0cyBoYXZlIGJlZW4gdXBkYXRlZC5gfTwvcD5cbiAgICA8cD57YFdoZW5ldmVyIGFuIEluZXJ0aWEgcmVxdWVzdCBpcyBtYWRlLCBJbmVydGlhIHdpbGwgaW5jbHVkZSB0aGUgY3VycmVudCBhc3NldCB2ZXJzaW9uIGluIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BYLUluZXJ0aWEtVmVyc2lvbmB9PC9pbmxpbmVDb2RlPntgIGhlYWRlci4gV2hlbiB0aGUgc2VydmVyIHJlY2VpdmVzIHRoZSByZXF1ZXN0LCBpdCBjb21wYXJlcyB0aGUgYXNzZXQgdmVyc2lvbiBwcm92aWRlZCBpbiB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhLVZlcnNpb25gfTwvaW5saW5lQ29kZT57YCBoZWFkZXIgd2l0aCB0aGUgY3VycmVudCBhc3NldCB2ZXJzaW9uLiBUaGlzIGlzIHR5cGljYWxseSBoYW5kbGVkIGluIGEgbWlkZGxld2FyZSBsYXllci5gfTwvcD5cbiAgICA8cD57YElmIHRoZSBhc3NldCB2ZXJzaW9ucyBhcmUgdGhlIHNhbWUsIHRoZSByZXF1ZXN0IHNpbXBseSBjb250aW51ZXMgYXMgZXhwZWN0ZWQuIEhvd2V2ZXIsIGlmIHRoZXkgYXJlIGRpZmZlcmVudCwgdGhlIHNlcnZlciBpbW1lZGlhdGVseSByZXR1cm5zIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDA5IENvbmZsaWN0YH08L2lubGluZUNvZGU+e2AgcmVzcG9uc2UsIGFuZCBpbmNsdWRlcyB0aGUgVVJMIGluIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhLUxvY2F0aW9uYH08L2lubGluZUNvZGU+e2AgaGVhZGVyLiBUaGlzIGhlYWRlciBpcyBuZWNlc3NhcnksIHNpbmNlIHNlcnZlci1zaWRlIHJlZGlyZWN0cyBtYXkgaGF2ZSBvY2N1cnJlZC4gVGhpcyB0ZWxscyBJbmVydGlhIHdoYXQgdGhlIGZpbmFsIGludGVuZGVkIGRlc3RpbmF0aW9uIFVSTCBpcy5gfTwvcD5cbiAgICA8cD57YE5vdGUsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDQwOSBDb25mbGljdGB9PC9pbmxpbmVDb2RlPntgIHJlc3BvbnNlcyBhcmUgb25seSBzZW50IGZvciBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BHRVRgfTwvaW5saW5lQ29kZT57YCByZXF1ZXN0cywgYW5kIG5vdCBmb3IgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgUE9TVC9QVVQvUEFUQ0gvREVMRVRFYH08L2lubGluZUNvZGU+e2AgcmVxdWVzdHMuIFRoYXQgc2FpZCwgdGhleSB3aWxsIGJlIHNlbnQgaW4gdGhlIGV2ZW50IHRoYXQgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BHRVRgfTwvaW5saW5lQ29kZT57YCByZWRpcmVjdCBvY2N1cnMgYWZ0ZXIgb25lIG9mIHRoZXNlIHJlcXVlc3RzLmB9PC9wPlxuICAgIDxwPntgRmluYWxseSwgaW4gdGhlIGV2ZW50IHRoYXQgZmxhc2ggc2Vzc2lvbiBkYXRhIGV4aXN0cyB3aGVuIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDA5IENvbmZsaWN0YH08L2lubGluZUNvZGU+e2AgcmVzcG9uc2Ugb2NjdXJzLCB0aGUgc2VydmVyIHdpbGwgYXV0b21hdGljYWxseSByZWZsYXNoIHRoaXMgZGF0YS5gfTwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuXCIgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmQ6ICcjMjAyZTU5J1xuICAgIH19PlxuICA8ZGl2IGNsYXNzTmFtZT1cInAtNiB0ZXh0LXdoaXRlIGZvbnQtbW9ubyB0ZXh0LXNtXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhzIHVwcGVyY2FzZVwiPlJlcXVlc3Q8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5HRVQ6PC9zcGFuPiBodHRwOi8vZXhhbXBsZS5jb20vZXZlbnRzLzgwXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5BY2NlcHQ6PC9zcGFuPiB0ZXh0L2h0bWwsIGFwcGxpY2F0aW9uL3hodG1sK3htbFxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1SZXF1ZXN0ZWQtV2l0aDo8L3NwYW4+IFhNTEh0dHBSZXF1ZXN0XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5YLUluZXJ0aWE6PC9zcGFuPiB0cnVlXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5YLUluZXJ0aWEtVmVyc2lvbjo8L3NwYW4+IDZiMTZiOTRkN2M1MWNiZTViMWZhNDJhYWM5ODI0MWQ1XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHRleHQtZ3JheS02MDAgZm9udC1ib2xkIHRleHQteHMgdXBwZXJjYXNlXCI+UmVzcG9uc2U8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj40MDk6IENvbmZsaWN0PC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5YLUluZXJ0aWEtTG9jYXRpb246PC9zcGFuPiBodHRwOi8vZXhhbXBsZS5jb20vZXZlbnRzLzgwXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxoMj57YNCn0LDRgdGC0LjRh9C90YvQtSDQv9C10YDQtdC30LDQs9GA0YPQt9C60LhgfTwvaDI+XG4gICAgPHA+e2BXaGVuIG1ha2luZyBJbmVydGlhIHJlcXVlc3RzLCB0aGUgcGFydGlhbCByZWxvYWRzIG9wdGlvbiBhbGxvd3MgeW91IHRvIHJlcXVlc3QgYSBzdWJzZXQgb2YgdGhlIHByb3BzIChkYXRhKSBmcm9tIHRoZSBzZXJ2ZXIgb24gc3Vic2VxdWVudCB2aXNpdHMgdG8gdGhlIGB9PGVtIHBhcmVudE5hbWU9XCJwXCI+e2BzYW1lYH08L2VtPntgIHBhZ2UgY29tcG9uZW50LiBUaGlzIGNhbiBiZSBhIGhlbHBmdWwgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIGlmIGl0J3MgYWNjZXB0YWJsZSB0aGF0IHNvbWUgcGFnZSBkYXRhIGJlY29tZXMgc3RhbGUuYH08L3A+XG4gICAgPHA+e2BXaGVuIGEgcGFydGlhbCByZWxvYWQgcmVxdWVzdCBpcyBtYWRlLCBJbmVydGlhIGluY2x1ZGVzIHR3byBhZGRpdGlvbmFsIGhlYWRlcnMgd2l0aCB0aGUgcmVxdWVzdDogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhLVBhcnRpYWwtRGF0YWB9PC9pbmxpbmVDb2RlPntgIGFuZCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BYLUluZXJ0aWEtUGFydGlhbC1Db21wb25lbnRgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BYLUluZXJ0aWEtUGFydGlhbC1EYXRhYH08L2lubGluZUNvZGU+e2AgaGVhZGVyIGlzIGEgY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdGhlIGRlc2lyZWQgcHJvcHMgKGRhdGEpIGtleXMgdGhhdCBzaG91bGQgYmUgcmV0dXJuZWQuYH08L3A+XG4gICAgPHA+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhLVBhcnRpYWwtQ29tcG9uZW50YH08L2lubGluZUNvZGU+e2AgaGVhZGVyIGluY2x1ZGVzIHRoZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgdGhhdCBpcyBiZWluZyBwYXJ0aWFsbHkgcmVsb2FkZWQuIFRoaXMgaXMgbmVjZXNzYXJ5LCBzaW5jZSBwYXJ0aWFsIHJlbG9hZHMgb25seSB3b3JrIGZvciByZXF1ZXN0cyBtYWRlIHRvIHRoZSBzYW1lIHBhZ2UgY29tcG9uZW50LiBJZiB0aGUgZmluYWwgZGVzdGluYXRpb24gaXMgZGlmZmVyZW50IGZvciB3aGF0ZXZlciByZWFzb24gKGVnLiB0aGUgdXNlciB3YXMgbG9nZ2VkIG91dCBhbmQgaXMgbm93IG9uIHRoZSBsb2dpbiBwYWdlKSwgdGhlbiBubyBwYXJ0aWFsIHJlbG9hZGluZyB3aWxsIG9jY3VyLmB9PC9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBvdmVyZmxvdy1oaWRkZW5cIiBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZDogJyMyMDJlNTknXG4gICAgfX0+XG4gIDxkaXYgY2xhc3NOYW1lPVwicHQtNiBweC02IHRleHQtd2hpdGUgZm9udC1tb25vIHRleHQtc21cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgZm9udC1ib2xkIHRleHQteHMgdXBwZXJjYXNlXCI+UmVxdWVzdDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPkdFVDo8L3NwYW4+IGh0dHA6Ly9leGFtcGxlLmNvbS9ldmVudHNcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPkFjY2VwdDo8L3NwYW4+IHRleHQvaHRtbCwgYXBwbGljYXRpb24veGh0bWwreG1sXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5YLVJlcXVlc3RlZC1XaXRoOjwvc3Bhbj4gWE1MSHR0cFJlcXVlc3RcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtSW5lcnRpYTo8L3NwYW4+IHRydWVcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtSW5lcnRpYS1WZXJzaW9uOjwvc3Bhbj4gNmIxNmI5NGQ3YzUxY2JlNWIxZmE0MmFhYzk4MjQxZDVcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtSW5lcnRpYS1QYXJ0aWFsLURhdGE6PC9zcGFuPiBldmVudHNcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtSW5lcnRpYS1QYXJ0aWFsLUNvbXBvbmVudDo8L3NwYW4+IEV2ZW50c1xuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhzIHVwcGVyY2FzZVwiPlJlc3BvbnNlPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+SFRUUC8xLjEgMjAwIE9LPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5Db250ZW50LVR5cGU6PC9zcGFuPiBhcHBsaWNhdGlvbi9qc29uXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8Q29kZSBjbGFzc05hbWU9XCJwLTYgbGVhZGluZy1ub3JtYWxcIiBsYW5ndWFnZT1cImpzb25cIiBtZHhUeXBlPVwiQ29kZVwiPlxuICAgIHtkZWRlbnRgXG4gICAgICB7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiRXZlbnRzXCIsXG4gICAgICAgIFwicHJvcHNcIjoge1xuICAgICAgICAgIFwiYXV0aFwiOiB7Li4ufSwgICAgICAgLy8gTk9UIGluY2x1ZGVkXG4gICAgICAgICAgXCJjYXRlZ29yaWVzXCI6IFsuLi5dLCAvLyBOT1QgaW5jbHVkZWRcbiAgICAgICAgICBcImV2ZW50c1wiOiBbLi4uXSAgICAgIC8vIGluY2x1ZGVkXG4gICAgICAgIH0sXG4gICAgICAgIFwidXJsXCI6IFwiL2V2ZW50cy84MFwiLFxuICAgICAgICBcInZlcnNpb25cIjogXCJjMzJiOGU0OTY1ZjQxOGFkMTZlYWViYmExZDRlOTYwZlwiXG4gICAgICB9XG4gICAgYH1cbiAgPC9Db2RlPlxuICAgIDwvZGl2PlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==