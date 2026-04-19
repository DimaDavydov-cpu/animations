"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[87,6788],{

/***/ "../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RP: () => (/* binding */ useMDXComponents),
/* harmony export */   xA: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* unused harmony exports MDXContext, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types.js').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components | MergeComponents | null | undefined} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode | null | undefined} [children]
 *   Children.
 *
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components | null | undefined}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return React.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  /** @type {Components} */
  let allComponents

  if (disableParentContext) {
    allComponents =
      typeof components === 'function'
        ? components({})
        : components || emptyObject
  } else {
    allComponents = useMDXComponents(components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}


/***/ }),

/***/ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_require__("../../node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js");var f=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else // removed by dead control flow
{}


/***/ }),

/***/ "../storybook_helpers/dist/esm/src/components/Links/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");


const GithubIcon = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: "25",
  height: "24",
  viewBox: "0 0 25 24",
  fill: "#74767E",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M12 0.300049C5.4 0.300049 0 5.70005 0 12.3C0 17.55 3.45 22.05 8.25 23.7C8.85 23.85 9 23.4 9 23.1C9 22.8 9 22.05 9 21C5.7 21.75 4.95 19.5 4.95 19.5C4.35 18.15 3.6 17.7 3.6 17.7C2.55 16.95 3.75 16.95 3.75 16.95C4.95 17.1 5.55 18.15 5.55 18.15C6.6 20.1 8.4 19.5 9 19.2C9.15 18.45 9.45 17.85 9.75 17.55C7.05 17.25 4.35 16.2 4.35 11.55C4.35 10.2 4.8 9.15005 5.55 8.40005C5.4 8.10005 4.95 6.90005 5.7 5.25005C5.7 5.25005 6.75 4.95005 9 6.45005C9.9 6.15005 10.95 6.00005 12 6.00005C13.05 6.00005 14.1 6.15005 15 6.45005C17.25 4.95005 18.3 5.25005 18.3 5.25005C18.9 6.90005 18.6 8.10005 18.45 8.40005C19.2 9.30005 19.65 10.35 19.65 11.55C19.65 16.2 16.8 17.1 14.1 17.4C14.55 18 15 18.75 15 19.8C15 21.45 15 22.65 15 23.1C15 23.4 15.15 23.85 15.9 23.7C20.7 22.05 24.15 17.55 24.15 12.3C24 5.70005 18.6 0.300049 12 0.300049Z"
}));
const Links = _ref => {
  let {
    github = '',
    figma = ''
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    display: "flex",
    gap: "4",
    paddingY: "4"
  }, github && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    as: "a",
    color: "bodyPrimary",
    decoration: "underline",
    href: github,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(GithubIcon, null)), figma && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    as: "a",
    href: figma,
    decoration: "underline",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    as: "img",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzy7QINyg0zdqqdYuo_oKdUGCahRppOizZalu1rGyIg&s",
    height: 24,
    width: 24
  })));
};
Links.displayName = 'Links';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Links);
;
Links.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Links"
};

/***/ }),

/***/ "../visuals/src/components/brand/stories/Docs.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var _Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0.83__nlqkbpiednyo7fahryc45gzkge/node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../storybook_helpers/dist/esm/src/components/Links/index.js");
/* harmony import */ var _index_stories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../visuals/src/components/brand/stories/index.stories.tsx");



/*@jsxRuntime automatic @jsxImportSource react*/





function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    a: "a",
    pre: "pre",
    code: "code",
    h2: "h2"
  }, (0,_Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .RP)(), props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _index_stories__WEBPACK_IMPORTED_MODULE_5__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {
      children: "A graphic symbol styled with external brand colors to reflect partner brand identity."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      github: "https://github.com/fiverr/penta_sphinx/tree/master/packages/visuals/src/components/brand",
      figma: "https://www.figma.com/file/UQeVBGciowhLzUbsbhZ9rlpd/%E2%9C%B3%EF%B8%8F-Penta-UI---Core?node-id=33689-104449"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "?path=/docs/visuals-docs--docs#how-to-create-new-visuals",
        children: "How to create new brand icons"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { LovableBrandIcon } from '@fiverr-private/visuals';\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Primary */ .Tn, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "props",
      children: "Props"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Controls */ .H2, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Stories */ .om, {
      includePrimary: false
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


/***/ }),

/***/ "../visuals/src/components/brand/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BrandIcons: () => (/* binding */ BrandIcons),
  Primary: () => (/* binding */ Primary),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// NAMESPACE OBJECT: ../visuals/src/components/brand/index.ts
var brand_namespaceObject = {};
__webpack_require__.r(brand_namespaceObject);
__webpack_require__.d(brand_namespaceObject, {
  AssistantBrandIcon: () => (Assistant),
  LovableBrandIcon: () => (Lovable/* default */.A),
  NewSellerBrandIcon: () => (NewSeller),
  SellerLevelOneBrandIcon: () => (SellerLevelOne),
  SellerLevelTopRatedBrandIcon: () => (SellerLevelTopRated),
  SellerLevelTwoBrandIcon: () => (SellerLevelTwo),
  SellerLevelZeroBrandIcon: () => (SellerLevelZero)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryGrid/index.js
var StoryGrid = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryGrid/index.js");
// EXTERNAL MODULE: ../visuals/src/components/constants.ts
var constants = __webpack_require__("../visuals/src/components/constants.ts");
// EXTERNAL MODULE: ../visuals/src/utils/index.ts
var utils = __webpack_require__("../visuals/src/utils/index.ts");
;// ../visuals/src/components/generated_visuals/brand/Assistant.tsx



const AssistantBrandIcon = _ref => {
  let {
    size = 'sm',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('AssistantBrandIcon')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* BRAND_ICON_SIZES */.XI[size],
    height: constants/* BRAND_ICON_SIZES */.XI[size],
    fill: "none",
    viewBox: "0 0 14 14",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 7,
    cy: 7,
    r: 7,
    fill: "url(#assistant_svg__a)"
  }), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("radialGradient", {
    id: "assistant_svg__a",
    cx: 0,
    cy: 0,
    r: 1,
    gradientTransform: "rotate(-82.409 4.846 -.976)scale(13.8231)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#FFAE72"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 0.25,
    stopColor: "#F4B5C5"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 0.5,
    stopColor: "#85A6FF"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 0.75,
    stopColor: "#3B80DB"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff"
  }))));
};
AssistantBrandIcon.id = 'AssistantBrandIcon';
AssistantBrandIcon.displayName = 'AssistantBrandIcon';
/* harmony default export */ const Assistant = (AssistantBrandIcon);
try {
    // @ts-ignore
    AssistantBrandIcon.displayName = "AssistantBrandIcon";
    // @ts-ignore
    AssistantBrandIcon.__docgenInfo = { "description": "", "displayName": "AssistantBrandIcon", "props": { "size": { "defaultValue": { value: "sm" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xs\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('AssistantBrandIcon')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/brand/Assistant.tsx#AssistantBrandIcon"] = { docgenInfo: AssistantBrandIcon.__docgenInfo, name: "AssistantBrandIcon", path: "../visuals/src/components/generated_visuals/brand/Assistant.tsx#AssistantBrandIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/src/components/generated_visuals/brand/Lovable.tsx
var Lovable = __webpack_require__("../visuals/src/components/generated_visuals/brand/Lovable.tsx");
;// ../visuals/src/components/generated_visuals/brand/NewSeller.tsx



const NewSellerBrandIcon = _ref => {
  let {
    size = 'sm',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('NewSellerBrandIcon')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* BRAND_ICON_SIZES */.XI[size],
    height: constants/* BRAND_ICON_SIZES */.XI[size],
    fill: "none",
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("path", {
    fill: "url(#new_seller_svg__a)",
    d: "M7.065.326a1.85 1.85 0 0 1 1.87 0l5.154 3.027c.564.332.911.937.911 1.592v6.11c0 .655-.347 1.26-.91 1.592l-5.155 3.028a1.85 1.85 0 0 1-1.87 0l-5.154-3.028A1.85 1.85 0 0 1 1 11.056V4.945c0-.655.347-1.26.91-1.592z"
  }), /*#__PURE__*/react.createElement("ellipse", {
    cx: 8,
    cy: 8,
    fill: "#fff",
    rx: 1.556,
    ry: 1.6
  }), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "new_seller_svg__a",
    x1: 8,
    x2: 15.211,
    y1: 0.071,
    y2: 13.237,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#FFC0DE"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#FF99C9"
  }))));
};
NewSellerBrandIcon.id = 'NewSellerBrandIcon';
NewSellerBrandIcon.displayName = 'NewSellerBrandIcon';
/* harmony default export */ const NewSeller = (NewSellerBrandIcon);
try {
    // @ts-ignore
    NewSellerBrandIcon.displayName = "NewSellerBrandIcon";
    // @ts-ignore
    NewSellerBrandIcon.__docgenInfo = { "description": "", "displayName": "NewSellerBrandIcon", "props": { "size": { "defaultValue": { value: "sm" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xs\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('NewSellerBrandIcon')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/brand/NewSeller.tsx#NewSellerBrandIcon"] = { docgenInfo: NewSellerBrandIcon.__docgenInfo, name: "NewSellerBrandIcon", path: "../visuals/src/components/generated_visuals/brand/NewSeller.tsx#NewSellerBrandIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/brand/SellerLevelOne.tsx



const SellerLevelOneBrandIcon = _ref => {
  let {
    size = 'sm',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('SellerLevelOneBrandIcon')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* BRAND_ICON_SIZES */.XI[size],
    height: constants/* BRAND_ICON_SIZES */.XI[size],
    fill: "none",
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("path", {
    fill: "url(#seller_level_one_svg__a)",
    d: "M7.066.325a1.85 1.85 0 0 1 1.87 0l5.154 3.027c.564.332.911.937.911 1.592v6.11c0 .655-.347 1.26-.91 1.592l-5.155 3.028a1.85 1.85 0 0 1-1.87 0l-5.154-3.028A1.85 1.85 0 0 1 1 11.055V4.944c0-.655.347-1.26.91-1.592z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "m8 4.8 1.143 2.023L11.111 8 9.143 9.176 8 11.2 6.855 9.176 4.888 8l1.967-1.177z"
  }), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "seller_level_one_svg__a",
    x1: 2.362,
    x2: 18.451,
    y1: 2.252,
    y2: 19.983,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#FF80AE"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#B14D6F"
  }))));
};
SellerLevelOneBrandIcon.id = 'SellerLevelOneBrandIcon';
SellerLevelOneBrandIcon.displayName = 'SellerLevelOneBrandIcon';
/* harmony default export */ const SellerLevelOne = (SellerLevelOneBrandIcon);
try {
    // @ts-ignore
    SellerLevelOneBrandIcon.displayName = "SellerLevelOneBrandIcon";
    // @ts-ignore
    SellerLevelOneBrandIcon.__docgenInfo = { "description": "", "displayName": "SellerLevelOneBrandIcon", "props": { "size": { "defaultValue": { value: "sm" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xs\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('SellerLevelOneBrandIcon')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/brand/SellerLevelOne.tsx#SellerLevelOneBrandIcon"] = { docgenInfo: SellerLevelOneBrandIcon.__docgenInfo, name: "SellerLevelOneBrandIcon", path: "../visuals/src/components/generated_visuals/brand/SellerLevelOne.tsx#SellerLevelOneBrandIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/brand/SellerLevelTopRated.tsx



const SellerLevelTopRatedBrandIcon = _ref => {
  let {
    size = 'sm',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('SellerLevelTopRatedBrandIcon')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* BRAND_ICON_SIZES */.XI[size],
    height: constants/* BRAND_ICON_SIZES */.XI[size],
    fill: "none",
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("path", {
    fill: "url(#seller_level_top_rated_svg__a)",
    d: "M7.065.326a1.85 1.85 0 0 1 1.87 0l5.154 3.027c.564.332.911.937.911 1.592v6.11c0 .655-.347 1.26-.91 1.592l-5.155 3.028a1.85 1.85 0 0 1-1.87 0l-5.154-3.028A1.85 1.85 0 0 1 1 11.056V4.945c0-.655.347-1.26.91-1.592z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "m3.722 6 .825 1.151L5.667 8l-1.12.849L3.722 10l-.825-1.151L1.777 8l1.12-.849zM8 6l.825 1.151L9.945 8l-1.12.849L8 10l-.825-1.151L6.055 8l1.12-.849zM12.278 6l.825 1.151 1.12.849-1.12.849L12.278 10l-.825-1.151L10.333 8l1.12-.849z"
  }), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "seller_level_top_rated_svg__a",
    x1: 4.111,
    x2: 40.054,
    y1: 2.257,
    y2: 41.412,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    offset: 0.13,
    stopColor: "#FF7640"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 0.677,
    stopColor: "#8F2900"
  }))));
};
SellerLevelTopRatedBrandIcon.id = 'SellerLevelTopRatedBrandIcon';
SellerLevelTopRatedBrandIcon.displayName = 'SellerLevelTopRatedBrandIcon';
/* harmony default export */ const SellerLevelTopRated = (SellerLevelTopRatedBrandIcon);
try {
    // @ts-ignore
    SellerLevelTopRatedBrandIcon.displayName = "SellerLevelTopRatedBrandIcon";
    // @ts-ignore
    SellerLevelTopRatedBrandIcon.__docgenInfo = { "description": "", "displayName": "SellerLevelTopRatedBrandIcon", "props": { "size": { "defaultValue": { value: "sm" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xs\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('SellerLevelTopRatedBrandIcon')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/brand/SellerLevelTopRated.tsx#SellerLevelTopRatedBrandIcon"] = { docgenInfo: SellerLevelTopRatedBrandIcon.__docgenInfo, name: "SellerLevelTopRatedBrandIcon", path: "../visuals/src/components/generated_visuals/brand/SellerLevelTopRated.tsx#SellerLevelTopRatedBrandIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/brand/SellerLevelTwo.tsx



const SellerLevelTwoBrandIcon = _ref => {
  let {
    size = 'sm',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('SellerLevelTwoBrandIcon')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* BRAND_ICON_SIZES */.XI[size],
    height: constants/* BRAND_ICON_SIZES */.XI[size],
    fill: "none",
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("path", {
    fill: "url(#seller_level_two_svg__a)",
    d: "M7.065.324a1.85 1.85 0 0 1 1.87 0l5.154 3.027c.564.332.911.937.911 1.592v6.11c0 .655-.347 1.26-.91 1.592l-5.155 3.028a1.85 1.85 0 0 1-1.87 0l-5.154-3.028A1.85 1.85 0 0 1 1 11.054V4.943c0-.655.347-1.26.91-1.592z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "m5.86 5.999.825 1.152 1.12.848-1.12.849-.825 1.151-.825-1.151-1.12-.849 1.12-.848zM10.138 5.999l.825 1.152 1.12.848-1.12.849-.825 1.151-.825-1.151-1.12-.849 1.12-.848z"
  }), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "seller_level_two_svg__a",
    x1: 4.5,
    x2: 18.087,
    y1: 1.064,
    y2: 22.037,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    offset: 0.239,
    stopColor: "#BBCE00"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#7D8900"
  }))));
};
SellerLevelTwoBrandIcon.id = 'SellerLevelTwoBrandIcon';
SellerLevelTwoBrandIcon.displayName = 'SellerLevelTwoBrandIcon';
/* harmony default export */ const SellerLevelTwo = (SellerLevelTwoBrandIcon);
try {
    // @ts-ignore
    SellerLevelTwoBrandIcon.displayName = "SellerLevelTwoBrandIcon";
    // @ts-ignore
    SellerLevelTwoBrandIcon.__docgenInfo = { "description": "", "displayName": "SellerLevelTwoBrandIcon", "props": { "size": { "defaultValue": { value: "sm" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xs\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('SellerLevelTwoBrandIcon')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/brand/SellerLevelTwo.tsx#SellerLevelTwoBrandIcon"] = { docgenInfo: SellerLevelTwoBrandIcon.__docgenInfo, name: "SellerLevelTwoBrandIcon", path: "../visuals/src/components/generated_visuals/brand/SellerLevelTwo.tsx#SellerLevelTwoBrandIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/brand/SellerLevelZero.tsx



const SellerLevelZeroBrandIcon = _ref => {
  let {
    size = 'sm',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('SellerLevelZeroBrandIcon')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* BRAND_ICON_SIZES */.XI[size],
    height: constants/* BRAND_ICON_SIZES */.XI[size],
    fill: "none",
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#C5C6C9",
    d: "M7.065.326a1.85 1.85 0 0 1 1.87 0l5.154 3.027c.564.332.911.937.911 1.592v6.11c0 .655-.347 1.26-.91 1.592l-5.155 3.028a1.85 1.85 0 0 1-1.87 0l-5.154-3.028A1.85 1.85 0 0 1 1 11.056V4.945c0-.655.347-1.26.91-1.592z"
  }), /*#__PURE__*/react.createElement("ellipse", {
    cx: 8,
    cy: 8,
    fill: "#fff",
    rx: 1.556,
    ry: 1.6
  }));
};
SellerLevelZeroBrandIcon.id = 'SellerLevelZeroBrandIcon';
SellerLevelZeroBrandIcon.displayName = 'SellerLevelZeroBrandIcon';
/* harmony default export */ const SellerLevelZero = (SellerLevelZeroBrandIcon);
try {
    // @ts-ignore
    SellerLevelZeroBrandIcon.displayName = "SellerLevelZeroBrandIcon";
    // @ts-ignore
    SellerLevelZeroBrandIcon.__docgenInfo = { "description": "", "displayName": "SellerLevelZeroBrandIcon", "props": { "size": { "defaultValue": { value: "sm" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xs\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('SellerLevelZeroBrandIcon')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/brand/SellerLevelZero.tsx#SellerLevelZeroBrandIcon"] = { docgenInfo: SellerLevelZeroBrandIcon.__docgenInfo, name: "SellerLevelZeroBrandIcon", path: "../visuals/src/components/generated_visuals/brand/SellerLevelZero.tsx#SellerLevelZeroBrandIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/brand/index.ts







// EXTERNAL MODULE: ../visuals/src/components/stories/helpers.tsx
var helpers = __webpack_require__("../visuals/src/components/stories/helpers.tsx");
;// ../visuals/src/components/brand/stories/Demo.tsx


const Demo = _ref => {
  let {
    size = 'sm',
    iconName
  } = _ref;
  const Icon = brand_namespaceObject[iconName];
  return /*#__PURE__*/react.createElement(Icon, {
    size: size
  });
};
/* harmony default export */ const stories_Demo = (Demo);
try {
    // @ts-ignore
    Demo.displayName = "Demo";
    // @ts-ignore
    Demo.__docgenInfo = { "description": "", "displayName": "Demo", "props": { "iconName": { "defaultValue": null, "description": "", "name": "iconName", "required": true, "type": { "name": "enum", "value": [{ "value": "\"AssistantBrandIcon\"" }, { "value": "\"LovableBrandIcon\"" }, { "value": "\"NewSellerBrandIcon\"" }, { "value": "\"SellerLevelOneBrandIcon\"" }, { "value": "\"SellerLevelTopRatedBrandIcon\"" }, { "value": "\"SellerLevelTwoBrandIcon\"" }, { "value": "\"SellerLevelZeroBrandIcon\"" }] } }, "size": { "defaultValue": { value: "sm" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xs\"" }] } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/brand/stories/Demo.tsx#Demo"] = { docgenInfo: Demo.__docgenInfo, name: "Demo", path: "../visuals/src/components/brand/stories/Demo.tsx#Demo" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/brand/stories/index.stories.tsx





const brandIconsArr = Object.values(brand_namespaceObject);
const Primary = {
  tags: ['sidebar-ignore', 'snapshot-ignore']
};
const BrandIcons = {
  tags: ['sidebar-ignore'],
  render: _ref => {
    let {
      size
    } = _ref;
    return /*#__PURE__*/react.createElement(StoryGrid/* default */.A, {
      paddingY: "4"
    }, brandIconsArr.map(Icon => /*#__PURE__*/react.createElement(helpers/* IconWrapper */.h, {
      key: Icon.displayName,
      displayName: Icon.displayName
    }, /*#__PURE__*/react.createElement(Icon, {
      size: size
    }))));
  }
};
const meta = {
  args: {
    iconName: 'LovableBrandIcon',
    size: 'sm'
  },
  title: 'Visuals/BrandIcons',
  component: stories_Demo
};
/* harmony default export */ const index_stories = (meta);
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore']\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
BrandIcons.parameters = {
  ...BrandIcons.parameters,
  docs: {
    ...BrandIcons.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: ({\n    size\n  }) => <StoryGrid paddingY=\"4\">\n      {brandIconsArr.map(Icon => <IconWrapper key={Icon.displayName} displayName={Icon.displayName}>\n          <Icon size={size} />\n        </IconWrapper>)}\n    </StoryGrid>\n}",
      ...BrandIcons.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","BrandIcons"];

/***/ }),

/***/ "../visuals/src/components/generated_visuals/brand/Lovable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/src/components/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/src/utils/index.ts");



const LovableBrandIcon = _ref => {
  let {
    size = 'sm',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .pascalToSnake */ .e)('LovableBrandIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .BRAND_ICON_SIZES */ .XI[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .BRAND_ICON_SIZES */ .XI[size],
    fill: "none",
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("mask", {
    id: "lovable_svg__b",
    width: 12,
    height: 13,
    x: 2,
    y: 2,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: 'alpha'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "url(#lovable_svg__a)",
    fillRule: "evenodd",
    d: "M5.6 2c1.99 0 3.601 1.616 3.601 3.61v1.372H10.4c1.989 0 3.601 1.616 3.601 3.61a3.605 3.605 0 0 1-3.6 3.61H2V5.61A3.605 3.605 0 0 1 5.6 2",
    clipRule: "evenodd"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    mask: "url(#lovable_svg__b)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    filter: "url(#lovable_svg__c)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#4B73FF",
    d: "M7.264 17.147c4.486 0 8.123-4.37 8.123-9.763S11.75-2.38 7.264-2.38C2.777-2.38-.86 1.991-.86 7.384s3.636 9.763 8.123 9.763"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    filter: "url(#lovable_svg__d)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#FF66F4",
    d: "M8.156 11.79c5.746 0 10.404-4.37 10.404-9.763S13.902-7.737 8.156-7.737-2.247-3.365-2.247 2.027 2.41 11.79 8.156 11.79"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    filter: "url(#lovable_svg__e)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#FF0105",
    d: "M9.854 8.765c4.486 0 8.123-3.839 8.123-8.575S14.34-8.384 9.854-8.384C5.367-8.384 1.73-4.545 1.73.19c0 4.736 3.637 8.575 8.124 8.575"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    filter: "url(#lovable_svg__f)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#FE7B02",
    d: "M8.302 7.896c2.698 0 4.885-2.629 4.885-5.872S11-3.848 8.302-3.848s-4.885 2.63-4.885 5.872 2.187 5.872 4.885 5.872"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("filter", {
    id: "lovable_svg__c",
    width: 23.527,
    height: 26.808,
    x: -4.5,
    y: -6.02,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feGaussianBlur", {
    result: "effect1_foregroundBlur_1396_1200",
    stdDeviation: 1.82
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("filter", {
    id: "lovable_svg__d",
    width: 28.088,
    height: 26.808,
    x: -5.888,
    y: -11.377,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feGaussianBlur", {
    result: "effect1_foregroundBlur_1396_1200",
    stdDeviation: 1.82
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("filter", {
    id: "lovable_svg__e",
    width: 23.527,
    height: 24.43,
    x: -1.91,
    y: -12.025,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feGaussianBlur", {
    result: "effect1_foregroundBlur_1396_1200",
    stdDeviation: 1.82
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("filter", {
    id: "lovable_svg__f",
    width: 17.051,
    height: 19.024,
    x: -0.223,
    y: -7.488,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feGaussianBlur", {
    result: "effect1_foregroundBlur_1396_1200",
    stdDeviation: 1.82
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", {
    id: "lovable_svg__a",
    x1: 6.038,
    x2: 9.694,
    y1: 4.144,
    y2: 14.198,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: 0.025,
    stopColor: "#FF8E63"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: 0.56,
    stopColor: "#FF7EB0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: 0.95,
    stopColor: "#4B73FF"
  }))));
};
LovableBrandIcon.id = 'LovableBrandIcon';
LovableBrandIcon.displayName = 'LovableBrandIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LovableBrandIcon);
try {
    // @ts-ignore
    LovableBrandIcon.displayName = "LovableBrandIcon";
    // @ts-ignore
    LovableBrandIcon.__docgenInfo = { "description": "", "displayName": "LovableBrandIcon", "props": { "size": { "defaultValue": { value: "sm" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xs\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('LovableBrandIcon')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/brand/Lovable.tsx#LovableBrandIcon"] = { docgenInfo: LovableBrandIcon.__docgenInfo, name: "LovableBrandIcon", path: "../visuals/src/components/generated_visuals/brand/Lovable.tsx#LovableBrandIcon" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ })

}]);
//# sourceMappingURL=components-brand-stories-Docs-mdx.73eec3be.iframe.bundle.js.map