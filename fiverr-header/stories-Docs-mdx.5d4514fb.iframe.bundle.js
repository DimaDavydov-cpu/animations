"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[77,1077,1923,2278,2937,3594,3601,3666,4367,4444,5502,6151,7394,7770,8124,8135,8815,9610,9630],{

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

/***/ "../badges/src/stories/Docs.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Docs)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+blocks@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0.83__nlqkbpiednyo7fahryc45gzkge/node_modules/@storybook/blocks/dist/index.mjs + 13 modules
var dist = __webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0.83__nlqkbpiednyo7fahryc45gzkge/node_modules/@storybook/blocks/dist/index.mjs");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/Links/index.js
var Links = __webpack_require__("../storybook_helpers/dist/esm/src/components/Links/index.js");
// EXTERNAL MODULE: ../badges/src/components/FiverrChoiceBadge/index.tsx
var FiverrChoiceBadge = __webpack_require__("../badges/src/components/FiverrChoiceBadge/index.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js
var translate = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Typography/index.js
var Typography = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/CheckStarSolid.js
var CheckStarSolid = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/CheckStarSolid.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../badges/src/components/Badge/index.tsx + 1 modules
var Badge = __webpack_require__("../badges/src/components/Badge/index.tsx");
;// ../badges/src/components/ProBadge/index.tsx






const PRO_LABEL = 'Pro';

/**
 * @deprecated - Use "VettedProBadge" instead
 */
const ProBadge = _ref => {
  let {
    showTooltip = true,
    tooltipPosition = 'top',
    dataTestId,
    appendTooltipToBody,
    disableTooltipFlip,
    isAgency,
    dataTrackTag = 'pro_badge',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    background: "#2E25AD",
    borderRadius: "sm"
  }, /*#__PURE__*/react.createElement(Badge/* default */.A, {
    showTooltip: showTooltip,
    backgroundColor: "inherit",
    tooltipContent: (0,translate/* translate */.T)("badges.pro_badge.".concat(isAgency ? 'agency_tooltip' : 'tooltip')),
    tooltipPosition: tooltipPosition,
    dataTestId: dataTestId,
    appendTooltipToBody: appendTooltipToBody,
    disableTooltipFlip: disableTooltipFlip,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(CheckStarSolid/* default */.A, {
    size: "xs"
  }), /*#__PURE__*/react.createElement(Typography/* default */.A, null, PRO_LABEL)));
};
ProBadge.displayName = 'ProBadge';
/* harmony default export */ const components_ProBadge = (ProBadge);
try {
    // @ts-ignore
    ProBadge.displayName = "ProBadge";
    // @ts-ignore
    ProBadge.__docgenInfo = { "description": "", "displayName": "ProBadge", "props": { "isAgency": { "defaultValue": null, "description": "", "name": "isAgency", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTrackTag": { "defaultValue": { value: "pro_badge" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "showTooltip": { "defaultValue": { value: "true" }, "description": "", "name": "showTooltip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "tooltipPosition": { "defaultValue": { value: "top" }, "description": "", "name": "tooltipPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"right\"" }, { "value": "\"left\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }, { "value": "\"right-start\"" }, { "value": "\"right-end\"" }, { "value": "\"left-start\"" }, { "value": "\"left-end\"" }, { "value": "\"auto\"" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "appendTooltipToBody": { "defaultValue": null, "description": "", "name": "appendTooltipToBody", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disableTooltipFlip": { "defaultValue": null, "description": "", "name": "disableTooltipFlip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disablePadding": { "defaultValue": null, "description": "", "name": "disablePadding", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../badges/src/components/ProBadge/index.tsx#ProBadge"] = { docgenInfo: ProBadge.__docgenInfo, name: "ProBadge", path: "../badges/src/components/ProBadge/index.tsx#ProBadge" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../badges/src/components/RecommendedBadge/index.tsx
var RecommendedBadge = __webpack_require__("../badges/src/components/RecommendedBadge/index.tsx");
// EXTERNAL MODULE: ../badges/src/stories/index.stories.tsx + 26 modules
var index_stories = __webpack_require__("../badges/src/stories/index.stories.tsx");
;// ../badges/src/stories/Docs.mdx



/*@jsxRuntime automatic @jsxImportSource react*/






function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    pre: "pre",
    code: "code",
    h2: "h2",
    h3: "h3"
  }, (0,lib/* useMDXComponents */.RP)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Meta */.W8, {
      of: index_stories
    }), "\n", (0,jsx_runtime.jsx)(dist/* Title */.hE, {
      children: "Badges"
    }), "\n", (0,jsx_runtime.jsxs)(dist/* Subtitle */.Pd, {
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Badge is an indicator of an entity. Often times a Badge is binary - it’s either there or not. For example, a gig can\nhave a top rated badge if it complies with the requirements."
      }), (0,jsx_runtime.jsx)(Links/* default */.A, {
        github: "https://github.com/fiverr/penta_sphinx/tree/master/packages/badges",
        figma: "https://www.figma.com/design/UQeVBGciowhLzUbsbhZ9rlpd/%E2%9C%B3%EF%B8%8F-Penta-UI---Core?node-id=33673-36414"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { FiverrChoiceBadge, ProBadge, RecommendedBadge } from '@fiverr-private/badges';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "badge",
      children: "Badge"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Description */.VY, {
      of: index_stories.Primary
    }), "\n", (0,jsx_runtime.jsx)(dist/* Primary */.Tn, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "props",
      children: "Props"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Controls */.H2, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "badge-with-tooltip-props",
      children: "Badge with tooltip props"
    }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.ov, {
      of: FiverrChoiceBadge/* default */.A
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "badge-with-agency-tooltip-props",
      children: "Badge with agency tooltip props"
    }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.ov, {
      of: components_ProBadge
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "badge-without-tooltip-props",
      children: "Badge without tooltip props"
    }), "\n", (0,jsx_runtime.jsx)(dist/* ArgTypes */.ov, {
      of: RecommendedBadge/* default */.A
    }), "\n", (0,jsx_runtime.jsx)(dist/* Stories */.om, {
      includePrimary: false
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.RP)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const Docs = (MDXContent);


/***/ }),

/***/ "../dropdown/src/stories/Docs.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var _Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0.83__nlqkbpiednyo7fahryc45gzkge/node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryText/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../dropdown/src/components/DropdownAnchor/index.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../dropdown/src/components/DropdownContent/index.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../dropdown/src/components/DropdownTrigger/index.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../dropdown/src/components/DropdownMenu/index.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../dropdown/src/components/DropdownMenu/MenuItem/index.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../dropdown/src/components/DropdownMenu/MenuGroup/index.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../dropdown/src/components/DropdownHeader/index.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../dropdown/src/components/DropdownHeader/DropdownHeaderActions/index.tsx");
/* harmony import */ var _index_stories__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../dropdown/src/stories/index.stories.tsx");



/*@jsxRuntime automatic @jsxImportSource react*/






function _createMdxContent(props) {
  const _components = Object.assign({
    pre: "pre",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong"
  }, (0,_Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .RP)(), props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _index_stories__WEBPACK_IMPORTED_MODULE_13__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {
      children: "An abstraction on top of the Popover component that combines it with a trigger."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import {\n    Dropdown,\n    DropdownAnchor,\n    DropdownContent\n    DropdownTrigger,\n    DropdownMenu,\n    DropdownHeader,\n    DropdownHeaderActions,\n    MenuGroup,\n    MenuItem,\n    MenuDivider,\n    useMenuContext,\n} from '@fiverr-private/dropdown';\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Primary */ .Tn, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "props",
      children: "Props"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Controls */ .H2, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "dropdownanchor",
      children: "DropdownAnchor"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      as: "span",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "Content Anchor. The position of the content is relative to the anchor component."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.strong, {
          children: ["Child component of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "DropdownAnchor"
          }), " must support getting ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "ref"
          }), " as prop (using ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "forwardRef"
          }), ") and pass it to the trigger\nelement."]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {
      of: ___WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "dropdowncontent",
      children: "DropdownContent"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      children: "Content wrapper, it renders when triggering the dropdown"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {
      of: ___WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "dropdowntrigger",
      children: "DropdownTrigger"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      children: "Optional trigger for the menu, can be replaced by any other component"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {
      of: ___WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "dropdownmenu",
      children: "DropdownMenu"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      children: "The top level component that renders a user dropdown menu"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {
      of: ___WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "dropdownheader",
      children: "DropdownHeader"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      children: "The Dropdown header"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {
      of: ___WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "dropdownheaderactions",
      children: "DropdownHeaderActions"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      children: "Dropdown header actions only support Button components from the Button package as children"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {
      of: ___WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "menugroup",
      children: "MenuGroup"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      children: "Groups several menu items under one select input like component"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {
      of: ___WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "menuitem",
      children: "MenuItem"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      children: "Renders a single menu item, it allows selectable behavior if specified"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {
      of: ___WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Stories */ .om, {
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

/***/ "../highlights/src/stories/Docs.mdx":
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
/* harmony import */ var _index_stories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../highlights/src/stories/index.stories.tsx");



/*@jsxRuntime automatic @jsxImportSource react*/






function _createMdxContent(props) {
  const _components = Object.assign({
    code: "code",
    p: "p",
    pre: "pre",
    h2: "h2"
  }, (0,_Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .RP)(), props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _index_stories__WEBPACK_IMPORTED_MODULE_5__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {
      children: "❌ Highlights [DEPRECATED]"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subheading */ .R2, {
      children: ["❗ This package is deprecated. Please use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "@fiverr-private/data_display"
      }), " instead."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "A Highlight is a small prominent decision indicator."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        github: "https://github.com/fiverr/penta_sphinx/tree/master/packages/highlights",
        figma: "https://www.figma.com/design/UQeVBGciowhLzUbsbhZ9rlpd/%E2%9C%B3%EF%B8%8F-Penta-UI---Core?node-id=33673-94416"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import {\n  WorkedWithHighlight,\n  CollaboratedHighlight,\n  HighlyResponsiveHighlight,\n  FreelancerSavedHighlight,\n  ClientsBackHighlight,\n  SpeaksHighlight,\n  RankedTopHighlight,\n  UnavailableHighlight,\n  NotActiveHighlight,\n} from '@fiverr-private/highlights';\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "highlight",
      children: "Highlight"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Description */ .VY, {
      of: _index_stories__WEBPACK_IMPORTED_MODULE_5__.Primary
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

/***/ "../statuses/src/stories/Docs.mdx":
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
/* harmony import */ var _index_stories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../statuses/src/stories/index.stories.tsx");



/*@jsxRuntime automatic @jsxImportSource react*/






function _createMdxContent(props) {
  const _components = Object.assign({
    code: "code",
    p: "p",
    pre: "pre",
    h2: "h2"
  }, (0,_Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .RP)(), props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _index_stories__WEBPACK_IMPORTED_MODULE_5__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {
      children: "❌ Statuses [DEPRECATED]"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subheading */ .R2, {
      children: ["❗ This package is deprecated. Please use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "@fiverr-private/data_display"
      }), " instead."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "A status is an indicator for the current status of an order, page or a feature. A Status usually tells a story. For example, an order that goes from “In progress” to “Completed”."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        github: "https://github.com/fiverr/penta_sphinx/tree/master/packages/statuses",
        figma: "https://www.figma.com/design/UQeVBGciowhLzUbsbhZ9rlpd/%E2%9C%B3%EF%B8%8F-Penta-UI---Core?node-id=33673-36506"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import {\n  CompletedStatus,\n  InRevisionStatus,\n  CanceledStatus,\n  LateStatus,\n  VeryLateStatus,\n  ActiveStatus,\n  DeliveredStatus,\n  PromotedStatus,\n  IncompleteStatus,\n  RejectedStatus,\n  DisputeStatus,\n  InProgressStatus,\n  PausedStatus,\n  ArchivedStatus,\n  NotPromotedStatus,\n  NoInvitesSentStatus,\n  InactiveStatus,\n  LiveStatus,\n  HiredStatus,\n  DoneStatus,\n  ClearStatus,\n  SignedStatus,\n  LowRiskStatus,\n  HighRiskStatus,\n  IssuesFoundStatus,\n  ExpiredStatus,\n  RequestExpiredStatus,\n  SentStatus,\n  RequestedStatus,\n  PaymentFailedStatus,\n  InDebtStatus,\n  SubmittedStatus,\n  SuspendedStatus,\n  RequestOpenedStatus,\n  InConversationStatus,\n  ResponseSentStatus,\n  AcceptedStatus,\n  DeniedStatus,\n  DraftStatus,\n  RequiresModificationStatus,\n  PendingApprovalStatus,\n  FailedProcessingStatus,\n  PendingActivationStatus,\n  ProcessingStatus,\n  RetrievingStatus,\n  DeletedStatus,\n} from '@fiverr-private/statuses';\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "status",
      children: "Status"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Description */ .VY, {
      of: _index_stories__WEBPACK_IMPORTED_MODULE_5__.Primary
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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/CheckStarSolid.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const CheckStarSolidIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('CheckStarSolidIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    fill: _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .Tj[color],
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M8.804.791a1.256 1.256 0 0 0-1.608 0L5.652 2.078H3.334c-.694 0-1.256.562-1.256 1.256v2.318L.791 7.196a1.256 1.256 0 0 0 0 1.608l1.287 1.544v2.318c0 .694.562 1.256 1.256 1.256h2.318l1.544 1.287a1.256 1.256 0 0 0 1.608 0l1.544-1.287h2.318c.694 0 1.256-.562 1.256-1.256v-2.318l1.287-1.544a1.256 1.256 0 0 0 0-1.608l-1.287-1.544V3.334c0-.694-.562-1.256-1.256-1.256h-2.318zm2.264 5.869a.718.718 0 0 0-1.111-.91L7.229 9.086l-.875-.875a.718.718 0 1 0-1.015 1.015l1.436 1.436a.72.72 0 0 0 1.063-.053z",
    clipRule: "evenodd"
  }));
};
CheckStarSolidIcon.id = 'CheckStarSolidIcon';
CheckStarSolidIcon.displayName = 'CheckStarSolidIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckStarSolidIcon);
;
CheckStarSolidIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CheckStarSolidIcon"
};

/***/ })

}]);
//# sourceMappingURL=stories-Docs-mdx.5d4514fb.iframe.bundle.js.map