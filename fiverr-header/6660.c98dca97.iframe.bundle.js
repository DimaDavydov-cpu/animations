"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[6660],{

/***/ "../button/dist/esm/src/components/ChevronButton/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_ChevronButton)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/ChevronDown.js
var ChevronDown = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ChevronDown.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js
var translate = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/IconButton/index.js
var IconButton = __webpack_require__("../button/dist/esm/src/components/IconButton/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/shared/constants.js
var constants = __webpack_require__("../button/dist/esm/src/components/shared/constants.js");
;// ../button/dist/esm/src/components/ChevronButton/constants.js
const DIRECTIONS = {
  left: 'rotate(90deg)',
  right: 'rotate(-90deg)',
  up: 'rotate(-180deg)'
};
;// ../button/dist/esm/src/components/ChevronButton/index.js
const _excluded = ["size", "theme", "onClick", "dataTestId", "className", "type", "ariaLabel", "disabled", "shape", "chevronDirection", "dataTrackTag"];
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







const ChevronButton = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      size = 'md',
      theme = 'dark',
      onClick,
      dataTestId,
      className,
      type = 'button',
      ariaLabel,
      disabled,
      shape = 'square',
      chevronDirection = 'down',
      dataTrackTag = 'chevron_button'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement(IconButton/* default */.A, _objectSpread({
    ref: ref,
    "aria-label": ariaLabel || (0,translate/* translate */.T)('button.chevronButton.toggle'),
    variant: "ghost",
    size: size,
    onClick: onClick,
    "data-testid": dataTestId,
    className: className,
    type: type,
    colorScheme: theme === 'light' ? 'white' : undefined,
    disabled: disabled,
    shape: shape,
    dataTrackTag: dataTrackTag
  }, rest), /*#__PURE__*/react.createElement(Box/* default */.A, {
    transition: "0.15s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: DIRECTIONS[chevronDirection]
  }, /*#__PURE__*/react.createElement(ChevronDown/* default */.A, {
    color: disabled ? undefined : constants/* ICON_COLORS */.b[theme]
  })));
});
ChevronButton.displayName = 'ChevronButton';
/* harmony default export */ const components_ChevronButton = (ChevronButton);
;
ChevronButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ChevronButton"
};

/***/ }),

/***/ "../dropdown/dist/esm/src/components/Dropdown/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Dropdown)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../popover/dist/esm/src/components/Popover/index.js
var Popover = __webpack_require__("../popover/dist/esm/src/components/Popover/index.js");
// EXTERNAL MODULE: ../popover/dist/esm/src/components/Popover/PopoverContext/index.js
var PopoverContext = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContext/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useBreakpoint/index.js + 2 modules
var useBreakpoint = __webpack_require__("../hooks/dist/esm/src/hooks/useBreakpoint/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js + 1 modules
var getContext = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.1/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/Dropdown/useDropdownContext/index.js
var useDropdownContext = __webpack_require__("../dropdown/dist/esm/src/components/Dropdown/useDropdownContext/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
;// ../dropdown/dist/esm/src/components/Dropdown/useDropdownState/utils.js

const getValues = (values, defaultValues) => ((0,lodash.isEmpty)(values) ? defaultValues : values) || {};
;// ../dropdown/dist/esm/src/components/Dropdown/useDropdownState/index.js
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



const useDropdownState = _ref => {
  let {
    defaultValues,
    values: _values,
    onChange: _onChange
  } = _ref;
  const controlled = !(0,lodash.isUndefined)(_values);
  const [values, setValues] = (0,react.useState)(getValues(_values, defaultValues));
  (0,react.useEffect)(() => {
    setValues(getValues(_values, defaultValues));
  }, [defaultValues, _values, setValues]);
  const onChange = (0,react.useCallback)(currentInput => {
    const {
      checked,
      name,
      value,
      type
    } = currentInput;
    let newValue;
    if (type === 'checkbox') {
      if (checked) {
        newValue = _objectSpread(_objectSpread({}, values), {}, {
          [name]: values[name] ? [...values[name], value] : [value]
        });
      } else {
        var _values$name;
        newValue = _objectSpread(_objectSpread({}, values), {}, {
          [name]: (_values$name = values[name]) === null || _values$name === void 0 ? void 0 : _values$name.filter(itemValue => itemValue !== value)
        });
      }
    } else {
      newValue = _objectSpread(_objectSpread({}, values), {}, {
        [name]: value
      });
    }
    if (!controlled) {
      setValues((0,lodash.omitBy)(newValue, lodash.isEmpty));
    }
    _onChange === null || _onChange === void 0 || _onChange(newValue);
  }, [controlled, _onChange, values]);
  return {
    onChange,
    defaultValues,
    values,
    setValues
  };
};
/* harmony default export */ const Dropdown_useDropdownState = (useDropdownState);
;// ../dropdown/dist/esm/src/components/Dropdown/DropdownContextProvider/index.js
function DropdownContextProvider_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function DropdownContextProvider_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? DropdownContextProvider_ownKeys(Object(t), !0).forEach(function (r) {
      DropdownContextProvider_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : DropdownContextProvider_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function DropdownContextProvider_defineProperty(e, r, t) {
  return (r = DropdownContextProvider_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function DropdownContextProvider_toPropertyKey(t) {
  var i = DropdownContextProvider_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function DropdownContextProvider_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}






const DropdownContextProvider = _ref => {
  let {
    children,
    onChange,
    values,
    defaultValues,
    searchWhenClosed,
    keyboardNavigationLoop,
    searchOnKeyPress,
    selectedIndicatorPosition,
    theme,
    shouldStopPropagation
  } = _ref;
  const [focusedItem, setFocusedItem] = (0,react.useState)({});
  const state = Dropdown_useDropdownState({
    onChange,
    values,
    defaultValues
  });
  const anchorRef = (0,react.useRef)(null);
  const headerActionsRef = (0,react.useRef)(null);
  const footerActionsRef = (0,react.useRef)(null);
  const items = (0,react.useRef)([]).current;
  const isMultiSelect = (0,react.useRef)(null);
  const breakpoint = (0,useBreakpoint/* default */.A)();
  const {
    isMobile
  } = (0,getContext/* default */.A)();
  const isMobileView = breakpoint === 'default' || isMobile;
  const popoverContext = (0,PopoverContext/* usePopoverContext */.C)();
  return /*#__PURE__*/react.createElement(useDropdownContext/* DropdownContext */.r.Provider, {
    value: DropdownContextProvider_objectSpread(DropdownContextProvider_objectSpread({}, state), {}, {
      isMobileView,
      searchWhenClosed,
      anchorRef,
      items,
      focusedItem,
      setFocusedItem,
      keyboardNavigationLoop,
      isMultiSelect,
      searchOnKeyPress,
      selectedIndicatorPosition,
      popoverContext,
      headerActionsRef,
      footerActionsRef,
      isDark: theme === 'dark',
      shouldStopPropagation
    })
  }, children);
};
/* harmony default export */ const Dropdown_DropdownContextProvider = (DropdownContextProvider);
;
DropdownContextProvider.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "DropdownContextProvider"
};
;// ../dropdown/dist/esm/src/components/Dropdown/index.js



const Dropdown = _ref => {
  let {
    children,
    onChange,
    defaultValues,
    values,
    searchWhenClosed = false,
    isOpen,
    onOpenChanged,
    initialOpen,
    disableFlip,
    position = 'bottom-start',
    keyboardNavigationLoop = false,
    searchOnKeyPress = true,
    selectedIndicatorPosition = 'left',
    theme = 'light',
    shouldStopPropagation
  } = _ref;
  return /*#__PURE__*/react.createElement(Popover/* default */.A, {
    position: position,
    isOpen: isOpen,
    onOpenChanged: onOpenChanged,
    initialOpen: initialOpen,
    disableFlip: disableFlip
  }, /*#__PURE__*/react.createElement(Dropdown_DropdownContextProvider, {
    onChange: onChange,
    defaultValues: defaultValues,
    values: values,
    searchWhenClosed: searchWhenClosed,
    keyboardNavigationLoop: keyboardNavigationLoop,
    searchOnKeyPress: searchOnKeyPress,
    selectedIndicatorPosition: selectedIndicatorPosition,
    theme: theme,
    shouldStopPropagation: shouldStopPropagation
  }, children));
};
/* harmony default export */ const components_Dropdown = (Dropdown);
;
Dropdown.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Dropdown"
};

/***/ }),

/***/ "../dropdown/dist/esm/src/components/Dropdown/useDropdownContext/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   r: () => (/* binding */ DropdownContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const DropdownContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useDropdownContext = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DropdownContext);
  if (!context) {
    throw new Error('useDropdownContext must be used within a DropdownProvider');
  }
  return context;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDropdownContext);

/***/ }),

/***/ "../dropdown/dist/esm/src/components/Dropdown/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ getIsMultiSelect),
/* harmony export */   Y: () => (/* binding */ focusContent)
/* harmony export */ });
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../ui_utils/dist/esm/src/utils/filterChildrenByType/index.js");

const getIsMultiSelect = children => {
  const menuGroups = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_0__/* .filterChildrenByType */ .X)(children, 'MenuGroup') || [];
  if (menuGroups.length > 1 || menuGroups.some(group => group.props.isMulti === true)) {
    return true;
  }
  return false;
};
const focusContent = _ref => {
  let {
    items,
    setFocusedItem,
    values
  } = _ref;
  const currentHoveredItem = items.find(item => {
    var _item$ref$current, _item$ref$current$mat;
    return !item.disabled && ((_item$ref$current = item.ref.current) === null || _item$ref$current === void 0 || (_item$ref$current$mat = _item$ref$current.matches) === null || _item$ref$current$mat === void 0 ? void 0 : _item$ref$current$mat.call(_item$ref$current, ':hover'));
  });
  if (currentHoveredItem) {
    setFocusedItem(currentHoveredItem.ref);
    return;
  }
  const hasSelectedItems = Boolean(Object.keys(values).length);
  if (hasSelectedItems) {
    var _items$firstSelectedI;
    const firstSelectedItemIdx = items.findIndex(item => Array.isArray(values[item.name]) ? values[item.name].includes(item.value) : values[item.name] === item.value);
    setFocusedItem((_items$firstSelectedI = items[firstSelectedItemIdx]) === null || _items$firstSelectedI === void 0 ? void 0 : _items$firstSelectedI.ref);
  } else {
    const firstItem = items.find(item => !item.disabled);
    if (firstItem !== null && firstItem !== void 0 && firstItem.ref) {
      setFocusedItem(firstItem === null || firstItem === void 0 ? void 0 : firstItem.ref);
    }
  }
};

/***/ }),

/***/ "../dropdown/dist/esm/src/components/DropdownAnchor/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContext/index.js");
/* harmony import */ var _fiverr_private_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverAnchor/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
/* harmony import */ var _Dropdown_useDropdownContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../dropdown/dist/esm/src/components/Dropdown/useDropdownContext/index.js");
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




const DropdownAnchor = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
    disabled,
    children,
    fullWidth,
    onFocus,
    onBlur,
    embed,
    onClick,
    dataTrackTag = 'dropdown_anchor',
    dataTrackValue
  } = _ref;
  const {
    open,
    setOpen
  } = (0,_fiverr_private_popover__WEBPACK_IMPORTED_MODULE_1__/* .usePopoverContext */ .C)();
  const {
    items,
    values,
    searchWhenClosed,
    anchorRef,
    onChange,
    isMultiSelect,
    searchOnKeyPress,
    shouldStopPropagation
  } = (0,_Dropdown_useDropdownContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)();
  const hasOpened = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(open);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => anchorRef.current);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (open) {
      hasOpened.current = true;
    }
  }, [open, hasOpened]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (open) {
      const focusedElement = anchorRef.current;
      onFocus === null || onFocus === void 0 || onFocus({
        target: focusedElement
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSearchKeys = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    const {
      key
    } = event;
    const isValidKey = /^[a-zA-Z0-9]$/.test(key);
    if (!isValidKey) {
      return;
    }
    event.preventDefault();
    if (isMultiSelect.current || !searchWhenClosed || open) {
      return;
    }
    const selectedValue = Object.values(values)[0];
    const selectedValueIndex = items.findIndex(item => item.value === selectedValue);
    const listStartIndex = selectedValueIndex === -1 ? 0 : selectedValueIndex;
    const list = [...items.slice(listStartIndex), ...items.slice(0, listStartIndex)];
    for (const item of list) {
      var _itemElement$textCont;
      const itemElement = item.ref.current;
      const isSelected = (item === null || item === void 0 ? void 0 : item.value) === selectedValue;
      const firstLetter = itemElement === null || itemElement === void 0 || (_itemElement$textCont = itemElement.textContent) === null || _itemElement$textCont === void 0 ? void 0 : _itemElement$textCont[0].toLocaleLowerCase();
      if (firstLetter === key.toLowerCase() && !isSelected && !item.disabled) {
        onChange(item);
        break;
      }
    }
  }, [isMultiSelect, items, onChange, open, searchWhenClosed, values]);
  const handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    const {
      code
    } = event;
    if (code === 'ArrowUp' || code === 'ArrowDown' || code === 'Space') {
      event.preventDefault();
      setOpen(true);
    } else if (searchOnKeyPress) {
      handleSearchKeys(event);
    }
  }, [handleSearchKeys, setOpen, searchOnKeyPress]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const anchorElement = anchorRef.current;
    if (!anchorElement) {
      return;
    }
    if (!open) {
      anchorElement === null || anchorElement === void 0 || anchorElement.addEventListener('keydown', handleKeyDown);
    } else {
      anchorElement.removeEventListener('keydown', handleKeyDown);
    }
    return () => anchorElement.removeEventListener('keydown', handleKeyDown);
  }, [anchorRef, handleKeyDown, open]);
  const handleBlur = event => {
    if (open) {
      return;
    }
    onBlur === null || onBlur === void 0 || onBlur(event);
  };
  const handleFocus = event => {
    if (hasOpened.current) {
      hasOpened.current = false;
      return;
    }
    onFocus === null || onFocus === void 0 || onFocus(event);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_popover__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    fullWidth: fullWidth,
    disabled: disabled,
    ariaHasPopup: "listbox",
    onFocus: handleFocus,
    onBlur: handleBlur,
    onClick: e => {
      if (shouldStopPropagation) {
        e.stopPropagation();
      }
      onClick === null || onClick === void 0 || onClick(e);
    },
    embed: embed,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, embed ? anchorProps => (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .renderChildren */ .s)(children, _objectSpread({
    ref: anchorRef
  }, anchorProps)) : (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .renderChildren */ .s)(children, {
    ref: anchorRef
  }));
});
DropdownAnchor.displayName = 'DropdownAnchor';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownAnchor);
;
DropdownAnchor.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "DropdownAnchor"
};

/***/ }),

/***/ "../dropdown/dist/esm/src/components/DropdownContent/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_DropdownContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../popover/dist/esm/src/components/Popover/PopoverContent/index.js
var PopoverContent = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContent/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useElementSize/index.js + 1 modules
var useElementSize = __webpack_require__("../hooks/dist/esm/src/hooks/useElementSize/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js
var excludeChildrenByType = __webpack_require__("../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/DropdownMenu/useMenuContext/index.js
var useMenuContext = __webpack_require__("../dropdown/dist/esm/src/components/DropdownMenu/useMenuContext/index.js");
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/Dropdown/useDropdownContext/index.js
var useDropdownContext = __webpack_require__("../dropdown/dist/esm/src/components/Dropdown/useDropdownContext/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../popover/dist/esm/src/components/Popover/PopoverContext/index.js
var PopoverContext = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContext/index.js");
;// ../dropdown/dist/esm/src/components/DropdownMenu/useMenuNavigation/constants.js
const NAVIGATION_THROTTLE_DELAY = 100;
;// ../dropdown/dist/esm/src/components/DropdownMenu/useMenuNavigation/utils.js
const getItemToFocus = _ref => {
  let {
    startIndex,
    items
  } = _ref;
  for (let i = startIndex; i <= items.length - 1; i++) {
    const item = items[i];
    if (!item.disabled) {
      return item.ref;
    }
  }
};
;// ../dropdown/dist/esm/src/components/DropdownMenu/useMenuNavigation/index.js






const useMenuNavigation = _ref => {
  let {
    items,
    onEnter,
    onTab
  } = _ref;
  const {
    open
  } = (0,PopoverContext/* usePopoverContext */.C)();
  const {
    setFocusedItem,
    focusedItem,
    anchorRef,
    keyboardNavigationLoop,
    searchOnKeyPress,
    headerActionsRef,
    footerActionsRef
  } = (0,useDropdownContext/* default */.A)();
  const getMenuItemIndex = (0,react.useCallback)(toFind => items.findIndex(_ref2 => {
    let {
      ref
    } = _ref2;
    return ref === toFind;
  }), [items]);
  const moveUpFocus = (0,react.useCallback)(() => {
    const index = getMenuItemIndex(focusedItem);
    const startIndex = index === 0 && keyboardNavigationLoop ? items.length - 1 : index;
    for (let i = startIndex; i >= 0; i--) {
      const item = items[i];
      if (!item.disabled && i !== index) {
        setFocusedItem(item.ref);
        break;
      }
    }
  }, [keyboardNavigationLoop, focusedItem, getMenuItemIndex, items, setFocusedItem]);
  const moveDownFocus = (0,react.useCallback)(() => {
    const index = getMenuItemIndex(focusedItem);
    const startIndex = index === items.length - 1 && keyboardNavigationLoop ? 0 : index + 1;
    for (let i = startIndex; i <= items.length - 1; i++) {
      const item = items[i];
      if (!item.disabled) {
        setFocusedItem(getItemToFocus({
          startIndex,
          items
        }));
        break;
      }
    }
  }, [keyboardNavigationLoop, focusedItem, getMenuItemIndex, items, setFocusedItem]);
  const moveUpFocusThrottled = (0,react.useMemo)(() => (0,lodash.throttle)(moveUpFocus, NAVIGATION_THROTTLE_DELAY), [moveUpFocus]);
  const moveDownFocusThrottled = (0,react.useMemo)(() => (0,lodash.throttle)(moveDownFocus, NAVIGATION_THROTTLE_DELAY), [moveDownFocus]);
  const selectItem = (0,react.useCallback)(event => {
    event.preventDefault();
    const index = getMenuItemIndex(focusedItem);
    if (index > -1) {
      var _item$ref$current, _item$ref$current$cli;
      const item = items[index];
      (_item$ref$current = item.ref.current) === null || _item$ref$current === void 0 || (_item$ref$current$cli = _item$ref$current.click) === null || _item$ref$current$cli === void 0 || _item$ref$current$cli.call(_item$ref$current);
    }
  }, [getMenuItemIndex, focusedItem, items]);
  const searchItem = (0,react.useCallback)(event => {
    const {
      key
    } = event;
    const focusedItemIndex = getMenuItemIndex(focusedItem);
    const listStartIndex = focusedItemIndex === -1 ? 0 : focusedItemIndex;
    const list = [...items.slice(listStartIndex), ...items.slice(0, listStartIndex)];
    for (const item of list) {
      var _itemElement$textCont;
      const itemElement = item.ref.current;
      const isFocused = itemElement === (focusedItem === null || focusedItem === void 0 ? void 0 : focusedItem.current);
      const firstLetter = itemElement === null || itemElement === void 0 || (_itemElement$textCont = itemElement.textContent) === null || _itemElement$textCont === void 0 ? void 0 : _itemElement$textCont[0].toLocaleLowerCase();
      if (firstLetter === key.toLowerCase() && !isFocused && !item.disabled) {
        setFocusedItem(item.ref);
        break;
      }
    }
  }, [focusedItem, getMenuItemIndex, items, setFocusedItem]);
  const handleKeyDown = (0,react.useCallback)(event => {
    const {
      code,
      shiftKey
    } = event;
    switch (code) {
      case 'Tab':
        {
          event.preventDefault();
          if (shiftKey) {
            if (!headerActionsRef.current) {
              onTab === null || onTab === void 0 || onTab();
              break;
            }
            const firstHeaderAction = headerActionsRef.current.children.item(0);
            firstHeaderAction === null || firstHeaderAction === void 0 || firstHeaderAction.focus();
            setFocusedItem({
              current: null
            });
          } else {
            var _footerActionsRef$cur;
            if (!footerActionsRef.current) {
              onTab === null || onTab === void 0 || onTab();
              break;
            }
            const firstFooterAction = footerActionsRef === null || footerActionsRef === void 0 || (_footerActionsRef$cur = footerActionsRef.current) === null || _footerActionsRef$cur === void 0 ? void 0 : _footerActionsRef$cur.children.item(0);
            firstFooterAction === null || firstFooterAction === void 0 || firstFooterAction.focus();
            setFocusedItem({
              current: null
            });
            break;
          }
          break;
        }
      case 'ArrowUp':
        {
          event.preventDefault();
          moveUpFocusThrottled();
          break;
        }
      case 'ArrowDown':
        {
          event.preventDefault();
          moveDownFocusThrottled();
          break;
        }
      case 'Enter':
        {
          selectItem(event);
          onEnter === null || onEnter === void 0 || onEnter();
          break;
        }
      default:
        {
          if (searchOnKeyPress) {
            searchItem(event);
          }
          break;
        }
    }
  }, [onTab, moveUpFocusThrottled, moveDownFocusThrottled, selectItem, onEnter, searchOnKeyPress, searchItem, headerActionsRef, footerActionsRef, setFocusedItem]);
  (0,react.useEffect)(() => {
    const currentRef = anchorRef.current;
    if (open && currentRef) {
      currentRef.addEventListener('keydown', handleKeyDown);
    } else {
      currentRef === null || currentRef === void 0 || currentRef.removeEventListener('keydown', handleKeyDown);
    }
    return () => currentRef === null || currentRef === void 0 ? void 0 : currentRef.removeEventListener('keydown', handleKeyDown);
  }, [anchorRef, handleKeyDown, open]);
};
/* harmony default export */ const DropdownMenu_useMenuNavigation = (useMenuNavigation);
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/Dropdown/utils.js
var utils = __webpack_require__("../dropdown/dist/esm/src/components/Dropdown/utils.js");
;// ../dropdown/dist/esm/src/components/DropdownContent/useContent/index.js






const useContent = () => {
  const {
    setOpen,
    open
  } = (0,PopoverContext/* usePopoverContext */.C)();
  const {
    values,
    anchorRef,
    items,
    searchWhenClosed,
    setFocusedItem,
    isMultiSelect
  } = (0,useDropdownContext/* default */.A)();
  const hasOpened = (0,react.useRef)(open);
  const contentRef = (0,react.useRef)(null);
  const onAnimationStart = () => {
    if (open) {
      if (searchWhenClosed) {
        setTimeout(() => (0,utils/* focusContent */.Y)({
          items,
          setFocusedItem,
          values
        }), 50);
      } else {
        (0,utils/* focusContent */.Y)({
          items,
          setFocusedItem,
          values
        });
      }
    }
  };
  (0,react.useEffect)(() => {
    if (open) {
      hasOpened.current = true;
    } else if (hasOpened.current) {
      var _anchorRef$current;
      hasOpened.current = false;
      (_anchorRef$current = anchorRef.current) === null || _anchorRef$current === void 0 || _anchorRef$current.focus();
    }
  }, [open, hasOpened, anchorRef, setFocusedItem]);
  const addMenuItem = (0,react.useCallback)(menuItem => {
    const menuItemsElements = contentRef.current && Array.from(contentRef.current.querySelectorAll('[role="listitem"]'));
    const updatedMenuItems = [];
    items.push(menuItem);
    items.forEach(item => {
      const itemIndex = menuItemsElements === null || menuItemsElements === void 0 ? void 0 : menuItemsElements.findIndex(child => child === item.ref.current);
      if (itemIndex !== undefined && itemIndex !== -1 && !(0,lodash.isNil)(item)) {
        updatedMenuItems[itemIndex] = item;
      }
    });
    items.splice(0, items.length, ...(0,lodash.compact)(updatedMenuItems));
  }, [items, contentRef]);
  const removeMenuItem = (0,react.useCallback)(item => {
    const index = items.findIndex(_ref => {
      let {
        ref
      } = _ref;
      return ref.current === item.current;
    });
    if (index > -1) {
      items.splice(index, 1);
    }
  }, [items]);
  const closeMenu = (0,react.useCallback)(() => {
    if (!open) {
      return;
    }
    if (!isMultiSelect.current) {
      setOpen === null || setOpen === void 0 || setOpen(false);
    }
  }, [open, isMultiSelect, setOpen]);
  const onTab = (0,react.useCallback)(() => {
    if (!open) {
      return;
    }
    setOpen === null || setOpen === void 0 || setOpen(false);
  }, [open, setOpen]);
  DropdownMenu_useMenuNavigation({
    items,
    onEnter: closeMenu,
    onSpace: closeMenu,
    onTab
  });
  return {
    closeMenu,
    addMenuItem,
    removeMenuItem,
    onAnimationStart,
    contentRef
  };
};
/* harmony default export */ const DropdownContent_useContent = (useContent);
;// ../dropdown/dist/esm/src/components/dropdown/dist/esm/src/components/DropdownContent/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../dropdown/dist/esm/src/components/DropdownContent/styles.ve.css.js.vanilla.css","source":"Ll8xZzRuYzV6MCB7CiAgc2Nyb2xsYmFyLWNvbG9yOiAjOTU5NzlEIHRyYW5zcGFyZW50Owp9"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../dropdown/dist/esm/src/components/DropdownContent/styles.ve.css.js

var scrollbarColor = '_1g4nc5z0';
;// ../dropdown/dist/esm/src/components/DropdownContent/styles.js
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

const getStylingProps = _ref => {
  let {
    isDark
  } = _ref;
  return _objectSpread(_objectSpread({
    boxShadow: 'aa',
    paddingY: '2',
    borderRadius: isDark ? '2xl' : 'lg',
    backgroundColor: isDark ? 'black' : 'white'
  }, isDark && {
    borderColor: 'white_20',
    borderWidth: 'sm',
    borderStyle: 'solid'
  }), {}, {
    className: scrollbarColor
  });
};
;// ../dropdown/dist/esm/src/components/DropdownContent/index.js
function DropdownContent_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function DropdownContent_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? DropdownContent_ownKeys(Object(t), !0).forEach(function (r) {
      DropdownContent_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : DropdownContent_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function DropdownContent_defineProperty(e, r, t) {
  return (r = DropdownContent_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function DropdownContent_toPropertyKey(t) {
  var i = DropdownContent_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function DropdownContent_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}










const DropdownContent = _ref => {
  let {
    children,
    appendToBody,
    disableExitAnimation = false,
    fullWidth,
    closeOnClickOutside,
    zIndex,
    goExperimental = false,
    templateColumns,
    width,
    variant = 'default',
    maxHeight,
    dataTrackTag = 'dropdown',
    dataTrackValue
  } = _ref;
  const {
    searchWhenClosed,
    anchorRef,
    isDark: dropdownIsDark,
    isMobileView
  } = (0,useDropdownContext/* default */.A)();
  const content = DropdownContent_useContent();
  const {
    width: anchorWidth
  } = (0,useElementSize/* default */.A)(anchorRef.current);
  const isDark = goExperimental || dropdownIsDark;
  const isSectionsVariant = variant === 'sections';
  const footer = (0,findChildByType/* findChildByType */.B)(children, 'DropdownFooter');
  const restChildren = (0,excludeChildrenByType/* excludeChildrenByType */.h)(children, 'DropdownFooter');
  const childrenArray = react.Children.toArray(restChildren);
  const contentDisplay = isSectionsVariant && !isMobileView ? 'grid' : undefined;
  return /*#__PURE__*/react.createElement(PopoverContent/* default */.A, {
    fullWidth: isSectionsVariant || fullWidth,
    disablePadding: true,
    renderWhenClosed: searchWhenClosed,
    disableBoxShadow: true,
    appendToBody: appendToBody,
    animationType: "slideFade",
    onAnimationStart: content.onAnimationStart,
    disableAutoFocus: true,
    minWidth: anchorWidth,
    disableExitAnimation: disableExitAnimation,
    closeOnClickOutside: closeOnClickOutside,
    zIndex: zIndex,
    backgroundColor: isDark ? 'transparent' : undefined,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(useMenuContext/* DropdownMenuContext */.c.Provider, {
    value: DropdownContent_objectSpread(DropdownContent_objectSpread({}, content), {}, {
      fullWidth,
      isDark,
      variant
    })
  }, /*#__PURE__*/react.createElement(Container/* default */.A, getStylingProps({
    isDark
  }), /*#__PURE__*/react.createElement(Container/* default */.A, {
    overflowX: "auto"
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    gap: isSectionsVariant ? '4' : undefined,
    overflowY: isSectionsVariant ? 'auto' : undefined,
    ref: content.contentRef,
    boxSizing: "borderBox",
    width: isMobileView && isSectionsVariant ? 'fit-content' : width,
    display: contentDisplay,
    maxHeight: maxHeight,
    templateColumns: templateColumns
  }, isSectionsVariant ? react.Children.map(childrenArray, (child, index) => (0,render_children/* renderChildren */.s)(child, {
    withDivider: index < Number(restChildren.length) - 1
  })) : restChildren)), footer)));
};
DropdownContent.id = 'DropdownContent';
DropdownContent.displayName = 'DropdownContent';
/* harmony default export */ const components_DropdownContent = (DropdownContent);
;
DropdownContent.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "DropdownContent"
};

/***/ }),

/***/ "../dropdown/dist/esm/src/components/DropdownMenu/MenuItem/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DropdownMenu_MenuItem)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Check.js
var Check = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Check.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Input/index.js
var Input = __webpack_require__("../inputs/dist/esm/src/components/Input/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Checkbox/index.js + 2 modules
var Checkbox = __webpack_require__("../inputs/dist/esm/src/components/Checkbox/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/utils.js
var utils = __webpack_require__("../theme/dist/esm/src/atoms/utils.js");
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/Dropdown/useDropdownContext/index.js
var useDropdownContext = __webpack_require__("../dropdown/dist/esm/src/components/Dropdown/useDropdownContext/index.js");
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/DropdownMenu/useMenuContext/index.js
var useMenuContext = __webpack_require__("../dropdown/dist/esm/src/components/DropdownMenu/useMenuContext/index.js");
// EXTERNAL MODULE: ../dropdown/dist/esm/src/components/DropdownMenu/useMenuGroupContext/index.js
var useMenuGroupContext = __webpack_require__("../dropdown/dist/esm/src/components/DropdownMenu/useMenuGroupContext/index.js");
;// ../dropdown/dist/esm/src/components/DropdownMenu/MenuItem/constants.js
const DEFAULT_ITEM_NAME = 'item';
;// ../dropdown/dist/esm/src/components/DropdownMenu/MenuItem/index.js
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









const MenuItem = _ref => {
  let {
    children,
    value,
    selectable,
    disabled = false,
    href,
    target,
    rel,
    onClick,
    dataTrackTag = 'menu_item',
    dataTrackValue
  } = _ref;
  const itemRef = (0,react.useRef)(null);
  const inputRef = (0,react.useRef)(null);
  const [isFocused, setIsFocused] = (0,react.useState)(false);
  const {
    onChange,
    values,
    focusedItem,
    setFocusedItem,
    items,
    anchorRef,
    selectedIndicatorPosition,
    shouldStopPropagation
  } = (0,useDropdownContext/* default */.A)();
  const {
    addMenuItem,
    removeMenuItem,
    closeMenu,
    isDark
  } = (0,useMenuContext/* default */.A)();
  const {
    isMulti,
    name = DEFAULT_ITEM_NAME,
    hideSelectedIndicator
  } = (0,useMenuGroupContext/* default */.A)();
  const isChecked = (0,react.useMemo)(() => {
    var _values$name;
    return Boolean(isMulti ? (_values$name = values[name]) === null || _values$name === void 0 ? void 0 : _values$name.includes(value === null || value === void 0 ? void 0 : value.toString()) : values[name] === (value === null || value === void 0 ? void 0 : value.toString()));
  }, [isMulti, values, name, value]);
  const shouldUseAnchorElement = href && !disabled;
  const MenuItemWrapper = shouldUseAnchorElement ? Box/* default */.A : react.Fragment;
  const primaryColor = 'grey_1200';
  const darkPrimaryColor = 'white';
  const disabledColor = 'grey_800';
  const defaultColor = isDark ? darkPrimaryColor : primaryColor;
  const color = disabled ? disabledColor : defaultColor;
  const menuItemWrapperProps = shouldUseAnchorElement ? {
    as: 'a',
    href,
    target,
    rel,
    decoration: {
      default: 'none',
      hover: 'none'
    },
    color: {
      default: color,
      hover: color
    }
  } : {};
  const handleOnMouseEnter = (0,react.useCallback)(() => setFocusedItem(itemRef), [setFocusedItem]);
  const handleOnChange = (0,react.useCallback)(_ref2 => {
    let {
      currentTarget
    } = _ref2;
    return onChange(currentTarget);
  }, [onChange]);
  const inputProps = {
    name,
    value,
    checked: isChecked,
    ref: inputRef,
    onChange: handleOnChange,
    disabled
  };
  const toggleValue = (0,react.useCallback)(() => {
    if (selectable && !disabled) {
      const {
        name,
        value,
        type,
        checked
      } = inputRef.current;
      onChange({
        name,
        value,
        type,
        checked: !checked
      });
    }
  }, [onChange, selectable, disabled]);
  const handleOnClick = (0,react.useCallback)(event => {
    if (disabled) {
      return;
    }
    if (shouldStopPropagation) {
      event.stopPropagation();
    }
    if (MenuItemWrapper === react.Fragment) {
      event.preventDefault();
    }
    closeMenu();
    onClick === null || onClick === void 0 || onClick(event);
    toggleValue();
  }, [MenuItemWrapper, closeMenu, disabled, onClick, shouldStopPropagation, toggleValue]);
  (0,react.useEffect)(() => {
    if (selectable) {
      addMenuItem({
        ref: itemRef,
        type: isMulti ? 'checkbox' : 'radio',
        value: value === null || value === void 0 ? void 0 : value.toString(),
        name,
        disabled,
        toggleValue
      });
    } else {
      addMenuItem({
        ref: itemRef,
        name,
        disabled
      });
    }
    return () => {
      removeMenuItem(itemRef);
    };
  }, [isMulti, selectable, disabled, value, name, addMenuItem, removeMenuItem, toggleValue]);
  (0,react.useEffect)(() => {
    if (itemRef === focusedItem) {
      var _itemRef$current, _itemRef$current2;
      setIsFocused(true);
      const previousElementSibling = itemRef === null || itemRef === void 0 || (_itemRef$current = itemRef.current) === null || _itemRef$current === void 0 ? void 0 : _itemRef$current.previousElementSibling;
      if (focusedItem === items[0].ref && previousElementSibling) {
        previousElementSibling === null || previousElementSibling === void 0 || previousElementSibling.scrollIntoView({
          block: 'nearest',
          inline: 'nearest'
        });
        return;
      }
      (_itemRef$current2 = itemRef.current) === null || _itemRef$current2 === void 0 || _itemRef$current2.scrollIntoView({
        block: 'nearest',
        inline: 'nearest'
      });
    } else {
      setIsFocused(false);
    }
  }, [focusedItem, items]);
  const getOptionStyles = () => ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    paddingY: '2',
    paddingX: '3',
    cursor: 'pointer',
    pointerEvents: disabled ? 'none' : undefined
  });
  const focusedBackgroundColor = isDark ? 'white_20' : 'grey_200';
  const borderRadius = isDark ? 'xl' : 'lg';
  return /*#__PURE__*/react.createElement(MenuItemWrapper, menuItemWrapperProps, /*#__PURE__*/react.createElement(Container/* default */.A, {
    fontSize: "b_md",
    as: "li",
    minWidth: "200px",
    borderRadius: borderRadius,
    color: color,
    userSelect: "none",
    backgroundColor: isFocused && !disabled ? focusedBackgroundColor : undefined,
    onMouseEnter: handleOnMouseEnter,
    tabIndex: -1,
    ref: itemRef,
    onClick: handleOnClick,
    onFocus: () => {
      var _anchorRef$current;
      (_anchorRef$current = anchorRef.current) === null || _anchorRef$current === void 0 || _anchorRef$current.focus();
    },
    role: "listitem",
    "aria-disabled": disabled,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, selectable && !isMulti && /*#__PURE__*/react.createElement(Container/* default */.A, _objectSpread(_objectSpread({}, getOptionStyles()), {}, {
    as: "label",
    direction: selectedIndicatorPosition === 'right' ? 'rowReverse' : undefined,
    width: "100%"
  }), /*#__PURE__*/react.createElement(Input/* default */.A, _objectSpread({
    visibility: "hidden",
    position: "absolute",
    type: "radio",
    role: "radio"
  }, inputProps)), /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "flex",
    alignItems: "center",
    height: "16px",
    width: "16px",
    marginRight: "3",
    hidden: hideSelectedIndicator,
    role: "img"
  }, isChecked && /*#__PURE__*/react.createElement(Check/* default */.A, {
    color: primaryColor
  })), /*#__PURE__*/react.createElement(Container/* default */.A, {
    flexGrow: 1
  }, children)), selectable && isMulti && /*#__PURE__*/react.createElement(Checkbox/* default */.A, _objectSpread({
    htmlHidden: hideSelectedIndicator,
    className: (0,utils/* atoms */.Fo)(getOptionStyles()),
    direction: selectedIndicatorPosition === 'right' ? 'rowReverse' : undefined,
    width: "100%"
  }, inputProps), /*#__PURE__*/react.createElement(Container/* default */.A, {
    flexGrow: 1
  }, children)), !selectable && /*#__PURE__*/react.createElement(Container/* default */.A, _objectSpread(_objectSpread({}, getOptionStyles()), {}, {
    as: "label"
  }), children)));
};
MenuItem.displayName = 'MenuItem';
/* harmony default export */ const DropdownMenu_MenuItem = (MenuItem);
;
MenuItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "MenuItem"
};

/***/ }),

/***/ "../dropdown/dist/esm/src/components/DropdownMenu/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _Dropdown_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../dropdown/dist/esm/src/components/Dropdown/utils.js");
/* harmony import */ var _Dropdown_useDropdownContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../dropdown/dist/esm/src/components/Dropdown/useDropdownContext/index.js");
/* harmony import */ var _useMenuContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../dropdown/dist/esm/src/components/DropdownMenu/useMenuContext/index.js");





const DropdownMenu = _ref => {
  let {
    children,
    maxWidth,
    maxHeight,
    height,
    width,
    dataTrackTag = 'dropdown_menu',
    dataTrackValue
  } = _ref;
  const {
    isMultiSelect
  } = (0,_Dropdown_useDropdownContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();
  const {
    fullWidth,
    variant
  } = (0,_useMenuContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)();
  isMultiSelect.current = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_Dropdown_utils__WEBPACK_IMPORTED_MODULE_2__/* .getIsMultiSelect */ .G)(children), [children]);
  const menuMaxHeight = variant === 'default' ? maxHeight || '248px' : maxHeight;
  const menuMaxWidth = variant === 'default' ? maxWidth || '400px' : maxWidth;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    width: fullWidth ? '100%' : width,
    height: height,
    maxWidth: fullWidth ? '100%' : menuMaxWidth,
    maxHeight: menuMaxHeight,
    overflowX: "hidden",
    paddingX: variant === 'default' ? '2' : undefined,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    as: "ul",
    display: "flex",
    direction: "column",
    role: "list",
    gap: isMultiSelect !== null && isMultiSelect !== void 0 && isMultiSelect.current ? '2' : undefined
  }, children));
};
DropdownMenu.id = 'DropdownMenu';
DropdownMenu.displayName = 'DropdownMenu';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownMenu);
;
DropdownMenu.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "DropdownMenu"
};

/***/ }),

/***/ "../dropdown/dist/esm/src/components/DropdownMenu/useMenuContext/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   c: () => (/* binding */ DropdownMenuContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const DropdownMenuContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useMenuContext = () => {
  const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DropdownMenuContext);
  if (!context) {
    throw new Error('Menu compound components cannot be rendered outside the DropdownMenu component');
  }
  return context;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMenuContext);

/***/ }),

/***/ "../dropdown/dist/esm/src/components/DropdownMenu/useMenuGroupContext/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   c: () => (/* binding */ MenuGroupContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const MenuGroupContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  isMulti: false
});
const useMenuGroupContext = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MenuGroupContext);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMenuGroupContext);

/***/ }),

/***/ "../hooks/dist/esm/src/hooks/useBreakpoint/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ hooks_useBreakpoint)
});

// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
;// ../hooks/dist/esm/src/hooks/useMediaQueries/index.js
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

const useMediaQueries = queries => {
  const [matches, setMatches] = (0,react.useState)(() => _objectSpread(_objectSpread({}, Object.fromEntries(Object.keys(queries).map(name => [name, false]))), {}, {
    default: false
  }));
  const queriesString = JSON.stringify(queries);
  (0,react.useEffect)(() => {
    const controller = new AbortController();
    const parsedQueries = JSON.parse(queriesString);
    const {
      defaultMatches,
      currentMatches,
      mediaQueries
    } = Object.entries(parsedQueries).reduce((acc, _ref) => {
      let [name, query] = _ref;
      const mediaQuery = window.matchMedia(query);
      acc.defaultMatches[name] = false;
      acc.currentMatches[name] = mediaQuery.matches;
      acc.mediaQueries.push([name, mediaQuery]);
      return acc;
    }, {
      defaultMatches: {},
      currentMatches: {},
      mediaQueries: []
    });
    setMatches(_objectSpread(_objectSpread({}, currentMatches), {}, {
      default: true
    }));
    mediaQueries.forEach(_ref2 => {
      let [name, mediaQuery] = _ref2;
      mediaQuery.addEventListener('change', _ref3 => {
        let {
          matches
        } = _ref3;
        setMatches(prev => _objectSpread(_objectSpread(_objectSpread({}, defaultMatches), prev), {}, {
          [name]: matches
        }));
      }, {
        signal: controller.signal
      });
    });
    return () => {
      controller.abort();
    };
  }, [
  // since "queries" is an object,
  // but useEffect uses `Object.is` for its comparison algorithm: https://react.dev/reference/react/useEffect#parameters,
  // we need to convert it to be a primitive value
  // to skip unnecessary MediaQueryList instance re-creations
  queriesString]);
  return matches;
};
/* harmony default export */ const hooks_useMediaQueries = (useMediaQueries);
;// ../hooks/dist/esm/src/hooks/useBreakpoints/index.js


const useBreakpoints = () => hooks_useMediaQueries(themeVars/* breakpoints */.fi);
/* harmony default export */ const hooks_useBreakpoints = (useBreakpoints);
;// ../hooks/dist/esm/src/hooks/useBreakpoint/index.js

/**
 * Returns the current breakpoint on CSR according to `@fiverr-private/theme` breakpoints definition.
 * Returns 'default' during SSR and for screens smaller than the sm breakpoint.
 */
const useBreakpoint = () => {
  const {
    sm,
    md,
    lg,
    xl,
    xxl,
    default: isDefault
  } = hooks_useBreakpoints();
  if (!isDefault) {
    return undefined;
  }
  if (xxl) {
    return 'xxl';
  }
  if (xl) {
    return 'xl';
  }
  if (lg) {
    return 'lg';
  }
  if (md) {
    return 'md';
  }
  if (sm) {
    return 'sm';
  }
  return 'default';
};
/* harmony default export */ const hooks_useBreakpoint = (useBreakpoint);

/***/ }),

/***/ "../hooks/dist/esm/src/hooks/useElementSize/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ hooks_useElementSize)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useLatest/index.js
var useLatest = __webpack_require__("../hooks/dist/esm/src/hooks/useLatest/index.js");
;// ../hooks/dist/esm/src/hooks/useEventListener/index.js


const useEventListener = (eventName, handler, element, options) => {
  const savedHandler = (0,useLatest/* default */.A)(handler);
  (0,react.useEffect)(() => {
    if (!(element && element.addEventListener)) {
      return;
    }
    const listener = event => savedHandler.current(event);
    element.addEventListener(eventName, listener, options);
    return () => {
      element.removeEventListener(eventName, listener, options);
    };
  }, [eventName, element, options, savedHandler]);
};
/* harmony default export */ const hooks_useEventListener = (useEventListener);
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js
var useIsomorphicLayoutEffect = __webpack_require__("../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js");
;// ../hooks/dist/esm/src/hooks/useElementSize/index.js



const isWindow = element => element === window;
const useElementSize = element => {
  const [elementSize, setElementSize] = (0,react.useState)({
    width: 0,
    height: 0
  });
  const handleSize = (0,react.useCallback)(() => {
    if (!element) {
      return;
    }
    setElementSize({
      width: isWindow(element) ? element.innerWidth : element.scrollWidth,
      height: isWindow(element) ? element.innerHeight : element.scrollHeight
    });
  }, [element]);
  hooks_useEventListener('resize', handleSize, typeof window !== 'undefined' ? window : null);
  (0,useIsomorphicLayoutEffect/* default */.A)(() => {
    handleSize();
  }, [element]);
  return elementSize;
};
/* harmony default export */ const hooks_useElementSize = (useElementSize);

/***/ }),

/***/ "../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ excludeChildrenByType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../ui_utils/dist/esm/src/utils/utils/index.js");



const excludeChildrenByType = (children, id) => react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).filter(child => {
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isArray)(id)) {
    return !id.some(singleId => (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .childrenIdMatch */ .i)(child, singleId));
  }
  return !(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .childrenIdMatch */ .i)(child, id);
});

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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/ChevronDown.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const ChevronDownIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('ChevronDownIcon')
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
    strokeMiterlimit: 16,
    strokeWidth: 1.5,
    d: "m4 6.818 4 4 4-4",
    vectorEffect: "non-scaling-stroke"
  }));
};
ChevronDownIcon.id = 'ChevronDownIcon';
ChevronDownIcon.displayName = 'ChevronDownIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronDownIcon);
;
ChevronDownIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ChevronDownIcon"
};

/***/ })

}]);
//# sourceMappingURL=6660.c98dca97.iframe.bundle.js.map