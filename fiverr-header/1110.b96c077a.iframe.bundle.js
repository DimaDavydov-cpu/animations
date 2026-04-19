"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[1110],{

/***/ "../hooks/dist/esm/src/hooks/useClickOutside/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export events */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _useLatest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../hooks/dist/esm/src/hooks/useLatest/index.js");


const events = ['mousedown', 'touchstart'];
const useOnClickOutside = (ref, handler) => {
  const handlerRef = (0,_useLatest__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(handler);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!handler || typeof document === 'undefined') {
      return;
    }
    const listener = event => {
      if (!ref.current || !handlerRef.current || ref.current.contains(event.target)) {
        return;
      }
      handlerRef.current(event);
    };
    events.forEach(event => {
      document.addEventListener(event, listener);
    });
    return () => {
      events.forEach(event => {
        document.removeEventListener(event, listener);
      });
    };
  }, [handler, handlerRef, ref]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useOnClickOutside);

/***/ }),

/***/ "../inputs/dist/esm/src/components/Checkbox/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Checkbox)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Check.js
var Check = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Check.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Input/index.js
var Input = __webpack_require__("../inputs/dist/esm/src/components/Input/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/shared/utils.js
var utils = __webpack_require__("../inputs/dist/esm/src/components/shared/utils.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/shared/formsTokenColors.js
var formsTokenColors = __webpack_require__("../inputs/dist/esm/src/components/shared/formsTokenColors.js");
;// ../inputs/dist/esm/src/components/inputs/dist/esm/src/components/Checkbox/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../inputs/dist/esm/src/components/Checkbox/styles.ve.css.js.vanilla.css","source":"LnJndWdlMDpob3ZlciAucmd1Z2UyIHsKICBib3JkZXItY29sb3I6IGluaGVyaXQ7Cn0KLnJndWdlMTpjaGVja2VkICsgLnJndWdlMiB7CiAgYm9yZGVyLWNvbG9yOiAjMjIyMzI1OwogIGJhY2tncm91bmQtY29sb3I6ICMyMjIzMjU7CiAgYm9yZGVyLXdpZHRoOiAwOwp9Ci5yZ3VnZTFbZGF0YS1pbmRldGVybWluYXRlPSJ0cnVlIl0gKyAucmd1Z2UyIHsKICBib3JkZXItY29sb3I6ICMyMjIzMjU7CiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjMyNTsKICBib3JkZXItd2lkdGg6IDA7Cn0KLnJndWdlMTpkaXNhYmxlZCArIC5yZ3VnZTIgewogIGJvcmRlci1jb2xvcjogI0RBREJERDsKICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNUU3OwogIHBvaW50ZXItZXZlbnRzOiBwYWludGVkOwogIGJvcmRlci13aWR0aDogMDsKfQoucmd1Z2UxOmhvdmVyOm5vdCg6Y2hlY2tlZCk6bm90KDpkaXNhYmxlZCkgKyAucmd1Z2UyIHsKICBib3JkZXItd2lkdGg6IDJweDsKfQoucmd1Z2UxOmZvY3VzLXZpc2libGUgKyAucmd1Z2UzIHsKICBvdXRsaW5lOiAycHggc29saWQgIzIyMjMyNTsKICBvdXRsaW5lLW9mZnNldDogMXB4Owp9Ci5yZ3VnZTIgPiBzdmcgewogIGZsZXgtc2hyaW5rOiAwOwogIG9wYWNpdHk6IDA7Cn0KLnJndWdlMTpjaGVja2VkICsgLnJndWdlMiA+IHN2ZyB7CiAgb3BhY2l0eTogMTsKfQ=="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../inputs/dist/esm/src/components/Checkbox/styles.ve.css.js

var checkmarkBox = 'rguge2';
var container = 'rguge0';
var input = 'rguge1';
var outline = 'rguge3';
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Checkbox/style.js
var style = __webpack_require__("../inputs/dist/esm/src/components/Checkbox/style.js");
;// ../inputs/dist/esm/src/components/Checkbox/index.js
const _excluded = ["children", "disabled", "disableCheckmarkMargin", "isError", "isSuccess", "className", "disableOutline", "direction", "htmlHidden", "indeterminate", "dataTrackTag", "dataTrackValue"];
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











const Checkbox = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      children,
      disabled = false,
      disableCheckmarkMargin = false,
      isError = false,
      isSuccess = false,
      className,
      disableOutline,
      direction = 'row',
      htmlHidden,
      indeterminate,
      dataTrackTag = 'checkbox',
      dataTrackValue = '<checked>'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const {
    stylingProps,
    restProps
  } = (0,utils/* filterProps */.J)(rest);
  const {
    color,
    borderColor
  } = (0,style/* getValidationColor */.b)({
    disabled,
    isError,
    isSuccess
  });
  const inputProps = _objectSpread({
    type: 'checkbox',
    disabled,
    ref,
    dataTrackTag,
    dataTrackValue
  }, restProps);
  return /*#__PURE__*/react.createElement(Box/* default */.A, _objectSpread({
    as: "label",
    display: "inlineFlex",
    direction: direction,
    alignItems: "center",
    color: color,
    width: "100%",
    boxSizing: "borderBox",
    className: classnames_default()(container, className),
    cursor: disabled ? undefined : 'pointer'
  }, stylingProps), /*#__PURE__*/react.createElement(Input/* default */.A, _objectSpread({
    role: "checkbox",
    width: 0,
    height: 0,
    opacity: "0",
    className: input,
    "data-indeterminate": indeterminate
  }, inputProps)), /*#__PURE__*/react.createElement(Container/* default */.A, {
    as: "span",
    display: "inlineFlex",
    alignItems: "center",
    position: "relative",
    alignSelf: "flexStart",
    borderWidth: "sm",
    borderRadius: "sm",
    userSelect: "none",
    justifyContent: "center",
    width: "20px",
    height: "20px",
    flexShrink: "0",
    borderColor: borderColor,
    backgroundColor: "background",
    marginRight: disableCheckmarkMargin ? '0' : '2',
    marginTop: disableCheckmarkMargin ? '0' : 'px',
    className: classnames_default()(checkmarkBox, {
      [outline]: !disableOutline
    }),
    hidden: (0,lodash.isNil)(htmlHidden) ? undefined : Boolean(htmlHidden)
  }, indeterminate ? /*#__PURE__*/react.createElement(Container/* default */.A, {
    width: "10px",
    backgroundColor: disabled ? formsTokenColors/* formsTokenColors */.V.disabledColor : 'white',
    height: "2px",
    borderRadius: "circle"
  }) : /*#__PURE__*/react.createElement(Check/* default */.A, {
    color: disabled ? formsTokenColors/* formsTokenColors */.V.disabledColor : 'white',
    size: "sm"
  })), children);
});
Checkbox.displayName = 'Checkbox';
/* harmony default export */ const components_Checkbox = (Checkbox);
;
Checkbox.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Checkbox"
};

/***/ }),

/***/ "../inputs/dist/esm/src/components/Checkbox/style.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ getValidationColor)
/* harmony export */ });
/* harmony import */ var _shared_formsTokenColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../inputs/dist/esm/src/components/shared/formsTokenColors.js");

const getValidationColor = _ref => {
  let {
    disabled,
    isError,
    isSuccess
  } = _ref;
  if (disabled) {
    return {
      color: _shared_formsTokenColors__WEBPACK_IMPORTED_MODULE_0__/* .formsTokenColors */ .V.disabledColor,
      borderColor: _shared_formsTokenColors__WEBPACK_IMPORTED_MODULE_0__/* .formsTokenColors */ .V.borderColor
    };
  } else if (isError) {
    return {
      color: 'validationError',
      borderColor: 'validationError'
    };
  } else if (isSuccess) {
    return {
      color: 'validationSuccess',
      borderColor: 'validationSuccess'
    };
  } else {
    return {
      color: 'grey_1200',
      borderColor: 'grey_1200'
    };
  }
};

/***/ }),

/***/ "../inputs/dist/esm/src/components/Input/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OL: () => (/* binding */ INPUT_SIZES),
/* harmony export */   R0: () => (/* binding */ INPUT_ID),
/* harmony export */   SS: () => (/* binding */ GROUP_ID),
/* harmony export */   Uj: () => (/* binding */ SUFFIX_ID),
/* harmony export */   fS: () => (/* binding */ PREFIX_ID)
/* harmony export */ });
/* unused harmony export DEFAULT_INPUT_ROLE */
const INPUT_ID = 'Input';
const GROUP_ID = 'InputGroup';
const PREFIX_ID = 'InputPrefix';
const SUFFIX_ID = 'InputSuffix';
const DEFAULT_INPUT_ROLE = 'textbox';
const INPUT_SIZES = {
  default: 'default',
  lg: 'lg'
};

/***/ }),

/***/ "../inputs/dist/esm/src/components/Input/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../theme/dist/esm/src/atoms/utilityClasses.ve.css.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../inputs/dist/esm/src/components/Input/constants.js");
/* harmony import */ var _styles_ve_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../inputs/dist/esm/src/components/Input/styles.ve.css.js");
const _excluded = ["className", "type", "disabled", "isSuccess", "isError", "hideNumberSpinButton", "width", "inputSize", "resetInputStyle", "dataTrackTag", "dataTrackValue"];
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





const Input = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      className,
      type = 'text',
      disabled = false,
      isSuccess = false,
      isError = false,
      hideNumberSpinButton = false,
      width = '100%',
      inputSize = _constants__WEBPACK_IMPORTED_MODULE_4__/* .INPUT_SIZES */ .OL.default,
      resetInputStyle = false,
      dataTrackTag = 'input',
      dataTrackValue = '<value>'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const inputClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [_styles_ve_css__WEBPACK_IMPORTED_MODULE_5__/* .hideNumberSpinButtonClass */ .m8]: type === 'number' && hideNumberSpinButton,
    [_styles_ve_css__WEBPACK_IMPORTED_MODULE_5__/* .successClass */ .We]: isSuccess,
    [_styles_ve_css__WEBPACK_IMPORTED_MODULE_5__/* .errorClass */ .PC]: isError,
    [_styles_ve_css__WEBPACK_IMPORTED_MODULE_5__/* .resetInputStyleClass */ .fE]: resetInputStyle,
    [_styles_ve_css__WEBPACK_IMPORTED_MODULE_5__/* .inputSizeLg */ .pL]: inputSize === _constants__WEBPACK_IMPORTED_MODULE_4__/* .INPUT_SIZES */ .OL.lg,
    [_styles_ve_css__WEBPACK_IMPORTED_MODULE_5__/* .inputSizeDefault */ .Zt]: inputSize === _constants__WEBPACK_IMPORTED_MODULE_4__/* .INPUT_SIZES */ .OL.default
  }, _styles_ve_css__WEBPACK_IMPORTED_MODULE_5__/* .input */ .hF, _styles_ve_css__WEBPACK_IMPORTED_MODULE_5__/* .inputSearchSelector */ .KJ, _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_3__/* .placeholder */ .q, className);
  const inputProps = _objectSpread({
    disabled,
    type,
    ref,
    dataTrackTag,
    dataTrackValue
  }, rest);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, _objectSpread({
    as: "input",
    display: "inlineBlock",
    position: "relative",
    width: width,
    boxSizing: "borderBox",
    className: inputClassName
  }, inputProps));
});
Input.displayName = _constants__WEBPACK_IMPORTED_MODULE_4__/* .INPUT_ID */ .R0;
Object.assign(Input, {
  id: _constants__WEBPACK_IMPORTED_MODULE_4__/* .INPUT_ID */ .R0
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);
;
Input.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Input"
};

/***/ }),

/***/ "../inputs/dist/esm/src/components/Input/styles.ve.css.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  PC: () => (/* binding */ errorClass),
  m8: () => (/* binding */ hideNumberSpinButtonClass),
  hF: () => (/* binding */ input),
  KJ: () => (/* binding */ inputSearchSelector),
  Zt: () => (/* binding */ inputSizeDefault),
  pL: () => (/* binding */ inputSizeLg),
  fE: () => (/* binding */ resetInputStyleClass),
  We: () => (/* binding */ successClass)
});

;// ../inputs/dist/esm/src/components/inputs/dist/esm/src/components/Input/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../inputs/dist/esm/src/components/Input/styles.ve.css.js.vanilla.css","source":"#H4sIAAAAAAAAE6WUTW6DMBCF9znFVFkTBeevuKtEtNeoDHbCNMS2jEmoqty9AjUkgC1aVWwsj7/3/GaQZ+8h+YiYPYWz22oOXxMAzThHeaAQEl1BuNbVywQgRymCTOAhsxRIs3mdtCTxaTzXEsQlsexJLBowUVVQZIyrCwWppOge6bkMDwPslbQUUGbCoK03rGGyQItK3g8lynBhAsM4lkVzyfsuhVBXUKgcOUzjbbyL47qYqlwZClNCyIKsfNeimToL83O5xuOX3F6lZdFwfcAd06MOoEpb97mTYsSbpRbP4v/mHnmOBUtywTsG0SraRE1jE5YeD0aVkreCb6v6czjdxvHgtBz8E4MhzuebBXn1Uf6RjXD3kXk49zAcqqvxDNsdiUnso/wZRjhvhhvnzuBQXfcyMK0FM0ymgoIVld2jyHmXoDS4iOSINkAphQkKjTJISmuVbCQ4Fjpnn46H4AFVpf0Tuul0uC7DE560MpZJ63gb5r1y+7J1C48Og646fdq+DmrXb4F9QwmbBQAA"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../inputs/dist/esm/src/components/Input/styles.ve.css.js

var errorClass = '_12j9atm5';
var hideNumberSpinButtonClass = '_12j9atm6';
var input = '_12j9atm3';
var inputSearchSelector = '_12j9atm0';
var inputSizeDefault = '_12j9atm2';
var inputSizeLg = '_12j9atm1';
var resetInputStyleClass = '_12j9atm7';
var successClass = '_12j9atm4';

/***/ }),

/***/ "../inputs/dist/esm/src/components/shared/formsTokenColors.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ formsTokenColors)
/* harmony export */ });
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
const tokens = {
  color: 'grey_1200',
  disabledColor: 'grey_800',
  disabledFieldBackgroundColor: 'grey_200',
  disabledToggleBackgroundColor: 'grey_400',
  borderColor: 'grey_500',
  interactiveColor: 'grey_1200'
};
const formsTokenColors = _objectSpread({}, tokens);

/***/ }),

/***/ "../inputs/dist/esm/src/components/shared/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ filterProps)
/* harmony export */ });
const _excluded = ["position", "margin", "marginX", "marginY", "marginBottom", "marginLeft", "marginRight", "marginTop", "width", "height", "maxWidth", "maxHeight", "top", "right", "bottom", "left", "order", "overflow", "overflowX", "overflowY", "minHeight", "minWidth", "visibility", "hidden", "flex", "flexGrow", "flexShrink", "flexBasis", "alignSelf", "justifySelf"];
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
const filterProps = props => {
  const {
      position,
      margin,
      marginX,
      marginY,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      width,
      height,
      maxWidth,
      maxHeight,
      top,
      right,
      bottom,
      left,
      order,
      overflow,
      overflowX,
      overflowY,
      minHeight,
      minWidth,
      visibility,
      hidden,
      flex,
      flexGrow,
      flexShrink,
      flexBasis,
      alignSelf,
      justifySelf
    } = props,
    restProps = _objectWithoutProperties(props, _excluded);
  return {
    restProps,
    stylingProps: {
      position,
      margin,
      marginX,
      marginY,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      width,
      height,
      maxWidth,
      maxHeight,
      top,
      right,
      bottom,
      left,
      order,
      overflow,
      overflowX,
      overflowY,
      minHeight,
      minWidth,
      visibility,
      hidden,
      flex,
      flexGrow,
      flexShrink,
      flexBasis,
      alignSelf,
      justifySelf
    }
  };
};

/***/ }),

/***/ "../popover/dist/esm/src/components/Popover/PopoverAnchor/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
/* harmony import */ var _PopoverContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContext/index.js");
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




const PopoverAnchor = _ref => {
  let {
    children,
    as = 'div',
    disabled,
    dataTestId,
    ariaHasPopup,
    fullWidth,
    onFocus,
    onBlur,
    flex,
    display,
    embed,
    onClick,
    dataTrackTag = 'popover_anchor',
    dataTrackValue
  } = _ref;
  const {
    open,
    setOpen,
    triggerEvent,
    floatingData: {
      refs
    }
  } = (0,_PopoverContext__WEBPACK_IMPORTED_MODULE_3__/* .usePopoverContext */ .C)();
  const triggerEventListeners = {
    click: {
      onClick: e => {
        setOpen(!open);
        onClick === null || onClick === void 0 || onClick(e);
      }
    },
    hover: {
      onMouseEnter: () => {
        setOpen(true);
      },
      onMouseLeave: () => {
        setOpen(false);
      }
    }
  };
  const getEventListeners = () => {
    if (disabled) {
      return {};
    }
    return _objectSpread({
      onFocus,
      onBlur
    }, triggerEventListeners[triggerEvent]);
  };
  const accessibleAttributes = triggerEvent === 'click' ? _objectSpread({
    'aria-expanded': open,
    'aria-haspopup': ariaHasPopup || 'true'
  }, embed ? {} : {
    role: 'button',
    tabIndex: -1
  }) : {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread(_objectSpread(_objectSpread({
    as: as,
    height: "fit-content",
    maxWidth: "100%",
    width: fullWidth ? '100%' : 'fit-content',
    flex: flex,
    display: display,
    ref: refs.setReference,
    "data-testid": dataTestId,
    cursor: disabled ? 'default' : undefined
  }, getEventListeners()), embed ? {} : accessibleAttributes), {}, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }), embed ? (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .renderChildren */ .s)(children, _objectSpread({}, accessibleAttributes)) : children);
};
PopoverAnchor.displayName = 'PopoverAnchor';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverAnchor);
;
PopoverAnchor.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PopoverAnchor"
};

/***/ }),

/***/ "../popover/dist/esm/src/components/Popover/PopoverContent/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_fiverr_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
/* harmony import */ var _fiverr_private_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../transition/dist/esm/src/components/Fade/index.js");
/* harmony import */ var _fiverr_private_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../transition/dist/esm/src/components/SlideFade/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../ui_utils/dist/esm/src/components/Portal/index.js");
/* harmony import */ var _fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../hooks/dist/esm/src/hooks/useClickOutside/index.js");
/* harmony import */ var _fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js");
/* harmony import */ var _fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../hooks/dist/esm/src/hooks/useKeyboardShortcuts/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _PopoverContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContext/index.js");
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







const BACKWARD_COMPATIBILITY_COLORS = {
  [_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_9__/* .colors */ .Tj.white]: 'white',
  [_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_9__/* .colors */ .Tj.grey_1100]: 'grey_1100',
  [_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_9__/* .colors */ .Tj.blue_700]: 'blue_700'
};
const PopoverContent = _ref => {
  let {
    children,
    appendToBody = false,
    closeOnClickOutside = true,
    initialFocusRef,
    disablePadding = false,
    renderWhenClosed = false,
    disableBoxShadow = false,
    backgroundColor = 'white',
    zIndex = 'popover',
    animationType = 'fade',
    dataTestId,
    onAnimationStart,
    onAnimationEnd,
    borderRadius = 'lg',
    disableAutoFocus,
    minWidth,
    disableExitAnimation,
    withDelay = false,
    fullWidth,
    dataTrackTag = 'popover',
    dataTrackValue
  } = _ref;
  const {
    open,
    setOpen,
    triggerEvent,
    floatingData: {
      strategy,
      y,
      x,
      refs,
      isPositioned
    }
  } = (0,_PopoverContext__WEBPACK_IMPORTED_MODULE_10__/* .usePopoverContext */ .C)();
  const {
    isMobile
  } = (0,_fiverr_private_fiverr_context__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();
  const actualBackgroundColor = Object.keys(BACKWARD_COMPATIBILITY_COLORS).includes(backgroundColor) ? BACKWARD_COMPATIBILITY_COLORS[backgroundColor] : backgroundColor;
  const clickOutsideHandler = e => {
    var _refs$reference$curre;
    const clickedOnAnchor = e.target === refs.reference.current;
    const clickedOnAnchorChild = (_refs$reference$curre = refs.reference.current) === null || _refs$reference$curre === void 0 ? void 0 : _refs$reference$curre.contains(e.target);
    if (clickedOnAnchor || clickedOnAnchorChild) {
      return;
    }
    setOpen(false);
  };
  (0,_fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(refs.floating, open && closeOnClickOutside ? clickOutsideHandler : undefined);
  (0,_fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)([{
    trigger: 'escape',
    handler: () => setOpen(false)
  }]);
  (0,_fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(() => {
    if (isPositioned && refs.floating.current && !disableAutoFocus) {
      refs.floating.current.focus();
      if (initialFocusRef !== null && initialFocusRef !== void 0 && initialFocusRef.current) {
        initialFocusRef.current.focus();
      }
    }
  }, [isPositioned, refs.floating, initialFocusRef, disableAutoFocus]);
  const contentProps = {
    tabIndex: open ? -1 : undefined,
    padding: disablePadding ? '0' : '5',
    width: 'max-content',
    boxSizing: 'borderBox',
    overflowWrap: 'breakWord',
    borderRadius,
    position: strategy,
    top: y || 0,
    left: x || 0,
    minWidth: minWidth ? minWidth : undefined,
    maxWidth: isMobile || fullWidth ? '100%' : 500,
    backgroundColor: actualBackgroundColor,
    zIndex,
    dropShadow: disableBoxShadow ? undefined : 'z2',
    role: triggerEvent === 'click' ? 'dialog' : 'tooltip',
    'aria-hidden': !open,
    onMouseEnter: triggerEvent === 'hover' ? () => {
      setOpen(true);
    } : undefined,
    onMouseLeave: triggerEvent === 'hover' ? () => {
      setOpen(false);
    } : undefined
  };
  const Animation = animationType === 'slideFade' ? _fiverr_private_transition__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A : _fiverr_private_transition__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;
  const duration = animationType === 'slideFade' ? 'moderate2' : undefined;
  const delay = triggerEvent === 'hover' ? {
    enter: withDelay ? 'slow3' : 'fast3',
    exit: 'fast3'
  } : undefined;
  const animationProps = {
    delay,
    duration,
    in: open,
    unmountOnExit: !renderWhenClosed,
    onAnimationStart,
    onAnimationEnd,
    reverse: animationType === 'slideFade' ? !disableExitAnimation : undefined
  };
  if (appendToBody) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Animation, animationProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, _objectSpread(_objectSpread({
      ref: refs.setFloating,
      "data-testid": dataTestId
    }, contentProps), {}, {
      dataTrackTag: dataTrackTag,
      dataTrackValue: dataTrackValue
    }), children)));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Animation, animationProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, _objectSpread(_objectSpread({
    ref: refs.setFloating,
    "data-testid": dataTestId
  }, contentProps), {}, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }), children));
};
PopoverContent.displayName = 'PopoverContent';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverContent);
;
PopoverContent.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PopoverContent"
};

/***/ }),

/***/ "../popover/dist/esm/src/components/Popover/PopoverContext/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ usePopoverContext),
/* harmony export */   n: () => (/* binding */ PopoverContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const PopoverContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const usePopoverContext = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PopoverContext);
  if (context === undefined) {
    throw new Error('usePopoverContext must be used within a PopoverContextProvider');
  }
  return context;
};

/***/ }),

/***/ "../popover/dist/esm/src/components/Popover/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@floating-ui+react-dom@1.3.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js");
/* harmony import */ var _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@floating-ui+dom@1.6.13/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");
/* harmony import */ var _fiverr_private_fiverr_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
/* harmony import */ var _PopoverContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContext/index.js");




const Popover = _ref => {
  let {
    children,
    isOpen,
    initialOpen = false,
    position = 'top',
    offset = 4,
    onOpenChanged = () => undefined,
    triggerEvent = 'click',
    disableFlip = false
  } = _ref;
  const [innerOpen, setInnerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialOpen);
  const arrowRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    isTouch
  } = (0,_fiverr_private_fiverr_context__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();
  const open = isOpen === undefined ? innerOpen : isOpen;
  const isAutoPosition = position === 'auto';
  const positionSide = position.split('-')[0];
  const isHorizontalPosition = positionSide === 'right' || positionSide === 'left';
  const arrowExists = arrowRef === null || arrowRef === void 0 ? void 0 : arrowRef.current;
  const arrowMiddleware = arrowExists ? (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_1__/* .arrow */ .UE)({
    element: arrowRef,
    padding: 8
  }) : undefined;
  const arrowOffset = arrowExists ? Math.sqrt(2 * arrowRef.current.offsetWidth ** 2) / 2 : 0;
  const flipMiddleware = disableFlip || isAutoPosition ? undefined : (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__/* .flip */ .UU)();
  const autoPlacementMiddleware = isAutoPosition ? (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__/* .autoPlacement */ .RK)() : undefined;
  const setOpen = value => {
    setInnerOpen(value);
    onOpenChanged(value);
  };
  const floatingData = (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_1__/* .useFloating */ .we)({
    placement: isAutoPosition ? undefined : position,
    open,
    whileElementsMounted: _floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__/* .autoUpdate */ .ll,
    middleware: [(0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__/* .offset */ .cY)(offset + arrowOffset), (0,_floating_ui_react_dom__WEBPACK_IMPORTED_MODULE_2__/* .shift */ .BN)({
      mainAxis: !isHorizontalPosition
    }), flipMiddleware, autoPlacementMiddleware, arrowMiddleware]
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PopoverContext__WEBPACK_IMPORTED_MODULE_4__/* .PopoverContext */ .n.Provider, {
    value: {
      floatingData,
      setOpen,
      open,
      arrowRef,
      triggerEvent: isTouch || triggerEvent === 'click' ? 'click' : 'hover'
    }
  }, children);
};
Popover.displayName = 'Popover';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popover);
;
Popover.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Popover"
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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Check.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const CheckIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('CheckIcon')
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
    d: "m1.25 9.306 3.92 3.92 9.58-10.452",
    vectorEffect: "non-scaling-stroke"
  }));
};
CheckIcon.id = 'CheckIcon';
CheckIcon.displayName = 'CheckIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckIcon);
;
CheckIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CheckIcon"
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
//# sourceMappingURL=1110.b96c077a.iframe.bundle.js.map