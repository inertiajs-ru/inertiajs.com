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
  }, "Once you have your ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "/server-side-setup"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 31
    }
  }), "\u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044E \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"), ", you then need to setup your client-side framework. Inertia currently provides support for React, Vue.js, and Svelte."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2xpZW50LXNpZGUtc2V0dXAubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLElBQUksR0FBRztBQUNsQkMsT0FBSyxFQUFFLDRCQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUseUJBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSwyQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLHFCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsa0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSTtBQUZXLENBQWI7QUFpQlAsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCTCxNQUFJLEVBQUpBO0FBRGtCLENBQXBCO0FBR0EsSUFBTU0sU0FBUyxHQUFHQywwREFBbEI7QUFFZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxNQURFQyxLQUNGOztBQUNELFNBQU8sMERBQUMsU0FBRCx5RkFBZUwsV0FBZixFQUFnQ0ssS0FBaEM7QUFBdUMsY0FBVSxFQUFFRCxVQUFuRDtB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LHVKQXBMSyxFQXFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBMkI7QUFDNUIsaUJBQWE7QUFEZSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdFQUFMLENBckxLLENBQVA7QUE0TEQ7S0FoTXVCTCxVO0FBa014QjtBQUNBQSxVQUFVLENBQUNNLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2xpZW50LXNpZGUtc2V0dXAuOGE3NDk5MGM4NWU2Yjc0ZTdlODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCBkZWRlbnQgZnJvbSAnZGVkZW50LWpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBOb3RpY2UgZnJvbSAnLi4vY29tcG9uZW50cy9Ob3RpY2UnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0KPRgdGC0LDQvdC+0LLQutCwINC60LvQuNC10L3RgtGB0LrQvtC5INGH0LDRgdGC0LgnLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcj0YPRgdGC0LDQvdC+0LLQutCwLdC30LDQstC40YHQuNC80L7RgdGC0LXQuScsXG4gICAgbmFtZTogJ9Cj0YHRgtCw0L3QvtCy0LrQsCDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC10LknXG4gIH0sIHtcbiAgICB1cmw6ICcj0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8t0L/RgNC40LvQvtC20LXQvdC40Y8nLFxuICAgIG5hbWU6ICfQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQv9GA0LjQu9C+0LbQtdC90LjRjydcbiAgfSwge1xuICAgIHVybDogJyPQuNC90LTQuNC60LDRgtC+0YAt0LfQsNCz0YDRg9C30LrQuCcsXG4gICAgbmFtZTogJ9CY0L3QtNC40LrQsNGC0L7RgCDQt9Cw0LPRgNGD0LfQutC4J1xuICB9LCB7XG4gICAgdXJsOiAnI9GA0LDQt9C00LXQu9C10L3QuNC1LdC60L7QtNCwJyxcbiAgICBuYW1lOiAn0KDQsNC30LTQtdC70LXQvdC40LUg0LrQvtC00LAnXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQo9GB0YLQsNC90L7QstC60LAg0LrQu9C40LXQvdGC0YHQutC+0Lkg0YfQsNGB0YLQuGB9PC9oMT5cbiAgICA8cD57YE9uY2UgeW91IGhhdmUgeW91ciBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3NlcnZlci1zaWRlLXNldHVwXCJcbiAgICAgIH19Pntg0LrQvtC90YTQuNCz0YPRgNCw0YbQuNGOINC/0LvQsNGC0YTQvtGA0LzRiyDQvdCwINGB0YLQvtGA0L7QvdC1INGB0LXRgNCy0LXRgNCwYH08L2E+e2AsIHlvdSB0aGVuIG5lZWQgdG8gc2V0dXAgeW91ciBjbGllbnQtc2lkZSBmcmFtZXdvcmsuIEluZXJ0aWEgY3VycmVudGx5IHByb3ZpZGVzIHN1cHBvcnQgZm9yIFJlYWN0LCBWdWUuanMsIGFuZCBTdmVsdGUuYH08L3A+XG4gICAgPGgyPntg0KPRgdGC0LDQvdC+0LLQutCwINC30LDQstC40YHQuNC80L7RgdGC0LXQuWB9PC9oMj5cbiAgICA8cD57YEluc3RhbGwgdGhlIEluZXJ0aWEgY2xpZW50LXNpZGUgYWRhcHRlcnMgdXNpbmcgTlBNIG9yIFlhcm4uYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdiYXNoJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgbnBtIGluc3RhbGwgQGluZXJ0aWFqcy9pbmVydGlhIEBpbmVydGlhanMvaW5lcnRpYS12dWVcbiAgICAgICAgeWFybiBhZGQgQGluZXJ0aWFqcy9pbmVydGlhIEBpbmVydGlhanMvaW5lcnRpYS12dWVcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdiYXNoJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgbnBtIGluc3RhbGwgQGluZXJ0aWFqcy9pbmVydGlhIEBpbmVydGlhanMvaW5lcnRpYS1yZWFjdFxuICAgICAgICB5YXJuIGFkZCBAaW5lcnRpYWpzL2luZXJ0aWEgQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2Jhc2gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBucG0gaW5zdGFsbCBAaW5lcnRpYWpzL2luZXJ0aWEgQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZVxuICAgICAgICB5YXJuIGFkZCBAaW5lcnRpYWpzL2luZXJ0aWEgQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZVxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8aDI+e2DQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQv9GA0LjQu9C+0LbQtdC90LjRj2B9PC9oMj5cbiAgICA8cD57YE5leHQsIHVwZGF0ZSB5b3VyIG1haW4gSmF2YVNjcmlwdCBmaWxlIHRvIGJvb3QgeW91ciBJbmVydGlhIGFwcC4gQWxsIHdlJ3JlIGRvaW5nIGhlcmUgaXMgaW5pdGlhbGl6aW5nIHRoZSBjbGllbnQtc2lkZSBmcmFtZXdvcmsgd2l0aCB0aGUgYmFzZSBJbmVydGlhIHBhZ2UgY29tcG9uZW50LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICAvKlxuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB8IFZ1ZSAzXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICovXFxuXG4gICAgICAgIGltcG9ydCB7IGNyZWF0ZUFwcCwgaCB9IGZyb20gJ3Z1ZSdcbiAgICAgICAgaW1wb3J0IHsgQXBwLCBwbHVnaW4gfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtdnVlMydcXG5cbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcXG5cbiAgICAgICAgY3JlYXRlQXBwKHtcbiAgICAgICAgICByZW5kZXI6ICgpID0+IGgoQXBwLCB7XG4gICAgICAgICAgICBpbml0aWFsUGFnZTogSlNPTi5wYXJzZShlbC5kYXRhc2V0LnBhZ2UpLFxuICAgICAgICAgICAgcmVzb2x2ZUNvbXBvbmVudDogbmFtZSA9PiByZXF1aXJlKFxcYC4vUGFnZXMvXFwke25hbWV9XFxgKS5kZWZhdWx0LFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLnVzZShwbHVnaW4pLm1vdW50KGVsKVxcblxcblxuICAgICAgICAvKlxuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB8IFZ1ZSAyXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICovXFxuXG4gICAgICAgIGltcG9ydCB7IEFwcCwgcGx1Z2luIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXZ1ZSdcbiAgICAgICAgaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXFxuXG4gICAgICAgIFZ1ZS51c2UocGx1Z2luKVxcblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxcblxuICAgICAgICBuZXcgVnVlKHtcbiAgICAgICAgICByZW5kZXI6IGggPT4gaChBcHAsIHtcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIGluaXRpYWxQYWdlOiBKU09OLnBhcnNlKGVsLmRhdGFzZXQucGFnZSksXG4gICAgICAgICAgICAgIHJlc29sdmVDb21wb25lbnQ6IG5hbWUgPT4gcmVxdWlyZShcXGAuL1BhZ2VzL1xcJHtuYW1lfVxcYCkuZGVmYXVsdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLiRtb3VudChlbClcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBBcHAgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXG4gICAgICAgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbiAgICAgICAgaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xcblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxcblxuICAgICAgICByZW5kZXIoXG4gICAgICAgICAgPEFwcFxuICAgICAgICAgICAgaW5pdGlhbFBhZ2U9e0pTT04ucGFyc2UoZWwuZGF0YXNldC5wYWdlKX1cbiAgICAgICAgICAgIHJlc29sdmVDb21wb25lbnQ9e25hbWUgPT4gcmVxdWlyZShcXGAuL1BhZ2VzL1xcJHtuYW1lfVxcYCkuZGVmYXVsdH1cbiAgICAgICAgICAvPixcbiAgICAgICAgICBlbFxuICAgICAgICApXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgQXBwIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcXG5cbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcXG5cbiAgICAgICAgbmV3IEFwcCh7XG4gICAgICAgICAgdGFyZ2V0OiBlbCxcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgaW5pdGlhbFBhZ2U6IEpTT04ucGFyc2UoZWwuZGF0YXNldC5wYWdlKSxcbiAgICAgICAgICAgIHJlc29sdmVDb21wb25lbnQ6IG5hbWUgPT4gcmVxdWlyZShcXGAuL1BhZ2VzL1xcJHtuYW1lfS5zdmVsdGVcXGApLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntgVGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlc29sdmVDb21wb25lbnRgfTwvaW5saW5lQ29kZT57YCBpcyBhIGNhbGxiYWNrIHRoYXQgdGVsbHMgSW5lcnRpYSBob3cgdG8gbG9hZCBhIHBhZ2UgY29tcG9uZW50LiBJdCByZWNlaXZlcyBhIHBhZ2UgbmFtZSAoc3RyaW5nKSwgYW5kIHNob3VsZCByZXR1cm4gYSBwYWdlIGNvbXBvbmVudCBpbnN0YW5jZS5gfTwvcD5cbiAgICA8aDI+e2DQmNC90LTQuNC60LDRgtC+0YAg0LfQsNCz0YDRg9C30LrQuGB9PC9oMj5cbiAgICA8cD57YFNpbmNlIEluZXJ0aWEgcmVxdWVzdHMgYXJlIG1hZGUgdmlhIFhIUiwgdGhlcmUncyBubyBkZWZhdWx0IGJyb3dzZXIgbG9hZGluZyBpbmRpY2F0b3IuIFRvIHNvbHZlIHRoaXMsIEluZXJ0aWEgcHJvdmlkZXMgYW4gb3B0aW9uYWwgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9pbmVydGlhanMvcHJvZ3Jlc3NcIlxuICAgICAgfX0+e2Bwcm9ncmVzcyBwYWNrYWdlYH08L2E+e2AgdGhhdCBpbnRlZ3JhdGVzIHdpdGggYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vcmljb3N0YWNydXouY29tL25wcm9ncmVzcy9cIlxuICAgICAgfX0+e2BOUHJvZ3Jlc3MuanNgfTwvYT57YCwgYSBuaWNlIGxpdHRsZSBwcm9ncmVzcyBiYXIgbGlicmFyeS5gfTwvcD5cbiAgICA8cD57YFN0YXJ0IGJ5IGluc3RhbGxpbmcgaXQ6YH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1iYXNoXCJcbiAgICAgIH19PntgbnBtIGluc3RhbGwgQGluZXJ0aWFqcy9wcm9ncmVzc1xueWFybiBhZGQgQGluZXJ0aWFqcy9wcm9ncmVzc1xuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BPbmNlIGl0J3MgYmVlbiBpbnN0YWxsZWQsIGluaXRpYWxpemUgaXQgaW4geW91ciBhcHAuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCB7IEluZXJ0aWFQcm9ncmVzcyB9IGZyb20gJ0BpbmVydGlhanMvcHJvZ3Jlc3MnXG5cbkluZXJ0aWFQcm9ncmVzcy5pbml0KClcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgSXQgYWxzbyBjb21lcyB3aXRoIGEgbnVtYmVyIG9mIGN1c3RvbWl6YXRpb24gb3B0aW9ucywgd2hpY2ggeW91IGNhbiBwYXNzIHRvIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bpbml0KClgfTwvaW5saW5lQ29kZT57YCBtZXRob2QuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YEluZXJ0aWFQcm9ncmVzcy5pbml0KHtcbiAgLy8gVGhlIGRlbGF5IGFmdGVyIHdoaWNoIHRoZSBwcm9ncmVzcyBiYXIgd2lsbFxuICAvLyBhcHBlYXIgZHVyaW5nIG5hdmlnYXRpb24sIGluIG1pbGxpc2Vjb25kcy5cbiAgZGVsYXk6IDI1MCxcblxuICAvLyBUaGUgY29sb3Igb2YgdGhlIHByb2dyZXNzIGJhci5cbiAgY29sb3I6ICcjMjlkJyxcblxuICAvLyBXaGV0aGVyIHRvIGluY2x1ZGUgdGhlIGRlZmF1bHQgTlByb2dyZXNzIHN0eWxlcy5cbiAgaW5jbHVkZUNTUzogdHJ1ZSxcblxuICAvLyBXaGV0aGVyIHRoZSBOUHJvZ3Jlc3Mgc3Bpbm5lciB3aWxsIGJlIHNob3duLlxuICBzaG93U3Bpbm5lcjogZmFsc2UsXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntg0KDQsNC30LTQtdC70LXQvdC40LUg0LrQvtC00LBgfTwvaDI+XG4gICAgPHA+e2BUbyB1c2UgY29kZSBzcGxpdHRpbmcgd2l0aCBJbmVydGlhIHlvdSdsbCBuZWVkIHRvIGVuYWJsZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtZHluYW1pYy1pbXBvcnRcIlxuICAgICAgfX0+e2BkeW5hbWljIGltcG9ydHNgfTwvYT57YC4gWW91J2xsIG5lZWQgYSBCYWJlbCBwbHVnaW4gdG8gbWFrZSB0aGlzIHdvcmsuIEZpcnN0LCBpbnN0YWxsIHRoZSBwbHVnaW46YH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1iYXNoXCJcbiAgICAgIH19PntgbnBtIGluc3RhbGwgQGJhYmVsL3BsdWdpbi1zeW50YXgtZHluYW1pYy1pbXBvcnRcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgTmV4dCwgY3JlYXRlIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgLmJhYmVscmNgfTwvaW5saW5lQ29kZT57YCBmaWxlIGluIHlvdXIgcHJvamVjdCB3aXRoIHRoZSBmb2xsb3dpbmc6YH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc29uXCJcbiAgICAgIH19Pntge1xuICBcInBsdWdpbnNcIjogW1wiQGJhYmVsL3BsdWdpbi1zeW50YXgtZHluYW1pYy1pbXBvcnRcIl1cbn1cbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxOb3RpY2UgbWR4VHlwZT1cIk5vdGljZVwiPlxuICBJZiB5b3UncmUgdXNpbmcgTGFyYXZlbCBNaXggdjQsIHRoZSBkeW5hbWljIGltcG9ydHMgQmFiZWwgcGx1Z2luIGlzIGFscmVhZHkgY29uZmlndXJlZC4gSG93ZXZlciwgdGhlcmUgaXMgYSBrbm93blxuICBpc3N1ZSB3aXRoIExhcmF2ZWwgTWl4IHY0IHdoZW4gdXNpbmcgZHluYW1pYyBpbXBvcnRzIHdoZXJlIHlvdSBjYW5ub3QgdXNlIHN0eWxlcyB3aXRoaW4gVnVlIGZpbGVzIGR1ZSB0byBhIFdlYnBhY2t7JyAnfVxuICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0plZmZyZXlXYXkvbGFyYXZlbC1taXgvaXNzdWVzLzE4NTYjaXNzdWVjb21tZW50LTQ0ODA4MjkwOVwiPmxpbWl0YXRpb248L2E+LiBBcyBhXG4gIHdvcmthcm91bmQsIHlvdSBuZWVkIHRvIGRyb3AgTWl4IGVudGlyZWx5IG9yIGRvd25ncmFkZSB0byBMYXJhdmVsIE1peCB2My5cbiAgICA8L05vdGljZT5cbiAgICA8cD57YEZpbmFsbHksIHVwZGF0ZSB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVzb2x2ZUNvbXBvbmVudGB9PC9pbmxpbmVDb2RlPntgIGNhbGxiYWNrIGluIHlvdXIgYXBwIGluaXRpYWxpemF0aW9uIHRvIHVzZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BpbXBvcnRgfTwvaW5saW5lQ29kZT57YCBpbnN0ZWFkIG9mIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlcXVpcmVgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgcmVzb2x2ZUNvbXBvbmVudDogbmFtZSA9PiBpbXBvcnQoXFxgLi9QYWdlcy9cXCR7bmFtZX1cXGApLnRoZW4obW9kdWxlID0+IG1vZHVsZS5kZWZhdWx0KSxcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICByZXNvbHZlQ29tcG9uZW50PXtuYW1lID0+IGltcG9ydChcXGAuL1BhZ2VzL1xcJHtuYW1lfVxcYCkudGhlbihtb2R1bGUgPT4gbW9kdWxlLmRlZmF1bHQpfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIHJlc29sdmVDb21wb25lbnQ6IG5hbWUgPT4gaW1wb3J0KFxcYC4vUGFnZXMvXFwke25hbWV9LnN2ZWx0ZVxcYCksXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntgQ29uc2lkZXIgdXNpbmcgY2FjaGUgYnVzdGluZyB0byBmb3JjZSBicm93c2VycyB0byBsb2FkIHRoZSBsYXRlc3QgdmVyc2lvbiBvZiB5b3VyIGFzc2V0cy4gVG8gZG8gdGhpcywgYWRkIHRoZSBmb2xsb3dpbmcgdG8geW91ciB3ZWJwYWNrIGNvbmZpZzpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19Pntgb3V0cHV0OiB7XG4gIGNodW5rRmlsZW5hbWU6ICdqcy9bbmFtZV0uanM/aWQ9W2NodW5raGFzaF0nLFxufVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9