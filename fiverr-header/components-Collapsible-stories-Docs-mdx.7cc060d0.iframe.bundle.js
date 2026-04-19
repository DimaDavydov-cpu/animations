"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[77,1077,1923,2278,2937,3594,3601,3666,4367,5502,5786,6151,7394,7770,8124,8135,8815,9610,9630],{

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

/***/ "../disclosure/src/components/Collapsible/stories/Docs.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var _Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0.83__nlqkbpiednyo7fahryc45gzkge/node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _CollapsibleHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../disclosure/src/components/Collapsible/CollapsibleHeader/index.tsx");
/* harmony import */ var _CollapsibleContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../disclosure/src/components/Collapsible/CollapsibleContent/index.tsx");
/* harmony import */ var _CollapsibleHeaderChevron__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../disclosure/src/components/Collapsible/CollapsibleHeaderChevron/index.tsx");
/* harmony import */ var _CollapsibleHeaderMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../disclosure/src/components/Collapsible/CollapsibleHeaderMenu/index.tsx");
/* harmony import */ var _index_stories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../disclosure/src/components/Collapsible/stories/index.stories.tsx");



/*@jsxRuntime automatic @jsxImportSource react*/








function _createMdxContent(props) {
  const _components = Object.assign({
    pre: "pre",
    code: "code",
    h2: "h2",
    h3: "h3"
  }, (0,_Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .RP)(), props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _index_stories__WEBPACK_IMPORTED_MODULE_8__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {
      children: "An expandable/minimizable text wrapper."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { Collapsible, CollapsibleHeader, CollapsibleContent } from '@fiverr-private/disclosure';\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Primary */ .Tn, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "props",
      children: "Props"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Controls */ .H2, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "collapsibleheader",
      children: "CollapsibleHeader"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {
      of: _CollapsibleHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "collapsiblecontent",
      children: "CollapsibleContent"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {
      of: _CollapsibleContent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "collapsibleheaderchevron",
      children: "CollapsibleHeaderChevron"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {
      of: _CollapsibleHeaderChevron__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "collapsibleheadermenu",
      children: "CollapsibleHeaderMenu"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {
      of: _CollapsibleHeaderMenu__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A
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

/***/ "../disclosure/src/components/Collapsible/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComplexHeader: () => (/* binding */ ComplexHeader),
/* harmony export */   Controlled: () => (/* binding */ Controlled),
/* harmony export */   CustomColor: () => (/* binding */ CustomColor),
/* harmony export */   DefaultExpanded: () => (/* binding */ DefaultExpanded),
/* harmony export */   Disabled: () => (/* binding */ Disabled),
/* harmony export */   Primary: () => (/* binding */ Primary),
/* harmony export */   WithHeaderEllipsis: () => (/* binding */ WithHeaderEllipsis),
/* harmony export */   WithMenuHeader: () => (/* binding */ WithMenuHeader),
/* harmony export */   WithMenuHeaderLeanChevron: () => (/* binding */ WithMenuHeaderLeanChevron),
/* harmony export */   WithToggleCallback: () => (/* binding */ WithToggleCallback),
/* harmony export */   WithoutChevron: () => (/* binding */ WithoutChevron),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Ellipsis.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Heart.js");
/* harmony import */ var _fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
/* harmony import */ var _fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../dropdown/dist/esm/src/components/Dropdown/index.js");
/* harmony import */ var _fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../dropdown/dist/esm/src/components/DropdownAnchor/index.js");
/* harmony import */ var _fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../dropdown/dist/esm/src/components/DropdownContent/index.js");
/* harmony import */ var _fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../dropdown/dist/esm/src/components/DropdownMenu/index.js");
/* harmony import */ var _fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../dropdown/dist/esm/src/components/DropdownMenu/MenuItem/index.js");
/* harmony import */ var _fiverr_private_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../button/dist/esm/src/components/IconButton/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../disclosure/src/components/Collapsible/index.tsx");
/* harmony import */ var _CollapsibleHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../disclosure/src/components/Collapsible/CollapsibleHeader/index.tsx");
/* harmony import */ var _CollapsibleContent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../disclosure/src/components/Collapsible/CollapsibleContent/index.tsx");
/* harmony import */ var _CollapsibleHeaderChevron__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../disclosure/src/components/Collapsible/CollapsibleHeaderChevron/index.tsx");
/* harmony import */ var _CollapsibleHeaderMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../disclosure/src/components/Collapsible/CollapsibleHeaderMenu/index.tsx");
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}












_faker_js_faker__WEBPACK_IMPORTED_MODULE_1__/* .faker */ .az.seed(1);
const longText = _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__/* .faker */ .az.lorem.paragraph(10);
const title = 'This is a Collapsible';
const longTitle = _faker_js_faker__WEBPACK_IMPORTED_MODULE_1__/* .faker */ .az.lorem.sentences(5);
const Primary = {
  tags: ['sidebar-ignore']
};
const WithToggleCallback = {
  tags: ['sidebar-ignore'],
  args: {
    onToggle: toggled => alert(toggled)
  }
};
const Controlled = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      source: {
        code: "const [expanded, setExpanded] = useState(true);\n\n  return (\n    <Collapsible onToggle={setExpanded} expanded={expanded}>\n      <CollapsibleHeader>{title}</CollapsibleHeader>\n      <CollapsibleContent>{longText}</CollapsibleContent>\n    </Collapsible>\n  );"
      }
    }
  },
  args: {
    onToggle: toggled => alert(toggled)
  },
  render: args => {
    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, _extends({}, args, {
      onToggle: setExpanded,
      expanded: expanded
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, title, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeaderChevron__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleContent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, longText));
  }
};
const DefaultExpanded = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      description: {
        story: "The collapsible content height calculation is supported only on client side since it has to calculate the height of the inner element.\n Due to it, when using defaultExpanded=true above the fold, might be layout shift between client and server rendering."
      }
    }
  },
  args: {
    defaultExpanded: true
  }
};
const ComplexHeader = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, args, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    alignItems: "center"
  }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeaderChevron__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleContent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, longText))
};
const Disabled = {
  tags: ['sidebar-ignore'],
  args: {
    disabled: true
  }
};
const WithoutChevron = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, args, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleContent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, longText))
};
const CustomColor = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, args, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    color: "green_700"
  }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeaderChevron__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleContent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    color: "green_700"
  }, longText)))
};
const WithMenuHeader = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    height: "150px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, args, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeaderChevron__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeaderMenu__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_button__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    shape: "circle",
    variant: "ghost",
    size: "xs",
    "aria-label": ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, "Item 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, "Item 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, "Item 3")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleContent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, longText)))
};
const WithMenuHeaderLeanChevron = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    height: "150px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, args, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    gap: "2",
    as: "span"
  }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeaderChevron__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    variant: "lean"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeaderMenu__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_button__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    shape: "circle",
    variant: "ghost",
    size: "xs",
    "aria-label": ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, "Item 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, "Item 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null, "Item 3")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleContent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, longText)))
};
const WithHeaderEllipsis = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, _extends({}, args, {
    overflow: "hidden"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    textProps: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  }, longTitle, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeaderChevron__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleContent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, longText)))
};
const meta = {
  title: 'Disclosure/Collapsible',
  component: ___WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,
  render: args => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(___WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, args, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeader__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, null, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleHeaderChevron__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleContent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, null, longText))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
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
WithToggleCallback.parameters = {
  ...WithToggleCallback.parameters,
  docs: {
    ...WithToggleCallback.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    onToggle: toggled => alert(toggled)\n  }\n}",
      ...WithToggleCallback.parameters?.docs?.source
    }
  }
};
Controlled.parameters = {
  ...Controlled.parameters,
  docs: {
    ...Controlled.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `const [expanded, setExpanded] = useState(true);\n\n  return (\n    <Collapsible onToggle={setExpanded} expanded={expanded}>\n      <CollapsibleHeader>{title}</CollapsibleHeader>\n      <CollapsibleContent>{longText}</CollapsibleContent>\n    </Collapsible>\n  );`\n      }\n    }\n  },\n  args: {\n    onToggle: toggled => alert(toggled)\n  },\n  render: args => {\n    const [expanded, setExpanded] = useState(true);\n    return <Collapsible {...args} onToggle={setExpanded} expanded={expanded}>\n        <CollapsibleHeader>\n          {title} <CollapsibleHeaderChevron />\n        </CollapsibleHeader>\n        <CollapsibleContent>{longText}</CollapsibleContent>\n      </Collapsible>;\n  }\n}",
      ...Controlled.parameters?.docs?.source
    }
  }
};
DefaultExpanded.parameters = {
  ...DefaultExpanded.parameters,
  docs: {
    ...DefaultExpanded.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: `The collapsible content height calculation is supported only on client side since it has to calculate the height of the inner element.\n Due to it, when using defaultExpanded=true above the fold, might be layout shift between client and server rendering.`\n      }\n    }\n  },\n  args: {\n    defaultExpanded: true\n  }\n}",
      ...DefaultExpanded.parameters?.docs?.source
    }
  }
};
ComplexHeader.parameters = {
  ...ComplexHeader.parameters,
  docs: {
    ...ComplexHeader.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <Collapsible {...args}>\n      <CollapsibleHeader>\n        <StoryStack alignItems=\"center\">\n          {title}\n          <HeartIcon />\n        </StoryStack>\n        <CollapsibleHeaderChevron />\n      </CollapsibleHeader>\n      <CollapsibleContent>{longText}</CollapsibleContent>\n    </Collapsible>\n}",
      ...ComplexHeader.parameters?.docs?.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...Disabled.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    disabled: true\n  }\n}",
      ...Disabled.parameters?.docs?.source
    }
  }
};
WithoutChevron.parameters = {
  ...WithoutChevron.parameters,
  docs: {
    ...WithoutChevron.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <Collapsible {...args}>\n      <CollapsibleHeader>{title}</CollapsibleHeader>\n      <CollapsibleContent>{longText}</CollapsibleContent>\n    </Collapsible>\n}",
      ...WithoutChevron.parameters?.docs?.source
    }
  }
};
CustomColor.parameters = {
  ...CustomColor.parameters,
  docs: {
    ...CustomColor.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <Collapsible {...args}>\n      <CollapsibleHeader color=\"green_700\">\n        {title}\n        <CollapsibleHeaderChevron />\n      </CollapsibleHeader>\n      <CollapsibleContent>\n        <StoryStack color=\"green_700\">{longText}</StoryStack>\n      </CollapsibleContent>\n    </Collapsible>\n}",
      ...CustomColor.parameters?.docs?.source
    }
  }
};
WithMenuHeader.parameters = {
  ...WithMenuHeader.parameters,
  docs: {
    ...WithMenuHeader.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <StoryStack height=\"150px\">\n      <Collapsible {...args}>\n        <CollapsibleHeader>\n          {title}\n          <CollapsibleHeaderChevron />\n          <CollapsibleHeaderMenu>\n            <Dropdown>\n              <DropdownAnchor>\n                <IconButton shape=\"circle\" variant=\"ghost\" size=\"xs\" aria-label=\"\">\n                  <EllipsisIcon />\n                </IconButton>\n              </DropdownAnchor>\n              <DropdownContent>\n                <DropdownMenu>\n                  <MenuItem>Item 1</MenuItem>\n                  <MenuItem>Item 2</MenuItem>\n                  <MenuItem>Item 3</MenuItem>\n                </DropdownMenu>\n              </DropdownContent>\n            </Dropdown>\n          </CollapsibleHeaderMenu>\n        </CollapsibleHeader>\n        <CollapsibleContent>{longText}</CollapsibleContent>\n      </Collapsible>\n    </StoryStack>\n}",
      ...WithMenuHeader.parameters?.docs?.source
    }
  }
};
WithMenuHeaderLeanChevron.parameters = {
  ...WithMenuHeaderLeanChevron.parameters,
  docs: {
    ...WithMenuHeaderLeanChevron.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <StoryStack height=\"150px\">\n      <Collapsible {...args}>\n        <CollapsibleHeader>\n          <Stack gap=\"2\" as=\"span\">\n            {title}\n            <CollapsibleHeaderChevron variant=\"lean\" />\n          </Stack>\n          <CollapsibleHeaderMenu>\n            <Dropdown>\n              <DropdownAnchor>\n                <IconButton shape=\"circle\" variant=\"ghost\" size=\"xs\" aria-label=\"\">\n                  <EllipsisIcon />\n                </IconButton>\n              </DropdownAnchor>\n              <DropdownContent>\n                <DropdownMenu>\n                  <MenuItem>Item 1</MenuItem>\n                  <MenuItem>Item 2</MenuItem>\n                  <MenuItem>Item 3</MenuItem>\n                </DropdownMenu>\n              </DropdownContent>\n            </Dropdown>\n          </CollapsibleHeaderMenu>\n        </CollapsibleHeader>\n        <CollapsibleContent>{longText}</CollapsibleContent>\n      </Collapsible>\n    </StoryStack>\n}",
      ...WithMenuHeaderLeanChevron.parameters?.docs?.source
    }
  }
};
WithHeaderEllipsis.parameters = {
  ...WithHeaderEllipsis.parameters,
  docs: {
    ...WithHeaderEllipsis.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <StoryStack>\n      <Collapsible {...args} overflow=\"hidden\">\n        <CollapsibleHeader textProps={{\n        textOverflow: 'ellipsis',\n        whiteSpace: 'nowrap',\n        overflow: 'hidden'\n      }}>\n          {longTitle}\n          <CollapsibleHeaderChevron />\n        </CollapsibleHeader>\n        <CollapsibleContent>{longText}</CollapsibleContent>\n      </Collapsible>\n    </StoryStack>\n}",
      ...WithHeaderEllipsis.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","WithToggleCallback","Controlled","DefaultExpanded","ComplexHeader","Disabled","WithoutChevron","CustomColor","WithMenuHeader","WithMenuHeaderLeanChevron","WithHeaderEllipsis"];

/***/ }),

/***/ "../storybook_helpers/dist/esm/src/components/StoryStack/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
const _excluded = ["children"];
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


const StoryStack = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    ref: ref,
    display: "flex",
    gap: "4"
  }, props), children);
});
StoryStack.displayName = 'StoryStack';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoryStack);
;
StoryStack.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StoryStack"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Heart.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const HeartIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('HeartIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SYSTEM_ICON_SIZES */ .bh[size],
    fill: "none",
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getStrokeColor */ ._)(color),
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m13.628 8.433-5.622 5.568-5.622-5.568a3.748 3.748 0 1 1 5.622-4.922 3.748 3.748 0 1 1 5.622 4.927",
    vectorEffect: "non-scaling-stroke"
  }));
};
HeartIcon.id = 'HeartIcon';
HeartIcon.displayName = 'HeartIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeartIcon);
;
HeartIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HeartIcon"
};

/***/ })

}]);
//# sourceMappingURL=components-Collapsible-stories-Docs-mdx.7cc060d0.iframe.bundle.js.map