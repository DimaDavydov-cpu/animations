"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[3528],{

/***/ "../button/dist/esm/src/components/Button/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Button)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/BaseButton/index.js
var BaseButton = __webpack_require__("../button/dist/esm/src/components/BaseButton/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/styles.ve.css.js + 1 modules
var styles_ve_css = __webpack_require__("../theme/dist/esm/src/atoms/styles.ve.css.js");
;// ../button/dist/esm/src/components/Button/utils.js

const STYLES_BY_SIZE = {
  sm: {
    paddingY: '1.5',
    paddingX: '3',
    lineHeight: 'b_sm',
    fontSize: 'b_sm'
  },
  md: {
    paddingY: '2',
    paddingX: '4',
    lineHeight: 'b_md',
    fontSize: 'b_md'
  },
  lg: {
    paddingY: '2.5',
    paddingX: '5',
    lineHeight: 'b_lg',
    fontSize: 'b_md'
  }
};
const getConditionalSize = size => {
  if (typeof size === 'object') {
    return {
      paddingX: (0,styles_ve_css/* mapResponsiveStyles */.d0)(size, value => STYLES_BY_SIZE[value].paddingX),
      paddingY: (0,styles_ve_css/* mapResponsiveStyles */.d0)(size, value => STYLES_BY_SIZE[value].paddingY),
      fontSize: (0,styles_ve_css/* mapResponsiveStyles */.d0)(size, value => STYLES_BY_SIZE[value].fontSize),
      lineHeight: (0,styles_ve_css/* mapResponsiveStyles */.d0)(size, value => STYLES_BY_SIZE[value].lineHeight)
    };
  }
  return STYLES_BY_SIZE[size || 'md'];
};
const getConditionalFullWidth = fullWidth => {
  if (typeof fullWidth === 'object') {
    return (0,styles_ve_css/* mapResponsiveStyles */.d0)(fullWidth, value => value ? '100%' : 'initial');
  }
  return fullWidth ? '100%' : undefined;
};
;// ../button/dist/esm/src/components/Button/index.js
const _excluded = ["children", "disabled", "intent", "size", "variant", "loading", "className", "fullWidth", "dataTrackTag"];
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



const Button = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      children,
      disabled = false,
      intent = 'primary',
      size = 'md',
      variant = 'filled',
      loading = false,
      className,
      fullWidth,
      dataTrackTag = 'button'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement(BaseButton/* default */.A, _objectSpread(_objectSpread(_objectSpread({}, rest), getConditionalSize(size)), {}, {
    width: getConditionalFullWidth(fullWidth),
    variant: variant,
    intent: intent,
    loading: loading,
    disabled: disabled,
    ref: ref,
    className: className,
    dataTrackTag: dataTrackTag
  }), children);
});
Button.displayName = 'Button';
/* harmony default export */ const components_Button = (Button);
;
Button.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Button"
};

/***/ }),

/***/ "../button/dist/esm/src/components/shared/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ ICON_COLORS),
/* harmony export */   h: () => (/* binding */ ICON_SIZES)
/* harmony export */ });
const ICON_SIZES = {
  '3xs': 'sm',
  '2xs': 'sm',
  xs: 'sm',
  sm: 'md',
  md: 'md',
  lg: 'md'
};
const ICON_COLORS = {
  light: 'grey_300',
  dark: 'grey_1200'
};

/***/ }),

/***/ "../data_display/dist/esm/src/components/Status/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Status)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
;// ../data_display/dist/esm/src/components/Status/constants.js
const TYPES = {
  NEUTRAL: 'neutral',
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error',
  SPECIAL: 'special',
  WARNING: 'warning'
};
const COLORS_BY_TYPE = {
  neutral: {
    color: 'grey_1200',
    backgroundColor: 'grey_400'
  },
  info: {
    color: 'blue_1100',
    backgroundColor: 'blue_200'
  },
  warning: {
    color: 'yellow_1200',
    backgroundColor: 'yellow_200'
  },
  success: {
    color: 'green_1100',
    backgroundColor: 'green_200'
  },
  error: {
    color: 'red_1100',
    backgroundColor: 'red_200'
  },
  special: {
    color: 'purple_1100',
    backgroundColor: 'purple_200'
  }
};
;// ../data_display/dist/esm/src/components/Status/index.js
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



const Status = _ref => {
  let {
    type = 'neutral',
    children,
    dataTrackTag = 'status',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Box/* default */.A, _objectSpread({
    borderRadius: "sm",
    minHeight: "20px",
    display: "flex",
    alignItems: "center",
    paddingX: "2",
    width: "fit-content",
    letterSpacing: "0.5px",
    fontSize: "b_xxs",
    lineHeight: "b_xs",
    fontWeight: "bold",
    userSelect: "none",
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, COLORS_BY_TYPE[type]), children);
};
Status.displayName = 'Status';
/* harmony default export */ const components_Status = (Status);
;
Status.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Status"
};

/***/ }),

/***/ "../disclosure/dist/esm/src/components/Collapsible/CollapsibleContent/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "../disclosure/dist/esm/src/components/Collapsible/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "../feedback/dist/esm/src/components/Skeleton/SkeletonSquare/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");


const SkeletonSquare = _ref => {
  let {
    width = '100%',
    height = '16px',
    maxHeight,
    maxWidth = '100%',
    dataTestId,
    borderRadius = 'sm',
    dataTrackTag = 'skeleton_square',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    backgroundColor: "grey_300",
    borderRadius: borderRadius,
    width: width,
    height: height,
    maxHeight: maxHeight,
    maxWidth: maxWidth,
    "data-testid": dataTestId,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  });
};
SkeletonSquare.displayName = 'SkeletonSquare';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonSquare);
;
SkeletonSquare.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SkeletonSquare"
};

/***/ }),

/***/ "../feedback/dist/esm/src/components/Skeleton/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _fiverr_private_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../transition/dist/esm/src/components/Wipe/index.js");



const Skeleton = _ref => {
  let {
    children,
    animationDuration = 'moderate',
    animationDelay = 'moderate',
    width = 'fit-content',
    preferMotion = true,
    dataTestId,
    dataTrackTag = 'skeleton',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    width: width,
    overflow: "hidden",
    position: "relative",
    "data-testid": dataTestId,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, preferMotion && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_transition__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    animationDuration: animationDuration,
    animationDelay: animationDelay
  }), children);
};
Skeleton.displayName = 'Skeleton';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skeleton);
;
Skeleton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Skeleton"
};

/***/ }),

/***/ "../inputs/dist/esm/src/components/Input/InputGroup/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Input_InputGroup)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Input/constants.js
var constants = __webpack_require__("../inputs/dist/esm/src/components/Input/constants.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Input/styles.ve.css.js + 1 modules
var styles_ve_css = __webpack_require__("../inputs/dist/esm/src/components/Input/styles.ve.css.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/shared/utils.js
var utils = __webpack_require__("../inputs/dist/esm/src/components/shared/utils.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/shared/getTextInputsStyle/index.js + 1 modules
var getTextInputsStyle = __webpack_require__("../inputs/dist/esm/src/components/shared/getTextInputsStyle/index.js");
;// ../inputs/dist/esm/src/components/Input/inputs/dist/esm/src/components/Input/InputGroup/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../inputs/dist/esm/src/components/Input/InputGroup/styles.ve.css.js.vanilla.css","source":"Lmo4c3MzYzE6Zm9jdXMtd2l0aGluIHsKICBib3JkZXItY29sb3I6IHZhcigtLWo4c3MzYzApOwp9"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../inputs/dist/esm/src/components/Input/InputGroup/styles.ve.css.js

var borderFocusWithinVar = 'var(--j8ss3c0)';
var container = 'j8ss3c1';
;// ../inputs/dist/esm/src/components/Input/InputGroup/index.js
const _excluded = ["children", "disabled", "isSuccess", "isError", "dataTestId", "onBlur", "inputSize", "dataTrackTag", "dataTrackValue"];
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









const InputGroup = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      children,
      disabled,
      isSuccess,
      isError,
      dataTestId,
      onBlur,
      inputSize = constants/* INPUT_SIZES */.OL.default,
      dataTrackTag = 'input_group',
      dataTrackValue
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const input = (0,findChildByType/* findChildByType */.B)(children, constants/* INPUT_ID */.R0);
  const {
    stylingProps,
    restProps
  } = (0,utils/* filterProps */.J)(rest);
  const {
    focusBorderColor,
    borderColor,
    inlineVars
  } = (0,getTextInputsStyle/* getBorderStyling */.B)({
    disabled,
    isError,
    isSuccess,
    borderFocusWithinVar: borderFocusWithinVar
  });
  if (! /*#__PURE__*/(0,react.isValidElement)(input)) {
    return null;
  }
  const prefix = (0,findChildByType/* findChildByType */.B)(children, constants/* PREFIX_ID */.fS);
  const suffix = (0,findChildByType/* findChildByType */.B)(children, constants/* SUFFIX_ID */.Uj);
  const className = classnames_default()(container, styles_ve_css/* inputSearchSelector */.KJ, {
    [styles_ve_css/* errorClass */.PC]: isError,
    [styles_ve_css/* successClass */.We]: isSuccess
  });
  return /*#__PURE__*/react.createElement(Container/* default */.A, _objectSpread({
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    onBlur: onBlur,
    display: "flex",
    direction: "row",
    paddingY: inputSize === constants/* INPUT_SIZES */.OL.lg ? '3' : '2',
    paddingX: inputSize === constants/* INPUT_SIZES */.OL.lg ? '4' : '3',
    lineHeight: inputSize === constants/* INPUT_SIZES */.OL.lg ? 'b_lg' : 'b_md',
    borderRadius: "lg",
    alignItems: "center",
    backgroundColor: disabled ? 'grey_200' : 'background',
    width: "100%",
    borderColor: borderColor,
    outlineWidth: {
      focusWithin: 'sm'
    },
    outlineColor: {
      focusWithin: focusBorderColor
    },
    outlineStyle: {
      focusWithin: 'solid'
    },
    borderWidth: "sm",
    className: className,
    "data-testid": dataTestId,
    style: inlineVars
  }, stylingProps), (0,render_children/* renderChildren */.s)(prefix, {
    disabled
  }), (0,render_children/* renderChildren */.s)(input, _objectSpread(_objectSpread({
    className: input.props.className,
    disabled,
    isSuccess,
    isError,
    ref,
    inputSize
  }, restProps), {}, {
    resetInputStyle: true
  })), (0,render_children/* renderChildren */.s)(suffix, {
    disabled
  }));
});
InputGroup.displayName = constants/* GROUP_ID */.SS;
/* harmony default export */ const Input_InputGroup = (InputGroup);
;
InputGroup.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "InputGroup"
};

/***/ }),

/***/ "../inputs/dist/esm/src/components/shared/getTextInputsStyle/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ getBorderColor),
  B: () => (/* binding */ getBorderStyling)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js + 1 modules
var vanilla_extract_dynamic_esm = __webpack_require__("../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/theme.ve.css.js
var theme_ve_css = __webpack_require__("../theme/dist/esm/src/theme.ve.css.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/semanticTokens.js
var semanticTokens = __webpack_require__("../theme/dist/esm/src/shared/themeVars/semanticTokens.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/shared/formsTokenColors.js
var formsTokenColors = __webpack_require__("../inputs/dist/esm/src/components/shared/formsTokenColors.js");
;// ../inputs/dist/esm/src/components/Input/InputGroup/style.js


const generateBorderFocusWithin = _ref => {
  let {
    isError,
    isSuccess
  } = _ref;
  const {
    validationError,
    validationSuccess
  } = semanticTokens/* semanticBorderColors */.zK;
  if (isError) {
    return validationError;
  } else if (isSuccess) {
    return validationSuccess;
  } else {
    return formsTokenColors/* formsTokenColors */.V.interactiveColor;
  }
};
;// ../inputs/dist/esm/src/components/shared/getTextInputsStyle/index.js



const getBorderColor = _ref => {
  let {
    disabled,
    isSuccess,
    isError
  } = _ref;
  if (disabled) {
    return {
      default: formsTokenColors/* formsTokenColors */.V.borderColor,
      hover: formsTokenColors/* formsTokenColors */.V.borderColor,
      focus: formsTokenColors/* formsTokenColors */.V.borderColor
    };
  } else if (isSuccess) {
    return {
      default: 'validationSuccess',
      hover: 'validationSuccess',
      focus: 'validationSuccess'
    };
  } else if (isError) {
    return {
      default: 'validationError',
      hover: 'validationError',
      focus: 'validationError'
    };
  } else {
    return {
      default: formsTokenColors/* formsTokenColors */.V.borderColor,
      hover: formsTokenColors/* formsTokenColors */.V.interactiveColor,
      focus: formsTokenColors/* formsTokenColors */.V.interactiveColor
    };
  }
};
const getBorderStyling = _ref2 => {
  let {
    disabled,
    isError,
    isSuccess,
    borderFocusWithinVar
  } = _ref2;
  const borderColor = getBorderColor({
    disabled,
    isSuccess,
    isError
  });
  const focusBorderColor = generateBorderFocusWithin({
    isError,
    isSuccess
  });
  return {
    focusBorderColor,
    borderColor,
    inlineVars: (0,vanilla_extract_dynamic_esm/* assignInlineVars */.D)({
      [borderFocusWithinVar]: theme_ve_css/* tokens */.L.colors[focusBorderColor]
    })
  };
};

/***/ }),

/***/ "../layout_components/dist/esm/src/components/Wrap/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Flex/index.js");
const _excluded = ["children", "gap", "wrap", "dataTrackTag"];
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


const Wrap = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      children,
      gap = {
        default: '3'
      },
      wrap = {
        default: 'wrap'
      },
      dataTrackTag = 'wrap'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Flex__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    dataTrackTag: dataTrackTag,
    ref: ref,
    gap: gap,
    wrap: wrap
  }, restProps), children);
});
Wrap.displayName = 'Wrap';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrap);
;
Wrap.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Wrap"
};

/***/ }),

/***/ "../popover/dist/esm/src/components/Popover/PopoverChevron/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _PopoverContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContext/index.js");




const PopoverChevron = _ref => {
  var _arrowRef$current;
  let {
    size = 'md',
    dataTestId
  } = _ref;
  const {
    arrowRef,
    floatingData: {
      middlewareData: {
        arrow
      },
      placement
    }
  } = (0,_PopoverContext__WEBPACK_IMPORTED_MODULE_3__/* .usePopoverContext */ .C)();
  const arrowOffset = (arrowRef === null || arrowRef === void 0 || (_arrowRef$current = arrowRef.current) === null || _arrowRef$current === void 0 ? void 0 : _arrowRef$current.offsetWidth) || 0;
  const side = placement.split('-')[0];
  const staticSide = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right'
  }[side];
  const {
    x,
    y
  } = arrow || {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    "data-testid": dataTestId,
    ref: arrowRef,
    zIndex: "-1",
    style: {
      backgroundColor: 'inherit'
    },
    position: "absolute",
    width: size === 'sm' ? 12 : 16,
    height: size === 'sm' ? 12 : 16,
    transform: "rotate(45deg)",
    pointerEvents: "none",
    left: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNil)(x) ? undefined : "".concat(x, "px"),
    top: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNil)(y) ? undefined : "".concat(y, "px"),
    [staticSide]: "".concat(-arrowOffset / 2, "px")
  });
};
PopoverChevron.displayName = 'PopoverChevron';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverChevron);
;
PopoverChevron.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PopoverChevron"
};

/***/ }),

/***/ "../table/src/components/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Collapsible: () => (/* binding */ index_stories_Collapsible),
  Compact: () => (/* binding */ Compact),
  Filters: () => (/* binding */ Filters),
  FullComposition: () => (/* binding */ index_stories_FullComposition),
  LongTextCell: () => (/* binding */ LongTextCell),
  MultiSelect: () => (/* binding */ index_stories_MultiSelect),
  Pagination: () => (/* binding */ Pagination),
  Primary: () => (/* binding */ Primary),
  RowActionsSticky: () => (/* binding */ index_stories_RowActionsSticky),
  ServerPagination: () => (/* binding */ ServerPagination),
  Sorting: () => (/* binding */ Sorting),
  StickyColumns: () => (/* binding */ index_stories_StickyColumns),
  VirtualizedColumns: () => (/* binding */ index_stories_VirtualizedColumns),
  VirtualizedRows: () => (/* binding */ VirtualizedRows),
  ZebraStyle: () => (/* binding */ ZebraStyle),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tanstack+react-table@8.21.2_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@tanstack/react-table/build/lib/index.mjs
var lib = __webpack_require__("../../node_modules/.pnpm/@tanstack+react-table@8.21.2_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@tanstack/react-table/build/lib/index.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tanstack+table-core@8.21.2/node_modules/@tanstack/table-core/build/lib/index.mjs
var build_lib = __webpack_require__("../../node_modules/.pnpm/@tanstack+table-core@8.21.2/node_modules/@tanstack/table-core/build/lib/index.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@faker-js+faker@9.6.0/node_modules/@faker-js/faker/dist/chunk-LSEVNFON.js + 2 modules
var chunk_LSEVNFON = __webpack_require__("../../node_modules/.pnpm/@faker-js+faker@9.6.0/node_modules/@faker-js/faker/dist/chunk-LSEVNFON.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs + 1 modules
var dist = __webpack_require__("../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs");
// EXTERNAL MODULE: ../button/dist/esm/src/components/IconButton/index.js
var IconButton = __webpack_require__("../button/dist/esm/src/components/IconButton/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/Button/index.js + 1 modules
var Button = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Download.js
var Download = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Download.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Share.js
var Share = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Share.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
// EXTERNAL MODULE: ../forms/dist/esm/src/components/Select/index.js + 3 modules
var Select = __webpack_require__("../forms/dist/esm/src/components/Select/index.js");
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/DropdownMenu/MenuGroup/index.js
var MenuGroup = __webpack_require__("../dropdown/dist/esm/src/components/DropdownMenu/MenuGroup/index.js");
;// ../forms/dist/esm/src/components/Select/OptionGroup/index.js


const OptionGroup = _ref => {
  let {
    children,
    label = '',
    isMulti = false,
    name,
    dataTrackTag = 'option_group',
    dataTrackValue = name
  } = _ref;
  return /*#__PURE__*/react.createElement(MenuGroup/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    label: label,
    isMulti: isMulti,
    name: name
  }, children);
};
OptionGroup.id = MenuGroup/* default */.A.id;
OptionGroup.displayName = MenuGroup/* default */.A.id;
/* harmony default export */ const Select_OptionGroup = (OptionGroup);
;
OptionGroup.__docgenInfo = {
  "description": "",
  "methods": []
};
// EXTERNAL MODULE: ../forms/dist/esm/src/components/Select/Option/index.js
var Option = __webpack_require__("../forms/dist/esm/src/components/Select/Option/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js
var src = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js
var excludeChildrenByType = __webpack_require__("../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js");
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/EmptyState/index.js
var EmptyState = __webpack_require__("../data_display/dist/esm/src/components/EmptyState/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/illustrations/InboxEmptyInitialMinimized.js
var InboxEmptyInitialMinimized = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/illustrations/InboxEmptyInitialMinimized.js");
;// ../data_display/dist/esm/src/components/EmptyState/EmptyStateVisual/index.js


const EmptyStateVisual = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/react.createElement(react.Fragment, null, children || /*#__PURE__*/react.createElement(InboxEmptyInitialMinimized/* default */.A, {
    size: "sm"
  }));
};
EmptyStateVisual.displayName = 'EmptyStateVisual';
/* harmony default export */ const EmptyState_EmptyStateVisual = (EmptyStateVisual);
;
EmptyStateVisual.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EmptyStateVisual"
};
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/EmptyState/EmptyStateTitle/index.js
var EmptyStateTitle = __webpack_require__("../data_display/dist/esm/src/components/EmptyState/EmptyStateTitle/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js
var translate = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
;// ../data_display/dist/esm/src/components/EmptyState/EmptyStateSubtitle/index.js



const EmptyStateSubtitle = _ref => {
  let {
    children,
    dataTrackTag = 'empty_state_subtitle',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Text/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    size: "b_sm"
  }, children || (0,translate/* translate */.T)('data_display.empty_state.subtitle'));
};
EmptyStateSubtitle.displayName = 'EmptyStateSubtitle';
/* harmony default export */ const EmptyState_EmptyStateSubtitle = (EmptyStateSubtitle);
;
EmptyStateSubtitle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EmptyStateSubtitle"
};
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/illustrations/SavedDeliveries.js
var SavedDeliveries = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/illustrations/SavedDeliveries.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js
var I18n = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js");
;// ../table/src/components/Table/TableContext/index.tsx

const TableContext = /*#__PURE__*/(0,react.createContext)({});
const TableContextProvider = TableContext.Provider;
const useTableContext = () => {
  const context = (0,react.useContext)(TableContext);
  return context;
};
try {
    // @ts-ignore
    TableContextProvider.displayName = "TableContextProvider";
    // @ts-ignore
    TableContextProvider.__docgenInfo = { "description": "", "displayName": "TableContextProvider", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/Table/TableContext/index.tsx#TableContextProvider"] = { docgenInfo: TableContextProvider.__docgenInfo, name: "TableContextProvider", path: "../table/src/components/Table/TableContext/index.tsx#TableContextProvider" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../table/src/components/Table/index.tsx








const Table = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  var _table$getRowModel;
  let {
    children,
    height,
    dataTrackTag = 'table',
    dataTrackValue
  } = _ref;
  const {
    table,
    loading
  } = useTableContext();
  const emptyState = (0,findChildByType/* findChildByType */.B)(children, 'EmptyState');
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    ref: ref,
    borderColor: "border",
    borderStyle: "solid",
    borderWidth: "sm",
    borderRadius: "lg",
    overflow: "auto",
    position: "relative",
    height: height,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    width: "100%",
    as: "table",
    style: {
      borderCollapse: 'separate'
    },
    dataTrackTag: dataTrackTag
  }, (0,excludeChildrenByType/* excludeChildrenByType */.h)(children, 'EmptyState')), !(table !== null && table !== void 0 && (_table$getRowModel = table.getRowModel()) !== null && _table$getRowModel !== void 0 && _table$getRowModel.rows.length) && !loading && (emptyState || /*#__PURE__*/react.createElement(EmptyState/* default */.A, null, /*#__PURE__*/react.createElement(EmptyState_EmptyStateVisual, null, /*#__PURE__*/react.createElement(SavedDeliveries/* default */.A, {
    size: "sm"
  })), /*#__PURE__*/react.createElement(EmptyStateTitle/* default */.A, null, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "table.empty_state.no_results_found"
  })), /*#__PURE__*/react.createElement(EmptyState_EmptyStateSubtitle, null, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "table.empty_state.try_adjusting_search_or_filters"
  })))));
});
Table.displayName = 'Table';
/* harmony default export */ const components_Table = (Table);
try {
    // @ts-ignore
    Table.displayName = "Table";
    // @ts-ignore
    Table.__docgenInfo = { "description": "", "displayName": "Table", "props": { "dataTrackTag": { "defaultValue": { value: "table" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/Table/index.tsx#Table"] = { docgenInfo: Table.__docgenInfo, name: "Table", path: "../table/src/components/Table/index.tsx#Table" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Wrap/index.js
var Wrap = __webpack_require__("../layout_components/dist/esm/src/components/Wrap/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useElementSize/index.js + 1 modules
var useElementSize = __webpack_require__("../hooks/dist/esm/src/hooks/useElementSize/index.js");
;// ../data_display/dist/esm/src/components/TagCollection/index.js





const TagCollection = _ref => {
  let {
    children,
    size,
    variant,
    minHeight,
    height = '100%',
    maxHeight,
    minWidth,
    width = '100%',
    maxWidth,
    gap,
    justifyContent,
    theme = 'light',
    dataTrackTag = 'tag_collection',
    dataTrackValue
  } = _ref;
  const showMoreTag = (0,findChildByType/* findChildByType */.B)(children, 'ShowMoreTag');
  const shouldShowMore = !(0,lodash.isNil)(showMoreTag);
  const childrenAsTagsArray = (0,react.useMemo)(() => (0,excludeChildrenByType/* excludeChildrenByType */.h)(children, 'ShowMoreTag'), [children]);
  const ref = (0,react.useRef)(null);
  const [originalTags, setOriginalTags] = (0,react.useState)([...childrenAsTagsArray]);
  const [tagsToShow, setTagsToShow] = (0,react.useState)([...childrenAsTagsArray]);
  const [hiddenTags, setHiddenTags] = (0,react.useState)([]);
  const [overflowingTagIndex, setOverflowingTagIndex] = (0,react.useState)(null);
  const [readyToShowTags, setReadyToShowTags] = (0,react.useState)(false);
  const windowSize = (0,useElementSize/* default */.A)(typeof window !== 'undefined' ? window : null);
  (0,react.useEffect)(() => {
    setOverflowingTagIndex(null);
    setReadyToShowTags(false);
    setOriginalTags([...childrenAsTagsArray]);
    setTagsToShow([...childrenAsTagsArray]);
    setHiddenTags([]);
  }, [windowSize, childrenAsTagsArray]);
  // FIRST RENDER - Initial Generation of Tags, Checking which tags overflow (setting overflowingTagIndex)
  (0,react.useEffect)(() => {
    if (ref.current && !overflowingTagIndex) {
      const containerBottomPosition = ref.current.offsetTop + ref.current.offsetHeight;
      const childrenElements = Object.values(ref.current.children);
      for (let i = 0; i < childrenElements.length; i++) {
        const child = childrenElements[i];
        const childBottomPosition = child.offsetTop + child.offsetHeight;
        if (childBottomPosition > containerBottomPosition) {
          setOverflowingTagIndex(i);
          setTagsToShow([...originalTags.slice(0, i)]);
          setHiddenTags([...originalTags.slice(i)]);
          break;
        }
      }
    }
  }, [overflowingTagIndex, originalTags]);
  // SECOND RENDER - if the show more tag is itself overflowing, reduce one more tag
  (0,react.useEffect)(() => {
    if (shouldShowMore && ref.current && !!overflowingTagIndex) {
      const containerBottomPosition = ref.current.offsetTop + ref.current.offsetHeight;
      const childrenElements = Object.values(ref.current.children);
      const showMoreElement = childrenElements[overflowingTagIndex];
      const showMoreElementBottomPosition = showMoreElement.offsetTop + showMoreElement.offsetHeight;
      if (showMoreElementBottomPosition > containerBottomPosition) {
        setOverflowingTagIndex(overflowingTagIndex - 1);
        setTagsToShow([...originalTags.slice(0, overflowingTagIndex - 1)]);
        setHiddenTags([...originalTags.slice(overflowingTagIndex - 1)]);
      } else {
        setReadyToShowTags(true);
      }
    } else if (ref.current) {
      setReadyToShowTags(true);
    }
  }, [shouldShowMore, overflowingTagIndex, originalTags]);
  return /*#__PURE__*/react.createElement(Wrap/* default */.A, {
    minHeight: minHeight,
    height: height,
    maxHeight: maxHeight,
    minWidth: minWidth,
    width: width,
    maxWidth: maxWidth,
    overflow: "hidden",
    alignItems: "center",
    alignContent: "flexStart",
    visibility: readyToShowTags ? 'visible' : 'hidden',
    ref: ref,
    gap: gap,
    justifyContent: justifyContent,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, tagsToShow.map(tagComponent => (0,render_children/* renderChildren */.s)(tagComponent, {
    size: size || tagComponent.props.size,
    variant: variant || tagComponent.props.variant,
    theme: theme || tagComponent.props.theme
  })), shouldShowMore && overflowingTagIndex && (0,render_children/* renderChildren */.s)(showMoreTag, {
    hiddenTagsCount: originalTags.length - tagsToShow.length,
    hiddenTags: hiddenTags.map(tagComponent => (0,render_children/* renderChildren */.s)(tagComponent, {
      size: size || tagComponent.props.size,
      variant: variant || tagComponent.props.variant,
      theme: theme || tagComponent.props.theme
    })),
    variant: variant || showMoreTag.props.variant,
    size: size || showMoreTag.props.size,
    theme: theme || showMoreTag.props.theme
  }));
};
TagCollection.displayName = 'TagCollection';
/* harmony default export */ const components_TagCollection = (TagCollection);
;
TagCollection.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TagCollection"
};
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/Tag/index.js + 4 modules
var Tag = __webpack_require__("../data_display/dist/esm/src/components/Tag/index.js");
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/Tag/TagCloseIcon/index.js + 1 modules
var TagCloseIcon = __webpack_require__("../data_display/dist/esm/src/components/Tag/TagCloseIcon/index.js");
;// ../table/src/components/TableActiveFilters/index.tsx







const TableActiveFilters = _ref => {
  let {
    children,
    showClearButton = false,
    activeFilters,
    onClickClear,
    dataTrackTag = 'table_active_filters',
    dataTrackValue
  } = _ref;
  const {
    table
  } = useTableContext();
  const capitalized = (0,react.useCallback)(word => word[0].toLocaleUpperCase() + word.slice(1), []);
  const handleClick = id => table.setColumnFilters(prev => prev.filter(filter => filter.id !== id));
  return children || !(0,lodash.isEmpty)(activeFilters) ? /*#__PURE__*/react.createElement(Stack/* default */.A, {
    gap: "2"
  }, children || /*#__PURE__*/react.createElement(components_TagCollection, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    width: "fit-content",
    size: "sm"
  }, activeFilters === null || activeFilters === void 0 ? void 0 : activeFilters.map(_ref2 => {
    let {
      value,
      id
    } = _ref2;
    const filterValue = Array.isArray(value) ? value.map(value => capitalized(value)).join(', ') : value;
    return /*#__PURE__*/react.createElement(Tag/* default */.A, {
      dataTrackTag: "active_filter",
      dataTrackValue: String(filterValue),
      clickableArea: "multi",
      ariaLabel: id,
      key: id,
      size: "sm",
      onClick: () => handleClick(id)
    }, "".concat(capitalized(id), ": ").concat(filterValue), /*#__PURE__*/react.createElement(TagCloseIcon/* default */.A, {
      onClick: () => handleClick(id)
    }));
  })), showClearButton ? /*#__PURE__*/react.createElement(Button/* default */.A, {
    size: "sm",
    variant: "ghost",
    onClick: onClickClear
  }, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "table.active_filters.clear_all"
  })) : null) : null;
};
TableActiveFilters.displayName = 'TableActiveFilters';
TableActiveFilters.id = 'TableActiveFilters';
/* harmony default export */ const components_TableActiveFilters = (TableActiveFilters);
try {
    // @ts-ignore
    TableActiveFilters.displayName = "TableActiveFilters";
    // @ts-ignore
    TableActiveFilters.__docgenInfo = { "description": "", "displayName": "TableActiveFilters", "props": { "showClearButton": { "defaultValue": { value: "false" }, "description": "", "name": "showClearButton", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "activeFilters": { "defaultValue": null, "description": "", "name": "activeFilters", "required": false, "type": { "name": "ColumnFilter[]" } }, "onClickClear": { "defaultValue": null, "description": "", "name": "onClickClear", "required": false, "type": { "name": "MouseEventHandler<HTMLButtonElement>" } }, "dataTrackTag": { "defaultValue": { value: "table_active_filters" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableActiveFilters/index.tsx#TableActiveFilters"] = { docgenInfo: TableActiveFilters.__docgenInfo, name: "TableActiveFilters", path: "../table/src/components/TableActiveFilters/index.tsx#TableActiveFilters" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Skeleton/index.js
var Skeleton = __webpack_require__("../feedback/dist/esm/src/components/Skeleton/index.js");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Skeleton/SkeletonSquare/index.js
var SkeletonSquare = __webpack_require__("../feedback/dist/esm/src/components/Skeleton/SkeletonSquare/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../table/src/constants.ts

const BLUR_2X = 'blur(2px)';
const PINNED_BG_COLORS = {
  white: themeVars/* colors */.Tj.white_90,
  grey_100: 'rgba(250, 250, 250, 0.9)',
  grey_200: 'rgba(245, 245, 245, 0.9)'
};
;// ../table/src/components/utils.ts
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

const getRowBackgroundColor = _ref => {
  let {
    tableStyle,
    row,
    isRowHovered = false
  } = _ref;
  if (tableStyle === 'zebra' && row) {
    return (row === null || row === void 0 ? void 0 : row.index) % 2 === 0 ? 'white' : 'grey_100';
  }
  return isRowHovered ? 'grey_100' : 'white';
};
const getPinnedStyles = _ref2 => {
  let {
    backgroundColor,
    column,
    pinnedType,
    isRowHovered,
    isHeader
  } = _ref2;
  const isPinned = column === null || column === void 0 ? void 0 : column.getIsPinned();
  if (!isPinned || !column) {
    return {
      backgroundColor
    };
  }
  const isLastLeftPinnedColumn = isPinned === 'left' && column.getIsLastColumn('left');
  const isFirstRightPinnedColumn = isPinned === 'right' && column.getIsFirstColumn('right');
  const pinnedBackgroundColor = PINNED_BG_COLORS[backgroundColor];
  const isDefault = pinnedType === 'default';
  return _objectSpread(_objectSpread(_objectSpread({
    left: isPinned === 'left' ? "".concat(column.getStart('left'), "px") : undefined,
    right: isPinned === 'right' ? "".concat(column.getAfter('right'), "px") : undefined,
    position: isPinned ? 'sticky' : undefined,
    zIndex: '1',
    minWidth: isDefault ? column.getSize() : undefined
  }, isLastLeftPinnedColumn && _objectSpread(_objectSpread({}, isDefault && {
    borderRightWidth: 'sm'
  }), {}, {
    borderTopLeftRadius: isHeader ? 'lg' : undefined
  })), isFirstRightPinnedColumn && _objectSpread(_objectSpread({}, isDefault && {
    borderLeftWidth: 'sm'
  }), {}, {
    borderTopRightRadius: isHeader ? 'lg' : undefined
  })), (isDefault || isRowHovered) && {
    background: pinnedBackgroundColor,
    style: {
      backdropFilter: BLUR_2X
    }
  });
};
;// ../table/src/components/TableData/index.tsx
const _excluded = ["children", "cell", "style", "pinnedType", "paddingX"],
  _excluded2 = ["style"];
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function TableData_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function TableData_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? TableData_ownKeys(Object(t), !0).forEach(function (r) {
      TableData_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : TableData_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function TableData_defineProperty(e, r, t) {
  return (r = TableData_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function TableData_toPropertyKey(t) {
  var i = TableData_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function TableData_toPrimitive(t, r) {
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





const TableData = _ref => {
  var _cell$row, _cell$column, _cell$column3;
  let {
      children,
      cell,
      style,
      pinnedType = 'default',
      paddingX = '4'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const {
    variant,
    loading,
    dynamicCellWidth,
    tableStyle,
    hoveredRowId
  } = useTableContext();
  const isRowHovered = hoveredRowId === (cell === null || cell === void 0 || (_cell$row = cell.row) === null || _cell$row === void 0 ? void 0 : _cell$row.id);
  const backgroundColor = getRowBackgroundColor({
    tableStyle,
    row: cell.row,
    isRowHovered
  });
  const isPinned = (_cell$column = cell.column) === null || _cell$column === void 0 ? void 0 : _cell$column.getIsPinned();
  const _getPinnedStyles = getPinnedStyles({
      backgroundColor,
      column: cell === null || cell === void 0 ? void 0 : cell.column,
      pinnedType,
      isRowHovered
    }),
    {
      style: pinnedStyle
    } = _getPinnedStyles,
    restPinnedProps = _objectWithoutProperties(_getPinnedStyles, _excluded2);
  const getPaddingY = () => {
    var _cell$column2;
    const isPinned = (_cell$column2 = cell.column) === null || _cell$column2 === void 0 ? void 0 : _cell$column2.getIsPinned();
    if (isPinned && pinnedType === 'noBorder') {
      return '0';
    }
    return variant === 'compact' ? '2' : '4';
  };
  return /*#__PURE__*/react.createElement(Box/* default */.A, _extends({
    boxSizing: "borderBox",
    as: "td",
    paddingX: pinnedType === 'noBorder' ? '0' : paddingX,
    paddingY: getPaddingY(),
    alignContent: "center",
    alignItems: "center",
    height: variant === 'compact' ? '44px' : '88px',
    style: TableData_objectSpread(TableData_objectSpread({}, style), pinnedStyle),
    width: dynamicCellWidth ? undefined : cell === null || cell === void 0 || (_cell$column3 = cell.column) === null || _cell$column3 === void 0 ? void 0 : _cell$column3.getSize(),
    borderColor: "border",
    borderStyle: "solid",
    borderTopWidth: "sm"
  }, rest, restPinnedProps), /*#__PURE__*/react.createElement(Box/* default */.A, {
    webkitLineClamp: 2,
    display: "webkitBox",
    webkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "b_sm",
    lineHeight: "b_sm",
    color: "grey_1200",
    height: isPinned && pinnedType === 'noBorder' ? '100%' : undefined
  }, loading ? /*#__PURE__*/react.createElement(Skeleton/* default */.A, {
    width: "100%"
  }, /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    height: "20px"
  })) : children));
};
TableData.displayName = 'TableData';
/* harmony default export */ const components_TableData = (TableData);
try {
    // @ts-ignore
    TableData.displayName = "TableData";
    // @ts-ignore
    TableData.__docgenInfo = { "description": "", "displayName": "TableData", "props": { "cell": { "defaultValue": null, "description": "", "name": "cell", "required": true, "type": { "name": "Cell<any, object>" } }, "pinnedType": { "defaultValue": { value: "default" }, "description": "", "name": "pinnedType", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"noBorder\"" }] } }, "paddingX": { "defaultValue": { value: "4" }, "description": "", "name": "paddingX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"3\"" }, { "value": "\"4\"" }] } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "style": { "defaultValue": null, "description": "", "name": "style", "required": false, "type": { "name": "CSSProperties" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "textAlign": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "textAlign", "required": false, "type": { "name": "enum", "value": [{ "value": "\"start\"" }, { "value": "\"end\"" }, { "value": "\"center\"" }] } }, "display": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "display", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"flex\"" }, { "value": "\"block\"" }, { "value": "\"inline\"" }, { "value": "\"grid\"" }, { "value": "\"contents\"" }, { "value": "\"initial\"" }, { "value": "\"inlineBlock\"" }, { "value": "\"inlineFlex\"" }, { "value": "\"inlineGrid\"" }, { "value": "\"webkitBox\"" }] } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifyContent": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifyContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableData/index.tsx#TableData"] = { docgenInfo: TableData.__docgenInfo, name: "TableData", path: "../table/src/components/TableData/index.tsx#TableData" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../table/src/components/TableRow/index.tsx
const TableRow_excluded = ["children", "onClick", "dataIndex", "row"];
function TableRow_extends() {
  return TableRow_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, TableRow_extends.apply(null, arguments);
}
function TableRow_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = TableRow_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function TableRow_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}



const TableRow = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      children,
      onClick,
      dataIndex,
      row
    } = _ref,
    rest = TableRow_objectWithoutProperties(_ref, TableRow_excluded);
  const {
    setHoveredRowId
  } = useTableContext();
  return /*#__PURE__*/react.createElement(Box/* default */.A, TableRow_extends({
    as: "tr",
    ref: ref,
    onClick: onClick,
    "data-index": dataIndex,
    onMouseEnter: () => {
      if (row) {
        setHoveredRowId(row === null || row === void 0 ? void 0 : row.id);
      }
    },
    onMouseLeave: () => {
      setHoveredRowId(undefined);
    }
  }, rest), children);
});
TableRow.displayName = 'TableRow';
/* harmony default export */ const components_TableRow = (TableRow);
try {
    // @ts-ignore
    TableRow.displayName = "TableRow";
    // @ts-ignore
    TableRow.__docgenInfo = { "description": "", "displayName": "TableRow", "props": { "dataIndex": { "defaultValue": null, "description": "", "name": "dataIndex", "required": false, "type": { "name": "number" } }, "row": { "defaultValue": null, "description": "", "name": "row", "required": false, "type": { "name": "Row<unknown>" } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "transform": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value> }`</pre>", "name": "transform", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "display": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "display", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"flex\"" }, { "value": "\"block\"" }, { "value": "\"inline\"" }, { "value": "\"grid\"" }, { "value": "\"contents\"" }, { "value": "\"initial\"" }, { "value": "\"inlineBlock\"" }, { "value": "\"inlineFlex\"" }, { "value": "\"inlineGrid\"" }, { "value": "\"webkitBox\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableRow/index.tsx#TableRow"] = { docgenInfo: TableRow.__docgenInfo, name: "TableRow", path: "../table/src/components/TableRow/index.tsx#TableRow" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../table/src/components/TableBody/TableBodyLoading/index.tsx





const TableBodyLoading = _ref => {
  let {
    height,
    position,
    initialRowCount = 0
  } = _ref;
  const {
    table
  } = useTableContext();
  const columns = table.getAllColumns();
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "tbody",
    height: height,
    position: position
  }, Array.from({
    length: initialRowCount
  }, (_, rowIndex) => /*#__PURE__*/react.createElement(components_TableRow, {
    key: "row-".concat(rowIndex)
  }, columns.map((_, colIndex) => /*#__PURE__*/react.createElement(components_TableData, {
    key: "data-".concat(rowIndex, "-").concat(colIndex),
    cell: {}
  })))));
};
/* harmony default export */ const TableBody_TableBodyLoading = (TableBodyLoading);
try {
    // @ts-ignore
    TableBodyLoading.displayName = "TableBodyLoading";
    // @ts-ignore
    TableBodyLoading.__docgenInfo = { "description": "", "displayName": "TableBodyLoading", "props": { "initialRowCount": { "defaultValue": { value: "0" }, "description": "", "name": "initialRowCount", "required": false, "type": { "name": "number" } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableBody/TableBodyLoading/index.tsx#TableBodyLoading"] = { docgenInfo: TableBodyLoading.__docgenInfo, name: "TableBodyLoading", path: "../table/src/components/TableBody/TableBodyLoading/index.tsx#TableBodyLoading" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../table/src/components/TableBody/index.tsx




const TableBody = _ref => {
  let {
    children,
    height,
    position,
    initialRowCount = 0
  } = _ref;
  const {
    table,
    loading
  } = useTableContext();
  const rowCount = table.getRowModel().rows.length;
  if (rowCount) {
    return /*#__PURE__*/react.createElement(Box/* default */.A, {
      as: "tbody",
      height: height,
      position: position
    }, children);
  }
  if (loading) {
    return /*#__PURE__*/react.createElement(TableBody_TableBodyLoading, {
      initialRowCount: initialRowCount,
      height: height,
      position: position
    });
  }
  return null;
};
TableBody.displayName = 'TableBody';
/* harmony default export */ const components_TableBody = (TableBody);
try {
    // @ts-ignore
    TableBody.displayName = "TableBody";
    // @ts-ignore
    TableBody.__docgenInfo = { "description": "", "displayName": "TableBody", "props": { "initialRowCount": { "defaultValue": { value: "0" }, "description": "", "name": "initialRowCount", "required": false, "type": { "name": "number" } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableBody/index.tsx#TableBody"] = { docgenInfo: TableBody.__docgenInfo, name: "TableBody", path: "../table/src/components/TableBody/index.tsx#TableBody" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../table/src/components/TableContainer/index.tsx



const TableContainer = _ref => {
  let {
    children,
    variant = 'default',
    tableStyle = 'default',
    table,
    loading,
    dynamicCellWidth = true,
    dataTestid,
    dataTrackTag = 'table_container',
    dataTrackValue
  } = _ref;
  const [hoveredRowId, setHoveredRowId] = (0,react.useState)(undefined);
  return /*#__PURE__*/react.createElement(TableContextProvider, {
    value: {
      variant,
      tableStyle,
      table,
      loading,
      dynamicCellWidth,
      hoveredRowId,
      setHoveredRowId
    }
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    overflow: "hidden",
    padding: "1",
    "data-testid": dataTestid
  }, children));
};
TableContainer.displayName = 'TableContainer';
/* harmony default export */ const components_TableContainer = (TableContainer);
try {
    // @ts-ignore
    TableContainer.displayName = "TableContainer";
    // @ts-ignore
    TableContainer.__docgenInfo = { "description": "", "displayName": "TableContainer", "props": { "tableStyle": { "defaultValue": { value: "default" }, "description": "", "name": "tableStyle", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"zebra\"" }] } }, "variant": { "defaultValue": { value: "default" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"compact\"" }] } }, "dataTrackTag": { "defaultValue": { value: "table_container" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "table": { "defaultValue": null, "description": "", "name": "table", "required": true, "type": { "name": "Table<any>" } }, "loading": { "defaultValue": null, "description": "", "name": "loading", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dynamicCellWidth": { "defaultValue": { value: "true" }, "description": "", "name": "dynamicCellWidth", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTestid": { "defaultValue": null, "description": "", "name": "dataTestid", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableContainer/index.tsx#TableContainer"] = { docgenInfo: TableContainer.__docgenInfo, name: "TableContainer", path: "../table/src/components/TableContainer/index.tsx#TableContainer" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../table/src/components/TableContainerFooter/index.tsx


const TableContainerFooter = _ref => {
  let {
    children,
    justifyContent = 'center'
  } = _ref;
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    color: "bodySecondary",
    lineHeight: "b_sm",
    fontSize: "b_xs",
    justifyContent: justifyContent,
    alignItems: "center",
    paddingY: "6"
  }, children);
};
TableContainerFooter.displayName = 'TableContainerFooter';
/* harmony default export */ const components_TableContainerFooter = (TableContainerFooter);
try {
    // @ts-ignore
    TableContainerFooter.displayName = "TableContainerFooter";
    // @ts-ignore
    TableContainerFooter.__docgenInfo = { "description": "", "displayName": "TableContainerFooter", "props": { "justifyContent": { "defaultValue": { value: "center" }, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifyContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableContainerFooter/index.tsx#TableContainerFooter"] = { docgenInfo: TableContainerFooter.__docgenInfo, name: "TableContainerFooter", path: "../table/src/components/TableContainerFooter/index.tsx#TableContainerFooter" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../table/src/components/table/src/components/TableContainerHeader/styles.ve.css.ts.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../table/src/components/TableContainerHeader/styles.ve.css.ts.vanilla.css","source":"Ll8xOXR0ZXpmMDplbXB0eSB7CiAgcGFkZGluZy1ib3R0b206IDA7Cn0="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../table/src/components/TableContainerHeader/styles.ve.css.ts

var containerHeaderClass = '_19ttezf0';
;// ../table/src/components/TableContainerHeader/index.tsx




const TableContainerHeader = _ref => {
  let {
    children
  } = _ref;
  const tableTitle = (0,findChildByType/* findChildByType */.B)(children, 'TableTitle');
  const tableHeaderActions = (0,findChildByType/* findChildByType */.B)(children, 'TableHeaderActions');
  const restChildren = (0,excludeChildrenByType/* excludeChildrenByType */.h)(children, ['TableTitle', 'TableHeaderActions']);
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "6",
    paddingBottom: "10",
    className: containerHeaderClass
  }, (tableTitle || tableHeaderActions) && /*#__PURE__*/react.createElement(Stack/* default */.A, {
    alignItems: "center",
    justifyContent: "spaceBetween",
    gap: "2"
  }, tableTitle, /*#__PURE__*/react.createElement(Container/* default */.A, {
    alignSelf: "flexStart"
  }, tableHeaderActions)), restChildren);
};
TableContainerHeader.displayName = 'TableContainerHeader';
/* harmony default export */ const components_TableContainerHeader = (TableContainerHeader);
try {
    // @ts-ignore
    TableContainerHeader.displayName = "TableContainerHeader";
    // @ts-ignore
    TableContainerHeader.__docgenInfo = { "description": "", "displayName": "TableContainerHeader", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableContainerHeader/index.tsx#TableContainerHeader"] = { docgenInfo: TableContainerHeader.__docgenInfo, name: "TableContainerHeader", path: "../table/src/components/TableContainerHeader/index.tsx#TableContainerHeader" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Center/index.js
var Center = __webpack_require__("../layout_components/dist/esm/src/components/Center/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Filter.js
var Filter = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Filter.js");
;// ../table/src/components/TableFilters/index.tsx





const TableFilters = _ref => {
  let {
    children,
    dataTrackTag = 'table_filters',
    dataTrackValue
  } = _ref;
  const tableSearchInput = (0,findChildByType/* findChildByType */.B)(children, 'TableSearchInput');
  const tableActiveFilters = (0,findChildByType/* findChildByType */.B)(children, 'TableActiveFilters');
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    direction: "column",
    gap: "4"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    justifyContent: "spaceBetween",
    wrap: "wrapReverse",
    width: "100%"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    alignItems: "center",
    gap: "4",
    wrap: "wrap"
  }, /*#__PURE__*/react.createElement(Center/* default */.A, {
    direction: "row",
    gap: "2",
    whiteSpace: "nowrap",
    color: "grey_1200"
  }, /*#__PURE__*/react.createElement(Filter/* default */.A, null), /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "table.filters.filter_by"
  })), (0,excludeChildrenByType/* excludeChildrenByType */.h)(children, ['TableSearchInput', 'TableActiveFilters'])), tableSearchInput), tableActiveFilters);
};
TableFilters.displayName = 'TableFilters';
/* harmony default export */ const components_TableFilters = (TableFilters);
try {
    // @ts-ignore
    TableFilters.displayName = "TableFilters";
    // @ts-ignore
    TableFilters.__docgenInfo = { "description": "", "displayName": "TableFilters", "props": { "dataTrackTag": { "defaultValue": { value: "table_filters" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": true, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableFilters/index.tsx#TableFilters"] = { docgenInfo: TableFilters.__docgenInfo, name: "TableFilters", path: "../table/src/components/TableFilters/index.tsx#TableFilters" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../table/src/components/TableHead/index.tsx
function TableHead_extends() {
  return TableHead_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, TableHead_extends.apply(null, arguments);
}


const TableHead = _ref => {
  let {
    children,
    isSticky
  } = _ref;
  return /*#__PURE__*/react.createElement(Box/* default */.A, TableHead_extends({
    as: "thead"
  }, isSticky && {
    position: 'sticky',
    top: 0,
    zIndex: '1'
  }), children);
};
TableHead.displayName = 'TableHead';
/* harmony default export */ const components_TableHead = (TableHead);
try {
    // @ts-ignore
    TableHead.displayName = "TableHead";
    // @ts-ignore
    TableHead.__docgenInfo = { "description": "", "displayName": "TableHead", "props": { "isSticky": { "defaultValue": null, "description": "", "name": "isSticky", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableHead/index.tsx#TableHead"] = { docgenInfo: TableHead.__docgenInfo, name: "TableHead", path: "../table/src/components/TableHead/index.tsx#TableHead" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/ArrowDown.js
var ArrowDown = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ArrowDown.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/ArrowUp.js
var ArrowUp = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ArrowUp.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useHover/index.js
var useHover = __webpack_require__("../hooks/dist/esm/src/hooks/useHover/index.js");
;// ../table/src/components/TableHeader/index.tsx
const TableHeader_excluded = ["style"];
function TableHeader_extends() {
  return TableHeader_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, TableHeader_extends.apply(null, arguments);
}
function TableHeader_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function TableHeader_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? TableHeader_ownKeys(Object(t), !0).forEach(function (r) {
      TableHeader_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : TableHeader_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function TableHeader_defineProperty(e, r, t) {
  return (r = TableHeader_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function TableHeader_toPropertyKey(t) {
  var i = TableHeader_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function TableHeader_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function TableHeader_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = TableHeader_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function TableHeader_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}







const TableHeader = _ref => {
  let {
    children,
    column,
    headerPinned = true,
    isSortable,
    width,
    onClick,
    flex,
    justifyContent,
    paddingX = '4'
  } = _ref;
  const backgroundColor = 'grey_200';
  const {
    variant,
    dynamicCellWidth
  } = useTableContext();
  const _ref2 = headerPinned ? getPinnedStyles({
      backgroundColor,
      column,
      pinnedType: 'default',
      isHeader: true
    }) : {},
    {
      style = {}
    } = _ref2,
    restPinnedProps = TableHeader_objectWithoutProperties(_ref2, TableHeader_excluded);
  const {
    hovered,
    onMouseEnter,
    onMouseLeave
  } = (0,useHover/* default */.A)();
  const sortedState = column === null || column === void 0 ? void 0 : column.getIsSorted();
  return /*#__PURE__*/react.createElement(Box/* default */.A, TableHeader_extends({
    as: "th",
    boxSizing: "borderBox",
    style: TableHeader_objectSpread({
      verticalAlign: 'initial',
      alignContent: 'center',
      textAlign: 'initial'
    }, style),
    paddingY: variant === 'compact' ? '2.5' : '4',
    width: dynamicCellWidth ? width : column === null || column === void 0 ? void 0 : column.getSize(),
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    cursor: isSortable ? 'pointer' : undefined,
    paddingX: paddingX,
    whiteSpace: "nowrap",
    fontWeight: "semibold",
    color: "grey_1200",
    fontSize: "b_sm",
    lineHeight: "b_sm",
    borderColor: "border",
    borderStyle: "solid",
    backgroundColor: backgroundColor,
    flex: flex,
    onClick: onClick
  }, restPinnedProps), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    alignItems: "center",
    justifyContent: justifyContent,
    gap: "1"
  }, children, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    position: "relative",
    alignItems: "center"
  }, (hovered || sortedState) && isSortable && /*#__PURE__*/react.createElement(Center/* default */.A, {
    as: "span",
    position: "absolute"
  }, sortedState === 'desc' ? /*#__PURE__*/react.createElement(ArrowDown/* default */.A, null) : /*#__PURE__*/react.createElement(ArrowUp/* default */.A, null)))));
};
TableHeader.displayName = 'TableHeader';
/* harmony default export */ const components_TableHeader = (TableHeader);
try {
    // @ts-ignore
    TableHeader.displayName = "TableHeader";
    // @ts-ignore
    TableHeader.__docgenInfo = { "description": "", "displayName": "TableHeader", "props": { "column": { "defaultValue": null, "description": "", "name": "column", "required": false, "type": { "name": "Column<any, unknown>" } }, "headerPinned": { "defaultValue": { value: "true" }, "description": "", "name": "headerPinned", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isSortable": { "defaultValue": null, "description": "", "name": "isSortable", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "paddingX": { "defaultValue": { value: "4" }, "description": "", "name": "paddingX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"3\"" }, { "value": "\"4\"" }] } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifyContent": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifyContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableHeader/index.tsx#TableHeader"] = { docgenInfo: TableHeader.__docgenInfo, name: "TableHeader", path: "../table/src/components/TableHeader/index.tsx#TableHeader" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../table/src/components/TableHeaderActions/index.tsx


const TableHeaderActions = _ref => {
  let {
    children,
    dataTrackTag = 'table_header_actions',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Center/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    direction: "row",
    gap: "3"
  }, children);
};
TableHeaderActions.displayName = 'TableHeaderActions';
TableHeaderActions.id = 'TableHeaderActions';
/* harmony default export */ const components_TableHeaderActions = (TableHeaderActions);
try {
    // @ts-ignore
    TableHeaderActions.displayName = "TableHeaderActions";
    // @ts-ignore
    TableHeaderActions.__docgenInfo = { "description": "", "displayName": "TableHeaderActions", "props": { "dataTrackTag": { "defaultValue": { value: "table_header_actions" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": true, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableHeaderActions/index.tsx#TableHeaderActions"] = { docgenInfo: TableHeaderActions.__docgenInfo, name: "TableHeaderActions", path: "../table/src/components/TableHeaderActions/index.tsx#TableHeaderActions" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../table/src/components/TableItemsCounter/index.tsx




const TableItemsCounter = _ref => {
  let {
    itemCount,
    copies = {
      itemsCount: count => /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
        k: "table.items_counter",
        params: {
          count
        }
      })
    }
  } = _ref;
  const {
    table
  } = useTableContext();
  const currentPageRows = table.getPaginationRowModel().rows.length;
  return /*#__PURE__*/react.createElement(Text/* default */.A, {
    color: "bodySecondary",
    paddingBottom: "4"
  }, copies.itemsCount(itemCount || currentPageRows));
};
TableItemsCounter.displayName = 'TableItemsCounter';
/* harmony default export */ const components_TableItemsCounter = (TableItemsCounter);
try {
    // @ts-ignore
    TableItemsCounter.displayName = "TableItemsCounter";
    // @ts-ignore
    TableItemsCounter.__docgenInfo = { "description": "", "displayName": "TableItemsCounter", "props": { "itemCount": { "defaultValue": null, "description": "", "name": "itemCount", "required": false, "type": { "name": "number" } }, "copies": { "defaultValue": { value: "{ itemsCount: (count) => <I18n k=\"table.items_counter\" params={{ count }} /> }" }, "description": "", "name": "copies", "required": false, "type": { "name": "{ itemsCount: (count: number) => ReactNode; }" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableItemsCounter/index.tsx#TableItemsCounter"] = { docgenInfo: TableItemsCounter.__docgenInfo, name: "TableItemsCounter", path: "../table/src/components/TableItemsCounter/index.tsx#TableItemsCounter" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../button/dist/esm/src/components/ChevronButton/index.js + 1 modules
var ChevronButton = __webpack_require__("../button/dist/esm/src/components/ChevronButton/index.js");
;// ../table/src/components/TablePagination/index.tsx







const TablePagination = _ref => {
  var _table$getPaginationR;
  let {
    dataTrackTag = 'table_pagination',
    dataTrackValue
  } = _ref;
  const {
    table,
    loading
  } = useTableContext();
  const {
    pageIndex,
    pageSize
  } = table.getState().pagination;
  const initialRender = !table.getRowModel().rows.length && loading;
  const currentPageRowCount = table === null || table === void 0 || (_table$getPaginationR = table.getPaginationRowModel()) === null || _table$getPaginationR === void 0 ? void 0 : _table$getPaginationR.rows.length;
  const startIndex = pageIndex * pageSize + 1;
  const endIndex = pageIndex * pageSize + currentPageRowCount;
  const totalRows = table.getRowCount();
  return /*#__PURE__*/react.createElement(Center/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    direction: "row",
    gap: "4"
  }, initialRender ? /*#__PURE__*/react.createElement(Skeleton/* default */.A, null, /*#__PURE__*/react.createElement(SkeletonSquare/* default */.A, {
    height: "22px",
    width: "180px"
  })) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(ChevronButton/* default */.A, {
    ariaLabel: "prev",
    size: "xs",
    shape: "circle",
    chevronDirection: "left",
    onClick: () => table.previousPage(),
    disabled: !table.getCanPreviousPage() || loading,
    dataTrackTag: "table_pagination_previous_button"
  }), /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    whiteSpace: "nowrap"
  }, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "table.pagination.page_count",
    params: {
      startIndex,
      endIndex,
      totalRows
    }
  })), /*#__PURE__*/react.createElement(ChevronButton/* default */.A, {
    "aria-label": "next",
    size: "xs",
    shape: "circle",
    chevronDirection: "right",
    onClick: () => table.nextPage(),
    disabled: !table.getCanNextPage() || loading,
    dataTrackTag: "table_pagination_next_button"
  })));
};
TablePagination.displayName = 'TablePagination';
/* harmony default export */ const components_TablePagination = (TablePagination);
try {
    // @ts-ignore
    TablePagination.displayName = "TablePagination";
    // @ts-ignore
    TablePagination.__docgenInfo = { "description": "", "displayName": "TablePagination", "props": { "dataTrackTag": { "defaultValue": { value: "table_pagination" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TablePagination/index.tsx#TablePagination"] = { docgenInfo: TablePagination.__docgenInfo, name: "TablePagination", path: "../table/src/components/TablePagination/index.tsx#TablePagination" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Search.js
var Search = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Search.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Input/InputGroup/index.js + 2 modules
var InputGroup = __webpack_require__("../inputs/dist/esm/src/components/Input/InputGroup/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Input/index.js
var Input = __webpack_require__("../inputs/dist/esm/src/components/Input/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Input/constants.js
var constants = __webpack_require__("../inputs/dist/esm/src/components/Input/constants.js");
;// ../inputs/dist/esm/src/components/Input/InputPrefix/index.js




const InputPrefix = _ref => {
  let {
    children,
    disabled,
    dataTrackTag = 'input_prefix',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Center/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    paddingRight: "1",
    height: "100%"
  }, (0,render_children/* renderChildren */.s)(children, {
    disabled
  }));
};
InputPrefix.displayName = constants/* PREFIX_ID */.fS;
Object.assign(InputPrefix, {
  id: constants/* PREFIX_ID */.fS
});
/* harmony default export */ const Input_InputPrefix = (InputPrefix);
;
InputPrefix.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "InputPrefix"
};
;// ../table/src/components/TableSearchInput/index.tsx
const TableSearchInput_excluded = ["onChange", "value", "dataTrackTag"];
function TableSearchInput_extends() {
  return TableSearchInput_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, TableSearchInput_extends.apply(null, arguments);
}
function TableSearchInput_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = TableSearchInput_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function TableSearchInput_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}




const TableSearchInput = _ref => {
  let {
      onChange,
      value = '',
      dataTrackTag = 'table_search_input'
    } = _ref,
    rest = TableSearchInput_objectWithoutProperties(_ref, TableSearchInput_excluded);
  return /*#__PURE__*/react.createElement(InputGroup/* default */.A, TableSearchInput_extends({
    dataTrackTag: dataTrackTag,
    onChange: onChange,
    value: value,
    width: {
      default: '100%',
      sm: 'unset'
    }
  }, rest), /*#__PURE__*/react.createElement(Input/* default */.A, {
    placeholder: (0,translate/* translate */.T)('table.search_input.search')
  }), /*#__PURE__*/react.createElement(Input_InputPrefix, null, /*#__PURE__*/react.createElement(Search/* default */.A, null)));
};
TableSearchInput.displayName = 'TableSearchInput';
TableSearchInput.id = 'TableSearchInput';
/* harmony default export */ const components_TableSearchInput = (TableSearchInput);
try {
    // @ts-ignore
    TableSearchInput.displayName = "TableSearchInput";
    // @ts-ignore
    TableSearchInput.__docgenInfo = { "description": "", "displayName": "TableSearchInput", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableSearchInput/index.tsx#TableSearchInput"] = { docgenInfo: TableSearchInput.__docgenInfo, name: "TableSearchInput", path: "../table/src/components/TableSearchInput/index.tsx#TableSearchInput" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../table/src/components/TableTitle/index.tsx


const TableTitle = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_xl",
    fontWeight: "bold"
  }, children);
};
TableTitle.displayName = 'TableTitle';
TableTitle.id = 'TableTitle';
/* harmony default export */ const components_TableTitle = (TableTitle);
try {
    // @ts-ignore
    TableTitle.displayName = "TableTitle";
    // @ts-ignore
    TableTitle.__docgenInfo = { "description": "", "displayName": "TableTitle", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableTitle/index.tsx#TableTitle"] = { docgenInfo: TableTitle.__docgenInfo, name: "TableTitle", path: "../table/src/components/TableTitle/index.tsx#TableTitle" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../disclosure/dist/esm/src/components/Collapsible/index.js
var Collapsible = __webpack_require__("../disclosure/dist/esm/src/components/Collapsible/index.js");
;// ../table/src/components/TableRowCollapsible/utils.ts

const getBorderLeftStyle = expanded => {
  const {
    /* animationDuration */ "H9": {
      slow1,
      fast1
    },
    /* animationTiming */ "fC": {
      easeInOut
    },
    /* colors */ "Tj": {
      grey_1200
    }
  } = themeVars;
  const boxShadowLeft = expanded ? "inset 4px 0 0 ".concat(grey_1200) : undefined;
  const transition = !expanded ? "padding ".concat(slow1, " ").concat(easeInOut, ", box-shadow ").concat(slow1, " ").concat(easeInOut) : "padding ".concat(fast1, " ").concat(easeInOut, ", box-shadow ").concat(fast1, " ").concat(easeInOut);
  return {
    boxShadow: boxShadowLeft,
    transition
  };
};
;// ../table/src/components/TableRowCollapsible/index.tsx
function TableRowCollapsible_extends() {
  return TableRowCollapsible_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, TableRowCollapsible_extends.apply(null, arguments);
}







const TableRowCollapsible = _ref => {
  let {
    children,
    expanded = false,
    onClick,
    row,
    dataTrackTag = 'table_row_collapsible',
    dataTrackValue
  } = _ref;
  const {
    tableStyle,
    setHoveredRowId,
    hoveredRowId
  } = useTableContext();
  const isRowHovered = hoveredRowId === (row === null || row === void 0 ? void 0 : row.id);
  const style = getBorderLeftStyle(expanded);
  const backgroundColor = getRowBackgroundColor({
    tableStyle,
    row,
    isRowHovered
  });
  const tableRowCollapsibleContent = (0,findChildByType/* findChildByType */.B)(children, 'TableRowCollapsibleContent');
  const rowEventHandlers = {
    onMouseEnter: () => {
      if (row) {
        setHoveredRowId(row === null || row === void 0 ? void 0 : row.id);
      }
    },
    onMouseLeave: () => {
      setHoveredRowId(undefined);
    },
    onClick
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Box/* default */.A, TableRowCollapsible_extends({
    as: "tr",
    borderStyle: "solid",
    borderColor: "border",
    borderTopWidth: "sm",
    backgroundColor: backgroundColor,
    cursor: "pointer",
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, rowEventHandlers), react.Children.map((0,excludeChildrenByType/* excludeChildrenByType */.h)(children, 'TableRowCollapsibleContent'), (child, index) => index === 0 ? (0,render_children/* renderChildren */.s)(child, {
    row,
    style,
    isRowHovered
  }) : child)), /*#__PURE__*/react.createElement(Box/* default */.A, TableRowCollapsible_extends({
    as: "tr",
    backgroundColor: backgroundColor,
    cursor: "pointer",
    boxSizing: "borderBox"
  }, rowEventHandlers), /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "td",
    style: style,
    paddingY: expanded ? '3' : undefined,
    paddingX: expanded ? '4' : undefined,
    colSpan: row && row.getAllCells().length
  }, /*#__PURE__*/react.createElement(Collapsible/* default */.A, {
    expanded: expanded
  }, /*#__PURE__*/react.createElement(react.Fragment, null, tableRowCollapsibleContent)))));
};
TableRowCollapsible.displayName = 'TableRowCollapsible';
/* harmony default export */ const components_TableRowCollapsible = (TableRowCollapsible);
try {
    // @ts-ignore
    TableRowCollapsible.displayName = "TableRowCollapsible";
    // @ts-ignore
    TableRowCollapsible.__docgenInfo = { "description": "", "displayName": "TableRowCollapsible", "props": { "row": { "defaultValue": null, "description": "", "name": "row", "required": false, "type": { "name": "Row<object>" } }, "expanded": { "defaultValue": { value: "false" }, "description": "", "name": "expanded", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTrackTag": { "defaultValue": { value: "table_row_collapsible" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableRowCollapsible/index.tsx#TableRowCollapsible"] = { docgenInfo: TableRowCollapsible.__docgenInfo, name: "TableRowCollapsible", path: "../table/src/components/TableRowCollapsible/index.tsx#TableRowCollapsible" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../disclosure/dist/esm/src/components/Collapsible/CollapsibleContent/index.js
var CollapsibleContent = __webpack_require__("../disclosure/dist/esm/src/components/Collapsible/CollapsibleContent/index.js");
;// ../table/src/components/TableRowCollapsible/TableRowCollapsibleContent/index.tsx


const TableRowCollapsibleContent = _ref => {
  let {
    children,
    dataTrackTag = 'table_row_collapsible_content',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(CollapsibleContent/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, children);
};
TableRowCollapsibleContent.displayName = 'TableRowCollapsibleContent';
TableRowCollapsibleContent.id = 'TableRowCollapsibleContent';
/* harmony default export */ const TableRowCollapsible_TableRowCollapsibleContent = (TableRowCollapsibleContent);
try {
    // @ts-ignore
    TableRowCollapsibleContent.displayName = "TableRowCollapsibleContent";
    // @ts-ignore
    TableRowCollapsibleContent.__docgenInfo = { "description": "", "displayName": "TableRowCollapsibleContent", "props": { "dataTrackTag": { "defaultValue": { value: "table_row_collapsible_content" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableRowCollapsible/TableRowCollapsibleContent/index.tsx#TableRowCollapsibleContent"] = { docgenInfo: TableRowCollapsibleContent.__docgenInfo, name: "TableRowCollapsibleContent", path: "../table/src/components/TableRowCollapsible/TableRowCollapsibleContent/index.tsx#TableRowCollapsibleContent" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Checkbox/index.js + 2 modules
var Checkbox = __webpack_require__("../inputs/dist/esm/src/components/Checkbox/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Ellipsis.js
var Ellipsis = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Ellipsis.js");
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/Dropdown/index.js + 3 modules
var Dropdown = __webpack_require__("../dropdown/dist/esm/src/components/Dropdown/index.js");
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/DropdownAnchor/index.js
var DropdownAnchor = __webpack_require__("../dropdown/dist/esm/src/components/DropdownAnchor/index.js");
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/DropdownContent/index.js + 7 modules
var DropdownContent = __webpack_require__("../dropdown/dist/esm/src/components/DropdownContent/index.js");
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/DropdownMenu/index.js
var DropdownMenu = __webpack_require__("../dropdown/dist/esm/src/components/DropdownMenu/index.js");
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/DropdownMenu/MenuItem/index.js + 1 modules
var MenuItem = __webpack_require__("../dropdown/dist/esm/src/components/DropdownMenu/MenuItem/index.js");
// EXTERNAL MODULE: ../tooltip/dist/esm/src/components/Tooltip/index.js
var Tooltip = __webpack_require__("../tooltip/dist/esm/src/components/Tooltip/index.js");
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/Status/index.js + 1 modules
var Status = __webpack_require__("../data_display/dist/esm/src/components/Status/index.js");
;// ../table/src/components/TableActionsCell/index.tsx
const TableActionsCell_excluded = ["children", "cell", "dataTrackTag"];
function TableActionsCell_extends() {
  return TableActionsCell_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, TableActionsCell_extends.apply(null, arguments);
}
function TableActionsCell_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = TableActionsCell_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function TableActionsCell_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}






const TableActionsCell = _ref => {
  var _cell$row;
  let {
      children,
      cell,
      dataTrackTag = 'table_actions_cell'
    } = _ref,
    rest = TableActionsCell_objectWithoutProperties(_ref, TableActionsCell_excluded);
  const {
    tableStyle,
    hoveredRowId
  } = useTableContext();
  const isRowHovered = hoveredRowId === (cell === null || cell === void 0 || (_cell$row = cell.row) === null || _cell$row === void 0 ? void 0 : _cell$row.id);
  const tableActionsCellFloating = (0,findChildByType/* findChildByType */.B)(children, 'TableActionsCellFloating');
  const backgroundColor = getRowBackgroundColor({
    tableStyle,
    row: cell.row,
    isRowHovered
  });
  return /*#__PURE__*/react.createElement(Stack/* default */.A, TableActionsCell_extends({
    gap: "0",
    direction: "rowReverse",
    alignItems: "center",
    height: "100%",
    dataTrackTag: dataTrackTag
  }, rest), /*#__PURE__*/react.createElement(Center/* default */.A, {
    paddingRight: "3",
    paddingLeft: "2",
    height: "100%",
    background: !isRowHovered ? PINNED_BG_COLORS[backgroundColor] : undefined,
    style: !isRowHovered ? {
      backdropFilter: BLUR_2X
    } : undefined
  }, (0,excludeChildrenByType/* excludeChildrenByType */.h)(children, 'TableActionsCellFloating')), tableActionsCellFloating && /*#__PURE__*/react.createElement(Container/* default */.A, {
    visibility: isRowHovered ? 'visible' : 'hidden',
    paddingLeft: "3"
  }, tableActionsCellFloating));
};
TableActionsCell.displayName = 'TableActionsCell';
/* harmony default export */ const components_TableActionsCell = (TableActionsCell);
try {
    // @ts-ignore
    TableActionsCell.displayName = "TableActionsCell";
    // @ts-ignore
    TableActionsCell.__docgenInfo = { "description": "", "displayName": "TableActionsCell", "props": { "cell": { "defaultValue": null, "description": "", "name": "cell", "required": true, "type": { "name": "Cell<any, object>" } }, "display": { "defaultValue": null, "description": "", "name": "display", "required": false, "type": { "name": "enum", "value": [{ "value": "\"flex\"" }, { "value": "\"inlineFlex\"" }] } }, "as": { "defaultValue": null, "description": "", "name": "as", "required": false, "type": { "name": "enum", "value": [{ "value": "\"label\"" }, { "value": "\"span\"" }, { "value": "\"summary\"" }, { "value": "\"a\"" }, { "value": "\"address\"" }, { "value": "\"article\"" }, { "value": "\"aside\"" }, { "value": "\"details\"" }, { "value": "\"div\"" }, { "value": "\"figcaption\"" }, { "value": "\"figure\"" }, { "value": "\"footer\"" }, { "value": "\"header\"" }, { "value": "\"li\"" }, { "value": "\"main\"" }, { "value": "\"nav\"" }, { "value": "\"section\"" }, { "value": "\"ul\"" }] } }, "centered": { "defaultValue": null, "description": "", "name": "centered", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "color": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "color", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"heading\"" }, { "value": "\"bodyPrimary\"" }, { "value": "\"bodySecondary\"" }, { "value": "\"linkPrimary\"" }, { "value": "\"linkSecondary\"" }] } }, "fill": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "fill", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "background": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "background", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "backgroundColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "backgroundColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"background\"" }, { "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "columnGap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "columnGap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "rowGap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "rowGap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "gap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "gap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "borderRadius": { "defaultValue": null, "description": "", "name": "borderRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopLeftRadius": { "defaultValue": null, "description": "", "name": "borderTopLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderTopRightRadius": { "defaultValue": null, "description": "", "name": "borderTopRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomRightRadius": { "defaultValue": null, "description": "", "name": "borderBottomRightRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "borderBottomLeftRadius": { "defaultValue": null, "description": "", "name": "borderBottomLeftRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"none\"" }, { "value": "\"circle\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }, { "value": "\"2xl\"" }, { "value": "\"3xl\"" }] } }, "boxShadow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "boxShadow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "borderStyle": { "defaultValue": null, "description": "", "name": "borderStyle", "required": false, "type": { "name": "enum", "value": [{ "value": "\"dashed\"" }, { "value": "\"solid\"" }] } }, "borderColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "borderColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"border\"" }] } }, "borderWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderTopWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderTopWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderRightWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderRightWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderBottomWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderBottomWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "borderLeftWidth": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, md = 2px, lg = 3px, xl = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "borderLeftWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "0" }, { "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"xl\"" }] } }, "href": { "defaultValue": null, "description": "", "name": "href", "required": false, "type": { "name": "string" } }, "target": { "defaultValue": null, "description": "", "name": "target", "required": false, "type": { "name": "enum", "value": [{ "value": "\"_self\"" }, { "value": "\"_blank\"" }, { "value": "\"_parent\"" }, { "value": "\"_top\"" }] } }, "filter": { "defaultValue": null, "description": "", "name": "filter", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "dropShadow": { "defaultValue": null, "description": "", "name": "dropShadow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"aa\"" }, { "value": "\"z1\"" }, { "value": "\"z2\"" }, { "value": "\"z3\"" }, { "value": "\"z4\"" }, { "value": "\"z5\"" }] } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "style": { "defaultValue": null, "description": "", "name": "style", "required": false, "type": { "name": "CSSProperties" } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "padding": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "padding", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "paddingTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "paddingTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "cursor": { "defaultValue": null, "description": "", "name": "cursor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"auto\"" }, { "value": "\"progress\"" }, { "value": "\"pointer\"" }, { "value": "\"copy\"" }, { "value": "\"wait\"" }, { "value": "\"move\"" }, { "value": "\"grab\"" }, { "value": "\"grabbing\"" }, { "value": "\"zoomIn\"" }, { "value": "\"zoomOut\"" }, { "value": "\"notAllowed\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "userSelect": { "defaultValue": null, "description": "", "name": "userSelect", "required": false, "type": { "name": "enum", "value": [{ "value": "\"all\"" }, { "value": "\"none\"" }, { "value": "\"auto\"" }, { "value": "\"text\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "textAlign": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "textAlign", "required": false, "type": { "name": "enum", "value": [{ "value": "\"start\"" }, { "value": "\"end\"" }, { "value": "\"center\"" }] } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "htmlHidden": { "defaultValue": null, "description": "", "name": "htmlHidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "false" }, { "value": "true" }] } }, "outlineWidth": { "defaultValue": null, "description": "Supported values: sm = 1px, md = 2px<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineWidth", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }] } }, "outlineOffset": { "defaultValue": null, "description": "Supported values: 0, sm = 1px, lg = 4px<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineOffset", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"lg\"" }, { "value": "\"0\"" }] } }, "outlineColor": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }, { "value": "\"validationError\"" }, { "value": "\"validationInformation\"" }, { "value": "\"validationSuccess\"" }, { "value": "\"validationWarning\"" }, { "value": "\"validationErrorDark\"" }, { "value": "\"validationInformationDark\"" }, { "value": "\"validationSuccessDark\"" }, { "value": "\"validationWarningDark\"" }, { "value": "\"border\"" }] } }, "outlineStyle": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, default: <value>, focus: <value>, focusVisible: <value>, focusWithin: <value> }`</pre>", "name": "outlineStyle", "required": false, "type": { "name": "enum", "value": [{ "value": "\"solid\"" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "transform": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value> }`</pre>", "name": "transform", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }] } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "pointerEvents": { "defaultValue": null, "description": "", "name": "pointerEvents", "required": false, "type": { "name": "\"none\"" } }, "zIndex": { "defaultValue": null, "description": "", "name": "zIndex", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"2\"" }, { "value": "\"overlay\"" }, { "value": "\"-1\"" }, { "value": "\"overlayBackground\"" }, { "value": "\"popover\"" }, { "value": "\"toast\"" }, { "value": "\"tooltip\"" }, { "value": "\"educationTooltip\"" }] } }, "opacity": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, hover: <value>, active: <value>, focus: <value> }`</pre>", "name": "opacity", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"0.1\"" }, { "value": "\"0.2\"" }, { "value": "\"0.6\"" }, { "value": "\"0.8\"" }, { "value": "\"0.9\"" }] } }, "transition": { "defaultValue": null, "description": "", "name": "transition", "required": false, "type": { "name": "CSSProperty" } }, "fontWeight": { "defaultValue": null, "description": "", "name": "fontWeight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"bold\"" }, { "value": "\"light\"" }, { "value": "\"inherit\"" }, { "value": "\"normal\"" }, { "value": "\"semibold\"" }] } }, "lineHeight": { "defaultValue": null, "description": "Supported values: b_xxs = 14px, b_xs = 18px, b_sm = 22px, b_md = 24px, b_lg = 26px, b_xl = 28px, b_xxl = 32px,\nh_xxs = 22px, h_xs = 25px, h_sm = 28px, h_md = 32px, h_lg = 36px h_xl = 38px, h_xxl = 48px, h_3xl = 56px, h_4xl = 66px, h_5xl = 74px, h_6xl = 92px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "lineHeight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"h_3xl\"" }, { "value": "\"h_4xl\"" }, { "value": "\"h_5xl\"" }, { "value": "\"h_6xl\"" }, { "value": "\"h_xxs\"" }, { "value": "\"h_xs\"" }, { "value": "\"h_sm\"" }, { "value": "\"h_md\"" }, { "value": "\"h_lg\"" }, { "value": "\"h_xl\"" }, { "value": "\"h_xxl\"" }, { "value": "\"b_xs\"" }, { "value": "\"b_sm\"" }, { "value": "\"b_md\"" }, { "value": "\"b_lg\"" }, { "value": "\"b_xl\"" }, { "value": "\"b_xxl\"" }, { "value": "\"b_xxs\"" }] } }, "fontSize": { "defaultValue": null, "description": "Supported values: b_xxs = 10px, b_xs = 12px, b_sm = 14px, b_md = 16px, b_lg = 18px, b_xl = 20px, b_xxl = 24px,\nh_xxs = 16px, h_xs = 18px, h_sm = 20px, h_md = 24px, h_lg = 28px h_xl = 32px, h_xxl = 40px, h_3xl = 48px, h_4xl = 56px, h_5xl = 64px, h_6xl = 80px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "fontSize", "required": false, "type": { "name": "enum", "value": [{ "value": "\"h_3xl\"" }, { "value": "\"h_4xl\"" }, { "value": "\"h_5xl\"" }, { "value": "\"h_6xl\"" }, { "value": "\"h_xxs\"" }, { "value": "\"h_xs\"" }, { "value": "\"h_sm\"" }, { "value": "\"h_md\"" }, { "value": "\"h_lg\"" }, { "value": "\"h_xl\"" }, { "value": "\"h_xxl\"" }, { "value": "\"b_xs\"" }, { "value": "\"b_sm\"" }, { "value": "\"b_md\"" }, { "value": "\"b_lg\"" }, { "value": "\"b_xl\"" }, { "value": "\"b_xxl\"" }, { "value": "\"b_xxs\"" }] } }, "textOverflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "textOverflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"unset\"" }, { "value": "\"ellipsis\"" }] } }, "whiteSpace": { "defaultValue": null, "description": "", "name": "whiteSpace", "required": false, "type": { "name": "enum", "value": [{ "value": "\"unset\"" }, { "value": "\"nowrap\"" }, { "value": "\"preWrap\"" }] } }, "dataTrackTag": { "defaultValue": { value: "table_actions_cell" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "wrap": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "wrap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"wrap\"" }, { "value": "\"nowrap\"" }, { "value": "\"wrapReverse\"" }] } }, "justifyContent": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifyContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignItems": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignItems", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignContent": { "defaultValue": null, "description": "", "name": "alignContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "direction": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "direction", "required": false, "type": { "name": "enum", "value": [{ "value": "\"column\"" }, { "value": "\"row\"" }, { "value": "\"rowReverse\"" }, { "value": "\"columnReverse\"" }] } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableActionsCell/index.tsx#TableActionsCell"] = { docgenInfo: TableActionsCell.__docgenInfo, name: "TableActionsCell", path: "../table/src/components/TableActionsCell/index.tsx#TableActionsCell" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../table/src/components/TableActionsCellFloating/index.tsx


const TableActionsCellFloating = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/react.createElement(Stack/* default */.A, null, children);
};
TableActionsCellFloating.displayName = 'TableActionsCellFloating';
TableActionsCellFloating.id = 'TableActionsCellFloating';
/* harmony default export */ const components_TableActionsCellFloating = (TableActionsCellFloating);
try {
    // @ts-ignore
    TableActionsCellFloating.displayName = "TableActionsCellFloating";
    // @ts-ignore
    TableActionsCellFloating.__docgenInfo = { "description": "", "displayName": "TableActionsCellFloating", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableActionsCellFloating/index.tsx#TableActionsCellFloating"] = { docgenInfo: TableActionsCellFloating.__docgenInfo, name: "TableActionsCellFloating", path: "../table/src/components/TableActionsCellFloating/index.tsx#TableActionsCellFloating" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../table/src/components/stories/helpers.tsx










const CompletedStatus = () => /*#__PURE__*/react.createElement(Status/* default */.A, {
  type: "success"
}, "COMPLETED");
const InProgressStatus = () => /*#__PURE__*/react.createElement(Status/* default */.A, {
  type: "info"
}, "IN PROGRESS");
const columnsActions = {
  accessorKey: 'actions',
  size: 50,
  header: () => /*#__PURE__*/react.createElement(react.Fragment, null),
  cell: info => /*#__PURE__*/react.createElement(components_TableActionsCell, {
    cell: info.cell
  }, /*#__PURE__*/react.createElement(Dropdown/* default */.A, null, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    size: "sm",
    variant: "ghost",
    "aria-label": ""
  }, /*#__PURE__*/react.createElement(Ellipsis/* default */.A, null))), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, {
    appendToBody: true
  }, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 3")))), /*#__PURE__*/react.createElement(components_TableActionsCellFloating, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
    size: "sm"
  }, "Button")))
};
const columns = [{
  accessorKey: 'id',
  header: 'ID'
}, {
  accessorKey: 'firstName',
  cell: info => info.getValue(),
  header: () => /*#__PURE__*/react.createElement("span", null, "First Name")
}, {
  accessorFn: row => row.lastName,
  id: 'lastName',
  cell: info => info.getValue(),
  header: () => /*#__PURE__*/react.createElement("span", null, "Last Name")
}, {
  accessorKey: 'age',
  header: () => 'Age'
}, {
  accessorKey: 'visits',
  header: () => /*#__PURE__*/react.createElement("span", null, "Visits")
}, {
  accessorKey: 'status',
  header: 'Status',
  enableColumnFilter: true,
  filterFn: (row, columnId, filterStatuses) => {
    const status = row.getValue(columnId);
    return filterStatuses.includes(status);
  },
  cell: info => /*#__PURE__*/react.createElement(Container/* default */.A, {
    minWidth: "125px"
  }, info.getValue() === 'Completed' ? /*#__PURE__*/react.createElement(CompletedStatus, null) : /*#__PURE__*/react.createElement(InProgressStatus, null))
}, {
  accessorKey: 'country',
  header: 'Country',
  enableColumnFilter: true,
  filterFn: (row, columnId, filterStatuses) => {
    const status = row.getValue(columnId);
    return filterStatuses.includes(status);
  }
}];
const collapsible = {
  accessorKey: 'collapsible',
  header: () => /*#__PURE__*/react.createElement(react.Fragment, null),
  cell: info => /*#__PURE__*/react.createElement(components_TableActionsCell, {
    cell: info.cell
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "rowReverse",
    paddingY: "1",
    gap: "2"
  }, /*#__PURE__*/react.createElement(ChevronButton/* default */.A, {
    shape: "circle",
    size: "sm",
    chevronDirection: info.expanded ? 'up' : undefined
  }), /*#__PURE__*/react.createElement(Dropdown/* default */.A, {
    shouldStopPropagation: true
  }, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    size: "sm",
    variant: "ghost",
    "aria-label": ""
  }, /*#__PURE__*/react.createElement(Ellipsis/* default */.A, null))), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, {
    appendToBody: true
  }, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 3"))))))
};
const helpers_select = {
  accessorKey: 'select',
  header: _ref => {
    let {
      table
    } = _ref;
    return /*#__PURE__*/react.createElement(Center/* default */.A, {
      width: "100%"
    }, /*#__PURE__*/react.createElement(Checkbox/* default */.A, {
      disableCheckmarkMargin: true,
      checked: table.getIsAllRowsSelected(),
      indeterminate: table.getIsSomeRowsSelected(),
      onChange: table.getToggleAllRowsSelectedHandler()
    }));
  },
  cell: info => /*#__PURE__*/react.createElement(Center/* default */.A, {
    zIndex: "2",
    padding: "1",
    onClick: e => {
      e.stopPropagation();
    }
  }, /*#__PURE__*/react.createElement(Checkbox/* default */.A, {
    disableCheckmarkMargin: true,
    checked: info.row.getIsSelected(),
    onChange: info.row.getToggleSelectedHandler()
  })),
  size: 44
};
const columnsMulti = [helpers_select, ...columns];
const biography = 'natus arca odit subseco ambulo cupio suasoria cupio admiratio facilis sonitus dolorum vinco occaecati venio';
const longTextColumns = [{
  accessorKey: 'biography',
  header: () => /*#__PURE__*/react.createElement(react.Fragment, null, "Biography"),
  cell: () => /*#__PURE__*/react.createElement(Tooltip/* default */.A, {
    appendToBody: true,
    as: "div",
    content: biography
  }, biography)
}, ...columns];
const withColumSize = [{
  accessorKey: 'id',
  header: 'ID',
  size: 80
}, {
  accessorKey: 'firstName',
  cell: info => info.getValue(),
  header: () => /*#__PURE__*/react.createElement("span", null, "First Name"),
  size: 150
}, {
  accessorFn: row => row.lastName,
  id: 'lastName',
  cell: info => info.getValue(),
  header: () => /*#__PURE__*/react.createElement("span", null, "Last Name"),
  size: 150
}, {
  accessorKey: 'age',
  header: () => 'Age',
  size: 100
}, {
  accessorKey: 'visits',
  header: () => /*#__PURE__*/react.createElement("span", null, "Visits"),
  size: 100
}, {
  accessorKey: 'status',
  header: 'Status',
  enableColumnFilter: true,
  filterFn: (row, columnId, filterStatuses) => {
    const status = row.getValue(columnId);
    return filterStatuses.includes(status);
  },
  size: 150
}, {
  accessorKey: 'country',
  header: 'Country',
  size: 150
}];
const stickyColumns = [...withColumSize, {
  accessorKey: 'email',
  header: 'Email',
  size: 200,
  cell: () => 'Marlee34@yahoo.com'
}, {
  accessorKey: 'dateOfBirth',
  header: 'Date of Birth',
  cell: () => '1/15/1954',
  size: 150
}];
;// ../table/src/components/stories/utils.tsx

const countries = ['USA', 'Canada', 'Germany'];
const statuses = ['In progress', 'Completed'];
const generateMockData = count => Array.from({
  length: count
}, (_, i) => ({
  id: i + 1,
  firstName: chunk_LSEVNFON.a.person.firstName(),
  lastName: chunk_LSEVNFON.a.person.lastName(),
  age: chunk_LSEVNFON.a.number.int({
    min: 1,
    max: 80
  }),
  visits: chunk_LSEVNFON.a.number.int({
    min: 1000,
    max: 100000
  }),
  country: chunk_LSEVNFON.a.helpers.arrayElement(countries),
  status: chunk_LSEVNFON.a.helpers.arrayElement(statuses)
}));
const fetchPaginatedData = (page, itemsPerPage) => {
  const totalItems = generateMockData(15000);
  return new Promise(resolve => {
    setTimeout(() => {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      resolve({
        data: totalItems.slice(start, end),
        rowCount: totalItems.length
      });
    }, 3000);
  });
};
try {
    // @ts-ignore
    generateMockData.displayName = "generateMockData";
    // @ts-ignore
    generateMockData.__docgenInfo = { "description": "", "displayName": "generateMockData", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/stories/utils.tsx#generateMockData"] = { docgenInfo: generateMockData.__docgenInfo, name: "generateMockData", path: "../table/src/components/stories/utils.tsx#generateMockData" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../table/src/components/stories/components/StickyColumns/index.tsx











const StickyColumnsStory = () => {
  const data = (0,react.useMemo)(() => generateMockData(8), []);
  const table = (0,lib/* useReactTable */.N4)({
    data,
    columns: stickyColumns,
    getCoreRowModel: (0,build_lib/* getCoreRowModel */.HT)(),
    state: {
      columnPinning: {
        left: ['firstName', 'age']
      }
    }
  });
  return /*#__PURE__*/react.createElement(components_TableContainer, {
    table: table
  }, /*#__PURE__*/react.createElement(components_Table, null, /*#__PURE__*/react.createElement(components_TableHead, null, table.getHeaderGroups().map(headerGroup => /*#__PURE__*/react.createElement(components_TableRow, {
    key: headerGroup.id
  }, headerGroup.headers.map(header => /*#__PURE__*/react.createElement(components_TableHeader, {
    justifyContent: header.column.id === 'visits' ? 'flexEnd' : undefined,
    column: header.column,
    key: header.id
  }, header.isPlaceholder ? null : (0,lib/* flexRender */.Kv)(header.column.columnDef.header, header.getContext())))))), /*#__PURE__*/react.createElement(components_TableBody, null, table.getRowModel().rows.map(row => /*#__PURE__*/react.createElement(components_TableRow, {
    row: row,
    key: row.id
  }, row.getVisibleCells().map(cell => /*#__PURE__*/react.createElement(components_TableData, {
    textAlign: cell.column.id === 'visits' ? 'end' : undefined,
    cell: cell,
    key: cell.id
  }, (0,lib/* flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext()))))))));
};
/* harmony default export */ const StickyColumns = (StickyColumnsStory);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js + 1 modules
var getContext = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useBreakpoint/index.js + 2 modules
var useBreakpoint = __webpack_require__("../hooks/dist/esm/src/hooks/useBreakpoint/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/TrashBin.js
var TrashBin = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/TrashBin.js");
;// ../table/src/components/TableActionsPanel/index.tsx






const TableActionsPanel = _ref => {
  let {
    children,
    copies = {
      selectedItems: itemsSelected => /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
        k: "table.actions_panel.items_selected",
        params: {
          count: itemsSelected
        }
      })
    }
  } = _ref;
  const {
    table
  } = useTableContext();
  const itemsSelected = Object.keys(table === null || table === void 0 ? void 0 : table.getState().rowSelection).length;
  const tableActionsPanelActions = (0,findChildByType/* findChildByType */.B)(children, 'TableActionsPanelActions');
  return itemsSelected ? /*#__PURE__*/react.createElement(Stack/* default */.A, {
    justifyContent: "spaceBetween",
    alignItems: "center",
    backgroundColor: "grey_1200",
    borderRadius: "lg",
    color: "white",
    paddingY: "2",
    paddingX: "6",
    paddingRight: "2",
    paddingLeft: "6",
    minHeight: "52px"
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    color: "inherit",
    fontWeight: "bold"
  }, copies.selectedItems(itemsSelected)), (0,excludeChildrenByType/* excludeChildrenByType */.h)(children, 'TableActionsPanelActions'), tableActionsPanelActions) : null;
};
TableActionsPanel.displayName = 'TableActionsPanel';
TableActionsPanel.id = 'TableActionsPanel';
/* harmony default export */ const components_TableActionsPanel = (TableActionsPanel);
try {
    // @ts-ignore
    TableActionsPanel.displayName = "TableActionsPanel";
    // @ts-ignore
    TableActionsPanel.__docgenInfo = { "description": "", "displayName": "TableActionsPanel", "props": { "copies": { "defaultValue": { value: "{\n    selectedItems: (itemsSelected: number) => (\n      <I18n k=\"table.actions_panel.items_selected\" params={{ count: itemsSelected }} />\n    ),\n  }" }, "description": "", "name": "copies", "required": false, "type": { "name": "{ selectedItems: (count: any) => ReactNode; }" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableActionsPanel/index.tsx#TableActionsPanel"] = { docgenInfo: TableActionsPanel.__docgenInfo, name: "TableActionsPanel", path: "../table/src/components/TableActionsPanel/index.tsx#TableActionsPanel" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../table/src/components/TableActionsPanel/TableActionsPanelActions/index.tsx


const TableActionsPanelActions = _ref => {
  let {
    children,
    dataTrackTag = 'table_actions_panel_actions',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    gap: "2",
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, children);
};
TableActionsPanelActions.displayName = 'TableActionsPanelActions';
TableActionsPanelActions.id = 'TableActionsPanelActions';
/* harmony default export */ const TableActionsPanel_TableActionsPanelActions = (TableActionsPanelActions);
try {
    // @ts-ignore
    TableActionsPanelActions.displayName = "TableActionsPanelActions";
    // @ts-ignore
    TableActionsPanelActions.__docgenInfo = { "description": "", "displayName": "TableActionsPanelActions", "props": { "dataTrackTag": { "defaultValue": { value: "table_actions_panel_actions" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": true, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/TableActionsPanel/TableActionsPanelActions/index.tsx#TableActionsPanelActions"] = { docgenInfo: TableActionsPanelActions.__docgenInfo, name: "TableActionsPanelActions", path: "../table/src/components/TableActionsPanel/TableActionsPanelActions/index.tsx#TableActionsPanelActions" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../table/src/components/stories/components/FullComposition/index.tsx
function FullComposition_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function FullComposition_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? FullComposition_ownKeys(Object(t), !0).forEach(function (r) {
      FullComposition_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : FullComposition_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function FullComposition_defineProperty(e, r, t) {
  return (r = FullComposition_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function FullComposition_toPropertyKey(t) {
  var i = FullComposition_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function FullComposition_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
































const FullCompositionStory = _ref => {
  var _table$getColumn, _table$getColumn3, _table$getColumn5;
  let {
    footerText
  } = _ref;
  const data = (0,react.useMemo)(() => generateMockData(50), []);
  const [columnFilters, setColumnFilters] = react.useState([]);
  const activeFilters = (0,react.useMemo)(() => columnFilters.filter(f => f.id !== 'firstName'), [columnFilters]);
  const [pagination, setPagination] = react.useState({
    pageIndex: 0,
    pageSize: 10
  });
  const table = (0,lib/* useReactTable */.N4)({
    data,
    columns: [...columnsMulti, columnsActions],
    getPaginationRowModel: (0,build_lib/* getPaginationRowModel */.kW)(),
    onPaginationChange: setPagination,
    getCoreRowModel: (0,build_lib/* getCoreRowModel */.HT)(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: (0,build_lib/* getFilteredRowModel */.hM)(),
    state: {
      columnFilters,
      pagination
    },
    initialState: {
      columnPinning: {
        left: ['select'],
        right: ['actions']
      }
    }
  });
  const {
    isMobile
  } = (0,getContext/* default */.A)();
  const breakpoint = (0,useBreakpoint/* default */.A)();
  const isSmallScreen = isMobile || breakpoint === 'default';
  return /*#__PURE__*/react.createElement(components_TableContainer, {
    table: table,
    dataTestid: "tableContainer"
  }, /*#__PURE__*/react.createElement(components_TableContainerHeader, null, /*#__PURE__*/react.createElement(components_TableTitle, null, "Table Title - Full composition", /*#__PURE__*/react.createElement(Text/* default */.A, null, "Table Subtitle")), /*#__PURE__*/react.createElement(components_TableHeaderActions, null, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    gap: "1"
  }, /*#__PURE__*/react.createElement(Dropdown/* default */.A, null, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    embed: true
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    size: "sm",
    variant: "ghost",
    "aria-label": ""
  }, /*#__PURE__*/react.createElement(Ellipsis/* default */.A, null))), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, {
    appendToBody: true
  }, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Option 3"), isSmallScreen && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Share"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Download"))))), !isSmallScreen && /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    size: "sm",
    "aria-label": "download",
    variant: "ghost",
    intent: "secondary"
  }, /*#__PURE__*/react.createElement(Download/* default */.A, null)), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    size: "sm",
    "aria-label": "share",
    variant: "ghost",
    intent: "secondary"
  }, /*#__PURE__*/react.createElement(Share/* default */.A, null)))), /*#__PURE__*/react.createElement(Button/* default */.A, {
    intent: "primary",
    size: "sm",
    variant: "outline"
  }, "Buy from")), /*#__PURE__*/react.createElement(components_TableFilters, null, /*#__PURE__*/react.createElement(Select/* default */.A, {
    placeholder: "Status",
    value: {
      status: (_table$getColumn = table.getColumn('status')) === null || _table$getColumn === void 0 ? void 0 : _table$getColumn.getFilterValue()
    },
    onChange: _ref2 => {
      var _table$getColumn2;
      let {
        status
      } = _ref2;
      (_table$getColumn2 = table.getColumn('status')) === null || _table$getColumn2 === void 0 || _table$getColumn2.setFilterValue((0,lodash.isEmpty)(status) ? undefined : status);
    }
  }, /*#__PURE__*/react.createElement(Select_OptionGroup, {
    isMulti: true,
    name: "status"
  }, statuses.map(status => /*#__PURE__*/react.createElement(Option/* default */.A, {
    key: status,
    value: status
  }, status)))), /*#__PURE__*/react.createElement(Select/* default */.A, {
    placeholder: "Country",
    value: {
      country: (_table$getColumn3 = table.getColumn('country')) === null || _table$getColumn3 === void 0 ? void 0 : _table$getColumn3.getFilterValue()
    },
    onChange: _ref3 => {
      var _table$getColumn4;
      let {
        country
      } = _ref3;
      (_table$getColumn4 = table.getColumn('country')) === null || _table$getColumn4 === void 0 || _table$getColumn4.setFilterValue((0,lodash.isEmpty)(country) ? undefined : country);
    }
  }, /*#__PURE__*/react.createElement(Select_OptionGroup, {
    isMulti: true,
    name: "country"
  }, countries.map(country => /*#__PURE__*/react.createElement(Option/* default */.A, {
    key: country,
    value: country
  }, country)))), /*#__PURE__*/react.createElement(components_TableSearchInput, {
    value: (_table$getColumn5 = table.getColumn('firstName')) === null || _table$getColumn5 === void 0 ? void 0 : _table$getColumn5.getFilterValue(),
    onChange: e => {
      var _table$getColumn6;
      (_table$getColumn6 = table.getColumn('firstName')) === null || _table$getColumn6 === void 0 || _table$getColumn6.setFilterValue(e.target.value);
    }
  }), /*#__PURE__*/react.createElement(components_TableActiveFilters, {
    onClickClear: () => table.setColumnFilters(prev => prev.filter(filter => filter.id === 'firstName')),
    showClearButton: Boolean(activeFilters.length),
    activeFilters: activeFilters
  })), /*#__PURE__*/react.createElement(components_TableActionsPanel, null, /*#__PURE__*/react.createElement(TableActionsPanel_TableActionsPanelActions, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
    alignSelf: "flexEnd",
    "aria-label": "remove",
    variant: "ghost",
    colorScheme: "white",
    size: "sm"
  }, /*#__PURE__*/react.createElement(TrashBin/* default */.A, {
    color: "white"
  }), "Delete")))), /*#__PURE__*/react.createElement(components_TableItemsCounter, null), /*#__PURE__*/react.createElement(components_Table, null, /*#__PURE__*/react.createElement(components_TableHead, null, table.getHeaderGroups().map(headerGroup => /*#__PURE__*/react.createElement(components_TableRow, {
    key: headerGroup.id
  }, headerGroup.headers.map(header => /*#__PURE__*/react.createElement(components_TableHeader, {
    headerPinned: header.column.id === 'actions' ? false : undefined,
    paddingX: header.column.id === 'select' ? '3' : undefined,
    justifyContent: header.column.id === 'visits' ? 'flexEnd' : undefined,
    column: header.column,
    key: header.id
  }, header.isPlaceholder ? null : (0,lib/* flexRender */.Kv)(header.column.columnDef.header, header.getContext())))))), /*#__PURE__*/react.createElement(components_TableBody, null, table.getRowModel().rows.map(row => /*#__PURE__*/react.createElement(components_TableRow, {
    row: row,
    key: row.id
  }, row.getVisibleCells().map(cell => /*#__PURE__*/react.createElement(components_TableData, {
    pinnedType: cell.column.id === 'actions' ? 'noBorder' : undefined,
    textAlign: cell.column.id === 'visits' ? 'end' : undefined,
    paddingX: cell.column.id === 'select' ? '3' : undefined,
    cell: cell,
    key: cell.id
  }, (0,lib/* flexRender */.Kv)(cell.column.columnDef.cell, FullComposition_objectSpread({}, cell.getContext()))))))), /*#__PURE__*/react.createElement(EmptyState/* default */.A, {
    gap: "4"
  }, /*#__PURE__*/react.createElement(EmptyState_EmptyStateVisual, null), /*#__PURE__*/react.createElement(EmptyStateTitle/* default */.A, null), /*#__PURE__*/react.createElement(EmptyState_EmptyStateSubtitle, null))), /*#__PURE__*/react.createElement(components_TableContainerFooter, {
    justifyContent: "spaceBetween"
  }, ' ', footerText, " ", /*#__PURE__*/react.createElement(components_TablePagination, null)));
};
/* harmony default export */ const components_FullComposition = (FullCompositionStory);
try {
    // @ts-ignore
    FullComposition.displayName = "FullComposition";
    // @ts-ignore
    FullComposition.__docgenInfo = { "description": "", "displayName": "FullComposition", "props": { "footerText": { "defaultValue": null, "description": "", "name": "footerText", "required": true, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../table/src/components/stories/components/FullComposition/index.tsx#FullComposition"] = { docgenInfo: FullComposition.__docgenInfo, name: "FullComposition", path: "../table/src/components/stories/components/FullComposition/index.tsx#FullComposition" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../table/src/components/stories/components/RowActionsSticky/index.tsx
function RowActionsSticky_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function RowActionsSticky_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? RowActionsSticky_ownKeys(Object(t), !0).forEach(function (r) {
      RowActionsSticky_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : RowActionsSticky_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function RowActionsSticky_defineProperty(e, r, t) {
  return (r = RowActionsSticky_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function RowActionsSticky_toPropertyKey(t) {
  var i = RowActionsSticky_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function RowActionsSticky_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}











const RowActionsStickyStory = () => {
  const data = (0,react.useMemo)(() => generateMockData(8), []);
  const table = (0,lib/* useReactTable */.N4)({
    data,
    columns: [...stickyColumns, columnsActions],
    getCoreRowModel: (0,build_lib/* getCoreRowModel */.HT)(),
    state: {
      columnPinning: {
        right: ['actions'],
        left: ['firstName']
      }
    }
  });
  return /*#__PURE__*/react.createElement(components_TableContainer, {
    table: table,
    dataTestid: "tableContainer"
  }, /*#__PURE__*/react.createElement(components_Table, null, /*#__PURE__*/react.createElement(components_TableHead, null, table.getHeaderGroups().map(headerGroup => /*#__PURE__*/react.createElement(components_TableRow, {
    key: headerGroup.id
  }, headerGroup.headers.map(header => /*#__PURE__*/react.createElement(components_TableHeader, {
    column: header.column,
    key: header.id,
    headerPinned: header.column.id === 'actions' ? false : undefined,
    justifyContent: header.column.id === 'visits' ? 'flexEnd' : undefined
  }, header.isPlaceholder ? null : (0,lib/* flexRender */.Kv)(header.column.columnDef.header, header.getContext())))))), /*#__PURE__*/react.createElement(components_TableBody, null, table.getRowModel().rows.map(row => /*#__PURE__*/react.createElement(components_TableRow, {
    row: row,
    key: row.id
  }, row.getVisibleCells().map(cell => /*#__PURE__*/react.createElement(components_TableData, {
    textAlign: cell.column.id === 'visits' ? 'end' : undefined,
    cell: cell,
    key: cell.id,
    pinnedType: cell.column.id === 'actions' ? 'noBorder' : undefined
  }, (0,lib/* flexRender */.Kv)(cell.column.columnDef.cell, RowActionsSticky_objectSpread({}, cell.getContext())))))))));
};
/* harmony default export */ const RowActionsSticky = (RowActionsStickyStory);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@tanstack+react-virtual@3.13.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@tanstack/react-virtual/dist/esm/index.js + 2 modules
var esm = __webpack_require__("../../node_modules/.pnpm/@tanstack+react-virtual@3.13.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@tanstack/react-virtual/dist/esm/index.js");
;// ../table/src/components/stories/components/VirtualizedColumns/index.tsx
function VirtualizedColumns_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function VirtualizedColumns_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? VirtualizedColumns_ownKeys(Object(t), !0).forEach(function (r) {
      VirtualizedColumns_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : VirtualizedColumns_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function VirtualizedColumns_defineProperty(e, r, t) {
  return (r = VirtualizedColumns_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function VirtualizedColumns_toPropertyKey(t) {
  var i = VirtualizedColumns_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function VirtualizedColumns_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}











const makeColumns = num => [...Array(num)].map((_, i) => ({
  accessorKey: i.toString(),
  header: "Column ".concat(i.toString())
}));
const makeData = (num, columns) => [...Array(num)].map(() => VirtualizedColumns_objectSpread({}, Object.fromEntries(columns.map(col => [col.accessorKey, chunk_LSEVNFON.a.person.firstName()]))));
const VirtualizedColumnsStory = () => {
  const columns = (0,react.useMemo)(() => makeColumns(100), []);
  const data = (0,react.useMemo)(() => makeData(100, columns), [columns]);
  const table = (0,lib/* useReactTable */.N4)({
    data,
    columns,
    getCoreRowModel: (0,build_lib/* getCoreRowModel */.HT)(),
    getSortedRowModel: (0,build_lib/* getSortedRowModel */.h5)(),
    debugTable: true
  });
  const visibleColumns = table.getVisibleLeafColumns();
  const tableContainerRef = react.useRef(null);
  const columnVirtualizer = (0,esm/* useVirtualizer */.Te)({
    count: visibleColumns.length,
    estimateSize: index => visibleColumns[index].getSize(),
    getScrollElement: () => tableContainerRef.current,
    horizontal: true,
    overscan: 3
  });
  const virtualColumns = columnVirtualizer.getVirtualItems();
  let virtualPaddingLeft;
  let virtualPaddingRight;
  if (virtualColumns !== null && virtualColumns !== void 0 && virtualColumns.length) {
    var _virtualColumns$0$sta, _virtualColumns$, _virtualColumns$end, _virtualColumns;
    virtualPaddingLeft = (_virtualColumns$0$sta = (_virtualColumns$ = virtualColumns[0]) === null || _virtualColumns$ === void 0 ? void 0 : _virtualColumns$.start) !== null && _virtualColumns$0$sta !== void 0 ? _virtualColumns$0$sta : 0;
    virtualPaddingRight = columnVirtualizer.getTotalSize() - ((_virtualColumns$end = (_virtualColumns = virtualColumns[virtualColumns.length - 1]) === null || _virtualColumns === void 0 ? void 0 : _virtualColumns.end) !== null && _virtualColumns$end !== void 0 ? _virtualColumns$end : 0);
  }
  return /*#__PURE__*/react.createElement(components_TableContainer, {
    table: table
  }, /*#__PURE__*/react.createElement(components_Table, {
    height: "800px",
    ref: tableContainerRef
  }, /*#__PURE__*/react.createElement(components_TableHead, {
    isSticky: true
  }, table.getHeaderGroups().map(headerGroup => /*#__PURE__*/react.createElement(components_TableRow, {
    key: headerGroup.id,
    display: "flex",
    width: "100%"
  }, virtualPaddingLeft ? /*#__PURE__*/react.createElement(components_TableHeader, {
    width: virtualPaddingLeft
  }) : null, virtualColumns.map(virtualColumn => {
    const header = headerGroup.headers[virtualColumn.index];
    return /*#__PURE__*/react.createElement(components_TableHeader, {
      key: header.id,
      column: header.column,
      width: header.getSize()
    }, (0,lib/* flexRender */.Kv)(header.column.columnDef.header, header.getContext()));
  }), virtualPaddingRight ? /*#__PURE__*/react.createElement(components_TableHeader, {
    width: virtualPaddingRight
  }) : null))), /*#__PURE__*/react.createElement(TableBodyWrapper, {
    columnVirtualizer: columnVirtualizer,
    table: table,
    tableContainerRef: tableContainerRef,
    virtualPaddingLeft: virtualPaddingLeft,
    virtualPaddingRight: virtualPaddingRight
  })));
};
const TableBodyWrapper = _ref => {
  let {
    columnVirtualizer,
    table,
    tableContainerRef,
    virtualPaddingLeft,
    virtualPaddingRight
  } = _ref;
  const {
    rows
  } = table.getRowModel();
  const rowVirtualizer = (0,esm/* useVirtualizer */.Te)({
    count: rows.length,
    estimateSize: () => 88,
    getScrollElement: () => tableContainerRef.current,
    measureElement: typeof window !== 'undefined' && navigator.userAgent.indexOf('Firefox') === -1 ? element => element === null || element === void 0 ? void 0 : element.getBoundingClientRect().height : undefined,
    overscan: 5
  });
  const virtualRows = rowVirtualizer.getVirtualItems();
  return /*#__PURE__*/react.createElement(components_TableBody, {
    height: "".concat(rowVirtualizer.getTotalSize(), "px"),
    position: "relative"
  }, virtualRows.map(virtualRow => {
    const row = rows[virtualRow.index];
    const visibleCells = row.getVisibleCells();
    const virtualColumns = columnVirtualizer.getVirtualItems();
    return /*#__PURE__*/react.createElement(components_TableRow, {
      row: row,
      "data-index": virtualRow.index,
      ref: node => rowVirtualizer.measureElement(node),
      key: row.id,
      display: "flex",
      position: "absolute",
      transform: "translateY(".concat(virtualRow.start, "px)"),
      width: "100%"
    }, virtualPaddingLeft ? /*#__PURE__*/react.createElement("td", {
      style: {
        display: 'flex',
        width: virtualPaddingLeft
      }
    }) : null, virtualColumns.map(vc => {
      const cell = visibleCells[vc.index];
      return /*#__PURE__*/react.createElement(components_TableData, {
        cell: cell,
        display: "flex",
        width: cell.column.getSize(),
        key: cell.id
      }, (0,lib/* flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext()));
    }), virtualPaddingRight ? /*#__PURE__*/react.createElement("td", {
      style: {
        display: 'flex',
        width: virtualPaddingRight
      }
    }) : null);
  }));
};
/* harmony default export */ const VirtualizedColumns = (VirtualizedColumnsStory);
;// ../table/src/components/stories/components/VirtualizedRows/index.tsx












const VirtualizedRows_TableBodyWrapper = _ref => {
  let {
    table,
    tableContainerRef
  } = _ref;
  const {
    rows
  } = table.getRowModel();
  const [ready, setReady] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    if (tableContainerRef.current) {
      setReady(true);
    }
  }, [tableContainerRef]);
  const rowVirtualizer = (0,esm/* useVirtualizer */.Te)({
    count: rows.length,
    estimateSize: () => 88,
    getScrollElement: () => ready ? tableContainerRef.current : null,
    measureElement: typeof window !== 'undefined' && navigator.userAgent.indexOf('Firefox') === -1 ? element => element === null || element === void 0 ? void 0 : element.getBoundingClientRect().height : undefined,
    overscan: 5
  });
  return /*#__PURE__*/react.createElement(components_TableBody, {
    height: rowVirtualizer.getTotalSize(),
    position: "relative"
  }, rowVirtualizer.getVirtualItems().map(virtualRow => {
    const row = rows[virtualRow.index];
    return /*#__PURE__*/react.createElement(components_TableRow, {
      row: row,
      dataIndex: virtualRow.index,
      ref: node => rowVirtualizer.measureElement(node),
      key: row.id,
      display: "flex",
      transform: "translateY(".concat(virtualRow.start, "px)"),
      position: "absolute",
      width: "100%"
    }, row.getVisibleCells().map(cell => /*#__PURE__*/react.createElement(components_TableData, {
      justifyContent: cell.column.id === 'visits' ? 'flexEnd' : undefined,
      cell: cell,
      key: cell.id,
      flex: 1,
      display: "flex"
    }, (0,lib/* flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext()))));
  }));
};
const VirtualizedRowsStory = () => {
  const tableContainerRef = react.useRef(null);
  const data = (0,react.useMemo)(() => generateMockData(5000), []);
  const table = (0,lib/* useReactTable */.N4)({
    data,
    columns: withColumSize,
    getCoreRowModel: (0,build_lib/* getCoreRowModel */.HT)(),
    debugTable: true
  });
  return /*#__PURE__*/react.createElement(components_TableContainer, {
    table: table
  }, /*#__PURE__*/react.createElement(components_Table, {
    ref: tableContainerRef,
    height: "600px"
  }, /*#__PURE__*/react.createElement(components_TableHead, {
    isSticky: true
  }, table.getHeaderGroups().map(headerGroup => /*#__PURE__*/react.createElement(components_TableRow, {
    display: "flex",
    width: "100%",
    key: headerGroup.id
  }, headerGroup.headers.map(header => /*#__PURE__*/react.createElement(components_TableHeader, {
    justifyContent: header.column.id === 'visits' ? 'flexEnd' : undefined,
    flex: 1,
    width: header.column.getSize(),
    column: header.column,
    key: header.id
  }, (0,lib/* flexRender */.Kv)(header.column.columnDef.header, header.getContext())))))), /*#__PURE__*/react.createElement(VirtualizedRows_TableBodyWrapper, {
    table: table,
    tableContainerRef: tableContainerRef
  })));
};
;// ../table/src/components/stories/components/MultiSelect/index.tsx
















const MuliSelectStory = () => {
  const data = (0,react.useMemo)(() => generateMockData(8), []);
  const [rowSelection, setRowSelection] = (0,react.useState)({});
  const table = (0,lib/* useReactTable */.N4)({
    data,
    columns: columnsMulti,
    getCoreRowModel: (0,build_lib/* getCoreRowModel */.HT)(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection
    },
    initialState: {
      columnPinning: {
        left: ['select']
      }
    }
  });
  return /*#__PURE__*/react.createElement(components_TableContainer, {
    table: table
  }, /*#__PURE__*/react.createElement(components_TableContainerHeader, null, /*#__PURE__*/react.createElement(components_TableActionsPanel, null, /*#__PURE__*/react.createElement(TableActionsPanel_TableActionsPanelActions, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
    alignSelf: "flexEnd",
    "aria-label": "remove",
    variant: "ghost",
    colorScheme: "white",
    size: "sm"
  }, /*#__PURE__*/react.createElement(TrashBin/* default */.A, {
    color: "white"
  }), "Delete")))), /*#__PURE__*/react.createElement(components_Table, null, /*#__PURE__*/react.createElement(components_TableHead, null, table.getHeaderGroups().map(headerGroup => /*#__PURE__*/react.createElement(components_TableRow, {
    key: headerGroup.id
  }, headerGroup.headers.map(header => /*#__PURE__*/react.createElement(components_TableHeader, {
    paddingX: header.column.id === 'select' ? '3' : undefined,
    justifyContent: header.column.id === 'visits' ? 'flexEnd' : undefined,
    column: header.column,
    key: header.id
  }, header.isPlaceholder ? null : (0,lib/* flexRender */.Kv)(header.column.columnDef.header, header.getContext())))))), /*#__PURE__*/react.createElement(components_TableBody, null, table.getRowModel().rows.map(row => /*#__PURE__*/react.createElement(components_TableRow, {
    row: row,
    key: row.id
  }, row.getVisibleCells().map(cell => /*#__PURE__*/react.createElement(components_TableData, {
    textAlign: cell.column.id === 'visits' ? 'end' : undefined,
    paddingX: cell.column.id === 'select' ? '3' : undefined,
    cell: cell,
    key: cell.id
  }, (0,lib/* flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext()))))))));
};
/* harmony default export */ const MultiSelect = (MuliSelectStory);
;// ../table/src/components/stories/index.stories.tsx
function index_stories_extends() {
  return index_stories_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, index_stories_extends.apply(null, arguments);
}
function index_stories_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function index_stories_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? index_stories_ownKeys(Object(t), !0).forEach(function (r) {
      index_stories_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : index_stories_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function index_stories_defineProperty(e, r, t) {
  return (r = index_stories_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function index_stories_toPropertyKey(t) {
  var i = index_stories_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function index_stories_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
/* eslint-disable @typescript-eslint/no-unused-vars */






































chunk_LSEVNFON.a.seed(1);
const footerText = chunk_LSEVNFON.a.lorem.words(15);
const collapsibleContent = chunk_LSEVNFON.a.lorem.words(40);
const Primary = {
  tags: [],
  parameters: {
    docs: {
      source: {
        code: "\nconst data = useMemo(() => generateMockData(8), []);\nconst table = useReactTable({\n  data,\n  columns,\n  getCoreRowModel: getCoreRowModel(),\n});\n\nreturn (\n  <TableContainer table={table}>\n    <Table>\n      <TableHead>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n              <TableHeader justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined} column={header.column} key={header.id}>\n                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n              </TableHeader>\n            ))}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBody>\n        {table.getRowModel().rows.map((row) => (\n          <TableRow row={row} key={row.id}>\n            {row.getVisibleCells().map((cell) => (\n              <TableData  textAlign={cell.column.id === 'visits' ? 'end' : undefined} cell={cell} key={cell.id}>\n                {flexRender(cell.column.columnDef.cell, cell.getContext())}\n              </TableData>\n            ))}\n          </TableRow>\n        ))}\n      </TableBody>\n    </Table>\n  </TableContainer>\n);\n}"
      }
    }
  }
};
const index_stories_FullComposition = {
  tags: ['snapshot-ignore', 'docs-only'],
  render: () => /*#__PURE__*/react.createElement(components_FullComposition, {
    footerText: footerText
  }),
  parameters: {
    docs: {
      source: {
        code: "\nconst data = useMemo(() => generateMockData(50), []);\nconst [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);\nconst activeFilters = useMemo(() => columnFilters.filter((f) => f.id !== 'firstName'), [columnFilters]);\nconst [pagination, setPagination] = React.useState<PaginationState>({\n  pageIndex: 0,\n  pageSize: 10,\n});\n\nconst table = useReactTable({\n  data,\n  columns: [...columnsMulti, columnsActions],\n  getPaginationRowModel: getPaginationRowModel(),\n  onPaginationChange: setPagination,\n  getCoreRowModel: getCoreRowModel(),\n  onColumnFiltersChange: setColumnFilters,\n  getFilteredRowModel: getFilteredRowModel(),\n  state: {\n    columnFilters,\n    pagination,\n  },\n  initialState: {\n    columnPinning: {\n      left: ['select'],\n      right: ['actions'],\n    },\n  },\n});\nconst { isMobile } = getContext();\nconst breakpoint = useBreakpoint();\nconst isSmallScreen = isMobile || breakpoint === 'default';\n\nreturn (\n  <TableContainer table={table} dataTestid=\"tableContainer\">\n    <TableContainerHeader>\n      <TableTitle>\n        Table Title - Full composition\n        <Text>Table Subtitle</Text>\n      </TableTitle>\n      <TableHeaderActions>\n        <Stack gap=\"1\">\n          <Dropdown>\n            <DropdownAnchor embed>\n              <IconButton size=\"sm\" variant=\"ghost\" aria-label=\"\">\n                <EllipsisIcon />\n              </IconButton>\n            </DropdownAnchor>\n            <DropdownContent appendToBody>\n              <DropdownMenu>\n                <MenuItem>Option 1</MenuItem>\n                <MenuItem>Option 2</MenuItem>\n                <MenuItem>Option 3</MenuItem>\n                {isSmallScreen && <>\n                  <MenuItem>Share</MenuItem>\n                  <MenuItem>Download</MenuItem>\n                  </>}\n              </DropdownMenu>\n            </DropdownContent>\n          </Dropdown>\n\n          {!isSmallScreen && (\n            <>\n              <IconButton size=\"sm\" aria-label=\"download\" variant=\"ghost\" intent=\"secondary\">\n                <DownloadIcon />\n              </IconButton>\n              <IconButton size=\"sm\" aria-label=\"share\" variant=\"ghost\" intent=\"secondary\">\n                <ShareIcon />\n              </IconButton>\n            </>\n          )}\n        </Stack>\n        <Button intent=\"primary\" size=\"sm\" variant=\"outline\">\n          Buy from\n        </Button>\n      </TableHeaderActions>\n      <TableFilters>\n        <Select\n          placeholder=\"Status\"\n          value={{ status: table.getColumn('status')?.getFilterValue() as string[] }}\n          onChange={({ status }) => {\n            table.getColumn('status')?.setFilterValue(isEmpty(status) ? undefined : status);\n          }}\n        >\n          <OptionGroup isMulti name=\"status\">\n            {statuses.map((status) => (\n              <Option key={status} value={status}>\n                {status}\n              </Option>\n            ))}\n          </OptionGroup>\n        </Select>\n        <Select\n          placeholder=\"Country\"\n          value={{ country: table.getColumn('country')?.getFilterValue() as string[] }}\n          onChange={({ country }) => {\n            table.getColumn('country')?.setFilterValue(isEmpty(country) ? undefined : country);\n          }}\n        >\n          <OptionGroup isMulti name=\"country\">\n            {countries.map((country) => (\n              <Option key={country} value={country}>\n                {country}\n              </Option>\n            ))}\n          </OptionGroup>\n        </Select>\n        <TableSearchInput\n          value={table.getColumn('firstName')?.getFilterValue() as string}\n          onChange={(e) => {\n            table.getColumn('firstName')?.setFilterValue(e.target.value);\n          }}\n        />\n        <TableActiveFilters\n          onClickClear={() => table.setColumnFilters((prev) => prev.filter((filter) => filter.id === 'firstName'))}\n          showClearButton={Boolean(activeFilters.length)}\n          activeFilters={activeFilters}\n        />\n      </TableFilters>\n      <TableActionsPanel>\n        <TableActionsPanelActions>\n          <Button alignSelf=\"flexEnd\" aria-label=\"remove\" variant=\"ghost\" colorScheme=\"white\" size=\"sm\">\n            <TrashBinIcon color=\"white\" />\n            Delete\n          </Button>\n        </TableActionsPanelActions>\n      </TableActionsPanel>\n    </TableContainerHeader>\n    <TableItemsCounter />\n    <Table>\n      <TableHead>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n              <TableHeader\n                headerPinned={header.column.id === 'actions' ? false : undefined}\n                paddingX={header.column.id === 'select' ? '3' : undefined}\n                justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined}\n                column={header.column}\n                key={header.id}\n              >\n                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n              </TableHeader>\n            ))}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBody>\n        {table.getRowModel().rows.map((row) => (\n          <TableRow row={row} key={row.id}>\n            {row.getVisibleCells().map((cell) => (\n              <TableData\n                pinnedType={cell.column.id === 'actions' ? 'noBorder' : undefined}\n                textAlign={cell.column.id === 'visits' ? 'end' : undefined}\n                paddingX={cell.column.id === 'select' ? '3' : undefined}\n                cell={cell}\n                key={cell.id}\n              >\n                {flexRender(cell.column.columnDef.cell, {\n                  ...cell.getContext(),\n                })}\n              </TableData>\n            ))}\n          </TableRow>\n        ))}\n      </TableBody>\n      <EmptyState>\n        <EmptyStateVisual/>\n        <EmptyStateTitle/>\n        <EmptyStateSubtitle/>\n      </EmptyState>\n    </Table>\n    <TableContainerFooter justifyContent=\"spaceBetween\">\n      {footerText} <TablePagination />\n    </TableContainerFooter>\n  </TableContainer>\n);"
      }
    }
  },
  play: function () {
    var _ref = _asyncToGenerator(function (_ref2) {
      let {
        canvasElement
      } = _ref2;
      return function* () {
        if (!navigator.webdriver) {
          return;
        }
        yield (0,src/* takeScreenshot */.w)();
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const tableContainer = canvas.getByTestId('tableContainer');
        const tbody = tableContainer.getElementsByTagName('tbody')[0];
        const thead = tableContainer.getElementsByTagName('thead')[0];
        yield (0,src.it)('Checkbox selection behavior', /*#__PURE__*/_asyncToGenerator(function* () {
          yield (0,src.it)('selects the first row', /*#__PURE__*/_asyncToGenerator(function* () {
            const checkbox = tbody.getElementsByTagName('label')[0];
            yield dist/* userEvent */.Q4.click(checkbox);
            yield (0,src/* takeScreenshot */.w)();
          }));
          yield (0,src.it)('selects all rows', /*#__PURE__*/_asyncToGenerator(function* () {
            const checkbox = thead.getElementsByTagName('label')[0];
            yield dist/* userEvent */.Q4.click(checkbox);
            yield (0,src/* takeScreenshot */.w)();
          }));
          yield (0,src.it)('deselects all rows', /*#__PURE__*/_asyncToGenerator(function* () {
            const checkbox = thead.getElementsByTagName('label')[0];
            yield dist/* userEvent */.Q4.click(checkbox);
            yield (0,src/* takeScreenshot */.w)();
          }));
        }));
        yield (0,src.it)('Tests filters behavior', /*#__PURE__*/_asyncToGenerator(function* () {
          yield (0,src.it)('select', /*#__PURE__*/_asyncToGenerator(function* () {
            const select = canvas.getAllByRole('select')[0];
            yield dist/* userEvent */.Q4.click(select);
            const selectItemsContainer = yield canvas.findByRole('dialog');
            const selectitem = selectItemsContainer.getElementsByTagName('label')[1];
            yield dist/* userEvent */.Q4.click(selectitem, {
              delay: 400
            });
            yield (0,src/* takeScreenshot */.w)();
            yield dist/* userEvent */.Q4.click(tableContainer, {
              delay: 200
            });
          }));
          yield (0,src.it)('clear single', /*#__PURE__*/_asyncToGenerator(function* () {
            const select = tableContainer.querySelector('[aria-label="status"]');
            yield dist/* userEvent */.Q4.click(select);
            yield (0,src/* takeScreenshot */.w)(400);
          }));
          yield (0,src.it)('multiple filters', /*#__PURE__*/_asyncToGenerator(function* () {
            const selects = canvas.getAllByRole('select');
            for (const select of selects) {
              yield dist/* userEvent */.Q4.click(select);
              const selectItemsContainer = yield canvas.findByRole('dialog');
              const [firstSelectItem, secondSelectItem] = selectItemsContainer.getElementsByTagName('label');
              yield dist/* userEvent */.Q4.click(firstSelectItem);
              yield dist/* userEvent */.Q4.click(secondSelectItem);
            }
            yield (0,src/* takeScreenshot */.w)(400);
            yield dist/* userEvent */.Q4.click(tableContainer);
          }));
          yield (0,src.it)('clear all filters', /*#__PURE__*/_asyncToGenerator(function* () {
            const clearAllButton = canvas.getByText('Clear all');
            yield dist/* userEvent */.Q4.click(clearAllButton);
            yield (0,src/* takeScreenshot */.w)(400);
          }));
          yield (0,src.it)('search filter', /*#__PURE__*/_asyncToGenerator(function* () {
            const input = canvas.getByPlaceholderText('Search...');
            yield dist/* userEvent */.Q4.type(input, 'e');
            yield (0,src/* takeScreenshot */.w)(200);
          }));
          yield (0,src.it)('empty state', /*#__PURE__*/_asyncToGenerator(function* () {
            const input = canvas.getByPlaceholderText('Search...');
            yield dist/* userEvent */.Q4.type(input, 'empty state');
            yield (0,src/* takeScreenshot */.w)(200);
            yield dist/* userEvent */.Q4.clear(input, {
              delay: 200
            });
          }));
        }));
        yield (0,src.it)('Pagination behavior', /*#__PURE__*/_asyncToGenerator(function* () {
          yield (0,src.it)('next', /*#__PURE__*/_asyncToGenerator(function* () {
            const nextButton = tableContainer.querySelector('[aria-label="next"]');
            yield dist/* userEvent */.Q4.click(nextButton, {
              delay: 200
            });
            yield (0,src/* takeScreenshot */.w)();
          }));
          yield (0,src.it)('prev', /*#__PURE__*/_asyncToGenerator(function* () {
            const prevButton = tableContainer.querySelector('[aria-label="prev"]');
            yield dist/* userEvent */.Q4.click(prevButton, {
              delay: 200
            });
            yield (0,src/* takeScreenshot */.w)();
          }));
        }));
      }();
    });
    return function play(_x) {
      return _ref.apply(this, arguments);
    };
  }()
};
const Compact = {
  tags: [],
  args: {
    variant: 'compact'
  },
  parameters: {
    docs: {
      source: {
        code: "\nconst data = useMemo(() => generateMockData(8), []);\nconst table = useReactTable({\n  data,\n  columns,\n  getCoreRowModel: getCoreRowModel(),\n});\n\nreturn (\n  <TableContainer table={table} variant=\"compact\">\n    <Table>\n      <TableHead>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n              <TableHeader\n                justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined}\n                column={header.column}\n                key={header.id}\n              >\n                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n              </TableHeader>\n            ))}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBody>\n        {table.getRowModel().rows.map((row) => (\n          <TableRow row={row} key={row.id}>\n            {row.getVisibleCells().map((cell) => (\n              <TableData textAlign={cell.column.id === 'visits' ? 'end' : undefined} cell={cell} key={cell.id}>\n                {flexRender(cell.column.columnDef.cell, cell.getContext())}\n              </TableData>\n            ))}\n          </TableRow>\n        ))}\n      </TableBody>\n    </Table>\n  </TableContainer>\n);\n"
      }
    }
  },
  render: () => {
    const data = (0,react.useMemo)(() => generateMockData(8), []);
    const table = (0,lib/* useReactTable */.N4)({
      data,
      columns: columns,
      getCoreRowModel: (0,build_lib/* getCoreRowModel */.HT)()
    });
    return /*#__PURE__*/react.createElement(components_TableContainer, {
      table: table,
      variant: "compact"
    }, /*#__PURE__*/react.createElement(components_Table, null, /*#__PURE__*/react.createElement(components_TableHead, null, table.getHeaderGroups().map(headerGroup => /*#__PURE__*/react.createElement(components_TableRow, {
      key: headerGroup.id
    }, headerGroup.headers.map(header => /*#__PURE__*/react.createElement(components_TableHeader, {
      justifyContent: header.column.id === 'visits' ? 'flexEnd' : undefined,
      column: header.column,
      key: header.id
    }, header.isPlaceholder ? null : (0,lib/* flexRender */.Kv)(header.column.columnDef.header, header.getContext())))))), /*#__PURE__*/react.createElement(components_TableBody, null, table.getRowModel().rows.map(row => /*#__PURE__*/react.createElement(components_TableRow, {
      row: row,
      key: row.id
    }, row.getVisibleCells().map(cell => /*#__PURE__*/react.createElement(components_TableData, {
      textAlign: cell.column.id === 'visits' ? 'end' : undefined,
      cell: cell,
      key: cell.id
    }, (0,lib/* flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext()))))))));
  }
};
const ZebraStyle = {
  tags: [],
  args: {
    tableStyle: 'zebra',
    variant: 'compact'
  },
  parameters: {
    docs: {
      source: {
        code: "\nconst data = useMemo(() => generateMockData(8), []);\nconst table = useReactTable({\n  data,\n  columns,\n  getCoreRowModel: getCoreRowModel(),\n});\n\nreturn (\n  <TableContainer table={table} tableStyle=\"zebra\">\n    <Table>\n      <TableHead>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n              <TableHeader\n                justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined}\n                column={header.column}\n                key={header.id}\n              >\n                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n              </TableHeader>\n            ))}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBody>\n        {table.getRowModel().rows.map((row) => (\n          <TableRow row={row} key={row.id}>\n            {row.getVisibleCells().map((cell) => (\n              <TableData textAlign={cell.column.id === 'visits' ? 'end' : undefined} cell={cell} key={cell.id}>\n                {flexRender(cell.column.columnDef.cell, cell.getContext())}\n              </TableData>\n            ))}\n          </TableRow>\n        ))}\n      </TableBody>\n    </Table>\n  </TableContainer>\n)"
      }
    }
  },
  render: () => {
    const data = (0,react.useMemo)(() => generateMockData(8), []);
    const table = (0,lib/* useReactTable */.N4)({
      data,
      columns: columns,
      getCoreRowModel: (0,build_lib/* getCoreRowModel */.HT)()
    });
    return /*#__PURE__*/react.createElement(components_TableContainer, {
      table: table,
      tableStyle: "zebra"
    }, /*#__PURE__*/react.createElement(components_Table, null, /*#__PURE__*/react.createElement(components_TableHead, null, table.getHeaderGroups().map(headerGroup => /*#__PURE__*/react.createElement(components_TableRow, {
      key: headerGroup.id
    }, headerGroup.headers.map(header => /*#__PURE__*/react.createElement(components_TableHeader, {
      justifyContent: header.column.id === 'visits' ? 'flexEnd' : undefined,
      column: header.column,
      key: header.id
    }, header.isPlaceholder ? null : (0,lib/* flexRender */.Kv)(header.column.columnDef.header, header.getContext())))))), /*#__PURE__*/react.createElement(components_TableBody, null, table.getRowModel().rows.map(row => /*#__PURE__*/react.createElement(components_TableRow, {
      row: row,
      key: row.id
    }, row.getVisibleCells().map(cell => /*#__PURE__*/react.createElement(components_TableData, {
      textAlign: cell.column.id === 'visits' ? 'end' : undefined,
      cell: cell,
      key: cell.id
    }, (0,lib/* flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext()))))))));
  }
};
const LongTextCell = {
  tags: ['snapshot-ignore'],
  render: () => {
    const data = (0,react.useMemo)(() => generateMockData(8), []);
    const table = (0,lib/* useReactTable */.N4)({
      data,
      columns: longTextColumns,
      getCoreRowModel: (0,build_lib/* getCoreRowModel */.HT)()
    });
    return /*#__PURE__*/react.createElement(components_TableContainer, {
      table: table,
      dataTestid: "tableContainer"
    }, /*#__PURE__*/react.createElement(components_Table, null, /*#__PURE__*/react.createElement(components_TableHead, null, table.getHeaderGroups().map(headerGroup => /*#__PURE__*/react.createElement(components_TableRow, {
      key: headerGroup.id
    }, headerGroup.headers.map(header => /*#__PURE__*/react.createElement(components_TableHeader, {
      justifyContent: header.column.id === 'visits' ? 'flexEnd' : undefined,
      column: header.column,
      key: header.id
    }, header.isPlaceholder ? null : (0,lib/* flexRender */.Kv)(header.column.columnDef.header, header.getContext())))))), /*#__PURE__*/react.createElement(components_TableBody, null, table.getRowModel().rows.map(row => /*#__PURE__*/react.createElement(components_TableRow, {
      row: row,
      key: row.id
    }, row.getVisibleCells().map(cell => /*#__PURE__*/react.createElement(components_TableData, {
      textAlign: cell.column.id === 'visits' ? 'end' : undefined,
      cell: cell,
      key: cell.id
    }, (0,lib/* flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext()))))))));
  },
  parameters: {
    docs: {
      description: {
        story: 'Check out the [Long Text column definition](?path=/docs/table-table--columns#long-text).'
      },
      source: {
        code: "\nconst data = useMemo(() => generateMockData(8), []);\nconst table = useReactTable({\n  data,\n  columns: longTextColumns,\n  getCoreRowModel: getCoreRowModel(),\n});\n\nreturn (\n  <TableContainer table={table} dataTestid=\"tableContainer\">\n    <Table>\n      <TableHead>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n              <TableHeader\n                justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined}\n                column={header.column}\n                key={header.id}\n              >\n                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n              </TableHeader>\n            ))}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBody>\n        {table.getRowModel().rows.map((row) => (\n          <TableRow row={row} key={row.id}>\n            {row.getVisibleCells().map((cell) => (\n              <TableData textAlign={cell.column.id === 'visits' ? 'end' : undefined} cell={cell} key={cell.id}>\n                {flexRender(cell.column.columnDef.cell, cell.getContext())}\n              </TableData>\n            ))}\n          </TableRow>\n        ))}\n      </TableBody>\n    </Table>\n  </TableContainer>\n);"
      }
    }
  },
  play: function () {
    var _ref17 = _asyncToGenerator(function (_ref18) {
      let {
        canvasElement
      } = _ref18;
      return function* () {
        if (!navigator.webdriver) {
          return;
        }
        yield (0,src/* takeScreenshot */.w)();
        // flaky snapshot. commented out for now.
        // TODO: fix test
        // const canvas = within(canvasElement);
        // const tableContainer = canvas.getByTestId('tableContainer');
        // const tbody = tableContainer.getElementsByTagName('tbody')[0];

        yield (0,src.it)('Tooltip behavior', /*#__PURE__*/_asyncToGenerator(function* () {
          // const longTextCell = tbody.getElementsByTagName('td')[0].firstChild?.firstChild;
          // await userEvent.hover(longTextCell);
          // await takeScreenshot(900);
        }));
      }();
    });
    return function play(_x2) {
      return _ref17.apply(this, arguments);
    };
  }()
};
const index_stories_MultiSelect = {
  tags: [],
  render: () => /*#__PURE__*/react.createElement(MultiSelect, null),
  parameters: {
    docs: {
      description: {
        story: 'Check out the [Long Text column definition](?path=/docs/table-table--columns#select).'
      },
      source: {
        code: "\nconst data = useMemo(() => generateMockData(8), []);\nconst [rowSelection, setRowSelection] = useState({});\nconst table = useReactTable({\n  data,\n  columns: columnsMulti,\n  getCoreRowModel: getCoreRowModel(),\n  onRowSelectionChange: setRowSelection,\n  state: {\n    rowSelection,\n  },\n  initialState: {\n    columnPinning: {\n      left: ['select'],\n    },\n  },\n});\n\nreturn (\n  <TableContainer table={table}>\n    <TableContainerHeader>\n      <TableActionsPanel>\n        <TableActionsPanelActions>\n          <Button alignSelf=\"flexEnd\" aria-label=\"remove\" variant=\"ghost\" colorScheme=\"white\" size=\"sm\">\n            <TrashBinIcon color=\"white\" />\n            Delete\n          </Button>\n        </TableActionsPanelActions>\n      </TableActionsPanel>\n    </TableContainerHeader>\n    <Table>\n      <TableHead>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n              <TableHeader\n                paddingX={header.column.id === 'select' ? '3' : undefined}\n                justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined}\n                column={header.column}\n                key={header.id}\n              >\n                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n              </TableHeader>\n            ))}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBody>\n        {table.getRowModel().rows.map((row) => (\n          <TableRow row={row} key={row.id}>\n            {row.getVisibleCells().map((cell) => (\n              <TableData\n                textAlign={cell.column.id === 'visits' ? 'end' : undefined}\n                paddingX={cell.column.id === 'select' ? '3' : undefined}\n                cell={cell}\n                key={cell.id}\n              >\n                {flexRender(cell.column.columnDef.cell, cell.getContext())}\n              </TableData>\n            ))}\n          </TableRow>\n        ))}\n      </TableBody>\n    </Table>\n  </TableContainer>\n);\n"
      }
    }
  }
};
const index_stories_StickyColumns = {
  tags: [],
  render: () => /*#__PURE__*/react.createElement(StickyColumns, null)
};
const index_stories_RowActionsSticky = {
  tags: ['snapshot-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'Check out the [Long Text column definition](?path=/docs/table-table--columns#actions).'
      },
      source: {
        code: "\nconst data = useMemo(() => generateMockData(8), []);\nconst [rowSelection, setRowSelection] = useState({});\n\nconst table = useReactTable({\n  data,\n  columns: [...stickyColumns, columnsActions],\n  getCoreRowModel: getCoreRowModel(),\n  onRowSelectionChange: setRowSelection,\n  state: {\n    rowSelection,\n  },\n  initialState: {\n    columnPinning: {\n      right: ['actions'],\n      left: ['firstName'],\n    },\n  },\n});\n\nreturn (\n  <TableContainer table={table} dataTestid=\"tableContainer\">\n    <Table>\n      <TableHead>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n              <TableHeader\n                column={header.column}\n                key={header.id}\n                headerPinned={header.column.id === 'actions' ? false : undefined}\n                justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined}\n              >\n                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n              </TableHeader>\n            ))}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBody>\n        {table.getRowModel().rows.map((row) => (\n          <TableRow row={row} key={row.id}>\n            {row.getVisibleCells().map((cell) => (\n              <TableData\n                textAlign={cell.column.id === 'visits' ? 'end' : undefined}\n                cell={cell}\n                key={cell.id}\n                pinnedType={cell.column.id === 'actions' ? 'noBorder' : undefined}\n              >\n                {flexRender(cell.column.columnDef.cell, {\n                  ...cell.getContext(),\n                })}\n              </TableData>\n            ))}\n          </TableRow>\n        ))}\n      </TableBody>\n    </Table>\n  </TableContainer>\n);\n"
      }
    }
  },
  render: () => /*#__PURE__*/react.createElement(RowActionsSticky, null),
  play: function () {
    var _ref20 = _asyncToGenerator(function (_ref21) {
      let {
        canvasElement
      } = _ref21;
      return function* () {
        if (!navigator.webdriver) {
          return;
        }
        yield (0,src/* takeScreenshot */.w)();
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const tableContainer = canvas.getByTestId('tableContainer');
        const table = tableContainer.getElementsByTagName('table')[0].parentElement;
        const tableFirstRow = tableContainer.getElementsByTagName('tr')[1];
        yield (0,src.it)('Tests scroll behavior', /*#__PURE__*/_asyncToGenerator(function* () {
          table === null || table === void 0 || table.scrollTo(100, 0);
          yield (0,src/* takeScreenshot */.w)(200);
        }));
        yield (0,src.it)('FullComposition hover on row', /*#__PURE__*/_asyncToGenerator(function* () {
          dist/* userEvent */.Q4.hover(tableFirstRow);
          yield (0,src/* takeScreenshot */.w)(200);
        }));
      }();
    });
    return function play(_x3) {
      return _ref20.apply(this, arguments);
    };
  }()
};
const index_stories_Collapsible = {
  tags: ['snapshot-ignore'],
  parameters: {
    docs: {
      source: {
        code: "\nconst data = useMemo(() => generateMockData(8), []);\nconst [expanded, setExpanded] = React.useState<ExpandedState>({});\n\nconst table = useReactTable({\n  data,\n  columns: [...columns, collapsible],\n  getCoreRowModel: getCoreRowModel(),\n  getExpandedRowModel: getExpandedRowModel(),\n  onExpandedChange: setExpanded,\n  getRowCanExpand: () => true,\n  state: {\n    expanded,\n  },\n  initialState: {\n    columnPinning: {\n      right: ['collapsible'],\n    },\n  },\n});\n\nreturn (\n  <TableContainer table={table} dataTestid=\"tableContainer\">\n    <Table>\n      <TableHead>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n              <TableHeader\n                justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined}\n                headerPinned={header.column.id === 'collapsible' ? false : undefined}\n                column={header.column}\n                key={header.id}\n              >\n                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n              </TableHeader>\n            ))}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBody>\n        {table.getRowModel().rows.map((row) => {\n          const toggleExpanded = row.getToggleExpandedHandler();\n          const expanded = row.getIsExpanded();\n\n          return (\n            <TableRowCollapsible\n              row={row}\n              onClick={() => {\n                toggleExpanded();\n              }}\n              expanded={expanded}\n              key={row.id}\n            >\n              {row.getVisibleCells().map((cell) => (\n                <TableData\n                  textAlign={cell.column.id === 'visits' ? 'end' : undefined}\n                  pinnedType={cell.column.id === 'collapsible' ? 'noBorder' : undefined}\n                  cell={cell}\n                  key={cell.id}\n                >\n                  {flexRender(cell.column.columnDef.cell, { ...cell.getContext(), expanded })}\n                </TableData>\n              ))}\n              <TableRowCollapsibleContent>{collapsibleContent}</TableRowCollapsibleContent>\n            </TableRowCollapsible>\n          );\n        })}\n      </TableBody>\n    </Table>\n  </TableContainer>\n);\n"
      }
    }
  },
  render: () => {
    const data = (0,react.useMemo)(() => generateMockData(8), []);
    const [expanded, setExpanded] = react.useState({});
    const table = (0,lib/* useReactTable */.N4)({
      data,
      columns: [...columns, collapsible],
      getCoreRowModel: (0,build_lib/* getCoreRowModel */.HT)(),
      getExpandedRowModel: (0,build_lib/* getExpandedRowModel */.D0)(),
      onExpandedChange: setExpanded,
      getRowCanExpand: () => true,
      state: {
        expanded
      },
      initialState: {
        columnPinning: {
          right: ['collapsible']
        }
      }
    });
    return /*#__PURE__*/react.createElement(components_TableContainer, {
      table: table,
      dataTestid: "tableContainer"
    }, /*#__PURE__*/react.createElement(components_Table, null, /*#__PURE__*/react.createElement(components_TableHead, null, table.getHeaderGroups().map(headerGroup => /*#__PURE__*/react.createElement(components_TableRow, {
      key: headerGroup.id
    }, headerGroup.headers.map(header => /*#__PURE__*/react.createElement(components_TableHeader, {
      justifyContent: header.column.id === 'visits' ? 'flexEnd' : undefined,
      headerPinned: header.column.id === 'collapsible' ? false : undefined,
      column: header.column,
      key: header.id
    }, header.isPlaceholder ? null : (0,lib/* flexRender */.Kv)(header.column.columnDef.header, header.getContext())))))), /*#__PURE__*/react.createElement(components_TableBody, null, table.getRowModel().rows.map(row => {
      const toggleExpanded = row.getToggleExpandedHandler();
      const expanded = row.getIsExpanded();
      return /*#__PURE__*/react.createElement(components_TableRowCollapsible, {
        row: row,
        onClick: () => {
          toggleExpanded();
        },
        expanded: expanded,
        key: row.id
      }, row.getVisibleCells().map(cell => /*#__PURE__*/react.createElement(components_TableData, {
        textAlign: cell.column.id === 'visits' ? 'end' : undefined,
        pinnedType: cell.column.id === 'collapsible' ? 'noBorder' : undefined,
        cell: cell,
        key: cell.id
      }, (0,lib/* flexRender */.Kv)(cell.column.columnDef.cell, index_stories_objectSpread(index_stories_objectSpread({}, cell.getContext()), {}, {
        expanded
      })))), /*#__PURE__*/react.createElement(TableRowCollapsible_TableRowCollapsibleContent, null, collapsibleContent));
    }))));
  },
  play: function () {
    var _ref24 = _asyncToGenerator(function (_ref25) {
      let {
        canvasElement
      } = _ref25;
      return function* () {
        if (!navigator.webdriver) {
          return;
        }
        yield (0,src/* takeScreenshot */.w)();
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const tableContainer = canvas.getByTestId('tableContainer');
        const tableFirstRow = tableContainer.getElementsByTagName('tr')[1];
        yield (0,src.it)('tests - open dropdown', /*#__PURE__*/_asyncToGenerator(function* () {
          tableContainer.focus();
          dist/* userEvent */.Q4.tab();
          dist/* userEvent */.Q4.tab();
          dist/* userEvent */.Q4.keyboard('[Enter]');
          yield (0,src/* takeScreenshot */.w)(400);
        }));
      }();
    });
    return function play(_x4) {
      return _ref24.apply(this, arguments);
    };
  }()
};
const Pagination = {
  tags: [],
  render: () => {
    const data = (0,react.useMemo)(() => generateMockData(50), []);
    const [pagination, setPagination] = (0,react.useState)({
      pageIndex: 0,
      pageSize: 5
    });
    const table = (0,lib/* useReactTable */.N4)({
      data,
      columns: withColumSize,
      getCoreRowModel: (0,build_lib/* getCoreRowModel */.HT)(),
      onPaginationChange: setPagination,
      getPaginationRowModel: (0,build_lib/* getPaginationRowModel */.kW)(),
      state: {
        pagination
      }
    });
    return /*#__PURE__*/react.createElement(components_TableContainer, {
      table: table,
      dynamicCellWidth: false
    }, /*#__PURE__*/react.createElement(components_Table, {
      height: !data.length ? '500px' : undefined
    }, /*#__PURE__*/react.createElement(components_TableHead, null, table.getHeaderGroups().map(headerGroup => /*#__PURE__*/react.createElement(components_TableRow, {
      key: headerGroup.id
    }, headerGroup.headers.map(header => /*#__PURE__*/react.createElement(components_TableHeader, {
      justifyContent: header.column.id === 'visits' ? 'flexEnd' : undefined,
      column: header.column,
      key: header.id
    }, header.isPlaceholder ? null : (0,lib/* flexRender */.Kv)(header.column.columnDef.header, header.getContext())))))), /*#__PURE__*/react.createElement(components_TableBody, {
      initialRowCount: 5
    }, table.getRowModel().rows.map(row => /*#__PURE__*/react.createElement(components_TableRow, {
      row: row,
      key: row.id
    }, row.getVisibleCells().map(cell => {
      var _cell$column;
      return /*#__PURE__*/react.createElement(components_TableData, {
        textAlign: cell.column.id === 'visits' ? 'end' : undefined,
        cell: cell,
        key: cell.id
      }, (0,lib/* flexRender */.Kv)(cell === null || cell === void 0 || (_cell$column = cell.column) === null || _cell$column === void 0 || (_cell$column = _cell$column.columnDef) === null || _cell$column === void 0 ? void 0 : _cell$column.cell, cell === null || cell === void 0 ? void 0 : cell.getContext()));
    }))))), /*#__PURE__*/react.createElement(components_TableContainerFooter, {
      justifyContent: "spaceBetween"
    }, footerText, /*#__PURE__*/react.createElement(components_TablePagination, null)));
  }
};
const ServerPagination = {
  tags: ['snapshot-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'To prevent layout shift when the data loads, set a size for each column. [Learn more](?path=/docs/table-table--columns#size)'
      }
    }
  },
  render: () => {
    const [data, setData] = (0,react.useState)([]);
    const [pagination, setPagination] = (0,react.useState)({
      pageIndex: 0,
      pageSize: 5
    });
    const [loading, setLoading] = (0,react.useState)(Boolean(!data.length));
    const [rowCount, setRowCount] = (0,react.useState)(0);
    (0,react.useEffect)(() => {
      const fetchData = /*#__PURE__*/function () {
        var _ref27 = _asyncToGenerator(function* () {
          setLoading(true);
          try {
            const response = yield fetchPaginatedData(pagination.pageIndex + 1, pagination.pageSize);
            setData(response.data);
            setRowCount(response.rowCount);
          } finally {
            setLoading(false);
          }
        });
        return function fetchData() {
          return _ref27.apply(this, arguments);
        };
      }();
      fetchData();
    }, [pagination.pageIndex, pagination.pageSize]);
    const table = (0,lib/* useReactTable */.N4)({
      data,
      columns: withColumSize,
      getCoreRowModel: (0,build_lib/* getCoreRowModel */.HT)(),
      onPaginationChange: setPagination,
      manualPagination: true,
      rowCount,
      state: {
        pagination
      }
    });
    return /*#__PURE__*/react.createElement(components_TableContainer, {
      table: table,
      loading: loading,
      dynamicCellWidth: false
    }, /*#__PURE__*/react.createElement(components_Table, {
      height: !data.length ? '500px' : undefined
    }, /*#__PURE__*/react.createElement(components_TableHead, null, table.getHeaderGroups().map(headerGroup => /*#__PURE__*/react.createElement(components_TableRow, {
      key: headerGroup.id
    }, headerGroup.headers.map(header => /*#__PURE__*/react.createElement(components_TableHeader, {
      justifyContent: header.column.id === 'visits' ? 'flexEnd' : undefined,
      column: header.column,
      key: header.id
    }, header.isPlaceholder ? null : (0,lib/* flexRender */.Kv)(header.column.columnDef.header, header.getContext())))))), /*#__PURE__*/react.createElement(components_TableBody, {
      initialRowCount: 5
    }, table.getRowModel().rows.map(row => /*#__PURE__*/react.createElement(components_TableRow, {
      row: row,
      key: row.id
    }, row.getVisibleCells().map(cell => {
      var _cell$column2;
      return /*#__PURE__*/react.createElement(components_TableData, {
        textAlign: cell.column.id === 'visits' ? 'end' : undefined,
        cell: cell,
        key: cell.id
      }, (0,lib/* flexRender */.Kv)(cell === null || cell === void 0 || (_cell$column2 = cell.column) === null || _cell$column2 === void 0 || (_cell$column2 = _cell$column2.columnDef) === null || _cell$column2 === void 0 ? void 0 : _cell$column2.cell, cell === null || cell === void 0 ? void 0 : cell.getContext()));
    }))))), /*#__PURE__*/react.createElement(components_TableContainerFooter, {
      justifyContent: "spaceBetween"
    }, footerText, " ", /*#__PURE__*/react.createElement(components_TablePagination, null)));
  }
};
const VirtualizedRows = {
  tags: [],
  render: () => /*#__PURE__*/react.createElement(VirtualizedRowsStory, null),
  parameters: {
    docs: {
      source: {
        code: "\n\n// TableBodyWrapper/index.tsx\n\nconst TableBodyWrapper = ({ table, tableContainerRef }: TableBodyProps) => {\nconst { rows } = table.getRowModel();\nconst [ready, setReady] = useState(false);\n\nuseEffect(() => {\n  if (tableContainerRef.current) {\n    setReady(true);\n  }\n}, [tableContainerRef]);\n\nconst rowVirtualizer = useVirtualizer<HTMLDivElement, HTMLTableRowElement>({\n  count: rows.length,\n  estimateSize: () => 88,\n  getScrollElement: () => (ready ? tableContainerRef.current : null),\n  measureElement:\n    typeof window !== 'undefined' && navigator.userAgent.indexOf('Firefox') === -1\n      ? (element) => element?.getBoundingClientRect().height\n      : undefined,\n  overscan: 5,\n});\n\nreturn (\n  <TableBody height={rowVirtualizer.getTotalSize()} position=\"relative\">\n    {rowVirtualizer.getVirtualItems().map((virtualRow) => {\n      const row = rows[virtualRow.index] as Row<Person>;\n\n      return (\n        <TableRow\n          dataIndex={virtualRow.index}\n          ref={(node) => rowVirtualizer.measureElement(node)}\n          key={row.id}\n          display=\"flex\"\n          transform={'translateY({virtualRow.start}px)'}\n          position=\"absolute\"\n          width=\"100%\"\n        >\n          {row.getVisibleCells().map((cell) => (\n            <TableData justifyContent={cell.column.id === 'visits' ? 'flexEnd' : undefined} cell={cell} key={cell.id} flex={1} display=\"flex\">\n              {flexRender(cell.column.columnDef.cell, cell.getContext())}\n            </TableData>\n          ))}\n        </TableRow>\n      );\n    })}\n  </TableBody>\n);\n};\n\n// index.tsx\n\nconst tableContainerRef = React.useRef<HTMLDivElement>(null);\nconst data = useMemo(() => generateMockData(5000), []);\n\nconst table = useReactTable({\n  data,\n  columns: withColumSize,\n  getCoreRowModel: getCoreRowModel(),\n  debugTable: true,\n});\n\nreturn (\n  <TableContainer table={table}>\n    <Table ref={tableContainerRef} height=\"600px\">\n      <TableHead isSticky>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow display=\"flex\" width=\"100%\" key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n              <TableHeader justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined} flex={1} width={header.column.getSize()} column={header.column} key={header.id}>\n                {flexRender(header.column.columnDef.header, header.getContext())}\n              </TableHeader>\n            ))}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBodyWrapper table={table} tableContainerRef={tableContainerRef} />\n    </Table>\n  </TableContainer>\n);"
      }
    }
  }
};
const index_stories_VirtualizedColumns = {
  tags: [],
  render: () => /*#__PURE__*/react.createElement(VirtualizedColumns, null),
  parameters: {
    docs: {
      source: {
        code: "\n\n// TableBodyWrapper/index.tsx\n\nconst TableBodyWrapper = ({\n  columnVirtualizer,\n  table,\n  tableContainerRef,\n  virtualPaddingLeft,\n  virtualPaddingRight,\n}: TableBodyWrapperProps) => {\n  const { rows } = table.getRowModel();\n  const rowVirtualizer = useVirtualizer<HTMLDivElement, HTMLTableRowElement>({\n    count: rows.length,\n    estimateSize: () => 88,\n    getScrollElement: () => tableContainerRef.current,\n    measureElement:\n      typeof window !== 'undefined' && navigator.userAgent.indexOf('Firefox') === -1\n        ? (element) => element?.getBoundingClientRect().height\n        : undefined,\n    overscan: 5,\n  });\n\n  const virtualRows = rowVirtualizer.getVirtualItems();\n\n  return (\n    <TableBody height={'{rowVirtualizer.getTotalSize()}px'} position=\"relative\">\n      {virtualRows.map((virtualRow) => {\n        const row = rows[virtualRow.index] as Row<Person>;\n        const visibleCells = row.getVisibleCells();\n        const virtualColumns = columnVirtualizer.getVirtualItems();\n\n        return (\n          <TableRow\n            data-index={virtualRow.index}\n            ref={(node) => rowVirtualizer.measureElement(node)}\n            key={row.id}\n            display=\"flex\"\n            position=\"absolute\"\n            transform={'translateY({virtualRow.start}px)'}\n            width=\"100%\"\n          >\n            {virtualPaddingLeft ? <td style={{ display: 'flex', width: virtualPaddingLeft }} /> : null}\n            {virtualColumns.map((vc) => {\n              const cell = visibleCells[vc.index];\n              return (\n                <TableData  textAlign={cell.column.id === 'visits' ? 'end' : undefined} cell={cell} display=\"flex\" width={cell.column.getSize()} key={cell.id}>\n                  {flexRender(cell.column.columnDef.cell, cell.getContext())}\n                </TableData>\n              );\n            })}\n            {virtualPaddingRight ? <td style={{ display: 'flex', width: virtualPaddingRight }} /> : null}\n          </TableRow>\n        );\n      })}\n    </TableBody>\n  );\n\n// index.tsx\n\nconst columns = useMemo<ColumnDef<Person>[]>(() => makeColumns(100), []);\nconst data = useMemo(() => makeData(100, columns), [columns]);\n\nconst table = useReactTable({\n  data,\n  columns,\n  getCoreRowModel: getCoreRowModel(),\n  getSortedRowModel: getSortedRowModel(),\n  debugTable: true,\n});\n\nconst visibleColumns = table.getVisibleLeafColumns();\nconst tableContainerRef = React.useRef<HTMLTableElement>(null);\nconst columnVirtualizer = useVirtualizer<HTMLDivElement, HTMLTableCellElement>({\n  count: visibleColumns.length,\n  estimateSize: (index) => visibleColumns[index].getSize(),\n  getScrollElement: () => tableContainerRef.current,\n  horizontal: true,\n  overscan: 3,\n});\n\nconst virtualColumns = columnVirtualizer.getVirtualItems();\n\nlet virtualPaddingLeft;\nlet virtualPaddingRight;\n\nif (virtualColumns?.length) {\n  virtualPaddingLeft = virtualColumns[0]?.start ?? 0;\n  virtualPaddingRight = columnVirtualizer.getTotalSize() - (virtualColumns[virtualColumns.length - 1]?.end ?? 0);\n}\n\nreturn (\n  <TableContainer table={table}>\n    <Table height=\"800px\" ref={tableContainerRef}>\n      <TableHead isSticky>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow key={headerGroup.id} display=\"flex\" width=\"100%\">\n            {virtualPaddingLeft ? <TableHeader justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined} width={virtualPaddingLeft} /> : null}\n            {virtualColumns.map((virtualColumn) => {\n              const header = headerGroup.headers[virtualColumn.index];\n              return (\n                <TableHeader justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined} key={header.id} column={header.column} width={header.getSize()}>\n                  {flexRender(header.column.columnDef.header, header.getContext())}\n                </TableHeader>\n              );\n            })}\n            {virtualPaddingRight ? <TableHeader justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined} width={virtualPaddingRight} /> : null}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBodyWrapper\n        columnVirtualizer={columnVirtualizer}\n        table={table}\n        tableContainerRef={tableContainerRef}\n        virtualPaddingLeft={virtualPaddingLeft}\n        virtualPaddingRight={virtualPaddingRight}\n      />\n    </Table>\n  </TableContainer>\n);\n"
      }
    }
  }
};
const Filters = {
  tags: [],
  render: () => {
    var _table$getColumn, _table$getColumn3, _table$getColumn5;
    const data = (0,react.useMemo)(() => generateMockData(50), []);
    const [columnFilters, setColumnFilters] = react.useState([]);
    const activeFilters = (0,react.useMemo)(() => columnFilters.filter(f => f.id !== 'firstName'), [columnFilters]);
    const [pagination, setPagination] = react.useState({
      pageIndex: 0,
      pageSize: 10
    });
    const table = (0,lib/* useReactTable */.N4)({
      data,
      columns: columns,
      getPaginationRowModel: (0,build_lib/* getPaginationRowModel */.kW)(),
      onPaginationChange: setPagination,
      getCoreRowModel: (0,build_lib/* getCoreRowModel */.HT)(),
      onColumnFiltersChange: setColumnFilters,
      getFilteredRowModel: (0,build_lib/* getFilteredRowModel */.hM)(),
      state: {
        columnFilters,
        pagination
      }
    });
    return /*#__PURE__*/react.createElement(components_TableContainer, {
      table: table
    }, /*#__PURE__*/react.createElement(components_TableContainerHeader, null, /*#__PURE__*/react.createElement(components_TableTitle, null, "Table Title", /*#__PURE__*/react.createElement(Text/* default */.A, null, "Table Subtitle")), /*#__PURE__*/react.createElement(components_TableHeaderActions, null, /*#__PURE__*/react.createElement(Stack/* default */.A, {
      gap: "1"
    }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
      size: "sm",
      "aria-label": "download",
      variant: "ghost",
      intent: "secondary"
    }, /*#__PURE__*/react.createElement(Download/* default */.A, null)), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
      size: "sm",
      "aria-label": "share",
      variant: "ghost",
      intent: "secondary"
    }, /*#__PURE__*/react.createElement(Share/* default */.A, null))), /*#__PURE__*/react.createElement(Button/* default */.A, {
      intent: "primary",
      size: "sm",
      variant: "outline"
    }, "Buy from")), /*#__PURE__*/react.createElement(components_TableFilters, null, /*#__PURE__*/react.createElement(Select/* default */.A, {
      placeholder: "Status",
      value: {
        status: (_table$getColumn = table.getColumn('status')) === null || _table$getColumn === void 0 ? void 0 : _table$getColumn.getFilterValue()
      },
      onChange: _ref28 => {
        var _table$getColumn2;
        let {
          status
        } = _ref28;
        (_table$getColumn2 = table.getColumn('status')) === null || _table$getColumn2 === void 0 || _table$getColumn2.setFilterValue((0,lodash.isEmpty)(status) ? undefined : status);
      }
    }, /*#__PURE__*/react.createElement(Select_OptionGroup, {
      isMulti: true,
      label: "Status",
      name: "status"
    }, statuses.map(status => /*#__PURE__*/react.createElement(Option/* default */.A, {
      key: status,
      value: status
    }, status)))), /*#__PURE__*/react.createElement(Select/* default */.A, {
      placeholder: "Country",
      value: {
        country: (_table$getColumn3 = table.getColumn('country')) === null || _table$getColumn3 === void 0 ? void 0 : _table$getColumn3.getFilterValue()
      },
      onChange: _ref29 => {
        var _table$getColumn4;
        let {
          country
        } = _ref29;
        (_table$getColumn4 = table.getColumn('country')) === null || _table$getColumn4 === void 0 || _table$getColumn4.setFilterValue((0,lodash.isEmpty)(country) ? undefined : country);
      }
    }, /*#__PURE__*/react.createElement(Select_OptionGroup, {
      isMulti: true,
      name: "country"
    }, countries.map(country => /*#__PURE__*/react.createElement(Option/* default */.A, {
      key: country,
      value: country
    }, country)))), /*#__PURE__*/react.createElement(components_TableSearchInput, {
      value: (_table$getColumn5 = table.getColumn('firstName')) === null || _table$getColumn5 === void 0 ? void 0 : _table$getColumn5.getFilterValue(),
      onChange: e => {
        var _table$getColumn6;
        (_table$getColumn6 = table.getColumn('firstName')) === null || _table$getColumn6 === void 0 || _table$getColumn6.setFilterValue(e.target.value);
      }
    }), /*#__PURE__*/react.createElement(components_TableActiveFilters, {
      onClickClear: () => table.setColumnFilters(prev => prev.filter(filter => filter.id === 'firstName')),
      showClearButton: Boolean(activeFilters.length),
      activeFilters: activeFilters
    }))), /*#__PURE__*/react.createElement(components_TableItemsCounter, null), /*#__PURE__*/react.createElement(components_Table, null, /*#__PURE__*/react.createElement(components_TableHead, null, table.getHeaderGroups().map(headerGroup => /*#__PURE__*/react.createElement(components_TableRow, {
      key: headerGroup.id
    }, headerGroup.headers.map(header => /*#__PURE__*/react.createElement(components_TableHeader, {
      justifyContent: header.column.id === 'visits' ? 'flexEnd' : undefined,
      column: header.column,
      key: header.id
    }, header.isPlaceholder ? null : (0,lib/* flexRender */.Kv)(header.column.columnDef.header, header.getContext())))))), /*#__PURE__*/react.createElement(components_TableBody, null, table.getRowModel().rows.map(row => /*#__PURE__*/react.createElement(components_TableRow, {
      row: row,
      key: row.id
    }, row.getVisibleCells().map(cell => /*#__PURE__*/react.createElement(components_TableData, {
      textAlign: cell.column.id === 'visits' ? 'end' : undefined,
      cell: cell,
      key: cell.id
    }, (0,lib/* flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext()))))))), /*#__PURE__*/react.createElement(components_TableContainerFooter, {
      justifyContent: "spaceBetween"
    }, footerText, " ", /*#__PURE__*/react.createElement(components_TablePagination, null)));
  }
};
const Sorting = {
  tags: [],
  parameters: {
    docs: {
      source: {
        code: "\nconst data = useMemo(() => generateMockData(50), []);\nconst [sorting, setSorting] = useState<SortingState>([]);\n\nconst table = useReactTable({\n  data,\n  columns,\n  getCoreRowModel: getCoreRowModel(),\n  getPaginationRowModel: getPaginationRowModel(),\n  onSortingChange: setSorting,\n  getSortedRowModel: getSortedRowModel(),\n  state: {\n    sorting,\n  },\n});\n\nreturn (\n  <TableContainer table={table} dynamicCellWidth={false}>\n    <Table height={!data.length ? '500px' : undefined}>\n      <TableHead>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n              <TableHeader\n                justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined}\n                isSortable\n                onClick={header.column.getToggleSortingHandler()}\n                column={header.column}\n                key={header.id}\n              >\n                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n              </TableHeader>\n            ))}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBody initialRowCount={5}>\n        {table.getRowModel().rows.map((row) => (\n          <TableRow row={row} key={row.id}>\n            {row.getVisibleCells().map((cell) => (\n              <TableData textAlign={cell.column.id === 'visits' ? 'end' : undefined} cell={cell} key={cell.id}>\n                {flexRender(cell?.column?.columnDef?.cell, cell?.getContext())}\n              </TableData>\n            ))}\n          </TableRow>\n        ))}\n      </TableBody>\n    </Table>\n    <TableContainerFooter justifyContent=\"spaceBetween\">\n      {footerText} <TablePagination />\n    </TableContainerFooter>\n  </TableContainer>\n);\n"
      }
    }
  },
  render: () => {
    const data = (0,react.useMemo)(() => generateMockData(50), []);
    const [sorting, setSorting] = (0,react.useState)([]);
    const table = (0,lib/* useReactTable */.N4)({
      data,
      columns: columns,
      getCoreRowModel: (0,build_lib/* getCoreRowModel */.HT)(),
      getPaginationRowModel: (0,build_lib/* getPaginationRowModel */.kW)(),
      onSortingChange: setSorting,
      getSortedRowModel: (0,build_lib/* getSortedRowModel */.h5)(),
      state: {
        sorting
      }
    });
    return /*#__PURE__*/react.createElement(components_TableContainer, {
      table: table,
      dynamicCellWidth: false
    }, /*#__PURE__*/react.createElement(components_Table, {
      height: !data.length ? '500px' : undefined
    }, /*#__PURE__*/react.createElement(components_TableHead, null, table.getHeaderGroups().map(headerGroup => /*#__PURE__*/react.createElement(components_TableRow, {
      key: headerGroup.id
    }, headerGroup.headers.map(header => /*#__PURE__*/react.createElement(components_TableHeader, {
      justifyContent: header.column.id === 'visits' ? 'flexEnd' : undefined,
      isSortable: true,
      onClick: header.column.getToggleSortingHandler(),
      column: header.column,
      key: header.id
    }, header.isPlaceholder ? null : (0,lib/* flexRender */.Kv)(header.column.columnDef.header, header.getContext())))))), /*#__PURE__*/react.createElement(components_TableBody, {
      initialRowCount: 5
    }, table.getRowModel().rows.map(row => /*#__PURE__*/react.createElement(components_TableRow, {
      row: row,
      key: row.id
    }, row.getVisibleCells().map(cell => {
      var _cell$column3;
      return /*#__PURE__*/react.createElement(components_TableData, {
        textAlign: cell.column.id === 'visits' ? 'end' : undefined,
        cell: cell,
        key: cell.id
      }, (0,lib/* flexRender */.Kv)(cell === null || cell === void 0 || (_cell$column3 = cell.column) === null || _cell$column3 === void 0 || (_cell$column3 = _cell$column3.columnDef) === null || _cell$column3 === void 0 ? void 0 : _cell$column3.cell, cell === null || cell === void 0 ? void 0 : cell.getContext()));
    }))))), /*#__PURE__*/react.createElement(components_TableContainerFooter, {
      justifyContent: "spaceBetween"
    }, footerText, " ", /*#__PURE__*/react.createElement(components_TablePagination, null)));
  },
  play: function () {
    var _ref30 = _asyncToGenerator(function (_ref31) {
      let {
        canvasElement
      } = _ref31;
      return function* () {
        yield (0,src/* takeScreenshot */.w)();
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const firstNameHeader = canvas.getByText('First Name');
        dist/* userEvent */.Q4.hover(firstNameHeader);
        yield (0,src/* takeScreenshot */.w)();
        dist/* userEvent */.Q4.click(firstNameHeader);
        yield (0,src/* takeScreenshot */.w)(200);
        dist/* userEvent */.Q4.click(firstNameHeader);
        yield (0,src/* takeScreenshot */.w)(200);
        dist/* userEvent */.Q4.click(firstNameHeader);
        yield (0,src/* takeScreenshot */.w)(200);
      }();
    });
    return function play(_x5) {
      return _ref30.apply(this, arguments);
    };
  }()
};
const meta = {
  title: 'Table/Table',
  component: components_TableContainer,
  render: args => {
    const data = (0,react.useMemo)(() => generateMockData(8), []);
    const table = (0,lib/* useReactTable */.N4)({
      data,
      columns: columns,
      getCoreRowModel: (0,build_lib/* getCoreRowModel */.HT)()
    });
    return /*#__PURE__*/react.createElement(components_TableContainer, index_stories_extends({}, args, {
      table: table
    }), /*#__PURE__*/react.createElement(components_Table, null, /*#__PURE__*/react.createElement(components_TableHead, null, table.getHeaderGroups().map(headerGroup => /*#__PURE__*/react.createElement(components_TableRow, {
      key: headerGroup.id
    }, headerGroup.headers.map(header => /*#__PURE__*/react.createElement(components_TableHeader, {
      justifyContent: header.column.id === 'visits' ? 'flexEnd' : undefined,
      column: header.column,
      key: header.id
    }, header.isPlaceholder ? null : (0,lib/* flexRender */.Kv)(header.column.columnDef.header, header.getContext())))))), /*#__PURE__*/react.createElement(components_TableBody, null, table.getRowModel().rows.map(row => /*#__PURE__*/react.createElement(components_TableRow, {
      row: row,
      key: row.id
    }, row.getVisibleCells().map(cell => /*#__PURE__*/react.createElement(components_TableData, {
      textAlign: cell.column.id === 'visits' ? 'end' : undefined,
      cell: cell,
      key: cell.id
    }, (0,lib/* flexRender */.Kv)(cell.column.columnDef.cell, cell.getContext()))))))));
  }
};
/* harmony default export */ const index_stories = (meta);
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  tags: [],\n  parameters: {\n    docs: {\n      source: {\n        code: `\nconst data = useMemo(() => generateMockData(8), []);\nconst table = useReactTable({\n  data,\n  columns,\n  getCoreRowModel: getCoreRowModel(),\n});\n\nreturn (\n  <TableContainer table={table}>\n    <Table>\n      <TableHead>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n              <TableHeader justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined} column={header.column} key={header.id}>\n                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n              </TableHeader>\n            ))}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBody>\n        {table.getRowModel().rows.map((row) => (\n          <TableRow row={row} key={row.id}>\n            {row.getVisibleCells().map((cell) => (\n              <TableData  textAlign={cell.column.id === 'visits' ? 'end' : undefined} cell={cell} key={cell.id}>\n                {flexRender(cell.column.columnDef.cell, cell.getContext())}\n              </TableData>\n            ))}\n          </TableRow>\n        ))}\n      </TableBody>\n    </Table>\n  </TableContainer>\n);\n}`\n      }\n    }\n  }\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
index_stories_FullComposition.parameters = {
  ...index_stories_FullComposition.parameters,
  docs: {
    ...index_stories_FullComposition.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['snapshot-ignore', 'docs-only'],\n  render: () => <FullCompositionStory footerText={footerText} />,\n  parameters: {\n    docs: {\n      source: {\n        code: `\nconst data = useMemo(() => generateMockData(50), []);\nconst [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);\nconst activeFilters = useMemo(() => columnFilters.filter((f) => f.id !== 'firstName'), [columnFilters]);\nconst [pagination, setPagination] = React.useState<PaginationState>({\n  pageIndex: 0,\n  pageSize: 10,\n});\n\nconst table = useReactTable({\n  data,\n  columns: [...columnsMulti, columnsActions],\n  getPaginationRowModel: getPaginationRowModel(),\n  onPaginationChange: setPagination,\n  getCoreRowModel: getCoreRowModel(),\n  onColumnFiltersChange: setColumnFilters,\n  getFilteredRowModel: getFilteredRowModel(),\n  state: {\n    columnFilters,\n    pagination,\n  },\n  initialState: {\n    columnPinning: {\n      left: ['select'],\n      right: ['actions'],\n    },\n  },\n});\nconst { isMobile } = getContext();\nconst breakpoint = useBreakpoint();\nconst isSmallScreen = isMobile || breakpoint === 'default';\n\nreturn (\n  <TableContainer table={table} dataTestid=\"tableContainer\">\n    <TableContainerHeader>\n      <TableTitle>\n        Table Title - Full composition\n        <Text>Table Subtitle</Text>\n      </TableTitle>\n      <TableHeaderActions>\n        <Stack gap=\"1\">\n          <Dropdown>\n            <DropdownAnchor embed>\n              <IconButton size=\"sm\" variant=\"ghost\" aria-label=\"\">\n                <EllipsisIcon />\n              </IconButton>\n            </DropdownAnchor>\n            <DropdownContent appendToBody>\n              <DropdownMenu>\n                <MenuItem>Option 1</MenuItem>\n                <MenuItem>Option 2</MenuItem>\n                <MenuItem>Option 3</MenuItem>\n                {isSmallScreen && <>\n                  <MenuItem>Share</MenuItem>\n                  <MenuItem>Download</MenuItem>\n                  </>}\n              </DropdownMenu>\n            </DropdownContent>\n          </Dropdown>\n\n          {!isSmallScreen && (\n            <>\n              <IconButton size=\"sm\" aria-label=\"download\" variant=\"ghost\" intent=\"secondary\">\n                <DownloadIcon />\n              </IconButton>\n              <IconButton size=\"sm\" aria-label=\"share\" variant=\"ghost\" intent=\"secondary\">\n                <ShareIcon />\n              </IconButton>\n            </>\n          )}\n        </Stack>\n        <Button intent=\"primary\" size=\"sm\" variant=\"outline\">\n          Buy from\n        </Button>\n      </TableHeaderActions>\n      <TableFilters>\n        <Select\n          placeholder=\"Status\"\n          value={{ status: table.getColumn('status')?.getFilterValue() as string[] }}\n          onChange={({ status }) => {\n            table.getColumn('status')?.setFilterValue(isEmpty(status) ? undefined : status);\n          }}\n        >\n          <OptionGroup isMulti name=\"status\">\n            {statuses.map((status) => (\n              <Option key={status} value={status}>\n                {status}\n              </Option>\n            ))}\n          </OptionGroup>\n        </Select>\n        <Select\n          placeholder=\"Country\"\n          value={{ country: table.getColumn('country')?.getFilterValue() as string[] }}\n          onChange={({ country }) => {\n            table.getColumn('country')?.setFilterValue(isEmpty(country) ? undefined : country);\n          }}\n        >\n          <OptionGroup isMulti name=\"country\">\n            {countries.map((country) => (\n              <Option key={country} value={country}>\n                {country}\n              </Option>\n            ))}\n          </OptionGroup>\n        </Select>\n        <TableSearchInput\n          value={table.getColumn('firstName')?.getFilterValue() as string}\n          onChange={(e) => {\n            table.getColumn('firstName')?.setFilterValue(e.target.value);\n          }}\n        />\n        <TableActiveFilters\n          onClickClear={() => table.setColumnFilters((prev) => prev.filter((filter) => filter.id === 'firstName'))}\n          showClearButton={Boolean(activeFilters.length)}\n          activeFilters={activeFilters}\n        />\n      </TableFilters>\n      <TableActionsPanel>\n        <TableActionsPanelActions>\n          <Button alignSelf=\"flexEnd\" aria-label=\"remove\" variant=\"ghost\" colorScheme=\"white\" size=\"sm\">\n            <TrashBinIcon color=\"white\" />\n            Delete\n          </Button>\n        </TableActionsPanelActions>\n      </TableActionsPanel>\n    </TableContainerHeader>\n    <TableItemsCounter />\n    <Table>\n      <TableHead>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n              <TableHeader\n                headerPinned={header.column.id === 'actions' ? false : undefined}\n                paddingX={header.column.id === 'select' ? '3' : undefined}\n                justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined}\n                column={header.column}\n                key={header.id}\n              >\n                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n              </TableHeader>\n            ))}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBody>\n        {table.getRowModel().rows.map((row) => (\n          <TableRow row={row} key={row.id}>\n            {row.getVisibleCells().map((cell) => (\n              <TableData\n                pinnedType={cell.column.id === 'actions' ? 'noBorder' : undefined}\n                textAlign={cell.column.id === 'visits' ? 'end' : undefined}\n                paddingX={cell.column.id === 'select' ? '3' : undefined}\n                cell={cell}\n                key={cell.id}\n              >\n                {flexRender(cell.column.columnDef.cell, {\n                  ...cell.getContext(),\n                })}\n              </TableData>\n            ))}\n          </TableRow>\n        ))}\n      </TableBody>\n      <EmptyState>\n        <EmptyStateVisual/>\n        <EmptyStateTitle/>\n        <EmptyStateSubtitle/>\n      </EmptyState>\n    </Table>\n    <TableContainerFooter justifyContent=\"spaceBetween\">\n      {footerText} <TablePagination />\n    </TableContainerFooter>\n  </TableContainer>\n);`\n      }\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    if (!navigator.webdriver) {\n      return;\n    }\n    await takeScreenshot();\n    const canvas = within(canvasElement);\n    const tableContainer = canvas.getByTestId('tableContainer');\n    const tbody = tableContainer.getElementsByTagName('tbody')[0];\n    const thead = tableContainer.getElementsByTagName('thead')[0];\n    await it('Checkbox selection behavior', async () => {\n      await it('selects the first row', async () => {\n        const checkbox = tbody.getElementsByTagName('label')[0];\n        await userEvent.click(checkbox);\n        await takeScreenshot();\n      });\n      await it('selects all rows', async () => {\n        const checkbox = thead.getElementsByTagName('label')[0];\n        await userEvent.click(checkbox);\n        await takeScreenshot();\n      });\n      await it('deselects all rows', async () => {\n        const checkbox = thead.getElementsByTagName('label')[0];\n        await userEvent.click(checkbox);\n        await takeScreenshot();\n      });\n    });\n    await it('Tests filters behavior', async () => {\n      await it('select', async () => {\n        const select = canvas.getAllByRole('select')[0];\n        await userEvent.click(select);\n        const selectItemsContainer = await canvas.findByRole('dialog');\n        const selectitem = selectItemsContainer.getElementsByTagName('label')[1];\n        await userEvent.click(selectitem, {\n          delay: 400\n        });\n        await takeScreenshot();\n        await userEvent.click(tableContainer, {\n          delay: 200\n        });\n      });\n      await it('clear single', async () => {\n        const select = tableContainer.querySelector('[aria-label=\"status\"]');\n        await userEvent.click(select);\n        await takeScreenshot(400);\n      });\n      await it('multiple filters', async () => {\n        const selects = canvas.getAllByRole('select');\n        for (const select of selects) {\n          await userEvent.click(select);\n          const selectItemsContainer = await canvas.findByRole('dialog');\n          const [firstSelectItem, secondSelectItem] = selectItemsContainer.getElementsByTagName('label');\n          await userEvent.click(firstSelectItem);\n          await userEvent.click(secondSelectItem);\n        }\n        await takeScreenshot(400);\n        await userEvent.click(tableContainer);\n      });\n      await it('clear all filters', async () => {\n        const clearAllButton = canvas.getByText('Clear all');\n        await userEvent.click(clearAllButton);\n        await takeScreenshot(400);\n      });\n      await it('search filter', async () => {\n        const input = canvas.getByPlaceholderText('Search...');\n        await userEvent.type(input, 'e');\n        await takeScreenshot(200);\n      });\n      await it('empty state', async () => {\n        const input = canvas.getByPlaceholderText('Search...');\n        await userEvent.type(input, 'empty state');\n        await takeScreenshot(200);\n        await userEvent.clear(input, {\n          delay: 200\n        });\n      });\n    });\n    await it('Pagination behavior', async () => {\n      await it('next', async () => {\n        const nextButton = tableContainer.querySelector('[aria-label=\"next\"]');\n        await userEvent.click(nextButton, {\n          delay: 200\n        });\n        await takeScreenshot();\n      });\n      await it('prev', async () => {\n        const prevButton = tableContainer.querySelector('[aria-label=\"prev\"]');\n        await userEvent.click(prevButton, {\n          delay: 200\n        });\n        await takeScreenshot();\n      });\n    });\n  }\n}",
      ...index_stories_FullComposition.parameters?.docs?.source
    }
  }
};
Compact.parameters = {
  ...Compact.parameters,
  docs: {
    ...Compact.parameters?.docs,
    source: {
      originalSource: "{\n  tags: [],\n  args: {\n    variant: 'compact'\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `\nconst data = useMemo(() => generateMockData(8), []);\nconst table = useReactTable({\n  data,\n  columns,\n  getCoreRowModel: getCoreRowModel(),\n});\n\nreturn (\n  <TableContainer table={table} variant=\"compact\">\n    <Table>\n      <TableHead>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n              <TableHeader\n                justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined}\n                column={header.column}\n                key={header.id}\n              >\n                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n              </TableHeader>\n            ))}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBody>\n        {table.getRowModel().rows.map((row) => (\n          <TableRow row={row} key={row.id}>\n            {row.getVisibleCells().map((cell) => (\n              <TableData textAlign={cell.column.id === 'visits' ? 'end' : undefined} cell={cell} key={cell.id}>\n                {flexRender(cell.column.columnDef.cell, cell.getContext())}\n              </TableData>\n            ))}\n          </TableRow>\n        ))}\n      </TableBody>\n    </Table>\n  </TableContainer>\n);\n`\n      }\n    }\n  },\n  render: () => {\n    const data = useMemo(() => generateMockData(8), []);\n    const table = useReactTable({\n      data,\n      columns,\n      getCoreRowModel: getCoreRowModel()\n    });\n    return <TableContainer table={table} variant=\"compact\">\n        <Table>\n          <TableHead>\n            {table.getHeaderGroups().map(headerGroup => <TableRow key={headerGroup.id}>\n                {headerGroup.headers.map(header => <TableHeader justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined} column={header.column} key={header.id}>\n                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n                  </TableHeader>)}\n              </TableRow>)}\n          </TableHead>\n          <TableBody>\n            {table.getRowModel().rows.map(row => <TableRow row={row} key={row.id}>\n                {row.getVisibleCells().map(cell => <TableData textAlign={cell.column.id === 'visits' ? 'end' : undefined} cell={cell} key={cell.id}>\n                    {flexRender(cell.column.columnDef.cell, cell.getContext())}\n                  </TableData>)}\n              </TableRow>)}\n          </TableBody>\n        </Table>\n      </TableContainer>;\n  }\n}",
      ...Compact.parameters?.docs?.source
    }
  }
};
ZebraStyle.parameters = {
  ...ZebraStyle.parameters,
  docs: {
    ...ZebraStyle.parameters?.docs,
    source: {
      originalSource: "{\n  tags: [],\n  args: {\n    tableStyle: 'zebra',\n    variant: 'compact'\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `\nconst data = useMemo(() => generateMockData(8), []);\nconst table = useReactTable({\n  data,\n  columns,\n  getCoreRowModel: getCoreRowModel(),\n});\n\nreturn (\n  <TableContainer table={table} tableStyle=\"zebra\">\n    <Table>\n      <TableHead>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n              <TableHeader\n                justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined}\n                column={header.column}\n                key={header.id}\n              >\n                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n              </TableHeader>\n            ))}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBody>\n        {table.getRowModel().rows.map((row) => (\n          <TableRow row={row} key={row.id}>\n            {row.getVisibleCells().map((cell) => (\n              <TableData textAlign={cell.column.id === 'visits' ? 'end' : undefined} cell={cell} key={cell.id}>\n                {flexRender(cell.column.columnDef.cell, cell.getContext())}\n              </TableData>\n            ))}\n          </TableRow>\n        ))}\n      </TableBody>\n    </Table>\n  </TableContainer>\n)`\n      }\n    }\n  },\n  render: () => {\n    const data = useMemo(() => generateMockData(8), []);\n    const table = useReactTable({\n      data,\n      columns,\n      getCoreRowModel: getCoreRowModel()\n    });\n    return <TableContainer table={table} tableStyle=\"zebra\">\n        <Table>\n          <TableHead>\n            {table.getHeaderGroups().map(headerGroup => <TableRow key={headerGroup.id}>\n                {headerGroup.headers.map(header => <TableHeader justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined} column={header.column} key={header.id}>\n                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n                  </TableHeader>)}\n              </TableRow>)}\n          </TableHead>\n          <TableBody>\n            {table.getRowModel().rows.map(row => <TableRow row={row} key={row.id}>\n                {row.getVisibleCells().map(cell => <TableData textAlign={cell.column.id === 'visits' ? 'end' : undefined} cell={cell} key={cell.id}>\n                    {flexRender(cell.column.columnDef.cell, cell.getContext())}\n                  </TableData>)}\n              </TableRow>)}\n          </TableBody>\n        </Table>\n      </TableContainer>;\n  }\n}",
      ...ZebraStyle.parameters?.docs?.source
    }
  }
};
LongTextCell.parameters = {
  ...LongTextCell.parameters,
  docs: {
    ...LongTextCell.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['snapshot-ignore'],\n  render: () => {\n    const data = useMemo(() => generateMockData(8), []);\n    const table = useReactTable({\n      data,\n      columns: longTextColumns,\n      getCoreRowModel: getCoreRowModel()\n    });\n    return <TableContainer table={table} dataTestid=\"tableContainer\">\n        <Table>\n          <TableHead>\n            {table.getHeaderGroups().map(headerGroup => <TableRow key={headerGroup.id}>\n                {headerGroup.headers.map(header => <TableHeader justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined} column={header.column} key={header.id}>\n                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n                  </TableHeader>)}\n              </TableRow>)}\n          </TableHead>\n          <TableBody>\n            {table.getRowModel().rows.map(row => <TableRow row={row} key={row.id}>\n                {row.getVisibleCells().map(cell => <TableData textAlign={cell.column.id === 'visits' ? 'end' : undefined} cell={cell} key={cell.id}>\n                    {flexRender(cell.column.columnDef.cell, cell.getContext())}\n                  </TableData>)}\n              </TableRow>)}\n          </TableBody>\n        </Table>\n      </TableContainer>;\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Check out the [Long Text column definition](?path=/docs/table-table--columns#long-text).'\n      },\n      source: {\n        code: `\nconst data = useMemo(() => generateMockData(8), []);\nconst table = useReactTable({\n  data,\n  columns: longTextColumns,\n  getCoreRowModel: getCoreRowModel(),\n});\n\nreturn (\n  <TableContainer table={table} dataTestid=\"tableContainer\">\n    <Table>\n      <TableHead>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n              <TableHeader\n                justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined}\n                column={header.column}\n                key={header.id}\n              >\n                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n              </TableHeader>\n            ))}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBody>\n        {table.getRowModel().rows.map((row) => (\n          <TableRow row={row} key={row.id}>\n            {row.getVisibleCells().map((cell) => (\n              <TableData textAlign={cell.column.id === 'visits' ? 'end' : undefined} cell={cell} key={cell.id}>\n                {flexRender(cell.column.columnDef.cell, cell.getContext())}\n              </TableData>\n            ))}\n          </TableRow>\n        ))}\n      </TableBody>\n    </Table>\n  </TableContainer>\n);`\n      }\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    if (!navigator.webdriver) {\n      return;\n    }\n    await takeScreenshot();\n    // flaky snapshot. commented out for now.\n    // TODO: fix test\n    // const canvas = within(canvasElement);\n    // const tableContainer = canvas.getByTestId('tableContainer');\n    // const tbody = tableContainer.getElementsByTagName('tbody')[0];\n\n    await it('Tooltip behavior', async () => {\n      // const longTextCell = tbody.getElementsByTagName('td')[0].firstChild?.firstChild;\n      // await userEvent.hover(longTextCell);\n      // await takeScreenshot(900);\n    });\n  }\n}",
      ...LongTextCell.parameters?.docs?.source
    }
  }
};
index_stories_MultiSelect.parameters = {
  ...index_stories_MultiSelect.parameters,
  docs: {
    ...index_stories_MultiSelect.parameters?.docs,
    source: {
      originalSource: "{\n  tags: [],\n  render: () => <MuliSelectStory />,\n  parameters: {\n    docs: {\n      description: {\n        story: 'Check out the [Long Text column definition](?path=/docs/table-table--columns#select).'\n      },\n      source: {\n        code: `\nconst data = useMemo(() => generateMockData(8), []);\nconst [rowSelection, setRowSelection] = useState({});\nconst table = useReactTable({\n  data,\n  columns: columnsMulti,\n  getCoreRowModel: getCoreRowModel(),\n  onRowSelectionChange: setRowSelection,\n  state: {\n    rowSelection,\n  },\n  initialState: {\n    columnPinning: {\n      left: ['select'],\n    },\n  },\n});\n\nreturn (\n  <TableContainer table={table}>\n    <TableContainerHeader>\n      <TableActionsPanel>\n        <TableActionsPanelActions>\n          <Button alignSelf=\"flexEnd\" aria-label=\"remove\" variant=\"ghost\" colorScheme=\"white\" size=\"sm\">\n            <TrashBinIcon color=\"white\" />\n            Delete\n          </Button>\n        </TableActionsPanelActions>\n      </TableActionsPanel>\n    </TableContainerHeader>\n    <Table>\n      <TableHead>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n              <TableHeader\n                paddingX={header.column.id === 'select' ? '3' : undefined}\n                justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined}\n                column={header.column}\n                key={header.id}\n              >\n                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n              </TableHeader>\n            ))}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBody>\n        {table.getRowModel().rows.map((row) => (\n          <TableRow row={row} key={row.id}>\n            {row.getVisibleCells().map((cell) => (\n              <TableData\n                textAlign={cell.column.id === 'visits' ? 'end' : undefined}\n                paddingX={cell.column.id === 'select' ? '3' : undefined}\n                cell={cell}\n                key={cell.id}\n              >\n                {flexRender(cell.column.columnDef.cell, cell.getContext())}\n              </TableData>\n            ))}\n          </TableRow>\n        ))}\n      </TableBody>\n    </Table>\n  </TableContainer>\n);\n`\n      }\n    }\n  }\n}",
      ...index_stories_MultiSelect.parameters?.docs?.source
    }
  }
};
index_stories_StickyColumns.parameters = {
  ...index_stories_StickyColumns.parameters,
  docs: {
    ...index_stories_StickyColumns.parameters?.docs,
    source: {
      originalSource: "{\n  tags: [],\n  render: () => <StickyColumnsStory />\n}",
      ...index_stories_StickyColumns.parameters?.docs?.source
    }
  }
};
index_stories_RowActionsSticky.parameters = {
  ...index_stories_RowActionsSticky.parameters,
  docs: {
    ...index_stories_RowActionsSticky.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['snapshot-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'Check out the [Long Text column definition](?path=/docs/table-table--columns#actions).'\n      },\n      source: {\n        code: `\nconst data = useMemo(() => generateMockData(8), []);\nconst [rowSelection, setRowSelection] = useState({});\n\nconst table = useReactTable({\n  data,\n  columns: [...stickyColumns, columnsActions],\n  getCoreRowModel: getCoreRowModel(),\n  onRowSelectionChange: setRowSelection,\n  state: {\n    rowSelection,\n  },\n  initialState: {\n    columnPinning: {\n      right: ['actions'],\n      left: ['firstName'],\n    },\n  },\n});\n\nreturn (\n  <TableContainer table={table} dataTestid=\"tableContainer\">\n    <Table>\n      <TableHead>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n              <TableHeader\n                column={header.column}\n                key={header.id}\n                headerPinned={header.column.id === 'actions' ? false : undefined}\n                justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined}\n              >\n                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n              </TableHeader>\n            ))}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBody>\n        {table.getRowModel().rows.map((row) => (\n          <TableRow row={row} key={row.id}>\n            {row.getVisibleCells().map((cell) => (\n              <TableData\n                textAlign={cell.column.id === 'visits' ? 'end' : undefined}\n                cell={cell}\n                key={cell.id}\n                pinnedType={cell.column.id === 'actions' ? 'noBorder' : undefined}\n              >\n                {flexRender(cell.column.columnDef.cell, {\n                  ...cell.getContext(),\n                })}\n              </TableData>\n            ))}\n          </TableRow>\n        ))}\n      </TableBody>\n    </Table>\n  </TableContainer>\n);\n`\n      }\n    }\n  },\n  render: () => <RowActionsStickyStory />,\n  play: async ({\n    canvasElement\n  }) => {\n    if (!navigator.webdriver) {\n      return;\n    }\n    await takeScreenshot();\n    const canvas = within(canvasElement);\n    const tableContainer = canvas.getByTestId('tableContainer');\n    const table = tableContainer.getElementsByTagName('table')[0].parentElement;\n    const tableFirstRow = tableContainer.getElementsByTagName('tr')[1];\n    await it('Tests scroll behavior', async () => {\n      table?.scrollTo(100, 0);\n      await takeScreenshot(200);\n    });\n    await it('FullComposition hover on row', async () => {\n      userEvent.hover(tableFirstRow);\n      await takeScreenshot(200);\n    });\n  }\n}",
      ...index_stories_RowActionsSticky.parameters?.docs?.source
    }
  }
};
index_stories_Collapsible.parameters = {
  ...index_stories_Collapsible.parameters,
  docs: {
    ...index_stories_Collapsible.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['snapshot-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `\nconst data = useMemo(() => generateMockData(8), []);\nconst [expanded, setExpanded] = React.useState<ExpandedState>({});\n\nconst table = useReactTable({\n  data,\n  columns: [...columns, collapsible],\n  getCoreRowModel: getCoreRowModel(),\n  getExpandedRowModel: getExpandedRowModel(),\n  onExpandedChange: setExpanded,\n  getRowCanExpand: () => true,\n  state: {\n    expanded,\n  },\n  initialState: {\n    columnPinning: {\n      right: ['collapsible'],\n    },\n  },\n});\n\nreturn (\n  <TableContainer table={table} dataTestid=\"tableContainer\">\n    <Table>\n      <TableHead>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n              <TableHeader\n                justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined}\n                headerPinned={header.column.id === 'collapsible' ? false : undefined}\n                column={header.column}\n                key={header.id}\n              >\n                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n              </TableHeader>\n            ))}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBody>\n        {table.getRowModel().rows.map((row) => {\n          const toggleExpanded = row.getToggleExpandedHandler();\n          const expanded = row.getIsExpanded();\n\n          return (\n            <TableRowCollapsible\n              row={row}\n              onClick={() => {\n                toggleExpanded();\n              }}\n              expanded={expanded}\n              key={row.id}\n            >\n              {row.getVisibleCells().map((cell) => (\n                <TableData\n                  textAlign={cell.column.id === 'visits' ? 'end' : undefined}\n                  pinnedType={cell.column.id === 'collapsible' ? 'noBorder' : undefined}\n                  cell={cell}\n                  key={cell.id}\n                >\n                  {flexRender(cell.column.columnDef.cell, { ...cell.getContext(), expanded })}\n                </TableData>\n              ))}\n              <TableRowCollapsibleContent>{collapsibleContent}</TableRowCollapsibleContent>\n            </TableRowCollapsible>\n          );\n        })}\n      </TableBody>\n    </Table>\n  </TableContainer>\n);\n`\n      }\n    }\n  },\n  render: () => {\n    const data = useMemo(() => generateMockData(8), []);\n    const [expanded, setExpanded] = React.useState<ExpandedState>({});\n    const table = useReactTable({\n      data,\n      columns: [...columns, collapsible],\n      getCoreRowModel: getCoreRowModel(),\n      getExpandedRowModel: getExpandedRowModel(),\n      onExpandedChange: setExpanded,\n      getRowCanExpand: () => true,\n      state: {\n        expanded\n      },\n      initialState: {\n        columnPinning: {\n          right: ['collapsible']\n        }\n      }\n    });\n    return <TableContainer table={table} dataTestid=\"tableContainer\">\n        <Table>\n          <TableHead>\n            {table.getHeaderGroups().map(headerGroup => <TableRow key={headerGroup.id}>\n                {headerGroup.headers.map(header => <TableHeader justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined} headerPinned={header.column.id === 'collapsible' ? false : undefined} column={header.column} key={header.id}>\n                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n                  </TableHeader>)}\n              </TableRow>)}\n          </TableHead>\n          <TableBody>\n            {table.getRowModel().rows.map(row => {\n            const toggleExpanded = row.getToggleExpandedHandler();\n            const expanded = row.getIsExpanded();\n            return <TableRowCollapsible row={row} onClick={() => {\n              toggleExpanded();\n            }} expanded={expanded} key={row.id}>\n                  {row.getVisibleCells().map(cell => <TableData textAlign={cell.column.id === 'visits' ? 'end' : undefined} pinnedType={cell.column.id === 'collapsible' ? 'noBorder' : undefined} cell={cell} key={cell.id}>\n                      {flexRender(cell.column.columnDef.cell, {\n                  ...cell.getContext(),\n                  expanded\n                })}\n                    </TableData>)}\n                  <TableRowCollapsibleContent>{collapsibleContent}</TableRowCollapsibleContent>\n                </TableRowCollapsible>;\n          })}\n          </TableBody>\n        </Table>\n      </TableContainer>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    if (!navigator.webdriver) {\n      return;\n    }\n    await takeScreenshot();\n    const canvas = within(canvasElement);\n    const tableContainer = canvas.getByTestId('tableContainer');\n    const tableFirstRow = tableContainer.getElementsByTagName('tr')[1];\n    await it('tests - open dropdown', async () => {\n      tableContainer.focus();\n      userEvent.tab();\n      userEvent.tab();\n      userEvent.keyboard('[Enter]');\n      await takeScreenshot(400);\n    });\n  }\n}",
      ...index_stories_Collapsible.parameters?.docs?.source
    }
  }
};
Pagination.parameters = {
  ...Pagination.parameters,
  docs: {
    ...Pagination.parameters?.docs,
    source: {
      originalSource: "{\n  tags: [],\n  render: () => {\n    const data = useMemo(() => generateMockData(50), []);\n    const [pagination, setPagination] = useState<PaginationState>({\n      pageIndex: 0,\n      pageSize: 5\n    });\n    const table = useReactTable({\n      data,\n      columns: withColumSize,\n      getCoreRowModel: getCoreRowModel(),\n      onPaginationChange: setPagination,\n      getPaginationRowModel: getPaginationRowModel(),\n      state: {\n        pagination\n      }\n    });\n    return <TableContainer table={table} dynamicCellWidth={false}>\n        <Table height={!data.length ? '500px' : undefined}>\n          <TableHead>\n            {table.getHeaderGroups().map(headerGroup => <TableRow key={headerGroup.id}>\n                {headerGroup.headers.map(header => <TableHeader justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined} column={header.column} key={header.id}>\n                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n                  </TableHeader>)}\n              </TableRow>)}\n          </TableHead>\n          <TableBody initialRowCount={5}>\n            {table.getRowModel().rows.map(row => <TableRow row={row} key={row.id}>\n                {row.getVisibleCells().map(cell => <TableData textAlign={cell.column.id === 'visits' ? 'end' : undefined} cell={cell} key={cell.id}>\n                    {flexRender(cell?.column?.columnDef?.cell, cell?.getContext())}\n                  </TableData>)}\n              </TableRow>)}\n          </TableBody>\n        </Table>\n        <TableContainerFooter justifyContent=\"spaceBetween\">\n          {footerText}\n          <TablePagination />\n        </TableContainerFooter>\n      </TableContainer>;\n  }\n}",
      ...Pagination.parameters?.docs?.source
    }
  }
};
ServerPagination.parameters = {
  ...ServerPagination.parameters,
  docs: {
    ...ServerPagination.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['snapshot-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'To prevent layout shift when the data loads, set a size for each column. [Learn more](?path=/docs/table-table--columns#size)'\n      }\n    }\n  },\n  render: () => {\n    const [data, setData] = useState<Person[]>([]);\n    const [pagination, setPagination] = useState<PaginationState>({\n      pageIndex: 0,\n      pageSize: 5\n    });\n    const [loading, setLoading] = useState(Boolean(!data.length));\n    const [rowCount, setRowCount] = useState(0);\n    useEffect(() => {\n      const fetchData = async () => {\n        setLoading(true);\n        try {\n          const response = await fetchPaginatedData(pagination.pageIndex + 1, pagination.pageSize);\n          setData(response.data);\n          setRowCount(response.rowCount);\n        } finally {\n          setLoading(false);\n        }\n      };\n      fetchData();\n    }, [pagination.pageIndex, pagination.pageSize]);\n    const table = useReactTable({\n      data,\n      columns: withColumSize,\n      getCoreRowModel: getCoreRowModel(),\n      onPaginationChange: setPagination,\n      manualPagination: true,\n      rowCount,\n      state: {\n        pagination\n      }\n    });\n    return <TableContainer table={table} loading={loading} dynamicCellWidth={false}>\n        <Table height={!data.length ? '500px' : undefined}>\n          <TableHead>\n            {table.getHeaderGroups().map(headerGroup => <TableRow key={headerGroup.id}>\n                {headerGroup.headers.map(header => <TableHeader justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined} column={header.column} key={header.id}>\n                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n                  </TableHeader>)}\n              </TableRow>)}\n          </TableHead>\n          <TableBody initialRowCount={5}>\n            {table.getRowModel().rows.map(row => <TableRow row={row} key={row.id}>\n                {row.getVisibleCells().map(cell => <TableData textAlign={cell.column.id === 'visits' ? 'end' : undefined} cell={cell} key={cell.id}>\n                    {flexRender(cell?.column?.columnDef?.cell, cell?.getContext())}\n                  </TableData>)}\n              </TableRow>)}\n          </TableBody>\n        </Table>\n        <TableContainerFooter justifyContent=\"spaceBetween\">\n          {footerText} <TablePagination />\n        </TableContainerFooter>\n      </TableContainer>;\n  }\n}",
      ...ServerPagination.parameters?.docs?.source
    }
  }
};
VirtualizedRows.parameters = {
  ...VirtualizedRows.parameters,
  docs: {
    ...VirtualizedRows.parameters?.docs,
    source: {
      originalSource: "{\n  tags: [],\n  render: () => <VirtualizedRowsStory />,\n  parameters: {\n    docs: {\n      source: {\n        code: `\n\n// TableBodyWrapper/index.tsx\n\nconst TableBodyWrapper = ({ table, tableContainerRef }: TableBodyProps) => {\nconst { rows } = table.getRowModel();\nconst [ready, setReady] = useState(false);\n\nuseEffect(() => {\n  if (tableContainerRef.current) {\n    setReady(true);\n  }\n}, [tableContainerRef]);\n\nconst rowVirtualizer = useVirtualizer<HTMLDivElement, HTMLTableRowElement>({\n  count: rows.length,\n  estimateSize: () => 88,\n  getScrollElement: () => (ready ? tableContainerRef.current : null),\n  measureElement:\n    typeof window !== 'undefined' && navigator.userAgent.indexOf('Firefox') === -1\n      ? (element) => element?.getBoundingClientRect().height\n      : undefined,\n  overscan: 5,\n});\n\nreturn (\n  <TableBody height={rowVirtualizer.getTotalSize()} position=\"relative\">\n    {rowVirtualizer.getVirtualItems().map((virtualRow) => {\n      const row = rows[virtualRow.index] as Row<Person>;\n\n      return (\n        <TableRow\n          dataIndex={virtualRow.index}\n          ref={(node) => rowVirtualizer.measureElement(node)}\n          key={row.id}\n          display=\"flex\"\n          transform={'translateY({virtualRow.start}px)'}\n          position=\"absolute\"\n          width=\"100%\"\n        >\n          {row.getVisibleCells().map((cell) => (\n            <TableData justifyContent={cell.column.id === 'visits' ? 'flexEnd' : undefined} cell={cell} key={cell.id} flex={1} display=\"flex\">\n              {flexRender(cell.column.columnDef.cell, cell.getContext())}\n            </TableData>\n          ))}\n        </TableRow>\n      );\n    })}\n  </TableBody>\n);\n};\n\n// index.tsx\n\nconst tableContainerRef = React.useRef<HTMLDivElement>(null);\nconst data = useMemo(() => generateMockData(5000), []);\n\nconst table = useReactTable({\n  data,\n  columns: withColumSize,\n  getCoreRowModel: getCoreRowModel(),\n  debugTable: true,\n});\n\nreturn (\n  <TableContainer table={table}>\n    <Table ref={tableContainerRef} height=\"600px\">\n      <TableHead isSticky>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow display=\"flex\" width=\"100%\" key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n              <TableHeader justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined} flex={1} width={header.column.getSize()} column={header.column} key={header.id}>\n                {flexRender(header.column.columnDef.header, header.getContext())}\n              </TableHeader>\n            ))}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBodyWrapper table={table} tableContainerRef={tableContainerRef} />\n    </Table>\n  </TableContainer>\n);`\n      }\n    }\n  }\n}",
      ...VirtualizedRows.parameters?.docs?.source
    }
  }
};
index_stories_VirtualizedColumns.parameters = {
  ...index_stories_VirtualizedColumns.parameters,
  docs: {
    ...index_stories_VirtualizedColumns.parameters?.docs,
    source: {
      originalSource: "{\n  tags: [],\n  render: () => <VirtualizedColumnsStory />,\n  parameters: {\n    docs: {\n      source: {\n        code: `\n\n// TableBodyWrapper/index.tsx\n\nconst TableBodyWrapper = ({\n  columnVirtualizer,\n  table,\n  tableContainerRef,\n  virtualPaddingLeft,\n  virtualPaddingRight,\n}: TableBodyWrapperProps) => {\n  const { rows } = table.getRowModel();\n  const rowVirtualizer = useVirtualizer<HTMLDivElement, HTMLTableRowElement>({\n    count: rows.length,\n    estimateSize: () => 88,\n    getScrollElement: () => tableContainerRef.current,\n    measureElement:\n      typeof window !== 'undefined' && navigator.userAgent.indexOf('Firefox') === -1\n        ? (element) => element?.getBoundingClientRect().height\n        : undefined,\n    overscan: 5,\n  });\n\n  const virtualRows = rowVirtualizer.getVirtualItems();\n\n  return (\n    <TableBody height={'{rowVirtualizer.getTotalSize()}px'} position=\"relative\">\n      {virtualRows.map((virtualRow) => {\n        const row = rows[virtualRow.index] as Row<Person>;\n        const visibleCells = row.getVisibleCells();\n        const virtualColumns = columnVirtualizer.getVirtualItems();\n\n        return (\n          <TableRow\n            data-index={virtualRow.index}\n            ref={(node) => rowVirtualizer.measureElement(node)}\n            key={row.id}\n            display=\"flex\"\n            position=\"absolute\"\n            transform={'translateY({virtualRow.start}px)'}\n            width=\"100%\"\n          >\n            {virtualPaddingLeft ? <td style={{ display: 'flex', width: virtualPaddingLeft }} /> : null}\n            {virtualColumns.map((vc) => {\n              const cell = visibleCells[vc.index];\n              return (\n                <TableData  textAlign={cell.column.id === 'visits' ? 'end' : undefined} cell={cell} display=\"flex\" width={cell.column.getSize()} key={cell.id}>\n                  {flexRender(cell.column.columnDef.cell, cell.getContext())}\n                </TableData>\n              );\n            })}\n            {virtualPaddingRight ? <td style={{ display: 'flex', width: virtualPaddingRight }} /> : null}\n          </TableRow>\n        );\n      })}\n    </TableBody>\n  );\n\n// index.tsx\n\nconst columns = useMemo<ColumnDef<Person>[]>(() => makeColumns(100), []);\nconst data = useMemo(() => makeData(100, columns), [columns]);\n\nconst table = useReactTable({\n  data,\n  columns,\n  getCoreRowModel: getCoreRowModel(),\n  getSortedRowModel: getSortedRowModel(),\n  debugTable: true,\n});\n\nconst visibleColumns = table.getVisibleLeafColumns();\nconst tableContainerRef = React.useRef<HTMLTableElement>(null);\nconst columnVirtualizer = useVirtualizer<HTMLDivElement, HTMLTableCellElement>({\n  count: visibleColumns.length,\n  estimateSize: (index) => visibleColumns[index].getSize(),\n  getScrollElement: () => tableContainerRef.current,\n  horizontal: true,\n  overscan: 3,\n});\n\nconst virtualColumns = columnVirtualizer.getVirtualItems();\n\nlet virtualPaddingLeft;\nlet virtualPaddingRight;\n\nif (virtualColumns?.length) {\n  virtualPaddingLeft = virtualColumns[0]?.start ?? 0;\n  virtualPaddingRight = columnVirtualizer.getTotalSize() - (virtualColumns[virtualColumns.length - 1]?.end ?? 0);\n}\n\nreturn (\n  <TableContainer table={table}>\n    <Table height=\"800px\" ref={tableContainerRef}>\n      <TableHead isSticky>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow key={headerGroup.id} display=\"flex\" width=\"100%\">\n            {virtualPaddingLeft ? <TableHeader justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined} width={virtualPaddingLeft} /> : null}\n            {virtualColumns.map((virtualColumn) => {\n              const header = headerGroup.headers[virtualColumn.index];\n              return (\n                <TableHeader justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined} key={header.id} column={header.column} width={header.getSize()}>\n                  {flexRender(header.column.columnDef.header, header.getContext())}\n                </TableHeader>\n              );\n            })}\n            {virtualPaddingRight ? <TableHeader justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined} width={virtualPaddingRight} /> : null}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBodyWrapper\n        columnVirtualizer={columnVirtualizer}\n        table={table}\n        tableContainerRef={tableContainerRef}\n        virtualPaddingLeft={virtualPaddingLeft}\n        virtualPaddingRight={virtualPaddingRight}\n      />\n    </Table>\n  </TableContainer>\n);\n`\n      }\n    }\n  }\n}",
      ...index_stories_VirtualizedColumns.parameters?.docs?.source
    }
  }
};
Filters.parameters = {
  ...Filters.parameters,
  docs: {
    ...Filters.parameters?.docs,
    source: {
      originalSource: "{\n  tags: [],\n  render: () => {\n    const data = useMemo(() => generateMockData(50), []);\n    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);\n    const activeFilters = useMemo(() => columnFilters.filter(f => f.id !== 'firstName'), [columnFilters]);\n    const [pagination, setPagination] = React.useState<PaginationState>({\n      pageIndex: 0,\n      pageSize: 10\n    });\n    const table = useReactTable({\n      data,\n      columns,\n      getPaginationRowModel: getPaginationRowModel(),\n      onPaginationChange: setPagination,\n      getCoreRowModel: getCoreRowModel(),\n      onColumnFiltersChange: setColumnFilters,\n      getFilteredRowModel: getFilteredRowModel(),\n      state: {\n        columnFilters,\n        pagination\n      }\n    });\n    return <TableContainer table={table}>\n        <TableContainerHeader>\n          <TableTitle>\n            Table Title\n            <Text>Table Subtitle</Text>\n          </TableTitle>\n          <TableHeaderActions>\n            <Stack gap=\"1\">\n              <IconButton size=\"sm\" aria-label=\"download\" variant=\"ghost\" intent=\"secondary\">\n                <DownloadIcon />\n              </IconButton>\n              <IconButton size=\"sm\" aria-label=\"share\" variant=\"ghost\" intent=\"secondary\">\n                <ShareIcon />\n              </IconButton>\n            </Stack>\n            <Button intent=\"primary\" size=\"sm\" variant=\"outline\">\n              Buy from\n            </Button>\n          </TableHeaderActions>\n          <TableFilters>\n            <Select placeholder=\"Status\" value={{\n            status: table.getColumn('status')?.getFilterValue() as string[]\n          }} onChange={({\n            status\n          }) => {\n            table.getColumn('status')?.setFilterValue(isEmpty(status) ? undefined : status);\n          }}>\n              <OptionGroup isMulti label=\"Status\" name=\"status\">\n                {statuses.map(status => <Option key={status} value={status}>\n                    {status}\n                  </Option>)}\n              </OptionGroup>\n            </Select>\n            <Select placeholder=\"Country\" value={{\n            country: table.getColumn('country')?.getFilterValue() as string[]\n          }} onChange={({\n            country\n          }) => {\n            table.getColumn('country')?.setFilterValue(isEmpty(country) ? undefined : country);\n          }}>\n              <OptionGroup isMulti name=\"country\">\n                {countries.map(country => <Option key={country} value={country}>\n                    {country}\n                  </Option>)}\n              </OptionGroup>\n            </Select>\n            <TableSearchInput value={table.getColumn('firstName')?.getFilterValue() as string} onChange={e => {\n            table.getColumn('firstName')?.setFilterValue(e.target.value);\n          }} />\n            <TableActiveFilters onClickClear={() => table.setColumnFilters(prev => prev.filter(filter => filter.id === 'firstName'))} showClearButton={Boolean(activeFilters.length)} activeFilters={activeFilters} />\n          </TableFilters>\n        </TableContainerHeader>\n        <TableItemsCounter />\n        <Table>\n          <TableHead>\n            {table.getHeaderGroups().map(headerGroup => <TableRow key={headerGroup.id}>\n                {headerGroup.headers.map(header => <TableHeader justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined} column={header.column} key={header.id}>\n                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n                  </TableHeader>)}\n              </TableRow>)}\n          </TableHead>\n          <TableBody>\n            {table.getRowModel().rows.map(row => <TableRow row={row} key={row.id}>\n                {row.getVisibleCells().map(cell => <TableData textAlign={cell.column.id === 'visits' ? 'end' : undefined} cell={cell} key={cell.id}>\n                    {flexRender(cell.column.columnDef.cell, cell.getContext())}\n                  </TableData>)}\n              </TableRow>)}\n          </TableBody>\n        </Table>\n        <TableContainerFooter justifyContent=\"spaceBetween\">\n          {footerText} <TablePagination />\n        </TableContainerFooter>\n      </TableContainer>;\n  }\n}",
      ...Filters.parameters?.docs?.source
    }
  }
};
Sorting.parameters = {
  ...Sorting.parameters,
  docs: {
    ...Sorting.parameters?.docs,
    source: {
      originalSource: "{\n  tags: [],\n  parameters: {\n    docs: {\n      source: {\n        code: `\nconst data = useMemo(() => generateMockData(50), []);\nconst [sorting, setSorting] = useState<SortingState>([]);\n\nconst table = useReactTable({\n  data,\n  columns,\n  getCoreRowModel: getCoreRowModel(),\n  getPaginationRowModel: getPaginationRowModel(),\n  onSortingChange: setSorting,\n  getSortedRowModel: getSortedRowModel(),\n  state: {\n    sorting,\n  },\n});\n\nreturn (\n  <TableContainer table={table} dynamicCellWidth={false}>\n    <Table height={!data.length ? '500px' : undefined}>\n      <TableHead>\n        {table.getHeaderGroups().map((headerGroup) => (\n          <TableRow key={headerGroup.id}>\n            {headerGroup.headers.map((header) => (\n              <TableHeader\n                justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined}\n                isSortable\n                onClick={header.column.getToggleSortingHandler()}\n                column={header.column}\n                key={header.id}\n              >\n                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n              </TableHeader>\n            ))}\n          </TableRow>\n        ))}\n      </TableHead>\n      <TableBody initialRowCount={5}>\n        {table.getRowModel().rows.map((row) => (\n          <TableRow row={row} key={row.id}>\n            {row.getVisibleCells().map((cell) => (\n              <TableData textAlign={cell.column.id === 'visits' ? 'end' : undefined} cell={cell} key={cell.id}>\n                {flexRender(cell?.column?.columnDef?.cell, cell?.getContext())}\n              </TableData>\n            ))}\n          </TableRow>\n        ))}\n      </TableBody>\n    </Table>\n    <TableContainerFooter justifyContent=\"spaceBetween\">\n      {footerText} <TablePagination />\n    </TableContainerFooter>\n  </TableContainer>\n);\n`\n      }\n    }\n  },\n  render: () => {\n    const data = useMemo(() => generateMockData(50), []);\n    const [sorting, setSorting] = useState<SortingState>([]);\n    const table = useReactTable({\n      data,\n      columns,\n      getCoreRowModel: getCoreRowModel(),\n      getPaginationRowModel: getPaginationRowModel(),\n      onSortingChange: setSorting,\n      getSortedRowModel: getSortedRowModel(),\n      state: {\n        sorting\n      }\n    });\n    return <TableContainer table={table} dynamicCellWidth={false}>\n        <Table height={!data.length ? '500px' : undefined}>\n          <TableHead>\n            {table.getHeaderGroups().map(headerGroup => <TableRow key={headerGroup.id}>\n                {headerGroup.headers.map(header => <TableHeader justifyContent={header.column.id === 'visits' ? 'flexEnd' : undefined} isSortable onClick={header.column.getToggleSortingHandler()} column={header.column} key={header.id}>\n                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}\n                  </TableHeader>)}\n              </TableRow>)}\n          </TableHead>\n          <TableBody initialRowCount={5}>\n            {table.getRowModel().rows.map(row => <TableRow row={row} key={row.id}>\n                {row.getVisibleCells().map(cell => <TableData textAlign={cell.column.id === 'visits' ? 'end' : undefined} cell={cell} key={cell.id}>\n                    {flexRender(cell?.column?.columnDef?.cell, cell?.getContext())}\n                  </TableData>)}\n              </TableRow>)}\n          </TableBody>\n        </Table>\n        <TableContainerFooter justifyContent=\"spaceBetween\">\n          {footerText} <TablePagination />\n        </TableContainerFooter>\n      </TableContainer>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    await takeScreenshot();\n    const canvas = within(canvasElement);\n    const firstNameHeader = canvas.getByText('First Name');\n    userEvent.hover(firstNameHeader);\n    await takeScreenshot();\n    userEvent.click(firstNameHeader);\n    await takeScreenshot(200);\n    userEvent.click(firstNameHeader);\n    await takeScreenshot(200);\n    userEvent.click(firstNameHeader);\n    await takeScreenshot(200);\n  }\n}",
      ...Sorting.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","FullComposition","Compact","ZebraStyle","LongTextCell","MultiSelect","StickyColumns","RowActionsSticky","Collapsible","Pagination","ServerPagination","VirtualizedRows","VirtualizedColumns","Filters","Sorting"];

/***/ }),

/***/ "../tooltip/dist/esm/src/components/Tooltip/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../popover/dist/esm/src/components/Popover/index.js");
/* harmony import */ var _fiverr_private_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverChevron/index.js");
/* harmony import */ var _fiverr_private_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContent/index.js");
/* harmony import */ var _fiverr_private_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverAnchor/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
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



const Tooltip = _ref => {
  let {
    position = 'top',
    size = 'md',
    appendToBody = false,
    isOpen,
    onOpenChanged,
    content,
    disableFlip = false,
    children,
    as = 'span',
    offset,
    withDelay = true,
    anchorProps,
    dataTrackTag = 'tooltip',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_popover__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    triggerEvent: "hover",
    isOpen: isOpen,
    position: position,
    onOpenChanged: onOpenChanged,
    disableFlip: disableFlip,
    offset: offset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_popover__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, _objectSpread({
    as: as,
    dataTrackTag: "tooltip_anchor"
  }, anchorProps), children), content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_popover__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    backgroundColor: "grey_1100",
    appendToBody: appendToBody,
    zIndex: "tooltip",
    disablePadding: true,
    disableBoxShadow: true,
    borderRadius: "lg",
    disableAutoFocus: true,
    withDelay: withDelay,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_popover__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    size: "sm"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    color: "white",
    maxWidth: 256,
    boxSizing: "borderBox",
    paddingY: size === 'sm' ? '1.5' : '2.5',
    paddingX: size === 'sm' ? '2' : '3',
    fontSize: size === 'sm' ? 'b_xs' : 'b_sm',
    lineHeight: size === 'sm' ? 'b_xs' : 'b_sm'
  }, content)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tooltip);
;
Tooltip.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Tooltip"
};

/***/ }),

/***/ "../transition/dist/esm/src/components/Collapse/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ }),

/***/ "../transition/dist/esm/src/components/Wipe/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Wipe)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
;// ../transition/dist/esm/src/components/Wipe/constants.js
const DURATION = {
  fast: '1s',
  moderate: '1.5s',
  slow: '2s'
};
const DELAY = {
  fast: '250ms',
  moderate: '500ms',
  slow: '750ms'
};
;// ../transition/dist/esm/src/components/transition/dist/esm/src/components/Wipe/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../transition/dist/esm/src/components/Wipe/styles.ve.css.js.vanilla.css","source":"QGtleWZyYW1lcyBpeXNhdm4wIHsKICAwJSB7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHNrZXcoMTU1ZGVnKTsKICB9CiAgMTAwJSB7CiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSkgc2tldygxNTVkZWcpOwogIH0KfQouaXlzYXZuMSB7CiAgYW5pbWF0aW9uOiBpeXNhdm4wIGVhc2UtaW4tb3V0IGluZmluaXRlOzsKfQ=="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../transition/dist/esm/src/components/Wipe/styles.ve.css.js

var wipeAnimation = 'iysavn1';
;// ../transition/dist/esm/src/components/Wipe/index.js




const WIPE_COLOR = 'rgba(255, 255, 255, 0.3)';
const Wipe = _ref => {
  let {
    animationDuration = 'moderate',
    animationDelay = 'moderate',
    dataTestId
  } = _ref;
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    className: wipeAnimation,
    style: {
      animationDelay: DELAY[animationDelay],
      animationDuration: DURATION[animationDuration]
    },
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    margin: "autoY",
    background: "linear-gradient(85deg, transparent 25%, ".concat(WIPE_COLOR, " 50%, ").concat(WIPE_COLOR, " 55%, transparent 75%)"),
    "data-testid": dataTestId
  });
};
Wipe.displayName = 'Wipe';
/* harmony default export */ const components_Wipe = (Wipe);
;
Wipe.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Wipe"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Times.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const TimesIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('TimesIcon')
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
    d: "M13 3 8 8m0 0-5 5m5-5 5 5M8 8 3 3",
    vectorEffect: "non-scaling-stroke"
  }));
};
TimesIcon.id = 'TimesIcon';
TimesIcon.displayName = 'TimesIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimesIcon);
;
TimesIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TimesIcon"
};

/***/ })

}]);
//# sourceMappingURL=3528.c8e2d1c3.iframe.bundle.js.map