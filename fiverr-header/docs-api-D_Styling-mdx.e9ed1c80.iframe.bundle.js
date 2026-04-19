"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[77,815,1077,1923,2278,2937,3594,3601,3666,4367,5502,5758,6151,7394,7770,8124,8135,8815,9610,9630],{

/***/ "../storybook_helpers/dist/esm/src/components/StorySubtitle/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");


const StorySubtitle = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    as: "p",
    color: "bodySecondary",
    paddingBottom: "6",
    fontSize: {
      default: 'b_md',
      md: 'b_xl'
    }
  }, children);
};
StorySubtitle.displayName = 'StorySubtitle';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorySubtitle);
;
StorySubtitle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StorySubtitle"
};

/***/ }),

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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Pencil.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const PencilIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('PencilIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SYSTEM_ICON_SIZES */ .bh[size],
    fill: "none",
    viewBox: "0 0 16 17",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getStrokeColor */ ._)(color),
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m9.86 3.146 2.953 2.47m-10.547 4.94 8.319-8.4a2.334 2.334 0 0 1 3.243 0 2.2 2.2 0 0 1 0 3.164l-8.61 8.116L1 14.671z",
    vectorEffect: "non-scaling-stroke"
  }));
};
PencilIcon.id = 'PencilIcon';
PencilIcon.displayName = 'PencilIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PencilIcon);
;
PencilIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PencilIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ getStrokeColor)
/* harmony export */ });
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");

const getStrokeColor = color => {
  if (color === 'inherit') {
    return 'currentColor';
  }
  return _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_0__/* .colors */ .Tj[color];
};

/***/ }),

/***/ "./src/docs/api/D_Styling.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ D_Styling)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+blocks@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0.83__nlqkbpiednyo7fahryc45gzkge/node_modules/@storybook/blocks/dist/index.mjs + 13 modules
var dist = __webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0.83__nlqkbpiednyo7fahryc45gzkge/node_modules/@storybook/blocks/dist/index.mjs");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Heading/index.js + 1 modules
var Heading = __webpack_require__("../typography/dist/esm/src/components/Heading/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Link/index.js
var Link = __webpack_require__("../typography/dist/esm/src/components/Link/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
// EXTERNAL MODULE: ./src/docs/api/helpers.tsx
var helpers = __webpack_require__("./src/docs/api/helpers.tsx");
;// src/docs/api/helpers.ve.css.ts.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/docs/api/helpers.ve.css.ts.vanilla.css","source":"LmkxNWRrcTEgewogIGRpc3BsYXk6IG5vbmU7Cn0KLmkxNWRrcTA6aG92ZXIgLmkxNWRrcTEgewogIGRpc3BsYXk6IGlubGluZS1ibG9jazsKfQouaTE1ZGtxMiBhIHsKICBjb2xvcjogIzgxOUVGMDsKfQouaTE1ZGtxMzo6LXdlYmtpdC1zY3JvbGxiYXIgewogIGRpc3BsYXk6IG5vbmU7Cn0KLmkxNWRrcTQ6OmJlZm9yZSB7CiAgY29udGVudDogImJlZm9yZSI7CiAgY29sb3I6ICMzRjYzQzg7Cn0KLmkxNWRrcTQ6OmFmdGVyIHsKICBjb250ZW50OiAiYWZ0ZXIiOwogIGNvbG9yOiAjM0Y2M0M4Owp9"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ./src/docs/api/helpers.ve.css.ts

var child = 'i15dkq1';
var overrideScrollbar = 'i15dkq3';
var helpers_ve_css_parent = 'i15dkq0';
var parentClass = 'i15dkq2';
var pseudoElements = 'i15dkq4';
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Pencil.js
var Pencil = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Pencil.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StorySubtitle/index.js
var StorySubtitle = __webpack_require__("../storybook_helpers/dist/esm/src/components/StorySubtitle/index.js");
;// ./src/docs/api/D_Styling.mdx



/*@jsxRuntime automatic @jsxImportSource react*/










function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    a: "a",
    pre: "pre",
    code: "code",
    h4: "h4",
    ul: "ul",
    li: "li",
    h3: "h3"
  }, (0,lib/* useMDXComponents */.RP)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Meta */.W8, {
      title: "API/Styling(Style)"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Title */.hE, {
      children: "Styling"
    }), "\n", (0,jsx_runtime.jsxs)(dist/* Unstyled */.di, {
      children: [(0,jsx_runtime.jsx)(StorySubtitle/* default */.A, {
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://vanilla-extract.style/documentation/styling",
            target: "_blank",
            rel: "nofollow noopener noreferrer",
            children: "Vanilla extract style"
          }), ", which we renamed to 'styling', is an API\nfor creating custom classes."]
        })
      }), (0,jsx_runtime.jsx)(StorySubtitle/* default */.A, {
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In general, the styling API component should address most of your styling cases. Use the Styling (Style) API to solve\ncases when none of the styling components fits, or the style you need is unsupported by the\n", (0,jsx_runtime.jsx)(_components.a, {
            href: "?path=/docs/styling-api-api-atoms-sprinkles--docs",
            children: "atoms"
          }), " API."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "import { styling } from '@fiverr-private/theme';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "limitations",
      children: "Limitations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\".ve.css.ts\" extension is required to prevent conflicts with \"css.ts\" files because Jest does not differentiate between CSS and CSS.ts files. ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://vanilla-extract.style/documentation/test-environments/#remove-style-mocking",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "Vanilla docs"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "?path=/docs/styling-api-api-atoms-sprinkles--docs",
          children: "Atoms"
        }), " and tokens cannot be used in 've.css.ts' files."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reference-other-scoped-class-names",
      children: "Reference other scoped class names"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "// styles.ve.css.ts\n\nimport { styling } from '@fiverr-private/theme';\n\nexport const parent = styling({});\n\nexport const child = styling({\n  display: 'none',\n  selectors: {\n    [`${parent}:hover &`]: {\n      display: 'inline-block',\n    },\n  },\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(helpers/* StoryContainer */.HB, {
      children: (0,jsx_runtime.jsxs)(Stack/* default */.A, {
        direction: "row",
        gap: "3",
        alignItems: "center",
        className: helpers_ve_css_parent,
        children: [(0,jsx_runtime.jsx)(Heading/* default */.A, {
          as: "h6",
          cursor: "pointer",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Hover me"
          })
        }), (0,jsx_runtime.jsx)(Container/* default */.A, {
          className: child,
          children: (0,jsx_runtime.jsx)(Pencil/* default */.A, {})
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vanilla-css-utils",
      children: "Vanilla CSS Utils"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "// styles.ve.css.ts\n\nimport { styling, theme, calc } from '@fiverr-private/theme';\n\nexport const marginCustomClass = styling({\n  margin: calc.negate(theme.spacing['16']),\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "// index.jsx\n\nimport { marginCustomClass } from './styles.ve.css';\n\n<Component className={marginCustomClass} />;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "background-image",
      children: "Background Image"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ensure to pass an imported image, not the image path."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "// styles.ve.css.ts\n\nimport image from './assets/image.png';\nimport { styling } from '@fiverr-private/theme';\n\nconst backgroundImageClass = styling({\n  backgroundImage: `url(${image})`,\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "// index.tsx\n\nimport { backgroundImageClass } from './styles.ve.css';\n\n<Component className={backgroundImageClass} />;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "breakpoints",
      children: "Breakpoints"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { styling, theme } from \"@fiverr-private/theme\";\n\nconst class = styling({\n    '@media': {\n        [theme.breakpoints.sm]: {\n            background: theme.colors.blue_900,\n        },\n        [theme.breakpoints.md]: {\n            background: `url(${image})`,\n        }\n    },\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "target-element-by-html-tag",
      children: "Target element by html tag"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To target an element by the html tag, use globalStyle and specify your class."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "// styles.ve.css.ts\n\nimport { globalStyle, styling, theme } from '@fiverr-private/theme';\n\nconst parentClass = styling({});\n\nglobalStyle(`${parentClass} a`, {\n  color: theme.colors.blue_500,\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "// index.tsx\n\n<Stack direction=\"column\" className={parentClass}>\n  <Link href=\"#\">Link</Link>\n  <Text>Text</Text>\n</Stack>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(helpers/* StoryContainer */.HB, {
      children: (0,jsx_runtime.jsxs)(Stack/* default */.A, {
        direction: "row",
        className: parentClass,
        children: [(0,jsx_runtime.jsx)(Link/* default */.A, {
          href: "#",
          children: "Link"
        }), (0,jsx_runtime.jsx)(Text/* default */.A, {
          children: "Text"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "override-scrollbar",
      children: "Override scrollbar"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "// styles.ve.css.ts\n\nimport { styling } from '@fiverr-private/theme';\n\nconst overrideScrollbar = styling({\n  '::-webkit-scrollbar': {\n    display: 'none',\n  },\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "// index.tsx\n\n<Container height=\"150px\" overflow=\"scroll\" className={overrideScrollbar}>\n  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n  type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining\n  essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum\n  passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\n  type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining\n  essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum\n  passages, and more recently with desktop publishing software like Aldus PageMake including versions of Lorem Ipsum.\n</Container>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(helpers/* StoryContainer */.HB, {
      children: (0,jsx_runtime.jsx)(Container/* default */.A, {
        height: "150px",
        overflow: "scroll",
        className: overrideScrollbar,
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\nstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a\ntype specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,\nremaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing\nLorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of\nLorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\nindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it\nto make a type specimen book. It has survived not only five centuries, but also the leap into electronic\ntypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets\ncontaining Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMake including\nversions of Lorem Ipsum."
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudo-elements",
      children: "Pseudo elements"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "// styles.ve.css.ts\n\nimport { styling, theme } from '@fiverr-private/theme';\n\nconst pseudoElements = styling({\n  '::before': {\n    content: 'before',\n    color: theme.colors.blue_800,\n  },\n  '::after': {\n    content: 'after',\n    color: theme.colors.blue_800,\n  },\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "// index.tsx\n\n<Stack>\n  <Text className={pseudoElements}> content </Text>\n</Stack>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(helpers/* StoryContainer */.HB, {
      children: (0,jsx_runtime.jsxs)(Text/* default */.A, {
        size: "b_lg",
        className: pseudoElements,
        children: [' ', (0,jsx_runtime.jsxs)(_components.p, {
          children: ["content", ' ']
        })]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.RP)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const D_Styling = (MDXContent);


/***/ })

}]);
//# sourceMappingURL=docs-api-D_Styling-mdx.e9ed1c80.iframe.bundle.js.map