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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VydmVyLXNpZGUtc2V0dXAubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImRlc2NyaXB0aW9uIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsMkJBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSx5QkFEQztBQUVOQyxRQUFJLEVBQUU7QUFGQSxHQUFELEVBR0o7QUFDREQsT0FBRyxFQUFFLGtCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBSEksRUFNSjtBQUNERCxPQUFHLEVBQUUsWUFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQU5JLEVBU0o7QUFDREQsT0FBRyxFQUFFLG1CQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBVEk7QUFGVyxDQUFiO0FBaUJQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FB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QUFFN0JPLGNBQVEsRUFBRSxLQUZtQjtBQUc3QkMsVUFBSSxFQUFFQyxnREFBRjtBQUh5QixLQUFELEVBb0IzQjtBQUNEVCxVQUFJLEVBQUUsT0FETDtBQUVETyxjQUFRLEVBQUUsTUFGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0FwQjJCLENBQTlCO0FBcUNJLFdBQU8sRUFBQyxvQkFyQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNGSyxDQUFQO0FBa0lEO0tBdEl1QkwsVTtBQXdJeEI7QUFDQUEsVUFBVSxDQUFDTyxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlcnZlci1zaWRlLXNldHVwLjUzYjNkNjAwMzE2ZTE5ZjE3Y2UzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0KPRgdGC0LDQvdC+0LLQutCwINGB0LXRgNCy0LXRgNC90L7QuSDRh9Cw0YHRgtC4JyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI9GD0YHRgtCw0L3QvtCy0LrQsC3Qt9Cw0LLQuNGB0LjQvNC+0YHRgtC10LknLFxuICAgIG5hbWU6ICfQo9GB0YLQsNC90L7QstC60LAg0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5J1xuICB9LCB7XG4gICAgdXJsOiAnI9C60L7RgNC90LXQstC+0Lkt0YjQsNCx0LvQvtC9JyxcbiAgICBuYW1lOiAn0JrQvtGA0L3QtdCy0L7QuSDRiNCw0LHQu9C+0L0nXG4gIH0sIHtcbiAgICB1cmw6ICcj0L/QvtGB0YDQtdC00L3QuNC6JyxcbiAgICBuYW1lOiAn0J/QvtGB0YDQtdC00L3QuNC6J1xuICB9LCB7XG4gICAgdXJsOiAnI9GB0L7Qt9C00LDQvdC40LUt0L7RgtCy0LXRgtC+0LInLFxuICAgIG5hbWU6ICfQodC+0LfQtNCw0L3QuNC1INC+0YLQstC10YLQvtCyJ1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0KPRgdGC0LDQvdC+0LLQutCwINGB0LXRgNCy0LXRgNC90L7QuSDRh9Cw0YHRgtC4YH08L2gxPlxuICAgIDxwPntg0J/QtdGA0LLRi9C8INGI0LDQs9C+0Lwg0L/RgNC4INGD0YHRgtCw0L3QvtCy0LrQtSBJbmVydGlhINGP0LLQu9GP0LXRgtGB0Y8g0L3QsNGB0YLRgNC+0LnQutCwINCS0LDRiNC10Lkg0YHQtdGA0LLQtdGA0L3QvtC5INC40L3RhNGA0LDRgdGC0YDRg9C60YLRg9GA0YsuIEluZXJ0aWEg0L/QvtGB0YLQsNCy0LvRj9C10YLRgdGPINGBINC+0YTQuNGG0LjQsNC70YzQvdGL0LzQuCDRgdC10YDQstC10YDQvdGL0LzQuCDQsNC00LDQv9GC0LXRgNCw0LzQuCDQtNC70Y8gYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vbGFyYXZlbC5jb20vXCJcbiAgICAgIH19PntgTGFyYXZlbGB9PC9hPntgINC4IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3J1YnlvbnJhaWxzLm9yZy9cIlxuICAgICAgfX0+e2BSYWlsc2B9PC9hPntgLiDQlNC70Y8g0LTRgNGD0LPQuNGFINGE0YDQtdC50LzQstC+0YDQutC+0LIg0YHQvNC+0YLRgNC40YLQtSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL2NvbW11bml0eS1hZGFwdGVyc1wiXG4gICAgICB9fT57YGNvbW11bml0eSBhZGFwdGVyc2B9PC9hPntgLmB9PC9wPlxuICAgIDxoMj57YNCj0YHRgtCw0L3QvtCy0LrQsCDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10LlgfTwvaDI+XG4gICAgPHA+e2BJbnN0YWxsIHRoZSBJbmVydGlhIHNlcnZlci1zaWRlIGFkYXB0ZXJzIHVzaW5nIHRoZSBwcmVmZXJyZWQgcGFja2FnZSBtYW5hZ2VyIGZvciB0aGF0IGxhbmd1YWdlIG9yIGZyYW1ld29yay5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ0xhcmF2ZWwnLFxuICAgICAgbGFuZ3VhZ2U6ICdiYXNoJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgY29tcG9zZXIgcmVxdWlyZSBpbmVydGlhanMvaW5lcnRpYS1sYXJhdmVsXG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246ICdJbnN0YWxsIHZpYSBDb21wb3NlcidcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmFpbHMnLFxuICAgICAgbGFuZ3VhZ2U6ICdydWJ5JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQWRkIHRoaXMgdG8geW91ciBHZW1maWxlJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgZ2VtICdpbmVydGlhX3JhaWxzJ1xuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8aDI+e2DQmtC+0YDQvdC10LLQvtC5INGI0LDQsdC70L7QvWB9PC9oMj5cbiAgICA8cD57YE5leHQsIHNldHVwIHRoZSByb290IHRlbXBsYXRlIHRoYXQgd2lsbCBiZSBsb2FkZWQgb24gdGhlIGZpcnN0IHBhZ2UgdmlzaXQuIFRoaXMgd2lsbCBiZSB1c2VkIHRvIGxvYWQgeW91ciBzaXRlIGFzc2V0cyAoQ1NTIGFuZCBKYXZhU2NyaXB0KSwgYW5kIHdpbGwgYWxzbyBjb250YWluIGEgcm9vdCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A8ZGl2PmB9PC9pbmxpbmVDb2RlPntgIHRvIGJvb3QgeW91ciBKYXZhU2NyaXB0IGFwcGxpY2F0aW9uIGluLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3R3aWcnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8IURPQ1RZUEUgaHRtbD5cbiAgICAgICAgPGh0bWw+XG4gICAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJ7eyBtaXgoJy9jc3MvYXBwLmNzcycpIH19XCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cInt7IG1peCgnL2pzL2FwcC5qcycpIH19XCIgZGVmZXI+PC9zY3JpcHQ+XG4gICAgICAgICAgPC9oZWFkPlxuICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgQGluZXJ0aWFcbiAgICAgICAgICA8L2JvZHk+XG4gICAgICAgIDwvaHRtbD5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogYEJ5IGRlZmF1bHQgdGhlIExhcmF2ZWwgYWRhcHRlciB3aWxsIHVzZSB0aGUgYXBwLmJsYWRlLnBocCB2aWV3LiBUaGlzIHRlbXBsYXRlIHNob3VsZCBpbmNsdWRlIHlvdXIgYXNzZXRzLCBhcyB3ZWxsIGFzIHRoZSBAaW5lcnRpYSBkaXJlY3RpdmUuIElmIHlvdSdkIGxpa2UgdG8gdXNlIGEgZGlmZmVyZW50IHJvb3QgdmlldywgeW91IGNhbiBjaGFuZ2UgaXQgdXNpbmcgSW5lcnRpYTo6c2V0Um9vdFZpZXcoKS5gXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JhaWxzJyxcbiAgICAgIGxhbmd1YWdlOiAnZXJiJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPCFET0NUWVBFIGh0bWw+XG4gICAgICAgIDxodG1sPlxuICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XG4gICAgICAgICAgICA8JT0gc3R5bGVzaGVldF9wYWNrX3RhZyAnYXBwbGljYXRpb24nICU+XG4gICAgICAgICAgICA8JT0gamF2YXNjcmlwdF9wYWNrX3RhZyAnYXBwbGljYXRpb24nLCBkZWZlcjogdHJ1ZSAlPlxuICAgICAgICAgIDwvaGVhZD5cbiAgICAgICAgICA8Ym9keT5cbiAgICAgICAgICAgIDwlPSB5aWVsZCAlPlxuICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgPC9odG1sPlxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiBgQnkgZGVmYXVsdCB0aGUgUmFpbHMgYWRhcHRlciB3aWxsIHVzZSB0aGUgYXBwbGljYXRpb24uaHRtbC5lcmIgdmlldy4gVGhpcyB0ZW1wbGF0ZSBzaG91bGQgaW5jbHVkZSB5b3VyIGFzc2V0cywgYXMgd2VsbCBhcyB0aGUgeWllbGQgY29tbWFuZC4gSWYgeW91J2QgbGlrZSB0byB1c2UgYSBkaWZmZXJlbnQgcm9vdCB2aWV3LCB5b3UgY2FuIGNoYW5nZSBpdCB1c2luZyBJbmVydGlhUmFpbHMuY29uZmlndXJlLmBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPGgyPntg0J/QvtGB0YDQtdC00L3QuNC6YH08L2gyPlxuICAgIDxwPntgTmV4dCwgc2V0dXAgdGhlIEluZXJ0aWEgbWlkZGxld2FyZS4gSW4gdGhlIFJhaWxzIGFkYXB0ZXIsIHRoaXMgaXMgY29uZmlndXJlZCBhdXRvbWF0aWNhbGx5IGZvciB5b3UuIEhvd2V2ZXIsIGluIExhcmF2ZWwgeW91IG5lZWQgdG8gcHVibGlzaCB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgSGFuZGxlSW5lcnRpYVJlcXVlc3RzYH08L2lubGluZUNvZGU+e2AgbWlkZGxld2FyZSB0byB5b3VyIGFwcGxpY2F0aW9uLCB3aGljaCBjYW4gYmUgZG9uZSB1c2luZyB0aGlzIGFydGlzYW4gY29tbWFuZDpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXNoXCJcbiAgICAgIH19PntgcGhwIGFydGlzYW4gaW5lcnRpYTptaWRkbGV3YXJlXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YE9uY2UgZ2VuZXJhdGVkLCByZWdpc3RlciB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgSGFuZGxlSW5lcnRpYVJlcXVlc3RzYH08L2lubGluZUNvZGU+e2AgbWlkZGxld2FyZSBpbiB5b3VyIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEFwcFxcXFxIdHRwXFxcXEtlcm5lbGB9PC9pbmxpbmVDb2RlPntgLCBhcyB0aGUgYH08dT57YGxhc3QgaXRlbWB9PC91PntgIGluIHlvdXIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgd2ViYH08L2lubGluZUNvZGU+e2AgbWlkZGxld2FyZSBncm91cC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXBocFwiXG4gICAgICB9fT57YCd3ZWInID0+IFtcbiAgICAvLyAuLi5cbiAgICBcXFxcQXBwXFxcXEh0dHBcXFxcTWlkZGxld2FyZVxcXFxIYW5kbGVJbmVydGlhUmVxdWVzdHM6OmNsYXNzLFxuXSxcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgVGhpcyBtaWRkbGV3YXJlIHByb3ZpZGVzIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdmVyc2lvbigpYH08L2lubGluZUNvZGU+e2AgbWV0aG9kIGZvciBzZXR0aW5nIHlvdXIgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9hc3NldC12ZXJzaW9uaW5nXCJcbiAgICAgIH19PntgYXNzZXQgdmVyc2lvbmB9PC9hPntgLCBhbmQgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BzaGFyZSgpYH08L2lubGluZUNvZGU+e2AgbWV0aG9kIGZvciBzZXR0aW5nIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvc2hhcmVkLWRhdGFcIlxuICAgICAgfX0+e2BzaGFyZWQgZGF0YWB9PC9hPntgLiBQbGVhc2Ugc2VlIHRob3NlIHBhZ2VzIGZvciBtb3JlIGluZm9ybWF0aW9uLmB9PC9wPlxuICAgIDxoMj57YNCh0L7Qt9C00LDQvdC40LUg0L7RgtCy0LXRgtC+0LJgfTwvaDI+XG4gICAgPHA+e2BUaGF0J3MgaXQsIHlvdSdyZSBhbGwgcmVhZHkgdG8gZ28gc2VydmVyLXNpZGUhIEZyb20gaGVyZSB5b3UgY2FuIHN0YXJ0IGNyZWF0aW5nIEluZXJ0aWEgcmVzcG9uc2VzLiBTZWUgdGhlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvcmVzcG9uc2VzXCJcbiAgICAgIH19PntgcmVzcG9uc2VzYH08L2E+e2AgcGFnZSBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ0xhcmF2ZWwnLFxuICAgICAgbGFuZ3VhZ2U6ICdwaHAnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICB1c2UgSW5lcnRpYVxcXFxJbmVydGlhO1xcblxuICAgICAgICBjbGFzcyBFdmVudHNDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlclxuICAgICAgICB7XG4gICAgICAgICAgICBwdWJsaWMgZnVuY3Rpb24gc2hvdyhFdmVudCAkZXZlbnQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEluZXJ0aWE6OnJlbmRlcignRXZlbnQvU2hvdycsIFtcbiAgICAgICAgICAgICAgICAgICAgJ2V2ZW50JyA9PiAkZXZlbnQtPm9ubHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAnaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGFydF9kYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSYWlscycsXG4gICAgICBsYW5ndWFnZTogJ3J1YnknLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBjbGFzcyBFdmVudHNDb250cm9sbGVyIDwgQXBwbGljYXRpb25Db250cm9sbGVyXG4gICAgICAgICAgZGVmIHNob3dcbiAgICAgICAgICAgIGV2ZW50ID0gRXZlbnQuZmluZChwYXJhbXNbOmlkXSlcbsKgwqDCoMKgwqDCoMKgwqDCoMKgwqDCoFxuICAgICAgICAgICAgcmVuZGVyIGluZXJ0aWE6ICdFdmVudC9TaG93JyxcbiAgICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgICBldmVudDogZXZlbnQuYXNfanNvbihcbiAgICAgICAgICAgICAgICAgIG9ubHk6IFsgOmlkLCA6dGl0bGUsIDpzdGFydF9kYXRlLCA6ZGVzY3JpcHRpb24gXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIGVuZFxuICAgICAgICBlbmRcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9