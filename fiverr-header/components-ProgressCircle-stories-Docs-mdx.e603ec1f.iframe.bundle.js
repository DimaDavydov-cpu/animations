"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[1313,4002],{

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

/***/ "../feedback/src/components/ProgressCircle/stories/Docs.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var _Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0.83__nlqkbpiednyo7fahryc45gzkge/node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _index_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../feedback/src/components/ProgressCircle/stories/index.stories.tsx");



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    pre: "pre",
    code: "code",
    h2: "h2"
  }, (0,_Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .RP)(), props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _index_stories__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "The ProgressCircle component should be used when you want to indicate the progress of a task or operation to the user.\nIt visually represents the progress as a circle"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { ProgressCircle } from '@fiverr-private/feedback';\n"
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

/***/ "../feedback/src/components/ProgressCircle/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Primary: () => (/* binding */ Primary),
  ProgressColor: () => (/* binding */ ProgressColor),
  Score: () => (/* binding */ Score),
  TrackColor: () => (/* binding */ TrackColor),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryStack/index.js
var StoryStack = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/utils.js
var utils = __webpack_require__("../theme/dist/esm/src/atoms/utils.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Typography/index.js
var Typography = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
// EXTERNAL MODULE: ../feedback/src/components/ProgressLine/helpers.ts
var helpers = __webpack_require__("../feedback/src/components/ProgressLine/helpers.ts");
;// ../feedback/src/components/ProgressCircle/constants.ts
const PATH = 'm35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z';
const CIRCLE_MAX = 204;
;// ../feedback/src/components/ProgressCircle/helpers.ts


const getProgressBackgroundStyle = (percent, color) => {
  const progress = CIRCLE_MAX * percent / 100;
  return {
    strokeDasharray: CIRCLE_MAX,
    strokeDashoffset: CIRCLE_MAX - progress,
    stroke: themeVars/* colors */.Tj[color],
    strokeWidth: 4,
    strokeLinecap: 'round'
  };
};
;// ../feedback/src/components/ProgressCircle/index.tsx






const ProgressCircle = _ref => {
  let {
    percent = 0,
    progressColor = 'default',
    trackColor = 'default',
    showScore,
    dataTrackTag = 'progress_circle',
    dataTrackValue
  } = _ref;
  const {
    progressBackgroundColor,
    trackBackgroundColor
  } = (0,helpers/* getProgressColors */.i)({
    progressColor,
    trackColor
  });
  const progress = (0,helpers/* getProgressPercent */.R)(percent);
  const trackStyle = {
    strokeDasharray: 205,
    strokeDashoffset: 0,
    stroke: themeVars/* colors */.Tj[trackBackgroundColor],
    strokeWidth: 4
  };
  const svgStyle = {
    zIndex: 2,
    top: 0,
    left: 0,
    fill: 'none'
  };
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "div",
    role: "progressbar",
    "aria-valuenow": percent,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    display: "inlineFlex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "64px",
    height: "64px",
    color: progressBackgroundColor,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement("svg", {
    style: svgStyle,
    className: (0,utils/* atoms */.Fo)({
      position: 'absolute'
    }),
    viewBox: "-1 -1 71 71"
  }, /*#__PURE__*/react.createElement("path", {
    d: PATH,
    style: trackStyle
  }), /*#__PURE__*/react.createElement("path", {
    d: PATH,
    style: getProgressBackgroundStyle(progress, progressBackgroundColor)
  })), showScore && /*#__PURE__*/react.createElement(Typography/* default */.A, {
    position: "absolute",
    size: "b_md",
    fontWeight: "semibold",
    transform: "translateX(.1em)"
  }, "".concat(percent, "%")));
};
ProgressCircle.display = 'ProgressCircle';
/* harmony default export */ const components_ProgressCircle = (ProgressCircle);
try {
    // @ts-ignore
    ProgressCircle.displayName = "ProgressCircle";
    // @ts-ignore
    ProgressCircle.__docgenInfo = { "description": "", "displayName": "ProgressCircle", "props": { "showScore": { "defaultValue": null, "description": "Whether to show the percentage inside the circle. Supported for sizes 'lg' and 'xl' only.", "name": "showScore", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "percent": { "defaultValue": { value: "0" }, "description": "The current progress percentage.", "name": "percent", "required": false, "type": { "name": "number" } }, "progressColor": { "defaultValue": { value: "default" }, "description": "The color of the progress.", "name": "progressColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"paused\"" }] } }, "trackColor": { "defaultValue": { value: "default" }, "description": "The color of the progress track. Useful if contrast is needed against a light background.", "name": "trackColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"white\"" }] } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "dataTrackTag": { "defaultValue": { value: "progress_circle" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../feedback/src/components/ProgressCircle/index.tsx#ProgressCircle"] = { docgenInfo: ProgressCircle.__docgenInfo, name: "ProgressCircle", path: "../feedback/src/components/ProgressCircle/index.tsx#ProgressCircle" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../feedback/src/components/ProgressCircle/stories/index.stories.tsx



const meta = {
  title: 'Feedback/ProgressCircle',
  component: components_ProgressCircle,
  args: {
    percent: 20
  },
  render: args => /*#__PURE__*/react.createElement(components_ProgressCircle, args)
};
const Primary = {
  tags: ['sidebar-ignore']
};
const Score = {
  tags: ['sidebar-ignore'],
  args: {
    percent: 50,
    showScore: true
  },
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    direction: "row",
    gap: "10",
    marginBottom: "8"
  }, /*#__PURE__*/react.createElement(components_ProgressCircle, args))
};
const TrackColor = {
  tags: ['sidebar-ignore'],
  args: {
    percent: 33,
    showScore: true,
    trackColor: 'white'
  },
  decorators: [Story => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    padding: "4",
    backgroundColor: "grey_300"
  }, /*#__PURE__*/react.createElement(Story, null))]
};
const ProgressColor = {
  tags: ['sidebar-ignore'],
  args: {
    percent: 66,
    showScore: true,
    progressColor: 'paused'
  }
};
/* harmony default export */ const index_stories = (meta);
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore']\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
Score.parameters = {
  ...Score.parameters,
  docs: {
    ...Score.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    percent: 50,\n    showScore: true\n  },\n  render: args => <StoryStack direction=\"row\" gap=\"10\" marginBottom=\"8\">\n      <ProgressCircle {...args} />\n    </StoryStack>\n}",
      ...Score.parameters?.docs?.source
    }
  }
};
TrackColor.parameters = {
  ...TrackColor.parameters,
  docs: {
    ...TrackColor.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    percent: 33,\n    showScore: true,\n    trackColor: 'white'\n  },\n  decorators: [Story => <StoryStack padding=\"4\" backgroundColor=\"grey_300\">\n        <Story />\n      </StoryStack>]\n}",
      ...TrackColor.parameters?.docs?.source
    }
  }
};
ProgressColor.parameters = {
  ...ProgressColor.parameters,
  docs: {
    ...ProgressColor.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    percent: 66,\n    showScore: true,\n    progressColor: 'paused'\n  }\n}",
      ...ProgressColor.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","Score","TrackColor","ProgressColor"];

/***/ })

}]);
//# sourceMappingURL=components-ProgressCircle-stories-Docs-mdx.e603ec1f.iframe.bundle.js.map