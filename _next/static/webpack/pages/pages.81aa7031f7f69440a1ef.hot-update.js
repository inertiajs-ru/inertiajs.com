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
  }, "\u0425\u043E\u0442\u044F \u044D\u0442\u043E \u0438 \u043D\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E, \u0434\u043B\u044F \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0430 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0438\u043C\u0435\u0435\u0442 \u0441\u043C\u044B\u0441\u043B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u0430\u043A\u0435\u0442 \u0441\u0430\u0439\u0442\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043C\u043E\u0436\u043D\u043E \u0440\u0430\u0441\u0448\u0438\u0440\u044F\u0442\u044C. \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u0432 \u043D\u0430\u0448\u0435\u043C \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0432\u044B\u0448\u0435 \u043C\u044B \u043F\u043E\u043C\u0435\u0449\u0430\u0435\u043C \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0432 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 219
    }
  }, "<layout>"), ". \u0412\u043E\u0442 \u043F\u0440\u0438\u043C\u0435\u0440 \u0442\u0430\u043A\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430. \u0417\u0434\u0435\u0441\u044C \u043D\u0435\u0442 \u043D\u0438\u0447\u0435\u0433\u043E \u0441\u043F\u0435\u0446\u0438\u0444\u0438\u0447\u043D\u043E\u0433\u043E \u0434\u043B\u044F Inertia. \u042D\u0442\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 JavaScript."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'twig',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject4()),
      description: 'Компонент <inertia-link> автоматически регистрируется плагином Inertia.'
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
  }, "\u0425\u043E\u0442\u044F \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u043C\u0430\u043A\u0435\u0442\u044B \u043A\u0430\u043A \u0434\u043E\u0447\u0435\u0440\u043D\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u0440\u043E\u0441\u0442\u043E, \u044D\u0442\u043E \u0437\u0430\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440 \u043C\u0430\u043A\u0435\u0442\u0430 \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0430\u0442\u044C\u0441\u044F \u0438 \u0432\u043E\u0441\u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0435\u0433\u043E \u043C\u0435\u0436\u0434\u0443 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F\u043C\u0438. \u042D\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0443 \u0412\u0430\u0441 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u043C\u0430\u043A\u0435\u0442\u0430 \u043F\u0440\u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0435 \u043C\u0435\u0436\u0434\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u043C\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 5
    }
  }, "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E, \u0443 \u0412\u0430\u0441 \u0435\u0441\u0442\u044C \u0430\u0443\u0434\u0438\u043E\u043F\u043B\u0435\u0435\u0440 \u043D\u0430 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0435 \u043F\u043E\u0434\u043A\u0430\u0441\u0442\u043E\u0432, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0412\u044B \u0445\u043E\u0442\u0438\u0442\u0435 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0442\u044C \u0432\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u044C, \u043A\u043E\u0433\u0434\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u0431\u0443\u0434\u0443\u0442 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0430\u0442\u044C\u0441\u044F \u043F\u043E \u0441\u0430\u0439\u0442\u0443. \u0418\u043B\u0438, \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C, \u0412\u044B \u043F\u0440\u043E\u0441\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 \u0432 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043C\u0435\u0436\u0434\u0443 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F\u043C\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u0412 \u0442\u0430\u043A\u0438\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u044F\u0445 \u043B\u0443\u0447\u0448\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0445 \u043C\u0430\u043A\u0435\u0442\u043E\u0432 \u0432 Inertia."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, "\u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0431\u043E\u043B\u0435\u0435 \u0441\u043B\u043E\u0436\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u043E\u0432\u043A\u0438 \u043C\u0430\u043A\u0435\u0442\u043E\u0432, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435 \u043C\u0430\u043A\u0435\u0442\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, "\u0415\u0441\u043B\u0438 \u0412\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0435 \u043C\u0430\u043A\u0435\u0442\u044B, \u043C\u043E\u0436\u043D\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043C\u0430\u043A\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0432 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u043C \u0432\u044B\u0437\u043E\u0432\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 114
    }
  }, "resolveComponent()"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("pre", {
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
  }, "\u042D\u0442\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442 \u043C\u0430\u043A\u0435\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 58
    }
  }, "Layout"), ", \u0435\u0441\u043B\u0438 \u043C\u0430\u043A\u0435\u0442 \u0435\u0449\u0435 \u043D\u0435 \u0431\u044B\u043B \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u041F\u0440\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0441\u0442\u0438 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043C\u0430\u043A\u0435\u0442 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u043D\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0445, \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0432 \u0434\u043B\u044F \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 274
    }
  }, "layout"), " \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 338
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFnZXMubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImRlc2NyaXB0aW9uIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsVUFEVztBQUVsQkMsT0FBSyxFQUFFLENBQUM7QUFDTkMsT0FBRyxFQUFFLE1BREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxtQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLG1CQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsb0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSSxFQVlKO0FBQ0RELE9BQUcsRUFBRSxzQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVpJLEVBZUo7QUFDREQsT0FBRyxFQUFFLHVCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBZkk7QUFGVyxDQUFiO0FBdUJQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdB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QkFBVyxFQUFFO0FBM0JnQixLQUFELEVBNEIzQjtBQUNEVixVQUFJLEVBQUUsT0FETDtBQUVETyxjQUFRLEVBQUUsS0FGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGLHFCQUhIO0FBbUJEQyxpQkFBVyxFQUFFO0FBbkJaLEtBNUIyQixFQWdEM0I7QUFDRFYsVUFBSSxFQUFFLFFBREw7QUFFRE8sY0FBUSxFQUFFLE1BRlQ7QUFHREMsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBaEQyQixDQUE5QjtBQWlFSSxXQUFPLEVBQUMsb0JBakVaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4U0ssRUEwV0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxSEFBbUg7QUFBRyxjQUFVLEVBQUM7QUFBZCxLQUFzQjtBQUNySSxZQUFRO0FBRDZILEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQW5ILHlCQTFXSyxDQUFQO0FBOFdEO0tBbFh1QkwsVTtBQW9YeEI7QUFDQUEsVUFBVSxDQUFDTyxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3BhZ2VzLjgxYWE3MDMxZjdmNjk0NDBhMWVmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVGFiYmVkQ29kZUV4YW1wbGVzIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmVkQ29kZUV4YW1wbGVzJ1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB7XG4gIHRpdGxlOiAn0KHRgtGA0LDQvdC40YbRiycsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyN0b3AnLFxuICAgIG5hbWU6ICfQktGB0YLRg9C/0LvQtdC90LjQtSdcbiAgfSwge1xuICAgIHVybDogJyPRgdC+0LfQtNCw0L3QuNC1LdGB0YLRgNCw0L3QuNGGJyxcbiAgICBuYW1lOiAn0KHQvtC30LTQsNC90LjQtSDRgdGC0YDQsNC90LjRhidcbiAgfSwge1xuICAgIHVybDogJyPRgdC+0LfQtNCw0L3QuNC1LdC80LDQutC10YLQvtCyJyxcbiAgICBuYW1lOiAn0KHQvtC30LTQsNC90LjQtSDQvNCw0LrQtdGC0L7QsidcbiAgfSwge1xuICAgIHVybDogJyPQv9C+0YHRgtC+0Y/QvdC90YvQtS3QvNCw0LrQtdGC0YsnLFxuICAgIG5hbWU6ICfQn9C+0YHRgtC+0Y/QvdC90YvQtSDQvNCw0LrQtdGC0YsnXG4gIH0sIHtcbiAgICB1cmw6ICcj0LzQsNC60LXRgtGLLdC/0L4t0YPQvNC+0LvRh9Cw0L3QuNGOJyxcbiAgICBuYW1lOiAn0JzQsNC60LXRgtGLINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOJ1xuICB9LCB7XG4gICAgdXJsOiAnI9C30LDQs9C+0LvQvtCy0L7Qui3QuC3QvNC10YLQsNGC0LXQs9C4JyxcbiAgICBuYW1lOiAn0JfQsNCz0L7Qu9C+0LLQvtC6INC4INC80LXRgtCw0YLQtdCz0LgnXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQodGC0YDQsNC90LjRhtGLYH08L2gxPlxuICAgIDxwPntg0KEgSW5lcnRpYSDQutCw0LbQtNCw0Y8g0YHRgtGA0LDQvdC40YbQsCDQktCw0YjQtdCz0L4g0L/RgNC40LvQvtC20LXQvdC40Y8g0LjQvNC10LXRgiDRgdC+0LHRgdGC0LLQtdC90L3Ri9C5INC60L7QvdGC0YDQvtC70LvQtdGAINC4INGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LjQuSDQutC+0LzQv9C+0L3QtdC90YIgSmF2YVNjcmlwdC4g0K3RgtC+INC/0L7Qt9Cy0L7Qu9GP0LXRgiDQv9C+0LvRg9GH0LDRgtGMINGC0L7Qu9GM0LrQviDRgtC1INC00LDQvdC90YvQtSwg0LrQvtGC0L7RgNGL0LUg0L3QtdC+0LHRhdC+0LTQuNC80Ysg0LTQu9GPINGN0YLQvtC5INGB0YLRgNCw0L3QuNGG0YssINCx0LXQtyDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjyBBUEkuYH08L3A+XG4gICAgPGgyPntg0KHQvtC30LTQsNC90LjQtSDRgdGC0YDQsNC90LjRhmB9PC9oMj5cbiAgICA8cD57YNCh0YLRgNCw0L3QuNGG0YsgLSDRjdGC0L4g0L/RgNC+0YHRgtC+INC60L7QvNC/0L7QvdC10L3RgtGLIEphdmFTY3JpcHQuINCSINC90LjRhSDQvdC10YIg0L3QuNGH0LXQs9C+INC+0YHQvtCx0LXQvdC90L7Qs9C+LiDQodGC0YDQsNC90LjRhtGLINC/0L7Qu9GD0YfQsNGO0YIg0LTQsNC90L3Ri9C1INC+0YIg0LrQvtC90YLRgNC+0LvQu9C10YDQvtCyINC60LDQuiDRgNC10LrQstC40LfQuNGC0YsuINCS0L7RgiDQv9GA0LjQvNC10YAg0L/RgNC+0YHRgtC+0LPQviDQutC+0LzQv9C+0L3QtdC90YLQsCDRgdGC0YDQsNC90LjRhtGLLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAndHdpZycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgICA8bGF5b3V0IHRpdGxlPVwiV2VsY29tZVwiPlxuICAgICAgICAgICAgPGgxPldlbGNvbWU8L2gxPlxuICAgICAgICAgICAgPHA+SGVsbG8ge3sgdXNlci5uYW1lIH19LCB3ZWxjb21lIHRvIHlvdXIgZmlyc3QgSW5lcnRpYSBhcHAhPC9wPlxuICAgICAgICAgIDwvbGF5b3V0PlxuICAgICAgICA8L3RlbXBsYXRlPlxcblxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgIGltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQnXFxuXG4gICAgICAgICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgICBMYXlvdXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgdXNlcjogT2JqZWN0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDwvc2NyaXB0PlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbiAgICAgICAgaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCdcXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2VsY29tZSh7IHVzZXIgfSkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPVwiV2VsY29tZVwiPlxuICAgICAgICAgICAgICA8aDE+V2VsY29tZTwvaDE+XG4gICAgICAgICAgICAgIDxwPkhlbGxvIHt1c2VyLm5hbWV9LCB3ZWxjb21lIHRvIHlvdXIgZmlyc3QgSW5lcnRpYSBhcHAhPC9wPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2h0bWwnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgIGltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQuc3ZlbHRlJ1xcblxuICAgICAgICAgIGV4cG9ydCBsZXQgdXNlclxuICAgICAgICA8L3NjcmlwdD5cXG5cbiAgICAgICAgPExheW91dCB0aXRsZT1cIldlbGNvbWVcIj5cbiAgICAgICAgICA8aDE+V2VsY29tZTwvaDE+XG4gICAgICAgICAgPHA+SGVsbG8ge3VzZXIubmFtZX0sIHdlbGNvbWUgdG8geW91ciBmaXJzdCBJbmVydGlhIGFwcCE8L3A+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8aDI+e2DQodC+0LfQtNCw0L3QuNC1INC80LDQutC10YLQvtCyYH08L2gyPlxuICAgIDxwPntg0KXQvtGC0Y8g0Y3RgtC+INC4INC90LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3Qviwg0LTQu9GPINCx0L7Qu9GM0YjQuNC90YHRgtCy0LAg0L/RgNC+0LXQutGC0L7QsiDQuNC80LXQtdGCINGB0LzRi9GB0Lsg0YHQvtC30LTQsNGC0Ywg0LzQsNC60LXRgiDRgdCw0LnRgtCwLCDQutC+0YLQvtGA0YvQuSDQvNC+0LbQvdC+INGA0LDRgdGI0LjRgNGP0YLRjC4g0J7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1LCDRh9GC0L4g0LIg0L3QsNGI0LXQvCDQv9GA0LjQvNC10YDQtSDRgdGC0YDQsNC90LjRhtGLINCy0YvRiNC1INC80Ysg0L/QvtC80LXRidCw0LXQvCDRgdC+0LTQtdGA0LbQuNC80L7QtSDRgdGC0YDQsNC90LjRhtGLINCyINC60L7QvNC/0L7QvdC10L3RgiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A8bGF5b3V0PmB9PC9pbmxpbmVDb2RlPntgLiDQktC+0YIg0L/RgNC40LzQtdGAINGC0LDQutC+0LPQviDQutC+0LzQv9C+0L3QtdC90YLQsC4g0JfQtNC10YHRjCDQvdC10YIg0L3QuNGH0LXQs9C+INGB0L/QtdGG0LjRhNC40YfQvdC+0LPQviDQtNC70Y8gSW5lcnRpYS4g0K3RgtC+INC/0YDQvtGB0YLQviDRgdGC0LDQvdC00LDRgNGC0L3Ri9C5INC60L7QvNC/0L7QvdC10L3RgiBKYXZhU2NyaXB0LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAndHdpZycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgIDxpbmVydGlhLWxpbmsgaHJlZj1cIi9cIj5Ib21lPC9pbmVydGlhLWxpbms+XG4gICAgICAgICAgICAgIDxpbmVydGlhLWxpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9pbmVydGlhLWxpbms+XG4gICAgICAgICAgICAgIDxpbmVydGlhLWxpbmsgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdDwvaW5lcnRpYS1saW5rPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8YXJ0aWNsZT5cbiAgICAgICAgICAgICAgPHNsb3QgLz5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvdGVtcGxhdGU+XFxuXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFN0cmluZyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIGltbWVkaWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVyKHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA8L3NjcmlwdD5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogJ9Ca0L7QvNC/0L7QvdC10L3RgiA8aW5lcnRpYS1saW5rPiDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDRgNC10LPQuNGB0YLRgNC40YDRg9C10YLRgdGPINC/0LvQsNCz0LjQvdC+0LwgSW5lcnRpYS4nXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuICAgICAgICBpbXBvcnQgeyBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgdGl0bGUsIGNoaWxkcmVuIH0pIHtcbiAgICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICB9LCBbdGl0bGVdKVxcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8SW5lcnRpYUxpbmsgaHJlZj1cIi9cIj5Ib21lPC9JbmVydGlhTGluaz5cbiAgICAgICAgICAgICAgICA8SW5lcnRpYUxpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9JbmVydGlhTGluaz5cbiAgICAgICAgICAgICAgICA8SW5lcnRpYUxpbmsgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdDwvSW5lcnRpYUxpbms+XG4gICAgICAgICAgICAgIDwvaGVhZGVyPlxcblxuICAgICAgICAgICAgICA8YXJ0aWNsZT57Y2hpbGRyZW59PC9hcnRpY2xlPlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdodG1sJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICBpbXBvcnQgeyBpbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcXG5cbiAgICAgICAgICBleHBvcnQgbGV0IHRpdGxlXG4gICAgICAgIDwvc2NyaXB0PlxcblxuICAgICAgICA8c3ZlbHRlOmhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDwvc3ZlbHRlOmhlYWQ+XFxuXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8YSB1c2U6aW5lcnRpYSBocmVmPVwiL1wiPkhvbWU8L2E+XG4gICAgICAgICAgICA8YSB1c2U6aW5lcnRpYSBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L2E+XG4gICAgICAgICAgICA8YSB1c2U6aW5lcnRpYSBocmVmPVwiL2NvbnRhY3RcIj5Db250YWN0PC9hPlxuICAgICAgICAgIDwvaGVhZGVyPlxcblxuICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgPHNsb3QgLz5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPGgyPntg0J/QvtGB0YLQvtGP0L3QvdGL0LUg0LzQsNC60LXRgtGLYH08L2gyPlxuICAgIDxwPntg0KXQvtGC0Y8g0YDQtdCw0LvQuNC30L7QstCw0YLRjCDQvNCw0LrQtdGC0Ysg0LrQsNC6INC00L7Rh9C10YDQvdC40LUg0Y3Qu9C10LzQtdC90YLRiyDQutC+0LzQv9C+0L3QtdC90YLQvtCyINGB0YLRgNCw0L3QuNGG0Ysg0L/RgNC+0YHRgtC+LCDRjdGC0L4g0LfQsNGB0YLQsNCy0LvRj9C10YIg0Y3QutC30LXQvNC/0LvRj9GAINC80LDQutC10YLQsCDRg9C90LjRh9GC0L7QttCw0YLRjNGB0Y8g0Lgg0LLQvtGB0YHQvtC30LTQsNCy0LDRgtGMINC10LPQviDQvNC10LbQtNGDINC/0L7RgdC10YnQtdC90LjRj9C80LguINCt0YLQviDQvtC30L3QsNGH0LDQtdGCLCDRh9GC0L4g0YMg0JLQsNGBINC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9C+0YHRgtC+0Y/QvdC90L7Qs9C+INGB0L7RgdGC0L7Rj9C90LjRjyDQvNCw0LrQtdGC0LAg0L/RgNC4INC/0LXRgNC10YXQvtC00LUg0LzQtdC20LTRgyDRgdGC0YDQsNC90LjRhtCw0LzQuC5gfTwvcD5cbiAgICA8cD57YNCd0LDQv9GA0LjQvNC10YAsINCy0L7Qt9C80L7QttC90L4sINGDINCS0LDRgSDQtdGB0YLRjCDQsNGD0LTQuNC+0L/Qu9C10LXRgCDQvdCwINCy0LXQsS3RgdCw0LnRgtC1INC/0L7QtNC60LDRgdGC0L7Qsiwg0LrQvtGC0L7RgNGL0Lkg0JLRiyDRhdC+0YLQuNGC0LUg0L/RgNC+0LTQvtC70LbQsNGC0Ywg0LLQvtGB0L/RgNC+0LjQt9Cy0L7QtNC40YLRjCwg0LrQvtCz0LTQsCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Lgg0LHRg9C00YPRgiDQv9C10YDQtdC80LXRidCw0YLRjNGB0Y8g0L/QviDRgdCw0LnRgtGDLiDQmNC70LgsINC80L7QttC10YIg0LHRi9GC0YwsINCS0Ysg0L/RgNC+0YHRgtC+INGF0L7RgtC40YLQtSDRgdC+0YXRgNCw0L3QuNGC0Ywg0L/QvtC30LjRhtC40Y4g0L/RgNC+0LrRgNGD0YLQutC4INCyINC90LDQstC40LPQsNGG0LjQuCDQvNC10LbQtNGDINC/0L7RgdC10YnQtdC90LjRj9C80Lgg0YHRgtGA0LDQvdC40YbRiy4g0JIg0YLQsNC60LjRhSDRgdC40YLRg9Cw0YbQuNGP0YUg0LvRg9GH0YjQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0YTRg9C90LrRhtC40Y4g0L/QvtGB0YLQvtGP0L3QvdGL0YUg0LzQsNC60LXRgtC+0LIg0LIgSW5lcnRpYS5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ3R3aWcnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5XZWxjb21lPC9oMT5cbiAgICAgICAgICAgIDxwPkhlbGxvIHt7IHVzZXIubmFtZSB9fSwgd2VsY29tZSB0byB5b3VyIGZpcnN0IEluZXJ0aWEgYXBwITwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cXG5cbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICBpbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0J1xcblxuICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgICAgIC8vIFVzaW5nIGEgcmVuZGVyIGZ1bmN0aW9uXG4gICAgICAgICAgICBsYXlvdXQ6IChoLCBwYWdlKSA9PiBoKExheW91dCwgW3BhZ2VdKSxcXG5cbiAgICAgICAgICAgIC8vIFVzaW5nIHRoZSBzaG9ydGhhbmRcbiAgICAgICAgICAgIGxheW91dDogTGF5b3V0LFxcblxuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgdXNlcjogT2JqZWN0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDwvc2NyaXB0PlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbiAgICAgICAgaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCdcXG5cbiAgICAgICAgY29uc3QgSG9tZSA9ICh7IHVzZXIgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8aDE+V2VsY29tZTwvaDE+XG4gICAgICAgICAgICAgIDxwPkhlbGxvIHt1c2VyLm5hbWV9LCB3ZWxjb21lIHRvIHlvdXIgZmlyc3QgSW5lcnRpYSBhcHAhPC9wPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XFxuXG4gICAgICAgIEhvbWUubGF5b3V0ID0gcGFnZSA9PiA8TGF5b3V0IGNoaWxkcmVuPXtwYWdlfSB0aXRsZT1cIldlbGNvbWVcIiAvPlxcblxuICAgICAgICBleHBvcnQgZGVmYXVsdCBIb21lXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2h0bWwnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgICAgICAgICBpbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0LnN2ZWx0ZSdcbiAgICAgICAgICBleHBvcnQgY29uc3QgbGF5b3V0ID0gTGF5b3V0XG4gICAgICAgIDwvc2NyaXB0PlxcblxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgIGV4cG9ydCBsZXQgdXNlclxuICAgICAgICA8L3NjcmlwdD5cXG5cbiAgICAgICAgPGgxPldlbGNvbWU8L2gxPlxuICAgICAgICA8cD5IZWxsbyB7dXNlci5uYW1lfSwgd2VsY29tZSB0byB5b3VyIGZpcnN0IEluZXJ0aWEgYXBwITwvcD5cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2DQktGLINGC0LDQutC20LUg0LzQvtC20LXRgtC1INGB0L7Qt9C00LDQstCw0YLRjCDQsdC+0LvQtdC1INGB0LvQvtC20L3Ri9C1INC60L7QvNC/0L7QvdC+0LLQutC4INC80LDQutC10YLQvtCyLCDQuNGB0L/QvtC70YzQt9GD0Y8g0LLQu9C+0LbQtdC90L3Ri9C1INC80LDQutC10YLRiy5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ3R3aWcnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5XZWxjb21lPC9oMT5cbiAgICAgICAgICAgIDxwPkhlbGxvIHt7IHVzZXIubmFtZSB9fSwgd2VsY29tZSB0byB5b3VyIGZpcnN0IEluZXJ0aWEgYXBwITwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cXG5cbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICBpbXBvcnQgU2l0ZUxheW91dCBmcm9tICcuL1NpdGVMYXlvdXQnXG4gICAgICAgICAgaW1wb3J0IE5lc3RlZExheW91dCBmcm9tICcuL05lc3RlZExheW91dCdcXG5cbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgICAgICAvLyBVc2luZyBhIHJlbmRlciBmdW5jdGlvblxuICAgICAgICAgICAgbGF5b3V0OiAoaCwgcGFnZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gaChTaXRlTGF5b3V0LCBbXG4gICAgICAgICAgICAgICAgaChOZXN0ZWRMYXlvdXQsIFtwYWdlXSksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9LFxcblxuICAgICAgICAgICAgLy8gVXNpbmcgdGhlIHNob3J0aGFuZFxuICAgICAgICAgICAgbGF5b3V0OiBbU2l0ZUxheW91dCwgTmVzdGVkTGF5b3V0XSxcXG5cbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIHVzZXI6IE9iamVjdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA8L3NjcmlwdD5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4gICAgICAgIGltcG9ydCBTaXRlTGF5b3V0IGZyb20gJy4vU2l0ZUxheW91dCdcbiAgICAgICAgaW1wb3J0IE5lc3RlZExheW91dCBmcm9tICcuL05lc3RlZExheW91dCdcXG5cbiAgICAgICAgY29uc3QgSG9tZSA9ICh7IHVzZXIgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8aDE+V2VsY29tZTwvaDE+XG4gICAgICAgICAgICAgIDxwPkhlbGxvIHt1c2VyLm5hbWV9LCB3ZWxjb21lIHRvIHlvdXIgZmlyc3QgSW5lcnRpYSBhcHAhPC9wPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKVxuICAgICAgICB9XFxuXG4gICAgICAgIEhvbWUubGF5b3V0ID0gcGFnZSA9PiAoXG4gICAgICAgICAgPFNpdGVMYXlvdXQgdGl0bGU9XCJXZWxjb21lXCI+XG4gICAgICAgICAgICA8TmVzdGVkTGF5b3V0IGNoaWxkcmVuPXtwYWdlfSAvPlxuICAgICAgICAgIDwvU2l0ZUxheW91dD5cbiAgICAgICAgKVxcblxuICAgICAgICBleHBvcnQgZGVmYXVsdCBIb21lXG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2h0bWwnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgICAgICAgICBpbXBvcnQgU2l0ZUxheW91dCBmcm9tICcuL1NpdGVMYXlvdXQuc3ZlbHRlJ1xuICAgICAgICAgIGltcG9ydCBOZXN0ZWRMYXlvdXQgZnJvbSAnLi9OZXN0ZWRMYXlvdXQuc3ZlbHRlJ1xuICAgICAgICAgIGV4cG9ydCBjb25zdCBsYXlvdXQgPSBbU2l0ZUxheW91dCwgTmVzdGVkTGF5b3V0XVxuICAgICAgICA8L3NjcmlwdD5cXG5cbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICBleHBvcnQgbGV0IHVzZXJcbiAgICAgICAgPC9zY3JpcHQ+XFxuXG4gICAgICAgIDxoMT5XZWxjb21lPC9oMT5cbiAgICAgICAgPHA+SGVsbG8ge3VzZXIubmFtZX0sIHdlbGNvbWUgdG8geW91ciBmaXJzdCBJbmVydGlhIGFwcCE8L3A+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCc0LDQutC10YLRiyDQv9C+INGD0LzQvtC70YfQsNC90LjRjmB9PC9oMj5cbiAgICA8cD57YNCV0YHQu9C4INCS0Ysg0LjRgdC/0L7Qu9GM0LfRg9C10YLQtSDQv9C+0YHRgtC+0Y/QvdC90YvQtSDQvNCw0LrQtdGC0YssINC80L7QttC90L4g0YPRgdGC0LDQvdC+0LLQuNGC0Ywg0LzQsNC60LXRgiDRgdGC0YDQsNC90LjRhtGLINC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINCyINC+0LHRgNCw0YLQvdC+0Lwg0LLRi9C30L7QstC1IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlc29sdmVDb21wb25lbnQoKWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0J1xuXG5yZXNvbHZlQ29tcG9uZW50OiBuYW1lID0+IGltcG9ydChcXGAuL1BhZ2VzL1xcJHtuYW1lfVxcYClcbiAgLnRoZW4oKHsgZGVmYXVsdDogcGFnZSB9KSA9PiB7XG4gICAgcGFnZS5sYXlvdXQgPSBwYWdlLmxheW91dCA9PT0gdW5kZWZpbmVkID8gTGF5b3V0IDogcGFnZS5sYXlvdXRcbiAgICByZXR1cm4gcGFnZVxuICB9KSxcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntg0K3RgtC+INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INGD0YHRgtCw0L3QvtCy0LjRgiDQvNCw0LrQtdGCINGB0YLRgNCw0L3QuNGG0Ysg0L3QsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BMYXlvdXRgfTwvaW5saW5lQ29kZT57YCwg0LXRgdC70Lgg0LzQsNC60LXRgiDQtdGJ0LUg0L3QtSDQsdGL0Lsg0YPRgdGC0LDQvdC+0LLQu9C10L0g0LTQu9GPINGN0YLQvtC5INGB0YLRgNCw0L3QuNGG0YsuINCf0YDQuCDQvdC10L7QsdGF0L7QtNC40LzQvtGB0YLQuCDQktGLINC80L7QttC10YLQtSDQvtGC0LrQu9GO0YfQuNGC0Ywg0LzQsNC60LXRgiDQv9C+INGD0LzQvtC70YfQsNC90LjRjiDQvdCwINC+0L/RgNC10LTQtdC70LXQvdC90YvRhSDRgdGC0YDQsNC90LjRhtCw0YUsINGD0YHRgtCw0L3QvtCy0LjQsiDQtNC70Y8g0L/QsNGA0LDQvNC10YLRgNCwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGxheW91dGB9PC9pbmxpbmVDb2RlPntgINC30L3QsNGH0LXQvdC40LUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbnVsbGB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxwPntgWW91IGNhbiBldmVuIGdvIGEgc3RlcCBmdXJ0aGVyIGFuZCBjb25kaXRpb25hbGx5IHNldCB0aGUgZGVmYXVsdCBwYWdlIGxheW91dCBiYXNlZCBvbiB0aGUgcGFnZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BuYW1lYH08L2lubGluZUNvZGU+e2AsIHdoaWNoIGlzIGF2YWlsYWJsZSB0byB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVzb2x2ZUNvbXBvbmVudCgpYH08L2lubGluZUNvZGU+e2AgbWV0aG9kLiBGb3IgZXhhbXBsZSwgbWF5YmUgeW91IGRvbid0IHdhbnQgdGhlIGRlZmF1bHQgbGF5b3V0IGFwcGxpZWQgdG8geW91ciBwdWJsaWMgcGFnZXMuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS1qc1wiXG4gICAgICB9fT57YGltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQnXG5cbnJlc29sdmVDb21wb25lbnQ6IG5hbWUgPT4gaW1wb3J0KFxcYC4vUGFnZXMvXFwke25hbWV9XFxgKVxuICAudGhlbigoeyBkZWZhdWx0OiBwYWdlIH0pID0+IHtcbiAgICBpZiAocGFnZS5sYXlvdXQgPT09IHVuZGVmaW5lZCAmJiAhbmFtZS5zdGFydHNXaXRoKCdQdWJsaWMvJykpIHtcbiAgICAgIHBhZ2UubGF5b3V0ID0gTGF5b3V0XG4gICAgfVxuICAgIHJldHVybiBwYWdlXG4gIH0pLFxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyPntg0JfQsNCz0L7Qu9C+0LLQvtC6INC4INC80LXRgtCw0YLQtdCz0LhgfTwvaDI+XG4gICAgPHA+e2BXaGlsZSBpdCdzIHBvc3NpYmxlIHRvIHBhc3MgdGl0bGUgYW5kIG1ldGEgdGFnIHByb3BzIGZyb20gcGFnZXMgdG8gbGF5b3V0cyAoYXMgaWxsdXN0cmF0ZWQgYWJvdmUpLCBpdCdzIG9mdGVuIGVhc2llciB0byBtYW5hZ2UgdGhpcyB1c2luZyBhIGRvY3VtZW50IGhlYWQgbGlicmFyeSBsaWtlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbnV4dC92dWUtbWV0YVwiXG4gICAgICB9fT57YFZ1ZSBNZXRhYH08L2E+e2Agb3IgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9uZmwvcmVhY3QtaGVsbWV0XCJcbiAgICAgIH19PntgUmVhY3QgSGVsbWV0YH08L2E+e2AuIFN2ZWx0ZSBoYXMgYnVpbHQtaW4gc3VwcG9ydCBmb3IgbWFuaXB1bGF0aW5nIHRoZSBkb2N1bWVudCBoZWFkIHdpdGggdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDxzdmVsdGU6aGVhZD5gfTwvaW5saW5lQ29kZT57YCBlbGVtZW50LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAndHdpZycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgICA8bGF5b3V0PlxuICAgICAgICAgICAgPGgxPldlbGNvbWU8L2gxPlxuICAgICAgICAgICAgPHA+SGVsbG8ge3sgdXNlci5uYW1lIH19LCB3ZWxjb21lIHRvIHlvdXIgZmlyc3QgSW5lcnRpYSBhcHAhPC9wPlxuICAgICAgICAgIDwvbGF5b3V0PlxuICAgICAgICA8L3RlbXBsYXRlPlxcblxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgIGltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQnXFxuXG4gICAgICAgICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICAgICAgbWV0YUluZm8oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFxcYFdlbGNvbWUgXFwke3RoaXMudXNlci5uYW1lfVxcYCxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgTGF5b3V0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIHVzZXI6IE9iamVjdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfVxuICAgICAgICA8L3NjcmlwdD5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogXCJEb24ndCBmb3JnZXQgdG8gaW5zdGFsbCBhbmQgY29uZmlndXJlIHRoZSBWdWUgTWV0YSBwYWNrYWdlLlwiXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuICAgICAgICBpbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0J1xuICAgICAgICBpbXBvcnQge0hlbG1ldH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiXFxuXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlbGNvbWUoeyB1c2VyIH0pIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgPEhlbG1ldD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+V2VsY29tZSB7dXNlci5uYW1lfTwvdGl0bGU+XG4gICAgICAgICAgICAgIDwvSGVsbWV0PlxuICAgICAgICAgICAgICA8aDE+V2VsY29tZTwvaDE+XG4gICAgICAgICAgICAgIDxwPkhlbGxvIHt1c2VyLm5hbWV9LCB3ZWxjb21lIHRvIHlvdXIgZmlyc3QgSW5lcnRpYSBhcHAhPC9wPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246IFwiRG9uJ3QgZm9yZ2V0IHRvIGluc3RhbGwgYW5kIGNvbmZpZ3VyZSB0aGUgUmVhY3QgSGVsbWV0IHBhY2thZ2UuXCJcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnaHRtbCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICAgICAgICAgIGltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQuc3ZlbHRlJ1xuICAgICAgICAgIGV4cG9ydCBjb25zdCBsYXlvdXQgPSBMYXlvdXRcbiAgICAgICAgPC9zY3JpcHQ+XFxuXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgZXhwb3J0IGxldCB1c2VyXG4gICAgICAgIDwvc2NyaXB0PlxcblxuICAgICAgICA8c3ZlbHRlOmhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+V2VsY29tZSB7dXNlci5uYW1lfTwvdGl0bGU+XG4gICAgICAgIDwvc3ZlbHRlOmhlYWQ+XFxuXG4gICAgICAgIDxoMT5XZWxjb21lPC9oMT5cbiAgICAgICAgPHA+SGVsbG8ge3VzZXIubmFtZX0sIHdlbGNvbWUgdG8geW91ciBmaXJzdCBJbmVydGlhIGFwcCE8L3A+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntgRnVydGhlciwgaWYgaXQncyBjcml0aWNhbCBmb3IgeW91ciBhcHBsaWNhdGlvbiB0byBzZXQgdGhlIHBhZ2UgdGl0bGUgYW5kIG1ldGEgdGFncyBzZXJ2ZXItc2lkZSwgeW91IGNhbiB1c2UgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi9yZXNwb25zZXMjcm9vdC10ZW1wbGF0ZS1kYXRhXCJcbiAgICAgIH19Pntgcm9vdCB0ZW1wbGF0ZSBkYXRhYH08L2E+e2AgdG8gYWNjb21wbGlzaCB0aGlzLmB9PC9wPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cblxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7Il0sInNvdXJjZVJvb3QiOiIifQ==