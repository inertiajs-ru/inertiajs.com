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
  }, "Pages are simply JavaScript components. There is nothing particularly special about them. Pages receive data from the controllers as props. Here's an example of a simple page component."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGFnZXMubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImRlc2NyaXB0aW9uIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsVUFEVztBQUVsQkMsT0FBSyxFQUFFLENBQUM7QUFDTkMsT0FBRyxFQUFFLE1BREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxtQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLG1CQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBTkksRUFTSjtBQUNERCxPQUFHLEVBQUUsb0JBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FUSSxFQVlKO0FBQ0RELE9BQUcsRUFBRSxzQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQVpJLEVBZUo7QUFDREQsT0FBRyxFQUFFLHVCQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBZkk7QUFGVyxDQUFiO0FBdUJQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdB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RTtBQTNCZ0IsS0FBRCxFQTRCM0I7QUFDRFYsVUFBSSxFQUFFLE9BREw7QUFFRE8sY0FBUSxFQUFFLEtBRlQ7QUFHREMsVUFBSSxFQUFFQyxnREFBRixxQkFISDtBQW1CREMsaUJBQVcsRUFBRTtBQW5CWixLQTVCMkIsRUFnRDNCO0FBQ0RWLFVBQUksRUFBRSxRQURMO0FBRURPLGNBQVEsRUFBRSxNQUZUO0FBR0RDLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQWhEMkIsQ0FBOUI7QUFpRUksV0FBTyxFQUFDLG9CQWpFWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeFNLLEVBMFdMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUhBQW1IO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDckksWUFBUTtBQUQ2SCxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFuSCx5QkExV0ssQ0FBUDtBQThXRDtLQWxYdUJMLFU7QUFvWHhCO0FBQ0FBLFVBQVUsQ0FBQ08sY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wYWdlcy43ZDUyNzVmOTE3NmJkN2E5MjY0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFRhYmJlZENvZGVFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJlZENvZGVFeGFtcGxlcydcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9Ch0YLRgNCw0L3QuNGG0YsnLFxuICBsaW5rczogW3tcbiAgICB1cmw6ICcjdG9wJyxcbiAgICBuYW1lOiAn0JLRgdGC0YPQv9C70LXQvdC40LUnXG4gIH0sIHtcbiAgICB1cmw6ICcj0YHQvtC30LTQsNC90LjQtS3RgdGC0YDQsNC90LjRhicsXG4gICAgbmFtZTogJ9Ch0L7Qt9C00LDQvdC40LUg0YHRgtGA0LDQvdC40YYnXG4gIH0sIHtcbiAgICB1cmw6ICcj0YHQvtC30LTQsNC90LjQtS3QvNCw0LrQtdGC0L7QsicsXG4gICAgbmFtZTogJ9Ch0L7Qt9C00LDQvdC40LUg0LzQsNC60LXRgtC+0LInXG4gIH0sIHtcbiAgICB1cmw6ICcj0L/QvtGB0YLQvtGP0L3QvdGL0LUt0LzQsNC60LXRgtGLJyxcbiAgICBuYW1lOiAn0J/QvtGB0YLQvtGP0L3QvdGL0LUg0LzQsNC60LXRgtGLJ1xuICB9LCB7XG4gICAgdXJsOiAnI9C80LDQutC10YLRiy3Qv9C+LdGD0LzQvtC70YfQsNC90LjRjicsXG4gICAgbmFtZTogJ9Cc0LDQutC10YLRiyDQv9C+INGD0LzQvtC70YfQsNC90LjRjidcbiAgfSwge1xuICAgIHVybDogJyPQt9Cw0LPQvtC70L7QstC+0Lot0Lgt0LzQtdGC0LDRgtC10LPQuCcsXG4gICAgbmFtZTogJ9CX0LDQs9C+0LvQvtCy0L7QuiDQuCDQvNC10YLQsNGC0LXQs9C4J1xuICB9XVxufTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIG1ldGFcbn07XG5jb25zdCBNRFhMYXlvdXQgPSBMYXlvdXRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cblxuXG4gICAgPGgxPntg0KHRgtGA0LDQvdC40YbRi2B9PC9oMT5cbiAgICA8cD57YNChIEluZXJ0aWEg0LrQsNC20LTQsNGPINGB0YLRgNCw0L3QuNGG0LAg0JLQsNGI0LXQs9C+INC/0YDQuNC70L7QttC10L3QuNGPINC40LzQtdC10YIg0YHQvtCx0YHRgtCy0LXQvdC90YvQuSDQutC+0L3RgtGA0L7Qu9C70LXRgCDQuCDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidC40Lkg0LrQvtC80L/QvtC90LXQvdGCIEphdmFTY3JpcHQuINCt0YLQviDQv9C+0LfQstC+0LvRj9C10YIg0L/QvtC70YPRh9Cw0YLRjCDRgtC+0LvRjNC60L4g0YLQtSDQtNCw0L3QvdGL0LUsINC60L7RgtC+0YDRi9C1INC90LXQvtCx0YXQvtC00LjQvNGLINC00LvRjyDRjdGC0L7QuSDRgdGC0YDQsNC90LjRhtGLLCDQsdC10Lcg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8gQVBJLmB9PC9wPlxuICAgIDxoMj57YNCh0L7Qt9C00LDQvdC40LUg0YHRgtGA0LDQvdC40YZgfTwvaDI+XG4gICAgPHA+e2BQYWdlcyBhcmUgc2ltcGx5IEphdmFTY3JpcHQgY29tcG9uZW50cy4gVGhlcmUgaXMgbm90aGluZyBwYXJ0aWN1bGFybHkgc3BlY2lhbCBhYm91dCB0aGVtLiBQYWdlcyByZWNlaXZlIGRhdGEgZnJvbSB0aGUgY29udHJvbGxlcnMgYXMgcHJvcHMuIEhlcmUncyBhbiBleGFtcGxlIG9mIGEgc2ltcGxlIHBhZ2UgY29tcG9uZW50LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAndHdpZycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgICA8bGF5b3V0IHRpdGxlPVwiV2VsY29tZVwiPlxuICAgICAgICAgICAgPGgxPldlbGNvbWU8L2gxPlxuICAgICAgICAgICAgPHA+SGVsbG8ge3sgdXNlci5uYW1lIH19LCB3ZWxjb21lIHRvIHlvdXIgZmlyc3QgSW5lcnRpYSBhcHAhPC9wPlxuICAgICAgICAgIDwvbGF5b3V0PlxuICAgICAgICA8L3RlbXBsYXRlPlxcblxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgIGltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQnXFxuXG4gICAgICAgICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgICBMYXlvdXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgdXNlcjogT2JqZWN0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDwvc2NyaXB0PlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbiAgICAgICAgaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCdcXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2VsY29tZSh7IHVzZXIgfSkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPVwiV2VsY29tZVwiPlxuICAgICAgICAgICAgICA8aDE+V2VsY29tZTwvaDE+XG4gICAgICAgICAgICAgIDxwPkhlbGxvIHt1c2VyLm5hbWV9LCB3ZWxjb21lIHRvIHlvdXIgZmlyc3QgSW5lcnRpYSBhcHAhPC9wPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2h0bWwnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgIGltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQuc3ZlbHRlJ1xcblxuICAgICAgICAgIGV4cG9ydCBsZXQgdXNlclxuICAgICAgICA8L3NjcmlwdD5cXG5cbiAgICAgICAgPExheW91dCB0aXRsZT1cIldlbGNvbWVcIj5cbiAgICAgICAgICA8aDE+V2VsY29tZTwvaDE+XG4gICAgICAgICAgPHA+SGVsbG8ge3VzZXIubmFtZX0sIHdlbGNvbWUgdG8geW91ciBmaXJzdCBJbmVydGlhIGFwcCE8L3A+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8aDI+e2DQodC+0LfQtNCw0L3QuNC1INC80LDQutC10YLQvtCyYH08L2gyPlxuICAgIDxwPntgV2hpbGUgbm90IHJlcXVpcmVkLCBmb3IgbW9zdCBwcm9qZWN0cyBpdCBtYWtlcyBzZW5zZSB0byBjcmVhdGUgYSBzaXRlIGxheW91dCB0aGF0IHlvdXIgcGFnZXMgY2FuIGV4dGVuZC4gTm90aWNlIGluIG91ciBwYWdlIGV4YW1wbGUgYWJvdmUgdGhhdCB3ZSdyZSB3cmFwcGluZyB0aGUgcGFnZSBjb250ZW50IHdpdGhpbiBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDxsYXlvdXQ+YH08L2lubGluZUNvZGU+e2AgY29tcG9uZW50LiBIZXJlJ3MgYW4gZXhhbXBsZSBvZiBzdWNoIGEgY29tcG9uZW50LiBUaGVyZSBpcyBub3RoaW5nIEluZXJ0aWEgc3BlY2lmaWMgaGVyZS4gVGhpcyBpcyBqdXN0IGEgc3RhbmRhcmQgSmF2YVNjcmlwdCBjb21wb25lbnQuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICd0d2lnJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgPGluZXJ0aWEtbGluayBocmVmPVwiL1wiPkhvbWU8L2luZXJ0aWEtbGluaz5cbiAgICAgICAgICAgICAgPGluZXJ0aWEtbGluayBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L2luZXJ0aWEtbGluaz5cbiAgICAgICAgICAgICAgPGluZXJ0aWEtbGluayBocmVmPVwiL2NvbnRhY3RcIj5Db250YWN0PC9pbmVydGlhLWxpbms+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgICAgICA8c2xvdCAvPlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cXG5cbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhhbmRsZXIodGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDwvc2NyaXB0PlxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIDxpbmVydGlhLWxpbms+IGNvbXBvbmVudCBpcyBhdXRvbWF0aWNhbGx5IHJlZ2lzdGVyZWQgYnkgdGhlIEluZXJ0aWEgcGx1Z2luLidcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xcblxuICAgICAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyB0aXRsZSwgY2hpbGRyZW4gfSkge1xuICAgICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuICAgICAgICAgIH0sIFt0aXRsZV0pXFxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL1wiPkhvbWU8L0luZXJ0aWFMaW5rPlxuICAgICAgICAgICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L0luZXJ0aWFMaW5rPlxuICAgICAgICAgICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL2NvbnRhY3RcIj5Db250YWN0PC9JbmVydGlhTGluaz5cbiAgICAgICAgICAgICAgPC9oZWFkZXI+XFxuXG4gICAgICAgICAgICAgIDxhcnRpY2xlPntjaGlsZHJlbn08L2FydGljbGU+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2h0bWwnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgIGltcG9ydCB7IGluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICAgIGV4cG9ydCBsZXQgdGl0bGVcbiAgICAgICAgPC9zY3JpcHQ+XFxuXG4gICAgICAgIDxzdmVsdGU6aGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgICAgPC9zdmVsdGU6aGVhZD5cXG5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxhIHVzZTppbmVydGlhIGhyZWY9XCIvXCI+SG9tZTwvYT5cbiAgICAgICAgICAgIDxhIHVzZTppbmVydGlhIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvYT5cbiAgICAgICAgICAgIDxhIHVzZTppbmVydGlhIGhyZWY9XCIvY29udGFjdFwiPkNvbnRhY3Q8L2E+XG4gICAgICAgICAgPC9oZWFkZXI+XFxuXG4gICAgICAgICAgPGFydGljbGU+XG4gICAgICAgICAgICA8c2xvdCAvPlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9tYWluPlxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8aDI+e2DQn9C+0YHRgtC+0Y/QvdC90YvQtSDQvNCw0LrQtdGC0YtgfTwvaDI+XG4gICAgPHA+e2BXaGlsZSBpdCdzIHNpbXBsZSB0byBpbXBsZW1lbnQgbGF5b3V0cyBhcyBjaGlsZHJlbiBvZiB0aGUgcGFnZSBjb21wb25lbnRzLCBpdCBkb2VzIGZvcmNlIHRoZSBsYXlvdXQgaW5zdGFuY2UgdG8gYmUgZGVzdHJveWVkIGFuZCByZWNyZWF0ZWQgYmV0d2VlbiB2aXNpdHMuIFRoaXMgbWVhbnMgeW91IGNhbm5vdCBoYXZlIHBlcnNpc3RlbnQgbGF5b3V0IHN0YXRlIHdoZW4gbmF2aWdhdGluZyBiZXR3ZWVuIHBhZ2VzLmB9PC9wPlxuICAgIDxwPntgRm9yIGV4YW1wbGUsIG1heWJlIHlvdSBoYXZlIGFuIGF1ZGlvIHBsYXllciBvbiBhIHBvZGNhc3Qgd2Vic2l0ZSB0aGF0IHlvdSB3YW50IHRvIGNvbnRpbnVlIHBsYXlpbmcgYXMgdXNlcnMgbmF2aWdhdGUgdGhlIHNpdGUuIE9yLCBtYXliZSB5b3Ugc2ltcGx5IHdhbnQgdG8gbWFpbnRhaW4gdGhlIHNjcm9sbCBwb3NpdGlvbiBpbiB5b3VyIG5hdmlnYXRpb24gYmV0d2VlbiBwYWdlIHZpc2l0cy4gSW4gdGhlc2Ugc2l0dWF0aW9ucywgdXNpbmcgdGhlIHBlcnNpc3RlbnQgbGF5b3V0cyBmZWF0dXJlIGluIEluZXJ0aWEgaXMgYSBiZXR0ZXIgY2hvaWNlLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAndHdpZycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPldlbGNvbWU8L2gxPlxuICAgICAgICAgICAgPHA+SGVsbG8ge3sgdXNlci5uYW1lIH19LCB3ZWxjb21lIHRvIHlvdXIgZmlyc3QgSW5lcnRpYSBhcHAhPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxcblxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgIGltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQnXFxuXG4gICAgICAgICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICAgICAgLy8gVXNpbmcgYSByZW5kZXIgZnVuY3Rpb25cbiAgICAgICAgICAgIGxheW91dDogKGgsIHBhZ2UpID0+IGgoTGF5b3V0LCBbcGFnZV0pLFxcblxuICAgICAgICAgICAgLy8gVXNpbmcgdGhlIHNob3J0aGFuZFxuICAgICAgICAgICAgbGF5b3V0OiBMYXlvdXQsXFxuXG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICB1c2VyOiBPYmplY3QsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgPC9zY3JpcHQ+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuICAgICAgICBpbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0J1xcblxuICAgICAgICBjb25zdCBIb21lID0gKHsgdXNlciB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxoMT5XZWxjb21lPC9oMT5cbiAgICAgICAgICAgICAgPHA+SGVsbG8ge3VzZXIubmFtZX0sIHdlbGNvbWUgdG8geW91ciBmaXJzdCBJbmVydGlhIGFwcCE8L3A+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApXG4gICAgICAgIH1cXG5cbiAgICAgICAgSG9tZS5sYXlvdXQgPSBwYWdlID0+IDxMYXlvdXQgY2hpbGRyZW49e3BhZ2V9IHRpdGxlPVwiV2VsY29tZVwiIC8+XFxuXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IEhvbWVcbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnaHRtbCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICAgICAgICAgIGltcG9ydCBMYXlvdXQgZnJvbSAnLi9MYXlvdXQuc3ZlbHRlJ1xuICAgICAgICAgIGV4cG9ydCBjb25zdCBsYXlvdXQgPSBMYXlvdXRcbiAgICAgICAgPC9zY3JpcHQ+XFxuXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgZXhwb3J0IGxldCB1c2VyXG4gICAgICAgIDwvc2NyaXB0PlxcblxuICAgICAgICA8aDE+V2VsY29tZTwvaDE+XG4gICAgICAgIDxwPkhlbGxvIHt1c2VyLm5hbWV9LCB3ZWxjb21lIHRvIHlvdXIgZmlyc3QgSW5lcnRpYSBhcHAhPC9wPlxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8cD57YFlvdSBjYW4gYWxzbyBjcmVhdGUgbW9yZSBjb21wbGV4IGxheW91dCBhcnJhbmdlbWVudHMgdXNpbmcgbmVzdGVkIGxheW91dHMuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICd0d2lnJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+V2VsY29tZTwvaDE+XG4gICAgICAgICAgICA8cD5IZWxsbyB7eyB1c2VyLm5hbWUgfX0sIHdlbGNvbWUgdG8geW91ciBmaXJzdCBJbmVydGlhIGFwcCE8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XFxuXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgaW1wb3J0IFNpdGVMYXlvdXQgZnJvbSAnLi9TaXRlTGF5b3V0J1xuICAgICAgICAgIGltcG9ydCBOZXN0ZWRMYXlvdXQgZnJvbSAnLi9OZXN0ZWRMYXlvdXQnXFxuXG4gICAgICAgICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICAgICAgLy8gVXNpbmcgYSByZW5kZXIgZnVuY3Rpb25cbiAgICAgICAgICAgIGxheW91dDogKGgsIHBhZ2UpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGgoU2l0ZUxheW91dCwgW1xuICAgICAgICAgICAgICAgIGgoTmVzdGVkTGF5b3V0LCBbcGFnZV0pLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSxcXG5cbiAgICAgICAgICAgIC8vIFVzaW5nIHRoZSBzaG9ydGhhbmRcbiAgICAgICAgICAgIGxheW91dDogW1NpdGVMYXlvdXQsIE5lc3RlZExheW91dF0sXFxuXG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICB1c2VyOiBPYmplY3QsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgPC9zY3JpcHQ+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuICAgICAgICBpbXBvcnQgU2l0ZUxheW91dCBmcm9tICcuL1NpdGVMYXlvdXQnXG4gICAgICAgIGltcG9ydCBOZXN0ZWRMYXlvdXQgZnJvbSAnLi9OZXN0ZWRMYXlvdXQnXFxuXG4gICAgICAgIGNvbnN0IEhvbWUgPSAoeyB1c2VyIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGgxPldlbGNvbWU8L2gxPlxuICAgICAgICAgICAgICA8cD5IZWxsbyB7dXNlci5uYW1lfSwgd2VsY29tZSB0byB5b3VyIGZpcnN0IEluZXJ0aWEgYXBwITwvcD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxcblxuICAgICAgICBIb21lLmxheW91dCA9IHBhZ2UgPT4gKFxuICAgICAgICAgIDxTaXRlTGF5b3V0IHRpdGxlPVwiV2VsY29tZVwiPlxuICAgICAgICAgICAgPE5lc3RlZExheW91dCBjaGlsZHJlbj17cGFnZX0gLz5cbiAgICAgICAgICA8L1NpdGVMYXlvdXQ+XG4gICAgICAgIClcXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgSG9tZVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdodG1sJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gICAgICAgICAgaW1wb3J0IFNpdGVMYXlvdXQgZnJvbSAnLi9TaXRlTGF5b3V0LnN2ZWx0ZSdcbiAgICAgICAgICBpbXBvcnQgTmVzdGVkTGF5b3V0IGZyb20gJy4vTmVzdGVkTGF5b3V0LnN2ZWx0ZSdcbiAgICAgICAgICBleHBvcnQgY29uc3QgbGF5b3V0ID0gW1NpdGVMYXlvdXQsIE5lc3RlZExheW91dF1cbiAgICAgICAgPC9zY3JpcHQ+XFxuXG4gICAgICAgIDxzY3JpcHQ+XG4gICAgICAgICAgZXhwb3J0IGxldCB1c2VyXG4gICAgICAgIDwvc2NyaXB0PlxcblxuICAgICAgICA8aDE+V2VsY29tZTwvaDE+XG4gICAgICAgIDxwPkhlbGxvIHt1c2VyLm5hbWV9LCB3ZWxjb21lIHRvIHlvdXIgZmlyc3QgSW5lcnRpYSBhcHAhPC9wPlxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8aDI+e2DQnNCw0LrQtdGC0Ysg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y5gfTwvaDI+XG4gICAgPHA+e2BJZiB5b3UncmUgdXNpbmcgcGVyc2lzdGVudCBsYXlvdXRzLCBpdCdzIHBvc3NpYmxlIHRvIHNldCBhIGRlZmF1bHQgcGFnZSBsYXlvdXQgaW4gdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlc29sdmVDb21wb25lbnQoKWB9PC9pbmxpbmVDb2RlPntgIGNhbGxiYWNrLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0J1xuXG5yZXNvbHZlQ29tcG9uZW50OiBuYW1lID0+IGltcG9ydChcXGAuL1BhZ2VzL1xcJHtuYW1lfVxcYClcbiAgLnRoZW4oKHsgZGVmYXVsdDogcGFnZSB9KSA9PiB7XG4gICAgcGFnZS5sYXlvdXQgPSBwYWdlLmxheW91dCA9PT0gdW5kZWZpbmVkID8gTGF5b3V0IDogcGFnZS5sYXlvdXRcbiAgICByZXR1cm4gcGFnZVxuICB9KSxcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgVGhpcyB3aWxsIGF1dG9tYXRpY2FsbHkgc2V0IHRoZSBwYWdlIGxheW91dCB0byBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BMYXlvdXRgfTwvaW5saW5lQ29kZT57YCBpZiBhIGxheW91dCBoYXMgbm90IGFscmVhZHkgYmVlbiBzZXQgZm9yIHRoYXQgcGFnZS4gSWYgbmVlZGVkLCB5b3UgY2FuIGRpc2FibGUgdGhlIGRlZmF1bHQgbGF5b3V0IG9uIHNwZWNpZmljIHBhZ2VzIGJ5IHNldHRpbmcgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGxheW91dGB9PC9pbmxpbmVDb2RlPntgIHRvIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG51bGxgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cD57YFlvdSBjYW4gZXZlbiBnbyBhIHN0ZXAgZnVydGhlciBhbmQgY29uZGl0aW9uYWxseSBzZXQgdGhlIGRlZmF1bHQgcGFnZSBsYXlvdXQgYmFzZWQgb24gdGhlIHBhZ2UgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbmFtZWB9PC9pbmxpbmVDb2RlPntgLCB3aGljaCBpcyBhdmFpbGFibGUgdG8gdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHJlc29sdmVDb21wb25lbnQoKWB9PC9pbmxpbmVDb2RlPntgIG1ldGhvZC4gRm9yIGV4YW1wbGUsIG1heWJlIHlvdSBkb24ndCB3YW50IHRoZSBkZWZhdWx0IGxheW91dCBhcHBsaWVkIHRvIHlvdXIgcHVibGljIHBhZ2VzLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0J1xuXG5yZXNvbHZlQ29tcG9uZW50OiBuYW1lID0+IGltcG9ydChcXGAuL1BhZ2VzL1xcJHtuYW1lfVxcYClcbiAgLnRoZW4oKHsgZGVmYXVsdDogcGFnZSB9KSA9PiB7XG4gICAgaWYgKHBhZ2UubGF5b3V0ID09PSB1bmRlZmluZWQgJiYgIW5hbWUuc3RhcnRzV2l0aCgnUHVibGljLycpKSB7XG4gICAgICBwYWdlLmxheW91dCA9IExheW91dFxuICAgIH1cbiAgICByZXR1cm4gcGFnZVxuICB9KSxcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMj57YNCX0LDQs9C+0LvQvtCy0L7QuiDQuCDQvNC10YLQsNGC0LXQs9C4YH08L2gyPlxuICAgIDxwPntgV2hpbGUgaXQncyBwb3NzaWJsZSB0byBwYXNzIHRpdGxlIGFuZCBtZXRhIHRhZyBwcm9wcyBmcm9tIHBhZ2VzIHRvIGxheW91dHMgKGFzIGlsbHVzdHJhdGVkIGFib3ZlKSwgaXQncyBvZnRlbiBlYXNpZXIgdG8gbWFuYWdlIHRoaXMgdXNpbmcgYSBkb2N1bWVudCBoZWFkIGxpYnJhcnkgbGlrZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL251eHQvdnVlLW1ldGFcIlxuICAgICAgfX0+e2BWdWUgTWV0YWB9PC9hPntgIG9yIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vbmZsL3JlYWN0LWhlbG1ldFwiXG4gICAgICB9fT57YFJlYWN0IEhlbG1ldGB9PC9hPntgLiBTdmVsdGUgaGFzIGJ1aWx0LWluIHN1cHBvcnQgZm9yIG1hbmlwdWxhdGluZyB0aGUgZG9jdW1lbnQgaGVhZCB3aXRoIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2A8c3ZlbHRlOmhlYWQ+YH08L2lubGluZUNvZGU+e2AgZWxlbWVudC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ3R3aWcnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgPGxheW91dD5cbiAgICAgICAgICAgIDxoMT5XZWxjb21lPC9oMT5cbiAgICAgICAgICAgIDxwPkhlbGxvIHt7IHVzZXIubmFtZSB9fSwgd2VsY29tZSB0byB5b3VyIGZpcnN0IEluZXJ0aWEgYXBwITwvcD5cbiAgICAgICAgICA8L2xheW91dD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cXG5cbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICBpbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0J1xcblxuICAgICAgICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgICAgIG1ldGFJbmZvKCkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcXGBXZWxjb21lIFxcJHt0aGlzLnVzZXIubmFtZX1cXGAsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgIExheW91dCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICB1c2VyOiBPYmplY3QsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgPC9zY3JpcHQ+XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246IFwiRG9uJ3QgZm9yZ2V0IHRvIGluc3RhbGwgYW5kIGNvbmZpZ3VyZSB0aGUgVnVlIE1ldGEgcGFja2FnZS5cIlxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbiAgICAgICAgaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCdcbiAgICAgICAgaW1wb3J0IHtIZWxtZXR9IGZyb20gXCJyZWFjdC1oZWxtZXRcIlxcblxuICAgICAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWxjb21lKHsgdXNlciB9KSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgIDxIZWxtZXQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPldlbGNvbWUge3VzZXIubmFtZX08L3RpdGxlPlxuICAgICAgICAgICAgICA8L0hlbG1ldD5cbiAgICAgICAgICAgICAgPGgxPldlbGNvbWU8L2gxPlxuICAgICAgICAgICAgICA8cD5IZWxsbyB7dXNlci5uYW1lfSwgd2VsY29tZSB0byB5b3VyIGZpcnN0IEluZXJ0aWEgYXBwITwvcD5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkRvbid0IGZvcmdldCB0byBpbnN0YWxsIGFuZCBjb25maWd1cmUgdGhlIFJlYWN0IEhlbG1ldCBwYWNrYWdlLlwiXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2h0bWwnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgICAgICAgICBpbXBvcnQgTGF5b3V0IGZyb20gJy4vTGF5b3V0LnN2ZWx0ZSdcbiAgICAgICAgICBleHBvcnQgY29uc3QgbGF5b3V0ID0gTGF5b3V0XG4gICAgICAgIDwvc2NyaXB0PlxcblxuICAgICAgICA8c2NyaXB0PlxuICAgICAgICAgIGV4cG9ydCBsZXQgdXNlclxuICAgICAgICA8L3NjcmlwdD5cXG5cbiAgICAgICAgPHN2ZWx0ZTpoZWFkPlxuICAgICAgICAgICAgPHRpdGxlPldlbGNvbWUge3VzZXIubmFtZX08L3RpdGxlPlxuICAgICAgICA8L3N2ZWx0ZTpoZWFkPlxcblxuICAgICAgICA8aDE+V2VsY29tZTwvaDE+XG4gICAgICAgIDxwPkhlbGxvIHt1c2VyLm5hbWV9LCB3ZWxjb21lIHRvIHlvdXIgZmlyc3QgSW5lcnRpYSBhcHAhPC9wPlxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8cD57YEZ1cnRoZXIsIGlmIGl0J3MgY3JpdGljYWwgZm9yIHlvdXIgYXBwbGljYXRpb24gdG8gc2V0IHRoZSBwYWdlIHRpdGxlIGFuZCBtZXRhIHRhZ3Mgc2VydmVyLXNpZGUsIHlvdSBjYW4gdXNlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIvcmVzcG9uc2VzI3Jvb3QtdGVtcGxhdGUtZGF0YVwiXG4gICAgICB9fT57YHJvb3QgdGVtcGxhdGUgZGF0YWB9PC9hPntgIHRvIGFjY29tcGxpc2ggdGhpcy5gfTwvcD5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=