"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[498],{

/***/ "../list/dist/esm/src/components/List/helpers.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ generateDefaultPadding)
});

;// ../list/dist/esm/src/components/list/dist/esm/src/components/List/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../list/dist/esm/src/components/List/styles.ve.css.js.vanilla.css","source":"LmZ5aGY2ZzAgewogIHBhZGRpbmctbGVmdDogcmV2ZXJ0Owp9"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../list/dist/esm/src/components/List/styles.ve.css.js

var resetGlobalUlPadding = 'fyhf6g0';
;// ../list/dist/esm/src/components/List/helpers.js

const generateDefaultPadding = _ref => {
  let {
    padding,
    paddingLeft,
    paddingX
  } = _ref;
  return padding || paddingLeft || paddingX ? '' : resetGlobalUlPadding;
};

/***/ }),

/***/ "../list/dist/esm/src/components/ListItem/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
const _excluded = ["children", "dataTrackTag"];
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


const ListItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      children,
      dataTrackTag = 'list_item'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    dataTrackTag: dataTrackTag,
    ref: ref,
    as: "li"
  }, restProps), children);
});
ListItem.displayName = 'ListItem';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);
;
ListItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ListItem"
};

/***/ }),

/***/ "../list/dist/esm/src/components/UnorderedList/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
/* harmony import */ var _List_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../list/dist/esm/src/components/List/helpers.js");
const _excluded = ["children", "className", "dataTrackTag"];
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




const UnorderedList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      children,
      className,
      dataTrackTag = 'unordered_list'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, _objectSpread({
    ref: ref,
    as: "ul",
    listStyleType: "initial",
    display: "flex",
    direction: "column",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((0,_List_helpers__WEBPACK_IMPORTED_MODULE_3__/* .generateDefaultPadding */ .c)(restProps), className),
    dataTrackTag: dataTrackTag
  }, restProps), children);
});
UnorderedList.displayName = 'UnorderedList';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnorderedList);
;
UnorderedList.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "UnorderedList"
};

/***/ }),

/***/ "../rich_text/src/components/RichTextElement/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_RichTextElement)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../list/dist/esm/src/components/UnorderedList/index.js
var UnorderedList = __webpack_require__("../list/dist/esm/src/components/UnorderedList/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../list/dist/esm/src/components/List/helpers.js + 2 modules
var helpers = __webpack_require__("../list/dist/esm/src/components/List/helpers.js");
;// ../list/dist/esm/src/components/NumberedList/index.js
const _excluded = ["children", "className", "dataTrackTag"];
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




const NumberedList = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      children,
      className,
      dataTrackTag = 'numbered_list'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement(Box/* default */.A, _objectSpread({
    ref: ref,
    as: "ol",
    listStyleType: "decimal",
    className: classnames_default()((0,helpers/* generateDefaultPadding */.c)(restProps), className),
    dataTrackTag: dataTrackTag
  }, restProps), children);
});
NumberedList.displayName = 'NumberedList';
/* harmony default export */ const components_NumberedList = (NumberedList);
;
NumberedList.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "NumberedList"
};
// EXTERNAL MODULE: ../list/dist/esm/src/components/ListItem/index.js
var ListItem = __webpack_require__("../list/dist/esm/src/components/ListItem/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
;// ../rich_text/src/components/RichTextElement/index.tsx



const RichTextElement = _ref => {
  let {
    attributes,
    children,
    element,
    clearBlockFormatters
  } = _ref;
  if (clearBlockFormatters) {
    return /*#__PURE__*/react.createElement(Text/* default */.A, attributes, children);
  }
  switch (element.type) {
    case 'unordered-list':
      return /*#__PURE__*/react.createElement(UnorderedList/* default */.A, attributes, children);
    case 'numbered-list':
      return /*#__PURE__*/react.createElement(components_NumberedList, attributes, children);
    case 'list-item':
      return /*#__PURE__*/react.createElement(ListItem/* default */.A, attributes, /*#__PURE__*/react.createElement(Text/* default */.A, attributes, children));
    default:
      return /*#__PURE__*/react.createElement(Text/* default */.A, attributes, children);
  }
};
RichTextElement.displayName = 'RichTextElement';
/* harmony default export */ const components_RichTextElement = (RichTextElement);
try {
    // @ts-ignore
    RichTextElement.displayName = "RichTextElement";
    // @ts-ignore
    RichTextElement.__docgenInfo = { "description": "", "displayName": "RichTextElement", "props": { "attributes": { "defaultValue": null, "description": "", "name": "attributes", "required": true, "type": { "name": "{ 'data-slate-node': \"element\"; 'data-slate-inline'?: true; 'data-slate-void'?: true; dir?: \"rtl\"; ref: any; }" } }, "element": { "defaultValue": null, "description": "", "name": "element", "required": true, "type": { "name": "CustomElement" } }, "clearBlockFormatters": { "defaultValue": null, "description": "", "name": "clearBlockFormatters", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../rich_text/src/components/RichTextElement/index.tsx#RichTextElement"] = { docgenInfo: RichTextElement.__docgenInfo, name: "RichTextElement", path: "../rich_text/src/components/RichTextElement/index.tsx#RichTextElement" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../rich_text/src/components/RichTextLeaf/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
/* harmony import */ var _fiverr_private_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../typography/dist/esm/src/components/Link/index.js");
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


const RichTextLeaf = _ref => {
  let {
    attributes,
    children,
    leaf,
    clearTextFormatters,
    className,
    size
  } = _ref;
  let fontWeight, fontStyle, decoration;
  if (leaf.bold && !clearTextFormatters) {
    fontWeight = 'bold';
  }
  if (leaf.italic && !clearTextFormatters) {
    fontStyle = 'italic';
  }
  if (leaf.underline && !clearTextFormatters) {
    decoration = 'underline';
  }
  if (leaf.lineThrough && !clearTextFormatters) {
    decoration = 'lineThrough';
  }
  if (leaf.url) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_typography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, _extends({}, attributes, {
      className: className,
      size: size,
      fontWeight: fontWeight,
      fontStyle: fontStyle,
      textAlign: "start",
      href: leaf.url,
      target: "_blank",
      color: "linkSecondary"
    }), children);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _extends({}, attributes, {
    className: className,
    size: size,
    decoration: decoration,
    fontWeight: fontWeight,
    fontStyle: fontStyle,
    textAlign: "start",
    as: "span"
  }), children);
};
RichTextLeaf.displayName = 'RichTextLeaf';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RichTextLeaf);
try {
    // @ts-ignore
    RichTextLeaf.displayName = "RichTextLeaf";
    // @ts-ignore
    RichTextLeaf.__docgenInfo = { "description": "", "displayName": "RichTextLeaf", "props": { "attributes": { "defaultValue": null, "description": "", "name": "attributes", "required": true, "type": { "name": "{ 'data-slate-leaf': true; }" } }, "leaf": { "defaultValue": null, "description": "", "name": "leaf", "required": true, "type": { "name": "CustomTextElement" } }, "className": { "defaultValue": null, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "clearTextFormatters": { "defaultValue": null, "description": "", "name": "clearTextFormatters", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "size": { "defaultValue": null, "description": "", "name": "size", "required": true, "type": { "name": "any" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../rich_text/src/components/RichTextLeaf/index.tsx#RichTextLeaf"] = { docgenInfo: RichTextLeaf.__docgenInfo, name: "RichTextLeaf", path: "../rich_text/src/components/RichTextLeaf/index.tsx#RichTextLeaf" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../rich_text/src/components/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $r: () => (/* binding */ LT_SEPARATOR),
/* harmony export */   Oq: () => (/* binding */ I_SEPARATOR),
/* harmony export */   ot: () => (/* binding */ TAB_KEY),
/* harmony export */   uK: () => (/* binding */ U_SEPARATOR),
/* harmony export */   wt: () => (/* binding */ HTML_TAB_KEY),
/* harmony export */   zh: () => (/* binding */ B_SEPARATOR)
/* harmony export */ });
const U_SEPARATOR = '+';
const LT_SEPARATOR = '~';
const B_SEPARATOR = '**';
const I_SEPARATOR = '*';
const TAB_KEY = String.fromCharCode(8195);
const HTML_TAB_KEY = '&emsp;';

/***/ }),

/***/ "../rich_text/src/components/stories/helpers.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ markdownInitialValue)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../rich_text/src/components/constants.ts");

const markdownInitialValue = "".concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt).concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt).concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt).concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt).concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt).concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt).concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt).concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt).concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt).concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt).concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt).concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt).concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt).concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt).concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt).concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt).concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt).concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt).concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt).concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt).concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt, "**+Rich Text Editor+**\n\nThis component is relies on *[Slate third party](https://www.slatejs.org/)* which is popular and flexible, but still has a reasonable bundle size compared to alternatives.\n\n").concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt, "Input: a string in a *markdown format* (initialValue prop)\n").concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt, "Output: a string in a markdown format, along with the original *Slate* nodes (onChange callback)\n\n**").concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt, "Formatting options**\n- **Bold**\n- *Italic*\n- +Underline+\n- ~LineThrough~\n- **You** ***Can*** ***+Also+*** ***~Mix~*** **+All+** **~Formatting~** *Options* *+Together+* *~In~* +One+ ~Row~\n- Indent (adding 4 spaces to selected row start)\n- Outdent (removing 4 spaces from selected row start)\n\n\n**").concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt, "Block options**\n1. Paragraph (default)\n2. NumberedList\n3. UnorderedList\n\n\nEnjoy using it\n").concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt, "***+Raptors+***\n");

/***/ }),

/***/ "../rich_text/src/components/utils/MarkdownSlateJsonConverter.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/unified@11.0.5/node_modules/unified/lib/index.js");
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/remark-parse@11.0.0/node_modules/remark-parse/lib/index.js");
/* harmony import */ var unist_util_visit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/unist-util-visit@5.0.0/node_modules/unist-util-visit/lib/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../rich_text/src/components/utils/utils.ts");
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





let LOCATED_PARAGRAPHS = {};
let prevElement = null;
class MarkdownSlateJsonConverter {
  constructor() {
    _defineProperty(this, "markdownToSlateProcessor", void 0);
    function plugin() {
      /* eslint-disable @typescript-eslint/ban-ts-comment */
      // @ts-ignore
      this.Compiler = node => MarkdownSlateJsonConverter.markdownToSlate(node);
    }
    this.markdownToSlateProcessor = (0,unified__WEBPACK_IMPORTED_MODULE_0__/* .unified */ .l)().use(remark_parse__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A).use(plugin);
  }
  static markdownToSlate(tree) {
    const slateNodes = [];
    LOCATED_PARAGRAPHS = {};
    const pushEmptyNode = () => {
      slateNodes.push({
        type: 'paragraph',
        children: [{
          text: ''
        }]
      });
    };
    const handleEmptyNodes = node => {
      var _prevElement;
      const prevElementPositionEnd = (_prevElement = prevElement) === null || _prevElement === void 0 || (_prevElement = _prevElement.position) === null || _prevElement === void 0 ? void 0 : _prevElement.end;
      if (prevElementPositionEnd && node.position && prevElementPositionEnd.line + 1 < node.position.start.line) {
        var _prevElement2;
        const prevElementIsList = ((_prevElement2 = prevElement) === null || _prevElement2 === void 0 ? void 0 : _prevElement2.type) === 'list';
        const expectedLinesDiff = prevElementIsList ? 2 : 1;
        for (let i = 0; i < node.position.start.line - prevElementPositionEnd.line - expectedLinesDiff; i++) {
          pushEmptyNode();
        }
      }
    };
    (0,unist_util_visit__WEBPACK_IMPORTED_MODULE_2__/* .visit */ .YR)(tree, node => {
      switch (node.type) {
        case 'paragraph':
          if (!LOCATED_PARAGRAPHS[this.getNodeKey(node)]) {
            handleEmptyNodes(node);
            slateNodes.push(...MarkdownSlateJsonConverter.convertParagraphNode(node));
          }
          break;
        case 'list':
          handleEmptyNodes(node);
          slateNodes.push(MarkdownSlateJsonConverter.convertListNode(node));
          break;
        case 'thematicBreak':
          if (node.position) {
            prevElement = node;
            pushEmptyNode();
          }
          break;
        default:
          break;
      }
    });
    if (slateNodes.length === 0) {
      pushEmptyNode();
    }
    return slateNodes;
  }
  static calculateParagraphChildren(node) {
    var _node$children;
    let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let children = arguments.length > 2 ? arguments[2] : undefined;
    const addTextNode = function (child) {
      var _child$children;
      let extraProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (child.type === 'link' && (_child$children = child.children) !== null && _child$children !== void 0 && _child$children[0].value) {
        children.push(_objectSpread(_objectSpread(_objectSpread({}, props), extraProps), {}, {
          url: child.url,
          text: child.children[0].value
        }));
      } else {
        const textNodes = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .splitSlateTextNode */ .x3)(child);
        textNodes.forEach(node => {
          children.push(_objectSpread(_objectSpread(_objectSpread({}, props), extraProps), node));
        });
      }
    };
    (_node$children = node.children) === null || _node$children === void 0 || _node$children.forEach(child => {
      var _child$children2, _child$children3, _child$children4, _child$children5;
      switch (child.type) {
        case 'text':
          addTextNode(child);
          break;
        case 'link':
          addTextNode(child);
          break;
        case 'emphasis':
          const valueEmphasis = (_child$children2 = child.children) === null || _child$children2 === void 0 ? void 0 : _child$children2[0].value;
          const childrenEmphasis = (_child$children3 = child.children) === null || _child$children3 === void 0 ? void 0 : _child$children3[0].children;
          if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isUndefined)(valueEmphasis) && child.children) {
            addTextNode(child.children[0], {
              italic: true
            });
          } else if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(childrenEmphasis)) {
            this.calculateParagraphChildren(child, _objectSpread(_objectSpread({}, props), {}, {
              italic: true
            }), children);
          }
          break;
        case 'strong':
          const valueStrong = (_child$children4 = child.children) === null || _child$children4 === void 0 ? void 0 : _child$children4[0].value;
          const childrenStrong = (_child$children5 = child.children) === null || _child$children5 === void 0 ? void 0 : _child$children5[0].children;
          if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isUndefined)(valueStrong) && child.children) {
            addTextNode(child.children[0], {
              bold: true
            });
          } else if (!(0,lodash__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(childrenStrong)) {
            return this.calculateParagraphChildren(child, _objectSpread(_objectSpread({}, props), {}, {
              bold: true
            }), children);
          }
          break;
        default:
          break;
      }
    });
  }
  static convertParagraphNode(node) {
    let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const children = [];
    LOCATED_PARAGRAPHS[this.getNodeKey(node)] = true;
    prevElement = node;
    this.calculateParagraphChildren(node, props, children);
    const paragraphsChildren = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .handleTextLineBreaks */ .YA)(children);
    return paragraphsChildren.map(pChildren => ({
      type: 'paragraph',
      children: pChildren
    }));
  }
  static convertListNode(node) {
    var _node$children2;
    const children = [];
    (_node$children2 = node.children) === null || _node$children2 === void 0 || _node$children2.forEach(item => {
      var _item$children;
      const listItemChildren = [];
      (_item$children = item.children) === null || _item$children === void 0 || _item$children.forEach(child => {
        if (child.type === 'paragraph') {
          const pNodes = this.convertParagraphNode(child);
          pNodes.forEach(pNode => {
            listItemChildren.push(...pNode.children);
          });
        }
      });
      children.push({
        type: 'list-item',
        children: listItemChildren
      });
    });
    const listType = node.ordered ? 'numbered-list' : 'unordered-list';
    prevElement = node;
    return {
      type: listType,
      children
    };
  }
  convert(markdownText) {
    if (!this.markdownToSlateProcessor) {
      throw new Error('Markdown to slate processor not initialized');
    }
    return this.markdownToSlateProcessor.processSync(markdownText).result;
  }
}
_defineProperty(MarkdownSlateJsonConverter, "getNodeKey", node => {
  const {
    start: s,
    end: e
  } = node.position || {};
  if (s && e) {
    return "".concat(s.line, "_").concat(s.column, "_").concat(s.offset, "_").concat(e.line, "_").concat(e.column, "_").concat(e.offset);
  }
  return '';
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new MarkdownSlateJsonConverter());

/***/ }),

/***/ "../rich_text/src/components/utils/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tu: () => (/* binding */ handleIndentationSlateToMarkdown),
/* harmony export */   YA: () => (/* binding */ handleTextLineBreaks),
/* harmony export */   x3: () => (/* binding */ splitSlateTextNode)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../rich_text/src/components/constants.ts");
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

const handleIndentationSlateToMarkdown = text => {
  let givenText = text;
  let textResult = '';
  while (givenText.startsWith(_constants__WEBPACK_IMPORTED_MODULE_0__/* .TAB_KEY */ .ot)) {
    textResult += _constants__WEBPACK_IMPORTED_MODULE_0__/* .HTML_TAB_KEY */ .wt;
    givenText = givenText.replace(_constants__WEBPACK_IMPORTED_MODULE_0__/* .TAB_KEY */ .ot, '');
  }
  textResult += givenText;
  return textResult;
};
const splitSlateTextNode = node => {
  const nodes = [];
  let nodeText = (node === null || node === void 0 ? void 0 : node.value) || '';
  const uRegex = new RegExp('(?<=\\+)(.*?)(?=\\+)');
  const ltRegex = new RegExp("(?<=".concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .LT_SEPARATOR */ .$r, ")(.*?)(?=").concat(_constants__WEBPACK_IMPORTED_MODULE_0__/* .LT_SEPARATOR */ .$r, ")"));
  const hasTextSeparator = () => nodeText.match(uRegex) || nodeText.match(ltRegex);
  const pushTextNode = (text, field) => {
    if (text.length) {
      if (field) {
        nodes.push({
          text,
          [field]: true
        });
      } else {
        nodes.push({
          text
        });
      }
    }
  };
  const updateNodesOnMatch = (separator, matchedText, field) => {
    const textToSearch = "".concat(separator).concat(matchedText).concat(separator);
    const idx = nodeText.indexOf(textToSearch);
    const newNodeText = nodeText.substring(0, idx);
    pushTextNode(newNodeText);
    pushTextNode(matchedText, field);
    nodeText = nodeText.substring(newNodeText.length + textToSearch.length);
  };
  while (hasTextSeparator()) {
    const matchUnderline = nodeText.match(uRegex);
    const matchLineThrough = nodeText.match(ltRegex);
    if (matchUnderline) {
      updateNodesOnMatch(_constants__WEBPACK_IMPORTED_MODULE_0__/* .U_SEPARATOR */ .uK, matchUnderline[0], 'underline');
    } else if (matchLineThrough) {
      updateNodesOnMatch(_constants__WEBPACK_IMPORTED_MODULE_0__/* .LT_SEPARATOR */ .$r, matchLineThrough[0], 'lineThrough');
    }
  }
  pushTextNode(nodeText);
  return nodes;
};
const handleTextLineBreaks = children => {
  const result = [];
  let currentChildrenArray = [];
  children.forEach(child => {
    const texts = child.text.match(/[^\r\n]+/g);
    if (texts) {
      if (texts.length === 1 && texts[0] === child.text) {
        currentChildrenArray.push(child);
      } else {
        let sliceIdx = 0;
        if (texts.length > 1) {
          currentChildrenArray.push(_objectSpread(_objectSpread({}, child), {}, {
            text: texts[0]
          }));
          sliceIdx = 1;
        }
        if (currentChildrenArray.length) {
          result.push([...currentChildrenArray]);
        }
        texts.slice(sliceIdx, texts.length - 1).forEach(text => {
          result.push([_objectSpread(_objectSpread({}, child), {}, {
            text
          })]);
        });
        currentChildrenArray = [_objectSpread(_objectSpread({}, child), {}, {
          text: texts[texts.length - 1]
        })];
      }
    } else if (child.text === '\n') {
      if (currentChildrenArray.length) {
        result.push([...currentChildrenArray]);
      }
      result.push([_objectSpread(_objectSpread({}, child), {}, {
        text: ''
      })]);
      currentChildrenArray = [];
    } else {
      currentChildrenArray.push(child);
    }
  });
  if (currentChildrenArray.length) {
    result.push([...currentChildrenArray]);
  }
  return result;
};

/***/ }),

/***/ "../typography/dist/esm/src/components/Link/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
const _excluded = ["color", "decoration", "outlineColor", "outlineOffset", "outlineWidth", "outlineStyle", "fontWeight", "children", "href", "target", "disabled", "tabIndex", "pointerEvents", "dataTrackTag"];
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


const Link = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      color = {
        default: 'linkPrimary'
      },
      decoration = {
        default: 'underline'
      },
      outlineColor = {
        focusVisible: 'grey_1200'
      },
      outlineOffset = {
        focusVisible: 'sm'
      },
      outlineWidth = {
        focusVisible: 'md'
      },
      outlineStyle = {
        focusVisible: 'solid'
      },
      fontWeight,
      children,
      href,
      target = '_self',
      disabled,
      tabIndex,
      pointerEvents,
      dataTrackTag = 'link'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread(_objectSpread({}, restProps), {}, {
    as: "a",
    decoration: disabled ? 'none' : decoration,
    color: disabled ? 'grey_800' : color,
    pointerEvents: disabled ? 'none' : pointerEvents,
    tabIndex: disabled ? -1 : tabIndex,
    outlineOffset: outlineOffset,
    outlineWidth: outlineWidth,
    outlineColor: outlineColor,
    target: target,
    href: href,
    ref: ref,
    fontWeight: fontWeight,
    outlineStyle: outlineStyle,
    dataTrackTag: dataTrackTag
  }), children);
});
Link.displayName = 'Link';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);
;
Link.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Link"
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

/***/ })

}]);
//# sourceMappingURL=498.6d7308c3.iframe.bundle.js.map