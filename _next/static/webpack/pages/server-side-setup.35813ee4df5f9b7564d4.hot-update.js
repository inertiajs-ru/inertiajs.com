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
    url: '#root-template',
    name: 'Root template'
  }, {
    url: '#middleware',
    name: 'Middleware'
  }, {
    url: '#creating-responses',
    name: 'Creating responses'
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
  }, "The first step when installing Inertia is to configure your server-side framework. Inertia ships with official server-side adapters for ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://laravel.com/"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 148
    }
  }), "Laravel"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://rubyonrails.org/"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 34
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
  }, "Root template"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
  }, "Middleware"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
  }, "Creating responses"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VydmVyLXNpZGUtc2V0dXAubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImRlc2NyaXB0aW9uIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsMkJBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSx5QkFEQztBQUVOQyxRQUFJLEVBQUU7QUFGQSxHQUFELEVBR0o7QUFDREQsT0FBRyxFQUFFLGdCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBSEksRUFNSjtBQUNERCxPQUFHLEVBQUUsYUFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQU5JLEVBU0o7QUFDREQsT0FBRyxFQUFFLHFCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBVEk7QUFGVyxDQUFiO0FBaUJQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FB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QUU3Qk8sY0FBUSxFQUFFLEtBRm1CO0FBRzdCQyxVQUFJLEVBQUVDLGdEQUFGO0FBSHlCLEtBQUQsRUFvQjNCO0FBQ0RULFVBQUksRUFBRSxPQURMO0FBRURPLGNBQVEsRUFBRSxNQUZUO0FBR0RDLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQXBCMkIsQ0FBOUI7QUFxQ0ksV0FBTyxFQUFDLG9CQXJDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0ZLLENBQVA7QUFrSUQ7S0F0SXVCTCxVO0FBd0l4QjtBQUNBQSxVQUFVLENBQUNPLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VydmVyLXNpZGUtc2V0dXAuMzU4MTNlZTRkZjVmOWI3NTY0ZDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCBkZWRlbnQgZnJvbSAnZGVkZW50LWpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBUYWJiZWRDb2RlRXhhbXBsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiZWRDb2RlRXhhbXBsZXMnXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6ICfQo9GB0YLQsNC90L7QstC60LAg0YHQtdGA0LLQtdGA0L3QvtC5INGH0LDRgdGC0LgnLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcj0YPRgdGC0LDQvdC+0LLQutCwLdC30LDQstC40YHQuNC80L7RgdGC0LXQuScsXG4gICAgbmFtZTogJ9Cj0YHRgtCw0L3QvtCy0LrQsCDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10LknXG4gIH0sIHtcbiAgICB1cmw6ICcjcm9vdC10ZW1wbGF0ZScsXG4gICAgbmFtZTogJ1Jvb3QgdGVtcGxhdGUnXG4gIH0sIHtcbiAgICB1cmw6ICcjbWlkZGxld2FyZScsXG4gICAgbmFtZTogJ01pZGRsZXdhcmUnXG4gIH0sIHtcbiAgICB1cmw6ICcjY3JlYXRpbmctcmVzcG9uc2VzJyxcbiAgICBuYW1lOiAnQ3JlYXRpbmcgcmVzcG9uc2VzJ1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0KPRgdGC0LDQvdC+0LLQutCwINGB0LXRgNCy0LXRgNC90L7QuSDRh9Cw0YHRgtC4YH08L2gxPlxuICAgIDxwPntgVGhlIGZpcnN0IHN0ZXAgd2hlbiBpbnN0YWxsaW5nIEluZXJ0aWEgaXMgdG8gY29uZmlndXJlIHlvdXIgc2VydmVyLXNpZGUgZnJhbWV3b3JrLiBJbmVydGlhIHNoaXBzIHdpdGggb2ZmaWNpYWwgc2VydmVyLXNpZGUgYWRhcHRlcnMgZm9yIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2xhcmF2ZWwuY29tL1wiXG4gICAgICB9fT57YExhcmF2ZWxgfTwvYT57YCBhbmQgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vcnVieW9ucmFpbHMub3JnL1wiXG4gICAgICB9fT57YFJhaWxzYH08L2E+e2AuIEZvciBvdGhlciBmcmFtZXdvcmtzLCBwbGVhc2Ugc2VlIHRoZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL2NvbW11bml0eS1hZGFwdGVyc1wiXG4gICAgICB9fT57YGNvbW11bml0eSBhZGFwdGVyc2B9PC9hPntgLmB9PC9wPlxuICAgIDxoMj57YNCj0YHRgtCw0L3QvtCy0LrQsCDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10LlgfTwvaDI+XG4gICAgPHA+e2BJbnN0YWxsIHRoZSBJbmVydGlhIHNlcnZlci1zaWRlIGFkYXB0ZXJzIHVzaW5nIHRoZSBwcmVmZXJyZWQgcGFja2FnZSBtYW5hZ2VyIGZvciB0aGF0IGxhbmd1YWdlIG9yIGZyYW1ld29yay5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ0xhcmF2ZWwnLFxuICAgICAgbGFuZ3VhZ2U6ICdiYXNoJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgY29tcG9zZXIgcmVxdWlyZSBpbmVydGlhanMvaW5lcnRpYS1sYXJhdmVsXG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246ICdJbnN0YWxsIHZpYSBDb21wb3NlcidcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmFpbHMnLFxuICAgICAgbGFuZ3VhZ2U6ICdydWJ5JyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQWRkIHRoaXMgdG8geW91ciBHZW1maWxlJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgZ2VtICdpbmVydGlhX3JhaWxzJ1xuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8aDI+e2BSb290IHRlbXBsYXRlYH08L2gyPlxuICAgIDxwPntgTmV4dCwgc2V0dXAgdGhlIHJvb3QgdGVtcGxhdGUgdGhhdCB3aWxsIGJlIGxvYWRlZCBvbiB0aGUgZmlyc3QgcGFnZSB2aXNpdC4gVGhpcyB3aWxsIGJlIHVzZWQgdG8gbG9hZCB5b3VyIHNpdGUgYXNzZXRzIChDU1MgYW5kIEphdmFTY3JpcHQpLCBhbmQgd2lsbCBhbHNvIGNvbnRhaW4gYSByb290IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDxkaXY+YH08L2lubGluZUNvZGU+e2AgdG8gYm9vdCB5b3VyIEphdmFTY3JpcHQgYXBwbGljYXRpb24gaW4uYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdMYXJhdmVsJyxcbiAgICAgIGxhbmd1YWdlOiAndHdpZycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDwhRE9DVFlQRSBodG1sPlxuICAgICAgICA8aHRtbD5cbiAgICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjBcIiAvPlxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cInt7IG1peCgnL2Nzcy9hcHAuY3NzJykgfX1cIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwie3sgbWl4KCcvanMvYXBwLmpzJykgfX1cIiBkZWZlcj48L3NjcmlwdD5cbiAgICAgICAgICA8L2hlYWQ+XG4gICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICBAaW5lcnRpYVxuICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgPC9odG1sPlxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiBgQnkgZGVmYXVsdCB0aGUgTGFyYXZlbCBhZGFwdGVyIHdpbGwgdXNlIHRoZSBhcHAuYmxhZGUucGhwIHZpZXcuIFRoaXMgdGVtcGxhdGUgc2hvdWxkIGluY2x1ZGUgeW91ciBhc3NldHMsIGFzIHdlbGwgYXMgdGhlIEBpbmVydGlhIGRpcmVjdGl2ZS4gSWYgeW91J2QgbGlrZSB0byB1c2UgYSBkaWZmZXJlbnQgcm9vdCB2aWV3LCB5b3UgY2FuIGNoYW5nZSBpdCB1c2luZyBJbmVydGlhOjpzZXRSb290VmlldygpLmBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmFpbHMnLFxuICAgICAgbGFuZ3VhZ2U6ICdlcmInLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8IURPQ1RZUEUgaHRtbD5cbiAgICAgICAgPGh0bWw+XG4gICAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIj5cbiAgICAgICAgICAgIDwlPSBzdHlsZXNoZWV0X3BhY2tfdGFnICdhcHBsaWNhdGlvbicgJT5cbiAgICAgICAgICAgIDwlPSBqYXZhc2NyaXB0X3BhY2tfdGFnICdhcHBsaWNhdGlvbicsIGRlZmVyOiB0cnVlICU+XG4gICAgICAgICAgPC9oZWFkPlxuICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgPCU9IHlpZWxkICU+XG4gICAgICAgICAgPC9ib2R5PlxuICAgICAgICA8L2h0bWw+XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246IGBCeSBkZWZhdWx0IHRoZSBSYWlscyBhZGFwdGVyIHdpbGwgdXNlIHRoZSBhcHBsaWNhdGlvbi5odG1sLmVyYiB2aWV3LiBUaGlzIHRlbXBsYXRlIHNob3VsZCBpbmNsdWRlIHlvdXIgYXNzZXRzLCBhcyB3ZWxsIGFzIHRoZSB5aWVsZCBjb21tYW5kLiBJZiB5b3UnZCBsaWtlIHRvIHVzZSBhIGRpZmZlcmVudCByb290IHZpZXcsIHlvdSBjYW4gY2hhbmdlIGl0IHVzaW5nIEluZXJ0aWFSYWlscy5jb25maWd1cmUuYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8aDI+e2BNaWRkbGV3YXJlYH08L2gyPlxuICAgIDxwPntgTmV4dCwgc2V0dXAgdGhlIEluZXJ0aWEgbWlkZGxld2FyZS4gSW4gdGhlIFJhaWxzIGFkYXB0ZXIsIHRoaXMgaXMgY29uZmlndXJlZCBhdXRvbWF0aWNhbGx5IGZvciB5b3UuIEhvd2V2ZXIsIGluIExhcmF2ZWwgeW91IG5lZWQgdG8gcHVibGlzaCB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgSGFuZGxlSW5lcnRpYVJlcXVlc3RzYH08L2lubGluZUNvZGU+e2AgbWlkZGxld2FyZSB0byB5b3VyIGFwcGxpY2F0aW9uLCB3aGljaCBjYW4gYmUgZG9uZSB1c2luZyB0aGlzIGFydGlzYW4gY29tbWFuZDpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXNoXCJcbiAgICAgIH19PntgcGhwIGFydGlzYW4gaW5lcnRpYTptaWRkbGV3YXJlXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YE9uY2UgZ2VuZXJhdGVkLCByZWdpc3RlciB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgSGFuZGxlSW5lcnRpYVJlcXVlc3RzYH08L2lubGluZUNvZGU+e2AgbWlkZGxld2FyZSBpbiB5b3VyIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YEFwcFxcXFxIdHRwXFxcXEtlcm5lbGB9PC9pbmxpbmVDb2RlPntgLCBhcyB0aGUgYH08dT57YGxhc3QgaXRlbWB9PC91PntgIGluIHlvdXIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgd2ViYH08L2lubGluZUNvZGU+e2AgbWlkZGxld2FyZSBncm91cC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXBocFwiXG4gICAgICB9fT57YCd3ZWInID0+IFtcbiAgICAvLyAuLi5cbiAgICBcXFxcQXBwXFxcXEh0dHBcXFxcTWlkZGxld2FyZVxcXFxIYW5kbGVJbmVydGlhUmVxdWVzdHM6OmNsYXNzLFxuXSxcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgVGhpcyBtaWRkbGV3YXJlIHByb3ZpZGVzIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdmVyc2lvbigpYH08L2lubGluZUNvZGU+e2AgbWV0aG9kIGZvciBzZXR0aW5nIHlvdXIgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9hc3NldC12ZXJzaW9uaW5nXCJcbiAgICAgIH19PntgYXNzZXQgdmVyc2lvbmB9PC9hPntgLCBhbmQgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BzaGFyZSgpYH08L2lubGluZUNvZGU+e2AgbWV0aG9kIGZvciBzZXR0aW5nIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvc2hhcmVkLWRhdGFcIlxuICAgICAgfX0+e2BzaGFyZWQgZGF0YWB9PC9hPntgLiBQbGVhc2Ugc2VlIHRob3NlIHBhZ2VzIGZvciBtb3JlIGluZm9ybWF0aW9uLmB9PC9wPlxuICAgIDxoMj57YENyZWF0aW5nIHJlc3BvbnNlc2B9PC9oMj5cbiAgICA8cD57YFRoYXQncyBpdCwgeW91J3JlIGFsbCByZWFkeSB0byBnbyBzZXJ2ZXItc2lkZSEgRnJvbSBoZXJlIHlvdSBjYW4gc3RhcnQgY3JlYXRpbmcgSW5lcnRpYSByZXNwb25zZXMuIFNlZSB0aGUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9yZXNwb25zZXNcIlxuICAgICAgfX0+e2ByZXNwb25zZXNgfTwvYT57YCBwYWdlIGZvciBtb3JlIGluZm9ybWF0aW9uLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3BocCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIHVzZSBJbmVydGlhXFxcXEluZXJ0aWE7XFxuXG4gICAgICAgIGNsYXNzIEV2ZW50c0NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHB1YmxpYyBmdW5jdGlvbiBzaG93KEV2ZW50ICRldmVudClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSW5lcnRpYTo6cmVuZGVyKCdFdmVudC9TaG93JywgW1xuICAgICAgICAgICAgICAgICAgICAnZXZlbnQnID0+ICRldmVudC0+b25seShcbiAgICAgICAgICAgICAgICAgICAgICAgICdpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXJ0X2RhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JhaWxzJyxcbiAgICAgIGxhbmd1YWdlOiAncnVieScsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGNsYXNzIEV2ZW50c0NvbnRyb2xsZXIgPCBBcHBsaWNhdGlvbkNvbnRyb2xsZXJcbiAgICAgICAgICBkZWYgc2hvd1xuICAgICAgICAgICAgZXZlbnQgPSBFdmVudC5maW5kKHBhcmFtc1s6aWRdKVxuwqDCoMKgwqDCoMKgwqDCoMKgwqDCoMKgXG4gICAgICAgICAgICByZW5kZXIgaW5lcnRpYTogJ0V2ZW50L1Nob3cnLFxuICAgICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudC5hc19qc29uKFxuICAgICAgICAgICAgICAgICAgb25seTogWyA6aWQsIDp0aXRsZSwgOnN0YXJ0X2RhdGUsIDpkZXNjcmlwdGlvbiBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgZW5kXG4gICAgICAgIGVuZFxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=