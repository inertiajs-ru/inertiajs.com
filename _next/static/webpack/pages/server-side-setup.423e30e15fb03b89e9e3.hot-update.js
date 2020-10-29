webpackHotUpdate_N_E("pages/server-side-setup",{

/***/ "./pages/server-side-setup.mdx":
/*!*************************************!*\
  !*** ./pages/server-side-setup.mdx ***!
  \*************************************/
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
/* harmony import */ var _components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TabbedCodeExamples */ "./components/TabbedCodeExamples.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");



var _jsxFileName = "C:\\OSPanel\\projects\\inertiajs.com\\pages\\server-side-setup.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        class EventsController < ApplicationController\n          def show\n            event = Event.find(params[:id])\n\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\n            render inertia: 'Event/Show',\n              props: {\n                event: event.as_json(\n                  only: [ :id, :title, :start_date, :description ]\n                )\n              }\n          end\n        end\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        use Inertia\\Inertia;\n\n        class EventsController extends Controller\n        {\n            public function show(Event $event)\n            {\n                return Inertia::render('Event/Show', [\n                    'event' => $event->only(\n                        'id',\n                        'title',\n                        'start_date',\n                        'description'\n                    ),\n                ]);\n            }\n        }\n      "], ["\n        use Inertia\\\\Inertia;\\n\n        class EventsController extends Controller\n        {\n            public function show(Event $event)\n            {\n                return Inertia::render('Event/Show', [\n                    'event' => $event->only(\n                        'id',\n                        'title',\n                        'start_date',\n                        'description'\n                    ),\n                ]);\n            }\n        }\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        <!DOCTYPE html>\n        <html>\n          <head>\n            <meta charset=\"utf-8\" />\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <%= stylesheet_pack_tag 'application' %>\n            <%= javascript_pack_tag 'application', defer: true %>\n          </head>\n          <body>\n            <%= yield %>\n          </body>\n        </html>\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        <!DOCTYPE html>\n        <html>\n          <head>\n            <meta charset=\"utf-8\" />\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0\" />\n            <link href=\"{{ mix('/css/app.css') }}\" rel=\"stylesheet\" />\n            <script src=\"{{ mix('/js/app.js') }}\" defer></script>\n          </head>\n          <body>\n            @inertia\n          </body>\n        </html>\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        gem 'inertia_rails'\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        composer require inertiajs/inertia-laravel\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */





var meta = {
  title: 'Установка серверной части',
  links: [{
    url: '#установка-зависимостей',
    name: 'Установка зависимостей'
  }, {
    url: '#корневой-шаблон',
    name: 'Корневой шаблон'
  }, {
    url: '#посредник',
    name: 'Посредник'
  }, {
    url: '#создание-ответов',
    name: 'Создание ответов'
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
      lineNumber: 35,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u043E\u0439 \u0447\u0430\u0441\u0442\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, "\u041F\u0435\u0440\u0432\u044B\u043C \u0448\u0430\u0433\u043E\u043C \u043F\u0440\u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0435 Inertia \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0412\u0430\u0448\u0435\u0439 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u043E\u0439 \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B. Inertia \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u044B\u043C\u0438 \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u0430\u043C\u0438 \u0434\u043B\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://laravel.com/"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 160
    }
  }), "Laravel"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://rubyonrails.org/"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 32
    }
  }), "Rails"), ". \u0414\u043B\u044F \u0434\u0440\u0443\u0433\u0438\u0445 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u043E\u0432 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/community-adapters"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 61
    }
  }), "\u0430\u0434\u0430\u043F\u0442\u0435\u0440\u044B \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0435\u0439"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u044B\u0435 \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u044B Inertia, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043F\u0430\u043A\u0435\u0442\u043E\u0432 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u044F\u0437\u044B\u043A\u0430 \u0438\u043B\u0438 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Laravel',
      language: 'bash',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()),
      description: 'Установить через Composer'
    }, {
      name: 'Rails',
      language: 'ruby',
      description: 'Добавьте это в свой Gemfile',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, "\u041A\u043E\u0440\u043D\u0435\u0432\u043E\u0439 \u0448\u0430\u0431\u043B\u043E\u043D"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, "\u0417\u0430\u0442\u0435\u043C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u043A\u043E\u0440\u043D\u0435\u0432\u043E\u0439 \u0448\u0430\u0431\u043B\u043E\u043D, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C\u0441\u044F \u043F\u0440\u0438 \u043F\u0435\u0440\u0432\u043E\u043C \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u041E\u043D \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432 \u0412\u0430\u0448\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430 (CSS \u0438 JavaScript), \u0430 \u0442\u0430\u043A\u0436\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043A\u043E\u0440\u043D\u0435\u0432\u043E\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 222
    }
  }, "<div>"), " \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0412\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F JavaScript."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Laravel',
      language: 'twig',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3()),
      description: "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0430\u0434\u0430\u043F\u0442\u0435\u0440 Laravel \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 app.blade.php. \u042D\u0442\u043E\u0442 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043E\u043B\u0436\u0435\u043D \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0412\u0430\u0448\u0438 \u0430\u043A\u0442\u0438\u0432\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432\u0443 @inertia. \u0415\u0441\u043B\u0438 \u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u043E\u0435 \u043A\u043E\u0440\u043D\u0435\u0432\u043E\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0435\u0433\u043E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Inertia::setRootView()."
    }, {
      name: 'Rails',
      language: 'erb',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject4()),
      description: "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0430\u0434\u0430\u043F\u0442\u0435\u0440 Rails \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435 application.html.erb. \u042D\u0442\u043E\u0442 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043E\u043B\u0436\u0435\u043D \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0412\u0430\u0448\u0438 \u0430\u043A\u0442\u0438\u0432\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 yield. \u0415\u0441\u043B\u0438 \u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u043E\u0435 \u043A\u043E\u0440\u043D\u0435\u0432\u043E\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0435\u0433\u043E \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E InertiaRails.configure."
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, "\u0417\u0430\u0442\u0435\u043C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u0447\u043D\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 Inertia. \u0412 \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u0435 Rails \u044D\u0442\u043E\u0442 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438. \u041E\u0434\u043D\u0430\u043A\u043E \u0432 Laravel \u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 187
    }
  }, "HandleInertiaRequests"), " \u0432 \u0412\u0430\u0448\u0435\u043C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438, \u0447\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u044D\u0442\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-sh"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 10
    }
  }), "php artisan inertia:middleware\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0441\u043B\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 54
    }
  }, "HandleInertiaRequests"), " \u0432 \u0412\u0430\u0448\u0435\u043C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 132
    }
  }, "App\\Http\\Kernel"), ", \u043A\u0430\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("u", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 203
    }
  }, "\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442"), " \u0432 \u0412\u0430\u0448\u0435\u0439 \u0433\u0440\u0443\u043F\u043F\u0435 \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 263
    }
  }, "web"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-php"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 10
    }
  }), "'web' => [\n    // ...\n    \\App\\Http\\Middleware\\HandleInertiaRequests::class,\n],\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, "\u042D\u0442\u043E\u0442 \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043C\u0435\u0442\u043E\u0434 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 47
    }
  }, "version()"), " \u0434\u043B\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/asset-versioning"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 119
    }
  }), "\u0432\u0435\u0440\u0441\u0438\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430"), ", and a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 44
    }
  }, "share()"), " method for setting ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/shared-data"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 119
    }
  }), "shared data"), ". Please see those pages for more information."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043E\u0442\u0432\u0435\u0442\u043E\u0432"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }, "That's it, you're all ready to go server-side! From here you can start creating Inertia responses. See the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/responses"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 119
    }
  }), "responses"), " page for more information."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Laravel',
      language: 'php',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject5())
    }, {
      name: 'Rails',
      language: 'ruby',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject6())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 5
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VydmVyLXNpZGUtc2V0dXAubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImRlc2NyaXB0aW9uIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsMkJBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSx5QkFEQztBQUVOQyxRQUFJLEVBQUU7QUFGQSxHQUFELEVBR0o7QUFDREQsT0FBRyxFQUFFLGtCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBSEksRUFNSjtBQUNERCxPQUFHLEVBQUUsWUFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQU5JLEVBU0o7QUFDREQsT0FBRyxFQUFFLG1CQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBVEk7QUFGVyxDQUFiO0FBaUJQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FB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RHVCO0FBRTdCTyxjQUFRLEVBQUUsS0FGbUI7QUFHN0JDLFVBQUksRUFBRUMsZ0RBQUY7QUFIeUIsS0FBRCxFQW9CM0I7QUFDRFQsVUFBSSxFQUFFLE9BREw7QUFFRE8sY0FBUSxFQUFFLE1BRlQ7QUFHREMsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBcEIyQixDQUE5QjtBQXFDSSxXQUFPLEVBQUMsb0JBckNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzRkssQ0FBUDtBQWtJRDtLQXRJdUJMLFU7QUF3SXhCO0FBQ0FBLFVBQVUsQ0FBQ08sY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXJ2ZXItc2lkZS1zZXR1cC40MjNlMzBlMTVmYjAzYjg5ZTllMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFRhYmJlZENvZGVFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJlZENvZGVFeGFtcGxlcydcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9Cj0YHRgtCw0L3QvtCy0LrQsCDRgdC10YDQstC10YDQvdC+0Lkg0YfQsNGB0YLQuCcsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyPRg9GB0YLQsNC90L7QstC60LAt0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5JyxcbiAgICBuYW1lOiAn0KPRgdGC0LDQvdC+0LLQutCwINC30LDQstC40YHQuNC80L7RgdGC0LXQuSdcbiAgfSwge1xuICAgIHVybDogJyPQutC+0YDQvdC10LLQvtC5LdGI0LDQsdC70L7QvScsXG4gICAgbmFtZTogJ9Ca0L7RgNC90LXQstC+0Lkg0YjQsNCx0LvQvtC9J1xuICB9LCB7XG4gICAgdXJsOiAnI9C/0L7RgdGA0LXQtNC90LjQuicsXG4gICAgbmFtZTogJ9Cf0L7RgdGA0LXQtNC90LjQuidcbiAgfSwge1xuICAgIHVybDogJyPRgdC+0LfQtNCw0L3QuNC1LdC+0YLQstC10YLQvtCyJyxcbiAgICBuYW1lOiAn0KHQvtC30LTQsNC90LjQtSDQvtGC0LLQtdGC0L7QsidcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCj0YHRgtCw0L3QvtCy0LrQsCDRgdC10YDQstC10YDQvdC+0Lkg0YfQsNGB0YLQuGB9PC9oMT5cbiAgICA8cD57YNCf0LXRgNCy0YvQvCDRiNCw0LPQvtC8INC/0YDQuCDRg9GB0YLQsNC90L7QstC60LUgSW5lcnRpYSDRj9Cy0LvRj9C10YLRgdGPINC90LDRgdGC0YDQvtC50LrQsCDQktCw0YjQtdC5INGB0LXRgNCy0LXRgNC90L7QuSDQuNC90YTRgNCw0YHRgtGA0YPQutGC0YPRgNGLLiBJbmVydGlhINC/0L7RgdGC0LDQstC70Y/QtdGC0YHRjyDRgSDQvtGE0LjRhtC40LDQu9GM0L3Ri9C80Lgg0YHQtdGA0LLQtdGA0L3Ri9C80Lgg0LDQtNCw0L/RgtC10YDQsNC80Lgg0LTQu9GPIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2xhcmF2ZWwuY29tL1wiXG4gICAgICB9fT57YExhcmF2ZWxgfTwvYT57YCDQuCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9ydWJ5b25yYWlscy5vcmcvXCJcbiAgICAgIH19PntgUmFpbHNgfTwvYT57YC4g0JTQu9GPINC00YDRg9Cz0LjRhSDRhNGA0LXQudC80LLQvtGA0LrQvtCyINGB0LzQvtGC0YDQuNGC0LUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9jb21tdW5pdHktYWRhcHRlcnNcIlxuICAgICAgfX0+e2DQsNC00LDQv9GC0LXRgNGLINGB0L7QvtCx0YnQtdGB0YLQstCwYH08L2E+e2AuYH08L3A+XG4gICAgPGgyPntg0KPRgdGC0LDQvdC+0LLQutCwINC30LDQstC40YHQuNC80L7RgdGC0LXQuWB9PC9oMj5cbiAgICA8cD57YNCj0YHRgtCw0L3QvtCy0LjRgtC1INGB0LXRgNCy0LXRgNC90YvQtSDQsNC00LDQv9GC0LXRgNGLIEluZXJ0aWEsINC40YHQv9C+0LvRjNC30YPRjyDQv9GA0LXQtNC/0L7Rh9GC0LjRgtC10LvRjNC90YvQuSDQvNC10L3QtdC00LbQtdGAINC/0LDQutC10YLQvtCyINC00LvRjyDRjdGC0L7Qs9C+INGP0LfRi9C60LAg0LjQu9C4INC/0LvQsNGC0YTQvtGA0LzRiy5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ0xhcmF2ZWwnLFxuICAgICAgbGFuZ3VhZ2U6ICdiYXNoJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgY29tcG9zZXIgcmVxdWlyZSBpbmVydGlhanMvaW5lcnRpYS1sYXJhdmVsXG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246ICfQo9GB0YLQsNC90L7QstC40YLRjCDRh9C10YDQtdC3IENvbXBvc2VyJ1xuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSYWlscycsXG4gICAgICBsYW5ndWFnZTogJ3J1YnknLFxuICAgICAgZGVzY3JpcHRpb246ICfQlNC+0LHQsNCy0YzRgtC1INGN0YLQviDQsiDRgdCy0L7QuSBHZW1maWxlJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgZ2VtICdpbmVydGlhX3JhaWxzJ1xuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8aDI+e2DQmtC+0YDQvdC10LLQvtC5INGI0LDQsdC70L7QvWB9PC9oMj5cbiAgICA8cD57YNCX0LDRgtC10Lwg0L3QsNGB0YLRgNC+0LnRgtC1INC60L7RgNC90LXQstC+0Lkg0YjQsNCx0LvQvtC9LCDQutC+0YLQvtGA0YvQuSDQsdGD0LTQtdGCINC30LDQs9GA0YPQttCw0YLRjNGB0Y8g0L/RgNC4INC/0LXRgNCy0L7QvCDQv9C+0YHQtdGJ0LXQvdC40Lgg0YHRgtGA0LDQvdC40YbRiy4g0J7QvSDQsdGD0LTQtdGCINC40YHQv9C+0LvRjNC30L7QstCw0YLRjNGB0Y8g0LTQu9GPINC30LDQs9GA0YPQt9C60Lgg0YDQtdGB0YPRgNGB0L7QsiDQktCw0YjQtdCz0L4g0YHQsNC50YLQsCAoQ1NTINC4IEphdmFTY3JpcHQpLCDQsCDRgtCw0LrQttC1INCx0YPQtNC10YIg0YHQvtC00LXRgNC20LDRgtGMINC60L7RgNC90LXQstC+0Lkg0Y3Qu9C10LzQtdC90YIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgPGRpdj5gfTwvaW5saW5lQ29kZT57YCDQtNC70Y8g0LfQsNCz0YDRg9C30LrQuCDQktCw0YjQtdCz0L4g0L/RgNC40LvQvtC20LXQvdC40Y8gSmF2YVNjcmlwdC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ0xhcmF2ZWwnLFxuICAgICAgbGFuZ3VhZ2U6ICd0d2lnJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPCFET0NUWVBFIGh0bWw+XG4gICAgICAgIDxodG1sPlxuICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgICAgICA8bGluayBocmVmPVwie3sgbWl4KCcvY3NzL2FwcC5jc3MnKSB9fVwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJ7eyBtaXgoJy9qcy9hcHAuanMnKSB9fVwiIGRlZmVyPjwvc2NyaXB0PlxuICAgICAgICAgIDwvaGVhZD5cbiAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgIEBpbmVydGlhXG4gICAgICAgICAgPC9ib2R5PlxuICAgICAgICA8L2h0bWw+XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246IGDQn9C+INGD0LzQvtC70YfQsNC90LjRjiDQsNC00LDQv9GC0LXRgCBMYXJhdmVsINCx0YPQtNC10YIg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC/0YDQtdC00YHRgtCw0LLQu9C10L3QuNC1IGFwcC5ibGFkZS5waHAuINCt0YLQvtGCINGI0LDQsdC70L7QvSDQtNC+0LvQttC10L0g0LLQutC70Y7Rh9Cw0YLRjCDQktCw0YjQuCDQsNC60YLQuNCy0YssINCwINGC0LDQutC20LUg0LTQuNGA0LXQutGC0LjQstGDIEBpbmVydGlhLiDQldGB0LvQuCDQktGLINGF0L7RgtC40YLQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LTRgNGD0LPQvtC1INC60L7RgNC90LXQstC+0LUg0L/RgNC10LTRgdGC0LDQstC70LXQvdC40LUsINCS0Ysg0LzQvtC20LXRgtC1INC40LfQvNC10L3QuNGC0Ywg0LXQs9C+INGBINC/0L7QvNC+0YnRjNGOIEluZXJ0aWE6OnNldFJvb3RWaWV3KCkuYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSYWlscycsXG4gICAgICBsYW5ndWFnZTogJ2VyYicsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDwhRE9DVFlQRSBodG1sPlxuICAgICAgICA8aHRtbD5cbiAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPlxuICAgICAgICAgICAgPCU9IHN0eWxlc2hlZXRfcGFja190YWcgJ2FwcGxpY2F0aW9uJyAlPlxuICAgICAgICAgICAgPCU9IGphdmFzY3JpcHRfcGFja190YWcgJ2FwcGxpY2F0aW9uJywgZGVmZXI6IHRydWUgJT5cbiAgICAgICAgICA8L2hlYWQ+XG4gICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICA8JT0geWllbGQgJT5cbiAgICAgICAgICA8L2JvZHk+XG4gICAgICAgIDwvaHRtbD5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogYNCf0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINCw0LTQsNC/0YLQtdGAIFJhaWxzINCx0YPQtNC10YIg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC/0YDQtdC00YHRgtCw0LLQu9C10L3QuNC1IGFwcGxpY2F0aW9uLmh0bWwuZXJiLiDQrdGC0L7RgiDRiNCw0LHQu9C+0L0g0LTQvtC70LbQtdC9INCy0LrQu9GO0YfQsNGC0Ywg0JLQsNGI0Lgg0LDQutGC0LjQstGLLCDQsCDRgtCw0LrQttC1INC60L7QvNCw0L3QtNGDIHlpZWxkLiDQldGB0LvQuCDQktGLINGF0L7RgtC40YLQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LTRgNGD0LPQvtC1INC60L7RgNC90LXQstC+0LUg0L/RgNC10LTRgdGC0LDQstC70LXQvdC40LUsINCS0Ysg0LzQvtC20LXRgtC1INC40LfQvNC10L3QuNGC0Ywg0LXQs9C+INGBINC/0L7QvNC+0YnRjNGOIEluZXJ0aWFSYWlscy5jb25maWd1cmUuYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8aDI+e2DQn9C+0YHRgNC10LTQvdC40LpgfTwvaDI+XG4gICAgPHA+e2DQl9Cw0YLQtdC8INGD0YHRgtCw0L3QvtCy0LjRgtC1INC/0YDQvtC80LXQttGD0YLQvtGH0L3QvtC1INC/0YDQvtCz0YDQsNC80LzQvdC+0LUg0L7QsdC10YHQv9C10YfQtdC90LjQtSBJbmVydGlhLiDQkiDQsNC00LDQv9GC0LXRgNC1IFJhaWxzINGN0YLQvtGCINC/0LDRgNCw0LzQtdGC0YAg0L3QsNGB0YLRgNCw0LjQstCw0LXRgtGB0Y8g0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LguINCe0LTQvdCw0LrQviDQsiBMYXJhdmVsINCS0LDQvCDQvdGD0LbQvdC+INC+0L/Rg9Cx0LvQuNC60L7QstCw0YLRjCDQv9C+0YHRgNC10LTQvdC40LrQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BIYW5kbGVJbmVydGlhUmVxdWVzdHNgfTwvaW5saW5lQ29kZT57YCDQsiDQktCw0YjQtdC8INC/0YDQuNC70L7QttC10L3QuNC4LCDRh9GC0L4g0LzQvtC20L3QviDRgdC00LXQu9Cw0YLRjCDRgSDQv9C+0LzQvtGJ0YzRjiDRjdGC0L7QuSDQutC+0LzQsNC90LTRizpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXNoXCJcbiAgICAgIH19PntgcGhwIGFydGlzYW4gaW5lcnRpYTptaWRkbGV3YXJlXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YNCf0L7RgdC70LUg0YHQvtC30LTQsNC90LjRjyDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LUg0L/QvtGB0YDQtdC00L3QuNC60LAgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgSGFuZGxlSW5lcnRpYVJlcXVlc3RzYH08L2lubGluZUNvZGU+e2Ag0LIg0JLQsNGI0LXQvCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BBcHBcXFxcSHR0cFxcXFxLZXJuZWxgfTwvaW5saW5lQ29kZT57YCwg0LrQsNC6IGB9PHU+e2DQv9C+0YHQu9C10LTQvdC40Lkg0Y3Qu9C10LzQtdC90YJgfTwvdT57YCDQsiDQktCw0YjQtdC5INCz0YDRg9C/0L/QtSDQv9C+0YHRgNC10LTQvdC40LrQvtCyIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHdlYmB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtcGhwXCJcbiAgICAgIH19PntgJ3dlYicgPT4gW1xuICAgIC8vIC4uLlxuICAgIFxcXFxBcHBcXFxcSHR0cFxcXFxNaWRkbGV3YXJlXFxcXEhhbmRsZUluZXJ0aWFSZXF1ZXN0czo6Y2xhc3MsXG5dLFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQrdGC0L7RgiDQv9C+0YHRgNC10LTQvdC40Log0L/RgNC10LTQvtGB0YLQsNCy0LvRj9C10YIg0LzQtdGC0L7QtCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B2ZXJzaW9uKClgfTwvaW5saW5lQ29kZT57YCDQtNC70Y8g0YPRgdGC0LDQvdC+0LLQutC4IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvYXNzZXQtdmVyc2lvbmluZ1wiXG4gICAgICB9fT57YNCy0LXRgNGB0LjQuCDRgNC10YHRg9GA0YHQsGB9PC9hPntgLCBhbmQgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BzaGFyZSgpYH08L2lubGluZUNvZGU+e2AgbWV0aG9kIGZvciBzZXR0aW5nIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvc2hhcmVkLWRhdGFcIlxuICAgICAgfX0+e2BzaGFyZWQgZGF0YWB9PC9hPntgLiBQbGVhc2Ugc2VlIHRob3NlIHBhZ2VzIGZvciBtb3JlIGluZm9ybWF0aW9uLmB9PC9wPlxuICAgIDxoMj57YNCh0L7Qt9C00LDQvdC40LUg0L7RgtCy0LXRgtC+0LJgfTwvaDI+XG4gICAgPHA+e2BUaGF0J3MgaXQsIHlvdSdyZSBhbGwgcmVhZHkgdG8gZ28gc2VydmVyLXNpZGUhIEZyb20gaGVyZSB5b3UgY2FuIHN0YXJ0IGNyZWF0aW5nIEluZXJ0aWEgcmVzcG9uc2VzLiBTZWUgdGhlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvcmVzcG9uc2VzXCJcbiAgICAgIH19PntgcmVzcG9uc2VzYH08L2E+e2AgcGFnZSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ0xhcmF2ZWwnLFxuICAgICAgbGFuZ3VhZ2U6ICdwaHAnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICB1c2UgSW5lcnRpYVxcXFxJbmVydGlhO1xcblxuICAgICAgICBjbGFzcyBFdmVudHNDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlclxuICAgICAgICB7XG4gICAgICAgICAgICBwdWJsaWMgZnVuY3Rpb24gc2hvdyhFdmVudCAkZXZlbnQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEluZXJ0aWE6OnJlbmRlcignRXZlbnQvU2hvdycsIFtcbiAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JyA9PiAkZXZlbnQtPm9ubHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAnaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGFydF9kYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSYWlscycsXG4gICAgICBsYW5ndWFnZTogJ3J1YnknLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBjbGFzcyBFdmVudHNDb250cm9sbGVyIDwgQXBwbGljYXRpb25Db250cm9sbGVyXG4gICAgICAgICAgZGVmIHNob3dcbiAgICAgICAgICAgIGV2ZW50ID0gRXZlbnQuZmluZChwYXJhbXNbOmlkXSlcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFxuICAgICAgICAgICAgcmVuZGVyIGluZXJ0aWE6ICdFdmVudC9TaG93JyxcbiAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICBldmVudDogZXZlbnQuYXNfanNvbihcbiAgICAgICAgICAgICAgICAgIG9ubHk6IFsgOmlkLCA6dGl0bGUsIDpzdGFydF9kYXRlLCA6ZGVzY3JpcHRpb24gXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIGVuZFxuICAgICAgICBlbmRcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9