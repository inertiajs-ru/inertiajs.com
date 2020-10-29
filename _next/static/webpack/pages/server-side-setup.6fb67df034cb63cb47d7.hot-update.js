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
      description: "By default the Laravel adapter will use the app.blade.php view. This template should include your assets, as well as the @inertia directive. If you'd like to use a different root view, you can change it using Inertia::setRootView()."
    }, {
      name: 'Rails',
      language: 'erb',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject4()),
      description: "By default the Rails adapter will use the application.html.erb view. This template should include your assets, as well as the yield command. If you'd like to use a different root view, you can change it using InertiaRails.configure."
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
  }, "Next, setup the Inertia middleware. In the Rails adapter, this is configured automatically for you. However, in Laravel you need to publish the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 156
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VydmVyLXNpZGUtc2V0dXAubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImRlc2NyaXB0aW9uIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsMkJBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSx5QkFEQztBQUVOQyxRQUFJLEVBQUU7QUFGQSxHQUFELEVBR0o7QUFDREQsT0FBRyxFQUFFLGtCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBSEksRUFNSjtBQUNERCxPQUFHLEVBQUUsWUFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQU5JLEVBU0o7QUFDREQsT0FBRyxFQUFFLG1CQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBVEk7QUFGVyxDQUFiO0FBaUJQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FB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QjtBQUU3Qk8sY0FBUSxFQUFFLEtBRm1CO0FBRzdCQyxVQUFJLEVBQUVDLGdEQUFGO0FBSHlCLEtBQUQsRUFvQjNCO0FBQ0RULFVBQUksRUFBRSxPQURMO0FBRURPLGNBQVEsRUFBRSxNQUZUO0FBR0RDLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQXBCMkIsQ0FBOUI7QUFxQ0ksV0FBTyxFQUFDLG9CQXJDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0ZLLENBQVA7QUFrSUQ7S0F0SXVCTCxVO0FBd0l4QjtBQUNBQSxVQUFVLENBQUNPLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VydmVyLXNpZGUtc2V0dXAuNmZiNjdkZjAzNGNiNjNjYjQ3ZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCBkZWRlbnQgZnJvbSAnZGVkZW50LWpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBUYWJiZWRDb2RlRXhhbXBsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiZWRDb2RlRXhhbXBsZXMnXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6ICfQo9GB0YLQsNC90L7QstC60LAg0YHQtdGA0LLQtdGA0L3QvtC5INGH0LDRgdGC0LgnLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcj0YPRgdGC0LDQvdC+0LLQutCwLdC30LDQstC40YHQuNC80L7RgdGC0LXQuScsXG4gICAgbmFtZTogJ9Cj0YHRgtCw0L3QvtCy0LrQsCDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10LknXG4gIH0sIHtcbiAgICB1cmw6ICcj0LrQvtGA0L3QtdCy0L7QuS3RiNCw0LHQu9C+0L0nLFxuICAgIG5hbWU6ICfQmtC+0YDQvdC10LLQvtC5INGI0LDQsdC70L7QvSdcbiAgfSwge1xuICAgIHVybDogJyPQv9C+0YHRgNC10LTQvdC40LonLFxuICAgIG5hbWU6ICfQn9C+0YHRgNC10LTQvdC40LonXG4gIH0sIHtcbiAgICB1cmw6ICcj0YHQvtC30LTQsNC90LjQtS3QvtGC0LLQtdGC0L7QsicsXG4gICAgbmFtZTogJ9Ch0L7Qt9C00LDQvdC40LUg0L7RgtCy0LXRgtC+0LInXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQo9GB0YLQsNC90L7QstC60LAg0YHQtdGA0LLQtdGA0L3QvtC5INGH0LDRgdGC0LhgfTwvaDE+XG4gICAgPHA+e2DQn9C10YDQstGL0Lwg0YjQsNCz0L7QvCDQv9GA0Lgg0YPRgdGC0LDQvdC+0LLQutC1IEluZXJ0aWEg0Y/QstC70Y/QtdGC0YHRjyDQvdCw0YHRgtGA0L7QudC60LAg0JLQsNGI0LXQuSDRgdC10YDQstC10YDQvdC+0Lkg0LjQvdGE0YDQsNGB0YLRgNGD0LrRgtGD0YDRiy4gSW5lcnRpYSDQv9C+0YHRgtCw0LLQu9GP0LXRgtGB0Y8g0YEg0L7RhNC40YbQuNCw0LvRjNC90YvQvNC4INGB0LXRgNCy0LXRgNC90YvQvNC4INCw0LTQsNC/0YLQtdGA0LDQvNC4INC00LvRjyBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9sYXJhdmVsLmNvbS9cIlxuICAgICAgfX0+e2BMYXJhdmVsYH08L2E+e2Ag0LggYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vcnVieW9ucmFpbHMub3JnL1wiXG4gICAgICB9fT57YFJhaWxzYH08L2E+e2AuINCU0LvRjyDQtNGA0YPQs9C40YUg0YTRgNC10LnQvNCy0L7RgNC60L7QsiDRgdC80L7RgtGA0LjRgtC1IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvY29tbXVuaXR5LWFkYXB0ZXJzXCJcbiAgICAgIH19Pntg0LDQtNCw0L/RgtC10YDRiyDRgdC+0L7QsdGJ0LXRgdGC0LLQsGB9PC9hPntgLmB9PC9wPlxuICAgIDxoMj57YNCj0YHRgtCw0L3QvtCy0LrQsCDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10LlgfTwvaDI+XG4gICAgPHA+e2DQo9GB0YLQsNC90L7QstC40YLQtSDRgdC10YDQstC10YDQvdGL0LUg0LDQtNCw0L/RgtC10YDRiyBJbmVydGlhLCDQuNGB0L/QvtC70YzQt9GD0Y8g0L/RgNC10LTQv9C+0YfRgtC40YLQtdC70YzQvdGL0Lkg0LzQtdC90LXQtNC20LXRgCDQv9Cw0LrQtdGC0L7QsiDQtNC70Y8g0Y3RgtC+0LPQviDRj9C30YvQutCwINC40LvQuCDQv9C70LDRgtGE0L7RgNC80YsuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdMYXJhdmVsJyxcbiAgICAgIGxhbmd1YWdlOiAnYmFzaCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGNvbXBvc2VyIHJlcXVpcmUgaW5lcnRpYWpzL2luZXJ0aWEtbGFyYXZlbFxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiAn0KPRgdGC0LDQvdC+0LLQuNGC0Ywg0YfQtdGA0LXQtyBDb21wb3NlcidcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmFpbHMnLFxuICAgICAgbGFuZ3VhZ2U6ICdydWJ5JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAn0JTQvtCx0LDQstGM0YLQtSDRjdGC0L4g0LIg0YHQstC+0LkgR2VtZmlsZScsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGdlbSAnaW5lcnRpYV9yYWlscydcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPGgyPntg0JrQvtGA0L3QtdCy0L7QuSDRiNCw0LHQu9C+0L1gfTwvaDI+XG4gICAgPHA+e2DQl9Cw0YLQtdC8INC90LDRgdGC0YDQvtC50YLQtSDQutC+0YDQvdC10LLQvtC5INGI0LDQsdC70L7QvSwg0LrQvtGC0L7RgNGL0Lkg0LHRg9C00LXRgiDQt9Cw0LPRgNGD0LbQsNGC0YzRgdGPINC/0YDQuCDQv9C10YDQstC+0Lwg0L/QvtGB0LXRidC10L3QuNC4INGB0YLRgNCw0L3QuNGG0YsuINCe0L0g0LHRg9C00LXRgiDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YzRgdGPINC00LvRjyDQt9Cw0LPRgNGD0LfQutC4INGA0LXRgdGD0YDRgdC+0LIg0JLQsNGI0LXQs9C+INGB0LDQudGC0LAgKENTUyDQuCBKYXZhU2NyaXB0KSwg0LAg0YLQsNC60LbQtSDQsdGD0LTQtdGCINGB0L7QtNC10YDQttCw0YLRjCDQutC+0YDQvdC10LLQvtC5INGN0LvQtdC80LXQvdGCIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDxkaXY+YH08L2lubGluZUNvZGU+e2Ag0LTQu9GPINC30LDQs9GA0YPQt9C60Lgg0JLQsNGI0LXQs9C+INC/0YDQuNC70L7QttC10L3QuNGPIEphdmFTY3JpcHQuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdMYXJhdmVsJyxcbiAgICAgIGxhbmd1YWdlOiAndHdpZycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDwhRE9DVFlQRSBodG1sPlxuICAgICAgICA8aHRtbD5cbiAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjBcIiAvPlxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cInt7IG1peCgnL2Nzcy9hcHAuY3NzJykgfX1cIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwie3sgbWl4KCcvanMvYXBwLmpzJykgfX1cIiBkZWZlcj48L3NjcmlwdD5cbiAgICAgICAgICA8L2hlYWQ+XG4gICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICBAaW5lcnRpYVxuICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgPC9odG1sPlxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiBgQnkgZGVmYXVsdCB0aGUgTGFyYXZlbCBhZGFwdGVyIHdpbGwgdXNlIHRoZSBhcHAuYmxhZGUucGhwIHZpZXcuIFRoaXMgdGVtcGxhdGUgc2hvdWxkIGluY2x1ZGUgeW91ciBhc3NldHMsIGFzIHdlbGwgYXMgdGhlIEBpbmVydGlhIGRpcmVjdGl2ZS4gSWYgeW91J2QgbGlrZSB0byB1c2UgYSBkaWZmZXJlbnQgcm9vdCB2aWV3LCB5b3UgY2FuIGNoYW5nZSBpdCB1c2luZyBJbmVydGlhOjpzZXRSb290VmlldygpLmBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmFpbHMnLFxuICAgICAgbGFuZ3VhZ2U6ICdlcmInLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8IURPQ1RZUEUgaHRtbD5cbiAgICAgICAgPGh0bWw+XG4gICAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIj5cbiAgICAgICAgICAgIDwlPSBzdHlsZXNoZWV0X3BhY2tfdGFnICdhcHBsaWNhdGlvbicgJT5cbiAgICAgICAgICAgIDwlPSBqYXZhc2NyaXB0X3BhY2tfdGFnICdhcHBsaWNhdGlvbicsIGRlZmVyOiB0cnVlICU+XG4gICAgICAgICAgPC9oZWFkPlxuICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgPCU9IHlpZWxkICU+XG4gICAgICAgICAgPC9ib2R5PlxuICAgICAgICA8L2h0bWw+XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246IGBCeSBkZWZhdWx0IHRoZSBSYWlscyBhZGFwdGVyIHdpbGwgdXNlIHRoZSBhcHBsaWNhdGlvbi5odG1sLmVyYiB2aWV3LiBUaGlzIHRlbXBsYXRlIHNob3VsZCBpbmNsdWRlIHlvdXIgYXNzZXRzLCBhcyB3ZWxsIGFzIHRoZSB5aWVsZCBjb21tYW5kLiBJZiB5b3UnZCBsaWtlIHRvIHVzZSBhIGRpZmZlcmVudCByb290IHZpZXcsIHlvdSBjYW4gY2hhbmdlIGl0IHVzaW5nIEluZXJ0aWFSYWlscy5jb25maWd1cmUuYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8aDI+e2DQn9C+0YHRgNC10LTQvdC40LpgfTwvaDI+XG4gICAgPHA+e2BOZXh0LCBzZXR1cCB0aGUgSW5lcnRpYSBtaWRkbGV3YXJlLiBJbiB0aGUgUmFpbHMgYWRhcHRlciwgdGhpcyBpcyBjb25maWd1cmVkIGF1dG9tYXRpY2FsbHkgZm9yIHlvdS4gSG93ZXZlciwgaW4gTGFyYXZlbCB5b3UgbmVlZCB0byBwdWJsaXNoIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BIYW5kbGVJbmVydGlhUmVxdWVzdHNgfTwvaW5saW5lQ29kZT57YCBtaWRkbGV3YXJlIHRvIHlvdXIgYXBwbGljYXRpb24sIHdoaWNoIGNhbiBiZSBkb25lIHVzaW5nIHRoaXMgYXJ0aXNhbiBjb21tYW5kOmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2Utc2hcIlxuICAgICAgfX0+e2BwaHAgYXJ0aXNhbiBpbmVydGlhOm1pZGRsZXdhcmVcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgT25jZSBnZW5lcmF0ZWQsIHJlZ2lzdGVyIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BIYW5kbGVJbmVydGlhUmVxdWVzdHNgfTwvaW5saW5lQ29kZT57YCBtaWRkbGV3YXJlIGluIHlvdXIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgQXBwXFxcXEh0dHBcXFxcS2VybmVsYH08L2lubGluZUNvZGU+e2AsIGFzIHRoZSBgfTx1PntgbGFzdCBpdGVtYH08L3U+e2AgaW4geW91ciBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B3ZWJgfTwvaW5saW5lQ29kZT57YCBtaWRkbGV3YXJlIGdyb3VwLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtcGhwXCJcbiAgICAgIH19PntgJ3dlYicgPT4gW1xuICAgIC8vIC4uLlxuICAgIFxcXFxBcHBcXFxcSHR0cFxcXFxNaWRkbGV3YXJlXFxcXEhhbmRsZUluZXJ0aWFSZXF1ZXN0czo6Y2xhc3MsXG5dLFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BUaGlzIG1pZGRsZXdhcmUgcHJvdmlkZXMgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B2ZXJzaW9uKClgfTwvaW5saW5lQ29kZT57YCBtZXRob2QgZm9yIHNldHRpbmcgeW91ciBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL2Fzc2V0LXZlcnNpb25pbmdcIlxuICAgICAgfX0+e2Bhc3NldCB2ZXJzaW9uYH08L2E+e2AsIGFuZCBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHNoYXJlKClgfTwvaW5saW5lQ29kZT57YCBtZXRob2QgZm9yIHNldHRpbmcgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9zaGFyZWQtZGF0YVwiXG4gICAgICB9fT57YHNoYXJlZCBkYXRhYH08L2E+e2AuIFBsZWFzZSBzZWUgdGhvc2UgcGFnZXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uYH08L3A+XG4gICAgPGgyPntg0KHQvtC30LTQsNC90LjQtSDQvtGC0LLQtdGC0L7QsmB9PC9oMj5cbiAgICA8cD57YFRoYXQncyBpdCwgeW91J3JlIGFsbCByZWFkeSB0byBnbyBzZXJ2ZXItc2lkZSEgRnJvbSBoZXJlIHlvdSBjYW4gc3RhcnQgY3JlYXRpbmcgSW5lcnRpYSByZXNwb25zZXMuIFNlZSB0aGUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9yZXNwb25zZXNcIlxuICAgICAgfX0+e2ByZXNwb25zZXNgfTwvYT57YCBwYWdlIGZvciBtb3JlIGluZm9ybWF0aW9uLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3BocCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIHVzZSBJbmVydGlhXFxcXEluZXJ0aWE7XFxuXG4gICAgICAgIGNsYXNzIEV2ZW50c0NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHB1YmxpYyBmdW5jdGlvbiBzaG93KEV2ZW50ICRldmVudClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSW5lcnRpYTo6cmVuZGVyKCdFdmVudC9TaG93JywgW1xuICAgICAgICAgICAgICAgICAgICAnZXZlbnQnID0+ICRldmVudC0+b25seShcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXJ0X2RhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JhaWxzJyxcbiAgICAgIGxhbmd1YWdlOiAncnVieScsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGNsYXNzIEV2ZW50c0NvbnRyb2xsZXIgPCBBcHBsaWNhdGlvbkNvbnRyb2xsZXJcbiAgICAgICAgICBkZWYgc2hvd1xuICAgICAgICAgICAgZXZlbnQgPSBFdmVudC5maW5kKHBhcmFtc1s6aWRdKVxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXG4gICAgICAgICAgICByZW5kZXIgaW5lcnRpYTogJ0V2ZW50L1Nob3cnLFxuICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudC5hc19qc29uKFxuICAgICAgICAgICAgICAgICAgb25seTogWyA6aWQsIDp0aXRsZSwgOnN0YXJ0X2RhdGUsIDpkZXNjcmlwdGlvbiBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgZW5kXG4gICAgICAgIGVuZFxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=