"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[8666],{

/***/ "../hooks/dist/esm/src/hooks/useIsClient/index.js":
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

/***/ }),

/***/ "../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof document !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsomorphicLayoutEffect);

/***/ }),

/***/ "../hooks/dist/esm/src/hooks/useKeyboardShortcuts/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ hooks_useKeyboardShortcuts)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
;// ../hooks/dist/esm/src/hooks/useKeyboardShortcuts/constants.js
// The supported keyboard shortcuts triggers
const EVENTS = {
  KEYDOWN: 'keydown',
  KEYUP: 'keyup'
};
// The target tag names to ignore upon event checking
const BLACKLISTED_TARGETS = ['input', 'textarea'];
const ANY_KEY = '*';
;// ../hooks/dist/esm/src/hooks/useKeyboardShortcuts/utils.js

// Checks whether a given event should be check for shortcut triggers
const getObservedShortcut = _ref => {
  let {
    key,
    code,
    target,
    repeat = false,
    allowRepeat,
    shortcutKeys
  } = _ref;
  if (repeat && !allowRepeat || BLACKLISTED_TARGETS.includes(target.tagName.toLowerCase())) {
    return;
  }
  return shortcutKeys.find(shortcutKey => shortcutKey === ANY_KEY || shortcutKey.toLowerCase() === key || shortcutKey.toLowerCase() === code);
};
// Checks should trigger shortcuts according to current pressed keys
const shouldTrigger = (
// The observed shortcuts
shortcuts,
// The current pressed keys
keys) => keys.length === shortcuts.length && keys.every((key, index) => key === shortcuts[index]);
// The default shortcuts listener target to use
const getDefaultTarget = () => document.body;
const mapShortcutsToKeys = shortcuts => shortcuts.map(_ref2 => {
  let {
    trigger
  } = _ref2;
  return trigger;
}).flat();
;// ../hooks/dist/esm/src/hooks/useKeyboardShortcuts/index.js




// Listens for keyboard shortcuts for a given target
const useKeyboardShortcuts = function (
// The shortcuts to listen to
shortcuts,
// A function that should return the HTMLElement target to listen to, defaults to document body
getTarget) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const [keys, setKeys] = (0,react.useState)([]);
  const {
    useCapture = false,
    allowRepeat = false
  } = options;
  const keyDownHandler = (0,react.useCallback)(keyDownEvent => {
    const {
      key,
      code,
      target,
      repeat
    } = keyDownEvent;
    if ((0,lodash.isNil)(key) && (0,lodash.isNil)(code)) {
      return;
    }
    const loweredKey = key.toLowerCase();
    const loweredCode = code.toLowerCase();
    const shortcutKeys = mapShortcutsToKeys(shortcuts);
    const observedShortcut = getObservedShortcut({
      key: loweredKey,
      code: loweredCode,
      target: target,
      repeat,
      allowRepeat,
      shortcutKeys
    });
    if (!observedShortcut) {
      return;
    }
    const pressedKeys = [...keys];
    if (!repeat || !allowRepeat) {
      pressedKeys.push(observedShortcut);
    }
    shortcuts.forEach(shortcut => {
      const shortcutOwnKeys = mapShortcutsToKeys([shortcut]);
      if (shouldTrigger(shortcutOwnKeys, pressedKeys)) {
        shortcut.handler(keyDownEvent);
      }
    });
    setKeys(pressedKeys);
  }, [shortcuts, keys, allowRepeat]);
  const keyUpHandler = (0,react.useCallback)(_ref => {
    let {
      key,
      code,
      target
    } = _ref;
    if ((0,lodash.isNil)(key) && (0,lodash.isNil)(code)) {
      return;
    }
    const loweredKey = key.toLowerCase();
    const loweredCode = code.toLowerCase();
    const shortcutKeys = mapShortcutsToKeys(shortcuts);
    const observedShortcut = getObservedShortcut({
      key: loweredKey,
      code: loweredCode,
      target: target,
      shortcutKeys
    });
    if (!observedShortcut) {
      return;
    }
    setKeys(keys.filter(k => k !== observedShortcut));
  }, [shortcuts, keys]);
  (0,react.useEffect)(() => {
    const listenerTarget = getTarget && getTarget() || getDefaultTarget();
    listenerTarget.addEventListener(EVENTS.KEYDOWN, keyDownHandler, useCapture);
    return () => listenerTarget.removeEventListener(EVENTS.KEYDOWN, keyDownHandler, useCapture);
  }, [keyDownHandler, getTarget, useCapture]);
  (0,react.useEffect)(() => {
    const listenerTarget = getTarget && getTarget() || getDefaultTarget();
    listenerTarget.addEventListener(EVENTS.KEYUP, keyUpHandler, useCapture);
    return () => listenerTarget.removeEventListener(EVENTS.KEYUP, keyUpHandler, useCapture);
  }, [keyUpHandler, getTarget, useCapture]);
};
/* harmony default export */ const hooks_useKeyboardShortcuts = (useKeyboardShortcuts);

/***/ }),

/***/ "../hooks/dist/esm/src/hooks/useLatest/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js");


const useLatest = value => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(() => {
    ref.current = value;
  });
  return ref;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLatest);

/***/ }),

/***/ "../layout_components/dist/esm/src/components/Container/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Layout/index.js");
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


const Container = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      children
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    ref: ref
  }, restProps), children);
});
Container.displayName = 'Container';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);
;
Container.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Container"
};

/***/ }),

/***/ "../transition/dist/esm/src/components/Fade/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Fade)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-move@6.5.0_react@17.0.2/node_modules/react-move/es/index.js + 20 modules
var es = __webpack_require__("../../node_modules/.pnpm/react-move@6.5.0_react@17.0.2/node_modules/react-move/es/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useIsClient/index.js
var useIsClient = __webpack_require__("../hooks/dist/esm/src/hooks/useIsClient/index.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/hooks/useTransitionEvents.js
var useTransitionEvents = __webpack_require__("../transition/dist/esm/src/hooks/useTransitionEvents.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/utils/index.js
var utils = __webpack_require__("../transition/dist/esm/src/utils/index.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/constants.js
var constants = __webpack_require__("../transition/dist/esm/src/constants.js");
;// ../transition/dist/esm/src/components/Fade/variants.js


const getTiming = function (variant) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fast2';
  let easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
  let delay = arguments.length > 3 ? arguments[3] : undefined;
  return {
    duration: constants/* DURATION */.ft[(0,utils/* getValueOrField */.F)(duration, variant)],
    ease: constants/* EASING */.Ux[(0,utils/* getValueOrField */.F)(easing, variant)],
    delay: constants/* DURATION */.ft[(0,utils/* getValueOrField */.F)(delay, variant)]
  };
};
const variants = {
  enter: function () {
    let {
      delay,
      duration,
      easing,
      endingOpacity = 1
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return {
      opacity: [endingOpacity],
      timing: getTiming('enter', duration, easing, delay)
    };
  },
  exit: function () {
    let {
      delay,
      duration,
      easing
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return {
      opacity: [0],
      timing: getTiming('exit', duration, easing, delay)
    };
  }
};
/* harmony default export */ const Fade_variants = (variants);
;// ../transition/dist/esm/src/components/Fade/index.js
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






const Fade = _ref => {
  let {
    delay,
    duration = 'fast2',
    easing = 'linear',
    unmountOnExit,
    in: isOpen = true,
    endingOpacity,
    onAnimationStart,
    onAnimationEnd,
    children
  } = _ref;
  const custom = {
    delay,
    duration,
    easing,
    endingOpacity
  };
  const transitionConfig = isOpen ? Fade_variants.enter(custom) : Fade_variants.exit(custom);
  const {
    getEventsHandler
  } = (0,useTransitionEvents/* default */.A)({
    onAnimationStart,
    onAnimationEnd,
    isOpen,
    unmountOnExit
  });
  const isClient = (0,useIsClient/* default */.A)();
  return /*#__PURE__*/react.createElement(es/* Animate */.i, {
    show: unmountOnExit ? isOpen : true,
    start: Fade_variants.exit(custom),
    enter: _objectSpread(_objectSpread({}, transitionConfig), getEventsHandler('enter')),
    update: _objectSpread(_objectSpread({}, transitionConfig), getEventsHandler('update')),
    leave: _objectSpread(_objectSpread({}, Fade_variants.exit(custom)), getEventsHandler('leave'))
  }, animationState => (0,render_children/* renderChildren */.s)(children, {
    style: _objectSpread(_objectSpread({}, children.props.style || {}), {}, {
      display: animationState.opacity === 0 || !isClient ? 'none' : undefined,
      visibility: animationState.opacity === 0 || !isClient ? 'hidden' : 'visible'
    }, animationState)
  }));
};
Fade.displayName = 'Fade';
/* harmony default export */ const components_Fade = (Fade);
;
Fade.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Fade"
};

/***/ }),

/***/ "../transition/dist/esm/src/components/SlideFade/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_SlideFade)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-move@6.5.0_react@17.0.2/node_modules/react-move/es/index.js + 20 modules
var es = __webpack_require__("../../node_modules/.pnpm/react-move@6.5.0_react@17.0.2/node_modules/react-move/es/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/hooks/useTransitionEvents.js
var useTransitionEvents = __webpack_require__("../transition/dist/esm/src/hooks/useTransitionEvents.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/utils/index.js
var utils = __webpack_require__("../transition/dist/esm/src/utils/index.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/constants.js
var constants = __webpack_require__("../transition/dist/esm/src/constants.js");
;// ../transition/dist/esm/src/components/SlideFade/variants.js


const getEnterTiming = function () {
  let duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'moderate1';
  let easing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'easeIn';
  let delay = arguments.length > 2 ? arguments[2] : undefined;
  return {
    duration: constants/* DURATION */.ft[(0,utils/* getValueOrField */.F)(duration, constants/* ENTER */.Fm)],
    ease: constants/* EASING */.Ux[(0,utils/* getValueOrField */.F)(easing, constants/* ENTER */.Fm)],
    delay: constants/* DURATION */.ft[(0,utils/* getValueOrField */.F)(delay, constants/* ENTER */.Fm)]
  };
};
const getExitTiming = function () {
  let duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'moderate1';
  let easing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'easeOut';
  let delay = arguments.length > 2 ? arguments[2] : undefined;
  return {
    duration: constants/* DURATION */.ft[(0,utils/* getValueOrField */.F)(duration, constants/* EXIT */.dc)],
    ease: constants/* EASING */.Ux[(0,utils/* getValueOrField */.F)(easing, constants/* EXIT */.dc)],
    delay: constants/* DURATION */.ft[(0,utils/* getValueOrField */.F)(delay, constants/* EXIT */.dc)]
  };
};
const variants = {
  enter: _ref => {
    let {
      delay,
      duration,
      easing
    } = _ref;
    return {
      opacity: [1],
      x: [0],
      y: [0],
      timing: getEnterTiming(duration, easing, delay)
    };
  },
  exit: _ref2 => {
    let {
      offsetX = 'none',
      offsetY = 'none',
      delay,
      duration,
      easing
    } = _ref2;
    return {
      opacity: [0],
      x: [constants/* SLIDE_FADE_OFFSETS */.ur[offsetX]],
      y: [constants/* SLIDE_FADE_OFFSETS */.ur[offsetY]],
      timing: getExitTiming(duration, easing, delay)
    };
  }
};
/* harmony default export */ const SlideFade_variants = (variants);
;// ../transition/dist/esm/src/components/SlideFade/index.js
const _excluded = ["x", "y"];
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





const SlideFade = _ref => {
  let {
    reverse = true,
    offsetX = 'none',
    offsetY = 'sm',
    delay,
    duration = 'moderate1',
    easing = {
      enter: 'easeIn',
      exit: 'easeOut'
    },
    unmountOnExit,
    in: isOpen,
    onAnimationStart,
    onAnimationEnd,
    children
  } = _ref;
  const custom = {
    offsetX,
    offsetY,
    reverse,
    delay,
    duration,
    easing
  };
  const transitionConfig = isOpen ? SlideFade_variants.enter(custom) : SlideFade_variants.exit(custom);
  const {
    getEventsHandler
  } = (0,useTransitionEvents/* default */.A)({
    onAnimationStart,
    onAnimationEnd,
    isOpen: !!isOpen,
    unmountOnExit
  });
  return /*#__PURE__*/react.createElement(es/* Animate */.i, {
    show: unmountOnExit ? isOpen : true,
    start: SlideFade_variants.exit(custom),
    enter: _objectSpread(_objectSpread({}, transitionConfig), getEventsHandler('enter')),
    update: _objectSpread(_objectSpread({}, transitionConfig), getEventsHandler('update')),
    leave: _objectSpread(_objectSpread({}, SlideFade_variants.exit(custom)), getEventsHandler('leave'))
  }, _ref2 => {
    let {
        x,
        y
      } = _ref2,
      rest = _objectWithoutProperties(_ref2, _excluded);
    return (0,render_children/* renderChildren */.s)(children, {
      style: _objectSpread(_objectSpread(_objectSpread({}, children.props.style || {}), rest), {}, {
        display: rest.opacity === 0 || !reverse && !isOpen ? 'none' : undefined,
        transform: isOpen || reverse ? "translate(".concat(x, "px,").concat(y, "px)") : undefined
      })
    });
  });
};
SlideFade.displayName = 'SlideFade';
/* harmony default export */ const components_SlideFade = (SlideFade);
;
SlideFade.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SlideFade"
};

/***/ }),

/***/ "../transition/dist/esm/src/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fm: () => (/* binding */ ENTER),
/* harmony export */   Ux: () => (/* binding */ EASING),
/* harmony export */   dc: () => (/* binding */ EXIT),
/* harmony export */   ft: () => (/* binding */ DURATION),
/* harmony export */   ur: () => (/* binding */ SLIDE_FADE_OFFSETS)
/* harmony export */ });
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/bezier-easing@2.1.0/node_modules/bezier-easing/src/index.js");
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bezier_easing__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");


const CSS_EASING_PREFIX_LENGTH = 13;
const parseCssEasingToJS = easing => {
  const parsePart = part => parseFloat(part.trim());
  const parts = easing.substring(CSS_EASING_PREFIX_LENGTH, easing.length - 1).split(',');
  return bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(parsePart(parts[0]), parsePart(parts[1]), parsePart(parts[2]), parsePart(parts[3]));
};
const ENTER = 'enter';
const EXIT = 'exit';
const EASING = {
  easeIn: parseCssEasingToJS(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .animationTiming */ .fC.easeIn),
  easeOut: parseCssEasingToJS(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .animationTiming */ .fC.easeOut),
  easeInOut: parseCssEasingToJS(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .animationTiming */ .fC.easeInOut),
  linear: parseCssEasingToJS(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .animationTiming */ .fC.linear)
};
const DURATION = _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .numericAnimationDurations */ .zK;
const SLIDE_FADE_OFFSETS = {
  none: 0,
  sm: 8,
  md: 16,
  lg: 32
};

/***/ }),

/***/ "../transition/dist/esm/src/hooks/useTransitionEvents.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
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

const useTransitionEvents = _ref => {
  let {
    isOpen,
    onAnimationStart,
    onAnimationEnd,
    unmountOnExit = false
  } = _ref;
  const hasOpened = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(isOpen);
  const startState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);
  const endState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined);
  const start = type => {
    if (startState.current === isOpen) {
      return;
    }
    switch (type) {
      case 'enter':
        if (isOpen) {
          onAnimationStart === null || onAnimationStart === void 0 || onAnimationStart();
        }
        break;
      case 'update':
        if (isOpen || !unmountOnExit && hasOpened.current) {
          onAnimationStart === null || onAnimationStart === void 0 || onAnimationStart();
        }
        break;
      case 'leave':
        onAnimationStart === null || onAnimationStart === void 0 || onAnimationStart();
        break;
      default:
        break;
    }
    startState.current = isOpen;
  };
  const end = type => {
    if (endState.current === isOpen) {
      return;
    }
    switch (type) {
      case 'enter':
        if (isOpen) {
          onAnimationEnd === null || onAnimationEnd === void 0 || onAnimationEnd();
          hasOpened.current = true;
        }
        break;
      case 'update':
        if (isOpen) {
          hasOpened.current = true;
        }
        if (isOpen || !unmountOnExit && hasOpened.current) {
          onAnimationEnd === null || onAnimationEnd === void 0 || onAnimationEnd();
        }
        break;
      case 'leave':
        onAnimationEnd === null || onAnimationEnd === void 0 || onAnimationEnd();
        break;
      default:
        break;
    }
    endState.current = isOpen;
  };
  const getEventsHandler = type => onAnimationStart || onAnimationEnd ? {
    events: _objectSpread(_objectSpread({}, onAnimationStart ? {
      start: () => start(type)
    } : {}), onAnimationEnd ? {
      end: () => end(type)
    } : {})
  } : {};
  return {
    getEventsHandler
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTransitionEvents);

/***/ }),

/***/ "../transition/dist/esm/src/utils/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ getValueOrField),
/* harmony export */   J: () => (/* binding */ slideTransition)
/* harmony export */ });
const getValueOrField = (value, field) => typeof value === 'object' && field ? value[field] : value;
const slideTransition = function () {
  let direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'right';
  return SlideTransitionVariants[direction];
};
const SlideTransitionVariants = {
  left: {
    position: {
      left: 0,
      top: 0,
      bottom: 0,
      width: '100%'
    },
    enter: {
      x: [0],
      y: [0]
    },
    exit: {
      x: [-100],
      y: [0]
    }
  },
  right: {
    position: {
      right: 0,
      top: 0,
      bottom: 0,
      width: '100%'
    },
    enter: {
      x: [0],
      y: [0]
    },
    exit: {
      x: [100],
      y: [0]
    }
  },
  top: {
    position: {
      top: 0,
      left: 0,
      right: 0,
      maxWidth: '100vw'
    },
    enter: {
      x: [0],
      y: [0]
    },
    exit: {
      x: [0],
      y: [-100]
    }
  },
  bottom: {
    position: {
      bottom: 0,
      left: 0,
      right: 0,
      maxWidth: '100vw'
    },
    enter: {
      x: [0],
      y: [0]
    },
    exit: {
      x: [0],
      y: [100]
    }
  }
};

/***/ }),

/***/ "../ui_utils/dist/esm/src/components/Portal/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Portal)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js
var react_dom = __webpack_require__("../../node_modules/.pnpm/react-dom@17.0.2_react@17.0.2/node_modules/react-dom/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useIsClient/index.js
var useIsClient = __webpack_require__("../hooks/dist/esm/src/hooks/useIsClient/index.js");
;// ../ui_utils/dist/esm/src/components/Portal/hooks/useCreateRootDivElement/index.js


/**
 * Creates a div element under the DOM root
 */
const useCreateRootDivElement = function () {
  let {
    className,
    shouldAppendToBody = true,
    style = {}
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const domElementRef = (0,react.useRef)(null);
  const isClient = (0,useIsClient/* default */.A)();
  if (isClient && !domElementRef.current) {
    const element = document.createElement('div');
    domElementRef.current = element;
    element.focus();
    if (className) {
      element.classList.add(className);
    }
    Object.entries(style).forEach(_ref => {
      let [key, value] = _ref;
      element.style[key] = value;
    });
  }
  (0,react.useEffect)(() => {
    const {
      current: domElement
    } = domElementRef;
    if (shouldAppendToBody && domElement) {
      document.body.appendChild(domElement);
      return () => {
        document.body.removeChild(domElement);
      };
    }
    return () => undefined;
  }, [shouldAppendToBody, isClient]);
  return domElementRef.current;
};
;// ../ui_utils/dist/esm/src/components/Portal/index.js
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


const Portal = _ref => {
  let {
    children,
    containerClassName,
    containerElement,
    height
  } = _ref;
  const domElement = useCreateRootDivElement({
    className: containerClassName,
    shouldAppendToBody: !containerElement,
    style: _objectSpread({}, height && {
      height
    })
  });
  if (containerElement) {
    return /*#__PURE__*/(0,react_dom.createPortal)(children, containerElement);
  }
  return domElement ? /*#__PURE__*/(0,react_dom.createPortal)(children, domElement) : null;
};
Portal.displayName = 'Portal';
/* harmony default export */ const components_Portal = (Portal);

/***/ }),

/***/ "../ui_utils/dist/esm/src/utils/render_children/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ renderChildren)
});

// UNUSED EXPORTS: useParentPropsOverrideContext

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/utils/index.js
var utils = __webpack_require__("../ui_utils/dist/esm/src/utils/utils/index.js");
;// ../ui_utils/dist/esm/src/utils/render_children/parentPropsOverrideContext.js

const parentPropsOverrideContext_ParentPropsOverrideContext = /*#__PURE__*/(0,react.createContext)({});
;// ../ui_utils/dist/esm/src/utils/render_children/renderBuilderChildren.js
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


const renderBuilderChildren = function (child) {
  var _child$props;
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const mergedProps = _objectSpread(_objectSpread({}, (child === null || child === void 0 || (_child$props = child.props) === null || _child$props === void 0 || (_child$props = _child$props.block) === null || _child$props === void 0 || (_child$props = _child$props.component) === null || _child$props === void 0 ? void 0 : _child$props.options) || {}), props);
  return /*#__PURE__*/react.createElement(parentPropsOverrideContext_ParentPropsOverrideContext.Provider, {
    value: mergedProps
  }, child);
};
;
renderBuilderChildren.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "renderBuilderChildren"
};
;// ../ui_utils/dist/esm/src/utils/render_children/index.js
function render_children_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function render_children_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? render_children_ownKeys(Object(t), !0).forEach(function (r) {
      render_children_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : render_children_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function render_children_defineProperty(e, r, t) {
  return (r = render_children_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function render_children_toPropertyKey(t) {
  var i = render_children_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function render_children_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}




/**
 * Safely gets a renderable output of most given values.
 */
const FALLBACK_VALUE = null;
const useParentPropsOverrideContext = () => useContext(ParentPropsOverrideContext);
const renderChildren = function (child) {
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let rendered = child;
  if ((0,utils/* isBuilderChildren */.z)(rendered)) {
    return renderBuilderChildren(rendered, props);
  }
  const mergedProps = render_children_objectSpread(render_children_objectSpread({}, rendered ? rendered.props : {}), props);
  if (/*#__PURE__*/react.isValidElement(rendered)) {
    return /*#__PURE__*/react.cloneElement(rendered, mergedProps);
  }
  if (typeof child === 'function') {
    rendered = child(mergedProps);
  }
  if (['undefined', 'boolean'].includes(typeof rendered)) {
    return FALLBACK_VALUE;
  }
  return rendered;
};
;
renderChildren.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "renderChildren"
};

/***/ }),

/***/ "../ui_utils/dist/esm/src/utils/utils/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ childrenIdMatch),
/* harmony export */   z: () => (/* binding */ isBuilderChildren)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const isObject = child => typeof child === 'object';
const isBuilderChildren = child => {
  var _child$props;
  return isObject(child) && (child === null || child === void 0 || (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.block) && child.props.block['@type'] === '@builder.io/sdk:Element';
};
const childrenIdMatch = (child, id) => {
  if (isBuilderChildren(child)) {
    var _child$props$block;
    return (_child$props$block = child.props.block) === null || _child$props$block === void 0 || (_child$props$block = _child$props$block.component) === null || _child$props$block === void 0 || (_child$props$block = _child$props$block.name) === null || _child$props$block === void 0 ? void 0 : _child$props$block.endsWith(":".concat(id));
  }
  return isObject(child) && child.type.id === id;
};

/***/ })

}]);
//# sourceMappingURL=8666.b859a4f6.iframe.bundle.js.map