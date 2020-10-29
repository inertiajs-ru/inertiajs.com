webpackHotUpdate_N_E("pages/local-state-caching",{

/***/ "./pages/local-state-caching.mdx":
/*!***************************************!*\
  !*** ./pages/local-state-caching.mdx ***!
  \***************************************/
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



var _jsxFileName = "C:\\OSPanel\\projects\\inertiajs.com\\pages\\local-state-caching.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])([")\n\n          // ...\n      "], [")\\n\n          // ...\n      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n          import { page, remember } from '@inertiajs/inertia-svelte'\n\n          let form = remember({\n            first_name: null,\n            last_name: null,\n          }, "], ["\n          import { page, remember } from '@inertiajs/inertia-svelte'\\n\n          let form = remember({\n            first_name: null,\n            last_name: null,\n          }, "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n          )\n\n          // ...\n        }\n      "], ["\n          )\\n\n          // ...\n        }\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { useRememberedState } from '@inertiajs/inertia-react'\n        import React from 'react'\n\n        export default function Profile() {\n          const [formState, setFormState] = useRememberedState(\n            {\n              first_name: props.user.first_name,\n              last_name: props.user.last_name,\n              // ...\n            },\n            "], ["\n        import { useRememberedState } from '@inertiajs/inertia-react'\n        import React from 'react'\\n\n        export default function Profile() {\n          const [formState, setFormState] = useRememberedState(\n            {\n              first_name: props.user.first_name,\n              last_name: props.user.last_name,\n              // ...\n            },\n            "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])([",\n          },\n          data() {\n            return {\n              form: {\n                first_name: this.user.first_name,\n                last_name: this.user.last_name,\n                // ...\n              },\n            }\n          },\n        }\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        {\n          remember: {\n            data: ['form'],\n            key: () =>"]);

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
  title: 'Кэширование локального состояния',
  links: [{
    url: '#top',
    name: 'Вступление'
  }, {
    url: '#запоминание-локального-состояния',
    name: 'Запоминание локального состояния'
  }, {
    url: '#несколько-компонентов',
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
  }, "\u041A\u044D\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, "\u041F\u0440\u0438 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043F\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 Inertia \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0434\u0430\u043D\u043D\u044B\u0435, \u043A\u044D\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438. \u041E\u0434\u043D\u0430\u043A\u043E \u0438\u043D\u0435\u0440\u0446\u0438\u044F \u043D\u0435 \u043A\u044D\u0448\u0438\u0440\u0443\u0435\u0442 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u043E\u043D\u043E \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E. \u042D\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043A \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044E \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0412\u0430\u0448\u0435\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0435\u0441\u043B\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0447\u0430\u0441\u0442\u0438\u0447\u043D\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0435\u0442 \u0444\u043E\u0440\u043C\u0443, \u0437\u0430\u0442\u0435\u043C \u0443\u0445\u043E\u0434\u0438\u0442, \u0430 \u0437\u0430\u0442\u0435\u043C \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u043E, \u0444\u043E\u0440\u043C\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u0431\u0440\u043E\u0448\u0435\u043D\u0430, \u0438 \u0435\u0433\u043E \u0440\u0430\u0431\u043E\u0442\u0430 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, "\u0417\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, "\u0427\u0442\u043E\u0431\u044B \u0441\u043C\u044F\u0433\u0447\u0438\u0442\u044C \u044D\u0442\u0443 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u044C Inertia, \u043A\u0430\u043A\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u043A\u044D\u0448\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Vue.js',
      description: 'Используйте свойство «запомнить» для кеширования локального состояния.',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject())
    }, {
      name: 'React',
      description: 'Use the "useRememberedState" hook to cache local state.',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2())
    }, {
      name: 'Svelte',
      description: 'Use the "remember" store to cache local state.',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, "\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u0430\u0448\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0449\u0438\u0445 \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F, \u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 175
    }
  }, "Users/Create"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, "\u0415\u0441\u043B\u0438 \u0443 \u0412\u0430\u0441 \u0435\u0441\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u043E\u0432 \u043E\u0434\u043D\u043E\u0433\u043E \u0438 \u0442\u043E\u0433\u043E \u0436\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435, \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0438\u0437 \u044D\u0442\u0438\u0445 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u043E\u0432. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 179
    }
  }, "Users/Edit:{id}"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject4()) + "`Users/Edit:${this.user.id}`" + dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject5())
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject6()) + "`Users/Edit:${this.user.id}`" + dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject7())
    }, {
      name: 'Svelte',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject8()) + "`Users/Edit:${$page.props.user.id}`" + dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject9())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9jYWwtc3RhdGUtY2FjaGluZy5tZHgiXSwibmFtZXMiOlsibWV0YSIsInRpdGxlIiwibGlua3MiLCJ1cmwiLCJuYW1lIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwiZGVzY3JpcHRpb24iLCJsYW5ndWFnZSIsImNvZGUiLCJkZWRlbnQiLCJpc01EWENvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxJQUFJLEdBQUc7QUFDbEJDLE9BQUssRUFBRSxrQ0FEVztBQUVsQkMsT0FBSyxFQUFFLENBQUM7QUFDTkMsT0FBRyxFQUFFLE1BREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxtQ0FESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLHdCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkk7QUFGVyxDQUFiO0FBY1AsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCTCxNQUFJLEVBQUpBO0FBRGtCLENBQXBCO0FBR0EsSUFBTU0sU0FBUyxHQUFHQywwREFBbEI7QUFFZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCx5RkFBZUwsV0FBZixFQUFnQ0ssS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtBQUErRCxXQUFPLEVBQUMsV0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUlMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOExBSkssRUFLTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHMzQ0FMSyxFQU1MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbXdCQU5LLEVBT0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4TEFQSyxFQVFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOHBCQVJLLEVBU0wsMERBQUMsc0VBQUQ7QUFBb0IsWUFBUSxFQUFFLENBQUM7QUFDN0JMLFVBQUksRUFBRSxRQUR1QjtBQUU3Qk8saUJBQVcsRUFBRSx3RUFGZ0I7QUFHN0JDLGNBQVEsRUFBRSxJQUhtQjtBQUk3QkMsVUFBSSxFQUFFQyxnREFBRjtBQUp5QixLQUFELEVBeUIzQjtBQUNEVixVQUFJLEVBQUUsT0FETDtBQUVETyxpQkFBVyxFQUFFLHlEQUZaO0FBR0RDLGNBQVEsRUFBRSxLQUhUO0FBSURDLFVBQUksRUFBRUMsZ0RBQUY7QUFKSCxLQXpCMkIsRUF5QzNCO0FBQ0RWLFVBQUksRUFBRSxRQURMO0FBRURPLGlCQUFXLEVBQUUsZ0RBRlo7QUFHREMsY0FBUSxFQUFFLElBSFQ7QUFJREMsVUFBSSxFQUFFQyxnREFBRjtBQUpILEtBekMyQixDQUE5QjtBQXFESSxXQUFPLEVBQUMsb0JBckRaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSyxFQStETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlJQS9ESyxFQWdFTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDYyQkFBMEs7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBMUssTUFoRUssRUFpRUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpM0JBQThLO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQTlLLE1BakVLLEVBa0VMLDBEQUFDLHNFQUFEO0FBQW9CLFlBQVEsRUFBRSxDQUFDO0FBQzdCVixVQUFJLEVBQUUsUUFEdUI7QUFFN0JRLGNBQVEsRUFBRSxJQUZtQjtBQUc3QkMsVUFBSSxFQUFFQyxnREFBTSxvQkFBTixvQ0FJa0RBLGdEQUpsRDtBQUh1QixLQUFELEVBb0IzQjtBQUNEVixVQUFJLEVBQUUsT0FETDtBQUVEUSxjQUFRLEVBQUUsS0FGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFNLG9CQUFOLG9DQVV3Q0EsZ0RBVnhDO0FBSEwsS0FwQjJCLEVBc0MzQjtBQUNEVixVQUFJLEVBQUUsUUFETDtBQUVEUSxjQUFRLEVBQUUsSUFGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFNLG9CQUFOLDJDQUtnREEsZ0RBTGhEO0FBSEwsS0F0QzJCLENBQTlCO0FBaURJLFdBQU8sRUFBQyxvQkFqRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxFSyxDQUFQO0FBcUhEO0tBekh1Qk4sVTtBQTJIeEI7QUFDQUEsVUFBVSxDQUFDTyxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvY2FsLXN0YXRlLWNhY2hpbmcuZWU4OWIzZDNiYWU3YTA1ZWVmZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCBkZWRlbnQgZnJvbSAnZGVkZW50LWpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBUYWJiZWRDb2RlRXhhbXBsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiZWRDb2RlRXhhbXBsZXMnXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6ICfQmtGN0YjQuNGA0L7QstCw0L3QuNC1INC70L7QutCw0LvRjNC90L7Qs9C+INGB0L7RgdGC0L7Rj9C90LjRjycsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyN0b3AnLFxuICAgIG5hbWU6ICfQktGB0YLRg9C/0LvQtdC90LjQtSdcbiAgfSwge1xuICAgIHVybDogJyPQt9Cw0L/QvtC80LjQvdCw0L3QuNC1LdC70L7QutCw0LvRjNC90L7Qs9C+LdGB0L7RgdGC0L7Rj9C90LjRjycsXG4gICAgbmFtZTogJ9CX0LDQv9C+0LzQuNC90LDQvdC40LUg0LvQvtC60LDQu9GM0L3QvtCz0L4g0YHQvtGB0YLQvtGP0L3QuNGPJ1xuICB9LCB7XG4gICAgdXJsOiAnI9C90LXRgdC60L7Qu9GM0LrQvi3QutC+0LzQv9C+0L3QtdC90YLQvtCyJyxcbiAgICBuYW1lOiAn0J3QtdGB0LrQvtC70YzQutC+INC60L7QvNC/0L7QvdC10L3RgtC+0LInXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQmtGN0YjQuNGA0L7QstCw0L3QuNC1INC70L7QutCw0LvRjNC90L7Qs9C+INGB0L7RgdGC0L7Rj9C90LjRj2B9PC9oMT5cbiAgICA8cD57YNCf0YDQuCDQvdCw0LLQuNCz0LDRhtC40Lgg0L/QviDQuNGB0YLQvtGA0LjQuCDQsdGA0LDRg9C30LXRgNCwIEluZXJ0aWEg0L/QtdGA0LXQt9Cw0LPRgNGD0LbQsNC10YIg0YHRgtGA0LDQvdC40YbRiywg0LjRgdC/0L7Qu9GM0LfRg9GPINC00LDQvdC90YvQtSwg0LrRjdGI0LjRgNC+0LLQsNC90L3Ri9C1INCyINC40YHRgtC+0YDQuNC4LiDQntC00L3QsNC60L4g0LjQvdC10YDRhtC40Y8g0L3QtSDQutGN0YjQuNGA0YPQtdGCINGB0L7RgdGC0L7Rj9C90LjQtSDQu9C+0LrQsNC70YzQvdC+0LPQviDQutC+0LzQv9C+0L3QtdC90YLQsCwg0L/QvtGB0LrQvtC70YzQutGDINC+0L3QviDQvdC10LTQvtGB0YLRg9C/0L3Qvi4g0K3RgtC+INC80L7QttC10YIg0L/RgNC40LLQtdGB0YLQuCDQuiDQv9C+0Y/QstC70LXQvdC40Y4g0YPRgdGC0LDRgNC10LLRiNC40YUg0YHRgtGA0LDQvdC40YYg0LIg0LjRgdGC0L7RgNC40Lgg0JLQsNGI0LXQs9C+INCx0YDQsNGD0LfQtdGA0LAuYH08L3A+XG4gICAgPHA+e2DQndCw0L/RgNC40LzQtdGALCDQtdGB0LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0YfQsNGB0YLQuNGH0L3QviDQt9Cw0L/QvtC70L3Rj9C10YIg0YTQvtGA0LzRgywg0LfQsNGC0LXQvCDRg9GF0L7QtNC40YIsINCwINC30LDRgtC10Lwg0LLQvtC30LLRgNCw0YnQsNC10YLRgdGPINC+0LHRgNCw0YLQvdC+LCDRhNC+0YDQvNCwINCx0YPQtNC10YIg0YHQsdGA0L7RiNC10L3QsCwg0Lgg0LXQs9C+INGA0LDQsdC+0YLQsCDQsdGD0LTQtdGCINC/0L7RgtC10YDRj9C90LAuYH08L3A+XG4gICAgPGgyPntg0JfQsNC/0L7QvNC40L3QsNC90LjQtSDQu9C+0LrQsNC70YzQvdC+0LPQviDRgdC+0YHRgtC+0Y/QvdC40Y9gfTwvaDI+XG4gICAgPHA+e2DQp9GC0L7QsdGLINGB0LzRj9Cz0YfQuNGC0Ywg0Y3RgtGDINC/0YDQvtCx0LvQtdC80YMsINCS0Ysg0LzQvtC20LXRgtC1INGD0LrQsNC30LDRgtGMIEluZXJ0aWEsINC60LDQutC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1INC70L7QutCw0LvRjNC90L7Qs9C+INC60L7QvNC/0L7QvdC10L3RgtCwINGB0LvQtdC00YPQtdGCINC60Y3RiNC40YDQvtCy0LDRgtGMINCyINC40YHRgtC+0YDQuNC4INCx0YDQsNGD0LfQtdGA0LAuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgZGVzY3JpcHRpb246ICfQmNGB0L/QvtC70YzQt9GD0LnRgtC1INGB0LLQvtC50YHRgtCy0L4gwqvQt9Cw0L/QvtC80L3QuNGC0YzCuyDQtNC70Y8g0LrQtdGI0LjRgNC+0LLQsNC90LjRjyDQu9C+0LrQsNC70YzQvdC+0LPQviDRgdC+0YHRgtC+0Y/QvdC40Y8uJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICB7XG4gICAgICAgICAgLy8gT3B0aW9uIDE6IE9iamVjdFxuICAgICAgICAgIHJlbWVtYmVyOiB7XG4gICAgICAgICAgICBkYXRhOiBbJ2Zvcm0nXSxcbiAgICAgICAgICB9LFxcblxuICAgICAgICAgIC8vIE9wdGlvbiAyOiBBcnJheVxuICAgICAgICAgIHJlbWVtYmVyOiBbJ2Zvcm0nXSxcXG5cbiAgICAgICAgICAvLyBPcHRpb24gMzogU3RyaW5nXG4gICAgICAgICAgcmVtZW1iZXI6ICdmb3JtJyxcXG5cbiAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgIGZpcnN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIC8vIC4uLlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgZGVzY3JpcHRpb246ICdVc2UgdGhlIFwidXNlUmVtZW1iZXJlZFN0YXRlXCIgaG9vayB0byBjYWNoZSBsb2NhbCBzdGF0ZS4nLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyB1c2VSZW1lbWJlcmVkU3RhdGUgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXG4gICAgICAgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgICAgICAgICBjb25zdCBbZm9ybVN0YXRlLCBzZXRGb3JtU3RhdGVdID0gdXNlUmVtZW1iZXJlZFN0YXRlKHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICBsYXN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICAvLyAuLi5cbiAgICAgICAgICB9KVxcblxuICAgICAgICAgIC8vIC4uLlxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1VzZSB0aGUgXCJyZW1lbWJlclwiIHN0b3JlIHRvIGNhY2hlIGxvY2FsIHN0YXRlLicsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgcmVtZW1iZXIgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICBsZXQgZm9ybSA9IHJlbWVtYmVyKHtcbiAgICAgICAgICBmaXJzdF9uYW1lOiBudWxsLFxuICAgICAgICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgICAgICAgfSlcXG5cbiAgICAgICAgLy8gLi4uXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCd0LXRgdC60L7Qu9GM0LrQviDQutC+0LzQv9C+0L3QtdC90YLQvtCyYH08L2gyPlxuICAgIDxwPntg0JXRgdC70Lgg0JLQsNGI0LAg0YHRgtGA0LDQvdC40YbQsCDRgdC+0LTQtdGA0LbQuNGCINC90LXRgdC60L7Qu9GM0LrQviDQutC+0LzQv9C+0L3QtdC90YLQvtCyLCDQuNGB0L/QvtC70YzQt9GD0Y7RidC40YUg0YTRg9C90LrRhtC40Y4g0LfQsNC/0L7QvNC40L3QsNC90LjRjywg0JLQsNC8INC90LXQvtCx0YXQvtC00LjQvNC+INC/0YDQtdC00L7RgdGC0LDQstC40YLRjCDRg9C90LjQutCw0LvRjNC90YvQuSDQutC70Y7RhyDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0LrQvtC80L/QvtC90LXQvdGC0LAuINCd0LDQv9GA0LjQvNC10YAsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YFVzZXJzL0NyZWF0ZWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwPntg0JXRgdC70Lgg0YMg0JLQsNGBINC10YHRgtGMINC90LXRgdC60L7Qu9GM0LrQviDRjdC60LfQtdC80L/Qu9GP0YDQvtCyINC+0LTQvdC+0LPQviDQuCDRgtC+0LPQviDQttC1INC60L7QvNC/0L7QvdC10L3RgtCwINC90LAg0YHRgtGA0LDQvdC40YbQtSwg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDRg9C60LDQttC40YLQtSDRg9C90LjQutCw0LvRjNC90YvQuSDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0LjQtyDRjdGC0LjRhSDRjdC60LfQtdC80L/Qu9GP0YDQvtCyLiDQndCw0L/RgNC40LzQtdGALCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BVc2Vycy9FZGl0OntpZH1gfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAge1xuICAgICAgICAgIHJlbWVtYmVyOiB7XG4gICAgICAgICAgICBkYXRhOiBbJ2Zvcm0nXSxcbiAgICAgICAgICAgIGtleTogKCkgPT5gICsgYFxcYFVzZXJzL0VkaXQ6XFwke3RoaXMudXNlci5pZH1cXGBgICsgZGVkZW50YCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogdGhpcy51c2VyLmZpcnN0X25hbWUsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lOiB0aGlzLnVzZXIubGFzdF9uYW1lLFxuICAgICAgICAgICAgICAgIC8vIC4uLlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyB1c2VSZW1lbWJlcmVkU3RhdGUgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXG4gICAgICAgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZSgpIHtcbiAgICAgICAgICBjb25zdCBbZm9ybVN0YXRlLCBzZXRGb3JtU3RhdGVdID0gdXNlUmVtZW1iZXJlZFN0YXRlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBmaXJzdF9uYW1lOiBwcm9wcy51c2VyLmZpcnN0X25hbWUsXG4gICAgICAgICAgICAgIGxhc3RfbmFtZTogcHJvcHMudXNlci5sYXN0X25hbWUsXG4gICAgICAgICAgICAgIC8vIC4uLlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGAgKyBgXFxgVXNlcnMvRWRpdDpcXCR7dGhpcy51c2VyLmlkfVxcYGAgKyBkZWRlbnRgXG4gICAgICAgICAgKVxcblxuICAgICAgICAgIC8vIC4uLlxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgICBpbXBvcnQgeyBwYWdlLCByZW1lbWJlciB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1zdmVsdGUnXFxuXG4gICAgICAgICAgbGV0IGZvcm0gPSByZW1lbWJlcih7XG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiBudWxsLFxuICAgICAgICAgIH0sIGAgKyBgXFxgVXNlcnMvRWRpdDpcXCR7JHBhZ2UucHJvcHMudXNlci5pZH1cXGBgICsgZGVkZW50YClcXG5cbiAgICAgICAgICAvLyAuLi5cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9