"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[3911],{

/***/ "../forms/src/components/Form/FormContext/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ FormContext),
/* harmony export */   x: () => (/* binding */ useFormContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const FormContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useFormContext = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FormContext);
  return context;
};

/***/ }),

/***/ "../forms/src/components/Form/FormControl/helpers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L2: () => (/* binding */ getFormElementProps),
/* harmony export */   b4: () => (/* binding */ shouldRenderFormFooter),
/* harmony export */   b6: () => (/* binding */ getValidationColor),
/* harmony export */   g4: () => (/* binding */ useReactHookForm),
/* harmony export */   i0: () => (/* binding */ getChildren),
/* harmony export */   z6: () => (/* binding */ getStylingProps)
/* harmony export */ });
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react-hook-form@7.61.1_react@17.0.2/node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../ui_utils/dist/esm/src/utils/getComponentProps/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../forms/src/components/Form/constants.ts");
/* eslint-disable react-hooks/rules-of-hooks */





const getValidationColor = _ref => {
  let {
    isError,
    isSuccess
  } = _ref;
  if (isError) {
    return 'validationError';
  } else if (isSuccess) {
    return 'validationSuccess';
  } else {
    return 'bodySecondary';
  }
};
const getStylingProps = _ref2 => {
  let {
    isError,
    isSuccess
  } = _ref2;
  const color = getValidationColor({
    isError,
    isSuccess
  });
  return {
    wrapper: {
      gap: '1.5',
      direction: 'column'
    },
    footer: {
      lineHeight: _constants__WEBPACK_IMPORTED_MODULE_4__/* .FORM_FOOTER_LINE_HEIGHT */ .kp,
      fontSize: 'b_sm',
      color,
      display: 'flex',
      justifyContent: 'spaceBetween',
      gap: '3'
    }
  };
};
const getFormElementProps = _ref3 => {
  let {
    children,
    name,
    deps
  } = _ref3;
  const {
    register,
    setValue,
    control
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__/* .useFormContext */ .xW)();
  const {
    onBlur,
    onChange,
    ref
  } = register(name, {
    deps
  });
  const {
    isSubmitted
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__/* .useFormState */ .lN)(name);
  return {
    ref,
    onChange: value => {
      var _children$props, _children$props$onCha;
      if (value !== null && value !== void 0 && value.target) {
        onChange === null || onChange === void 0 || onChange(value);
      } else {
        setValue(name, value, {
          shouldValidate: isSubmitted
        });
      }
      children === null || children === void 0 || (_children$props = children.props) === null || _children$props === void 0 || (_children$props$onCha = _children$props.onChange) === null || _children$props$onCha === void 0 || _children$props$onCha.call(_children$props, value);
    },
    onBlur: event => {
      var _children$props2, _children$props2$onBl;
      children === null || children === void 0 || (_children$props2 = children.props) === null || _children$props2 === void 0 || (_children$props2$onBl = _children$props2.onBlur) === null || _children$props2$onBl === void 0 || _children$props2$onBl.call(_children$props2, event);
      onBlur === null || onBlur === void 0 || onBlur(event);
    },
    control
  };
};
const getChildren = children => {
  const FormHeader = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .findChildByType */ .B)(children, _constants__WEBPACK_IMPORTED_MODULE_4__/* .FORM_HEADER_ID */ .dn);
  const FormElement = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .findChildByType */ .B)(children, _constants__WEBPACK_IMPORTED_MODULE_4__/* .FORM_ELEMENT_ID */ .Kw);
  const FormHelperText = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .findChildByType */ .B)(children, _constants__WEBPACK_IMPORTED_MODULE_4__/* .FORM_HELPER_TEXT_ID */ .qN);
  const FormCounter = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .findChildByType */ .B)(children, _constants__WEBPACK_IMPORTED_MODULE_4__/* .FORM_COUNTER_ID */ .ui);
  return {
    FormHeader,
    FormElement,
    FormHelperText,
    FormCounter
  };
};
const useReactHookForm = _ref4 => {
  let {
    name,
    maxLength,
    isSuccess,
    isError
  } = _ref4;
  try {
    const {
      errors: formErrors
    } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__/* .useFormState */ .lN)({
      name
    });
    const errors = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(formErrors, name);
    const value = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__/* .useWatch */ .FH)({
      name
    });
    const isFormError = Object.keys(errors || {}).length > 0 || isError;
    return {
      errors,
      name,
      value,
      isFormError,
      isSuccess,
      maxLength
    };
  } catch (e) {
    throw new Error("FormControl must be rendered within a Form. Make sure to provide the 'methods' prop to the Form component");
  }
};
const shouldRenderFormFooter = _ref5 => {
  let {
    FormHelperText,
    FormCounter,
    errors
  } = _ref5;
  return FormCounter || !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)((0,lodash__WEBPACK_IMPORTED_MODULE_1__.omitBy)((0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(FormHelperText), lodash__WEBPACK_IMPORTED_MODULE_1__.isNil)) || !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(errors);
};

/***/ }),

/***/ "../forms/src/components/Form/FormCounter/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Form_FormCounter)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
;// ../data_display/dist/esm/src/components/Counter/index.js


const Counter = _ref => {
  let {
    current,
    max,
    format = lodash.identity
  } = _ref;
  const formattedCurrent = format(current, {
    fallbackValue: current,
    noFractionDigits: true
  });
  const formattedMax = max && format(max, {
    fallbackValue: max,
    noFractionDigits: true
  });
  const content = max ? "".concat(formattedCurrent, "/").concat(formattedMax) : formattedCurrent;
  return /*#__PURE__*/react.createElement(react.Fragment, null, content);
};
Counter.displayName = 'Counter';
/* harmony default export */ const components_Counter = (Counter);
;
Counter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Counter"
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js
var I18n = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Typography/index.js
var Typography = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/shared/useInputTrackValue/index.js
var useInputTrackValue = __webpack_require__("../inputs/dist/esm/src/components/shared/useInputTrackValue/index.js");
// EXTERNAL MODULE: ../forms/src/components/Form/FormContext/index.tsx
var FormContext = __webpack_require__("../forms/src/components/Form/FormContext/index.tsx");
// EXTERNAL MODULE: ../forms/src/components/Form/constants.ts
var constants = __webpack_require__("../forms/src/components/Form/constants.ts");
;// ../forms/src/components/Form/FormCounter/index.tsx







const FormCounter = _ref => {
  var _ref2;
  let {
    maxLength,
    value = '',
    format,
    dataTrackTag = 'form_counter',
    dataTrackValue
  } = _ref;
  const {
    value: formValue,
    maxLength: formMaxLength
  } = (0,FormContext/* useFormContext */.x)();
  const stringValueLength = (_ref2 = formValue || value) === null || _ref2 === void 0 ? void 0 : _ref2.toString().length;
  const trackValue = (0,useInputTrackValue/* useInputTrackValue */.y)({
    dataTrackValue,
    value: stringValueLength
  });
  const currentMaxLength = formMaxLength || maxLength;
  const i18nProps = currentMaxLength ? {
    k: 'forms.formCounter.characters.other'
  } : {
    k: 'forms.formCounter.characters',
    params: {
      count: stringValueLength
    }
  };
  return /*#__PURE__*/react.createElement(Typography/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: trackValue,
    as: "span",
    marginLeft: "auto"
  }, /*#__PURE__*/react.createElement(components_Counter, {
    current: stringValueLength,
    max: currentMaxLength,
    format: format
  }), "\xA0", /*#__PURE__*/react.createElement(I18n/* I18n */.F, i18nProps));
};
FormCounter.id = constants/* FORM_COUNTER_ID */.ui;
FormCounter.displayName = constants/* FORM_COUNTER_ID */.ui;
/* harmony default export */ const Form_FormCounter = (FormCounter);
try {
    // @ts-ignore
    FormCounter.displayName = "FormCounter";
    // @ts-ignore
    FormCounter.__docgenInfo = { "description": "", "displayName": "FormCounter", "props": { "maxLength": { "defaultValue": null, "description": "Counter max length", "name": "maxLength", "required": false, "type": { "name": "number" } }, "value": { "defaultValue": { value: "" }, "description": "Form element value to count", "name": "value", "required": false, "type": { "name": "string" } }, "format": { "defaultValue": null, "description": "Formatter function to format the counter value", "name": "format", "required": false, "type": { "name": "NumberFormatType" } }, "dataTrackTag": { "defaultValue": { value: "form_counter" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Form/FormCounter/index.tsx#FormCounter"] = { docgenInfo: FormCounter.__docgenInfo, name: "FormCounter", path: "../forms/src/components/Form/FormCounter/index.tsx#FormCounter" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../forms/src/components/Form/FormElement/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../forms/src/components/Form/constants.ts");
/* harmony import */ var _FormContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../forms/src/components/Form/FormContext/index.tsx");
const _excluded = ["children", "dataTrackTag", "dataTrackValue"];
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






const FormElement = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, forwardedRef) => {
  let {
      children,
      dataTrackTag = 'form_element',
      dataTrackValue
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const {
    maxLength,
    isError,
    isSuccess,
    name,
    ref,
    onChange,
    onBlur
  } = (0,_FormContext__WEBPACK_IMPORTED_MODULE_5__/* .useFormContext */ .x)();
  const hasRef = typeof ref === 'function' || typeof forwardedRef === 'function' || forwardedRef && 'current' in forwardedRef;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    direction: "column",
    gap: "2"
  }, (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .renderChildren */ .s)(children, _objectSpread(_objectSpread({}, (0,lodash__WEBPACK_IMPORTED_MODULE_1__.omitBy)({
    maxLength,
    isError,
    isSuccess,
    name,
    ref: hasRef ? e => {
      ref === null || ref === void 0 || ref(e);
      if (typeof forwardedRef === 'function') {
        forwardedRef(e);
      } else if (forwardedRef && 'current' in forwardedRef) {
        forwardedRef.current = e;
      }
    } : undefined,
    onChange,
    onBlur
  }, lodash__WEBPACK_IMPORTED_MODULE_1__.isNil)), restProps)));
});
FormElement.displayName = _constants__WEBPACK_IMPORTED_MODULE_4__/* .FORM_ELEMENT_ID */ .Kw;
Object.assign(FormElement, {
  id: _constants__WEBPACK_IMPORTED_MODULE_4__/* .FORM_ELEMENT_ID */ .Kw
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormElement);
try {
    // @ts-ignore
    FormElement.displayName = "FormElement";
    // @ts-ignore
    FormElement.__docgenInfo = { "description": "", "displayName": "FormElement", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": false, "type": { "name": "string" } }, "dataTrackTag": { "defaultValue": { value: "form_element" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Form/FormElement/index.tsx#FormElement"] = { docgenInfo: FormElement.__docgenInfo, name: "FormElement", path: "../forms/src/components/Form/FormElement/index.tsx#FormElement" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../forms/src/components/Form/FormHeader/FormLabel/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../forms/src/components/Form/constants.ts");



const FormLabel = _ref => {
  let {
    children,
    htmlFor,
    dataTrackTag = 'form_label',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    as: "label",
    color: "grey_1200",
    lineHeight: "b_md",
    fontSize: "b_md",
    htmlFor: htmlFor
  }, children);
};
FormLabel.id = _constants__WEBPACK_IMPORTED_MODULE_2__/* .FORM_LABEL_ID */ ._1;
FormLabel.displayName = _constants__WEBPACK_IMPORTED_MODULE_2__/* .FORM_LABEL_ID */ ._1;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormLabel);
try {
    // @ts-ignore
    FormLabel.displayName = "FormLabel";
    // @ts-ignore
    FormLabel.__docgenInfo = { "description": "", "displayName": "FormLabel", "props": { "dataTrackTag": { "defaultValue": { value: "form_label" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Form/FormHeader/FormLabel/index.tsx#FormLabel"] = { docgenInfo: FormLabel.__docgenInfo, name: "FormLabel", path: "../forms/src/components/Form/FormHeader/FormLabel/index.tsx#FormLabel" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../forms/src/components/Form/FormHeader/FormSubtitle/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export FormSubtitle */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../forms/src/components/Form/constants.ts");



const FormSubtitle = _ref => {
  let {
    children,
    dataTrackTag = 'form_subtitle',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    size: "b_sm",
    color: "bodySecondary"
  }, children);
};
FormSubtitle.id = _constants__WEBPACK_IMPORTED_MODULE_2__/* .FORM_SUBTITLE_ID */ .aE;
FormSubtitle.displayName = _constants__WEBPACK_IMPORTED_MODULE_2__/* .FORM_SUBTITLE_ID */ .aE;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormSubtitle);
try {
    // @ts-ignore
    FormSubtitle.displayName = "FormSubtitle";
    // @ts-ignore
    FormSubtitle.__docgenInfo = { "description": "", "displayName": "FormSubtitle", "props": { "dataTrackTag": { "defaultValue": { value: "form_subtitle" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Form/FormHeader/FormSubtitle/index.tsx#FormSubtitle"] = { docgenInfo: FormSubtitle.__docgenInfo, name: "FormSubtitle", path: "../forms/src/components/Form/FormHeader/FormSubtitle/index.tsx#FormSubtitle" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../forms/src/components/Form/FormHeader/FormTooltip/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../tooltip/dist/esm/src/components/Tooltip/index.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/QuestionMark.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../forms/src/components/Form/constants.ts");





const FormTooltip = _ref => {
  let {
    content,
    dataTrackTag = 'form_tooltip',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_tooltip__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    content: content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    as: "span",
    display: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    color: "grey_900"
  })));
};
FormTooltip.id = _constants__WEBPACK_IMPORTED_MODULE_4__/* .FORM_TOOLTIP_ID */ .pA;
FormTooltip.displayName = _constants__WEBPACK_IMPORTED_MODULE_4__/* .FORM_TOOLTIP_ID */ .pA;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormTooltip);
try {
    // @ts-ignore
    FormTooltip.displayName = "FormTooltip";
    // @ts-ignore
    FormTooltip.__docgenInfo = { "description": "", "displayName": "FormTooltip", "props": { "content": { "defaultValue": null, "description": "", "name": "content", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "dataTrackTag": { "defaultValue": { value: "form_tooltip" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Form/FormHeader/FormTooltip/index.tsx#FormTooltip"] = { docgenInfo: FormTooltip.__docgenInfo, name: "FormTooltip", path: "../forms/src/components/Form/FormHeader/FormTooltip/index.tsx#FormTooltip" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../forms/src/components/Form/FormHeader/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../forms/src/components/Form/constants.ts");





const FormHeader = _ref => {
  let {
    children,
    dataTrackTag = 'form_header',
    dataTrackValue
  } = _ref;
  const FormLabel = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .findChildByType */ .B)(children, _constants__WEBPACK_IMPORTED_MODULE_4__/* .FORM_LABEL_ID */ ._1);
  const FormOptionalLabel = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .findChildByType */ .B)(children, _constants__WEBPACK_IMPORTED_MODULE_4__/* .FORM_OPTIONAL_LABEL_ID */ .Vn);
  const FormTooltip = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .findChildByType */ .B)(children, _constants__WEBPACK_IMPORTED_MODULE_4__/* .FORM_TOOLTIP_ID */ .pA);
  const FormSubtitle = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .findChildByType */ .B)(children, _constants__WEBPACK_IMPORTED_MODULE_4__/* .FORM_SUBTITLE_ID */ .aE);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    as: "div",
    display: "flex",
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    gap: "2",
    alignItems: "center"
  }, FormLabel, FormOptionalLabel, FormTooltip), FormSubtitle);
};
FormHeader.id = _constants__WEBPACK_IMPORTED_MODULE_4__/* .FORM_HEADER_ID */ .dn;
FormHeader.displayName = _constants__WEBPACK_IMPORTED_MODULE_4__/* .FORM_HEADER_ID */ .dn;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormHeader);
try {
    // @ts-ignore
    FormHeader.displayName = "FormHeader";
    // @ts-ignore
    FormHeader.__docgenInfo = { "description": "", "displayName": "FormHeader", "props": { "dataTrackTag": { "defaultValue": { value: "form_header" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Form/FormHeader/index.tsx#FormHeader"] = { docgenInfo: FormHeader.__docgenInfo, name: "FormHeader", path: "../forms/src/components/Form/FormHeader/index.tsx#FormHeader" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../forms/src/components/Form/FormHelperText/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Form_FormHelperText)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Typography/index.js
var Typography = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
// EXTERNAL MODULE: ../forms/src/components/Form/FormContext/index.tsx
var FormContext = __webpack_require__("../forms/src/components/Form/FormContext/index.tsx");
// EXTERNAL MODULE: ../forms/src/components/Form/constants.ts
var constants = __webpack_require__("../forms/src/components/Form/constants.ts");
// EXTERNAL MODULE: ../forms/src/components/Form/FormControl/helpers.ts
var helpers = __webpack_require__("../forms/src/components/Form/FormControl/helpers.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
;// ../forms/src/components/Form/FormHelperText/helpers.tsx





const getErrorMessage = error => {
  if ((0,lodash.isObject)(error) && 'message' in error && (typeof error.message === 'string' || /*#__PURE__*/react.isValidElement(error.message))) {
    return error.message;
  }
};
const getError = error => {
  const errorMessage = getErrorMessage(error);
  if (errorMessage) {
    return errorMessage;
  }
  if ((0,lodash.isObject)(error) && 'item' in error) {
    return getErrorMessage(error.item);
  }
  if (/*#__PURE__*/ /*#__PURE__*/react.isValidElement(error) || typeof error === 'string') {
    return error;
  }
};
const getMessage = _ref => {
  let {
    isError,
    error,
    isSuccess,
    success,
    hint
  } = _ref;
  if (isError) {
    return getError(error);
  }
  if (isSuccess) {
    return success;
  }
  return hint;
};
const getEmptyLines = emptyLines => {
  if (!emptyLines) {
    return null;
  }
  const lineHeightPx = Number.parseInt(themeVars/* bodyLineHeights */.nH[constants/* FORM_FOOTER_LINE_HEIGHT */.kp], 10);
  if (Number.isNaN(lineHeightPx)) {
    return null;
  }
  const totalHeight = lineHeightPx * emptyLines;
  if (Number.isNaN(totalHeight)) {
    return null;
  }
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    height: totalHeight
  });
};
try {
    // @ts-ignore
    getMessage.displayName = "getMessage";
    // @ts-ignore
    getMessage.__docgenInfo = { "description": "", "displayName": "getMessage", "props": { "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "(value: ChangeEvent<HTMLInputElement>) => void" } }, "onBlur": { "defaultValue": null, "description": "", "name": "onBlur", "required": false, "type": { "name": "(value: FocusEvent<HTMLInputElement, Element>) => void" } }, "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "RefCallBack" } }, "control": { "defaultValue": null, "description": "", "name": "control", "required": false, "type": { "name": "Control<FieldValues, any, FieldValues>" } }, "isError": { "defaultValue": null, "description": "Display error state", "name": "isError", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isSuccess": { "defaultValue": null, "description": "Display success state", "name": "isSuccess", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "name": { "defaultValue": null, "description": "", "name": "name", "required": false, "type": { "name": "string" } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "hint": { "defaultValue": null, "description": "Hint message to be displayed", "name": "hint", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "error": { "defaultValue": null, "description": "Error message to be displayed", "name": "error", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }, { "value": "{ message: ReactNode; }" }] } }, "success": { "defaultValue": null, "description": "Success message to be displayed", "name": "success", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "emptyLines": { "defaultValue": null, "description": "Number of lines to reserve when there is no content (prevents layout jumps)", "name": "emptyLines", "required": false, "type": { "name": "number" } }, "maxLength": { "defaultValue": null, "description": "Counter max length", "name": "maxLength", "required": false, "type": { "name": "number" } }, "value": { "defaultValue": null, "description": "Form element value to count", "name": "value", "required": false, "type": { "name": "string" } }, "format": { "defaultValue": null, "description": "Formatter function to format the counter value", "name": "format", "required": false, "type": { "name": "NumberFormatType" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Form/FormHelperText/helpers.tsx#getMessage"] = { docgenInfo: getMessage.__docgenInfo, name: "getMessage", path: "../forms/src/components/Form/FormHelperText/helpers.tsx#getMessage" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    getEmptyLines.displayName = "getEmptyLines";
    // @ts-ignore
    getEmptyLines.__docgenInfo = { "description": "", "displayName": "getEmptyLines", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Form/FormHelperText/helpers.tsx#getEmptyLines"] = { docgenInfo: getEmptyLines.__docgenInfo, name: "getEmptyLines", path: "../forms/src/components/Form/FormHelperText/helpers.tsx#getEmptyLines" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../forms/src/components/Form/FormHelperText/index.tsx
const _excluded = ["error", "isError", "isSuccess", "emptyLines", "dataTrackTag", "dataTrackValue"];
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






const FormHelperText = _ref => {
  let {
      error,
      isError: isErrorProp,
      isSuccess: isSuccessProp,
      emptyLines,
      dataTrackTag = 'form_helper_text',
      dataTrackValue
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const {
    isError,
    isSuccess,
    error: formError
  } = (0,FormContext/* useFormContext */.x)();
  const isErrorInternal = isErrorProp || isError;
  const isSuccessInternal = isSuccessProp || isSuccess;
  const message = getMessage(_objectSpread({
    isError: isErrorInternal,
    isSuccess: isSuccessInternal,
    error: error || formError
  }, restProps));
  const color = (0,helpers/* getValidationColor */.b6)({
    isError: isErrorInternal,
    isSuccess: isSuccessInternal
  });
  if (message) {
    return /*#__PURE__*/react.createElement(Typography/* default */.A, {
      dataTrackTag: dataTrackTag,
      dataTrackValue: dataTrackValue,
      color: color
    }, message);
  }
  return getEmptyLines(emptyLines);
};
FormHelperText.id = constants/* FORM_HELPER_TEXT_ID */.qN;
FormHelperText.displayName = constants/* FORM_HELPER_TEXT_ID */.qN;
/* harmony default export */ const Form_FormHelperText = (FormHelperText);
try {
    // @ts-ignore
    FormHelperText.displayName = "FormHelperText";
    // @ts-ignore
    FormHelperText.__docgenInfo = { "description": "", "displayName": "FormHelperText", "props": { "hint": { "defaultValue": null, "description": "Hint message to be displayed", "name": "hint", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "error": { "defaultValue": null, "description": "Error message to be displayed", "name": "error", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }, { "value": "{ message: ReactNode; }" }] } }, "success": { "defaultValue": null, "description": "Success message to be displayed", "name": "success", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "emptyLines": { "defaultValue": null, "description": "Number of lines to reserve when there is no content (prevents layout jumps)", "name": "emptyLines", "required": false, "type": { "name": "number" } }, "dataTrackTag": { "defaultValue": { value: "form_helper_text" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "isError": { "defaultValue": null, "description": "Display error state", "name": "isError", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isSuccess": { "defaultValue": null, "description": "Display success state", "name": "isSuccess", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Form/FormHelperText/index.tsx#FormHelperText"] = { docgenInfo: FormHelperText.__docgenInfo, name: "FormHelperText", path: "../forms/src/components/Form/FormHelperText/index.tsx#FormHelperText" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../forms/src/components/Form/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kw: () => (/* binding */ FORM_ELEMENT_ID),
/* harmony export */   Vn: () => (/* binding */ FORM_OPTIONAL_LABEL_ID),
/* harmony export */   _1: () => (/* binding */ FORM_LABEL_ID),
/* harmony export */   aE: () => (/* binding */ FORM_SUBTITLE_ID),
/* harmony export */   dn: () => (/* binding */ FORM_HEADER_ID),
/* harmony export */   kp: () => (/* binding */ FORM_FOOTER_LINE_HEIGHT),
/* harmony export */   pA: () => (/* binding */ FORM_TOOLTIP_ID),
/* harmony export */   qN: () => (/* binding */ FORM_HELPER_TEXT_ID),
/* harmony export */   ui: () => (/* binding */ FORM_COUNTER_ID)
/* harmony export */ });
const FORM_SUBTITLE_ID = 'FormSubtitle';
const FORM_ELEMENT_ID = 'FormElement';
const FORM_HELPER_TEXT_ID = 'FormHelperText';
const FORM_COUNTER_ID = 'FormCounter';
const FORM_HEADER_ID = 'FormHeader';
const FORM_LABEL_ID = 'FormLabel';
const FORM_OPTIONAL_LABEL_ID = 'FormOptionalLabel';
const FORM_TOOLTIP_ID = 'FormTooltip';
const FORM_FOOTER_LINE_HEIGHT = 'b_sm';

/***/ }),

/***/ "../inputs/dist/esm/src/components/shared/useInputTrackValue/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ useInputTrackValue)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const useInputTrackValue = _ref => {
  let {
    dataTrackValue,
    value
  } = _ref;
  if (dataTrackValue !== undefined) {
    return dataTrackValue;
  }
  let valueStringValue;
  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(value)) {
    if (Array.isArray(value)) {
      valueStringValue = value.filter(item => !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(item)).toString();
    } else if (typeof value === 'object') {
      valueStringValue = Object.entries(value).map(_ref2 => {
        let [key, item] = _ref2;
        return "".concat(key, ":").concat(Array.isArray(item) ? item.filter(value => !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isNil)(value)) : item);
      }).toString();
    } else {
      valueStringValue = String(value);
    }
    return valueStringValue;
  }
  return undefined;
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

/***/ "../ui_utils/dist/esm/src/utils/getComponentProps/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../ui_utils/dist/esm/src/utils/utils/index.js");
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

const getComponentProps = child => {
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .isBuilderChildren */ .z)(child)) {
    var _child$props, _child$props2;
    return _objectSpread({
      children: (child === null || child === void 0 || (_child$props = child.props) === null || _child$props === void 0 || (_child$props = _child$props.block) === null || _child$props === void 0 ? void 0 : _child$props.children) || []
    }, (child === null || child === void 0 || (_child$props2 = child.props) === null || _child$props2 === void 0 || (_child$props2 = _child$props2.block) === null || _child$props2 === void 0 || (_child$props2 = _child$props2.component) === null || _child$props2 === void 0 ? void 0 : _child$props2.options) || {});
  }
  return (child === null || child === void 0 ? void 0 : child.props) || {};
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComponentProps);

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/QuestionMark.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const QuestionMarkIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('QuestionMarkIcon')
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
    d: "M8 11.038h.006M6.65 6.313a1.35 1.35 0 1 1 2.486.729C8.733 7.669 8 8.267 8 9.012M14.75 8a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0",
    vectorEffect: "non-scaling-stroke"
  }));
};
QuestionMarkIcon.id = 'QuestionMarkIcon';
QuestionMarkIcon.displayName = 'QuestionMarkIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionMarkIcon);
;
QuestionMarkIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "QuestionMarkIcon"
};

/***/ })

}]);
//# sourceMappingURL=3911.ff454b3a.iframe.bundle.js.map