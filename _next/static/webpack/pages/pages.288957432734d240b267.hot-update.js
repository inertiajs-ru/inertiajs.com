webpackHotUpdate_N_E("pages/pages",{

/***/ "./pages/pages.mdx":
/*!*************************!*\
  !*** ./pages/pages.mdx ***!
  \*************************/
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



var _jsxFileName = "C:\\OSPanel\\projects\\inertiajs.com\\pages\\pages.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject15() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <script context=\"module\">\n          import Layout from './Layout.svelte'\n          export const layout = Layout\n        </script>\n\n        <script>\n          export let user\n        </script>\n\n        <svelte:head>\n            <title>Welcome {user.name}</title>\n        </svelte:head>\n\n        <h1>Welcome</h1>\n        <p>Hello {user.name}, welcome to your first Inertia app!</p>\n      "], ["\n        <script context=\"module\">\n          import Layout from './Layout.svelte'\n          export const layout = Layout\n        </script>\\n\n        <script>\n          export let user\n        </script>\\n\n        <svelte:head>\n            <title>Welcome {user.name}</title>\n        </svelte:head>\\n\n        <h1>Welcome</h1>\n        <p>Hello {user.name}, welcome to your first Inertia app!</p>\n      "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import React from 'react'\n        import Layout from './Layout'\n        import {Helmet} from \"react-helmet\"\n\n        export default function Welcome({ user }) {\n          return (\n            <Layout>\n              <Helmet>\n                <title>Welcome {user.name}</title>\n              </Helmet>\n              <h1>Welcome</h1>\n              <p>Hello {user.name}, welcome to your first Inertia app!</p>\n            </Layout>\n          )\n        }\n      "], ["\n        import React from 'react'\n        import Layout from './Layout'\n        import {Helmet} from \"react-helmet\"\\n\n        export default function Welcome({ user }) {\n          return (\n            <Layout>\n              <Helmet>\n                <title>Welcome {user.name}</title>\n              </Helmet>\n              <h1>Welcome</h1>\n              <p>Hello {user.name}, welcome to your first Inertia app!</p>\n            </Layout>\n          )\n        }\n      "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <template>\n          <layout>\n            <h1>Welcome</h1>\n            <p>Hello {{ user.name }}, welcome to your first Inertia app!</p>\n          </layout>\n        </template>\n\n        <script>\n          import Layout from './Layout'\n\n          export default {\n            metaInfo() {\n              return {\n                title: `Welcome ${this.user.name}`,\n              }\n            },\n            components: {\n              Layout,\n            },\n            props: {\n              user: Object,\n            },\n          }\n        </script>\n      "], ["\n        <template>\n          <layout>\n            <h1>Welcome</h1>\n            <p>Hello {{ user.name }}, welcome to your first Inertia app!</p>\n          </layout>\n        </template>\\n\n        <script>\n          import Layout from './Layout'\\n\n          export default {\n            metaInfo() {\n              return {\n                title: \\`Welcome \\${this.user.name}\\`,\n              }\n            },\n            components: {\n              Layout,\n            },\n            props: {\n              user: Object,\n            },\n          }\n        </script>\n      "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <script context=\"module\">\n          import SiteLayout from './SiteLayout.svelte'\n          import NestedLayout from './NestedLayout.svelte'\n          export const layout = [SiteLayout, NestedLayout]\n        </script>\n\n        <script>\n          export let user\n        </script>\n\n        <h1>Welcome</h1>\n        <p>Hello {user.name}, welcome to your first Inertia app!</p>\n      "], ["\n        <script context=\"module\">\n          import SiteLayout from './SiteLayout.svelte'\n          import NestedLayout from './NestedLayout.svelte'\n          export const layout = [SiteLayout, NestedLayout]\n        </script>\\n\n        <script>\n          export let user\n        </script>\\n\n        <h1>Welcome</h1>\n        <p>Hello {user.name}, welcome to your first Inertia app!</p>\n      "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import React from 'react'\n        import SiteLayout from './SiteLayout'\n        import NestedLayout from './NestedLayout'\n\n        const Home = ({ user }) => {\n          return (\n            <>\n              <h1>Welcome</h1>\n              <p>Hello {user.name}, welcome to your first Inertia app!</p>\n            </>\n          )\n        }\n\n        Home.layout = page => (\n          <SiteLayout title=\"Welcome\">\n            <NestedLayout children={page} />\n          </SiteLayout>\n        )\n\n        export default Home\n      "], ["\n        import React from 'react'\n        import SiteLayout from './SiteLayout'\n        import NestedLayout from './NestedLayout'\\n\n        const Home = ({ user }) => {\n          return (\n            <>\n              <h1>Welcome</h1>\n              <p>Hello {user.name}, welcome to your first Inertia app!</p>\n            </>\n          )\n        }\\n\n        Home.layout = page => (\n          <SiteLayout title=\"Welcome\">\n            <NestedLayout children={page} />\n          </SiteLayout>\n        )\\n\n        export default Home\n      "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <template>\n          <div>\n            <h1>Welcome</h1>\n            <p>Hello {{ user.name }}, welcome to your first Inertia app!</p>\n          </div>\n        </template>\n\n        <script>\n          import SiteLayout from './SiteLayout'\n          import NestedLayout from './NestedLayout'\n\n          export default {\n            // Using a render function\n            layout: (h, page) => {\n              return h(SiteLayout, [\n                h(NestedLayout, [page]),\n              ])\n            },\n\n            // Using the shorthand\n            layout: [SiteLayout, NestedLayout],\n\n            props: {\n              user: Object,\n            },\n          }\n        </script>\n      "], ["\n        <template>\n          <div>\n            <h1>Welcome</h1>\n            <p>Hello {{ user.name }}, welcome to your first Inertia app!</p>\n          </div>\n        </template>\\n\n        <script>\n          import SiteLayout from './SiteLayout'\n          import NestedLayout from './NestedLayout'\\n\n          export default {\n            // Using a render function\n            layout: (h, page) => {\n              return h(SiteLayout, [\n                h(NestedLayout, [page]),\n              ])\n            },\\n\n            // Using the shorthand\n            layout: [SiteLayout, NestedLayout],\\n\n            props: {\n              user: Object,\n            },\n          }\n        </script>\n      "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <script context=\"module\">\n          import Layout from './Layout.svelte'\n          export const layout = Layout\n        </script>\n\n        <script>\n          export let user\n        </script>\n\n        <h1>Welcome</h1>\n        <p>Hello {user.name}, welcome to your first Inertia app!</p>\n      "], ["\n        <script context=\"module\">\n          import Layout from './Layout.svelte'\n          export const layout = Layout\n        </script>\\n\n        <script>\n          export let user\n        </script>\\n\n        <h1>Welcome</h1>\n        <p>Hello {user.name}, welcome to your first Inertia app!</p>\n      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import React from 'react'\n        import Layout from './Layout'\n\n        const Home = ({ user }) => {\n          return (\n            <>\n              <h1>Welcome</h1>\n              <p>Hello {user.name}, welcome to your first Inertia app!</p>\n            </>\n          )\n        }\n\n        Home.layout = page => <Layout children={page} title=\"Welcome\" />\n\n        export default Home\n      "], ["\n        import React from 'react'\n        import Layout from './Layout'\\n\n        const Home = ({ user }) => {\n          return (\n            <>\n              <h1>Welcome</h1>\n              <p>Hello {user.name}, welcome to your first Inertia app!</p>\n            </>\n          )\n        }\\n\n        Home.layout = page => <Layout children={page} title=\"Welcome\" />\\n\n        export default Home\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <template>\n          <div>\n            <h1>Welcome</h1>\n            <p>Hello {{ user.name }}, welcome to your first Inertia app!</p>\n          </div>\n        </template>\n\n        <script>\n          import Layout from './Layout'\n\n          export default {\n            // Using a render function\n            layout: (h, page) => h(Layout, [page]),\n\n            // Using the shorthand\n            layout: Layout,\n\n            props: {\n              user: Object,\n            },\n          }\n        </script>\n      "], ["\n        <template>\n          <div>\n            <h1>Welcome</h1>\n            <p>Hello {{ user.name }}, welcome to your first Inertia app!</p>\n          </div>\n        </template>\\n\n        <script>\n          import Layout from './Layout'\\n\n          export default {\n            // Using a render function\n            layout: (h, page) => h(Layout, [page]),\\n\n            // Using the shorthand\n            layout: Layout,\\n\n            props: {\n              user: Object,\n            },\n          }\n        </script>\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <script>\n          import { inertia } from '@inertiajs/inertia-svelte'\n\n          export let title\n        </script>\n\n        <svelte:head>\n            <title>{title}</title>\n        </svelte:head>\n\n        <main>\n          <header>\n            <a use:inertia href=\"/\">Home</a>\n            <a use:inertia href=\"/about\">About</a>\n            <a use:inertia href=\"/contact\">Contact</a>\n          </header>\n\n          <article>\n            <slot />\n          </article>\n        </main>\n      "], ["\n        <script>\n          import { inertia } from '@inertiajs/inertia-svelte'\\n\n          export let title\n        </script>\\n\n        <svelte:head>\n            <title>{title}</title>\n        </svelte:head>\\n\n        <main>\n          <header>\n            <a use:inertia href=\"/\">Home</a>\n            <a use:inertia href=\"/about\">About</a>\n            <a use:inertia href=\"/contact\">Contact</a>\n          </header>\\n\n          <article>\n            <slot />\n          </article>\n        </main>\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import React, { useEffect } from 'react'\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        export default function Layout({ title, children }) {\n          useEffect(() => {\n            document.title = title;\n          }, [title])\n\n          return (\n            <main>\n              <header>\n                <InertiaLink href=\"/\">Home</InertiaLink>\n                <InertiaLink href=\"/about\">About</InertiaLink>\n                <InertiaLink href=\"/contact\">Contact</InertiaLink>\n              </header>\n\n              <article>{children}</article>\n            </main>\n          )\n        }\n      "], ["\n        import React, { useEffect } from 'react'\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        export default function Layout({ title, children }) {\n          useEffect(() => {\n            document.title = title;\n          }, [title])\\n\n          return (\n            <main>\n              <header>\n                <InertiaLink href=\"/\">Home</InertiaLink>\n                <InertiaLink href=\"/about\">About</InertiaLink>\n                <InertiaLink href=\"/contact\">Contact</InertiaLink>\n              </header>\\n\n              <article>{children}</article>\n            </main>\n          )\n        }\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <template>\n          <main>\n            <header>\n              <inertia-link href=\"/\">Home</inertia-link>\n              <inertia-link href=\"/about\">About</inertia-link>\n              <inertia-link href=\"/contact\">Contact</inertia-link>\n            </header>\n            <article>\n              <slot />\n            </article>\n          </main>\n        </template>\n\n        <script>\n          export default {\n            props: {\n              title: String,\n            },\n            watch: {\n              title: {\n                immediate: true,\n                handler(title) {\n                  document.title = title\n                },\n              },\n            },\n          }\n        </script>\n      "], ["\n        <template>\n          <main>\n            <header>\n              <inertia-link href=\"/\">Home</inertia-link>\n              <inertia-link href=\"/about\">About</inertia-link>\n              <inertia-link href=\"/contact\">Contact</inertia-link>\n            </header>\n            <article>\n              <slot />\n            </article>\n          </main>\n        </template>\\n\n        <script>\n          export default {\n            props: {\n              title: String,\n            },\n            watch: {\n              title: {\n                immediate: true,\n                handler(title) {\n                  document.title = title\n                },\n              },\n            },\n          }\n        </script>\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <script>\n          import Layout from './Layout.svelte'\n\n          export let user\n        </script>\n\n        <Layout title=\"Welcome\">\n          <h1>Welcome</h1>\n          <p>Hello {user.name}, welcome to your first Inertia app!</p>\n        </Layout>\n      "], ["\n        <script>\n          import Layout from './Layout.svelte'\\n\n          export let user\n        </script>\\n\n        <Layout title=\"Welcome\">\n          <h1>Welcome</h1>\n          <p>Hello {user.name}, welcome to your first Inertia app!</p>\n        </Layout>\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import React from 'react'\n        import Layout from './Layout'\n\n        export default function Welcome({ user }) {\n          return (\n            <Layout title=\"Welcome\">\n              <h1>Welcome</h1>\n              <p>Hello {user.name}, welcome to your first Inertia app!</p>\n            </Layout>\n          )\n        }\n      "], ["\n        import React from 'react'\n        import Layout from './Layout'\\n\n        export default function Welcome({ user }) {\n          return (\n            <Layout title=\"Welcome\">\n              <h1>Welcome</h1>\n              <p>Hello {user.name}, welcome to your first Inertia app!</p>\n            </Layout>\n          )\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <template>\n          <layout title=\"Welcome\">\n            <h1>Welcome</h1>\n            <p>Hello {{ user.name }}, welcome to your first Inertia app!</p>\n          </layout>\n        </template>\n\n        <script>\n          import Layout from './Layout'\n\n          export default {\n            components: {\n              Layout,\n            },\n            props: {\n              user: Object,\n            },\n          }\n        </script>\n      "], ["\n        <template>\n          <layout title=\"Welcome\">\n            <h1>Welcome</h1>\n            <p>Hello {{ user.name }}, welcome to your first Inertia app!</p>\n          </layout>\n        </template>\\n\n        <script>\n          import Layout from './Layout'\\n\n          export default {\n            components: {\n              Layout,\n            },\n            props: {\n              user: Object,\n            },\n          }\n        </script>\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */





var meta = {
  title: 'Страницы',
  links: [{
    url: '#top',
    name: 'Вступление'
  }, {
    url: '#создание-страниц',
    name: 'Создание страниц'
  }, {
    url: '#создание-макетов',
    name: 'Создание макетов'
  }, {
    url: '#постоянные-макеты',
    name: 'Постоянные макеты'
  }, {
    url: '#макеты-по-умолчанию',
    name: 'Макеты по умолчанию'
  }, {
    url: '#заголовок-и-метатеги',
    name: 'Заголовок и метатеги'
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
  }, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, "\u0421 Inertia \u043A\u0430\u0436\u0434\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0412\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0438\u043C\u0435\u0435\u0442 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440 \u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 JavaScript. \u042D\u0442\u043E \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u0431\u0435\u0437 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F API."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B - \u044D\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B JavaScript. \u0412 \u043D\u0438\u0445 \u043D\u0435\u0442 \u043D\u0438\u0447\u0435\u0433\u043E \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0433\u043E. \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u044E\u0442 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440\u043E\u0432 \u043A\u0430\u043A \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u044B. \u0412\u043E\u0442 \u043F\u0440\u0438\u043C\u0435\u0440 \u043F\u0440\u043E\u0441\u0442\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'twig',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject())
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2())
    }, {
      name: 'Svelte',
      language: 'html',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043C\u0430\u043A\u0435\u0442\u043E\u0432"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, "While not required, for most projects it makes sense to create a site layout that your pages can extend. Notice in our page example above that we're wrapping the page content within a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 196
    }
  }, "<layout>"), " component. Here's an example of such a component. There is nothing Inertia specific here. This is just a standard JavaScript component."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'twig',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject4()),
      description: 'The <inertia-link> component is automatically registered by the Inertia plugin.'
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject5())
    }, {
      name: 'Svelte',
      language: 'html',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject6())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 5
    }
  }, "\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0435 \u043C\u0430\u043A\u0435\u0442\u044B"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 5
    }
  }, "While it's simple to implement layouts as children of the page components, it does force the layout instance to be destroyed and recreated between visits. This means you cannot have persistent layout state when navigating between pages."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 5
    }
  }, "For example, maybe you have an audio player on a podcast website that you want to continue playing as users navigate the site. Or, maybe you simply want to maintain the scroll position in your navigation between page visits. In these situations, using the persistent layouts feature in Inertia is a better choice."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'twig',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject7())
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject8())
    }, {
      name: 'Svelte',
      language: 'html',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject9())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 5
    }
  }, "You can also create more complex layout arrangements using nested layouts."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'twig',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject10())
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject11())
    }, {
      name: 'Svelte',
      language: 'html',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject12())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 5
    }
  }, "\u041C\u0430\u043A\u0435\u0442\u044B \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 5
    }
  }, "If you're using persistent layouts, it's possible to set a default page layout in the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 98
    }
  }, "resolveComponent()"), " callback."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
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
      lineNumber: 307,
      columnNumber: 10
    }
  }), "import Layout from './Layout'\n\nresolveComponent: name => import(`./Pages/${name}`)\n  .then(({ default: page }) => {\n    page.layout = page.layout === undefined ? Layout : page.layout\n    return page\n  }),\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 5
    }
  }, "This will automatically set the page layout to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 59
    }
  }, "Layout"), " if a layout has not already been set for that page. If needed, you can disable the default layout on specific pages by setting the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 245
    }
  }, "layout"), " to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 303
    }
  }, "null"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 5
    }
  }, "You can even go a step further and conditionally set the default page layout based on the page ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 107
    }
  }, "name"), ", which is available to the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 187
    }
  }, "resolveComponent()"), " method. For example, maybe you don't want the default layout applied to your public pages."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
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
      lineNumber: 319,
      columnNumber: 10
    }
  }), "import Layout from './Layout'\n\nresolveComponent: name => import(`./Pages/${name}`)\n  .then(({ default: page }) => {\n    if (page.layout === undefined && !name.startsWith('Public/')) {\n      page.layout = Layout\n    }\n    return page\n  }),\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 5
    }
  }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0438 \u043C\u0435\u0442\u0430\u0442\u0435\u0433\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 5
    }
  }, "While it's possible to pass title and meta tag props from pages to layouts (as illustrated above), it's often easier to manage this using a document head library like ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/nuxt/vue-meta"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 179
    }
  }), "Vue Meta"), " or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/nfl/react-helmet"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 34
    }
  }), "React Helmet"), ". Svelte has built-in support for manipulating the document head with the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 108
    }
  }, "<svelte:head>"), " element."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'twig',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject13()),
      description: "Don't forget to install and configure the Vue Meta package."
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject14()),
      description: "Don't forget to install and configure the React Helmet package."
    }, {
      name: 'Svelte',
      language: 'html',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject15())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 5
    }
  }, "Further, if it's critical for your application to set the page title and meta tags server-side, you can use ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/responses#root-template-data"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 120
    }
  }), "root template data"), " to accomplish this."));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFnZXMubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImRlc2NyaXB0aW9uIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsVUFEVztBQUVsQkMsT0FBSyxFQUFFLENBQUM7QUFDTkMsT0FBRyxFQUFFLE1BREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxtQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLG1CQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsb0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSSxFQVlKO0FBQ0RELE9BQUcsRUFBRSxzQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVpJLEVBZUo7QUFDREQsT0FBRyxFQUFFLHVCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBZkk7QUFGVyxDQUFiO0FBdUJQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdB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QUU7QUEzQmdCLEtBQUQsRUE0QjNCO0FBQ0RWLFVBQUksRUFBRSxPQURMO0FBRURPLGNBQVEsRUFBRSxLQUZUO0FBR0RDLFVBQUksRUFBRUMsZ0RBQUYscUJBSEg7QUFtQkRDLGlCQUFXLEVBQUU7QUFuQlosS0E1QjJCLEVBZ0QzQjtBQUNEVixVQUFJLEVBQUUsUUFETDtBQUVETyxjQUFRLEVBQUUsTUFGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0FoRDJCLENBQTlCO0FBaUVJLFdBQU8sRUFBQyxvQkFqRVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhTSyxFQTBXTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFIQUFtSDtBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ3JJLFlBQVE7QUFENkgsR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBbkgseUJBMVdLLENBQVA7QUE4V0Q7S0FsWHVCTCxVO0FBb1h4QjtBQUNBQSxVQUFVLENBQUNPLGNBQVgsR0FBNEIsSUFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGFnZXMuMjg4OTU3NDMyNzM0ZDI0MGIyNjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeCBtZHggKi9cbmltcG9ydCBkZWRlbnQgZnJvbSAnZGVkZW50LWpzJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBUYWJiZWRDb2RlRXhhbXBsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiZWRDb2RlRXhhbXBsZXMnXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6ICfQodGC0YDQsNC90LjRhtGLJyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI3RvcCcsXG4gICAgbmFtZTogJ9CS0YHRgtGD0L/Qu9C10L3QuNC1J1xuICB9LCB7XG4gICAgdXJsOiAnI9GB0L7Qt9C00LDQvdC40LUt0YHRgtGA0LDQvdC40YYnLFxuICAgIG5hbWU6ICfQodC+0LfQtNCw0L3QuNC1INGB0YLRgNCw0L3QuNGGJ1xuICB9LCB7XG4gICAgdXJsOiAnI9GB0L7Qt9C00LDQvdC40LUt0LzQsNC60LXRgtC+0LInLFxuICAgIG5hbWU6ICfQodC+0LfQtNCw0L3QuNC1INC80LDQutC10YLQvtCyJ1xuICB9LCB7XG4gICAgdXJsOiAnI9C/0L7RgdGC0L7Rj9C90L3Ri9C1LdC80LDQutC10YLRiycsXG4gICAgbmFtZTogJ9Cf0L7RgdGC0L7Rj9C90L3Ri9C1INC80LDQutC10YLRiydcbiAgfSwge1xuICAgIHVybDogJyPQvNCw0LrQtdGC0Yst0L/Qvi3Rg9C80L7Qu9GH0LDQvdC40Y4nLFxuICAgIG5hbWU6ICfQnNCw0LrQtdGC0Ysg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4nXG4gIH0sIHtcbiAgICB1cmw6ICcj0LfQsNCz0L7Qu9C+0LLQvtC6LdC4LdC80LXRgtCw0YLQtdCz0LgnLFxuICAgIG5hbWU6ICfQl9Cw0LPQvtC70L7QstC+0Log0Lgg0LzQtdGC0LDRgtC10LPQuCdcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCh0YLRgNCw0L3QuNGG0YtgfTwvaDE+XG4gICAgPHA+e2DQoSBJbmVydGlhINC60LDQttC00LDRjyDRgdGC0YDQsNC90LjRhtCwINCS0LDRiNC10LPQviDQv9GA0LjQu9C+0LbQtdC90LjRjyDQuNC80LXQtdGCINGB0L7QsdGB0YLQstC10L3QvdGL0Lkg0LrQvtC90YLRgNC+0LvQu9C10YAg0Lgg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQuNC5INC60L7QvNC/0L7QvdC10L3RgiBKYXZhU2NyaXB0LiDQrdGC0L4g0L/QvtC30LLQvtC70Y/QtdGCINC/0L7Qu9GD0YfQsNGC0Ywg0YLQvtC70YzQutC+INGC0LUg0LTQsNC90L3Ri9C1LCDQutC+0YLQvtGA0YvQtSDQvdC10L7QsdGF0L7QtNC40LzRiyDQtNC70Y8g0Y3RgtC+0Lkg0YHRgtGA0LDQvdC40YbRiywg0LHQtdC3INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNGPIEFQSS5gfTwvcD5cbiAgICA8aDI+e2DQodC+0LfQtNCw0L3QuNC1INGB0YLRgNCw0L3QuNGGYH08L2gyPlxuICAgIDxwPntg0KHRgtGA0LDQvdC40YbRiyAtINGN0YLQviDQv9GA0L7RgdGC0L4g0LrQvtC80L/QvtC90LXQvdGC0YsgSmF2YVNjcmlwdC4g0JIg0L3QuNGFINC90LXRgiDQvdC40YfQtdCz0L4g0L7RgdC+0LHQtdC90L3QvtCz0L4uINCh0YLRgNCw0L3QuNGG0Ysg0L/QvtC70YPRh9Cw0Y7RgiDQtNCw0L3QvdGL0LUg0L7RgiDQutC+0L3RgtGA0L7Qu9C70LXRgNC+0LIg0LrQsNC6INGA0LXQutCy0LjQt9C40YLRiy4g0JLQvtGCINC/0YDQuNC80LXRgCDQv9GA0L7RgdGC0L7Qs9C+INC60L7QvNC/0L7QvdC10L3RgtCwINGB0YLRgNCw0L3QuNGG0YsuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICd0d2lnJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDxsYXlvdXQgdGl0bGU9XCJXZWxjb21lXCI+XG4gICAgICAgICAgICA8aDE+V2VsY29tZTwvaDE+XG4gICAgICAgICAgICA8cD5IZWxsbyB7eyB1c2VyLm5hbWUgfX0sIHdlbGNvbWUgdG8geW91ciBmaXJzdCBJbmVydGlhIGFwcCE8L3A+XG4gICAgICAgICAgPC9sYXlvdXQ+XG4gICAgICAgIDwvdGVtcGxhdGU+XFxuXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCdcXG5cbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgIExheW91dCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICB1c2VyOiBPYmplY3QsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgPC9zY3JpcHQ+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuICAgICAgICBpbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0J1xcblxuICAgICAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWxjb21lKHsgdXNlciB9KSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQgdGl0bGU9XCJXZWxjb21lXCI+XG4gICAgICAgICAgICAgIDxoMT5XZWxjb21lPC9oMT5cbiAgICAgICAgICAgICAgPHA+SGVsbG8ge3VzZXIubmFtZX0sIHdlbGNvbWUgdG8geW91ciBmaXJzdCBJbmVydGlhIGFwcCE8L3A+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnaHRtbCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dC5zdmVsdGUnXFxuXG4gICAgICAgICAgZXhwb3J0IGxldCB1c2VyXG4gICAgICAgIDwvc2NyaXB0PlxcblxuICAgICAgICA8TGF5b3V0IHRpdGxlPVwiV2VsY29tZVwiPlxuICAgICAgICAgIDxoMT5XZWxjb21lPC9oMT5cbiAgICAgICAgICA8cD5IZWxsbyB7dXNlci5uYW1lfSwgd2VsY29tZSB0byB5b3VyIGZpcnN0IEluZXJ0aWEgYXBwITwvcD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCh0L7Qt9C00LDQvdC40LUg0LzQsNC60LXRgtC+0LJgfTwvaDI+XG4gICAgPHA+e2BXaGlsZSBub3QgcmVxdWlyZWQsIGZvciBtb3N0IHByb2plY3RzIGl0IG1ha2VzIHNlbnNlIHRvIGNyZWF0ZSBhIHNpdGUgbGF5b3V0IHRoYXQgeW91ciBwYWdlcyBjYW4gZXh0ZW5kLiBOb3RpY2UgaW4gb3VyIHBhZ2UgZXhhbXBsZSBhYm92ZSB0aGF0IHdlJ3JlIHdyYXBwaW5nIHRoZSBwYWdlIGNvbnRlbnQgd2l0aGluIGEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgPGxheW91dD5gfTwvaW5saW5lQ29kZT57YCBjb21wb25lbnQuIEhlcmUncyBhbiBleGFtcGxlIG9mIHN1Y2ggYSBjb21wb25lbnQuIFRoZXJlIGlzIG5vdGhpbmcgSW5lcnRpYSBzcGVjaWZpYyBoZXJlLiBUaGlzIGlzIGp1c3QgYSBzdGFuZGFyZCBKYXZhU2NyaXB0IGNvbXBvbmVudC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ3R3aWcnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICA8aW5lcnRpYS1saW5rIGhyZWY9XCIvXCI+SG9tZTwvaW5lcnRpYS1saW5rPlxuICAgICAgICAgICAgICA8aW5lcnRpYS1saW5rIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvaW5lcnRpYS1saW5rPlxuICAgICAgICAgICAgICA8aW5lcnRpYS1saW5rIGhyZWY9XCIvY29udGFjdFwiPkNvbnRhY3Q8L2luZXJ0aWEtbGluaz5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICAgIDxzbG90IC8+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L3RlbXBsYXRlPlxcblxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICBpbW1lZGlhdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaGFuZGxlcih0aXRsZSkge1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSB0aXRsZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgPC9zY3JpcHQ+XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246ICdUaGUgPGluZXJ0aWEtbGluaz4gY29tcG9uZW50IGlzIGF1dG9tYXRpY2FsbHkgcmVnaXN0ZXJlZCBieSB0aGUgSW5lcnRpYSBwbHVnaW4uJ1xuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXFxuXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IHRpdGxlLCBjaGlsZHJlbiB9KSB7XG4gICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgfSwgW3RpdGxlXSlcXG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvXCI+SG9tZTwvSW5lcnRpYUxpbms+XG4gICAgICAgICAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvSW5lcnRpYUxpbms+XG4gICAgICAgICAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvY29udGFjdFwiPkNvbnRhY3Q8L0luZXJ0aWFMaW5rPlxuICAgICAgICAgICAgICA8L2hlYWRlcj5cXG5cbiAgICAgICAgICAgICAgPGFydGljbGU+e2NoaWxkcmVufTwvYXJ0aWNsZT5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnaHRtbCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgaW1wb3J0IHsgaW5lcnRpYSB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1zdmVsdGUnXFxuXG4gICAgICAgICAgZXhwb3J0IGxldCB0aXRsZVxuICAgICAgICA8L3NjcmlwdD5cXG5cbiAgICAgICAgPHN2ZWx0ZTpoZWFkPlxuICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICA8L3N2ZWx0ZTpoZWFkPlxcblxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGEgdXNlOmluZXJ0aWEgaHJlZj1cIi9cIj5Ib21lPC9hPlxuICAgICAgICAgICAgPGEgdXNlOmluZXJ0aWEgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9hPlxuICAgICAgICAgICAgPGEgdXNlOmluZXJ0aWEgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdDwvYT5cbiAgICAgICAgICA8L2hlYWRlcj5cXG5cbiAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgIDxzbG90IC8+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L21haW4+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCf0L7RgdGC0L7Rj9C90L3Ri9C1INC80LDQutC10YLRi2B9PC9oMj5cbiAgICA8cD57YFdoaWxlIGl0J3Mgc2ltcGxlIHRvIGltcGxlbWVudCBsYXlvdXRzIGFzIGNoaWxkcmVuIG9mIHRoZSBwYWdlIGNvbXBvbmVudHMsIGl0IGRvZXMgZm9yY2UgdGhlIGxheW91dCBpbnN0YW5jZSB0byBiZSBkZXN0cm95ZWQgYW5kIHJlY3JlYXRlZCBiZXR3ZWVuIHZpc2l0cy4gVGhpcyBtZWFucyB5b3UgY2Fubm90IGhhdmUgcGVyc2lzdGVudCBsYXlvdXQgc3RhdGUgd2hlbiBuYXZpZ2F0aW5nIGJldHdlZW4gcGFnZXMuYH08L3A+XG4gICAgPHA+e2BGb3IgZXhhbXBsZSwgbWF5YmUgeW91IGhhdmUgYW4gYXVkaW8gcGxheWVyIG9uIGEgcG9kY2FzdCB3ZWJzaXRlIHRoYXQgeW91IHdhbnQgdG8gY29udGludWUgcGxheWluZyBhcyB1c2VycyBuYXZpZ2F0ZSB0aGUgc2l0ZS4gT3IsIG1heWJlIHlvdSBzaW1wbHkgd2FudCB0byBtYWludGFpbiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGluIHlvdXIgbmF2aWdhdGlvbiBiZXR3ZWVuIHBhZ2UgdmlzaXRzLiBJbiB0aGVzZSBzaXR1YXRpb25zLCB1c2luZyB0aGUgcGVyc2lzdGVudCBsYXlvdXRzIGZlYXR1cmUgaW4gSW5lcnRpYSBpcyBhIGJldHRlciBjaG9pY2UuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICd0d2lnJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+V2VsY29tZTwvaDE+XG4gICAgICAgICAgICA8cD5IZWxsbyB7eyB1c2VyLm5hbWUgfX0sIHdlbGNvbWUgdG8geW91ciBmaXJzdCBJbmVydGlhIGFwcCE8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XFxuXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCdcXG5cbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgICAgICAvLyBVc2luZyBhIHJlbmRlciBmdW5jdGlvblxuICAgICAgICAgICAgbGF5b3V0OiAoaCwgcGFnZSkgPT4gaChMYXlvdXQsIFtwYWdlXSksXFxuXG4gICAgICAgICAgICAvLyBVc2luZyB0aGUgc2hvcnRoYW5kXG4gICAgICAgICAgICBsYXlvdXQ6IExheW91dCxcXG5cbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIHVzZXI6IE9iamVjdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA8L3NjcmlwdD5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4gICAgICAgIGltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQnXFxuXG4gICAgICAgIGNvbnN0IEhvbWUgPSAoeyB1c2VyIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGgxPldlbGNvbWU8L2gxPlxuICAgICAgICAgICAgICA8cD5IZWxsbyB7dXNlci5uYW1lfSwgd2VsY29tZSB0byB5b3VyIGZpcnN0IEluZXJ0aWEgYXBwITwvcD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxcblxuICAgICAgICBIb21lLmxheW91dCA9IHBhZ2UgPT4gPExheW91dCBjaGlsZHJlbj17cGFnZX0gdGl0bGU9XCJXZWxjb21lXCIgLz5cXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgSG9tZVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdodG1sJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gICAgICAgICAgaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dC5zdmVsdGUnXG4gICAgICAgICAgZXhwb3J0IGNvbnN0IGxheW91dCA9IExheW91dFxuICAgICAgICA8L3NjcmlwdD5cXG5cbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICBleHBvcnQgbGV0IHVzZXJcbiAgICAgICAgPC9zY3JpcHQ+XFxuXG4gICAgICAgIDxoMT5XZWxjb21lPC9oMT5cbiAgICAgICAgPHA+SGVsbG8ge3VzZXIubmFtZX0sIHdlbGNvbWUgdG8geW91ciBmaXJzdCBJbmVydGlhIGFwcCE8L3A+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntgWW91IGNhbiBhbHNvIGNyZWF0ZSBtb3JlIGNvbXBsZXggbGF5b3V0IGFycmFuZ2VtZW50cyB1c2luZyBuZXN0ZWQgbGF5b3V0cy5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ3R3aWcnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5XZWxjb21lPC9oMT5cbiAgICAgICAgICAgIDxwPkhlbGxvIHt7IHVzZXIubmFtZSB9fSwgd2VsY29tZSB0byB5b3VyIGZpcnN0IEluZXJ0aWEgYXBwITwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cXG5cbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICBpbXBvcnQgU2l0ZUxheW91dCBmcm9tICcuL1NpdGVMYXlvdXQnXG4gICAgICAgICAgaW1wb3J0IE5lc3RlZExheW91dCBmcm9tICcuL05lc3RlZExheW91dCdcXG5cbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgICAgICAvLyBVc2luZyBhIHJlbmRlciBmdW5jdGlvblxuICAgICAgICAgICAgbGF5b3V0OiAoaCwgcGFnZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gaChTaXRlTGF5b3V0LCBbXG4gICAgICAgICAgICAgICAgaChOZXN0ZWRMYXlvdXQsIFtwYWdlXSksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9LFxcblxuICAgICAgICAgICAgLy8gVXNpbmcgdGhlIHNob3J0aGFuZFxuICAgICAgICAgICAgbGF5b3V0OiBbU2l0ZUxheW91dCwgTmVzdGVkTGF5b3V0XSxcXG5cbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIHVzZXI6IE9iamVjdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA8L3NjcmlwdD5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4gICAgICAgIGltcG9ydCBTaXRlTGF5b3V0IGZyb20gJy4vU2l0ZUxheW91dCdcbiAgICAgICAgaW1wb3J0IE5lc3RlZExheW91dCBmcm9tICcuL05lc3RlZExheW91dCdcXG5cbiAgICAgICAgY29uc3QgSG9tZSA9ICh7IHVzZXIgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8aDE+V2VsY29tZTwvaDE+XG4gICAgICAgICAgICAgIDxwPkhlbGxvIHt1c2VyLm5hbWV9LCB3ZWxjb21lIHRvIHlvdXIgZmlyc3QgSW5lcnRpYSBhcHAhPC9wPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XFxuXG4gICAgICAgIEhvbWUubGF5b3V0ID0gcGFnZSA9PiAoXG4gICAgICAgICAgPFNpdGVMYXlvdXQgdGl0bGU9XCJXZWxjb21lXCI+XG4gICAgICAgICAgICA8TmVzdGVkTGF5b3V0IGNoaWxkcmVuPXtwYWdlfSAvPlxuICAgICAgICAgIDwvU2l0ZUxheW91dD5cbiAgICAgICAgKVxcblxuICAgICAgICBleHBvcnQgZGVmYXVsdCBIb21lXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2h0bWwnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgICAgICAgICBpbXBvcnQgU2l0ZUxheW91dCBmcm9tICcuL1NpdGVMYXlvdXQuc3ZlbHRlJ1xuICAgICAgICAgIGltcG9ydCBOZXN0ZWRMYXlvdXQgZnJvbSAnLi9OZXN0ZWRMYXlvdXQuc3ZlbHRlJ1xuICAgICAgICAgIGV4cG9ydCBjb25zdCBsYXlvdXQgPSBbU2l0ZUxheW91dCwgTmVzdGVkTGF5b3V0XVxuICAgICAgICA8L3NjcmlwdD5cXG5cbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICBleHBvcnQgbGV0IHVzZXJcbiAgICAgICAgPC9zY3JpcHQ+XFxuXG4gICAgICAgIDxoMT5XZWxjb21lPC9oMT5cbiAgICAgICAgPHA+SGVsbG8ge3VzZXIubmFtZX0sIHdlbGNvbWUgdG8geW91ciBmaXJzdCBJbmVydGlhIGFwcCE8L3A+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCc0LDQutC10YLRiyDQv9C+INGD0LzQvtC70YfQsNC90LjRjmB9PC9oMj5cbiAgICA8cD57YElmIHlvdSdyZSB1c2luZyBwZXJzaXN0ZW50IGxheW91dHMsIGl0J3MgcG9zc2libGUgdG8gc2V0IGEgZGVmYXVsdCBwYWdlIGxheW91dCBpbiB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVzb2x2ZUNvbXBvbmVudCgpYH08L2lubGluZUNvZGU+e2AgY2FsbGJhY2suYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQnXG5cbnJlc29sdmVDb21wb25lbnQ6IG5hbWUgPT4gaW1wb3J0KFxcYC4vUGFnZXMvXFwke25hbWV9XFxgKVxuICAudGhlbigoeyBkZWZhdWx0OiBwYWdlIH0pID0+IHtcbiAgICBwYWdlLmxheW91dCA9IHBhZ2UubGF5b3V0ID09PSB1bmRlZmluZWQgPyBMYXlvdXQgOiBwYWdlLmxheW91dFxuICAgIHJldHVybiBwYWdlXG4gIH0pLFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BUaGlzIHdpbGwgYXV0b21hdGljYWxseSBzZXQgdGhlIHBhZ2UgbGF5b3V0IHRvIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YExheW91dGB9PC9pbmxpbmVDb2RlPntgIGlmIGEgbGF5b3V0IGhhcyBub3QgYWxyZWFkeSBiZWVuIHNldCBmb3IgdGhhdCBwYWdlLiBJZiBuZWVkZWQsIHlvdSBjYW4gZGlzYWJsZSB0aGUgZGVmYXVsdCBsYXlvdXQgb24gc3BlY2lmaWMgcGFnZXMgYnkgc2V0dGluZyB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbGF5b3V0YH08L2lubGluZUNvZGU+e2AgdG8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbnVsbGB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwPntgWW91IGNhbiBldmVuIGdvIGEgc3RlcCBmdXJ0aGVyIGFuZCBjb25kaXRpb25hbGx5IHNldCB0aGUgZGVmYXVsdCBwYWdlIGxheW91dCBiYXNlZCBvbiB0aGUgcGFnZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BuYW1lYH08L2lubGluZUNvZGU+e2AsIHdoaWNoIGlzIGF2YWlsYWJsZSB0byB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVzb2x2ZUNvbXBvbmVudCgpYH08L2lubGluZUNvZGU+e2AgbWV0aG9kLiBGb3IgZXhhbXBsZSwgbWF5YmUgeW91IGRvbid0IHdhbnQgdGhlIGRlZmF1bHQgbGF5b3V0IGFwcGxpZWQgdG8geW91ciBwdWJsaWMgcGFnZXMuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQnXG5cbnJlc29sdmVDb21wb25lbnQ6IG5hbWUgPT4gaW1wb3J0KFxcYC4vUGFnZXMvXFwke25hbWV9XFxgKVxuICAudGhlbigoeyBkZWZhdWx0OiBwYWdlIH0pID0+IHtcbiAgICBpZiAocGFnZS5sYXlvdXQgPT09IHVuZGVmaW5lZCAmJiAhbmFtZS5zdGFydHNXaXRoKCdQdWJsaWMvJykpIHtcbiAgICAgIHBhZ2UubGF5b3V0ID0gTGF5b3V0XG4gICAgfVxuICAgIHJldHVybiBwYWdlXG4gIH0pLFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntg0JfQsNCz0L7Qu9C+0LLQvtC6INC4INC80LXRgtCw0YLQtdCz0LhgfTwvaDI+XG4gICAgPHA+e2BXaGlsZSBpdCdzIHBvc3NpYmxlIHRvIHBhc3MgdGl0bGUgYW5kIG1ldGEgdGFnIHByb3BzIGZyb20gcGFnZXMgdG8gbGF5b3V0cyAoYXMgaWxsdXN0cmF0ZWQgYWJvdmUpLCBpdCdzIG9mdGVuIGVhc2llciB0byBtYW5hZ2UgdGhpcyB1c2luZyBhIGRvY3VtZW50IGhlYWQgbGlicmFyeSBsaWtlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbnV4dC92dWUtbWV0YVwiXG4gICAgICB9fT57YFZ1ZSBNZXRhYH08L2E+e2Agb3IgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9uZmwvcmVhY3QtaGVsbWV0XCJcbiAgICAgIH19PntgUmVhY3QgSGVsbWV0YH08L2E+e2AuIFN2ZWx0ZSBoYXMgYnVpbHQtaW4gc3VwcG9ydCBmb3IgbWFuaXB1bGF0aW5nIHRoZSBkb2N1bWVudCBoZWFkIHdpdGggdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDxzdmVsdGU6aGVhZD5gfTwvaW5saW5lQ29kZT57YCBlbGVtZW50LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAndHdpZycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgICA8bGF5b3V0PlxuICAgICAgICAgICAgPGgxPldlbGNvbWU8L2gxPlxuICAgICAgICAgICAgPHA+SGVsbG8ge3sgdXNlci5uYW1lIH19LCB3ZWxjb21lIHRvIHlvdXIgZmlyc3QgSW5lcnRpYSBhcHAhPC9wPlxuICAgICAgICAgIDwvbGF5b3V0PlxuICAgICAgICA8L3RlbXBsYXRlPlxcblxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgIGltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQnXFxuXG4gICAgICAgICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICAgICAgbWV0YUluZm8oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFxcYFdlbGNvbWUgXFwke3RoaXMudXNlci5uYW1lfVxcYCxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgTGF5b3V0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIHVzZXI6IE9iamVjdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA8L3NjcmlwdD5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogXCJEb24ndCBmb3JnZXQgdG8gaW5zdGFsbCBhbmQgY29uZmlndXJlIHRoZSBWdWUgTWV0YSBwYWNrYWdlLlwiXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuICAgICAgICBpbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0J1xuICAgICAgICBpbXBvcnQge0hlbG1ldH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiXFxuXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlbGNvbWUoeyB1c2VyIH0pIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgPEhlbG1ldD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+V2VsY29tZSB7dXNlci5uYW1lfTwvdGl0bGU+XG4gICAgICAgICAgICAgIDwvSGVsbWV0PlxuICAgICAgICAgICAgICA8aDE+V2VsY29tZTwvaDE+XG4gICAgICAgICAgICAgIDxwPkhlbGxvIHt1c2VyLm5hbWV9LCB3ZWxjb21lIHRvIHlvdXIgZmlyc3QgSW5lcnRpYSBhcHAhPC9wPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246IFwiRG9uJ3QgZm9yZ2V0IHRvIGluc3RhbGwgYW5kIGNvbmZpZ3VyZSB0aGUgUmVhY3QgSGVsbWV0IHBhY2thZ2UuXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnaHRtbCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICAgICAgICAgIGltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQuc3ZlbHRlJ1xuICAgICAgICAgIGV4cG9ydCBjb25zdCBsYXlvdXQgPSBMYXlvdXRcbiAgICAgICAgPC9zY3JpcHQ+XFxuXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgZXhwb3J0IGxldCB1c2VyXG4gICAgICAgIDwvc2NyaXB0PlxcblxuICAgICAgICA8c3ZlbHRlOmhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+V2VsY29tZSB7dXNlci5uYW1lfTwvdGl0bGU+XG4gICAgICAgIDwvc3ZlbHRlOmhlYWQ+XFxuXG4gICAgICAgIDxoMT5XZWxjb21lPC9oMT5cbiAgICAgICAgPHA+SGVsbG8ge3VzZXIubmFtZX0sIHdlbGNvbWUgdG8geW91ciBmaXJzdCBJbmVydGlhIGFwcCE8L3A+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntgRnVydGhlciwgaWYgaXQncyBjcml0aWNhbCBmb3IgeW91ciBhcHBsaWNhdGlvbiB0byBzZXQgdGhlIHBhZ2UgdGl0bGUgYW5kIG1ldGEgdGFncyBzZXJ2ZXItc2lkZSwgeW91IGNhbiB1c2UgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9yZXNwb25zZXMjcm9vdC10ZW1wbGF0ZS1kYXRhXCJcbiAgICAgIH19Pntgcm9vdCB0ZW1wbGF0ZSBkYXRhYH08L2E+e2AgdG8gYWNjb21wbGlzaCB0aGlzLmB9PC9wPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==