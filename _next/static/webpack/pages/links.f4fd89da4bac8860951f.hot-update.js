webpackHotUpdate_N_E("pages/links",{

/***/ "./pages/links.mdx":
/*!*************************!*\
  !*** ./pages/links.mdx ***!
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
/* harmony import */ var _components_Notice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Notice */ "./components/Notice.js");
/* harmony import */ var _components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TabbedCodeExamples */ "./components/TabbedCodeExamples.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");



var _jsxFileName = "C:\\OSPanel\\projects\\inertiajs.com\\pages\\links.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject27() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\n\n        <a href=\"/users?active=true\" use:inertia=\"{{ only: ['users'] }}\">Show active</a>\n\n        <InertiaLink href=\"/users?active=true\" only={['users']}>Show active</InertiaLink>\n      "], ["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\\n\n        <a href=\"/users?active=true\" use:inertia=\"{{ only: ['users'] }}\">Show active</a>\\n\n        <InertiaLink href=\"/users?active=true\" only={['users']}>Show active</InertiaLink>\n      "]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <InertiaLink href=\"/users?active=true\" only={['users']}>Show active</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <InertiaLink href=\"/users?active=true\" only={['users']}>Show active</InertiaLink>\n      "]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <inertia-link href=\"/users?active=true\" :only=\"['users']\">Show active</inertia-link>\n      "]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\n\n        <a href=\"/\" use:inertia=\"{{ preserveScroll: true }}\">Home</a>\n\n        <InertiaLink href=\"/\" preserveScroll>Home</InertiaLink>\n      "], ["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\\n\n        <a href=\"/\" use:inertia=\"{{ preserveScroll: true }}\">Home</a>\\n\n        <InertiaLink href=\"/\" preserveScroll>Home</InertiaLink>\n      "]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <InertiaLink preserveScroll href=\"/\">Home</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <InertiaLink preserveScroll href=\"/\">Home</InertiaLink>\n      "]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <inertia-link href=\"/\" preserve-scroll>Home</inertia-link>\n      "]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\n\n        <input on:change={handleChange} value={query} />\n\n        <button use:inertia=\"{{ href: '/search', data: query, preserveState: true }}\">Search</button>\n\n        <InertiaLink href=\"/search\" data={query} preserveState>Search</InertiaLink>\n      "], ["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\\n\n        <input on:change={handleChange} value={query} />\\n\n        <button use:inertia=\"{{ href: '/search', data: query, preserveState: true }}\">Search</button>\\n\n        <InertiaLink href=\"/search\" data={query} preserveState>Search</InertiaLink>\n      "]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <input onChange={this.handleChange} value={query} />\n\n        <InertiaLink href=\"/search\" data={query} preserveState>Search</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <input onChange={this.handleChange} value={query} />\\n\n        <InertiaLink href=\"/search\" data={query} preserveState>Search</InertiaLink>\n      "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <input v-model=\"query\" type=\"text\" />\n\n        <inertia-link href=\"/search\" :data=\"{ query }\" preserve-state>Search</inertia-link>\n      "], ["\n        <input v-model=\"query\" type=\"text\" />\\n\n        <inertia-link href=\"/search\" :data=\"{ query }\" preserve-state>Search</inertia-link>\n      "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\n\n        <a href=\"/\" use:inertia=\"{{ replace: true }}\">Home</a>\n\n        <InertiaLink href=\"/\" replace>Home</InertiaLink>\n      "], ["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\\n\n        <a href=\"/\" use:inertia=\"{{ replace: true }}\">Home</a>\\n\n        <InertiaLink href=\"/\" replace>Home</InertiaLink>\n      "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <InertiaLink replace href=\"/\">Home</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <InertiaLink replace href=\"/\">Home</InertiaLink>\n      "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <inertia-link href=\"/\" replace>Home</inertia-link>\n      "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\n\n        <button use:inertia=\"{{ href: '/endpoint', headers: { foo: bar } }}\">Save</button>\n\n        <InertiaLink href=\"/endpoint\" headers={{ foo: bar}}>Save</InertiaLink>\n      "], ["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\\n\n        <button use:inertia=\"{{ href: '/endpoint', headers: { foo: bar } }}\">Save</button>\\n\n        <InertiaLink href=\"/endpoint\" headers={{ foo: bar}}>Save</InertiaLink>\n      "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <InertiaLink href=\"/endpoint\" headers={{ foo: bar }}>Save</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <InertiaLink href=\"/endpoint\" headers={{ foo: bar }}>Save</InertiaLink>\n      "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <inertia-link href=\"/endpoint\" :headers=\"{ foo: bar }\">Save</inertia-link>\n      "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-svelte'\n\n        <InertiaLink href=\"/endpoint\" method=\"post\" data={{ foo: bar }}>Save</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-svelte'\\n\n        <InertiaLink href=\"/endpoint\" method=\"post\" data={{ foo: bar }}>Save</InertiaLink>\n      "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <InertiaLink href=\"/endpoint\" method=\"post\" data={{ foo: bar }}>Save</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <InertiaLink href=\"/endpoint\" method=\"post\" data={{ foo: bar }}>Save</InertiaLink>\n      "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <inertia-link href=\"/endpoint\" method=\"post\" :data=\"{ foo: bar }\">Save</inertia-link>\n      "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\n\n        <a href=\"/logout\" use:inertia=\"{{ method: 'post' }}\">Logout</a>\n\n        <InertiaLink href=\"/logout\" method=\"post\">Logout</InertiaLink>\n      "], ["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\\n\n        <a href=\"/logout\" use:inertia=\"{{ method: 'post' }}\">Logout</a>\\n\n        <InertiaLink href=\"/logout\" method=\"post\">Logout</InertiaLink>\n      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <InertiaLink href=\"/logout\" method=\"post\">Logout</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <InertiaLink href=\"/logout\" method=\"post\">Logout</InertiaLink>\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <inertia-link href=\"/logout\" method=\"post\">Logout</inertia-link>\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { inertia } from '@inertiajs/inertia-svelte'\n\n        <button href=\"/logout\" use:inertia=\"{{ method: 'post' }}\" type=\"button\">Logout</button>\n\n        // Renders as:\n        <button type=\"button\">Logout</button>\n      "], ["\n        import { inertia } from '@inertiajs/inertia-svelte'\\n\n        <button href=\"/logout\" use:inertia=\"{{ method: 'post' }}\" type=\"button\">Logout</button>\\n\n        // Renders as:\n        <button type=\"button\">Logout</button>\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <InertiaLink href=\"/logout\" method=\"post\" as=\"button\" type=\"button\">Logout</InertiaLink>\n\n        // Renders as:\n        <button type=\"button\">Logout</button>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <InertiaLink href=\"/logout\" method=\"post\" as=\"button\" type=\"button\">Logout</InertiaLink>\\n\n        // Renders as:\n        <button type=\"button\">Logout</button>\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <inertia-link href=\"/logout\" method=\"post\" as=\"button\" type=\"button\">Logout</inertia-link>\n\n        // Renders as:\n        <button type=\"button\">Logout</button>\n      "], ["\n        <inertia-link href=\"/logout\" method=\"post\" as=\"button\" type=\"button\">Logout</inertia-link>\\n\n        // Renders as:\n        <button type=\"button\">Logout</button>\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\n\n        <a href=\"/\" use:inertia>Home</a>\n\n        <InertiaLink href=\"/\">Home</InertiaLink>\n      "], ["\n        import { inertia, InertiaLink } from '@inertiajs/inertia-svelte'\\n\n        <a href=\"/\" use:inertia>Home</a>\\n\n        <InertiaLink href=\"/\">Home</InertiaLink>\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        import { InertiaLink } from '@inertiajs/inertia-react'\n\n        <InertiaLink href=\"/\">Home</InertiaLink>\n      "], ["\n        import { InertiaLink } from '@inertiajs/inertia-react'\\n\n        <InertiaLink href=\"/\">Home</InertiaLink>\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        <inertia-link href=\"/\">Home</inertia-link>\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */






var meta = {
  title: 'Ссылки',
  links: [{
    url: '#top',
    name: 'Вступление'
  }, {
    url: '#создание-ссылок',
    name: 'Создание ссылок'
  }, {
    url: '#метод',
    name: 'Метод'
  }, {
    url: '#данные',
    name: 'Данные'
  }, {
    url: '#заголовки',
    name: 'Заголовки'
  }, {
    url: '#замена',
    name: 'Замена'
  }, {
    url: '#сохранение-состояния',
    name: 'Сохранение состояния'
  }, {
    url: '#сохранение-прокрутки',
    name: 'Сохранение прокрутки'
  }, {
    url: '#частичные-перезагрузки',
    name: 'Частичные перезагрузки'
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
      lineNumber: 51,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, "\u0421\u0441\u044B\u043B\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, "\u0414\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u0441\u0441\u044B\u043B\u043E\u043A \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 Inertia \u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 Inertia link. \u042D\u0442\u043E \u043B\u0435\u0433\u043A\u0430\u044F \u043E\u0431\u043E\u043B\u043E\u0447\u043A\u0430 \u0432\u043E\u043A\u0440\u0443\u0433 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u0438 \u0441\u0441\u044B\u043B\u043A\u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 158
    }
  }, "<a>"), ", \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u0435\u0440\u0435\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u0441\u043E\u0431\u044B\u0442\u0438\u044F \u043A\u043B\u0438\u043A\u0430 \u0438 \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043F\u043E\u043B\u043D\u0443\u044E \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u0412\u043E\u0442 \u043A\u0430\u043A Inertia \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0443 \u0441 \u043E\u0434\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u043C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435\u043C."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0441\u044B\u043B\u043E\u043A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, "\u0427\u0442\u043E\u0431\u044B \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 Inertia, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 Inertia link. \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435: \u043B\u044E\u0431\u044B\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u0412\u0430\u043C\u0438 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044B \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u043E\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u0432 \u0431\u0430\u0437\u043E\u0432\u044B\u0439 \u0442\u0435\u0433."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject()),
      description: 'Компонент <inertia-link> автоматически регистрируется плагином Inertia.'
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject2())
    }, {
      name: 'Svelte',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject3()),
      description: 'Директива use:inertia может применяться к любому элементу HTML.'
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E Inertia \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0441\u0441\u044B\u043B\u043A\u0438 \u043A\u0430\u043A \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u044F\u043A\u043E\u0440\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 70
    }
  }, "<a>"), ". \u041E\u0434\u043D\u0430\u043A\u043E \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u0433 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 172
    }
  }, "as"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject4())
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject5())
    }, {
      name: 'Svelte',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject6()),
      description: 'Svelte пока не поддерживает динамические элементы, но Вы можете использовать директиву inertia для достижения тех же результатов.'
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mdxType: "Notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 12
    }
  }, "POST"), "/", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 42
    }
  }, "PUT"), "/", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 71
    }
  }, "PATCH"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 102
    }
  }, "DELETE"), " \u0441\u0441\u044B\u043B\u043E\u043A ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 141
    }
  }, "<a>"), " \u043D\u0435 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F, \u043F\u043E\u0441\u043A\u043E\u043B\u044C\u043A\u0443 \u043E\u043D\u043E \u0432\u044B\u0437\u044B\u0432\u0430\u0435\u0442 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C\u044E \"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435/\u043E\u043A\u043D\u0435\". \u0412\u043C\u0435\u0441\u0442\u043E \u044D\u0442\u043E\u0433\u043E \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0435\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u043A\u043D\u043E\u043F\u043A\u0438 ", ' ', " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 381
    }
  }, "<button>"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, "\u041C\u0435\u0442\u043E\u0434"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043C\u0435\u0442\u043E\u0434 \u0434\u043B\u044F \u0437\u0430\u043F\u0440\u043E\u0441\u0430 \u0441\u0441\u044B\u043B\u043A\u0438 Inertia. \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 90
    }
  }, "GET"), ", \u043D\u043E \u0412\u044B \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 175
    }
  }, "POST"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 229
    }
  }, "PUT"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 282
    }
  }, "PATCH"), " \u0438 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 338
    }
  }, "DELETE"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject7()),
      description: 'The <inertia-link> component is automatically registered by the Inertia plugin.'
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject8())
    }, {
      name: 'Svelte',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject9())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 5
    }
  }, "\u0414\u0430\u043D\u043D\u044B\u0435"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 5
    }
  }, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 57
    }
  }, "data"), ". \u042D\u0442\u043E \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 126
    }
  }, "object"), " \u0438\u043B\u0438 \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 195
    }
  }, "FormData"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject10()),
      description: 'The <inertia-link> component is automatically registered by the Inertia plugin.'
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject11())
    }, {
      name: 'Svelte',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject12())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 5
    }
  }, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 5
    }
  }, "\u041E\u043F\u0446\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 18
    }
  }, "headers"), " \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0412\u0430\u043C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438 \u0432 \u0441\u0441\u044B\u043B\u043A\u0443 Inertia. \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u0447\u0442\u043E \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438 Inertia \u0438\u043C\u0435\u044E\u0442 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442 \u0438 \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u0430\u043D\u044B."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject13()),
      description: 'The <inertia-link> component is automatically registered by the Inertia plugin.'
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject14())
    }, {
      name: 'Svelte',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject15())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 5
    }
  }, "\u0417\u0430\u043C\u0435\u043D\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 5
    }
  }, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430. \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u0442 (\u043D\u043E\u0432\u043E\u0435) \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 119
    }
  }, "window.history.pushState"), ") \u0432 \u0438\u0441\u0442\u043E\u0440\u0438\u044E, \u043E\u0434\u043D\u0430\u043A\u043E \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 243
    }
  }, "window.history.replaceState"), "), \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0432 \u0434\u043B\u044F \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 344
    }
  }, "replace"), " \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 true. \u042D\u0442\u043E \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043A \u0442\u043E\u043C\u0443, \u0447\u0442\u043E \u0432\u0438\u0437\u0438\u0442 \u0437\u0430\u043C\u0435\u043D\u0438\u0442 \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0432\u043C\u0435\u0441\u0442\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u043E\u0432\u043E\u0433\u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u0438 \u0432 \u0441\u0442\u0435\u043A."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject16()),
      description: 'The <inertia-link> component is automatically registered by the Inertia plugin.'
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject17())
    }, {
      name: 'Svelte',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject18())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 5
    }
  }, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 91
    }
  }, "preserve-state"), ". \u042D\u0442\u043E \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0442\u0438\u0442 \u043F\u043E\u043B\u043D\u044B\u0439 \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u044B\u0439 \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u043D\u0433 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u042D\u0442\u043E \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u043F\u043E\u043B\u0435\u0437\u043D\u043E \u0434\u043B\u044F \u0444\u043E\u0440\u043C, \u0442\u0430\u043A \u043A\u0430\u043A \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044C \u0440\u0443\u0447\u043D\u043E\u0433\u043E \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E\u0433\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u0435\u0439 \u0432\u0432\u043E\u0434\u0430, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0444\u043E\u043A\u0443\u0441 \u043D\u0430 \u043F\u043E\u043B\u0435 \u0432\u0432\u043E\u0434\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject19()),
      description: 'Компонент <inertia-link> автоматически регистрируется плагином Inertia.'
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject20())
    }, {
      name: 'Svelte',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject21())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 5
    }
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 5
    }
  }, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0430\u0442\u0440\u0438\u0431\u0443\u0442 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 43
    }
  }, "preserve-scroll"), ", \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0435\u0434\u043E\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0431\u0440\u043E\u0441 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u0438 Inertia \u043F\u0440\u0438 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject22()),
      description: 'Компонент <inertia-link> автоматически регистрируется плагином Inertia.'
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject23())
    }, {
      name: 'Svelte',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject24())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 5
    }
  }, "\u0414\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/scroll-management"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 70
    }
  }), "\u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u043A\u0440\u0443\u0442\u043A\u043E\u0439"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 5
    }
  }, "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 5
    }
  }, "\u041E\u043F\u0446\u0438\u044F ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 18
    }
  }, "only"), " option allows you to request a subset of the props (data) from the server on subsequent visits to the same page."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Vue.js',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject25()),
      description: 'The <inertia-link> component is automatically registered by the Inertia plugin.'
    }, {
      name: 'React',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject26())
    }, {
      name: 'Svelte',
      language: 'jsx',
      code: dedent_js__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject27())
    }],
    mdxType: "TabbedCodeExamples",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 5
    }
  }, "For more information, see the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/partial-reloads"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 42
    }
  }), "partial reloads"), " page."));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGlua3MubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImxhbmd1YWdlIiwiY29kZSIsImRlZGVudCIsImRlc2NyaXB0aW9uIiwiaXNNRFhDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsUUFEVztBQUVsQkMsT0FBSyxFQUFFLENBQUM7QUFDTkMsT0FBRyxFQUFFLE1BREM7QUFFTkMsUUFBSSxFQUFFO0FBRkEsR0FBRCxFQUdKO0FBQ0RELE9BQUcsRUFBRSxrQkFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJLEVBTUo7QUFDREQsT0FBRyxFQUFFLFFBREo7QUFFREMsUUFBSSxFQUFFO0FBRkwsR0FOSSxFQVNKO0FBQ0RELE9BQUcsRUFBRSxTQURKO0FBRURDLFFBQUksRUFBRTtBQUZMLEdBVEksRUFZSjtBQUNERCxPQUFHLEVBQUUsWUFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxH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USxFQUFFLEtBRm1CO0FBRzdCQyxVQUFJLEVBQUVDLGdEQUFGLHFCQUh5QjtBQU03QkMsaUJBQVcsRUFBRTtBQU5nQixLQUFELEVBTzNCO0FBQ0RWLFVBQUksRUFBRSxPQURMO0FBRURPLGNBQVEsRUFBRSxLQUZUO0FBR0RDLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQVAyQixFQWMzQjtBQUNEVCxVQUFJLEVBQUUsUUFETDtBQUVETyxjQUFRLEVBQUUsS0FGVDtBQUdEQyxVQUFJLEVBQUVDLGdEQUFGO0FBSEgsS0FkMkIsQ0FBOUI7QUFzQkksV0FBTyxFQUFDLG9CQXRCWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN05LLEVBb1BMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBQXFDO0FBQUcsY0FBVSxFQUFDO0FBQWQsS0FBc0I7QUFDdkQsWUFBUTtBQUQrQyxHQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFyQyxXQXBQSyxDQUFQO0FBd1BEO0tBNVB1QkwsVTtBQThQeEI7QUFDQUEsVUFBVSxDQUFDTyxjQUFYLEdBQTRCLElBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpbmtzLmY0ZmQ4OWRhNGJhYzg4NjA5NTFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnXG5cbi8qIEBqc3ggbWR4ICovXG5pbXBvcnQgZGVkZW50IGZyb20gJ2RlZGVudC1qcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgTm90aWNlIGZyb20gJy4uL2NvbXBvbmVudHMvTm90aWNlJ1xuaW1wb3J0IFRhYmJlZENvZGVFeGFtcGxlcyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJlZENvZGVFeGFtcGxlcydcbmV4cG9ydCBjb25zdCBtZXRhID0ge1xuICB0aXRsZTogJ9Ch0YHRi9C70LrQuCcsXG4gIGxpbmtzOiBbe1xuICAgIHVybDogJyN0b3AnLFxuICAgIG5hbWU6ICfQktGB0YLRg9C/0LvQtdC90LjQtSdcbiAgfSwge1xuICAgIHVybDogJyPRgdC+0LfQtNCw0L3QuNC1LdGB0YHRi9C70L7QuicsXG4gICAgbmFtZTogJ9Ch0L7Qt9C00LDQvdC40LUg0YHRgdGL0LvQvtC6J1xuICB9LCB7XG4gICAgdXJsOiAnI9C80LXRgtC+0LQnLFxuICAgIG5hbWU6ICfQnNC10YLQvtC0J1xuICB9LCB7XG4gICAgdXJsOiAnI9C00LDQvdC90YvQtScsXG4gICAgbmFtZTogJ9CU0LDQvdC90YvQtSdcbiAgfSwge1xuICAgIHVybDogJyPQt9Cw0LPQvtC70L7QstC60LgnLFxuICAgIG5hbWU6ICfQl9Cw0LPQvtC70L7QstC60LgnXG4gIH0sIHtcbiAgICB1cmw6ICcj0LfQsNC80LXQvdCwJyxcbiAgICBuYW1lOiAn0JfQsNC80LXQvdCwJ1xuICB9LCB7XG4gICAgdXJsOiAnI9GB0L7RhdGA0LDQvdC10L3QuNC1LdGB0L7RgdGC0L7Rj9C90LjRjycsXG4gICAgbmFtZTogJ9Ch0L7RhdGA0LDQvdC10L3QuNC1INGB0L7RgdGC0L7Rj9C90LjRjydcbiAgfSwge1xuICAgIHVybDogJyPRgdC+0YXRgNCw0L3QtdC90LjQtS3Qv9GA0L7QutGA0YPRgtC60LgnLFxuICAgIG5hbWU6ICfQodC+0YXRgNCw0L3QtdC90LjQtSDQv9GA0L7QutGA0YPRgtC60LgnXG4gIH0sIHtcbiAgICB1cmw6ICcj0YfQsNGB0YLQuNGH0L3Ri9C1LdC/0LXRgNC10LfQsNCz0YDRg9C30LrQuCcsXG4gICAgbmFtZTogJ9Cn0LDRgdGC0LjRh9C90YvQtSDQv9C10YDQtdC30LDQs9GA0YPQt9C60LgnXG4gIH1dXG59O1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgbWV0YVxufTtcbmNvbnN0IE1EWExheW91dCA9IExheW91dFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG5cbiAgICA8aDE+e2DQodGB0YvQu9C60LhgfTwvaDE+XG4gICAgPHA+e2DQlNC70Y8g0YHQvtC30LTQsNC90LjRjyDRgdGB0YvQu9C+0Log0LIg0L/RgNC40LvQvtC20LXQvdC40LggSW5lcnRpYSDQktCw0Lwg0L3QtdC+0LHRhdC+0LTQuNC80L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINC60L7QvNC/0L7QvdC10L3RgiBJbmVydGlhIGxpbmsuINCt0YLQviDQu9C10LPQutCw0Y8g0L7QsdC+0LvQvtGH0LrQsCDQstC+0LrRgNGD0LMg0YHRgtCw0L3QtNCw0YDRgtC90L7QuSDRgdGB0YvQu9C60Lgg0YHRgdGL0LvQutC4IGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YDxhPmB9PC9pbmxpbmVDb2RlPntgLCDQutC+0YLQvtGA0LDRjyDQv9C10YDQtdGF0LLQsNGC0YvQstCw0LXRgiDRgdC+0LHRi9GC0LjRjyDQutC70LjQutCwINC4INC/0YDQtdC00L7RgtCy0YDQsNGJ0LDQtdGCINC/0L7Qu9C90YPRjiDQv9C10YDQtdC30LDQs9GA0YPQt9C60YMg0YHRgtGA0LDQvdC40YbRiy4g0JLQvtGCINC60LDQuiBJbmVydGlhINC+0LHQtdGB0L/QtdGH0LjQstCw0LXRgiDRgNCw0LHQvtGC0YMg0YEg0L7QtNC90L7RgdGC0YDQsNC90LjRh9C90YvQvCDQv9GA0LjQu9C+0LbQtdC90LjQtdC8LmB9PC9wPlxuICAgIDxoMj57YNCh0L7Qt9C00LDQvdC40LUg0YHRgdGL0LvQvtC6YH08L2gyPlxuICAgIDxwPntg0KfRgtC+0LHRiyDRgdC+0LfQtNCw0YLRjCDRgdGB0YvQu9C60YMgSW5lcnRpYSwg0LjRgdC/0L7Qu9GM0LfRg9C50YLQtSDQutC+0LzQv9C+0L3QtdC90YIgSW5lcnRpYSBsaW5rLiDQntCx0YDQsNGC0LjRgtC1INCy0L3QuNC80LDQvdC40LU6INC70Y7QsdGL0LUg0L/RgNC10LTQvtGB0YLQsNCy0LvQtdC90L3Ri9C1INCS0LDQvNC4INCw0YLRgNC40LHRg9GC0Ysg0LHRg9C00YPRgiDQv9GA0L7QutGB0LjRgNC+0LLQsNC90Ysg0LIg0LHQsNC30L7QstGL0Lkg0YLQtdCzLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPGluZXJ0aWEtbGluayBocmVmPVwiL1wiPkhvbWU8L2luZXJ0aWEtbGluaz5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogJ9Ca0L7QvNC/0L7QvdC10L3RgiA8aW5lcnRpYS1saW5rPiDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDRgNC10LPQuNGB0YLRgNC40YDRg9C10YLRgdGPINC/0LvQsNCz0LjQvdC+0LwgSW5lcnRpYS4nXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL1wiPkhvbWU8L0luZXJ0aWFMaW5rPlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBpbmVydGlhLCBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1zdmVsdGUnXFxuXG4gICAgICAgIDxhIGhyZWY9XCIvXCIgdXNlOmluZXJ0aWE+SG9tZTwvYT5cXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvXCI+SG9tZTwvSW5lcnRpYUxpbms+XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246ICfQlNC40YDQtdC60YLQuNCy0LAgdXNlOmluZXJ0aWEg0LzQvtC20LXRgiDQv9GA0LjQvNC10L3Rj9GC0YzRgdGPINC6INC70Y7QsdC+0LzRgyDRjdC70LXQvNC10L3RgtGDIEhUTUwuJ1xuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8cD57YNCf0L4g0YPQvNC+0LvRh9Cw0L3QuNGOIEluZXJ0aWEg0L7RgtC+0LHRgNCw0LbQsNC10YIg0YHRgdGL0LvQutC4INC60LDQuiDRjdC70LXQvNC10L3RgtGLINGP0LrQvtGA0Y8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgPGE+YH08L2lubGluZUNvZGU+e2AuINCe0LTQvdCw0LrQviDQktGLINC80L7QttC10YLQtSDQuNC30LzQtdC90LjRgtGMINGC0LXQsyDRgSDQv9C+0LzQvtGJ0YzRjiDQsNGC0YDQuNCx0YPRgtCwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGFzYH08L2lubGluZUNvZGU+e2AuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8aW5lcnRpYS1saW5rIGhyZWY9XCIvbG9nb3V0XCIgbWV0aG9kPVwicG9zdFwiIGFzPVwiYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPkxvZ291dDwvaW5lcnRpYS1saW5rPlxcblxuICAgICAgICAvLyBSZW5kZXJzIGFzOlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvbG9nb3V0XCIgbWV0aG9kPVwicG9zdFwiIGFzPVwiYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPkxvZ291dDwvSW5lcnRpYUxpbms+XFxuXG4gICAgICAgIC8vIFJlbmRlcnMgYXM6XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPkxvZ291dDwvYnV0dG9uPlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBpbmVydGlhIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcXG5cbiAgICAgICAgPGJ1dHRvbiBocmVmPVwiL2xvZ291dFwiIHVzZTppbmVydGlhPVwie3sgbWV0aG9kOiAncG9zdCcgfX1cIiB0eXBlPVwiYnV0dG9uXCI+TG9nb3V0PC9idXR0b24+XFxuXG4gICAgICAgIC8vIFJlbmRlcnMgYXM6XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPkxvZ291dDwvYnV0dG9uPlxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU3ZlbHRlINC/0L7QutCwINC90LUg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGCINC00LjQvdCw0LzQuNGH0LXRgdC60LjQtSDRjdC70LXQvNC10L3RgtGLLCDQvdC+INCS0Ysg0LzQvtC20LXRgtC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQtNC40YDQtdC60YLQuNCy0YMgaW5lcnRpYSDQtNC70Y8g0LTQvtGB0YLQuNC20LXQvdC40Y8g0YLQtdGFINC20LUg0YDQtdC30YPQu9GM0YLQsNGC0L7Qsi4nXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxOb3RpY2UgbWR4VHlwZT1cIk5vdGljZVwiPlxuICDQodC+0LfQtNCw0L3QuNC1IDxpbmxpbmVDb2RlPlBPU1Q8L2lubGluZUNvZGU+LzxpbmxpbmVDb2RlPlBVVDwvaW5saW5lQ29kZT4vPGlubGluZUNvZGU+UEFUQ0g8L2lubGluZUNvZGU+IDxpbmxpbmVDb2RlPkRFTEVURTwvaW5saW5lQ29kZT4g0YHRgdGL0LvQvtC6IDxpbmxpbmVDb2RlPiZsdDthJmd0OzwvaW5saW5lQ29kZT4g0L3QtSDRgNC10LrQvtC80LXQvdC00YPQtdGC0YHRjywg0L/QvtGB0LrQvtC70YzQutGDINC+0L3QviDQstGL0LfRi9Cy0LDQtdGCINC/0YDQvtCx0LvQtdC80Ysg0YEg0LTQvtGB0YLRg9C/0L3QvtGB0YLRjNGOIFwi0J7RgtC60YDRi9GC0Ywg0YHRgdGL0LvQutGDINCyINC90L7QstC+0Lkg0LLQutC70LDQtNC60LUv0L7QutC90LVcIi4g0JLQvNC10YHRgtC+INGN0YLQvtCz0L4g0YDQsNGB0YHQvNC+0YLRgNC40YLQtSDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNGPINCx0L7Qu9C10LUg0L/QvtC00YXQvtC00Y/RidC10LPQviDRjdC70LXQvNC10L3RgtCwLCDQvdCw0L/RgNC40LzQtdGAINC60L3QvtC/0LrQuCB7JyAnfSA8aW5saW5lQ29kZT4mbHQ7YnV0dG9uJmd0OzwvaW5saW5lQ29kZT4uXG4gICAgPC9Ob3RpY2U+XG4gICAgPGgyPntg0JzQtdGC0L7QtGB9PC9oMj5cbiAgICA8cD57YNCS0Ysg0LzQvtC20LXRgtC1INGD0LrQsNC30LDRgtGMINC80LXRgtC+0LQg0LTQu9GPINC30LDQv9GA0L7RgdCwINGB0YHRi9C70LrQuCBJbmVydGlhLiDQn9C+INGD0LzQvtC70YfQsNC90LjRjiDQuNGB0L/QvtC70YzQt9GD0LXRgtGB0Y8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgR0VUYH08L2lubGluZUNvZGU+e2AsINC90L4g0JLRiyDRgtCw0LrQttC1INC80L7QttC10YLQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgUE9TVGB9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BQVVRgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgUEFUQ0hgfTwvaW5saW5lQ29kZT57YCDQuCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BERUxFVEVgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxpbmVydGlhLWxpbmsgaHJlZj1cIi9sb2dvdXRcIiBtZXRob2Q9XCJwb3N0XCI+TG9nb3V0PC9pbmVydGlhLWxpbms+XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246ICdUaGUgPGluZXJ0aWEtbGluaz4gY29tcG9uZW50IGlzIGF1dG9tYXRpY2FsbHkgcmVnaXN0ZXJlZCBieSB0aGUgSW5lcnRpYSBwbHVnaW4uJ1xuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xcblxuICAgICAgICA8SW5lcnRpYUxpbmsgaHJlZj1cIi9sb2dvdXRcIiBtZXRob2Q9XCJwb3N0XCI+TG9nb3V0PC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgaW5lcnRpYSwgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICA8YSBocmVmPVwiL2xvZ291dFwiIHVzZTppbmVydGlhPVwie3sgbWV0aG9kOiAncG9zdCcgfX1cIj5Mb2dvdXQ8L2E+XFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL2xvZ291dFwiIG1ldGhvZD1cInBvc3RcIj5Mb2dvdXQ8L0luZXJ0aWFMaW5rPlxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8aDI+e2DQlNCw0L3QvdGL0LVgfTwvaDI+XG4gICAgPHA+e2DQktGLINC80L7QttC10YLQtSDQtNC+0LHQsNCy0LjRgtGMINC00LDQvdC90YvQtSDRgSDQv9C+0LzQvtGJ0YzRjiDQsNGC0YDQuNCx0YPRgtCwIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGRhdGFgfTwvaW5saW5lQ29kZT57YC4g0K3RgtC+INC80L7QttC10YIg0LHRi9GC0YwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgb2JqZWN0YH08L2lubGluZUNvZGU+e2Ag0LjQu9C4INGN0LrQt9C10LzQv9C70Y/RgCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BGb3JtRGF0YWB9PC9pbmxpbmVDb2RlPntgLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPGluZXJ0aWEtbGluayBocmVmPVwiL2VuZHBvaW50XCIgbWV0aG9kPVwicG9zdFwiIDpkYXRhPVwieyBmb286IGJhciB9XCI+U2F2ZTwvaW5lcnRpYS1saW5rPlxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIDxpbmVydGlhLWxpbms+IGNvbXBvbmVudCBpcyBhdXRvbWF0aWNhbGx5IHJlZ2lzdGVyZWQgYnkgdGhlIEluZXJ0aWEgcGx1Z2luLidcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvZW5kcG9pbnRcIiBtZXRob2Q9XCJwb3N0XCIgZGF0YT17eyBmb286IGJhciB9fT5TYXZlPC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICA8SW5lcnRpYUxpbmsgaHJlZj1cIi9lbmRwb2ludFwiIG1ldGhvZD1cInBvc3RcIiBkYXRhPXt7IGZvbzogYmFyIH19PlNhdmU8L0luZXJ0aWFMaW5rPlxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8aDI+e2DQl9Cw0LPQvtC70L7QstC60LhgfTwvaDI+XG4gICAgPHA+e2DQntC/0YbQuNGPIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGhlYWRlcnNgfTwvaW5saW5lQ29kZT57YCDQv9C+0LfQstC+0LvRj9C10YIg0JLQsNC8INC00L7QsdCw0LLQu9GP0YLRjCDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60LjQtSDQt9Cw0LPQvtC70L7QstC60Lgg0LIg0YHRgdGL0LvQutGDIEluZXJ0aWEuINCe0LHRgNCw0YLQuNGC0LUg0LLQvdC40LzQsNC90LjQtSwg0YfRgtC+INC30LDQs9C+0LvQvtCy0LrQuCBJbmVydGlhINC40LzQtdGO0YIg0L/RgNC40L7RgNC40YLQtdGCINC4INC/0L7RjdGC0L7QvNGDINC90LUg0LzQvtCz0YPRgiDQsdGL0YLRjCDQv9C10YDQtdC30LDQv9C40YHQsNC90YsuYH08L3A+XG4gICAgPFRhYmJlZENvZGVFeGFtcGxlcyBleGFtcGxlcz17W3tcbiAgICAgIG5hbWU6ICdWdWUuanMnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICA8aW5lcnRpYS1saW5rIGhyZWY9XCIvZW5kcG9pbnRcIiA6aGVhZGVycz1cInsgZm9vOiBiYXIgfVwiPlNhdmU8L2luZXJ0aWEtbGluaz5cbiAgICAgIGAsXG4gICAgICBkZXNjcmlwdGlvbjogJ1RoZSA8aW5lcnRpYS1saW5rPiBjb21wb25lbnQgaXMgYXV0b21hdGljYWxseSByZWdpc3RlcmVkIGJ5IHRoZSBJbmVydGlhIHBsdWdpbi4nXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1JlYWN0JyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnXFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL2VuZHBvaW50XCIgaGVhZGVycz17eyBmb286IGJhciB9fT5TYXZlPC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgaW5lcnRpYSwgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICA8YnV0dG9uIHVzZTppbmVydGlhPVwie3sgaHJlZjogJy9lbmRwb2ludCcsIGhlYWRlcnM6IHsgZm9vOiBiYXIgfSB9fVwiPlNhdmU8L2J1dHRvbj5cXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvZW5kcG9pbnRcIiBoZWFkZXJzPXt7IGZvbzogYmFyfX0+U2F2ZTwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCX0LDQvNC10L3QsGB9PC9oMj5cbiAgICA8cD57YNCS0Ysg0LzQvtC20LXRgtC1INGD0LrQsNC30LDRgtGMINC/0L7QstC10LTQtdC90LjQtSDQuNGB0YLQvtGA0LjQuCDQsdGA0LDRg9C30LXRgNCwLiDQn9C+INGD0LzQvtC70YfQsNC90LjRjiDRgdGC0YDQsNC90LjRhtCwINC/0L7RgdC10YnQtdC90LjRjyDQtNC+0LHQsNCy0LvRj9C10YIgKNC90L7QstC+0LUpINGB0L7RgdGC0L7Rj9C90LjQtSAoYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlYH08L2lubGluZUNvZGU+e2ApINCyINC40YHRgtC+0YDQuNGOLCDQvtC00L3QsNC60L4g0YLQsNC60LbQtSDQvNC+0LbQvdC+INC30LDQvNC10L3QuNGC0Ywg0YHQvtGB0YLQvtGP0L3QuNC1IChgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGVgfTwvaW5saW5lQ29kZT57YCksINGD0YHRgtCw0L3QvtCy0LjQsiDQtNC70Y8g0LDRgtGA0LjQsdGD0YLQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2ByZXBsYWNlYH08L2lubGluZUNvZGU+e2Ag0LfQvdCw0YfQtdC90LjQtSB0cnVlLiDQrdGC0L4g0L/RgNC40LLQtdC00LXRgiDQuiDRgtC+0LzRgywg0YfRgtC+INCy0LjQt9C40YIg0LfQsNC80LXQvdC40YIg0YLQtdC60YPRidC10LUg0YHQvtGB0YLQvtGP0L3QuNC1INC40YHRgtC+0YDQuNC4INCy0LzQtdGB0YLQviDQtNC+0LHQsNCy0LvQtdC90LjRjyDQvdC+0LLQvtCz0L4g0YHQvtGB0YLQvtGP0L3QuNGPINC40YHRgtC+0YDQuNC4INCyINGB0YLQtdC6LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPGluZXJ0aWEtbGluayBocmVmPVwiL1wiIHJlcGxhY2U+SG9tZTwvaW5lcnRpYS1saW5rPlxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIDxpbmVydGlhLWxpbms+IGNvbXBvbmVudCBpcyBhdXRvbWF0aWNhbGx5IHJlZ2lzdGVyZWQgYnkgdGhlIEluZXJ0aWEgcGx1Z2luLidcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIHJlcGxhY2UgaHJlZj1cIi9cIj5Ib21lPC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgaW5lcnRpYSwgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICA8YSBocmVmPVwiL1wiIHVzZTppbmVydGlhPVwie3sgcmVwbGFjZTogdHJ1ZSB9fVwiPkhvbWU8L2E+XFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL1wiIHJlcGxhY2U+SG9tZTwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCh0L7RhdGA0LDQvdC10L3QuNC1INGB0L7RgdGC0L7Rj9C90LjRj2B9PC9oMj5cbiAgICA8cD57YNCS0Ysg0LzQvtC20LXRgtC1INGB0L7RhdGA0LDQvdC40YLRjCDQu9C+0LrQsNC70YzQvdC+0LUg0YHQvtGB0YLQvtGP0L3QuNC1INC60L7QvNC/0L7QvdC10L3RgtCwINGB0YLRgNCw0L3QuNGG0Ysg0YEg0L/QvtC80L7RidGM0Y4g0LDRgtGA0LjQsdGD0YLQsCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwcmVzZXJ2ZS1zdGF0ZWB9PC9pbmxpbmVDb2RlPntgLiDQrdGC0L4g0L/RgNC10LTQvtGC0LLRgNCw0YLQuNGCINC/0L7Qu9C90YvQuSDQv9C+0LLRgtC+0YDQvdGL0Lkg0YDQtdC90LTQtdGA0LjQvdCzINC60L7QvNC/0L7QvdC10L3RgtCwINGB0YLRgNCw0L3QuNGG0YsuINCt0YLQviDQvtGB0L7QsdC10L3QvdC+INC/0L7Qu9C10LfQvdC+INC00LvRjyDRhNC+0YDQvCwg0YLQsNC6INC60LDQuiDQktGLINC80L7QttC10YLQtSDQuNC30LHQtdC20LDRgtGMINGA0YPRh9C90L7Qs9C+INC/0L7QstGC0L7RgNC90L7Qs9C+INC30LDQv9C+0LvQvdC10L3QuNGPINC/0L7Qu9C10Lkg0LLQstC+0LTQsCwg0LAg0YLQsNC60LbQtSDQvNC+0LbQtdGC0LUg0YHQvtGF0YDQsNC90LjRgtGMINGE0L7QutGD0YEg0L3QsCDQv9C+0LvQtSDQstCy0L7QtNCwLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJxdWVyeVwiIHR5cGU9XCJ0ZXh0XCIgLz5cXG5cbiAgICAgICAgPGluZXJ0aWEtbGluayBocmVmPVwiL3NlYXJjaFwiIDpkYXRhPVwieyBxdWVyeSB9XCIgcHJlc2VydmUtc3RhdGU+U2VhcmNoPC9pbmVydGlhLWxpbms+XG4gICAgICBgLFxuICAgICAgZGVzY3JpcHRpb246ICfQmtC+0LzQv9C+0L3QtdC90YIgPGluZXJ0aWEtbGluaz4g0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0YDQtdCz0LjRgdGC0YDQuNGA0YPQtdGC0YHRjyDQv9C70LDQs9C40L3QvtC8IEluZXJ0aWEuJ1xuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0J1xcblxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB2YWx1ZT17cXVlcnl9IC8+XFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL3NlYXJjaFwiIGRhdGE9e3F1ZXJ5fSBwcmVzZXJ2ZVN0YXRlPlNlYXJjaDwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IGluZXJ0aWEsIEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcXG5cbiAgICAgICAgPGlucHV0IG9uOmNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17cXVlcnl9IC8+XFxuXG4gICAgICAgIDxidXR0b24gdXNlOmluZXJ0aWE9XCJ7eyBocmVmOiAnL3NlYXJjaCcsIGRhdGE6IHF1ZXJ5LCBwcmVzZXJ2ZVN0YXRlOiB0cnVlIH19XCI+U2VhcmNoPC9idXR0b24+XFxuXG4gICAgICAgIDxJbmVydGlhTGluayBocmVmPVwiL3NlYXJjaFwiIGRhdGE9e3F1ZXJ5fSBwcmVzZXJ2ZVN0YXRlPlNlYXJjaDwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxoMj57YNCh0L7RhdGA0LDQvdC10L3QuNC1INC/0YDQvtC60YDRg9GC0LrQuGB9PC9oMj5cbiAgICA8cD57YNCS0Ysg0LzQvtC20LXRgtC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQsNGC0YDQuNCx0YPRgiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwcmVzZXJ2ZS1zY3JvbGxgfTwvaW5saW5lQ29kZT57YCwg0YfRgtC+0LHRiyDQv9GA0LXQtNC+0YLQstGA0LDRgtC40YLRjCDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuNC5INGB0LHRgNC+0YEg0L/QvtC30LjRhtC40Lgg0L/RgNC+0LrRgNGD0YLQutC4IEluZXJ0aWEg0L/RgNC4INC/0L7RgdC10YnQtdC90LjQuC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ1Z1ZS5qcycsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDxpbmVydGlhLWxpbmsgaHJlZj1cIi9cIiBwcmVzZXJ2ZS1zY3JvbGw+SG9tZTwvaW5lcnRpYS1saW5rPlxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiAn0JrQvtC80L/QvtC90LXQvdGCIDxpbmVydGlhLWxpbms+INCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INGA0LXQs9C40YHRgtGA0LjRgNGD0LXRgtGB0Y8g0L/Qu9Cw0LPQuNC90L7QvCBJbmVydGlhLidcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIHByZXNlcnZlU2Nyb2xsIGhyZWY9XCIvXCI+SG9tZTwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N2ZWx0ZScsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCB7IGluZXJ0aWEsIEluZXJ0aWFMaW5rIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXN2ZWx0ZSdcXG5cbiAgICAgICAgPGEgaHJlZj1cIi9cIiB1c2U6aW5lcnRpYT1cInt7IHByZXNlcnZlU2Nyb2xsOiB0cnVlIH19XCI+SG9tZTwvYT5cXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvXCIgcHJlc2VydmVTY3JvbGw+SG9tZTwvSW5lcnRpYUxpbms+XG4gICAgICBgXG4gICAgfV19IG1keFR5cGU9XCJUYWJiZWRDb2RlRXhhbXBsZXNcIiAvPlxuICAgIDxwPntg0JTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtC5INC40L3RhNC+0YDQvNCw0YbQuNC4INC/0L7RgdC10YLQuNGC0LUg0YHRgtGA0LDQvdC40YbRgyBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3Njcm9sbC1tYW5hZ2VtZW50XCJcbiAgICAgIH19Pntg0YPQv9GA0LDQstC70LXQvdC40Y8g0L/RgNC+0LrRgNGD0YLQutC+0LlgfTwvYT57YC5gfTwvcD5cbiAgICA8aDI+e2DQp9Cw0YHRgtC40YfQvdGL0LUg0L/QtdGA0LXQt9Cw0LPRgNGD0LfQutC4YH08L2gyPlxuICAgIDxwPntg0J7Qv9GG0LjRjyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bvbmx5YH08L2lubGluZUNvZGU+e2Agb3B0aW9uIGFsbG93cyB5b3UgdG8gcmVxdWVzdCBhIHN1YnNldCBvZiB0aGUgcHJvcHMgKGRhdGEpIGZyb20gdGhlIHNlcnZlciBvbiBzdWJzZXF1ZW50IHZpc2l0cyB0byB0aGUgc2FtZSBwYWdlLmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPGluZXJ0aWEtbGluayBocmVmPVwiL3VzZXJzP2FjdGl2ZT10cnVlXCIgOm9ubHk9XCJbJ3VzZXJzJ11cIj5TaG93IGFjdGl2ZTwvaW5lcnRpYS1saW5rPlxuICAgICAgYCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIDxpbmVydGlhLWxpbms+IGNvbXBvbmVudCBpcyBhdXRvbWF0aWNhbGx5IHJlZ2lzdGVyZWQgYnkgdGhlIEluZXJ0aWEgcGx1Z2luLidcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnUmVhY3QnLFxuICAgICAgbGFuZ3VhZ2U6ICdqc3gnLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICBpbXBvcnQgeyBJbmVydGlhTGluayB9IGZyb20gJ0BpbmVydGlhanMvaW5lcnRpYS1yZWFjdCdcXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvdXNlcnM/YWN0aXZlPXRydWVcIiBvbmx5PXtbJ3VzZXJzJ119PlNob3cgYWN0aXZlPC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnU3ZlbHRlJyxcbiAgICAgIGxhbmd1YWdlOiAnanN4JyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgaW1wb3J0IHsgaW5lcnRpYSwgSW5lcnRpYUxpbmsgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtc3ZlbHRlJ1xcblxuICAgICAgICA8YSBocmVmPVwiL3VzZXJzP2FjdGl2ZT10cnVlXCIgdXNlOmluZXJ0aWE9XCJ7eyBvbmx5OiBbJ3VzZXJzJ10gfX1cIj5TaG93IGFjdGl2ZTwvYT5cXG5cbiAgICAgICAgPEluZXJ0aWFMaW5rIGhyZWY9XCIvdXNlcnM/YWN0aXZlPXRydWVcIiBvbmx5PXtbJ3VzZXJzJ119PlNob3cgYWN0aXZlPC9JbmVydGlhTGluaz5cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2BGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL3BhcnRpYWwtcmVsb2Fkc1wiXG4gICAgICB9fT57YHBhcnRpYWwgcmVsb2Fkc2B9PC9hPntgIHBhZ2UuYH08L3A+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuXG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwic291cmNlUm9vdCI6IiJ9