webpackHotUpdate_N_E("pages/error-handling",{

/***/ "./pages/error-handling.mdx":
/*!**********************************!*\
  !*** ./pages/error-handling.mdx ***!
  \**********************************/
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



var _jsxFileName = "C:\\projects\\inertiajs\\inertiajs.ru\\pages\\error-handling.mdx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        <script>\n          export let status\n\n          $: title = {\n            503: '503: \u0421\u0435\u0440\u0432\u0438\u0441 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D',\n            500: '500: \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430',\n            404: '404: \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430',\n            403: '403: \u0417\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E',\n          }[status]\n\n          $: description = {\n            503: '\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.',\n            500: '\u0423\u043F\u0441, \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A \u043D\u0430 \u043D\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445.',\n            404: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0412\u044B \u0438\u0449\u0435\u0442\u0435.',\n            403: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D.',\n          }[status]\n        </script>\n\n        <div>\n          <h1>{title}</h1>\n          <div>{description}</div>\n        </div>\n      "], ["\n        <script>\n          export let status\\n\n          $: title = {\n            503: '503: \u0421\u0435\u0440\u0432\u0438\u0441 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D',\n            500: '500: \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430',\n            404: '404: \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430',\n            403: '403: \u0417\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E',\n          }[status]\\n\n          $: description = {\n            503: '\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.',\n            500: '\u0423\u043F\u0441, \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A \u043D\u0430 \u043D\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445.',\n            404: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0412\u044B \u0438\u0449\u0435\u0442\u0435.',\n            403: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D.',\n          }[status]\n        </script>\\n\n        <div>\n          <h1>{title}</h1>\n          <div>{description}</div>\n        </div>\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        import React from 'react'\n\n        export default function ErrorPage({ status }) {\n          const title = {\n            503: '503: \u0421\u0435\u0440\u0432\u0438\u0441 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D',\n            500: '500: \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430',\n            404: '404: \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430',\n            403: '403: \u0417\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E',\n          }[status]\n\n          const description = {\n            503: '\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.',\n            500: '\u0423\u043F\u0441, \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A \u043D\u0430 \u043D\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445.',\n            404: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0412\u044B \u0438\u0449\u0435\u0442\u0435.',\n            403: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D.',\n          }[status]\n\n          return (\n            <div>\n              <h1>{title}</h1>\n              <div>{description}</div>\n            </div>\n          )\n        }\n      "], ["\n        import React from 'react'\\n\n        export default function ErrorPage({ status }) {\n          const title = {\n            503: '503: \u0421\u0435\u0440\u0432\u0438\u0441 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D',\n            500: '500: \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430',\n            404: '404: \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430',\n            403: '403: \u0417\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E',\n          }[status]\\n\n          const description = {\n            503: '\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.',\n            500: '\u0423\u043F\u0441, \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A \u043D\u0430 \u043D\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445.',\n            404: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0412\u044B \u0438\u0449\u0435\u0442\u0435.',\n            403: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D.',\n          }[status]\\n\n          return (\n            <div>\n              <h1>{title}</h1>\n              <div>{description}</div>\n            </div>\n          )\n        }\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        <template>\n          <div>\n            <h1>{{ title }}</h1>\n            <div>{{ description }}</div>\n          </div>\n        </template>\n\n        <script>\n        export default {\n          props: {\n            status: Number,\n          },\n          computed: {\n            title() {\n              return {\n                503: '503: \u0421\u0435\u0440\u0432\u0438\u0441 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D',\n                500: '500: \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430',\n                404: '404: \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430',\n                403: '403: \u0417\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E',\n              }[this.status]\n            },\n            description() {\n              return {\n                503: '\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.',\n                500: '\u0423\u043F\u0441, \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A \u043D\u0430 \u043D\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445.',\n                404: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0412\u044B \u0438\u0449\u0435\u0442\u0435.',\n                403: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D.',\n              }[this.status]\n            },\n          },\n        }\n        </script>\n      "], ["\n        <template>\n          <div>\n            <h1>{{ title }}</h1>\n            <div>{{ description }}</div>\n          </div>\n        </template>\\n\n        <script>\n        export default {\n          props: {\n            status: Number,\n          },\n          computed: {\n            title() {\n              return {\n                503: '503: \u0421\u0435\u0440\u0432\u0438\u0441 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D',\n                500: '500: \u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430',\n                404: '404: \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430',\n                403: '403: \u0417\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043E',\n              }[this.status]\n            },\n            description() {\n              return {\n                503: '\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043C\u044B \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435.',\n                500: '\u0423\u043F\u0441, \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A \u043D\u0430 \u043D\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445.',\n                404: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0412\u044B \u0438\u0449\u0435\u0442\u0435.',\n                403: '\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D.',\n              }[this.status]\n            },\n          },\n        }\n        </script>\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        # todo\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        use Throwable;\n        use Inertia\\Inertia;\n\n        /**\n         * \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u043D\u0433\u0430.\n         *\n         * @param  \\Throwable  $e\n         * @return \\Throwable\n         */\n        public function render($request, Throwable $e)\n        {\n            $response = parent::render($request, $e);\n\n            if (!app()->environment('local') && in_array($response->status(), [500, 503, 404, 403])) {\n                return Inertia::render('Error', ['status' => $response->status()])\n                    ->toResponse($request)\n                    ->setStatusCode($response->status());\n            } else if ($response->status() === 419) {\n                return back()->with([\n                    'message' => 'The page expired, please try again.',\n                ]);\n            }\n\n            return $response;\n        }\n      "], ["\n        use Throwable;\n        use Inertia\\\\Inertia;\\n\n        /**\n         * \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0440\u0435\u043D\u0434\u0435\u0440\u0438\u043D\u0433\u0430.\n         *\n         * @param  \\\\Throwable  $e\n         * @return \\\\Throwable\n         */\n        public function render($request, Throwable $e)\n        {\n            $response = parent::render($request, $e);\\n\n            if (!app()->environment('local') && in_array($response->status(), [500, 503, 404, 403])) {\n                return Inertia::render('Error', ['status' => $response->status()])\n                    ->toResponse($request)\n                    ->setStatusCode($response->status());\n            } else if ($response->status() === 419) {\n                return back()->with([\n                    'message' => 'The page expired, please try again.',\n                ]);\n            }\\n\n            return $response;\n        }\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



/* @jsx mdx */






var meta = {
  title: 'Обработка ошибок',
  links: [{
    url: '#development',
    name: 'Разработка'
  }, {
    url: '#production',
    name: 'Продакшен'
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
      lineNumber: 30,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043E\u0448\u0438\u0431\u043E\u043A"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, "\u041E\u0434\u043D\u0430 \u0438\u0437 \u043F\u0440\u0438\u044F\u0442\u043D\u044B\u0445 \u0441\u0442\u043E\u0440\u043E\u043D \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u043E\u0439 \u0441\u0440\u0435\u0434\u043E\u0439 - \u044D\u0442\u043E \u0432\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, Laravel \u043F\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/facade/ignition"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 166
    }
  }), "Ignition"), ", \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u043C \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u043C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0445\u043E\u0440\u043E\u0448\u043E \u043E\u0442\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043E\u0432\u043A\u0443 \u0441\u0442\u0435\u043A\u0430 \u043F\u0440\u0438 \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, "\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u0435\u0441\u043B\u0438 \u0412\u044B \u0434\u0435\u043B\u0430\u0435\u0442\u0435 \u0437\u0430\u043F\u0440\u043E\u0441 XHR (\u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 Inertia) \u0438 \u0441\u0442\u0430\u043B\u043A\u0438\u0432\u0430\u0435\u0442\u0435\u0441\u044C \u0441 \u043E\u0448\u0438\u0431\u043A\u043E\u0439 \u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0412\u0430\u043C \u043E\u0431\u044B\u0447\u043D\u043E \u043E\u0441\u0442\u0430\u0435\u0442\u0441\u044F \u043A\u043E\u043F\u0430\u0442\u044C\u0441\u044F \u0432\u043E \u0432\u043A\u043B\u0430\u0434\u043A\u0435 \u0441\u0435\u0442\u0438 \u0432 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0412\u0430\u0448\u0435\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, "Inertia \u0440\u0435\u0448\u0430\u0435\u0442 \u044D\u0442\u0443 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0443, \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u044F \u0432\u0441\u0435 \u043E\u0442\u0432\u0435\u0442\u044B \u043D\u0435 Inertia \u0432 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435. \u042D\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043E \u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0442\u0430\u043A\u043E\u0439 \u0436\u0435 \u043A\u0440\u0430\u0441\u0438\u0432\u044B\u0439 \u043E\u0442\u0447\u0435\u0442 \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0430\u0445, \u0434\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u0412\u044B \u0441\u0434\u0435\u043B\u0430\u043B\u0438 \u044D\u0442\u043E\u0442 \u0437\u0430\u043F\u0440\u043E\u0441 \u0447\u0435\u0440\u0435\u0437 XHR!"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "my-6 relative rounded overflow-hidden bg-gray-500",
    style: {
      paddingTop: '80.5%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("div", {
    className: "absolute inset-0 w-full h-full flex items-center justify-center text-sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 3
    }
  }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("iframe", {
    className: "absolute inset-0 w-full h-full",
    src: "https://player.vimeo.com/video/363562630?autoplay=1&loop=1&muted=1&background=1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 3
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_Notice__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mdxType: "Notice",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0446\u0435\u043B\u0435\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, "Production"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, "\u0412 production \u0412\u044B \u0437\u0430\u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442 \u043E\u0431 \u043E\u0448\u0438\u0431\u043A\u0435 \u0438\u043D\u0435\u0440\u0446\u0438\u0438 \u0432\u043C\u0435\u0441\u0442\u043E \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043B\u0430\u0433\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435. \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0412\u0430\u0448\u0435\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B, \u0447\u0442\u043E\u0431\u044B \u043E\u043D \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u043B \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443 \u043E\u0448\u0438\u0431\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
    examples: [{
      name: 'Laravel',
      language: 'php',
      description: 'Расширить метод render() в Вашем приложении App\\Exceptions\\Handler.php.',
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
      lineNumber: 50,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, "\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435, \u043A\u0430\u043A \u0432 \u043F\u0440\u0438\u0432\u0435\u0434\u0435\u043D\u043D\u043E\u043C \u0432\u044B\u0448\u0435 \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043C\u044B \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])("inlineCode", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 95
    }
  }, "Error"), ". \u0412\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u044D\u0442\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u044C. \u0412\u043E\u0442 \u043F\u0440\u0438\u043C\u0435\u0440 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043E\u0448\u0438\u0431\u043A\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043D\u043E\u0439 \u0442\u043E\u0447\u043A\u0438."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["mdx"])(_components_TabbedCodeExamples__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXJyb3ItaGFuZGxpbmcubWR4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImxpbmtzIiwidXJsIiwibmFtZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsInBhZGRpbmdUb3AiLCJsYW5ndWFnZSIsImRlc2NyaXB0aW9uIiwiY29kZSIsImRlZGVudCIsImlzTURYQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUEsSUFBSSxHQUFHO0FBQ2xCQyxPQUFLLEVBQUUsa0JBRFc7QUFFbEJDLE9BQUssRUFBRSxDQUFDO0FBQ05DLE9BQUcsRUFBRSxjQURDO0FBRU5DLFFBQUksRUFBRTtBQUZBLEdBQUQsRUFHSjtBQUNERCxPQUFHLEVBQUUsYUFESjtBQUVEQyxRQUFJLEVBQUU7QUFGTCxHQUhJO0FBRlcsQ0FBYjtBQVdQLElBQU1DLFdBQVcsR0FBRztBQUNsQkwsTUFBSSxFQUFKQTtBQURrQixDQUFwQjtBQUdBLElBQU1NLFNBQVMsR0FBR0MsMERBQWxCO0FBRWUsU0FBU0MsVUFBVCxPQUdaO0FBQUEsTUFGREMsVUFFQyxRQUZEQSxVQUVDO0FBQUEsTUFERUMsS0FDRjs7QUFDRCxTQUFPLDBEQUFDLFNBQUQseUZBQWVMLFdBQWYsRUFBZ0NLLEtBQWhDO0FBQXVDLGNBQVUsRUFBRUQsVUFBbkQ7QUFBK0QsV0FBTyxFQUFDLFdBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1HQUpLLEVBS0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvRUFMSyxFQU1MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscXdCQUFpSztBQUFHLGNBQVUsRUFBQztBQUFkLEtBQXNCO0FBQ25MLFlBQVE7QUFEMkssR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBakssOHNCQU5LLEVBU0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2OUJBVEssRUFVTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHczQkFWSyxFQVdMO0FBQUssYUFBUyxFQUFDLG1EQUFmO0FBQW1FLFNBQUssRUFBRTtBQUN4RUUsZ0JBQVUsRUFBRTtBQUQ0RCxLQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0Y7QUFBSyxhQUFTLEVBQUMseUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4REFIRSxFQUlGO0FBQVEsYUFBUyxFQUFDLGdDQUFsQjtBQUFtRCxPQUFHLEVBQUMsaUZBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRSxDQVhLLEVBaUJMLDBEQUFDLDBEQUFEO0FBQVEsV0FBTyxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNGJBakJLLEVBa0JMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbEJLLEVBbUJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbXlDQW5CSyxFQW9CTCwwREFBQyxzRUFBRDtBQUFvQixZQUFRLEVBQUUsQ0FBQztBQUM3QlAsVUFBSSxFQUFFLFNBRHVCO0FBRTdCUSxjQUFRLEVBQUUsS0FGbUI7QUFHN0JDLGlCQUFXLEVBQUUsMkVBSGdCO0FBSTdCQyxVQUFJLEVBQUVDLGdEQUFGO0FBSnlCLEtBQUQsRUE0QjNCO0FBQ0RYLFVBQUksRUFBRSxPQURMO0FBRURRLGNBQVEsRUFBRSxNQUZUO0FBR0RFLFVBQUksRUFBRUMsZ0RBQUY7QUFISCxLQTVCMkIsQ0FBOUI7QUFrQ0ksV0FBTyxFQUFDLG9CQWxDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJLLEVBdURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK2JBQTBGO0FBQVksY0FBVSxFQUFDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBMUYsdXBCQXZESyxFQXdETCwwREFBQyxzRUFBRDtBQUFvQixZQUFRLEVBQUUsQ0FBQztBQUM3QlgsVUFBSSxFQUFFLFFBRHVCO0FBRTdCUSxjQUFRLEVBQUUsTUFGbUI7QUFHN0JFLFVBQUksRUFBRUMsZ0RBQUY7QUFIeUIsS0FBRCxFQW9DM0I7QUFDRFgsVUFBSSxFQUFFLE9BREw7QUFFRFEsY0FBUSxFQUFFLEtBRlQ7QUFHREUsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBcEMyQixFQThEM0I7QUFDRFgsVUFBSSxFQUFFLFFBREw7QUFFRFEsY0FBUSxFQUFFLE1BRlQ7QUFHREUsVUFBSSxFQUFFQyxnREFBRjtBQUhILEtBOUQyQixDQUE5QjtBQXNGSSxXQUFPLEVBQUMsb0JBdEZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4REssQ0FBUDtBQWdKRDtLQXBKdUJQLFU7QUFzSnhCO0FBQ0FBLFVBQVUsQ0FBQ1EsY0FBWCxHQUE0QixJQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lcnJvci1oYW5kbGluZy45MmNmNjU1NWZkYTcyMjNmMTg1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IGRlZGVudCBmcm9tICdkZWRlbnQtanMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IE5vdGljZSBmcm9tICcuLi9jb21wb25lbnRzL05vdGljZSdcbmltcG9ydCBUYWJiZWRDb2RlRXhhbXBsZXMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiZWRDb2RlRXhhbXBsZXMnXG5leHBvcnQgY29uc3QgbWV0YSA9IHtcbiAgdGl0bGU6ICfQntCx0YDQsNCx0L7RgtC60LAg0L7RiNC40LHQvtC6JyxcbiAgbGlua3M6IFt7XG4gICAgdXJsOiAnI2RldmVsb3BtZW50JyxcbiAgICBuYW1lOiAn0KDQsNC30YDQsNCx0L7RgtC60LAnXG4gIH0sIHtcbiAgICB1cmw6ICcjcHJvZHVjdGlvbicsXG4gICAgbmFtZTogJ9Cf0YDQvtC00LDQutGI0LXQvSdcbiAgfV1cbn07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICBtZXRhXG59O1xuY29uc3QgTURYTGF5b3V0ID0gTGF5b3V0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cblxuICAgIDxoMT57YNCe0LHRgNCw0LHQvtGC0LrQsCDQvtGI0LjQsdC+0LpgfTwvaDE+XG4gICAgPGgyPntg0KDQsNC30YDQsNCx0L7RgtC60LBgfTwvaDI+XG4gICAgPHA+e2DQntC00L3QsCDQuNC3INC/0YDQuNGP0YLQvdGL0YUg0YHRgtC+0YDQvtC9INGA0LDQsdC+0YLRiyDRgSDRgdC10YDQstC10YDQvdC+0Lkg0YHRgNC10LTQvtC5IC0g0Y3RgtC+INCy0YHRgtGA0L7QtdC90L3QsNGPINC+0LHRgNCw0LHQvtGC0LrQsCDQuNGB0LrQu9GO0YfQtdC90LjQuSwg0LrQvtGC0L7RgNGD0Y4g0JLRiyDQv9C+0LvRg9GH0LDQtdGC0LUg0LHQtdGB0L/Qu9Cw0YLQvdC+LiDQndCw0L/RgNC40LzQtdGALCBMYXJhdmVsINC/0L7RgdGC0LDQstC70Y/QtdGC0YHRjyDRgSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL2ZhY2FkZS9pZ25pdGlvblwiXG4gICAgICB9fT57YElnbml0aW9uYH08L2E+e2AsINC60YDQsNGB0LjQstGL0Lwg0LjQvdGB0YLRgNGD0LzQtdC90YLQvtC8INGB0L7QvtCx0YnQtdC90LjRjyDQvtCxINC+0YjQuNCx0LrQsNGFLCDQutC+0YLQvtGA0YvQuSDQvtGC0L7QsdGA0LDQttCw0LXRgiDRhdC+0YDQvtGI0L4g0L7RgtGE0L7RgNC80LDRgtC40YDQvtCy0LDQvdC90YPRjiDRgtGA0LDRgdGB0LjRgNC+0LLQutGDINGB0YLQtdC60LAg0L/RgNC4INC70L7QutCw0LvRjNC90L7QuSDRgNCw0LfRgNCw0LHQvtGC0LrQtS5gfTwvcD5cbiAgICA8cD57YNCf0YDQvtCx0LvQtdC80LAg0LIg0YLQvtC8LCDRh9GC0L4g0LXRgdC70Lgg0JLRiyDQtNC10LvQsNC10YLQtSDQt9Cw0L/RgNC+0YEgWEhSICjRh9GC0L4g0LTQtdC70LDQtdGCIEluZXJ0aWEpINC4INGB0YLQsNC70LrQuNCy0LDQtdGC0LXRgdGMINGBINC+0YjQuNCx0LrQvtC5INC90LAg0YHRgtC+0YDQvtC90LUg0YHQtdGA0LLQtdGA0LAsINCS0LDQvCDQvtCx0YvRh9C90L4g0L7RgdGC0LDQtdGC0YHRjyDQutC+0L/QsNGC0YzRgdGPINCy0L4g0LLQutC70LDQtNC60LUg0YHQtdGC0Lgg0LIg0LjQvdGB0YLRgNGD0LzQtdC90YLQsNGFINGA0LDQt9GA0LDQsdC+0YLQutC4INCS0LDRiNC10LPQviDQsdGA0LDRg9C30LXRgNCwLmB9PC9wPlxuICAgIDxwPntgSW5lcnRpYSDRgNC10YjQsNC10YIg0Y3RgtGDINC/0YDQvtCx0LvQtdC80YMsINC/0L7QutCw0LfRi9Cy0LDRjyDQstGB0LUg0L7RgtCy0LXRgtGLINC90LUgSW5lcnRpYSDQsiDQvNC+0LTQsNC70YzQvdC+0Lwg0YDQtdC20LjQvNC1LiDQrdGC0L4g0L7Qt9C90LDRh9Cw0LXRgiwg0YfRgtC+INCS0Ysg0L/QvtC70YPRh9C40YLQtSDRgtCw0LrQvtC5INC20LUg0LrRgNCw0YHQuNCy0YvQuSDQvtGC0YfQtdGCINC+0LEg0L7RiNC40LHQutCw0YUsINC00LDQttC1INC10YHQu9C4INCS0Ysg0YHQtNC10LvQsNC70Lgg0Y3RgtC+0YIg0LfQsNC/0YDQvtGBINGH0LXRgNC10LcgWEhSIWB9PC9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNiByZWxhdGl2ZSByb3VuZGVkIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTUwMFwiIHN0eWxlPXt7XG4gICAgICBwYWRkaW5nVG9wOiAnODAuNSUnXG4gICAgfX0+XG4gIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB3LWZ1bGwgaC1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtc21cIj7Ql9Cw0LPRgNGD0LfQutCwJmhlbGxpcDs8L2Rpdj5cbiAgPGlmcmFtZSBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIHctZnVsbCBoLWZ1bGxcIiBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vMzYzNTYyNjMwP2F1dG9wbGF5PTEmbG9vcD0xJm11dGVkPTEmYmFja2dyb3VuZD0xXCI+PC9pZnJhbWU+XG4gICAgPC9kaXY+XG4gICAgPE5vdGljZSBtZHhUeXBlPVwiTm90aWNlXCI+0J7QsdGA0LDRgtC40YLQtSDQstC90LjQvNCw0L3QuNC1LCDQvNC+0LTQsNC70YzQvdC+0LUg0L/QvtCy0LXQtNC10L3QuNC1INC/0YDQtdC00L3QsNC30L3QsNGH0LXQvdC+INGC0L7Qu9GM0LrQviDQtNC70Y8g0YbQtdC70LXQuSDRgNCw0LfRgNCw0LHQvtGC0LrQuC48L05vdGljZT5cbiAgICA8aDI+e2BQcm9kdWN0aW9uYH08L2gyPlxuICAgIDxwPntg0JIgcHJvZHVjdGlvbiDQktGLINC30LDRhdC+0YLQuNGC0LUg0LLQtdGA0L3Rg9GC0Ywg0L/RgNCw0LLQuNC70YzQvdGL0Lkg0L7RgtCy0LXRgiDQvtCxINC+0YjQuNCx0LrQtSDQuNC90LXRgNGG0LjQuCDQstC80LXRgdGC0L4g0YLQvtCz0L4sINGH0YLQvtCx0Ysg0L/QvtC70LDQs9Cw0YLRjNGB0Y8g0L3QsCDQvNC+0LTQsNC70YzQvdC+0LUg0L/QvtCy0LXQtNC10L3QuNC1LiDQlNC70Y8g0Y3RgtC+0LPQviDQktCw0Lwg0L3QtdC+0LHRhdC+0LTQuNC80L4g0L7QsdC90L7QstC40YLRjCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDQuNGB0LrQu9GO0YfQtdC90LjQuSDQv9C+INGD0LzQvtC70YfQsNC90LjRjiDQktCw0YjQtdC5INC/0LvQsNGC0YTQvtGA0LzRiywg0YfRgtC+0LHRiyDQvtC9INCy0L7Qt9Cy0YDQsNGJ0LDQuyDQvdCw0YHRgtGA0LDQuNCy0LDQtdC80YPRjiDRgdGC0YDQsNC90LjRhtGDINC+0YjQuNCx0LrQuC5gfTwvcD5cbiAgICA8VGFiYmVkQ29kZUV4YW1wbGVzIGV4YW1wbGVzPXtbe1xuICAgICAgbmFtZTogJ0xhcmF2ZWwnLFxuICAgICAgbGFuZ3VhZ2U6ICdwaHAnLFxuICAgICAgZGVzY3JpcHRpb246ICfQoNCw0YHRiNC40YDQuNGC0Ywg0LzQtdGC0L7QtCByZW5kZXIoKSDQsiDQktCw0YjQtdC8INC/0YDQuNC70L7QttC10L3QuNC4IEFwcFxcXFxFeGNlcHRpb25zXFxcXEhhbmRsZXIucGhwLicsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIHVzZSBUaHJvd2FibGU7XG4gICAgICAgIHVzZSBJbmVydGlhXFxcXEluZXJ0aWE7XFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDQn9C+0LTQs9C+0YLQvtCy0LjRgtGMINC40YHQutC70Y7Rh9C10L3QuNC1INC00LvRjyDRgNC10L3QtNC10YDQuNC90LPQsC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICBcXFxcVGhyb3dhYmxlICAkZVxuICAgICAgICAgKiBAcmV0dXJuIFxcXFxUaHJvd2FibGVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBmdW5jdGlvbiByZW5kZXIoJHJlcXVlc3QsIFRocm93YWJsZSAkZSlcbiAgICAgICAge1xuICAgICAgICAgICAgJHJlc3BvbnNlID0gcGFyZW50OjpyZW5kZXIoJHJlcXVlc3QsICRlKTtcXG5cbiAgICAgICAgICAgIGlmICghYXBwKCktPmVudmlyb25tZW50KCdsb2NhbCcpICYmIGluX2FycmF5KCRyZXNwb25zZS0+c3RhdHVzKCksIFs1MDAsIDUwMywgNDA0LCA0MDNdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBJbmVydGlhOjpyZW5kZXIoJ0Vycm9yJywgWydzdGF0dXMnID0+ICRyZXNwb25zZS0+c3RhdHVzKCldKVxuICAgICAgICAgICAgICAgICAgICAtPnRvUmVzcG9uc2UoJHJlcXVlc3QpXG4gICAgICAgICAgICAgICAgICAgIC0+c2V0U3RhdHVzQ29kZSgkcmVzcG9uc2UtPnN0YXR1cygpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJHJlc3BvbnNlLT5zdGF0dXMoKSA9PT0gNDE5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhY2soKS0+d2l0aChbXG4gICAgICAgICAgICAgICAgICAgICdtZXNzYWdlJyA9PiAnVGhlIHBhZ2UgZXhwaXJlZCwgcGxlYXNlIHRyeSBhZ2Fpbi4nLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfVxcblxuICAgICAgICAgICAgcmV0dXJuICRyZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSYWlscycsXG4gICAgICBsYW5ndWFnZTogJ3J1YnknLFxuICAgICAgY29kZTogZGVkZW50YFxuICAgICAgICAjIHRvZG9cbiAgICAgIGBcbiAgICB9XX0gbWR4VHlwZT1cIlRhYmJlZENvZGVFeGFtcGxlc1wiIC8+XG4gICAgPHA+e2DQntCx0YDQsNGC0LjRgtC1INCy0L3QuNC80LDQvdC40LUsINC60LDQuiDQsiDQv9GA0LjQstC10LTQtdC90L3QvtC8INCy0YvRiNC1INC/0YDQuNC80LXRgNC1INC80Ysg0LLQvtC30LLRgNCw0YnQsNC10Lwg0LrQvtC80L/QvtC90LXQvdGCINGB0YLRgNCw0L3QuNGG0YsgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgRXJyb3JgfTwvaW5saW5lQ29kZT57YC4g0JLQsNC8INC90YPQttC90L4g0LHRg9C00LXRgiDRjdGC0L4g0YHQvtC30LTQsNGC0YwuINCS0L7RgiDQv9GA0LjQvNC10YAg0LrQvtC80L/QvtC90LXQvdGC0LAg0YHRgtGA0LDQvdC40YbRiyDQvtGI0LjQsdC60LgsINC60L7RgtC+0YDRi9C5INCS0Ysg0LzQvtC20LXRgtC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDQsiDQutCw0YfQtdGB0YLQstC1INC+0YLQv9GA0LDQstC90L7QuSDRgtC+0YfQutC4LmB9PC9wPlxuICAgIDxUYWJiZWRDb2RlRXhhbXBsZXMgZXhhbXBsZXM9e1t7XG4gICAgICBuYW1lOiAnVnVlLmpzJyxcbiAgICAgIGxhbmd1YWdlOiAndHdpZycsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPnt7IHRpdGxlIH19PC9oMT5cbiAgICAgICAgICAgIDxkaXY+e3sgZGVzY3JpcHRpb24gfX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cXG5cbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBzdGF0dXM6IE51bWJlcixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICA1MDM6ICc1MDM6INCh0LXRgNCy0LjRgSDQvdC10LTQvtGB0YLRg9C/0LXQvScsXG4gICAgICAgICAgICAgICAgNTAwOiAnNTAwOiDQntGI0LjQsdC60LAg0YHQtdGA0LLQtdGA0LAnLFxuICAgICAgICAgICAgICAgIDQwNDogJzQwNDog0KHRgtGA0LDQvdC40YbQsCDQvdC1INC90LDQudC00LXQvdCwJyxcbiAgICAgICAgICAgICAgICA0MDM6ICc0MDM6INCX0LDQv9GA0LXRidC10L3QvicsXG4gICAgICAgICAgICAgIH1bdGhpcy5zdGF0dXNdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzY3JpcHRpb24oKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgNTAzOiAn0JjQt9Cy0LjQvdC40YLQtSwg0LzRiyDQv9GA0L7QstC+0LTQuNC8INGC0LXRhdC90LjRh9C10YHQutC+0LUg0L7QsdGB0LvRg9C20LjQstCw0L3QuNC1LiDQn9C+0LbQsNC70YPQudGB0YLQsCwg0L/QvtC/0YDQvtCx0YPQudGC0LUg0L/QvtC30LbQtS4nLFxuICAgICAgICAgICAgICAgIDUwMDogJ9Cj0L/RgSwg0YfRgtC+LdGC0L4g0L/QvtGI0LvQviDQvdC1INGC0LDQuiDQvdCwINC90LDRiNC40YUg0YHQtdGA0LLQtdGA0LDRhS4nLFxuICAgICAgICAgICAgICAgIDQwNDogJ9CaINGB0L7QttCw0LvQtdC90LjRjiwg0L3QtSDRg9C00LDQu9C+0YHRjCDQvdCw0LnRgtC4INGB0YLRgNCw0L3QuNGG0YMsINC60L7RgtC+0YDRg9GOINCS0Ysg0LjRidC10YLQtS4nLFxuICAgICAgICAgICAgICAgIDQwMzogJ9CaINGB0L7QttCw0LvQtdC90LjRjiwg0LTQvtGB0YLRg9C/INC6INGN0YLQvtC5INGB0YLRgNCw0L3QuNGG0LUg0LfQsNC/0YDQtdGJ0LXQvS4nLFxuICAgICAgICAgICAgICB9W3RoaXMuc3RhdHVzXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgIDwvc2NyaXB0PlxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdSZWFjdCcsXG4gICAgICBsYW5ndWFnZTogJ2pzeCcsXG4gICAgICBjb2RlOiBkZWRlbnRgXG4gICAgICAgIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcXG5cbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3JQYWdlKHsgc3RhdHVzIH0pIHtcbiAgICAgICAgICBjb25zdCB0aXRsZSA9IHtcbiAgICAgICAgICAgIDUwMzogJzUwMzog0KHQtdGA0LLQuNGBINC90LXQtNC+0YHRgtGD0L/QtdC9JyxcbiAgICAgICAgICAgIDUwMDogJzUwMDog0J7RiNC40LHQutCwINGB0LXRgNCy0LXRgNCwJyxcbiAgICAgICAgICAgIDQwNDogJzQwNDog0KHRgtGA0LDQvdC40YbQsCDQvdC1INC90LDQudC00LXQvdCwJyxcbiAgICAgICAgICAgIDQwMzogJzQwMzog0JfQsNC/0YDQtdGJ0LXQvdC+JyxcbiAgICAgICAgICB9W3N0YXR1c11cXG5cbiAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHtcbiAgICAgICAgICAgIDUwMzogJ9CY0LfQstC40L3QuNGC0LUsINC80Ysg0L/RgNC+0LLQvtC00LjQvCDRgtC10YXQvdC40YfQtdGB0LrQvtC1INC+0LHRgdC70YPQttC40LLQsNC90LjQtS4g0J/QvtC20LDQu9GD0LnRgdGC0LAsINC/0L7Qv9GA0L7QsdGD0LnRgtC1INC/0L7Qt9C20LUuJyxcbiAgICAgICAgICAgIDUwMDogJ9Cj0L/RgSwg0YfRgtC+LdGC0L4g0L/QvtGI0LvQviDQvdC1INGC0LDQuiDQvdCwINC90LDRiNC40YUg0YHQtdGA0LLQtdGA0LDRhS4nLFxuICAgICAgICAgICAgNDA0OiAn0Jog0YHQvtC20LDQu9C10L3QuNGOLCDQvdC1INGD0LTQsNC70L7RgdGMINC90LDQudGC0Lgg0YHRgtGA0LDQvdC40YbRgywg0LrQvtGC0L7RgNGD0Y4g0JLRiyDQuNGJ0LXRgtC1LicsXG4gICAgICAgICAgICA0MDM6ICfQmiDRgdC+0LbQsNC70LXQvdC40Y4sINC00L7RgdGC0YPQvyDQuiDRjdGC0L7QuSDRgdGC0YDQsNC90LjRhtC1INC30LDQv9GA0LXRidC10L0uJyxcbiAgICAgICAgICB9W3N0YXR1c11cXG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgICA8ZGl2PntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTdmVsdGUnLFxuICAgICAgbGFuZ3VhZ2U6ICdodG1sJyxcbiAgICAgIGNvZGU6IGRlZGVudGBcbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICBleHBvcnQgbGV0IHN0YXR1c1xcblxuICAgICAgICAgICQ6IHRpdGxlID0ge1xuICAgICAgICAgICAgNTAzOiAnNTAzOiDQodC10YDQstC40YEg0L3QtdC00L7RgdGC0YPQv9C10L0nLFxuICAgICAgICAgICAgNTAwOiAnNTAwOiDQntGI0LjQsdC60LAg0YHQtdGA0LLQtdGA0LAnLFxuICAgICAgICAgICAgNDA0OiAnNDA0OiDQodGC0YDQsNC90LjRhtCwINC90LUg0L3QsNC50LTQtdC90LAnLFxuICAgICAgICAgICAgNDAzOiAnNDAzOiDQl9Cw0L/RgNC10YnQtdC90L4nLFxuICAgICAgICAgIH1bc3RhdHVzXVxcblxuICAgICAgICAgICQ6IGRlc2NyaXB0aW9uID0ge1xuICAgICAgICAgICAgNTAzOiAn0JjQt9Cy0LjQvdC40YLQtSwg0LzRiyDQv9GA0L7QstC+0LTQuNC8INGC0LXRhdC90LjRh9C10YHQutC+0LUg0L7QsdGB0LvRg9C20LjQstCw0L3QuNC1LiDQn9C+0LbQsNC70YPQudGB0YLQsCwg0L/QvtC/0YDQvtCx0YPQudGC0LUg0L/QvtC30LbQtS4nLFxuICAgICAgICAgICAgNTAwOiAn0KPQv9GBLCDRh9GC0L4t0YLQviDQv9C+0YjQu9C+INC90LUg0YLQsNC6INC90LAg0L3QsNGI0LjRhSDRgdC10YDQstC10YDQsNGFLicsXG4gICAgICAgICAgICA0MDQ6ICfQmiDRgdC+0LbQsNC70LXQvdC40Y4sINC90LUg0YPQtNCw0LvQvtGB0Ywg0L3QsNC50YLQuCDRgdGC0YDQsNC90LjRhtGDLCDQutC+0YLQvtGA0YPRjiDQktGLINC40YnQtdGC0LUuJyxcbiAgICAgICAgICAgIDQwMzogJ9CaINGB0L7QttCw0LvQtdC90LjRjiwg0LTQvtGB0YLRg9C/INC6INGN0YLQvtC5INGB0YLRgNCw0L3QuNGG0LUg0LfQsNC/0YDQtdGJ0LXQvS4nLFxuICAgICAgICAgIH1bc3RhdHVzXVxuICAgICAgICA8L3NjcmlwdD5cXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICAgICAgPGRpdj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYFxuICAgIH1dfSBtZHhUeXBlPVwiVGFiYmVkQ29kZUV4YW1wbGVzXCIgLz5cbiAgICA8L01EWExheW91dD47XG59XG5cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJzb3VyY2VSb290IjoiIn0=