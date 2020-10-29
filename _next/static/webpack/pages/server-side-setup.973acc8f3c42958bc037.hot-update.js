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
  }, "\u0417\u0430\u0442\u0435\u043C \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u0447\u043D\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 Inertia. \u0412 \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u0435 Rails \u044D\u0442\u043E\u0442 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440 \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438. \u041E\u0434\u043D\u0430\u043A\u043E \u0432 Laravel \u0432\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u0442\u044C \u043F\u043E\u0441\u0440\u0435\u0434\u043D\u0438\u043A\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 187
    }
  }, "HandleInertiaRequests"), " middleware to your application, which can be done using this artisan command:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }, "Once generated, register the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 41
    }
  }, "HandleInertiaRequests"), " middleware in your ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 130
    }
  }, "App\\Http\\Kernel"), ", as the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("u", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 204
    }
  }, "last item"), " in your ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 237
    }
  }, "web"), " middleware group."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }, "This middleware provides a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 39
    }
  }, "version()"), " method for setting your ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/asset-versioning"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 121
    }
  }), "asset version"), ", and a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 43
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
      columnNumber: 118
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VydmVyLXNpZGUtc2V0dXAubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImRlc2NyaXB0aW9uIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsMkJBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSx5QkFEQztBQUVOQyxRQUFJLEVBQUU7QUFGQSxHQUFELEVBR0o7QUFDREQsT0FBRyxFQUFFLGtCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBSEksRUFNSjtBQUNERCxPQUFHLEVBQUUsWUFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQU5JLEVBU0o7QUFDREQsT0FBRyxFQUFFLG1CQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBVEk7QUFGVyxDQUFiO0FBaUJQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FB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dUI7QUFFN0JPLGNBQVEsRUFBRSxLQUZtQjtBQUc3QkMsVUFBSSxFQUFFQyxnREFBRjtBQUh5QixLQUFELEVBb0IzQjtBQUNEVCxVQUFJLEVBQUUsT0FETDtBQUVETyxjQUFRLEVBQUUsTUFGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0FwQjJCLENBQTlCO0FBcUNJLFdBQU8sRUFBQyxvQkFyQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNGSyxDQUFQO0FBa0lEO0tBdEl1QkwsVTtBQXdJeEI7QUFDQUEsVUFBVSxDQUFDTyxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlcnZlci1zaWRlLXNldHVwLjk3M2FjYzhmM2M0Mjk1OGJjMDM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0KPRgdGC0LDQvdC+0LLQutCwINGB0LXRgNCy0LXRgNC90L7QuSDRh9Cw0YHRgtC4JyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI9GD0YHRgtCw0L3QvtCy0LrQsC3Qt9Cw0LLQuNGB0LjQvNC+0YHRgtC10LknLFxuICAgIG5hbWU6ICfQo9GB0YLQsNC90L7QstC60LAg0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5J1xuICB9LCB7XG4gICAgdXJsOiAnI9C60L7RgNC90LXQstC+0Lkt0YjQsNCx0LvQvtC9JyxcbiAgICBuYW1lOiAn0JrQvtGA0L3QtdCy0L7QuSDRiNCw0LHQu9C+0L0nXG4gIH0sIHtcbiAgICB1cmw6ICcj0L/QvtGB0YDQtdC00L3QuNC6JyxcbiAgICBuYW1lOiAn0J/QvtGB0YDQtdC00L3QuNC6J1xuICB9LCB7XG4gICAgdXJsOiAnI9GB0L7Qt9C00LDQvdC40LUt0L7RgtCy0LXRgtC+0LInLFxuICAgIG5hbWU6ICfQodC+0LfQtNCw0L3QuNC1INC+0YLQstC10YLQvtCyJ1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0KPRgdGC0LDQvdC+0LLQutCwINGB0LXRgNCy0LXRgNC90L7QuSDRh9Cw0YHRgtC4YH08L2gxPlxuICAgIDxwPntg0J/QtdGA0LLRi9C8INGI0LDQs9C+0Lwg0L/RgNC4INGD0YHRgtCw0L3QvtCy0LrQtSBJbmVydGlhINGP0LLQu9GP0LXRgtGB0Y8g0L3QsNGB0YLRgNC+0LnQutCwINCS0LDRiNC10Lkg0YHQtdGA0LLQtdGA0L3QvtC5INC40L3RhNGA0LDRgdGC0YDRg9C60YLRg9GA0YsuIEluZXJ0aWEg0L/QvtGB0YLQsNCy0LvRj9C10YLRgdGPINGBINC+0YTQuNGG0LjQsNC70YzQvdGL0LzQuCDRgdC10YDQstC10YDQvdGL0LzQuCDQsNC00LDQv9GC0LXRgNCw0LzQuCDQtNC70Y8gYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vbGFyYXZlbC5jb20vXCJcbiAgICAgIH19PntgTGFyYXZlbGB9PC9hPntgINC4IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3J1YnlvbnJhaWxzLm9yZy9cIlxuICAgICAgfX0+e2BSYWlsc2B9PC9hPntgLiDQlNC70Y8g0LTRgNGD0LPQuNGFINGE0YDQtdC50LzQstC+0YDQutC+0LIg0YHQvNC+0YLRgNC40YLQtSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL2NvbW11bml0eS1hZGFwdGVyc1wiXG4gICAgICB9fT57YNCw0LTQsNC/0YLQtdGA0Ysg0YHQvtC+0LHRidC10YHRgtCy0LBgfTwvYT57YC5gfTwvcD5cbiAgICA8aDI+e2DQo9GB0YLQsNC90L7QstC60LAg0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5YH08L2gyPlxuICAgIDxwPntg0KPRgdGC0LDQvdC+0LLQuNGC0LUg0YHQtdGA0LLQtdGA0L3Ri9C1INCw0LTQsNC/0YLQtdGA0YsgSW5lcnRpYSwg0LjRgdC/0L7Qu9GM0LfRg9GPINC/0YDQtdC00L/QvtGH0YLQuNGC0LXQu9GM0L3Ri9C5INC80LXQvdC10LTQttC10YAg0L/QsNC60LXRgtC+0LIg0LTQu9GPINGN0YLQvtCz0L4g0Y/Qt9GL0LrQsCDQuNC70Lgg0L/Qu9Cw0YLRhNC+0YDQvNGLLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ2Jhc2gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBjb21wb3NlciByZXF1aXJlIGluZXJ0aWFqcy9pbmVydGlhLWxhcmF2ZWxcbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogJ9Cj0YHRgtCw0L3QvtCy0LjRgtGMINGH0LXRgNC10LcgQ29tcG9zZXInXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JhaWxzJyxcbiAgICAgIGxhbmd1YWdlOiAncnVieScsXG4gICAgICBkZXNjcmlwdGlvbjogJ9CU0L7QsdCw0LLRjNGC0LUg0Y3RgtC+INCyINGB0LLQvtC5IEdlbWZpbGUnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBnZW0gJ2luZXJ0aWFfcmFpbHMnXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCa0L7RgNC90LXQstC+0Lkg0YjQsNCx0LvQvtC9YH08L2gyPlxuICAgIDxwPntg0JfQsNGC0LXQvCDQvdCw0YHRgtGA0L7QudGC0LUg0LrQvtGA0L3QtdCy0L7QuSDRiNCw0LHQu9C+0L0sINC60L7RgtC+0YDRi9C5INCx0YPQtNC10YIg0LfQsNCz0YDRg9C20LDRgtGM0YHRjyDQv9GA0Lgg0L/QtdGA0LLQvtC8INC/0L7RgdC10YnQtdC90LjQuCDRgdGC0YDQsNC90LjRhtGLLiDQntC9INCx0YPQtNC10YIg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGM0YHRjyDQtNC70Y8g0LfQsNCz0YDRg9C30LrQuCDRgNC10YHRg9GA0YHQvtCyINCS0LDRiNC10LPQviDRgdCw0LnRgtCwIChDU1Mg0LggSmF2YVNjcmlwdCksINCwINGC0LDQutC20LUg0LHRg9C00LXRgiDRgdC+0LTQtdGA0LbQsNGC0Ywg0LrQvtGA0L3QtdCy0L7QuSDRjdC70LXQvNC10L3RgiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A8ZGl2PmB9PC9pbmxpbmVDb2RlPntgINC00LvRjyDQt9Cw0LPRgNGD0LfQutC4INCS0LDRiNC10LPQviDQv9GA0LjQu9C+0LbQtdC90LjRjyBKYXZhU2NyaXB0LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3R3aWcnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8IURPQ1RZUEUgaHRtbD5cbiAgICAgICAgPGh0bWw+XG4gICAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJ7eyBtaXgoJy9jc3MvYXBwLmNzcycpIH19XCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cInt7IG1peCgnL2pzL2FwcC5qcycpIH19XCIgZGVmZXI+PC9zY3JpcHQ+XG4gICAgICAgICAgPC9oZWFkPlxuICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgQGluZXJ0aWFcbiAgICAgICAgICA8L2JvZHk+XG4gICAgICAgIDwvaHRtbD5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogYNCf0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINCw0LTQsNC/0YLQtdGAIExhcmF2ZWwg0LHRg9C00LXRgiDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0L/RgNC10LTRgdGC0LDQstC70LXQvdC40LUgYXBwLmJsYWRlLnBocC4g0K3RgtC+0YIg0YjQsNCx0LvQvtC9INC00L7Qu9C20LXQvSDQstC60LvRjtGH0LDRgtGMINCS0LDRiNC4INCw0LrRgtC40LLRiywg0LAg0YLQsNC60LbQtSDQtNC40YDQtdC60YLQuNCy0YMgQGluZXJ0aWEuINCV0YHQu9C4INCS0Ysg0YXQvtGC0LjRgtC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQtNGA0YPQs9C+0LUg0LrQvtGA0L3QtdCy0L7QtSDQv9GA0LXQtNGB0YLQsNCy0LvQtdC90LjQtSwg0JLRiyDQvNC+0LbQtdGC0LUg0LjQt9C80LXQvdC40YLRjCDQtdCz0L4g0YEg0L/QvtC80L7RidGM0Y4gSW5lcnRpYTo6c2V0Um9vdFZpZXcoKS5gXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JhaWxzJyxcbiAgICAgIGxhbmd1YWdlOiAnZXJiJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPCFET0NUWVBFIGh0bWw+XG4gICAgICAgIDxodG1sPlxuICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XG4gICAgICAgICAgICA8JT0gc3R5bGVzaGVldF9wYWNrX3RhZyAnYXBwbGljYXRpb24nICU+XG4gICAgICAgICAgICA8JT0gamF2YXNjcmlwdF9wYWNrX3RhZyAnYXBwbGljYXRpb24nLCBkZWZlcjogdHJ1ZSAlPlxuICAgICAgICAgIDwvaGVhZD5cbiAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgIDwlPSB5aWVsZCAlPlxuICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgPC9odG1sPlxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiBg0J/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0LDQtNCw0L/RgtC10YAgUmFpbHMg0LHRg9C00LXRgiDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0L/RgNC10LTRgdGC0LDQstC70LXQvdC40LUgYXBwbGljYXRpb24uaHRtbC5lcmIuINCt0YLQvtGCINGI0LDQsdC70L7QvSDQtNC+0LvQttC10L0g0LLQutC70Y7Rh9Cw0YLRjCDQktCw0YjQuCDQsNC60YLQuNCy0YssINCwINGC0LDQutC20LUg0LrQvtC80LDQvdC00YMgeWllbGQuINCV0YHQu9C4INCS0Ysg0YXQvtGC0LjRgtC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQtNGA0YPQs9C+0LUg0LrQvtGA0L3QtdCy0L7QtSDQv9GA0LXQtNGB0YLQsNCy0LvQtdC90LjQtSwg0JLRiyDQvNC+0LbQtdGC0LUg0LjQt9C80LXQvdC40YLRjCDQtdCz0L4g0YEg0L/QvtC80L7RidGM0Y4gSW5lcnRpYVJhaWxzLmNvbmZpZ3VyZS5gXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCf0L7RgdGA0LXQtNC90LjQumB9PC9oMj5cbiAgICA8cD57YNCX0LDRgtC10Lwg0YPRgdGC0LDQvdC+0LLQuNGC0LUg0L/RgNC+0LzQtdC20YPRgtC+0YfQvdC+0LUg0L/RgNC+0LPRgNCw0LzQvNC90L7QtSDQvtCx0LXRgdC/0LXRh9C10L3QuNC1IEluZXJ0aWEuINCSINCw0LTQsNC/0YLQtdGA0LUgUmFpbHMg0Y3RgtC+0YIg0L/QsNGA0LDQvNC10YLRgCDQvdCw0YHRgtGA0LDQuNCy0LDQtdGC0YHRjyDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuC4g0J7QtNC90LDQutC+INCyIExhcmF2ZWwg0LLQsNC8INC90YPQttC90L4g0L7Qv9GD0LHQu9C40LrQvtCy0LDRgtGMINC/0L7RgdGA0LXQtNC90LjQutCwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEhhbmRsZUluZXJ0aWFSZXF1ZXN0c2B9PC9pbmxpbmVDb2RlPntgIG1pZGRsZXdhcmUgdG8geW91ciBhcHBsaWNhdGlvbiwgd2hpY2ggY2FuIGJlIGRvbmUgdXNpbmcgdGhpcyBhcnRpc2FuIGNvbW1hbmQ6YH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1zaFwiXG4gICAgICB9fT57YHBocCBhcnRpc2FuIGluZXJ0aWE6bWlkZGxld2FyZVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BPbmNlIGdlbmVyYXRlZCwgcmVnaXN0ZXIgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEhhbmRsZUluZXJ0aWFSZXF1ZXN0c2B9PC9pbmxpbmVDb2RlPntgIG1pZGRsZXdhcmUgaW4geW91ciBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BBcHBcXFxcSHR0cFxcXFxLZXJuZWxgfTwvaW5saW5lQ29kZT57YCwgYXMgdGhlIGB9PHU+e2BsYXN0IGl0ZW1gfTwvdT57YCBpbiB5b3VyIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHdlYmB9PC9pbmxpbmVDb2RlPntgIG1pZGRsZXdhcmUgZ3JvdXAuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1waHBcIlxuICAgICAgfX0+e2And2ViJyA9PiBbXG4gICAgLy8gLi4uXG4gICAgXFxcXEFwcFxcXFxIdHRwXFxcXE1pZGRsZXdhcmVcXFxcSGFuZGxlSW5lcnRpYVJlcXVlc3RzOjpjbGFzcyxcbl0sXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YFRoaXMgbWlkZGxld2FyZSBwcm92aWRlcyBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHZlcnNpb24oKWB9PC9pbmxpbmVDb2RlPntgIG1ldGhvZCBmb3Igc2V0dGluZyB5b3VyIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvYXNzZXQtdmVyc2lvbmluZ1wiXG4gICAgICB9fT57YGFzc2V0IHZlcnNpb25gfTwvYT57YCwgYW5kIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgc2hhcmUoKWB9PC9pbmxpbmVDb2RlPntgIG1ldGhvZCBmb3Igc2V0dGluZyBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3NoYXJlZC1kYXRhXCJcbiAgICAgIH19Pntgc2hhcmVkIGRhdGFgfTwvYT57YC4gUGxlYXNlIHNlZSB0aG9zZSBwYWdlcyBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gfTwvcD5cbiAgICA8aDI+e2DQodC+0LfQtNCw0L3QuNC1INC+0YLQstC10YLQvtCyYH08L2gyPlxuICAgIDxwPntgVGhhdCdzIGl0LCB5b3UncmUgYWxsIHJlYWR5IHRvIGdvIHNlcnZlci1zaWRlISBGcm9tIGhlcmUgeW91IGNhbiBzdGFydCBjcmVhdGluZyBJbmVydGlhIHJlc3BvbnNlcy4gU2VlIHRoZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3Jlc3BvbnNlc1wiXG4gICAgICB9fT57YHJlc3BvbnNlc2B9PC9hPntgIHBhZ2UgZm9yIG1vcmUgaW5mb3JtYXRpb24uYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdMYXJhdmVsJyxcbiAgICAgIGxhbmd1YWdlOiAncGhwJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgdXNlIEluZXJ0aWFcXFxcSW5lcnRpYTtcXG5cbiAgICAgICAgY2xhc3MgRXZlbnRzQ29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcHVibGljIGZ1bmN0aW9uIHNob3coRXZlbnQgJGV2ZW50KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBJbmVydGlhOjpyZW5kZXIoJ0V2ZW50L1Nob3cnLCBbXG4gICAgICAgICAgICAgICAgICAgICdldmVudCcgPT4gJGV2ZW50LT5vbmx5KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RhcnRfZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmFpbHMnLFxuICAgICAgbGFuZ3VhZ2U6ICdydWJ5JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgY2xhc3MgRXZlbnRzQ29udHJvbGxlciA8IEFwcGxpY2F0aW9uQ29udHJvbGxlclxuICAgICAgICAgIGRlZiBzaG93XG4gICAgICAgICAgICBldmVudCA9IEV2ZW50LmZpbmQocGFyYW1zWzppZF0pXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcbiAgICAgICAgICAgIHJlbmRlciBpbmVydGlhOiAnRXZlbnQvU2hvdycsXG4gICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LmFzX2pzb24oXG4gICAgICAgICAgICAgICAgICBvbmx5OiBbIDppZCwgOnRpdGxlLCA6c3RhcnRfZGF0ZSwgOmRlc2NyaXB0aW9uIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICBlbmRcbiAgICAgICAgZW5kXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==