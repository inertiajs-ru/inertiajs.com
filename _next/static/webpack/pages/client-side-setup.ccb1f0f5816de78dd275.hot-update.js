webpackHotUpdate_N_E("pages/client-side-setup",{

/***/ "./pages/client-side-setup.mdx":
/*!*************************************!*\
  !*** ./pages/client-side-setup.mdx ***!
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
/* harmony import */ var _components_Notice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Notice */ "./components/Notice.js");
/* harmony import */ var _components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TabbedCodeExamples */ "./components/TabbedCodeExamples.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");



var _jsxFileName = "C:\\OSPanel\\projects\\inertiajs.com\\pages\\client-side-setup.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        resolveComponent: name => import(`./Pages/${name}.svelte`),\n      "], ["\n        resolveComponent: name => import(\\`./Pages/\\${name}.svelte\\`),\n      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}\n      "], ["\n        resolveComponent={name => import(\\`./Pages/\\${name}\\`).then(module => module.default)}\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),\n      "], ["\n        resolveComponent: name => import(\\`./Pages/\\${name}\\`).then(module => module.default),\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        import { App } from '@inertiajs/inertia-svelte'\n\n        const el = document.getElementById('app')\n\n        new App({\n          target: el,\n          props: {\n            initialPage: JSON.parse(el.dataset.page),\n            resolveComponent: name => require(`./Pages/${name}.svelte`),\n          },\n        })\n      "], ["\n        import { App } from '@inertiajs/inertia-svelte'\\n\n        const el = document.getElementById('app')\\n\n        new App({\n          target: el,\n          props: {\n            initialPage: JSON.parse(el.dataset.page),\n            resolveComponent: name => require(\\`./Pages/\\${name}.svelte\\`),\n          },\n        })\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        import { App } from '@inertiajs/inertia-react'\n        import React from 'react'\n        import { render } from 'react-dom'\n\n        const el = document.getElementById('app')\n\n        render(\n          <App\n            initialPage={JSON.parse(el.dataset.page)}\n            resolveComponent={name => require(`./Pages/${name}`).default}\n          />,\n          el\n        )\n      "], ["\n        import { App } from '@inertiajs/inertia-react'\n        import React from 'react'\n        import { render } from 'react-dom'\\n\n        const el = document.getElementById('app')\\n\n        render(\n          <App\n            initialPage={JSON.parse(el.dataset.page)}\n            resolveComponent={name => require(\\`./Pages/\\${name}\\`).default}\n          />,\n          el\n        )\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        /*\n        |----------------------------------------------------------------\n        | Vue 3\n        |----------------------------------------------------------------\n        */\n\n        import { createApp, h } from 'vue'\n        import { App, plugin } from '@inertiajs/inertia-vue3'\n\n        const el = document.getElementById('app')\n\n        createApp({\n          render: () => h(App, {\n            initialPage: JSON.parse(el.dataset.page),\n            resolveComponent: name => require(`./Pages/${name}`).default,\n          })\n        }).use(plugin).mount(el)\n\n\n        /*\n        |----------------------------------------------------------------\n        | Vue 2\n        |----------------------------------------------------------------\n        */\n\n        import { App, plugin } from '@inertiajs/inertia-vue'\n        import Vue from 'vue'\n\n        Vue.use(plugin)\n\n        const el = document.getElementById('app')\n\n        new Vue({\n          render: h => h(App, {\n            props: {\n              initialPage: JSON.parse(el.dataset.page),\n              resolveComponent: name => require(`./Pages/${name}`).default,\n            },\n          }),\n        }).$mount(el)\n      "], ["\n        /*\n        |----------------------------------------------------------------\n        | Vue 3\n        |----------------------------------------------------------------\n        */\\n\n        import { createApp, h } from 'vue'\n        import { App, plugin } from '@inertiajs/inertia-vue3'\\n\n        const el = document.getElementById('app')\\n\n        createApp({\n          render: () => h(App, {\n            initialPage: JSON.parse(el.dataset.page),\n            resolveComponent: name => require(\\`./Pages/\\${name}\\`).default,\n          })\n        }).use(plugin).mount(el)\\n\\n\n        /*\n        |----------------------------------------------------------------\n        | Vue 2\n        |----------------------------------------------------------------\n        */\\n\n        import { App, plugin } from '@inertiajs/inertia-vue'\n        import Vue from 'vue'\\n\n        Vue.use(plugin)\\n\n        const el = document.getElementById('app')\\n\n        new Vue({\n          render: h => h(App, {\n            props: {\n              initialPage: JSON.parse(el.dataset.page),\n              resolveComponent: name => require(\\`./Pages/\\${name}\\`).default,\n            },\n          }),\n        }).$mount(el)\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        npm install @inertiajs/inertia @inertiajs/inertia-svelte\n        yarn add @inertiajs/inertia @inertiajs/inertia-svelte\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        npm install @inertiajs/inertia @inertiajs/inertia-react\n        yarn add @inertiajs/inertia @inertiajs/inertia-react\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        npm install @inertiajs/inertia @inertiajs/inertia-vue\n        yarn add @inertiajs/inertia @inertiajs/inertia-vue\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */






var meta = {
  title: 'Установка клиентской части',
  links: [{
    url: '#установка-зависимостей',
    name: 'Установка зависимостей'
  }, {
    url: '#инициализация-приложения',
    name: 'Инициализация приложения'
  }, {
    url: '#индикатор-загрузки',
    name: 'Индикатор загрузки'
  }, {
    url: '#разделение-кода',
    name: 'Разделение кода'
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
      lineNumber: 36,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u043E\u0439 \u0447\u0430\u0441\u0442\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0441\u043B\u0435 \u0442\u043E\u0433\u043E, \u043A\u0430\u043A \u0412\u044B \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u043B\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/server-side-setup"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 41
    }
  }), "\u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"), ", \u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0443\u044E \u0441\u0440\u0435\u0434\u0443. Inertia \u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 React, Vue.js \u0438 Svelte."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0435\u0439"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0438\u0435 \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u044B Inertia \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E NPM \u0438\u043B\u0438 Yarn."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'bash',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject())
    }, {
      name: 'React',
      language: 'bash',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2())
    }, {
      name: 'Svelte',
      language: 'bash',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, "\u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, "\u0417\u0430\u0442\u0435\u043C \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0444\u0430\u0439\u043B JavaScript, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 Inertia. \u0412\u0441\u0435, \u0447\u0442\u043E \u043C\u044B \u0437\u0434\u0435\u0441\u044C \u0434\u0435\u043B\u0430\u0435\u043C, \u044D\u0442\u043E \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0443\u044E \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0431\u0430\u0437\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B Inertia."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      lineNumber: 70,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 8
    }
  }, "resolveComponent"), " - \u044D\u0442\u043E \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0432\u044B\u0437\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0441\u043E\u043E\u0431\u0449\u0430\u0435\u0442 Inertia, \u043A\u0430\u043A \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u041E\u043D \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u0438\u043C\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B (\u0441\u0442\u0440\u043E\u043A\u0443) \u0438 \u0434\u043E\u043B\u0436\u0435\u043D \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044C \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 5
    }
  }, "\u0418\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u0438\u043D\u0435\u0440\u0446\u0438\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u044E\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 XHR, \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u043D\u0435\u0442. \u0427\u0442\u043E\u0431\u044B \u0440\u0435\u0448\u0438\u0442\u044C \u044D\u0442\u0443 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443, Inertia \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/inertiajs/progress"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 172
    }
  }), "\u043F\u0430\u043A\u0435\u0442 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430"), ", \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0438\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://ricostacruz.com/nprogress/"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 63
    }
  }), "NProgress.js"), ", a nice little progress bar library."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 5
    }
  }, "Start by installing it:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-bash"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 10
    }
  }), "npm install @inertiajs/progress\nyarn add @inertiajs/progress\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 5
    }
  }, "Once it's been installed, initialize it in your app."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 10
    }
  }), "import { InertiaProgress } from '@inertiajs/progress'\n\nInertiaProgress.init()\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 5
    }
  }, "It also comes with a number of customization options, which you can pass to the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 92
    }
  }, "init()"), " method."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 10
    }
  }), "InertiaProgress.init({\n  // The delay after which the progress bar will\n  // appear during navigation, in milliseconds.\n  delay: 250,\n\n  // The color of the progress bar.\n  color: '#29d',\n\n  // Whether to include the default NProgress styles.\n  includeCSS: true,\n\n  // Whether the NProgress spinner will be shown.\n  showSpinner: false,\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 5
    }
  }, "\u0420\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u043A\u043E\u0434\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 5
    }
  }, "To use code splitting with Inertia you'll need to enable ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/tc39/proposal-dynamic-import"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 69
    }
  }), "dynamic imports"), ". You'll need a Babel plugin to make this work. First, install the plugin:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-bash"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 10
    }
  }), "npm install @babel/plugin-syntax-dynamic-import\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 5
    }
  }, "Next, create a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 27
    }
  }, ".babelrc"), " file in your project with the following:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-json"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 10
    }
  }), "{\n  \"plugins\": [\"@babel/plugin-syntax-dynamic-import\"]\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mdxType: "Notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 5
    }
  }, "If you're using Laravel Mix v4, the dynamic imports Babel plugin is already configured. However, there is a known issue with Laravel Mix v4 when using dynamic imports where you cannot use styles within Vue files due to a Webpack", ' ', Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", {
    href: "https://github.com/JeffreyWay/laravel-mix/issues/1856#issuecomment-448082909",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 3
    }
  }, "limitation"), ". As a workaround, you need to drop Mix entirely or downgrade to Laravel Mix v3."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 5
    }
  }, "Finally, update the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 32
    }
  }, "resolveComponent"), " callback in your app initialization to use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 140
    }
  }, "import"), " instead of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 206
    }
  }, "require"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      lineNumber: 197,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }, "Consider using cache busting to force browsers to load the latest version of your assets. To do this, add the following to your webpack config:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 10
    }
  }), "output: {\n  chunkFilename: 'js/[name].js?id=[chunkhash]',\n}\n")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50LXNpZGUtc2V0dXAubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLElBQUksR0FBRztBQUNsQkMsT0FBSyxFQUFFLDRCQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUseUJBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSwyQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLHFCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsa0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSTtBQUZXLENBQWI7QUFpQlAsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCTCxNQUFJLEVBQUpBO0FBRGtCLENBQXBCO0FBR0EsSUFBTU0sU0FBUyxHQUFHQywwREFBbEI7QUFFZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCx5RkFBZUwsV0FBZixFQUFnQ0ssS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtB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QUFBLHVKQXBMSyxFQXFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBMkI7QUFDNUIsaUJBQWE7QUFEZSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdFQUFMLENBckxLLENBQVA7QUE0TEQ7S0FoTXVCTCxVO0FBa014QjtBQUNBQSxVQUFVLENBQUNNLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2xpZW50LXNpZGUtc2V0dXAuY2NiMWYwZjU4MTZkZTc4ZGQyNzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCBkZWRlbnQgZnJvbSAnZGVkZW50LWpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBOb3RpY2UgZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RpY2UnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0KPRgdGC0LDQvdC+0LLQutCwINC60LvQuNC10L3RgtGB0LrQvtC5INGH0LDRgdGC0LgnLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcj0YPRgdGC0LDQvdC+0LLQutCwLdC30LDQstC40YHQuNC80L7RgdGC0LXQuScsXG4gICAgbmFtZTogJ9Cj0YHRgtCw0L3QvtCy0LrQsCDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10LknXG4gIH0sIHtcbiAgICB1cmw6ICcj0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8t0L/RgNC40LvQvtC20LXQvdC40Y8nLFxuICAgIG5hbWU6ICfQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQv9GA0LjQu9C+0LbQtdC90LjRjydcbiAgfSwge1xuICAgIHVybDogJyPQuNC90LTQuNC60LDRgtC+0YAt0LfQsNCz0YDRg9C30LrQuCcsXG4gICAgbmFtZTogJ9CY0L3QtNC40LrQsNGC0L7RgCDQt9Cw0LPRgNGD0LfQutC4J1xuICB9LCB7XG4gICAgdXJsOiAnI9GA0LDQt9C00LXQu9C10L3QuNC1LdC60L7QtNCwJyxcbiAgICBuYW1lOiAn0KDQsNC30LTQtdC70LXQvdC40LUg0LrQvtC00LAnXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQo9GB0YLQsNC90L7QstC60LAg0LrQu9C40LXQvdGC0YHQutC+0Lkg0YfQsNGB0YLQuGB9PC9oMT5cbiAgICA8cD57YNCf0L7RgdC70LUg0YLQvtCz0L4sINC60LDQuiDQktGLINC90LDRgdGC0YDQvtC40LvQuCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3NlcnZlci1zaWRlLXNldHVwXCJcbiAgICAgIH19Pntg0LrQvtC90YTQuNCz0YPRgNCw0YbQuNGOINC/0LvQsNGC0YTQvtGA0LzRiyDQvdCwINGB0YLQvtGA0L7QvdC1INGB0LXRgNCy0LXRgNCwYH08L2E+e2AsINCS0LDQvCDQvdC10L7QsdGF0L7QtNC40LzQviDQvdCw0YHRgtGA0L7QuNGC0Ywg0LrQu9C40LXQvdGC0YHQutGD0Y4g0YHRgNC10LTRgy4gSW5lcnRpYSDQsiDQvdCw0YHRgtC+0Y/RidC10LUg0LLRgNC10LzRjyDQv9C+0LTQtNC10YDQttC40LLQsNC10YIgUmVhY3QsIFZ1ZS5qcyDQuCBTdmVsdGUuYH08L3A+XG4gICAgPGgyPntg0KPRgdGC0LDQvdC+0LLQutCwINC30LDQstC40YHQuNC80L7RgdGC0LXQuWB9PC9oMj5cbiAgICA8cD57YNCj0YHRgtCw0L3QvtCy0LjRgtC1INC60LvQuNC10L3RgtGB0LrQuNC1INCw0LTQsNC/0YLQtdGA0YsgSW5lcnRpYSDRgSDQv9C+0LzQvtGJ0YzRjiBOUE0g0LjQu9C4IFlhcm4uYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdiYXNoJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgbnBtIGluc3RhbGwgQGluZXJ0aWFqcy9pbmVydGlhIEBpbmVydGlhanMvaW5lcnRpYS12dWVcbiAgICAgICAgeWFybiBhZGQgQGluZXJ0aWFqcy9pbmVydGlhIEBpbmVydGlhanMvaW5lcnRpYS12dWVcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdiYXNoJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgbnBtIGluc3RhbGwgQGluZXJ0aWFqcy9pbmVydGlhIEBpbmVydGlhanMvaW5lcnRpYS1yZWFjdFxuICAgICAgICB5YXJuIGFkZCBAaW5lcnRpYWpzL2luZXJ0aWEgQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2Jhc2gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBucG0gaW5zdGFsbCBAaW5lcnRpYWpzL2luZXJ0aWEgQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZVxuICAgICAgICB5YXJuIGFkZCBAaW5lcnRpYWpzL2luZXJ0aWEgQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZVxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8aDI+e2DQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQv9GA0LjQu9C+0LbQtdC90LjRj2B9PC9oMj5cbiAgICA8cD57YNCX0LDRgtC10Lwg0L7QsdC90L7QstC40YLQtSDRgdCy0L7QuSDQvtGB0L3QvtCy0L3QvtC5INGE0LDQudC7IEphdmFTY3JpcHQsINGH0YLQvtCx0Ysg0LfQsNCz0YDRg9C30LjRgtGMINC/0YDQuNC70L7QttC10L3QuNC1IEluZXJ0aWEuINCS0YHQtSwg0YfRgtC+INC80Ysg0LfQtNC10YHRjCDQtNC10LvQsNC10LwsINGN0YLQviDQuNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8INC60LvQuNC10L3RgtGB0LrRg9GOINGB0YLRgNGD0LrRgtGD0YDRgyDRgSDQv9C+0LzQvtGJ0YzRjiDQsdCw0LfQvtCy0L7Qs9C+INC60L7QvNC/0L7QvdC10L3RgtCwINGB0YLRgNCw0L3QuNGG0YsgSW5lcnRpYS5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgLypcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgfCBWdWUgM1xuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAqL1xcblxuICAgICAgICBpbXBvcnQgeyBjcmVhdGVBcHAsIGggfSBmcm9tICd2dWUnXG4gICAgICAgIGltcG9ydCB7IEFwcCwgcGx1Z2luIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXZ1ZTMnXFxuXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXFxuXG4gICAgICAgIGNyZWF0ZUFwcCh7XG4gICAgICAgICAgcmVuZGVyOiAoKSA9PiBoKEFwcCwge1xuICAgICAgICAgICAgaW5pdGlhbFBhZ2U6IEpTT04ucGFyc2UoZWwuZGF0YXNldC5wYWdlKSxcbiAgICAgICAgICAgIHJlc29sdmVDb21wb25lbnQ6IG5hbWUgPT4gcmVxdWlyZShcXGAuL1BhZ2VzL1xcJHtuYW1lfVxcYCkuZGVmYXVsdCxcbiAgICAgICAgICB9KVxuICAgICAgICB9KS51c2UocGx1Z2luKS5tb3VudChlbClcXG5cXG5cbiAgICAgICAgLypcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgfCBWdWUgMlxuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAqL1xcblxuICAgICAgICBpbXBvcnQgeyBBcHAsIHBsdWdpbiB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS12dWUnXG4gICAgICAgIGltcG9ydCBWdWUgZnJvbSAndnVlJ1xcblxuICAgICAgICBWdWUudXNlKHBsdWdpbilcXG5cbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcXG5cbiAgICAgICAgbmV3IFZ1ZSh7XG4gICAgICAgICAgcmVuZGVyOiBoID0+IGgoQXBwLCB7XG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICBpbml0aWFsUGFnZTogSlNPTi5wYXJzZShlbC5kYXRhc2V0LnBhZ2UpLFxuICAgICAgICAgICAgICByZXNvbHZlQ29tcG9uZW50OiBuYW1lID0+IHJlcXVpcmUoXFxgLi9QYWdlcy9cXCR7bmFtZX1cXGApLmRlZmF1bHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KS4kbW91bnQoZWwpXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgQXBwIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xuICAgICAgICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4gICAgICAgIGltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcXG5cbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcXG5cbiAgICAgICAgcmVuZGVyKFxuICAgICAgICAgIDxBcHBcbiAgICAgICAgICAgIGluaXRpYWxQYWdlPXtKU09OLnBhcnNlKGVsLmRhdGFzZXQucGFnZSl9XG4gICAgICAgICAgICByZXNvbHZlQ29tcG9uZW50PXtuYW1lID0+IHJlcXVpcmUoXFxgLi9QYWdlcy9cXCR7bmFtZX1cXGApLmRlZmF1bHR9XG4gICAgICAgICAgLz4sXG4gICAgICAgICAgZWxcbiAgICAgICAgKVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEFwcCB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1zdmVsdGUnXFxuXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXFxuXG4gICAgICAgIG5ldyBBcHAoe1xuICAgICAgICAgIHRhcmdldDogZWwsXG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGluaXRpYWxQYWdlOiBKU09OLnBhcnNlKGVsLmRhdGFzZXQucGFnZSksXG4gICAgICAgICAgICByZXNvbHZlQ29tcG9uZW50OiBuYW1lID0+IHJlcXVpcmUoXFxgLi9QYWdlcy9cXCR7bmFtZX0uc3ZlbHRlXFxgKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8cD48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVzb2x2ZUNvbXBvbmVudGB9PC9pbmxpbmVDb2RlPntgIC0g0Y3RgtC+INC+0LHRgNCw0YLQvdGL0Lkg0LLRi9C30L7Qsiwg0LrQvtGC0L7RgNGL0Lkg0YHQvtC+0LHRidCw0LXRgiBJbmVydGlhLCDQutCw0Log0LfQsNCz0YDRg9C30LjRgtGMINC60L7QvNC/0L7QvdC10L3RgiDRgdGC0YDQsNC90LjRhtGLLiDQntC9INC/0L7Qu9GD0YfQsNC10YIg0LjQvNGPINGB0YLRgNCw0L3QuNGG0YsgKNGB0YLRgNC+0LrRgykg0Lgg0LTQvtC70LbQtdC9INCy0L7Qt9Cy0YDQsNGJ0LDRgtGMINGN0LrQt9C10LzQv9C70Y/RgCDQutC+0LzQv9C+0L3QtdC90YLQsCDRgdGC0YDQsNC90LjRhtGLLmB9PC9wPlxuICAgIDxoMj57YNCY0L3QtNC40LrQsNGC0L7RgCDQt9Cw0LPRgNGD0LfQutC4YH08L2gyPlxuICAgIDxwPntg0J/QvtGB0LrQvtC70YzQutGDINC30LDQv9GA0L7RgdGLINC40L3QtdGA0YbQuNC4INCy0YvQv9C+0LvQvdGP0Y7RgtGB0Y8g0YfQtdGA0LXQtyBYSFIsINC40L3QtNC40LrQsNGC0L7RgNCwINC30LDQs9GA0YPQt9C60Lgg0LHRgNCw0YPQt9C10YDQsCDQv9C+INGD0LzQvtC70YfQsNC90LjRjiDQvdC10YIuINCn0YLQvtCx0Ysg0YDQtdGI0LjRgtGMINGN0YLRgyDQv9GA0L7QsdC70LXQvNGDLCBJbmVydGlhINC/0YDQtdC00L7RgdGC0LDQstC70Y/QtdGCINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdGL0LkgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pbmVydGlhanMvcHJvZ3Jlc3NcIlxuICAgICAgfX0+e2DQv9Cw0LrQtdGCINC/0YDQvtCz0YDQtdGB0YHQsGB9PC9hPntgLCDQutC+0YLQvtGA0YvQuSDQuNC90YLQtdCz0YDQuNGA0YPQtdGC0YHRjyDRgSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9yaWNvc3RhY3J1ei5jb20vbnByb2dyZXNzL1wiXG4gICAgICB9fT57YE5Qcm9ncmVzcy5qc2B9PC9hPntgLCBhIG5pY2UgbGl0dGxlIHByb2dyZXNzIGJhciBsaWJyYXJ5LmB9PC9wPlxuICAgIDxwPntgU3RhcnQgYnkgaW5zdGFsbGluZyBpdDpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWJhc2hcIlxuICAgICAgfX0+e2BucG0gaW5zdGFsbCBAaW5lcnRpYWpzL3Byb2dyZXNzXG55YXJuIGFkZCBAaW5lcnRpYWpzL3Byb2dyZXNzXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YE9uY2UgaXQncyBiZWVuIGluc3RhbGxlZCwgaW5pdGlhbGl6ZSBpdCBpbiB5b3VyIGFwcC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYVByb2dyZXNzIH0gZnJvbSAnQGluZXJ0aWFqcy9wcm9ncmVzcydcblxuSW5lcnRpYVByb2dyZXNzLmluaXQoKVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BJdCBhbHNvIGNvbWVzIHdpdGggYSBudW1iZXIgb2YgY3VzdG9taXphdGlvbiBvcHRpb25zLCB3aGljaCB5b3UgY2FuIHBhc3MgdG8gdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGluaXQoKWB9PC9pbmxpbmVDb2RlPntgIG1ldGhvZC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYVByb2dyZXNzLmluaXQoe1xuICAvLyBUaGUgZGVsYXkgYWZ0ZXIgd2hpY2ggdGhlIHByb2dyZXNzIGJhciB3aWxsXG4gIC8vIGFwcGVhciBkdXJpbmcgbmF2aWdhdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICBkZWxheTogMjUwLFxuXG4gIC8vIFRoZSBjb2xvciBvZiB0aGUgcHJvZ3Jlc3MgYmFyLlxuICBjb2xvcjogJyMyOWQnLFxuXG4gIC8vIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgZGVmYXVsdCBOUHJvZ3Jlc3Mgc3R5bGVzLlxuICBpbmNsdWRlQ1NTOiB0cnVlLFxuXG4gIC8vIFdoZXRoZXIgdGhlIE5Qcm9ncmVzcyBzcGlubmVyIHdpbGwgYmUgc2hvd24uXG4gIHNob3dTcGlubmVyOiBmYWxzZSxcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDI+e2DQoNCw0LfQtNC10LvQtdC90LjQtSDQutC+0LTQsGB9PC9oMj5cbiAgICA8cD57YFRvIHVzZSBjb2RlIHNwbGl0dGluZyB3aXRoIEluZXJ0aWEgeW91J2xsIG5lZWQgdG8gZW5hYmxlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1keW5hbWljLWltcG9ydFwiXG4gICAgICB9fT57YGR5bmFtaWMgaW1wb3J0c2B9PC9hPntgLiBZb3UnbGwgbmVlZCBhIEJhYmVsIHBsdWdpbiB0byBtYWtlIHRoaXMgd29yay4gRmlyc3QsIGluc3RhbGwgdGhlIHBsdWdpbjpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWJhc2hcIlxuICAgICAgfX0+e2BucG0gaW5zdGFsbCBAYmFiZWwvcGx1Z2luLXN5bnRheC1keW5hbWljLWltcG9ydFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BOZXh0LCBjcmVhdGUgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2AuYmFiZWxyY2B9PC9pbmxpbmVDb2RlPntgIGZpbGUgaW4geW91ciBwcm9qZWN0IHdpdGggdGhlIGZvbGxvd2luZzpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzb25cIlxuICAgICAgfX0+e2B7XG4gIFwicGx1Z2luc1wiOiBbXCJAYmFiZWwvcGx1Z2luLXN5bnRheC1keW5hbWljLWltcG9ydFwiXVxufVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPE5vdGljZSBtZHhUeXBlPVwiTm90aWNlXCI+XG4gIElmIHlvdSdyZSB1c2luZyBMYXJhdmVsIE1peCB2NCwgdGhlIGR5bmFtaWMgaW1wb3J0cyBCYWJlbCBwbHVnaW4gaXMgYWxyZWFkeSBjb25maWd1cmVkLiBIb3dldmVyLCB0aGVyZSBpcyBhIGtub3duXG4gIGlzc3VlIHdpdGggTGFyYXZlbCBNaXggdjQgd2hlbiB1c2luZyBkeW5hbWljIGltcG9ydHMgd2hlcmUgeW91IGNhbm5vdCB1c2Ugc3R5bGVzIHdpdGhpbiBWdWUgZmlsZXMgZHVlIHRvIGEgV2VicGFja3snICd9XG4gIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSmVmZnJleVdheS9sYXJhdmVsLW1peC9pc3N1ZXMvMTg1NiNpc3N1ZWNvbW1lbnQtNDQ4MDgyOTA5XCI+bGltaXRhdGlvbjwvYT4uIEFzIGFcbiAgd29ya2Fyb3VuZCwgeW91IG5lZWQgdG8gZHJvcCBNaXggZW50aXJlbHkgb3IgZG93bmdyYWRlIHRvIExhcmF2ZWwgTWl4IHYzLlxuICAgIDwvTm90aWNlPlxuICAgIDxwPntgRmluYWxseSwgdXBkYXRlIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXNvbHZlQ29tcG9uZW50YH08L2lubGluZUNvZGU+e2AgY2FsbGJhY2sgaW4geW91ciBhcHAgaW5pdGlhbGl6YXRpb24gdG8gdXNlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGltcG9ydGB9PC9pbmxpbmVDb2RlPntgIGluc3RlYWQgb2YgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVxdWlyZWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICByZXNvbHZlQ29tcG9uZW50OiBuYW1lID0+IGltcG9ydChcXGAuL1BhZ2VzL1xcJHtuYW1lfVxcYCkudGhlbihtb2R1bGUgPT4gbW9kdWxlLmRlZmF1bHQpLFxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIHJlc29sdmVDb21wb25lbnQ9e25hbWUgPT4gaW1wb3J0KFxcYC4vUGFnZXMvXFwke25hbWV9XFxgKS50aGVuKG1vZHVsZSA9PiBtb2R1bGUuZGVmYXVsdCl9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgcmVzb2x2ZUNvbXBvbmVudDogbmFtZSA9PiBpbXBvcnQoXFxgLi9QYWdlcy9cXCR7bmFtZX0uc3ZlbHRlXFxgKSxcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2BDb25zaWRlciB1c2luZyBjYWNoZSBidXN0aW5nIHRvIGZvcmNlIGJyb3dzZXJzIHRvIGxvYWQgdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHlvdXIgYXNzZXRzLiBUbyBkbyB0aGlzLCBhZGQgdGhlIGZvbGxvd2luZyB0byB5b3VyIHdlYnBhY2sgY29uZmlnOmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BvdXRwdXQ6IHtcbiAgY2h1bmtGaWxlbmFtZTogJ2pzL1tuYW1lXS5qcz9pZD1bY2h1bmtoYXNoXScsXG59XG5gfTwvY29kZT48L3ByZT5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=