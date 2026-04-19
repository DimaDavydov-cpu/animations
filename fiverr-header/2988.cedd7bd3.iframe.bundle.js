"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[2988],{

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

/***/ "../rich_text/src/components/RichTextEditor/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BottomPanel: () => (/* binding */ BottomPanel),
  ControlledInitialValue: () => (/* binding */ ControlledInitialValue),
  Disabled: () => (/* binding */ Disabled),
  Error: () => (/* binding */ Error),
  HideToolBar: () => (/* binding */ HideToolBar),
  InitialValue: () => (/* binding */ InitialValue),
  MaxHeight: () => (/* binding */ MaxHeight),
  MinHeight: () => (/* binding */ MinHeight),
  Primary: () => (/* binding */ Primary),
  Rows: () => (/* binding */ Rows),
  Success: () => (/* binding */ Success),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs + 1 modules
var dist = __webpack_require__("../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useHover/index.js
var useHover = __webpack_require__("../hooks/dist/esm/src/hooks/useHover/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useClickOutside/index.js
var useClickOutside = __webpack_require__("../hooks/dist/esm/src/hooks/useClickOutside/index.js");
// EXTERNAL MODULE: ../popover/dist/esm/src/components/Popover/index.js
var Popover = __webpack_require__("../popover/dist/esm/src/components/Popover/index.js");
// EXTERNAL MODULE: ../popover/dist/esm/src/components/Popover/PopoverAnchor/index.js
var PopoverAnchor = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverAnchor/index.js");
// EXTERNAL MODULE: ../popover/dist/esm/src/components/Popover/PopoverContent/index.js
var PopoverContent = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContent/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/IconButton/index.js
var IconButton = __webpack_require__("../button/dist/esm/src/components/IconButton/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/EmojiSmiley.js
var EmojiSmiley = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/EmojiSmiley.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emoji-mart+data@1.2.1/node_modules/@emoji-mart/data/sets/15/native.json
var _15_native = __webpack_require__("../../node_modules/.pnpm/@emoji-mart+data@1.2.1/node_modules/@emoji-mart/data/sets/15/native.json");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/components/LazyComponent/index.js
var LazyComponent = __webpack_require__("../ui_utils/dist/esm/src/components/LazyComponent/index.js");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Loader/index.js + 1 modules
var Loader = __webpack_require__("../feedback/dist/esm/src/components/Loader/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Center/index.js
var Center = __webpack_require__("../layout_components/dist/esm/src/components/Center/index.js");
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/EmptyState/index.js
var EmptyState = __webpack_require__("../data_display/dist/esm/src/components/EmptyState/index.js");
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/EmptyState/EmptyStateTitle/index.js
var EmptyStateTitle = __webpack_require__("../data_display/dist/esm/src/components/EmptyState/EmptyStateTitle/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.7.0/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js + 2 modules
var I18n = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.7.0/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js");
;// ../emoji_picker/dist/esm/src/components/EmojiPicker/constants.js
const DEFAULT_EMOJIS_COMPONENT_PROPS = {
  set: 'native',
  theme: 'light',
  icons: 'solid',
  emojiVersion: '15',
  locale: 'en',
  autoFocus: false,
  navPosition: 'bottom',
  skinTonePosition: 'search',
  previewPosition: 'none',
  searchPosition: 'sticky',
  maxFrequentRows: 1,
  perLine: 8,
  exceptEmojis: ['middle_finger']
};
;// ../emoji_picker/dist/esm/src/components/EmojiPicker/EmojiPopoverContent.js
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








const EmojiPopoverContent = _ref => {
  let {
    onEmojiSelect
  } = _ref;
  const componentProps = _objectSpread({
    onEmojiSelect,
    data: _15_native
  }, DEFAULT_EMOJIS_COMPONENT_PROPS);
  return /*#__PURE__*/react.createElement(LazyComponent/* default */.A, {
    lazyImport: () => __webpack_require__.e(/* import() | EmojiMartReact */ 4692).then(__webpack_require__.bind(__webpack_require__, "../../node_modules/.pnpm/@emoji-mart+react@1.1.1_emoji-mart@5.6.0_react@17.0.2/node_modules/@emoji-mart/react/dist/module.js")),
    shouldImport: true,
    componentProps: componentProps,
    placeholder: /*#__PURE__*/react.createElement(Center/* default */.A, {
      height: 435,
      width: 316
    }, /*#__PURE__*/react.createElement(Loader/* default */.A, null)),
    fallback: /*#__PURE__*/react.createElement(Center/* default */.A, {
      height: 435,
      width: 316
    }, /*#__PURE__*/react.createElement(EmptyState/* default */.A, null, /*#__PURE__*/react.createElement(EmptyStateTitle/* default */.A, null, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
      k: "emoji_picker.fallback_message"
    }))))
  });
};
EmojiPopoverContent.displayName = 'EmojiPopoverContent';
/* harmony default export */ const EmojiPicker_EmojiPopoverContent = (EmojiPopoverContent);
;
EmojiPopoverContent.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EmojiPopoverContent"
};
;// ../emoji_picker/dist/esm/src/components/emoji_picker/dist/esm/src/components/EmojiPicker/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../emoji_picker/dist/esm/src/components/EmojiPicker/styles.ve.css.js.vanilla.css","source":"Ll8xOW92bTJ0MCBlbS1lbW9qaS1waWNrZXIgewogIC0tYmFja2dyb3VuZC1yZ2I6IDM0LCAzNSwgMzc7CiAgLS1yZ2ItY29sb3I6IDM0LCAzNSwgMzc7CiAgLS1yZ2ItYWNjZW50OiAzNCwgMzUsIDM3OwogIC0tY29sb3ItYjogIzYyNjQ2QTsKICAtLWZvbnQtZmFtaWx5OiAiTWFjYW4iLCAiSGVsdmV0aWNhIE5ldWUiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmOwogIC0tY29sb3ItYm9yZGVyLW92ZXI6ICNEQURCREQ7CiAgY29sb3I6ICMyODQzODk7Cn0="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../emoji_picker/dist/esm/src/components/EmojiPicker/styles.ve.css.js

var customEmojiPopoverClass = '_19ovm2t0';
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../emoji_picker/dist/esm/src/components/EmojiPicker/hooks.js


/**
 * Custom styles for the emoji picker -
 * This is a workaround that is required to match specific styles through shadow dom (not supported currently by emoji-mart).
 */
const useCustomEmojiPickerStyles = (ref, isOpen) => {
  const updateInnerPackageStyles = (0,react.useCallback)(() => {
    var _ref$current;
    if (!ref.current) {
      return;
    }
    const root = (_ref$current = ref.current) === null || _ref$current === void 0 || (_ref$current = _ref$current.querySelector('em-emoji-picker')) === null || _ref$current === void 0 ? void 0 : _ref$current.shadowRoot;
    // make sure it will not add the styles twice
    if (root !== null && root !== void 0 && root.querySelector('style#emoji-picker-custom-styles')) {
      return;
    }
    const styleText = document.createElement('style');
    styleText.setAttribute('id', 'emoji-picker-custom-styles');
    styleText.textContent = "\n            .menu > div:not(:first-child) { margin-top: ".concat(themeVars/* spacing */.YK['1'], "; }\n            .menu .option:hover { background-color: ").concat(themeVars/* colors */.Tj.grey_200, "; color: ").concat(themeVars/* colors */.Tj.grey_1200, "; }");
    root === null || root === void 0 || root.appendChild(styleText);
  }, [ref]);
  (0,react.useEffect)(() => {
    if (!ref.current) {
      return;
    }
    const observer = new MutationObserver(updateInnerPackageStyles);
    observer.observe(ref.current, {
      childList: true,
      subtree: true
    });
    return () => observer.disconnect();
  }, [ref, isOpen, updateInnerPackageStyles]);
};
;// ../emoji_picker/dist/esm/src/components/EmojiPicker/index.js









const EmojiPicker = _ref => {
  let {
    onEmojiSelect,
    size = 'md',
    disabled = false,
    variant = 'ghost',
    position,
    disableBoxShadow = false,
    appendToBody = false,
    children
  } = _ref;
  const [isOpen, setIsOpen] = (0,react.useState)(false);
  const ref = (0,react.useRef)(null);
  const {
    hovered,
    onMouseEnter,
    onMouseLeave
  } = (0,useHover/* default */.A)();
  (0,useClickOutside/* default */.A)(ref, () => {
    if (hovered) {
      return;
    }
    setIsOpen(false);
  });
  useCustomEmojiPickerStyles(ref, isOpen);
  const toggleOpen = () => setIsOpen(prev => !prev);
  const onPopoverEmojiSelect = selectedEmoji => {
    onEmojiSelect(selectedEmoji);
    setIsOpen(false);
  };
  return /*#__PURE__*/react.createElement(Popover/* default */.A, {
    isOpen: isOpen,
    position: position
  }, /*#__PURE__*/react.createElement(PopoverAnchor/* default */.A, {
    disabled: disabled,
    onClick: toggleOpen
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    onMouseOver: onMouseEnter,
    onMouseLeave: onMouseLeave
  }, children !== null && children !== void 0 ? children : /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    "aria-label": "emoji",
    size: size,
    disabled: disabled,
    variant: variant
  }, /*#__PURE__*/react.createElement(EmojiSmiley/* default */.A, null)))), /*#__PURE__*/react.createElement(PopoverContent/* default */.A, {
    disablePadding: true,
    disableBoxShadow: disableBoxShadow,
    appendToBody: appendToBody
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    className: customEmojiPopoverClass,
    ref: ref
  }, /*#__PURE__*/react.createElement(EmojiPicker_EmojiPopoverContent, {
    onEmojiSelect: onPopoverEmojiSelect
  }))));
};
EmojiPicker.displayName = 'EmojiPicker';
/* harmony default export */ const components_EmojiPicker = ((/* unused pure expression or super */ null && (EmojiPicker)));
;
EmojiPicker.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EmojiPicker"
};
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryStack/index.js
var StoryStack = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js
var src = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/Button/index.js + 1 modules
var Button = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Attachment.js
var Attachment = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Attachment.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Lightning.js
var Lightning = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Lightning.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Video.js
var Video = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Video.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Airplane.js
var Airplane = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Airplane.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/slate-react@0.104.0_react-dom@17.0.2_react@17.0.2__react@17.0.2_slate@0.103.0/node_modules/slate-react/dist/index.es.js + 26 modules
var index_es = __webpack_require__("../../node_modules/.pnpm/slate-react@0.104.0_react-dom@17.0.2_react@17.0.2__react@17.0.2_slate@0.103.0/node_modules/slate-react/dist/index.es.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/slate@0.103.0/node_modules/slate/dist/index.es.js + 1 modules
var dist_index_es = __webpack_require__("../../node_modules/.pnpm/slate@0.103.0/node_modules/slate/dist/index.es.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs
var is_plain_object = __webpack_require__("../../node_modules/.pnpm/is-plain-object@5.0.0/node_modules/is-plain-object/dist/is-plain-object.mjs");
;// ../../node_modules/.pnpm/slate-history@0.100.0_slate@0.103.0/node_modules/slate-history/dist/index.es.js



// eslint-disable-next-line no-redeclare
var History = {
  /**
   * Check if a value is a `History` object.
   */
  isHistory(value) {
    return (0,is_plain_object/* isPlainObject */.Q)(value) && Array.isArray(value.redos) && Array.isArray(value.undos) && (value.redos.length === 0 || dist_index_es/* Operation */.I.isOperationList(value.redos[0].operations)) && (value.undos.length === 0 || dist_index_es/* Operation */.I.isOperationList(value.undos[0].operations));
  }
};

/**
 * Weakmaps for attaching state to the editor.
 */
var HISTORY = new WeakMap();
var SAVING = new WeakMap();
var MERGING = new WeakMap();
// eslint-disable-next-line no-redeclare
var HistoryEditor = {
  /**
   * Check if a value is a `HistoryEditor` object.
   */
  isHistoryEditor(value) {
    return History.isHistory(value.history) && dist_index_es/* Editor */.KE.isEditor(value);
  },
  /**
   * Get the merge flag's current value.
   */
  isMerging(editor) {
    return MERGING.get(editor);
  },
  /**
   * Get the saving flag's current value.
   */
  isSaving(editor) {
    return SAVING.get(editor);
  },
  /**
   * Redo to the previous saved state.
   */
  redo(editor) {
    editor.redo();
  },
  /**
   * Undo to the previous saved state.
   */
  undo(editor) {
    editor.undo();
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without merging any of
   * the new operations into previous save point in the history.
   */
  withoutMerging(editor, fn) {
    var prev = HistoryEditor.isMerging(editor);
    MERGING.set(editor, false);
    fn();
    MERGING.set(editor, prev);
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without saving any of
   * their operations into the history.
   */
  withoutSaving(editor, fn) {
    var prev = HistoryEditor.isSaving(editor);
    SAVING.set(editor, false);
    fn();
    SAVING.set(editor, prev);
  }
};

/**
 * The `withHistory` plugin keeps track of the operation history of a Slate
 * editor as operations are applied to it, using undo and redo stacks.
 *
 * If you are using TypeScript, you must extend Slate's CustomTypes to use
 * this plugin.
 *
 * See https://docs.slatejs.org/concepts/11-typescript to learn how.
 */
var withHistory = editor => {
  var e = editor;
  var {
    apply
  } = e;
  e.history = {
    undos: [],
    redos: []
  };
  e.redo = () => {
    var {
      history
    } = e;
    var {
      redos
    } = history;
    if (redos.length > 0) {
      var batch = redos[redos.length - 1];
      if (batch.selectionBefore) {
        dist_index_es/* Transforms */.gB.setSelection(e, batch.selectionBefore);
      }
      HistoryEditor.withoutSaving(e, () => {
        dist_index_es/* Editor */.KE.withoutNormalizing(e, () => {
          for (var op of batch.operations) {
            e.apply(op);
          }
        });
      });
      history.redos.pop();
      e.writeHistory('undos', batch);
    }
  };
  e.undo = () => {
    var {
      history
    } = e;
    var {
      undos
    } = history;
    if (undos.length > 0) {
      var batch = undos[undos.length - 1];
      HistoryEditor.withoutSaving(e, () => {
        dist_index_es/* Editor */.KE.withoutNormalizing(e, () => {
          var inverseOps = batch.operations.map(dist_index_es/* Operation */.I.inverse).reverse();
          for (var op of inverseOps) {
            e.apply(op);
          }
          if (batch.selectionBefore) {
            dist_index_es/* Transforms */.gB.setSelection(e, batch.selectionBefore);
          }
        });
      });
      e.writeHistory('redos', batch);
      history.undos.pop();
    }
  };
  e.apply = op => {
    var {
      operations,
      history
    } = e;
    var {
      undos
    } = history;
    var lastBatch = undos[undos.length - 1];
    var lastOp = lastBatch && lastBatch.operations[lastBatch.operations.length - 1];
    var save = HistoryEditor.isSaving(e);
    var merge = HistoryEditor.isMerging(e);
    if (save == null) {
      save = shouldSave(op);
    }
    if (save) {
      if (merge == null) {
        if (lastBatch == null) {
          merge = false;
        } else if (operations.length !== 0) {
          merge = true;
        } else {
          merge = shouldMerge(op, lastOp);
        }
      }
      if (lastBatch && merge) {
        lastBatch.operations.push(op);
      } else {
        var batch = {
          operations: [op],
          selectionBefore: e.selection
        };
        e.writeHistory('undos', batch);
      }
      while (undos.length > 100) {
        undos.shift();
      }
      history.redos = [];
    }
    apply(op);
  };
  e.writeHistory = (stack, batch) => {
    e.history[stack].push(batch);
  };
  return e;
};
/**
 * Check whether to merge an operation into the previous operation.
 */
var shouldMerge = (op, prev) => {
  if (prev && op.type === 'insert_text' && prev.type === 'insert_text' && op.offset === prev.offset + prev.text.length && dist_index_es/* Path */.wA.equals(op.path, prev.path)) {
    return true;
  }
  if (prev && op.type === 'remove_text' && prev.type === 'remove_text' && op.offset + op.text.length === prev.offset && dist_index_es/* Path */.wA.equals(op.path, prev.path)) {
    return true;
  }
  return false;
};
/**
 * Check whether an operation needs to be saved to the history.
 */
var shouldSave = (op, prev) => {
  if (op.type === 'set_selection') {
    return false;
  }
  return true;
};


//# sourceMappingURL=index.es.js.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js + 1 modules
var vanilla_extract_dynamic_esm = __webpack_require__("../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/theme.ve.css.js
var theme_ve_css = __webpack_require__("../theme/dist/esm/src/theme.ve.css.js");
// EXTERNAL MODULE: ../rich_text/src/components/utils/MarkdownSlateJsonConverter.ts
var MarkdownSlateJsonConverter = __webpack_require__("../rich_text/src/components/utils/MarkdownSlateJsonConverter.ts");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../rich_text/src/components/constants.ts
var constants = __webpack_require__("../rich_text/src/components/constants.ts");
// EXTERNAL MODULE: ../rich_text/src/components/utils/utils.ts
var utils = __webpack_require__("../rich_text/src/components/utils/utils.ts");
;// ../rich_text/src/components/utils/SlateJsonMarkdownConverter.ts



class SlateJsonMarkdownConverter {
  constructor() {
    this.serializeText = this.serializeText.bind(this);
  }
  convert(nodes) {
    let markdown = '';
    for (const node of nodes) {
      const customElementNode = node;
      markdown += this.customElementToMarkdown(customElementNode);
    }
    return markdown;
  }
  customElementToMarkdown(customElementNode) {
    switch (customElementNode.type) {
      case 'paragraph':
        return this.paragraphToMarkdown(customElementNode);
      case 'unordered-list':
        return this.unorderedListToMarkdown(customElementNode);
      case 'numbered-list':
        return this.numberedListToMarkdown(customElementNode);
      default:
        return '';
    }
  }
  paragraphToMarkdown(paragraphNode) {
    return "".concat(this.serializeChildren(paragraphNode), "\n");
  }
  unorderedListToMarkdown(listItemElement) {
    return "".concat((0,lodash.map)(listItemElement.children, listItemChild => "- ".concat(this.serializeChildren(listItemChild), "\n")).join(''), "\n");
  }
  numberedListToMarkdown(listItemElement) {
    return "".concat((0,lodash.map)(listItemElement.children, (listItemChild, index) => "".concat(index + 1, ". ").concat(this.serializeChildren(listItemChild), "\n")).join(''), "\n");
  }
  serializeChildren(node) {
    return (0,lodash.map)(node.children, child => {
      if (this.isCustomTextElement(child)) {
        return this.serializeText(child);
      } else {
        return this.serializeChildren(child);
      }
    }).join('');
  }
  addMarkdownSeparator(text, separator) {
    let startSpaces = '',
      endSpaces = '';
    let charIdx = text.length - 1;
    while (charIdx >= 0 && text[charIdx] === ' ') {
      endSpaces += ' ';
      charIdx--;
    }
    charIdx = 0;
    while (charIdx < text.length && text[charIdx] === ' ') {
      startSpaces += ' ';
      charIdx++;
    }
    return "".concat(startSpaces).concat(separator).concat(text.trim()).concat(separator).concat(endSpaces);
  }
  serializeText(node) {
    if (this.isCustomTextElement(node)) {
      const {
        text,
        bold,
        italic,
        underline,
        lineThrough,
        url
      } = node;
      let textResult = (0,utils/* handleIndentationSlateToMarkdown */.Tu)(text);
      textResult = textResult
      // If the user already escaped the markdown special characters, we don't need to escape them again
      // This prevents backslashes from being converted to double backslashes
      .replace(/(?<!\\)\*/g, "\\".concat(constants/* I_SEPARATOR */.Oq)).replace(/(?<!\\)~/g, "\\".concat(constants/* LT_SEPARATOR */.$r)).replace(/(?<!\\)\+/g, "\\".concat(constants/* U_SEPARATOR */.uK)).replace(/(?<!\\)-/g, "\\-");
      if (textResult.trim() === '') {
        return textResult;
      }
      if (url) {
        textResult = "[".concat(textResult, "](").concat(url, ")");
      }
      if (underline && !url) {
        textResult = this.addMarkdownSeparator(textResult, constants/* U_SEPARATOR */.uK);
      }
      if (lineThrough && !url) {
        textResult = this.addMarkdownSeparator(textResult, constants/* LT_SEPARATOR */.$r);
      }
      if (bold) {
        textResult = this.addMarkdownSeparator(textResult, constants/* B_SEPARATOR */.zh);
      }
      if (italic) {
        textResult = this.addMarkdownSeparator(textResult, constants/* I_SEPARATOR */.Oq);
      }
      return textResult;
    }
    const customElementNode = node;
    return (0,lodash.map)(customElementNode.children, this.serializeText).join('');
  }
  isCustomTextElement(node) {
    return 'text' in node;
  }
}
/* harmony default export */ const utils_SlateJsonMarkdownConverter = (new SlateJsonMarkdownConverter());
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Bold.js
var Bold = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Bold.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js
var translate = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/BaseButton/index.js
var BaseButton = __webpack_require__("../button/dist/esm/src/components/BaseButton/index.js");
;// ../button/dist/esm/src/components/ToggleButton/index.js
const _excluded = ["children", "isSelected", "initialSelected", "onSelectedChanged", "onClick", "disabled", "dataTrackTag"];
function ToggleButton_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function ToggleButton_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ToggleButton_ownKeys(Object(t), !0).forEach(function (r) {
      ToggleButton_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ToggleButton_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function ToggleButton_defineProperty(e, r, t) {
  return (r = ToggleButton_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function ToggleButton_toPropertyKey(t) {
  var i = ToggleButton_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function ToggleButton_toPrimitive(t, r) {
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



const getColorStylingProps = isSelected => ({
  color: isSelected ? 'bodyPrimary' : 'bodySecondary',
  backgroundColor: isSelected ? 'grey_500' : {
    default: 'transparent',
    hover: 'grey_300',
    active: 'grey_500'
  }
});
const ToggleButton = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      children,
      isSelected: isSelectedProp,
      initialSelected,
      onSelectedChanged,
      onClick,
      disabled,
      dataTrackTag = 'toggle_button'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const [isSelectedInner, setIsSelectedInner] = (0,react.useState)(initialSelected);
  const isSelected = (0,lodash.isUndefined)(isSelectedProp) ? isSelectedInner : isSelectedProp;
  const {
    color,
    backgroundColor
  } = getColorStylingProps(isSelected);
  const onButtonClick = e => {
    setIsSelectedInner(!isSelected);
    onSelectedChanged === null || onSelectedChanged === void 0 || onSelectedChanged(!isSelected);
    onClick === null || onClick === void 0 || onClick(e);
  };
  return /*#__PURE__*/react.createElement(BaseButton/* default */.A, ToggleButton_objectSpread({
    ref: ref,
    type: "button",
    intent: "secondary",
    variant: "ghost",
    width: 28,
    height: 28,
    disabled: disabled,
    color: disabled ? 'grey_800' : color,
    backgroundColor: disabled ? undefined : backgroundColor,
    onClick: onButtonClick,
    borderRadius: "md",
    dataTrackTag: dataTrackTag
  }, rest), children);
});
ToggleButton.displayName = 'ToggleButton';
/* harmony default export */ const components_ToggleButton = (ToggleButton);
;
ToggleButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ToggleButton"
};
// EXTERNAL MODULE: ../tooltip/dist/esm/src/components/Tooltip/index.js
var Tooltip = __webpack_require__("../tooltip/dist/esm/src/components/Tooltip/index.js");
;// ../rich_text/src/components/RichTextEditor/utils.nodes.ts
function getNodeElement(node) {
  return node[0];
}
const getNodePath = node => node[1];
;// ../rich_text/src/components/RichTextToolbar/MarkToggleButton/utils.ts




const addMark = (editor, format) => {
  const {
    selection
  } = editor;
  const nodes = selection && Array.from(editor.nodes({
    at: selection
  }));
  nodes === null || nodes === void 0 || nodes.forEach(node => {
    const isUrl = node && getNodeElement(node).url;
    if (isUrl) {
      dist_index_es/* Transforms */.gB.setNodes(editor, {
        [format]: true
      }, {
        at: getNodePath(node),
        match: node => {
          if (dist_index_es/* Editor */.KE.isEditor(node)) {
            return false;
          }
          if (dist_index_es/* Element */.Hg.isElement(node)) {
            return false;
          }
          return !(0,lodash.isUndefined)(node.url);
        }
      });
    }
  });
  dist_index_es/* Editor */.KE.addMark(editor, format, true);
};
const removeMark = (editor, format) => {
  const {
    selection
  } = editor;
  const nodes = selection && Array.from(editor.nodes({
    at: selection
  }));
  nodes === null || nodes === void 0 || nodes.forEach(node => {
    const isUrl = node && getNodeElement(node).url;
    if (isUrl) {
      dist_index_es/* Transforms */.gB.setNodes(editor, {
        [format]: undefined
      }, {
        at: getNodePath(node),
        match: node => {
          if (dist_index_es/* Editor */.KE.isEditor(node)) {
            return false;
          }
          if (dist_index_es/* Element */.Hg.isElement(node)) {
            return false;
          }
          return !(0,lodash.isUndefined)(node.url);
        }
      });
    }
  });
  dist_index_es/* Editor */.KE.removeMark(editor, format);
};
const toggleMark = (editor, format, dependantFormat, disableOnLinks) => {
  const {
    isActive
  } = isMarkActive(editor, format, disableOnLinks);
  if (isActive) {
    removeMark(editor, format);
  } else {
    addMark(editor, format);
    if (dependantFormat) {
      removeMark(editor, dependantFormat);
    }
  }
  index_es/* ReactEditor */.rL.focus(editor);
};
const isMarkActive = (editor, format, disabledOnLinks) => {
  var _Editor$marks;
  const {
    selection
  } = editor;
  if (!selection) {
    return {
      isActive: false,
      isDisabled: false
    };
  }
  const hasSelectionRange = !(0,lodash.isEqual)(selection.focus, selection.anchor);
  if (hasSelectionRange) {
    const currentFormatNodes = Array.from(dist_index_es/* Editor */.KE.nodes(editor, {
      at: dist_index_es/* Editor */.KE.unhangRange(editor, selection),
      match: node => {
        if (dist_index_es/* Editor */.KE.isEditor(node)) {
          return false;
        }
        if (dist_index_es/* Element */.Hg.isElement(node)) {
          return false;
        }
        return dist_index_es/* Element */.Hg.matches(node, {
          [format]: true
        }) && node.text.trim() !== '';
      }
    }));
    const allNonEmptyTextNodes = Array.from(dist_index_es/* Editor */.KE.nodes(editor, {
      at: dist_index_es/* Editor */.KE.unhangRange(editor, selection),
      match: node => {
        if (dist_index_es/* Editor */.KE.isEditor(node)) {
          return false;
        }
        if (dist_index_es/* Element */.Hg.isElement(node)) {
          return false;
        }
        return node.text.trim() !== '';
      }
    }));
    const isActive = !(0,lodash.isEmpty)(currentFormatNodes) && allNonEmptyTextNodes.length === currentFormatNodes.length;
    if (disabledOnLinks) {
      const allTextNodes = Array.from(dist_index_es/* Editor */.KE.nodes(editor, {
        at: dist_index_es/* Editor */.KE.unhangRange(editor, selection),
        match: node => {
          if (dist_index_es/* Editor */.KE.isEditor(node)) {
            return false;
          }
          return !dist_index_es/* Element */.Hg.isElement(node);
        }
      }));
      const allLinkNodes = Array.from(dist_index_es/* Editor */.KE.nodes(editor, {
        at: dist_index_es/* Editor */.KE.unhangRange(editor, selection),
        match: node => {
          if (dist_index_es/* Editor */.KE.isEditor(node)) {
            return false;
          }
          if (dist_index_es/* Element */.Hg.isElement(node)) {
            return false;
          }
          return !(0,lodash.isUndefined)(node === null || node === void 0 ? void 0 : node.url);
        }
      }));
      return {
        isActive,
        isDisabled: !(0,lodash.isEmpty)(allLinkNodes) && allLinkNodes.length === allTextNodes.length
      };
    }
    return {
      isActive,
      isDisabled: false
    };
  }
  const node = editor.node(selection);
  const isDisabled = disabledOnLinks && !(0,lodash.isUndefined)(getNodeElement(node).url);
  const isActive = !!((_Editor$marks = dist_index_es/* Editor */.KE.marks(editor)) !== null && _Editor$marks !== void 0 && _Editor$marks[format]);
  return {
    isActive: isDisabled ? false : isActive,
    isDisabled
  };
};
;// ../rich_text/src/components/RichTextToolbar/MarkToggleButton/index.tsx






const MarkToggleButton = _ref => {
  let {
    format,
    children,
    disabled,
    dependantFormat,
    tooltipContent,
    disabledOnLinks = false,
    dataTrackTag = 'rich_text_toolbar_mark_toggle_button'
  } = _ref;
  const editor = (0,index_es/* useSlate */.Zi)();
  const {
    isActive,
    isDisabled
  } = isMarkActive(editor, format, disabledOnLinks);
  return /*#__PURE__*/react.createElement(Tooltip/* default */.A, {
    size: "sm",
    content: tooltipContent,
    offset: themeVars/* numericSpacing */.DL['3']
  }, /*#__PURE__*/react.createElement(components_ToggleButton, {
    dataTrackTag: dataTrackTag,
    tabIndex: -1,
    disabled: disabled || isDisabled,
    isSelected: isActive,
    "aria-label": format,
    onSelectedChanged: () => {
      toggleMark(editor, format, dependantFormat, disabledOnLinks);
    }
  }, children));
};
MarkToggleButton.displayName = 'MarkToggleButton';
/* harmony default export */ const RichTextToolbar_MarkToggleButton = (MarkToggleButton);
try {
    // @ts-ignore
    MarkToggleButton.displayName = "MarkToggleButton";
    // @ts-ignore
    MarkToggleButton.__docgenInfo = { "description": "", "displayName": "MarkToggleButton", "props": { "format": { "defaultValue": null, "description": "", "name": "format", "required": true, "type": { "name": "enum", "value": [{ "value": "\"bold\"" }, { "value": "\"underline\"" }, { "value": "\"lineThrough\"" }, { "value": "\"italic\"" }] } }, "dependantFormat": { "defaultValue": null, "description": "", "name": "dependantFormat", "required": false, "type": { "name": "enum", "value": [{ "value": "\"bold\"" }, { "value": "\"underline\"" }, { "value": "\"lineThrough\"" }, { "value": "\"italic\"" }] } }, "disabledOnLinks": { "defaultValue": { value: "false" }, "description": "", "name": "disabledOnLinks", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "tooltipContent": { "defaultValue": null, "description": "", "name": "tooltipContent", "required": true, "type": { "name": "string" } }, "dataTrackTag": { "defaultValue": { value: "rich_text_toolbar_mark_toggle_button" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../rich_text/src/components/RichTextToolbar/MarkToggleButton/index.tsx#MarkToggleButton"] = { docgenInfo: MarkToggleButton.__docgenInfo, name: "MarkToggleButton", path: "../rich_text/src/components/RichTextToolbar/MarkToggleButton/index.tsx#MarkToggleButton" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../rich_text/src/components/RichTextToolbar/BoldToggleButton/index.tsx




const BoldToggleButton = _ref => {
  let {
    disabled
  } = _ref;
  return /*#__PURE__*/react.createElement(RichTextToolbar_MarkToggleButton, {
    dataTrackTag: "rich_text_toolbar_mark_toggle_button",
    disabled: disabled,
    format: "bold",
    tooltipContent: (0,translate/* translate */.T)('rich_text.toolbar.bold')
  }, /*#__PURE__*/react.createElement(Bold/* default */.A, null));
};
BoldToggleButton.displayName = 'BoldToggleButton';
/* harmony default export */ const RichTextToolbar_BoldToggleButton = (BoldToggleButton);
try {
    // @ts-ignore
    BoldToggleButton.displayName = "BoldToggleButton";
    // @ts-ignore
    BoldToggleButton.__docgenInfo = { "description": "", "displayName": "BoldToggleButton", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../rich_text/src/components/RichTextToolbar/BoldToggleButton/index.tsx#BoldToggleButton"] = { docgenInfo: BoldToggleButton.__docgenInfo, name: "BoldToggleButton", path: "../rich_text/src/components/RichTextToolbar/BoldToggleButton/index.tsx#BoldToggleButton" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Italic.js
var Italic = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Italic.js");
;// ../rich_text/src/components/RichTextToolbar/ItalicToggleButton/index.tsx




const ItalicToggleButton = _ref => {
  let {
    disabled
  } = _ref;
  return /*#__PURE__*/react.createElement(RichTextToolbar_MarkToggleButton, {
    dataTrackTag: "rich_text_toolbar_italic_toggle_button",
    disabled: disabled,
    format: "italic",
    tooltipContent: (0,translate/* translate */.T)('rich_text.toolbar.italic')
  }, /*#__PURE__*/react.createElement(Italic/* default */.A, null));
};
ItalicToggleButton.displayName = 'ItalicToggleButton';
/* harmony default export */ const RichTextToolbar_ItalicToggleButton = (ItalicToggleButton);
try {
    // @ts-ignore
    ItalicToggleButton.displayName = "ItalicToggleButton";
    // @ts-ignore
    ItalicToggleButton.__docgenInfo = { "description": "", "displayName": "ItalicToggleButton", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../rich_text/src/components/RichTextToolbar/ItalicToggleButton/index.tsx#ItalicToggleButton"] = { docgenInfo: ItalicToggleButton.__docgenInfo, name: "ItalicToggleButton", path: "../rich_text/src/components/RichTextToolbar/ItalicToggleButton/index.tsx#ItalicToggleButton" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/OrderedList.js
var OrderedList = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/OrderedList.js");
;// ../rich_text/src/components/RichTextToolbar/BlockToggleButton/utils.ts





const LIST_TYPES = ['numbered-list', 'unordered-list'];
const removeIndentationFromListItems = editor => {
  if (editor.selection) {
    const matchArr = Array.from(dist_index_es/* Editor */.KE.nodes(editor, {
      at: dist_index_es/* Editor */.KE.unhangRange(editor, editor.selection),
      match: node => {
        if (dist_index_es/* Editor */.KE.isEditor(node)) {
          return false;
        }
        return dist_index_es/* Element */.Hg.isElementType(node, 'list-item');
      }
    }));
    matchArr.forEach(match => {
      const initialText = getNodeElement(match).children[0].text;
      let text = initialText;
      while (text.startsWith(constants/* TAB_KEY */.ot)) {
        text = text.substring(1);
      }
      if (text !== initialText) {
        editor.insertText(text, {
          at: [...getNodePath(match), 0]
        });
      }
    });
  }
};
const isBlockActive = (editor, type) => {
  const {
    selection
  } = editor;
  if (!selection) {
    return false;
  }
  const nonCurrentListTypeElements = Array.from(dist_index_es/* Editor */.KE.nodes(editor, {
    at: dist_index_es/* Editor */.KE.unhangRange(editor, selection),
    match: node => {
      if (dist_index_es/* Editor */.KE.isEditor(node)) {
        return false;
      }
      if (!dist_index_es/* Element */.Hg.isElement(node)) {
        return false;
      }
      return !dist_index_es/* Element */.Hg.isElementType(node, type) && !dist_index_es/* Element */.Hg.isElementType(node, 'list-item');
    }
  }));
  return (0,lodash.isEmpty)(nonCurrentListTypeElements);
};
const toggleBlock = (editor, type) => {
  const isActive = isBlockActive(editor, type);
  const isList = LIST_TYPES.includes(type);
  dist_index_es/* Transforms */.gB.unwrapNodes(editor, {
    match: node => {
      if (dist_index_es/* Editor */.KE.isEditor(node)) {
        return false;
      }
      return dist_index_es/* Element */.Hg.isElementType(node, LIST_TYPES[0]) || dist_index_es/* Element */.Hg.isElementType(node, LIST_TYPES[1]);
    },
    split: true
  });
  let newProperties;
  if (isActive) {
    newProperties = {
      type: 'paragraph'
    };
  } else {
    newProperties = {
      type: isList ? 'list-item' : type
    };
  }
  dist_index_es/* Transforms */.gB.setNodes(editor, newProperties);
  if (!isActive && isList) {
    const block = {
      type,
      children: []
    };
    dist_index_es/* Transforms */.gB.wrapNodes(editor, block);
    removeIndentationFromListItems(editor);
  }
  index_es/* ReactEditor */.rL.focus(editor);
};
;// ../rich_text/src/components/RichTextToolbar/BlockToggleButton/index.tsx






const BlockToggleButton = _ref => {
  let {
    type,
    children,
    disabled,
    tooltipContent
  } = _ref;
  const editor = (0,index_es/* useSlate */.Zi)();
  const isSelected = isBlockActive(editor, type);
  return /*#__PURE__*/react.createElement(Tooltip/* default */.A, {
    size: "sm",
    content: tooltipContent,
    offset: themeVars/* numericSpacing */.DL['3']
  }, /*#__PURE__*/react.createElement(components_ToggleButton, {
    dataTrackTag: "rich_text_toolbar_block_toggle_button",
    tabIndex: -1,
    disabled: disabled,
    isSelected: isSelected,
    "aria-label": type,
    onSelectedChanged: () => {
      toggleBlock(editor, type);
    }
  }, children));
};
BlockToggleButton.displayName = 'BlockToggleButton';
/* harmony default export */ const RichTextToolbar_BlockToggleButton = (BlockToggleButton);
try {
    // @ts-ignore
    BlockToggleButton.displayName = "BlockToggleButton";
    // @ts-ignore
    BlockToggleButton.__docgenInfo = { "description": "", "displayName": "BlockToggleButton", "props": { "type": { "defaultValue": null, "description": "", "name": "type", "required": true, "type": { "name": "enum", "value": [{ "value": "\"paragraph\"" }, { "value": "\"unordered-list\"" }, { "value": "\"numbered-list\"" }, { "value": "\"list-item\"" }] } }, "tooltipContent": { "defaultValue": null, "description": "", "name": "tooltipContent", "required": true, "type": { "name": "string" } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../rich_text/src/components/RichTextToolbar/BlockToggleButton/index.tsx#BlockToggleButton"] = { docgenInfo: BlockToggleButton.__docgenInfo, name: "BlockToggleButton", path: "../rich_text/src/components/RichTextToolbar/BlockToggleButton/index.tsx#BlockToggleButton" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../rich_text/src/components/RichTextToolbar/NumberedListToggleButton/index.tsx




const NumberedListToggleButton = _ref => {
  let {
    disabled
  } = _ref;
  return /*#__PURE__*/react.createElement(RichTextToolbar_BlockToggleButton, {
    disabled: disabled,
    type: "numbered-list",
    tooltipContent: (0,translate/* translate */.T)('rich_text.toolbar.numbered_list'),
    dataTrackTag: "rich_text_toolbar_numbered_list_toggle_button"
  }, /*#__PURE__*/react.createElement(OrderedList/* default */.A, null));
};
NumberedListToggleButton.displayName = 'NumberedListToggleButton';
/* harmony default export */ const RichTextToolbar_NumberedListToggleButton = (NumberedListToggleButton);
try {
    // @ts-ignore
    NumberedListToggleButton.displayName = "NumberedListToggleButton";
    // @ts-ignore
    NumberedListToggleButton.__docgenInfo = { "description": "", "displayName": "NumberedListToggleButton", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../rich_text/src/components/RichTextToolbar/NumberedListToggleButton/index.tsx#NumberedListToggleButton"] = { docgenInfo: NumberedListToggleButton.__docgenInfo, name: "NumberedListToggleButton", path: "../rich_text/src/components/RichTextToolbar/NumberedListToggleButton/index.tsx#NumberedListToggleButton" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/UnorderedList.js
var UnorderedList = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/UnorderedList.js");
;// ../rich_text/src/components/RichTextToolbar/UnorderedListToggleButton/index.tsx




const UnorderedListToggleButton = _ref => {
  let {
    disabled
  } = _ref;
  return /*#__PURE__*/react.createElement(RichTextToolbar_BlockToggleButton, {
    disabled: disabled,
    type: "unordered-list",
    tooltipContent: (0,translate/* translate */.T)('rich_text.toolbar.unordered_list'),
    dataTrackTag: "rich_text_toolbar_unordered_list_toggle_button"
  }, /*#__PURE__*/react.createElement(UnorderedList/* default */.A, null));
};
UnorderedListToggleButton.displayName = 'UnorderedListToggleButton';
/* harmony default export */ const RichTextToolbar_UnorderedListToggleButton = (UnorderedListToggleButton);
try {
    // @ts-ignore
    UnorderedListToggleButton.displayName = "UnorderedListToggleButton";
    // @ts-ignore
    UnorderedListToggleButton.__docgenInfo = { "description": "", "displayName": "UnorderedListToggleButton", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../rich_text/src/components/RichTextToolbar/UnorderedListToggleButton/index.tsx#UnorderedListToggleButton"] = { docgenInfo: UnorderedListToggleButton.__docgenInfo, name: "UnorderedListToggleButton", path: "../rich_text/src/components/RichTextToolbar/UnorderedListToggleButton/index.tsx#UnorderedListToggleButton" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Underline.js
var Underline = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Underline.js");
;// ../rich_text/src/components/RichTextToolbar/UnderlineToggleButton/index.tsx




const UnderlineToggleButton = _ref => {
  let {
    disabled
  } = _ref;
  return /*#__PURE__*/react.createElement(RichTextToolbar_MarkToggleButton, {
    disabled: disabled,
    format: "underline",
    dependantFormat: "lineThrough",
    tooltipContent: (0,translate/* translate */.T)('rich_text.toolbar.underline'),
    disabledOnLinks: true,
    dataTrackTag: "rich_text_toolbar_underline_toggle_button"
  }, /*#__PURE__*/react.createElement(Underline/* default */.A, null));
};
UnderlineToggleButton.displayName = 'UnderlineToggleButton';
/* harmony default export */ const RichTextToolbar_UnderlineToggleButton = (UnderlineToggleButton);
try {
    // @ts-ignore
    UnderlineToggleButton.displayName = "UnderlineToggleButton";
    // @ts-ignore
    UnderlineToggleButton.__docgenInfo = { "description": "", "displayName": "UnderlineToggleButton", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../rich_text/src/components/RichTextToolbar/UnderlineToggleButton/index.tsx#UnderlineToggleButton"] = { docgenInfo: UnderlineToggleButton.__docgenInfo, name: "UnderlineToggleButton", path: "../rich_text/src/components/RichTextToolbar/UnderlineToggleButton/index.tsx#UnderlineToggleButton" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Strikethrough.js
var Strikethrough = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Strikethrough.js");
;// ../rich_text/src/components/RichTextToolbar/LineThroughToggleButton/index.tsx




const LineThroughToggleButton = _ref => {
  let {
    disabled
  } = _ref;
  return /*#__PURE__*/react.createElement(RichTextToolbar_MarkToggleButton, {
    disabled: disabled,
    format: "lineThrough",
    dependantFormat: "underline",
    tooltipContent: (0,translate/* translate */.T)('rich_text.toolbar.line_through'),
    disabledOnLinks: true,
    dataTrackTag: "rich_text_toolbar_line_through_toggle_button"
  }, /*#__PURE__*/react.createElement(Strikethrough/* default */.A, null));
};
LineThroughToggleButton.displayName = 'LineThroughToggleButton';
/* harmony default export */ const RichTextToolbar_LineThroughToggleButton = (LineThroughToggleButton);
try {
    // @ts-ignore
    LineThroughToggleButton.displayName = "LineThroughToggleButton";
    // @ts-ignore
    LineThroughToggleButton.__docgenInfo = { "description": "", "displayName": "LineThroughToggleButton", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../rich_text/src/components/RichTextToolbar/LineThroughToggleButton/index.tsx#LineThroughToggleButton"] = { docgenInfo: LineThroughToggleButton.__docgenInfo, name: "LineThroughToggleButton", path: "../rich_text/src/components/RichTextToolbar/LineThroughToggleButton/index.tsx#LineThroughToggleButton" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Outdent.js
var Outdent = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Outdent.js");
;// ../rich_text/src/components/RichTextToolbar/ActionToggleButton/index.tsx








const ActionToggleButton = _ref => {
  let {
    children,
    disabled,
    type,
    tooltipContent
  } = _ref;
  const editor = (0,index_es/* useSlate */.Zi)();
  const onClick = () => {
    if (type === 'indent' || type === 'outdent') {
      const selected = editor.selection;
      if (selected) {
        const point = selected.anchor.path;
        const parent = editor.parent(point);
        const parentNode = getNodeElement(parent);
        const parentPath = getNodePath(parent);
        const first = editor.first(parentPath);
        const firstNode = getNodeElement(first);
        const firstPath = getNodePath(first);
        const {
          text
        } = firstNode;
        const resetSelection = () => {
          const last = editor.end(parentPath);
          dist_index_es/* Transforms */.gB.select(editor, last);
          dist_index_es/* Transforms */.gB.collapse(editor);
        };
        if (parentNode.type === 'list-item') {
          return;
        }
        if (type === 'indent') {
          dist_index_es/* Transforms */.gB.insertNodes(editor, {
            text: constants/* TAB_KEY */.ot
          }, {
            at: [parentPath[0], 0]
          });
          resetSelection();
        } else if (text.startsWith(constants/* TAB_KEY */.ot)) {
          editor.insertText(text.substring(constants/* TAB_KEY */.ot.length), {
            at: firstPath
          });
          resetSelection();
        }
      }
    }
    index_es/* ReactEditor */.rL.focus(editor);
  };
  const isSelected = false;
  return /*#__PURE__*/react.createElement(Tooltip/* default */.A, {
    size: "sm",
    content: tooltipContent,
    offset: themeVars/* numericSpacing */.DL['3']
  }, /*#__PURE__*/react.createElement(components_ToggleButton, {
    dataTrackTag: "rich_text_toolbar_action_button",
    tabIndex: -1,
    disabled: disabled,
    isSelected: isSelected,
    "aria-label": type,
    onClick: onClick
  }, children));
};
ActionToggleButton.displayName = 'ActionToggleButton';
/* harmony default export */ const RichTextToolbar_ActionToggleButton = (ActionToggleButton);
try {
    // @ts-ignore
    ActionToggleButton.displayName = "ActionToggleButton";
    // @ts-ignore
    ActionToggleButton.__docgenInfo = { "description": "", "displayName": "ActionToggleButton", "props": { "type": { "defaultValue": null, "description": "", "name": "type", "required": true, "type": { "name": "enum", "value": [{ "value": "\"indent\"" }, { "value": "\"outdent\"" }] } }, "tooltipContent": { "defaultValue": null, "description": "", "name": "tooltipContent", "required": true, "type": { "name": "string" } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../rich_text/src/components/RichTextToolbar/ActionToggleButton/index.tsx#ActionToggleButton"] = { docgenInfo: ActionToggleButton.__docgenInfo, name: "ActionToggleButton", path: "../rich_text/src/components/RichTextToolbar/ActionToggleButton/index.tsx#ActionToggleButton" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../rich_text/src/components/RichTextToolbar/OutdentToggleButton/index.tsx




const OutdentToggleButton = _ref => {
  let {
    disabled
  } = _ref;
  return /*#__PURE__*/react.createElement(RichTextToolbar_ActionToggleButton, {
    dataTrackTag: "rich_text_toolbar_outdent_toggle_button",
    disabled: disabled,
    type: "outdent",
    tooltipContent: (0,translate/* translate */.T)('rich_text.toolbar.outdent')
  }, /*#__PURE__*/react.createElement(Outdent/* default */.A, null));
};
OutdentToggleButton.displayName = 'OutdentToggleButton';
/* harmony default export */ const RichTextToolbar_OutdentToggleButton = (OutdentToggleButton);
try {
    // @ts-ignore
    OutdentToggleButton.displayName = "OutdentToggleButton";
    // @ts-ignore
    OutdentToggleButton.__docgenInfo = { "description": "", "displayName": "OutdentToggleButton", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../rich_text/src/components/RichTextToolbar/OutdentToggleButton/index.tsx#OutdentToggleButton"] = { docgenInfo: OutdentToggleButton.__docgenInfo, name: "OutdentToggleButton", path: "../rich_text/src/components/RichTextToolbar/OutdentToggleButton/index.tsx#OutdentToggleButton" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Indent.js
var Indent = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Indent.js");
;// ../rich_text/src/components/RichTextToolbar/IndentToggleButton/index.tsx




const IndentToggleButton = _ref => {
  let {
    disabled
  } = _ref;
  return /*#__PURE__*/react.createElement(RichTextToolbar_ActionToggleButton, {
    dataTrackTag: "rich_text_toolbar_indent_toggle_button",
    disabled: disabled,
    type: "indent",
    tooltipContent: (0,translate/* translate */.T)('rich_text.toolbar.indent')
  }, /*#__PURE__*/react.createElement(Indent/* default */.A, null));
};
IndentToggleButton.displayName = 'IndentToggleButton';
/* harmony default export */ const RichTextToolbar_IndentToggleButton = (IndentToggleButton);
try {
    // @ts-ignore
    IndentToggleButton.displayName = "IndentToggleButton";
    // @ts-ignore
    IndentToggleButton.__docgenInfo = { "description": "", "displayName": "IndentToggleButton", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../rich_text/src/components/RichTextToolbar/IndentToggleButton/index.tsx#IndentToggleButton"] = { docgenInfo: IndentToggleButton.__docgenInfo, name: "IndentToggleButton", path: "../rich_text/src/components/RichTextToolbar/IndentToggleButton/index.tsx#IndentToggleButton" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../rich_text/src/components/RichTextToolbar/index.tsx










const MARK_BUTTONS = ['bold', 'italic', 'underline', 'strikeThrough'];
const BLOCK_BUTTONS = ['numberedList', 'unorderedList'];
const ACTION_BUTTONS = ['indent', 'outdent'];
const RichTextToolbar = _ref => {
  let {
    disabled,
    toolbarOptions,
    dataTrackTag = 'rich_text_toolbar',
    dataTrackValue
  } = _ref;
  const groupHasButton = groupOptions => {
    let found = false;
    groupOptions.forEach(option => {
      if (toolbarOptions[option]) {
        found = true;
      }
    });
    return found;
  };
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    borderTopLeftRadius: "lg",
    borderTopRightRadius: "lg",
    paddingY: "2",
    paddingX: "2",
    backgroundColor: "grey_200",
    gap: "2",
    withDivider: true,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, groupHasButton(MARK_BUTTONS) && /*#__PURE__*/react.createElement(Stack/* default */.A, {
    gap: "2",
    width: "fit-content"
  }, toolbarOptions.bold && /*#__PURE__*/react.createElement(RichTextToolbar_BoldToggleButton, {
    disabled: disabled
  }), toolbarOptions.italic && /*#__PURE__*/react.createElement(RichTextToolbar_ItalicToggleButton, {
    disabled: disabled
  }), toolbarOptions.underline && /*#__PURE__*/react.createElement(RichTextToolbar_UnderlineToggleButton, {
    disabled: disabled
  }), toolbarOptions.strikeThrough && /*#__PURE__*/react.createElement(RichTextToolbar_LineThroughToggleButton, {
    disabled: disabled
  })), groupHasButton(BLOCK_BUTTONS) && /*#__PURE__*/react.createElement(Stack/* default */.A, {
    gap: "2",
    width: "fit-content"
  }, toolbarOptions.unorderedList && /*#__PURE__*/react.createElement(RichTextToolbar_UnorderedListToggleButton, {
    disabled: disabled
  }), toolbarOptions.numberedList && /*#__PURE__*/react.createElement(RichTextToolbar_NumberedListToggleButton, {
    disabled: disabled
  })), groupHasButton(ACTION_BUTTONS) && /*#__PURE__*/react.createElement(Stack/* default */.A, {
    gap: "2",
    width: "fit-content"
  }, toolbarOptions.indent && /*#__PURE__*/react.createElement(RichTextToolbar_IndentToggleButton, {
    disabled: disabled
  }), toolbarOptions.outdent && /*#__PURE__*/react.createElement(RichTextToolbar_OutdentToggleButton, {
    disabled: disabled
  })));
};
RichTextToolbar.displayName = 'RichTextToolbar';
/* harmony default export */ const components_RichTextToolbar = (RichTextToolbar);
try {
    // @ts-ignore
    RichTextToolbar.displayName = "RichTextToolbar";
    // @ts-ignore
    RichTextToolbar.__docgenInfo = { "description": "", "displayName": "RichTextToolbar", "props": { "toolbarOptions": { "defaultValue": null, "description": "", "name": "toolbarOptions", "required": true, "type": { "name": "ToolbarOptions" } }, "dataTrackTag": { "defaultValue": { value: "rich_text_toolbar" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../rich_text/src/components/RichTextToolbar/index.tsx#RichTextToolbar"] = { docgenInfo: RichTextToolbar.__docgenInfo, name: "RichTextToolbar", path: "../rich_text/src/components/RichTextToolbar/index.tsx#RichTextToolbar" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../rich_text/src/components/RichTextElement/index.tsx + 1 modules
var RichTextElement = __webpack_require__("../rich_text/src/components/RichTextElement/index.tsx");
// EXTERNAL MODULE: ../rich_text/src/components/RichTextLeaf/index.tsx
var RichTextLeaf = __webpack_require__("../rich_text/src/components/RichTextLeaf/index.tsx");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/semanticTokens.js
var semanticTokens = __webpack_require__("../theme/dist/esm/src/shared/themeVars/semanticTokens.js");
;// ../rich_text/src/components/RichTextEditor/style.ts

const getBorderColor = _ref => {
  let {
    disabled,
    isSuccess,
    isError,
    isFocused
  } = _ref;
  if (disabled) {
    return 'grey_400';
  } else if (isSuccess) {
    return isFocused ? 'validationSuccess' : {
      default: 'validationSuccess',
      hover: 'validationSuccess'
    };
  } else if (isError) {
    return isFocused ? 'validationError' : {
      default: 'validationError',
      hover: 'validationError'
    };
  } else {
    return isFocused ? 'grey_1200' : {
      default: 'border',
      hover: 'grey_1200'
    };
  }
};
const getColorByState = _ref2 => {
  let {
    isSuccess,
    isError
  } = _ref2;
  const {
    validationError,
    validationSuccess
  } = semanticTokens/* semanticBorderColors */.zK;
  if (isSuccess) {
    return validationSuccess;
  } else if (isError) {
    return validationError;
  }
  return 'grey_1200';
};
;// ../rich_text/src/components/RichTextEditor/utils.ts
const utils_excluded = ["text"];
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
function utils_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = utils_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function utils_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}







const LINE_HEIGHT = parseInt(themeVars/* bodyLineHeights */.nH.b_md, 10);
const PADDING_HEIGHT = 16;
const SPACE = ' ';
const HTTPS = 'https://';
const urlPattern = new RegExp('^(https?:\\/\\/)?' +
// validate protocol
'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
// validate domain name
'((\\d{1,3}\\.){3}\\d{1,3}))' +
// validate OR ip (v4) address
'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
// validate port and path
'(\\?[;&a-z\\d%_.~+=-]*)?' +
// validate query string
'(\\#[-a-z\\d_]*)?$',
// validate fragment locator
'i');
const DEFAULT_TOOLBAR = {
  bold: true,
  italic: true,
  underline: false,
  strikeThrough: false,
  numberedList: true,
  unorderedList: true,
  indent: false,
  outdent: false
};
const calcMaxHeight = _ref => {
  let {
    rows,
    maxHeight
  } = _ref;
  if (maxHeight) {
    return maxHeight;
  }
  if (rows && rows !== -1) {
    return "".concat(rows * LINE_HEIGHT + PADDING_HEIGHT, "px");
  }
};
const calcMinHeight = _ref2 => {
  let {
    rows,
    minHeight
  } = _ref2;
  if (minHeight) {
    return minHeight;
  }
  if (rows && rows !== -1) {
    return "".concat(rows * LINE_HEIGHT + PADDING_HEIGHT, "px");
  }
};
const hasValidUrl = urlString => {
  if (!urlString) {
    return false;
  }
  const parts = urlString.split(SPACE);
  let found = false;
  parts.forEach(part => {
    if (urlPattern.test(part)) {
      found = true;
    }
  });
  return found;
};
const isFullLink = text => text.startsWith('http://') || text.startsWith('https://');
const handleLinkEditing = (text, editor, isEnter) => {
  let {
    selection
  } = editor;
  const prevLinkNode = editor.previous();
  const prevLinkElement = prevLinkNode && getNodeElement(prevLinkNode) || {
    text: ''
  };
  const linkNode = selection && editor.node(selection);
  const linkElement = linkNode && getNodeElement(linkNode) || {
    text: ''
  };
  const isSpaceOnLinkEnd = text === SPACE && linkElement.url && linkElement.text.endsWith(SPACE);
  const isSpaceOnLinkStart = text === SPACE && linkElement.url && linkElement.text.startsWith(SPACE);
  const handleExistingLinkRemainsValid = (linkNode, linkElement) => {
    if (linkNode) {
      dist_index_es/* Transforms */.gB.setNodes(editor, {
        url: isFullLink(linkElement.text) ? linkElement.text : "".concat(HTTPS).concat(linkElement.text)
      }, {
        at: getNodePath(linkNode)
      });
    }
  };
  if (isEnter && linkElement.url && prevLinkNode && prevLinkElement.url) {
    if (urlPattern.test(prevLinkElement.text)) {
      handleExistingLinkRemainsValid(prevLinkNode, prevLinkElement);
    } else {
      dist_index_es/* Transforms */.gB.setNodes(editor, {
        url: undefined
      }, {
        at: prevLinkNode[1]
      });
    }
  }
  if (linkElement.url && urlPattern.test(linkElement.text)) {
    handleExistingLinkRemainsValid(linkNode, linkElement);
    return;
  }
  dist_index_es/* Transforms */.gB.setNodes(editor, {
    url: undefined
  }, {
    match: node => {
      if (dist_index_es/* Editor */.KE.isEditor(node)) {
        return false;
      }
      if (dist_index_es/* Element */.Hg.isElement(node)) {
        return false;
      }
      return !(0,lodash.isUndefined)(node === null || node === void 0 ? void 0 : node.url);
    }
  });
  selection = editor.selection;
  const node = selection && editor.node(selection);
  const nodeElement = node && getNodeElement(node) || {
    text: ''
  };
  const {
      text: nodeText
    } = nodeElement,
    formatters = utils_objectWithoutProperties(nodeElement, utils_excluded);
  const nodeAt = node && node[1];
  if (nodeAt && nodeText && hasValidUrl(nodeText) && selection) {
    const getLink = text => utils_objectSpread(utils_objectSpread({}, formatters), {}, {
      url: isFullLink(text) ? text : "".concat(HTTPS).concat(text),
      text
    });
    const parts = nodeText.split(SPACE);
    let prevNodeIsUrl = false;
    const nodes = parts.map((part, idx) => {
      if (hasValidUrl(part)) {
        prevNodeIsUrl = true;
        return getLink(part);
      } else {
        const nextNodeIsUrl = idx < parts.length - 1 && hasValidUrl(parts[idx + 1]);
        const text = "".concat(prevNodeIsUrl && !part.startsWith(SPACE) ? SPACE : '').concat(part).concat(nextNodeIsUrl || idx < parts.length - 1 ? SPACE : '');
        prevNodeIsUrl = false;
        return utils_objectSpread({
          text
        }, formatters);
      }
    });
    dist_index_es/* Transforms */.gB.removeNodes(editor, {
      at: nodeAt
    });
    dist_index_es/* Transforms */.gB.insertNodes(editor, nodes, {
      at: nodeAt
    });
    const nodeToSelect = editor.next({
      at: nodeAt
    });
    const alternativeNodeToSelect = editor.node(nodeAt);
    if (isSpaceOnLinkEnd) {
      let node = alternativeNodeToSelect;
      if (nodeToSelect) {
        node = dist_index_es/* Path */.wA.isAfter(nodeToSelect[1], alternativeNodeToSelect[1]) ? nodeToSelect : alternativeNodeToSelect;
      }
      const nodeElement = getNodeElement(node);
      const isLink = !!nodeElement.url;
      dist_index_es/* Transforms */.gB.select(editor, {
        path: getNodePath(node),
        offset: nodeElement.text.length
      });
      if (isLink) {
        dist_index_es/* Transforms */.gB.move(editor, {
          unit: 'character',
          distance: 1
        });
      } else if (nodeElement.text !== SPACE) {
        dist_index_es/* Transforms */.gB.move(editor, {
          unit: 'character',
          reverse: true,
          distance: nodeElement.text.length - 1
        });
      }
    } else if (isSpaceOnLinkStart) {
      let node = alternativeNodeToSelect;
      if (nodeToSelect) {
        node = dist_index_es/* Path */.wA.isBefore(getNodePath(nodeToSelect), getNodePath(alternativeNodeToSelect)) ? nodeToSelect : alternativeNodeToSelect;
      }
      dist_index_es/* Transforms */.gB.select(editor, {
        path: getNodePath(node),
        offset: getNodeElement(node).text.length
      });
    } else {
      const node = nodeToSelect || alternativeNodeToSelect;
      dist_index_es/* Transforms */.gB.select(editor, {
        path: getNodePath(node),
        offset: getNodeElement(node).text.length
      });
    }
  }
};
const customizeOperations = editor => {
  const {
    insertText
  } = editor;
  editor.insertText = (text, options) => {
    insertText(text, options);
    handleLinkEditing(text, editor);
  };
};
const onKeyDown = function (e, editor, onKeyDown) {
  let activeToolbarOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const {
    key,
    ctrlKey,
    metaKey,
    shiftKey
  } = e;
  const isBackspaceKey = key === 'Backspace';
  const isDeleteKey = key === 'Delete';
  const isEnter = key === 'Enter';
  const isCtrlKey = ctrlKey || metaKey;
  const isSpaceKey = key === ' ';
  if ((isBackspaceKey || isDeleteKey || isEnter) && editor.selection) {
    const node = editor.node(editor.selection);
    if (getNodeElement(node).text) {
      setTimeout(() => {
        handleLinkEditing('', editor, isEnter);
      }, 0);
    }
  }
  if (isBackspaceKey && editor.selection) {
    const node = editor.node(editor.selection);
    const nodePath = getNodePath(node);
    if (nodePath.length > 0) {
      const parent = editor.parent(nodePath);
      const parentNode = getNodeElement(parent);
      if (parentNode.type === 'list-item' && editor.selection.anchor.offset === 0 && editor.selection.focus.offset === 0) {
        e.preventDefault();
        const listNode = getNodeElement(editor.parent(getNodePath(parent)));
        toggleBlock(editor, listNode.type);
      }
    }
  }
  if (isEnter && editor.selection) {
    const node = editor.node(editor.selection);
    const nodePath = getNodePath(node);
    if (nodePath.length > 0) {
      const listItemNode = getNodeElement(editor.parent(nodePath));
      if (getNodeElement(node).text === '' && listItemNode.type === 'list-item') {
        e.preventDefault();
        const listItemNode = editor.parent(node[1]);
        const listNode = getNodeElement(editor.parent(getNodePath(listItemNode)));
        toggleBlock(editor, listNode.type);
      }
    }
  }
  if (isCtrlKey) {
    switch (key) {
      case 'b':
        if (activeToolbarOptions.bold) {
          toggleMark(editor, 'bold');
        }
        break;
      case 'i':
        if (activeToolbarOptions.italic) {
          toggleMark(editor, 'italic');
        }
        break;
      case 'u':
        if (activeToolbarOptions.underline) {
          toggleMark(editor, 'underline', 'lineThrough', true);
        }
        break;
      case 'x':
        if (activeToolbarOptions.strikeThrough && shiftKey) {
          toggleMark(editor, 'lineThrough', 'underline', true);
        }
        break;
      case 'z':
        if (shiftKey) {
          HistoryEditor.redo(editor);
        } else {
          HistoryEditor.undo(editor);
        }
        break;
      default:
        break;
    }
  }
  if (isSpaceKey && editor.selection) {
    const node = editor.node(editor.selection);
    const path = getNodePath(node);
    const isFirstLevelNode = path.length === 2 && path[1] === 0;
    const {
      text
    } = getNodeElement(node);
    if (text && isFirstLevelNode) {
      if (text === '1.' && activeToolbarOptions.numberedList) {
        dist_index_es/* Transforms */.gB.delete(editor, {
          at: {
            anchor: {
              path,
              offset: 0
            },
            focus: {
              path,
              offset: 2
            }
          }
        });
        toggleBlock(editor, 'numbered-list');
        e.preventDefault();
      } else if (text === '-' && activeToolbarOptions.unorderedList) {
        dist_index_es/* Transforms */.gB.delete(editor, {
          at: {
            anchor: {
              path,
              offset: 0
            },
            focus: {
              path,
              offset: 1
            }
          }
        });
        toggleBlock(editor, 'unordered-list');
        e.preventDefault();
      }
    }
  }

  // validate of valid markup after operations - fixes bugs: 1) list-item has no list as a parent, 2) paragraph is child of list
  setTimeout(() => {
    if (editor.selection) {
      const node = editor.node(editor.selection);
      if (node[1].length) {
        const parent = editor.parent(getNodePath(node));
        const parentNode = getNodeElement(parent);
        if (parentNode.type === 'list-item') {
          const parentPath = getNodePath(parent);
          if (parentPath.length) {
            const parentOfParent = editor.parent(parentPath);
            if (!LIST_TYPES.includes(getNodeElement(parentOfParent).type)) {
              const props = {
                type: 'paragraph'
              };
              dist_index_es/* Transforms */.gB.setNodes(editor, props, {
                at: parentPath
              });
            }
          } else {
            const props = {
              type: 'paragraph'
            };
            dist_index_es/* Transforms */.gB.setNodes(editor, props, {
              at: parentPath
            });
          }
        } else if (parentNode.type === 'paragraph' && getNodePath(parent).length) {
          const parentPath = getNodePath(parent);
          const parentOfParent = editor.parent(parentPath);
          if (LIST_TYPES.includes(getNodeElement(parentOfParent).type)) {
            const props = {
              type: 'list-item'
            };
            dist_index_es/* Transforms */.gB.setNodes(editor, props, {
              at: parentPath
            });
          }
        }
      }
    }
  }, 0);
  onKeyDown === null || onKeyDown === void 0 || onKeyDown(e);
};
;// ../rich_text/src/components/rich_text/src/components/RichTextEditor/styles.ve.css.ts.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../rich_text/src/components/RichTextEditor/styles.ve.css.ts.vanilla.css","source":"Lndlamo4ZDE6Zm9jdXMtd2l0aGluIHsKICBib3JkZXItY29sb3I6IHZhcigtLXdlamo4ZDApOwp9"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const webpack_plugin_extracted = ({});
;// ../rich_text/src/components/RichTextEditor/styles.ve.css.ts

var borderFocusWithinVar = 'var(--wejj8d0)';
var container = 'wejj8d1';
;// ../rich_text/src/components/RichTextEditor/index.tsx
const RichTextEditor_excluded = ["children"],
  _excluded2 = ["children"];
function RichTextEditor_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function RichTextEditor_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? RichTextEditor_ownKeys(Object(t), !0).forEach(function (r) {
      RichTextEditor_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : RichTextEditor_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function RichTextEditor_defineProperty(e, r, t) {
  return (r = RichTextEditor_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function RichTextEditor_toPropertyKey(t) {
  var i = RichTextEditor_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function RichTextEditor_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function RichTextEditor_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = RichTextEditor_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function RichTextEditor_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}













const RichTextEditor = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
    initialValue = '',
    rows = 2,
    disabled,
    autoFocus,
    placeholder,
    onChange,
    onPaste,
    onFocus,
    onBlur,
    onKeyDown: onKeyDownProp,
    isError,
    isSuccess,
    maxHeight: maxHeightProp,
    minHeight: minHeightProp,
    toolbarOptions,
    showToolbar = true,
    children,
    dataTrackTag = 'rich_text_editor',
    dataTrackValue
  } = _ref;
  const editor = (0,react.useMemo)(() => (0,index_es/* withReact */.o$)(withHistory((0,dist_index_es/* createEditor */.ie)())), []);
  const [isFocused, setFocused] = (0,react.useState)(false);
  (0,react.useImperativeHandle)(ref, () => ({
    focus: () => {
      index_es/* ReactEditor */.rL.focus(editor);
    },
    blur: () => {
      index_es/* ReactEditor */.rL.blur(editor);
    },
    isFocused: () => index_es/* ReactEditor */.rL.isFocused(editor),
    reset: () => {
      const point = {
        path: [0, 0],
        offset: 0
      };
      editor.history = {
        redos: [],
        undos: []
      };
      editor.children.forEach(() => {
        dist_index_es/* Transforms */.gB.delete(editor, {
          at: [0]
        });
      });
      editor.children = [{
        type: 'paragraph',
        children: [{
          text: ''
        }]
      }];
      dist_index_es/* Transforms */.gB.setSelection(editor, {
        anchor: point,
        focus: point
      });
    },
    insertText(getTextToInsert) {
      const {
        text,
        position: maybePosition
      } = getTextToInsert(editor);
      const position = maybePosition || 'cursor';
      const renderedText = MarkdownSlateJsonConverter/* default */.A.convert(text);
      switch (position) {
        case 'start':
          editor.insertNodes(renderedText, {
            at: [0]
          });
          break;
        case 'end':
          editor.insertNodes(renderedText, {
            at: [editor.children.length]
          });
          break;
        case 'cursor':
          editor.insertFragment(renderedText);
          break;
        default:
          editor.insertNodes(renderedText, {
            at: position
          });
          break;
      }
    },
    replaceText(text) {
      const renderedText = MarkdownSlateJsonConverter/* default */.A.convert(text);
      dist_index_es/* Transforms */.gB.delete(editor, {
        at: {
          anchor: dist_index_es/* Editor */.KE.start(editor, []),
          focus: dist_index_es/* Editor */.KE.end(editor, [])
        }
      });
      if (editor.children.length > 0) {
        dist_index_es/* Transforms */.gB.removeNodes(editor, {
          at: [0]
        });
      }
      dist_index_es/* Transforms */.gB.insertNodes(editor, renderedText);
    }
  }));
  const renderElement = (0,react.useCallback)(_ref2 => {
    let {
        children
      } = _ref2,
      props = RichTextEditor_objectWithoutProperties(_ref2, RichTextEditor_excluded);
    return /*#__PURE__*/react.createElement(RichTextElement/* default */.A, props, children);
  }, []);
  const renderLeaf = (0,react.useCallback)(_ref3 => {
    let {
        children
      } = _ref3,
      props = RichTextEditor_objectWithoutProperties(_ref3, _excluded2);
    return /*#__PURE__*/react.createElement(RichTextLeaf/* default */.A, props, children);
  }, []);
  const convertedInitialValue = MarkdownSlateJsonConverter/* default */.A.convert(initialValue);
  customizeOperations(editor);
  const onChangeEditor = nodes => {
    const markdownText = utils_SlateJsonMarkdownConverter.convert(nodes);
    onChange === null || onChange === void 0 || onChange(markdownText, nodes);
  };
  const onFocusEditable = e => {
    setFocused(true);
    onFocus === null || onFocus === void 0 || onFocus(e);
  };
  const onBlurEditable = e => {
    setFocused(false);
    onBlur === null || onBlur === void 0 || onBlur(e);
  };
  const borderColor = getBorderColor({
    disabled,
    isSuccess,
    isError,
    isFocused
  });
  const colorByState = getColorByState({
    isSuccess,
    isError
  });
  const maxHeight = calcMaxHeight({
    rows,
    maxHeight: maxHeightProp
  });
  const minHeight = calcMinHeight({
    rows,
    minHeight: minHeightProp
  });
  const activeToolbarOptions = RichTextEditor_objectSpread(RichTextEditor_objectSpread({}, DEFAULT_TOOLBAR), toolbarOptions);
  return /*#__PURE__*/react.createElement(index_es/* Slate */.A, {
    editor: editor,
    initialValue: convertedInitialValue,
    onChange: onChangeEditor
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    width: "100%",
    className: container,
    borderWidth: "sm",
    pointerEvents: disabled ? 'none' : undefined,
    borderRadius: "lg",
    color: disabled ? 'grey_800' : 'grey_1200',
    backgroundColor: disabled ? 'grey_200' : 'background',
    borderColor: borderColor,
    outlineColor: {
      default: colorByState,
      focusWithin: colorByState
    },
    outlineWidth: {
      default: isFocused ? 'sm' : undefined,
      focusWithin: 'sm'
    },
    outlineStyle: {
      default: isFocused ? 'solid' : undefined,
      focusWithin: 'solid'
    },
    style: (0,vanilla_extract_dynamic_esm/* assignInlineVars */.D)({
      [borderFocusWithinVar]: theme_ve_css/* tokens */.L.colors[colorByState]
    }),
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, showToolbar && /*#__PURE__*/react.createElement(components_RichTextToolbar, {
    toolbarOptions: activeToolbarOptions,
    disabled: disabled
  }), /*#__PURE__*/react.createElement(Container/* default */.A, {
    paddingY: "2",
    paddingX: "3",
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: maxHeight,
    minHeight: minHeight
  }, /*#__PURE__*/react.createElement(index_es/* Editable */.Fo, {
    spellCheck: true,
    renderElement: renderElement,
    renderLeaf: renderLeaf,
    placeholder: placeholder,
    readOnly: disabled,
    disabled: disabled,
    autoFocus: autoFocus,
    onPaste: onPaste,
    onFocus: onFocusEditable,
    onKeyDown: e => onKeyDown(e, editor, onKeyDownProp, activeToolbarOptions),
    onBlur: onBlurEditable,
    rows: rows
  })), children));
});
RichTextEditor.displayName = 'RichTextEditor';
/* harmony default export */ const components_RichTextEditor = (RichTextEditor);
try {
    // @ts-ignore
    RichTextEditor.displayName = "RichTextEditor";
    // @ts-ignore
    RichTextEditor.__docgenInfo = { "description": "", "displayName": "RichTextEditor", "props": { "initialValue": { "defaultValue": { value: "" }, "description": "Initial value of the rich text editor", "name": "initialValue", "required": false, "type": { "name": "string" } }, "autoFocus": { "defaultValue": null, "description": "Whether the rich text should be focused on page load", "name": "autoFocus", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "onChange": { "defaultValue": null, "description": "On rich text value changed", "name": "onChange", "required": false, "type": { "name": "(markdown: string, nodes: Descendant[]) => void" } }, "isSuccess": { "defaultValue": null, "description": "Whether rich text is in success state", "name": "isSuccess", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isError": { "defaultValue": null, "description": "Whether rich text is in error state", "name": "isError", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "rows": { "defaultValue": { value: "2" }, "description": "Set rows in order to limit height by rows count, -1 for no limit", "name": "rows", "required": false, "type": { "name": "number" } }, "toolbarOptions": { "defaultValue": null, "description": "ToolbarOptions will be merged with the default options:\n<pre>`{\n     bold: true,\n     italic: true,\n     underline: false,\n     strikeThrough: false,\n     numberedList: true,\n     unorderedList: true,\n     indent: false,\n     outdent: false\n}`</pre>", "name": "toolbarOptions", "required": false, "type": { "name": "ToolbarOptions" } }, "showToolbar": { "defaultValue": { value: "true" }, "description": "Whether the toolbar should be visible", "name": "showToolbar", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "dataTrackTag": { "defaultValue": { value: "rich_text_editor" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../rich_text/src/components/RichTextEditor/index.tsx#RichTextEditor"] = { docgenInfo: RichTextEditor.__docgenInfo, name: "RichTextEditor", path: "../rich_text/src/components/RichTextEditor/index.tsx#RichTextEditor" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../rich_text/src/components/RichTextBottomPanel/index.tsx
const RichTextBottomPanel_excluded = ["children", "gap", "dataTrackTag"];
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function RichTextBottomPanel_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = RichTextBottomPanel_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function RichTextBottomPanel_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}


const RichTextBottomPanel = _ref => {
  let {
      children,
      gap = '1',
      dataTrackTag = 'rich_text_bottom_panel'
    } = _ref,
    restProps = RichTextBottomPanel_objectWithoutProperties(_ref, RichTextBottomPanel_excluded);
  return /*#__PURE__*/react.createElement(Stack/* default */.A, _extends({
    dataTrackTag: dataTrackTag,
    padding: "2",
    gap: gap
  }, restProps), children);
};
RichTextBottomPanel.displayName = 'RichTextBottomPanel';
/* harmony default export */ const components_RichTextBottomPanel = (RichTextBottomPanel);
try {
    // @ts-ignore
    RichTextBottomPanel.displayName = "RichTextBottomPanel";
    // @ts-ignore
    RichTextBottomPanel.__docgenInfo = { "description": "", "displayName": "RichTextBottomPanel", "props": { "dataTrackTag": { "defaultValue": { value: "rich_text_bottom_panel" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "any" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": true, "type": { "name": "any" } }, "gap": { "defaultValue": { value: "1" }, "description": "", "name": "gap", "required": false, "type": { "name": "any" } }, "justifyContent": { "defaultValue": null, "description": "", "name": "justifyContent", "required": true, "type": { "name": "any" } }, "withDivider": { "defaultValue": null, "description": "", "name": "withDivider", "required": true, "type": { "name": "any" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../rich_text/src/components/RichTextBottomPanel/index.tsx#RichTextBottomPanel"] = { docgenInfo: RichTextBottomPanel.__docgenInfo, name: "RichTextBottomPanel", path: "../rich_text/src/components/RichTextBottomPanel/index.tsx#RichTextBottomPanel" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../rich_text/src/components/stories/helpers.ts
var helpers = __webpack_require__("../rich_text/src/components/stories/helpers.ts");
;// ../rich_text/src/components/RichTextEditor/stories/index.stories.tsx
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
function index_stories_extends() {
  return index_stories_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, index_stories_extends.apply(null, arguments);
}











const Primary = {
  tags: ['sidebar-ignore']
};
const InitialValue = {
  tags: ['sidebar-ignore'],
  args: {
    rows: 20,
    toolbarOptions: {
      indent: true,
      outdent: true,
      strikeThrough: true,
      underline: true
    },
    initialValue: helpers/* markdownInitialValue */.L
  }
};
const ControlledInitialValue = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    rows: 5,
    initialValue: 'Some initial text'
  },
  parameters: {
    docs: {
      description: {
        story: "Slate doesn't support controlled mode by default, so to implement features like `quick response` or `send message`, we export a ref with some methods you can use." + '<br/><br/>' + 'So when you need to update the rich text content by code, you can call `insertText` to add text at a certain place in the editor or `replaceText` to replace the entire content.'
      },
      source: {
        code: "const editorRef = useRef<EditorRef | null>(null);\n\nreturn (\n  <StoryStack paddingY=\"6\" direction=\"column\" width=\"100%\">\n    <RichTextEditor {...args} initialValue={initialValue} onChange={(markdown) => setValue(markdown)} />\n    <Button onClick={() => editorRef.current?.insertText(() => ({ text: '. new **text** added' }))}>Update text</Button>\n    <Button onClick={() => editorRef.current?.replaceText(\"Completely new text\")}>Replace text</Button>\n  </StoryStack>\n);"
      }
    }
  },
  render: args => {
    const editorRef = (0,react.useRef)(null);
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
      direction: "column",
      width: "100%"
    }, /*#__PURE__*/react.createElement(components_RichTextEditor, index_stories_extends({
      ref: editorRef
    }, args, {
      initialValue: args.initialValue || ''
    })), /*#__PURE__*/react.createElement(Button/* default */.A, {
      onClick: () => {
        var _editorRef$current;
        return (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.insertText(() => ({
          text: '. new **text** added'
        }));
      }
    }, "Update text"), /*#__PURE__*/react.createElement(Button/* default */.A, {
      onClick: () => {
        var _editorRef$current2;
        return (_editorRef$current2 = editorRef.current) === null || _editorRef$current2 === void 0 ? void 0 : _editorRef$current2.replaceText('Completely new text');
      }
    }, "Replace text"));
  },
  play: function () {
    var _ref = _asyncToGenerator(function (_ref2) {
      let {
        canvasElement
      } = _ref2;
      return function* () {
        yield (0,src/* takeScreenshot */.w)();
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const trigger = canvas.getByText('Update text');
        const textbox = canvas.getByRole('textbox');
        yield dist/* userEvent */.Q4.click(trigger);
        yield dist/* userEvent */.Q4.click(textbox);
        yield (0,src/* takeScreenshot */.w)();
        yield dist/* userEvent */.Q4.keyboard('{Enter}');
        yield dist/* userEvent */.Q4.type(textbox, '-');
        yield dist/* userEvent */.Q4.type(textbox, ' ');
        yield dist/* userEvent */.Q4.type(textbox, 'First bullet item');
        yield (0,src/* takeScreenshot */.w)();
        yield dist/* userEvent */.Q4.keyboard('{Enter}');
        yield (0,src/* takeScreenshot */.w)();
        yield dist/* userEvent */.Q4.keyboard('{Enter}');
        yield dist/* userEvent */.Q4.type(textbox, '1.');
        yield dist/* userEvent */.Q4.type(textbox, ' ');
        yield dist/* userEvent */.Q4.type(textbox, 'First numbered item');
        yield (0,src/* takeScreenshot */.w)();
        yield dist/* userEvent */.Q4.keyboard('{Enter}');
        yield (0,src/* takeScreenshot */.w)();
        const replaceTrigger = canvas.getByText('Replace text');
        yield dist/* userEvent */.Q4.click(replaceTrigger);
        yield dist/* userEvent */.Q4.click(textbox);
        yield (0,src/* takeScreenshot */.w)(500);
      }();
    });
    return function play(_x) {
      return _ref.apply(this, arguments);
    };
  }()
};
const BottomPanel = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    rows: 5,
    initialValue: ''
  },
  render: args => {
    const editorRef = (0,react.useRef)(null);
    const selectEmoji = data => {
      var _editorRef$current3;
      (_editorRef$current3 = editorRef.current) === null || _editorRef$current3 === void 0 || _editorRef$current3.insertText(() => ({
        text: data.native
      }));
    };
    return /*#__PURE__*/react.createElement(components_RichTextEditor, index_stories_extends({
      ref: editorRef
    }, args), /*#__PURE__*/react.createElement(components_RichTextBottomPanel, {
      withDivider: true
    }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
      gap: "1"
    }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
      size: "2xs",
      variant: "ghost",
      "aria-label": "attachments"
    }, /*#__PURE__*/react.createElement(Attachment/* default */.A, {
      color: "grey_900"
    })), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
      size: "2xs",
      variant: "ghost",
      "aria-label": "quick response"
    }, /*#__PURE__*/react.createElement(Lightning/* default */.A, {
      color: "grey_900"
    }))), /*#__PURE__*/react.createElement(Stack/* default */.A, {
      justifyContent: "spaceBetween",
      width: "100%",
      gap: "1"
    }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
      gap: "1"
    }, /*#__PURE__*/react.createElement(EmojiPicker, {
      size: "2xs",
      onEmojiSelect: selectEmoji,
      appendToBody: true
    }), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
      size: "2xs",
      variant: "ghost",
      "aria-label": "video chat"
    }, /*#__PURE__*/react.createElement(Video/* default */.A, {
      color: "grey_900"
    }))), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
      size: "2xs",
      variant: "ghost",
      "aria-label": "send"
    }, /*#__PURE__*/react.createElement(Airplane/* default */.A, {
      color: "grey_900"
    })))));
  },
  play: function () {
    var _ref3 = _asyncToGenerator(function (_ref4) {
      let {
        canvasElement
      } = _ref4;
      return function* () {
        yield (0,src/* takeScreenshot */.w)();
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const trigger = canvas.getByRole('button', {
          name: 'emoji'
        });
        const textbox = canvas.getByRole('textbox');
        yield dist/* userEvent */.Q4.click(trigger);
        yield dist/* userEvent */.Q4.click(textbox);
        yield (0,src/* takeScreenshot */.w)(1000);
        const emojiPopover = document.querySelector('em-emoji-picker');
        if (!emojiPopover) {
          throw new ReferenceError('Emoji picker popover not found');
        }
        if (!emojiPopover.shadowRoot) {
          throw new ReferenceError('Emoji picker popover has no shadow root');
        }
        const smilingEmojiButton = emojiPopover.shadowRoot.querySelector('button[aria-label="😀"]');
        if (!smilingEmojiButton) {
          throw new ReferenceError('Smiling emoji button not found in emoji picker');
        }
        yield dist/* userEvent */.Q4.click(smilingEmojiButton);
        yield dist/* userEvent */.Q4.click(textbox);
        yield (0,src/* takeScreenshot */.w)(1000);
      }();
    });
    return function play(_x2) {
      return _ref3.apply(this, arguments);
    };
  }()
};
const Rows = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'When used, setting a default maxHeight based on rows count (and scroll on overflow). Default is 2 rows, set -1 for none (RichTextEditor can grow with no limit)'
      }
    }
  },
  args: {
    rows: 5
  }
};
const MaxHeight = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'When used, setting a maxHeight which is not based on rows count.'
      }
    }
  },
  args: {
    maxHeight: '100px'
  }
};
const MinHeight = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'When used, setting a minHeight which is not based on rows count.'
      }
    }
  },
  args: {
    minHeight: '100px'
  }
};
const Error = {
  tags: ['sidebar-ignore'],
  args: {
    isError: true
  }
};
const Success = {
  tags: ['sidebar-ignore'],
  args: {
    isSuccess: true
  }
};
const Disabled = {
  tags: ['sidebar-ignore'],
  args: {
    disabled: true
  }
};
const HideToolBar = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'Hide toolbar'
      },
      source: {
        code: "<RichTextEditor {...args} showToolbar={false}></RichTextEditor>"
      }
    }
  },
  render: args => {
    const [showToolbar, setShowToolbar] = (0,react.useState)(false);
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
      direction: "column",
      width: "100%"
    }, /*#__PURE__*/react.createElement(components_RichTextEditor, index_stories_extends({}, args, {
      showToolbar: showToolbar
    })), /*#__PURE__*/react.createElement(Button/* default */.A, {
      onClick: () => setShowToolbar(!showToolbar)
    }, showToolbar ? 'hide toolbar' : 'show toolbar'));
  }
};
const meta = {
  title: 'Rich Text/RichTextEditor',
  args: {
    placeholder: 'Type here...'
  },
  decorators: [Story => /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    paddingY: "6"
  }, /*#__PURE__*/react.createElement(Story, null))],
  component: components_RichTextEditor
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
InitialValue.parameters = {
  ...InitialValue.parameters,
  docs: {
    ...InitialValue.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    rows: 20,\n    toolbarOptions: {\n      indent: true,\n      outdent: true,\n      strikeThrough: true,\n      underline: true\n    },\n    initialValue: markdownInitialValue\n  }\n}",
      ...InitialValue.parameters?.docs?.source
    }
  }
};
ControlledInitialValue.parameters = {
  ...ControlledInitialValue.parameters,
  docs: {
    ...ControlledInitialValue.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    rows: 5,\n    initialValue: 'Some initial text'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: \"Slate doesn't support controlled mode by default, so to implement features like `quick response` or `send message`, we export a ref with some methods you can use.\" + '<br/><br/>' + 'So when you need to update the rich text content by code, you can call `insertText` to add text at a certain place in the editor or `replaceText` to replace the entire content.'\n      },\n      source: {\n        code: `const editorRef = useRef<EditorRef | null>(null);\n\nreturn (\n  <StoryStack paddingY=\"6\" direction=\"column\" width=\"100%\">\n    <RichTextEditor {...args} initialValue={initialValue} onChange={(markdown) => setValue(markdown)} />\n    <Button onClick={() => editorRef.current?.insertText(() => ({ text: '. new **text** added' }))}>Update text</Button>\n    <Button onClick={() => editorRef.current?.replaceText(\"Completely new text\")}>Replace text</Button>\n  </StoryStack>\n);`\n      }\n    }\n  },\n  render: args => {\n    const editorRef = useRef<EditorRef | null>(null);\n    return <StoryStack direction=\"column\" width=\"100%\">\n        <RichTextEditor ref={editorRef} {...args} initialValue={args.initialValue || ''} />\n        <Button onClick={() => editorRef.current?.insertText(() => ({\n        text: '. new **text** added'\n      }))}>\n          Update text\n        </Button>\n        <Button onClick={() => editorRef.current?.replaceText('Completely new text')}>Replace text</Button>\n      </StoryStack>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    await takeScreenshot();\n    const canvas = within(canvasElement);\n    const trigger = canvas.getByText('Update text');\n    const textbox = canvas.getByRole('textbox');\n    await userEvent.click(trigger);\n    await userEvent.click(textbox);\n    await takeScreenshot();\n    await userEvent.keyboard('{Enter}');\n    await userEvent.type(textbox, '-');\n    await userEvent.type(textbox, ' ');\n    await userEvent.type(textbox, 'First bullet item');\n    await takeScreenshot();\n    await userEvent.keyboard('{Enter}');\n    await takeScreenshot();\n    await userEvent.keyboard('{Enter}');\n    await userEvent.type(textbox, '1.');\n    await userEvent.type(textbox, ' ');\n    await userEvent.type(textbox, 'First numbered item');\n    await takeScreenshot();\n    await userEvent.keyboard('{Enter}');\n    await takeScreenshot();\n    const replaceTrigger = canvas.getByText('Replace text');\n    await userEvent.click(replaceTrigger);\n    await userEvent.click(textbox);\n    await takeScreenshot(500);\n  }\n}",
      ...ControlledInitialValue.parameters?.docs?.source
    }
  }
};
BottomPanel.parameters = {
  ...BottomPanel.parameters,
  docs: {
    ...BottomPanel.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    rows: 5,\n    initialValue: ''\n  },\n  render: args => {\n    const editorRef = useRef<EditorRef | null>(null);\n    const selectEmoji = (data: EmojiSelection) => {\n      editorRef.current?.insertText(() => ({\n        text: data.native\n      }));\n    };\n    return <RichTextEditor ref={editorRef} {...args}>\n        <RichTextBottomPanel withDivider>\n          <Stack gap=\"1\">\n            <IconButton size=\"2xs\" variant=\"ghost\" aria-label=\"attachments\">\n              <AttachmentIcon color=\"grey_900\" />\n            </IconButton>\n            <IconButton size=\"2xs\" variant=\"ghost\" aria-label=\"quick response\">\n              <LightningIcon color=\"grey_900\" />\n            </IconButton>\n          </Stack>\n          <Stack justifyContent=\"spaceBetween\" width=\"100%\" gap=\"1\">\n            <Stack gap=\"1\">\n              <EmojiPicker size=\"2xs\" onEmojiSelect={selectEmoji} appendToBody />\n              <IconButton size=\"2xs\" variant=\"ghost\" aria-label=\"video chat\">\n                <VideoIcon color=\"grey_900\" />\n              </IconButton>\n            </Stack>\n            <IconButton size=\"2xs\" variant=\"ghost\" aria-label=\"send\">\n              <AirplaneIcon color=\"grey_900\" />\n            </IconButton>\n          </Stack>\n        </RichTextBottomPanel>\n      </RichTextEditor>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    await takeScreenshot();\n    const canvas = within(canvasElement);\n    const trigger = canvas.getByRole('button', {\n      name: 'emoji'\n    });\n    const textbox = canvas.getByRole('textbox');\n    await userEvent.click(trigger);\n    await userEvent.click(textbox);\n    await takeScreenshot(1000);\n    const emojiPopover = document.querySelector('em-emoji-picker');\n    if (!emojiPopover) {\n      throw new ReferenceError('Emoji picker popover not found');\n    }\n    if (!emojiPopover.shadowRoot) {\n      throw new ReferenceError('Emoji picker popover has no shadow root');\n    }\n    const smilingEmojiButton = emojiPopover.shadowRoot.querySelector('button[aria-label=\"\uD83D\uDE00\"]');\n    if (!smilingEmojiButton) {\n      throw new ReferenceError('Smiling emoji button not found in emoji picker');\n    }\n    await userEvent.click(smilingEmojiButton);\n    await userEvent.click(textbox);\n    await takeScreenshot(1000);\n  }\n}",
      ...BottomPanel.parameters?.docs?.source
    }
  }
};
Rows.parameters = {
  ...Rows.parameters,
  docs: {
    ...Rows.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'When used, setting a default maxHeight based on rows count (and scroll on overflow). Default is 2 rows, set -1 for none (RichTextEditor can grow with no limit)'\n      }\n    }\n  },\n  args: {\n    rows: 5\n  }\n}",
      ...Rows.parameters?.docs?.source
    }
  }
};
MaxHeight.parameters = {
  ...MaxHeight.parameters,
  docs: {
    ...MaxHeight.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'When used, setting a maxHeight which is not based on rows count.'\n      }\n    }\n  },\n  args: {\n    maxHeight: '100px'\n  }\n}",
      ...MaxHeight.parameters?.docs?.source
    }
  }
};
MinHeight.parameters = {
  ...MinHeight.parameters,
  docs: {
    ...MinHeight.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'When used, setting a minHeight which is not based on rows count.'\n      }\n    }\n  },\n  args: {\n    minHeight: '100px'\n  }\n}",
      ...MinHeight.parameters?.docs?.source
    }
  }
};
Error.parameters = {
  ...Error.parameters,
  docs: {
    ...Error.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    isError: true\n  }\n}",
      ...Error.parameters?.docs?.source
    }
  }
};
Success.parameters = {
  ...Success.parameters,
  docs: {
    ...Success.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    isSuccess: true\n  }\n}",
      ...Success.parameters?.docs?.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...Disabled.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    disabled: true\n  }\n}",
      ...Disabled.parameters?.docs?.source
    }
  }
};
HideToolBar.parameters = {
  ...HideToolBar.parameters,
  docs: {
    ...HideToolBar.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'Hide toolbar'\n      },\n      source: {\n        code: `<RichTextEditor {...args} showToolbar={false}></RichTextEditor>`\n      }\n    }\n  },\n  render: args => {\n    const [showToolbar, setShowToolbar] = useState(false);\n    return <StoryStack direction=\"column\" width=\"100%\">\n        <RichTextEditor {...args} showToolbar={showToolbar}></RichTextEditor>\n        <Button onClick={() => setShowToolbar(!showToolbar)}>{showToolbar ? 'hide toolbar' : 'show toolbar'}</Button>\n      </StoryStack>;\n  }\n}",
      ...HideToolBar.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","InitialValue","ControlledInitialValue","BottomPanel","Rows","MaxHeight","MinHeight","Error","Success","Disabled","HideToolBar"];

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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Airplane.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const AirplaneIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('AirplaneIcon')
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
    d: "m7.663 9.037 2.362-2.363M7.662 9.037l-5.82-1.308c-.742-.168-.803-1.2-.088-1.456l11.98-4.278a.76.76 0 0 1 .97.97l-4.278 11.98c-.256.716-1.287.654-1.456-.087z",
    vectorEffect: "non-scaling-stroke"
  }));
};
AirplaneIcon.id = 'AirplaneIcon';
AirplaneIcon.displayName = 'AirplaneIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AirplaneIcon);
;
AirplaneIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AirplaneIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Attachment.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const AttachmentIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('AttachmentIcon')
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
    d: "M5.3 6V4.65a2.7 2.7 0 0 1 5.4 0v8.1a2.7 2.7 0 0 1-5.4 0V9.711a1.688 1.688 0 0 1 3.375 0v1.687",
    vectorEffect: "non-scaling-stroke"
  }));
};
AttachmentIcon.id = 'AttachmentIcon';
AttachmentIcon.displayName = 'AttachmentIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttachmentIcon);
;
AttachmentIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AttachmentIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Bold.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const BoldIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('BoldIcon')
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
    d: "M3.125 8H8.75a3.375 3.375 0 1 0 0-6.75H3.125zm0 0H9.5a3.375 3.375 0 1 1 0 6.75H3.125z",
    vectorEffect: "non-scaling-stroke"
  }));
};
BoldIcon.id = 'BoldIcon';
BoldIcon.displayName = 'BoldIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoldIcon);
;
BoldIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "BoldIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Indent.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const IndentIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('IndentIcon')
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
    d: "M14.75 2.938H5.469M14.75 8H8.844m5.906 5.063H5.469M1.25 4.624 4.625 8 1.25 11.375",
    vectorEffect: "non-scaling-stroke"
  }));
};
IndentIcon.id = 'IndentIcon';
IndentIcon.displayName = 'IndentIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndentIcon);
;
IndentIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "IndentIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Italic.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const ItalicIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('ItalicIcon')
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
    strokeWidth: 1.5,
    d: "M7.156 1.25h5.907m-7.594 13.5 5.062-13.5m-7.594 13.5h5.907",
    vectorEffect: "non-scaling-stroke"
  }));
};
ItalicIcon.id = 'ItalicIcon';
ItalicIcon.displayName = 'ItalicIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItalicIcon);
;
ItalicIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ItalicIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Lightning.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const LightningIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('LightningIcon')
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
    d: "M12.5 1.75 9.5 7h3.75L5 15.25l1.5-6H2.75l3.375-7.5z",
    vectorEffect: "non-scaling-stroke"
  }));
};
LightningIcon.id = 'LightningIcon';
LightningIcon.displayName = 'LightningIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LightningIcon);
;
LightningIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LightningIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/OrderedList.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const OrderedListIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('OrderedListIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SYSTEM_ICON_SIZES */ .bh[size],
    fill: "none",
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    clipPath: "url(#ordered_list_svg__a)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getStrokeColor */ ._)(color),
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M7.156 2.938h7.594M7.156 8h7.594M8 13.063h6.75m-13.5-1.688a1.687 1.687 0 1 1 3.375 0c0 .499-.422.844-.844 1.266L1.25 14.75h3.375M2.938 6.313V1.25L1.25 2.938",
    vectorEffect: "non-scaling-stroke"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
    id: "ordered_list_svg__a"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M0 0h16v16H0z",
    vectorEffect: "non-scaling-stroke"
  }))));
};
OrderedListIcon.id = 'OrderedListIcon';
OrderedListIcon.displayName = 'OrderedListIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderedListIcon);
;
OrderedListIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OrderedListIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Outdent.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const OutdentIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('OutdentIcon')
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
    d: "M14.75 2.938H8.844M14.75 8H7.156m7.594 5.063H8.844M4.625 4.624 1.25 8l3.375 3.375",
    vectorEffect: "non-scaling-stroke"
  }));
};
OutdentIcon.id = 'OutdentIcon';
OutdentIcon.displayName = 'OutdentIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OutdentIcon);
;
OutdentIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OutdentIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Strikethrough.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const StrikethroughIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('StrikethroughIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .SYSTEM_ICON_SIZES */ .bh[size],
    fill: "none",
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    clipPath: "url(#strikethrough_svg__a)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getStrokeColor */ ._)(color),
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M1.25 8h13.5m-2.893-5.304c-.218-.424-.72-.798-1.42-1.061C9.734 1.372 8.875 1.236 8 1.25h-.964a3.375 3.375 0 0 0 0 6.75h1.928a3.375 3.375 0 0 1 0 6.75H7.518c-.876.014-1.735-.122-2.436-.385-.702-.263-1.203-.637-1.421-1.061",
    vectorEffect: "non-scaling-stroke"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
    id: "strikethrough_svg__a"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M0 0h16v16H0z",
    vectorEffect: "non-scaling-stroke"
  }))));
};
StrikethroughIcon.id = 'StrikethroughIcon';
StrikethroughIcon.displayName = 'StrikethroughIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StrikethroughIcon);
;
StrikethroughIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StrikethroughIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Underline.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const UnderlineIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('UnderlineIcon')
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
    d: "M3.5 1.25v5.885a4.5 4.5 0 1 0 9 0V1.25M1.769 14.75h12.462",
    vectorEffect: "non-scaling-stroke"
  }));
};
UnderlineIcon.id = 'UnderlineIcon';
UnderlineIcon.displayName = 'UnderlineIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnderlineIcon);
;
UnderlineIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "UnderlineIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/UnorderedList.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const UnorderedListIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('UnorderedListIcon')
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
    strokeWidth: 1.5,
    d: "M6.664 2.75h8.086m-13.5 0h1.5M6.664 8h8.086M1.25 8h1.5m3.914 5.25h8.086m-13.5 0h1.5",
    vectorEffect: "non-scaling-stroke"
  }));
};
UnorderedListIcon.id = 'UnorderedListIcon';
UnorderedListIcon.displayName = 'UnorderedListIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnorderedListIcon);
;
UnorderedListIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "UnorderedListIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Video.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const VideoIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('VideoIcon')
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
    d: "M7.622 6.778H5.616m5.03 3.464 3.393 1.671c.351.214.72.088.71-.359l-.023-5.906c-.03-.485-.316-.618-.737-.393l-3.353 1.523m-7.744 6.465h6.097c.907 0 1.642-.726 1.642-1.621l.014-2.08-.014-4.164c0-.895-.735-1.621-1.642-1.621H2.892c-.907 0-1.642.726-1.642 1.621v6.244c0 .895.735 1.621 1.642 1.621",
    vectorEffect: "non-scaling-stroke"
  }));
};
VideoIcon.id = 'VideoIcon';
VideoIcon.displayName = 'VideoIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoIcon);
;
VideoIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "VideoIcon"
};

/***/ })

}]);
//# sourceMappingURL=2988.cedd7bd3.iframe.bundle.js.map