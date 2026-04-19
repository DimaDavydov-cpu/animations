(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[1032],{

/***/ "../../node_modules/.pnpm/@storybook+instrumenter@7.6.20/node_modules/@storybook/instrumenter/dist sync recursive":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "../../node_modules/.pnpm/@storybook+instrumenter@7.6.20/node_modules/@storybook/instrumenter/dist sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist sync recursive":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "../data_display/dist/esm/src/components/Tag/TagContext/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ TagContext),
/* harmony export */   v: () => (/* binding */ useTagContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const TagContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useTagContext = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TagContext);
  return context;
};

/***/ }),

/***/ "../data_display/dist/esm/src/components/Tag/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Tag)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
;// ../data_display/dist/esm/src/components/Tag/utils.js
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
const getElement = (href, hasClickEvent, clickableArea) => {
  if (href) {
    return {
      element: 'a',
      role: 'link'
    };
  }
  if (hasClickEvent && clickableArea === 'tag') {
    return {
      element: 'button',
      role: 'button'
    };
  }
  return _objectSpread({
    element: 'div'
  }, hasClickEvent && clickableArea === 'multi' ? {
    role: 'button',
    tabIndex: 0
  } : {});
};
;// ../data_display/dist/esm/src/components/data_display/dist/esm/src/components/Tag/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../data_display/dist/esm/src/components/Tag/styles.ve.css.js.vanilla.css","source":"Ll8xeWZreW94MCB7CiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7CiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7CiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDsKfQ=="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../data_display/dist/esm/src/components/Tag/styles.ve.css.js

var conversational = '_1yfkyox0';
;// ../data_display/dist/esm/src/components/Tag/styles.js
const _excluded = ["paddingRightWithCloseIcon"];
function styles_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function styles_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? styles_ownKeys(Object(t), !0).forEach(function (r) {
      styles_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : styles_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function styles_defineProperty(e, r, t) {
  return (r = styles_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function styles_toPropertyKey(t) {
  var i = styles_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function styles_toPrimitive(t, r) {
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

const PROPS_BY_SIZE = {
  xs: {
    height: 24,
    fontSize: 'b_xs',
    lineHeight: 'b_xs',
    paddingX: '3',
    paddingY: '1',
    gap: '1',
    paddingRightWithCloseIcon: '0'
  },
  sm: {
    height: 32,
    fontSize: 'b_sm',
    lineHeight: 'b_sm',
    paddingX: '3',
    paddingY: '1',
    gap: '1',
    paddingRightWithCloseIcon: '1'
  },
  md: {
    height: 36,
    fontSize: 'b_md',
    lineHeight: 'b_md',
    paddingX: '4',
    paddingY: '1.5',
    gap: '1.5',
    paddingRightWithCloseIcon: '1.5'
  }
};
const getTagStyles = _ref => {
  let {
    size,
    isInteractive,
    variant,
    hasCloseIcon,
    shape,
    isDark
  } = _ref;
  const _PROPS_BY_SIZE$size = PROPS_BY_SIZE[size],
    {
      paddingRightWithCloseIcon
    } = _PROPS_BY_SIZE$size,
    rest = _objectWithoutProperties(_PROPS_BY_SIZE$size, _excluded);
  const defaultOutlineBackground = isDark ? 'white_10' : 'white';
  const defaultFilledBackground = isDark ? 'white_10' : 'grey_300';
  return styles_objectSpread(styles_objectSpread(styles_objectSpread(styles_objectSpread(styles_objectSpread(styles_objectSpread({}, rest), {}, {
    color: isDark ? 'grey_400' : 'grey_1200',
    outlineColor: {
      focusVisible: isDark ? 'grey_400' : 'grey_1200'
    },
    outlineStyle: {
      focusVisible: 'solid'
    },
    outlineWidth: {
      focusVisible: 'md'
    },
    outlineOffset: {
      focusVisible: 'sm'
    },
    decoration: isInteractive ? {
      hover: 'none'
    } : undefined,
    boxSizing: 'borderBox'
  }, shape === 'default' ? {
    borderRadius: 'circle'
  } : {
    className: conversational
  }), {}, {
    display: 'flex',
    alignItems: 'center'
  }, hasCloseIcon && {
    paddingRight: paddingRightWithCloseIcon
  }), {}, {
    width: 'fit-content',
    fontWeight: 'normal',
    userSelect: 'none'
  }, variant === 'filled' && {
    backgroundColor: isInteractive ? {
      default: defaultFilledBackground,
      hover: isDark ? 'white_20' : 'grey_400',
      active: isDark ? 'white_20' : 'grey_500'
    } : defaultFilledBackground
  }), variant === 'outline' && {
    borderWidth: 'sm',
    borderColor: 'border',
    borderStyle: 'solid',
    backgroundColor: isInteractive ? {
      default: defaultOutlineBackground,
      hover: isDark ? 'white_20' : 'grey_200',
      active: isDark ? 'white_20' : 'grey_500'
    } : defaultOutlineBackground
  }), {}, {
    flexShrink: 0,
    maxWidth: '100%'
  });
};
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/Tag/TagContext/index.js
var TagContext = __webpack_require__("../data_display/dist/esm/src/components/Tag/TagContext/index.js");
;// ../data_display/dist/esm/src/components/Tag/index.js
function Tag_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Tag_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Tag_ownKeys(Object(t), !0).forEach(function (r) {
      Tag_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Tag_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Tag_defineProperty(e, r, t) {
  return (r = Tag_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Tag_toPropertyKey(t) {
  var i = Tag_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function Tag_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}







const Tag = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
    size = 'md',
    variant = 'filled',
    onClick,
    href,
    children,
    target,
    ariaLabel,
    hideOnClick,
    onKeyDown,
    tabIndex,
    maxWidth,
    clickableArea = 'tag',
    shape = 'default',
    goExperimental = false,
    theme = 'light',
    dataTrackTag = 'tag',
    dataTrackValue
  } = _ref;
  const [isOpen, setIsOpen] = (0,react.useState)(true);
  const hasClickEvent = Boolean(onClick || hideOnClick);
  const hasCloseIcon = !!(0,findChildByType/* findChildByType */.B)(children, 'TagCloseIcon');
  const isDark = goExperimental || theme === 'dark';
  const onTagClick = e => {
    if (hideOnClick && clickableArea === 'tag') {
      setIsOpen(false);
    }
    onClick === null || onClick === void 0 || onClick(e);
  };
  const {
    element,
    role,
    tabIndex: elementTabIndex
  } = getElement(href, hasClickEvent, clickableArea);
  const isInteractive = Boolean(role);
  const props = {
    onClick: hasClickEvent ? onTagClick : undefined,
    href,
    role,
    target,
    'aria-label': ariaLabel,
    onKeyDown,
    tabIndex: !(0,lodash.isNil)(elementTabIndex) ? elementTabIndex : tabIndex
  };
  if (!isOpen) {
    return null;
  }
  return /*#__PURE__*/react.createElement(TagContext/* TagContext */.Q.Provider, {
    value: {
      setIsOpen,
      clickableArea,
      variant,
      hideOnClick,
      size,
      isDark
    }
  }, /*#__PURE__*/react.createElement(Box/* default */.A, Tag_objectSpread(Tag_objectSpread(Tag_objectSpread({}, getTagStyles({
    size,
    isInteractive,
    variant,
    hasCloseIcon,
    shape,
    isDark
  })), {}, {
    as: element,
    ref: ref,
    maxWidth: maxWidth
  }, props), {}, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }), children));
});
Tag.displayName = 'Tag';
/* harmony default export */ const components_Tag = (Tag);
;
Tag.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Tag"
};

/***/ }),

/***/ "../forms/src/components/Combobox/ComboboxOption/ComboboxOptionLabel/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
/* harmony import */ var _fiverr_private_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../typography/dist/esm/src/components/HighlightText/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../forms/src/components/Combobox/constants.ts");
/* harmony import */ var _hooks_useComboboxContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../forms/src/components/Combobox/hooks/useComboboxContext/index.ts");




const MIN_HEIGHT = 48;
const ComboboxOptionLabel = _ref => {
  let {
    children,
    isOptionCreate
  } = _ref;
  const {
    searchValue,
    theme
  } = (0,_hooks_useComboboxContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)();
  const textRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [isMulti, setIsMulti] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const checkHeight = () => {
      if (textRef.current) {
        const offsetHeight = textRef.current.offsetHeight;
        setIsMulti(offsetHeight > MIN_HEIGHT);
      }
    };
    checkHeight();
  }, [children]);
  return isOptionCreate ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    ref: textRef,
    fontWeight: "bold",
    marginLeft: isMulti ? '2' : '0',
    wordBreak: "breakAll"
  }, children) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_typography__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    as: "span",
    query: searchValue,
    color: theme === 'dark' ? 'white' : undefined
  }, children);
};
ComboboxOptionLabel.displayName = _constants__WEBPACK_IMPORTED_MODULE_3__/* .OPTION_LABEL_ID */ .l;
ComboboxOptionLabel.id = _constants__WEBPACK_IMPORTED_MODULE_3__/* .OPTION_LABEL_ID */ .l;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComboboxOptionLabel);
try {
    // @ts-ignore
    ComboboxOptionLabel.displayName = "ComboboxOptionLabel";
    // @ts-ignore
    ComboboxOptionLabel.__docgenInfo = { "description": "", "displayName": "ComboboxOptionLabel", "props": { "isOptionCreate": { "defaultValue": null, "description": "@ignore", "name": "isOptionCreate", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Combobox/ComboboxOption/ComboboxOptionLabel/index.tsx#ComboboxOptionLabel"] = { docgenInfo: ComboboxOptionLabel.__docgenInfo, name: "ComboboxOptionLabel", path: "../forms/src/components/Combobox/ComboboxOption/ComboboxOptionLabel/index.tsx#ComboboxOptionLabel" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../forms/src/components/Combobox/ComboboxOption/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../dropdown/dist/esm/src/components/DropdownMenu/MenuItem/index.js");
/* harmony import */ var _fiverr_private_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../inputs/dist/esm/src/components/shared/useInputTrackValue/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../forms/src/components/Combobox/utils.ts");
/* harmony import */ var _hooks_useComboboxContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../forms/src/components/Combobox/hooks/useComboboxContext/index.ts");





const ComboboxOption = _ref => {
  let {
    children,
    value,
    disabled,
    onClick,
    dataTrackTag = 'combobox_option',
    dataTrackValue
  } = _ref;
  const trackValue = (0,_fiverr_private_inputs__WEBPACK_IMPORTED_MODULE_2__/* .useInputTrackValue */ .y)({
    dataTrackValue,
    value
  });
  const {
    setSearchValue,
    inputRef,
    isInitialMultiSelect,
    setCurrentFocusedElement,
    shouldFilterItems
  } = (0,_hooks_useComboboxContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)();
  const handleClick = e => {
    if (!isInitialMultiSelect.current) {
      setSearchValue((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .getOptionText */ .$j)(children));
      shouldFilterItems.current = true;
    } else {
      setSearchValue('');
    }
    setCurrentFocusedElement(inputRef.current);
    onClick === null || onClick === void 0 || onClick(e);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_dropdown__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: trackValue,
    value: value,
    disabled: disabled,
    onClick: handleClick,
    selectable: true
  }, children);
};
ComboboxOption.displayName = 'ComboboxOption';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComboboxOption);
try {
    // @ts-ignore
    ComboboxOption.displayName = "ComboboxOption";
    // @ts-ignore
    ComboboxOption.__docgenInfo = { "description": "", "displayName": "ComboboxOption", "props": { "children": { "defaultValue": null, "description": "Any React node or string that can be rendered.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "dataTrackTag": { "defaultValue": { value: "combobox_option" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "disabled": { "defaultValue": null, "description": "Whether this menu item is disabled or not.", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "value": { "defaultValue": null, "description": "An item/option selectable value.", "name": "value", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }, { "value": "number" }] } }, "rel": { "defaultValue": null, "description": "Rel for navigation link.", "name": "rel", "required": false, "type": { "name": "string" } }, "onClick": { "defaultValue": null, "description": "On menu item click event handler", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLElement>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Combobox/ComboboxOption/index.tsx#ComboboxOption"] = { docgenInfo: ComboboxOption.__docgenInfo, name: "ComboboxOption", path: "../forms/src/components/Combobox/ComboboxOption/index.tsx#ComboboxOption" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../forms/src/components/Combobox/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ MENU_GROUP_ID),
/* harmony export */   l: () => (/* binding */ OPTION_LABEL_ID)
/* harmony export */ });
const OPTION_LABEL_ID = 'OptionLabel';
const MENU_GROUP_ID = 'MenuGroup';

/***/ }),

/***/ "../forms/src/components/Combobox/hooks/useComboboxContext/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   j: () => (/* binding */ ComboboxContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const ComboboxContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useComboboxContext = () => {
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ComboboxContext);
  if (!context) {
    throw new Error('useComboboxContext must be used within a ComboboxProvider');
  }
  return context;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useComboboxContext);

/***/ }),

/***/ "../forms/src/components/Combobox/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Combobox)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
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
// EXTERNAL MODULE: ../forms/src/components/Combobox/hooks/useComboboxContext/index.ts
var useComboboxContext = __webpack_require__("../forms/src/components/Combobox/hooks/useComboboxContext/index.ts");
// EXTERNAL MODULE: ../forms/src/components/shared/style.ts
var style = __webpack_require__("../forms/src/components/shared/style.ts");
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/Dropdown/useDropdownContext/index.js
var useDropdownContext = __webpack_require__("../dropdown/dist/esm/src/components/Dropdown/useDropdownContext/index.js");
;// ../forms/src/components/Combobox/Trigger/utils/removeSelectedTag.ts
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
;// ../forms/src/components/Combobox/hooks/useKeyboardNavigation/index.ts




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
  } = (0,useComboboxContext/* default */.A)();
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
;// ../forms/src/components/Combobox/hooks/useClearButton/index.ts
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
  } = (0,useComboboxContext/* default */.A)();
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
// EXTERNAL MODULE: ../forms/src/components/Combobox/utils.ts
var utils = __webpack_require__("../forms/src/components/Combobox/utils.ts");
;// ../forms/src/components/Combobox/hooks/useFocusHandlers/index.ts





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
  } = (0,useComboboxContext/* default */.A)();
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
      setSearchValue((0,utils/* getSelectedItemByText */.L_)(filteredMenuGroups, innerValue));
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
;// ../forms/src/components/Combobox/Trigger/ComboboxTag/index.tsx







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
  } = (0,useComboboxContext/* default */.A)();
  const text = (0,utils/* getOptionText */.$j)(children);
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
try {
    // @ts-ignore
    ComboboxTag.displayName = "ComboboxTag";
    // @ts-ignore
    ComboboxTag.__docgenInfo = { "description": "", "displayName": "ComboboxTag", "props": { "groupName": { "defaultValue": null, "description": "", "name": "groupName", "required": true, "type": { "name": "string" } }, "children": { "defaultValue": null, "description": "Any React node or string that can be rendered.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "selectable": { "defaultValue": null, "description": "Whether or not the whole group is selectable.\nit overrides menu and menu group selectable props.", "name": "selectable", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "value": { "defaultValue": null, "description": "An item/option selectable value.", "name": "value", "required": false, "type": { "name": "enum", "value": [{ "value": "string" }, { "value": "number" }] } }, "onClick": { "defaultValue": null, "description": "On menu item click event handler", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLElement>" } }, "disabled": { "defaultValue": null, "description": "Whether this menu item is disabled or not.", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "href": { "defaultValue": null, "description": "Turn menu item into a navigation link.", "name": "href", "required": false, "type": { "name": "string" } }, "target": { "defaultValue": null, "description": "Target for navigation link.", "name": "target", "required": false, "type": { "name": "enum", "value": [{ "value": "\"_self\"" }, { "value": "\"_blank\"" }, { "value": "\"_parent\"" }, { "value": "\"_top\"" }] } }, "rel": { "defaultValue": null, "description": "Rel for navigation link.", "name": "rel", "required": false, "type": { "name": "string" } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Combobox/Trigger/ComboboxTag/index.tsx#ComboboxTag"] = { docgenInfo: ComboboxTag.__docgenInfo, name: "ComboboxTag", path: "../forms/src/components/Combobox/Trigger/ComboboxTag/index.tsx#ComboboxTag" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../button/dist/esm/src/components/TimesButton/index.js
var TimesButton = __webpack_require__("../button/dist/esm/src/components/TimesButton/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/ChevronButton/index.js + 1 modules
var ChevronButton = __webpack_require__("../button/dist/esm/src/components/ChevronButton/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Center/index.js
var Center = __webpack_require__("../layout_components/dist/esm/src/components/Center/index.js");
;// ../forms/src/components/Combobox/Trigger/ControlButtons/index.tsx






const ControlButtons = _ref => {
  let {
    showClearButton,
    disabled
  } = _ref;
  const {
    setSearchValue,
    setInnerValue,
    theme
  } = (0,useComboboxContext/* default */.A)();
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
try {
    // @ts-ignore
    ControlButtons.displayName = "ControlButtons";
    // @ts-ignore
    ControlButtons.__docgenInfo = { "description": "", "displayName": "ControlButtons", "props": { "showClearButton": { "defaultValue": null, "description": "", "name": "showClearButton", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Combobox/Trigger/ControlButtons/index.tsx#ControlButtons"] = { docgenInfo: ControlButtons.__docgenInfo, name: "ControlButtons", path: "../forms/src/components/Combobox/Trigger/ControlButtons/index.tsx#ControlButtons" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../forms/src/components/Combobox/forms/src/components/Combobox/Trigger/styles.ve.css.ts.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../forms/src/components/Combobox/Trigger/styles.ve.css.ts.vanilla.css","source":"Ll83dHM3ZncwIHsKICBib3JkZXI6IG5vbmU7CiAgYm94LXNoYWRvdzogbm9uZTsKfQouXzd0czdmdzI6Zm9jdXMtd2l0aGluIHsKICBib3JkZXItY29sb3I6IHZhcigtLV83dHM3ZncxKTsKfQ=="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../forms/src/components/Combobox/Trigger/styles.ve.css.ts

var borderFocusWithinClass = '_7ts7fw2';
var borderFocusWithinVar = 'var(--_7ts7fw1)';
var inputStyle = '_7ts7fw0';
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/semanticTokens.js
var semanticTokens = __webpack_require__("../theme/dist/esm/src/shared/themeVars/semanticTokens.js");
;// ../forms/src/components/Combobox/Trigger/style.ts

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
;// ../forms/src/components/Combobox/Trigger/ControlButtons/constants.ts
const CONTROL_BUTTONS_WIDTH = 54;
;// ../forms/src/components/Combobox/Trigger/utils/getInputDefaultValue.ts



const getSelectedItemByValue = (menuItems, groupSelectedValues) => {
  let selectedItemProps = null;
  if (!groupSelectedValues) {
    return selectedItemProps;
  }
  react.Children.forEach(menuItems, child => {
    var _props$value;
    if (((_props$value = child.props.value) === null || _props$value === void 0 ? void 0 : _props$value.toString()) === groupSelectedValues) {
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
      return (0,utils/* getOptionText */.$j)(selectedItem.children);
    }
  }
};
;// ../forms/src/components/Combobox/Trigger/index.tsx
const _excluded = ["placeholder", "isError", "isSuccess", "disabled", "defaultValue", "hideClearButton", "onBlur", "onFocus", "theme", "dataTrackTag", "dataTrackValue"];
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
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
  } = (0,useComboboxContext/* default */.A)();
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
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, _extends({
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
  }), isDark ? {
    borderColor: 'white_20',
    backgroundColor: 'white_10'
  } : undefined, {
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
try {
    // @ts-ignore
    Trigger.displayName = "Trigger";
    // @ts-ignore
    Trigger.__docgenInfo = { "description": "", "displayName": "Trigger", "props": { "placeholder": { "defaultValue": null, "description": "", "name": "placeholder", "required": false, "type": { "name": "string" } }, "isOpen": { "defaultValue": null, "description": "", "name": "isOpen", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "goExperimental": { "defaultValue": null, "description": "@deprecated This is a temporary prop and should be deprecated soon, please use theme='dark' instead\n@ignore", "name": "goExperimental", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "theme": { "defaultValue": null, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "disabled": { "defaultValue": null, "description": "Whether or not the combobox is disabled.\nA disabled combobox is not clickable, or hoverable.", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "value": { "defaultValue": null, "description": "Controlled values.", "name": "value", "required": false, "type": { "name": "Values" } }, "defaultValue": { "defaultValue": null, "description": "The component's initial values.", "name": "defaultValue", "required": false, "type": { "name": "Values" } }, "onFocus": { "defaultValue": null, "description": "", "name": "onFocus", "required": false, "type": { "name": "enum", "value": [{ "value": "FocusEventHandler<HTMLDivElement>" }, { "value": "(event: { target: EventTarget; }) => void" }] } }, "onBlur": { "defaultValue": null, "description": "", "name": "onBlur", "required": false, "type": { "name": "FocusEventHandler<HTMLDivElement>" } }, "onOpenChanged": { "defaultValue": null, "description": "", "name": "onOpenChanged", "required": false, "type": { "name": "(value: boolean) => void" } }, "disableFlip": { "defaultValue": null, "description": "", "name": "disableFlip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "appendToBody": { "defaultValue": null, "description": "", "name": "appendToBody", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } }, "isError": { "defaultValue": null, "description": "Whether or not the component is in an error status.\nAn error border is displayed.", "name": "isError", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isSuccess": { "defaultValue": null, "description": "Whether or not the component is in a successful status.\nA success border is displayed.", "name": "isSuccess", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "hideClearButton": { "defaultValue": null, "description": "Whether or not hide clear button.", "name": "hideClearButton", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "onInputValueChange": { "defaultValue": null, "description": "", "name": "onInputValueChange", "required": false, "type": { "name": "(value: string) => void" } }, "popoverPosition": { "defaultValue": null, "description": "", "name": "popoverPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top-start\"" }, { "value": "\"bottom-start\"" }] } }, "inputValue": { "defaultValue": null, "description": "", "name": "inputValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Combobox/Trigger/index.tsx#Trigger"] = { docgenInfo: Trigger.__docgenInfo, name: "Trigger", path: "../forms/src/components/Combobox/Trigger/index.tsx#Trigger" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/Dropdown/utils.js
var Dropdown_utils = __webpack_require__("../dropdown/dist/esm/src/components/Dropdown/utils.js");
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/DropdownMenu/index.js
var DropdownMenu = __webpack_require__("../dropdown/dist/esm/src/components/DropdownMenu/index.js");
;// ../forms/src/components/Combobox/ComboboxOptions/index.tsx






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
  } = (0,useComboboxContext/* default */.A)();
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
try {
    // @ts-ignore
    ComboboxOptions.displayName = "ComboboxOptions";
    // @ts-ignore
    ComboboxOptions.__docgenInfo = { "description": "", "displayName": "ComboboxOptions", "props": { "copies": { "defaultValue": null, "description": "", "name": "copies", "required": true, "type": { "name": "{ noOptionsText: () => string; }" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Combobox/ComboboxOptions/index.tsx#ComboboxOptions"] = { docgenInfo: ComboboxOptions.__docgenInfo, name: "ComboboxOptions", path: "../forms/src/components/Combobox/ComboboxOptions/index.tsx#ComboboxOptions" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/filterChildrenByType/index.js
var filterChildrenByType = __webpack_require__("../ui_utils/dist/esm/src/utils/filterChildrenByType/index.js");
// EXTERNAL MODULE: ../forms/src/components/Combobox/constants.ts
var constants = __webpack_require__("../forms/src/components/Combobox/constants.ts");
;// ../forms/src/components/Combobox/hooks/useComboboxState/utils.ts
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
;// ../forms/src/components/Combobox/hooks/useComboboxState/index.tsx






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
  const filteredMenuGroups = (0,react.useMemo)(() => (0,utils/* getFilteredChildren */.hL)(innerValue, children, effectiveSearchValue, shouldFilterItems), [children, effectiveSearchValue, innerValue]);
  const updatedSelectedItems = (0,react.useMemo)(() => getUpdatedSelectedItems(prevSelectedValues, innerValue, children), [children, innerValue]);
  const hasMultipleGroups = (0,react.useMemo)(() => (0,filterChildrenByType/* filterChildrenByType */.X)(children, constants/* MENU_GROUP_ID */.O).length > 1, [children]);
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
try {
    // @ts-ignore
    useComboboxState.displayName = "useComboboxState";
    // @ts-ignore
    useComboboxState.__docgenInfo = { "description": "", "displayName": "useComboboxState", "props": { "copies": { "defaultValue": null, "description": "", "name": "copies", "required": false, "type": { "name": "{ noOptionsText: () => string; }" } }, "placeholder": { "defaultValue": null, "description": "", "name": "placeholder", "required": false, "type": { "name": "string" } }, "isSuccess": { "defaultValue": null, "description": "Whether or not the component is in a successful status.\nA success border is displayed.", "name": "isSuccess", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isError": { "defaultValue": null, "description": "Whether or not the component is in an error status.\nAn error border is displayed.", "name": "isError", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disabled": { "defaultValue": null, "description": "Whether or not the combobox is disabled.\nA disabled combobox is not clickable, or hoverable.", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "hideClearButton": { "defaultValue": null, "description": "Whether or not hide clear button.", "name": "hideClearButton", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "onChange": { "defaultValue": null, "description": "A callback function to be executed when the component's value changes.", "name": "onChange", "required": false, "type": { "name": "(values: Values) => void" } }, "onBlur": { "defaultValue": null, "description": "", "name": "onBlur", "required": false, "type": { "name": "FocusEventHandler<HTMLDivElement>" } }, "onFocus": { "defaultValue": null, "description": "", "name": "onFocus", "required": false, "type": { "name": "enum", "value": [{ "value": "FocusEventHandler<HTMLDivElement>" }, { "value": "(event: { target: EventTarget; }) => void" }] } }, "value": { "defaultValue": null, "description": "Controlled values.", "name": "value", "required": false, "type": { "name": "Values" } }, "defaultValue": { "defaultValue": { value: "{}" }, "description": "The component's initial values.", "name": "defaultValue", "required": false, "type": { "name": "Values" } }, "isOpen": { "defaultValue": null, "description": "", "name": "isOpen", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "onOpenChanged": { "defaultValue": null, "description": "", "name": "onOpenChanged", "required": false, "type": { "name": "(value: boolean) => void" } }, "onInputValueChange": { "defaultValue": null, "description": "", "name": "onInputValueChange", "required": false, "type": { "name": "(value: string) => void" } }, "inputValue": { "defaultValue": null, "description": "", "name": "inputValue", "required": false, "type": { "name": "string" } }, "appendToBody": { "defaultValue": null, "description": "", "name": "appendToBody", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disableFlip": { "defaultValue": null, "description": "", "name": "disableFlip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "popoverPosition": { "defaultValue": null, "description": "", "name": "popoverPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top-start\"" }, { "value": "\"bottom-start\"" }] } }, "goExperimental": { "defaultValue": null, "description": "@deprecated This is a temporary prop and should be deprecated soon, please use theme='dark' instead\n@ignore", "name": "goExperimental", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "theme": { "defaultValue": null, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Combobox/hooks/useComboboxState/index.tsx#useComboboxState"] = { docgenInfo: useComboboxState.__docgenInfo, name: "useComboboxState", path: "../forms/src/components/Combobox/hooks/useComboboxState/index.tsx#useComboboxState" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../forms/src/components/Combobox/index.tsx
const Combobox_excluded = ["children", "copies", "placeholder", "isError", "isSuccess", "disabled", "value", "onChange", "defaultValue", "hideClearButton", "onInputValueChange", "isOpen", "onOpenChanged", "appendToBody", "popoverPosition", "disableFlip", "inputValue", "goExperimental", "theme", "dataTrackTag", "dataTrackValue"];
function Combobox_extends() {
  return Combobox_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Combobox_extends.apply(null, arguments);
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
  return /*#__PURE__*/react.createElement(useComboboxContext/* ComboboxContext */.j.Provider, {
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
  }, /*#__PURE__*/react.createElement(Combobox_Trigger, Combobox_extends({
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
try {
    // @ts-ignore
    Combobox.displayName = "Combobox";
    // @ts-ignore
    Combobox.__docgenInfo = { "description": "", "displayName": "Combobox", "props": { "copies": { "defaultValue": { value: "{\n        noOptionsText: () => translate('forms.combobox.noOptions'),\n      }" }, "description": "", "name": "copies", "required": false, "type": { "name": "{ noOptionsText: () => string; }" } }, "placeholder": { "defaultValue": null, "description": "", "name": "placeholder", "required": false, "type": { "name": "string" } }, "isSuccess": { "defaultValue": null, "description": "Whether or not the component is in a successful status.\nA success border is displayed.", "name": "isSuccess", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isError": { "defaultValue": null, "description": "Whether or not the component is in an error status.\nAn error border is displayed.", "name": "isError", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disabled": { "defaultValue": null, "description": "Whether or not the combobox is disabled.\nA disabled combobox is not clickable, or hoverable.", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "hideClearButton": { "defaultValue": { value: "false" }, "description": "Whether or not hide clear button.", "name": "hideClearButton", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "onChange": { "defaultValue": null, "description": "A callback function to be executed when the component's value changes.", "name": "onChange", "required": false, "type": { "name": "(values: Values) => void" } }, "onBlur": { "defaultValue": null, "description": "", "name": "onBlur", "required": false, "type": { "name": "FocusEventHandler<HTMLDivElement>" } }, "onFocus": { "defaultValue": null, "description": "", "name": "onFocus", "required": false, "type": { "name": "enum", "value": [{ "value": "FocusEventHandler<HTMLDivElement>" }, { "value": "(event: { target: EventTarget; }) => void" }] } }, "value": { "defaultValue": null, "description": "Controlled values.", "name": "value", "required": false, "type": { "name": "Values" } }, "defaultValue": { "defaultValue": null, "description": "The component's initial values.", "name": "defaultValue", "required": false, "type": { "name": "Values" } }, "isOpen": { "defaultValue": null, "description": "", "name": "isOpen", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "onOpenChanged": { "defaultValue": null, "description": "", "name": "onOpenChanged", "required": false, "type": { "name": "(value: boolean) => void" } }, "onInputValueChange": { "defaultValue": null, "description": "", "name": "onInputValueChange", "required": false, "type": { "name": "(value: string) => void" } }, "inputValue": { "defaultValue": null, "description": "", "name": "inputValue", "required": false, "type": { "name": "string" } }, "appendToBody": { "defaultValue": null, "description": "", "name": "appendToBody", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disableFlip": { "defaultValue": null, "description": "", "name": "disableFlip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "popoverPosition": { "defaultValue": null, "description": "", "name": "popoverPosition", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top-start\"" }, { "value": "\"bottom-start\"" }] } }, "goExperimental": { "defaultValue": { value: "false" }, "description": "@deprecated This is a temporary prop and should be deprecated soon, please use theme='dark' instead\n@ignore", "name": "goExperimental", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "theme": { "defaultValue": { value: "light" }, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "visibility": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "visibility", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"visible\"" }, { "value": "\"collapse\"" }] } }, "position": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fixed\"" }, { "value": "\"static\"" }, { "value": "\"relative\"" }, { "value": "\"absolute\"" }, { "value": "\"sticky\"" }] } }, "overflow": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflow", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowX": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "overflowY": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "overflowY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hidden\"" }, { "value": "\"auto\"" }, { "value": "\"visible\"" }, { "value": "\"scroll\"" }, { "value": "\"clip\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "hidden": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "hidden", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "top": { "defaultValue": null, "description": "", "name": "top", "required": false, "type": { "name": "CSSProperty" } }, "bottom": { "defaultValue": null, "description": "", "name": "bottom", "required": false, "type": { "name": "CSSProperty" } }, "right": { "defaultValue": null, "description": "", "name": "right", "required": false, "type": { "name": "CSSProperty" } }, "left": { "defaultValue": null, "description": "", "name": "left", "required": false, "type": { "name": "CSSProperty" } }, "order": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "order", "required": false, "type": { "name": "CSSProperty" } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } }, "justifySelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifySelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "alignSelf": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "alignSelf", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } }, "flexShrink": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexShrink", "required": false, "type": { "name": "CSSProperty" } }, "flexGrow": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexGrow", "required": false, "type": { "name": "CSSProperty" } }, "flexBasis": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flexBasis", "required": false, "type": { "name": "CSSProperty" } }, "dataTrackTag": { "defaultValue": { value: "combobox" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../forms/src/components/Combobox/index.tsx#Combobox"] = { docgenInfo: Combobox.__docgenInfo, name: "Combobox", path: "../forms/src/components/Combobox/index.tsx#Combobox" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../forms/src/components/Combobox/stories/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C0: () => (/* binding */ keyboardEvent),
/* harmony export */   IC: () => (/* binding */ getElements),
/* harmony export */   SP: () => (/* binding */ selectItemByKeyboard),
/* harmony export */   XV: () => (/* binding */ selectItemByClick),
/* harmony export */   Xr: () => (/* binding */ countries),
/* harmony export */   jp: () => (/* binding */ clickElement),
/* harmony export */   kp: () => (/* binding */ openDropdown)
/* harmony export */ });
/* harmony import */ var _storybook_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs");
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

const clickElement = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function (element) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return function* () {
      yield _storybook_test__WEBPACK_IMPORTED_MODULE_0__/* .userEvent */ .Q4.click(element, options);
    }();
  });
  return function clickElement(_x) {
    return _ref.apply(this, arguments);
  };
}();
const keyboardEvent = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function (eventName) {
    let times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return function* () {
      const promisesToAwait = [];
      for (let i = 0; i < times; i++) {
        promisesToAwait.push(yield _storybook_test__WEBPACK_IMPORTED_MODULE_0__/* .userEvent */ .Q4.keyboard(eventName, options));
      }
      yield Promise.all(promisesToAwait);
    }();
  });
  return function keyboardEvent(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
const selectItemByKeyboard = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function (eventName) {
    let navigateTimes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    let selectTimes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    return function* () {
      for (let i = 0; i < selectTimes; i++) {
        yield keyboardEvent(eventName, navigateTimes);
        yield keyboardEvent('[Enter]');
      }
    }();
  });
  return function selectItemByKeyboard(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
const openDropdown = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (trigger) {
    yield clickElement(trigger, {
      delay: 400
    });
  });
  return function openDropdown(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
const selectItemByClick = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (element) {
    yield clickElement(element);
  });
  return function selectItemByClick(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
const getElements = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(function* (canvasElement) {
    var _trigger$querySelecto;
    const canvas = (0,_storybook_test__WEBPACK_IMPORTED_MODULE_0__/* .within */ .ux)(canvasElement);
    const trigger = yield canvas.findByRole('combobox');
    const clearButton = (_trigger$querySelecto = trigger.querySelector) === null || _trigger$querySelecto === void 0 ? void 0 : _trigger$querySelecto.call(trigger, '[aria-label="Clear"]');
    const items = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        return canvas.findAllByRole('listitem', {
          hidden: true
        });
      });
      return function items() {
        return _ref7.apply(this, arguments);
      };
    }();
    return {
      trigger,
      clearButton,
      items,
      canvas
    };
  });
  return function getElements(_x6) {
    return _ref6.apply(this, arguments);
  };
}();
const countries = [{
  value: 'IlFlag',
  name: 'Israel'
}, {
  value: 'AdFlag',
  name: 'Andorra'
}, {
  value: 'AiFlag',
  name: 'Anguilla'
}, {
  value: 'KhFlag',
  name: 'Cambodia'
}, {
  value: 'AxFlag',
  name: 'Aland Islands'
}, {
  value: 'BbFlag',
  name: 'Barbados'
}, {
  value: 'FiFlag',
  name: 'Finland'
}, {
  value: 'FrFlag',
  name: 'France'
}, {
  value: 'ImFlag',
  name: 'Isle of Man'
}, {
  value: 'ItFlag',
  name: 'Italy'
}, {
  value: 'LsFlag',
  name: 'Lesotho'
}, {
  value: 'MmFlag',
  name: 'Myanmar'
}, {
  value: 'MqFlag',
  name: 'Martinique'
}, {
  value: 'MyFlag',
  name: 'Malaysia'
}, {
  value: 'NfFlag',
  name: 'Norfolk Island'
}];

/***/ }),

/***/ "../forms/src/components/Combobox/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $j: () => (/* binding */ getOptionText),
/* harmony export */   L_: () => (/* binding */ getSelectedItemByText),
/* harmony export */   hL: () => (/* binding */ getFilteredChildren)
/* harmony export */ });
/* unused harmony export getFilteredMenuGroups */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../ui_utils/dist/esm/src/utils/utils/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../forms/src/components/Combobox/constants.ts");




const getSelectedItemByText = (menuItems, groupSelectedValues) => {
  let selectedItemProps;
  if (!groupSelectedValues) {
    return selectedItemProps;
  }
  react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(menuItems, child => {
    var _props$value;
    if (((_props$value = child.props.value) === null || _props$value === void 0 ? void 0 : _props$value.toString()) === groupSelectedValues.item) {
      selectedItemProps = getOptionText(child.props.children);
    }
  });
  return selectedItemProps;
};
const getOptionText = children => {
  let optionLabel = null;
  let searchText = '';
  if (children) {
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isString)(children)) {
      return children;
    }
    for (const child of react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children)) {
      var _child$props;
      if (child !== null && child !== void 0 && (_child$props = child.props) !== null && _child$props !== void 0 && _child$props.children) {
        optionLabel = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .findChildByType */ .B)(child.props.children, _constants__WEBPACK_IMPORTED_MODULE_4__/* .OPTION_LABEL_ID */ .l);
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
  const comboboxOptionCreate = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .childrenIdMatch */ .i)(menuItem, 'ComboboxOptionCreate');
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
  let unselectedChildren = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(menuItems);
  const shouldFilterSelectedItems = Array.isArray(menuItems) && Array.isArray(groupSelectedValues[name]);
  if (name === 'item' && groupSelectedValues[name] && shouldFilterItem !== null && shouldFilterItem !== void 0 && shouldFilterItem.current) {
    const selectedItemText = getSelectedItemByText(menuItems, groupSelectedValues);
    if (searchValue === selectedItemText) {
      shouldFilterItem.current = false;
      return menuItems;
    }
  }
  if (shouldFilterSelectedItems) {
    unselectedChildren = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(menuItems).filter(menuItem => {
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
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(searchedItems)) {
      return null;
    }
    return searchedItems;
  }
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(unselectedChildren)) {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(menuGroup, {
      children: filteredMenuItems
    });
  } else {
    return null;
  }
};
const getFilteredMenuGroups = function (values, menuGroups) {
  let searchValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  const childrenToRender = [];
  const menuGroupsArray = react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(menuGroups);
  react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(menuGroupsArray, menuGroup => {
    const filteredMenuGroups = filteredMenuGroup(menuGroup, values, searchValue);
    if (filteredMenuGroups) {
      childrenToRender.push(filteredMenuGroups);
    }
  });
  if (!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(childrenToRender)) {
    return childrenToRender;
  } else {
    return null;
  }
};
const getFilteredChildren = function (values, children) {
  let searchValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  let shouldFilterItem = arguments.length > 3 ? arguments[3] : undefined;
  const hasMenuGroupChild = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .findChildByType */ .B)(children, _constants__WEBPACK_IMPORTED_MODULE_4__/* .MENU_GROUP_ID */ .O);
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

/***/ }),

/***/ "../forms/src/components/shared/style.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QF: () => (/* binding */ getValidationStylingProps)
/* harmony export */ });
/* unused harmony exports getBorderColor, getOutlineProps */
/* harmony import */ var _fiverr_private_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../inputs/dist/esm/src/components/shared/formsTokenColors.js");
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

const getBorderColor = _ref => {
  let {
    isError,
    isSuccess,
    disabled,
    open
  } = _ref;
  if (isError) {
    return {
      borderColor: 'validationError',
      outlineColor: 'validationError'
    };
  } else if (isSuccess) {
    return {
      borderColor: 'validationSuccess',
      outlineColor: 'validationSuccess'
    };
  } else if (disabled) {
    return {
      borderColor: _fiverr_private_inputs__WEBPACK_IMPORTED_MODULE_0__/* .formsTokenColors */ .V.borderColor
    };
  } else {
    return {
      borderColor: {
        default: open ? _fiverr_private_inputs__WEBPACK_IMPORTED_MODULE_0__/* .formsTokenColors */ .V.interactiveColor : _fiverr_private_inputs__WEBPACK_IMPORTED_MODULE_0__/* .formsTokenColors */ .V.borderColor,
        hover: _fiverr_private_inputs__WEBPACK_IMPORTED_MODULE_0__/* .formsTokenColors */ .V.interactiveColor,
        focus: _fiverr_private_inputs__WEBPACK_IMPORTED_MODULE_0__/* .formsTokenColors */ .V.interactiveColor
      },
      outlineColor: _fiverr_private_inputs__WEBPACK_IMPORTED_MODULE_0__/* .formsTokenColors */ .V.interactiveColor
    };
  }
};
const getOutlineProps = _ref2 => {
  let {
    open,
    outlineColor
  } = _ref2;
  return {
    outlineStyle: open ? 'solid' : {
      focus: 'solid',
      focusVisible: 'solid',
      focusWithin: 'solid'
    },
    outlineWidth: open ? 'sm' : {
      focus: 'sm',
      focusVisible: 'sm',
      focusWithin: 'sm'
    },
    outlineColor
  };
};
const getValidationStylingProps = _ref3 => {
  let {
    isError,
    isSuccess,
    disabled,
    open
  } = _ref3;
  const {
    borderColor,
    outlineColor
  } = getBorderColor({
    isError,
    isSuccess,
    disabled,
    open
  });
  const outlineProps = getOutlineProps({
    open,
    outlineColor
  });
  return _objectSpread(_objectSpread({
    borderColor
  }, outlineProps), {}, {
    backgroundColor: disabled ? _fiverr_private_inputs__WEBPACK_IMPORTED_MODULE_0__/* .formsTokenColors */ .V.disabledFieldBackgroundColor : 'background',
    color: disabled ? _fiverr_private_inputs__WEBPACK_IMPORTED_MODULE_0__/* .formsTokenColors */ .V.disabledColor : _fiverr_private_inputs__WEBPACK_IMPORTED_MODULE_0__/* .formsTokenColors */ .V.color,
    pointerEvents: disabled ? 'none' : undefined
  });
};

/***/ }),

/***/ "../layout_components/dist/esm/src/components/Center/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../storybook_helpers/dist/esm/src/components/StoryStack/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../typography/dist/esm/src/components/HighlightText/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ })

}]);
//# sourceMappingURL=1032.0bc45231.iframe.bundle.js.map