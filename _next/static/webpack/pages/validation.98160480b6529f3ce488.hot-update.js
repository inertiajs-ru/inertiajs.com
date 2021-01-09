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
    url: '#repopulating-input',
    name: 'Repopulating input'
  }, {
    url: '#resolving-errors',
    name: 'Resolving errors'
  }, {
    url: '#error-bags',
    name: 'Error bags'
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
  }, "Handling server-side validation errors in Inertia works a little different than a classic ajax-driven form, where you catch the validation errors from ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 163
    }
  }, "422"), " responses and manually update the form's error state. That's because Inertia never receives ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 307
    }
  }, "422"), " responses. Rather, Inertia operates much more like a standard full page form submission. Here's how:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, "First, you submit your form using Inertia. In the event that there are server-side validation errors, you don't immediately return those errors as a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 161
    }
  }, "422"), " JSON response. Instead, you redirect (server-side) back to the form page you are on, flashing the validation errors in the session. Frameworks like Laravel do this automatically."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, "Next, any time these validation errors are present in the session, they automatically get shared with Inertia, making them available client-side as page props, which you can display in your form. Since props are reactive, they are automatically shown when the form submission completes."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
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
  }, "In order for your server-side validation errors to be available client-side, your server-side framework must share them via the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 140
    }
  }, "errors"), " prop. Some adapters, such as the Laravel adapter, do this automatically. For others, you may need to do this manually. Please refer to your specific server-side adapter documentation for more information."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, "Repopulating input"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
  }, "Resolving errors"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
  }, "Error bags"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmFsaWRhdGlvbi5tZHgiXSwibmFtZXMiOlsibWV0YSIsInRpdGxlIiwibGlua3MiLCJ1cmwiLCJuYW1lIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwibGFuZ3VhZ2UiLCJjb2RlIiwiZGVkZW50IiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxJQUFJLEdBQUc7QUFDbEJDLE9BQUssRUFBRSxXQURXO0FBRWxCQyxPQUFLLEVBQUUsQ0FBQztBQUNOQyxPQUFHLEVBQUUsbUJBREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxpQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLHFCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUscUJBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSSxFQVlKO0FBQ0RELE9BQUcsRUFBRSxtQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVpJLEVBZUo7QUFDREQsT0FBRyxFQUFFLGFBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FmSTtBQUZXLENBQWI7QUF1QlAsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCTCxNQUFJLEVBQUpBO0FBRGtCLENBQXBCO0FBR0EsSUFBTU0sU0FBUyxHQUFHQywwREFBbEI7QUFFZSxTQUFTQyxVQUFULE9BR1o7QUFBQSxNQUZEQyxVQUVDLFFBRkRBLFVBRUM7QUFBQSxN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QVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWxOLDJDQUFvVDtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFwVCxvQ0E5T0ssRUErT0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLO0FBQU0sY0FBVSxFQUFDO0FBQWpCLEtBQTJCO0FBQzVCLGlCQUFhO0FBRGUsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnSkFBTCxDQS9PSyxFQXlQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFGQUFtRjtBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUFuRixXQUF1SztBQUFZLGNBQVUsRUFBQyxHQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQUF2SyxNQXpQSyxFQTBQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUFpQztBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ25ELFlBQVE7QUFEMkMsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBakMsaUhBMVBLLENBQVA7QUE4UEQ7S0FsUXVCTCxVO0FBb1F4QjtBQUNBQSxVQUFVLENBQUNNLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmFsaWRhdGlvbi45ODE2MDQ4MGI2NTI5ZjNjZTQ4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFRhYmJlZENvZGVFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJlZENvZGVFeGFtcGxlcydcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9CS0LDQu9C40LTQsNGG0LjRjycsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyPQutCw0Lot0Y3RgtC+LdGD0YHRgtGA0L7QtdC90L4nLFxuICAgIG5hbWU6ICfQmtCw0Log0Y3RgtC+INGD0YHRgtGA0L7QtdC90L4nXG4gIH0sIHtcbiAgICB1cmw6ICcj0L7QsdC80LXQvS3QvtGI0LjQsdC60LDQvNC4JyxcbiAgICBuYW1lOiAn0J7QsdC80LXQvSDQvtGI0LjQsdC60LDQvNC4J1xuICB9LCB7XG4gICAgdXJsOiAnI9C+0YLQvtCx0YDQsNC20LXQvdC40LUt0L7RiNC40LHQvtC6JyxcbiAgICBuYW1lOiAn0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQvtGI0LjQsdC+0LonXG4gIH0sIHtcbiAgICB1cmw6ICcjcmVwb3B1bGF0aW5nLWlucHV0JyxcbiAgICBuYW1lOiAnUmVwb3B1bGF0aW5nIGlucHV0J1xuICB9LCB7XG4gICAgdXJsOiAnI3Jlc29sdmluZy1lcnJvcnMnLFxuICAgIG5hbWU6ICdSZXNvbHZpbmcgZXJyb3JzJ1xuICB9LCB7XG4gICAgdXJsOiAnI2Vycm9yLWJhZ3MnLFxuICAgIG5hbWU6ICdFcnJvciBiYWdzJ1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0JLQsNC70LjQtNCw0YbQuNGPYH08L2gxPlxuICAgIDxoMj57YNCa0LDQuiDRjdGC0L4g0YPRgdGC0YDQvtC10L3QvmB9PC9oMj5cbiAgICA8cD57YEhhbmRsaW5nIHNlcnZlci1zaWRlIHZhbGlkYXRpb24gZXJyb3JzIGluIEluZXJ0aWEgd29ya3MgYSBsaXR0bGUgZGlmZmVyZW50IHRoYW4gYSBjbGFzc2ljIGFqYXgtZHJpdmVuIGZvcm0sIHdoZXJlIHlvdSBjYXRjaCB0aGUgdmFsaWRhdGlvbiBlcnJvcnMgZnJvbSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A0MjJgfTwvaW5saW5lQ29kZT57YCByZXNwb25zZXMgYW5kIG1hbnVhbGx5IHVwZGF0ZSB0aGUgZm9ybSdzIGVycm9yIHN0YXRlLiBUaGF0J3MgYmVjYXVzZSBJbmVydGlhIG5ldmVyIHJlY2VpdmVzIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDQyMmB9PC9pbmxpbmVDb2RlPntgIHJlc3BvbnNlcy4gUmF0aGVyLCBJbmVydGlhIG9wZXJhdGVzIG11Y2ggbW9yZSBsaWtlIGEgc3RhbmRhcmQgZnVsbCBwYWdlIGZvcm0gc3VibWlzc2lvbi4gSGVyZSdzIGhvdzpgfTwvcD5cbiAgICA8cD57YEZpcnN0LCB5b3Ugc3VibWl0IHlvdXIgZm9ybSB1c2luZyBJbmVydGlhLiBJbiB0aGUgZXZlbnQgdGhhdCB0aGVyZSBhcmUgc2VydmVyLXNpZGUgdmFsaWRhdGlvbiBlcnJvcnMsIHlvdSBkb24ndCBpbW1lZGlhdGVseSByZXR1cm4gdGhvc2UgZXJyb3JzIGFzIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgNDIyYH08L2lubGluZUNvZGU+e2AgSlNPTiByZXNwb25zZS4gSW5zdGVhZCwgeW91IHJlZGlyZWN0IChzZXJ2ZXItc2lkZSkgYmFjayB0byB0aGUgZm9ybSBwYWdlIHlvdSBhcmUgb24sIGZsYXNoaW5nIHRoZSB2YWxpZGF0aW9uIGVycm9ycyBpbiB0aGUgc2Vzc2lvbi4gRnJhbWV3b3JrcyBsaWtlIExhcmF2ZWwgZG8gdGhpcyBhdXRvbWF0aWNhbGx5LmB9PC9wPlxuICAgIDxwPntgTmV4dCwgYW55IHRpbWUgdGhlc2UgdmFsaWRhdGlvbiBlcnJvcnMgYXJlIHByZXNlbnQgaW4gdGhlIHNlc3Npb24sIHRoZXkgYXV0b21hdGljYWxseSBnZXQgc2hhcmVkIHdpdGggSW5lcnRpYSwgbWFraW5nIHRoZW0gYXZhaWxhYmxlIGNsaWVudC1zaWRlIGFzIHBhZ2UgcHJvcHMsIHdoaWNoIHlvdSBjYW4gZGlzcGxheSBpbiB5b3VyIGZvcm0uIFNpbmNlIHByb3BzIGFyZSByZWFjdGl2ZSwgdGhleSBhcmUgYXV0b21hdGljYWxseSBzaG93biB3aGVuIHRoZSBmb3JtIHN1Ym1pc3Npb24gY29tcGxldGVzLmB9PC9wPlxuICAgIDxoMj57YNCe0LHQvNC10L0g0L7RiNC40LHQutCw0LzQuGB9PC9oMj5cbiAgICA8cD57YEluIG9yZGVyIGZvciB5b3VyIHNlcnZlci1zaWRlIHZhbGlkYXRpb24gZXJyb3JzIHRvIGJlIGF2YWlsYWJsZSBjbGllbnQtc2lkZSwgeW91ciBzZXJ2ZXItc2lkZSBmcmFtZXdvcmsgbXVzdCBzaGFyZSB0aGVtIHZpYSB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZXJyb3JzYH08L2lubGluZUNvZGU+e2AgcHJvcC4gU29tZSBhZGFwdGVycywgc3VjaCBhcyB0aGUgTGFyYXZlbCBhZGFwdGVyLCBkbyB0aGlzIGF1dG9tYXRpY2FsbHkuIEZvciBvdGhlcnMsIHlvdSBtYXkgbmVlZCB0byBkbyB0aGlzIG1hbnVhbGx5LiBQbGVhc2UgcmVmZXIgdG8geW91ciBzcGVjaWZpYyBzZXJ2ZXItc2lkZSBhZGFwdGVyIGRvY3VtZW50YXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb24uYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdMYXJhdmVsJyxcbiAgICAgIGxhbmd1YWdlOiAncGhwJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgY2xhc3MgVXNlcnNDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlclxuICAgICAgICB7XG4gICAgICAgICAgICBwdWJsaWMgZnVuY3Rpb24gY3JlYXRlKClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSW5lcnRpYTo6cmVuZGVyKCdVc2Vycy9DcmVhdGUnKTtcbiAgICAgICAgICAgIH1cXG5cbiAgICAgICAgICAgIHB1YmxpYyBmdW5jdGlvbiBzdG9yZSgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFJlcXVlc3Q6OnZhbGlkYXRlKFtcbiAgICAgICAgICAgICAgICAgICdmaXJzdF9uYW1lJyA9PiBbJ3JlcXVpcmVkJywgJ21heDo1MCddLFxuICAgICAgICAgICAgICAgICAgJ2xhc3RfbmFtZScgPT4gWydyZXF1aXJlZCcsICdtYXg6NTAnXSxcbiAgICAgICAgICAgICAgICAgICdlbWFpbCcgPT4gWydyZXF1aXJlZCcsICdtYXg6NTAnLCAnZW1haWwnXSxcbiAgICAgICAgICAgICAgXSk7XFxuXG4gICAgICAgICAgICAgICR1c2VyID0gVXNlcjo6Y3JlYXRlKFxuICAgICAgICAgICAgICAgIFJlcXVlc3Q6Om9ubHkoJ2ZpcnN0X25hbWUnLCAnbGFzdF9uYW1lJywgJ2VtYWlsJylcbiAgICAgICAgICAgICAgKTtcXG5cbiAgICAgICAgICAgICAgcmV0dXJuIFJlZGlyZWN0Ojpyb3V0ZSgndXNlcnMuc2hvdycsICR1c2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSYWlscycsXG4gICAgICBsYW5ndWFnZTogJ3J1YnknLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICAjIHRvZG9cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPGgyPntg0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDQvtGI0LjQsdC+0LpgfTwvaDI+XG4gICAgPHA+e2BTaW5jZSB2YWxpZGF0aW9uIGVycm9ycyBhcmUgbWFkZSBhdmFpbGFibGUgY2xpZW50LXNpZGUgYXMgcGFnZSBjb21wb25lbnQgcHJvcHMsIHlvdSBjYW4gY29uZGl0aW9uYWxseSBkaXNwbGF5IHRoZW0gYmFzZWQgb24gdGhlaXIgZXhpc3RlbmNlLiBIZXJlJ3MgYW4gZXhhbXBsZSBob3cuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICd0d2lnJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0X25hbWVcIj5GaXJzdCBuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJmaXJzdF9uYW1lXCIgdi1tb2RlbD1cImZvcm0uZmlyc3RfbmFtZVwiIC8+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJlcnJvcnMuZmlyc3RfbmFtZVwiPnt7IGVycm9ycy5maXJzdF9uYW1lIH19PC9kaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwibGFzdF9uYW1lXCI+TGFzdCBuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJsYXN0X25hbWVcIiB2LW1vZGVsPVwiZm9ybS5sYXN0X25hbWVcIiAvPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JzLmxhc3RfbmFtZVwiPnt7IGVycm9ycy5sYXN0X25hbWUgfX08L2Rpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIHYtbW9kZWw9XCJmb3JtLmVtYWlsXCIgLz5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9ycy5lbWFpbFwiPnt7IGVycm9ycy5lbWFpbCB9fTwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L3RlbXBsYXRlPlxcblxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGVycm9yczogT2JqZWN0LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgICAgICBlbWFpbDogbnVsbCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgdGhpcy4kaW5lcnRpYS5wb3N0KCcvdXNlcnMnLCB0aGlzLmZvcm0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICAgPC9zY3JpcHQ+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYSdcbiAgICAgICAgaW1wb3J0IHsgdXNlUGFnZSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcbiAgICAgICAgaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXFxuXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQoKSB7XG4gICAgICAgICAgY29uc3QgeyBlcnJvcnMgfSA9IHVzZVBhZ2UoKS5wcm9wc1xcblxuICAgICAgICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiBudWxsLFxuICAgICAgICAgICAgZW1haWw6IG51bGwsXG4gICAgICAgICAgfSlcXG5cbiAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgc2V0VmFsdWVzKHZhbHVlcyA9PiAoe1xuICAgICAgICAgICAgICAuLi52YWx1ZXMsXG4gICAgICAgICAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgfVxcblxuICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIEluZXJ0aWEucG9zdCgnL3VzZXJzJywgdmFsdWVzKVxuICAgICAgICAgIH1cXG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdF9uYW1lXCI+Rmlyc3QgbmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJmaXJzdF9uYW1lXCIgdmFsdWU9e3ZhbHVlcy5maXJzdF9uYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICB7ZXJyb3JzLmZpcnN0X25hbWUgJiYgPGRpdj57ZXJyb3JzLmZpcnN0X25hbWV9PC9kaXY+fVxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibGFzdF9uYW1lXCI+TGFzdCBuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cImxhc3RfbmFtZVwiIHZhbHVlPXt2YWx1ZXMubGFzdF9uYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICB7ZXJyb3JzLmxhc3RfbmFtZSAmJiA8ZGl2PntlcnJvcnMubGFzdF9uYW1lfTwvZGl2Pn1cbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB2YWx1ZT17dmFsdWVzLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIDxkaXY+e2Vycm9ycy5lbWFpbH08L2Rpdj59XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdodG1sJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICBpbXBvcnQgeyBJbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhJ1xcblxuICAgICAgICAgIGV4cG9ydCBsZXQgZXJyb3JzID0ge31cXG5cbiAgICAgICAgICBsZXQgdmFsdWVzID0ge1xuICAgICAgICAgICAgZmlyc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgIGxhc3RfbmFtZTogbnVsbCxcbiAgICAgICAgICAgIGVtYWlsOiBudWxsLFxuICAgICAgICAgIH1cXG5cbiAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICAgICAgICBJbmVydGlhLnBvc3QoJy91c2VycycsIHZhbHVlcylcbiAgICAgICAgICB9XG4gICAgICAgIDwvc2NyaXB0PlxcblxuICAgICAgICA8Zm9ybSBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0X25hbWVcIj5GaXJzdCBuYW1lOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IGlkPVwiZmlyc3RfbmFtZVwiIGJpbmQ6dmFsdWU9e3ZhbHVlcy5maXJzdF9uYW1lfT5cbiAgICAgICAgICB7I2lmIGVycm9ycy5maXJzdF9uYW1lfTxkaXY+e2Vycm9ycy5maXJzdF9uYW1lfTwvZGl2PnsvaWZ9XFxuXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImxhc3RfbmFtZVwiPkxhc3QgbmFtZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBpZD1cImxhc3RfbmFtZVwiIGJpbmQ6dmFsdWU9e3ZhbHVlcy5sYXN0X25hbWV9PlxuICAgICAgICAgIHsjaWYgZXJyb3JzLmxhc3RfbmFtZX08ZGl2PntlcnJvcnMubGFzdF9uYW1lfTwvZGl2PnsvaWZ9XFxuXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIGJpbmQ6dmFsdWU9e3ZhbHVlcy5lbWFpbH0+XG4gICAgICAgICAgeyNpZiBlcnJvcnMuZW1haWx9PGRpdj57ZXJyb3JzLmVtYWlsfTwvZGl2PnsvaWZ9XFxuXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2BOb3RlLCBpbiB0aGUgVnVlIGFkYXB0ZXJzLCB5b3UgY2FuIGFsc28gYWNjZXNzIHRoZSBlcnJvcnMgdmlhIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2AkcGFnZS5wcm9wcy5lcnJvcnNgfTwvaW5saW5lQ29kZT57YCBvYmplY3QuYH08L3A+XG4gICAgPGgyPntgUmVwb3B1bGF0aW5nIGlucHV0YH08L2gyPlxuICAgIDxwPntgV2hpbGUgaGFuZGxpbmcgZXJyb3JzIGluIEluZXJ0aWEgaXMgc2ltaWxhciB0byBmdWxsIHBhZ2UgZm9ybSBzdWJtaXNzaW9ucywgdGhpcyBhcHByb2FjaCBpcyBhY3R1YWxseSBtdWNoIG5pY2VyLCBzaW5jZSB5b3UgZG9uJ3QgbmVlZCB0byBtYW51YWxseSByZXBvcHVsYXRlIG9sZCBmb3JtIGlucHV0IGRhdGEuYH08L3A+XG4gICAgPHA+e2BXaGVuIHZhbGlkYXRpb24gZXJyb3JzIG9jY3VyLCB0aGUgdXNlciBpcyBhdXRvbWF0aWNhbGx5IHJlZGlyZWN0ZWQgYmFjayB0byB0aGUgZm9ybSBwYWdlIHRoZXkgYXJlIGFscmVhZHkgb24uIEFuZCwgYnkgZGVmYXVsdCwgSW5lcnRpYSBhdXRvbWF0aWNhbGx5IHByZXNlcnZlcyB0aGUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9tYW51YWwtdmlzaXRzI2NvbXBvbmVudC1zdGF0ZVwiXG4gICAgICB9fT57YGNvbXBvbmVudCBzdGF0ZWB9PC9hPntgIGZvciBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bwb3N0YH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHB1dGB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwYXRjaGB9PC9pbmxpbmVDb2RlPntgLCBhbmQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZGVsZXRlYH08L2lubGluZUNvZGU+e2AgcmVxdWVzdHMuIE1lYW5pbmcsIGFsbCB0aGUgb2xkIGZvcm0gaW5wdXQgZGF0YSByZW1haW5zIGV4YWN0bHkgYXMgaXQgaXMuYH08L3A+XG4gICAgPHA+e2BUaGUgb25seSB0aGluZyB0aGF0IGNoYW5nZXMgaXMgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGVycm9yc2B9PC9pbmxpbmVDb2RlPntgIHByb3AsIHdoaWNoIG5vdyBjb250YWlucyB0aGUgdmFsaWRhdGlvbiBlcnJvcnMuYH08L3A+XG4gICAgPGgyPntgUmVzb2x2aW5nIGVycm9yc2B9PC9oMj5cbiAgICA8cD57YFNpbmNlIEluZXJ0aWEgYXBwcyBuZXZlciBnZW5lcmF0ZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A0MjJgfTwvaW5saW5lQ29kZT57YCByZXNwb25zZXMsIEluZXJ0aWEgbmVlZHMgYW5vdGhlciB3YXkgdG8gZGV0ZXJtaW5lIGlmIGEgcmVzcG9uc2UgaW5jbHVkZXMgdmFsaWRhdGlvbiBlcnJvcnMuIFRvIGRvIHRoaXMsIEluZXJ0aWEgY2hlY2tzIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwYWdlLnByb3BzLmVycm9yc2B9PC9pbmxpbmVDb2RlPntgIG9iamVjdCBmb3IgdGhlIGV4aXN0ZW5jZSBvZiBhbnkgZXJyb3JzLiBJbiB0aGUgZXZlbnQgdGhhdCBlcnJvcnMgYXJlIHByZXNlbnQsIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvbkVycm9yKClgfTwvaW5saW5lQ29kZT57YCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBpbnN0ZWFkIG9mIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvblN1Y2Nlc3MoKWB9PC9pbmxpbmVDb2RlPntgIGNhbGxiYWNrLmB9PC9wPlxuICAgIDxwPntgSWYgeW91J3JlIGFwcGxpY2F0aW9ucyBzaGFyZXMgZXJyb3JzIHVzaW5nIGEgZGlmZmVyZW50IHByb3AgdGhhbiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BlcnJvcnNgfTwvaW5saW5lQ29kZT57YCwgeW91IG11c3QgdGVsbCBJbmVydGlhIGhvdyB0byByZXNvbHZlIHRoZXNlIGVycm9ycy4gVGhpcyBjYW4gYmUgZG9uZSB1c2luZyB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVzb2x2ZUVycm9ycygpYH08L2lubGluZUNvZGU+e2AgY2FsbGJhY2ssIGFwcGxpZWQgYXQgdGhlIGFkYXB0ZXIgbGV2ZWwuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqcycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIC8qXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHwgVnVlIDNcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgKi9cXG5cbiAgICAgICAgaW1wb3J0IHsgY3JlYXRlQXBwLCBoIH0gZnJvbSAndnVlJ1xuICAgICAgICBpbXBvcnQgeyBBcHAsIHBsdWdpbiB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS12dWUzJ1xcblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxcblxuICAgICAgICBjcmVhdGVBcHAoe1xuICAgICAgICAgIHJlbmRlcjogKCkgPT4gaChBcHAsIHtcbiAgICAgICAgICAgIGluaXRpYWxQYWdlOiBKU09OLnBhcnNlKGVsLmRhdGFzZXQucGFnZSksXG4gICAgICAgICAgICByZXNvbHZlQ29tcG9uZW50OiBuYW1lID0+IHJlcXVpcmUoXFxgLi9QYWdlcy9cXCR7bmFtZX1cXGApLmRlZmF1bHQsXG4gICAgICAgICAgICByZXNvbHZlRXJyb3JzOiBwYWdlID0+IChwYWdlLnByb3BzLmVycm9ycyB8fCB7fSksXG4gICAgICAgICAgfSlcbiAgICAgICAgfSkudXNlKHBsdWdpbikubW91bnQoZWwpXFxuXFxuXG4gICAgICAgIC8qXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHwgVnVlIDJcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgKi9cXG5cbiAgICAgICAgaW1wb3J0IHsgQXBwLCBwbHVnaW4gfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtdnVlJ1xuICAgICAgICBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcXG5cbiAgICAgICAgVnVlLnVzZShwbHVnaW4pXFxuXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXFxuXG4gICAgICAgIG5ldyBWdWUoe1xuICAgICAgICAgIHJlbmRlcjogaCA9PiBoKEFwcCwge1xuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgaW5pdGlhbFBhZ2U6IEpTT04ucGFyc2UoZWwuZGF0YXNldC5wYWdlKSxcbiAgICAgICAgICAgICAgcmVzb2x2ZUNvbXBvbmVudDogbmFtZSA9PiByZXF1aXJlKFxcYC4vUGFnZXMvXFwke25hbWV9XFxgKS5kZWZhdWx0LFxuICAgICAgICAgICAgICByZXNvbHZlRXJyb3JzOiBwYWdlID0+IChwYWdlLnByb3BzLmVycm9ycyB8fCB7fSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICB9KS4kbW91bnQoZWwpXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgQXBwIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xuICAgICAgICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4gICAgICAgIGltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcXG5cbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcXG5cbiAgICAgICAgcmVuZGVyKFxuICAgICAgICAgIDxBcHBcbiAgICAgICAgICAgIGluaXRpYWxQYWdlPXtKU09OLnBhcnNlKGVsLmRhdGFzZXQucGFnZSl9XG4gICAgICAgICAgICByZXNvbHZlQ29tcG9uZW50PXtuYW1lID0+IHJlcXVpcmUoXFxgLi9QYWdlcy9cXCR7bmFtZX1cXGApLmRlZmF1bHR9XG4gICAgICAgICAgICByZXNvbHZlRXJyb3JzPXtwYWdlID0+IChwYWdlLnByb3BzLmVycm9ycyB8fCB7fSl9LFxuICAgICAgICAgIC8+LFxuICAgICAgICAgIGVsXG4gICAgICAgIClcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanMnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBBcHAgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxcblxuICAgICAgICBuZXcgQXBwKHtcbiAgICAgICAgICB0YXJnZXQ6IGVsLFxuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBpbml0aWFsUGFnZTogSlNPTi5wYXJzZShlbC5kYXRhc2V0LnBhZ2UpLFxuICAgICAgICAgICAgcmVzb2x2ZUNvbXBvbmVudDogbmFtZSA9PiByZXF1aXJlKFxcYC4vUGFnZXMvXFwke25hbWV9LnN2ZWx0ZVxcYCksXG4gICAgICAgICAgICByZXNvbHZlRXJyb3JzOiBwYWdlID0+IChwYWdlLnByb3BzLmVycm9ycyB8fCB7fSksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2BOb3RlLCB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVzb2x2ZUVycm9ycygpYH08L2lubGluZUNvZGU+e2AgY2FsbGJhY2sgbXVzdCBhbHdheXMgcmV0dXJuIGFuIG9iamVjdCwgZXZlbiBpZiB0aGVyZSBhcmUgbm8gZXJyb3JzLmB9PC9wPlxuICAgIDxoMj57YEVycm9yIGJhZ3NgfTwvaDI+XG4gICAgPHA+e2BGb3IgcGFnZXMgdGhhdCBoYXZlIG1vcmUgdGhhbiBvbmUgZm9ybSwgaXQncyBwb3NzaWJsZSB0byBydW4gaW50byBjb25mbGljdHMgd2hlbiBkaXNwbGF5aW5nIHZhbGlkYXRpb24gZXJyb3JzIGlmIHR3byBmb3JtcyBzaGFyZSB0aGUgc2FtZSBmaWVsZCBuYW1lcy4gRm9yIGV4YW1wbGUsIGltYWdpbmUgYSBcImNyZWF0ZSBjb21wYW55XCIgZm9ybSBhbmQgYSBcImNyZWF0ZSB1c2VyXCIgZm9ybSB0aGF0IGJvdGggaGF2ZSBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG5hbWVgfTwvaW5saW5lQ29kZT57YCBmaWVsZC4gU2luY2UgYm90aCBmb3JtcyB3aWxsIGJlIGRpc3BsYXlpbmcgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHBhZ2UucHJvcHMuZXJyb3JzLm5hbWVgfTwvaW5saW5lQ29kZT57YCB2YWxpZGF0aW9uIGVycm9yLCBnZW5lcmF0aW5nIGEgdmFsaWRhdGlvbiBlcnJvciBmb3IgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG5hbWVgfTwvaW5saW5lQ29kZT57YCBmaWVsZCBpbiBlaXRoZXIgZm9ybSB3aWxsIGNhdXNlIHRoZSBlcnJvciB0byBhcHBlYXIgaW4gYm90aCBmb3Jtcy5gfTwvcD5cbiAgICA8cD57YFRvIGdldCBhcm91bmQgdGhpcywgeW91IGNhbiB1c2UgZXJyb3IgYmFncy4gRXJyb3IgYmFncyBzY29wZSB0aGUgdmFsaWRhdGlvbiBlcnJvcnMgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyIHdpdGhpbiBhIHVuaXF1ZSBrZXkgc3BlY2lmaWMgdG8gdGhhdCBmb3JtLiBDb250aW51aW5nIHdpdGggb3VyIGV4YW1wbGUgYWJvdmUsIHlvdSBtaWdodCBoYXZlIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgY3JlYXRlQ29tcGFueWB9PC9pbmxpbmVDb2RlPntgIGVycm9yIGJhZyBmb3IgdGhlIGZpcnN0IGZvcm0sIGFuZCBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGNyZWF0ZVVzZXJgfTwvaW5saW5lQ29kZT57YCBlcnJvciBiYWcgZm9yIHRoZSBzZWNvbmQgZm9ybS5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgSW5lcnRpYS5wb3N0KCcvY29tcGFuaWVzJywgZGF0YSwge1xuICBlcnJvckJhZzogJ2NyZWF0ZUNvbXBhbnknLFxufSlcblxuSW5lcnRpYS5wb3N0KCcvdXNlcnMnLCBkYXRhLCB7XG4gIGVycm9yQmFnOiAnY3JlYXRlVXNlcicsXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BEb2luZyB0aGlzIHdpbGwgY2F1c2UgdGhlIHZhbGlkYXRpb24gZXJyb3JzIHRvIGNvbWUgYmFjayBmcm9tIHRoZSBzZXJ2ZXIgYXMgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcGFnZS5wcm9wcy5lcnJvcnMuY3JlYXRlQ29tcGFueWB9PC9pbmxpbmVDb2RlPntgIGFuZCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwYWdlLnByb3BzLmVycm9ycy5jcmVhdGVVc2VyYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPHA+e2BOb3RlLCBpZiB5b3UncmUgdXNpbmcgdGhlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvZm9ybXMjZm9ybS1oZWxwZXJcIlxuICAgICAgfX0+e2Bmb3JtIGhlbHBlcmB9PC9hPntgLCBpdCdzIG5vdCBuZWNlc3NhcnkgdG8gdXNlIGVycm9yIGJhZ3MsIHNpbmNlIHZhbGlkYXRpb24gZXJyb3JzIGFyZSBhdXRvbWF0aWNhbGx5IHNjb3BlZCB0byB0aGUgZm9ybSBvYmplY3QuYH08L3A+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9