(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[9031],{

/***/ "../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../hooks/dist/esm/src/hooks/useClickOutside/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../layout_components/dist/esm/src/components/Layout/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/utilityClasses.ve.css.js + 1 modules
var utilityClasses_ve_css = __webpack_require__("../theme/dist/esm/src/atoms/utilityClasses.ve.css.js");
;// ../layout_components/dist/esm/src/components/Layout/constants.js

const CENTERED = {
  paddingX: {
    default: '6',
    md: '8'
  },
  paddingTop: {
    default: '6',
    md: '8'
  },
  paddingBottom: {
    default: '12',
    md: '16'
  },
  maxWidth: {
    default: '1400px'
  },
  width: {
    default: '100%'
  },
  margin: {
    default: 'autoX'
  },
  className: utilityClasses_ve_css/* paddingX_0_xxl */.O
};
;// ../layout_components/dist/esm/src/components/Layout/index.js
const _excluded = ["children", "centered", "borderStyle", "borderColor", "className"],
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




const Layout = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      children,
      centered,
      borderStyle,
      borderColor,
      className: customClassName
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const centeredStyles = centered ? CENTERED : {};
  const {
    borderLeftWidth,
    borderTopWidth,
    borderBottomWidth,
    borderRightWidth,
    borderWidth
  } = restProps;
  const {
      className
    } = centeredStyles,
    stylingProps = _objectWithoutProperties(centeredStyles, _excluded2);
  const borderStylingReset = borderLeftWidth || borderTopWidth || borderBottomWidth || borderRightWidth || borderWidth ? {
    borderStyle: borderStyle || 'solid',
    borderColor: borderColor || 'border'
  } : undefined;
  return /*#__PURE__*/react.createElement(Box/* default */.A, _objectSpread(_objectSpread(_objectSpread({
    ref: ref
  }, stylingProps), borderStylingReset), {}, {
    boxSizing: "borderBox",
    className: classnames_default()(className, customClassName)
  }, restProps), children);
});
Layout.displayName = 'Layout';
/* harmony default export */ const components_Layout = (Layout);
;
Layout.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Layout"
};

/***/ }),

/***/ "../popover/src/components/Popover/PopoverAnchor/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
/* harmony import */ var _PopoverContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../popover/src/components/Popover/PopoverContext/index.ts");
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _extends({
    as: as,
    height: "fit-content",
    maxWidth: "100%",
    width: fullWidth ? '100%' : 'fit-content',
    flex: flex,
    display: display,
    ref: refs.setReference,
    "data-testid": dataTestId,
    cursor: disabled ? 'default' : undefined
  }, getEventListeners(), embed ? {} : accessibleAttributes, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }), embed ? (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .renderChildren */ .s)(children, _objectSpread({}, accessibleAttributes)) : children);
};
PopoverAnchor.displayName = 'PopoverAnchor';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverAnchor);
try {
    // @ts-ignore
    PopoverAnchor.displayName = "PopoverAnchor";
    // @ts-ignore
    PopoverAnchor.__docgenInfo = { "description": "", "displayName": "PopoverAnchor", "props": { "children": { "defaultValue": null, "description": "Any node to render.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "as": { "defaultValue": { value: "div" }, "description": "The wrapper html element", "name": "as", "required": false, "type": { "name": "enum", "value": [{ "value": "\"span\"" }, { "value": "\"div\"" }] } }, "disabled": { "defaultValue": null, "description": "Whether the anchor is disabled and should not open content", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "ariaHasPopup": { "defaultValue": null, "description": "", "name": "ariaHasPopup", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }, { "value": "\"dialog\"" }, { "value": "\"menu\"" }, { "value": "\"grid\"" }, { "value": "\"true\"" }, { "value": "\"false\"" }, { "value": "\"listbox\"" }, { "value": "\"tree\"" }] } }, "fullWidth": { "defaultValue": null, "description": "", "name": "fullWidth", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "onFocus": { "defaultValue": null, "description": "Focus event handler", "name": "onFocus", "required": false, "type": { "name": "FocusEventHandler<HTMLDivElement>" } }, "onBlur": { "defaultValue": null, "description": "Blur event handler", "name": "onBlur", "required": false, "type": { "name": "FocusEventHandler<HTMLDivElement>" } }, "embed": { "defaultValue": null, "description": "Whether to pass all props into child element and avoid rendering wrapper.\nEnsure the child component supports 'aria-expanded' and 'aria-haspopup' as props.", "name": "embed", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTrackTag": { "defaultValue": { value: "popover_anchor" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "display": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "display", "required": false, "type": { "name": "enum", "value": [{ "value": "\"none\"" }, { "value": "\"flex\"" }, { "value": "\"block\"" }, { "value": "\"inline\"" }, { "value": "\"grid\"" }, { "value": "\"contents\"" }, { "value": "\"initial\"" }, { "value": "\"inlineBlock\"" }, { "value": "\"inlineFlex\"" }, { "value": "\"inlineGrid\"" }, { "value": "\"webkitBox\"" }] } }, "flex": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "flex", "required": false, "type": { "name": "CSSProperty" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../popover/src/components/Popover/PopoverAnchor/index.tsx#PopoverAnchor"] = { docgenInfo: PopoverAnchor.__docgenInfo, name: "PopoverAnchor", path: "../popover/src/components/Popover/PopoverAnchor/index.tsx#PopoverAnchor" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../popover/src/components/Popover/PopoverChevron/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _PopoverContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../popover/src/components/Popover/PopoverContext/index.ts");




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
try {
    // @ts-ignore
    PopoverChevron.displayName = "PopoverChevron";
    // @ts-ignore
    PopoverChevron.__docgenInfo = { "description": "", "displayName": "PopoverChevron", "props": { "size": { "defaultValue": { value: "md" }, "description": "Chevron size.", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../popover/src/components/Popover/PopoverChevron/index.tsx#PopoverChevron"] = { docgenInfo: PopoverChevron.__docgenInfo, name: "PopoverChevron", path: "../popover/src/components/Popover/PopoverChevron/index.tsx#PopoverChevron" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../popover/src/components/Popover/PopoverCloseIcon/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../hooks/dist/esm/src/hooks/useKeyboardShortcuts/index.js");
/* harmony import */ var _fiverr_private_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../button/dist/esm/src/components/TimesButton/index.js");
/* harmony import */ var _PopoverContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../popover/src/components/Popover/PopoverContext/index.ts");




const PopoverCloseIcon = _ref => {
  let {
    dataTestId,
    dataTrackTag = 'popover_close_icon',
    dataTrackValue
  } = _ref;
  const {
    setOpen
  } = (0,_PopoverContext__WEBPACK_IMPORTED_MODULE_3__/* .usePopoverContext */ .C)();
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)([{
    trigger: 'enter',
    handler: () => {
      if (document.activeElement === ref.current) {
        setOpen(false);
      }
    }
  }]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    size: "3xs",
    dataTestId: dataTestId,
    ref: ref,
    onClick: () => setOpen(false)
  });
};
PopoverCloseIcon.displayName = 'PopoverCloseIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverCloseIcon);
try {
    // @ts-ignore
    PopoverCloseIcon.displayName = "PopoverCloseIcon";
    // @ts-ignore
    PopoverCloseIcon.__docgenInfo = { "description": "", "displayName": "PopoverCloseIcon", "props": { "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "dataTrackTag": { "defaultValue": { value: "popover_close_icon" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../popover/src/components/Popover/PopoverCloseIcon/index.tsx#PopoverCloseIcon"] = { docgenInfo: PopoverCloseIcon.__docgenInfo, name: "PopoverCloseIcon", path: "../popover/src/components/Popover/PopoverCloseIcon/index.tsx#PopoverCloseIcon" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../popover/src/components/Popover/PopoverContent/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _PopoverContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../popover/src/components/Popover/PopoverContext/index.ts");
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Animation, animationProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, _extends({
      ref: refs.setFloating,
      "data-testid": dataTestId
    }, contentProps, {
      dataTrackTag: dataTrackTag,
      dataTrackValue: dataTrackValue
    }), children)));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Animation, animationProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, _extends({
    ref: refs.setFloating,
    "data-testid": dataTestId
  }, contentProps, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }), children));
};
PopoverContent.displayName = 'PopoverContent';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverContent);
try {
    // @ts-ignore
    PopoverContent.displayName = "PopoverContent";
    // @ts-ignore
    PopoverContent.__docgenInfo = { "description": "", "displayName": "PopoverContent", "props": { "children": { "defaultValue": null, "description": "Any node(s) to render.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }, { "value": "ReactNode[]" }] } }, "mobileFullWidth": { "defaultValue": null, "description": "@deprecated changed to default behavior (you can just remove the prop)", "name": "mobileFullWidth", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "appendToBody": { "defaultValue": { value: "false" }, "description": "Whether the popover should be appended to the body.", "name": "appendToBody", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "closeOnClickOutside": { "defaultValue": { value: "true" }, "description": "Whether to dismiss the Popover on clicking outside of it.", "name": "closeOnClickOutside", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "initialFocusRef": { "defaultValue": null, "description": "Element to focus on popover initialization.", "name": "initialFocusRef", "required": false, "type": { "name": "RefObject<HTMLElement>" } }, "disablePadding": { "defaultValue": { value: "false" }, "description": "Disable the default padding.", "name": "disablePadding", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disableBoxShadow": { "defaultValue": { value: "false" }, "description": "Disable box-shadow", "name": "disableBoxShadow", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "backgroundColor": { "defaultValue": { value: "white" }, "description": "Set custom backgroundColor.", "name": "backgroundColor", "required": false, "type": { "name": "enum", "value": [{ "value": "\"background\"" }, { "value": "\"gradient_blue\"" }, { "value": "\"gradient_red\"" }, { "value": "\"gradient_pink\"" }, { "value": "\"gradient_orange\"" }, { "value": "\"gradient_yellow\"" }, { "value": "\"gradient_purple\"" }, { "value": "\"yellow_100\"" }, { "value": "\"yellow_200\"" }, { "value": "\"yellow_300\"" }, { "value": "\"yellow_400\"" }, { "value": "\"yellow_500\"" }, { "value": "\"yellow_600\"" }, { "value": "\"yellow_700\"" }, { "value": "\"yellow_800\"" }, { "value": "\"yellow_900\"" }, { "value": "\"yellow_1000\"" }, { "value": "\"yellow_1100\"" }, { "value": "\"yellow_1200\"" }, { "value": "\"teal_100\"" }, { "value": "\"teal_200\"" }, { "value": "\"teal_300\"" }, { "value": "\"teal_400\"" }, { "value": "\"teal_500\"" }, { "value": "\"teal_600\"" }, { "value": "\"teal_700\"" }, { "value": "\"teal_800\"" }, { "value": "\"teal_900\"" }, { "value": "\"teal_1000\"" }, { "value": "\"teal_1100\"" }, { "value": "\"teal_1200\"" }, { "value": "\"red_100\"" }, { "value": "\"red_200\"" }, { "value": "\"red_300\"" }, { "value": "\"red_400\"" }, { "value": "\"red_500\"" }, { "value": "\"red_600\"" }, { "value": "\"red_700\"" }, { "value": "\"red_800\"" }, { "value": "\"red_900\"" }, { "value": "\"red_1000\"" }, { "value": "\"red_1100\"" }, { "value": "\"red_1200\"" }, { "value": "\"purple_100\"" }, { "value": "\"purple_200\"" }, { "value": "\"purple_300\"" }, { "value": "\"purple_400\"" }, { "value": "\"purple_500\"" }, { "value": "\"purple_600\"" }, { "value": "\"purple_700\"" }, { "value": "\"purple_800\"" }, { "value": "\"purple_900\"" }, { "value": "\"purple_1000\"" }, { "value": "\"purple_1100\"" }, { "value": "\"purple_1200\"" }, { "value": "\"pink_100\"" }, { "value": "\"pink_200\"" }, { "value": "\"pink_300\"" }, { "value": "\"pink_400\"" }, { "value": "\"pink_500\"" }, { "value": "\"pink_600\"" }, { "value": "\"pink_700\"" }, { "value": "\"pink_800\"" }, { "value": "\"pink_900\"" }, { "value": "\"pink_1000\"" }, { "value": "\"pink_1100\"" }, { "value": "\"pink_1200\"" }, { "value": "\"orange_100\"" }, { "value": "\"orange_200\"" }, { "value": "\"orange_300\"" }, { "value": "\"orange_400\"" }, { "value": "\"orange_500\"" }, { "value": "\"orange_600\"" }, { "value": "\"orange_700\"" }, { "value": "\"orange_800\"" }, { "value": "\"orange_900\"" }, { "value": "\"orange_1000\"" }, { "value": "\"orange_1100\"" }, { "value": "\"orange_1200\"" }, { "value": "\"lightOrange_100\"" }, { "value": "\"lightOrange_200\"" }, { "value": "\"lightOrange_300\"" }, { "value": "\"lightOrange_400\"" }, { "value": "\"lightOrange_500\"" }, { "value": "\"lightOrange_600\"" }, { "value": "\"lightOrange_700\"" }, { "value": "\"lightOrange_800\"" }, { "value": "\"lightOrange_900\"" }, { "value": "\"lightOrange_1000\"" }, { "value": "\"lightOrange_1100\"" }, { "value": "\"lightOrange_1200\"" }, { "value": "\"grey_100\"" }, { "value": "\"grey_200\"" }, { "value": "\"grey_300\"" }, { "value": "\"grey_400\"" }, { "value": "\"grey_500\"" }, { "value": "\"grey_600\"" }, { "value": "\"grey_700\"" }, { "value": "\"grey_800\"" }, { "value": "\"grey_900\"" }, { "value": "\"grey_1000\"" }, { "value": "\"grey_1100\"" }, { "value": "\"grey_1200\"" }, { "value": "\"green_100\"" }, { "value": "\"green_200\"" }, { "value": "\"green_300\"" }, { "value": "\"green_400\"" }, { "value": "\"green_500\"" }, { "value": "\"green_600\"" }, { "value": "\"green_700\"" }, { "value": "\"green_800\"" }, { "value": "\"green_900\"" }, { "value": "\"green_1000\"" }, { "value": "\"green_1100\"" }, { "value": "\"green_1200\"" }, { "value": "\"business_100\"" }, { "value": "\"business_200\"" }, { "value": "\"business_300\"" }, { "value": "\"business_400\"" }, { "value": "\"business_500\"" }, { "value": "\"business_600\"" }, { "value": "\"business_700\"" }, { "value": "\"business_800\"" }, { "value": "\"business_900\"" }, { "value": "\"business_1000\"" }, { "value": "\"business_1100\"" }, { "value": "\"business_1200\"" }, { "value": "\"blue_100\"" }, { "value": "\"blue_200\"" }, { "value": "\"blue_300\"" }, { "value": "\"blue_400\"" }, { "value": "\"blue_500\"" }, { "value": "\"blue_600\"" }, { "value": "\"blue_700\"" }, { "value": "\"blue_800\"" }, { "value": "\"blue_900\"" }, { "value": "\"blue_1000\"" }, { "value": "\"blue_1100\"" }, { "value": "\"blue_1200\"" }, { "value": "\"white\"" }, { "value": "\"white_10\"" }, { "value": "\"white_20\"" }, { "value": "\"white_30\"" }, { "value": "\"white_40\"" }, { "value": "\"white_50\"" }, { "value": "\"white_60\"" }, { "value": "\"white_70\"" }, { "value": "\"white_80\"" }, { "value": "\"white_90\"" }, { "value": "\"black\"" }, { "value": "\"black_10\"" }, { "value": "\"black_20\"" }, { "value": "\"black_30\"" }, { "value": "\"black_40\"" }, { "value": "\"black_50\"" }, { "value": "\"black_60\"" }, { "value": "\"black_70\"" }, { "value": "\"black_80\"" }, { "value": "\"black_90\"" }, { "value": "\"transparent\"" }, { "value": "\"inherit\"" }, { "value": "\"currentColor\"" }] } }, "zIndex": { "defaultValue": { value: "popover" }, "description": "Set custom zIndex.", "name": "zIndex", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"2\"" }, { "value": "\"overlay\"" }, { "value": "\"-1\"" }, { "value": "\"overlayBackground\"" }, { "value": "\"popover\"" }, { "value": "\"toast\"" }, { "value": "\"tooltip\"" }, { "value": "\"educationTooltip\"" }] } }, "renderWhenClosed": { "defaultValue": { value: "false" }, "description": "Set to true if you want that PopoverContent will be rendered with display=none when it's closed.", "name": "renderWhenClosed", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "animationType": { "defaultValue": { value: "fade" }, "description": "Type of animation", "name": "animationType", "required": false, "type": { "name": "enum", "value": [{ "value": "\"fade\"" }, { "value": "\"slideFade\"" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } }, "onAnimationStart": { "defaultValue": null, "description": "Event on animation start", "name": "onAnimationStart", "required": false, "type": { "name": "() => void" } }, "onAnimationEnd": { "defaultValue": null, "description": "Event on animation end", "name": "onAnimationEnd", "required": false, "type": { "name": "() => void" } }, "borderRadius": { "defaultValue": { value: "lg" }, "description": "Exposed for internal usage only, mainly for Tooltip.\n@ignore", "name": "borderRadius", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"lg\"" }] } }, "disableAutoFocus": { "defaultValue": null, "description": "Whether to disable default focus on popover content", "name": "disableAutoFocus", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "disableExitAnimation": { "defaultValue": null, "description": "Whether to disable exit animation", "name": "disableExitAnimation", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "withDelay": { "defaultValue": { value: "false" }, "description": "Whether to add delay when trigger is hover", "name": "withDelay", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "fullWidth": { "defaultValue": null, "description": "", "name": "fullWidth", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTrackTag": { "defaultValue": { value: "popover" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../popover/src/components/Popover/PopoverContent/index.tsx#PopoverContent"] = { docgenInfo: PopoverContent.__docgenInfo, name: "PopoverContent", path: "../popover/src/components/Popover/PopoverContent/index.tsx#PopoverContent" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../popover/src/components/Popover/PopoverContext/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../popover/src/components/Popover/PopoverHeader/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");


const PopoverHeader = _ref => {
  let {
    dataTestId,
    children
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    "data-testid": dataTestId,
    fontSize: "b_md",
    fontWeight: "semibold",
    paddingBottom: "2",
    display: "flex",
    alignItems: "center",
    justifyContent: "spaceBetween"
  }, children);
};
PopoverHeader.displayName = 'PopoverHeader';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverHeader);
try {
    // @ts-ignore
    PopoverHeader.displayName = "PopoverHeader";
    // @ts-ignore
    PopoverHeader.__docgenInfo = { "description": "", "displayName": "PopoverHeader", "props": { "children": { "defaultValue": null, "description": "Any node(s) to render.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }, { "value": "ReactNode[]" }] } }, "dataTestId": { "defaultValue": null, "description": "", "name": "dataTestId", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../popover/src/components/Popover/PopoverHeader/index.tsx#PopoverHeader"] = { docgenInfo: PopoverHeader.__docgenInfo, name: "PopoverHeader", path: "../popover/src/components/Popover/PopoverHeader/index.tsx#PopoverHeader" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../popover/src/components/Popover/PopoverLazyContent/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../ui_utils/dist/esm/src/components/LazyComponent/index.js");
/* harmony import */ var _PopoverContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../popover/src/components/Popover/PopoverContext/index.ts");
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}



const PopoverLazyContent = props => {
  const {
    open
  } = (0,_PopoverContext__WEBPACK_IMPORTED_MODULE_2__/* .usePopoverContext */ .C)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _extends({
    shouldImport: open
  }, props));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverLazyContent);
try {
    // @ts-ignore
    PopoverLazyContent.displayName = "PopoverLazyContent";
    // @ts-ignore
    PopoverLazyContent.__docgenInfo = { "description": "", "displayName": "PopoverLazyContent", "props": { "placeholder": { "defaultValue": null, "description": "The placeholder component to be used when the lazy component is loading.", "name": "placeholder", "required": false, "type": { "name": "ReactElement<any, string | JSXElementConstructor<any>>" } }, "onError": { "defaultValue": null, "description": "Function to be called when the component fails to load.", "name": "onError", "required": false, "type": { "name": "(error: unknown) => void" } }, "lazyImport": { "defaultValue": null, "description": "The lazy import function, with webpack's magic comments.", "name": "lazyImport", "required": true, "type": { "name": "() => Promise<PromiseResult>" } }, "fallback": { "defaultValue": null, "description": "The fallback component to be used when the lazy component fails to load.", "name": "fallback", "required": false, "type": { "name": "ReactElement<any, string | JSXElementConstructor<any>>" } }, "beforeLoad": { "defaultValue": null, "description": "Function to be called before the component is loaded.", "name": "beforeLoad", "required": false, "type": { "name": "VoidFunction" } }, "afterLoad": { "defaultValue": null, "description": "Function to be called after the component has loaded.", "name": "afterLoad", "required": false, "type": { "name": "VoidFunction" } }, "componentProps": { "defaultValue": null, "description": "Props to be passed to the component.", "name": "componentProps", "required": false, "type": { "name": "object" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../popover/src/components/Popover/PopoverLazyContent/index.tsx#PopoverLazyContent"] = { docgenInfo: PopoverLazyContent.__docgenInfo, name: "PopoverLazyContent", path: "../popover/src/components/Popover/PopoverLazyContent/index.tsx#PopoverLazyContent" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../popover/src/components/Popover/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AnimationEvents: () => (/* binding */ AnimationEvents),
  AppendToBody: () => (/* binding */ AppendToBody),
  Controlled: () => (/* binding */ Controlled),
  DisableBoxShadow: () => (/* binding */ DisableBoxShadow),
  DisableFlip: () => (/* binding */ DisableFlip),
  FullWidthAnchor: () => (/* binding */ FullWidthAnchor),
  InitialFocusRef: () => (/* binding */ InitialFocusRef),
  LazyLoadedContent: () => (/* binding */ LazyLoadedContent),
  NonControlled: () => (/* binding */ NonControlled),
  Positions: () => (/* binding */ Positions),
  Primary: () => (/* binding */ Primary),
  RenderWhenClosed: () => (/* binding */ RenderWhenClosed),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs + 58 modules
var esm = __webpack_require__("../../node_modules/.pnpm/@faker-js+faker@6.3.1/node_modules/@faker-js/faker/dist/esm/index.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs + 1 modules
var dist = __webpack_require__("../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js
var src = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryStack/index.js
var StoryStack = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/Button/index.js + 1 modules
var Button = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@floating-ui+react-dom@1.3.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js
var floating_ui_react_dom_esm = __webpack_require__("../../node_modules/.pnpm/@floating-ui+react-dom@1.3.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@floating-ui+dom@1.6.13/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs + 3 modules
var floating_ui_dom = __webpack_require__("../../node_modules/.pnpm/@floating-ui+dom@1.6.13/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js + 1 modules
var getContext = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
// EXTERNAL MODULE: ../popover/src/components/Popover/PopoverContext/index.ts
var PopoverContext = __webpack_require__("../popover/src/components/Popover/PopoverContext/index.ts");
;// ../popover/src/components/Popover/index.tsx




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
  const [innerOpen, setInnerOpen] = (0,react.useState)(initialOpen);
  const arrowRef = (0,react.useRef)(null);
  const {
    isTouch
  } = (0,getContext/* default */.A)();
  const open = isOpen === undefined ? innerOpen : isOpen;
  const isAutoPosition = position === 'auto';
  const positionSide = position.split('-')[0];
  const isHorizontalPosition = positionSide === 'right' || positionSide === 'left';
  const arrowExists = arrowRef === null || arrowRef === void 0 ? void 0 : arrowRef.current;
  const arrowMiddleware = arrowExists ? (0,floating_ui_react_dom_esm/* arrow */.UE)({
    element: arrowRef,
    padding: 8
  }) : undefined;
  const arrowOffset = arrowExists ? Math.sqrt(2 * arrowRef.current.offsetWidth ** 2) / 2 : 0;
  const flipMiddleware = disableFlip || isAutoPosition ? undefined : (0,floating_ui_dom/* flip */.UU)();
  const autoPlacementMiddleware = isAutoPosition ? (0,floating_ui_dom/* autoPlacement */.RK)() : undefined;
  const setOpen = value => {
    setInnerOpen(value);
    onOpenChanged(value);
  };
  const floatingData = (0,floating_ui_react_dom_esm/* useFloating */.we)({
    placement: isAutoPosition ? undefined : position,
    open,
    whileElementsMounted: floating_ui_dom/* autoUpdate */.ll,
    middleware: [(0,floating_ui_dom/* offset */.cY)(offset + arrowOffset), (0,floating_ui_dom/* shift */.BN)({
      mainAxis: !isHorizontalPosition
    }), flipMiddleware, autoPlacementMiddleware, arrowMiddleware]
  });
  return /*#__PURE__*/react.createElement(PopoverContext/* PopoverContext */.n.Provider, {
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
/* harmony default export */ const components_Popover = (Popover);
try {
    // @ts-ignore
    Popover.displayName = "Popover";
    // @ts-ignore
    Popover.__docgenInfo = { "description": "", "displayName": "Popover", "props": { "children": { "defaultValue": null, "description": "Any node(s) to render.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }, { "value": "ReactNode[]" }] } }, "position": { "defaultValue": { value: "top" }, "description": "From which position to open the Popover.", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"right\"" }, { "value": "\"left\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }, { "value": "\"right-start\"" }, { "value": "\"right-end\"" }, { "value": "\"left-start\"" }, { "value": "\"left-end\"" }, { "value": "\"auto\"" }] } }, "isOpen": { "defaultValue": null, "description": "Used in controlled mode, whether the Popover is shown.", "name": "isOpen", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "onOpenChanged": { "defaultValue": { value: "() => undefined" }, "description": "Callback for Popover opened / closed, first param is boolean that represents the new state of isOpen.", "name": "onOpenChanged", "required": false, "type": { "name": "(value: boolean) => void" } }, "initialOpen": { "defaultValue": { value: "false" }, "description": "Used in non-controlled mode.", "name": "initialOpen", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "triggerEvent": { "defaultValue": { value: "click" }, "description": "Use in Controlled mode only. Which event triggers open the Popover.\nOn mobile Hover event would be changed to onTap.", "name": "triggerEvent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"hover\"" }, { "value": "\"click\"" }] } }, "offset": { "defaultValue": { value: "4" }, "description": "Offset between popover anchor and popover content.", "name": "offset", "required": false, "type": { "name": "number" } }, "disableFlip": { "defaultValue": { value: "false" }, "description": "Disable flipping behavior on overflow.", "name": "disableFlip", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../popover/src/components/Popover/index.tsx#Popover"] = { docgenInfo: Popover.__docgenInfo, name: "Popover", path: "../popover/src/components/Popover/index.tsx#Popover" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../popover/src/components/Popover/PopoverAnchor/index.tsx
var PopoverAnchor = __webpack_require__("../popover/src/components/Popover/PopoverAnchor/index.tsx");
// EXTERNAL MODULE: ../popover/src/components/Popover/PopoverContent/index.tsx
var PopoverContent = __webpack_require__("../popover/src/components/Popover/PopoverContent/index.tsx");
// EXTERNAL MODULE: ../popover/src/components/Popover/PopoverHeader/index.tsx
var PopoverHeader = __webpack_require__("../popover/src/components/Popover/PopoverHeader/index.tsx");
// EXTERNAL MODULE: ../popover/src/components/Popover/PopoverCloseIcon/index.tsx
var PopoverCloseIcon = __webpack_require__("../popover/src/components/Popover/PopoverCloseIcon/index.tsx");
// EXTERNAL MODULE: ../popover/src/components/Popover/PopoverChevron/index.tsx
var PopoverChevron = __webpack_require__("../popover/src/components/Popover/PopoverChevron/index.tsx");
// EXTERNAL MODULE: ../popover/src/components/Popover/PopoverLazyContent/index.tsx
var PopoverLazyContent = __webpack_require__("../popover/src/components/Popover/PopoverLazyContent/index.tsx");
;// ../popover/src/components/Popover/stories/index.stories.tsx
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
const headerText = esm/* faker */.az.lorem.words(2);
const contentText = esm/* faker */.az.lorem.words(10);
const anchorText = 'Click here';
const DELAY = 200;
const Primary = {
  tags: ['sidebar-ignore', 'snapshot-ignore']
};
const PositionsExamplePopover = _ref => {
  let {
    position,
    children
  } = _ref;
  return /*#__PURE__*/react.createElement(components_Popover, {
    triggerEvent: "hover",
    position: position
  }, /*#__PURE__*/react.createElement(PopoverAnchor/* default */.A, null, children), /*#__PURE__*/react.createElement(PopoverContent/* default */.A, null, /*#__PURE__*/react.createElement(PopoverChevron/* default */.A, null), contentText));
};
const Positions = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: () => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    display: "grid",
    templateColumns: "20%_20%_20%_20%_20%"
  }, /*#__PURE__*/react.createElement(StoryStack/* default */.A, null), /*#__PURE__*/react.createElement(PositionsExamplePopover, {
    position: "top-start"
  }, "Top start"), /*#__PURE__*/react.createElement(PositionsExamplePopover, {
    position: "top"
  }, "Top"), /*#__PURE__*/react.createElement(PositionsExamplePopover, {
    position: "top-end"
  }, "Top end"), /*#__PURE__*/react.createElement(StoryStack/* default */.A, null), /*#__PURE__*/react.createElement(PositionsExamplePopover, {
    position: "left-start"
  }, "Left start"), /*#__PURE__*/react.createElement(StoryStack/* default */.A, null), /*#__PURE__*/react.createElement(StoryStack/* default */.A, null), /*#__PURE__*/react.createElement(StoryStack/* default */.A, null), /*#__PURE__*/react.createElement(PositionsExamplePopover, {
    position: "right-start"
  }, "Right start"), /*#__PURE__*/react.createElement(PositionsExamplePopover, {
    position: "left"
  }, "Left"), /*#__PURE__*/react.createElement(StoryStack/* default */.A, null), /*#__PURE__*/react.createElement(StoryStack/* default */.A, null), /*#__PURE__*/react.createElement(StoryStack/* default */.A, null), /*#__PURE__*/react.createElement(PositionsExamplePopover, {
    position: "right"
  }, "Right"), /*#__PURE__*/react.createElement(PositionsExamplePopover, {
    position: "left-end"
  }, "Left end"), /*#__PURE__*/react.createElement(StoryStack/* default */.A, null), /*#__PURE__*/react.createElement(StoryStack/* default */.A, null), /*#__PURE__*/react.createElement(StoryStack/* default */.A, null), /*#__PURE__*/react.createElement(PositionsExamplePopover, {
    position: "right-end"
  }, "Right end"), /*#__PURE__*/react.createElement(StoryStack/* default */.A, null), /*#__PURE__*/react.createElement(PositionsExamplePopover, {
    position: "bottom-start"
  }, "Bottom start"), /*#__PURE__*/react.createElement(PositionsExamplePopover, {
    position: "bottom"
  }, "Bottom"), /*#__PURE__*/react.createElement(PositionsExamplePopover, {
    position: "bottom-end"
  }, "Bottom end"), /*#__PURE__*/react.createElement(StoryStack/* default */.A, null))
};
const LazyLoadedContent = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'Watch network to see CustomPopoverContent chunk getting loaded on demand.'
      }
    }
  },
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    marginLeft: "4",
    height: "300px",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/react.createElement(components_Popover, args, /*#__PURE__*/react.createElement(PopoverAnchor/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, anchorText)), /*#__PURE__*/react.createElement(PopoverContent/* default */.A, null, /*#__PURE__*/react.createElement(PopoverChevron/* default */.A, null), /*#__PURE__*/react.createElement(PopoverLazyContent/* default */.A, {
    lazyImport: () => __webpack_require__.e(/* import() | CustomPopoverContent */ 4032).then(__webpack_require__.bind(__webpack_require__, "../popover/src/components/Popover/stories/CustomPopoverContent.tsx"))
  }))))
};
const Controlled = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      source: {
        code: "const [isOpen, setIsOpen] = useState(false);\n\nreturn (\n  <StoryStack marginLeft=\"4\" height=\"300px\" alignItems=\"center\" justifyContent=\"center\">\n    <Button onClick={() => setIsOpen(!isOpen)}>Toggle Popover</Button>\n    <Popover isOpen={isOpen}>\n      <PopoverAnchor>Anchor</PopoverAnchor>\n      <PopoverContent>\n        <PopoverChevron />\n        {contentText}\n      </PopoverContent>\n    </Popover>\n  </StoryStack>\n);"
      }
    }
  },
  render: args => {
    const [isOpen, setIsOpen] = (0,react.useState)(false);
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
      marginLeft: "4",
      height: "300px",
      alignItems: "center",
      justifyContent: "center"
    }, /*#__PURE__*/react.createElement(Button/* default */.A, {
      onClick: () => setIsOpen(!isOpen)
    }, "Toggle Popover"), /*#__PURE__*/react.createElement(components_Popover, _extends({}, args, {
      isOpen: isOpen
    }), /*#__PURE__*/react.createElement(PopoverAnchor/* default */.A, null, "Anchor"), /*#__PURE__*/react.createElement(PopoverContent/* default */.A, null, /*#__PURE__*/react.createElement(PopoverChevron/* default */.A, null), contentText)));
  }
};
const NonControlled = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      source: {
        code: "const [message, setMessage] = useState('');\nconst onOpenChanged = (open: boolean) => {\n  setMessage(\"Popover open: \" + open);\n};\n\nreturn (\n  <StoryStack marginLeft=\"4\" height=\"300px\" alignItems=\"center\" justifyContent=\"center\">\n    <Popover initialOpen={false} onOpenChanged={onOpenChanged}>\n      <PopoverAnchor>\n        <Button>{anchorText}</Button>\n      </PopoverAnchor>\n      <PopoverContent>\n        <PopoverChevron />\n        {contentText}\n      </PopoverContent>\n    </Popover>\n    {message}\n  </StoryStack>\n);"
      }
    }
  },
  render: args => {
    const [message, setMessage] = (0,react.useState)('');
    const onOpenChanged = open => {
      setMessage("Popover open: ".concat(open));
    };
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
      marginLeft: "4",
      height: "300px",
      alignItems: "center",
      justifyContent: "center"
    }, /*#__PURE__*/react.createElement(components_Popover, _extends({}, args, {
      initialOpen: false,
      onOpenChanged: onOpenChanged
    }), /*#__PURE__*/react.createElement(PopoverAnchor/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, anchorText)), /*#__PURE__*/react.createElement(PopoverContent/* default */.A, null, /*#__PURE__*/react.createElement(PopoverChevron/* default */.A, null), contentText)), message);
  }
};
const DisableFlip = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    disableFlip: true
  }
};
const InitialFocusRef = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      source: {
        code: "const ref = useRef(null);\n\nreturn (\n  <StoryStack marginLeft=\"4\" height=\"300px\" alignItems=\"center\" justifyContent=\"center\">\n    <Popover>\n      <PopoverAnchor>\n        <Button>{anchorText}</Button>\n      </PopoverAnchor>\n      <PopoverContent initialFocusRef={ref}>\n        <PopoverChevron />\n        <StoryStack>\n          <Input ref={ref} tabIndex={0} placeholder=\"First field\" />\n          <Input tabIndex={0} placeholder=\"Second field\" />\n        </StoryStack>\n      </PopoverContent>\n    </Popover>\n  </StoryStack>\n);"
      }
    }
  },
  render: args => {
    const ref = (0,react.useRef)(null);
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
      marginLeft: "4",
      height: "300px",
      alignItems: "center",
      justifyContent: "center"
    }, /*#__PURE__*/react.createElement(components_Popover, args, /*#__PURE__*/react.createElement(PopoverAnchor/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, anchorText)), /*#__PURE__*/react.createElement(PopoverContent/* default */.A, {
      initialFocusRef: ref
    }, /*#__PURE__*/react.createElement(PopoverChevron/* default */.A, null), /*#__PURE__*/react.createElement(StoryStack/* default */.A, null, /*#__PURE__*/react.createElement("input", {
      ref: ref,
      tabIndex: 0,
      placeholder: "First field"
    }), /*#__PURE__*/react.createElement("input", {
      tabIndex: 0,
      placeholder: "Second field"
    })))));
  }
};
const AppendToBody = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'You can watch the dom to see that the popover is appended to body'
      }
    }
  },
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    marginLeft: "4",
    height: "300px",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/react.createElement(components_Popover, args, /*#__PURE__*/react.createElement(PopoverAnchor/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, anchorText)), /*#__PURE__*/react.createElement(PopoverContent/* default */.A, {
    appendToBody: true
  }, /*#__PURE__*/react.createElement(PopoverChevron/* default */.A, null), contentText)))
};
const RenderWhenClosed = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'Watch the dom to see the content exists also when popover is closed'
      }
    }
  },
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    marginLeft: "4",
    height: "300px",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/react.createElement(components_Popover, args, /*#__PURE__*/react.createElement(PopoverAnchor/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, anchorText)), /*#__PURE__*/react.createElement(PopoverContent/* default */.A, {
    renderWhenClosed: true
  }, /*#__PURE__*/react.createElement(PopoverChevron/* default */.A, null), contentText)))
};
const DisableBoxShadow = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    marginLeft: "4",
    height: "300px",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/react.createElement(components_Popover, args, /*#__PURE__*/react.createElement(PopoverAnchor/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, anchorText)), /*#__PURE__*/react.createElement(PopoverContent/* default */.A, {
    backgroundColor: "grey_200",
    disableBoxShadow: true
  }, /*#__PURE__*/react.createElement(PopoverChevron/* default */.A, null), contentText))),
  play: function () {
    var _ref2 = _asyncToGenerator(function (_ref3) {
      let {
        canvasElement
      } = _ref3;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const anchor = yield canvas.findByText('Click here');
        yield dist/* userEvent */.Q4.click(anchor, {
          delay: DELAY
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x) {
      return _ref2.apply(this, arguments);
    };
  }()
};
const FullWidthAnchor = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    marginLeft: "4",
    height: "300px",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/react.createElement(components_Popover, args, /*#__PURE__*/react.createElement(PopoverAnchor/* default */.A, {
    fullWidth: true
  }, /*#__PURE__*/react.createElement(Button/* default */.A, {
    fullWidth: true
  }, anchorText)), /*#__PURE__*/react.createElement(PopoverContent/* default */.A, null, /*#__PURE__*/react.createElement(PopoverChevron/* default */.A, null), contentText)))
};
const AnimationEvents = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: args => {
    const [animationState, setAnimationState] = (0,react.useState)('UnInovoked');
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
      direction: "column",
      marginLeft: "4",
      height: "300px",
      alignItems: "center",
      justifyContent: "center"
    }, /*#__PURE__*/react.createElement(components_Popover, _extends({}, args, {
      initialOpen: false
    }), /*#__PURE__*/react.createElement(PopoverAnchor/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, anchorText)), /*#__PURE__*/react.createElement(PopoverContent/* default */.A, {
      onAnimationStart: () => setAnimationState('Animation Started'),
      onAnimationEnd: () => setAnimationState('Animation Ended')
    }, /*#__PURE__*/react.createElement(PopoverChevron/* default */.A, null), contentText)), /*#__PURE__*/react.createElement("div", null, " ", animationState));
  }
};
const meta = {
  title: 'Popover/Popover',
  component: components_Popover,
  render: args => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    marginLeft: "4",
    height: "300px",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/react.createElement(components_Popover, args, /*#__PURE__*/react.createElement(PopoverAnchor/* default */.A, null, /*#__PURE__*/react.createElement(Button/* default */.A, null, anchorText)), /*#__PURE__*/react.createElement(PopoverContent/* default */.A, null, /*#__PURE__*/react.createElement(PopoverHeader/* default */.A, null, headerText, /*#__PURE__*/react.createElement(PopoverCloseIcon/* default */.A, null)), /*#__PURE__*/react.createElement(PopoverChevron/* default */.A, null), contentText)))
};
/* harmony default export */ const index_stories = (meta);
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore']\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
Positions.parameters = {
  ...Positions.parameters,
  docs: {
    ...Positions.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: () => <StoryStack display=\"grid\" templateColumns=\"20%_20%_20%_20%_20%\">\n      <StoryStack />\n      <PositionsExamplePopover position=\"top-start\">Top start</PositionsExamplePopover>\n      <PositionsExamplePopover position=\"top\">Top</PositionsExamplePopover>\n      <PositionsExamplePopover position=\"top-end\">Top end</PositionsExamplePopover>\n      <StoryStack />\n      <PositionsExamplePopover position=\"left-start\">Left start</PositionsExamplePopover>\n      <StoryStack />\n      <StoryStack />\n      <StoryStack />\n      <PositionsExamplePopover position=\"right-start\">Right start</PositionsExamplePopover>\n      <PositionsExamplePopover position=\"left\">Left</PositionsExamplePopover>\n      <StoryStack />\n      <StoryStack />\n      <StoryStack />\n      <PositionsExamplePopover position=\"right\">Right</PositionsExamplePopover>\n      <PositionsExamplePopover position=\"left-end\">Left end</PositionsExamplePopover>\n      <StoryStack />\n      <StoryStack />\n      <StoryStack />\n      <PositionsExamplePopover position=\"right-end\">Right end</PositionsExamplePopover>\n      <StoryStack />\n      <PositionsExamplePopover position=\"bottom-start\">Bottom start</PositionsExamplePopover>\n      <PositionsExamplePopover position=\"bottom\">Bottom</PositionsExamplePopover>\n      <PositionsExamplePopover position=\"bottom-end\">Bottom end</PositionsExamplePopover>\n      <StoryStack />\n    </StoryStack>\n}",
      ...Positions.parameters?.docs?.source
    }
  }
};
LazyLoadedContent.parameters = {
  ...LazyLoadedContent.parameters,
  docs: {
    ...LazyLoadedContent.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'Watch network to see CustomPopoverContent chunk getting loaded on demand.'\n      }\n    }\n  },\n  render: args => <StoryStack marginLeft=\"4\" height=\"300px\" alignItems=\"center\" justifyContent=\"center\">\n      <Popover {...args}>\n        <PopoverAnchor>\n          <Button>{anchorText}</Button>\n        </PopoverAnchor>\n        <PopoverContent>\n          <PopoverChevron />\n          <PopoverLazyContent lazyImport={() => import(/* webpackChunkName: 'CustomPopoverContent' */'./CustomPopoverContent')} />\n        </PopoverContent>\n      </Popover>\n    </StoryStack>\n}",
      ...LazyLoadedContent.parameters?.docs?.source
    }
  }
};
Controlled.parameters = {
  ...Controlled.parameters,
  docs: {
    ...Controlled.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `const [isOpen, setIsOpen] = useState(false);\n\nreturn (\n  <StoryStack marginLeft=\"4\" height=\"300px\" alignItems=\"center\" justifyContent=\"center\">\n    <Button onClick={() => setIsOpen(!isOpen)}>Toggle Popover</Button>\n    <Popover isOpen={isOpen}>\n      <PopoverAnchor>Anchor</PopoverAnchor>\n      <PopoverContent>\n        <PopoverChevron />\n        {contentText}\n      </PopoverContent>\n    </Popover>\n  </StoryStack>\n);`\n      }\n    }\n  },\n  render: args => {\n    const [isOpen, setIsOpen] = useState(false);\n    return <StoryStack marginLeft=\"4\" height=\"300px\" alignItems=\"center\" justifyContent=\"center\">\n        <Button onClick={() => setIsOpen(!isOpen)}>Toggle Popover</Button>\n        <Popover {...args} isOpen={isOpen}>\n          <PopoverAnchor>Anchor</PopoverAnchor>\n          <PopoverContent>\n            <PopoverChevron />\n            {contentText}\n          </PopoverContent>\n        </Popover>\n      </StoryStack>;\n  }\n}",
      ...Controlled.parameters?.docs?.source
    }
  }
};
NonControlled.parameters = {
  ...NonControlled.parameters,
  docs: {
    ...NonControlled.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `const [message, setMessage] = useState('');\nconst onOpenChanged = (open: boolean) => {\n  setMessage(\"Popover open: \" + open);\n};\n\nreturn (\n  <StoryStack marginLeft=\"4\" height=\"300px\" alignItems=\"center\" justifyContent=\"center\">\n    <Popover initialOpen={false} onOpenChanged={onOpenChanged}>\n      <PopoverAnchor>\n        <Button>{anchorText}</Button>\n      </PopoverAnchor>\n      <PopoverContent>\n        <PopoverChevron />\n        {contentText}\n      </PopoverContent>\n    </Popover>\n    {message}\n  </StoryStack>\n);`\n      }\n    }\n  },\n  render: args => {\n    const [message, setMessage] = useState('');\n    const onOpenChanged = (open: boolean) => {\n      setMessage(`Popover open: ${open}`);\n    };\n    return <StoryStack marginLeft=\"4\" height=\"300px\" alignItems=\"center\" justifyContent=\"center\">\n        <Popover {...args} initialOpen={false} onOpenChanged={onOpenChanged}>\n          <PopoverAnchor>\n            <Button>{anchorText}</Button>\n          </PopoverAnchor>\n          <PopoverContent>\n            <PopoverChevron />\n            {contentText}\n          </PopoverContent>\n        </Popover>\n        {message}\n      </StoryStack>;\n  }\n}",
      ...NonControlled.parameters?.docs?.source
    }
  }
};
DisableFlip.parameters = {
  ...DisableFlip.parameters,
  docs: {
    ...DisableFlip.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    disableFlip: true\n  }\n}",
      ...DisableFlip.parameters?.docs?.source
    }
  }
};
InitialFocusRef.parameters = {
  ...InitialFocusRef.parameters,
  docs: {
    ...InitialFocusRef.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `const ref = useRef(null);\n\nreturn (\n  <StoryStack marginLeft=\"4\" height=\"300px\" alignItems=\"center\" justifyContent=\"center\">\n    <Popover>\n      <PopoverAnchor>\n        <Button>{anchorText}</Button>\n      </PopoverAnchor>\n      <PopoverContent initialFocusRef={ref}>\n        <PopoverChevron />\n        <StoryStack>\n          <Input ref={ref} tabIndex={0} placeholder=\"First field\" />\n          <Input tabIndex={0} placeholder=\"Second field\" />\n        </StoryStack>\n      </PopoverContent>\n    </Popover>\n  </StoryStack>\n);`\n      }\n    }\n  },\n  render: args => {\n    const ref = useRef(null);\n    return <StoryStack marginLeft=\"4\" height=\"300px\" alignItems=\"center\" justifyContent=\"center\">\n        <Popover {...args}>\n          <PopoverAnchor>\n            <Button>{anchorText}</Button>\n          </PopoverAnchor>\n          <PopoverContent initialFocusRef={ref}>\n            <PopoverChevron />\n            <StoryStack>\n              <input ref={ref} tabIndex={0} placeholder=\"First field\" />\n              <input tabIndex={0} placeholder=\"Second field\" />\n            </StoryStack>\n          </PopoverContent>\n        </Popover>\n      </StoryStack>;\n  }\n}",
      ...InitialFocusRef.parameters?.docs?.source
    }
  }
};
AppendToBody.parameters = {
  ...AppendToBody.parameters,
  docs: {
    ...AppendToBody.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'You can watch the dom to see that the popover is appended to body'\n      }\n    }\n  },\n  render: args => <StoryStack marginLeft=\"4\" height=\"300px\" alignItems=\"center\" justifyContent=\"center\">\n      <Popover {...args}>\n        <PopoverAnchor>\n          <Button>{anchorText}</Button>\n        </PopoverAnchor>\n        <PopoverContent appendToBody>\n          <PopoverChevron />\n          {contentText}\n        </PopoverContent>\n      </Popover>\n    </StoryStack>\n}",
      ...AppendToBody.parameters?.docs?.source
    }
  }
};
RenderWhenClosed.parameters = {
  ...RenderWhenClosed.parameters,
  docs: {
    ...RenderWhenClosed.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'Watch the dom to see the content exists also when popover is closed'\n      }\n    }\n  },\n  render: args => <StoryStack marginLeft=\"4\" height=\"300px\" alignItems=\"center\" justifyContent=\"center\">\n      <Popover {...args}>\n        <PopoverAnchor>\n          <Button>{anchorText}</Button>\n        </PopoverAnchor>\n        <PopoverContent renderWhenClosed>\n          <PopoverChevron />\n          {contentText}\n        </PopoverContent>\n      </Popover>\n    </StoryStack>\n}",
      ...RenderWhenClosed.parameters?.docs?.source
    }
  }
};
DisableBoxShadow.parameters = {
  ...DisableBoxShadow.parameters,
  docs: {
    ...DisableBoxShadow.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => <StoryStack marginLeft=\"4\" height=\"300px\" alignItems=\"center\" justifyContent=\"center\">\n      <Popover {...args}>\n        <PopoverAnchor>\n          <Button>{anchorText}</Button>\n        </PopoverAnchor>\n        <PopoverContent backgroundColor=\"grey_200\" disableBoxShadow>\n          <PopoverChevron />\n          {contentText}\n        </PopoverContent>\n      </Popover>\n    </StoryStack>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const anchor = await canvas.findByText('Click here');\n    await userEvent.click(anchor, {\n      delay: DELAY\n    });\n    await takeScreenshot();\n  }\n}",
      ...DisableBoxShadow.parameters?.docs?.source
    }
  }
};
FullWidthAnchor.parameters = {
  ...FullWidthAnchor.parameters,
  docs: {
    ...FullWidthAnchor.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => <StoryStack marginLeft=\"4\" height=\"300px\" alignItems=\"center\" justifyContent=\"center\">\n      <Popover {...args}>\n        <PopoverAnchor fullWidth>\n          <Button fullWidth>{anchorText}</Button>\n        </PopoverAnchor>\n        <PopoverContent>\n          <PopoverChevron />\n          {contentText}\n        </PopoverContent>\n      </Popover>\n    </StoryStack>\n}",
      ...FullWidthAnchor.parameters?.docs?.source
    }
  }
};
AnimationEvents.parameters = {
  ...AnimationEvents.parameters,
  docs: {
    ...AnimationEvents.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: args => {\n    const [animationState, setAnimationState] = useState('UnInovoked');\n    return <StoryStack direction=\"column\" marginLeft=\"4\" height=\"300px\" alignItems=\"center\" justifyContent=\"center\">\n        <Popover {...args} initialOpen={false}>\n          <PopoverAnchor>\n            <Button>{anchorText}</Button>\n          </PopoverAnchor>\n          <PopoverContent onAnimationStart={() => setAnimationState('Animation Started')} onAnimationEnd={() => setAnimationState('Animation Ended')}>\n            <PopoverChevron />\n            {contentText}\n          </PopoverContent>\n        </Popover>\n        <div> {animationState}</div>\n      </StoryStack>;\n  }\n}",
      ...AnimationEvents.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","Positions","LazyLoadedContent","Controlled","NonControlled","DisableFlip","InitialFocusRef","AppendToBody","RenderWhenClosed","DisableBoxShadow","FullWidthAnchor","AnimationEvents"];

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

/***/ "../theme/dist/esm/src/atoms/utilityClasses.ve.css.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* binding */ paddingX_0_xxl),
  q: () => (/* binding */ placeholder)
});

// EXTERNAL MODULE: ../theme/dist/esm/theme/dist/esm/src/theme.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../theme/dist/esm/src/theme.ve.css.js.vanilla.css","source":"#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"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
var extracted = __webpack_require__("../theme/dist/esm/theme/dist/esm/src/theme.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{\"fileName\":\"../theme/dist/esm/src/theme.ve.css.js.vanilla.css\",\"source\":\"#H4sIAAAAAAAAE61bX2/ruLF/308xOEGBXcB2xf8U+2Rb0u1L+1DcL0DZtKNEthxZtpMU/e4FqeQ0QzHJuejF2V3g/DgczgznNyRH3m1znYHth2bTuhnYc7N1M9h13eD6GRxsc5zB0V5ncHaboemOM7Dbbe/O5xnsmv3GnkZw6wbbtCN46R388zeAuuu3rjeQ/eW3f/1m+q4bAjyf358e7esuMzD09ng+2d4dh798GCEGmuO96xuEUgObS+9l113b9R+HmIG7bJ2ts+Ijyg30+9r+TugMwr9sBtmC/PFRRiRlKJKRSRmGZFRShiMZnZQRSCZPykgkY5MyCsnUSRmNZDZJmRzJbA3c7Xa7j5B7m0aFmMF//hNHdveZGA7u/jMxHN/7z8RwiJvPxHCUHz4Tw4F+/EwMx7r9TAyH+/CZGI740cBdlVW8qj6inYG7ghdltfqIngzcrfJ1XqmP6JOBu7xY8Yp9RHsDd5rkZZV9RM8G7qTUebn+iA4G7jiXZYn0XgzcsUqytf6IXj3KBVsi9GbgjmrOdP4RfTZwRwrGJEJfPEop4wh99XGglcBxIJmBu1KWqwgmPj7roopg6mFasAj29WK1WuURzA3cLeWSRLDwkSu1jmDpQ8dlVkoEKwN3IuPFCktrH6Y1W+bISZKHOFGl0F4R60OiieaooJHaO6+rZcURvPFeZpWKLNkGd8rleolg593hRbUSCN55d2jBc2z3Pmz6eok3ktyHnVxVkd2NL8TZcinwkg8B1kuG8ok8BlgxWiK4DbBYU2zgIcAsJxTBgS9L/wfBnjCV8H8Q7BlTVmWFWUA8ZUpeCpzwxHOmWBarAm+DJ81arOUax8SzZiVWcoUt8bTJRa5yrMTzRnElFXb+FrZBcomVeObwjBOO3fHUoZSyKFSBO7rKSwRTz52KVHyNigj13CmLiq7QXlI6JluWo2SjnjslK0uFYR5CVS4Z8pKKkJqlyFC8qQwEXJcR7LmjCp1HsOeO1IpGsOcOl2IZwZ47VPBY2nOnqipZofShmwCXWYHd2QZ4na8w7AK8zDXKE7oLcK4k2ku6D7BWApVGeh9gJTk20HOnzCTBbKCeO2spoi2mnju6onGoPHdkRbMI9tzhlLAIPo4xERU2MHCnKliJQ3UaY8IKLP0U4BVZ453vx1CRNc6q8xiTcoUjOIxwtsTOXwJdZRHloOdOkYtKY92eO6tSUIXt9tzJNSsFoiv13OEFURRb8sadDFd7Fs4dXXB8ALNw7uhVdAIzz521zgt8BLNw7mhNcPVh4dzRUuJDmIlgN1+WKN7Mc0drTgusJHBHsXyFvGSBO4qRJUGw546QVGtUZpgNlKIZjiAbuVMWJdpiFrhTFllkSeDOesVwPWGBO6tc5ThUgTtLtVTYksAdLQqBlwzcUTzD3GFNSAi2ZjiCgTucMYYt8dxZrmhBsW7PnZxQSdExyjx3lKYZxUt67pTrah3liefOuqhElCeeO8uqLKI8CVc1WsooTzx3lCiqErGBee4IVagSh8pzhy2L6CLCwnUtW2lc7dk1lMclWWF3PHfISuc5VhJubJmiCivx3MmkWEqs5HWsJwrbzbMxfdYFykFO3kovzhNOx+ojsCWcjdVnqVB+cz5Wn1IgA7kYYcawJTLcHpeEYSUqbJoucZ5wz50VV2tckbnnTr6SOUW85J47mgpFsZLaQNscne3n+95uG3ccfic627r97P1GD9mfZu+3cCBZ9if0HuCbLxSM7BsVjNxKKNh+pSCU+TcFoYgnFLgvFfiz812BPwITCnZfK1gX5F2B39+Egv0XCsaqPCoYi2tCwb2BH3+zG3v8MYMff3Xt1Q3NxsLf3cX9mMFPYAbLvrHtDM72eJ6fXd+gpy9vDPwoOt8VcUVzPrX25b/T9/D/Y9ajgf9xXb9v7Ax+/G9zcGf4u7vBP7pD0Dyd0IauzAfgYICfnhF0NCAjqDOgI+hkgNAIezJA4qm9AZpF2NlAnud5hA6xbZepbdepIbeEIc8JQ14ShrwaoNESIjNAozUEMcCiNQQ1wKI1BDPAozUEN8DjNYQBHq8hDYhYnzIg47nagI7XyA3k8VxrgMSBEbUPVrzyxgCJoK2BeKqbpIXYGSCxKXsD9jJ0CLs3kE3RZpTEmy4eDGzt+d5tEfpo4Ny1DQZ9MkMGC60zQdTpeWyzZDMY/1lkVOs/ZkGGLmhO8pQMe5MQC0ETw4K/CxCSGMYtHHHwFpGFV0QWOaUiNYcGhV6GLaQmTCRkeJDxs1OjuKkljn7VBeGn5+AnlTLlJ2WEjGoXzAeCL7i/8qQWV1JrGUTZ6RlSUYv87oIFmQ4WCKF8ik2tpiKTZHRsESTEQigtUrJK8ZzlP03wWRbLENwoFKdgA5Uyy3iIP2FZckullpKMibHQOeNi3AqVq1QSkYwwNkr7rUiK4LageDJvOUcU0ykLuFZKybdIKK9WLjKSMZ6KxBiEhQxx4AuustSe5YRSOm4v9UvyRFQJ7pmKPiq44jwtBMO0EFyM3xMEXSeVWtwMbLr2cjgi9NlA390Q9BKgee+urj87NPT6riM1KjMD6F4pia/6f0Y3PEkNkIWUf8aSzKOMRSg3cB5sjz4+SGFg446DQ98dpDTgjqgaSWXg2PUH2yJUG2gG2zYbhOYGurptni7YI+tV3Hp7QmhtYIJtRiwZl62Buu02jwh0/tOKv0ohdPeOzqcz9gZ2rUObKu9/yk+GGgP7Hhdo+fBTfDL06Lf2OLjjcEZ460MQWXnwapqhiUJ7NDC/ufqxGeZ1h43pRtvn0+08Jbfz6U0+3tPeZ0Tvhs09gs8Gant2k3AOBs4nu3Fz23eXSNXlfcxd3bF9QWPX97HaDTfnEGXk7VNfnpO+vHziy2vSF5WlfVHEvH3Hi4OrqIHL8eyQLYoZiJpMyl98IkgYkBEkDagIUsnPgEr7dbeun5jq2XRN4HZ8PMyH+7677LHb9TTP1Ca97taAa9vmdG5QqiqXisMuRWG1T4neGzj1bj4Rbgxcm3NTt9i6BwP3zXaLs0P5i9Gm71pEDdVOL2HqYGDTNnipY3qpLrnUKVTj1p5wvVFPoWwOuMSp3kDvWjs0Vyx9NmDrc9deBowPBnbNM772KU+aodk8Irqoq4FT18SJr8KJc8Kiz4lAvBi42WiPXw28dt1h3iCXdfYGdxckronfum7vP4cjnBo4dNhhzXxhtDXC+IjVzXGPcOGzZ5jbtu1uOBRaGti6nb202BI1zWOtp07r3MDgnvFca8DixNH19EavN9MHlt4aINGJr9300aX9CyF6buj99CGm76cPMd0k9D0k9D0m9LUJfYfpw04fpw873U0fcfo0fbDpp+mDTffTB5s+Tx9sekjE75Lw7WrCdQ5ht4RvzwZobMtLwt/Xqb95Nl0jJwaoiDA61ZezhD4+fRjnwgCL58ppTHM1jWmuDcgYyw2oKAa5NZDHtvifQ7iTs8PvagZk1+PfXGx+joafQcTD2/8Mi8SwM3Bojgf77K/Yk9FdPPrhrywW3pto9CvN9x+F1Teamy80q1j44QubU39Fkx+/mYyE2//jSl+oOvy6KhrPPX4xl37ncGe+kf5q8um/CsBX8XiaVv+8D6vN327caOhs4GCfk0ND9MDKLwbQ96H8agA1vfObAfTFLn82gL5f5i8GUH8/fzWAvo3YzABqsFtiAD3qrH/UoSuj9Q86ZKvl/tRCiDBAkLVW+iqMEGWAIHut9qcQQnIDc7yWnR7Ctvbn9aaJ3oN2k3zL2K2/BR/QZcL68zSLQX+g0hgMJ2oM+iNVxGATrukR+GCATVZ/DLf3CGwNiAnoL5aXutnMa/fauD40HBYqtBzwL8PsMSE5AzL91ZftYsmFEmMfY0HFRO/pM72R3NOkv2H7SX/DnqO2iB2m06ataXtNtCjtLZEZ/k56fLndux7jLwbq3tnH+a3rsZbX95HoulZnBh6dO01wErlQ04jKNYuoXPNp2ahFnOm1Z0z8a4Lak4ZET73a84ZEP/+ocw9GL8A6NKqjN2DtL6Ik+pFDvYnd2sZuOeN/j4ignYewr3sPIZrXvkW9QDyvGw+hSlQ/eAjVovrRwLbvTvPzvd12t9+/b0j/MZH/qjk9lf6iUT0V/qRpjX8y2sYufN/Bjlf6rpsdy3/e2camHWLTfrHNHa/3iy3veNrn7W9s5nFi5q/1widh+cW+eMrOT3rk2NBuYuivN8wnMf3l5nk884tGOjb3NCXXt131aUy/7bBPwvmL3fYJC77ovGPHnqbnQt2PT/Rd41pU/utzQnhIdJTqi++hREfBdWy0WtzZqEOz5Io7KPWzgavz/0eAv538699LnG6JITAAAA==\"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js");
;// ../theme/dist/esm/src/theme/dist/esm/src/atoms/utilityClasses.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../theme/dist/esm/src/atoms/utilityClasses.ve.css.js.vanilla.css","source":"Ll8xb2dnNWRwMTo6cGxhY2Vob2xkZXIgewogIGNvbG9yOiB2YXIoLS1ocGthemYxdik7CiAgdGV4dC1vdmVyZmxvdzogdmFyKC0taHBrYXpmN2QpOwogIGZvbnQtc2l6ZTogdmFyKC0taHBrYXpmOGUpOwogIGxpbmUtaGVpZ2h0OiB2YXIoLS1ocGthemY4dyk7CiAgZm9udC1mYW1pbHk6IHZhcigtLWhwa2F6ZjRoKTsKfQpAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNzYwcHgpIHsKICBib2R5IC5fMW9nZzVkcDAgewogICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1ocGthemY0dCk7CiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1ocGthemY0dCk7CiAgfQp9"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const webpack_plugin_extracted = ({});
;// ../theme/dist/esm/src/atoms/utilityClasses.ve.css.js


var paddingX_0_xxl = '_1ogg5dp0';
var placeholder = '_1ogg5dp1';

/***/ }),

/***/ "../ui_utils/dist/esm/src/components/LazyComponent/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../hooks/dist/esm/src/hooks/useLatest/index.js");
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



const EmptyComponent = () => null;
const emptyFunction = () => undefined;
const LazyComponent = _ref => {
  var _componentRef$current;
  let {
    lazyImport,
    shouldImport = true,
    fallback = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EmptyComponent, null),
    placeholder = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(EmptyComponent, null),
    beforeLoad = emptyFunction,
    afterLoad = emptyFunction,
    onError = emptyFunction,
    componentProps
  } = _ref;
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const componentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isImported = !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNil)(componentRef.current);
  const Component = isImported ? (_componentRef$current = componentRef.current) === null || _componentRef$current === void 0 ? void 0 : _componentRef$current.default : null;
  const latestImport = (0,_fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(lazyImport);
  const latestCallbacks = (0,_fiverr_private_hooks__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({
    beforeLoad,
    afterLoad,
    onError
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const lazyLoadComponent = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* () {
        try {
          latestCallbacks.current.beforeLoad();
          componentRef.current = yield latestImport.current();
          latestCallbacks.current.afterLoad();
        } catch (error) {
          latestCallbacks.current.onError(error);
        }
        setIsLoading(false);
      });
      return function lazyLoadComponent() {
        return _ref2.apply(this, arguments);
      };
    }();
    if (shouldImport && !isImported) {
      lazyLoadComponent();
    }
  }, [shouldImport, isImported, latestCallbacks, latestImport]);
  if (isLoading) {
    return placeholder;
  }
  return Component ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, componentProps) : fallback;
};
LazyComponent.displayName = 'LazyComponent';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LazyComponent);
;
LazyComponent.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LazyComponent"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../visuals/dist/esm/src/components/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ pascalToSnake)
/* harmony export */ });
const pascalToSnake = str => str.replace(/[A-Z]/g, (letter, index) => index === 0 ? letter.toLowerCase() : "_".concat(letter.toLowerCase()));

/***/ })

}]);
//# sourceMappingURL=9031.f0b75f61.iframe.bundle.js.map