"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[77,378,1077,1923,1972,2278,2937,3572,3594,3601,3666,4367,4686,4836,5502,5587,6151,6385,6519,7394,7770,8124,8135,8640,8815,9102,9610,9630,9655],{

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

/***/ "../disclosure/src/components/Collapsible/CollapsibleGroup/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DefaultExpanded: () => (/* binding */ DefaultExpanded),
  DynamicContent: () => (/* binding */ DynamicContent),
  MenuHeader: () => (/* binding */ MenuHeader),
  Primary: () => (/* binding */ Primary),
  WithMenuHeaderLeanChevron: () => (/* binding */ WithMenuHeaderLeanChevron),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs + 58 modules
var esm = __webpack_require__("../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs");
// EXTERNAL MODULE: ../button/dist/esm/src/components/IconButton/index.js
var IconButton = __webpack_require__("../button/dist/esm/src/components/IconButton/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/Button/index.js + 1 modules
var Button = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
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
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Ellipsis.js
var Ellipsis = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Ellipsis.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
;// ../disclosure/src/components/Collapsible/CollapsibleGroup/index.tsx



const NO_OPENED_PANEL = -1;
const CollapsibleGroup = _ref => {
  let {
    defaultExpandedIndex,
    children,
    renderChildren = render_children/* renderChildren */.s,
    dataTrackTag = 'collapsible_group',
    dataTrackValue
  } = _ref;
  const [expandedPanel, setExpandedPanel] = (0,react.useState)(defaultExpandedIndex);
  const childrenArray = react.Children.toArray(children);
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, react.Children.map(childrenArray, (child, index) => renderChildren(child, {
    expanded: expandedPanel === index,
    paddingBottom: expandedPanel === index && index !== childrenArray.length - 1 ? '6' : undefined,
    key: index,
    onToggle: expanded => {
      var _child$props;
      if (expanded) {
        setExpandedPanel(index);
      } else if (index === expandedPanel) {
        setExpandedPanel(NO_OPENED_PANEL);
      }
      if (typeof (child === null || child === void 0 || (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.onToggle) === 'function') {
        child.props.onToggle(expanded);
      }
    }
  })));
};
CollapsibleGroup.displayName = 'CollapsibleGroup';
/* harmony default export */ const Collapsible_CollapsibleGroup = (CollapsibleGroup);
try {
    // @ts-ignore
    CollapsibleGroup.displayName = "CollapsibleGroup";
    // @ts-ignore
    CollapsibleGroup.__docgenInfo = { "description": "", "displayName": "CollapsibleGroup", "props": { "children": { "defaultValue": null, "description": "Collapsible elements.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }, { "value": "ReactNode[]" }] } }, "defaultExpandedIndex": { "defaultValue": null, "description": "The default expanded collapsible index.", "name": "defaultExpandedIndex", "required": false, "type": { "name": "number" } }, "renderChildren": { "defaultValue": null, "description": "Override the default renderChildren function, should be used for unique cases - E.G Builder.io integration", "name": "renderChildren", "required": false, "type": { "name": "(child: any, props: object) => any" } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } }, "dataTrackTag": { "defaultValue": { value: "collapsible_group" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../disclosure/src/components/Collapsible/CollapsibleGroup/index.tsx#CollapsibleGroup"] = { docgenInfo: CollapsibleGroup.__docgenInfo, name: "CollapsibleGroup", path: "../disclosure/src/components/Collapsible/CollapsibleGroup/index.tsx#CollapsibleGroup" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../disclosure/src/components/Collapsible/CollapsibleHeader/index.tsx
var CollapsibleHeader = __webpack_require__("../disclosure/src/components/Collapsible/CollapsibleHeader/index.tsx");
// EXTERNAL MODULE: ../disclosure/src/components/Collapsible/CollapsibleContent/index.tsx
var CollapsibleContent = __webpack_require__("../disclosure/src/components/Collapsible/CollapsibleContent/index.tsx");
// EXTERNAL MODULE: ../disclosure/src/components/Collapsible/index.tsx
var Collapsible = __webpack_require__("../disclosure/src/components/Collapsible/index.tsx");
// EXTERNAL MODULE: ../disclosure/src/components/Collapsible/CollapsibleHeaderChevron/index.tsx
var CollapsibleHeaderChevron = __webpack_require__("../disclosure/src/components/Collapsible/CollapsibleHeaderChevron/index.tsx");
// EXTERNAL MODULE: ../disclosure/src/components/Collapsible/CollapsibleHeaderMenu/index.tsx
var CollapsibleHeaderMenu = __webpack_require__("../disclosure/src/components/Collapsible/CollapsibleHeaderMenu/index.tsx");
;// ../disclosure/src/components/Collapsible/CollapsibleGroup/stories/index.stories.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}












esm/* faker */.az.seed(1);
const longText = esm/* faker */.az.lorem.paragraph(10);
const Primary = {
  tags: ['sidebar-ignore']
};
const DefaultExpanded = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    defaultExpandedIndex: 1
  }
};
const MenuHeader = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: () => /*#__PURE__*/react.createElement(Collapsible_CollapsibleGroup, null, [1, 2, 3].map(idx => /*#__PURE__*/react.createElement(Collapsible/* default */.A, {
    key: idx
  }, /*#__PURE__*/react.createElement(CollapsibleHeader/* default */.A, null, "Title is a Collapsible #".concat(idx), /*#__PURE__*/react.createElement(CollapsibleHeaderChevron/* default */.A, null), /*#__PURE__*/react.createElement(CollapsibleHeaderMenu/* default */.A, null, /*#__PURE__*/react.createElement(Dropdown/* default */.A, null, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, null, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    shape: "circle",
    variant: "ghost",
    size: "xs",
    "aria-label": ""
  }, /*#__PURE__*/react.createElement(Ellipsis/* default */.A, null))), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Item 1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Item 2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Item 3")))))), /*#__PURE__*/react.createElement(CollapsibleContent/* default */.A, null, longText))))
};
const WithMenuHeaderLeanChevron = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: () => /*#__PURE__*/react.createElement(Collapsible_CollapsibleGroup, null, [1, 2, 3].map(idx => /*#__PURE__*/react.createElement(Collapsible/* default */.A, {
    key: idx
  }, /*#__PURE__*/react.createElement(CollapsibleHeader/* default */.A, null, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    gap: "2",
    as: "span"
  }, "Title is a Collapsible #".concat(idx), /*#__PURE__*/react.createElement(CollapsibleHeaderChevron/* default */.A, {
    variant: "lean"
  })), /*#__PURE__*/react.createElement(CollapsibleHeaderMenu/* default */.A, null, /*#__PURE__*/react.createElement(Dropdown/* default */.A, null, /*#__PURE__*/react.createElement(DropdownAnchor/* default */.A, null, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    shape: "circle",
    variant: "ghost",
    size: "xs",
    "aria-label": ""
  }, /*#__PURE__*/react.createElement(Ellipsis/* default */.A, null))), /*#__PURE__*/react.createElement(DropdownContent/* default */.A, null, /*#__PURE__*/react.createElement(DropdownMenu/* default */.A, null, /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Item 1"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Item 2"), /*#__PURE__*/react.createElement(MenuItem/* default */.A, null, "Item 3")))))), /*#__PURE__*/react.createElement(CollapsibleContent/* default */.A, null, longText))))
};
const DynamicContent = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      source: {
        code: "const [renderMore, setRenderMore] = useState(false);\n  return (\n    <CollapsibleGroup {...args} defaultExpandedIndex={0}>\n      <Collapsible>\n        <CollapsibleHeader>\n          Title Collapsible\n          <CollapsibleHeaderChevron/>\n        </CollapsibleHeader>\n        <CollapsibleContent>\n          <Button onClick={() => setRenderMore(!renderMore)}>Click to toggle more content</Button>\n          {renderMore && (\n            <CollapsibleGroup>\n              {[1, 2].map((idx) => (\n                <Collapsible key={idx}>\n                  <CollapsibleHeader>{'Inner Title Collapsible ' + idx}</CollapsibleHeader>\n                  <CollapsibleContent>{longText}</CollapsibleContent>\n                </Collapsible>\n              ))}\n            </CollapsibleGroup>\n          )}\n        </CollapsibleContent>\n      </Collapsible>\n    </CollapsibleGroup>\n  );"
      }
    }
  },
  render: args => {
    const [renderMore, setRenderMore] = (0,react.useState)(false);
    return /*#__PURE__*/react.createElement(Collapsible_CollapsibleGroup, _extends({}, args, {
      defaultExpandedIndex: 0
    }), /*#__PURE__*/react.createElement(Collapsible/* default */.A, null, /*#__PURE__*/react.createElement(CollapsibleHeader/* default */.A, null, "Title Collapsible", /*#__PURE__*/react.createElement(CollapsibleHeaderChevron/* default */.A, null)), /*#__PURE__*/react.createElement(CollapsibleContent/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, {
      onClick: () => setRenderMore(!renderMore)
    }, "Click to toggle more content"), renderMore && /*#__PURE__*/react.createElement(Collapsible_CollapsibleGroup, null, [1, 2].map(idx => /*#__PURE__*/react.createElement(Collapsible/* default */.A, {
      key: idx
    }, /*#__PURE__*/react.createElement(CollapsibleHeader/* default */.A, null, "Inner Title Collapsible ".concat(idx)), /*#__PURE__*/react.createElement(CollapsibleContent/* default */.A, null, longText)))))));
  }
};
const meta = {
  argTypes: {
    renderChildren: {
      table: {
        disable: true
      }
    }
  },
  title: 'Disclosure/CollapsibleGroup',
  component: Collapsible_CollapsibleGroup,
  render: args => /*#__PURE__*/react.createElement(Collapsible_CollapsibleGroup, args, [1, 2, 3].map(idx => /*#__PURE__*/react.createElement(Collapsible/* default */.A, {
    key: idx
  }, /*#__PURE__*/react.createElement(CollapsibleHeader/* default */.A, null, "Title is a Collapsible #".concat(idx), /*#__PURE__*/react.createElement(CollapsibleHeaderChevron/* default */.A, null)), /*#__PURE__*/react.createElement(CollapsibleContent/* default */.A, null, longText))))
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
DefaultExpanded.parameters = {
  ...DefaultExpanded.parameters,
  docs: {
    ...DefaultExpanded.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    defaultExpandedIndex: 1\n  }\n}",
      ...DefaultExpanded.parameters?.docs?.source
    }
  }
};
MenuHeader.parameters = {
  ...MenuHeader.parameters,
  docs: {
    ...MenuHeader.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: () => <CollapsibleGroup>\n      {[1, 2, 3].map(idx => <Collapsible key={idx}>\n          <CollapsibleHeader>\n            {`Title is a Collapsible #${idx}`}\n            <CollapsibleHeaderChevron />\n            <CollapsibleHeaderMenu>\n              <Dropdown>\n                <DropdownAnchor>\n                  <IconButton shape=\"circle\" variant=\"ghost\" size=\"xs\" aria-label=\"\">\n                    <EllipsisIcon />\n                  </IconButton>\n                </DropdownAnchor>\n                <DropdownContent>\n                  <DropdownMenu>\n                    <MenuItem>Item 1</MenuItem>\n                    <MenuItem>Item 2</MenuItem>\n                    <MenuItem>Item 3</MenuItem>\n                  </DropdownMenu>\n                </DropdownContent>\n              </Dropdown>\n            </CollapsibleHeaderMenu>\n          </CollapsibleHeader>\n          <CollapsibleContent>{longText}</CollapsibleContent>\n        </Collapsible>)}\n    </CollapsibleGroup>\n}",
      ...MenuHeader.parameters?.docs?.source
    }
  }
};
WithMenuHeaderLeanChevron.parameters = {
  ...WithMenuHeaderLeanChevron.parameters,
  docs: {
    ...WithMenuHeaderLeanChevron.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: () => <CollapsibleGroup>\n      {[1, 2, 3].map(idx => <Collapsible key={idx}>\n          <CollapsibleHeader>\n            <Stack gap=\"2\" as=\"span\">\n              {`Title is a Collapsible #${idx}`}\n              <CollapsibleHeaderChevron variant=\"lean\" />\n            </Stack>\n            <CollapsibleHeaderMenu>\n              <Dropdown>\n                <DropdownAnchor>\n                  <IconButton shape=\"circle\" variant=\"ghost\" size=\"xs\" aria-label=\"\">\n                    <EllipsisIcon />\n                  </IconButton>\n                </DropdownAnchor>\n                <DropdownContent>\n                  <DropdownMenu>\n                    <MenuItem>Item 1</MenuItem>\n                    <MenuItem>Item 2</MenuItem>\n                    <MenuItem>Item 3</MenuItem>\n                  </DropdownMenu>\n                </DropdownContent>\n              </Dropdown>\n            </CollapsibleHeaderMenu>\n          </CollapsibleHeader>\n          <CollapsibleContent>{longText}</CollapsibleContent>\n        </Collapsible>)}\n    </CollapsibleGroup>\n}",
      ...WithMenuHeaderLeanChevron.parameters?.docs?.source
    }
  }
};
DynamicContent.parameters = {
  ...DynamicContent.parameters,
  docs: {
    ...DynamicContent.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `const [renderMore, setRenderMore] = useState(false);\n  return (\n    <CollapsibleGroup {...args} defaultExpandedIndex={0}>\n      <Collapsible>\n        <CollapsibleHeader>\n          Title Collapsible\n          <CollapsibleHeaderChevron/>\n        </CollapsibleHeader>\n        <CollapsibleContent>\n          <Button onClick={() => setRenderMore(!renderMore)}>Click to toggle more content</Button>\n          {renderMore && (\n            <CollapsibleGroup>\n              {[1, 2].map((idx) => (\n                <Collapsible key={idx}>\n                  <CollapsibleHeader>{'Inner Title Collapsible ' + idx}</CollapsibleHeader>\n                  <CollapsibleContent>{longText}</CollapsibleContent>\n                </Collapsible>\n              ))}\n            </CollapsibleGroup>\n          )}\n        </CollapsibleContent>\n      </Collapsible>\n    </CollapsibleGroup>\n  );`\n      }\n    }\n  },\n  render: args => {\n    const [renderMore, setRenderMore] = useState(false);\n    return <CollapsibleGroup {...args} defaultExpandedIndex={0}>\n        <Collapsible>\n          <CollapsibleHeader>\n            Title Collapsible\n            <CollapsibleHeaderChevron />\n          </CollapsibleHeader>\n          <CollapsibleContent>\n            <Button onClick={() => setRenderMore(!renderMore)}>Click to toggle more content</Button>\n            {renderMore && <CollapsibleGroup>\n                {[1, 2].map(idx => <Collapsible key={idx}>\n                    <CollapsibleHeader>{`Inner Title Collapsible ${idx}`}</CollapsibleHeader>\n                    <CollapsibleContent>{longText}</CollapsibleContent>\n                  </Collapsible>)}\n              </CollapsibleGroup>}\n          </CollapsibleContent>\n        </Collapsible>\n      </CollapsibleGroup>;\n  }\n}",
      ...DynamicContent.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","DefaultExpanded","MenuHeader","WithMenuHeaderLeanChevron","DynamicContent"];

/***/ })

}]);
//# sourceMappingURL=components-Collapsible-CollapsibleGroup-stories-index-stories.dacb8faf.iframe.bundle.js.map