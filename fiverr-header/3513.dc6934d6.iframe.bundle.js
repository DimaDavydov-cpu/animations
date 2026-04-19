"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[3513],{

/***/ "../inputs/src/components/Checkbox/style.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ getValidationColor)
/* harmony export */ });
/* harmony import */ var _shared_formsTokenColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../inputs/src/components/shared/formsTokenColors.ts");

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

/***/ "../inputs/src/components/Radio/RadioGroup/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Controlled: () => (/* binding */ Controlled),
  Direction: () => (/* binding */ Direction),
  Error: () => (/* binding */ Error),
  Primary: () => (/* binding */ Primary),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
// EXTERNAL MODULE: ../inputs/src/components/shared/utils.ts
var utils = __webpack_require__("../inputs/src/components/shared/utils.ts");
// EXTERNAL MODULE: ../inputs/src/components/shared/useInputTrackValue/index.ts
var useInputTrackValue = __webpack_require__("../inputs/src/components/shared/useInputTrackValue/index.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
;// ../inputs/src/components/Radio/RadioGroup/hooks/useRadioGroup/index.ts
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

const useRadioGroup = _ref => {
  let {
    value,
    onChange
  } = _ref;
  const getExtendedProps = child => {
    const controlled = !(0,lodash.isUndefined)(value);
    const handleChange = e => {
      var _props;
      if (typeof onChange === 'function') {
        onChange === null || onChange === void 0 || onChange(e.target.value);
      }
      const childOnChange = child === null || child === void 0 || (_props = child.props) === null || _props === void 0 ? void 0 : _props.onChange;
      if (typeof childOnChange === 'function') {
        childOnChange(e);
      }
    };
    return _objectSpread({
      onChange: handleChange
    }, controlled ? {
      checked: Boolean(child.props.value === value)
    } : {});
  };
  return {
    getExtendedProps
  };
};
;// ../inputs/src/components/Radio/RadioGroup/index.tsx
const _excluded = ["children", "direction", "value", "onChange", "onBlur", "dataTrackTag", "dataTrackValue"];
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function RadioGroup_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function RadioGroup_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? RadioGroup_ownKeys(Object(t), !0).forEach(function (r) {
      RadioGroup_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : RadioGroup_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function RadioGroup_defineProperty(e, r, t) {
  return (r = RadioGroup_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function RadioGroup_toPropertyKey(t) {
  var i = RadioGroup_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function RadioGroup_toPrimitive(t, r) {
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






const RadioGroup = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      children,
      direction = 'column',
      value,
      onChange,
      onBlur,
      dataTrackTag = 'radio_group',
      dataTrackValue
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const trackValue = (0,useInputTrackValue/* useInputTrackValue */.y)({
    dataTrackValue,
    value
  });
  const {
    stylingProps,
    restProps
  } = (0,utils/* filterProps */.J)(rest);
  const {
    getExtendedProps
  } = useRadioGroup({
    value,
    onChange
  });
  return /*#__PURE__*/react.createElement(Stack/* default */.A, _extends({
    dataTrackTag: dataTrackTag,
    dataTrackValue: trackValue,
    onBlur: onBlur,
    gap: "2",
    direction: direction,
    width: "fit-content"
  }, stylingProps), react.Children.map(react.Children.toArray(children), child => (0,render_children/* renderChildren */.s)(child, RadioGroup_objectSpread(RadioGroup_objectSpread(RadioGroup_objectSpread({}, restProps), getExtendedProps(child)), {}, {
    ref
  }))));
});
RadioGroup.displayName = 'RadioGroup';
/* harmony default export */ const Radio_RadioGroup = (RadioGroup);
try {
    // @ts-ignore
    RadioGroup.displayName = "RadioGroup";
    // @ts-ignore
    RadioGroup.__docgenInfo = { "description": "", "displayName": "RadioGroup", "props": { "direction": { "defaultValue": { value: "column" }, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "direction", "required": false, "type": { "name": "enum", "value": [{ "value": "\"column\"" }, { "value": "\"row\"" }, { "value": "\"rowReverse\"" }, { "value": "\"columnReverse\"" }] } }, "value": { "defaultValue": null, "description": "", "name": "value", "required": false, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": false, "type": { "name": "(value: string) => void" } }, "name": { "defaultValue": null, "description": "The native `name` element attribute.", "name": "name", "required": false, "type": { "name": "string" } }, "dataTrackTag": { "defaultValue": { value: "radio_group" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "Native disabled behavior", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isError": { "defaultValue": null, "description": "Display error state", "name": "isError", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../inputs/src/components/Radio/RadioGroup/index.tsx#RadioGroup"] = { docgenInfo: RadioGroup.__docgenInfo, name: "RadioGroup", path: "../inputs/src/components/Radio/RadioGroup/index.tsx#RadioGroup" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../inputs/src/components/Radio/index.tsx + 2 modules
var Radio = __webpack_require__("../inputs/src/components/Radio/index.tsx");
;// ../inputs/src/components/Radio/RadioGroup/stories/index.stories.tsx



const radioButtons = [{
  text: 'Yes',
  value: '1'
}, {
  text: 'No',
  value: '2'
}, {
  text: 'Maybe',
  value: '3'
}];
const Primary = {
  tags: ['sidebar-ignore']
};
const Direction = {
  tags: ['sidebar-ignore'],
  args: {
    direction: 'row',
    name: 'group-direction'
  }
};
const Error = {
  tags: ['sidebar-ignore'],
  args: {
    isError: true,
    name: 'group-error'
  }
};
const Controlled = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      source: {
        code: " \nconst [value, setValue] = useState('1');\n\nreturn (\n  <RadioGroup name=\"group-controlled\" value={value} onChange={setValue}>\n    {radioButtons.map((radio) => (\n      <Radio key={radio.value} value={radio.value}>\n        {radio.text}\n      </Radio>\n    ))}\n  </RadioGroup>\n);"
      }
    }
  },
  render: () => {
    const [value, setValue] = (0,react.useState)('1');
    return /*#__PURE__*/react.createElement(Radio_RadioGroup, {
      name: "group-controlled",
      value: value,
      onChange: setValue
    }, radioButtons.map(radio => /*#__PURE__*/react.createElement(Radio/* default */.A, {
      key: radio.value,
      value: radio.value
    }, radio.text)));
  }
};
const meta = {
  args: {
    name: 'group'
  },
  title: 'Forms/RadioGroup',
  component: Radio_RadioGroup,
  render: args => /*#__PURE__*/react.createElement(Radio_RadioGroup, args, radioButtons.map(radio => /*#__PURE__*/react.createElement(Radio/* default */.A, {
    key: radio.value,
    value: radio.value
  }, radio.text)))
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
Direction.parameters = {
  ...Direction.parameters,
  docs: {
    ...Direction.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    direction: 'row',\n    name: 'group-direction'\n  }\n}",
      ...Direction.parameters?.docs?.source
    }
  }
};
Error.parameters = {
  ...Error.parameters,
  docs: {
    ...Error.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    isError: true,\n    name: 'group-error'\n  }\n}",
      ...Error.parameters?.docs?.source
    }
  }
};
Controlled.parameters = {
  ...Controlled.parameters,
  docs: {
    ...Controlled.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: ` \nconst [value, setValue] = useState('1');\n\nreturn (\n  <RadioGroup name=\"group-controlled\" value={value} onChange={setValue}>\n    {radioButtons.map((radio) => (\n      <Radio key={radio.value} value={radio.value}>\n        {radio.text}\n      </Radio>\n    ))}\n  </RadioGroup>\n);`\n      }\n    }\n  },\n  render: () => {\n    const [value, setValue] = useState('1');\n    return <RadioGroup name=\"group-controlled\" value={value} onChange={setValue}>\n        {radioButtons.map(radio => <Radio key={radio.value} value={radio.value}>\n            {radio.text}\n          </Radio>)}\n      </RadioGroup>;\n  }\n}",
      ...Controlled.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","Direction","Error","Controlled"];

/***/ }),

/***/ "../inputs/src/components/Radio/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Radio)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../inputs/src/components/Checkbox/style.ts
var style = __webpack_require__("../inputs/src/components/Checkbox/style.ts");
// EXTERNAL MODULE: ../inputs/src/components/Input/index.tsx
var Input = __webpack_require__("../inputs/src/components/Input/index.tsx");
// EXTERNAL MODULE: ../inputs/src/components/shared/utils.ts
var utils = __webpack_require__("../inputs/src/components/shared/utils.ts");
;// ../inputs/src/components/inputs/src/components/Radio/styles.ve.css.ts.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../inputs/src/components/Radio/styles.ve.css.ts.vanilla.css","source":"LnV1ZHA5ZDA6aG92ZXIgLnV1ZHA5ZDIgewogIGJvcmRlci1jb2xvcjogaW5oZXJpdDsKfQoudXVkcDlkMTpjaGVja2VkICsgLnV1ZHA5ZDIgewogIGJvcmRlci1jb2xvcjogIzIyMjMyNTsKICBib3JkZXItd2lkdGg6IDVweDsKfQoudXVkcDlkMTpjaGVja2VkOmRpc2FibGVkICsgLnV1ZHA5ZDIgewogIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOwp9Ci51dWRwOWQxOmRpc2FibGVkOm5vdCg6Y2hlY2tlZCkgKyAudXVkcDlkMiB7CiAgYm9yZGVyLXdpZHRoOiAwOwp9Ci51dWRwOWQxOmRpc2FibGVkICsgLnV1ZHA5ZDIgewogIGJvcmRlci1jb2xvcjogI0RBREJERDsKICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNUU3OwogIHBvaW50ZXItZXZlbnRzOiBwYWludGVkOwp9Ci51dWRwOWQxOmhvdmVyOm5vdCg6Y2hlY2tlZCk6bm90KDpkaXNhYmxlZCkgKyAudXVkcDlkMiB7CiAgYm9yZGVyLXdpZHRoOiAycHg7Cn0KLnV1ZHA5ZDE6Zm9jdXMtdmlzaWJsZSArIC51dWRwOWQzIHsKICBvdXRsaW5lOiAycHggc29saWQgIzIyMjMyNTsKICBvdXRsaW5lLW9mZnNldDogMXB4Owp9"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../inputs/src/components/Radio/styles.ve.css.ts

var circle = 'uudp9d2';
var container = 'uudp9d0';
var input = 'uudp9d1';
var outline = 'uudp9d3';
;// ../inputs/src/components/Radio/index.tsx
const _excluded = ["children", "disabled", "isError", "isSuccess", "className", "disableOutline", "dataTrackTag", "dataTrackValue"];
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
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









const Radio = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      children,
      disabled = false,
      isError = false,
      isSuccess = false,
      className,
      disableOutline,
      dataTrackTag = 'radio',
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
    type: 'radio',
    disabled,
    width: 0,
    height: 0,
    className: input,
    opacity: '0',
    dataTrackTag,
    dataTrackValue
  }, restProps);
  return /*#__PURE__*/react.createElement(Box/* default */.A, _extends({
    as: "label",
    display: "inlineFlex",
    direction: "row",
    alignItems: "center",
    color: color,
    boxSizing: "borderBox"
  }, stylingProps, {
    className: classnames_default()(container, className)
  }), /*#__PURE__*/react.createElement(Input/* default */.A, _extends({
    role: "radio"
  }, inputProps, {
    ref: ref
  })), /*#__PURE__*/react.createElement(Container/* default */.A, {
    as: "span",
    display: "inlineBlock",
    position: "relative",
    width: "20px",
    height: "20px",
    flexShrink: "0",
    alignSelf: "flexStart",
    borderRadius: "circle",
    marginRight: "2",
    marginTop: "px",
    borderWidth: "sm",
    borderColor: borderColor,
    backgroundColor: "background",
    cursor: disabled ? undefined : 'pointer',
    userSelect: "none",
    className: classnames_default()(circle, {
      [outline]: !disableOutline
    })
  }), (0,render_children/* renderChildren */.s)(children));
});
Radio.displayName = 'Radio';
/* harmony default export */ const components_Radio = (Radio);
try {
    // @ts-ignore
    Radio.displayName = "Radio";
    // @ts-ignore
    Radio.__docgenInfo = { "description": "", "displayName": "Radio", "props": { "children": { "defaultValue": null, "description": "Any node that can be rendered.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "name": { "defaultValue": null, "description": "The native `name` element attribute.", "name": "name", "required": false, "type": { "name": "string" } }, "isError": { "defaultValue": { value: "false" }, "description": "Display error state", "name": "isError", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isSuccess": { "defaultValue": { value: "false" }, "description": "Display success state", "name": "isSuccess", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "checked": { "defaultValue": null, "description": "Native value behavior", "name": "checked", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "defaultChecked": { "defaultValue": null, "description": "Native value behavior", "name": "defaultChecked", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disableOutline": { "defaultValue": null, "description": "Disabling outline on focus state", "name": "disableOutline", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disabled": { "defaultValue": { value: "false" }, "description": "Native disabled behavior", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "htmlHidden": { "defaultValue": null, "description": "Native hidden behavior", "name": "htmlHidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "false" }, { "value": "true" }] } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } }, "dataTrackTag": { "defaultValue": { value: "radio" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": { value: "<checked>" }, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../inputs/src/components/Radio/index.tsx#Radio"] = { docgenInfo: Radio.__docgenInfo, name: "Radio", path: "../inputs/src/components/Radio/index.tsx#Radio" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../inputs/src/components/shared/formsTokenColors.ts":
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

/***/ "../inputs/src/components/shared/useInputTrackValue/index.ts":
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

/***/ "../inputs/src/components/shared/utils.ts":
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
//# sourceMappingURL=3513.dc6934d6.iframe.bundle.js.map