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
  }, "\u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u044B Inertia \u0432\u044B\u043F\u043E\u043B\u043D\u044F\u044E\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 XHR, \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442. \u0427\u0442\u043E\u0431\u044B \u0440\u0435\u0448\u0438\u0442\u044C \u044D\u0442\u0443 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443, Inertia \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/inertiajs/progress"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 179
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
  }), "NProgress.js"), ", \u0445\u043E\u0440\u043E\u0448\u0435\u0439 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u043E\u0439 \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 5
    }
  }, "\u041D\u0430\u0447\u043D\u0438\u0442\u0435 \u0441 \u0435\u0433\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }, "\u041F\u043E\u0441\u043B\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u0435\u0433\u043E \u0432 \u0441\u0432\u043E\u0435\u043C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }, "\u041E\u043D \u0442\u0430\u043A\u0436\u0435 \u0438\u043C\u0435\u0435\u0442 \u0440\u044F\u0434 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u044C \u043C\u0435\u0442\u043E\u0434\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 87
    }
  }, "init()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }), "InertiaProgress.init({\n  // \u0417\u0430\u0434\u0435\u0440\u0436\u043A\u0430 \u0432 \u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434\u0430\u0445, \u043F\u043E\u0441\u043B\u0435 \u043A\u043E\u0442\u043E\u0440\u043E\u0439\n  // \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F.\n  delay: 250,\n\n  // The color of the progress bar.\n  color: '#29d',\n\n  // Whether to include the default NProgress styles.\n  includeCSS: true,\n\n  // Whether the NProgress spinner will be shown.\n  showSpinner: false,\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50LXNpZGUtc2V0dXAubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLElBQUksR0FBRztBQUNsQkMsT0FBSyxFQUFFLDRCQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUseUJBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSwyQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLHFCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsa0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSTtBQUZXLENBQWI7QUFpQlAsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCTCxNQUFJLEVBQUpBO0FBRGtCLENBQXBCO0FBR0EsSUFBTU0sU0FBUyxHQUFHQywwREFBbEI7QUFFZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCx5RkFBZUwsV0FBZixFQUFnQ0ssS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtB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QUFBQSx1SkFwTEssRUFxTEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTJCO0FBQzVCLGlCQUFhO0FBRGUsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3RUFBTCxDQXJMSyxDQUFQO0FBNExEO0tBaE11QkwsVTtBQWtNeEI7QUFDQUEsVUFBVSxDQUFDTSxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NsaWVudC1zaWRlLXNldHVwLjE5ODBiYmVjMzVhZDNmMmJlYjc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTm90aWNlIGZyb20gJy4uL2NvbXBvbmVudHMvTm90aWNlJ1xuaW1wb3J0IFRhYmJlZENvZGVFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJlZENvZGVFeGFtcGxlcydcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9Cj0YHRgtCw0L3QvtCy0LrQsCDQutC70LjQtdC90YLRgdC60L7QuSDRh9Cw0YHRgtC4JyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI9GD0YHRgtCw0L3QvtCy0LrQsC3Qt9Cw0LLQuNGB0LjQvNC+0YHRgtC10LknLFxuICAgIG5hbWU6ICfQo9GB0YLQsNC90L7QstC60LAg0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5J1xuICB9LCB7XG4gICAgdXJsOiAnI9C40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPLdC/0YDQuNC70L7QttC10L3QuNGPJyxcbiAgICBuYW1lOiAn0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0L/RgNC40LvQvtC20LXQvdC40Y8nXG4gIH0sIHtcbiAgICB1cmw6ICcj0LjQvdC00LjQutCw0YLQvtGALdC30LDQs9GA0YPQt9C60LgnLFxuICAgIG5hbWU6ICfQmNC90LTQuNC60LDRgtC+0YAg0LfQsNCz0YDRg9C30LrQuCdcbiAgfSwge1xuICAgIHVybDogJyPRgNCw0LfQtNC10LvQtdC90LjQtS3QutC+0LTQsCcsXG4gICAgbmFtZTogJ9Cg0LDQt9C00LXQu9C10L3QuNC1INC60L7QtNCwJ1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0KPRgdGC0LDQvdC+0LLQutCwINC60LvQuNC10L3RgtGB0LrQvtC5INGH0LDRgdGC0LhgfTwvaDE+XG4gICAgPHA+e2DQn9C+0YHQu9C1INGC0L7Qs9C+LCDQutCw0Log0JLRiyDQvdCw0YHRgtGA0L7QuNC70LggYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9zZXJ2ZXItc2lkZS1zZXR1cFwiXG4gICAgICB9fT57YNC60L7QvdGE0LjQs9GD0YDQsNGG0LjRjiDQv9C70LDRgtGE0L7RgNC80Ysg0L3QsCDRgdGC0L7RgNC+0L3QtSDRgdC10YDQstC10YDQsGB9PC9hPntgLCDQktCw0Lwg0L3QtdC+0LHRhdC+0LTQuNC80L4g0L3QsNGB0YLRgNC+0LjRgtGMINC60LvQuNC10L3RgtGB0LrRg9GOINGB0YDQtdC00YMuIEluZXJ0aWEg0LIg0L3QsNGB0YLQvtGP0YnQtdC1INCy0YDQtdC80Y8g0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGCIFJlYWN0LCBWdWUuanMg0LggU3ZlbHRlLmB9PC9wPlxuICAgIDxoMj57YNCj0YHRgtCw0L3QvtCy0LrQsCDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10LlgfTwvaDI+XG4gICAgPHA+e2DQo9GB0YLQsNC90L7QstC40YLQtSDQutC70LjQtdC90YLRgdC60LjQtSDQsNC00LDQv9GC0LXRgNGLIEluZXJ0aWEg0YEg0L/QvtC80L7RidGM0Y4gTlBNINC40LvQuCBZYXJuLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnYmFzaCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIG5wbSBpbnN0YWxsIEBpbmVydGlhanMvaW5lcnRpYSBAaW5lcnRpYWpzL2luZXJ0aWEtdnVlXG4gICAgICAgIHlhcm4gYWRkIEBpbmVydGlhanMvaW5lcnRpYSBAaW5lcnRpYWpzL2luZXJ0aWEtdnVlXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnYmFzaCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIG5wbSBpbnN0YWxsIEBpbmVydGlhanMvaW5lcnRpYSBAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3RcbiAgICAgICAgeWFybiBhZGQgQGluZXJ0aWFqcy9pbmVydGlhIEBpbmVydGlhanMvaW5lcnRpYS1yZWFjdFxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdiYXNoJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgbnBtIGluc3RhbGwgQGluZXJ0aWFqcy9pbmVydGlhIEBpbmVydGlhanMvaW5lcnRpYS1zdmVsdGVcbiAgICAgICAgeWFybiBhZGQgQGluZXJ0aWFqcy9pbmVydGlhIEBpbmVydGlhanMvaW5lcnRpYS1zdmVsdGVcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPGgyPntg0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0L/RgNC40LvQvtC20LXQvdC40Y9gfTwvaDI+XG4gICAgPHA+e2DQl9Cw0YLQtdC8INC+0LHQvdC+0LLQuNGC0LUg0YHQstC+0Lkg0L7RgdC90L7QstC90L7QuSDRhNCw0LnQuyBKYXZhU2NyaXB0LCDRh9GC0L7QsdGLINC30LDQs9GA0YPQt9C40YLRjCDQv9GA0LjQu9C+0LbQtdC90LjQtSBJbmVydGlhLiDQktGB0LUsINGH0YLQviDQvNGLINC30LTQtdGB0Ywg0LTQtdC70LDQtdC8LCDRjdGC0L4g0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDQutC70LjQtdC90YLRgdC60YPRjiDRgdGC0YDRg9C60YLRg9GA0YMg0YEg0L/QvtC80L7RidGM0Y4g0LHQsNC30L7QstC+0LPQviDQutC+0LzQv9C+0L3QtdC90YLQsCDRgdGC0YDQsNC90LjRhtGLIEluZXJ0aWEuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIC8qXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHwgVnVlIDNcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgKi9cXG5cbiAgICAgICAgaW1wb3J0IHsgY3JlYXRlQXBwLCBoIH0gZnJvbSAndnVlJ1xuICAgICAgICBpbXBvcnQgeyBBcHAsIHBsdWdpbiB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS12dWUzJ1xcblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxcblxuICAgICAgICBjcmVhdGVBcHAoe1xuICAgICAgICAgIHJlbmRlcjogKCkgPT4gaChBcHAsIHtcbiAgICAgICAgICAgIGluaXRpYWxQYWdlOiBKU09OLnBhcnNlKGVsLmRhdGFzZXQucGFnZSksXG4gICAgICAgICAgICByZXNvbHZlQ29tcG9uZW50OiBuYW1lID0+IHJlcXVpcmUoXFxgLi9QYWdlcy9cXCR7bmFtZX1cXGApLmRlZmF1bHQsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSkudXNlKHBsdWdpbikubW91bnQoZWwpXFxuXFxuXG4gICAgICAgIC8qXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHwgVnVlIDJcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgKi9cXG5cbiAgICAgICAgaW1wb3J0IHsgQXBwLCBwbHVnaW4gfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtdnVlJ1xuICAgICAgICBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcXG5cbiAgICAgICAgVnVlLnVzZShwbHVnaW4pXFxuXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXFxuXG4gICAgICAgIG5ldyBWdWUoe1xuICAgICAgICAgIHJlbmRlcjogaCA9PiBoKEFwcCwge1xuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgaW5pdGlhbFBhZ2U6IEpTT04ucGFyc2UoZWwuZGF0YXNldC5wYWdlKSxcbiAgICAgICAgICAgICAgcmVzb2x2ZUNvbXBvbmVudDogbmFtZSA9PiByZXF1aXJlKFxcYC4vUGFnZXMvXFwke25hbWV9XFxgKS5kZWZhdWx0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSkuJG1vdW50KGVsKVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEFwcCB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcbiAgICAgICAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuICAgICAgICBpbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXFxuXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXFxuXG4gICAgICAgIHJlbmRlcihcbiAgICAgICAgICA8QXBwXG4gICAgICAgICAgICBpbml0aWFsUGFnZT17SlNPTi5wYXJzZShlbC5kYXRhc2V0LnBhZ2UpfVxuICAgICAgICAgICAgcmVzb2x2ZUNvbXBvbmVudD17bmFtZSA9PiByZXF1aXJlKFxcYC4vUGFnZXMvXFwke25hbWV9XFxgKS5kZWZhdWx0fVxuICAgICAgICAgIC8+LFxuICAgICAgICAgIGVsXG4gICAgICAgIClcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBBcHAgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxcblxuICAgICAgICBuZXcgQXBwKHtcbiAgICAgICAgICB0YXJnZXQ6IGVsLFxuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBpbml0aWFsUGFnZTogSlNPTi5wYXJzZShlbC5kYXRhc2V0LnBhZ2UpLFxuICAgICAgICAgICAgcmVzb2x2ZUNvbXBvbmVudDogbmFtZSA9PiByZXF1aXJlKFxcYC4vUGFnZXMvXFwke25hbWV9LnN2ZWx0ZVxcYCksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlc29sdmVDb21wb25lbnRgfTwvaW5saW5lQ29kZT57YCAtINGN0YLQviDQvtCx0YDQsNGC0L3Ri9C5INCy0YvQt9C+0LIsINC60L7RgtC+0YDRi9C5INGB0L7QvtCx0YnQsNC10YIgSW5lcnRpYSwg0LrQsNC6INC30LDQs9GA0YPQt9C40YLRjCDQutC+0LzQv9C+0L3QtdC90YIg0YHRgtGA0LDQvdC40YbRiy4g0J7QvSDQv9C+0LvRg9GH0LDQtdGCINC40LzRjyDRgdGC0YDQsNC90LjRhtGLICjRgdGC0YDQvtC60YMpINC4INC00L7Qu9C20LXQvSDQstC+0LfQstGA0LDRidCw0YLRjCDRjdC60LfQtdC80L/Qu9GP0YAg0LrQvtC80L/QvtC90LXQvdGC0LAg0YHRgtGA0LDQvdC40YbRiy5gfTwvcD5cbiAgICA8aDI+e2DQmNC90LTQuNC60LDRgtC+0YAg0LfQsNCz0YDRg9C30LrQuGB9PC9oMj5cbiAgICA8cD57YNCf0L7RgdC60L7Qu9GM0LrRgyDQt9Cw0L/RgNC+0YHRiyBJbmVydGlhINCy0YvQv9C+0LvQvdGP0Y7RgtGB0Y8g0YfQtdGA0LXQtyBYSFIsINC40L3QtNC40LrQsNGC0L7RgCDQt9Cw0LPRgNGD0LfQutC4INCx0YDQsNGD0LfQtdGA0LAg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0L7RgtGB0YPRgtGB0YLQstGD0LXRgi4g0KfRgtC+0LHRiyDRgNC10YjQuNGC0Ywg0Y3RgtGDINC/0YDQvtCx0LvQtdC80YMsIEluZXJ0aWEg0L/RgNC10LTQvtGB0YLQsNCy0LvRj9C10YIg0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90YvQuSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2luZXJ0aWFqcy9wcm9ncmVzc1wiXG4gICAgICB9fT57YNC/0LDQutC10YIg0L/RgNC+0LPRgNC10YHRgdCwYH08L2E+e2AsINC60L7RgtC+0YDRi9C5INC40L3RgtC10LPRgNC40YDRg9C10YLRgdGPINGBIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3JpY29zdGFjcnV6LmNvbS9ucHJvZ3Jlc3MvXCJcbiAgICAgIH19PntgTlByb2dyZXNzLmpzYH08L2E+e2AsINGF0L7RgNC+0YjQtdC5INC90LXQsdC+0LvRjNGI0L7QuSDQsdC40LHQu9C40L7RgtC10LrQvtC5INC40L3QtNC40LrQsNGC0L7RgNCwINCy0YvQv9C+0LvQvdC10L3QuNGPLmB9PC9wPlxuICAgIDxwPntg0J3QsNGH0L3QuNGC0LUg0YEg0LXQs9C+INGD0YHRgtCw0L3QvtCy0LrQuDpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWJhc2hcIlxuICAgICAgfX0+e2BucG0gaW5zdGFsbCBAaW5lcnRpYWpzL3Byb2dyZXNzXG55YXJuIGFkZCBAaW5lcnRpYWpzL3Byb2dyZXNzXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YNCf0L7RgdC70LUg0YPRgdGC0LDQvdC+0LLQutC4INC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C50YLQtSDQtdCz0L4g0LIg0YHQstC+0LXQvCDQv9GA0LjQu9C+0LbQtdC90LjQuC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYVByb2dyZXNzIH0gZnJvbSAnQGluZXJ0aWFqcy9wcm9ncmVzcydcblxuSW5lcnRpYVByb2dyZXNzLmluaXQoKVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2DQntC9INGC0LDQutC20LUg0LjQvNC10LXRgiDRgNGP0LQg0L/QsNGA0LDQvNC10YLRgNC+0LIg0L3QsNGB0YLRgNC+0LnQutC4LCDQutC+0YLQvtGA0YvQtSDQktGLINC80L7QttC10YLQtSDQv9C10YDQtdC00LDRgtGMINC80LXRgtC+0LTRgyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bpbml0KClgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYVByb2dyZXNzLmluaXQoe1xuICAvLyDQl9Cw0LTQtdGA0LbQutCwINCyINC80LjQu9C70LjRgdC10LrRg9C90LTQsNGFLCDQv9C+0YHQu9C1INC60L7RgtC+0YDQvtC5XG4gIC8vINCy0L4g0LLRgNC10LzRjyDQvdCw0LLQuNCz0LDRhtC40Lgg0L/QvtGP0LLQuNGC0YHRjyDQuNC90LTQuNC60LDRgtC+0YAg0LLRi9C/0L7Qu9C90LXQvdC40Y8uXG4gIGRlbGF5OiAyNTAsXG5cbiAgLy8gVGhlIGNvbG9yIG9mIHRoZSBwcm9ncmVzcyBiYXIuXG4gIGNvbG9yOiAnIzI5ZCcsXG5cbiAgLy8gV2hldGhlciB0byBpbmNsdWRlIHRoZSBkZWZhdWx0IE5Qcm9ncmVzcyBzdHlsZXMuXG4gIGluY2x1ZGVDU1M6IHRydWUsXG5cbiAgLy8gV2hldGhlciB0aGUgTlByb2dyZXNzIHNwaW5uZXIgd2lsbCBiZSBzaG93bi5cbiAgc2hvd1NwaW5uZXI6IGZhbHNlLFxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMj57YNCg0LDQt9C00LXQu9C10L3QuNC1INC60L7QtNCwYH08L2gyPlxuICAgIDxwPntgVG8gdXNlIGNvZGUgc3BsaXR0aW5nIHdpdGggSW5lcnRpYSB5b3UnbGwgbmVlZCB0byBlbmFibGUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWR5bmFtaWMtaW1wb3J0XCJcbiAgICAgIH19PntgZHluYW1pYyBpbXBvcnRzYH08L2E+e2AuIFlvdSdsbCBuZWVkIGEgQmFiZWwgcGx1Z2luIHRvIG1ha2UgdGhpcyB3b3JrLiBGaXJzdCwgaW5zdGFsbCB0aGUgcGx1Z2luOmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtYmFzaFwiXG4gICAgICB9fT57YG5wbSBpbnN0YWxsIEBiYWJlbC9wbHVnaW4tc3ludGF4LWR5bmFtaWMtaW1wb3J0XG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YE5leHQsIGNyZWF0ZSBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YC5iYWJlbHJjYH08L2lubGluZUNvZGU+e2AgZmlsZSBpbiB5b3VyIHByb2plY3Qgd2l0aCB0aGUgZm9sbG93aW5nOmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNvblwiXG4gICAgICB9fT57YHtcbiAgXCJwbHVnaW5zXCI6IFtcIkBiYWJlbC9wbHVnaW4tc3ludGF4LWR5bmFtaWMtaW1wb3J0XCJdXG59XG5gfTwvY29kZT48L3ByZT5cbiAgICA8Tm90aWNlIG1keFR5cGU9XCJOb3RpY2VcIj5cbiAgSWYgeW91J3JlIHVzaW5nIExhcmF2ZWwgTWl4IHY0LCB0aGUgZHluYW1pYyBpbXBvcnRzIEJhYmVsIHBsdWdpbiBpcyBhbHJlYWR5IGNvbmZpZ3VyZWQuIEhvd2V2ZXIsIHRoZXJlIGlzIGEga25vd25cbiAgaXNzdWUgd2l0aCBMYXJhdmVsIE1peCB2NCB3aGVuIHVzaW5nIGR5bmFtaWMgaW1wb3J0cyB3aGVyZSB5b3UgY2Fubm90IHVzZSBzdHlsZXMgd2l0aGluIFZ1ZSBmaWxlcyBkdWUgdG8gYSBXZWJwYWNreycgJ31cbiAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9KZWZmcmV5V2F5L2xhcmF2ZWwtbWl4L2lzc3Vlcy8xODU2I2lzc3VlY29tbWVudC00NDgwODI5MDlcIj5saW1pdGF0aW9uPC9hPi4gQXMgYVxuICB3b3JrYXJvdW5kLCB5b3UgbmVlZCB0byBkcm9wIE1peCBlbnRpcmVseSBvciBkb3duZ3JhZGUgdG8gTGFyYXZlbCBNaXggdjMuXG4gICAgPC9Ob3RpY2U+XG4gICAgPHA+e2BGaW5hbGx5LCB1cGRhdGUgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlc29sdmVDb21wb25lbnRgfTwvaW5saW5lQ29kZT57YCBjYWxsYmFjayBpbiB5b3VyIGFwcCBpbml0aWFsaXphdGlvbiB0byB1c2UgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaW1wb3J0YH08L2lubGluZUNvZGU+e2AgaW5zdGVhZCBvZiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXF1aXJlYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIHJlc29sdmVDb21wb25lbnQ6IG5hbWUgPT4gaW1wb3J0KFxcYC4vUGFnZXMvXFwke25hbWV9XFxgKS50aGVuKG1vZHVsZSA9PiBtb2R1bGUuZGVmYXVsdCksXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgcmVzb2x2ZUNvbXBvbmVudD17bmFtZSA9PiBpbXBvcnQoXFxgLi9QYWdlcy9cXCR7bmFtZX1cXGApLnRoZW4obW9kdWxlID0+IG1vZHVsZS5kZWZhdWx0KX1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICByZXNvbHZlQ29tcG9uZW50OiBuYW1lID0+IGltcG9ydChcXGAuL1BhZ2VzL1xcJHtuYW1lfS5zdmVsdGVcXGApLFxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8cD57YENvbnNpZGVyIHVzaW5nIGNhY2hlIGJ1c3RpbmcgdG8gZm9yY2UgYnJvd3NlcnMgdG8gbG9hZCB0aGUgbGF0ZXN0IHZlcnNpb24gb2YgeW91ciBhc3NldHMuIFRvIGRvIHRoaXMsIGFkZCB0aGUgZm9sbG93aW5nIHRvIHlvdXIgd2VicGFjayBjb25maWc6YH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YG91dHB1dDoge1xuICBjaHVua0ZpbGVuYW1lOiAnanMvW25hbWVdLmpzP2lkPVtjaHVua2hhc2hdJyxcbn1cbmB9PC9jb2RlPjwvcHJlPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==