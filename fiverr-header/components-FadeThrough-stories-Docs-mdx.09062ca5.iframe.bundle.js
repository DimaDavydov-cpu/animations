"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[4629],{

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

/***/ "../transition/src/components/FadeThrough/stories/Docs.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var _Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0.83__nlqkbpiednyo7fahryc45gzkge/node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _index_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../transition/src/components/FadeThrough/stories/index.stories.tsx");



/*@jsxRuntime automatic @jsxImportSource react*/




function _createMdxContent(props) {
  const _components = Object.assign({
    pre: "pre",
    code: "code",
    h2: "h2"
  }, (0,_Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .RP)(), props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _index_stories__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Subtitle */ .Pd, {
      children: "Animation component for fade through effect"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { FadeThrough } from '@fiverr-private/transition';\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Primary */ .Tn, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "props",
      children: "Props"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Controls */ .H2, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "This content will be used in the examples below:\n\nconst Red = (\n  <StoryStack width=\"100%\" backgroundColor=\"red_700\" color=\"white\" padding=\"7\">\n    {textContent}\n  </StoryStack>\n);\n\nconst Grey = (\n  <StoryStack width=\"100%\" backgroundColor=\"grey_700\" color=\"white\" padding=\"7\">\n    {textContent}\n  </StoryStack>\n);\n\nconst Blue = (\n  <StoryStack width=\"100%\" backgroundColor=\"blue_700\" color=\"white\" padding=\"7\">\n    {textContent}\n  </StoryStack>\n);\n\nconst Green = (\n  <StoryStack width=\"100%\" backgroundColor=\"green_700\" color=\"white\" padding=\"7\">\n    {textContent}\n  </StoryStack>\n);\n"
      })
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

/***/ "../transition/src/components/FadeThrough/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CrossFade: () => (/* binding */ CrossFade),
  CustomDuration: () => (/* binding */ CustomDuration),
  FourItems: () => (/* binding */ FourItems),
  LoopFourItems: () => (/* binding */ LoopFourItems),
  Primary: () => (/* binding */ Primary),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs + 58 modules
var esm = __webpack_require__("../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs");
// EXTERNAL MODULE: ../button/dist/esm/src/components/Button/index.js + 1 modules
var Button = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryStack/index.js
var StoryStack = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-move@6.5.0_react@17.0.2/node_modules/react-move/es/index.js + 20 modules
var es = __webpack_require__("../../node_modules/.pnpm/react-move@6.5.0_react@17.0.2/node_modules/react-move/es/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
// EXTERNAL MODULE: ../transition/src/constants.ts
var constants = __webpack_require__("../transition/src/constants.ts");
// EXTERNAL MODULE: ../transition/src/utils/index.ts
var utils = __webpack_require__("../transition/src/utils/index.ts");
;// ../transition/src/components/FadeThrough/variants.ts


const getTiming = function (variant) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'moderate1';
  let easing = arguments.length > 2 ? arguments[2] : undefined;
  return {
    delay: 0,
    duration: constants/* DURATION */.ft[(0,utils/* getValueOrField */.F)(duration, variant)],
    ease: constants/* EASING */.Ux[(0,utils/* getValueOrField */.F)(easing, variant)]
  };
};
const variants = {
  enter: function () {
    let {
      cross,
      duration,
      delayMultiplier = 1
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const easing = cross ? 'linear' : 'easeIn';
    const timing = getTiming('enter', duration, easing);
    const delayShift = cross ? timing.duration : 0;
    timing.delay = delayMultiplier * timing.duration - delayShift;
    return {
      timing,
      opacity: [1]
    };
  },
  exit: function () {
    let {
      duration
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return {
      opacity: [0],
      timing: getTiming('exit', duration, 'easeOut')
    };
  }
};
/* harmony default export */ const FadeThrough_variants = (variants);
;// ../transition/src/components/FadeThrough/index.tsx
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





const FadeThrough = _ref => {
  let {
    cross = false,
    duration = 'moderate1',
    loop = false,
    children
  } = _ref;
  const custom = {
    cross,
    duration
  };
  const childrenArray = react.Children.toArray(children);
  const transitionToChildIndexRef = (0,react.useRef)();
  const transitionTimeoutPidRef = (0,react.useRef)();
  const [animatedItems, setAnimatedItems] = (0,react.useState)([{
    childIndex: 0
  }, {
    childIndex: 1
  }]);
  (0,react.useEffect)(() => () => transitionTimeoutPidRef.current && clearTimeout(transitionTimeoutPidRef.current));
  const shiftAnimatedItems = () => setAnimatedItems(_ref2 => {
    let [first, second] = _ref2;
    const getNextItem = _ref3 => {
      let {
        childIndex
      } = _ref3;
      return {
        childIndex: (childIndex + 1) % childrenArray.length
      };
    };
    return [getNextItem(first), getNextItem(second)];
  });
  const handleAnimationStart = (_data, index) => ({
    opacity: index === 0 ? 1 : 0
  });
  const handleAnimationUpdate = (_data, index) => index === 0 ? FadeThrough_variants.exit(custom) : FadeThrough_variants.enter(_objectSpread(_objectSpread({}, custom), {}, {
    delayMultiplier: index
  }));
  const maybeScheduleAnimatedItemsShift = (animatedItemKey, animatedItemIndex, animatedItemState) => {
    const isAllAnimated = !loop && animatedItems[1].childIndex === childrenArray.length - 1;
    const isShiftScheduled = transitionToChildIndexRef.current === animatedItemKey;
    const isTransitionFromItem = animatedItemIndex === 0;
    const isTransitionInProcess = animatedItemState.opacity !== 1;
    if (isAllAnimated || isShiftScheduled || isTransitionFromItem || isTransitionInProcess) {
      return;
    }
    transitionToChildIndexRef.current = animatedItemKey;
    transitionTimeoutPidRef.current = setTimeout(() => shiftAnimatedItems(), constants/* DURATION */.ft[duration]);
  };
  return /*#__PURE__*/react.createElement(es/* NodeGroup */.u, {
    data: animatedItems,
    keyAccessor: _ref4 => {
      let {
        childIndex
      } = _ref4;
      return childIndex;
    },
    start: handleAnimationStart,
    enter: handleAnimationUpdate,
    update: handleAnimationUpdate
  }, nodes => /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'relative'
    }
  }, nodes.map((_ref5, index) => {
    let {
      key,
      state
    } = _ref5;
    maybeScheduleAnimatedItemsShift(key, index, state);
    const element = childrenArray[key];
    const style = /*#__PURE__*/ /*#__PURE__*/react.isValidElement(element) && element.props ? element.props.style : {};
    return (0,render_children/* renderChildren */.s)(childrenArray[key], {
      style: _objectSpread(_objectSpread({}, style), {}, {
        position: index === 1 && state.opacity !== 1 ? 'absolute' : undefined,
        top: 0,
        left: 0,
        display: state.opacity === 0 ? 'none' : undefined,
        opacity: state.opacity
      })
    });
  })));
};
FadeThrough.displayName = 'FadeThrough';
/* harmony default export */ const components_FadeThrough = (FadeThrough);
try {
    // @ts-ignore
    FadeThrough.displayName = "FadeThrough";
    // @ts-ignore
    FadeThrough.__docgenInfo = { "description": "", "displayName": "FadeThrough", "props": { "cross": { "defaultValue": { value: "false" }, "description": "Whether to enable cross-fading transition", "name": "cross", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "duration": { "defaultValue": { value: "moderate1" }, "description": "Custom animation duration. The duration is for a transition of a single item", "name": "duration", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fast1\"" }, { "value": "\"fast2\"" }, { "value": "\"fast3\"" }, { "value": "\"moderate1\"" }, { "value": "\"moderate2\"" }, { "value": "\"moderate3\"" }, { "value": "\"slow1\"" }, { "value": "\"slow2\"" }, { "value": "\"slow3\"" }] } }, "loop": { "defaultValue": { value: "false" }, "description": "Whether to start the transition again after it is finished", "name": "loop", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../transition/src/components/FadeThrough/index.tsx#FadeThrough"] = { docgenInfo: FadeThrough.__docgenInfo, name: "FadeThrough", path: "../transition/src/components/FadeThrough/index.tsx#FadeThrough" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../transition/src/components/FadeThrough/stories/index.stories.tsx





const textContent = esm/* faker */.az.lorem.sentence();
const Red = /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
  width: "100%",
  backgroundColor: "red_700",
  color: "white",
  padding: "7"
}, textContent);
const Grey = /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
  width: "100%",
  backgroundColor: "grey_700",
  color: "white",
  padding: "7"
}, textContent);
const Blue = /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
  width: "100%",
  backgroundColor: "blue_700",
  color: "white",
  padding: "7"
}, textContent);
const Green = /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
  width: "100%",
  backgroundColor: "green_700",
  color: "white",
  padding: "7"
}, textContent);
const Demo = args => {
  const [isAnimated, setIsAnimated] = (0,react.useState)(false);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
    onClick: () => setIsAnimated(!isAnimated)
  }, isAnimated ? 'Reset' : 'Start', " Animation"), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    display: "block",
    height: "108px",
    maxWidth: 400,
    marginTop: "5"
  }, isAnimated ? /*#__PURE__*/react.createElement(components_FadeThrough, args, args.children) : Green));
};
Demo.displayName = 'Demo';
const Primary = {
  tags: ['sidebar-ignore']
};
const FourItems = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      source: {
        code: "const [isAnimated, setIsAnimated] = useState(false);\n\nreturn (\n  <>\n    <Button onClick={() => setIsAnimated(!isAnimated)}>{isAnimated ? 'Reset' : 'Start'} Animation</Button>\n    <StoryStack width=\"100%\" display=\"block\" height=\"108px\" maxWidth={400} marginTop=\"5\">\n      {isAnimated\n        ? <FadeThrough>\n            {Green}\n            {Blue}\n            {Grey}\n            {Red}\n          </FadeThrough>\n        : Green\n      }\n    </StoryStack>\n  </>\n);"
      }
    }
  },
  render: args => /*#__PURE__*/react.createElement(Demo, args, Green, Blue, Grey, Red)
};
const CrossFade = {
  tags: ['sidebar-ignore'],
  args: {
    cross: true
  },
  parameters: {
    docs: {
      source: {
        code: "const [isAnimated, setIsAnimated] = useState(false);\n\nreturn (\n  <>\n    <Button onClick={() => setIsAnimated(!isAnimated)}>{isAnimated ? 'Reset' : 'Start'} Animation</Button>\n    <StoryStack width=\"100%\" display=\"block\" height=\"108px\" maxWidth={400} marginTop=\"5\">\n      {isAnimated\n        ? <FadeThrough cross>\n            {Green}\n            {Blue}\n          </FadeThrough>\n        : Green\n      }\n    </StoryStack>\n  </>\n);"
      }
    }
  }
};
const CustomDuration = {
  tags: ['sidebar-ignore'],
  args: {
    duration: 'slow1'
  },
  parameters: {
    docs: {
      source: {
        code: "const [isAnimated, setIsAnimated] = useState(false);\n\nreturn (\n  <>\n    <Button onClick={() => setIsAnimated(!isAnimated)}>{isAnimated ? 'Reset' : 'Start'} Animation</Button>\n    <StoryStack width=\"100%\" display=\"block\" height=\"108px\" maxWidth={400} marginTop=\"5\">\n      {isAnimated\n        ? <FadeThrough duration=\"slow1\">\n            {Green}\n            {Blue}\n          </FadeThrough>\n        : Green\n      }\n    </StoryStack>\n  </>\n);"
      }
    }
  }
};
const LoopFourItems = {
  tags: ['sidebar-ignore'],
  args: {
    loop: true
  },
  parameters: {
    docs: {
      source: {
        code: "const [isAnimated, setIsAnimated] = useState(false);\n\nreturn (\n  <>\n    <Button onClick={() => setIsAnimated(!isAnimated)}>{isAnimated ? 'Reset' : 'Start'} Animation</Button>\n    <StoryStack width=\"100%\" display=\"block\" height=\"108px\" maxWidth={400} marginTop=\"5\">\n      {isAnimated\n        ? <FadeThrough loop>\n            {Green}\n            {Blue}\n            {Grey}\n            {Red}\n          </FadeThrough>\n        : Green\n      }\n    </StoryStack>\n  </>\n);"
      }
    }
  },
  render: args => /*#__PURE__*/react.createElement(Demo, args, Green, Blue, Grey, Red)
};
const meta = {
  title: 'Transition/FadeThrough',
  component: components_FadeThrough,
  render: args => /*#__PURE__*/react.createElement(Demo, args, Green, Blue)
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
FourItems.parameters = {
  ...FourItems.parameters,
  docs: {
    ...FourItems.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `const [isAnimated, setIsAnimated] = useState(false);\n\nreturn (\n  <>\n    <Button onClick={() => setIsAnimated(!isAnimated)}>{isAnimated ? 'Reset' : 'Start'} Animation</Button>\n    <StoryStack width=\"100%\" display=\"block\" height=\"108px\" maxWidth={400} marginTop=\"5\">\n      {isAnimated\n        ? <FadeThrough>\n            {Green}\n            {Blue}\n            {Grey}\n            {Red}\n          </FadeThrough>\n        : Green\n      }\n    </StoryStack>\n  </>\n);`\n      }\n    }\n  },\n  render: args => <Demo {...args}>\n      {Green}\n      {Blue}\n      {Grey}\n      {Red}\n    </Demo>\n}",
      ...FourItems.parameters?.docs?.source
    }
  }
};
CrossFade.parameters = {
  ...CrossFade.parameters,
  docs: {
    ...CrossFade.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    cross: true\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `const [isAnimated, setIsAnimated] = useState(false);\n\nreturn (\n  <>\n    <Button onClick={() => setIsAnimated(!isAnimated)}>{isAnimated ? 'Reset' : 'Start'} Animation</Button>\n    <StoryStack width=\"100%\" display=\"block\" height=\"108px\" maxWidth={400} marginTop=\"5\">\n      {isAnimated\n        ? <FadeThrough cross>\n            {Green}\n            {Blue}\n          </FadeThrough>\n        : Green\n      }\n    </StoryStack>\n  </>\n);`\n      }\n    }\n  }\n}",
      ...CrossFade.parameters?.docs?.source
    }
  }
};
CustomDuration.parameters = {
  ...CustomDuration.parameters,
  docs: {
    ...CustomDuration.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    duration: 'slow1'\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `const [isAnimated, setIsAnimated] = useState(false);\n\nreturn (\n  <>\n    <Button onClick={() => setIsAnimated(!isAnimated)}>{isAnimated ? 'Reset' : 'Start'} Animation</Button>\n    <StoryStack width=\"100%\" display=\"block\" height=\"108px\" maxWidth={400} marginTop=\"5\">\n      {isAnimated\n        ? <FadeThrough duration=\"slow1\">\n            {Green}\n            {Blue}\n          </FadeThrough>\n        : Green\n      }\n    </StoryStack>\n  </>\n);`\n      }\n    }\n  }\n}",
      ...CustomDuration.parameters?.docs?.source
    }
  }
};
LoopFourItems.parameters = {
  ...LoopFourItems.parameters,
  docs: {
    ...LoopFourItems.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    loop: true\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `const [isAnimated, setIsAnimated] = useState(false);\n\nreturn (\n  <>\n    <Button onClick={() => setIsAnimated(!isAnimated)}>{isAnimated ? 'Reset' : 'Start'} Animation</Button>\n    <StoryStack width=\"100%\" display=\"block\" height=\"108px\" maxWidth={400} marginTop=\"5\">\n      {isAnimated\n        ? <FadeThrough loop>\n            {Green}\n            {Blue}\n            {Grey}\n            {Red}\n          </FadeThrough>\n        : Green\n      }\n    </StoryStack>\n  </>\n);`\n      }\n    }\n  },\n  render: args => <Demo {...args}>\n      {Green}\n      {Blue}\n      {Grey}\n      {Red}\n    </Demo>\n}",
      ...LoopFourItems.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","FourItems","CrossFade","CustomDuration","LoopFourItems"];

/***/ })

}]);
//# sourceMappingURL=components-FadeThrough-stories-Docs-mdx.09062ca5.iframe.bundle.js.map