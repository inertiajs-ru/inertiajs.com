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
  }, "Since validation errors are made available client-side as page component props, you can conditionally display them based on their existence. Here's an example how."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, "Note, in the Vue adapters, you can also access the errors via the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 78
    }
  }, "$page.props.errors"), " object."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
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
  }, "While handling errors in Inertia is similar to full page form submissions, this approach is actually much nicer, since you don't need to manually repopulate old form input data."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 5
    }
  }, "When validation errors occur, the user is automatically redirected back to the form page they are already on. And, by default, Inertia automatically preserves the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/manual-visits#component-state"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 175
    }
  }), "component state"), " for ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 42
    }
  }, "post"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 96
    }
  }, "put"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 149
    }
  }, "patch"), ", and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 208
    }
  }, "delete"), " requests. Meaning, all the old form input data remains exactly as it is."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 5
    }
  }, "The only thing that changes is the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 47
    }
  }, "errors"), " prop, which now contains the validation errors."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
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
  }, "Since Inertia apps never generate ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 46
    }
  }, "422"), " responses, Inertia needs another way to determine if a response includes validation errors. To do this, Inertia checks the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 221
    }
  }, "page.props.errors"), " object for the existence of any errors. In the event that errors are present, the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 369
    }
  }, "onError()"), " callback will be called instead of the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 466
    }
  }, "onSuccess()"), " callback."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 5
    }
  }, "If you're applications shares errors using a different prop than ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 77
    }
  }, "errors"), ", you must tell Inertia how to resolve these errors. This can be done using the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 211
    }
  }, "resolveErrors()"), " callback, applied at the adapter level."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, "Note, the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 22
    }
  }, "resolveErrors()"), " callback must always return an object, even if there are no errors."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
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
  }, "For pages that have more than one form, it's possible to run into conflicts when displaying validation errors if two forms share the same field names. For example, imagine a \"create company\" form and a \"create user\" form that both have a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 250
    }
  }, "name"), " field. Since both forms will be displaying the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 350
    }
  }, "page.props.errors.name"), " validation error, generating a validation error for the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 477
    }
  }, "name"), " field in either form will cause the error to appear in both forms."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 5
    }
  }, "To get around this, you can use error bags. Error bags scope the validation errors returned from the server within a unique key specific to that form. Continuing with our example above, you might have a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 215
    }
  }, "createCompany"), " error bag for the first form, and a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 313
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmFsaWRhdGlvbi5tZHgiXSwibmFtZXMiOlsibWV0YSIsInRpdGxlIiwibGlua3MiLCJ1cmwiLCJuYW1lIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwibGFuZ3VhZ2UiLCJjb2RlIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxJQUFJLEdBQUc7QUFDbEJDLE9BQUssRUFBRSxXQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUsbUJBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxpQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLHFCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsNkJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSSxFQVlKO0FBQ0RELE9BQUcsRUFBRSxvQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVpJLEVBZUo7QUFDREQsT0FBRyxFQUFFLGdCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBZkk7QUFGVyxDQUFiO0FBdUJQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEs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QUFrTjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFsTiwyQ0FBb1Q7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBcFQsb0NBOU9LLEVBK09MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFNLGNBQVUsRUFBQztBQUFqQixLQUEyQjtBQUM1QixpQkFBYTtBQURlLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0pBQUwsQ0EvT0ssRUF5UEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxRkFBbUY7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FBbkYsV0FBdUs7QUFBWSxjQUFVLEVBQUMsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FBdkssTUF6UEssRUEwUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FBaUM7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUFzQjtBQUNuRCxZQUFRO0FBRDJDLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWpDLGlIQTFQSyxDQUFQO0FBOFBEO0tBbFF1QkwsVTtBQW9ReEI7QUFDQUEsVUFBVSxDQUFDTSxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZhbGlkYXRpb24uZTNjYzJkZWFhN2FiNmQzZGNiNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCBkZWRlbnQgZnJvbSAnZGVkZW50LWpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBUYWJiZWRDb2RlRXhhbXBsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiZWRDb2RlRXhhbXBsZXMnXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6ICfQktCw0LvQuNC00LDRhtC40Y8nLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcj0LrQsNC6LdGN0YLQvi3Rg9GB0YLRgNC+0LXQvdC+JyxcbiAgICBuYW1lOiAn0JrQsNC6INGN0YLQviDRg9GB0YLRgNC+0LXQvdC+J1xuICB9LCB7XG4gICAgdXJsOiAnI9C+0LHQvNC10L0t0L7RiNC40LHQutCw0LzQuCcsXG4gICAgbmFtZTogJ9Ce0LHQvNC10L0g0L7RiNC40LHQutCw0LzQuCdcbiAgfSwge1xuICAgIHVybDogJyPQvtGC0L7QsdGA0LDQttC10L3QuNC1LdC+0YjQuNCx0L7QuicsXG4gICAgbmFtZTogJ9Ce0YLQvtCx0YDQsNC20LXQvdC40LUg0L7RiNC40LHQvtC6J1xuICB9LCB7XG4gICAgdXJsOiAnI9C/0L7QstGC0L7RgNC90L7QtS3Qt9Cw0L/QvtC70L3QtdC90LjQtS3QstCy0L7QtNCwJyxcbiAgICBuYW1lOiAn0J/QvtCy0YLQvtGA0L3QvtC1INC30LDQv9C+0LvQvdC10L3QuNC1INCy0LLQvtC00LAnXG4gIH0sIHtcbiAgICB1cmw6ICcj0YPRgdGC0YDQsNC90LXQvdC40LUt0L7RiNC40LHQvtC6JyxcbiAgICBuYW1lOiAn0KPRgdGC0YDQsNC90LXQvdC40LUg0L7RiNC40LHQvtC6J1xuICB9LCB7XG4gICAgdXJsOiAnI9C/0LDQutC10YLRiy3QvtGI0LjQsdC+0LonLFxuICAgIG5hbWU6ICfQn9Cw0LrQtdGC0Ysg0L7RiNC40LHQvtC6J1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0JLQsNC70LjQtNCw0YbQuNGPYH08L2gxPlxuICAgIDxoMj57YNCa0LDQuiDRjdGC0L4g0YPRgdGC0YDQvtC10L3QvmB9PC9oMj5cbiAgICA8cD57YNCe0LHRgNCw0LHQvtGC0LrQsCDQvtGI0LjQsdC+0Log0L/RgNC+0LLQtdGA0LrQuCDQvdCwINGB0YLQvtGA0L7QvdC1INGB0LXRgNCy0LXRgNCwINCyIEluZXJ0aWEg0YDQsNCx0L7RgtCw0LXRgiDQvdC10LzQvdC+0LPQviDQuNC90LDRh9C1LCDRh9C10Lwg0LIg0LrQu9Cw0YHRgdC40YfQtdGB0LrQvtC5INGE0L7RgNC80LUsINGD0L/RgNCw0LLQu9GP0LXQvNC+0LkgYWpheCwg0LPQtNC1INCS0Ysg0L7RgtC70LDQstC70LjQstCw0LXRgtC1INC+0YjQuNCx0LrQuCDQv9GA0L7QstC10YDQutC4INC40Lcg0L7RgtCy0LXRgtC+0LIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDIyYH08L2lubGluZUNvZGU+e2Ag0Lgg0LLRgNGD0YfQvdGD0Y4g0L7QsdC90L7QstC70Y/QtdGC0LUg0YHQvtGB0YLQvtGP0L3QuNC1INC+0YjQuNCx0LrQuCDRhNC+0YDQvNGLLiDQrdGC0L4g0L/QvtGC0L7QvNGDLCDRh9GC0L4gSW5lcnRpYSDQvdC40LrQvtCz0LTQsCDQvdC1INC/0L7Qu9GD0YfQsNC10YIg0L7RgtCy0LXRgtC+0LIgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDIyYH08L2lubGluZUNvZGU+e2AuINCh0LrQvtGA0LXQtSwgSW5lcnRpYSDRgNCw0LHQvtGC0LDQtdGCINCx0L7Qu9GM0YjQtSDQutCw0Log0YHRgtCw0L3QtNCw0YDRgtC90LDRjyDQvtGC0L/RgNCw0LLQutCwINC/0L7Qu9C90L7RgdGC0YDQsNC90LjRh9C90L7QuSDRhNC+0YDQvNGLLiDQktC+0YIg0LrQsNC6OmB9PC9wPlxuICAgIDxwPntg0KHQvdCw0YfQsNC70LAg0JLRiyDQvtGC0L/RgNCw0LLQu9GP0LXRgtC1INGE0L7RgNC80YMg0YEg0L/QvtC80L7RidGM0Y4gSW5lcnRpYS4g0JIg0YHQu9GD0YfQsNC1INC+0YjQuNCx0L7QuiDQv9GA0L7QstC10YDQutC4INC90LAg0YHRgtC+0YDQvtC90LUg0YHQtdGA0LLQtdGA0LAg0JLRiyDQvdC1INGB0YDQsNC30YMg0LLQvtC30LLRgNCw0YnQsNC10YLQtSDRjdGC0Lgg0L7RiNC40LHQutC4INCyINCy0LjQtNC1INC+0YLQstC10YLQsCBKU09OIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDQyMmB9PC9pbmxpbmVDb2RlPntgLiDQktC80LXRgdGC0L4g0Y3RgtC+0LPQviDQktGLINC/0LXRgNC10L3QsNC/0YDQsNCy0LvRj9C10YLQtSAo0L3QsCDRgdGC0L7RgNC+0L3QtSDRgdC10YDQstC10YDQsCkg0L7QsdGA0LDRgtC90L4g0L3QsCDRgdGC0YDQsNC90LjRhtGDINGE0L7RgNC80YssINC90LAg0LrQvtGC0L7RgNC+0Lkg0JLRiyDQvdCw0YXQvtC00LjRgtC10YHRjCwg0L/QvtC60LDQt9GL0LLQsNGPINC+0YjQuNCx0LrQuCDQv9GA0L7QstC10YDQutC4INCyINGB0LXQsNC90YHQtS4g0KLQsNC60LjQtSDRhNGA0LXQudC80LLQvtGA0LrQuCwg0LrQsNC6IExhcmF2ZWwsINC00LXQu9Cw0Y7RgiDRjdGC0L4g0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LguYH08L3A+XG4gICAgPHA+e2DQl9Cw0YLQtdC8LCDQutCw0LbQtNGL0Lkg0YDQsNC3LCDQutC+0LPQtNCwINGN0YLQuCDQvtGI0LjQsdC60Lgg0L/RgNC+0LLQtdGA0LrQuCDQv9GA0LjRgdGD0YLRgdGC0LLRg9GO0YIg0LIg0YHQtdCw0L3RgdC1LCDQvtC90Lgg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0L/QtdGA0LXQtNCw0Y7RgtGB0Y8gSW5lcnRpYSwg0LTQtdC70LDRjyDQuNGFINC00L7RgdGC0YPQv9C90YvQvNC4INC90LAg0YHRgtC+0YDQvtC90LUg0LrQu9C40LXQvdGC0LAg0LIg0LrQsNGH0LXRgdGC0LLQtSDRgdCy0L7QudGB0YLQsiDRgdGC0YDQsNC90LjRhtGLLCDQutC+0YLQvtGA0YvQtSDQktGLINC80L7QttC10YLQtSDQvtGC0L7QsdGA0LDQt9C40YLRjCDQsiDRgdCy0L7QtdC5INGE0L7RgNC80LUuINCf0L7RgdC60L7Qu9GM0LrRgyDRgdCy0L7QudGB0YLQstCwINGP0LLQu9GP0Y7RgtGB0Y8g0YDQtdCw0LrRgtC40LLQvdGL0LzQuCwg0L7QvdC4INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INC+0YLQvtCx0YDQsNC20LDRjtGC0YHRjyDQv9C+0YHQu9C1INC30LDQstC10YDRiNC10L3QuNGPINC+0YLQv9GA0LDQstC60Lgg0YTQvtGA0LzRiy5gfTwvcD5cbiAgICA8aDI+e2DQntCx0LzQtdC9INC+0YjQuNCx0LrQsNC80LhgfTwvaDI+XG4gICAgPHA+e2DQlNC70Y8g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0L7RiNC40LHQutC4INC/0YDQvtCy0LXRgNC60Lgg0L3QsCDRgdGC0L7RgNC+0L3QtSDRgdC10YDQstC10YDQsCDQsdGL0LvQuCDQtNC+0YHRgtGD0L/QvdGLINC90LAg0YHRgtC+0YDQvtC90LUg0LrQu9C40LXQvdGC0LAsINCS0LDRiNCwINGB0LXRgNCy0LXRgNC90LDRjyDQuNC90YTRgNCw0YHRgtGA0YPQutGC0YPRgNCwINC00L7Qu9C20L3QsCDQtNC10LvQuNGC0YzRgdGPINC40LzQuCDRgSDQv9C+0LzQvtGJ0YzRjiDRgdCy0L7QudGB0YLQstCwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGVycm9yc2B9PC9pbmxpbmVDb2RlPntgLiDQndC10LrQvtGC0L7RgNGL0LUg0LDQtNCw0L/RgtC10YDRiywg0YLQsNC60LjQtSDQutCw0Log0LDQtNCw0L/RgtC10YAgTGFyYXZlbCwg0LTQtdC70LDRjtGCINGN0YLQviDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuC4g0JTRgNGD0LPQuNC8INC80L7QttC10YIg0L/QvtGC0YDQtdCx0L7QstCw0YLRjNGB0Y8g0YHQtNC10LvQsNGC0Ywg0Y3RgtC+INCy0YDRg9GH0L3Rg9GOLiDQn9C+0LbQsNC70YPQudGB0YLQsCwg0L7QsdGA0LDRgtC40YLQtdGB0Ywg0Log0LTQvtC60YPQvNC10L3RgtCw0YbQuNC4INCS0LDRiNC10LPQviDQutC+0L3QutGA0LXRgtC90L7Qs9C+INGB0LXRgNCy0LXRgNC90L7Qs9C+INCw0LTQsNC/0YLQtdGA0LAg0LTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtC5INC40L3RhNC+0YDQvNCw0YbQuNC4LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3BocCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGNsYXNzIFVzZXJzQ29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcHVibGljIGZ1bmN0aW9uIGNyZWF0ZSgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEluZXJ0aWE6OnJlbmRlcignVXNlcnMvQ3JlYXRlJyk7XG4gICAgICAgICAgICB9XFxuXG4gICAgICAgICAgICBwdWJsaWMgZnVuY3Rpb24gc3RvcmUoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBSZXF1ZXN0Ojp2YWxpZGF0ZShbXG4gICAgICAgICAgICAgICAgICAnZmlyc3RfbmFtZScgPT4gWydyZXF1aXJlZCcsICdtYXg6NTAnXSxcbiAgICAgICAgICAgICAgICAgICdsYXN0X25hbWUnID0+IFsncmVxdWlyZWQnLCAnbWF4OjUwJ10sXG4gICAgICAgICAgICAgICAgICAnZW1haWwnID0+IFsncmVxdWlyZWQnLCAnbWF4OjUwJywgJ2VtYWlsJ10sXG4gICAgICAgICAgICAgIF0pO1xcblxuICAgICAgICAgICAgICAkdXNlciA9IFVzZXI6OmNyZWF0ZShcbiAgICAgICAgICAgICAgICBSZXF1ZXN0Ojpvbmx5KCdmaXJzdF9uYW1lJywgJ2xhc3RfbmFtZScsICdlbWFpbCcpXG4gICAgICAgICAgICAgICk7XFxuXG4gICAgICAgICAgICAgIHJldHVybiBSZWRpcmVjdDo6cm91dGUoJ3VzZXJzLnNob3cnLCAkdXNlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmFpbHMnLFxuICAgICAgbGFuZ3VhZ2U6ICdydWJ5JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgIyB0b2RvXG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCe0YLQvtCx0YDQsNC20LXQvdC40LUg0L7RiNC40LHQvtC6YH08L2gyPlxuICAgIDxwPntgU2luY2UgdmFsaWRhdGlvbiBlcnJvcnMgYXJlIG1hZGUgYXZhaWxhYmxlIGNsaWVudC1zaWRlIGFzIHBhZ2UgY29tcG9uZW50IHByb3BzLCB5b3UgY2FuIGNvbmRpdGlvbmFsbHkgZGlzcGxheSB0aGVtIGJhc2VkIG9uIHRoZWlyIGV4aXN0ZW5jZS4gSGVyZSdzIGFuIGV4YW1wbGUgaG93LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAndHdpZycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdF9uYW1lXCI+Rmlyc3QgbmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZmlyc3RfbmFtZVwiIHYtbW9kZWw9XCJmb3JtLmZpcnN0X25hbWVcIiAvPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzLmZpcnN0X25hbWVcIj57eyBlcnJvcnMuZmlyc3RfbmFtZSB9fTwvZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxhc3RfbmFtZVwiPkxhc3QgbmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwibGFzdF9uYW1lXCIgdi1tb2RlbD1cImZvcm0ubGFzdF9uYW1lXCIgLz5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9ycy5sYXN0X25hbWVcIj57eyBlcnJvcnMubGFzdF9uYW1lIH19PC9kaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB2LW1vZGVsPVwiZm9ybS5lbWFpbFwiIC8+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJlcnJvcnMuZW1haWxcIj57eyBlcnJvcnMuZW1haWwgfX08L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cXG5cbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBlcnJvcnM6IE9iamVjdCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICBsYXN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICAgICAgZW1haWw6IG51bGwsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgIHRoaXMuJGluZXJ0aWEucG9zdCgnL3VzZXJzJywgdGhpcy5mb3JtKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIDwvc2NyaXB0PlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnXG4gICAgICAgIGltcG9ydCB7IHVzZVBhZ2UgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXG4gICAgICAgIGltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xcblxuICAgICAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0KCkge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3JzIH0gPSB1c2VQYWdlKCkucHJvcHNcXG5cbiAgICAgICAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgICAgICAgICAgZmlyc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgICAgIH0pXFxuXG4gICAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgIHNldFZhbHVlcyh2YWx1ZXMgPT4gKHtcbiAgICAgICAgICAgICAgLi4udmFsdWVzLFxuICAgICAgICAgICAgICBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIH1cXG5cbiAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBJbmVydGlhLnBvc3QoJy91c2VycycsIHZhbHVlcylcbiAgICAgICAgICB9XFxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmlyc3RfbmFtZVwiPkZpcnN0IG5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZmlyc3RfbmFtZVwiIHZhbHVlPXt2YWx1ZXMuZmlyc3RfbmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAge2Vycm9ycy5maXJzdF9uYW1lICYmIDxkaXY+e2Vycm9ycy5maXJzdF9uYW1lfTwvZGl2Pn1cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxhc3RfbmFtZVwiPkxhc3QgbmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJsYXN0X25hbWVcIiB2YWx1ZT17dmFsdWVzLmxhc3RfbmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAge2Vycm9ycy5sYXN0X25hbWUgJiYgPGRpdj57ZXJyb3JzLmxhc3RfbmFtZX08L2Rpdj59XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgdmFsdWU9e3ZhbHVlcy5lbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiA8ZGl2PntlcnJvcnMuZW1haWx9PC9kaXY+fVxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnaHRtbCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcXG5cbiAgICAgICAgICBleHBvcnQgbGV0IGVycm9ycyA9IHt9XFxuXG4gICAgICAgICAgbGV0IHZhbHVlcyA9IHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICBsYXN0X25hbWU6IG51bGwsXG4gICAgICAgICAgICBlbWFpbDogbnVsbCxcbiAgICAgICAgICB9XFxuXG4gICAgICAgICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xuICAgICAgICAgICAgSW5lcnRpYS5wb3N0KCcvdXNlcnMnLCB2YWx1ZXMpXG4gICAgICAgICAgfVxuICAgICAgICA8L3NjcmlwdD5cXG5cbiAgICAgICAgPGZvcm0gb246c3VibWl0fHByZXZlbnREZWZhdWx0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdF9uYW1lXCI+Rmlyc3QgbmFtZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBpZD1cImZpcnN0X25hbWVcIiBiaW5kOnZhbHVlPXt2YWx1ZXMuZmlyc3RfbmFtZX0+XG4gICAgICAgICAgeyNpZiBlcnJvcnMuZmlyc3RfbmFtZX08ZGl2PntlcnJvcnMuZmlyc3RfbmFtZX08L2Rpdj57L2lmfVxcblxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYXN0X25hbWVcIj5MYXN0IG5hbWU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJsYXN0X25hbWVcIiBiaW5kOnZhbHVlPXt2YWx1ZXMubGFzdF9uYW1lfT5cbiAgICAgICAgICB7I2lmIGVycm9ycy5sYXN0X25hbWV9PGRpdj57ZXJyb3JzLmxhc3RfbmFtZX08L2Rpdj57L2lmfVxcblxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiBiaW5kOnZhbHVlPXt2YWx1ZXMuZW1haWx9PlxuICAgICAgICAgIHsjaWYgZXJyb3JzLmVtYWlsfTxkaXY+e2Vycm9ycy5lbWFpbH08L2Rpdj57L2lmfVxcblxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntgTm90ZSwgaW4gdGhlIFZ1ZSBhZGFwdGVycywgeW91IGNhbiBhbHNvIGFjY2VzcyB0aGUgZXJyb3JzIHZpYSB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgJHBhZ2UucHJvcHMuZXJyb3JzYH08L2lubGluZUNvZGU+e2Agb2JqZWN0LmB9PC9wPlxuICAgIDxoMj57YNCf0L7QstGC0L7RgNC90L7QtSDQt9Cw0L/QvtC70L3QtdC90LjQtSDQstCy0L7QtNCwYH08L2gyPlxuICAgIDxwPntgV2hpbGUgaGFuZGxpbmcgZXJyb3JzIGluIEluZXJ0aWEgaXMgc2ltaWxhciB0byBmdWxsIHBhZ2UgZm9ybSBzdWJtaXNzaW9ucywgdGhpcyBhcHByb2FjaCBpcyBhY3R1YWxseSBtdWNoIG5pY2VyLCBzaW5jZSB5b3UgZG9uJ3QgbmVlZCB0byBtYW51YWxseSByZXBvcHVsYXRlIG9sZCBmb3JtIGlucHV0IGRhdGEuYH08L3A+XG4gICAgPHA+e2BXaGVuIHZhbGlkYXRpb24gZXJyb3JzIG9jY3VyLCB0aGUgdXNlciBpcyBhdXRvbWF0aWNhbGx5IHJlZGlyZWN0ZWQgYmFjayB0byB0aGUgZm9ybSBwYWdlIHRoZXkgYXJlIGFscmVhZHkgb24uIEFuZCwgYnkgZGVmYXVsdCwgSW5lcnRpYSBhdXRvbWF0aWNhbGx5IHByZXNlcnZlcyB0aGUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9tYW51YWwtdmlzaXRzI2NvbXBvbmVudC1zdGF0ZVwiXG4gICAgICB9fT57YGNvbXBvbmVudCBzdGF0ZWB9PC9hPntgIGZvciBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bwb3N0YH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHB1dGB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwYXRjaGB9PC9pbmxpbmVDb2RlPntgLCBhbmQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZGVsZXRlYH08L2lubGluZUNvZGU+e2AgcmVxdWVzdHMuIE1lYW5pbmcsIGFsbCB0aGUgb2xkIGZvcm0gaW5wdXQgZGF0YSByZW1haW5zIGV4YWN0bHkgYXMgaXQgaXMuYH08L3A+XG4gICAgPHA+e2BUaGUgb25seSB0aGluZyB0aGF0IGNoYW5nZXMgaXMgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGVycm9yc2B9PC9pbmxpbmVDb2RlPntgIHByb3AsIHdoaWNoIG5vdyBjb250YWlucyB0aGUgdmFsaWRhdGlvbiBlcnJvcnMuYH08L3A+XG4gICAgPGgyPntg0KPRgdGC0YDQsNC90LXQvdC40LUg0L7RiNC40LHQvtC6YH08L2gyPlxuICAgIDxwPntgU2luY2UgSW5lcnRpYSBhcHBzIG5ldmVyIGdlbmVyYXRlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDQyMmB9PC9pbmxpbmVDb2RlPntgIHJlc3BvbnNlcywgSW5lcnRpYSBuZWVkcyBhbm90aGVyIHdheSB0byBkZXRlcm1pbmUgaWYgYSByZXNwb25zZSBpbmNsdWRlcyB2YWxpZGF0aW9uIGVycm9ycy4gVG8gZG8gdGhpcywgSW5lcnRpYSBjaGVja3MgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBhZ2UucHJvcHMuZXJyb3JzYH08L2lubGluZUNvZGU+e2Agb2JqZWN0IGZvciB0aGUgZXhpc3RlbmNlIG9mIGFueSBlcnJvcnMuIEluIHRoZSBldmVudCB0aGF0IGVycm9ycyBhcmUgcHJlc2VudCwgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9uRXJyb3IoKWB9PC9pbmxpbmVDb2RlPntgIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGluc3RlYWQgb2YgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG9uU3VjY2VzcygpYH08L2lubGluZUNvZGU+e2AgY2FsbGJhY2suYH08L3A+XG4gICAgPHA+e2BJZiB5b3UncmUgYXBwbGljYXRpb25zIHNoYXJlcyBlcnJvcnMgdXNpbmcgYSBkaWZmZXJlbnQgcHJvcCB0aGFuIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGVycm9yc2B9PC9pbmxpbmVDb2RlPntgLCB5b3UgbXVzdCB0ZWxsIEluZXJ0aWEgaG93IHRvIHJlc29sdmUgdGhlc2UgZXJyb3JzLiBUaGlzIGNhbiBiZSBkb25lIHVzaW5nIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXNvbHZlRXJyb3JzKClgfTwvaW5saW5lQ29kZT57YCBjYWxsYmFjaywgYXBwbGllZCBhdCB0aGUgYWRhcHRlciBsZXZlbC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgLypcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgfCBWdWUgM1xuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAqL1xcblxuICAgICAgICBpbXBvcnQgeyBjcmVhdGVBcHAsIGggfSBmcm9tICd2dWUnXG4gICAgICAgIGltcG9ydCB7IEFwcCwgcGx1Z2luIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXZ1ZTMnXFxuXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXFxuXG4gICAgICAgIGNyZWF0ZUFwcCh7XG4gICAgICAgICAgcmVuZGVyOiAoKSA9PiBoKEFwcCwge1xuICAgICAgICAgICAgaW5pdGlhbFBhZ2U6IEpTT04ucGFyc2UoZWwuZGF0YXNldC5wYWdlKSxcbiAgICAgICAgICAgIHJlc29sdmVDb21wb25lbnQ6IG5hbWUgPT4gcmVxdWlyZShcXGAuL1BhZ2VzL1xcJHtuYW1lfVxcYCkuZGVmYXVsdCxcbiAgICAgICAgICAgIHJlc29sdmVFcnJvcnM6IHBhZ2UgPT4gKHBhZ2UucHJvcHMuZXJyb3JzIHx8IHt9KSxcbiAgICAgICAgICB9KVxuICAgICAgICB9KS51c2UocGx1Z2luKS5tb3VudChlbClcXG5cXG5cbiAgICAgICAgLypcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgfCBWdWUgMlxuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAqL1xcblxuICAgICAgICBpbXBvcnQgeyBBcHAsIHBsdWdpbiB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS12dWUnXG4gICAgICAgIGltcG9ydCBWdWUgZnJvbSAndnVlJ1xcblxuICAgICAgICBWdWUudXNlKHBsdWdpbilcXG5cbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcXG5cbiAgICAgICAgbmV3IFZ1ZSh7XG4gICAgICAgICAgcmVuZGVyOiBoID0+IGgoQXBwLCB7XG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICBpbml0aWFsUGFnZTogSlNPTi5wYXJzZShlbC5kYXRhc2V0LnBhZ2UpLFxuICAgICAgICAgICAgICByZXNvbHZlQ29tcG9uZW50OiBuYW1lID0+IHJlcXVpcmUoXFxgLi9QYWdlcy9cXCR7bmFtZX1cXGApLmRlZmF1bHQsXG4gICAgICAgICAgICAgIHJlc29sdmVFcnJvcnM6IHBhZ2UgPT4gKHBhZ2UucHJvcHMuZXJyb3JzIHx8IHt9KSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pLiRtb3VudChlbClcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBBcHAgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXG4gICAgICAgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbiAgICAgICAgaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xcblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxcblxuICAgICAgICByZW5kZXIoXG4gICAgICAgICAgPEFwcFxuICAgICAgICAgICAgaW5pdGlhbFBhZ2U9e0pTT04ucGFyc2UoZWwuZGF0YXNldC5wYWdlKX1cbiAgICAgICAgICAgIHJlc29sdmVDb21wb25lbnQ9e25hbWUgPT4gcmVxdWlyZShcXGAuL1BhZ2VzL1xcJHtuYW1lfVxcYCkuZGVmYXVsdH1cbiAgICAgICAgICAgIHJlc29sdmVFcnJvcnM9e3BhZ2UgPT4gKHBhZ2UucHJvcHMuZXJyb3JzIHx8IHt9KX0sXG4gICAgICAgICAgLz4sXG4gICAgICAgICAgZWxcbiAgICAgICAgKVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEFwcCB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1zdmVsdGUnXFxuXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXFxuXG4gICAgICAgIG5ldyBBcHAoe1xuICAgICAgICAgIHRhcmdldDogZWwsXG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGluaXRpYWxQYWdlOiBKU09OLnBhcnNlKGVsLmRhdGFzZXQucGFnZSksXG4gICAgICAgICAgICByZXNvbHZlQ29tcG9uZW50OiBuYW1lID0+IHJlcXVpcmUoXFxgLi9QYWdlcy9cXCR7bmFtZX0uc3ZlbHRlXFxgKSxcbiAgICAgICAgICAgIHJlc29sdmVFcnJvcnM6IHBhZ2UgPT4gKHBhZ2UucHJvcHMuZXJyb3JzIHx8IHt9KSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8cD57YE5vdGUsIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXNvbHZlRXJyb3JzKClgfTwvaW5saW5lQ29kZT57YCBjYWxsYmFjayBtdXN0IGFsd2F5cyByZXR1cm4gYW4gb2JqZWN0LCBldmVuIGlmIHRoZXJlIGFyZSBubyBlcnJvcnMuYH08L3A+XG4gICAgPGgyPntg0J/QsNC60LXRgtGLINC+0YjQuNCx0L7QumB9PC9oMj5cbiAgICA8cD57YEZvciBwYWdlcyB0aGF0IGhhdmUgbW9yZSB0aGFuIG9uZSBmb3JtLCBpdCdzIHBvc3NpYmxlIHRvIHJ1biBpbnRvIGNvbmZsaWN0cyB3aGVuIGRpc3BsYXlpbmcgdmFsaWRhdGlvbiBlcnJvcnMgaWYgdHdvIGZvcm1zIHNoYXJlIHRoZSBzYW1lIGZpZWxkIG5hbWVzLiBGb3IgZXhhbXBsZSwgaW1hZ2luZSBhIFwiY3JlYXRlIGNvbXBhbnlcIiBmb3JtIGFuZCBhIFwiY3JlYXRlIHVzZXJcIiBmb3JtIHRoYXQgYm90aCBoYXZlIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbmFtZWB9PC9pbmxpbmVDb2RlPntgIGZpZWxkLiBTaW5jZSBib3RoIGZvcm1zIHdpbGwgYmUgZGlzcGxheWluZyB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcGFnZS5wcm9wcy5lcnJvcnMubmFtZWB9PC9pbmxpbmVDb2RlPntgIHZhbGlkYXRpb24gZXJyb3IsIGdlbmVyYXRpbmcgYSB2YWxpZGF0aW9uIGVycm9yIGZvciB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbmFtZWB9PC9pbmxpbmVDb2RlPntgIGZpZWxkIGluIGVpdGhlciBmb3JtIHdpbGwgY2F1c2UgdGhlIGVycm9yIHRvIGFwcGVhciBpbiBib3RoIGZvcm1zLmB9PC9wPlxuICAgIDxwPntgVG8gZ2V0IGFyb3VuZCB0aGlzLCB5b3UgY2FuIHVzZSBlcnJvciBiYWdzLiBFcnJvciBiYWdzIHNjb3BlIHRoZSB2YWxpZGF0aW9uIGVycm9ycyByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXIgd2l0aGluIGEgdW5pcXVlIGtleSBzcGVjaWZpYyB0byB0aGF0IGZvcm0uIENvbnRpbnVpbmcgd2l0aCBvdXIgZXhhbXBsZSBhYm92ZSwgeW91IG1pZ2h0IGhhdmUgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BjcmVhdGVDb21wYW55YH08L2lubGluZUNvZGU+e2AgZXJyb3IgYmFnIGZvciB0aGUgZmlyc3QgZm9ybSwgYW5kIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgY3JlYXRlVXNlcmB9PC9pbmxpbmVDb2RlPntgIGVycm9yIGJhZyBmb3IgdGhlIHNlY29uZCBmb3JtLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BJbmVydGlhLnBvc3QoJy9jb21wYW5pZXMnLCBkYXRhLCB7XG4gIGVycm9yQmFnOiAnY3JlYXRlQ29tcGFueScsXG59KVxuXG5JbmVydGlhLnBvc3QoJy91c2VycycsIGRhdGEsIHtcbiAgZXJyb3JCYWc6ICdjcmVhdGVVc2VyJyxcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YERvaW5nIHRoaXMgd2lsbCBjYXVzZSB0aGUgdmFsaWRhdGlvbiBlcnJvcnMgdG8gY29tZSBiYWNrIGZyb20gdGhlIHNlcnZlciBhcyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwYWdlLnByb3BzLmVycm9ycy5jcmVhdGVDb21wYW55YH08L2lubGluZUNvZGU+e2AgYW5kIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBhZ2UucHJvcHMuZXJyb3JzLmNyZWF0ZVVzZXJgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cD57YE5vdGUsIGlmIHlvdSdyZSB1c2luZyB0aGUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9mb3JtcyNmb3JtLWhlbHBlclwiXG4gICAgICB9fT57YGZvcm0gaGVscGVyYH08L2E+e2AsIGl0J3Mgbm90IG5lY2Vzc2FyeSB0byB1c2UgZXJyb3IgYmFncywgc2luY2UgdmFsaWRhdGlvbiBlcnJvcnMgYXJlIGF1dG9tYXRpY2FsbHkgc2NvcGVkIHRvIHRoZSBmb3JtIG9iamVjdC5gfTwvcD5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=