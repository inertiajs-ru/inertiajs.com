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
      description: "\u0427\u0442\u043E\u0431\u044B \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043E\u0442\u0432\u0435\u0442 Inertia, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u043D\u0433\u0430 Inertia. This method takes the component name, and allows you to pass props and view data."
    }, {
      name: 'Rails',
      language: 'ruby',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2()),
      description: "To make an Inertia response, use the inertia renderer. This renderer takes the component name, and allows you to pass props and view_data as an options hash."
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzcG9uc2VzLm1keCJdLCJuYW1lcyI6WyJtZXRhIiwidGl0bGUiLCJsaW5rcyIsInVybCIsIm5hbWUiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIkxheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJsYW5ndWFnZSIsImNvZGUiLCJkZWRlbnQiLCJkZXNjcmlwdGlvbiIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsUUFEVztBQUVsQkMsT0FBSyxFQUFFLENBQUM7QUFDTkMsT0FBRyxFQUFFLG1CQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsMkJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FISSxFQU1KO0FBQ0RELE9BQUcsRUFBRSw2QkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQU5JO0FBRlcsQ0FBYjtBQWNQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJ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LEVBb0ZMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCVixVQUFJLEVBQUUsU0FEdUI7QUFFN0JPLGNBQVEsRUFBRSxNQUZtQjtBQUc3QkMsVUFBSSxFQUFFQyxnREFBRjtBQUh5QixLQUFELEVBTTNCO0FBQ0RULFVBQUksRUFBRSxPQURMO0FBRURPLGNBQVEsRUFBRSxLQUZUO0FBR0RDLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQU4yQixDQUE5QjtBQVlJLFdBQU8sRUFBQyxvQkFaWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEZLLEVBaUdMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEpBakdLLEVBa0dMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbXZDQUErUDtBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ2pSLFlBQVE7QUFEeVEsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBL1AsNlRBRTBGO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBRjFGLDJxQkFsR0ssQ0FBUDtBQXNHRDtLQTFHdUJMLFU7QUE0R3hCO0FBQ0FBLFVBQVUsQ0FBQ08sY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZXNwb25zZXMuZjY1OTRjZjQzNGI2ZmZjZmMzMWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCBkZWRlbnQgZnJvbSAnZGVkZW50LWpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBOb3RpY2UgZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RpY2UnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0J7RgtCy0LXRgtGLJyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI9GB0L7Qt9C00LDQvdC40LUt0L7RgtCy0LXRgtC+0LInLFxuICAgIG5hbWU6ICfQodC+0LfQtNCw0L3QuNC1INC+0YLQstC10YLQvtCyJ1xuICB9LCB7XG4gICAgdXJsOiAnI9C00LDQvdC90YvQtS3QutC+0YDQvdC10LLQvtCz0L4t0YjQsNCx0LvQvtC90LAnLFxuICAgIG5hbWU6ICfQlNCw0L3QvdGL0LUg0LrQvtGA0L3QtdCy0L7Qs9C+INGI0LDQsdC70L7QvdCwJ1xuICB9LCB7XG4gICAgdXJsOiAnI9C80LDQutGB0LjQvNCw0LvRjNC90YvQuS3RgNCw0LfQvNC10YAt0L7RgtCy0LXRgtCwJyxcbiAgICBuYW1lOiAn0JzQsNC60YHQuNC80LDQu9GM0L3Ri9C5INGA0LDQt9C80LXRgCDQvtGC0LLQtdGC0LAnXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQntGC0LLQtdGC0YtgfTwvaDE+XG4gICAgPGgyPntg0KHQvtC30LTQsNC90LjQtSDQvtGC0LLQtdGC0L7QsmB9PC9oMj5cbiAgICA8cD57YNCSINCS0LDRiNC10Lwg0LrQvtC90YLRgNC+0LvQu9C10YDQtSDRg9C60LDQttC40YLQtSDQutCw0Log0LjQvNGPINC60L7QvNC/0L7QvdC10L3RgtCwINGB0YLRgNCw0L3QuNGG0YsgSmF2YVNjcmlwdCwg0YLQsNC6INC4INC70Y7QsdGL0LUg0YHQstC+0LnRgdGC0LLQsCAo0LTQsNC90L3Ri9C1KSDQtNC70Y8g0YHRgtGA0LDQvdC40YbRiy5gfTwvcD5cbiAgICA8cD57YNCSINGN0YLQvtC8INC/0YDQuNC80LXRgNC1INC80Ysg0L/QtdGA0LXQtNCw0LXQvCDQtdC00LjQvdGB0YLQstC10L3QvdC+0LUg0YHQstC+0LnRgdGC0LLQviwg0L3QsNC30YvQstCw0LXQvNC+0LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXZlbnRgfTwvaW5saW5lQ29kZT57YCwg0LrQvtGC0L7RgNC+0LUg0YHQvtC00LXRgNC20LjRgiDRh9C10YLRi9GA0LUg0LDRgtGA0LjQsdGD0YLQsCAoYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaWRgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdGl0bGVgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgc3RhcnRfZGF0ZWB9PC9pbmxpbmVDb2RlPntgINC4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGRlc2NyaXB0aW9uYH08L2lubGluZUNvZGU+e2ApINC60L7QvNC/0L7QvdC10L3RgtGDINGB0YLRgNCw0L3QuNGG0YsgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgRXZlbnQvU2hvd2B9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3BocCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIHVzZSBJbmVydGlhXFxcXEluZXJ0aWE7XFxuXG4gICAgICAgIGNsYXNzIEV2ZW50c0NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHB1YmxpYyBmdW5jdGlvbiBzaG93KEV2ZW50ICRldmVudClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSW5lcnRpYTo6cmVuZGVyKCdFdmVudC9TaG93JywgW1xuICAgICAgICAgICAgICAgICAgICAnZXZlbnQnID0+ICRldmVudC0+b25seSgnaWQnLCAndGl0bGUnLCAnc3RhcnRfZGF0ZScsICdkZXNjcmlwdGlvbicpLFxuICAgICAgICAgICAgICAgIF0pO1xcblxuICAgICAgICAgICAgICAgIC8vIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gdXNlIHRoZSBpbmVydGlhKCkgaGVscGVyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZXJ0aWEoJ0V2ZW50L1Nob3cnLCBbXG4gICAgICAgICAgICAgICAgICAgICdldmVudCcgPT4gJGV2ZW50LT5vbmx5KCdpZCcsICd0aXRsZScsICdzdGFydF9kYXRlJywgJ2Rlc2NyaXB0aW9uJyksXG4gICAgICAgICAgICAgICAgXSk7XFxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogYNCn0YLQvtCx0Ysg0YHQtNC10LvQsNGC0Ywg0L7RgtCy0LXRgiBJbmVydGlhLCDQuNGB0L/QvtC70YzQt9GD0LnRgtC1INGE0YPQvdC60YbQuNGOINGA0LXQvdC00LXRgNC40L3Qs9CwIEluZXJ0aWEuIFRoaXMgbWV0aG9kIHRha2VzIHRoZSBjb21wb25lbnQgbmFtZSwgYW5kIGFsbG93cyB5b3UgdG8gcGFzcyBwcm9wcyBhbmQgdmlldyBkYXRhLmBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmFpbHMnLFxuICAgICAgbGFuZ3VhZ2U6ICdydWJ5JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgY2xhc3MgRXZlbnRzQ29udHJvbGxlciA8IEFwcGxpY2F0aW9uQ29udHJvbGxlclxuICAgICAgICAgIGRlZiBzaG93XG4gICAgICAgICAgICBldmVudCA9IEV2ZW50LmZpbmQocGFyYW1zWzppZF0pXFxuXG4gICAgICAgICAgICByZW5kZXIgaW5lcnRpYTogJ0V2ZW50L1Nob3cnLFxuICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudC5hc19qc29uKFxuICAgICAgICAgICAgICAgICAgb25seTogWyA6aWQsIDp0aXRsZSwgOnN0YXJ0X2RhdGUsIDpkZXNjcmlwdGlvbiBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgZW5kXG4gICAgICAgIGVuZFxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiBgVG8gbWFrZSBhbiBJbmVydGlhIHJlc3BvbnNlLCB1c2UgdGhlIGluZXJ0aWEgcmVuZGVyZXIuIFRoaXMgcmVuZGVyZXIgdGFrZXMgdGhlIGNvbXBvbmVudCBuYW1lLCBhbmQgYWxsb3dzIHlvdSB0byBwYXNzIHByb3BzIGFuZCB2aWV3X2RhdGEgYXMgYW4gb3B0aW9ucyBoYXNoLmBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPE5vdGljZSBtZHhUeXBlPVwiTm90aWNlXCI+XG4gINCn0YLQvtCx0Ysg0YHRgtGA0LDQvdC40YbRiyDQt9Cw0LPRgNGD0LbQsNC70LjRgdGMINCx0YvRgdGC0YDQviwg0LLQvtC30LLRgNCw0YnQsNC50YLQtSDRgtC+0LvRjNC60L4g0LzQuNC90LjQvNGD0Lwg0LTQsNC90L3Ri9GFLCDQvdC10L7QsdGF0L7QtNC40LzRi9GFINC00LvRjyDRgdGC0YDQsNC90LjRhtGLLiDQotCw0LrQttC1INC40LzQtdC50YLQtSDQsiDQstC40LTRgywg0YfRgtC+INCy0YHQtSDQtNCw0L3QvdGL0LUsINCy0L7Qt9Cy0YDQsNGJ0LDQtdC80YvQtSDQutC+0L3RgtGA0L7Qu9C70LXRgNCw0LzQuCwg0LHRg9C00YPRgiDQstC40LTQvdGLINC90LAg0YHRgtC+0YDQvtC90LUg0LrQu9C40LXQvdGC0LAsINC/0L7RjdGC0L7QvNGDINC90LUg0LfQsNCx0YPQtNGM0YLQtSDQvtC/0YPRgdGC0LjRgtGMINC60L7QvdGE0LjQtNC10L3RhtC40LDQu9GM0L3Rg9GOINC40L3RhNC+0YDQvNCw0YbQuNGOLlxuICAgIDwvTm90aWNlPlxuICAgIDxoMj57YNCU0LDQvdC90YvQtSDQutC+0YDQvdC10LLQvtCz0L4g0YjQsNCx0LvQvtC90LBgfTwvaDI+XG4gICAgPHA+e2DQkdGL0LLQsNGO0YIg0YHQuNGC0YPQsNGG0LjQuCwg0LrQvtCz0LTQsCDQktGLINC80L7QttC10YLQtSDQt9Cw0YXQvtGC0LXRgtGMINC/0L7Qu9GD0YfQuNGC0Ywg0LTQvtGB0YLRg9C/INC6INGB0LLQvtC40Lwg0YHQstC+0LnRgdGC0LLQsNC8INCyINC60L7RgNC90LXQstC+0Lwg0YjQsNCx0LvQvtC90LUgQmxhZGUuINCd0LDQv9GA0LjQvNC10YAsINCS0Ysg0LzQvtC20LXRgtC1INC00L7QsdCw0LLQuNGC0Ywg0LzQtdGC0LDRgtC10LPQuCDQvtC/0LjRgdCw0L3QuNGPLCDQvNC10YLQsNGC0LXQs9C4INC60LDRgNGC0L7Rh9C10LogVHdpdHRlciDQuNC70Lgg0LzQtdGC0LDRgtC10LPQuCBGYWNlYm9vayBPcGVuIEdyYXBoLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3R3aWcnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCJ7eyAkcGFnZVsncHJvcHMnXVsnZXZlbnQnXS0+dGl0bGUgfX1cIj5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogYFRoZXNlIHByb3BzIGFyZSBhdmFpbGFibGUgdmlhIHRoZSAkcGFnZSB2YXJpYWJsZS5gXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JhaWxzJyxcbiAgICAgIGxhbmd1YWdlOiAnZXJiJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiPCU9IHBhZ2VbJ3Byb3BzJ11bJ2V2ZW50J10udGl0bGUgJT5cIj5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogYFRoZXNlIHByb3BzIGFyZSBhdmFpbGFibGUgdmlhIHRoZSBwYWdlIHZhcmlhYmxlLmBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2DQmNC90L7Qs9C00LAg0JLRiyDQvNC+0LbQtdGC0LUg0LTQsNC20LUg0LfQsNGF0L7RgtC10YLRjCDQv9GA0LXQtNC+0YHRgtCw0LLQuNGC0Ywg0LTQsNC90L3Ri9C1LCDQutC+0YLQvtGA0YvQtSDQvdC1INCx0YPQtNGD0YIg0L7RgtC/0YDQsNCy0LvQtdC90Ysg0JLQsNGI0LXQvNGDINC60L7QvNC/0L7QvdC10L3RgtGDIEphdmFTY3JpcHQuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdMYXJhdmVsJyxcbiAgICAgIGxhbmd1YWdlOiAncGhwJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgcmV0dXJuIEluZXJ0aWE6OnJlbmRlcignRXZlbnQnLCBbJ2V2ZW50JyA9PiAkZXZlbnRdKVxuICAgICAgICAgICAgLT53aXRoVmlld0RhdGEoWydtZXRhJyA9PiAkZXZlbnQtPm1ldGFdKTtcbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogYERvIHRoaXMgdXNpbmcgdGhlIHdpdGhWaWV3RGF0YSgpIG1ldGhvZC5gXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JhaWxzJyxcbiAgICAgIGxhbmd1YWdlOiAncnVieScsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIHJlbmRlciBpbmVydGlhOiAnRXZlbnQnLCBwcm9wczoge2V2ZW50OiBldmVudH0sIHZpZXdfZGF0YToge21ldGE6IGV2ZW50Lm1ldGF9XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246IGBEbyB0aGlzIHVzaW5nIHRoZSBcInZpZXdfZGF0YVwiIG9wdGlvbmBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2DQl9Cw0YLQtdC8INCS0Ysg0LzQvtC20LXRgtC1INC/0L7Qu9GD0YfQuNGC0Ywg0LTQvtGB0YLRg9C/INC6INGN0YLQvtC5INC/0LXRgNC10LzQtdC90L3QvtC5INC60LDQuiDQuiDQvtCx0YvRh9C90L7QuSDQv9C10YDQtdC80LXQvdC90L7QuSDRiNCw0LHQu9C+0L3QsC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ0xhcmF2ZWwnLFxuICAgICAgbGFuZ3VhZ2U6ICd0d2lnJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cInt7ICRtZXRhIH19XCI+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JhaWxzJyxcbiAgICAgIGxhbmd1YWdlOiAnZXJiJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIjwlPSBtZXRhICU+XCI+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCc0LDQutGB0LjQvNCw0LvRjNC90YvQuSDRgNCw0LfQvNC10YAg0L7RgtCy0LXRgtCwYH08L2gyPlxuICAgIDxwPntg0KfRgtC+0LHRiyDQstC60LvRjtGH0LjRgtGMINC90LDQstC40LPQsNGG0LjRjiDQv9C+INC40YHRgtC+0YDQuNC4INC90LAg0YHRgtC+0YDQvtC90LUg0LrQu9C40LXQvdGC0LAsINCy0YHQtSDQvtGC0LLQtdGC0Ysg0YHQtdGA0LLQtdGA0LAgSW5lcnRpYSDRgdC+0YXRgNCw0L3Rj9GO0YLRgdGPINCyINGB0L7RgdGC0L7Rj9C90LjQuCDQuNGB0YLQvtGA0LjQuCDQsdGA0LDRg9C30LXRgNCwLiDQpdC+0YDQvtGI0L4g0LfQvdCw0YLRjCwg0YfRgtC+INC90LXQutC+0YLQvtGA0YvQtSDQsdGA0LDRg9C30LXRgNGLINC90LDQutC70LDQtNGL0LLQsNGO0YIg0L7Qs9GA0LDQvdC40YfQtdC90LjQtSDQvdCwINGA0LDQt9C80LXRgCDQtNCw0L3QvdGL0YUsINC60L7RgtC+0YDRi9C1INC80L7Qs9GD0YIg0LHRi9GC0Ywg0YLQsNC8INGB0L7RhdGA0LDQvdC10L3Riy4g0J3QsNC/0YDQuNC80LXRgCwgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3B1c2hTdGF0ZVwiXG4gICAgICB9fT57YEZpcmVmb3hgfTwvYT57YCDQuNC80LXQtdGCINC+0LPRgNCw0L3QuNGH0LXQvdC40LUg0L3QsCDRgNCw0LfQvNC10YAg0LIgNjQwINGC0YvRgS4g0KHQuNC80LLQvtC70L7QsiAo0Lgg0LLRi9C00LDQtdGCINC+0YjQuNCx0LrRgyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BOU19FUlJPUl9JTExFR0FMX1ZBTFVFYH08L2lubGluZUNvZGU+e2AsINC10YHQu9C4INCS0Ysg0LXQs9C+INC/0YDQtdCy0YvRiNCw0LXRgtC1LikuINCe0LHRi9GH0L3QviDRjdGC0L4g0L3QsNC80L3QvtCz0L4g0LHQvtC70YzRiNC1LCDRh9C10Lwg0JLQsNC8INC60L7Qs9C00LAt0LvQuNCx0L4g0L/QvtC90LDQtNC+0LHQuNGC0YHRjywg0L3QviDRhdC+0YDQvtGI0L4g0LfQvdCw0YLRjCDQvtCxINGN0YLQvtC8INC/0YDQuCDRgdC+0LfQtNCw0L3QuNC4INC/0YDQuNC70L7QttC10L3QuNGPIEluZXJ0aWEuYH08L3A+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9