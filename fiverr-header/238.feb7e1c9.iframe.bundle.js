"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[238],{

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

/***/ "../feedback/src/components/SystemBanner/SystemBannerButton/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
/* harmony import */ var _fiverr_private_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../button/dist/esm/src/components/TextButton/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../feedback/src/components/SystemBanner/constants.ts");
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}



const SystemBannerButton = _ref => {
  let {
    children,
    intent = 'primary',
    onClick,
    href,
    dataTrackTag = 'system_banner_button',
    dataTrackValue
  } = _ref;
  const buttonProps = {
    href,
    target: href ? '_blank' : undefined,
    onClick,
    dataTrackTag,
    dataTrackValue
  };
  if (intent === 'secondary') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, buttonProps, children);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _extends({}, buttonProps, {
    size: "lg"
  }), children);
};
SystemBannerButton.id = _constants__WEBPACK_IMPORTED_MODULE_3__/* .BUTTON_ID */ .xD;
SystemBannerButton.displayName = 'SystemBannerButton';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SystemBannerButton);
try {
    // @ts-ignore
    SystemBannerButton.displayName = "SystemBannerButton";
    // @ts-ignore
    SystemBannerButton.__docgenInfo = { "description": "", "displayName": "SystemBannerButton", "props": { "intent": { "defaultValue": { value: "primary" }, "description": "", "name": "intent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"primary\"" }, { "value": "\"secondary\"" }] } }, "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLButtonElement>" } }, "href": { "defaultValue": null, "description": "", "name": "href", "required": false, "type": { "name": "string" } }, "children": { "defaultValue": null, "description": "Any node(s) to render.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }, { "value": "ReactNode[]" }] } }, "dataTrackTag": { "defaultValue": { value: "system_banner_button" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../feedback/src/components/SystemBanner/SystemBannerButton/index.tsx#SystemBannerButton"] = { docgenInfo: SystemBannerButton.__docgenInfo, name: "SystemBannerButton", path: "../feedback/src/components/SystemBanner/SystemBannerButton/index.tsx#SystemBannerButton" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../feedback/src/components/SystemBanner/SystemBannerContext/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ SystemBannerContext),
/* harmony export */   i: () => (/* binding */ useSystemBannerContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const SystemBannerContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useSystemBannerContext = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SystemBannerContext);
  if (context === undefined) {
    throw new Error('useSystemBannerContext must be used within a SystemBannerContextProvider');
  }
  return context;
};

/***/ }),

/***/ "../feedback/src/components/SystemBanner/SystemBannerDismissButton/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../button/dist/esm/src/components/TimesButton/index.js");
/* harmony import */ var _SystemBannerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../feedback/src/components/SystemBanner/SystemBannerContext/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../feedback/src/components/SystemBanner/constants.ts");




const SystemBannerDismissButton = _ref => {
  let {
    onClick,
    dataTrackTag = 'system_banner_dismiss_button',
    dataTrackValue
  } = _ref;
  const {
    setDismissed
  } = (0,_SystemBannerContext__WEBPACK_IMPORTED_MODULE_2__/* .useSystemBannerContext */ .i)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    size: "sm",
    onClick: e => {
      setDismissed(true);
      onClick === null || onClick === void 0 || onClick(e);
    }
  });
};
SystemBannerDismissButton.displayName = 'SystemBannerDismissButton';
SystemBannerDismissButton.id = _constants__WEBPACK_IMPORTED_MODULE_3__/* .DISMISS_BUTTON_ID */ .SI;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SystemBannerDismissButton);
try {
    // @ts-ignore
    SystemBannerDismissButton.displayName = "SystemBannerDismissButton";
    // @ts-ignore
    SystemBannerDismissButton.__docgenInfo = { "description": "", "displayName": "SystemBannerDismissButton", "props": { "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLElement>" } }, "dataTrackTag": { "defaultValue": { value: "system_banner_dismiss_button" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../feedback/src/components/SystemBanner/SystemBannerDismissButton/index.tsx#SystemBannerDismissButton"] = { docgenInfo: SystemBannerDismissButton.__docgenInfo, name: "SystemBannerDismissButton", path: "../feedback/src/components/SystemBanner/SystemBannerDismissButton/index.tsx#SystemBannerDismissButton" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../feedback/src/components/SystemBanner/SystemBannerIcon/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _SystemBannerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../feedback/src/components/SystemBanner/SystemBannerContext/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../feedback/src/components/SystemBanner/constants.ts");




const SystemBannerIcon = _ref => {
  let {
    children,
    dataTrackTag = 'system_banner_icon',
    dataTrackValue
  } = _ref;
  const {
    showIcon,
    iconInTitle
  } = (0,_SystemBannerContext__WEBPACK_IMPORTED_MODULE_2__/* .useSystemBannerContext */ .i)();
  return showIcon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    as: "span",
    style: iconInTitle ? {
      verticalAlign: 'bottom'
    } : undefined,
    flexShrink: iconInTitle ? undefined : 0,
    paddingRight: "2",
    display: "inlineFlex",
    height: "24px",
    alignItems: "center"
  }, children) : null;
};
SystemBannerIcon.displayName = 'SystemBannerIcon';
SystemBannerIcon.id = _constants__WEBPACK_IMPORTED_MODULE_3__/* .BANNER_ICON_ID */ .d7;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SystemBannerIcon);
try {
    // @ts-ignore
    SystemBannerIcon.displayName = "SystemBannerIcon";
    // @ts-ignore
    SystemBannerIcon.__docgenInfo = { "description": "", "displayName": "SystemBannerIcon", "props": { "children": { "defaultValue": null, "description": "Any node(s) to render.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }, { "value": "ReactNode[]" }] } }, "dataTrackTag": { "defaultValue": { value: "system_banner_icon" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../feedback/src/components/SystemBanner/SystemBannerIcon/index.tsx#SystemBannerIcon"] = { docgenInfo: SystemBannerIcon.__docgenInfo, name: "SystemBannerIcon", path: "../feedback/src/components/SystemBanner/SystemBannerIcon/index.tsx#SystemBannerIcon" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../feedback/src/components/SystemBanner/SystemBannerText/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../feedback/src/components/SystemBanner/constants.ts");



const SystemBannerText = _ref => {
  let {
    children,
    dataTrackTag = 'system_banner_text',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    color: "inherit"
  }, children);
};
SystemBannerText.id = _constants__WEBPACK_IMPORTED_MODULE_2__/* .TEXT_ID */ .cm;
SystemBannerText.displayName = 'SystemBannerText';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SystemBannerText);
try {
    // @ts-ignore
    SystemBannerText.displayName = "SystemBannerText";
    // @ts-ignore
    SystemBannerText.__docgenInfo = { "description": "", "displayName": "SystemBannerText", "props": { "children": { "defaultValue": null, "description": "Any node(s) to render.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }, { "value": "ReactNode[]" }] } }, "dataTrackTag": { "defaultValue": { value: "system_banner_text" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../feedback/src/components/SystemBanner/SystemBannerText/index.tsx#SystemBannerText"] = { docgenInfo: SystemBannerText.__docgenInfo, name: "SystemBannerText", path: "../feedback/src/components/SystemBanner/SystemBannerText/index.tsx#SystemBannerText" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../feedback/src/components/SystemBanner/SystemBannerTitle/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../feedback/src/components/SystemBanner/constants.ts");
/* harmony import */ var _SystemBannerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../feedback/src/components/SystemBanner/SystemBannerContext/index.ts");




const SystemBannerTitle = _ref => {
  let {
    children,
    dataTrackTag = 'system_banner_title',
    dataTrackValue
  } = _ref;
  const {
    iconInTitle,
    bannerIcon
  } = (0,_SystemBannerContext__WEBPACK_IMPORTED_MODULE_3__/* .useSystemBannerContext */ .i)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    fontWeight: "semibold",
    color: "inherit",
    textAlign: iconInTitle ? 'center' : undefined
  }, iconInTitle ? bannerIcon : null, children);
};
SystemBannerTitle.id = _constants__WEBPACK_IMPORTED_MODULE_2__/* .TITLE_ID */ .D4;
SystemBannerTitle.displayName = 'SystemBannerTitle';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SystemBannerTitle);
try {
    // @ts-ignore
    SystemBannerTitle.displayName = "SystemBannerTitle";
    // @ts-ignore
    SystemBannerTitle.__docgenInfo = { "description": "", "displayName": "SystemBannerTitle", "props": { "children": { "defaultValue": null, "description": "Any node(s) to render.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }, { "value": "ReactNode[]" }] } }, "dataTrackTag": { "defaultValue": { value: "system_banner_title" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../feedback/src/components/SystemBanner/SystemBannerTitle/index.tsx#SystemBannerTitle"] = { docgenInfo: SystemBannerTitle.__docgenInfo, name: "SystemBannerTitle", path: "../feedback/src/components/SystemBanner/SystemBannerTitle/index.tsx#SystemBannerTitle" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../feedback/src/components/SystemBanner/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D4: () => (/* binding */ TITLE_ID),
/* harmony export */   Gt: () => (/* binding */ VARIANT),
/* harmony export */   SI: () => (/* binding */ DISMISS_BUTTON_ID),
/* harmony export */   W3: () => (/* binding */ VARIANTS_CONFIG),
/* harmony export */   cm: () => (/* binding */ TEXT_ID),
/* harmony export */   d7: () => (/* binding */ BANNER_ICON_ID),
/* harmony export */   xD: () => (/* binding */ BUTTON_ID)
/* harmony export */ });
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/AlertHexagon.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/CheckCircle.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/InfoCircle.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Coupon.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/WarningCircle.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Lightbulb.js");

const VARIANT = {
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success',
  NEUTRAL: 'neutral',
  SPECIAL: 'special'
};
const VARIANTS_CONFIG = {
  info: {
    Icon: _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
    backgroundColor: 'blue_200'
  },
  warning: {
    Icon: _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
    backgroundColor: 'yellow_200'
  },
  success: {
    Icon: _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
    backgroundColor: 'green_200'
  },
  error: {
    Icon: _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,
    backgroundColor: 'red_200'
  },
  neutral: {
    Icon: _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
    backgroundColor: 'grey_200'
  },
  special: {
    Icon: _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
    backgroundColor: 'purple_200'
  }
};
const TITLE_ID = 'SystemBannerTitle';
const TEXT_ID = 'SystemBannerText';
const BUTTON_ID = 'SystemBannerButton';
const DISMISS_BUTTON_ID = 'SystemBannerDismissButton';
const BANNER_ICON_ID = 'SystemBannerIcon';

/***/ }),

/***/ "../feedback/src/components/SystemBanner/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CustomIcon: () => (/* binding */ CustomIcon),
  Primary: () => (/* binding */ Primary),
  TextAndTitleAndAction: () => (/* binding */ TextAndTitleAndAction),
  TextAndTitleAndTwoActions: () => (/* binding */ TextAndTitleAndTwoActions),
  TitleAndDismiss: () => (/* binding */ TitleAndDismiss),
  TitleAndPrimaryAction: () => (/* binding */ TitleAndPrimaryAction),
  TitleOnly: () => (/* binding */ TitleOnly),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs + 58 modules
var esm = __webpack_require__("../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Center/index.js
var Center = __webpack_require__("../layout_components/dist/esm/src/components/Center/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Heart.js
var Heart = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Heart.js");
// EXTERNAL MODULE: ../feedback/src/components/SystemBanner/SystemBannerTitle/index.tsx
var SystemBannerTitle = __webpack_require__("../feedback/src/components/SystemBanner/SystemBannerTitle/index.tsx");
// EXTERNAL MODULE: ../feedback/src/components/SystemBanner/SystemBannerText/index.tsx
var SystemBannerText = __webpack_require__("../feedback/src/components/SystemBanner/SystemBannerText/index.tsx");
// EXTERNAL MODULE: ../feedback/src/components/SystemBanner/SystemBannerButton/index.tsx
var SystemBannerButton = __webpack_require__("../feedback/src/components/SystemBanner/SystemBannerButton/index.tsx");
// EXTERNAL MODULE: ../feedback/src/components/SystemBanner/SystemBannerDismissButton/index.tsx
var SystemBannerDismissButton = __webpack_require__("../feedback/src/components/SystemBanner/SystemBannerDismissButton/index.tsx");
// EXTERNAL MODULE: ../feedback/src/components/SystemBanner/SystemBannerIcon/index.tsx
var SystemBannerIcon = __webpack_require__("../feedback/src/components/SystemBanner/SystemBannerIcon/index.tsx");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/filterChildrenByType/index.js
var filterChildrenByType = __webpack_require__("../ui_utils/dist/esm/src/utils/filterChildrenByType/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/utilityClasses.ve.css.js + 1 modules
var utilityClasses_ve_css = __webpack_require__("../theme/dist/esm/src/atoms/utilityClasses.ve.css.js");
;// ../layout_components/dist/esm/src/components/Section/constants.js

const DEFAULT = {
  paddingX: {
    default: '6',
    sm: '8'
  },
  paddingTop: {
    default: '6',
    sm: '8'
  },
  paddingBottom: {
    default: '12',
    sm: '16'
  },
  maxWidth: {
    default: '1400px'
  },
  className: utilityClasses_ve_css/* paddingX_0_xxl */.O
};
const EQUAL_PADDING = {
  padding: {
    default: '6',
    sm: '8'
  },
  className: utilityClasses_ve_css/* paddingX_0_xxl */.O
};
;// ../layout_components/dist/esm/src/components/Section/index.js
const _excluded = ["children", "fullWidth", "equalPadding", "className", "dataTrackTag"],
  _excluded2 = ["className"];
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




const Section = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      children,
      fullWidth,
      equalPadding,
      className: customClassName,
      dataTrackTag = 'section'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const styling = () => {
    if (fullWidth) {
      return {};
    }
    if (equalPadding) {
      return EQUAL_PADDING;
    }
    return DEFAULT;
  };
  const _styling = styling(),
    {
      className
    } = _styling,
    stylingProps = _objectWithoutProperties(_styling, _excluded2);
  return /*#__PURE__*/react.createElement(Box/* default */.A, _objectSpread(_objectSpread(_objectSpread({
    ref: ref,
    width: "100%",
    boxSizing: "borderBox",
    margin: "autoX"
  }, stylingProps), {}, {
    className: classnames_default()(className, customClassName)
  }, restProps), {}, {
    dataTrackTag: dataTrackTag
  }), children);
});
Section.displayName = 'Section';
/* harmony default export */ const components_Section = (Section);
;
Section.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Section"
};
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../feedback/src/components/SystemBanner/constants.ts
var constants = __webpack_require__("../feedback/src/components/SystemBanner/constants.ts");
// EXTERNAL MODULE: ../feedback/src/components/SystemBanner/SystemBannerContext/index.ts
var SystemBannerContext = __webpack_require__("../feedback/src/components/SystemBanner/SystemBannerContext/index.ts");
;// ../feedback/src/components/SystemBanner/index.tsx
const SystemBanner_excluded = ["variant", "children", "showIcon", "dataTrackTag"];
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function SystemBanner_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = SystemBanner_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function SystemBanner_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}






const SystemBanner = _ref => {
  let {
      variant,
      children,
      showIcon = true,
      dataTrackTag = 'system_banner'
    } = _ref,
    restProps = SystemBanner_objectWithoutProperties(_ref, SystemBanner_excluded);
  const [dismissed, setDismissed] = (0,react.useState)(false);
  const title = (0,findChildByType/* findChildByType */.B)(children, constants/* TITLE_ID */.D4);
  const text = (0,findChildByType/* findChildByType */.B)(children, constants/* TEXT_ID */.cm);
  const buttons = (0,filterChildrenByType/* filterChildrenByType */.X)(children, constants/* BUTTON_ID */.xD);
  const hasButtons = buttons.length > 0;
  const dismissButton = (0,findChildByType/* findChildByType */.B)(children, constants/* DISMISS_BUTTON_ID */.SI);
  const bannerIcon = (0,findChildByType/* findChildByType */.B)(children, constants/* BANNER_ICON_ID */.d7);
  const alignTextsToLeft = hasButtons || title && text;
  const {
    Icon,
    backgroundColor
  } = constants/* VARIANTS_CONFIG */.W3[variant];
  if (dismissed) {
    return null;
  }
  const currentBannerIcon = bannerIcon || /*#__PURE__*/react.createElement(SystemBannerIcon/* default */.A, null, /*#__PURE__*/react.createElement(Icon, null));
  return /*#__PURE__*/react.createElement(SystemBannerContext/* SystemBannerContext */.J.Provider, {
    value: {
      variant,
      setDismissed,
      iconInTitle: !alignTextsToLeft,
      showIcon,
      bannerIcon: currentBannerIcon
    }
  }, /*#__PURE__*/react.createElement(components_Section, {
    backgroundColor: backgroundColor,
    fullWidth: true
  }, /*#__PURE__*/react.createElement(Container/* default */.A, _extends({
    display: "flex",
    justifyContent: hasButtons ? 'spaceBetween' : {
      sm: 'center'
    },
    direction: hasButtons ? {
      default: 'column',
      sm: 'row'
    } : undefined,
    alignItems: {
      sm: 'center'
    },
    color: "bodyPrimary",
    role: "banner",
    paddingTop: "4",
    paddingBottom: "4",
    centered: true
  }, restProps, {
    dataTrackTag: dataTrackTag
  }), /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "flex",
    justifyContent: alignTextsToLeft ? undefined : 'center',
    marginLeft: dismissButton ? 'auto' : undefined
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    gap: "0"
  }, alignTextsToLeft ? /*#__PURE__*/react.createElement(react.Fragment, null, currentBannerIcon, /*#__PURE__*/react.createElement(Container/* default */.A, null, title, text)) : /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "flex"
  }, title, text))), hasButtons && /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "flex",
    marginTop: {
      default: '4',
      sm: '0'
    },
    paddingLeft: {
      default: '0',
      sm: '4'
    },
    flexShrink: 0,
    gap: "4",
    alignItems: "center",
    alignSelf: {
      default: 'flexEnd',
      sm: 'center'
    }
  }, buttons), Boolean(dismissButton) && /*#__PURE__*/react.createElement(Container/* default */.A, {
    alignSelf: {
      default: 'flexStart',
      sm: 'center'
    },
    paddingLeft: "4",
    marginLeft: "auto"
  }, dismissButton))));
};
SystemBanner.displayName = 'SystemBanner';
/* harmony default export */ const components_SystemBanner = (SystemBanner);
try {
    // @ts-ignore
    SystemBanner.displayName = "SystemBanner";
    // @ts-ignore
    SystemBanner.__docgenInfo = { "description": "", "displayName": "SystemBanner", "props": { "variant": { "defaultValue": null, "description": "", "name": "variant", "required": true, "type": { "name": "enum", "value": [{ "value": "\"neutral\"" }, { "value": "\"info\"" }, { "value": "\"success\"" }, { "value": "\"error\"" }, { "value": "\"special\"" }, { "value": "\"warning\"" }] } }, "showIcon": { "defaultValue": { value: "true" }, "description": "", "name": "showIcon", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "children": { "defaultValue": null, "description": "Any node(s) to render.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }, { "value": "ReactNode[]" }] } }, "dataTrackTag": { "defaultValue": { value: "system_banner" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../feedback/src/components/SystemBanner/index.tsx#SystemBanner"] = { docgenInfo: SystemBanner.__docgenInfo, name: "SystemBanner", path: "../feedback/src/components/SystemBanner/index.tsx#SystemBanner" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../feedback/src/components/SystemBanner/stories/index.stories.tsx
function index_stories_extends() {
  return index_stories_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, index_stories_extends.apply(null, arguments);
}











esm/* faker */.az.seed(1);
const title = esm/* faker */.az.lorem.sentence(7);
const index_stories_text = esm/* faker */.az.lorem.sentence(15);
const buttonText = 'Primary';
const buttonSecondaryText = 'Secondary';
const Primary = {
  tags: ['sidebar-ignore']
};
const TitleOnly = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react.createElement(Center/* default */.A, {
    gap: "3"
  }, Object.values(constants/* VARIANT */.Gt).map(variant => /*#__PURE__*/react.createElement(components_SystemBanner, index_stories_extends({}, args, {
    variant: variant,
    key: variant
  }), /*#__PURE__*/react.createElement(SystemBannerTitle/* default */.A, null, index_stories_text))))
};
const TitleAndPrimaryAction = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react.createElement(Center/* default */.A, {
    gap: "3"
  }, Object.values(constants/* VARIANT */.Gt).map(variant => /*#__PURE__*/react.createElement(components_SystemBanner, index_stories_extends({}, args, {
    variant: variant,
    key: variant
  }), /*#__PURE__*/react.createElement(SystemBannerTitle/* default */.A, null, index_stories_text), /*#__PURE__*/react.createElement(SystemBannerButton/* default */.A, {
    href: "https://www.fiverr.com"
  }, buttonText))))
};
const TextAndTitleAndAction = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react.createElement(Center/* default */.A, {
    gap: "3"
  }, Object.values(constants/* VARIANT */.Gt).map(variant => /*#__PURE__*/react.createElement(components_SystemBanner, index_stories_extends({}, args, {
    variant: variant,
    key: variant
  }), /*#__PURE__*/react.createElement(SystemBannerTitle/* default */.A, null, title), /*#__PURE__*/react.createElement(SystemBannerText/* default */.A, null, index_stories_text), /*#__PURE__*/react.createElement(SystemBannerButton/* default */.A, {
    href: "https://www.fiverr.com"
  }, buttonText))))
};
const TextAndTitleAndTwoActions = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react.createElement(Center/* default */.A, {
    gap: "3"
  }, Object.values(constants/* VARIANT */.Gt).map(variant => /*#__PURE__*/react.createElement(components_SystemBanner, index_stories_extends({}, args, {
    variant: variant,
    key: variant
  }), /*#__PURE__*/react.createElement(SystemBannerTitle/* default */.A, null, title), /*#__PURE__*/react.createElement(SystemBannerText/* default */.A, null, index_stories_text), /*#__PURE__*/react.createElement(SystemBannerButton/* default */.A, {
    intent: "secondary",
    href: "https://www.fiverr.com"
  }, buttonSecondaryText), /*#__PURE__*/react.createElement(SystemBannerButton/* default */.A, {
    href: "https://www.fiverr.com"
  }, buttonText))))
};
const TitleAndDismiss = {
  tags: ['sidebar-ignore'],
  render: args => /*#__PURE__*/react.createElement(Center/* default */.A, {
    gap: "3"
  }, Object.values(constants/* VARIANT */.Gt).map(variant => /*#__PURE__*/react.createElement(components_SystemBanner, index_stories_extends({}, args, {
    variant: variant,
    key: variant
  }), /*#__PURE__*/react.createElement(SystemBannerTitle/* default */.A, null, index_stories_text), /*#__PURE__*/react.createElement(SystemBannerDismissButton/* default */.A, null))))
};
const CustomIcon = {
  tags: ['sidebar-ignore'],
  args: {
    variant: 'special'
  },
  render: args => /*#__PURE__*/react.createElement(components_SystemBanner, args, /*#__PURE__*/react.createElement(SystemBannerIcon/* default */.A, null, /*#__PURE__*/react.createElement(Heart/* default */.A, null)), /*#__PURE__*/react.createElement(SystemBannerTitle/* default */.A, null, index_stories_text), /*#__PURE__*/react.createElement(SystemBannerDismissButton/* default */.A, null))
};
const meta = {
  args: {
    variant: 'neutral'
  },
  title: 'Feedback/SystemBanner',
  component: components_SystemBanner,
  render: args => /*#__PURE__*/react.createElement(components_SystemBanner, args, /*#__PURE__*/react.createElement(SystemBannerTitle/* default */.A, null, title))
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
TitleOnly.parameters = {
  ...TitleOnly.parameters,
  docs: {
    ...TitleOnly.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <Center gap=\"3\">\n      {Object.values(VARIANT).map(variant => <SystemBanner {...args} variant={variant} key={variant}>\n          <SystemBannerTitle>{text}</SystemBannerTitle>\n        </SystemBanner>)}\n    </Center>\n}",
      ...TitleOnly.parameters?.docs?.source
    }
  }
};
TitleAndPrimaryAction.parameters = {
  ...TitleAndPrimaryAction.parameters,
  docs: {
    ...TitleAndPrimaryAction.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <Center gap=\"3\">\n      {Object.values(VARIANT).map(variant => <SystemBanner {...args} variant={variant} key={variant}>\n          <SystemBannerTitle>{text}</SystemBannerTitle>\n          <SystemBannerButton href=\"https://www.fiverr.com\">{buttonText}</SystemBannerButton>\n        </SystemBanner>)}\n    </Center>\n}",
      ...TitleAndPrimaryAction.parameters?.docs?.source
    }
  }
};
TextAndTitleAndAction.parameters = {
  ...TextAndTitleAndAction.parameters,
  docs: {
    ...TextAndTitleAndAction.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <Center gap=\"3\">\n      {Object.values(VARIANT).map(variant => <SystemBanner {...args} variant={variant} key={variant}>\n          <SystemBannerTitle>{title}</SystemBannerTitle>\n          <SystemBannerText>{text}</SystemBannerText>\n          <SystemBannerButton href=\"https://www.fiverr.com\">{buttonText}</SystemBannerButton>\n        </SystemBanner>)}\n    </Center>\n}",
      ...TextAndTitleAndAction.parameters?.docs?.source
    }
  }
};
TextAndTitleAndTwoActions.parameters = {
  ...TextAndTitleAndTwoActions.parameters,
  docs: {
    ...TextAndTitleAndTwoActions.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <Center gap=\"3\">\n      {Object.values(VARIANT).map(variant => <SystemBanner {...args} variant={variant} key={variant}>\n          <SystemBannerTitle>{title}</SystemBannerTitle>\n          <SystemBannerText>{text}</SystemBannerText>\n          <SystemBannerButton intent=\"secondary\" href=\"https://www.fiverr.com\">\n            {buttonSecondaryText}\n          </SystemBannerButton>\n          <SystemBannerButton href=\"https://www.fiverr.com\">{buttonText}</SystemBannerButton>\n        </SystemBanner>)}\n    </Center>\n}",
      ...TextAndTitleAndTwoActions.parameters?.docs?.source
    }
  }
};
TitleAndDismiss.parameters = {
  ...TitleAndDismiss.parameters,
  docs: {
    ...TitleAndDismiss.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: args => <Center gap=\"3\">\n      {Object.values(VARIANT).map(variant => <SystemBanner {...args} variant={variant} key={variant}>\n          <SystemBannerTitle>{text}</SystemBannerTitle>\n          <SystemBannerDismissButton />\n        </SystemBanner>)}\n    </Center>\n}",
      ...TitleAndDismiss.parameters?.docs?.source
    }
  }
};
CustomIcon.parameters = {
  ...CustomIcon.parameters,
  docs: {
    ...CustomIcon.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    variant: 'special'\n  },\n  render: args => <SystemBanner {...args}>\n      <SystemBannerIcon>\n        <HeartIcon />\n      </SystemBannerIcon>\n      <SystemBannerTitle>{text}</SystemBannerTitle>\n      <SystemBannerDismissButton />\n    </SystemBanner>\n}",
      ...CustomIcon.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","TitleOnly","TitleAndPrimaryAction","TextAndTitleAndAction","TextAndTitleAndTwoActions","TitleAndDismiss","CustomIcon"];

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

/***/ "../typography/dist/esm/src/components/Text/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
const _excluded = ["as", "color", "fontWeight", "size", "fontFamily", "children", "textOverflow", "dataTrackTag"];
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


const Text = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      as = 'p',
      color = 'bodyPrimary',
      fontWeight = 'normal',
      size = {
        default: 'b_md'
      },
      fontFamily,
      children,
      textOverflow,
      dataTrackTag = 'text'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    ref: ref,
    as: as,
    size: size,
    fontFamily: fontFamily,
    fontWeight: fontWeight,
    textOverflow: textOverflow,
    color: color,
    dataTrackTag: dataTrackTag
  }, restProps), children);
});
Text.displayName = 'Text';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);
;
Text.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Text"
};

/***/ }),

/***/ "../typography/dist/esm/src/components/Typography/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
const _excluded = ["as", "children", "fontFamily", "textAlign", "fontWeight", "decoration", "color", "lineHeight", "fontSize", "size", "dataTrackTag"];
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


const Typography = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      as = 'p',
      children,
      fontFamily = 'primary',
      textAlign,
      fontWeight,
      decoration,
      color,
      lineHeight,
      fontSize,
      size,
      dataTrackTag = 'typography'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    ref: ref,
    color: color,
    textAlign: textAlign,
    fontSize: fontSize || size,
    lineHeight: lineHeight || size,
    fontWeight: fontWeight,
    decoration: decoration,
    fontFamily: fontFamily,
    as: as,
    dataTrackTag: dataTrackTag
  }, restProps), children);
});
Typography.displayName = 'Typography';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typography);
;
Typography.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Typography"
};

/***/ }),

/***/ "../ui_utils/dist/esm/src/utils/filterChildrenByType/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ filterChildrenByType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../ui_utils/dist/esm/src/utils/utils/index.js");


const filterChildrenByType = (children, id) => react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(child => (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .childrenIdMatch */ .i)(child, id));

/***/ }),

/***/ "../ui_utils/dist/esm/src/utils/findChildByType/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ findChildByType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../ui_utils/dist/esm/src/utils/utils/index.js");


const findChildByType = (children, id) => react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).find(child => (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .childrenIdMatch */ .i)(child, id));

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

/***/ }),

/***/ "../visuals/dist/esm/src/components/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AL: () => (/* binding */ FLAG_ICON_SIZES),
/* harmony export */   FO: () => (/* binding */ ILLUSTRATIONS_SIZES),
/* harmony export */   IJ: () => (/* binding */ L2_ICON_SIZES),
/* harmony export */   XI: () => (/* binding */ BRAND_ICON_SIZES),
/* harmony export */   bh: () => (/* binding */ SYSTEM_ICON_SIZES),
/* harmony export */   vy: () => (/* binding */ L1_ICON_SIZES),
/* harmony export */   xx: () => (/* binding */ FIVERR_LOGOS_SIZES)
/* harmony export */ });
const SYSTEM_ICON_SIZES = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24
};
const BRAND_ICON_SIZES = SYSTEM_ICON_SIZES;
const L1_ICON_SIZES = {
  sm: 24,
  md: 32
};
const L2_ICON_SIZES = {
  sm: 48,
  md: 56,
  lg: 64,
  xl: 72,
  '2xl': 80
};
const FLAG_ICON_SIZES = {
  sm: 16,
  md: 20,
  lg: 24
};
const FIVERR_LOGOS_SIZES = {
  sm: {
    width: 90,
    height: 28
  },
  md: {
    width: 120,
    height: 36
  }
};
const ILLUSTRATIONS_SIZES = {
  sm: {
    width: 125,
    height: 100
  },
  md: {
    width: 280,
    height: 224
  },
  lg: {
    width: 340,
    height: 272
  }
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

/***/ "../visuals/dist/esm/src/components/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ getStrokeColor)
/* harmony export */ });
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");

const getStrokeColor = color => {
  if (color === 'inherit') {
    return 'currentColor';
  }
  return _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_0__/* .colors */ .Tj[color];
};

/***/ }),

/***/ "../visuals/dist/esm/src/utils/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ pascalToSnake)
/* harmony export */ });
const pascalToSnake = str => str.replace(/[A-Z]/g, (letter, index) => index === 0 ? letter.toLowerCase() : "_".concat(letter.toLowerCase()));

/***/ })

}]);
//# sourceMappingURL=238.feb7e1c9.iframe.bundle.js.map