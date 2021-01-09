webpackHotUpdate_N_E("pages/remembering-state",{

/***/ "./pages/remembering-state.mdx":
/*!*************************************!*\
  !*** ./pages/remembering-state.mdx ***!
  \*************************************/
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



var _jsxFileName = "C:\\projects\\inertiajs\\inertiajs.ru\\pages\\remembering-state.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n          import { page, remember } from '@inertiajs/inertia-svelte'\n\n          let form = remember({\n            first_name: $page.props.user.first_name,\n            last_name: $page.props.user.last_name,\n          }, `Users/Edit:${$page.props.user.id}`)\n      "], ["\n          import { page, remember } from '@inertiajs/inertia-svelte'\\n\n          let form = remember({\n            first_name: $page.props.user.first_name,\n            last_name: $page.props.user.last_name,\n          }, \\`Users/Edit:\\${$page.props.user.id}\\`)\n      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { useRememberedState } from '@inertiajs/inertia-react'\n        import React from 'react'\n\n        export default function Profile() {\n          const [formState, setFormState] = useRememberedState({\n            first_name: props.user.first_name,\n            last_name: props.user.last_name,\n          }, `Users/Edit:${this.user.id}`)\n        }\n      "], ["\n        import { useRememberedState } from '@inertiajs/inertia-react'\n        import React from 'react'\\n\n        export default function Profile() {\n          const [formState, setFormState] = useRememberedState({\n            first_name: props.user.first_name,\n            last_name: props.user.last_name,\n          }, \\`Users/Edit:\\${this.user.id}\\`)\n        }\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        {\n          remember: {\n            data: ['form'],\n            key: () => `Users/Edit:${this.user.id}`,\n          },\n          data() {\n            return {\n              form: {\n                first_name: this.user.first_name,\n                last_name: this.user.last_name,\n              },\n            }\n          },\n        }\n      "], ["\n        {\n          remember: {\n            data: ['form'],\n            key: () => \\`Users/Edit:\\${this.user.id}\\`,\n          },\n          data() {\n            return {\n              form: {\n                first_name: this.user.first_name,\n                last_name: this.user.last_name,\n              },\n            }\n          },\n        }\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n          import { page, remember } from '@inertiajs/inertia-svelte'\n\n          let form = remember({\n            first_name: null,\n            last_name: null,\n          }, 'Users/Create')\n\n      "], ["\n          import { page, remember } from '@inertiajs/inertia-svelte'\\n\n          let form = remember({\n            first_name: null,\n            last_name: null,\n          }, 'Users/Create')\\n\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { useRememberedState } from '@inertiajs/inertia-react'\n        import React from 'react'\n\n        export default function Profile() {\n          const [formState, setFormState] = useRememberedState({\n            first_name: null,\n            last_name: null,\n          }, 'Users/Create')\n\n        }\n      "], ["\n        import { useRememberedState } from '@inertiajs/inertia-react'\n        import React from 'react'\\n\n        export default function Profile() {\n          const [formState, setFormState] = useRememberedState({\n            first_name: null,\n            last_name: null,\n          }, 'Users/Create')\\n\n        }\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        {\n          remember: {\n            data: ['form'],\n            key: 'Users/Create',\n          },\n          data() {\n            return {\n              form: {\n                first_name: null,\n                last_name: null,\n              },\n            }\n          },\n        }\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { remember } from '@inertiajs/inertia-svelte'\n\n        let form = remember({\n          first_name: null,\n          last_name: null,\n        })\n\n        // ...\n      "], ["\n        import { remember } from '@inertiajs/inertia-svelte'\\n\n        let form = remember({\n          first_name: null,\n          last_name: null,\n        })\\n\n        // ...\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { useRememberedState } from '@inertiajs/inertia-react'\n        import React from 'react'\n\n        export default function Profile() {\n          const [formState, setFormState] = useRememberedState({\n            first_name: null,\n            last_name: null,\n            // ...\n          })\n\n          // ...\n        }\n      "], ["\n        import { useRememberedState } from '@inertiajs/inertia-react'\n        import React from 'react'\\n\n        export default function Profile() {\n          const [formState, setFormState] = useRememberedState({\n            first_name: null,\n            last_name: null,\n            // ...\n          })\\n\n          // ...\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        {\n          // Option 1: Object\n          remember: {\n            data: ['form'],\n          },\n\n          // Option 2: Array\n          remember: ['form'],\n\n          // Option 3: String\n          remember: 'form',\n\n          data() {\n            return {\n              form: {\n                first_name: null,\n                last_name: null,\n                // ...\n              },\n            }\n          },\n        }\n      "], ["\n        {\n          // Option 1: Object\n          remember: {\n            data: ['form'],\n          },\\n\n          // Option 2: Array\n          remember: ['form'],\\n\n          // Option 3: String\n          remember: 'form',\\n\n          data() {\n            return {\n              form: {\n                first_name: null,\n                last_name: null,\n                // ...\n              },\n            }\n          },\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */





var meta = {
  title: 'Состояние запоминания',
  links: [{
    url: '#top',
    name: 'Введение'
  }, {
    url: '#multiple-components',
    name: 'Несколько компонентов'
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
      lineNumber: 29,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, "\u041F\u0440\u0438 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043F\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 Inertia \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0434\u0430\u043D\u043D\u044B\u0435, \u043A\u044D\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438. \u041E\u0434\u043D\u0430\u043A\u043E Inertia \u043D\u0435 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u044D\u0442\u043E \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E. \u042D\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043A \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044E \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0412\u0430\u0448\u0435\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0435\u0441\u043B\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0435\u0442 \u0444\u043E\u0440\u043C\u0443, \u0437\u0430\u0442\u0435\u043C \u0443\u0445\u043E\u0434\u0438\u0442, \u0430 \u0437\u0430\u0442\u0435\u043C \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u043E, \u0444\u043E\u0440\u043C\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u0431\u0440\u043E\u0448\u0435\u043D\u0430, \u0438 \u0435\u0433\u043E \u0440\u0430\u0431\u043E\u0442\u0430 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, "\u0427\u0442\u043E\u0431\u044B \u0441\u043C\u044F\u0433\u0447\u0438\u0442\u044C \u044D\u0442\u0443 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u044C Inertia, \u043A\u0430\u043A\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Vue.js',
      description: 'Use the "remember" property.',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject())
    }, {
      name: 'React',
      description: 'Use the "useRememberedState" hook.',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2())
    }, {
      name: 'Svelte',
      description: 'Use the "remember" store.',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, "\u0422\u0435\u043F\u0435\u0440\u044C, \u043A\u043E\u0433\u0434\u0430 \u0432\u0430\u0448\u0430 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u0430\u044F \u0444\u043E\u0440\u043C\u0430 \u0438\u0437\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F, Inertia \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 \u044D\u0442\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0438 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u0438\u0445 \u043F\u0440\u0438 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043F\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, "Multiple components"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, "If your page contains multiple components that use the remember functionality, you'll need to provide a unique identifier for each component, so that Inertia knows which data to restore to each component."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject4())
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject5())
    }, {
      name: 'Svelte',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject6())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 5
    }
  }, "If you have multiple instances of the same component on the page using the remember functionality, be sure to also include a unique identifier for each component instance."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject7())
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject8())
    }, {
      name: 'Svelte',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject9())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVtZW1iZXJpbmctc3RhdGUubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImRlc2NyaXB0aW9uIiwibGFuZ3VhZ2UiLCJjb2RlIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsdUJBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxNQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsc0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FISTtBQUZXLENBQWI7QUFXUCxJQUFNQyxXQUFXLEdBQUc7QUFDbEJMLE1BQUksRUFBSkE7QUFEa0IsQ0FBcEI7QUFHQSxJQUFNTSxTQUFTLEdBQUdDLDBEQUFsQjtBQUVlLFNBQVNDLFVBQVQsT0FHWjtBQUFBLE1BRkRDLFVBRUMsUUFGREEsVUFFQztBQUFBLE1BREVDLEtBQ0Y7O0FBQ0QsU0FBTywwREFBQyxTQUFELHlGQUFlTCxXQUFmLEVBQWdDSyxLQUFoQztBQUF1QyxjQUFVLEVBQUVELFVBQW5EO0FBQStELFdBQU8sRUFBQyxXQUF2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpSUFKSyxFQUtMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbzdDQUxLLEVBTUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtd0JBTkssRUFPTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdwQkFQSyxFQVFMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCTCxVQUFJLEVBQUUsUUFEdUI7QUFFN0JPLGlCQUFXLEVBQUUsOEJBRmdCO0FBRzdCQyxjQUFRLEVBQUUsSUFIbUI7QUFJN0JDLFVBQUksRUFBRUMsZ0RBQUY7QUFKeUIsS0FBRCxFQXlCM0I7QUFDRFYsVUFBSSxFQUFFLE9BREw7QUFFRE8saUJBQVcsRUFBRSxvQ0FGWjtBQUdEQyxjQUFRLEVBQUUsS0FIVDtBQUlEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSkgsS0F6QjJCLEVBeUMzQjtBQUNEVixVQUFJLEVBQUUsUUFETDtBQUVETyxpQkFBVyxFQUFFLDJCQUZaO0FBR0RDLGNBQVEsRUFBRSxJQUhUO0FBSURDLFVBQUksRUFBRUMsZ0RBQUY7QUFKSCxLQXpDMkIsQ0FBOUI7QUFxREksV0FBTyxFQUFDLG9CQXJEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkssRUE4REw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwweEJBOURLLEVBK0RMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBL0RLLEVBZ0VMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb05BaEVLLEVBaUVMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCVixVQUFJLEVBQUUsUUFEdUI7QUFFN0JRLGNBQVEsRUFBRSxJQUZtQjtBQUc3QkMsVUFBSSxFQUFFQyxnREFBRjtBQUh5QixLQUFELEVBbUIzQjtBQUNEVixVQUFJLEVBQUUsT0FETDtBQUVEUSxjQUFRLEVBQUUsS0FGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0FuQjJCLEVBZ0MzQjtBQUNEVixVQUFJLEVBQUUsUUFETDtBQUVEUSxjQUFRLEVBQUUsSUFGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0FoQzJCLENBQTlCO0FBMENJLFdBQU8sRUFBQyxvQkExQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpFSyxFQTRHTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1MQTVHSyxFQTZHTCwwREFBQyxzRUFBRDtBQUFvQixZQUFRLEVBQUUsQ0FBQztBQUM3QlYsVUFBSSxFQUFFLFFBRHVCO0FBRTdCUSxjQUFRLEVBQUUsSUFGbUI7QUFHN0JDLFVBQUksRUFBRUMsZ0RBQUY7QUFIeUIsS0FBRCxFQW1CM0I7QUFDRFYsVUFBSSxFQUFFLE9BREw7QUFFRFEsY0FBUSxFQUFFLEtBRlQ7QUFHREMsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBbkIyQixFQWdDM0I7QUFDRFYsVUFBSSxFQUFFLFFBREw7QUFFRFEsY0FBUSxFQUFFLElBRlQ7QUFHREMsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBaEMyQixDQUE5QjtBQTBDSSxXQUFPLEVBQUMsb0JBMUNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3R0ssQ0FBUDtBQXlKRDtLQTdKdUJOLFU7QUErSnhCO0FBQ0FBLFVBQVUsQ0FBQ08sY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZW1lbWJlcmluZy1zdGF0ZS43OGZjMDc2OGUyNzc1NjFiODdjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFRhYmJlZENvZGVFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJlZENvZGVFeGFtcGxlcydcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9Ch0L7RgdGC0L7Rj9C90LjQtSDQt9Cw0L/QvtC80LjQvdCw0L3QuNGPJyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI3RvcCcsXG4gICAgbmFtZTogJ9CS0LLQtdC00LXQvdC40LUnXG4gIH0sIHtcbiAgICB1cmw6ICcjbXVsdGlwbGUtY29tcG9uZW50cycsXG4gICAgbmFtZTogJ9Cd0LXRgdC60L7Qu9GM0LrQviDQutC+0LzQv9C+0L3QtdC90YLQvtCyJ1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0KHQvtGB0YLQvtGP0L3QuNC1INC30LDQv9C+0LzQuNC90LDQvdC40Y9gfTwvaDE+XG4gICAgPHA+e2DQn9GA0Lgg0L3QsNCy0LjQs9Cw0YbQuNC4INC/0L4g0LjRgdGC0L7RgNC40Lgg0LHRgNCw0YPQt9C10YDQsCBJbmVydGlhINCy0L7RgdGB0YLQsNC90LDQstC70LjQstCw0LXRgiDRgdGC0YDQsNC90LjRhtGLLCDQuNGB0L/QvtC70YzQt9GD0Y8g0LTQsNC90L3Ri9C1LCDQutGN0YjQuNGA0L7QstCw0L3QvdGL0LUg0LIg0LjRgdGC0L7RgNC40LguINCe0LTQvdCw0LrQviBJbmVydGlhINC90LUg0LLQvtGB0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGCINGB0L7RgdGC0L7Rj9C90LjQtSDQutC+0LzQv9C+0L3QtdC90YLQsCDQu9C+0LrQsNC70YzQvdC+0Lkg0YHRgtGA0LDQvdC40YbRiywg0L/QvtGB0LrQvtC70YzQutGDINGN0YLQviDQvdC10LTQvtGB0YLRg9C/0L3Qvi4g0K3RgtC+INC80L7QttC10YIg0L/RgNC40LLQtdGB0YLQuCDQuiDQv9C+0Y/QstC70LXQvdC40Y4g0YPRgdGC0LDRgNC10LLRiNC40YUg0YHRgtGA0LDQvdC40YYg0LIg0LjRgdGC0L7RgNC40Lgg0JLQsNGI0LXQs9C+INCx0YDQsNGD0LfQtdGA0LAuYH08L3A+XG4gICAgPHA+e2DQndCw0L/RgNC40LzQtdGALCDQtdGB0LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0YfQsNGB0YLQuNGH0L3QviDQt9Cw0L/QvtC70L3Rj9C10YIg0YTQvtGA0LzRgywg0LfQsNGC0LXQvCDRg9GF0L7QtNC40YIsINCwINC30LDRgtC10Lwg0LLQvtC30LLRgNCw0YnQsNC10YLRgdGPINC+0LHRgNCw0YLQvdC+LCDRhNC+0YDQvNCwINCx0YPQtNC10YIg0YHQsdGA0L7RiNC10L3QsCwg0Lgg0LXQs9C+INGA0LDQsdC+0YLQsCDQsdGD0LTQtdGCINC/0L7RgtC10YDRj9C90LAuYH08L3A+XG4gICAgPHA+e2DQp9GC0L7QsdGLINGB0LzRj9Cz0YfQuNGC0Ywg0Y3RgtGDINC/0YDQvtCx0LvQtdC80YMsINCS0Ysg0LzQvtC20LXRgtC1INGD0LrQsNC30LDRgtGMIEluZXJ0aWEsINC60LDQutC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1INC70L7QutCw0LvRjNC90L7Qs9C+INC60L7QvNC/0L7QvdC10L3RgtCwINGB0LvQtdC00YPQtdGCINGB0L7RhdGA0LDQvdC40YLRjCDQsiDQuNGB0YLQvtGA0LjQuCDQsdGA0LDRg9C30LXRgNCwLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVXNlIHRoZSBcInJlbWVtYmVyXCIgcHJvcGVydHkuJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICB7XG4gICAgICAgICAgLy8gT3B0aW9uIDE6IE9iamVjdFxuICAgICAgICAgIHJlbWVtYmVyOiB7XG4gICAgICAgICAgICBkYXRhOiBbJ2Zvcm0nXSxcbiAgICAgICAgICB9LFxcblxuICAgICAgICAgIC8vIE9wdGlvbiAyOiBBcnJheVxuICAgICAgICAgIHJlbWVtYmVyOiBbJ2Zvcm0nXSxcXG5cbiAgICAgICAgICAvLyBPcHRpb24gMzogU3RyaW5nXG4gICAgICAgICAgcmVtZW1iZXI6ICdmb3JtJyxcXG5cbiAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgIGZpcnN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIC8vIC4uLlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgZGVzY3JpcHRpb246ICdVc2UgdGhlIFwidXNlUmVtZW1iZXJlZFN0YXRlXCIgaG9vay4nLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyB1c2VSZW1lbWJlcmVkU3RhdGUgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXG4gICAgICAgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgICAgICAgICBjb25zdCBbZm9ybVN0YXRlLCBzZXRGb3JtU3RhdGVdID0gdXNlUmVtZW1iZXJlZFN0YXRlKHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICBsYXN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICAvLyAuLi5cbiAgICAgICAgICB9KVxcblxuICAgICAgICAgIC8vIC4uLlxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1VzZSB0aGUgXCJyZW1lbWJlclwiIHN0b3JlLicsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgcmVtZW1iZXIgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICBsZXQgZm9ybSA9IHJlbWVtYmVyKHtcbiAgICAgICAgICBmaXJzdF9uYW1lOiBudWxsLFxuICAgICAgICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgICAgICAgfSlcXG5cbiAgICAgICAgLy8gLi4uXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntg0KLQtdC/0LXRgNGMLCDQutC+0LPQtNCwINCy0LDRiNCwINC70L7QutCw0LvRjNC90LDRjyDRhNC+0YDQvNCwINC40LfQvNC10L3Rj9C10YLRgdGPLCBJbmVydGlhINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INGB0L7RhdGA0LDQvdGP0LXRgiDRjdGC0Lgg0LTQsNC90L3Ri9C1INCyINGB0L7RgdGC0L7Rj9C90LjQtSDQuNGB0YLQvtGA0LjQuCDQuCDQstC+0YHRgdGC0LDQvdCw0LLQu9C40LLQsNC10YIg0LjRhSDQv9GA0Lgg0L3QsNCy0LjQs9Cw0YbQuNC4INC/0L4g0LjRgdGC0L7RgNC40LguYH08L3A+XG4gICAgPGgyPntgTXVsdGlwbGUgY29tcG9uZW50c2B9PC9oMj5cbiAgICA8cD57YElmIHlvdXIgcGFnZSBjb250YWlucyBtdWx0aXBsZSBjb21wb25lbnRzIHRoYXQgdXNlIHRoZSByZW1lbWJlciBmdW5jdGlvbmFsaXR5LCB5b3UnbGwgbmVlZCB0byBwcm92aWRlIGEgdW5pcXVlIGlkZW50aWZpZXIgZm9yIGVhY2ggY29tcG9uZW50LCBzbyB0aGF0IEluZXJ0aWEga25vd3Mgd2hpY2ggZGF0YSB0byByZXN0b3JlIHRvIGVhY2ggY29tcG9uZW50LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICB7XG4gICAgICAgICAgcmVtZW1iZXI6IHtcbiAgICAgICAgICAgIGRhdGE6IFsnZm9ybSddLFxuICAgICAgICAgICAga2V5OiAnVXNlcnMvQ3JlYXRlJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICBsYXN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IHVzZVJlbWVtYmVyZWRTdGF0ZSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcbiAgICAgICAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xcblxuICAgICAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xuICAgICAgICAgIGNvbnN0IFtmb3JtU3RhdGUsIHNldEZvcm1TdGF0ZV0gPSB1c2VSZW1lbWJlcmVkU3RhdGUoe1xuICAgICAgICAgICAgZmlyc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICB9LCAnVXNlcnMvQ3JlYXRlJylcXG5cbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgICAgaW1wb3J0IHsgcGFnZSwgcmVtZW1iZXIgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICAgIGxldCBmb3JtID0gcmVtZW1iZXIoe1xuICAgICAgICAgICAgZmlyc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICB9LCAnVXNlcnMvQ3JlYXRlJylcXG5cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2BJZiB5b3UgaGF2ZSBtdWx0aXBsZSBpbnN0YW5jZXMgb2YgdGhlIHNhbWUgY29tcG9uZW50IG9uIHRoZSBwYWdlIHVzaW5nIHRoZSByZW1lbWJlciBmdW5jdGlvbmFsaXR5LCBiZSBzdXJlIHRvIGFsc28gaW5jbHVkZSBhIHVuaXF1ZSBpZGVudGlmaWVyIGZvciBlYWNoIGNvbXBvbmVudCBpbnN0YW5jZS5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAge1xuICAgICAgICAgIHJlbWVtYmVyOiB7XG4gICAgICAgICAgICBkYXRhOiBbJ2Zvcm0nXSxcbiAgICAgICAgICAgIGtleTogKCkgPT4gXFxgVXNlcnMvRWRpdDpcXCR7dGhpcy51c2VyLmlkfVxcYCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogdGhpcy51c2VyLmZpcnN0X25hbWUsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lOiB0aGlzLnVzZXIubGFzdF9uYW1lLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyB1c2VSZW1lbWJlcmVkU3RhdGUgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXG4gICAgICAgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgICAgICAgICBjb25zdCBbZm9ybVN0YXRlLCBzZXRGb3JtU3RhdGVdID0gdXNlUmVtZW1iZXJlZFN0YXRlKHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IHByb3BzLnVzZXIuZmlyc3RfbmFtZSxcbiAgICAgICAgICAgIGxhc3RfbmFtZTogcHJvcHMudXNlci5sYXN0X25hbWUsXG4gICAgICAgICAgfSwgXFxgVXNlcnMvRWRpdDpcXCR7dGhpcy51c2VyLmlkfVxcYClcbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgICAgaW1wb3J0IHsgcGFnZSwgcmVtZW1iZXIgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICAgIGxldCBmb3JtID0gcmVtZW1iZXIoe1xuICAgICAgICAgICAgZmlyc3RfbmFtZTogJHBhZ2UucHJvcHMudXNlci5maXJzdF9uYW1lLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiAkcGFnZS5wcm9wcy51c2VyLmxhc3RfbmFtZSxcbiAgICAgICAgICB9LCBcXGBVc2Vycy9FZGl0OlxcJHskcGFnZS5wcm9wcy51c2VyLmlkfVxcYClcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9