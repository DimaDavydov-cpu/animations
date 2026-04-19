"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[273,1922],{

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

/***/ "../hooks/src/hooks/useEventListener/stories/Docs.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var _Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0.83__nlqkbpiednyo7fahryc45gzkge/node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _index_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../hooks/src/hooks/useEventListener/stories/index.stories.tsx");



/*@jsxRuntime automatic @jsxImportSource react*/





function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    ul: "ul",
    li: "li",
    a: "a",
    pre: "pre",
    code: "code",
    h2: "h2",
    h3: "h3"
  }, (0,_Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .RP)(), props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _index_stories__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "This hooks safely subscribes handlers to events on the window or document objects."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: "Explanation:"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
            href: "https://usehooks-ts.com/react-hook/use-event-listener",
            target: "_blank",
            rel: "nofollow noopener noreferrer",
            children: "https://usehooks-ts.com/react-hook/use-event-listener"
          })
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { useEventListener } from '@fiverr-private/hooks';\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "props",
      children: "Props"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["| Name        | Type                             | Mandatory | Description                           | Default |\n| ----------- | -------------------------------- | --------- | ------------------------------------- | ------- | ----------------------------------- | --- |\n| ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "eventName"
      }), " | ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "string"
      }), "                         | YES       | The event to listen on                | -       |\n| ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "handler"
      }), "   | ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "(event: PossibleEvent) => void"
      }), " | YES       | Callback to trigger                   | -       |\n| ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "element"
      }), "   | ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "HTMLElement                     | Window    | null"
      }), "                                 | YES     | The element to listen for events on | -   |\n| ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "options"
      }), "   | ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "AddEventListenerOptions"
      }), "        | NO        | Options to pass to the event listener | -       |"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Stories */ .om, {})]
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

/***/ "../hooks/src/hooks/useEventListener/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Primary: () => (/* binding */ Primary),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
/* harmony import */ var _fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryText/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../hooks/src/hooks/useEventListener/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../hooks/src/hooks/useIsClient/index.ts");




const elements = new Array(20).fill(null).map(_ => '→');
const Demo = () => {
  (0,___WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)();
  const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [canScrollLeft, setCanScrollLeft] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const element = elementRef.current;
  const handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!element) {
      return;
    }
    setCanScrollLeft(element.scrollLeft > 0);
  }, [element]);
  (0,___WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)('scroll', handleScroll, element);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null, "Can scroll left: ", canScrollLeft.toString()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    ref: elementRef,
    overflow: "scroll"
  }, elements.map((text, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    paddingRight: "6",
    key: index
  }, text))));
};
const Primary = {
  tags: ['sidebar-ignore']
};
const meta = {
  title: 'Hooks/useEventListener',
  component: Demo,
  parameters: {
    docs: {
      source: {
        code: "() => {\n  useIsClient();\n  const elementRef = useRef<HTMLElement>(null);\n  const [canScrollLeft, setCanScrollLeft] = useState(false);\n  const element = elementRef.current;\n\n  const handleScroll = useCallback(() => {\n    if (!element) {\n      return;\n    }\n    setCanScrollLeft(element.scrollLeft > 0);\n  }, [element]);\n\n  useEventListener('scroll', handleScroll, element);\n\n  return (\n    <>\n      <StoryText>Can scroll left: {canScrollLeft.toString()}</StoryText>\n      <StoryStack ref={elementRef} overflow=\"scroll\">\n        {elements.map((text, index) => (\n          <StoryText paddingRight=\"6\" key={index}>\n            {text}\n          </StoryText>\n        ))}\n      </StoryStack>\n    </>\n  );\n}"
      }
    }
  }
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
};;const __namedExportsOrder = ["Primary"];

/***/ }),

/***/ "../hooks/src/hooks/useIsClient/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");


/**
 * This React Hook can be useful in a SSR environment to wait until be on a client to execution some functions.
 * This value is stateful, meaning it will be true only on a client and
 * only after additional render to avoid client-server hydration mismatch
 * @returns `true` if on a client
 */
const useIsClient = () => {
  const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsClient(true);
  }, []);
  return isClient;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsClient);

/***/ })

}]);
//# sourceMappingURL=hooks-useEventListener-stories-Docs-mdx.d38890a7.iframe.bundle.js.map