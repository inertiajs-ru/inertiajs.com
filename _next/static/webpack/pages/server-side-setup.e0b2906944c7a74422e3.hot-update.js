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
  }), "Rails"), ". For other frameworks, please see the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/community-adapters"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 66
    }
  }), "community adapters"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
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
  }, "Install the Inertia server-side adapters using the preferred package manager for that language or framework."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Laravel',
      language: 'bash',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()),
      description: 'Install via Composer'
    }, {
      name: 'Rails',
      language: 'ruby',
      description: 'Add this to your Gemfile',
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
  }, "Next, setup the root template that will be loaded on the first page visit. This will be used to load your site assets (CSS and JavaScript), and will also contain a root ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 181
    }
  }, "<div>"), " to boot your JavaScript application in."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VydmVyLXNpZGUtc2V0dXAubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImRlc2NyaXB0aW9uIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsMkJBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSx5QkFEQztBQUVOQyxRQUFJLEVBQUU7QUFGQSxHQUFELEVBR0o7QUFDREQsT0FBRyxFQUFFLGtCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBSEksRUFNSjtBQUNERCxPQUFHLEVBQUUsWUFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQU5JLEVBU0o7QUFDREQsT0FBRyxFQUFFLG1CQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBVEk7QUFGVyxDQUFiO0FBaUJQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FB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QUFFN0JPLGNBQVEsRUFBRSxLQUZtQjtBQUc3QkMsVUFBSSxFQUFFQyxnREFBRjtBQUh5QixLQUFELEVBb0IzQjtBQUNEVCxVQUFJLEVBQUUsT0FETDtBQUVETyxjQUFRLEVBQUUsTUFGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0FwQjJCLENBQTlCO0FBcUNJLFdBQU8sRUFBQyxvQkFyQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNGSyxDQUFQO0FBa0lEO0tBdEl1QkwsVTtBQXdJeEI7QUFDQUEsVUFBVSxDQUFDTyxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlcnZlci1zaWRlLXNldHVwLmUwYjI5MDY5NDRjN2E3NDQyMmUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0KPRgdGC0LDQvdC+0LLQutCwINGB0LXRgNCy0LXRgNC90L7QuSDRh9Cw0YHRgtC4JyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI9GD0YHRgtCw0L3QvtCy0LrQsC3Qt9Cw0LLQuNGB0LjQvNC+0YHRgtC10LknLFxuICAgIG5hbWU6ICfQo9GB0YLQsNC90L7QstC60LAg0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5J1xuICB9LCB7XG4gICAgdXJsOiAnI9C60L7RgNC90LXQstC+0Lkt0YjQsNCx0LvQvtC9JyxcbiAgICBuYW1lOiAn0JrQvtGA0L3QtdCy0L7QuSDRiNCw0LHQu9C+0L0nXG4gIH0sIHtcbiAgICB1cmw6ICcj0L/QvtGB0YDQtdC00L3QuNC6JyxcbiAgICBuYW1lOiAn0J/QvtGB0YDQtdC00L3QuNC6J1xuICB9LCB7XG4gICAgdXJsOiAnI9GB0L7Qt9C00LDQvdC40LUt0L7RgtCy0LXRgtC+0LInLFxuICAgIG5hbWU6ICfQodC+0LfQtNCw0L3QuNC1INC+0YLQstC10YLQvtCyJ1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0KPRgdGC0LDQvdC+0LLQutCwINGB0LXRgNCy0LXRgNC90L7QuSDRh9Cw0YHRgtC4YH08L2gxPlxuICAgIDxwPntg0J/QtdGA0LLRi9C8INGI0LDQs9C+0Lwg0L/RgNC4INGD0YHRgtCw0L3QvtCy0LrQtSBJbmVydGlhINGP0LLQu9GP0LXRgtGB0Y8g0L3QsNGB0YLRgNC+0LnQutCwINCS0LDRiNC10Lkg0YHQtdGA0LLQtdGA0L3QvtC5INC40L3RhNGA0LDRgdGC0YDRg9C60YLRg9GA0YsuIEluZXJ0aWEg0L/QvtGB0YLQsNCy0LvRj9C10YLRgdGPINGBINC+0YTQuNGG0LjQsNC70YzQvdGL0LzQuCDRgdC10YDQstC10YDQvdGL0LzQuCDQsNC00LDQv9GC0LXRgNCw0LzQuCDQtNC70Y8gYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vbGFyYXZlbC5jb20vXCJcbiAgICAgIH19PntgTGFyYXZlbGB9PC9hPntgINC4IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3J1YnlvbnJhaWxzLm9yZy9cIlxuICAgICAgfX0+e2BSYWlsc2B9PC9hPntgLiBGb3Igb3RoZXIgZnJhbWV3b3JrcywgcGxlYXNlIHNlZSB0aGUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9jb21tdW5pdHktYWRhcHRlcnNcIlxuICAgICAgfX0+e2Bjb21tdW5pdHkgYWRhcHRlcnNgfTwvYT57YC5gfTwvcD5cbiAgICA8aDI+e2DQo9GB0YLQsNC90L7QstC60LAg0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5YH08L2gyPlxuICAgIDxwPntgSW5zdGFsbCB0aGUgSW5lcnRpYSBzZXJ2ZXItc2lkZSBhZGFwdGVycyB1c2luZyB0aGUgcHJlZmVycmVkIHBhY2thZ2UgbWFuYWdlciBmb3IgdGhhdCBsYW5ndWFnZSBvciBmcmFtZXdvcmsuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdMYXJhdmVsJyxcbiAgICAgIGxhbmd1YWdlOiAnYmFzaCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGNvbXBvc2VyIHJlcXVpcmUgaW5lcnRpYWpzL2luZXJ0aWEtbGFyYXZlbFxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnSW5zdGFsbCB2aWEgQ29tcG9zZXInXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JhaWxzJyxcbiAgICAgIGxhbmd1YWdlOiAncnVieScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FkZCB0aGlzIHRvIHlvdXIgR2VtZmlsZScsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGdlbSAnaW5lcnRpYV9yYWlscydcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPGgyPntg0JrQvtGA0L3QtdCy0L7QuSDRiNCw0LHQu9C+0L1gfTwvaDI+XG4gICAgPHA+e2BOZXh0LCBzZXR1cCB0aGUgcm9vdCB0ZW1wbGF0ZSB0aGF0IHdpbGwgYmUgbG9hZGVkIG9uIHRoZSBmaXJzdCBwYWdlIHZpc2l0LiBUaGlzIHdpbGwgYmUgdXNlZCB0byBsb2FkIHlvdXIgc2l0ZSBhc3NldHMgKENTUyBhbmQgSmF2YVNjcmlwdCksIGFuZCB3aWxsIGFsc28gY29udGFpbiBhIHJvb3QgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgPGRpdj5gfTwvaW5saW5lQ29kZT57YCB0byBib290IHlvdXIgSmF2YVNjcmlwdCBhcHBsaWNhdGlvbiBpbi5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ0xhcmF2ZWwnLFxuICAgICAgbGFuZ3VhZ2U6ICd0d2lnJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPCFET0NUWVBFIGh0bWw+XG4gICAgICAgIDxodG1sPlxuICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgICAgICA8bGluayBocmVmPVwie3sgbWl4KCcvY3NzL2FwcC5jc3MnKSB9fVwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJ7eyBtaXgoJy9qcy9hcHAuanMnKSB9fVwiIGRlZmVyPjwvc2NyaXB0PlxuICAgICAgICAgIDwvaGVhZD5cbiAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgIEBpbmVydGlhXG4gICAgICAgICAgPC9ib2R5PlxuICAgICAgICA8L2h0bWw+XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246IGBCeSBkZWZhdWx0IHRoZSBMYXJhdmVsIGFkYXB0ZXIgd2lsbCB1c2UgdGhlIGFwcC5ibGFkZS5waHAgdmlldy4gVGhpcyB0ZW1wbGF0ZSBzaG91bGQgaW5jbHVkZSB5b3VyIGFzc2V0cywgYXMgd2VsbCBhcyB0aGUgQGluZXJ0aWEgZGlyZWN0aXZlLiBJZiB5b3UnZCBsaWtlIHRvIHVzZSBhIGRpZmZlcmVudCByb290IHZpZXcsIHlvdSBjYW4gY2hhbmdlIGl0IHVzaW5nIEluZXJ0aWE6OnNldFJvb3RWaWV3KCkuYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSYWlscycsXG4gICAgICBsYW5ndWFnZTogJ2VyYicsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDwhRE9DVFlQRSBodG1sPlxuICAgICAgICA8aHRtbD5cbiAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPlxuICAgICAgICAgICAgPCU9IHN0eWxlc2hlZXRfcGFja190YWcgJ2FwcGxpY2F0aW9uJyAlPlxuICAgICAgICAgICAgPCU9IGphdmFzY3JpcHRfcGFja190YWcgJ2FwcGxpY2F0aW9uJywgZGVmZXI6IHRydWUgJT5cbiAgICAgICAgICA8L2hlYWQ+XG4gICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICA8JT0geWllbGQgJT5cbiAgICAgICAgICA8L2JvZHk+XG4gICAgICAgIDwvaHRtbD5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogYEJ5IGRlZmF1bHQgdGhlIFJhaWxzIGFkYXB0ZXIgd2lsbCB1c2UgdGhlIGFwcGxpY2F0aW9uLmh0bWwuZXJiIHZpZXcuIFRoaXMgdGVtcGxhdGUgc2hvdWxkIGluY2x1ZGUgeW91ciBhc3NldHMsIGFzIHdlbGwgYXMgdGhlIHlpZWxkIGNvbW1hbmQuIElmIHlvdSdkIGxpa2UgdG8gdXNlIGEgZGlmZmVyZW50IHJvb3QgdmlldywgeW91IGNhbiBjaGFuZ2UgaXQgdXNpbmcgSW5lcnRpYVJhaWxzLmNvbmZpZ3VyZS5gXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCf0L7RgdGA0LXQtNC90LjQumB9PC9oMj5cbiAgICA8cD57YE5leHQsIHNldHVwIHRoZSBJbmVydGlhIG1pZGRsZXdhcmUuIEluIHRoZSBSYWlscyBhZGFwdGVyLCB0aGlzIGlzIGNvbmZpZ3VyZWQgYXV0b21hdGljYWxseSBmb3IgeW91LiBIb3dldmVyLCBpbiBMYXJhdmVsIHlvdSBuZWVkIHRvIHB1Ymxpc2ggdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEhhbmRsZUluZXJ0aWFSZXF1ZXN0c2B9PC9pbmxpbmVDb2RlPntgIG1pZGRsZXdhcmUgdG8geW91ciBhcHBsaWNhdGlvbiwgd2hpY2ggY2FuIGJlIGRvbmUgdXNpbmcgdGhpcyBhcnRpc2FuIGNvbW1hbmQ6YH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1zaFwiXG4gICAgICB9fT57YHBocCBhcnRpc2FuIGluZXJ0aWE6bWlkZGxld2FyZVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BPbmNlIGdlbmVyYXRlZCwgcmVnaXN0ZXIgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEhhbmRsZUluZXJ0aWFSZXF1ZXN0c2B9PC9pbmxpbmVDb2RlPntgIG1pZGRsZXdhcmUgaW4geW91ciBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BBcHBcXFxcSHR0cFxcXFxLZXJuZWxgfTwvaW5saW5lQ29kZT57YCwgYXMgdGhlIGB9PHU+e2BsYXN0IGl0ZW1gfTwvdT57YCBpbiB5b3VyIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHdlYmB9PC9pbmxpbmVDb2RlPntgIG1pZGRsZXdhcmUgZ3JvdXAuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1waHBcIlxuICAgICAgfX0+e2And2ViJyA9PiBbXG4gICAgLy8gLi4uXG4gICAgXFxcXEFwcFxcXFxIdHRwXFxcXE1pZGRsZXdhcmVcXFxcSGFuZGxlSW5lcnRpYVJlcXVlc3RzOjpjbGFzcyxcbl0sXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YFRoaXMgbWlkZGxld2FyZSBwcm92aWRlcyBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHZlcnNpb24oKWB9PC9pbmxpbmVDb2RlPntgIG1ldGhvZCBmb3Igc2V0dGluZyB5b3VyIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvYXNzZXQtdmVyc2lvbmluZ1wiXG4gICAgICB9fT57YGFzc2V0IHZlcnNpb25gfTwvYT57YCwgYW5kIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgc2hhcmUoKWB9PC9pbmxpbmVDb2RlPntgIG1ldGhvZCBmb3Igc2V0dGluZyBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3NoYXJlZC1kYXRhXCJcbiAgICAgIH19Pntgc2hhcmVkIGRhdGFgfTwvYT57YC4gUGxlYXNlIHNlZSB0aG9zZSBwYWdlcyBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gfTwvcD5cbiAgICA8aDI+e2DQodC+0LfQtNCw0L3QuNC1INC+0YLQstC10YLQvtCyYH08L2gyPlxuICAgIDxwPntgVGhhdCdzIGl0LCB5b3UncmUgYWxsIHJlYWR5IHRvIGdvIHNlcnZlci1zaWRlISBGcm9tIGhlcmUgeW91IGNhbiBzdGFydCBjcmVhdGluZyBJbmVydGlhIHJlc3BvbnNlcy4gU2VlIHRoZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3Jlc3BvbnNlc1wiXG4gICAgICB9fT57YHJlc3BvbnNlc2B9PC9hPntgIHBhZ2UgZm9yIG1vcmUgaW5mb3JtYXRpb24uYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdMYXJhdmVsJyxcbiAgICAgIGxhbmd1YWdlOiAncGhwJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgdXNlIEluZXJ0aWFcXFxcSW5lcnRpYTtcXG5cbiAgICAgICAgY2xhc3MgRXZlbnRzQ29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcHVibGljIGZ1bmN0aW9uIHNob3coRXZlbnQgJGV2ZW50KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBJbmVydGlhOjpyZW5kZXIoJ0V2ZW50L1Nob3cnLCBbXG4gICAgICAgICAgICAgICAgICAgICdldmVudCcgPT4gJGV2ZW50LT5vbmx5KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2lkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3RhcnRfZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmFpbHMnLFxuICAgICAgbGFuZ3VhZ2U6ICdydWJ5JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgY2xhc3MgRXZlbnRzQ29udHJvbGxlciA8IEFwcGxpY2F0aW9uQ29udHJvbGxlclxuICAgICAgICAgIGRlZiBzaG93XG4gICAgICAgICAgICBldmVudCA9IEV2ZW50LmZpbmQocGFyYW1zWzppZF0pXG7CoMKgwqDCoMKgwqDCoMKgwqDCoMKgwqBcbiAgICAgICAgICAgIHJlbmRlciBpbmVydGlhOiAnRXZlbnQvU2hvdycsXG4gICAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LmFzX2pzb24oXG4gICAgICAgICAgICAgICAgICBvbmx5OiBbIDppZCwgOnRpdGxlLCA6c3RhcnRfZGF0ZSwgOmRlc2NyaXB0aW9uIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICBlbmRcbiAgICAgICAgZW5kXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==