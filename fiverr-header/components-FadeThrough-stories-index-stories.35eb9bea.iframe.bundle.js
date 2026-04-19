"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[1646,1972,4686],{

/***/ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}


/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}


/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


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
//# sourceMappingURL=components-FadeThrough-stories-index-stories.35eb9bea.iframe.bundle.js.map