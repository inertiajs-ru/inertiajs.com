webpackHotUpdate_N_E("pages/responses",{

/***/ "./pages/responses.mdx":
/*!*****************************!*\
  !*** ./pages/responses.mdx ***!
  \*****************************/
/*! exports provided: meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meta", function() { return meta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var dedent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dedent-js */ "./node_modules/dedent-js/lib/index.js");
/* harmony import */ var dedent_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dedent_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Notice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Notice */ "./components/Notice.js");
/* harmony import */ var _components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TabbedCodeExamples */ "./components/TabbedCodeExamples.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");



var _jsxFileName = "C:\\OSPanel\\projects\\inertiajs.com\\pages\\responses.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <meta name=\"description\" content=\"<%= meta %>\">\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <meta name=\"description\" content=\"{{ $meta }}\">\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        render inertia: 'Event', props: {event: event}, view_data: {meta: event.meta}\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        return Inertia::render('Event', ['event' => $event])\n            ->withViewData(['meta' => $event->meta]);\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <meta name=\"twitter:title\" content=\"<%= page['props']['event'].title %>\">\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <meta name=\"twitter:title\" content=\"{{ $page['props']['event']->title }}\">\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        class EventsController < ApplicationController\n          def show\n            event = Event.find(params[:id])\n\n            render inertia: 'Event/Show',\n              props: {\n                event: event.as_json(\n                  only: [ :id, :title, :start_date, :description ]\n                )\n              }\n          end\n        end\n      "], ["\n        class EventsController < ApplicationController\n          def show\n            event = Event.find(params[:id])\\n\n            render inertia: 'Event/Show',\n              props: {\n                event: event.as_json(\n                  only: [ :id, :title, :start_date, :description ]\n                )\n              }\n          end\n        end\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        use Inertia\\Inertia;\n\n        class EventsController extends Controller\n        {\n            public function show(Event $event)\n            {\n                return Inertia::render('Event/Show', [\n                    'event' => $event->only('id', 'title', 'start_date', 'description'),\n                ]);\n\n                // Alternatively, you can use the inertia() helper\n                return inertia('Event/Show', [\n                    'event' => $event->only('id', 'title', 'start_date', 'description'),\n                ]);\n\n            }\n        }\n      "], ["\n        use Inertia\\\\Inertia;\\n\n        class EventsController extends Controller\n        {\n            public function show(Event $event)\n            {\n                return Inertia::render('Event/Show', [\n                    'event' => $event->only('id', 'title', 'start_date', 'description'),\n                ]);\\n\n                // Alternatively, you can use the inertia() helper\n                return inertia('Event/Show', [\n                    'event' => $event->only('id', 'title', 'start_date', 'description'),\n                ]);\\n\n            }\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */






var meta = {
  title: 'Ответы',
  links: [{
    url: '#создание-ответов',
    name: 'Создание ответов'
  }, {
    url: '#данные-корневого-шаблона',
    name: 'Данные корневого шаблона'
  }, {
    url: '#максимальный-размер-ответа',
    name: 'Максимальный размер ответа'
  }]
};
var layoutProps = {
  meta: meta
};
var MDXLayout = _components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"];
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, "\u041E\u0442\u0432\u0435\u0442\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043E\u0442\u0432\u0435\u0442\u043E\u0432"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, "\u0412 \u0412\u0430\u0448\u0435\u043C \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440\u0435 \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u043A\u0430\u043A \u0438\u043C\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B JavaScript, \u0442\u0430\u043A \u0438 \u043B\u044E\u0431\u044B\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 (\u0434\u0430\u043D\u043D\u044B\u0435) \u0434\u043B\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, "\u0412 \u044D\u0442\u043E\u043C \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043C\u044B \u043F\u0435\u0440\u0435\u0434\u0430\u0435\u043C \u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E, \u043D\u0430\u0437\u044B\u0432\u0430\u0435\u043C\u043E\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 73
    }
  }, "event"), ", \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0447\u0435\u0442\u044B\u0440\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 162
    }
  }, "id"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 214
    }
  }, "title"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 269
    }
  }, "start_date"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 330
    }
  }, "description"), ") \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 411
    }
  }, "Event/Show"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Laravel',
      language: 'php',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()),
      description: "\u0427\u0442\u043E\u0431\u044B \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043E\u0442\u0432\u0435\u0442 Inertia, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u043D\u0433\u0430 Inertia. \u042D\u0442\u043E\u0442 \u043C\u0435\u0442\u043E\u0434 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0438\u043C\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u0438 \u043F\u0440\u043E\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435."
    }, {
      name: 'Rails',
      language: 'ruby',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2()),
      description: "\u0427\u0442\u043E\u0431\u044B \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043E\u0442\u0432\u0435\u0442 Inertia, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u043D\u0433\u0430 Inertia. \u042D\u0442\u043E\u0442 \u043C\u0435\u0442\u043E\u0434 \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0438\u043C\u044F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u0438 view_data as an options hash."
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mdxType: "Notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, "\u0427\u0442\u043E\u0431\u044B \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u043B\u0438\u0441\u044C \u0431\u044B\u0441\u0442\u0440\u043E, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0442\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043C\u0438\u043D\u0438\u043C\u0443\u043C \u0434\u0430\u043D\u043D\u044B\u0445, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0445 \u0434\u043B\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u0422\u0430\u043A\u0436\u0435 \u0438\u043C\u0435\u0439\u0442\u0435 \u0432 \u0432\u0438\u0434\u0443, \u0447\u0442\u043E \u0432\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u044B\u0435 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440\u0430\u043C\u0438, \u0431\u0443\u0434\u0443\u0442 \u0432\u0438\u0434\u043D\u044B \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, "\u0414\u0430\u043D\u043D\u044B\u0435 \u043A\u043E\u0440\u043D\u0435\u0432\u043E\u0433\u043E \u0448\u0430\u0431\u043B\u043E\u043D\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, "\u0411\u044B\u0432\u0430\u044E\u0442 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u043A\u043E\u0433\u0434\u0430 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u0445\u043E\u0442\u0435\u0442\u044C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0441\u0432\u043E\u0438\u043C \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u043C \u0432 \u043A\u043E\u0440\u043D\u0435\u0432\u043E\u043C \u0448\u0430\u0431\u043B\u043E\u043D\u0435 Blade. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0435\u0442\u0430\u0442\u0435\u0433\u0438 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F, \u043C\u0435\u0442\u0430\u0442\u0435\u0433\u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u0435\u043A Twitter \u0438\u043B\u0438 \u043C\u0435\u0442\u0430\u0442\u0435\u0433\u0438 Facebook Open Graph."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Laravel',
      language: 'twig',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3()),
      description: "These props are available via the $page variable."
    }, {
      name: 'Rails',
      language: 'erb',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject4()),
      description: "These props are available via the page variable."
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, "\u0418\u043D\u043E\u0433\u0434\u0430 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430\u0436\u0435 \u0437\u0430\u0445\u043E\u0442\u0435\u0442\u044C \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u0431\u0443\u0434\u0443\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u044B \u0412\u0430\u0448\u0435\u043C\u0443 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0443 JavaScript."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Laravel',
      language: 'php',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject5()),
      description: "Do this using the withViewData() method."
    }, {
      name: 'Rails',
      language: 'ruby',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject6()),
      description: "Do this using the \"view_data\" option"
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, "\u0417\u0430\u0442\u0435\u043C \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u044D\u0442\u043E\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u043A\u0430\u043A \u043A \u043E\u0431\u044B\u0447\u043D\u043E\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0439 \u0448\u0430\u0431\u043B\u043E\u043D\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Laravel',
      language: 'twig',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject7())
    }, {
      name: 'Rails',
      language: 'erb',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject8())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }
  }, "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u043E\u0442\u0432\u0435\u0442\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 5
    }
  }, "\u0427\u0442\u043E\u0431\u044B \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044E \u043F\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430, \u0432\u0441\u0435 \u043E\u0442\u0432\u0435\u0442\u044B \u0441\u0435\u0440\u0432\u0435\u0440\u0430 Inertia \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442\u0441\u044F \u0432 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430. \u0425\u043E\u0440\u043E\u0448\u043E \u0437\u043D\u0430\u0442\u044C, \u0447\u0442\u043E \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u044B \u043D\u0430\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u044E\u0442 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u043D\u0430 \u0440\u0430\u0437\u043C\u0435\u0440 \u0434\u0430\u043D\u043D\u044B\u0445, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u0442\u0430\u043C \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/History/pushState"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 260
    }
  }), "Firefox"), " \u0438\u043C\u0435\u0435\u0442 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u043D\u0430 \u0440\u0430\u0437\u043C\u0435\u0440 \u0432 640 \u0442\u044B\u0441. \u0421\u0438\u043C\u0432\u043E\u043B\u043E\u0432 (\u0438 \u0432\u044B\u0434\u0430\u0435\u0442 \u043E\u0448\u0438\u0431\u043A\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 95
    }
  }, "NS_ERROR_ILLEGAL_VALUE"), ", \u0435\u0441\u043B\u0438 \u0412\u044B \u0435\u0433\u043E \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442\u0435.). \u041E\u0431\u044B\u0447\u043D\u043E \u044D\u0442\u043E \u043D\u0430\u043C\u043D\u043E\u0433\u043E \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0412\u0430\u043C \u043A\u043E\u0433\u0434\u0430-\u043B\u0438\u0431\u043E \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u0441\u044F, \u043D\u043E \u0445\u043E\u0440\u043E\u0448\u043E \u0437\u043D\u0430\u0442\u044C \u043E\u0431 \u044D\u0442\u043E\u043C \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F Inertia."));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzcG9uc2VzLm1keCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJsaW5rcyIsInVybCIsIm5hbWUiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIkxheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJsYW5ndWFnZSIsImNvZGUiLCJkZWRlbnQiLCJkZXNjcmlwdGlvbiIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsUUFEVztBQUVsQkMsT0FBSyxFQUFFLENBQUM7QUFDTkMsT0FBRyxFQUFFLG1CQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsMkJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FISSxFQU1KO0FBQ0RELE9BQUcsRUFBRSw2QkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQU5JO0FBRlcsQ0FBYjtBQWNQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJ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LEVBb0ZMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCVixVQUFJLEVBQUUsU0FEdUI7QUFFN0JPLGNBQVEsRUFBRSxNQUZtQjtBQUc3QkMsVUFBSSxFQUFFQyxnREFBRjtBQUh5QixLQUFELEVBTTNCO0FBQ0RULFVBQUksRUFBRSxPQURMO0FBRURPLGNBQVEsRUFBRSxLQUZUO0FBR0RDLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQU4yQixDQUE5QjtBQVlJLFdBQU8sRUFBQyxvQkFaWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEZLLEVBaUdMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEpBakdLLEVBa0dMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbXZDQUErUDtBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ2pSLFlBQVE7QUFEeVEsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBL1AsNlRBRTBGO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRjFGLDJxQkFsR0ssQ0FBUDtBQXNHRDtLQTFHdUJMLFU7QUE0R3hCO0FBQ0FBLFVBQVUsQ0FBQ08sY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNwb25zZXMuZTk2NWYxODk3MmJlNTkxZDNhMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCBkZWRlbnQgZnJvbSAnZGVkZW50LWpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBOb3RpY2UgZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RpY2UnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0J7RgtCy0LXRgtGLJyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI9GB0L7Qt9C00LDQvdC40LUt0L7RgtCy0LXRgtC+0LInLFxuICAgIG5hbWU6ICfQodC+0LfQtNCw0L3QuNC1INC+0YLQstC10YLQvtCyJ1xuICB9LCB7XG4gICAgdXJsOiAnI9C00LDQvdC90YvQtS3QutC+0YDQvdC10LLQvtCz0L4t0YjQsNCx0LvQvtC90LAnLFxuICAgIG5hbWU6ICfQlNCw0L3QvdGL0LUg0LrQvtGA0L3QtdCy0L7Qs9C+INGI0LDQsdC70L7QvdCwJ1xuICB9LCB7XG4gICAgdXJsOiAnI9C80LDQutGB0LjQvNCw0LvRjNC90YvQuS3RgNCw0LfQvNC10YAt0L7RgtCy0LXRgtCwJyxcbiAgICBuYW1lOiAn0JzQsNC60YHQuNC80LDQu9GM0L3Ri9C5INGA0LDQt9C80LXRgCDQvtGC0LLQtdGC0LAnXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQntGC0LLQtdGC0YtgfTwvaDE+XG4gICAgPGgyPntg0KHQvtC30LTQsNC90LjQtSDQvtGC0LLQtdGC0L7QsmB9PC9oMj5cbiAgICA8cD57YNCSINCS0LDRiNC10Lwg0LrQvtC90YLRgNC+0LvQu9C10YDQtSDRg9C60LDQttC40YLQtSDQutCw0Log0LjQvNGPINC60L7QvNC/0L7QvdC10L3RgtCwINGB0YLRgNCw0L3QuNGG0YsgSmF2YVNjcmlwdCwg0YLQsNC6INC4INC70Y7QsdGL0LUg0YHQstC+0LnRgdGC0LLQsCAo0LTQsNC90L3Ri9C1KSDQtNC70Y8g0YHRgtGA0LDQvdC40YbRiy5gfTwvcD5cbiAgICA8cD57YNCSINGN0YLQvtC8INC/0YDQuNC80LXRgNC1INC80Ysg0L/QtdGA0LXQtNCw0LXQvCDQtdC00LjQvdGB0YLQstC10L3QvdC+0LUg0YHQstC+0LnRgdGC0LLQviwg0L3QsNC30YvQstCw0LXQvNC+0LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXZlbnRgfTwvaW5saW5lQ29kZT57YCwg0LrQvtGC0L7RgNC+0LUg0YHQvtC00LXRgNC20LjRgiDRh9C10YLRi9GA0LUg0LDRgtGA0LjQsdGD0YLQsCAoYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaWRgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdGl0bGVgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgc3RhcnRfZGF0ZWB9PC9pbmxpbmVDb2RlPntgINC4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGRlc2NyaXB0aW9uYH08L2lubGluZUNvZGU+e2ApINC60L7QvNC/0L7QvdC10L3RgtGDINGB0YLRgNCw0L3QuNGG0YsgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgRXZlbnQvU2hvd2B9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3BocCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIHVzZSBJbmVydGlhXFxcXEluZXJ0aWE7XFxuXG4gICAgICAgIGNsYXNzIEV2ZW50c0NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHB1YmxpYyBmdW5jdGlvbiBzaG93KEV2ZW50ICRldmVudClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSW5lcnRpYTo6cmVuZGVyKCdFdmVudC9TaG93JywgW1xuICAgICAgICAgICAgICAgICAgICAnZXZlbnQnID0+ICRldmVudC0+b25seSgnaWQnLCAndGl0bGUnLCAnc3RhcnRfZGF0ZScsICdkZXNjcmlwdGlvbicpLFxuICAgICAgICAgICAgICAgIF0pO1xcblxuICAgICAgICAgICAgICAgIC8vIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gdXNlIHRoZSBpbmVydGlhKCkgaGVscGVyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZXJ0aWEoJ0V2ZW50L1Nob3cnLCBbXG4gICAgICAgICAgICAgICAgICAgICdldmVudCcgPT4gJGV2ZW50LT5vbmx5KCdpZCcsICd0aXRsZScsICdzdGFydF9kYXRlJywgJ2Rlc2NyaXB0aW9uJyksXG4gICAgICAgICAgICAgICAgXSk7XFxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogYNCn0YLQvtCx0Ysg0YHQtNC10LvQsNGC0Ywg0L7RgtCy0LXRgiBJbmVydGlhLCDQuNGB0L/QvtC70YzQt9GD0LnRgtC1INGE0YPQvdC60YbQuNGOINGA0LXQvdC00LXRgNC40L3Qs9CwIEluZXJ0aWEuINCt0YLQvtGCINC80LXRgtC+0LQg0L/RgNC40L3QuNC80LDQtdGCINC40LzRjyDQutC+0LzQv9C+0L3QtdC90YLQsCDQuCDQv9C+0LfQstC+0LvRj9C10YIg0L/QtdGA0LXQtNCw0LLQsNGC0Ywg0YHQstC+0LnRgdGC0LLQsCDQuCDQv9GA0L7RgdC80LDRgtGA0LjQstCw0YLRjCDQtNCw0L3QvdGL0LUuYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSYWlscycsXG4gICAgICBsYW5ndWFnZTogJ3J1YnknLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBjbGFzcyBFdmVudHNDb250cm9sbGVyIDwgQXBwbGljYXRpb25Db250cm9sbGVyXG4gICAgICAgICAgZGVmIHNob3dcbiAgICAgICAgICAgIGV2ZW50ID0gRXZlbnQuZmluZChwYXJhbXNbOmlkXSlcXG5cbiAgICAgICAgICAgIHJlbmRlciBpbmVydGlhOiAnRXZlbnQvU2hvdycsXG4gICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LmFzX2pzb24oXG4gICAgICAgICAgICAgICAgICBvbmx5OiBbIDppZCwgOnRpdGxlLCA6c3RhcnRfZGF0ZSwgOmRlc2NyaXB0aW9uIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICBlbmRcbiAgICAgICAgZW5kXG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246IGDQp9GC0L7QsdGLINGB0LTQtdC70LDRgtGMINC+0YLQstC10YIgSW5lcnRpYSwg0LjRgdC/0L7Qu9GM0LfRg9C50YLQtSDRhNGD0L3QutGG0LjRjiDRgNC10L3QtNC10YDQuNC90LPQsCBJbmVydGlhLiDQrdGC0L7RgiDQvNC10YLQvtC0INC/0YDQuNC90LjQvNCw0LXRgiDQuNC80Y8g0LrQvtC80L/QvtC90LXQvdGC0LAg0Lgg0L/QvtC30LLQvtC70Y/QtdGCINC/0LXRgNC10LTQsNCy0LDRgtGMINGB0LLQvtC50YHRgtCy0LAg0Lggdmlld19kYXRhIGFzIGFuIG9wdGlvbnMgaGFzaC5gXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxOb3RpY2UgbWR4VHlwZT1cIk5vdGljZVwiPlxuICDQp9GC0L7QsdGLINGB0YLRgNCw0L3QuNGG0Ysg0LfQsNCz0YDRg9C20LDQu9C40YHRjCDQsdGL0YHRgtGA0L4sINCy0L7Qt9Cy0YDQsNGJ0LDQudGC0LUg0YLQvtC70YzQutC+INC80LjQvdC40LzRg9C8INC00LDQvdC90YvRhSwg0L3QtdC+0LHRhdC+0LTQuNC80YvRhSDQtNC70Y8g0YHRgtGA0LDQvdC40YbRiy4g0KLQsNC60LbQtSDQuNC80LXQudGC0LUg0LIg0LLQuNC00YMsINGH0YLQviDQstGB0LUg0LTQsNC90L3Ri9C1LCDQstC+0LfQstGA0LDRidCw0LXQvNGL0LUg0LrQvtC90YLRgNC+0LvQu9C10YDQsNC80LgsINCx0YPQtNGD0YIg0LLQuNC00L3RiyDQvdCwINGB0YLQvtGA0L7QvdC1INC60LvQuNC10L3RgtCwLCDQv9C+0Y3RgtC+0LzRgyDQvdC1INC30LDQsdGD0LTRjNGC0LUg0L7Qv9GD0YHRgtC40YLRjCDQutC+0L3RhNC40LTQtdC90YbQuNCw0LvRjNC90YPRjiDQuNC90YTQvtGA0LzQsNGG0LjRji5cbiAgICA8L05vdGljZT5cbiAgICA8aDI+e2DQlNCw0L3QvdGL0LUg0LrQvtGA0L3QtdCy0L7Qs9C+INGI0LDQsdC70L7QvdCwYH08L2gyPlxuICAgIDxwPntg0JHRi9Cy0LDRjtGCINGB0LjRgtGD0LDRhtC40LgsINC60L7Qs9C00LAg0JLRiyDQvNC+0LbQtdGC0LUg0LfQsNGF0L7RgtC10YLRjCDQv9C+0LvRg9GH0LjRgtGMINC00L7RgdGC0YPQvyDQuiDRgdCy0L7QuNC8INGB0LLQvtC50YHRgtCy0LDQvCDQsiDQutC+0YDQvdC10LLQvtC8INGI0LDQsdC70L7QvdC1IEJsYWRlLiDQndCw0L/RgNC40LzQtdGALCDQktGLINC80L7QttC10YLQtSDQtNC+0LHQsNCy0LjRgtGMINC80LXRgtCw0YLQtdCz0Lgg0L7Qv9C40YHQsNC90LjRjywg0LzQtdGC0LDRgtC10LPQuCDQutCw0YDRgtC+0YfQtdC6IFR3aXR0ZXIg0LjQu9C4INC80LXRgtCw0YLQtdCz0LggRmFjZWJvb2sgT3BlbiBHcmFwaC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ0xhcmF2ZWwnLFxuICAgICAgbGFuZ3VhZ2U6ICd0d2lnJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwie3sgJHBhZ2VbJ3Byb3BzJ11bJ2V2ZW50J10tPnRpdGxlIH19XCI+XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246IGBUaGVzZSBwcm9wcyBhcmUgYXZhaWxhYmxlIHZpYSB0aGUgJHBhZ2UgdmFyaWFibGUuYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSYWlscycsXG4gICAgICBsYW5ndWFnZTogJ2VyYicsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD1cIjwlPSBwYWdlWydwcm9wcyddWydldmVudCddLnRpdGxlICU+XCI+XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246IGBUaGVzZSBwcm9wcyBhcmUgYXZhaWxhYmxlIHZpYSB0aGUgcGFnZSB2YXJpYWJsZS5gXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntg0JjQvdC+0LPQtNCwINCS0Ysg0LzQvtC20LXRgtC1INC00LDQttC1INC30LDRhdC+0YLQtdGC0Ywg0L/RgNC10LTQvtGB0YLQsNCy0LjRgtGMINC00LDQvdC90YvQtSwg0LrQvtGC0L7RgNGL0LUg0L3QtSDQsdGD0LTRg9GCINC+0YLQv9GA0LDQstC70LXQvdGLINCS0LDRiNC10LzRgyDQutC+0LzQv9C+0L3QtdC90YLRgyBKYXZhU2NyaXB0LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3BocCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIHJldHVybiBJbmVydGlhOjpyZW5kZXIoJ0V2ZW50JywgWydldmVudCcgPT4gJGV2ZW50XSlcbiAgICAgICAgICAgIC0+d2l0aFZpZXdEYXRhKFsnbWV0YScgPT4gJGV2ZW50LT5tZXRhXSk7XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246IGBEbyB0aGlzIHVzaW5nIHRoZSB3aXRoVmlld0RhdGEoKSBtZXRob2QuYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSYWlscycsXG4gICAgICBsYW5ndWFnZTogJ3J1YnknLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICByZW5kZXIgaW5lcnRpYTogJ0V2ZW50JywgcHJvcHM6IHtldmVudDogZXZlbnR9LCB2aWV3X2RhdGE6IHttZXRhOiBldmVudC5tZXRhfVxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiBgRG8gdGhpcyB1c2luZyB0aGUgXCJ2aWV3X2RhdGFcIiBvcHRpb25gXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntg0JfQsNGC0LXQvCDQktGLINC80L7QttC10YLQtSDQv9C+0LvRg9GH0LjRgtGMINC00L7RgdGC0YPQvyDQuiDRjdGC0L7QuSDQv9C10YDQtdC80LXQvdC90L7QuSDQutCw0Log0Log0L7QsdGL0YfQvdC+0Lkg0L/QtdGA0LXQvNC10L3QvdC+0Lkg0YjQsNCx0LvQvtC90LAuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdMYXJhdmVsJyxcbiAgICAgIGxhbmd1YWdlOiAndHdpZycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJ7eyAkbWV0YSB9fVwiPlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSYWlscycsXG4gICAgICBsYW5ndWFnZTogJ2VyYicsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCI8JT0gbWV0YSAlPlwiPlxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8aDI+e2DQnNCw0LrRgdC40LzQsNC70YzQvdGL0Lkg0YDQsNC30LzQtdGAINC+0YLQstC10YLQsGB9PC9oMj5cbiAgICA8cD57YNCn0YLQvtCx0Ysg0LLQutC70Y7Rh9C40YLRjCDQvdCw0LLQuNCz0LDRhtC40Y4g0L/QviDQuNGB0YLQvtGA0LjQuCDQvdCwINGB0YLQvtGA0L7QvdC1INC60LvQuNC10L3RgtCwLCDQstGB0LUg0L7RgtCy0LXRgtGLINGB0LXRgNCy0LXRgNCwIEluZXJ0aWEg0YHQvtGF0YDQsNC90Y/RjtGC0YHRjyDQsiDRgdC+0YHRgtC+0Y/QvdC40Lgg0LjRgdGC0L7RgNC40Lgg0LHRgNCw0YPQt9C10YDQsC4g0KXQvtGA0L7RiNC+INC30L3QsNGC0YwsINGH0YLQviDQvdC10LrQvtGC0L7RgNGL0LUg0LHRgNCw0YPQt9C10YDRiyDQvdCw0LrQu9Cw0LTRi9Cy0LDRjtGCINC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0L3QsCDRgNCw0LfQvNC10YAg0LTQsNC90L3Ri9GFLCDQutC+0YLQvtGA0YvQtSDQvNC+0LPRg9GCINCx0YvRgtGMINGC0LDQvCDRgdC+0YXRgNCw0L3QtdC90YsuINCd0LDQv9GA0LjQvNC10YAsIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9wdXNoU3RhdGVcIlxuICAgICAgfX0+e2BGaXJlZm94YH08L2E+e2Ag0LjQvNC10LXRgiDQvtCz0YDQsNC90LjRh9C10L3QuNC1INC90LAg0YDQsNC30LzQtdGAINCyIDY0MCDRgtGL0YEuINCh0LjQvNCy0L7Qu9C+0LIgKNC4INCy0YvQtNCw0LXRgiDQvtGI0LjQsdC60YMgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgTlNfRVJST1JfSUxMRUdBTF9WQUxVRWB9PC9pbmxpbmVDb2RlPntgLCDQtdGB0LvQuCDQktGLINC10LPQviDQv9GA0LXQstGL0YjQsNC10YLQtS4pLiDQntCx0YvRh9C90L4g0Y3RgtC+INC90LDQvNC90L7Qs9C+INCx0L7Qu9GM0YjQtSwg0YfQtdC8INCS0LDQvCDQutC+0LPQtNCwLdC70LjQsdC+INC/0L7QvdCw0LTQvtCx0LjRgtGB0Y8sINC90L4g0YXQvtGA0L7RiNC+INC30L3QsNGC0Ywg0L7QsSDRjdGC0L7QvCDQv9GA0Lgg0YHQvtC30LTQsNC90LjQuCDQv9GA0LjQu9C+0LbQtdC90LjRjyBJbmVydGlhLmB9PC9wPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==