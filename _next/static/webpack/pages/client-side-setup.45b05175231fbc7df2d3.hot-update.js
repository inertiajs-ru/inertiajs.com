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
  }), "\u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"), ", \u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0443\u044E \u0441\u0440\u0435\u0434\u0443. Inertia currently provides support for React, Vue.js, and Svelte."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
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
  }, "Install the Inertia client-side adapters using NPM or Yarn."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, "Next, update your main JavaScript file to boot your Inertia app. All we're doing here is initializing the client-side framework with the base Inertia page component."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, "The ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 16
    }
  }, "resolveComponent"), " is a callback that tells Inertia how to load a page component. It receives a page name (string), and should return a page component instance."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
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
  }, "Since Inertia requests are made via XHR, there's no default browser loading indicator. To solve this, Inertia provides an optional ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/inertiajs/progress"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 143
    }
  }), "progress package"), " that integrates with ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://ricostacruz.com/nprogress/"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 60
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50LXNpZGUtc2V0dXAubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLElBQUksR0FBRztBQUNsQkMsT0FBSyxFQUFFLDRCQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUseUJBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSwyQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLHFCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsa0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSTtBQUZXLENBQWI7QUFpQlAsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCTCxNQUFJLEVBQUpBO0FBRGtCLENBQXBCO0FBR0EsSUFBTU0sU0FBUyxHQUFHQywwREFBbEI7QUFFZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCx5RkFBZUwsV0FBZixFQUFnQ0ssS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtB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LHVKQXBMSyxFQXFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBMkI7QUFDNUIsaUJBQWE7QUFEZSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdFQUFMLENBckxLLENBQVA7QUE0TEQ7S0FoTXVCTCxVO0FBa014QjtBQUNBQSxVQUFVLENBQUNNLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2xpZW50LXNpZGUtc2V0dXAuNDViMDUxNzUyMzFmYmM3ZGYyZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCBkZWRlbnQgZnJvbSAnZGVkZW50LWpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBOb3RpY2UgZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RpY2UnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0KPRgdGC0LDQvdC+0LLQutCwINC60LvQuNC10L3RgtGB0LrQvtC5INGH0LDRgdGC0LgnLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcj0YPRgdGC0LDQvdC+0LLQutCwLdC30LDQstC40YHQuNC80L7RgdGC0LXQuScsXG4gICAgbmFtZTogJ9Cj0YHRgtCw0L3QvtCy0LrQsCDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10LknXG4gIH0sIHtcbiAgICB1cmw6ICcj0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8t0L/RgNC40LvQvtC20LXQvdC40Y8nLFxuICAgIG5hbWU6ICfQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQv9GA0LjQu9C+0LbQtdC90LjRjydcbiAgfSwge1xuICAgIHVybDogJyPQuNC90LTQuNC60LDRgtC+0YAt0LfQsNCz0YDRg9C30LrQuCcsXG4gICAgbmFtZTogJ9CY0L3QtNC40LrQsNGC0L7RgCDQt9Cw0LPRgNGD0LfQutC4J1xuICB9LCB7XG4gICAgdXJsOiAnI9GA0LDQt9C00LXQu9C10L3QuNC1LdC60L7QtNCwJyxcbiAgICBuYW1lOiAn0KDQsNC30LTQtdC70LXQvdC40LUg0LrQvtC00LAnXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQo9GB0YLQsNC90L7QstC60LAg0LrQu9C40LXQvdGC0YHQutC+0Lkg0YfQsNGB0YLQuGB9PC9oMT5cbiAgICA8cD57YNCf0L7RgdC70LUg0YLQvtCz0L4sINC60LDQuiDQktGLINC90LDRgdGC0YDQvtC40LvQuCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3NlcnZlci1zaWRlLXNldHVwXCJcbiAgICAgIH19Pntg0LrQvtC90YTQuNCz0YPRgNCw0YbQuNGOINC/0LvQsNGC0YTQvtGA0LzRiyDQvdCwINGB0YLQvtGA0L7QvdC1INGB0LXRgNCy0LXRgNCwYH08L2E+e2AsINCS0LDQvCDQvdC10L7QsdGF0L7QtNC40LzQviDQvdCw0YHRgtGA0L7QuNGC0Ywg0LrQu9C40LXQvdGC0YHQutGD0Y4g0YHRgNC10LTRgy4gSW5lcnRpYSBjdXJyZW50bHkgcHJvdmlkZXMgc3VwcG9ydCBmb3IgUmVhY3QsIFZ1ZS5qcywgYW5kIFN2ZWx0ZS5gfTwvcD5cbiAgICA8aDI+e2DQo9GB0YLQsNC90L7QstC60LAg0LfQsNCy0LjRgdC40LzQvtGB0YLQtdC5YH08L2gyPlxuICAgIDxwPntgSW5zdGFsbCB0aGUgSW5lcnRpYSBjbGllbnQtc2lkZSBhZGFwdGVycyB1c2luZyBOUE0gb3IgWWFybi5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2Jhc2gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBucG0gaW5zdGFsbCBAaW5lcnRpYWpzL2luZXJ0aWEgQGluZXJ0aWFqcy9pbmVydGlhLXZ1ZVxuICAgICAgICB5YXJuIGFkZCBAaW5lcnRpYWpzL2luZXJ0aWEgQGluZXJ0aWFqcy9pbmVydGlhLXZ1ZVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2Jhc2gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBucG0gaW5zdGFsbCBAaW5lcnRpYWpzL2luZXJ0aWEgQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0XG4gICAgICAgIHlhcm4gYWRkIEBpbmVydGlhanMvaW5lcnRpYSBAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3RcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnYmFzaCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIG5wbSBpbnN0YWxsIEBpbmVydGlhanMvaW5lcnRpYSBAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlXG4gICAgICAgIHlhcm4gYWRkIEBpbmVydGlhanMvaW5lcnRpYSBAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC/0YDQuNC70L7QttC10L3QuNGPYH08L2gyPlxuICAgIDxwPntgTmV4dCwgdXBkYXRlIHlvdXIgbWFpbiBKYXZhU2NyaXB0IGZpbGUgdG8gYm9vdCB5b3VyIEluZXJ0aWEgYXBwLiBBbGwgd2UncmUgZG9pbmcgaGVyZSBpcyBpbml0aWFsaXppbmcgdGhlIGNsaWVudC1zaWRlIGZyYW1ld29yayB3aXRoIHRoZSBiYXNlIEluZXJ0aWEgcGFnZSBjb21wb25lbnQuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIC8qXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHwgVnVlIDNcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgKi9cXG5cbiAgICAgICAgaW1wb3J0IHsgY3JlYXRlQXBwLCBoIH0gZnJvbSAndnVlJ1xuICAgICAgICBpbXBvcnQgeyBBcHAsIHBsdWdpbiB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS12dWUzJ1xcblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxcblxuICAgICAgICBjcmVhdGVBcHAoe1xuICAgICAgICAgIHJlbmRlcjogKCkgPT4gaChBcHAsIHtcbiAgICAgICAgICAgIGluaXRpYWxQYWdlOiBKU09OLnBhcnNlKGVsLmRhdGFzZXQucGFnZSksXG4gICAgICAgICAgICByZXNvbHZlQ29tcG9uZW50OiBuYW1lID0+IHJlcXVpcmUoXFxgLi9QYWdlcy9cXCR7bmFtZX1cXGApLmRlZmF1bHQsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSkudXNlKHBsdWdpbikubW91bnQoZWwpXFxuXFxuXG4gICAgICAgIC8qXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHwgVnVlIDJcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgKi9cXG5cbiAgICAgICAgaW1wb3J0IHsgQXBwLCBwbHVnaW4gfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtdnVlJ1xuICAgICAgICBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcXG5cbiAgICAgICAgVnVlLnVzZShwbHVnaW4pXFxuXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXFxuXG4gICAgICAgIG5ldyBWdWUoe1xuICAgICAgICAgIHJlbmRlcjogaCA9PiBoKEFwcCwge1xuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgaW5pdGlhbFBhZ2U6IEpTT04ucGFyc2UoZWwuZGF0YXNldC5wYWdlKSxcbiAgICAgICAgICAgICAgcmVzb2x2ZUNvbXBvbmVudDogbmFtZSA9PiByZXF1aXJlKFxcYC4vUGFnZXMvXFwke25hbWV9XFxgKS5kZWZhdWx0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSkuJG1vdW50KGVsKVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEFwcCB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcbiAgICAgICAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuICAgICAgICBpbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXFxuXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXFxuXG4gICAgICAgIHJlbmRlcihcbiAgICAgICAgICA8QXBwXG4gICAgICAgICAgICBpbml0aWFsUGFnZT17SlNPTi5wYXJzZShlbC5kYXRhc2V0LnBhZ2UpfVxuICAgICAgICAgICAgcmVzb2x2ZUNvbXBvbmVudD17bmFtZSA9PiByZXF1aXJlKFxcYC4vUGFnZXMvXFwke25hbWV9XFxgKS5kZWZhdWx0fVxuICAgICAgICAgIC8+LFxuICAgICAgICAgIGVsXG4gICAgICAgIClcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBBcHAgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxcblxuICAgICAgICBuZXcgQXBwKHtcbiAgICAgICAgICB0YXJnZXQ6IGVsLFxuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBpbml0aWFsUGFnZTogSlNPTi5wYXJzZShlbC5kYXRhc2V0LnBhZ2UpLFxuICAgICAgICAgICAgcmVzb2x2ZUNvbXBvbmVudDogbmFtZSA9PiByZXF1aXJlKFxcYC4vUGFnZXMvXFwke25hbWV9LnN2ZWx0ZVxcYCksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVzb2x2ZUNvbXBvbmVudGB9PC9pbmxpbmVDb2RlPntgIGlzIGEgY2FsbGJhY2sgdGhhdCB0ZWxscyBJbmVydGlhIGhvdyB0byBsb2FkIGEgcGFnZSBjb21wb25lbnQuIEl0IHJlY2VpdmVzIGEgcGFnZSBuYW1lIChzdHJpbmcpLCBhbmQgc2hvdWxkIHJldHVybiBhIHBhZ2UgY29tcG9uZW50IGluc3RhbmNlLmB9PC9wPlxuICAgIDxoMj57YNCY0L3QtNC40LrQsNGC0L7RgCDQt9Cw0LPRgNGD0LfQutC4YH08L2gyPlxuICAgIDxwPntgU2luY2UgSW5lcnRpYSByZXF1ZXN0cyBhcmUgbWFkZSB2aWEgWEhSLCB0aGVyZSdzIG5vIGRlZmF1bHQgYnJvd3NlciBsb2FkaW5nIGluZGljYXRvci4gVG8gc29sdmUgdGhpcywgSW5lcnRpYSBwcm92aWRlcyBhbiBvcHRpb25hbCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2luZXJ0aWFqcy9wcm9ncmVzc1wiXG4gICAgICB9fT57YHByb2dyZXNzIHBhY2thZ2VgfTwvYT57YCB0aGF0IGludGVncmF0ZXMgd2l0aCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9yaWNvc3RhY3J1ei5jb20vbnByb2dyZXNzL1wiXG4gICAgICB9fT57YE5Qcm9ncmVzcy5qc2B9PC9hPntgLCBhIG5pY2UgbGl0dGxlIHByb2dyZXNzIGJhciBsaWJyYXJ5LmB9PC9wPlxuICAgIDxwPntgU3RhcnQgYnkgaW5zdGFsbGluZyBpdDpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWJhc2hcIlxuICAgICAgfX0+e2BucG0gaW5zdGFsbCBAaW5lcnRpYWpzL3Byb2dyZXNzXG55YXJuIGFkZCBAaW5lcnRpYWpzL3Byb2dyZXNzXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YE9uY2UgaXQncyBiZWVuIGluc3RhbGxlZCwgaW5pdGlhbGl6ZSBpdCBpbiB5b3VyIGFwcC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgSW5lcnRpYVByb2dyZXNzIH0gZnJvbSAnQGluZXJ0aWFqcy9wcm9ncmVzcydcblxuSW5lcnRpYVByb2dyZXNzLmluaXQoKVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BJdCBhbHNvIGNvbWVzIHdpdGggYSBudW1iZXIgb2YgY3VzdG9taXphdGlvbiBvcHRpb25zLCB3aGljaCB5b3UgY2FuIHBhc3MgdG8gdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGluaXQoKWB9PC9pbmxpbmVDb2RlPntgIG1ldGhvZC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYVByb2dyZXNzLmluaXQoe1xuICAvLyBUaGUgZGVsYXkgYWZ0ZXIgd2hpY2ggdGhlIHByb2dyZXNzIGJhciB3aWxsXG4gIC8vIGFwcGVhciBkdXJpbmcgbmF2aWdhdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICBkZWxheTogMjUwLFxuXG4gIC8vIFRoZSBjb2xvciBvZiB0aGUgcHJvZ3Jlc3MgYmFyLlxuICBjb2xvcjogJyMyOWQnLFxuXG4gIC8vIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgZGVmYXVsdCBOUHJvZ3Jlc3Mgc3R5bGVzLlxuICBpbmNsdWRlQ1NTOiB0cnVlLFxuXG4gIC8vIFdoZXRoZXIgdGhlIE5Qcm9ncmVzcyBzcGlubmVyIHdpbGwgYmUgc2hvd24uXG4gIHNob3dTcGlubmVyOiBmYWxzZSxcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDI+e2DQoNCw0LfQtNC10LvQtdC90LjQtSDQutC+0LTQsGB9PC9oMj5cbiAgICA8cD57YFRvIHVzZSBjb2RlIHNwbGl0dGluZyB3aXRoIEluZXJ0aWEgeW91J2xsIG5lZWQgdG8gZW5hYmxlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1keW5hbWljLWltcG9ydFwiXG4gICAgICB9fT57YGR5bmFtaWMgaW1wb3J0c2B9PC9hPntgLiBZb3UnbGwgbmVlZCBhIEJhYmVsIHBsdWdpbiB0byBtYWtlIHRoaXMgd29yay4gRmlyc3QsIGluc3RhbGwgdGhlIHBsdWdpbjpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWJhc2hcIlxuICAgICAgfX0+e2BucG0gaW5zdGFsbCBAYmFiZWwvcGx1Z2luLXN5bnRheC1keW5hbWljLWltcG9ydFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BOZXh0LCBjcmVhdGUgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2AuYmFiZWxyY2B9PC9pbmxpbmVDb2RlPntgIGZpbGUgaW4geW91ciBwcm9qZWN0IHdpdGggdGhlIGZvbGxvd2luZzpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzb25cIlxuICAgICAgfX0+e2B7XG4gIFwicGx1Z2luc1wiOiBbXCJAYmFiZWwvcGx1Z2luLXN5bnRheC1keW5hbWljLWltcG9ydFwiXVxufVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPE5vdGljZSBtZHhUeXBlPVwiTm90aWNlXCI+XG4gIElmIHlvdSdyZSB1c2luZyBMYXJhdmVsIE1peCB2NCwgdGhlIGR5bmFtaWMgaW1wb3J0cyBCYWJlbCBwbHVnaW4gaXMgYWxyZWFkeSBjb25maWd1cmVkLiBIb3dldmVyLCB0aGVyZSBpcyBhIGtub3duXG4gIGlzc3VlIHdpdGggTGFyYXZlbCBNaXggdjQgd2hlbiB1c2luZyBkeW5hbWljIGltcG9ydHMgd2hlcmUgeW91IGNhbm5vdCB1c2Ugc3R5bGVzIHdpdGhpbiBWdWUgZmlsZXMgZHVlIHRvIGEgV2VicGFja3snICd9XG4gIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSmVmZnJleVdheS9sYXJhdmVsLW1peC9pc3N1ZXMvMTg1NiNpc3N1ZWNvbW1lbnQtNDQ4MDgyOTA5XCI+bGltaXRhdGlvbjwvYT4uIEFzIGFcbiAgd29ya2Fyb3VuZCwgeW91IG5lZWQgdG8gZHJvcCBNaXggZW50aXJlbHkgb3IgZG93bmdyYWRlIHRvIExhcmF2ZWwgTWl4IHYzLlxuICAgIDwvTm90aWNlPlxuICAgIDxwPntgRmluYWxseSwgdXBkYXRlIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXNvbHZlQ29tcG9uZW50YH08L2lubGluZUNvZGU+e2AgY2FsbGJhY2sgaW4geW91ciBhcHAgaW5pdGlhbGl6YXRpb24gdG8gdXNlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGltcG9ydGB9PC9pbmxpbmVDb2RlPntgIGluc3RlYWQgb2YgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVxdWlyZWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICByZXNvbHZlQ29tcG9uZW50OiBuYW1lID0+IGltcG9ydChcXGAuL1BhZ2VzL1xcJHtuYW1lfVxcYCkudGhlbihtb2R1bGUgPT4gbW9kdWxlLmRlZmF1bHQpLFxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIHJlc29sdmVDb21wb25lbnQ9e25hbWUgPT4gaW1wb3J0KFxcYC4vUGFnZXMvXFwke25hbWV9XFxgKS50aGVuKG1vZHVsZSA9PiBtb2R1bGUuZGVmYXVsdCl9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgcmVzb2x2ZUNvbXBvbmVudDogbmFtZSA9PiBpbXBvcnQoXFxgLi9QYWdlcy9cXCR7bmFtZX0uc3ZlbHRlXFxgKSxcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2BDb25zaWRlciB1c2luZyBjYWNoZSBidXN0aW5nIHRvIGZvcmNlIGJyb3dzZXJzIHRvIGxvYWQgdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHlvdXIgYXNzZXRzLiBUbyBkbyB0aGlzLCBhZGQgdGhlIGZvbGxvd2luZyB0byB5b3VyIHdlYnBhY2sgY29uZmlnOmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BvdXRwdXQ6IHtcbiAgY2h1bmtGaWxlbmFtZTogJ2pzL1tuYW1lXS5qcz9pZD1bY2h1bmtoYXNoXScsXG59XG5gfTwvY29kZT48L3ByZT5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=