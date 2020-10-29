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
    url: '#html-responses',
    name: 'HTML responses'
  }, {
    url: '#inertia-responses',
    name: 'Inertia responses'
  }, {
    url: '#the-page-object',
    name: 'The page object'
  }, {
    url: '#asset-versioning',
    name: 'Asset versioning'
  }, {
    url: '#partial-reloads',
    name: 'Partial reloads'
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
  }, "The following is a detailed spec of the Inertia protocol. Be sure to read the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/how-it-works"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 90
    }
  }), "how it works"), " page first for a high-level overview."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, "HTML responses"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
  }, "Inertia responses"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
  }, "The page object"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
  }, "Partial reloads"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGhlLXByb3RvY29sLm1keCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJsaW5rcyIsInVybCIsIm5hbWUiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIkxheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJiYWNrZ3JvdW5kIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsVUFEVztBQUVsQkMsT0FBSyxFQUFFLENBQUM7QUFDTkMsT0FBRyxFQUFFLGlCQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsb0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FISSxFQU1KO0FBQ0RELE9BQUcsRUFBRSxrQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQU5JLEVBU0o7QUFDREQsT0FBRyxFQUFFLG1CQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBVEksRUFZSjtBQUNERCxPQUFHLEVBQUUsa0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FaSTtBQUZXLENBQWI7QUFvQlAsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCTCxNQUFJLEVBQUpBO0FBRGtCLENBQXBCO0FBR0EsSUFBTU0sU0FBUyxHQUFHQywwREFBbEI7QUFFZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCx5RkFBZUwsV0FBZixFQUFnQ0ssS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtBQUErRCxXQUFPLEVBQUMsV0FB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QWpCRixFQW9CRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsZUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FERixZQXBCRixFQXVCRTtBQUFLLGFBQVMsRUFBQyxnREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZCRixFQXdCRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBeEJGLEVBeUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLHNCQXpCRixDQUhFLEVBZ0NGLDBEQUFDLHdEQUFEO0FBQU0sYUFBUyxFQUFDLG9CQUFoQjtBQUFxQyxZQUFRLEVBQUMsTUFBOUM7QUFBcUQsV0FBTyxFQUFDLE1BQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsZ0RBREgscUJBaENFLENBdkpLLENBQVA7QUF1TUQ7S0EzTXVCSixVO0FBNk14QjtBQUNBQSxVQUFVLENBQUNLLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGhlLXByb3RvY29sLjk5NDY1ODgyMzdlOWZlZGE1OGRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTm90aWNlIGZyb20gJy4uL2NvbXBvbmVudHMvTm90aWNlJ1xuaW1wb3J0IENvZGUgZnJvbSAnLi4vY29tcG9uZW50cy9Db2RlJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0J/RgNC+0YLQvtC60L7QuycsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyNodG1sLXJlc3BvbnNlcycsXG4gICAgbmFtZTogJ0hUTUwgcmVzcG9uc2VzJ1xuICB9LCB7XG4gICAgdXJsOiAnI2luZXJ0aWEtcmVzcG9uc2VzJyxcbiAgICBuYW1lOiAnSW5lcnRpYSByZXNwb25zZXMnXG4gIH0sIHtcbiAgICB1cmw6ICcjdGhlLXBhZ2Utb2JqZWN0JyxcbiAgICBuYW1lOiAnVGhlIHBhZ2Ugb2JqZWN0J1xuICB9LCB7XG4gICAgdXJsOiAnI2Fzc2V0LXZlcnNpb25pbmcnLFxuICAgIG5hbWU6ICdBc3NldCB2ZXJzaW9uaW5nJ1xuICB9LCB7XG4gICAgdXJsOiAnI3BhcnRpYWwtcmVsb2FkcycsXG4gICAgbmFtZTogJ1BhcnRpYWwgcmVsb2FkcydcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCf0YDQvtGC0L7QutC+0LtgfTwvaDE+XG4gICAgPHA+e2BUaGUgZm9sbG93aW5nIGlzIGEgZGV0YWlsZWQgc3BlYyBvZiB0aGUgSW5lcnRpYSBwcm90b2NvbC4gQmUgc3VyZSB0byByZWFkIHRoZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL2hvdy1pdC13b3Jrc1wiXG4gICAgICB9fT57YGhvdyBpdCB3b3Jrc2B9PC9hPntgIHBhZ2UgZmlyc3QgZm9yIGEgaGlnaC1sZXZlbCBvdmVydmlldy5gfTwvcD5cbiAgICA8aDI+e2BIVE1MIHJlc3BvbnNlc2B9PC9oMj5cbiAgICA8cD57YFRoZSB2ZXJ5IGZpcnN0IHJlcXVlc3QgdG8gYW4gSW5lcnRpYSBhcHAgaXMganVzdCBhIHJlZ3VsYXIgZnVsbC1wYWdlIGJyb3dzZXIgcmVxdWVzdCwgd2l0aCBubyBzcGVjaWFsIEluZXJ0aWEgaGVhZGVycyBvciBkYXRhLiBGb3IgdGhlc2UgcmVxdWVzdHMsIHRoZSBzZXJ2ZXIgcmV0dXJucyBhIGZ1bGwgSFRNTCBkb2N1bWVudC5gfTwvcD5cbiAgICA8cD57YFRoaXMgSFRNTCByZXNwb25zZSBpbmNsdWRlcyB0aGUgc2l0ZSBhc3NldHMgKENTUywgSmF2YVNjcmlwdCkgYXMgd2VsbCBhcyBhIHJvb3QgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgPGRpdj5gfTwvaW5saW5lQ29kZT57YCBpbiB0aGUgYm9keS4gVGhlIHJvb3QgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgPGRpdj5gfTwvaW5saW5lQ29kZT57YCBzZXJ2ZXMgYXMgYSBtb3VudGluZyBwb2ludCBmb3IgdGhlIGNsaWVudC1zaWRlIGFwcCwgYW5kIGluY2x1ZGVzIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZGF0YS1wYWdlYH08L2lubGluZUNvZGU+e2AgYXR0cmlidXRlIHdpdGggYSBKU09OIGVuY29kZWQgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIiN0aGUtcGFnZS1vYmplY3RcIlxuICAgICAgfX0+e2BwYWdlIG9iamVjdGB9PC9hPntgIGZvciB0aGUgaW5pdGlhbCBwYWdlLiBJbmVydGlhIHVzZXMgdGhpcyBpbmZvcm1hdGlvbiB0byBib290IHlvdXIgY2xpZW50LXNpZGUgZnJhbWV3b3JrLCBhbmQgZGlzcGxheSB0aGUgaW5pdGlhbCBwYWdlIGNvbXBvbmVudC5gfTwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQgb3ZlcmZsb3ctaGlkZGVuXCIgc3R5bGU9e3tcbiAgICAgIGJhY2tncm91bmQ6ICcjMjAyZTU5J1xuICAgIH19PlxuICA8ZGl2IGNsYXNzTmFtZT1cInB0LTYgcHgtNiB0ZXh0LXdoaXRlIGZvbnQtbW9ubyB0ZXh0LXNtXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhzIHVwcGVyY2FzZVwiPlJlcXVlc3Q8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTFcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5HRVQ6PC9zcGFuPiBodHRwOi8vZXhhbXBsZS5jb20vZXZlbnRzLzgwXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5BY2NlcHQ6PC9zcGFuPiB0ZXh0L2h0bWwsIGFwcGxpY2F0aW9uL3hodG1sK3htbFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhzIHVwcGVyY2FzZVwiPlJlc3BvbnNlPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+SFRUUC8xLjEgMjAwIE9LPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5Db250ZW50LVR5cGU6PC9zcGFuPiB0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxDb2RlIGNsYXNzTmFtZT1cInAtNiBsZWFkaW5nLW5vcm1hbFwiIGxhbmd1YWdlPVwiaHRtbFwiIG1keFR5cGU9XCJDb2RlXCI+XG4gICAge2RlZGVudGBcbiAgICAgIDxodG1sPlxuICAgICAgPGhlYWQ+XG4gICAgICAgICAgPHRpdGxlPk15IGFwcDwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cIi9jc3MvYXBwLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIj5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cIi9qcy9hcHAuanNcIiBkZWZlcj48L3NjcmlwdD5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxcblxuICAgICAgPGRpdiBpZD1cImFwcFwiIGRhdGEtcGFnZT0ne1wiY29tcG9uZW50XCI6XCJFdmVudFwiLFwicHJvcHNcIjp7XCJldmVudFwiOntcImlkXCI6ODAsXCJ0aXRsZVwiOlwiQmlydGhkYXkgcGFydHlcIixcInN0YXJ0X2RhdGVcIjpcIjIwMTktMDYtMDJcIixcImRlc2NyaXB0aW9uXCI6XCJDb21lIG91dCBhbmQgY2VsZWJyYXRlIEpvbmF0aGFuJmFwb3M7cyAzNnRoIGJpcnRoZGF5IHBhcnR5IVwifX0sXCJ1cmxcIjpcIi9ldmVudHMvODBcIixcInZlcnNpb25cIjpcImMzMmI4ZTQ5NjVmNDE4YWQxNmVhZWJiYTFkNGU5NjBmXCJ9Jz48L2Rpdj5cXG5cbiAgICAgIDwvYm9keT5cbiAgICAgIDwvaHRtbD5cbiAgICBgfVxuICA8L0NvZGU+XG4gICAgPC9kaXY+XG4gICAgPE5vdGljZSBtZHhUeXBlPVwiTm90aWNlXCI+V2hpbGUgdGhlIGluaXRpYWwgcmVzcG9uc2UgaXMgSFRNTCwgSW5lcnRpYSBkb2VzIG5vdCBzZXJ2ZXItc2lkZSByZW5kZXIgdGhlIEphdmFTY3JpcHQgcGFnZSBjb21wb25lbnRzLjwvTm90aWNlPlxuICAgIDxoMj57YEluZXJ0aWEgcmVzcG9uc2VzYH08L2gyPlxuICAgIDxwPntgT25jZSBhbiBJbmVydGlhIGFwcCBoYXMgYmVlbiBib290ZWQsIGFsbCBzdWJzZXF1ZW50IHJlcXVlc3RzIHRvIHRoZSBzaXRlIGFyZSBtYWRlIHZpYSBYSFIgd2l0aCBhIHNwZWNpYWwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhYH08L2lubGluZUNvZGU+e2AgaGVhZGVyIHNldCB0byBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0cnVlYH08L2lubGluZUNvZGU+e2AuIFRoaXMgaGVhZGVyIGluZGljYXRlcyB0aGF0IHRoZSByZXF1ZXN0IGlzIGJlaW5nIG1hZGUgYnkgSW5lcnRpYSwgYW5kIGlzbid0IGEgc3RhbmRhcmQgZnVsbC1wYWdlIHZpc2l0LmB9PC9wPlxuICAgIDxwPntgV2hlbiB0aGUgc2VydmVyIGRldGVjdHMgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFgtSW5lcnRpYWB9PC9pbmxpbmVDb2RlPntgIGhlYWRlciwgaW5zdGVhZCBvZiByZXNwb25kaW5nIHdpdGggYSBmdWxsIEhUTUwgZG9jdW1lbnQsIGl0IHJldHVybnMgYSBKU09OIHJlc3BvbnNlIHdpdGggYW4gZW5jb2RlZCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiI3RoZS1wYWdlLW9iamVjdFwiXG4gICAgICB9fT57YHBhZ2Ugb2JqZWN0YH08L2E+e2AuYH08L3A+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIG92ZXJmbG93LWhpZGRlblwiIHN0eWxlPXt7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzIwMmU1OSdcbiAgICB9fT5cbiAgPGRpdiBjbGFzc05hbWU9XCJwdC02IHB4LTYgdGV4dC13aGl0ZSBmb250LW1vbm8gdGV4dC1zbVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBmb250LWJvbGQgdGV4dC14cyB1cHBlcmNhc2VcIj5SZXF1ZXN0PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+R0VUOjwvc3Bhbj4gaHR0cDovL2V4YW1wbGUuY29tL2V2ZW50cy84MFxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+QWNjZXB0Ojwvc3Bhbj4gdGV4dC9odG1sLCBhcHBsaWNhdGlvbi94aHRtbCt4bWxcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtUmVxdWVzdGVkLVdpdGg6PC9zcGFuPiBYTUxIdHRwUmVxdWVzdFxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1JbmVydGlhOjwvc3Bhbj4gdHJ1ZVxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1JbmVydGlhLVZlcnNpb246PC9zcGFuPiA2YjE2Yjk0ZDdjNTFjYmU1YjFmYTQyYWFjOTgyNDFkNVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhzIHVwcGVyY2FzZVwiPlJlc3BvbnNlPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+SFRUUC8xLjEgMjAwIE9LPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5Db250ZW50LVR5cGU6PC9zcGFuPiBhcHBsaWNhdGlvbi9qc29uXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5WYXJ5Ojwvc3Bhbj4gQWNjZXB0XG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5YLUluZXJ0aWE6PC9zcGFuPiB0cnVlXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8Q29kZSBjbGFzc05hbWU9XCJwLTYgbGVhZGluZy1ub3JtYWxcIiBsYW5ndWFnZT1cImpzb25cIiBtZHhUeXBlPVwiQ29kZVwiPlxuICAgIHtkZWRlbnRgXG4gICAgICB7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiRXZlbnRcIixcbiAgICAgICAgXCJwcm9wc1wiOiB7XG4gICAgICAgICAgXCJldmVudFwiOiB7XG4gICAgICAgICAgICBcImlkXCI6IDgwLFxuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkJpcnRoZGF5IHBhcnR5XCIsXG4gICAgICAgICAgICBcInN0YXJ0X2RhdGVcIjogXCIyMDE5LTA2LTAyXCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ29tZSBvdXQgYW5kIGNlbGVicmF0ZSBKb25hdGhhbidzIDM2dGggYmlydGhkYXkgcGFydHkhXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidXJsXCI6IFwiL2V2ZW50cy84MFwiLFxuICAgICAgICBcInZlcnNpb25cIjogXCJjMzJiOGU0OTY1ZjQxOGFkMTZlYWViYmExZDRlOTYwZlwiXG4gICAgICB9XG4gICAgYH1cbiAgPC9Db2RlPlxuICAgIDwvZGl2PlxuICAgIDxoMj57YFRoZSBwYWdlIG9iamVjdGB9PC9oMj5cbiAgICA8cD57YEluZXJ0aWEgc2hhcmVzIGRhdGEgYmV0d2VlbiB0aGUgc2VydmVyIGFuZCBjbGllbnQgdmlhIGEgcGFnZSBvYmplY3QuIFRoaXMgb2JqZWN0IGluY2x1ZGVzIHRoZSBuZWNlc3NhcnkgaW5mb3JtYXRpb24gcmVxdWlyZWQgdG8gcmVuZGVyIHRoZSBwYWdlIGNvbXBvbmVudCwgdXBkYXRlIHRoZSBoaXN0b3J5IHN0YXRlLCBhbmQgdHJhY2sgdGhlIHNpdGUncyBhc3NldCB2ZXJzaW9uLiBUaGUgcGFnZSBvYmplY3QgaW5jbHVkZXMgdGhlIGZvbGxvd2luZyBmb3VyIHByb3BlcnRpZXM6YH08L3A+XG4gICAgPG9sPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJvbFwiPjxzdHJvbmcgcGFyZW50TmFtZT1cImxpXCI+e2Bjb21wb25lbnRgfTwvc3Ryb25nPntgOiBUaGUgbmFtZSBvZiB0aGUgSmF2YVNjcmlwdCBwYWdlIGNvbXBvbmVudC5gfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cIm9sXCI+PHN0cm9uZyBwYXJlbnROYW1lPVwibGlcIj57YHByb3BzYH08L3N0cm9uZz57YDogVGhlIHBhZ2UgcHJvcHMgKGRhdGEpLmB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwib2xcIj48c3Ryb25nIHBhcmVudE5hbWU9XCJsaVwiPntgdXJsYH08L3N0cm9uZz57YDogVGhlIHBhZ2UgdXJsLmB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwib2xcIj48c3Ryb25nIHBhcmVudE5hbWU9XCJsaVwiPntgdmVyc2lvbmB9PC9zdHJvbmc+e2A6IFRoZSBjdXJyZW50IGFzc2V0IHZlcnNpb24uYH08L2xpPlxuICAgIDwvb2w+XG4gICAgPHA+e2BPbiBzdGFuZGFyZCBmdWxsIHBhZ2UgdmlzaXRzLCB0aGUgcGFnZSBvYmplY3QgaXMgSlNPTiBlbmNvZGVkIGludG8gdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGRhdGEtcGFnZWB9PC9pbmxpbmVDb2RlPntgIGF0dHJpYnV0ZSBpbiB0aGUgcm9vdCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A8ZGl2PmB9PC9pbmxpbmVDb2RlPntgLiBPbiBJbmVydGlhIHZpc2l0cywgdGhlIHBhZ2Ugb2JqZWN0IGlzIHJldHVybmVkIGFzIHRoZSBKU09OIHBheWxvYWQuYH08L3A+XG4gICAgPGgyPntgQXNzZXQgdmVyc2lvbmluZ2B9PC9oMj5cbiAgICA8cD57YE9uZSBjb21tb24gY2hhbGxlbmdlIHdpdGggc2luZ2xlLXBhZ2UgYXBwcyBpcyByZWZyZXNoaW5nIHNpdGUgYXNzZXRzIHdoZW4gdGhleSd2ZSBiZWVuIGNoYW5nZWQuIEluZXJ0aWEgbWFrZXMgdGhpcyBlYXN5IGJ5IG9wdGlvbmFsbHkgdHJhY2tpbmcgdGhlIGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgc2l0ZSdzIGFzc2V0cy4gSW4gdGhlIGV2ZW50IHRoYXQgYW4gYXNzZXQgY2hhbmdlcywgSW5lcnRpYSB3aWxsIGF1dG9tYXRpY2FsbHkgbWFrZSBhIGhhcmQgKGZ1bGwpIHBhZ2UgdmlzaXQgaW5zdGVhZCBvZiBhbiBYSFIgdmlzaXQuYH08L3A+XG4gICAgPHA+e2BJbmNsdWRlZCBpbiB0aGUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIiN0aGUtcGFnZS1vYmplY3RcIlxuICAgICAgfX0+e2BwYWdlIG9iamVjdGB9PC9hPntgIGlzIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdmVyc2lvbmB9PC9pbmxpbmVDb2RlPntgIGlkZW50aWZpZXIuIFRoaXMgdmVyc2lvbiBpZGVudGlmaWVyIGlzIHNldCBzZXJ2ZXItc2lkZSwgYW5kIGNhbiBiZSBhIG51bWJlciwgc3RyaW5nLCBmaWxlIGhhc2gsIHdoYXRldmVyLiBJdCBkb2Vzbid0IG1hdHRlciwgYXMgbG9uZyBhcyBpdCBjaGFuZ2VzIHdoZW4gdGhlIHNpdGUncyBhc3NldHMgaGF2ZSBiZWVuIHVwZGF0ZWQuYH08L3A+XG4gICAgPHA+e2BXaGVuZXZlciBhbiBJbmVydGlhIHJlcXVlc3QgaXMgbWFkZSwgSW5lcnRpYSB3aWxsIGluY2x1ZGUgdGhlIGN1cnJlbnQgYXNzZXQgdmVyc2lvbiBpbiB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhLVZlcnNpb25gfTwvaW5saW5lQ29kZT57YCBoZWFkZXIuIFdoZW4gdGhlIHNlcnZlciByZWNlaXZlcyB0aGUgcmVxdWVzdCwgaXQgY29tcGFyZXMgdGhlIGFzc2V0IHZlcnNpb24gcHJvdmlkZWQgaW4gdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFgtSW5lcnRpYS1WZXJzaW9uYH08L2lubGluZUNvZGU+e2AgaGVhZGVyIHdpdGggdGhlIGN1cnJlbnQgYXNzZXQgdmVyc2lvbi4gVGhpcyBpcyB0eXBpY2FsbHkgaGFuZGxlZCBpbiBhIG1pZGRsZXdhcmUgbGF5ZXIuYH08L3A+XG4gICAgPHA+e2BJZiB0aGUgYXNzZXQgdmVyc2lvbnMgYXJlIHRoZSBzYW1lLCB0aGUgcmVxdWVzdCBzaW1wbHkgY29udGludWVzIGFzIGV4cGVjdGVkLiBIb3dldmVyLCBpZiB0aGV5IGFyZSBkaWZmZXJlbnQsIHRoZSBzZXJ2ZXIgaW1tZWRpYXRlbHkgcmV0dXJucyBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDQwOSBDb25mbGljdGB9PC9pbmxpbmVDb2RlPntgIHJlc3BvbnNlLCBhbmQgaW5jbHVkZXMgdGhlIFVSTCBpbiBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFgtSW5lcnRpYS1Mb2NhdGlvbmB9PC9pbmxpbmVDb2RlPntgIGhlYWRlci4gVGhpcyBoZWFkZXIgaXMgbmVjZXNzYXJ5LCBzaW5jZSBzZXJ2ZXItc2lkZSByZWRpcmVjdHMgbWF5IGhhdmUgb2NjdXJyZWQuIFRoaXMgdGVsbHMgSW5lcnRpYSB3aGF0IHRoZSBmaW5hbCBpbnRlbmRlZCBkZXN0aW5hdGlvbiBVUkwgaXMuYH08L3A+XG4gICAgPHA+e2BOb3RlLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A0MDkgQ29uZmxpY3RgfTwvaW5saW5lQ29kZT57YCByZXNwb25zZXMgYXJlIG9ubHkgc2VudCBmb3IgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgR0VUYH08L2lubGluZUNvZGU+e2AgcmVxdWVzdHMsIGFuZCBub3QgZm9yIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFBPU1QvUFVUL1BBVENIL0RFTEVURWB9PC9pbmxpbmVDb2RlPntgIHJlcXVlc3RzLiBUaGF0IHNhaWQsIHRoZXkgd2lsbCBiZSBzZW50IGluIHRoZSBldmVudCB0aGF0IGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgR0VUYH08L2lubGluZUNvZGU+e2AgcmVkaXJlY3Qgb2NjdXJzIGFmdGVyIG9uZSBvZiB0aGVzZSByZXF1ZXN0cy5gfTwvcD5cbiAgICA8cD57YEZpbmFsbHksIGluIHRoZSBldmVudCB0aGF0IGZsYXNoIHNlc3Npb24gZGF0YSBleGlzdHMgd2hlbiBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDQwOSBDb25mbGljdGB9PC9pbmxpbmVDb2RlPntgIHJlc3BvbnNlIG9jY3VycywgdGhlIHNlcnZlciB3aWxsIGF1dG9tYXRpY2FsbHkgcmVmbGFzaCB0aGlzIGRhdGEuYH08L3A+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkIG92ZXJmbG93LWhpZGRlblwiIHN0eWxlPXt7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzIwMmU1OSdcbiAgICB9fT5cbiAgPGRpdiBjbGFzc05hbWU9XCJwLTYgdGV4dC13aGl0ZSBmb250LW1vbm8gdGV4dC1zbVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBmb250LWJvbGQgdGV4dC14cyB1cHBlcmNhc2VcIj5SZXF1ZXN0PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+R0VUOjwvc3Bhbj4gaHR0cDovL2V4YW1wbGUuY29tL2V2ZW50cy84MFxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+QWNjZXB0Ojwvc3Bhbj4gdGV4dC9odG1sLCBhcHBsaWNhdGlvbi94aHRtbCt4bWxcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtUmVxdWVzdGVkLVdpdGg6PC9zcGFuPiBYTUxIdHRwUmVxdWVzdFxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1JbmVydGlhOjwvc3Bhbj4gdHJ1ZVxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1JbmVydGlhLVZlcnNpb246PC9zcGFuPiA2YjE2Yjk0ZDdjNTFjYmU1YjFmYTQyYWFjOTgyNDFkNVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhzIHVwcGVyY2FzZVwiPlJlc3BvbnNlPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+NDA5OiBDb25mbGljdDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCI+WC1JbmVydGlhLUxvY2F0aW9uOjwvc3Bhbj4gaHR0cDovL2V4YW1wbGUuY29tL2V2ZW50cy84MFxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8aDI+e2BQYXJ0aWFsIHJlbG9hZHNgfTwvaDI+XG4gICAgPHA+e2BXaGVuIG1ha2luZyBJbmVydGlhIHJlcXVlc3RzLCB0aGUgcGFydGlhbCByZWxvYWRzIG9wdGlvbiBhbGxvd3MgeW91IHRvIHJlcXVlc3QgYSBzdWJzZXQgb2YgdGhlIHByb3BzIChkYXRhKSBmcm9tIHRoZSBzZXJ2ZXIgb24gc3Vic2VxdWVudCB2aXNpdHMgdG8gdGhlIGB9PGVtIHBhcmVudE5hbWU9XCJwXCI+e2BzYW1lYH08L2VtPntgIHBhZ2UgY29tcG9uZW50LiBUaGlzIGNhbiBiZSBhIGhlbHBmdWwgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uIGlmIGl0J3MgYWNjZXB0YWJsZSB0aGF0IHNvbWUgcGFnZSBkYXRhIGJlY29tZXMgc3RhbGUuYH08L3A+XG4gICAgPHA+e2BXaGVuIGEgcGFydGlhbCByZWxvYWQgcmVxdWVzdCBpcyBtYWRlLCBJbmVydGlhIGluY2x1ZGVzIHR3byBhZGRpdGlvbmFsIGhlYWRlcnMgd2l0aCB0aGUgcmVxdWVzdDogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhLVBhcnRpYWwtRGF0YWB9PC9pbmxpbmVDb2RlPntgIGFuZCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BYLUluZXJ0aWEtUGFydGlhbC1Db21wb25lbnRgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cD57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BYLUluZXJ0aWEtUGFydGlhbC1EYXRhYH08L2lubGluZUNvZGU+e2AgaGVhZGVyIGlzIGEgY29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgdGhlIGRlc2lyZWQgcHJvcHMgKGRhdGEpIGtleXMgdGhhdCBzaG91bGQgYmUgcmV0dXJuZWQuYH08L3A+XG4gICAgPHA+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgWC1JbmVydGlhLVBhcnRpYWwtQ29tcG9uZW50YH08L2lubGluZUNvZGU+e2AgaGVhZGVyIGluY2x1ZGVzIHRoZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgdGhhdCBpcyBiZWluZyBwYXJ0aWFsbHkgcmVsb2FkZWQuIFRoaXMgaXMgbmVjZXNzYXJ5LCBzaW5jZSBwYXJ0aWFsIHJlbG9hZHMgb25seSB3b3JrIGZvciByZXF1ZXN0cyBtYWRlIHRvIHRoZSBzYW1lIHBhZ2UgY29tcG9uZW50LiBJZiB0aGUgZmluYWwgZGVzdGluYXRpb24gaXMgZGlmZmVyZW50IGZvciB3aGF0ZXZlciByZWFzb24gKGVnLiB0aGUgdXNlciB3YXMgbG9nZ2VkIG91dCBhbmQgaXMgbm93IG9uIHRoZSBsb2dpbiBwYWdlKSwgdGhlbiBubyBwYXJ0aWFsIHJlbG9hZGluZyB3aWxsIG9jY3VyLmB9PC9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBvdmVyZmxvdy1oaWRkZW5cIiBzdHlsZT17e1xuICAgICAgYmFja2dyb3VuZDogJyMyMDJlNTknXG4gICAgfX0+XG4gIDxkaXYgY2xhc3NOYW1lPVwicHQtNiBweC02IHRleHQtd2hpdGUgZm9udC1tb25vIHRleHQtc21cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgZm9udC1ib2xkIHRleHQteHMgdXBwZXJjYXNlXCI+UmVxdWVzdDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPkdFVDo8L3NwYW4+IGh0dHA6Ly9leGFtcGxlLmNvbS9ldmVudHNcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPkFjY2VwdDo8L3NwYW4+IHRleHQvaHRtbCwgYXBwbGljYXRpb24veGh0bWwreG1sXG4gICAgPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5YLVJlcXVlc3RlZC1XaXRoOjwvc3Bhbj4gWE1MSHR0cFJlcXVlc3RcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtSW5lcnRpYTo8L3NwYW4+IHRydWVcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtSW5lcnRpYS1WZXJzaW9uOjwvc3Bhbj4gNmIxNmI5NGQ3YzUxY2JlNWIxZmE0MmFhYzk4MjQxZDVcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtSW5lcnRpYS1QYXJ0aWFsLURhdGE6PC9zcGFuPiBldmVudHNcbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTQwMFwiPlgtSW5lcnRpYS1QYXJ0aWFsLUNvbXBvbmVudDo8L3NwYW4+IEV2ZW50c1xuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCB0ZXh0LWdyYXktNjAwIGZvbnQtYm9sZCB0ZXh0LXhzIHVwcGVyY2FzZVwiPlJlc3BvbnNlPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+SFRUUC8xLjEgMjAwIE9LPC9kaXY+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIj5Db250ZW50LVR5cGU6PC9zcGFuPiBhcHBsaWNhdGlvbi9qc29uXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8Q29kZSBjbGFzc05hbWU9XCJwLTYgbGVhZGluZy1ub3JtYWxcIiBsYW5ndWFnZT1cImpzb25cIiBtZHhUeXBlPVwiQ29kZVwiPlxuICAgIHtkZWRlbnRgXG4gICAgICB7XG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwiRXZlbnRzXCIsXG4gICAgICAgIFwicHJvcHNcIjoge1xuICAgICAgICAgIFwiYXV0aFwiOiB7Li4ufSwgICAgICAgLy8gTk9UIGluY2x1ZGVkXG4gICAgICAgICAgXCJjYXRlZ29yaWVzXCI6IFsuLi5dLCAvLyBOT1QgaW5jbHVkZWRcbiAgICAgICAgICBcImV2ZW50c1wiOiBbLi4uXSAgICAgIC8vIGluY2x1ZGVkXG4gICAgICAgIH0sXG4gICAgICAgIFwidXJsXCI6IFwiL2V2ZW50cy84MFwiLFxuICAgICAgICBcInZlcnNpb25cIjogXCJjMzJiOGU0OTY1ZjQxOGFkMTZlYWViYmExZDRlOTYwZlwiXG4gICAgICB9XG4gICAgYH1cbiAgPC9Db2RlPlxuICAgIDwvZGl2PlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==