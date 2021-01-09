webpackHotUpdate_N_E("pages/validation",{

/***/ "./pages/validation.mdx":
/*!******************************!*\
  !*** ./pages/validation.mdx ***!
  \******************************/
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



var _jsxFileName = "C:\\projects\\inertiajs\\inertiajs.ru\\pages\\validation.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { App } from '@inertiajs/inertia-svelte'\n\n        const el = document.getElementById('app')\n\n        new App({\n          target: el,\n          props: {\n            initialPage: JSON.parse(el.dataset.page),\n            resolveComponent: name => require(`./Pages/${name}.svelte`),\n            resolveErrors: page => (page.props.errors || {}),\n          },\n        })\n      "], ["\n        import { App } from '@inertiajs/inertia-svelte'\\n\n        const el = document.getElementById('app')\\n\n        new App({\n          target: el,\n          props: {\n            initialPage: JSON.parse(el.dataset.page),\n            resolveComponent: name => require(\\`./Pages/\\${name}.svelte\\`),\n            resolveErrors: page => (page.props.errors || {}),\n          },\n        })\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { App } from '@inertiajs/inertia-react'\n        import React from 'react'\n        import { render } from 'react-dom'\n\n        const el = document.getElementById('app')\n\n        render(\n          <App\n            initialPage={JSON.parse(el.dataset.page)}\n            resolveComponent={name => require(`./Pages/${name}`).default}\n            resolveErrors={page => (page.props.errors || {})},\n          />,\n          el\n        )\n      "], ["\n        import { App } from '@inertiajs/inertia-react'\n        import React from 'react'\n        import { render } from 'react-dom'\\n\n        const el = document.getElementById('app')\\n\n        render(\n          <App\n            initialPage={JSON.parse(el.dataset.page)}\n            resolveComponent={name => require(\\`./Pages/\\${name}\\`).default}\n            resolveErrors={page => (page.props.errors || {})},\n          />,\n          el\n        )\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        /*\n        |----------------------------------------------------------------\n        | Vue 3\n        |----------------------------------------------------------------\n        */\n\n        import { createApp, h } from 'vue'\n        import { App, plugin } from '@inertiajs/inertia-vue3'\n\n        const el = document.getElementById('app')\n\n        createApp({\n          render: () => h(App, {\n            initialPage: JSON.parse(el.dataset.page),\n            resolveComponent: name => require(`./Pages/${name}`).default,\n            resolveErrors: page => (page.props.errors || {}),\n          })\n        }).use(plugin).mount(el)\n\n\n        /*\n        |----------------------------------------------------------------\n        | Vue 2\n        |----------------------------------------------------------------\n        */\n\n        import { App, plugin } from '@inertiajs/inertia-vue'\n        import Vue from 'vue'\n\n        Vue.use(plugin)\n\n        const el = document.getElementById('app')\n\n        new Vue({\n          render: h => h(App, {\n            props: {\n              initialPage: JSON.parse(el.dataset.page),\n              resolveComponent: name => require(`./Pages/${name}`).default,\n              resolveErrors: page => (page.props.errors || {}),\n            },\n          }),\n        }).$mount(el)\n      "], ["\n        /*\n        |----------------------------------------------------------------\n        | Vue 3\n        |----------------------------------------------------------------\n        */\\n\n        import { createApp, h } from 'vue'\n        import { App, plugin } from '@inertiajs/inertia-vue3'\\n\n        const el = document.getElementById('app')\\n\n        createApp({\n          render: () => h(App, {\n            initialPage: JSON.parse(el.dataset.page),\n            resolveComponent: name => require(\\`./Pages/\\${name}\\`).default,\n            resolveErrors: page => (page.props.errors || {}),\n          })\n        }).use(plugin).mount(el)\\n\\n\n        /*\n        |----------------------------------------------------------------\n        | Vue 2\n        |----------------------------------------------------------------\n        */\\n\n        import { App, plugin } from '@inertiajs/inertia-vue'\n        import Vue from 'vue'\\n\n        Vue.use(plugin)\\n\n        const el = document.getElementById('app')\\n\n        new Vue({\n          render: h => h(App, {\n            props: {\n              initialPage: JSON.parse(el.dataset.page),\n              resolveComponent: name => require(\\`./Pages/\\${name}\\`).default,\n              resolveErrors: page => (page.props.errors || {}),\n            },\n          }),\n        }).$mount(el)\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <script>\n          import { Inertia } from '@inertiajs/inertia'\n\n          export let errors = {}\n\n          let values = {\n            first_name: null,\n            last_name: null,\n            email: null,\n          }\n\n          function handleSubmit() {\n            Inertia.post('/users', values)\n          }\n        </script>\n\n        <form on:submit|preventDefault={handleSubmit}>\n          <label for=\"first_name\">First name:</label>\n          <input id=\"first_name\" bind:value={values.first_name}>\n          {#if errors.first_name}<div>{errors.first_name}</div>{/if}\n\n          <label for=\"last_name\">Last name:</label>\n          <input id=\"last_name\" bind:value={values.last_name}>\n          {#if errors.last_name}<div>{errors.last_name}</div>{/if}\n\n          <label for=\"email\">Email:</label>\n          <input id=\"email\" bind:value={values.email}>\n          {#if errors.email}<div>{errors.email}</div>{/if}\n\n          <button type=\"submit\">Submit</button>\n        </form>\n      "], ["\n        <script>\n          import { Inertia } from '@inertiajs/inertia'\\n\n          export let errors = {}\\n\n          let values = {\n            first_name: null,\n            last_name: null,\n            email: null,\n          }\\n\n          function handleSubmit() {\n            Inertia.post('/users', values)\n          }\n        </script>\\n\n        <form on:submit|preventDefault={handleSubmit}>\n          <label for=\"first_name\">First name:</label>\n          <input id=\"first_name\" bind:value={values.first_name}>\n          {#if errors.first_name}<div>{errors.first_name}</div>{/if}\\n\n          <label for=\"last_name\">Last name:</label>\n          <input id=\"last_name\" bind:value={values.last_name}>\n          {#if errors.last_name}<div>{errors.last_name}</div>{/if}\\n\n          <label for=\"email\">Email:</label>\n          <input id=\"email\" bind:value={values.email}>\n          {#if errors.email}<div>{errors.email}</div>{/if}\\n\n          <button type=\"submit\">Submit</button>\n        </form>\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { Inertia } from '@inertiajs/inertia'\n        import { usePage } from '@inertiajs/inertia-react'\n        import React, { useState } from 'react'\n\n        export default function Edit() {\n          const { errors } = usePage().props\n\n          const [values, setValues] = useState({\n            first_name: null,\n            last_name: null,\n            email: null,\n          })\n\n          function handleChange(e) {\n            setValues(values => ({\n              ...values,\n              [e.target.id]: e.target.value,\n            }))\n          }\n\n          function handleSubmit(e) {\n            e.preventDefault()\n            Inertia.post('/users', values)\n          }\n\n          return (\n            <form onSubmit={handleSubmit}>\n              <label for=\"first_name\">First name:</label>\n              <input id=\"first_name\" value={values.first_name} onChange={handleChange} />\n              {errors.first_name && <div>{errors.first_name}</div>}\n              <label for=\"last_name\">Last name:</label>\n              <input id=\"last_name\" value={values.last_name} onChange={handleChange} />\n              {errors.last_name && <div>{errors.last_name}</div>}\n              <label for=\"email\">Email:</label>\n              <input id=\"email\" value={values.email} onChange={handleChange} />\n              {errors.email && <div>{errors.email}</div>}\n              <button type=\"submit\">Submit</button>\n            </form>\n          )\n        }\n      "], ["\n        import { Inertia } from '@inertiajs/inertia'\n        import { usePage } from '@inertiajs/inertia-react'\n        import React, { useState } from 'react'\\n\n        export default function Edit() {\n          const { errors } = usePage().props\\n\n          const [values, setValues] = useState({\n            first_name: null,\n            last_name: null,\n            email: null,\n          })\\n\n          function handleChange(e) {\n            setValues(values => ({\n              ...values,\n              [e.target.id]: e.target.value,\n            }))\n          }\\n\n          function handleSubmit(e) {\n            e.preventDefault()\n            Inertia.post('/users', values)\n          }\\n\n          return (\n            <form onSubmit={handleSubmit}>\n              <label for=\"first_name\">First name:</label>\n              <input id=\"first_name\" value={values.first_name} onChange={handleChange} />\n              {errors.first_name && <div>{errors.first_name}</div>}\n              <label for=\"last_name\">Last name:</label>\n              <input id=\"last_name\" value={values.last_name} onChange={handleChange} />\n              {errors.last_name && <div>{errors.last_name}</div>}\n              <label for=\"email\">Email:</label>\n              <input id=\"email\" value={values.email} onChange={handleChange} />\n              {errors.email && <div>{errors.email}</div>}\n              <button type=\"submit\">Submit</button>\n            </form>\n          )\n        }\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <template>\n          <form @submit.prevent=\"submit\">\n            <label for=\"first_name\">First name:</label>\n            <input id=\"first_name\" v-model=\"form.first_name\" />\n            <div v-if=\"errors.first_name\">{{ errors.first_name }}</div>\n            <label for=\"last_name\">Last name:</label>\n            <input id=\"last_name\" v-model=\"form.last_name\" />\n            <div v-if=\"errors.last_name\">{{ errors.last_name }}</div>\n            <label for=\"email\">Email:</label>\n            <input id=\"email\" v-model=\"form.email\" />\n            <div v-if=\"errors.email\">{{ errors.email }}</div>\n            <button type=\"submit\">Submit</button>\n          </form>\n        </template>\n\n        <script>\n        export default {\n          props: {\n            errors: Object,\n          },\n          data() {\n            return {\n              form: {\n                first_name: null,\n                last_name: null,\n                email: null,\n              },\n            }\n          },\n          methods: {\n            submit() {\n              this.$inertia.post('/users', this.form)\n            },\n          },\n        }\n        </script>\n      "], ["\n        <template>\n          <form @submit.prevent=\"submit\">\n            <label for=\"first_name\">First name:</label>\n            <input id=\"first_name\" v-model=\"form.first_name\" />\n            <div v-if=\"errors.first_name\">{{ errors.first_name }}</div>\n            <label for=\"last_name\">Last name:</label>\n            <input id=\"last_name\" v-model=\"form.last_name\" />\n            <div v-if=\"errors.last_name\">{{ errors.last_name }}</div>\n            <label for=\"email\">Email:</label>\n            <input id=\"email\" v-model=\"form.email\" />\n            <div v-if=\"errors.email\">{{ errors.email }}</div>\n            <button type=\"submit\">Submit</button>\n          </form>\n        </template>\\n\n        <script>\n        export default {\n          props: {\n            errors: Object,\n          },\n          data() {\n            return {\n              form: {\n                first_name: null,\n                last_name: null,\n                email: null,\n              },\n            }\n          },\n          methods: {\n            submit() {\n              this.$inertia.post('/users', this.form)\n            },\n          },\n        }\n        </script>\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        # todo\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        class UsersController extends Controller\n        {\n            public function create()\n            {\n                return Inertia::render('Users/Create');\n            }\n\n            public function store()\n            {\n              Request::validate([\n                  'first_name' => ['required', 'max:50'],\n                  'last_name' => ['required', 'max:50'],\n                  'email' => ['required', 'max:50', 'email'],\n              ]);\n\n              $user = User::create(\n                Request::only('first_name', 'last_name', 'email')\n              );\n\n              return Redirect::route('users.show', $user);\n            }\n        }\n      "], ["\n        class UsersController extends Controller\n        {\n            public function create()\n            {\n                return Inertia::render('Users/Create');\n            }\\n\n            public function store()\n            {\n              Request::validate([\n                  'first_name' => ['required', 'max:50'],\n                  'last_name' => ['required', 'max:50'],\n                  'email' => ['required', 'max:50', 'email'],\n              ]);\\n\n              $user = User::create(\n                Request::only('first_name', 'last_name', 'email')\n              );\\n\n              return Redirect::route('users.show', $user);\n            }\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */





var meta = {
  title: 'Валидация',
  links: [{
    url: '#как-это-устроено',
    name: 'Как это устроено'
  }, {
    url: '#обмен-ошибками',
    name: 'Обмен ошибками'
  }, {
    url: '#отображение-ошибок',
    name: 'Отображение ошибок'
  }, {
    url: '#повторное-заполнение-ввода',
    name: 'Повторное заполнение ввода'
  }, {
    url: '#устранение-ошибок',
    name: 'Устранение ошибок'
  }, {
    url: '#пакеты-ошибок',
    name: 'Пакеты ошибок'
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
      lineNumber: 41,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, "\u0412\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, "\u041A\u0430\u043A \u044D\u0442\u043E \u0443\u0441\u0442\u0440\u043E\u0435\u043D\u043E"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0432 Inertia \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u0438\u043D\u0430\u0447\u0435, \u0447\u0435\u043C \u0432 \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0444\u043E\u0440\u043C\u0435, \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u043E\u0439 ajax, \u0433\u0434\u0435 \u0412\u044B \u043E\u0442\u043B\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0435 \u043E\u0448\u0438\u0431\u043A\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0438\u0437 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 182
    }
  }, "422"), " \u0438 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u0442\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043E\u0448\u0438\u0431\u043A\u0438 \u0444\u043E\u0440\u043C\u044B. \u042D\u0442\u043E \u043F\u043E\u0442\u043E\u043C\u0443, \u0447\u0442\u043E Inertia \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 331
    }
  }, "422"), ". \u0421\u043A\u043E\u0440\u0435\u0435, Inertia \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0431\u043E\u043B\u044C\u0448\u0435 \u043A\u0430\u043A \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B. \u0412\u043E\u0442 \u043A\u0430\u043A:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, "\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0412\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0435 \u0444\u043E\u0440\u043C\u0443 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Inertia. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043E\u0448\u0438\u0431\u043E\u043A \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0412\u044B \u043D\u0435 \u0441\u0440\u0430\u0437\u0443 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0435 \u044D\u0442\u0438 \u043E\u0448\u0438\u0431\u043A\u0438 \u0432 \u0432\u0438\u0434\u0435 \u043E\u0442\u0432\u0435\u0442\u0430 JSON ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 158
    }
  }, "422"), ". \u0412\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0412\u044B \u043F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0435 (\u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430) \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0444\u043E\u0440\u043C\u044B, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0412\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0435\u0441\u044C, \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0432 \u0441\u0435\u0430\u043D\u0441\u0435. \u0422\u0430\u043A\u0438\u0435 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0438, \u043A\u0430\u043A Laravel, \u0434\u0435\u043B\u0430\u044E\u0442 \u044D\u0442\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, "\u0417\u0430\u0442\u0435\u043C, \u043A\u0430\u0436\u0434\u044B\u0439 \u0440\u0430\u0437, \u043A\u043E\u0433\u0434\u0430 \u044D\u0442\u0438 \u043E\u0448\u0438\u0431\u043A\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u0432 \u0441\u0435\u0430\u043D\u0441\u0435, \u043E\u043D\u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u0441\u044F Inertia, \u0434\u0435\u043B\u0430\u044F \u0438\u0445 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u044C \u0432 \u0441\u0432\u043E\u0435\u0439 \u0444\u043E\u0440\u043C\u0435. \u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0440\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u043C\u0438, \u043E\u043D\u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u044E\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0444\u043E\u0440\u043C\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, "\u041E\u0431\u043C\u0435\u043D \u043E\u0448\u0438\u0431\u043A\u0430\u043C\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, "\u0414\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043E\u0448\u0438\u0431\u043A\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0431\u044B\u043B\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430, \u0412\u0430\u0448\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u0430\u044F \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0438\u043C\u0438 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 166
    }
  }, "errors"), ". \u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u044B, \u0442\u0430\u043A\u0438\u0435 \u043A\u0430\u043A \u0430\u0434\u0430\u043F\u0442\u0435\u0440 Laravel, \u0434\u0435\u043B\u0430\u044E\u0442 \u044D\u0442\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438. \u0414\u0440\u0443\u0433\u0438\u043C \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u044D\u0442\u043E \u0432\u0440\u0443\u0447\u043D\u0443\u044E. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0412\u0430\u0448\u0435\u0433\u043E \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u043E\u0433\u043E \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u0430 \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Laravel',
      language: 'php',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject())
    }, {
      name: 'Rails',
      language: 'ruby',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, "\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043E\u0448\u0438\u0431\u043E\u043A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u043E\u0448\u0438\u0431\u043A\u0438 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u043A\u0430\u043A \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u0438\u0445 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0438\u0445 \u043D\u0430\u043B\u0438\u0447\u0438\u044F. \u0412\u043E\u0442 \u043A\u0430\u043A \u044D\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'twig',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3())
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject4())
    }, {
      name: 'Svelte',
      language: 'html',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject5())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 5
    }
  }, "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u0432 \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u0430\u0445 Vue \u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043E\u0448\u0438\u0431\u043A\u0430\u043C \u0447\u0435\u0440\u0435\u0437 \u043E\u0431\u044A\u0435\u043A\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 106
    }
  }, "$page.props.errors"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0432\u0432\u043E\u0434\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 5
    }
  }, "\u0425\u043E\u0442\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A \u0432 Inertia \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0445 \u0444\u043E\u0440\u043C, \u044D\u0442\u043E\u0442 \u043F\u043E\u0434\u0445\u043E\u0434 \u043D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435 \u043D\u0430\u043C\u043D\u043E\u0433\u043E \u043B\u0443\u0447\u0448\u0435, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u0412\u0430\u043C \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0442\u044C \u0441\u0442\u0430\u0440\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0444\u043E\u0440\u043C\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 5
    }
  }, "\u041F\u0440\u0438 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u0438 \u043E\u0448\u0438\u0431\u043E\u043A \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u0444\u043E\u0440\u043C\u044B, \u043D\u0430 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043E\u043D \u0443\u0436\u0435 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F. \u0418 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E Inertia \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/manual-visits#component-state"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 193
    }
  }), "\u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430"), " \u0434\u043B\u044F \u0437\u0430\u043F\u0440\u043E\u0441\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 56
    }
  }, "post"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 110
    }
  }, "put"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 163
    }
  }, "patch"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 219
    }
  }, "delete"), ". \u042D\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0432\u0441\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0441\u0442\u0430\u0440\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0432 \u0442\u043E\u0447\u043D\u043E\u0441\u0442\u0438 \u043A\u0430\u043A \u0435\u0441\u0442\u044C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 5
    }
  }, "\u0415\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435, \u0447\u0442\u043E \u0438\u0437\u043C\u0435\u043D\u0438\u043B\u043E\u0441\u044C, - \u044D\u0442\u043E \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 57
    }
  }, "errors"), ", \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0442\u0435\u043F\u0435\u0440\u044C \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043E\u0448\u0438\u0431\u043A\u0438 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 5
    }
  }, "\u0423\u0441\u0442\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043E\u0448\u0438\u0431\u043E\u043A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F Inertia \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u044E\u0442 \u043E\u0442\u0432\u0435\u0442\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 70
    }
  }, "422"), ", Inertia \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C \u0434\u0440\u0443\u0433\u043E\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u044C, \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u043B\u0438 \u043E\u0442\u0432\u0435\u0442 \u043E\u0448\u0438\u0431\u043A\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E Inertia \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442 \u043E\u0431\u044A\u0435\u043A\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 237
    }
  }, "page.props.errors"), " \u043D\u0430 \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u043E\u0448\u0438\u0431\u043E\u043A. \u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u0448\u0438\u0431\u043E\u043A \u0431\u0443\u0434\u0435\u0442 \u0432\u044B\u0437\u0432\u0430\u043D \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0432\u044B\u0437\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 376
    }
  }, "onError()"), " \u0432\u043C\u0435\u0441\u0442\u043E \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0433\u043E \u0432\u044B\u0437\u043E\u0432\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 458
    }
  }, "onSuccess()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 5
    }
  }, "\u0415\u0441\u043B\u0438 \u0412\u0430\u0448\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0441\u043E\u043E\u0431\u0449\u0430\u0435\u0442 \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0430\u0445, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u043E, \u043E\u0442\u043B\u0438\u0447\u043D\u043E\u0435 \u043E\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 86
    }
  }, "errors"), ", \u0412\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u044C Inertia, \u043A\u0430\u043A \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u044D\u0442\u0438 \u043E\u0448\u0438\u0431\u043A\u0438. \u042D\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0433\u043E \u0432\u044B\u0437\u043E\u0432\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 241
    }
  }, "resolveErrors()"), ", \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u043C\u043E\u0433\u043E \u043D\u0430 \u0443\u0440\u043E\u0432\u043D\u0435 \u0430\u0434\u0430\u043F\u0442\u0435\u0440\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject6())
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject7())
    }, {
      name: 'Svelte',
      language: 'js',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject8())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 5
    }
  }, "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u043E\u0431\u0440\u0430\u0442\u043D\u044B\u0439 \u0432\u044B\u0437\u043E\u0432 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 50
    }
  }, "resolveErrors()"), " \u0432\u0441\u0435\u0433\u0434\u0430 \u0434\u043E\u043B\u0436\u0435\u043D \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044C \u043E\u0431\u044A\u0435\u043A\u0442, \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u043E\u0448\u0438\u0431\u043E\u043A \u043D\u0435\u0442."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 5
    }
  }, "\u041F\u0430\u043A\u0435\u0442\u044B \u043E\u0448\u0438\u0431\u043E\u043A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 5
    }
  }, "\u0414\u043B\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0445 \u0431\u043E\u043B\u0435\u0435 \u043E\u0434\u043D\u043E\u0439 \u0444\u043E\u0440\u043C\u044B, \u043C\u043E\u0433\u0443\u0442 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u0443\u0442\u044C \u043A\u043E\u043D\u0444\u043B\u0438\u043A\u0442\u044B \u043F\u0440\u0438 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0438 \u043E\u0448\u0438\u0431\u043E\u043A \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438, \u0435\u0441\u043B\u0438 \u0434\u0432\u0435 \u0444\u043E\u0440\u043C\u044B \u0438\u043C\u0435\u044E\u0442 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0435 \u0438\u043C\u0435\u043D\u0430 \u043F\u043E\u043B\u0435\u0439. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0435\u0431\u0435 \u0444\u043E\u0440\u043C\u0443 \xAB\u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044E\xBB \u0438 \u0444\u043E\u0440\u043C\u0443 \xAB\u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\xBB, \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0435\u0441\u0442\u044C \u043F\u043E\u043B\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 264
    }
  }, "name"), ". \u041F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u043E\u0431\u0435 \u0444\u043E\u0440\u043C\u044B \u0431\u0443\u0434\u0443\u0442 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0442\u044C \u043E\u0448\u0438\u0431\u043A\u0443 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 371
    }
  }, "page.props.errors.name"), ", \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043E\u0448\u0438\u0431\u043A\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0434\u043B\u044F \u043F\u043E\u043B\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 477
    }
  }, "name"), " \u0432 \u043B\u044E\u0431\u043E\u0439 \u0444\u043E\u0440\u043C\u0435 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043A \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044E \u043E\u0448\u0438\u0431\u043A\u0438 \u0432 \u043E\u0431\u0435\u0438\u0445 \u0444\u043E\u0440\u043C\u0430\u0445."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 5
    }
  }, "\u0427\u0442\u043E\u0431\u044B \u043E\u0431\u043E\u0439\u0442\u0438 \u044D\u0442\u043E, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043F\u0430\u043A\u0435\u0442\u044B \u043E\u0448\u0438\u0431\u043E\u043A. \u041F\u0430\u043A\u0435\u0442\u044B \u043E\u0448\u0438\u0431\u043E\u043A \u043E\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u044E\u0442 \u043E\u0448\u0438\u0431\u043A\u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438, \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C\u044B\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C, \u0432 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043B\u044E\u0447\u0430, \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u0447\u043D\u043E\u0433\u043E \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0444\u043E\u0440\u043C\u044B. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u044F \u043D\u0430\u0448 \u043F\u0440\u0438\u043C\u0435\u0440 \u0432\u044B\u0448\u0435, \u0443 \u0432\u0430\u0441 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0430\u043A\u0435\u0442 \u043E\u0448\u0438\u0431\u043E\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 249
    }
  }, "createCompany"), " \u0434\u043B\u044F \u043F\u0435\u0440\u0432\u043E\u0439 \u0444\u043E\u0440\u043C\u044B \u0438 \u043F\u0430\u043A\u0435\u0442 \u043E\u0448\u0438\u0431\u043E\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 343
    }
  }, "createUser"), " error bag for the second form."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("code", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "pre"
  }, {
    "className": "language-js"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 10
    }
  }), "Inertia.post('/companies', data, {\n  errorBag: 'createCompany',\n})\n\nInertia.post('/users', data, {\n  errorBag: 'createUser',\n})\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 5
    }
  }, "Doing this will cause the validation errors to come back from the server as ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 88
    }
  }, "page.props.errors.createCompany"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 172
    }
  }, "page.props.errors.createUser"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 5
    }
  }, "Note, if you're using the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/forms#form-helper"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 38
    }
  }), "form helper"), ", it's not necessary to use error bags, since validation errors are automatically scoped to the form object."));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmFsaWRhdGlvbi5tZHgiXSwibmFtZXMiOlsibWV0YSIsInRpdGxlIiwibGlua3MiLCJ1cmwiLCJuYW1lIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwibGFuZ3VhZ2UiLCJjb2RlIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxJQUFJLEdBQUc7QUFDbEJDLE9BQUssRUFBRSxXQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUsbUJBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxpQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLHFCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsNkJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSSxFQVlKO0FBQ0RELE9BQUcsRUFBRSxvQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVpJLEVBZUo7QUFDREQsT0FBRyxFQUFFLGdCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBZkk7QUFGVyxDQUFiO0FBdUJQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEs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QUFBLCtzQ0FBb1A7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBcFAseUtBQWtWO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWxWLG9DQTlPSyxFQStPTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUs7QUFBTSxjQUFVLEVBQUM7QUFBakIsS0FBMkI7QUFDNUIsaUJBQWE7QUFEZSxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdKQUFMLENBL09LLEVBeVBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUZBQW1GO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBQW5GLFdBQXVLO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBQXZLLE1BelBLLEVBMFBMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBQWlDO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDbkQsWUFBUTtBQUQyQyxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFqQyxpSEExUEssQ0FBUDtBQThQRDtLQWxRdUJMLFU7QUFvUXhCO0FBQ0FBLFVBQVUsQ0FBQ00sY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92YWxpZGF0aW9uLjlhNjllMWY5OWRiZjA3ZGRiOWRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0JLQsNC70LjQtNCw0YbQuNGPJyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI9C60LDQui3RjdGC0L4t0YPRgdGC0YDQvtC10L3QvicsXG4gICAgbmFtZTogJ9Ca0LDQuiDRjdGC0L4g0YPRgdGC0YDQvtC10L3QvidcbiAgfSwge1xuICAgIHVybDogJyPQvtCx0LzQtdC9LdC+0YjQuNCx0LrQsNC80LgnLFxuICAgIG5hbWU6ICfQntCx0LzQtdC9INC+0YjQuNCx0LrQsNC80LgnXG4gIH0sIHtcbiAgICB1cmw6ICcj0L7RgtC+0LHRgNCw0LbQtdC90LjQtS3QvtGI0LjQsdC+0LonLFxuICAgIG5hbWU6ICfQntGC0L7QsdGA0LDQttC10L3QuNC1INC+0YjQuNCx0L7QuidcbiAgfSwge1xuICAgIHVybDogJyPQv9C+0LLRgtC+0YDQvdC+0LUt0LfQsNC/0L7Qu9C90LXQvdC40LUt0LLQstC+0LTQsCcsXG4gICAgbmFtZTogJ9Cf0L7QstGC0L7RgNC90L7QtSDQt9Cw0L/QvtC70L3QtdC90LjQtSDQstCy0L7QtNCwJ1xuICB9LCB7XG4gICAgdXJsOiAnI9GD0YHRgtGA0LDQvdC10L3QuNC1LdC+0YjQuNCx0L7QuicsXG4gICAgbmFtZTogJ9Cj0YHRgtGA0LDQvdC10L3QuNC1INC+0YjQuNCx0L7QuidcbiAgfSwge1xuICAgIHVybDogJyPQv9Cw0LrQtdGC0Yst0L7RiNC40LHQvtC6JyxcbiAgICBuYW1lOiAn0J/QsNC60LXRgtGLINC+0YjQuNCx0L7QuidcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCS0LDQu9C40LTQsNGG0LjRj2B9PC9oMT5cbiAgICA8aDI+e2DQmtCw0Log0Y3RgtC+INGD0YHRgtGA0L7QtdC90L5gfTwvaDI+XG4gICAgPHA+e2DQntCx0YDQsNCx0L7RgtC60LAg0L7RiNC40LHQvtC6INC/0YDQvtCy0LXRgNC60Lgg0L3QsCDRgdGC0L7RgNC+0L3QtSDRgdC10YDQstC10YDQsCDQsiBJbmVydGlhINGA0LDQsdC+0YLQsNC10YIg0L3QtdC80L3QvtCz0L4g0LjQvdCw0YfQtSwg0YfQtdC8INCyINC60LvQsNGB0YHQuNGH0LXRgdC60L7QuSDRhNC+0YDQvNC1LCDRg9C/0YDQsNCy0LvRj9C10LzQvtC5IGFqYXgsINCz0LTQtSDQktGLINC+0YLQu9Cw0LLQu9C40LLQsNC10YLQtSDQvtGI0LjQsdC60Lgg0L/RgNC+0LLQtdGA0LrQuCDQuNC3INC+0YLQstC10YLQvtCyIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDQyMmB9PC9pbmxpbmVDb2RlPntgINC4INCy0YDRg9GH0L3Rg9GOINC+0LHQvdC+0LLQu9GP0LXRgtC1INGB0L7RgdGC0L7Rj9C90LjQtSDQvtGI0LjQsdC60Lgg0YTQvtGA0LzRiy4g0K3RgtC+INC/0L7RgtC+0LzRgywg0YfRgtC+IEluZXJ0aWEg0L3QuNC60L7Qs9C00LAg0L3QtSDQv9C+0LvRg9GH0LDQtdGCINC+0YLQstC10YLQvtCyIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDQyMmB9PC9pbmxpbmVDb2RlPntgLiDQodC60L7RgNC10LUsIEluZXJ0aWEg0YDQsNCx0L7RgtCw0LXRgiDQsdC+0LvRjNGI0LUg0LrQsNC6INGB0YLQsNC90LTQsNGA0YLQvdCw0Y8g0L7RgtC/0YDQsNCy0LrQsCDQv9C+0LvQvdC+0YHRgtGA0LDQvdC40YfQvdC+0Lkg0YTQvtGA0LzRiy4g0JLQvtGCINC60LDQujpgfTwvcD5cbiAgICA8cD57YNCh0L3QsNGH0LDQu9CwINCS0Ysg0L7RgtC/0YDQsNCy0LvRj9C10YLQtSDRhNC+0YDQvNGDINGBINC/0L7QvNC+0YnRjNGOIEluZXJ0aWEuINCSINGB0LvRg9GH0LDQtSDQvtGI0LjQsdC+0Log0L/RgNC+0LLQtdGA0LrQuCDQvdCwINGB0YLQvtGA0L7QvdC1INGB0LXRgNCy0LXRgNCwINCS0Ysg0L3QtSDRgdGA0LDQt9GDINCy0L7Qt9Cy0YDQsNGJ0LDQtdGC0LUg0Y3RgtC4INC+0YjQuNCx0LrQuCDQsiDQstC40LTQtSDQvtGC0LLQtdGC0LAgSlNPTiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A0MjJgfTwvaW5saW5lQ29kZT57YC4g0JLQvNC10YHRgtC+INGN0YLQvtCz0L4g0JLRiyDQv9C10YDQtdC90LDQv9GA0LDQstC70Y/QtdGC0LUgKNC90LAg0YHRgtC+0YDQvtC90LUg0YHQtdGA0LLQtdGA0LApINC+0LHRgNCw0YLQvdC+INC90LAg0YHRgtGA0LDQvdC40YbRgyDRhNC+0YDQvNGLLCDQvdCwINC60L7RgtC+0YDQvtC5INCS0Ysg0L3QsNGF0L7QtNC40YLQtdGB0YwsINC/0L7QutCw0LfRi9Cy0LDRjyDQvtGI0LjQsdC60Lgg0L/RgNC+0LLQtdGA0LrQuCDQsiDRgdC10LDQvdGB0LUuINCi0LDQutC40LUg0YTRgNC10LnQvNCy0L7RgNC60LgsINC60LDQuiBMYXJhdmVsLCDQtNC10LvQsNGO0YIg0Y3RgtC+INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4LmB9PC9wPlxuICAgIDxwPntg0JfQsNGC0LXQvCwg0LrQsNC20LTRi9C5INGA0LDQtywg0LrQvtCz0LTQsCDRjdGC0Lgg0L7RiNC40LHQutC4INC/0YDQvtCy0LXRgNC60Lgg0L/RgNC40YHRg9GC0YHRgtCy0YPRjtGCINCyINGB0LXQsNC90YHQtSwg0L7QvdC4INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INC/0LXRgNC10LTQsNGO0YLRgdGPIEluZXJ0aWEsINC00LXQu9Cw0Y8g0LjRhSDQtNC+0YHRgtGD0L/QvdGL0LzQuCDQvdCwINGB0YLQvtGA0L7QvdC1INC60LvQuNC10L3RgtCwINCyINC60LDRh9C10YHRgtCy0LUg0YHQstC+0LnRgdGC0LIg0YHRgtGA0LDQvdC40YbRiywg0LrQvtGC0L7RgNGL0LUg0JLRiyDQvNC+0LbQtdGC0LUg0L7RgtC+0LHRgNCw0LfQuNGC0Ywg0LIg0YHQstC+0LXQuSDRhNC+0YDQvNC1LiDQn9C+0YHQutC+0LvRjNC60YMg0YHQstC+0LnRgdGC0LLQsCDRj9Cy0LvRj9GO0YLRgdGPINGA0LXQsNC60YLQuNCy0L3Ri9C80LgsINC+0L3QuCDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQvtGC0L7QsdGA0LDQttCw0Y7RgtGB0Y8g0L/QvtGB0LvQtSDQt9Cw0LLQtdGA0YjQtdC90LjRjyDQvtGC0L/RgNCw0LLQutC4INGE0L7RgNC80YsuYH08L3A+XG4gICAgPGgyPntg0J7QsdC80LXQvSDQvtGI0LjQsdC60LDQvNC4YH08L2gyPlxuICAgIDxwPntg0JTQu9GPINGC0L7Qs9C+LCDRh9GC0L7QsdGLINC+0YjQuNCx0LrQuCDQv9GA0L7QstC10YDQutC4INC90LAg0YHRgtC+0YDQvtC90LUg0YHQtdGA0LLQtdGA0LAg0LHRi9C70Lgg0LTQvtGB0YLRg9C/0L3RiyDQvdCwINGB0YLQvtGA0L7QvdC1INC60LvQuNC10L3RgtCwLCDQktCw0YjQsCDRgdC10YDQstC10YDQvdCw0Y8g0LjQvdGE0YDQsNGB0YLRgNGD0LrRgtGD0YDQsCDQtNC+0LvQttC90LAg0LTQtdC70LjRgtGM0YHRjyDQuNC80Lgg0YEg0L/QvtC80L7RidGM0Y4g0YHQstC+0LnRgdGC0LLQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BlcnJvcnNgfTwvaW5saW5lQ29kZT57YC4g0J3QtdC60L7RgtC+0YDRi9C1INCw0LTQsNC/0YLQtdGA0YssINGC0LDQutC40LUg0LrQsNC6INCw0LTQsNC/0YLQtdGAIExhcmF2ZWwsINC00LXQu9Cw0Y7RgiDRjdGC0L4g0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LguINCU0YDRg9Cz0LjQvCDQvNC+0LbQtdGCINC/0L7RgtGA0LXQsdC+0LLQsNGC0YzRgdGPINGB0LTQtdC70LDRgtGMINGN0YLQviDQstGA0YPRh9C90YPRji4g0J/QvtC20LDQu9GD0LnRgdGC0LAsINC+0LHRgNCw0YLQuNGC0LXRgdGMINC6INC00L7QutGD0LzQtdC90YLQsNGG0LjQuCDQktCw0YjQtdCz0L4g0LrQvtC90LrRgNC10YLQvdC+0LPQviDRgdC10YDQstC10YDQvdC+0LPQviDQsNC00LDQv9GC0LXRgNCwINC00LvRjyDQv9C+0LvRg9GH0LXQvdC40Y8g0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90L7QuSDQuNC90YTQvtGA0LzQsNGG0LjQuC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ0xhcmF2ZWwnLFxuICAgICAgbGFuZ3VhZ2U6ICdwaHAnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBjbGFzcyBVc2Vyc0NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHB1YmxpYyBmdW5jdGlvbiBjcmVhdGUoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBJbmVydGlhOjpyZW5kZXIoJ1VzZXJzL0NyZWF0ZScpO1xuICAgICAgICAgICAgfVxcblxuICAgICAgICAgICAgcHVibGljIGZ1bmN0aW9uIHN0b3JlKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgUmVxdWVzdDo6dmFsaWRhdGUoW1xuICAgICAgICAgICAgICAgICAgJ2ZpcnN0X25hbWUnID0+IFsncmVxdWlyZWQnLCAnbWF4OjUwJ10sXG4gICAgICAgICAgICAgICAgICAnbGFzdF9uYW1lJyA9PiBbJ3JlcXVpcmVkJywgJ21heDo1MCddLFxuICAgICAgICAgICAgICAgICAgJ2VtYWlsJyA9PiBbJ3JlcXVpcmVkJywgJ21heDo1MCcsICdlbWFpbCddLFxuICAgICAgICAgICAgICBdKTtcXG5cbiAgICAgICAgICAgICAgJHVzZXIgPSBVc2VyOjpjcmVhdGUoXG4gICAgICAgICAgICAgICAgUmVxdWVzdDo6b25seSgnZmlyc3RfbmFtZScsICdsYXN0X25hbWUnLCAnZW1haWwnKVxuICAgICAgICAgICAgICApO1xcblxuICAgICAgICAgICAgICByZXR1cm4gUmVkaXJlY3Q6OnJvdXRlKCd1c2Vycy5zaG93JywgJHVzZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JhaWxzJyxcbiAgICAgIGxhbmd1YWdlOiAncnVieScsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgICMgdG9kb1xuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8aDI+e2DQntGC0L7QsdGA0LDQttC10L3QuNC1INC+0YjQuNCx0L7QumB9PC9oMj5cbiAgICA8cD57YNCf0L7RgdC60L7Qu9GM0LrRgyDQvtGI0LjQsdC60Lgg0LLQsNC70LjQtNCw0YbQuNC4INGB0YLQsNC90L7QstGP0YLRgdGPINC00L7RgdGC0YPQv9C90YvQvNC4INC90LAg0YHRgtC+0YDQvtC90LUg0LrQu9C40LXQvdGC0LAg0LrQsNC6INGB0LLQvtC50YHRgtCy0LAg0LrQvtC80L/QvtC90LXQvdGC0L7QsiDRgdGC0YDQsNC90LjRhtGLLCDQktGLINC80L7QttC10YLQtSDQvtGC0L7QsdGA0LDQttCw0YLRjCDQuNGFINCyINC30LDQstC40YHQuNC80L7RgdGC0Lgg0L7RgiDQuNGFINC90LDQu9C40YfQuNGPLiDQktC+0YIg0LrQsNC6INGN0YLQviDRgdC00LXQu9Cw0YLRjC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ3R3aWcnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlyc3RfbmFtZVwiPkZpcnN0IG5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImZpcnN0X25hbWVcIiB2LW1vZGVsPVwiZm9ybS5maXJzdF9uYW1lXCIgLz5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9ycy5maXJzdF9uYW1lXCI+e3sgZXJyb3JzLmZpcnN0X25hbWUgfX08L2Rpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYXN0X25hbWVcIj5MYXN0IG5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImxhc3RfbmFtZVwiIHYtbW9kZWw9XCJmb3JtLmxhc3RfbmFtZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJlcnJvcnMubGFzdF9uYW1lXCI+e3sgZXJyb3JzLmxhc3RfbmFtZSB9fTwvZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgdi1tb2RlbD1cImZvcm0uZW1haWxcIiAvPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzLmVtYWlsXCI+e3sgZXJyb3JzLmVtYWlsIH19PC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvdGVtcGxhdGU+XFxuXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZXJyb3JzOiBPYmplY3QsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICAgIGZpcnN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICB0aGlzLiRpbmVydGlhLnBvc3QoJy91c2VycycsIHRoaXMuZm9ybSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgICA8L3NjcmlwdD5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xuICAgICAgICBpbXBvcnQgeyB1c2VQYWdlIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xuICAgICAgICBpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdCgpIHtcbiAgICAgICAgICBjb25zdCB7IGVycm9ycyB9ID0gdXNlUGFnZSgpLnByb3BzXFxuXG4gICAgICAgICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICBsYXN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICBlbWFpbDogbnVsbCxcbiAgICAgICAgICB9KVxcblxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgICAgICBzZXRWYWx1ZXModmFsdWVzID0+ICh7XG4gICAgICAgICAgICAgIC4uLnZhbHVlcyxcbiAgICAgICAgICAgICAgW2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICB9XFxuXG4gICAgICAgICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgSW5lcnRpYS5wb3N0KCcvdXNlcnMnLCB2YWx1ZXMpXG4gICAgICAgICAgfVxcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0X25hbWVcIj5GaXJzdCBuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cImZpcnN0X25hbWVcIiB2YWx1ZT17dmFsdWVzLmZpcnN0X25hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIHtlcnJvcnMuZmlyc3RfbmFtZSAmJiA8ZGl2PntlcnJvcnMuZmlyc3RfbmFtZX08L2Rpdj59XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYXN0X25hbWVcIj5MYXN0IG5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IGlkPVwibGFzdF9uYW1lXCIgdmFsdWU9e3ZhbHVlcy5sYXN0X25hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIHtlcnJvcnMubGFzdF9uYW1lICYmIDxkaXY+e2Vycm9ycy5sYXN0X25hbWV9PC9kaXY+fVxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIHZhbHVlPXt2YWx1ZXMuZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgPGRpdj57ZXJyb3JzLmVtYWlsfTwvZGl2Pn1cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2h0bWwnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgIGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXFxuXG4gICAgICAgICAgZXhwb3J0IGxldCBlcnJvcnMgPSB7fVxcblxuICAgICAgICAgIGxldCB2YWx1ZXMgPSB7XG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgZW1haWw6IG51bGwsXG4gICAgICAgICAgfVxcblxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICAgICAgICAgIEluZXJ0aWEucG9zdCgnL3VzZXJzJywgdmFsdWVzKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9zY3JpcHQ+XFxuXG4gICAgICAgIDxmb3JtIG9uOnN1Ym1pdHxwcmV2ZW50RGVmYXVsdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlyc3RfbmFtZVwiPkZpcnN0IG5hbWU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJmaXJzdF9uYW1lXCIgYmluZDp2YWx1ZT17dmFsdWVzLmZpcnN0X25hbWV9PlxuICAgICAgICAgIHsjaWYgZXJyb3JzLmZpcnN0X25hbWV9PGRpdj57ZXJyb3JzLmZpcnN0X25hbWV9PC9kaXY+ey9pZn1cXG5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwibGFzdF9uYW1lXCI+TGFzdCBuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwibGFzdF9uYW1lXCIgYmluZDp2YWx1ZT17dmFsdWVzLmxhc3RfbmFtZX0+XG4gICAgICAgICAgeyNpZiBlcnJvcnMubGFzdF9uYW1lfTxkaXY+e2Vycm9ycy5sYXN0X25hbWV9PC9kaXY+ey9pZn1cXG5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgYmluZDp2YWx1ZT17dmFsdWVzLmVtYWlsfT5cbiAgICAgICAgICB7I2lmIGVycm9ycy5lbWFpbH08ZGl2PntlcnJvcnMuZW1haWx9PC9kaXY+ey9pZn1cXG5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8cD57YNCe0LHRgNCw0YLQuNGC0LUg0LLQvdC40LzQsNC90LjQtSwg0YfRgtC+INCyINCw0LTQsNC/0YLQtdGA0LDRhSBWdWUg0JLRiyDRgtCw0LrQttC1INC80L7QttC10YLQtSDQv9C+0LvRg9GH0LjRgtGMINC00L7RgdGC0YPQvyDQuiDQvtGI0LjQsdC60LDQvCDRh9C10YDQtdC3INC+0LHRitC10LrRgiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2AkcGFnZS5wcm9wcy5lcnJvcnNgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8aDI+e2DQn9C+0LLRgtC+0YDQvdC+0LUg0LfQsNC/0L7Qu9C90LXQvdC40LUg0LLQstC+0LTQsGB9PC9oMj5cbiAgICA8cD57YNCl0L7RgtGPINC+0LHRgNCw0LHQvtGC0LrQsCDQvtGI0LjQsdC+0Log0LIgSW5lcnRpYSDQsNC90LDQu9C+0LPQuNGH0L3QsCDQvtGC0L/RgNCw0LLQutC1INC/0L7Qu9C90L7RgdGC0YDQsNC90LjRh9C90YvRhSDRhNC+0YDQvCwg0Y3RgtC+0YIg0L/QvtC00YXQvtC0INC90LAg0YHQsNC80L7QvCDQtNC10LvQtSDQvdCw0LzQvdC+0LPQviDQu9GD0YfRiNC1LCDQv9C+0YHQutC+0LvRjNC60YMg0JLQsNC8INC90LUg0L3Rg9C20L3QviDQstGA0YPRh9C90YPRjiDQv9C+0LLRgtC+0YDQvdC+INC30LDQv9C+0LvQvdGP0YLRjCDRgdGC0LDRgNGL0LUg0LLRhdC+0LTQvdGL0LUg0LTQsNC90L3Ri9C1INGE0L7RgNC80YsuYH08L3A+XG4gICAgPHA+e2DQn9GA0Lgg0LLQvtC30L3QuNC60L3QvtCy0LXQvdC40Lgg0L7RiNC40LHQvtC6INC/0YDQvtCy0LXRgNC60Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INC/0LXRgNC10L3QsNC/0YDQsNCy0LvRj9C10YLRgdGPINC+0LHRgNCw0YLQvdC+INC90LAg0YHRgtGA0LDQvdC40YbRgyDRhNC+0YDQvNGLLCDQvdCwINC60L7RgtC+0YDQvtC5INC+0L0g0YPQttC1INC90LDRhdC+0LTQuNGC0YHRjy4g0Jgg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4gSW5lcnRpYSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDRgdC+0YXRgNCw0L3Rj9C10YIgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9tYW51YWwtdmlzaXRzI2NvbXBvbmVudC1zdGF0ZVwiXG4gICAgICB9fT57YNGB0L7RgdGC0L7Rj9C90LjQtSDQutC+0LzQv9C+0L3QtdC90YLQsGB9PC9hPntgINC00LvRjyDQt9Cw0L/RgNC+0YHQvtCyIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBvc3RgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcHV0YH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBhdGNoYH08L2lubGluZUNvZGU+e2Ag0LggYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZGVsZXRlYH08L2lubGluZUNvZGU+e2AuINCt0YLQviDQvtC30L3QsNGH0LDQtdGCLCDRh9GC0L4g0LLRgdC1INCy0YXQvtC00L3Ri9C1INC00LDQvdC90YvQtSDRgdGC0LDRgNC+0Lkg0YTQvtGA0LzRiyDQvtGB0YLQsNGO0YLRgdGPINCyINGC0L7Rh9C90L7RgdGC0Lgg0LrQsNC6INC10YHRgtGMLmB9PC9wPlxuICAgIDxwPntg0JXQtNC40L3RgdGC0LLQtdC90L3QvtC1LCDRh9GC0L4g0LjQt9C80LXQvdC40LvQvtGB0YwsIC0g0Y3RgtC+INGB0LLQvtC50YHRgtCy0L4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXJyb3JzYH08L2lubGluZUNvZGU+e2AsINC60L7RgtC+0YDQvtC1INGC0LXQv9C10YDRjCDRgdC+0LTQtdGA0LbQuNGCINC+0YjQuNCx0LrQuCDQstCw0LvQuNC00LDRhtC40LguYH08L3A+XG4gICAgPGgyPntg0KPRgdGC0YDQsNC90LXQvdC40LUg0L7RiNC40LHQvtC6YH08L2gyPlxuICAgIDxwPntg0J/QvtGB0LrQvtC70YzQutGDINC/0YDQuNC70L7QttC10L3QuNGPIEluZXJ0aWEg0L3QuNC60L7Qs9C00LAg0L3QtSDQs9C10L3QtdGA0LjRgNGD0Y7RgiDQvtGC0LLQtdGC0YsgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDIyYH08L2lubGluZUNvZGU+e2AsIEluZXJ0aWEg0L3QtdC+0LHRhdC+0LTQuNC8INC00YDRg9Cz0L7QuSDRgdC/0L7RgdC+0LEg0L7Qv9GA0LXQtNC10LvQuNGC0YwsINGB0L7QtNC10YDQttC40YIg0LvQuCDQvtGC0LLQtdGCINC+0YjQuNCx0LrQuCDQv9GA0L7QstC10YDQutC4LiDQlNC70Y8g0Y3RgtC+0LPQviBJbmVydGlhINC/0YDQvtCy0LXRgNGP0LXRgiDQvtCx0YrQtdC60YIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcGFnZS5wcm9wcy5lcnJvcnNgfTwvaW5saW5lQ29kZT57YCDQvdCwINC90LDQu9C40YfQuNC1INC+0YjQuNCx0L7Qui4g0JIg0YHQu9GD0YfQsNC1INC/0L7Rj9Cy0LvQtdC90LjRjyDQvtGI0LjQsdC+0Log0LHRg9C00LXRgiDQstGL0LfQstCw0L0g0L7QsdGA0LDRgtC90YvQuSDQstGL0LfQvtCyIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9uRXJyb3IoKWB9PC9pbmxpbmVDb2RlPntgINCy0LzQtdGB0YLQviDQvtCx0YDQsNGC0L3QvtCz0L4g0LLRi9C30L7QstCwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9uU3VjY2VzcygpYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHA+e2DQldGB0LvQuCDQktCw0YjQtSDQv9GA0LjQu9C+0LbQtdC90LjQtSDRgdC+0L7QsdGJ0LDQtdGCINC+0LEg0L7RiNC40LHQutCw0YUsINC40YHQv9C+0LvRjNC30YPRjyDRgdCy0L7QudGB0YLQstC+LCDQvtGC0LvQuNGH0L3QvtC1INC+0YIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXJyb3JzYH08L2lubGluZUNvZGU+e2AsINCS0Ysg0LTQvtC70LbQvdGLINGB0L7QvtCx0YnQuNGC0YwgSW5lcnRpYSwg0LrQsNC6INC40YHQv9GA0LDQstC40YLRjCDRjdGC0Lgg0L7RiNC40LHQutC4LiDQrdGC0L4g0LzQvtC20L3QviDRgdC00LXQu9Cw0YLRjCDRgSDQv9C+0LzQvtGJ0YzRjiDQvtCx0YDQsNGC0L3QvtCz0L4g0LLRi9C30L7QstCwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlc29sdmVFcnJvcnMoKWB9PC9pbmxpbmVDb2RlPntgLCDQv9GA0LjQvNC10L3Rj9C10LzQvtCz0L4g0L3QsCDRg9GA0L7QstC90LUg0LDQtNCw0L/RgtC10YDQsC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgLypcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgfCBWdWUgM1xuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAqL1xcblxuICAgICAgICBpbXBvcnQgeyBjcmVhdGVBcHAsIGggfSBmcm9tICd2dWUnXG4gICAgICAgIGltcG9ydCB7IEFwcCwgcGx1Z2luIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXZ1ZTMnXFxuXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXFxuXG4gICAgICAgIGNyZWF0ZUFwcCh7XG4gICAgICAgICAgcmVuZGVyOiAoKSA9PiBoKEFwcCwge1xuICAgICAgICAgICAgaW5pdGlhbFBhZ2U6IEpTT04ucGFyc2UoZWwuZGF0YXNldC5wYWdlKSxcbiAgICAgICAgICAgIHJlc29sdmVDb21wb25lbnQ6IG5hbWUgPT4gcmVxdWlyZShcXGAuL1BhZ2VzL1xcJHtuYW1lfVxcYCkuZGVmYXVsdCxcbiAgICAgICAgICAgIHJlc29sdmVFcnJvcnM6IHBhZ2UgPT4gKHBhZ2UucHJvcHMuZXJyb3JzIHx8IHt9KSxcbiAgICAgICAgICB9KVxuICAgICAgICB9KS51c2UocGx1Z2luKS5tb3VudChlbClcXG5cXG5cbiAgICAgICAgLypcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgfCBWdWUgMlxuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAqL1xcblxuICAgICAgICBpbXBvcnQgeyBBcHAsIHBsdWdpbiB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS12dWUnXG4gICAgICAgIGltcG9ydCBWdWUgZnJvbSAndnVlJ1xcblxuICAgICAgICBWdWUudXNlKHBsdWdpbilcXG5cbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcXG5cbiAgICAgICAgbmV3IFZ1ZSh7XG4gICAgICAgICAgcmVuZGVyOiBoID0+IGgoQXBwLCB7XG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICBpbml0aWFsUGFnZTogSlNPTi5wYXJzZShlbC5kYXRhc2V0LnBhZ2UpLFxuICAgICAgICAgICAgICByZXNvbHZlQ29tcG9uZW50OiBuYW1lID0+IHJlcXVpcmUoXFxgLi9QYWdlcy9cXCR7bmFtZX1cXGApLmRlZmF1bHQsXG4gICAgICAgICAgICAgIHJlc29sdmVFcnJvcnM6IHBhZ2UgPT4gKHBhZ2UucHJvcHMuZXJyb3JzIHx8IHt9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLiRtb3VudChlbClcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBBcHAgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXG4gICAgICAgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbiAgICAgICAgaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xcblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxcblxuICAgICAgICByZW5kZXIoXG4gICAgICAgICAgPEFwcFxuICAgICAgICAgICAgaW5pdGlhbFBhZ2U9e0pTT04ucGFyc2UoZWwuZGF0YXNldC5wYWdlKX1cbiAgICAgICAgICAgIHJlc29sdmVDb21wb25lbnQ9e25hbWUgPT4gcmVxdWlyZShcXGAuL1BhZ2VzL1xcJHtuYW1lfVxcYCkuZGVmYXVsdH1cbiAgICAgICAgICAgIHJlc29sdmVFcnJvcnM9e3BhZ2UgPT4gKHBhZ2UucHJvcHMuZXJyb3JzIHx8IHt9KX0sXG4gICAgICAgICAgLz4sXG4gICAgICAgICAgZWxcbiAgICAgICAgKVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEFwcCB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1zdmVsdGUnXFxuXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXFxuXG4gICAgICAgIG5ldyBBcHAoe1xuICAgICAgICAgIHRhcmdldDogZWwsXG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGluaXRpYWxQYWdlOiBKU09OLnBhcnNlKGVsLmRhdGFzZXQucGFnZSksXG4gICAgICAgICAgICByZXNvbHZlQ29tcG9uZW50OiBuYW1lID0+IHJlcXVpcmUoXFxgLi9QYWdlcy9cXCR7bmFtZX0uc3ZlbHRlXFxgKSxcbiAgICAgICAgICAgIHJlc29sdmVFcnJvcnM6IHBhZ2UgPT4gKHBhZ2UucHJvcHMuZXJyb3JzIHx8IHt9KSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8cD57YNCe0LHRgNCw0YLQuNGC0LUg0LLQvdC40LzQsNC90LjQtSwg0YfRgtC+INC+0LHRgNCw0YLQvdGL0Lkg0LLRi9C30L7QsiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXNvbHZlRXJyb3JzKClgfTwvaW5saW5lQ29kZT57YCDQstGB0LXQs9C00LAg0LTQvtC70LbQtdC9INCy0L7Qt9Cy0YDQsNGJ0LDRgtGMINC+0LHRitC10LrRgiwg0LTQsNC20LUg0LXRgdC70Lgg0L7RiNC40LHQvtC6INC90LXRgi5gfTwvcD5cbiAgICA8aDI+e2DQn9Cw0LrQtdGC0Ysg0L7RiNC40LHQvtC6YH08L2gyPlxuICAgIDxwPntg0JTQu9GPINGB0YLRgNCw0L3QuNGGLCDRgdC+0LTQtdGA0LbQsNGJ0LjRhSDQsdC+0LvQtdC1INC+0LTQvdC+0Lkg0YTQvtGA0LzRiywg0LzQvtCz0YPRgiDQstC+0LfQvdC40LrQvdGD0YLRjCDQutC+0L3RhNC70LjQutGC0Ysg0L/RgNC4INC+0YLQvtCx0YDQsNC20LXQvdC40Lgg0L7RiNC40LHQvtC6INC/0YDQvtCy0LXRgNC60LgsINC10YHQu9C4INC00LLQtSDRhNC+0YDQvNGLINC40LzQtdGO0YIg0L7QtNC40L3QsNC60L7QstGL0LUg0LjQvNC10L3QsCDQv9C+0LvQtdC5LiDQndCw0L/RgNC40LzQtdGALCDQv9GA0LXQtNGB0YLQsNCy0YzRgtC1INGB0LXQsdC1INGE0L7RgNC80YMgwqvRgdC+0LfQtNCw0YLRjCDQutC+0LzQv9Cw0L3QuNGOwrsg0Lgg0YTQvtGA0LzRgyDCq9GB0L7Qt9C00LDRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj8K7LCDRgyDQutC+0YLQvtGA0YvRhSDQtdGB0YLRjCDQv9C+0LvQtSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BuYW1lYH08L2lubGluZUNvZGU+e2AuINCf0L7RgdC60L7Qu9GM0LrRgyDQvtCx0LUg0YTQvtGA0LzRiyDQsdGD0LTRg9GCINC+0YLQvtCx0YDQsNC20LDRgtGMINC+0YjQuNCx0LrRgyDQv9GA0L7QstC10YDQutC4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBhZ2UucHJvcHMuZXJyb3JzLm5hbWVgfTwvaW5saW5lQ29kZT57YCwg0YHQvtC30LTQsNC90LjQtSDQvtGI0LjQsdC60Lgg0L/RgNC+0LLQtdGA0LrQuCDQtNC70Y8g0L/QvtC70Y8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbmFtZWB9PC9pbmxpbmVDb2RlPntgINCyINC70Y7QsdC+0Lkg0YTQvtGA0LzQtSDQv9GA0LjQstC10LTQtdGCINC6INC/0L7Rj9Cy0LvQtdC90LjRjiDQvtGI0LjQsdC60Lgg0LIg0L7QsdC10LjRhSDRhNC+0YDQvNCw0YUuYH08L3A+XG4gICAgPHA+e2DQp9GC0L7QsdGLINC+0LHQvtC50YLQuCDRjdGC0L4sINCy0Ysg0LzQvtC20LXRgtC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQv9Cw0LrQtdGC0Ysg0L7RiNC40LHQvtC6LiDQn9Cw0LrQtdGC0Ysg0L7RiNC40LHQvtC6INC+0YXQstCw0YLRi9Cy0LDRjtGCINC+0YjQuNCx0LrQuCDQv9GA0L7QstC10YDQutC4LCDQstC+0LfQstGA0LDRidCw0LXQvNGL0LUg0YHQtdGA0LLQtdGA0L7QvCwg0LIg0L/RgNC10LTQtdC70LDRhSDRg9C90LjQutCw0LvRjNC90L7Qs9C+INC60LvRjtGH0LAsINGB0L/QtdGG0LjRhNC40YfQvdC+0LPQviDQtNC70Y8g0Y3RgtC+0Lkg0YTQvtGA0LzRiy4g0J/RgNC+0LTQvtC70LbQsNGPINC90LDRiCDQv9GA0LjQvNC10YAg0LLRi9GI0LUsINGDINCy0LDRgSDQvNC+0LbQtdGCINCx0YvRgtGMINC/0LDQutC10YIg0L7RiNC40LHQvtC6IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGNyZWF0ZUNvbXBhbnlgfTwvaW5saW5lQ29kZT57YCDQtNC70Y8g0L/QtdGA0LLQvtC5INGE0L7RgNC80Ysg0Lgg0L/QsNC60LXRgiDQvtGI0LjQsdC+0LogYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgY3JlYXRlVXNlcmB9PC9pbmxpbmVDb2RlPntgIGVycm9yIGJhZyBmb3IgdGhlIHNlY29uZCBmb3JtLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnBvc3QoJy9jb21wYW5pZXMnLCBkYXRhLCB7XG4gIGVycm9yQmFnOiAnY3JlYXRlQ29tcGFueScsXG59KVxuXG5JbmVydGlhLnBvc3QoJy91c2VycycsIGRhdGEsIHtcbiAgZXJyb3JCYWc6ICdjcmVhdGVVc2VyJyxcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YERvaW5nIHRoaXMgd2lsbCBjYXVzZSB0aGUgdmFsaWRhdGlvbiBlcnJvcnMgdG8gY29tZSBiYWNrIGZyb20gdGhlIHNlcnZlciBhcyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwYWdlLnByb3BzLmVycm9ycy5jcmVhdGVDb21wYW55YH08L2lubGluZUNvZGU+e2AgYW5kIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBhZ2UucHJvcHMuZXJyb3JzLmNyZWF0ZVVzZXJgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cD57YE5vdGUsIGlmIHlvdSdyZSB1c2luZyB0aGUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9mb3JtcyNmb3JtLWhlbHBlclwiXG4gICAgICB9fT57YGZvcm0gaGVscGVyYH08L2E+e2AsIGl0J3Mgbm90IG5lY2Vzc2FyeSB0byB1c2UgZXJyb3IgYmFncywgc2luY2UgdmFsaWRhdGlvbiBlcnJvcnMgYXJlIGF1dG9tYXRpY2FsbHkgc2NvcGVkIHRvIHRoZSBmb3JtIG9iamVjdC5gfTwvcD5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=