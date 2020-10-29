webpackHotUpdate_N_E("pages/asset-versioning",{

/***/ "./pages/asset-versioning.mdx":
/*!************************************!*\
  !*** ./pages/asset-versioning.mdx ***!
  \************************************/
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
/* harmony import */ var _components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TabbedCodeExamples */ "./components/TabbedCodeExamples.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");



var _jsxFileName = "C:\\OSPanel\\projects\\inertiajs.com\\pages\\asset-versioning.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        InertiaRails.configure do |config|\n          config.version = '1.0'\n        end\n\n        # You can also use lazy evaluation\n        InertiaRails.configure do |config|\n          config.version = lambda { InertiaRails::Version.last }\n        end\n      "], ["\n        InertiaRails.configure do |config|\n          config.version = '1.0'\n        end\\n\n        # You can also use lazy evaluation\n        InertiaRails.configure do |config|\n          config.version = lambda { InertiaRails::Version.last }\n        end\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        /*\n        |----------------------------------------------------------------\n        | Via the HandleInertiaRequests middleware (recommended)\n        |----------------------------------------------------------------\n        */\n\n        class HandleInertiaRequests extends Middleware\n        {\n            public function version(Request $request)\n            {\n                return parent::version($request);\n            }\n        }\n\n        /*\n        |----------------------------------------------------------------\n        | Manually\n        |----------------------------------------------------------------\n        */\n\n        use Inertia\\Inertia;\n\n        Inertia::version($version);\n        Inertia::version(fn () => $version); // Lazily\n      "], ["\n        /*\n        |----------------------------------------------------------------\n        | Via the HandleInertiaRequests middleware (recommended)\n        |----------------------------------------------------------------\n        */\\n\n        class HandleInertiaRequests extends Middleware\n        {\n            public function version(Request $request)\n            {\n                return parent::version($request);\n            }\n        }\\n\n        /*\n        |----------------------------------------------------------------\n        | Manually\n        |----------------------------------------------------------------\n        */\\n\n        use Inertia\\\\Inertia;\\n\n        Inertia::version($version);\n        Inertia::version(fn () => $version); // Lazily\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */





var meta = {
  title: 'Управление версиями активов',
  links: [{
    url: '#top',
    name: 'Вступление'
  }, {
    url: '#настройка',
    name: 'Настройка'
  }, {
    url: '#очистка-кеша',
    name: 'Очистка кеша'
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
      lineNumber: 32,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u044F\u043C\u0438 \u0430\u043A\u0442\u0438\u0432\u043E\u0432"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, "\u041E\u0434\u043D\u0430 \u0438\u0437 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0431\u043B\u0435\u043C \u0441 \u043E\u0434\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u043C\u0438 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u043C\u0438 - \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432 \u0441\u0430\u0439\u0442\u0430, \u043A\u043E\u0433\u0434\u0430 \u043E\u043D\u0438 \u0431\u044B\u043B\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u044B. Inertia \u0443\u043F\u0440\u043E\u0449\u0430\u0435\u0442 \u044D\u0442\u043E, \u043F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u044F \u0442\u0435\u043A\u0443\u0449\u0443\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432 \u0412\u0430\u0448\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0430\u043A\u0442\u0438\u0432\u0430 Inertia \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442 \u0436\u0435\u0441\u0442\u043A\u043E\u0435 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0432\u043C\u0435\u0441\u0442\u043E \u043E\u0431\u044B\u0447\u043D\u043E\u0433\u043E \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F ajax \u043F\u0440\u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u0437\u0430\u043F\u0440\u043E\u0441\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, "\u0427\u0442\u043E\u0431\u044B \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432, \u0412\u0430\u043C \u043F\u0440\u043E\u0441\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u044C Inertia, \u043A\u0430\u043A\u0430\u044F \u0443 \u0412\u0430\u0441 \u0442\u0435\u043A\u0443\u0449\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F. \u042D\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043B\u044E\u0431\u0430\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 147
    }
  }, "string"), " (\u0431\u0443\u043A\u0432\u044B, \u0447\u0438\u0441\u043B\u0430 \u0438\u043B\u0438 \u0445\u0435\u0448 \u0444\u0430\u0439\u043B\u0430), \u0435\u0441\u043B\u0438 \u043E\u043D\u0430 \u0438\u0437\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u0412\u0430\u0448\u0438\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Laravel',
      language: 'php',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()),
      description: 'Посредник HandleInertiaRequests обеспечивает разумное значение по умолчанию для приложений Laravel, которое использует либо хеш значения конфигурации "app.asset_url", либо файл mix-manifest.json.'
    }, {
      name: 'Rails',
      language: 'ruby',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, "\u041E\u0447\u0438\u0441\u0442\u043A\u0430 \u043A\u0435\u0448\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0432 Inertia \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u043F\u0440\u0435\u0434\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0438, \u0447\u0442\u043E \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0435 \u0436\u0435\u0441\u0442\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043A \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0412\u0430\u0448\u0438\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432. \u041E\u0434\u043D\u0430\u043A\u043E Inertia \u043D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0434\u0435\u043B\u0430\u0435\u0442 \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E. \u041E\u0431\u044B\u0447\u043D\u043E \u044D\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442\u0441\u044F \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0442\u043E\u0439 \u0438\u043B\u0438 \u0438\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u043E\u0447\u0438\u0441\u0442\u043A\u0438 \u043A\u0435\u0448\u0430. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u0432\u0435\u0440\u0441\u0438\u0438 \u0432 \u043A\u043E\u043D\u0435\u0446 URL-\u0430\u0434\u0440\u0435\u0441\u043E\u0432 \u0412\u0430\u0448\u0438\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043E\u0432."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 Laravel Mix, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u044D\u0442\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438, \u0432\u043A\u043B\u044E\u0447\u0438\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://laravel.com/docs/mix#versioning-and-cache-busting"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 90
    }
  }), "\u0432\u0435\u0440\u0441\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"), " \u0432 \u0412\u0430\u0448\u0435\u043C \u0444\u0430\u0439\u043B\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 52
    }
  }, "webpack.mix.js"), "."));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXNzZXQtdmVyc2lvbmluZy5tZHgiXSwibmFtZXMiOlsibWV0YSIsInRpdGxlIiwibGlua3MiLCJ1cmwiLCJuYW1lIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwibGFuZ3VhZ2UiLCJjb2RlIiwiZGVkZW50IiwiZGVzY3JpcHRpb24iLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLElBQUksR0FBRztBQUNsQkMsT0FBSyxFQUFFLDZCQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUsTUFEQztBQUVOQyxRQUFJLEVBQUU7QUFGQSxHQUFELEVBR0o7QUFDREQsT0FBRyxFQUFFLFlBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FISSxFQU1KO0FBQ0RELE9BQUcsRUFBRSxlQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkk7QUFGVyxDQUFiO0FBY1AsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCTCxNQUFJLEVBQUpBO0FBRGtCLENBQXBCO0FBR0EsSUFBTU0sU0FBUyxHQUFHQywwREFBbEI7QUFFZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCx5RkFBZUwsV0FBZixFQUFnQ0ssS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtBQUErRCxXQUFPLEVBQUMsV0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0tBSkssRUFLTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhzREFMSyxFQU1MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOERBTkssRUFPTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtxQkFBOEk7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUE5SSxzWkFQSyxFQVFMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCTCxVQUFJLEVBQUUsU0FEdUI7QUFFN0JPLGNBQVEsRUFBRSxLQUZtQjtBQUc3QkMsVUFBSSxFQUFFQyxnREFBRixtQkFIeUI7QUF5QjdCQyxpQkFBVyxFQUFFO0FBekJnQixLQUFELEVBMEIzQjtBQUNEVixVQUFJLEVBQUUsT0FETDtBQUVETyxjQUFRLEVBQUUsTUFGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0ExQjJCLENBQTlCO0FBc0NJLFdBQU8sRUFBQyxvQkF0Q1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJLLEVBK0NMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkVBL0NLLEVBZ0RMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOGtEQWhESyxFQWlETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBXQUFxRjtBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ3ZHLFlBQVE7QUFEK0YsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtR0FBckYsNEVBRStDO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRi9DLE1BakRLLENBQVA7QUFxREQ7S0F6RHVCTCxVO0FBMkR4QjtBQUNBQSxVQUFVLENBQUNPLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXNzZXQtdmVyc2lvbmluZy5kMTViOGFiNjBiYmNmYzBhNDRjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFRhYmJlZENvZGVFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJlZENvZGVFeGFtcGxlcydcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9Cj0L/RgNCw0LLQu9C10L3QuNC1INCy0LXRgNGB0LjRj9C80Lgg0LDQutGC0LjQstC+0LInLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcjdG9wJyxcbiAgICBuYW1lOiAn0JLRgdGC0YPQv9C70LXQvdC40LUnXG4gIH0sIHtcbiAgICB1cmw6ICcj0L3QsNGB0YLRgNC+0LnQutCwJyxcbiAgICBuYW1lOiAn0J3QsNGB0YLRgNC+0LnQutCwJ1xuICB9LCB7XG4gICAgdXJsOiAnI9C+0YfQuNGB0YLQutCwLdC60LXRiNCwJyxcbiAgICBuYW1lOiAn0J7Rh9C40YHRgtC60LAg0LrQtdGI0LAnXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQo9C/0YDQsNCy0LvQtdC90LjQtSDQstC10YDRgdC40Y/QvNC4INCw0LrRgtC40LLQvtCyYH08L2gxPlxuICAgIDxwPntg0J7QtNC90LAg0LjQtyDRgNCw0YHQv9GA0L7RgdGC0YDQsNC90LXQvdC90YvRhSDQv9GA0L7QsdC70LXQvCDRgSDQvtC00L3QvtGB0YLRgNCw0L3QuNGH0L3Ri9C80Lgg0L/RgNC40LvQvtC20LXQvdC40Y/QvNC4IC0g0L7QsdC90L7QstC70LXQvdC40LUg0YDQtdGB0YPRgNGB0L7QsiDRgdCw0LnRgtCwLCDQutC+0LPQtNCwINC+0L3QuCDQsdGL0LvQuCDQuNC30LzQtdC90LXQvdGLLiBJbmVydGlhINGD0L/RgNC+0YnQsNC10YIg0Y3RgtC+LCDQv9GA0Lgg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0Lgg0L7RgtGB0LvQtdC20LjQstCw0Y8g0YLQtdC60YPRidGD0Y4g0LLQtdGA0YHQuNGOINGA0LXRgdGD0YDRgdC+0LIg0JLQsNGI0LXQs9C+INGB0LDQudGC0LAuINCSINGB0LvRg9GH0LDQtSDQuNC30LzQtdC90LXQvdC40Y8g0LDQutGC0LjQstCwIEluZXJ0aWEg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0LLRi9C/0L7Qu9C90LjRgiDQttC10YHRgtC60L7QtSDQv9C+0YHQtdGJ0LXQvdC40LUg0YHRgtGA0LDQvdC40YbRiyDQstC80LXRgdGC0L4g0L7QsdGL0YfQvdC+0LPQviDQv9C+0YHQtdGJ0LXQvdC40Y8gYWpheCDQv9GA0Lgg0YHQu9C10LTRg9GO0YnQtdC8INC30LDQv9GA0L7RgdC1LmB9PC9wPlxuICAgIDxoMj57YNCd0LDRgdGC0YDQvtC50LrQsGB9PC9oMj5cbiAgICA8cD57YNCn0YLQvtCx0Ysg0LLQutC70Y7Rh9C40YLRjCDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQvtC1INC+0LHQvdC+0LLQu9C10L3QuNC1INGA0LXRgdGD0YDRgdC+0LIsINCS0LDQvCDQv9GA0L7RgdGC0L4g0L3Rg9C20L3QviDRgdC+0L7QsdGJ0LjRgtGMIEluZXJ0aWEsINC60LDQutCw0Y8g0YMg0JLQsNGBINGC0LXQutGD0YnQsNGPINCy0LXRgNGB0LjRjy4g0K3RgtC+INC80L7QttC10YIg0LHRi9GC0Ywg0LvRjtCx0LDRjyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BzdHJpbmdgfTwvaW5saW5lQ29kZT57YCAo0LHRg9C60LLRiywg0YfQuNGB0LvQsCDQuNC70Lgg0YXQtdGIINGE0LDQudC70LApLCDQtdGB0LvQuCDQvtC90LAg0LjQt9C80LXQvdGP0LXRgtGB0Y8g0L/RgNC4INC+0LHQvdC+0LLQu9C10L3QuNC4INCS0LDRiNC40YUg0YDQtdGB0YPRgNGB0L7Qsi5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ0xhcmF2ZWwnLFxuICAgICAgbGFuZ3VhZ2U6ICdwaHAnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICAvKlxuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB8IFZpYSB0aGUgSGFuZGxlSW5lcnRpYVJlcXVlc3RzIG1pZGRsZXdhcmUgKHJlY29tbWVuZGVkKVxuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAqL1xcblxuICAgICAgICBjbGFzcyBIYW5kbGVJbmVydGlhUmVxdWVzdHMgZXh0ZW5kcyBNaWRkbGV3YXJlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHB1YmxpYyBmdW5jdGlvbiB2ZXJzaW9uKFJlcXVlc3QgJHJlcXVlc3QpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudDo6dmVyc2lvbigkcmVxdWVzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cXG5cbiAgICAgICAgLypcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgfCBNYW51YWxseVxuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAqL1xcblxuICAgICAgICB1c2UgSW5lcnRpYVxcXFxJbmVydGlhO1xcblxuICAgICAgICBJbmVydGlhOjp2ZXJzaW9uKCR2ZXJzaW9uKTtcbiAgICAgICAgSW5lcnRpYTo6dmVyc2lvbihmbiAoKSA9PiAkdmVyc2lvbik7IC8vIExhemlseVxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiAn0J/QvtGB0YDQtdC00L3QuNC6IEhhbmRsZUluZXJ0aWFSZXF1ZXN0cyDQvtCx0LXRgdC/0LXRh9C40LLQsNC10YIg0YDQsNC30YPQvNC90L7QtSDQt9C90LDRh9C10L3QuNC1INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINC00LvRjyDQv9GA0LjQu9C+0LbQtdC90LjQuSBMYXJhdmVsLCDQutC+0YLQvtGA0L7QtSDQuNGB0L/QvtC70YzQt9GD0LXRgiDQu9C40LHQviDRhdC10Ygg0LfQvdCw0YfQtdC90LjRjyDQutC+0L3RhNC40LPRg9GA0LDRhtC40LggXCJhcHAuYXNzZXRfdXJsXCIsINC70LjQsdC+INGE0LDQudC7IG1peC1tYW5pZmVzdC5qc29uLidcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmFpbHMnLFxuICAgICAgbGFuZ3VhZ2U6ICdydWJ5JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgSW5lcnRpYVJhaWxzLmNvbmZpZ3VyZSBkbyB8Y29uZmlnfFxuICAgICAgICAgIGNvbmZpZy52ZXJzaW9uID0gJzEuMCdcbiAgICAgICAgZW5kXFxuXG4gICAgICAgICMgWW91IGNhbiBhbHNvIHVzZSBsYXp5IGV2YWx1YXRpb25cbiAgICAgICAgSW5lcnRpYVJhaWxzLmNvbmZpZ3VyZSBkbyB8Y29uZmlnfFxuICAgICAgICAgIGNvbmZpZy52ZXJzaW9uID0gbGFtYmRhIHsgSW5lcnRpYVJhaWxzOjpWZXJzaW9uLmxhc3QgfVxuICAgICAgICBlbmRcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPGgyPntg0J7Rh9C40YHRgtC60LAg0LrQtdGI0LBgfTwvaDI+XG4gICAgPHA+e2DQntCx0L3QvtCy0LvQtdC90LjQtSDQsNC60YLQuNCy0L7QsiDQsiBJbmVydGlhINGA0LDQsdC+0YLQsNC10YIg0LIg0L/RgNC10LTQv9C+0LvQvtC20LXQvdC40LgsINGH0YLQviDQv9C+0YHQtdGJ0LXQvdC40LUg0LbQtdGB0YLQutC+0Lkg0YHRgtGA0LDQvdC40YbRiyDQv9GA0LjQstC10LTQtdGCINC6INC/0LXRgNC10LfQsNCz0YDRg9C30LrQtSDQktCw0YjQuNGFINCw0LrRgtC40LLQvtCyLiDQntC00L3QsNC60L4gSW5lcnRpYSDQvdCwINGB0LDQvNC+0Lwg0LTQtdC70LUg0L3QuNGH0LXQs9C+INC90LUg0LTQtdC70LDQtdGCINC00LvRjyDRjdGC0L7Qs9C+LiDQntCx0YvRh9C90L4g0Y3RgtC+INC00LXQu9Cw0LXRgtGB0Y8g0YEg0L/QvtC80L7RidGM0Y4g0YLQvtC5INC40LvQuCDQuNC90L7QuSDRhNC+0YDQvNGLINC+0YfQuNGB0YLQutC4INC60LXRiNCwLiDQndCw0L/RgNC40LzQtdGALCDQtNC+0LHQsNCy0LvQtdC90LjQtSDQv9Cw0YDQsNC80LXRgtGA0LAg0LfQsNC/0YDQvtGB0LAg0LLQtdGA0YHQuNC4INCyINC60L7QvdC10YYgVVJMLdCw0LTRgNC10YHQvtCyINCS0LDRiNC40YUg0YDQtdGB0YPRgNGB0L7Qsi5gfTwvcD5cbiAgICA8cD57YNCV0YHQu9C4INCS0Ysg0LjRgdC/0L7Qu9GM0LfRg9C10YLQtSBMYXJhdmVsIE1peCwg0JLRiyDQvNC+0LbQtdGC0LUg0YHQtNC10LvQsNGC0Ywg0Y3RgtC+INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4LCDQstC60LvRjtGH0LjQsiBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9sYXJhdmVsLmNvbS9kb2NzL21peCN2ZXJzaW9uaW5nLWFuZC1jYWNoZS1idXN0aW5nXCJcbiAgICAgIH19Pntg0LLQtdGA0YHQuNC+0L3QuNGA0L7QstCw0L3QuNC1YH08L2E+e2Ag0LIg0JLQsNGI0LXQvCDRhNCw0LnQu9C1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHdlYnBhY2subWl4LmpzYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9