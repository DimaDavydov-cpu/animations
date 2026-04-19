"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[77,1077,1923,2278,2937,3594,3601,3666,4367,5502,5758,6151,6701,7394,7770,8124,8135,8815,9610,9630],{

/***/ "../typography/dist/esm/src/components/Link/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
const _excluded = ["color", "decoration", "outlineColor", "outlineOffset", "outlineWidth", "outlineStyle", "fontWeight", "children", "href", "target", "disabled", "tabIndex", "pointerEvents", "dataTrackTag"];
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}


const Link = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      color = {
        default: 'linkPrimary'
      },
      decoration = {
        default: 'underline'
      },
      outlineColor = {
        focusVisible: 'grey_1200'
      },
      outlineOffset = {
        focusVisible: 'sm'
      },
      outlineWidth = {
        focusVisible: 'md'
      },
      outlineStyle = {
        focusVisible: 'solid'
      },
      fontWeight,
      children,
      href,
      target = '_self',
      disabled,
      tabIndex,
      pointerEvents,
      dataTrackTag = 'link'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread(_objectSpread({}, restProps), {}, {
    as: "a",
    decoration: disabled ? 'none' : decoration,
    color: disabled ? 'grey_800' : color,
    pointerEvents: disabled ? 'none' : pointerEvents,
    tabIndex: disabled ? -1 : tabIndex,
    outlineOffset: outlineOffset,
    outlineWidth: outlineWidth,
    outlineColor: outlineColor,
    target: target,
    href: href,
    ref: ref,
    fontWeight: fontWeight,
    outlineStyle: outlineStyle,
    dataTrackTag: dataTrackTag
  }), children);
});
Link.displayName = 'Link';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);
;
Link.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Link"
};

/***/ }),

/***/ "./src/docs/api/H_Accessibility.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var _Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0.83__nlqkbpiednyo7fahryc45gzkge/node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _fiverr_private_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../typography/dist/esm/src/components/Link/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/docs/api/helpers.tsx");



/*@jsxRuntime automatic @jsxImportSource react*/






function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2",
    h4: "h4",
    a: "a",
    p: "p"
  }, (0,_Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .RP)(), props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      title: "API/Accessibility"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {
      children: "Accessibility"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "keyboard-focus",
      children: "Keyboard Focus"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h4, {
      id: "focus---mdn",
      children: ["Focus - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "MDN"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Applied to focusable elements that receive focus through actions such as clicks, tab navigation, or programmatic focus."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_helpers__WEBPACK_IMPORTED_MODULE_6__/* .StoryContainer */ .HB, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
        as: "input",
        outlineWidth: "md",
        outlineColor: "grey_1200",
        outlineOffset: "sm",
        outlineStyle: "solid"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h4, {
      id: "focus-within---mdn",
      children: ["Focus Within - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "MDN"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Applied to components in which one of their children should receive focus, as observed in scenarios like InputGroup."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_helpers__WEBPACK_IMPORTED_MODULE_6__/* .StoryContainer */ .HB, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
        outlineWidth: {
          focusWithin: 'md'
        },
        outlineColor: {
          focusWithin: 'grey_1200'
        },
        outlineOffset: {
          focusWithin: 'sm'
        },
        outlineStyle: {
          focusWithin: 'solid'
        },
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
          children: "Container"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {})]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h4, {
      id: "focus-visible---mdn",
      children: ["Focus Visible - ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "MDN"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Applied to components that do not have a standard focus state but exhibit focus styling exclusively during tab navigation."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_helpers__WEBPACK_IMPORTED_MODULE_6__/* .StoryContainer */ .HB, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_fiverr_private_typography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        href: "https://www.fiverr.com",
        children: "Link"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,_Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .RP)(), props.components);
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);


/***/ })

}]);
//# sourceMappingURL=docs-api-H_Accessibility-mdx.74bbc901.iframe.bundle.js.map