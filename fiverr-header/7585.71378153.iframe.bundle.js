"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[7585],{

/***/ "../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var _fiverr_private_fiverr_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
/* harmony import */ var _injectTemplates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/injectTemplates/index.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


function translate(key) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!key) {
    throw new Error('key must be provided to `translate`.');
  }
  let locale;
  if (options.locale) {
    locale = options.locale;
  } else {
    locale = (0,_fiverr_private_fiverr_context__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)().locale;
  }
  const data = _objectSpread(_objectSpread({}, options.params), {}, {
    $scope: locale
  });
  let output;
  try {
    output = i18n.t(key, data);
  } catch (e) {
    output = key;
  }
  if ((0,_injectTemplates__WEBPACK_IMPORTED_MODULE_1__/* .shouldInjectTemplates */ .C)(output)) {
    return (0,_injectTemplates__WEBPACK_IMPORTED_MODULE_1__/* .injectTemplates */ .t)(output, options.templates);
  }
  return output;
}

/***/ }),

/***/ "../button/dist/esm/src/components/TextButton/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_TextButton)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/BaseButton/style.js
var style = __webpack_require__("../button/dist/esm/src/components/BaseButton/style.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/BaseButton/hooks/useGetButtonElement/index.js
var useGetButtonElement = __webpack_require__("../button/dist/esm/src/components/BaseButton/hooks/useGetButtonElement/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/styles.ve.css.js + 1 modules
var styles_ve_css = __webpack_require__("../theme/dist/esm/src/atoms/styles.ve.css.js");
;// ../button/dist/esm/src/components/TextButton/style.js

const getColorByIntent = (disabled, intent) => {
  if (disabled) {
    return 'grey_800';
  }
  return intent === 'primary' ? 'grey_1200' : 'red_900';
};
const getStylingProps = (size, intent, variant, disabled) => ({
  fontSize: (0,styles_ve_css/* mapResponsiveStyles */.d0)(size, value => "b_".concat(value)),
  lineHeight: (0,styles_ve_css/* mapResponsiveStyles */.d0)(size, value => "b_".concat(value)),
  decoration: variant === 'default' ? {
    hover: 'underline'
  } : {
    default: 'underline'
  },
  color: getColorByIntent(disabled, intent)
});
;// ../button/dist/esm/src/components/TextButton/index.js
const _excluded = ["intent", "size", "variant", "disabled", "href", "children", "dataTrackTag"];
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





const TextButton = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      intent = 'primary',
      size = 'md',
      variant = 'default',
      disabled,
      href,
      children,
      dataTrackTag = 'text_button'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const {
    element,
    role
  } = (0,useGetButtonElement/* default */.A)(href);
  const baseStylingProps = (0,style/* getBaseStylingProps */.S)(disabled, false);
  const stylingProps = getStylingProps(size, intent, variant, disabled);
  return /*#__PURE__*/react.createElement(Box/* default */.A, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, baseStylingProps), stylingProps), rest), {}, {
    as: element,
    role: role,
    href: href,
    ref: ref,
    disabled: disabled,
    dataTrackTag: dataTrackTag
  }), children);
});
TextButton.displayName = 'TextButton';
/* harmony default export */ const components_TextButton = (TextButton);
;
TextButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TextButton"
};

/***/ }),

/***/ "../data_display/dist/esm/src/components/Tag/TagCloseIcon/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tag_TagCloseIcon)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Times.js
var Times = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Times.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js
var translate = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/Tag/TagContext/index.js
var TagContext = __webpack_require__("../data_display/dist/esm/src/components/Tag/TagContext/index.js");
;// ../data_display/dist/esm/src/components/Tag/TagCloseIcon/styles.js
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
const getCloseIconStyles = _ref => {
  let {
    isClickable,
    variant,
    isDark
  } = _ref;
  return _objectSpread(_objectSpread({
    boxSizing: 'borderBox',
    display: 'inlineFlex',
    padding: '1',
    borderRadius: 'circle',
    outlineColor: {
      focusVisible: isDark ? 'white_10' : 'grey_1200'
    },
    outlineStyle: {
      focusVisible: 'solid'
    },
    outlineWidth: {
      focusVisible: 'md'
    },
    height: '24px',
    width: '24px'
  }, isClickable && variant === 'filled' && {
    backgroundColor: {
      default: 'transparent',
      hover: isDark ? 'white_20' : 'grey_200',
      active: isDark ? 'white_20' : 'grey_300'
    }
  }), isClickable && variant === 'outline' && {
    backgroundColor: {
      default: 'transparent',
      hover: isDark ? 'white_20' : 'grey_400',
      active: isDark ? 'white_20' : 'grey_500'
    }
  });
};
;// ../data_display/dist/esm/src/components/Tag/TagCloseIcon/index.js
function TagCloseIcon_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function TagCloseIcon_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? TagCloseIcon_ownKeys(Object(t), !0).forEach(function (r) {
      TagCloseIcon_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : TagCloseIcon_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function TagCloseIcon_defineProperty(e, r, t) {
  return (r = TagCloseIcon_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function TagCloseIcon_toPropertyKey(t) {
  var i = TagCloseIcon_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function TagCloseIcon_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}






const TagCloseIcon = _ref => {
  let {
    onClick,
    dataTrackTag = 'tag_close_icon',
    dataTrackValue
  } = _ref;
  const {
    clickableArea,
    setIsOpen,
    variant,
    hideOnClick,
    isDark
  } = (0,TagContext/* useTagContext */.v)();
  const isClickable = clickableArea === 'closeButton' || clickableArea === 'multi';
  const onCloseIconClick = e => {
    if (isClickable) {
      e.stopPropagation();
      onClick === null || onClick === void 0 || onClick(e);
      if (hideOnClick) {
        setIsOpen(false);
      }
    }
  };
  return /*#__PURE__*/react.createElement(Box/* default */.A, TagCloseIcon_objectSpread(TagCloseIcon_objectSpread({}, getCloseIconStyles({
    isClickable,
    variant,
    isDark
  })), {}, {
    as: isClickable ? 'button' : 'div',
    role: isClickable ? 'button' : undefined,
    "aria-label": isClickable ? (0,translate/* translate */.T)('data_display.tag.close') : undefined,
    onClick: onCloseIconClick,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }), /*#__PURE__*/react.createElement(Times/* default */.A, {
    size: "sm",
    color: isDark ? 'grey_400' : 'grey_1200'
  }));
};
TagCloseIcon.displayName = 'TagCloseIcon';
TagCloseIcon.id = 'TagCloseIcon';
/* harmony default export */ const Tag_TagCloseIcon = (TagCloseIcon);
;
TagCloseIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TagCloseIcon"
};

/***/ }),

/***/ "../feedback/dist/esm/src/components/Alert/AlertActionButton/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
/* harmony import */ var _fiverr_private_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../button/dist/esm/src/components/TextButton/index.js");


const AlertActionButton = _ref => {
  let {
    children,
    intent = 'primary',
    onClick,
    href,
    dataTrackTag = 'alert_action_button',
    dataTrackValue
  } = _ref;
  const ButtonComponent = intent === 'primary' ? _fiverr_private_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A : _fiverr_private_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ButtonComponent, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    onClick: onClick,
    href: href,
    target: href ? '_blank' : undefined,
    size: "sm"
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertActionButton);
;
AlertActionButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AlertActionButton"
};

/***/ }),

/***/ "../feedback/dist/esm/src/components/Alert/AlertActions/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../feedback/dist/esm/src/components/Alert/constants.js");
/* harmony import */ var _AlertContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../feedback/dist/esm/src/components/Alert/AlertContext/index.js");




const AlertActions = _ref => {
  let {
    children
  } = _ref;
  const {
    forceMobileDesign
  } = (0,_AlertContext__WEBPACK_IMPORTED_MODULE_3__/* .useAlertContext */ .Z)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    display: "flex",
    marginTop: forceMobileDesign ? '4' : {
      default: '4',
      md: '0'
    },
    marginLeft: forceMobileDesign ? '0' : {
      default: '0',
      md: '8'
    },
    alignSelf: forceMobileDesign ? 'flexEnd' : {
      default: 'flexEnd',
      md: 'center'
    },
    alignItems: "center",
    whiteSpace: "nowrap",
    flexShrink: 0,
    gap: "4"
  }, children);
};
AlertActions.id = _constants__WEBPACK_IMPORTED_MODULE_2__/* .ALERT_ACTIONS_ID */ .nq;
AlertActions.displayName = 'AlertActions';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertActions);
;
AlertActions.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AlertActions"
};

/***/ }),

/***/ "../feedback/dist/esm/src/components/Alert/AlertContext/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ AlertContext),
/* harmony export */   Z: () => (/* binding */ useAlertContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const AlertContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useAlertContext = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(AlertContext);
  if (context === undefined) {
    throw new Error('useAlertContext must be used within a AlertContextProvider');
  }
  return context;
};

/***/ }),

/***/ "../feedback/dist/esm/src/components/Alert/AlertText/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../feedback/dist/esm/src/components/Alert/constants.js");



const AlertText = _ref => {
  let {
    children,
    dataTrackTag = 'alert_text',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    color: "inherit",
    size: "b_sm"
  }, children);
};
AlertText.id = _constants__WEBPACK_IMPORTED_MODULE_2__/* .ALERT_TEXT_ID */ .f0;
AlertText.displayName = 'AlertText';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertText);
;
AlertText.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AlertText"
};

/***/ }),

/***/ "../feedback/dist/esm/src/components/Alert/AlertTitle/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../feedback/dist/esm/src/components/Alert/constants.js");



const AlertTitle = _ref => {
  let {
    children,
    dataTrackTag = 'alert_title',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    fontWeight: "semibold",
    color: "inherit",
    size: "b_sm"
  }, children);
};
AlertTitle.id = _constants__WEBPACK_IMPORTED_MODULE_2__/* .ALERT_TITLE_ID */ .Si;
AlertTitle.displayName = 'AlertTitle';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertTitle);
;
AlertTitle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AlertTitle"
};

/***/ }),

/***/ "../feedback/dist/esm/src/components/Alert/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Si: () => (/* binding */ ALERT_TITLE_ID),
/* harmony export */   W3: () => (/* binding */ VARIANTS_CONFIG),
/* harmony export */   f0: () => (/* binding */ ALERT_TEXT_ID),
/* harmony export */   nq: () => (/* binding */ ALERT_ACTIONS_ID),
/* harmony export */   vZ: () => (/* binding */ ALERT_ICON_ID)
/* harmony export */ });
/* unused harmony export VARIANT */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/AlertHexagon.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/CheckCircle.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/InfoCircle.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Coupon.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/WarningCircle.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Lightbulb.js");


const VARIANT = {
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success',
  NEUTRAL: 'neutral',
  SPECIAL: 'special'
};
const VARIANTS_CONFIG = {
  neutral: {
    Icon: _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
    backgroundColor: 'grey_100',
    borderColor: 'grey_400'
  },
  info: {
    Icon: _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
    backgroundColor: 'blue_100',
    borderColor: 'blue_400'
  },
  warning: {
    Icon: _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
    backgroundColor: 'yellow_100',
    borderColor: 'yellow_400'
  },
  success: {
    Icon: _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
    backgroundColor: 'green_100',
    borderColor: 'green_400'
  },
  error: {
    Icon: _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    backgroundColor: 'red_100',
    borderColor: 'red_400'
  },
  special: {
    Icon: _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
    backgroundColor: 'purple_100',
    borderColor: 'purple_400'
  }
};
const ALERT_TITLE_ID = 'AlertTitle';
const ALERT_TEXT_ID = 'AlertText';
const ALERT_ACTIONS_ID = 'AlertActions';
const ALERT_ICON_ID = 'AlertIcon';

/***/ }),

/***/ "../feedback/dist/esm/src/components/Alert/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Alert)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Alert/constants.js
var constants = __webpack_require__("../feedback/dist/esm/src/components/Alert/constants.js");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Alert/AlertContext/index.js
var AlertContext = __webpack_require__("../feedback/dist/esm/src/components/Alert/AlertContext/index.js");
;// ../feedback/dist/esm/src/components/Alert/AlertIcon/index.js




const AlertIcon = _ref => {
  let {
    children,
    dataTrackTag = 'alert_icon',
    dataTrackValue
  } = _ref;
  const {
    shouldCenterIcon
  } = (0,AlertContext/* useAlertContext */.Z)();
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    as: "span",
    display: "flex",
    flexShrink: 0,
    paddingTop: shouldCenterIcon ? undefined : '0.5',
    marginTop: shouldCenterIcon ? undefined : 'px',
    marginRight: "2",
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, children);
};
AlertIcon.id = constants/* ALERT_ICON_ID */.vZ;
AlertIcon.displayName = 'AlertIcon';
/* harmony default export */ const Alert_AlertIcon = (AlertIcon);
;
AlertIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AlertIcon"
};
;// ../feedback/dist/esm/src/components/Alert/index.js
const _excluded = ["variant", "showIcon", "children", "forceMobileDesign", "dataTrackTag"];
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






const Alert = _ref => {
  let {
      variant,
      showIcon = true,
      children,
      forceMobileDesign = false,
      dataTrackTag = 'alert'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const [dismissed, setDismissed] = (0,react.useState)(false);
  const alertTitle = (0,findChildByType/* findChildByType */.B)(children, constants/* ALERT_TITLE_ID */.Si);
  const alertText = (0,findChildByType/* findChildByType */.B)(children, constants/* ALERT_TEXT_ID */.f0);
  const alertActions = (0,findChildByType/* findChildByType */.B)(children, constants/* ALERT_ACTIONS_ID */.nq);
  const alertIcon = (0,findChildByType/* findChildByType */.B)(children, constants/* ALERT_ICON_ID */.vZ);
  const shouldCenterIcon = !alertTitle && Boolean(alertActions);
  const {
    Icon,
    backgroundColor,
    borderColor
  } = constants/* VARIANTS_CONFIG */.W3[variant];
  if (dismissed) {
    return null;
  }
  return /*#__PURE__*/react.createElement(AlertContext/* AlertContext */.C.Provider, {
    value: {
      variant,
      setDismissed,
      forceMobileDesign,
      shouldCenterIcon
    }
  }, /*#__PURE__*/react.createElement(Container/* default */.A, _objectSpread(_objectSpread({
    display: "flex",
    alignItems: shouldCenterIcon && !forceMobileDesign ? {
      md: 'center'
    } : undefined,
    padding: "4",
    borderRadius: "lg",
    color: "grey_1200",
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    borderWidth: "sm",
    role: "alert"
  }, restProps), {}, {
    dataTrackTag: dataTrackTag
  }), showIcon && (alertIcon || /*#__PURE__*/react.createElement(Alert_AlertIcon, null, /*#__PURE__*/react.createElement(Icon, {
    size: "sm"
  }))), /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "flex",
    flex: 1,
    direction: forceMobileDesign ? 'column' : {
      default: 'column',
      md: 'row'
    },
    justifyContent: forceMobileDesign ? undefined : {
      md: 'spaceBetween'
    },
    color: "inherit",
    alignItems: shouldCenterIcon && !forceMobileDesign ? {
      md: 'center'
    } : undefined
  }, /*#__PURE__*/react.createElement(Container/* default */.A, null, alertTitle, alertText), alertActions)));
};
Alert.displayName = 'Alert';
/* harmony default export */ const components_Alert = (Alert);
;
Alert.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Alert"
};

/***/ }),

/***/ "../hooks/dist/esm/src/hooks/useLockBodyScroll/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js");

const HIDDEN = 'hidden';
/**
 * Allows to lock document body overflow
 * @returns `void`
 */
const useLockBodyScroll = function () {
  let enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(() => {
    // Get original body overflow
    const originalOverflowStyle = window.getComputedStyle(document.body).overflow;
    if (enabled && originalOverflowStyle !== HIDDEN) {
      // Prevent scrolling on mount
      document.body.style.overflow = HIDDEN;
      // Re-enable scrolling when component unmounts
      return () => {
        document.body.style.overflow = originalOverflowStyle;
      };
    }
    return () => undefined;
  }, [enabled]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLockBodyScroll);

/***/ }),

/***/ "../layout_components/dist/esm/src/components/Center/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Flex/index.js");
const _excluded = ["children", "direction"];
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


const Center = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      children,
      direction = {
        default: 'column'
      }
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Flex__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    ref: ref,
    alignItems: {
      default: 'center'
    },
    justifyContent: {
      default: 'center'
    },
    direction: direction
  }, restProps), children);
});
Center.displayName = 'Center';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Center);
;
Center.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Center"
};

/***/ }),

/***/ "../overlay/dist/esm/src/components/Modal/ModalBody/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Modal_ModalBody)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/ModalContext/index.js
var ModalContext = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalContext/index.js");
;// ../overlay/dist/esm/src/components/Modal/overlay/dist/esm/src/components/Modal/ModalBody/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../overlay/dist/esm/src/components/Modal/ModalBody/styles.ve.css.js.vanilla.css","source":"Ll8xeTZiOGM4MDpsYXN0LWNoaWxkIHsKICBwYWRkaW5nLWJvdHRvbTogMjRweDsKfQpAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkgewogIC5fMXk2YjhjODA6bGFzdC1jaGlsZCB7CiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDsKICB9Cn0="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../overlay/dist/esm/src/components/Modal/ModalBody/styles.ve.css.js

var containerStyle = '_1y6b8c80';
;// ../overlay/dist/esm/src/components/Modal/ModalBody/index.js




const ModalBody = _ref => {
  let {
    children,
    topPadding = false
  } = _ref;
  const {
    centered,
    isFullscreen
  } = (0,ModalContext/* useModalContext */.k)();
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    overflowY: "auto",
    direction: "column",
    gap: "0",
    height: isFullscreen ? '100%' : {
      default: '100%',
      md: 'auto'
    },
    paddingX: {
      default: '6',
      md: '8'
    },
    paddingTop: topPadding ? {
      default: '6',
      md: '8'
    } : '0',
    paddingBottom: "0",
    alignItems: centered ? 'center' : undefined,
    className: containerStyle
  }, children);
};
ModalBody.displayName = 'ModalBody';
/* harmony default export */ const Modal_ModalBody = (ModalBody);
;
ModalBody.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ModalBody"
};

/***/ }),

/***/ "../overlay/dist/esm/src/components/Modal/ModalContent/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Modal_ModalContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/components/Fade/index.js + 1 modules
var Fade = __webpack_require__("../transition/dist/esm/src/components/Fade/index.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/components/SlideFade/index.js + 1 modules
var SlideFade = __webpack_require__("../transition/dist/esm/src/components/SlideFade/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/components/Portal/index.js + 1 modules
var Portal = __webpack_require__("../ui_utils/dist/esm/src/components/Portal/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js
var useIsomorphicLayoutEffect = __webpack_require__("../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/hooks/useExitOnEscape/index.js
var useExitOnEscape = __webpack_require__("../overlay/dist/esm/src/hooks/useExitOnEscape/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Overlay/index.js + 1 modules
var Overlay = __webpack_require__("../overlay/dist/esm/src/components/Overlay/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/ModalContext/index.js
var ModalContext = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalContext/index.js");
;// ../overlay/dist/esm/src/components/Modal/ModalContent/constants.js
const DIALOG_WIDTH = {
  sm: 520,
  md: 600,
  lg: 720,
  xl: 900,
  xxl: 1060
};
const MODAL_SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl'
};
const fullWidthProps = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
  borderRadius: 'none',
  maxHeight: 'unset',
  maxWidth: '100%',
  width: '100%'
};
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/styles.ve.css.js + 1 modules
var styles_ve_css = __webpack_require__("../theme/dist/esm/src/atoms/styles.ve.css.js");
;// ../overlay/dist/esm/src/components/Modal/ModalContent/utils.js


const getConditionalSize = size => {
  if (typeof size === 'object') {
    return (0,styles_ve_css/* mapResponsiveStyles */.d0)(size, value => DIALOG_WIDTH[value]);
  }
  return DIALOG_WIDTH[size || 'md'];
};
;// ../overlay/dist/esm/src/components/Modal/ModalContent/index.js
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










const ModalContent = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
    children,
    closeOnOverlayClick = true,
    initialFocusRef,
    renderWhenClosed = false,
    size = 'md',
    zIndex = 'overlay',
    closeOnEscapeKey = true,
    overlayTestId,
    disablePortal,
    onAnimationStart,
    onAnimationEnd,
    dataTrackTag = 'modal',
    dataTrackValue
  } = _ref;
  const contentRef = react.useRef(null);
  const {
    close,
    isOpen,
    isDark,
    isFullscreen
  } = (0,ModalContext/* useModalContext */.k)();
  (0,useIsomorphicLayoutEffect/* default */.A)(() => {
    if (contentRef.current && isOpen) {
      if (initialFocusRef !== null && initialFocusRef !== void 0 && initialFocusRef.current) {
        initialFocusRef.current.focus();
        return;
      }
      contentRef.current.focus();
    }
  }, [initialFocusRef, isOpen, contentRef]);
  (0,useExitOnEscape/* useExitOnEscape */.k)({
    enabled: closeOnEscapeKey,
    close,
    isOpen
  });
  const Wrapper = disablePortal ? react.Fragment : Portal/* default */.A;
  const wrapperProps = disablePortal ? undefined : {
    height: 0
  };
  return /*#__PURE__*/react.createElement(Wrapper, wrapperProps, /*#__PURE__*/react.createElement(Container/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    zIndex: zIndex,
    position: "relative",
    ref: ref
  }, /*#__PURE__*/react.createElement(Fade/* default */.A, {
    delay: {
      enter: 'fast1',
      exit: 'moderate1'
    },
    in: isOpen,
    unmountOnExit: !renderWhenClosed
  }, /*#__PURE__*/react.createElement(Overlay/* default */.A, {
    zIndex: "-1",
    lockBodyScroll: isOpen,
    onClick: closeOnOverlayClick ? close : undefined,
    dataTestId: overlayTestId
  })), /*#__PURE__*/react.createElement(SlideFade/* default */.A, {
    delay: "fast3",
    in: isOpen,
    unmountOnExit: !renderWhenClosed,
    onAnimationStart: onAnimationStart,
    onAnimationEnd: onAnimationEnd
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
    pointerEvents: "none",
    gap: "0"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, _objectSpread({
    as: "article",
    direction: "column",
    gap: "0",
    backgroundColor: isDark ? 'black' : 'white',
    overflow: "hidden",
    maxHeight: "90vh",
    maxWidth: {
      default: '90vw',
      lg: '1060px'
    },
    borderRadius: isDark ? '2xl' : 'xl',
    width: getConditionalSize(size),
    "aria-modal": true,
    role: "dialog",
    style: {
      pointerEvents: 'auto'
    }
  }, isFullscreen && fullWidthProps), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    ref: contentRef,
    tabIndex: -1,
    height: "100%",
    minHeight: 0,
    position: "relative",
    direction: "column",
    flex: "1",
    gap: "0"
  }, children))))));
});
ModalContent.displayName = 'ModalContent';
/* harmony default export */ const Modal_ModalContent = (ModalContent);
;
ModalContent.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ModalContent"
};

/***/ }),

/***/ "../overlay/dist/esm/src/components/Modal/ModalContext/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ ModalContext),
/* harmony export */   k: () => (/* binding */ useModalContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const ModalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useModalContext = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ModalContext);
  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalContextProvider');
  }
  return context;
};

/***/ }),

/***/ "../overlay/dist/esm/src/components/Modal/ModalFooter/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalContext/index.js");



const ModalFooter = _ref => {
  let {
    children,
    justifyContent: justifyContentProp
  } = _ref;
  const {
    centered,
    isFullscreen
  } = (0,_ModalContext__WEBPACK_IMPORTED_MODULE_2__/* .useModalContext */ .k)();
  const defaultJustifyContent = centered ? 'center' : 'flexEnd';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    alignItems: "center",
    justifyContent: justifyContentProp !== null && justifyContentProp !== void 0 ? justifyContentProp : defaultJustifyContent,
    gap: "3",
    padding: {
      default: '6',
      md: '8'
    },
    borderTopWidth: isFullscreen ? 'sm' : undefined
  }, children);
};
ModalFooter.displayName = 'ModalFooter';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalFooter);
;
ModalFooter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ModalFooter"
};

/***/ }),

/***/ "../overlay/dist/esm/src/components/Modal/ModalHeader/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _fiverr_private_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../typography/dist/esm/src/components/Heading/index.js");
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalContext/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../overlay/dist/esm/src/components/Modal/constants.js");
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






const ModalHeader = _ref => {
  let {
    children,
    floating = false
  } = _ref;
  const {
    centered,
    isDark
  } = (0,_ModalContext__WEBPACK_IMPORTED_MODULE_7__/* .useModalContext */ .k)();
  const closeButton = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .findChildByType */ .B)(children, _constants__WEBPACK_IMPORTED_MODULE_8__/* .MODAL_CLOSE_BTN_ID */ .g);
  const restOfChildren = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .excludeChildrenByType */ .h)(children, _constants__WEBPACK_IMPORTED_MODULE_8__/* .MODAL_CLOSE_BTN_ID */ .g);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, _objectSpread(_objectSpread({
    position: floating ? 'absolute' : 'relative'
  }, floating && {
    top: 0,
    left: 0,
    right: 0
  }), {}, {
    paddingY: "4",
    paddingRight: "6",
    paddingLeft: {
      default: '6',
      md: '8'
    },
    gap: "0",
    color: isDark ? 'grey_300' : undefined
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    textAlign: centered ? 'center' : undefined,
    margin: "auto",
    flex: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_typography__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    as: "h4",
    marginTop: "2",
    color: isDark ? 'inherit' : undefined
  }, (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .renderChildren */ .s)(restOfChildren))), (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .renderChildren */ .s)(closeButton));
};
ModalHeader.displayName = 'ModalHeader';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalHeader);
;
ModalHeader.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ModalHeader"
};

/***/ }),

/***/ "../overlay/dist/esm/src/components/Modal/ModalTrigger/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalContext/index.js");



const ModalTrigger = _ref => {
  let {
    children,
    as = 'span',
    dataTestId,
    isDisabled = false,
    fullWidth = false,
    dataTrackTag = 'modal_trigger',
    dataTrackValue
  } = _ref;
  const {
    open
  } = (0,_ModalContext__WEBPACK_IMPORTED_MODULE_2__/* .useModalContext */ .k)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    as: as,
    onClick: isDisabled ? undefined : open,
    "data-testid": dataTestId,
    width: fullWidth ? '100%' : undefined,
    "data-track-tag": dataTrackTag,
    "data-track-value": dataTrackValue
  }, children);
};
ModalTrigger.displayName = 'ModalTrigger';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalTrigger);
;
ModalTrigger.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ModalTrigger"
};

/***/ }),

/***/ "../overlay/dist/esm/src/components/Modal/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ MODAL_CLOSE_BTN_ID)
/* harmony export */ });
const MODAL_CLOSE_BTN_ID = 'ModalCloseBtnId';

/***/ }),

/***/ "../overlay/dist/esm/src/components/Modal/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Modal)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useElementSize/index.js + 1 modules
var useElementSize = __webpack_require__("../hooks/dist/esm/src/hooks/useElementSize/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../overlay/dist/esm/src/components/Modal/hooks/useIsFullscreen/index.js



const DEFAULT_FULL_SCREEN_BREAKPOINT = 'md';
const getFullscreenBreakpoint = _ref => {
  let {
    fullScreenBreakpoint,
    mobileFullScreen
  } = _ref;
  if (fullScreenBreakpoint !== undefined) {
    return fullScreenBreakpoint;
  }
  if (mobileFullScreen !== undefined) {
    return mobileFullScreen ? DEFAULT_FULL_SCREEN_BREAKPOINT : 'none';
  }
  return DEFAULT_FULL_SCREEN_BREAKPOINT;
};
const isFullscreenActive = _ref2 => {
  let {
    breakpoint,
    windowWidth
  } = _ref2;
  const breakpoints = themeVars/* numericBreakpoints */.Uf;
  if (breakpoint === 'none') {
    return false;
  }
  if (breakpoint === 'all') {
    return true;
  }
  if (breakpoint === 'sm' && windowWidth < breakpoints.sm) {
    return true;
  }
  if (breakpoint === 'md' && windowWidth < breakpoints.md) {
    return true;
  }
  return false;
};
const useIsFullscreen = (fullScreenBreakpoint, mobileFullScreen) => {
  (0,react.useEffect)(() => {
    if (mobileFullScreen !== undefined) {
      // eslint-disable-next-line no-console
      console.warn('Modal: The mobileFullScreen prop is deprecated, please use the fullScreenBreakpoint prop instead');
    }
  }, [mobileFullScreen]);
  const breakpoint = getFullscreenBreakpoint({
    fullScreenBreakpoint,
    mobileFullScreen
  });
  const {
    width: windowWidth
  } = (0,useElementSize/* default */.A)(typeof window !== 'undefined' ? window : null);
  return isFullscreenActive({
    breakpoint,
    windowWidth
  });
};
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/ModalContext/index.js
var ModalContext = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalContext/index.js");
;// ../overlay/dist/esm/src/components/Modal/index.js



const Modal = _ref => {
  let {
    autoOpen = false,
    children,
    centered = false,
    isOpen,
    onClose = () => undefined,
    onOpen = () => undefined,
    fullScreenBreakpoint,
    mobileFullScreen,
    goExperimental = false,
    theme = 'light'
  } = _ref;
  const isDark = goExperimental || theme === 'dark';
  const [innerIsOpen, setInnerIsOpen] = react.useState(autoOpen);
  const isFullscreen = useIsFullscreen(fullScreenBreakpoint, mobileFullScreen);
  const close = react.useCallback(() => {
    setInnerIsOpen(false);
    onClose();
  }, [onClose]);
  const open = react.useCallback(() => {
    setInnerIsOpen(true);
    onOpen();
  }, [onOpen]);
  if (autoOpen && isOpen) {
    throw new Error("Modal: Don't use both autoOpen and isOpen together, autoOpen is only meant to be used with the trigger component");
  }
  return /*#__PURE__*/react.createElement(ModalContext/* ModalContext */.V.Provider, {
    value: {
      isOpen: isOpen !== null && isOpen !== void 0 ? isOpen : innerIsOpen,
      close,
      centered,
      open,
      isDark,
      isFullscreen
    }
  }, children);
};
Modal.displayName = 'Modal';
/* harmony default export */ const components_Modal = (Modal);
;
Modal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Modal"
};

/***/ }),

/***/ "../overlay/dist/esm/src/components/Overlay/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Overlay)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useLockBodyScroll/index.js
var useLockBodyScroll = __webpack_require__("../hooks/dist/esm/src/hooks/useLockBodyScroll/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/utils/hex2rgb/index.js
var hex2rgb = __webpack_require__("../theme/dist/esm/src/utils/hex2rgb/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../overlay/dist/esm/src/components/Overlay/constants.js

const OPACITY_VALUES = {
  high: '0.8',
  low: '0.55'
};
const COLORS = {
  white: themeVars/* colors */.Tj.white,
  grey: themeVars/* colors */.Tj.grey_1200
};
;// ../overlay/dist/esm/src/components/Overlay/index.js
const _excluded = ["children", "opacity", "lockBodyScroll", "background", "position", "zIndex", "className", "onClick", "dataTestId", "style", "dataTrackTag"];
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





const Overlay = _ref => {
  let {
      children,
      opacity = 'low',
      lockBodyScroll = true,
      background = 'grey',
      position = 'fixed',
      zIndex = 'overlay',
      className,
      onClick,
      dataTestId,
      style,
      dataTrackTag = 'overlay'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  (0,useLockBodyScroll/* default */.A)(lockBodyScroll);
  const backgroundColor = "rgba(".concat((0,hex2rgb/* hex2rgb */.x)(COLORS[background]), ", ").concat(OPACITY_VALUES[opacity], ")");
  return /*#__PURE__*/react.createElement(Container/* default */.A, _objectSpread(_objectSpread({
    width: "100%",
    height: "100%",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    className: className,
    style: style,
    zIndex: zIndex,
    background: backgroundColor,
    position: position,
    onClick: onClick,
    "data-testid": dataTestId
  }, rest), {}, {
    dataTrackTag: dataTrackTag
  }), children);
};
Overlay.displayName = 'Overlay';
/* harmony default export */ const components_Overlay = (Overlay);
;
Overlay.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Overlay"
};

/***/ }),

/***/ "../overlay/dist/esm/src/hooks/useExitOnEscape/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ useExitOnEscape)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

/**
 * This hook will invoke `close` when pressing escape when enabled and drawer is open
 *
 * @param {boolean} enabled Flag that indicates if should exit on escape
 * @param {() => void} close Close callback to invoke
 * @param {boolean} isOpen Flag that indicates if the drawer is open
 */
const useExitOnEscape = _ref => {
  let {
    enabled,
    close,
    isOpen
  } = _ref;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const onKeyPress = _ref2 => {
      let {
        key
      } = _ref2;
      if (key !== 'Escape') {
        return;
      }
      if (isOpen) {
        close === null || close === void 0 || close();
      }
    };
    if (enabled) {
      document.body.addEventListener('keydown', onKeyPress);
      return () => {
        document.body.removeEventListener('keydown', onKeyPress);
      };
    }
  }, [enabled, close, isOpen]);
};

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

/***/ "../storybook_helpers/dist/esm/src/components/StoryText/index.js":
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


const StoryText = _ref => {
  let {
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    as: "p",
    fontWeight: "normal",
    color: "grey_900",
    fontFamily: "primary",
    fontSize: "b_md",
    lineHeight: "b_md"
  }, props), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoryText);
;
StoryText.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StoryText"
};

/***/ }),

/***/ "../theme/dist/esm/src/utils/hex2rgb/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ hex2rgb)
/* harmony export */ });
const hex2rgb = hex => {
  let hexValue = hex;
  // In case hex is shortened - #fff or #000
  if (hexValue.length === 4) {
    const repeatedValue = hexValue.slice(1, 4);
    hexValue = "#".concat(repeatedValue).concat(repeatedValue);
  }
  const r = parseInt(hexValue.slice(1, 3), 16);
  const g = parseInt(hexValue.slice(3, 5), 16);
  const b = parseInt(hexValue.slice(5, 7), 16);
  return "".concat(r, ", ").concat(g, ", ").concat(b);
};

/***/ }),

/***/ "../typography/dist/esm/src/components/Heading/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Heading)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Typography/index.js
var Typography = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
;// ../typography/dist/esm/src/components/Heading/helpers.js
const SIZES = {
  1: 'h_xxl',
  2: 'h_xl',
  3: 'h_lg',
  4: 'h_md',
  5: 'h_sm',
  6: 'h_xs',
  7: 'h_xxs'
};
const getResponsiveObject = as => {
  const size = Number(as.replace('h', ''));
  return {
    default: SIZES[size + 1],
    sm: SIZES[size]
  };
};
;// ../typography/dist/esm/src/components/Heading/index.js
const _excluded = ["as", "color", "fontWeight", "children", "size", "dataTrackTag"];
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



const Heading = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      as = 'h1',
      color = 'heading',
      fontWeight = 'bold',
      children,
      size,
      dataTrackTag = 'heading'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const defaultResponsive = getResponsiveObject(as);
  return /*#__PURE__*/react.createElement(Typography/* default */.A, _objectSpread({
    ref: ref,
    as: as,
    fontWeight: fontWeight,
    size: size || defaultResponsive,
    color: color,
    dataTrackTag: dataTrackTag
  }, restProps), children);
});
Heading.displayName = 'Heading';
/* harmony default export */ const components_Heading = (Heading);
;
Heading.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Heading"
};

/***/ }),

/***/ "../typography/dist/esm/src/components/HighlightText/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../ui_utils/dist/esm/src/utils/highlightText/index.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
const _excluded = ["children", "query", "as", "color", "dataTrackTag", "dataTrackValue"];
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




const HighlightText = _ref => {
  let {
      children,
      query,
      as,
      color = 'grey_1200',
      dataTrackTag = 'highlight_text',
      dataTrackValue
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const text = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .highlightText */ .S)(children, query, rest);
  const parts = text === null || text === void 0 ? void 0 : text.split(/<\/?>/g);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    as: as,
    size: "b_md",
    color: color
  }, text === children || !query ? children : parts === null || parts === void 0 ? void 0 : parts.map((part, index) => part.trim().toLocaleLowerCase() === query.trim().toLocaleLowerCase() ? part : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Text__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    key: part + index,
    as: "span",
    fontWeight: "bold",
    color: "inherit"
  }, part)));
};
HighlightText.displayName = 'HighlightText';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HighlightText);
;
HighlightText.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HighlightText"
};

/***/ }),

/***/ "../ui_utils/dist/esm/src/utils/highlightText/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ highlightText)
/* harmony export */ });
const validateParams = (text, query, options) => {
  if (text && typeof text !== 'string') {
    throw new Error('The text parameter should be a string.');
  }
  if (query && typeof query !== 'string') {
    throw new Error('The query parameter should be a string.');
  }
  if (typeof options !== 'object') {
    throw new Error('The options parameter should be an object.');
  }
};
const validateOptions = function () {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (typeof options.htmlTag !== 'undefined' && typeof options.htmlTag !== 'string') {
    throw new Error('The htmlTab option should be a string.');
  }
  if (typeof options.matchAll !== 'undefined' && typeof options.matchAll !== 'boolean') {
    throw new Error('The matchAll option should be a boolean.');
  }
  if (typeof options.caseSensitive !== 'undefined' && typeof options.caseSensitive !== 'boolean') {
    throw new Error('The caseSensitive option should be a boolean.');
  }
};
const getOptions = function () {
  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  validateOptions(options);
  return {
    htmlTag: options.htmlTag ? options.htmlTag : '',
    matchAll: typeof options.matchAll !== 'undefined' ? options.matchAll : true,
    caseSensitive: typeof options.caseSensitive !== 'undefined' ? options.caseSensitive : false
  };
};
const highlightText = function () {
  let text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  let query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  validateParams(text, query, options);
  options = getOptions(options);
  if (!query.trim().length) {
    return text;
  }
  let modifiers = options.matchAll ? 'g' : '';
  modifiers += options.caseSensitive ? '' : 'i';
  return text.replace(new RegExp(query.trim(), modifiers), match => "<".concat(options.htmlTag, ">").concat(match, "</").concat(options.htmlTag, ">"));
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/AlertHexagon.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const AlertHexagonIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('AlertHexagonIcon')
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
    d: "M8 5.255v2.7m0 2.686h.006m2.414 4.109H5.58a.68.68 0 0 1-.478-.198l-3.654-3.654a.68.68 0 0 1-.198-.478V5.58c0-.18.071-.351.198-.478l3.654-3.654a.68.68 0 0 1 .478-.198h4.84c.18 0 .351.071.478.198l3.654 3.654a.68.68 0 0 1 .198.478v4.84c0 .18-.071.351-.198.478l-3.654 3.654a.68.68 0 0 1-.478.198",
    vectorEffect: "non-scaling-stroke"
  }));
};
AlertHexagonIcon.id = 'AlertHexagonIcon';
AlertHexagonIcon.displayName = 'AlertHexagonIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertHexagonIcon);
;
AlertHexagonIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AlertHexagonIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Camera.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const CameraIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('CameraIcon')
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
    d: "M4.963 3.95H2.6A1.35 1.35 0 0 0 1.25 5.3v7.425c0 .746.604 1.35 1.35 1.35h10.8a1.35 1.35 0 0 0 1.35-1.35V5.3a1.35 1.35 0 0 0-1.35-1.35h-2.363m.338 1.013-.859-2.576a.675.675 0 0 0-.64-.462H6.124a.675.675 0 0 0-.64.462l-.859 2.576m5.74 4.387a2.363 2.363 0 1 1-4.726-.001 2.363 2.363 0 0 1 4.725.001",
    vectorEffect: "non-scaling-stroke"
  }));
};
CameraIcon.id = 'CameraIcon';
CameraIcon.displayName = 'CameraIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CameraIcon);
;
CameraIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CameraIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/CheckCircle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const CheckCircleIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('CheckCircleIcon')
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
    d: "m5.25 7.94 2.063 2.062 3.437-4.125m4 2.123a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0",
    vectorEffect: "non-scaling-stroke"
  }));
};
CheckCircleIcon.id = 'CheckCircleIcon';
CheckCircleIcon.displayName = 'CheckCircleIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckCircleIcon);
;
CheckCircleIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CheckCircleIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Coupon.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const CouponIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('CouponIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SYSTEM_ICON_SIZES */ .bh[size],
    fill: "none",
    viewBox: "0 0 16 17",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getStrokeColor */ ._)(color),
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m9.688 6.813-3.376 3.375m3.376 0h-.006M6.318 6.813h-.006m-5.062 0V4.45c0-.745.604-1.35 1.35-1.35h10.8c.745 0 1.35.605 1.35 1.35v2.363a1.687 1.687 0 1 0 0 3.375v2.362a1.35 1.35 0 0 1-1.35 1.35H2.6a1.35 1.35 0 0 1-1.35-1.35v-2.362a1.688 1.688 0 0 0 0-3.375",
    vectorEffect: "non-scaling-stroke"
  }));
};
CouponIcon.id = 'CouponIcon';
CouponIcon.displayName = 'CouponIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CouponIcon);
;
CouponIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CouponIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Ellipsis.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const EllipsisIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('EllipsisIcon')
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
    strokeWidth: 3.5,
    d: "M3 8h.005m4.992 0h.006m4.992 0H13",
    vectorEffect: "non-scaling-stroke"
  }));
};
EllipsisIcon.id = 'EllipsisIcon';
EllipsisIcon.displayName = 'EllipsisIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EllipsisIcon);
;
EllipsisIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EllipsisIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/InfoCircle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const InfoCircleIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('InfoCircleIcon')
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
    d: "M8 8v3.375m0-5.877v-.03M1.25 8a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0",
    vectorEffect: "non-scaling-stroke"
  }));
};
InfoCircleIcon.id = 'InfoCircleIcon';
InfoCircleIcon.displayName = 'InfoCircleIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoCircleIcon);
;
InfoCircleIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "InfoCircleIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Lightbulb.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const LightbulbIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('LightbulbIcon')
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
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M10.274 11.03a.72.72 0 0 1 .346-.494c1.46-.874 2.443-2.279 2.443-4.142 0-2.84-2.267-5.144-5.063-5.144S2.938 3.553 2.938 6.394c0 1.863.922 3.267 2.375 4.142a.72.72 0 0 1 .346.494m4.615 0H5.66m4.615 0-.019 2.454c0 .7-.505 1.266-1.127 1.266H6.872c-.623 0-1.128-.567-1.128-1.266L5.66 11.03",
    vectorEffect: "non-scaling-stroke"
  }));
};
LightbulbIcon.id = 'LightbulbIcon';
LightbulbIcon.displayName = 'LightbulbIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LightbulbIcon);
;
LightbulbIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LightbulbIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/WarningCircle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const WarningCircleIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('WarningCircleIcon')
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
    d: "M7.997 6.127v2.7m0 2.686h.006m6.767.264L9.42 2.525c-.637-1.1-2.201-1.1-2.838 0L1.23 11.778c-.646 1.115.145 2.522 1.418 2.522h10.704c1.273 0 2.064-1.407 1.418-2.523",
    vectorEffect: "non-scaling-stroke"
  }));
};
WarningCircleIcon.id = 'WarningCircleIcon';
WarningCircleIcon.displayName = 'WarningCircleIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WarningCircleIcon);
;
WarningCircleIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "WarningCircleIcon"
};

/***/ }),

/***/ "./src/docs/patterns/overlay/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ImageCropModal: () => (/* binding */ ImageCropModal),
  InitialFocusRef: () => (/* binding */ InitialFocusRef),
  ModalWithAlert: () => (/* binding */ ModalWithAlert),
  ModalWithDropdowns: () => (/* binding */ ModalWithDropdowns),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs + 58 modules
var esm = __webpack_require__("../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Camera.js
var Camera = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Camera.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryStack/index.js
var StoryStack = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryText/index.js
var StoryText = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryText/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/index.js + 1 modules
var Modal = __webpack_require__("../overlay/dist/esm/src/components/Modal/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/ModalContent/index.js + 2 modules
var ModalContent = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalContent/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/ModalHeader/index.js
var ModalHeader = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalHeader/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/ModalBody/index.js + 2 modules
var ModalBody = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalBody/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/ModalFooter/index.js
var ModalFooter = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalFooter/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/ModalTrigger/index.js
var ModalTrigger = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalTrigger/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useKeyboardShortcuts/index.js + 2 modules
var useKeyboardShortcuts = __webpack_require__("../hooks/dist/esm/src/hooks/useKeyboardShortcuts/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/TimesButton/index.js
var TimesButton = __webpack_require__("../button/dist/esm/src/components/TimesButton/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/ModalContext/index.js
var ModalContext = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalContext/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/constants.js
var constants = __webpack_require__("../overlay/dist/esm/src/components/Modal/constants.js");
;// ../overlay/dist/esm/src/components/Modal/ModalCloseBtn/index.js





const ModalCloseBtn = _ref => {
  let {
    onClick,
    color,
    type,
    theme,
    dataTrackTag = 'modal_close_button',
    dataTrackValue
  } = _ref;
  const {
    close,
    isDark
  } = (0,ModalContext/* useModalContext */.k)();
  const ref = (0,react.useRef)(null);
  const getTarget = (0,react.useCallback)(() => ref.current, [ref]);
  const currentTheme = color || theme || (isDark ? 'light' : 'dark');
  const onTrigger = () => {
    onClick === null || onClick === void 0 || onClick();
    close === null || close === void 0 || close();
  };
  (0,useKeyboardShortcuts/* default */.A)([{
    trigger: 'enter',
    handler: onTrigger
  }, {
    trigger: 'space',
    handler: onTrigger
  }], getTarget);
  return /*#__PURE__*/react.createElement(TimesButton/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    ref: ref,
    size: "md",
    theme: currentTheme,
    type: type,
    onClick: onTrigger
  });
};
ModalCloseBtn.displayName = 'ModalCloseBtn';
Object.assign(ModalCloseBtn, {
  id: constants/* MODAL_CLOSE_BTN_ID */.g
});
/* harmony default export */ const Modal_ModalCloseBtn = (ModalCloseBtn);
;
ModalCloseBtn.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ModalCloseBtn"
};
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Alert/index.js + 1 modules
var Alert = __webpack_require__("../feedback/dist/esm/src/components/Alert/index.js");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Alert/AlertTitle/index.js
var AlertTitle = __webpack_require__("../feedback/dist/esm/src/components/Alert/AlertTitle/index.js");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Alert/AlertText/index.js
var AlertText = __webpack_require__("../feedback/dist/esm/src/components/Alert/AlertText/index.js");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Alert/AlertActions/index.js
var AlertActions = __webpack_require__("../feedback/dist/esm/src/components/Alert/AlertActions/index.js");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Alert/AlertActionButton/index.js
var AlertActionButton = __webpack_require__("../feedback/dist/esm/src/components/Alert/AlertActionButton/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Input/index.js
var Input = __webpack_require__("../inputs/dist/esm/src/components/Input/index.js");
// EXTERNAL MODULE: ../forms/dist/esm/src/components/Select/index.js + 3 modules
var Select = __webpack_require__("../forms/dist/esm/src/components/Select/index.js");
// EXTERNAL MODULE: ../forms/dist/esm/src/components/Select/Option/index.js
var Option = __webpack_require__("../forms/dist/esm/src/components/Select/Option/index.js");
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/Dropdown/index.js + 3 modules
var Dropdown = __webpack_require__("../dropdown/dist/esm/src/components/Dropdown/index.js");
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/DropdownContent/index.js + 7 modules
var DropdownContent = __webpack_require__("../dropdown/dist/esm/src/components/DropdownContent/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js
var translate = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js + 1 modules
var vanilla_extract_dynamic_esm = __webpack_require__("../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/theme.ve.css.js
var theme_ve_css = __webpack_require__("../theme/dist/esm/src/theme.ve.css.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/utilityClasses.ve.css.js + 1 modules
var utilityClasses_ve_css = __webpack_require__("../theme/dist/esm/src/atoms/utilityClasses.ve.css.js");
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/DropdownAnchor/index.js
var DropdownAnchor = __webpack_require__("../dropdown/dist/esm/src/components/DropdownAnchor/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../popover/dist/esm/src/components/Popover/PopoverContext/index.js
var PopoverContext = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContext/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/shared/useInputTrackValue/index.js
var useInputTrackValue = __webpack_require__("../inputs/dist/esm/src/components/shared/useInputTrackValue/index.js");
;// ../forms/dist/esm/src/components/Combobox/hooks/useComboboxContext/index.js

const ComboboxContext = /*#__PURE__*/react.createContext(null);
const useComboboxContext = () => {
  const context = react.useContext(ComboboxContext);
  if (!context) {
    throw new Error('useComboboxContext must be used within a ComboboxProvider');
  }
  return context;
};
/* harmony default export */ const hooks_useComboboxContext = (useComboboxContext);
// EXTERNAL MODULE: ../forms/dist/esm/src/components/shared/style.js
var style = __webpack_require__("../forms/dist/esm/src/components/shared/style.js");
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/Dropdown/useDropdownContext/index.js
var useDropdownContext = __webpack_require__("../dropdown/dist/esm/src/components/Dropdown/useDropdownContext/index.js");
;// ../forms/dist/esm/src/components/Combobox/Trigger/utils/removeSelectedTag.js
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

const removeSelectedTag = (items, _ref) => {
  var _items$groupName;
  let {
    tagValue,
    groupName
  } = _ref;
  const groupItems = (0,lodash.isArray)(items[groupName]) ? (_items$groupName = items[groupName]) === null || _items$groupName === void 0 ? void 0 : _items$groupName.filter(val => val !== tagValue) : null;
  const updatedItems = _objectSpread(_objectSpread({}, items), {}, {
    [groupName]: groupItems
  });
  return (0,lodash.omitBy)(updatedItems, v => (0,lodash.isNil)(v) || (0,lodash.isEmpty)(v));
};
;// ../forms/dist/esm/src/components/Combobox/hooks/useKeyboardNavigation/index.js




const handleTagsNavigation = _ref => {
  let {
    direction,
    inputRef,
    setCurrentFocusedElement,
    currentFocusedElement
  } = _ref;
  let newFocusedTag = null;
  if ((!currentFocusedElement || currentFocusedElement.tagName === 'input') && inputRef.current) {
    newFocusedTag = direction === 'left' ? inputRef.current.previousElementSibling : inputRef.current.nextElementSibling;
  } else if (currentFocusedElement.tagName !== 'input') {
    newFocusedTag = direction === 'left' ? currentFocusedElement.previousElementSibling : currentFocusedElement.nextElementSibling;
  }
  if (newFocusedTag) {
    setCurrentFocusedElement(newFocusedTag);
  }
};
const useKeyboardNavigation = selectedItems => {
  const {
    popoverContext: {
      setOpen
    }
  } = (0,useDropdownContext/* default */.A)();
  const focusInput = () => {
    setCurrentFocusedElement(inputRef.current);
  };
  const clearAndFocusInput = () => {
    setInnerValue({});
    setSearchValue('');
    focusInput();
  };
  const {
    inputRef,
    isInitialMultiSelect,
    setCurrentFocusedElement,
    currentFocusedElement,
    setInnerValue,
    searchValue,
    innerValue,
    setSearchValue
  } = hooks_useComboboxContext();
  const isMultiSelect = isInitialMultiSelect.current;
  const handleInputKeyDown = _ref2 => {
    let {
      currentTarget: {
        selectionStart,
        selectionEnd,
        value
      },
      key,
      ctrlKey,
      metaKey
    } = _ref2;
    const isDeleteKey = key === 'Backspace' || key === 'Delete';
    const isFullTextSelection = !(0,lodash.isNil)(value) && selectionStart === 0 && selectionEnd === value.length;
    const isValidKey = /^[a-zA-Z0-9]$/.test(key);
    const isCopyAction = (ctrlKey || metaKey) && key.toLowerCase() === 'c';
    if (isDeleteKey) {
      if ((0,lodash.isEmpty)(searchValue) && !(0,lodash.isEmpty)(selectedItems) && isMultiSelect) {
        const {
          value,
          groupName
        } = selectedItems[selectedItems.length - 1];
        setInnerValue(removeSelectedTag(innerValue, {
          tagValue: value,
          groupName
        }));
        focusInput();
      } else if (!(0,lodash.isNil)(value) && value.length <= 1 && (!(0,lodash.isEmpty)(selectedItems) || !(0,lodash.isEmpty)(innerValue)) && !isMultiSelect || isFullTextSelection && !isMultiSelect) {
        clearAndFocusInput();
      }
    }
    if (isFullTextSelection && !isMultiSelect && isValidKey && !isCopyAction) {
      clearAndFocusInput();
    }
    if (key === 'Tab') {
      focusInput();
    }
  };
  const handleContainerKeyDown = _ref3 => {
    let {
      key
    } = _ref3;
    const isDeleteKey = key === 'Backspace' || key === 'Delete';
    if ((0,lodash.isEmpty)(searchValue) && !(0,lodash.isEmpty)(selectedItems) && isMultiSelect) {
      if (key === 'ArrowLeft' || key === 'ArrowRight') {
        setOpen(false);
        handleTagsNavigation({
          direction: key === 'ArrowLeft' ? 'left' : 'right',
          inputRef,
          setCurrentFocusedElement,
          currentFocusedElement
        });
      }
    }
    if (key === 'Tab') {
      focusInput();
    }
    const isValidKey = /^[a-zA-Z0-9]$/.test(key);
    if (isValidKey || isDeleteKey && searchValue !== null && searchValue !== void 0 && searchValue.length) {
      setOpen(true);
    }
  };
  return {
    handleContainerKeyDown,
    handleInputKeyDown
  };
};
/* harmony default export */ const hooks_useKeyboardNavigation = (useKeyboardNavigation);
;// ../forms/dist/esm/src/components/Combobox/hooks/useClearButton/index.js
function useClearButton_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function useClearButton_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? useClearButton_ownKeys(Object(t), !0).forEach(function (r) {
      useClearButton_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : useClearButton_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function useClearButton_defineProperty(e, r, t) {
  return (r = useClearButton_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function useClearButton_toPropertyKey(t) {
  var i = useClearButton_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function useClearButton_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}




const useClearButton = (containerRef, hideClearButton) => {
  const {
    currentFocusedElement,
    searchValue,
    innerValue
  } = hooks_useComboboxContext();
  const {
    open
  } = (0,PopoverContext/* usePopoverContext */.C)();
  const [showClearButton, setShowClearButton] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    if (hideClearButton) {
      setShowClearButton(false);
    } else {
      var _containerRef$current;
      if (containerRef.current && currentFocusedElement && !(0,lodash.isEmpty)(innerValue) && (_containerRef$current = containerRef.current) !== null && _containerRef$current !== void 0 && _containerRef$current.contains(currentFocusedElement)) {
        setShowClearButton(true);
      } else if (containerRef.current && !currentFocusedElement && !open) {
        setShowClearButton(false);
      }
      if ((0,lodash.isEmpty)(innerValue) && !(searchValue !== null && searchValue !== void 0 && searchValue.length)) {
        setShowClearButton(false);
      }
    }
  }, [currentFocusedElement, open, searchValue === null || searchValue === void 0 ? void 0 : searchValue.length, innerValue, containerRef, setShowClearButton, hideClearButton]);
  const onMouseEnter = () => {
    if (!(0,lodash.isEmpty)(innerValue) || searchValue !== null && searchValue !== void 0 && searchValue.length) {
      setShowClearButton(true);
    }
  };
  const onMouseLeave = () => {
    if (!currentFocusedElement) {
      setShowClearButton(false);
    }
  };
  return useClearButton_objectSpread({
    showClearButton
  }, !hideClearButton ? {
    onMouseEnter,
    onMouseLeave
  } : {});
};
/* harmony default export */ const hooks_useClearButton = (useClearButton);
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/utils/index.js
var utils = __webpack_require__("../ui_utils/dist/esm/src/utils/utils/index.js");
;// ../forms/dist/esm/src/components/Combobox/constants.js
const OPTION_LABEL_ID = 'OptionLabel';
const MENU_GROUP_ID = 'MenuGroup';
;// ../forms/dist/esm/src/components/Combobox/utils.js




const getSelectedItemByText = (menuItems, groupSelectedValues) => {
  let selectedItemProps;
  if (!groupSelectedValues) {
    return selectedItemProps;
  }
  react.Children.forEach(menuItems, child => {
    var _child$props$value;
    if (((_child$props$value = child.props.value) === null || _child$props$value === void 0 ? void 0 : _child$props$value.toString()) === groupSelectedValues.item) {
      selectedItemProps = getOptionText(child.props.children);
    }
  });
  return selectedItemProps;
};
const getOptionText = children => {
  let optionLabel = null;
  let searchText = '';
  if (children) {
    if ((0,lodash.isString)(children)) {
      return children;
    }
    for (const child of react.Children.toArray(children)) {
      var _child$props;
      if (child !== null && child !== void 0 && (_child$props = child.props) !== null && _child$props !== void 0 && _child$props.children) {
        optionLabel = (0,findChildByType/* findChildByType */.B)(child.props.children, OPTION_LABEL_ID);
        if (optionLabel) {
          return optionLabel.props.children;
        } else {
          searchText = getOptionText(child.props.children);
          if (searchText) {
            return searchText;
          }
        }
      }
    }
  }
  return searchText;
};
const isOptionCreate = menuItem => {
  const comboboxOptionCreate = (0,utils/* childrenIdMatch */.i)(menuItem, 'ComboboxOptionCreate');
  return comboboxOptionCreate;
};
const filterMenuItems = _ref => {
  let {
    menuItems,
    groupSelectedValues,
    searchValue = '',
    name = 'item',
    shouldFilterItem
  } = _ref;
  let unselectedChildren = react.Children.toArray(menuItems);
  const shouldFilterSelectedItems = Array.isArray(menuItems) && Array.isArray(groupSelectedValues[name]);
  if (name === 'item' && groupSelectedValues[name] && shouldFilterItem !== null && shouldFilterItem !== void 0 && shouldFilterItem.current) {
    const selectedItemText = getSelectedItemByText(menuItems, groupSelectedValues);
    if (searchValue === selectedItemText) {
      shouldFilterItem.current = false;
      return menuItems;
    }
  }
  if (shouldFilterSelectedItems) {
    unselectedChildren = react.Children.toArray(menuItems).filter(menuItem => {
      var _groupSelectedValues$, _menuItem$props;
      return !((_groupSelectedValues$ = groupSelectedValues[name]) !== null && _groupSelectedValues$ !== void 0 && _groupSelectedValues$.includes(menuItem === null || menuItem === void 0 || (_menuItem$props = menuItem.props) === null || _menuItem$props === void 0 ? void 0 : _menuItem$props.value) || isOptionCreate(menuItem) && !searchValue);
    });
  }
  if (searchValue) {
    const searchedItems = unselectedChildren.filter(menuItem => {
      var _getOptionText, _menuItem$props2;
      const optionCreate = isOptionCreate(menuItem);
      if (optionCreate && shouldFilterItem) {
        shouldFilterItem.current = false;
      }
      return ((_getOptionText = getOptionText(menuItem === null || menuItem === void 0 || (_menuItem$props2 = menuItem.props) === null || _menuItem$props2 === void 0 ? void 0 : _menuItem$props2.children)) === null || _getOptionText === void 0 ? void 0 : _getOptionText.toLocaleLowerCase().includes(searchValue.trim().toLocaleLowerCase())) || optionCreate;
    });
    if ((0,lodash.isEmpty)(searchedItems)) {
      return null;
    }
    return searchedItems;
  }
  if ((0,lodash.isEmpty)(unselectedChildren)) {
    return null;
  }
  if (shouldFilterSelectedItems) {
    return unselectedChildren;
  }
  return menuItems;
};
const filteredMenuGroup = function (menuGroup, groupSelectedValues) {
  let searchValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  const {
    children: menuItems,
    name
  } = menuGroup.props;
  const filteredMenuItems = filterMenuItems({
    menuItems,
    groupSelectedValues,
    searchValue,
    name
  });
  if (filteredMenuItems) {
    return /*#__PURE__*/react.cloneElement(menuGroup, {
      children: filteredMenuItems
    });
  } else {
    return null;
  }
};
const getFilteredMenuGroups = function (values, menuGroups) {
  let searchValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  const childrenToRender = [];
  const menuGroupsArray = react.Children.toArray(menuGroups);
  react.Children.forEach(menuGroupsArray, menuGroup => {
    const filteredMenuGroups = filteredMenuGroup(menuGroup, values, searchValue);
    if (filteredMenuGroups) {
      childrenToRender.push(filteredMenuGroups);
    }
  });
  if (!(0,lodash.isEmpty)(childrenToRender)) {
    return childrenToRender;
  } else {
    return null;
  }
};
const getFilteredChildren = function (values, children) {
  let searchValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  let shouldFilterItem = arguments.length > 3 ? arguments[3] : undefined;
  const hasMenuGroupChild = (0,findChildByType/* findChildByType */.B)(children, MENU_GROUP_ID);
  if (hasMenuGroupChild) {
    return getFilteredMenuGroups(values, children, searchValue);
  } else {
    return filterMenuItems({
      menuItems: children,
      groupSelectedValues: values,
      searchValue,
      shouldFilterItem
    });
  }
};
;// ../forms/dist/esm/src/components/Combobox/hooks/useFocusHandlers/index.js





const useFocusHandlers = (onBlur, onFocus) => {
  const {
    open
  } = (0,PopoverContext/* usePopoverContext */.C)();
  const {
    setSearchValue,
    inputRef,
    innerValue,
    filteredMenuGroups,
    currentFocusedElement,
    setCurrentFocusedElement,
    shouldFilterItems,
    isInitialMultiSelect
  } = hooks_useComboboxContext();
  (0,react.useEffect)(() => {
    if (currentFocusedElement) {
      currentFocusedElement === null || currentFocusedElement === void 0 || currentFocusedElement.focus();
    }
  }, [currentFocusedElement, innerValue, open]);
  const handleFocus = e => {
    if (!currentFocusedElement) {
      setCurrentFocusedElement(inputRef === null || inputRef === void 0 ? void 0 : inputRef.current);
    } else {
      setCurrentFocusedElement(currentFocusedElement);
    }
    onFocus === null || onFocus === void 0 || onFocus(e);
  };
  const handleBlur = e => {
    if (isInitialMultiSelect.current) {
      setSearchValue('');
    } else if (!(0,lodash.isEmpty)(innerValue)) {
      setSearchValue(getSelectedItemByText(filteredMenuGroups, innerValue));
    }
    shouldFilterItems.current = true;
    onBlur === null || onBlur === void 0 || onBlur(e);
  };
  return {
    handleBlur,
    handleFocus
  };
};
/* harmony default export */ const hooks_useFocusHandlers = (useFocusHandlers);
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/Tag/index.js + 4 modules
var Tag = __webpack_require__("../data_display/dist/esm/src/components/Tag/index.js");
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/Tag/TagCloseIcon/index.js + 1 modules
var TagCloseIcon = __webpack_require__("../data_display/dist/esm/src/components/Tag/TagCloseIcon/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
;// ../forms/dist/esm/src/components/Combobox/Trigger/ComboboxTag/index.js







const ComboboxTag = _ref => {
  let {
    children,
    value,
    groupName
  } = _ref;
  const tagRef = (0,react.useRef)(null);
  const {
    setInnerValue,
    inputRef,
    innerValue,
    setCurrentFocusedElement,
    theme
  } = hooks_useComboboxContext();
  const text = getOptionText(children);
  return /*#__PURE__*/react.createElement(Tag/* default */.A, {
    theme: theme,
    ref: tagRef,
    key: value,
    onClick: e => {
      setInnerValue(removeSelectedTag(innerValue, {
        tagValue: value,
        groupName
      }));
      e.stopPropagation();
      e.preventDefault();
    },
    onKeyDown: e => {
      if (e.key === 'Backspace') {
        e.stopPropagation();
        setInnerValue(removeSelectedTag(innerValue, {
          tagValue: value,
          groupName
        }));
        setCurrentFocusedElement(inputRef.current);
      }
      e.preventDefault();
    },
    tabIndex: -1,
    ariaLabel: (0,translate/* translate */.T)('forms.combobox.comboboxTag.removeItem', {
      params: {
        item: text
      }
    }),
    size: "sm",
    maxWidth: "100%",
    dataTrackTag: "combobox_tag",
    dataTrackValue: value === null || value === void 0 ? void 0 : value.toString()
  }, /*#__PURE__*/react.createElement(Text/* default */.A, {
    as: "span",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    maxWidth: "100%",
    color: "inherit"
  }, text), /*#__PURE__*/react.createElement(TagCloseIcon/* default */.A, null));
};
/* harmony default export */ const Trigger_ComboboxTag = (ComboboxTag);
;
ComboboxTag.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ComboboxTag"
};
// EXTERNAL MODULE: ../button/dist/esm/src/components/ChevronButton/index.js + 1 modules
var ChevronButton = __webpack_require__("../button/dist/esm/src/components/ChevronButton/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Center/index.js
var Center = __webpack_require__("../layout_components/dist/esm/src/components/Center/index.js");
;// ../forms/dist/esm/src/components/Combobox/Trigger/ControlButtons/index.js






const ControlButtons = _ref => {
  let {
    showClearButton,
    disabled
  } = _ref;
  const {
    setSearchValue,
    setInnerValue,
    theme
  } = hooks_useComboboxContext();
  const {
    open
  } = (0,PopoverContext/* usePopoverContext */.C)();
  const isDark = theme === 'dark';
  return /*#__PURE__*/react.createElement(Center/* default */.A, {
    dataTrackTag: "combobox_control_buttons",
    direction: "row",
    flexShrink: "0",
    gap: "0.5"
  }, /*#__PURE__*/react.createElement(TimesButton/* default */.A, {
    type: "button",
    ariaLabel: (0,translate/* translate */.T)('forms.buttons.clear'),
    onClick: e => {
      setSearchValue('');
      setInnerValue({});
      e.stopPropagation();
    },
    tabIndex: -1,
    visibility: showClearButton ? 'visible' : 'hidden',
    size: "3xs",
    theme: isDark ? 'light' : 'dark',
    disabled: disabled
  }), /*#__PURE__*/react.createElement(ChevronButton/* default */.A, {
    size: "3xs",
    chevronDirection: open ? 'up' : undefined,
    disabled: disabled,
    theme: isDark ? 'light' : 'dark'
  }));
};
/* harmony default export */ const Trigger_ControlButtons = (ControlButtons);
;
ControlButtons.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ControlButtons"
};
;// ../forms/dist/esm/src/components/Combobox/forms/dist/esm/src/components/Combobox/Trigger/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../forms/dist/esm/src/components/Combobox/Trigger/styles.ve.css.js.vanilla.css","source":"Ll82MGY5YnkwIHsKICBib3JkZXI6IG5vbmU7CiAgYm94LXNoYWRvdzogbm9uZTsKfQouXzYwZjlieTI6Zm9jdXMtd2l0aGluIHsKICBib3JkZXItY29sb3I6IHZhcigtLV82MGY5YnkxKTsKfQ=="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../forms/dist/esm/src/components/Combobox/Trigger/styles.ve.css.js

var borderFocusWithinClass = '_60f9by2';
var borderFocusWithinVar = 'var(--_60f9by1)';
var inputStyle = '_60f9by0';
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/semanticTokens.js
var semanticTokens = __webpack_require__("../theme/dist/esm/src/shared/themeVars/semanticTokens.js");
;// ../forms/dist/esm/src/components/Combobox/Trigger/style.js

const generateBorderFocusWithin = _ref => {
  let {
    isError,
    isSuccess,
    isDark
  } = _ref;
  const {
    validationError,
    validationSuccess
  } = semanticTokens/* semanticBorderColors */.zK;
  if (isDark) {
    return 'white_20';
  } else if (isError) {
    return validationError;
  } else if (isSuccess) {
    return validationSuccess;
  } else {
    return 'grey_1200';
  }
};
;// ../forms/dist/esm/src/components/Combobox/Trigger/ControlButtons/constants.js
const CONTROL_BUTTONS_WIDTH = 54;
;// ../forms/dist/esm/src/components/Combobox/Trigger/utils/getInputDefaultValue.js



const getSelectedItemByValue = (menuItems, groupSelectedValues) => {
  let selectedItemProps = null;
  if (!groupSelectedValues) {
    return selectedItemProps;
  }
  react.Children.forEach(menuItems, child => {
    var _child$props$value;
    if (((_child$props$value = child.props.value) === null || _child$props$value === void 0 ? void 0 : _child$props$value.toString()) === groupSelectedValues) {
      selectedItemProps = child.props;
    }
  });
  return selectedItemProps;
};
const getInputDefaultValue = (isMultiSelect, controlled, defaultValue, values, children) => {
  if (!isMultiSelect && (controlled || defaultValue)) {
    const currentValue = controlled ? values : defaultValue;
    const selectedItem = getSelectedItemByValue(children, currentValue.item);
    if (!(0,lodash.isNil)(selectedItem)) {
      return getOptionText(selectedItem.children);
    }
  }
};
;// ../forms/dist/esm/src/components/Combobox/Trigger/index.js
const _excluded = ["placeholder", "isError", "isSuccess", "disabled", "defaultValue", "hideClearButton", "onBlur", "onFocus", "theme", "dataTrackTag", "dataTrackValue"];
function Trigger_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Trigger_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Trigger_ownKeys(Object(t), !0).forEach(function (r) {
      Trigger_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Trigger_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Trigger_defineProperty(e, r, t) {
  return (r = Trigger_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Trigger_toPropertyKey(t) {
  var i = Trigger_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function Trigger_toPrimitive(t, r) {
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



















const Trigger = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      placeholder,
      isError,
      isSuccess,
      disabled,
      defaultValue,
      hideClearButton,
      onBlur,
      onFocus,
      theme,
      dataTrackTag,
      dataTrackValue
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const {
    open
  } = (0,PopoverContext/* usePopoverContext */.C)();
  const {
    setSearchValue,
    inputRef,
    isInitialMultiSelect,
    innerValue,
    searchValue,
    filteredMenuGroups,
    setCurrentFocusedElement,
    controlled,
    shouldFilterItems,
    updatedSelectedItems
  } = hooks_useComboboxContext();
  const trackValue = (0,useInputTrackValue/* useInputTrackValue */.y)({
    dataTrackValue,
    value: updatedSelectedItems
  });
  const isDark = theme === 'dark';
  const borderFocusWithin = generateBorderFocusWithin({
    isError,
    isSuccess,
    isDark
  });
  const isMultiSelect = isInitialMultiSelect.current;
  const containerRef = (0,react.useRef)(null);
  const {
    handleInputKeyDown,
    handleContainerKeyDown
  } = hooks_useKeyboardNavigation(updatedSelectedItems);
  const {
    showClearButton,
    onMouseEnter,
    onMouseLeave
  } = hooks_useClearButton(containerRef, hideClearButton);
  const {
    handleFocus,
    handleBlur
  } = hooks_useFocusHandlers(onBlur, onFocus);
  const inputDefault = (0,react.useMemo)(() => {
    const inputDefaultValue = getInputDefaultValue(isMultiSelect, controlled, defaultValue, innerValue, filteredMenuGroups);
    if ((0,lodash.isNil)(searchValue) && inputDefaultValue) {
      return inputDefaultValue;
    }
  }, [searchValue, isMultiSelect, controlled, defaultValue, innerValue, filteredMenuGroups]);
  (0,react.useEffect)(() => {
    if (open) {
      setCurrentFocusedElement(inputRef.current);
    }
  }, [open, setCurrentFocusedElement, inputRef]);
  (0,react.useImperativeHandle)(ref, () => inputRef.current);
  return /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: trackValue,
    fullWidth: true,
    onFocus: handleFocus,
    onBlur: handleBlur,
    disabled: disabled,
    embed: true
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, Trigger_objectSpread(Trigger_objectSpread(Trigger_objectSpread({
    role: "combobox",
    width: "100%",
    borderRadius: "lg",
    paddingY: "1.5",
    paddingX: "3",
    justifyContent: "spaceBetween",
    alignItems: "center",
    borderWidth: "sm",
    onClick: () => {
      setCurrentFocusedElement(inputRef === null || inputRef === void 0 ? void 0 : inputRef.current);
    },
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, (0,style/* getValidationStylingProps */.QF)({
    isError,
    isSuccess,
    disabled,
    open
  })), isDark ? {
    borderColor: 'white_20',
    backgroundColor: 'white_10'
  } : undefined), {}, {
    style: (0,vanilla_extract_dynamic_esm/* assignInlineVars */.D)({
      [borderFocusWithinVar]: theme_ve_css/* tokens */.L.colors[borderFocusWithin]
    }),
    className: borderFocusWithinClass
  }, rest), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    ref: containerRef,
    "aria-hidden": true,
    alignItems: "center",
    wrap: "wrap",
    gap: "1",
    minHeight: "32px",
    width: "100%",
    maxWidth: "calc(100% - ".concat(CONTROL_BUTTONS_WIDTH, "px)"),
    onKeyDown: handleContainerKeyDown
  }, updatedSelectedItems === null || updatedSelectedItems === void 0 ? void 0 : updatedSelectedItems.map(_ref2 => {
    let {
      value,
      groupName,
      children
    } = _ref2;
    return isMultiSelect && /*#__PURE__*/react.createElement(Trigger_ComboboxTag, {
      groupName: groupName,
      value: value,
      key: value
    }, children);
  }), /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "input",
    ref: inputRef,
    className: classnames_default()(inputStyle, utilityClasses_ve_css/* placeholder */.q),
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    background: "none",
    lineHeight: "b_sm",
    fontSize: "b_md",
    fontFamily: "primary",
    color: isDark ? 'grey_700' : undefined,
    flex: 1,
    onChange: event => {
      shouldFilterItems.current = false;
      setSearchValue(event.target.value);
    },
    value: inputDefault || searchValue,
    placeholder: placeholder,
    onKeyDown: handleInputKeyDown,
    tabIndex: disabled ? -1 : 0
  })), /*#__PURE__*/react.createElement(Trigger_ControlButtons, {
    showClearButton: showClearButton,
    disabled: disabled
  })));
});
Trigger.displayName = 'Trigger';
/* harmony default export */ const Combobox_Trigger = (Trigger);
;
Trigger.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Trigger"
};
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/Dropdown/utils.js
var Dropdown_utils = __webpack_require__("../dropdown/dist/esm/src/components/Dropdown/utils.js");
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/DropdownMenu/index.js
var DropdownMenu = __webpack_require__("../dropdown/dist/esm/src/components/DropdownMenu/index.js");
;// ../forms/dist/esm/src/components/Combobox/ComboboxOptions/index.js






const ComboboxOptions = _ref => {
  let {
    children,
    copies
  } = _ref;
  const {
    items,
    setFocusedItem,
    isMultiSelect,
    values
  } = (0,useDropdownContext/* default */.A)();
  const {
    isInitialMultiSelect
  } = hooks_useComboboxContext();
  if ((0,lodash.isNil)(isInitialMultiSelect.current) && isMultiSelect.current) {
    isInitialMultiSelect.current = true;
  }
  (0,react.useEffect)(() => {
    (0,Dropdown_utils/* focusContent */.Y)({
      items,
      setFocusedItem,
      values
    });
  }, [items, setFocusedItem, values, children]);
  return /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, children || /*#__PURE__*/react.createElement(Center/* default */.A, null, /*#__PURE__*/react.createElement(Text/* default */.A, null, copies === null || copies === void 0 ? void 0 : copies.noOptionsText())));
};
/* harmony default export */ const Combobox_ComboboxOptions = (ComboboxOptions);
;
ComboboxOptions.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ComboboxOptions"
};
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/filterChildrenByType/index.js
var filterChildrenByType = __webpack_require__("../ui_utils/dist/esm/src/utils/filterChildrenByType/index.js");
;// ../forms/dist/esm/src/components/Combobox/hooks/useComboboxState/utils.js
function utils_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function utils_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? utils_ownKeys(Object(t), !0).forEach(function (r) {
      utils_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : utils_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function utils_defineProperty(e, r, t) {
  return (r = utils_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function utils_toPropertyKey(t) {
  var i = utils_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function utils_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


const getSelectedItemsProps = (menuGroup, groupSelectedValues) => {
  const {
    children: menuItems,
    name
  } = menuGroup.props;
  const selectedValuesProps = [];
  if ((0,lodash.isArray)(groupSelectedValues)) {
    groupSelectedValues.forEach(value => {
      let valueFound = false;
      react.Children.forEach(menuItems, child => {
        if (child.props.value === value) {
          selectedValuesProps.push(utils_objectSpread(utils_objectSpread({}, child.props), {}, {
            groupName: name
          }));
          valueFound = true;
        }
      });
      if (!valueFound) {
        selectedValuesProps.push({
          groupName: name,
          children: value,
          value
        });
      }
    });
  } else {
    react.Children.forEach(menuItems, child => {
      if (child.props.value === groupSelectedValues) {
        selectedValuesProps.push(utils_objectSpread(utils_objectSpread({}, child.props), {}, {
          groupName: name
        }));
      }
    });
  }
  return selectedValuesProps;
};
const getSelectedItems = (values, menuGroups) => {
  let valuesArray = [];
  Object.keys(values).forEach(value => {
    const menuGroup = menuGroups === null || menuGroups === void 0 ? void 0 : menuGroups.find(menuGroup => menuGroup.props.name === value);
    if (!(0,lodash.isEmpty)(menuGroup)) {
      const filteredValues = getSelectedItemsProps(menuGroup, values[value]);
      if (!(0,lodash.isEmpty)(filteredValues)) {
        valuesArray = [...valuesArray, ...filteredValues];
      }
    }
  });
  return valuesArray;
};
const getUpdatedSelectedItems = (prevSelectedValues, newSelectedValues, children) => {
  const prevSelectedItems = Object.values(getSelectedItems(prevSelectedValues.current, react.Children.toArray(children))).flatMap(item => item);
  const newSelectedItems = Object.values(getSelectedItems(newSelectedValues, react.Children.toArray(children))).flatMap(item => item);
  const removedItems = (0,lodash.differenceWith)(prevSelectedItems, newSelectedItems, lodash.isEqual);
  const addedItems = (0,lodash.differenceWith)(newSelectedItems, prevSelectedItems, lodash.isEqual);
  const selectedItems = (0,lodash.concat)(prevSelectedItems, addedItems);
  prevSelectedValues.current = newSelectedValues;
  return (0,lodash.difference)(selectedItems, removedItems);
};
;// ../forms/dist/esm/src/components/Combobox/hooks/useComboboxState/index.js






const useComboboxState = _ref => {
  let {
    children,
    value,
    defaultValue = {},
    onChange,
    onInputValueChange,
    inputValue,
    theme
  } = _ref;
  const [searchValue, setSearchValue] = (0,react.useState)();
  const [currentFocusedElement, setCurrentFocusedElement] = (0,react.useState)(null);
  const inputRef = (0,react.useRef)(null);
  const prevSelectedValues = (0,react.useRef)({});
  const isInitialMultiSelect = (0,react.useRef)(null);
  const shouldFilterItems = (0,react.useRef)(true);
  const controlled = !(0,lodash.isUndefined)(value);
  const [innerValue, setInnerValue] = (0,react.useState)(controlled ? value : defaultValue);
  const effectiveSearchValue = !(0,lodash.isUndefined)(inputValue) ? inputValue : searchValue;
  (0,react.useEffect)(() => {
    if (controlled && !(0,lodash.isEqual)(innerValue, value)) {
      setInnerValue(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controlled, value]);
  const handleChange = (0,react.useCallback)(newValues => {
    if (controlled) {
      onChange === null || onChange === void 0 || onChange(newValues);
      return;
    }
    setInnerValue(newValues);
    onChange === null || onChange === void 0 || onChange(newValues);
  }, [onChange, controlled]);
  const handleSearchValueChange = (0,react.useCallback)(newValue => {
    setSearchValue(newValue);
    onInputValueChange === null || onInputValueChange === void 0 || onInputValueChange(newValue);
  }, [setSearchValue, onInputValueChange]);
  const filteredMenuGroups = (0,react.useMemo)(() => getFilteredChildren(innerValue, children, effectiveSearchValue, shouldFilterItems), [children, effectiveSearchValue, innerValue]);
  const updatedSelectedItems = (0,react.useMemo)(() => getUpdatedSelectedItems(prevSelectedValues, innerValue, children), [children, innerValue]);
  const hasMultipleGroups = (0,react.useMemo)(() => (0,filterChildrenByType/* filterChildrenByType */.X)(children, MENU_GROUP_ID).length > 1, [children]);
  return {
    innerValue,
    setInnerValue: handleChange,
    searchValue: effectiveSearchValue,
    setSearchValue: handleSearchValueChange,
    currentFocusedElement,
    setCurrentFocusedElement,
    inputRef,
    isInitialMultiSelect,
    shouldFilterItems,
    filteredMenuGroups,
    updatedSelectedItems,
    controlled,
    hasMultipleGroups,
    theme: theme || 'light'
  };
};
/* harmony default export */ const hooks_useComboboxState = (useComboboxState);
;// ../forms/dist/esm/src/components/Combobox/index.js
const Combobox_excluded = ["children", "copies", "placeholder", "isError", "isSuccess", "disabled", "value", "onChange", "defaultValue", "hideClearButton", "onInputValueChange", "isOpen", "onOpenChanged", "appendToBody", "popoverPosition", "disableFlip", "inputValue", "goExperimental", "theme", "dataTrackTag", "dataTrackValue"];
function Combobox_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Combobox_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Combobox_ownKeys(Object(t), !0).forEach(function (r) {
      Combobox_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Combobox_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Combobox_defineProperty(e, r, t) {
  return (r = Combobox_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Combobox_toPropertyKey(t) {
  var i = Combobox_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function Combobox_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Combobox_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = Combobox_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function Combobox_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}







const Combobox = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      children,
      copies = {
        noOptionsText: () => (0,translate/* translate */.T)('forms.combobox.noOptions')
      },
      placeholder,
      isError,
      isSuccess,
      disabled,
      value,
      onChange,
      defaultValue,
      hideClearButton = false,
      onInputValueChange,
      isOpen,
      onOpenChanged,
      appendToBody,
      popoverPosition,
      disableFlip,
      inputValue,
      goExperimental = false,
      theme = 'light',
      dataTrackTag = 'combobox',
      dataTrackValue
    } = _ref,
    rest = Combobox_objectWithoutProperties(_ref, Combobox_excluded);
  const currentTheme = goExperimental ? 'dark' : theme;
  const state = hooks_useComboboxState({
    children,
    value,
    defaultValue,
    onChange,
    onInputValueChange,
    inputValue,
    theme: currentTheme
  });
  return /*#__PURE__*/react.createElement(ComboboxContext.Provider, {
    value: state
  }, /*#__PURE__*/react.createElement(Dropdown/* default */.A, {
    searchWhenClosed: true,
    values: state.innerValue,
    onChange: state.setInnerValue,
    searchOnKeyPress: false,
    selectedIndicatorPosition: "right",
    isOpen: isOpen,
    onOpenChanged: onOpenChanged,
    disableFlip: disableFlip,
    position: popoverPosition,
    theme: currentTheme
  }, /*#__PURE__*/react.createElement(Combobox_Trigger, Combobox_objectSpread({
    ref: ref,
    isError: isError,
    isSuccess: isSuccess,
    disabled: disabled,
    placeholder: placeholder,
    defaultValue: defaultValue,
    hideClearButton: hideClearButton,
    theme: currentTheme,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, rest)), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, {
    dataTrackTag: "combobox_content",
    fullWidth: true,
    disableExitAnimation: true,
    appendToBody: appendToBody
  }, /*#__PURE__*/react.createElement(Combobox_ComboboxOptions, {
    copies: copies
  }, state.filteredMenuGroups))));
});
Combobox.displayName = 'Combobox';
/* harmony default export */ const components_Combobox = (Combobox);
;
Combobox.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Combobox"
};
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/DropdownMenu/MenuItem/index.js + 1 modules
var MenuItem = __webpack_require__("../dropdown/dist/esm/src/components/DropdownMenu/MenuItem/index.js");
;// ../forms/dist/esm/src/components/Combobox/ComboboxOption/index.js





const ComboboxOption = _ref => {
  let {
    children,
    value,
    disabled,
    onClick,
    dataTrackTag = 'combobox_option',
    dataTrackValue
  } = _ref;
  const trackValue = (0,useInputTrackValue/* useInputTrackValue */.y)({
    dataTrackValue,
    value
  });
  const {
    setSearchValue,
    inputRef,
    isInitialMultiSelect,
    setCurrentFocusedElement,
    shouldFilterItems
  } = hooks_useComboboxContext();
  const handleClick = e => {
    if (!isInitialMultiSelect.current) {
      setSearchValue(getOptionText(children));
      shouldFilterItems.current = true;
    } else {
      setSearchValue('');
    }
    setCurrentFocusedElement(inputRef.current);
    onClick === null || onClick === void 0 || onClick(e);
  };
  return /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: trackValue,
    value: value,
    disabled: disabled,
    onClick: handleClick,
    selectable: true
  }, children);
};
ComboboxOption.displayName = 'ComboboxOption';
/* harmony default export */ const Combobox_ComboboxOption = (ComboboxOption);
;
ComboboxOption.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ComboboxOption"
};
// EXTERNAL MODULE: ../typography/dist/esm/src/components/HighlightText/index.js
var HighlightText = __webpack_require__("../typography/dist/esm/src/components/HighlightText/index.js");
;// ../forms/dist/esm/src/components/Combobox/ComboboxOption/ComboboxOptionLabel/index.js




const MIN_HEIGHT = 48;
const ComboboxOptionLabel = _ref => {
  let {
    children,
    isOptionCreate
  } = _ref;
  const {
    searchValue,
    theme
  } = hooks_useComboboxContext();
  const textRef = (0,react.useRef)(null);
  const [isMulti, setIsMulti] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    const checkHeight = () => {
      if (textRef.current) {
        const offsetHeight = textRef.current.offsetHeight;
        setIsMulti(offsetHeight > MIN_HEIGHT);
      }
    };
    checkHeight();
  }, [children]);
  return isOptionCreate ? /*#__PURE__*/react.createElement(Text/* default */.A, {
    ref: textRef,
    fontWeight: "bold",
    marginLeft: isMulti ? '2' : '0',
    wordBreak: "breakAll"
  }, children) : /*#__PURE__*/react.createElement(HighlightText/* default */.A, {
    as: "span",
    query: searchValue,
    color: theme === 'dark' ? 'white' : undefined
  }, children);
};
ComboboxOptionLabel.displayName = OPTION_LABEL_ID;
ComboboxOptionLabel.id = OPTION_LABEL_ID;
/* harmony default export */ const ComboboxOption_ComboboxOptionLabel = (ComboboxOptionLabel);
;
ComboboxOptionLabel.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OptionLabel"
};
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Ellipsis.js
var Ellipsis = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Ellipsis.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/IconButton/index.js
var IconButton = __webpack_require__("../button/dist/esm/src/components/IconButton/index.js");
;// ../dropdown/dist/esm/src/components/DropdownTrigger/index.js




const DropdownTrigger = /*#__PURE__*/react.forwardRef((_ref, ref) => {
  let {
    ariaLabel = (0,translate/* translate */.T)('dropdown.dropdownTrigger.ariaLabel'),
    'aria-haspopup': ariaHasPopup,
    'aria-expanded': ariaExpanded,
    dataTrackTag = 'dropdown_trigger',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    type: "button",
    "aria-label": ariaLabel,
    shape: "circle",
    ref: ref,
    "aria-haspopup": ariaHasPopup,
    "aria-expanded": ariaExpanded,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(Ellipsis/* default */.A, {
    color: "grey_900"
  }));
});
DropdownTrigger.displayName = 'DropdownTrigger';
/* harmony default export */ const components_DropdownTrigger = (DropdownTrigger);
;
DropdownTrigger.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "DropdownTrigger"
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-easy-crop@4.7.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-easy-crop/index.module.js + 1 modules
var index_module = __webpack_require__("../../node_modules/.pnpm/react-easy-crop@4.7.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-easy-crop/index.module.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js
var I18n = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js");
;// ../media/dist/esm/src/components/ImageCrop/constants.js
const DEFAULT_CROP = {
  x: 0,
  y: 0
};
const DEFAULT_ASPECT_RATIO = 4 / 3;
const DEFAULT_SHAPE = 'rect';
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Typography/index.js
var Typography = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
;// ../media/dist/esm/src/components/ImageCrop/Range/constants.js
const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.1;
;// ../media/dist/esm/src/components/ImageCrop/media/dist/esm/src/components/ImageCrop/Range/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../media/dist/esm/src/components/ImageCrop/Range/styles.ve.css.js.vanilla.css","source":"Ll8xdjRmdmc5MDo6LXdlYmtpdC1zbGlkZXItdGh1bWIgewogIGFwcGVhcmFuY2U6IG5vbmU7CiAgYm9yZGVyOiAxcHggc29saWQgIzIyMjMyNTsKICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOwogIGJvcmRlci1yYWRpdXM6IDk5OTlweDsKICB3aWR0aDogMjRweDsKICBoZWlnaHQ6IDI0cHg7CiAgYm94LXNoYWRvdzogMCAuMTRweCAyLjI5MjY2cHggcmdiYSgwLCAwLCAwLCAuMDMyMzExNCksIDAgLjM3cHggNC40MjYyNnB4IHJnYmEoMCwgMCwgMCwgLjA0NzY4ODYpLCAwIDNweCA3cHggcmdiYSgwLCAwLCAwLCAuMDkpOwogIHBvc2l0aW9uOiByZWxhdGl2ZTsKfQ=="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const webpack_plugin_extracted = ({});
;// ../media/dist/esm/src/components/ImageCrop/Range/styles.ve.css.js

var zoomRange = '_1v4fvg90';
;// ../media/dist/esm/src/components/ImageCrop/Range/index.js





const Range = _ref => {
  let {
    zoom,
    onChange
  } = _ref;
  const zoomPercentage = (0,react.useMemo)(() => Math.floor((zoom - MIN_ZOOM) / (MAX_ZOOM - MIN_ZOOM) * 100), [zoom]);
  (0,react.useEffect)(() => {
    document.documentElement.style.setProperty('--crop-zoom', "".concat(zoomPercentage, "%"));
  }, [zoomPercentage]);
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    display: "flex",
    direction: "column"
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "label",
    htmlFor: "range",
    display: "flex",
    justifyContent: "spaceBetween",
    color: "grey_1100",
    lineHeight: "b_md",
    fontSize: "b_md",
    fontWeight: "semibold",
    marginBottom: "4",
    dataTrackTag: "image_crop_range",
    dataTrackValue: String(zoom)
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    as: "span"
  }, "Zoom"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    as: "span"
  }, zoomPercentage, "%")), /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "input",
    id: "range",
    type: "range",
    value: zoom,
    min: MIN_ZOOM,
    max: MAX_ZOOM,
    step: ZOOM_STEP,
    height: "4px",
    backgroundColor: "grey_900",
    borderRadius: "md",
    width: "100%",
    "aria-labelledby": "Zoom",
    appearance: "none",
    onChange: e => {
      onChange(Number(e.target.value));
    },
    className: zoomRange
  }));
};
Range.displayName = 'Range';
/* harmony default export */ const ImageCrop_Range = (Range);
;
Range.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Range"
};
;// ../media/dist/esm/src/components/ImageCrop/index.js







const ImageCrop = _ref => {
  let {
    aspectRatio = DEFAULT_ASPECT_RATIO,
    shape = DEFAULT_SHAPE,
    src,
    crop: _crop = DEFAULT_CROP,
    onChange,
    width = '100%',
    height = '220px',
    dataTrackTag = 'image_crop',
    dataTrackValue
  } = _ref;
  const [crop, setCrop] = (0,react.useState)(_crop);
  const [cropSize, setCropSize] = (0,react.useState)({
    width: 0,
    height: 0
  });
  const [zoom, setZoom] = (0,react.useState)(1);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Box/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    width: width,
    height: height,
    backgroundColor: "black",
    position: "relative",
    marginBottom: "3",
    flex: 1
  }, /*#__PURE__*/react.createElement(index_module/* default */.Ay, {
    image: src,
    crop: crop,
    cropSize: cropSize,
    cropShape: shape,
    zoom: zoom,
    onCropChange: setCrop,
    onCropComplete: onChange,
    onZoomChange: setZoom,
    onMediaLoaded: _ref2 => {
      let {
        width,
        height
      } = _ref2;
      if (shape === 'round') {
        const diameter = Math.min(width, height);
        setCropSize({
          width: diameter,
          height: diameter
        });
      } else {
        const cropHeight = width / aspectRatio;
        setCropSize({
          width,
          height: Math.min(cropHeight, height)
        });
      }
    }
  })), /*#__PURE__*/react.createElement(Text/* default */.A, {
    marginBottom: "8",
    textAlign: "center",
    width: "100%",
    color: "bodySecondary"
  }, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "media.imageCrop.dragImage"
  })), /*#__PURE__*/react.createElement(ImageCrop_Range, {
    zoom: zoom,
    onChange: setZoom
  }));
};
ImageCrop.displayName = 'ImageCrop';
/* harmony default export */ const components_ImageCrop = (ImageCrop);
;
ImageCrop.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ImageCrop"
};
// EXTERNAL MODULE: ../button/dist/esm/src/components/Button/index.js + 1 modules
var Button = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
;// ./src/docs/patterns/overlay/index.stories.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}










const headerText = esm/* faker */.az.lorem.words(2);
const buttonText = 'Click here';
const options = [{
  value: 'pie',
  text: 'Pie'
}, {
  value: 'souffle',
  text: 'Souffle'
}, {
  value: 'cheesecake',
  text: 'Cheesecake'
}];
const ImageCropModal = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      source: {
        code: "const [isOpen, setIsOpen] = useState(false);\nconst [image, setImage] = useState('');\n\nconst open = () => setIsOpen(true);\nconst close = () => setIsOpen(false);\n\nreturn (\n  <>\n    <Stack\n      as=\"label\"\n      htmlFor=\"myImage\"\n      cursor=\"pointer\"\n      alignItems=\"center\"\n      justifyContent=\"center\"\n      borderRadius=\"circle\"\n      boxShadow=\"aa\"\n      width=\"40px\"\n      height=\"40px\"\n    >\n      <CameraIcon color=\"grey_1100\" />\n    </Stack>\n    <Input\n      type=\"file\"\n      id=\"myImage\"\n      style={{ display: 'none' }}\n      name=\"myImage\"\n      onChange={(event) => {\n        const file = event.target.files?.[0];\n        if (file) {\n          open();\n          setImage(URL.createObjectURL(file));\n        }\n      }}\n    />\n    <Modal isOpen={isOpen} onClose={close}>\n      <ModalContent>\n        <ModalHeader>Edit image</ModalHeader>\n        <ModalBody>\n          <Stack alignItems=\"center\" position=\"relative\" marginBottom=\"6\">\n            <CameraIcon color=\"grey_1100\" />\n            <StoryText as=\"label\" htmlFor=\"myImage\" decoration=\"underline\" cursor=\"pointer\">\n              Upload new image\n            </StoryText>\n            <Input\n              type=\"file\"\n              style={{ display: 'none' }}\n              id=\"myImage\"\n              name=\"myImage\"\n              onChange={(event) => {\n                const file = event.target.files?.[0];\n                if (file) {\n                  setImage(URL.createObjectURL(file));\n                }\n              }}\n            />\n          </Stack>\n          {image && (\n            <Stack display=\"block\" marginBottom=\"9\" height=\"500px\">\n              <ImageCrop shape=\"round\" src={image} onChange={() => ({})} />\n            </Stack>\n          )}\n        </ModalBody>\n        <ModalFooter>\n          <Button onClick={close} intent=\"secondary\">\n            Cancel\n          </Button>\n          <Button onClick={close}>Apply</Button>\n        </ModalFooter>\n      </ModalContent>\n    </Modal>\n  </>\n);"
      }
    }
  },
  render: args => {
    const [isOpen, setIsOpen] = (0,react.useState)(false);
    const [image, setImage] = (0,react.useState)('');
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
      as: "label",
      htmlFor: "myImage",
      cursor: "pointer",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "circle",
      boxShadow: "aa",
      width: "40px",
      height: "40px"
    }, /*#__PURE__*/react.createElement(Camera/* default */.A, {
      color: "grey_1100"
    })), /*#__PURE__*/react.createElement(Input/* default */.A, {
      type: "file",
      id: "myImage",
      style: {
        display: 'none'
      },
      name: "myImage",
      onChange: event => {
        var _event$target$files;
        const file = (_event$target$files = event.target.files) === null || _event$target$files === void 0 ? void 0 : _event$target$files[0];
        if (file) {
          open();
          setImage(URL.createObjectURL(file));
        }
      }
    }), /*#__PURE__*/react.createElement(Modal/* default */.A, _extends({}, args, {
      isOpen: isOpen,
      onClose: close
    }), /*#__PURE__*/react.createElement(ModalContent/* default */.A, null, /*#__PURE__*/react.createElement(ModalHeader/* default */.A, null, "Edit image"), /*#__PURE__*/react.createElement(ModalBody/* default */.A, null, /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
      alignItems: "center",
      position: "relative",
      marginBottom: "6"
    }, /*#__PURE__*/react.createElement(Camera/* default */.A, {
      color: "grey_1100"
    }), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
      as: "label",
      htmlFor: "myImage",
      decoration: "underline",
      cursor: "pointer"
    }, "Upload new image"), /*#__PURE__*/react.createElement(Input/* default */.A, {
      type: "file",
      style: {
        display: 'none'
      },
      id: "myImage",
      name: "myImage",
      onChange: event => {
        var _event$target$files2;
        const file = (_event$target$files2 = event.target.files) === null || _event$target$files2 === void 0 ? void 0 : _event$target$files2[0];
        if (file) {
          setImage(URL.createObjectURL(file));
        }
      }
    })), image && /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
      display: "block",
      marginBottom: "9",
      height: "500px"
    }, /*#__PURE__*/react.createElement(components_ImageCrop, {
      shape: "round",
      src: image,
      onChange: () => ({})
    }))), /*#__PURE__*/react.createElement(ModalFooter/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
      onClick: close,
      intent: "secondary"
    }, "Cancel"), /*#__PURE__*/react.createElement(Button/* default */.A, {
      onClick: close
    }, "Apply")))));
  }
};
const InitialFocusRef = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      source: {
        code: "const ref = useRef(null);\n\nreturn (\n  <Modal>\n    <ModalTrigger>\n      <Button>Open</Button>\n    </ModalTrigger>\n    <ModalContent initialFocusRef={ref}>\n      <ModalHeader>\n        {headerText}\n        <ModalCloseBtn />\n      </ModalHeader>\n      <ModalBody>\n        <Stack direction=\"column\">\n          <Input ref={ref} tabIndex={0} placeholder=\"First field\" />\n          <Input tabIndex={0} placeholder=\"Second field\" />\n        </Stack>\n      </ModalBody>\n      <ModalFooter>\n        <Button>{buttonText}</Button>\n      </ModalFooter>\n    </ModalContent>\n  </Modal>\n);"
      }
    }
  },
  render: args => {
    const ref = (0,react.useRef)(null);
    return /*#__PURE__*/react.createElement(Modal/* default */.A, args, /*#__PURE__*/react.createElement(ModalTrigger/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Open")), /*#__PURE__*/react.createElement(ModalContent/* default */.A, {
      initialFocusRef: ref
    }, /*#__PURE__*/react.createElement(ModalHeader/* default */.A, null, headerText, /*#__PURE__*/react.createElement(Modal_ModalCloseBtn, null)), /*#__PURE__*/react.createElement(ModalBody/* default */.A, null, /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
      paddingY: "2",
      direction: "column"
    }, /*#__PURE__*/react.createElement(Input/* default */.A, {
      ref: ref,
      tabIndex: 0,
      placeholder: "First field"
    }), /*#__PURE__*/react.createElement(Input/* default */.A, {
      tabIndex: 0,
      placeholder: "Second field"
    }))), /*#__PURE__*/react.createElement(ModalFooter/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, buttonText))));
  }
};
const ModalWithDropdowns = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => /*#__PURE__*/react.createElement(Modal/* default */.A, args, /*#__PURE__*/react.createElement(ModalTrigger/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Open modal")), /*#__PURE__*/react.createElement(ModalContent/* default */.A, null, /*#__PURE__*/react.createElement(ModalHeader/* default */.A, null, "Modal with dropdown"), /*#__PURE__*/react.createElement(ModalBody/* default */.A, null, /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    paddingY: "2"
  }, /*#__PURE__*/react.createElement(Select/* default */.A, {
    appendToBody: true,
    placeholder: "Select item"
  }, options.map(option => /*#__PURE__*/react.createElement(Option/* default */.A, {
    key: option.value,
    value: option.value
  }, option.text))), /*#__PURE__*/react.createElement(components_Combobox, _extends({}, args, {
    placeholder: "Some placeholder",
    appendToBody: true
  }), options.map(option => /*#__PURE__*/react.createElement(Combobox_ComboboxOption, {
    key: option.value,
    value: option.value
  }, /*#__PURE__*/react.createElement(ComboboxOption_ComboboxOptionLabel, null, option.value)))), /*#__PURE__*/react.createElement(Dropdown/* default */.A, args, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, null, /*#__PURE__*/react.createElement(components_DropdownTrigger, null)), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, {
    appendToBody: true
  }, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, options.map(option => /*#__PURE__*/react.createElement(MenuItem/* default */.A, {
    key: option.value
  }, option.value))))))), /*#__PURE__*/react.createElement(ModalFooter/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Apply"))))
};
const ModalWithAlert = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => /*#__PURE__*/react.createElement(Modal/* default */.A, args, /*#__PURE__*/react.createElement(ModalTrigger/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Open modal")), /*#__PURE__*/react.createElement(ModalContent/* default */.A, null, /*#__PURE__*/react.createElement(ModalHeader/* default */.A, null, "Modal with alert"), /*#__PURE__*/react.createElement(ModalBody/* default */.A, null, /*#__PURE__*/react.createElement(Alert/* default */.A, {
    variant: "info",
    forceMobileDesign: true
  }, /*#__PURE__*/react.createElement(AlertTitle/* default */.A, null, esm/* faker */.az.lorem.words(7)), /*#__PURE__*/react.createElement(AlertText/* default */.A, null, esm/* faker */.az.lorem.words(20)), /*#__PURE__*/react.createElement(AlertActions/* default */.A, null, /*#__PURE__*/react.createElement(AlertActionButton/* default */.A, {
    intent: "secondary",
    href: "https://www.fiverr.com"
  }, esm/* faker */.az.lorem.words(2)), /*#__PURE__*/react.createElement(AlertActionButton/* default */.A, {
    href: "https://www.fiverr.com"
  }, esm/* faker */.az.lorem.words(2)))), /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    paddingY: "6"
  }, esm/* faker */.az.lorem.words(50))), /*#__PURE__*/react.createElement(ModalFooter/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, "Apply"))))
};
const meta = {
  title: 'Overlay/Patterns'
};
/* harmony default export */ const index_stories = (meta);
ImageCropModal.parameters = {
  ...ImageCropModal.parameters,
  docs: {
    ...ImageCropModal.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `const [isOpen, setIsOpen] = useState(false);\nconst [image, setImage] = useState('');\n\nconst open = () => setIsOpen(true);\nconst close = () => setIsOpen(false);\n\nreturn (\n  <>\n    <Stack\n      as=\"label\"\n      htmlFor=\"myImage\"\n      cursor=\"pointer\"\n      alignItems=\"center\"\n      justifyContent=\"center\"\n      borderRadius=\"circle\"\n      boxShadow=\"aa\"\n      width=\"40px\"\n      height=\"40px\"\n    >\n      <CameraIcon color=\"grey_1100\" />\n    </Stack>\n    <Input\n      type=\"file\"\n      id=\"myImage\"\n      style={{ display: 'none' }}\n      name=\"myImage\"\n      onChange={(event) => {\n        const file = event.target.files?.[0];\n        if (file) {\n          open();\n          setImage(URL.createObjectURL(file));\n        }\n      }}\n    />\n    <Modal isOpen={isOpen} onClose={close}>\n      <ModalContent>\n        <ModalHeader>Edit image</ModalHeader>\n        <ModalBody>\n          <Stack alignItems=\"center\" position=\"relative\" marginBottom=\"6\">\n            <CameraIcon color=\"grey_1100\" />\n            <StoryText as=\"label\" htmlFor=\"myImage\" decoration=\"underline\" cursor=\"pointer\">\n              Upload new image\n            </StoryText>\n            <Input\n              type=\"file\"\n              style={{ display: 'none' }}\n              id=\"myImage\"\n              name=\"myImage\"\n              onChange={(event) => {\n                const file = event.target.files?.[0];\n                if (file) {\n                  setImage(URL.createObjectURL(file));\n                }\n              }}\n            />\n          </Stack>\n          {image && (\n            <Stack display=\"block\" marginBottom=\"9\" height=\"500px\">\n              <ImageCrop shape=\"round\" src={image} onChange={() => ({})} />\n            </Stack>\n          )}\n        </ModalBody>\n        <ModalFooter>\n          <Button onClick={close} intent=\"secondary\">\n            Cancel\n          </Button>\n          <Button onClick={close}>Apply</Button>\n        </ModalFooter>\n      </ModalContent>\n    </Modal>\n  </>\n);`\n      }\n    }\n  },\n  render: args => {\n    const [isOpen, setIsOpen] = useState(false);\n    const [image, setImage] = useState('');\n    const open = () => setIsOpen(true);\n    const close = () => setIsOpen(false);\n    return <>\n        <Stack as=\"label\" htmlFor=\"myImage\" cursor=\"pointer\" alignItems=\"center\" justifyContent=\"center\" borderRadius=\"circle\" boxShadow=\"aa\" width=\"40px\" height=\"40px\">\n          <CameraIcon color=\"grey_1100\" />\n        </Stack>\n        <Input type=\"file\" id=\"myImage\" style={{\n        display: 'none'\n      }} name=\"myImage\" onChange={event => {\n        const file = event.target.files?.[0];\n        if (file) {\n          open();\n          setImage(URL.createObjectURL(file));\n        }\n      }} />\n        <Modal {...args} isOpen={isOpen} onClose={close}>\n          <ModalContent>\n            <ModalHeader>Edit image</ModalHeader>\n            <ModalBody>\n              <Stack alignItems=\"center\" position=\"relative\" marginBottom=\"6\">\n                <CameraIcon color=\"grey_1100\" />\n                <StoryText as=\"label\" htmlFor=\"myImage\" decoration=\"underline\" cursor=\"pointer\">\n                  Upload new image\n                </StoryText>\n                <Input type=\"file\" style={{\n                display: 'none'\n              }} id=\"myImage\" name=\"myImage\" onChange={event => {\n                const file = event.target.files?.[0];\n                if (file) {\n                  setImage(URL.createObjectURL(file));\n                }\n              }} />\n              </Stack>\n              {image && <Stack display=\"block\" marginBottom=\"9\" height=\"500px\">\n                  <ImageCrop shape=\"round\" src={image} onChange={() => ({})} />\n                </Stack>}\n            </ModalBody>\n            <ModalFooter>\n              <Button onClick={close} intent=\"secondary\">\n                Cancel\n              </Button>\n              <Button onClick={close}>Apply</Button>\n            </ModalFooter>\n          </ModalContent>\n        </Modal>\n      </>;\n  }\n}",
      ...ImageCropModal.parameters?.docs?.source
    }
  }
};
InitialFocusRef.parameters = {
  ...InitialFocusRef.parameters,
  docs: {
    ...InitialFocusRef.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `const ref = useRef(null);\n\nreturn (\n  <Modal>\n    <ModalTrigger>\n      <Button>Open</Button>\n    </ModalTrigger>\n    <ModalContent initialFocusRef={ref}>\n      <ModalHeader>\n        {headerText}\n        <ModalCloseBtn />\n      </ModalHeader>\n      <ModalBody>\n        <Stack direction=\"column\">\n          <Input ref={ref} tabIndex={0} placeholder=\"First field\" />\n          <Input tabIndex={0} placeholder=\"Second field\" />\n        </Stack>\n      </ModalBody>\n      <ModalFooter>\n        <Button>{buttonText}</Button>\n      </ModalFooter>\n    </ModalContent>\n  </Modal>\n);`\n      }\n    }\n  },\n  render: args => {\n    const ref = useRef(null);\n    return <Modal {...args}>\n        <ModalTrigger>\n          <Button>Open</Button>\n        </ModalTrigger>\n        <ModalContent initialFocusRef={ref}>\n          <ModalHeader>\n            {headerText}\n            <ModalCloseBtn />\n          </ModalHeader>\n          <ModalBody>\n            <Stack paddingY=\"2\" direction=\"column\">\n              <Input ref={ref} tabIndex={0} placeholder=\"First field\" />\n              <Input tabIndex={0} placeholder=\"Second field\" />\n            </Stack>\n          </ModalBody>\n          <ModalFooter>\n            <Button>{buttonText}</Button>\n          </ModalFooter>\n        </ModalContent>\n      </Modal>;\n  }\n}",
      ...InitialFocusRef.parameters?.docs?.source
    }
  }
};
ModalWithDropdowns.parameters = {
  ...ModalWithDropdowns.parameters,
  docs: {
    ...ModalWithDropdowns.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => <Modal {...args}>\n      <ModalTrigger>\n        <Button>Open modal</Button>\n      </ModalTrigger>\n      <ModalContent>\n        <ModalHeader>Modal with dropdown</ModalHeader>\n        <ModalBody>\n          <Stack paddingY=\"2\">\n            <Select appendToBody placeholder=\"Select item\">\n              {options.map(option => <Option key={option.value} value={option.value}>\n                  {option.text}\n                </Option>)}\n            </Select>\n            <Combobox {...args} placeholder=\"Some placeholder\" appendToBody>\n              {options.map(option => <ComboboxOption key={option.value} value={option.value}>\n                  <ComboboxOptionLabel>{option.value}</ComboboxOptionLabel>\n                </ComboboxOption>)}\n            </Combobox>\n            <Dropdown {...args}>\n              <DropdownAnchor>\n                <DropdownTrigger />\n              </DropdownAnchor>\n              <DropdownContent appendToBody>\n                <DropdownMenu>\n                  {options.map(option => <MenuItem key={option.value}>{option.value}</MenuItem>)}\n                </DropdownMenu>\n              </DropdownContent>\n            </Dropdown>\n          </Stack>\n        </ModalBody>\n        <ModalFooter>\n          <Button>Apply</Button>\n        </ModalFooter>\n      </ModalContent>\n    </Modal>\n}",
      ...ModalWithDropdowns.parameters?.docs?.source
    }
  }
};
ModalWithAlert.parameters = {
  ...ModalWithAlert.parameters,
  docs: {
    ...ModalWithAlert.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => <Modal {...args}>\n      <ModalTrigger>\n        <Button>Open modal</Button>\n      </ModalTrigger>\n      <ModalContent>\n        <ModalHeader>Modal with alert</ModalHeader>\n        <ModalBody>\n          <Alert variant=\"info\" forceMobileDesign>\n            <AlertTitle>{faker.lorem.words(7)}</AlertTitle>\n            <AlertText>{faker.lorem.words(20)}</AlertText>\n            <AlertActions>\n              <AlertActionButton intent=\"secondary\" href=\"https://www.fiverr.com\">\n                {faker.lorem.words(2)}\n              </AlertActionButton>\n              <AlertActionButton href=\"https://www.fiverr.com\">{faker.lorem.words(2)}</AlertActionButton>\n            </AlertActions>\n          </Alert>\n          <Stack paddingY=\"6\">{faker.lorem.words(50)}</Stack>\n        </ModalBody>\n        <ModalFooter>\n          <Button>Apply</Button>\n        </ModalFooter>\n      </ModalContent>\n    </Modal>\n}",
      ...ModalWithAlert.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["ImageCropModal","InitialFocusRef","ModalWithDropdowns","ModalWithAlert"];

/***/ })

}]);
//# sourceMappingURL=7585.71378153.iframe.bundle.js.map