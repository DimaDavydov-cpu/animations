(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[6586],{

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/uniqueId.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toString = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toString.js");

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString(prefix) + id;
}

module.exports = uniqueId;


/***/ }),

/***/ "../disclosure/dist/esm/src/components/Collapsible/CollapsibleContent/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../transition/dist/esm/src/components/Collapse/index.js");
/* harmony import */ var _fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../hooks/dist/esm/src/hooks/useIsClient/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _CollapsibleContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../disclosure/dist/esm/src/components/Collapsible/CollapsibleContext/index.js");
const _excluded = ["children", "fontSize", "color", "dataTrackTag"];
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





const CollapsibleContent = _ref => {
  let {
      children,
      fontSize = 'b_sm',
      color = 'grey_1200',
      dataTrackTag = 'collapsible_content'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const {
    expanded
  } = (0,_CollapsibleContext__WEBPACK_IMPORTED_MODULE_4__/* .useCollapsibleContext */ .F)();
  const isClient = (0,_fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)();
  const open = expanded && isClient;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_transition__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    in: open,
    animateOpacity: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, _objectSpread({
    dataTrackTag: dataTrackTag,
    fontSize: fontSize,
    "aria-hidden": !open,
    color: color
  }, rest), children));
};
CollapsibleContent.displayName = 'CollapsibleContent';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollapsibleContent);
;
CollapsibleContent.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CollapsibleContent"
};

/***/ }),

/***/ "../disclosure/dist/esm/src/components/Collapsible/CollapsibleContext/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ useCollapsibleContext),
/* harmony export */   q: () => (/* binding */ CollapsibleContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const CollapsibleContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useCollapsibleContext = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CollapsibleContext);
  if (context === undefined) {
    throw new Error('useCollapsibleContext must be used within a CollapsibleContextProvider');
  }
  return context;
};

/***/ }),

/***/ "../disclosure/dist/esm/src/components/Collapsible/CollapsibleHeader/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _fiverr_private_typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
/* harmony import */ var _CollapsibleContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../disclosure/dist/esm/src/components/Collapsible/CollapsibleContext/index.js");
const _excluded = ["children", "color", "fontSize", "paddingX", "paddingY", "onClick", "textProps"];
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





const CollapsibleHeader = _ref => {
  let {
      children,
      color = 'grey_1200',
      fontSize = 'b_sm',
      paddingX = '0',
      paddingY = '2',
      onClick,
      textProps = {}
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const {
    toggleExpanded,
    expanded,
    disabled
  } = (0,_CollapsibleContext__WEBPACK_IMPORTED_MODULE_6__/* .useCollapsibleContext */ .F)();
  const headerColor = disabled ? 'grey_800' : color;
  const collapsibleChevron = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .findChildByType */ .B)(children, 'CollapsibleHeaderChevron');
  const collapsibleHeaderMenu = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .findChildByType */ .B)(children, 'CollapsibleHeaderMenu');
  const clickEvent = e => {
    toggleExpanded();
    onClick === null || onClick === void 0 || onClick(e);
  };
  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      clickEvent(e);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, _objectSpread({
    role: "button",
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    "aria-expanded": expanded,
    onClick: clickEvent,
    paddingX: paddingX,
    paddingY: paddingY,
    color: headerColor,
    tabIndex: disabled ? -1 : 0,
    outlineColor: {
      focusVisible: 'grey_1200'
    },
    outlineWidth: {
      focusVisible: 'md'
    },
    outlineStyle: {
      focusVisible: 'solid'
    },
    outlineOffset: {
      focusVisible: 'sm'
    },
    onKeyDown: handleKeyDown
  }, restProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_typography__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, _objectSpread({
    as: "span",
    flexGrow: 1,
    fontWeight: "semibold",
    fontSize: fontSize
  }, textProps), (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_4__/* .excludeChildrenByType */ .h)(children, ['CollapsibleHeaderChevron', 'CollapsibleHeaderMenu'])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    gap: "2"
  }, collapsibleHeaderMenu, collapsibleChevron));
};
CollapsibleHeader.displayName = 'CollapsibleHeader';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollapsibleHeader);
;
CollapsibleHeader.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CollapsibleHeader"
};

/***/ }),

/***/ "../disclosure/dist/esm/src/components/Collapsible/CollapsibleHeaderChevron/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../button/dist/esm/src/components/ChevronButton/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../layout_components/dist/esm/src/components/Center/index.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ChevronDown.js");
/* harmony import */ var _CollapsibleContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../disclosure/dist/esm/src/components/Collapsible/CollapsibleContext/index.js");





const CollapsibleHeaderChevron = _ref => {
  let {
    size = 'xs',
    theme,
    variant = 'default',
    dataTrackTag = 'collapsible_header_chevron',
    dataTrackValue
  } = _ref;
  const {
    expanded,
    disabled
  } = (0,_CollapsibleContext__WEBPACK_IMPORTED_MODULE_4__/* .useCollapsibleContext */ .F)();
  return variant === 'default' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    size: size,
    shape: "circle",
    chevronDirection: expanded ? 'up' : undefined,
    theme: theme,
    disabled: disabled
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    display: "inlineFlex",
    as: "span",
    transform: expanded ? 'rotate(-180deg)' : undefined,
    transition: "0.15s"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    color: "grey_1200"
  }));
};
CollapsibleHeaderChevron.displayName = 'CollapsibleHeaderChevron';
CollapsibleHeaderChevron.id = 'CollapsibleHeaderChevron';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollapsibleHeaderChevron);
;
CollapsibleHeaderChevron.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CollapsibleHeaderChevron"
};

/***/ }),

/***/ "../disclosure/dist/esm/src/components/Collapsible/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _CollapsibleContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../disclosure/dist/esm/src/components/Collapsible/CollapsibleContext/index.js");



const Collapsible = _ref => {
  let {
    defaultExpanded = false,
    expanded: controlledExpanded,
    onToggle = () => undefined,
    disabled,
    children,
    paddingBottom = '0',
    overflow,
    dataTrackTag = 'collapsible',
    dataTrackValue
  } = _ref;
  const [innerExpanded, setInnerExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultExpanded);
  const expanded = controlledExpanded === undefined ? innerExpanded : controlledExpanded;
  const toggleExpanded = () => {
    if (disabled) {
      return;
    }
    onToggle(!expanded);
    setInnerExpanded(!expanded);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CollapsibleContext__WEBPACK_IMPORTED_MODULE_2__/* .CollapsibleContext */ .q.Provider, {
    value: {
      expanded,
      toggleExpanded,
      disabled
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    as: "article",
    pointerEvents: disabled ? 'none' : undefined,
    paddingBottom: paddingBottom,
    overflow: overflow,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, children));
};
Collapsible.displayName = 'Collapsible';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collapsible);
;
Collapsible.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Collapsible"
};

/***/ }),

/***/ "../transition/dist/esm/src/components/Collapse/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Collapse)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-move@6.5.0_react@17.0.2/node_modules/react-move/es/index.js + 20 modules
var es = __webpack_require__("../../node_modules/.pnpm/react-move@6.5.0_react@17.0.2/node_modules/react-move/es/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useElementSize/index.js + 1 modules
var useElementSize = __webpack_require__("../hooks/dist/esm/src/hooks/useElementSize/index.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/hooks/useTransitionEvents.js
var useTransitionEvents = __webpack_require__("../transition/dist/esm/src/hooks/useTransitionEvents.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/utils/index.js
var utils = __webpack_require__("../transition/dist/esm/src/utils/index.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/constants.js
var constants = __webpack_require__("../transition/dist/esm/src/constants.js");
;// ../transition/dist/esm/src/components/Collapse/variants.js
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


const isNumeric = value => value !== null && parseInt(value.toString(), 10) > 0;
const getTransition = function (variant) {
  let duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'moderate1';
  let easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'easeInOut';
  let delay = arguments.length > 3 ? arguments[3] : undefined;
  return {
    duration: constants/* DURATION */.ft[(0,utils/* getValueOrField */.F)(duration, variant)],
    ease: constants/* EASING */.Ux[(0,utils/* getValueOrField */.F)(easing, variant)],
    delay: constants/* DURATION */.ft[(0,utils/* getValueOrField */.F)(delay, variant)]
  };
};
const variants = {
  enter: _ref => {
    let {
      endingHeight,
      delay,
      duration,
      easing
    } = _ref;
    return {
      opacity: [1],
      height: [endingHeight],
      timing: getTransition('enter', duration, easing, delay),
      isFirstRender: 1
    };
  },
  start: _ref2 => {
    let {
      endingHeight,
      delay,
      duration,
      easing
    } = _ref2;
    return {
      opacity: [1],
      height: [endingHeight],
      timing: getTransition('enter', duration, easing, delay),
      isFirstRender: 0
    };
  },
  exit: _ref3 => {
    let {
      animateOpacity,
      startingHeight,
      delay,
      duration,
      easing
    } = _ref3;
    return _objectSpread(_objectSpread({}, animateOpacity && {
      opacity: isNumeric(startingHeight) ? [1] : [0]
    }), {}, {
      height: [startingHeight],
      timing: getTransition('exit', duration, easing, delay)
    });
  }
};
/* harmony default export */ const Collapse_variants = (variants);
;// ../transition/dist/esm/src/components/Collapse/constants.js
const UPDATE_DYNAMIC_CONTENT_TIMEOUT = 50;
const UNIQUE_ATTRIBUTES = ['id', 'name', 'for'];
;// ../transition/dist/esm/src/components/Collapse/utils.js


const calculateHeight = ref => {
  const clonedContainer = ref.current.cloneNode(true);
  removeUniqueAttributes(clonedContainer);
  clonedContainer.style.height = 'auto';
  const {
    parentNode
  } = ref.current;
  parentNode.appendChild(clonedContainer);
  const {
    scrollHeight
  } = clonedContainer;
  parentNode.removeChild(clonedContainer);
  return scrollHeight;
};
const removeUniqueAttributes = element => {
  UNIQUE_ATTRIBUTES.forEach(attribute => element.removeAttribute(attribute));
  (0,lodash.forEach)(element.children, removeUniqueAttributes);
};
;// ../transition/dist/esm/src/components/Collapse/index.js
function Collapse_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Collapse_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Collapse_ownKeys(Object(t), !0).forEach(function (r) {
      Collapse_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Collapse_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Collapse_defineProperty(e, r, t) {
  return (r = Collapse_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Collapse_toPropertyKey(t) {
  var i = Collapse_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function Collapse_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}









const Collapse = _ref => {
  var _variants$start;
  let {
    unmountOnExit,
    animateOpacity = true,
    startingHeight = 0,
    endingHeight = 'auto',
    delay,
    duration = 'moderate1',
    easing = 'easeInOut',
    in: isOpen = true,
    onAnimationStart,
    onAnimationEnd,
    children
  } = _ref;
  const isDynamicHeight = endingHeight === 'auto';
  const innerRef = (0,react.useRef)(null);
  const ref = (children === null || children === void 0 ? void 0 : children.ref) || innerRef;
  const [elementHeight, setElementHeight] = (0,react.useState)(isDynamicHeight ? 0 : endingHeight);
  const {
    getEventsHandler
  } = (0,useTransitionEvents/* default */.A)({
    onAnimationStart,
    onAnimationEnd,
    isOpen,
    unmountOnExit
  });
  const getEndingHeight = () => {
    var _ref$current;
    if (!isDynamicHeight) {
      return endingHeight;
    }
    if (elementHeight) {
      return elementHeight;
    }
    return ((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.scrollHeight) || 0;
  };
  const custom = {
    startingHeight,
    endingHeight: getEndingHeight(),
    animateOpacity,
    unmountOnExit,
    duration,
    easing,
    delay
  };
  const handleMutationObserverChange = (0,react.useCallback)(entries => {
    if (!ref.current) {
      return;
    }
    entries.forEach(() => {
      const newHeight = calculateHeight(ref);
      setElementHeight(newHeight);
    });
  }, [ref]);
  (0,react.useEffect)(() => {
    if (!ref.current || !isDynamicHeight) {
      return;
    }
    const handleMutationObserverThrottled = (0,lodash.throttle)(handleMutationObserverChange, UPDATE_DYNAMIC_CONTENT_TIMEOUT);
    const mutationObserver = new MutationObserver(handleMutationObserverThrottled);
    mutationObserver.observe(ref.current, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class', 'height']
    });
    setElementHeight(ref.current.scrollHeight);
    return () => mutationObserver.disconnect();
  }, [ref, isDynamicHeight, handleMutationObserverChange]);
  const startVariant = ((_variants$start = Collapse_variants.start) === null || _variants$start === void 0 ? void 0 : _variants$start.call(Collapse_variants, custom)) || Collapse_variants.enter(custom);
  const handleWindowResizeThrottled = (0,react.useMemo)(() => (0,lodash.throttle)(() => {
    if (!ref.current) {
      return;
    }
    const newHeight = calculateHeight(ref);
    setElementHeight(newHeight);
  }, UPDATE_DYNAMIC_CONTENT_TIMEOUT), [ref]);
  const {
    width: windowWidth,
    height: windowHeight
  } = (0,useElementSize/* default */.A)(typeof window !== 'undefined' ? window : null);
  (0,react.useEffect)(() => handleWindowResizeThrottled, [windowWidth, windowHeight, handleWindowResizeThrottled]);
  return /*#__PURE__*/react.createElement(es/* Animate */.i, {
    show: unmountOnExit ? isOpen : true,
    start: isOpen ? startVariant : Collapse_variants.exit(custom),
    enter: Collapse_objectSpread(Collapse_objectSpread({}, isOpen ? Collapse_variants.enter(custom) : Collapse_variants.exit(custom)), getEventsHandler('enter')),
    update: Collapse_objectSpread(Collapse_objectSpread({}, isOpen ? startVariant : Collapse_variants.exit(custom)), getEventsHandler('update')),
    leave: Collapse_objectSpread(Collapse_objectSpread({}, Collapse_variants.exit(custom)), getEventsHandler('leave'))
  }, _ref2 => {
    let {
      height,
      opacity,
      timing,
      isFirstRender
    } = _ref2;
    const heightStyle = isFirstRender && isDynamicHeight ? 'auto' : "".concat(height, "px");
    return (0,render_children/* renderChildren */.s)(children, {
      ref,
      style: Collapse_objectSpread(Collapse_objectSpread({}, children.props.style || {}), {}, {
        overflow: 'hidden',
        height: heightStyle,
        opacity,
        timing
      })
    });
  });
};
Collapse.displayName = 'Collapse';
/* harmony default export */ const components_Collapse = (Collapse);
;
Collapse.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Collapse"
};

/***/ })

}]);
//# sourceMappingURL=6586.e998fcb5.iframe.bundle.js.map