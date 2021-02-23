webpackHotUpdate_N_E("pages/shared-data",{

/***/ "./pages/shared-data.mdx":
/*!*******************************!*\
  !*** ./pages/shared-data.mdx ***!
  \*******************************/
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
/* harmony import */ var _components_Notice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Notice */ "./components/Notice.js");
/* harmony import */ var _components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TabbedCodeExamples */ "./components/TabbedCodeExamples.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");



var _jsxFileName = "C:\\projects\\inertiajs\\inertiajs.ru\\pages\\shared-data.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject10() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <script>\n          import { page } from '@inertiajs/inertia-svelte'\n        </script>\n\n        <main>\n          <header></header>\n          <content>\n            {#if $page.props.flash.message}\n              <div class=\"alert\">{$page.props.flash.message}</div>\n            {/if}\n            <slot />\n          </content>\n          <footer></footer>\n        </main>\n      "], ["\n        <script>\n          import { page } from '@inertiajs/inertia-svelte'\n        </script>\\n\n        <main>\n          <header></header>\n          <content>\n            {#if $page.props.flash.message}\n              <div class=\"alert\">{$page.props.flash.message}</div>\n            {/if}\n            <slot />\n          </content>\n          <footer></footer>\n        </main>\n      "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { usePage } from '@inertiajs/inertia-react'\n\n        export default function Layout({ children }) {\n          const { flash } = usePage().props\n\n          return (\n            <main>\n              <header></header>\n              <content>\n                {flash.message && (\n                  <div class=\"alert\">{flash.message}</div>\n                )}\n                {children}\n              </content>\n              <footer></footer>\n            </main>\n          )\n        }\n      "], ["\n        import { usePage } from '@inertiajs/inertia-react'\\n\n        export default function Layout({ children }) {\n          const { flash } = usePage().props\\n\n          return (\n            <main>\n              <header></header>\n              <content>\n                {flash.message && (\n                  <div class=\"alert\">{flash.message}</div>\n                )}\n                {children}\n              </content>\n              <footer></footer>\n            </main>\n          )\n        }\n      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <template>\n          <main>\n            <header></header>\n            <content>\n              <div v-if=\"$page.props.flash.message\" class=\"alert\">\n                {{ $page.props.flash.message }}\n              </div>\n              <slot />\n            </content>\n            <footer></footer>\n          </main>\n        </template>\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        class ApplicationController < ActionController::Base\n          inertia_share flash: -> {\n            {\n              message: flash.notice\n            }\n          }\n        end\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        class HandleInertiaRequests extends Middleware\n        {\n            public function share(Request $request)\n            {\n                return array_merge(parent::share($request), [\n                    'flash' => [\n                        'message' => fn () => $request->session()->get('message')\n                    ],\n                ]);\n            }\n        }\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <script>\n          import { inertia, page } from '@inertiajs/inertia-svelte'\n        </script>\n\n        <main>\n          <header>\n            <div>\u0412\u044B \u0432\u043E\u0448\u043B\u0438 \u043A\u0430\u043A: {$page.props.auth.user.name}</div>\n            <nav>\n              <a use:inertia href=\"/\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</a>\n              <a use:inertia href=\"/about\">\u041E \u043D\u0430\u0441</a>\n              <a use:inertia href=\"/contact\">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a>\n            </nav>\n          </header>\n          <content>\n            <slot />\n          </content>\n          <footer></footer>\n        </main>\n      "], ["\n        <script>\n          import { inertia, page } from '@inertiajs/inertia-svelte'\n        </script>\\n\n        <main>\n          <header>\n            <div>\u0412\u044B \u0432\u043E\u0448\u043B\u0438 \u043A\u0430\u043A: {$page.props.auth.user.name}</div>\n            <nav>\n              <a use:inertia href=\"/\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</a>\n              <a use:inertia href=\"/about\">\u041E \u043D\u0430\u0441</a>\n              <a use:inertia href=\"/contact\">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a>\n            </nav>\n          </header>\n          <content>\n            <slot />\n          </content>\n          <footer></footer>\n        </main>\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink, usePage } from '@inertiajs/inertia-react'\n\n        export default function Layout({ children }) {\n          const { auth } = usePage().props\n\n          return (\n            <main>\n              <header>\n                <div>\u0412\u044B \u0432\u043E\u0448\u043B\u0438 \u043A\u0430\u043A: {auth.user.name}</div>\n                <nav>\n                  <InertiaLink href=\"/\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</InertiaLink>\n                  <InertiaLink href=\"/about\">\u041E \u043D\u0430\u0441</InertiaLink>\n                  <InertiaLink href=\"/contact\">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</InertiaLink>\n                </nav>\n              </header>\n              <content>{children}</content>\n              <footer></footer>\n            </main>\n          )\n        }\n      "], ["\n        import { InertiaLink, usePage } from '@inertiajs/inertia-react'\\n\n        export default function Layout({ children }) {\n          const { auth } = usePage().props\\n\n          return (\n            <main>\n              <header>\n                <div>\u0412\u044B \u0432\u043E\u0448\u043B\u0438 \u043A\u0430\u043A: {auth.user.name}</div>\n                <nav>\n                  <InertiaLink href=\"/\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</InertiaLink>\n                  <InertiaLink href=\"/about\">\u041E \u043D\u0430\u0441</InertiaLink>\n                  <InertiaLink href=\"/contact\">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</InertiaLink>\n                </nav>\n              </header>\n              <content>{children}</content>\n              <footer></footer>\n            </main>\n          )\n        }\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <template>\n          <main>\n            <header>\n              <div>\u0412\u044B \u0432\u043E\u0448\u043B\u0438 \u043A\u0430\u043A: {{ user.name }}</div>\n              <nav>\n                <inertia-link href=\"/\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</inertia-link>\n                <inertia-link href=\"/about\">\u041E \u043D\u0430\u0441</inertia-link>\n                <inertia-link href=\"/contact\">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</inertia-link>\n              </nav>\n            </header>\n            <content>\n              <slot />\n            </content>\n            <footer></footer>\n          </main>\n        </template>\n\n        <script>\n          /*\n          |----------------------------------------------------------------\n          | Vue 3\n          |----------------------------------------------------------------\n          */\n\n          import { computed } from 'vue'\n          import { usePage } from '@inertiajs/inertia-vue3'\n\n          export default {\n            setup() {\n              const user = computed(() => usePage().props.value.auth.user)\n              return { user }\n            },\n          }\n\n          /*\n          |----------------------------------------------------------------\n          | Vue 2\n          |----------------------------------------------------------------\n          */\n\n          export default {\n            computed: {\n              user() {\n                return this.$page.props.auth.user\n              }\n            }\n          }\n        </script>\n      "], ["\n        <template>\n          <main>\n            <header>\n              <div>\u0412\u044B \u0432\u043E\u0448\u043B\u0438 \u043A\u0430\u043A: {{ user.name }}</div>\n              <nav>\n                <inertia-link href=\"/\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</inertia-link>\n                <inertia-link href=\"/about\">\u041E \u043D\u0430\u0441</inertia-link>\n                <inertia-link href=\"/contact\">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</inertia-link>\n              </nav>\n            </header>\n            <content>\n              <slot />\n            </content>\n            <footer></footer>\n          </main>\n        </template>\\n\n        <script>\n          /*\n          |----------------------------------------------------------------\n          | Vue 3\n          |----------------------------------------------------------------\n          */\\n\n          import { computed } from 'vue'\n          import { usePage } from '@inertiajs/inertia-vue3'\\n\n          export default {\n            setup() {\n              const user = computed(() => usePage().props.value.auth.user)\n              return { user }\n            },\n          }\\n\n          /*\n          |----------------------------------------------------------------\n          | Vue 2\n          |----------------------------------------------------------------\n          */\\n\n          export default {\n            computed: {\n              user() {\n                return this.$page.props.auth.user\n              }\n            }\n          }\n        </script>\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        # \u0421\u0438\u043D\u0445\u0440\u043E\u043D\u043D\u043E\n        inertia_share app_name: env['app.name']\n\n        # \u041E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u043E\n        inertia_share do\n          if logged_in?\n            {\n              'auth.user' => {id: logged_in_user.id}\n            }\n          end\n        end\n\n        # \u041E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u043E\n        inertia_share user_count: lambda { User.count }\n      "], ["\n        # \u0421\u0438\u043D\u0445\u0440\u043E\u043D\u043D\u043E\n        inertia_share app_name: env['app.name']\\n\n        # \u041E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u043E\n        inertia_share do\n          if logged_in?\n            {\n              'auth.user' => {id: logged_in_user.id}\n            }\n          end\n        end\\n\n        # \u041E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u043E\n        inertia_share user_count: lambda { User.count }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        /*\n        |----------------------------------------------------------------\n        | \u0427\u0435\u0440\u0435\u0437 \u043C\u0438\u0434\u043B\u0432\u0430\u0440 HandleInertiaRequests (\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F)\n        |----------------------------------------------------------------\n        */\n\n        class HandleInertiaRequests extends Middleware\n        {\n            public function share(Request $request)\n            {\n                return array_merge(parent::share($request), [\n\n                    // \u0421\u0438\u043D\u0445\u0440\u043E\u043D\u043D\u043E\n                    'appName' => config('app.name'),\n\n                    // \u041E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u043E\n                    'user' => fn () => $request->user()\n                        ? $request->user()->only('id', 'name', 'email')\n                        : null,\n                ]);\n            }\n        }\n\n        /*\n        |----------------------------------------------------------------\n        | Manually\n        |----------------------------------------------------------------\n        */\n\n        use Inertia\\Inertia;\n\n        // \u0421\u0438\u043D\u0445\u0440\u043E\u043D\u043D\u043E\n        Inertia::share('appName', config('app.name'));\n\n        // \u041E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u043E\n        Inertia::share('user', fn (Request $request) => $request->user()\n            ? $request->user()->only('id', 'name', 'email')\n            : null\n        );\n      "], ["\n        /*\n        |----------------------------------------------------------------\n        | \u0427\u0435\u0440\u0435\u0437 \u043C\u0438\u0434\u043B\u0432\u0430\u0440 HandleInertiaRequests (\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F)\n        |----------------------------------------------------------------\n        */\\n\n        class HandleInertiaRequests extends Middleware\n        {\n            public function share(Request $request)\n            {\n                return array_merge(parent::share($request), [\\n\n                    // \u0421\u0438\u043D\u0445\u0440\u043E\u043D\u043D\u043E\n                    'appName' => config('app.name'),\\n\n                    // \u041E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u043E\n                    'user' => fn () => $request->user()\n                        ? $request->user()->only('id', 'name', 'email')\n                        : null,\n                ]);\n            }\n        }\\n\n        /*\n        |----------------------------------------------------------------\n        | Manually\n        |----------------------------------------------------------------\n        */\\n\n        use Inertia\\\\Inertia;\\n\n        // \u0421\u0438\u043D\u0445\u0440\u043E\u043D\u043D\u043E\n        Inertia::share('appName', config('app.name'));\\n\n        // \u041E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u043E\n        Inertia::share('user', fn (Request $request) => $request->user()\n            ? $request->user()->only('id', 'name', 'email')\n            : null\n        );\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */






var meta = {
  title: 'Общие данные',
  links: [{
    url: '#top',
    name: 'Вступление'
  }, {
    url: '#обмен-данными',
    name: 'Обмен данными'
  }, {
    url: '#доступ-к-общим-данным',
    name: 'Доступ к общим данным'
  }, {
    url: '#быстрые-сообщения',
    name: 'Быстрые сообщения'
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
  }, "\u041E\u0431\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, "\u0418\u043D\u043E\u0433\u0434\u0430 \u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u043C \u0434\u0430\u043D\u043D\u044B\u043C \u043D\u0430 \u043C\u043D\u043E\u0433\u043E\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0445 \u0412\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u043E\u0431\u044B\u0447\u043D\u044B\u043C \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0432 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0435 \u0441\u0430\u0439\u0442\u0430. \u041F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044C \u044D\u0442\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u043E\u0442\u0432\u0435\u0442\u0435 \u043D\u0435\u0446\u0435\u043B\u0435\u0441\u043E\u043E\u0431\u0440\u0430\u0437\u043D\u043E. \u0412 \u044D\u0442\u0438\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044F\u0445 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u0435\u0437\u043D\u044B \u043E\u0431\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, "\u041E\u0431\u043C\u0435\u043D \u0434\u0430\u043D\u043D\u044B\u043C\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, "\u0410\u0434\u0430\u043F\u0442\u0435\u0440\u044B \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u0437\u0430\u0440\u0430\u043D\u0435\u0435 \u043D\u0430\u0437\u043D\u0430\u0447\u0430\u0442\u044C \u043E\u0431\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430. \u041E\u0431\u044B\u0447\u043D\u043E \u044D\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442\u0441\u044F \u0432\u043D\u0435 \u0412\u0430\u0448\u0438\u0445 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440\u043E\u0432. \u041E\u0431\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0431\u0443\u0434\u0443\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u044B \u0441 \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u0430\u043C\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u043C\u0438 \u0432 \u0412\u0430\u0448\u0435\u043C \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Laravel',
      language: 'php',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()),
      description: 'По промежуточного слоя HandleInertiaRequests предоставляет метод «совместного использования», в котором Вы можете определить данные, которые автоматически будут совместно использоваться с каждым ответом Inertia.'
    }, {
      name: 'Rails',
      language: 'ruby',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mdxType: "Notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u044D\u0442\u0443 \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u0441 \u043E\u0441\u0442\u043E\u0440\u043E\u0436\u043D\u043E\u0441\u0442\u044C\u044E, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u043E\u0431\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432\u043A\u043B\u044E\u0447\u0430\u044E\u0442\u0441\u044F \u0432 \u043A\u0430\u0436\u0434\u044B\u0439 \u043E\u0442\u0432\u0435\u0442."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mdxType: "Notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, "\u0420\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0438 \u043E\u0431\u0449\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u044E\u0442\u0441\u044F \u0432\u043C\u0435\u0441\u0442\u0435, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E \u0438\u043C\u0435\u043D \u0434\u043B\u044F \u043E\u0431\u0449\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, "\u0414\u043E\u0441\u0442\u0443\u043F \u043A \u043E\u0431\u0449\u0438\u043C \u0434\u0430\u043D\u043D\u044B\u043C"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0441\u043B\u0435 \u0442\u043E\u0433\u043E, \u043A\u0430\u043A \u0412\u044B \u043F\u043E\u0434\u0435\u043B\u0438\u043B\u0438\u0441\u044C \u0434\u0430\u043D\u043D\u044B\u043C\u0438 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0412\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A \u043D\u0435\u043C\u0443 \u0434\u043E\u0441\u0442\u0443\u043F \u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u0445 \u0441\u0432\u043E\u0435\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0441\u0432\u043E\u0439\u0441\u0442\u0432. \u0414\u043E\u0441\u0442\u0443\u043F \u043A \u043E\u0431\u0449\u0438\u043C \u0434\u0430\u043D\u043D\u044B\u043C \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0430\u0436\u0435 \u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u0445, \u043D\u0435 \u043E\u0442\u043D\u043E\u0441\u044F\u0449\u0438\u0445\u0441\u044F \u043A \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435, \u043D\u043E \u043D\u0435 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u0430 \u0432 \u044D\u0442\u0438\u0445 \u0441\u043B\u0443\u0447\u0430\u044F\u0445. \u0412\u043E\u0442 \u043F\u0440\u0438\u043C\u0435\u0440 \u0442\u043E\u0433\u043E, \u043A\u0430\u043A \u044D\u0442\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0435 \u043C\u0430\u043A\u0435\u0442\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      description: 'Доступ к общим данным можно получить с помощью свойства $page или хука usePage().',
      language: 'twig',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3())
    }, {
      name: 'React',
      description: 'Access shared data using the usePage() hook.',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject4())
    }, {
      name: 'Svelte',
      description: 'Access shared data using the $page store.',
      language: 'html',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject5())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 5
    }
  }, "\u0411\u044B\u0441\u0442\u0440\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 5
    }
  }, "\u0415\u0449\u0435 \u043E\u0434\u0438\u043D \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043E\u0431\u0449\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 - \u044D\u0442\u043E \u0444\u043B\u044D\u0448-\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F. \u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F, \u0445\u0440\u0430\u043D\u044F\u0449\u0438\u0435\u0441\u044F \u0432 \u0441\u0435\u0430\u043D\u0441\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430. \u0412\u044B \u0447\u0430\u0441\u0442\u043E \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442\u0435 \u0444\u043B\u044D\u0448-\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u0438 \u0438 \u043F\u0435\u0440\u0435\u0434 \u043F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u043D\u0430 \u0434\u0440\u0443\u0433\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 5
    }
  }, "\u0412\u043E\u0442 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u0441\u043F\u043E\u0441\u043E\u0431 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u0444\u043B\u044D\u0448-\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u0432 \u0412\u0430\u0448\u0438\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u0445 Inertia. \u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u043E\u0434\u0435\u043B\u0438\u0442\u0435\u0441\u044C \u0444\u043B\u044D\u0448-\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435\u043C \u043F\u043E \u043A\u0430\u0436\u0434\u043E\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441\u0443."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Laravel',
      language: 'php',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject6())
    }, {
      name: 'Rails',
      language: 'ruby',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject7())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 5
    }
  }, "\u0417\u0430\u0442\u0435\u043C \u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u0435 \u0444\u043B\u044D\u0448-\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0432\u043E \u0432\u043D\u0435\u0448\u043D\u0435\u043C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0435, \u0442\u0430\u043A\u043E\u043C \u043A\u0430\u043A \u043C\u0430\u043A\u0435\u0442 \u0441\u0430\u0439\u0442\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'twig',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject8())
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject9())
    }, {
      name: 'Svelte',
      language: 'html',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject10())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hhcmVkLWRhdGEubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImRlc2NyaXB0aW9uIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1BLElBQUksR0FBRztBQUNsQkMsT0FBSyxFQUFFLGNBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxNQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsZ0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FISSxFQU1KO0FBQ0RELE9BQUcsRUFBRSx3QkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQU5JLEVBU0o7QUFDREQsT0FBRyxFQUFFLG9CQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBVEk7QUFGVyxDQUFiO0FBaUJQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNB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QUc3QkMsVUFBSSxFQUFFQyxnREFBRjtBQUh5QixLQUFELEVBaUIzQjtBQUNEVCxVQUFJLEVBQUUsT0FETDtBQUVETyxjQUFRLEVBQUUsS0FGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0FqQjJCLEVBc0MzQjtBQUNEVCxVQUFJLEVBQUUsUUFETDtBQUVETyxjQUFRLEVBQUUsTUFGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0F0QzJCLENBQTlCO0FBd0RJLFdBQU8sRUFBQyxvQkF4RFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRNSyxDQUFQO0FBZ1FEO0tBcFF1QkwsVTtBQXNReEI7QUFDQUEsVUFBVSxDQUFDTyxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NoYXJlZC1kYXRhLmRjYjAzZTZlNmE1MmU1Y2FkN2VmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTm90aWNlIGZyb20gJy4uL2NvbXBvbmVudHMvTm90aWNlJ1xuaW1wb3J0IFRhYmJlZENvZGVFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJlZENvZGVFeGFtcGxlcydcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9Ce0LHRidC40LUg0LTQsNC90L3Ri9C1JyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI3RvcCcsXG4gICAgbmFtZTogJ9CS0YHRgtGD0L/Qu9C10L3QuNC1J1xuICB9LCB7XG4gICAgdXJsOiAnI9C+0LHQvNC10L0t0LTQsNC90L3Ri9C80LgnLFxuICAgIG5hbWU6ICfQntCx0LzQtdC9INC00LDQvdC90YvQvNC4J1xuICB9LCB7XG4gICAgdXJsOiAnI9C00L7RgdGC0YPQvy3Qui3QvtCx0YnQuNC8LdC00LDQvdC90YvQvCcsXG4gICAgbmFtZTogJ9CU0L7RgdGC0YPQvyDQuiDQvtCx0YnQuNC8INC00LDQvdC90YvQvCdcbiAgfSwge1xuICAgIHVybDogJyPQsdGL0YHRgtGA0YvQtS3RgdC+0L7QsdGJ0LXQvdC40Y8nLFxuICAgIG5hbWU6ICfQkdGL0YHRgtGA0YvQtSDRgdC+0L7QsdGJ0LXQvdC40Y8nXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQntCx0YnQuNC1INC00LDQvdC90YvQtWB9PC9oMT5cbiAgICA8cD57YNCY0L3QvtCz0LTQsCDQktCw0Lwg0L3Rg9C20L3QviDQv9C+0LvRg9GH0LjRgtGMINC00L7RgdGC0YPQvyDQuiDQvtC/0YDQtdC00LXQu9C10L3QvdGL0Lwg0LTQsNC90L3Ri9C8INC90LAg0LzQvdC+0LPQvtGH0LjRgdC70LXQvdC90YvRhSDRgdGC0YDQsNC90LjRhtCw0YUg0JLQsNGI0LXQs9C+INC/0YDQuNC70L7QttC10L3QuNGPLiDQndCw0L/RgNC40LzQtdGALCDQvtCx0YvRh9C90YvQvCDQstCw0YDQuNCw0L3RgtC+0Lwg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8g0LTQu9GPINGN0YLQvtCz0L4g0Y/QstC70Y/QtdGC0YHRjyDQvtGC0L7QsdGA0LDQttC10L3QuNC1INGC0LXQutGD0YnQtdCz0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINCyINC30LDQs9C+0LvQvtCy0LrQtSDRgdCw0LnRgtCwLiDQn9C10YDQtdC00LDQstCw0YLRjCDRjdGC0Lgg0LTQsNC90L3Ri9C1INCy0YDRg9GH0L3Rg9GOINCyINC60LDQttC00L7QvCDQvtGC0LLQtdGC0LUg0L3QtdGG0LXQu9C10YHQvtC+0LHRgNCw0LfQvdC+LiDQkiDRjdGC0LjRhSDRgdC40YLRg9Cw0YbQuNGP0YUg0LzQvtCz0YPRgiDQsdGL0YLRjCDQv9C+0LvQtdC30L3RiyDQvtCx0YnQuNC1INC00LDQvdC90YvQtS5gfTwvcD5cbiAgICA8aDI+e2DQntCx0LzQtdC9INC00LDQvdC90YvQvNC4YH08L2gyPlxuICAgIDxwPntg0JDQtNCw0L/RgtC10YDRiyDQvdCwINGB0YLQvtGA0L7QvdC1INGB0LXRgNCy0LXRgNCwINC/0L7Qt9Cy0L7Qu9GP0Y7RgiDQt9Cw0YDQsNC90LXQtSDQvdCw0LfQvdCw0YfQsNGC0Ywg0L7QsdGJ0LjQtSDQtNCw0L3QvdGL0LUg0LTQu9GPINC60LDQttC00L7Qs9C+INC30LDQv9GA0L7RgdCwLiDQntCx0YvRh9C90L4g0Y3RgtC+INC00LXQu9Cw0LXRgtGB0Y8g0LLQvdC1INCS0LDRiNC40YUg0LrQvtC90YLRgNC+0LvQu9C10YDQvtCyLiDQntCx0YnQuNC1INC00LDQvdC90YvQtSDQsdGD0LTRg9GCINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INC+0LHRitC10LTQuNC90LXQvdGLINGBINGA0LXQutCy0LjQt9C40YLQsNC80Lgg0YHRgtGA0LDQvdC40YbRiywg0L/RgNC10LTQvtGB0YLQsNCy0LvQtdC90L3Ri9C80Lgg0LIg0JLQsNGI0LXQvCDQutC+0L3RgtGA0L7Qu9C70LXRgNC1LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3BocCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIC8qXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHwg0KfQtdGA0LXQtyDQvNC40LTQu9Cy0LDRgCBIYW5kbGVJbmVydGlhUmVxdWVzdHMgKNGA0LXQutC+0LzQtdC90LTRg9C10YLRgdGPKVxuICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAqL1xcblxuICAgICAgICBjbGFzcyBIYW5kbGVJbmVydGlhUmVxdWVzdHMgZXh0ZW5kcyBNaWRkbGV3YXJlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHB1YmxpYyBmdW5jdGlvbiBzaGFyZShSZXF1ZXN0ICRyZXF1ZXN0KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheV9tZXJnZShwYXJlbnQ6OnNoYXJlKCRyZXF1ZXN0KSwgW1xcblxuICAgICAgICAgICAgICAgICAgICAvLyDQodC40L3RhdGA0L7QvdC90L5cbiAgICAgICAgICAgICAgICAgICAgJ2FwcE5hbWUnID0+IGNvbmZpZygnYXBwLm5hbWUnKSxcXG5cbiAgICAgICAgICAgICAgICAgICAgLy8g0J7RgtC70L7QttC10L3QvdC+XG4gICAgICAgICAgICAgICAgICAgICd1c2VyJyA9PiBmbiAoKSA9PiAkcmVxdWVzdC0+dXNlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICRyZXF1ZXN0LT51c2VyKCktPm9ubHkoJ2lkJywgJ25hbWUnLCAnZW1haWwnKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XFxuXG4gICAgICAgIC8qXG4gICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHwgTWFudWFsbHlcbiAgICAgICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgKi9cXG5cbiAgICAgICAgdXNlIEluZXJ0aWFcXFxcSW5lcnRpYTtcXG5cbiAgICAgICAgLy8g0KHQuNC90YXRgNC+0L3QvdC+XG4gICAgICAgIEluZXJ0aWE6OnNoYXJlKCdhcHBOYW1lJywgY29uZmlnKCdhcHAubmFtZScpKTtcXG5cbiAgICAgICAgLy8g0J7RgtC70L7QttC10L3QvdC+XG4gICAgICAgIEluZXJ0aWE6OnNoYXJlKCd1c2VyJywgZm4gKFJlcXVlc3QgJHJlcXVlc3QpID0+ICRyZXF1ZXN0LT51c2VyKClcbiAgICAgICAgICAgID8gJHJlcXVlc3QtPnVzZXIoKS0+b25seSgnaWQnLCAnbmFtZScsICdlbWFpbCcpXG4gICAgICAgICAgICA6IG51bGxcbiAgICAgICAgKTtcbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogJ9Cf0L4g0L/RgNC+0LzQtdC20YPRgtC+0YfQvdC+0LPQviDRgdC70L7RjyBIYW5kbGVJbmVydGlhUmVxdWVzdHMg0L/RgNC10LTQvtGB0YLQsNCy0LvRj9C10YIg0LzQtdGC0L7QtCDCq9GB0L7QstC80LXRgdGC0L3QvtCz0L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y/Cuywg0LIg0LrQvtGC0L7RgNC+0Lwg0JLRiyDQvNC+0LbQtdGC0LUg0L7Qv9GA0LXQtNC10LvQuNGC0Ywg0LTQsNC90L3Ri9C1LCDQutC+0YLQvtGA0YvQtSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQsdGD0LTRg9GCINGB0L7QstC80LXRgdGC0L3QviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YzRgdGPINGBINC60LDQttC00YvQvCDQvtGC0LLQtdGC0L7QvCBJbmVydGlhLidcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmFpbHMnLFxuICAgICAgbGFuZ3VhZ2U6ICdydWJ5JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgIyDQodC40L3RhdGA0L7QvdC90L5cbiAgICAgICAgaW5lcnRpYV9zaGFyZSBhcHBfbmFtZTogZW52WydhcHAubmFtZSddXFxuXG4gICAgICAgICMg0J7RgtC70L7QttC10L3QvdC+XG4gICAgICAgIGluZXJ0aWFfc2hhcmUgZG9cbiAgICAgICAgICBpZiBsb2dnZWRfaW4/XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICdhdXRoLnVzZXInID0+IHtpZDogbG9nZ2VkX2luX3VzZXIuaWR9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgZW5kXG4gICAgICAgIGVuZFxcblxuICAgICAgICAjINCe0YLQu9C+0LbQtdC90L3QvlxuICAgICAgICBpbmVydGlhX3NoYXJlIHVzZXJfY291bnQ6IGxhbWJkYSB7IFVzZXIuY291bnQgfVxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8Tm90aWNlIG1keFR5cGU9XCJOb3RpY2VcIj7QmNGB0L/QvtC70YzQt9GD0LnRgtC1INGN0YLRgyDRhNGD0L3QutGG0LjRjiDRgSDQvtGB0YLQvtGA0L7QttC90L7RgdGC0YzRjiwg0L/QvtGB0LrQvtC70YzQutGDINC+0LHRidC40LUg0LTQsNC90L3Ri9C1INCy0LrQu9GO0YfQsNGO0YLRgdGPINCyINC60LDQttC00YvQuSDQvtGC0LLQtdGCLjwvTm90aWNlPlxuICAgIDxOb3RpY2UgbWR4VHlwZT1cIk5vdGljZVwiPtCg0LXQutCy0LjQt9C40YLRiyDRgdGC0YDQsNC90LjRhtGLINC4INC+0LHRidC40LUg0LTQsNC90L3Ri9C1INC+0LHRitC10LTQuNC90Y/RjtGC0YHRjyDQstC80LXRgdGC0LUsINC/0L7RjdGC0L7QvNGDINC90LUg0LfQsNCx0YPQtNGM0YLQtSDQv9GA0LDQstC40LvRjNC90L4g0YPQutCw0LfQsNGC0Ywg0L/RgNC+0YHRgtGA0LDQvdGB0YLQstC+INC40LzQtdC9INC00LvRjyDQvtCx0YnQuNGFINC00LDQvdC90YvRhS48L05vdGljZT5cbiAgICA8aDI+e2DQlNC+0YHRgtGD0L8g0Log0L7QsdGJ0LjQvCDQtNCw0L3QvdGL0LxgfTwvaDI+XG4gICAgPHA+e2DQn9C+0YHQu9C1INGC0L7Qs9C+LCDQutCw0Log0JLRiyDQv9C+0LTQtdC70LjQu9C40YHRjCDQtNCw0L3QvdGL0LzQuCDQvdCwINGB0YLQvtGA0L7QvdC1INGB0LXRgNCy0LXRgNCwLCDQktGLINGB0LzQvtC20LXRgtC1INC/0L7Qu9GD0YfQuNGC0Ywg0Log0L3QtdC80YMg0LTQvtGB0YLRg9C/INCyINC60L7QvNC/0L7QvdC10L3RgtCw0YUg0YHQstC+0LXQuSDRgdGC0YDQsNC90LjRhtGLINCyINC60LDRh9C10YHRgtCy0LUg0YHQstC+0LnRgdGC0LIuINCU0L7RgdGC0YPQvyDQuiDQvtCx0YnQuNC8INC00LDQvdC90YvQvCDQvNC+0LbQvdC+INC/0L7Qu9GD0YfQuNGC0Ywg0LTQsNC20LUg0LIg0LrQvtC80L/QvtC90LXQvdGC0LDRhSwg0L3QtSDQvtGC0L3QvtGB0Y/RidC40YXRgdGPINC6INGB0YLRgNCw0L3QuNGG0LUsINC90L4g0L3QtSDQsiDQutCw0YfQtdGB0YLQstC1INGA0LXQutCy0LjQt9C40YLQsCDQsiDRjdGC0LjRhSDRgdC70YPRh9Cw0Y/RhS4g0JLQvtGCINC/0YDQuNC80LXRgCDRgtC+0LPQviwg0LrQsNC6INGN0YLQviDRgdC00LXQu9Cw0YLRjCDQsiDQutC+0LzQv9C+0L3QtdC90YLQtSDQvNCw0LrQtdGC0LAuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgZGVzY3JpcHRpb246ICfQlNC+0YHRgtGD0L8g0Log0L7QsdGJ0LjQvCDQtNCw0L3QvdGL0Lwg0LzQvtC20L3QviDQv9C+0LvRg9GH0LjRgtGMINGBINC/0L7QvNC+0YnRjNGOINGB0LLQvtC50YHRgtCy0LAgJHBhZ2Ug0LjQu9C4INGF0YPQutCwIHVzZVBhZ2UoKS4nLFxuICAgICAgbGFuZ3VhZ2U6ICd0d2lnJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgPGRpdj7QktGLINCy0L7RiNC70Lgg0LrQsNC6OiB7eyB1c2VyLm5hbWUgfX08L2Rpdj5cbiAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICA8aW5lcnRpYS1saW5rIGhyZWY9XCIvXCI+0JPQu9Cw0LLQvdCw0Y88L2luZXJ0aWEtbGluaz5cbiAgICAgICAgICAgICAgICA8aW5lcnRpYS1saW5rIGhyZWY9XCIvYWJvdXRcIj7QniDQvdCw0YE8L2luZXJ0aWEtbGluaz5cbiAgICAgICAgICAgICAgICA8aW5lcnRpYS1saW5rIGhyZWY9XCIvY29udGFjdFwiPtCa0L7QvdGC0LDQutGC0Ys8L2luZXJ0aWEtbGluaz5cbiAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDxjb250ZW50PlxuICAgICAgICAgICAgICA8c2xvdCAvPlxuICAgICAgICAgICAgPC9jb250ZW50PlxuICAgICAgICAgICAgPGZvb3Rlcj48L2Zvb3Rlcj5cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvdGVtcGxhdGU+XFxuXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgLypcbiAgICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgIHwgVnVlIDNcbiAgICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICovXFxuXG4gICAgICAgICAgaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG4gICAgICAgICAgaW1wb3J0IHsgdXNlUGFnZSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS12dWUzJ1xcblxuICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgICAgIHNldHVwKCkge1xuICAgICAgICAgICAgICBjb25zdCB1c2VyID0gY29tcHV0ZWQoKCkgPT4gdXNlUGFnZSgpLnByb3BzLnZhbHVlLmF1dGgudXNlcilcbiAgICAgICAgICAgICAgcmV0dXJuIHsgdXNlciB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cXG5cbiAgICAgICAgICAvKlxuICAgICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgfCBWdWUgMlxuICAgICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgKi9cXG5cbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgICB1c2VyKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRwYWdlLnByb3BzLmF1dGgudXNlclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICA8L3NjcmlwdD5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgZGVzY3JpcHRpb246ICdBY2Nlc3Mgc2hhcmVkIGRhdGEgdXNpbmcgdGhlIHVzZVBhZ2UoKSBob29rLicsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWFMaW5rLCB1c2VQYWdlIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xcblxuICAgICAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gICAgICAgICAgY29uc3QgeyBhdXRoIH0gPSB1c2VQYWdlKCkucHJvcHNcXG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdj7QktGLINCy0L7RiNC70Lgg0LrQsNC6OiB7YXV0aC51c2VyLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL1wiPtCT0LvQsNCy0L3QsNGPPC9JbmVydGlhTGluaz5cbiAgICAgICAgICAgICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL2Fib3V0XCI+0J4g0L3QsNGBPC9JbmVydGlhTGluaz5cbiAgICAgICAgICAgICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL2NvbnRhY3RcIj7QmtC+0L3RgtCw0LrRgtGLPC9JbmVydGlhTGluaz5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgIDxjb250ZW50PntjaGlsZHJlbn08L2NvbnRlbnQ+XG4gICAgICAgICAgICAgIDxmb290ZXI+PC9mb290ZXI+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FjY2VzcyBzaGFyZWQgZGF0YSB1c2luZyB0aGUgJHBhZ2Ugc3RvcmUuJyxcbiAgICAgIGxhbmd1YWdlOiAnaHRtbCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgaW1wb3J0IHsgaW5lcnRpYSwgcGFnZSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1zdmVsdGUnXG4gICAgICAgIDwvc2NyaXB0PlxcblxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGRpdj7QktGLINCy0L7RiNC70Lgg0LrQsNC6OiB7JHBhZ2UucHJvcHMuYXV0aC51c2VyLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICA8YSB1c2U6aW5lcnRpYSBocmVmPVwiL1wiPtCT0LvQsNCy0L3QsNGPPC9hPlxuICAgICAgICAgICAgICA8YSB1c2U6aW5lcnRpYSBocmVmPVwiL2Fib3V0XCI+0J4g0L3QsNGBPC9hPlxuICAgICAgICAgICAgICA8YSB1c2U6aW5lcnRpYSBocmVmPVwiL2NvbnRhY3RcIj7QmtC+0L3RgtCw0LrRgtGLPC9hPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgPGNvbnRlbnQ+XG4gICAgICAgICAgICA8c2xvdCAvPlxuICAgICAgICAgIDwvY29udGVudD5cbiAgICAgICAgICA8Zm9vdGVyPjwvZm9vdGVyPlxuICAgICAgICA8L21haW4+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCR0YvRgdGC0YDRi9C1INGB0L7QvtCx0YnQtdC90LjRj2B9PC9oMj5cbiAgICA8cD57YNCV0YnQtSDQvtC00LjQvSDQvtGC0LvQuNGH0L3Ri9C5INCy0LDRgNC40LDQvdGCINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNGPINC+0LHRidC40YUg0LTQsNC90L3Ri9GFIC0g0Y3RgtC+INGE0LvRjdGILdGB0L7QvtCx0YnQtdC90LjRjy4g0K3RgtC+INGB0L7QvtCx0YnQtdC90LjRjywg0YXRgNCw0L3Rj9GJ0LjQtdGB0Y8g0LIg0YHQtdCw0L3RgdC1INGC0L7Qu9GM0LrQviDQtNC70Y8g0YHQu9C10LTRg9GO0YnQtdCz0L4g0LfQsNC/0YDQvtGB0LAuINCS0Ysg0YfQsNGB0YLQviDRg9GB0YLQsNC90LDQstC70LjQstCw0LXRgtC1INGE0LvRjdGILdGB0L7QvtCx0YnQtdC90LjQtSDQv9C+0YHQu9C1INC30LDQstC10YDRiNC10L3QuNGPINC30LDQtNCw0YfQuCDQuCDQv9C10YDQtdC0INC/0LXRgNC10L3QsNC/0YDQsNCy0LvQtdC90LjQtdC8INC90LAg0LTRgNGD0LPRg9GOINGB0YLRgNCw0L3QuNGG0YMuYH08L3A+XG4gICAgPHA+e2DQktC+0YIg0L/RgNC+0YHRgtC+0Lkg0YHQv9C+0YHQvtCxINGA0LXQsNC70LjQt9C+0LLQsNGC0Ywg0YTQu9GN0Ygt0YHQvtC+0LHRidC10L3QuNGPINCyINCS0LDRiNC40YUg0L/RgNC40LvQvtC20LXQvdC40Y/RhSBJbmVydGlhLiDQodC90LDRh9Cw0LvQsCDQv9C+0LTQtdC70LjRgtC10YHRjCDRhNC70Y3RiC3RgdC+0L7QsdGJ0LXQvdC40LXQvCDQv9C+INC60LDQttC00L7QvNGDINC30LDQv9GA0L7RgdGDLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnTGFyYXZlbCcsXG4gICAgICBsYW5ndWFnZTogJ3BocCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGNsYXNzIEhhbmRsZUluZXJ0aWFSZXF1ZXN0cyBleHRlbmRzIE1pZGRsZXdhcmVcbiAgICAgICAge1xuICAgICAgICAgICAgcHVibGljIGZ1bmN0aW9uIHNoYXJlKFJlcXVlc3QgJHJlcXVlc3QpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5X21lcmdlKHBhcmVudDo6c2hhcmUoJHJlcXVlc3QpLCBbXG4gICAgICAgICAgICAgICAgICAgICdmbGFzaCcgPT4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ21lc3NhZ2UnID0+IGZuICgpID0+ICRyZXF1ZXN0LT5zZXNzaW9uKCktPmdldCgnbWVzc2FnZScpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmFpbHMnLFxuICAgICAgbGFuZ3VhZ2U6ICdydWJ5JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgY2xhc3MgQXBwbGljYXRpb25Db250cm9sbGVyIDwgQWN0aW9uQ29udHJvbGxlcjo6QmFzZVxuICAgICAgICAgIGluZXJ0aWFfc2hhcmUgZmxhc2g6IC0+IHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogZmxhc2gubm90aWNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBlbmRcbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2DQl9Cw0YLQtdC8INC+0YLQvtCx0YDQsNC30LjRgtC1INGE0LvRjdGILdGB0L7QvtCx0YnQtdC90LjQtSDQstC+INCy0L3QtdGI0L3QtdC8INC60L7QvNC/0L7QvdC10L3RgtC1LCDRgtCw0LrQvtC8INC60LDQuiDQvNCw0LrQtdGCINGB0LDQudGC0LAuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICd0d2lnJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPGhlYWRlcj48L2hlYWRlcj5cbiAgICAgICAgICAgIDxjb250ZW50PlxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIkcGFnZS5wcm9wcy5mbGFzaC5tZXNzYWdlXCIgY2xhc3M9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgIHt7ICRwYWdlLnByb3BzLmZsYXNoLm1lc3NhZ2UgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzbG90IC8+XG4gICAgICAgICAgICA8L2NvbnRlbnQ+XG4gICAgICAgICAgICA8Zm9vdGVyPjwvZm9vdGVyPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyB1c2VQYWdlIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xcblxuICAgICAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gICAgICAgICAgY29uc3QgeyBmbGFzaCB9ID0gdXNlUGFnZSgpLnByb3BzXFxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICA8aGVhZGVyPjwvaGVhZGVyPlxuICAgICAgICAgICAgICA8Y29udGVudD5cbiAgICAgICAgICAgICAgICB7Zmxhc2gubWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnRcIj57Zmxhc2gubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9jb250ZW50PlxuICAgICAgICAgICAgICA8Zm9vdGVyPjwvZm9vdGVyPlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdodG1sJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICBpbXBvcnQgeyBwYWdlIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcbiAgICAgICAgPC9zY3JpcHQ+XFxuXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxoZWFkZXI+PC9oZWFkZXI+XG4gICAgICAgICAgPGNvbnRlbnQ+XG4gICAgICAgICAgICB7I2lmICRwYWdlLnByb3BzLmZsYXNoLm1lc3NhZ2V9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydFwiPnskcGFnZS5wcm9wcy5mbGFzaC5tZXNzYWdlfTwvZGl2PlxuICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgIDxzbG90IC8+XG4gICAgICAgICAgPC9jb250ZW50PlxuICAgICAgICAgIDxmb290ZXI+PC9mb290ZXI+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9