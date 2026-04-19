"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[1617],{

/***/ "../emoji_picker/src/components/EmojiPicker/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AllSizes: () => (/* binding */ AllSizes),
  CustomTriggers: () => (/* binding */ CustomTriggers),
  DisabledState: () => (/* binding */ DisabledState),
  FloatingPopover: () => (/* binding */ FloatingPopover),
  Primary: () => (/* binding */ Primary),
  WithSelectionTracking: () => (/* binding */ WithSelectionTracking),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs + 1 modules
var dist = __webpack_require__("../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js
var src = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Card/Card/index.js
var Card = __webpack_require__("../layout_components/dist/esm/src/components/Card/Card/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Heading/index.js + 1 modules
var Heading = __webpack_require__("../typography/dist/esm/src/components/Heading/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
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
;// ../emoji_picker/src/components/EmojiPicker/constants.ts
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
;// ../emoji_picker/src/components/EmojiPicker/EmojiPopoverContent.tsx
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
try {
    // @ts-ignore
    EmojiPopoverContent.displayName = "EmojiPopoverContent";
    // @ts-ignore
    EmojiPopoverContent.__docgenInfo = { "description": "", "displayName": "EmojiPopoverContent", "props": { "onEmojiSelect": { "defaultValue": null, "description": "", "name": "onEmojiSelect", "required": false, "type": { "name": "(data: EmojiSelection) => void" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../emoji_picker/src/components/EmojiPicker/EmojiPopoverContent.tsx#EmojiPopoverContent"] = { docgenInfo: EmojiPopoverContent.__docgenInfo, name: "EmojiPopoverContent", path: "../emoji_picker/src/components/EmojiPicker/EmojiPopoverContent.tsx#EmojiPopoverContent" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../emoji_picker/src/components/emoji_picker/src/components/EmojiPicker/styles.ve.css.ts.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../emoji_picker/src/components/EmojiPicker/styles.ve.css.ts.vanilla.css","source":"Ll8xZzQ2YmUxMCBlbS1lbW9qaS1waWNrZXIgewogIC0tYmFja2dyb3VuZC1yZ2I6IDM0LCAzNSwgMzc7CiAgLS1yZ2ItY29sb3I6IDM0LCAzNSwgMzc7CiAgLS1yZ2ItYWNjZW50OiAzNCwgMzUsIDM3OwogIC0tY29sb3ItYjogIzYyNjQ2QTsKICAtLWZvbnQtZmFtaWx5OiAiTWFjYW4iLCAiSGVsdmV0aWNhIE5ldWUiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmOwogIC0tY29sb3ItYm9yZGVyLW92ZXI6ICNEQURCREQ7CiAgY29sb3I6ICMyODQzODk7Cn0="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../emoji_picker/src/components/EmojiPicker/styles.ve.css.ts

var customEmojiPopoverClass = '_1g46be10';
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../emoji_picker/src/components/EmojiPicker/hooks.ts



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
;// ../emoji_picker/src/components/EmojiPicker/index.tsx









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
try {
    // @ts-ignore
    EmojiPicker.displayName = "EmojiPicker";
    // @ts-ignore
    EmojiPicker.__docgenInfo = { "description": "", "displayName": "EmojiPicker", "props": { "onEmojiSelect": { "defaultValue": null, "description": "", "name": "onEmojiSelect", "required": true, "type": { "name": "(data: EmojiSelection) => void" } }, "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }, { "value": "\"3xs\"" }, { "value": "\"2xs\"" }, { "value": "\"xs\"" }] } }, "variant": { "defaultValue": { value: "ghost" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"outline\"" }, { "value": "\"filled\"" }, { "value": "\"ghost\"" }] } }, "disabled": { "defaultValue": { value: "false" }, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "appendToBody": { "defaultValue": { value: "false" }, "description": "", "name": "appendToBody", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "position": { "defaultValue": null, "description": "", "name": "position", "required": false, "type": { "name": "enum", "value": [{ "value": "\"top\"" }, { "value": "\"bottom\"" }, { "value": "\"right\"" }, { "value": "\"left\"" }, { "value": "\"top-start\"" }, { "value": "\"top-end\"" }, { "value": "\"bottom-start\"" }, { "value": "\"bottom-end\"" }, { "value": "\"right-start\"" }, { "value": "\"right-end\"" }, { "value": "\"left-start\"" }, { "value": "\"left-end\"" }, { "value": "\"auto\"" }] } }, "disableBoxShadow": { "defaultValue": { value: "false" }, "description": "@ignore", "name": "disableBoxShadow", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../emoji_picker/src/components/EmojiPicker/index.tsx#EmojiPicker"] = { docgenInfo: EmojiPicker.__docgenInfo, name: "EmojiPicker", path: "../emoji_picker/src/components/EmojiPicker/index.tsx#EmojiPicker" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../emoji_picker/src/components/EmojiPicker/stories/index.stories.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
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






const Primary = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    // eslint-disable-next-line no-console
    onEmojiSelect: data => console.log(data),
    size: 'md',
    variant: 'ghost',
    disabled: false,
    disableBoxShadow: true
  },
  play: function () {
    var _ref = _asyncToGenerator(function (_ref2) {
      let {
        canvasElement
      } = _ref2;
      return function* () {
        const emojiButton = (0,dist/* within */.ux)(canvasElement).getByRole('button', {
          name: /emoji/i
        });
        yield (0,src/* takeScreenshot */.w)();
        yield dist/* userEvent */.Q4.click(emojiButton, {
          delay: 400
        });
        const popoverContent = canvasElement.querySelector('[role="dialog"]');
        (0,dist/* expect */.E3)(popoverContent).toBeInTheDocument();
        yield (0,src/* takeScreenshot */.w)();
        yield dist/* userEvent */.Q4.click(emojiButton, {
          delay: 400
        });
        (0,dist/* expect */.E3)(popoverContent).not.toBeInTheDocument();
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x) {
      return _ref.apply(this, arguments);
    };
  }(),
  render: args => /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "flex",
    direction: "column",
    gap: "4",
    height: "500px",
    padding: "1"
  }, /*#__PURE__*/react.createElement(EmojiPicker, args)),
  parameters: {
    docs: {
      source: {
        code: "import { EmojiPicker } from '@fiverr-private/emoji_picker';\n\nconst handleEmojiSelect = (data: EmojiSelection) => {\n  console.log(data);\n};\n\n<EmojiPicker onEmojiSelect={handleEmojiSelect} />;\n\n"
      }
    }
  }
};
const WithSelectionTracking = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    // eslint-disable-next-line no-console
    onEmojiSelect: data => console.log(data),
    size: 'md',
    variant: 'ghost',
    disabled: false
  },
  render: args => {
    const [selectedEmoji, setSelectedEmoji] = (0,react.useState)(null);
    const [emojiHistory, setEmojiHistory] = (0,react.useState)([]);
    const handleEmojiSelect = emojiData => {
      setSelectedEmoji(emojiData);
      setEmojiHistory(prev => [{
        emoji: emojiData.native,
        name: emojiData.name,
        id: emojiData.id
      }, ...prev.slice(0, 4)]);
    };
    return /*#__PURE__*/react.createElement(Container/* default */.A, {
      display: "flex",
      direction: "column",
      gap: "4"
    }, /*#__PURE__*/react.createElement(Container/* default */.A, {
      display: "flex",
      gap: "4"
    }, /*#__PURE__*/react.createElement(Container/* default */.A, {
      width: "300px",
      height: "500px"
    }, /*#__PURE__*/react.createElement(EmojiPicker, _extends({}, args, {
      onEmojiSelect: handleEmojiSelect
    }))), /*#__PURE__*/react.createElement(Container/* default */.A, {
      display: "flex",
      direction: "column",
      gap: "4",
      flex: "1"
    }, /*#__PURE__*/react.createElement(Card/* default */.A, {
      padding: "4",
      borderRadius: "lg",
      backgroundColor: "grey_100"
    }, /*#__PURE__*/react.createElement(Heading/* default */.A, {
      as: "h5",
      size: "h_xxs",
      marginBottom: "2"
    }, "Current Selection"), selectedEmoji ? /*#__PURE__*/react.createElement(Container/* default */.A, {
      display: "flex",
      direction: "column",
      gap: "1"
    }, /*#__PURE__*/react.createElement(Text/* default */.A, null, /*#__PURE__*/react.createElement("strong", null, "Emoji:"), " ", selectedEmoji.native, " (", selectedEmoji.name, ")"), /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_xs"
    }, /*#__PURE__*/react.createElement("strong", null, "ID:"), " ", selectedEmoji.id), /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_xs"
    }, /*#__PURE__*/react.createElement("strong", null, "Unicode:"), " ", selectedEmoji.unified)) : /*#__PURE__*/react.createElement(Text/* default */.A, {
      color: "bodySecondary"
    }, "Select an emoji to see details")), /*#__PURE__*/react.createElement(Card/* default */.A, {
      padding: "4",
      borderRadius: "lg",
      backgroundColor: "blue_100"
    }, /*#__PURE__*/react.createElement(Heading/* default */.A, {
      as: "h5",
      size: "h_xxs",
      marginBottom: "2"
    }, "Recent Selections"), emojiHistory.length > 0 ? /*#__PURE__*/react.createElement(Container/* default */.A, {
      display: "flex",
      direction: "column",
      gap: "2"
    }, emojiHistory.map(item => /*#__PURE__*/react.createElement(Container/* default */.A, {
      key: item.id,
      display: "flex",
      alignItems: "center",
      gap: "2"
    }, /*#__PURE__*/react.createElement(Text/* default */.A, null, item.emoji), /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_xs"
    }, item.name)))) : /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_xs",
      color: "bodySecondary"
    }, "No selections yet")))));
  },
  parameters: {
    docs: {
      source: {
        code: "import { EmojiPicker } from '@fiverr-private/emoji_picker';\nimport { useState } from 'react';\n\nconst [selectedEmoji, setSelectedEmoji] = useState(null);\nconst [emojiHistory, setEmojiHistory] = useState([]);\n\nconst handleEmojiSelect = (emojiData) => {\n  setSelectedEmoji(emojiData);\n\n  // Add to history for tracking/analytics\n  setEmojiHistory(prev => [{\n    emoji: emojiData.native,\n    name: emojiData.name,\n    id: emojiData.id,\n    selectedAt: new Date()\n  }, ...prev.slice(0, 4)]);\n};\n\n<EmojiPicker onEmojiSelect={handleEmojiSelect} />"
      }
    }
  }
};
const AllSizes = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    // eslint-disable-next-line no-console
    onEmojiSelect: data => console.log(data),
    variant: 'filled',
    disabled: false
  },
  render: args => {
    const [selectedEmoji, setSelectedEmoji] = (0,react.useState)(null);
    const handleEmojiSelect = emojiData => {
      setSelectedEmoji(emojiData);
    };
    return /*#__PURE__*/react.createElement(Container/* default */.A, {
      display: "flex",
      direction: "column",
      gap: "4"
    }, /*#__PURE__*/react.createElement(Container/* default */.A, {
      display: "flex",
      alignItems: "center",
      gap: "2"
    }, /*#__PURE__*/react.createElement(Text/* default */.A, null, /*#__PURE__*/react.createElement("strong", null, "Last Selected:")), /*#__PURE__*/react.createElement(Text/* default */.A, null, selectedEmoji ? selectedEmoji.native : 'None')), /*#__PURE__*/react.createElement(Container/* default */.A, {
      display: "flex",
      gap: "4",
      wrap: "wrap",
      alignItems: "flexEnd",
      alignContent: "flexStart",
      minHeight: "500px"
    }, /*#__PURE__*/react.createElement(EmojiPicker, _extends({}, args, {
      onEmojiSelect: handleEmojiSelect,
      size: "lg"
    })), /*#__PURE__*/react.createElement(EmojiPicker, _extends({}, args, {
      onEmojiSelect: handleEmojiSelect,
      size: "md"
    })), /*#__PURE__*/react.createElement(EmojiPicker, _extends({}, args, {
      onEmojiSelect: handleEmojiSelect,
      size: "sm"
    }))));
  },
  parameters: {
    docs: {
      source: {
        code: "import { EmojiPicker } from '@fiverr-private/emoji_picker';\nimport { useState } from 'react';\n\nconst [selectedEmoji, setSelectedEmoji] = useState(null);\n\nconst handleEmojiSelect = (emojiData: EmojiSelection) => {\n  setSelectedEmoji(emojiData);\n};\n\n// Small size\n<EmojiPicker onEmojiSelect={handleEmojiSelect} size=\"sm\" />\n\n// Medium size (default)\n<EmojiPicker onEmojiSelect={handleEmojiSelect} size=\"md\" />\n\n// Large size\n<EmojiPicker onEmojiSelect={handleEmojiSelect} size=\"lg\" />"
      }
    }
  }
};
const DisabledState = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  play: function () {
    var _ref3 = _asyncToGenerator(function (_ref4) {
      let {
        canvasElement
      } = _ref4;
      return function* () {
        const emojiButton = (0,dist/* within */.ux)(canvasElement).getByRole('button', {
          name: /emoji/i
        });
        (0,dist/* expect */.E3)(emojiButton).toBeDisabled();
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x2) {
      return _ref3.apply(this, arguments);
    };
  }(),
  args: {
    // eslint-disable-next-line no-console
    onEmojiSelect: data => console.log(data),
    size: 'md',
    variant: 'ghost',
    disabled: true
  },
  render: args => /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "flex",
    direction: "column",
    gap: "4"
  }, /*#__PURE__*/react.createElement(EmojiPicker, args)),
  parameters: {
    docs: {
      source: {
        code: "import { EmojiPicker } from '@fiverr-private/emoji_picker';\n\nconst handleEmojiSelect = (emojiData: EmojiSelection) => {\n  console.log('Selected:', emojiData);\n};\n\n<EmojiPicker onEmojiSelect={handleEmojiSelect} disabled />"
      }
    }
  }
};
const CustomTriggers = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  play: function () {
    var _ref5 = _asyncToGenerator(function (_ref6) {
      let {
        canvasElement
      } = _ref6;
      return function* () {
        yield (0,src/* takeScreenshot */.w)();
        const customTrigger = (0,dist/* within */.ux)(canvasElement).getByText(/Click me! 🎯/i);
        yield dist/* userEvent */.Q4.click(customTrigger, {
          delay: 400
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x3) {
      return _ref5.apply(this, arguments);
    };
  }(),
  args: {
    // eslint-disable-next-line no-console
    onEmojiSelect: data => console.log(data),
    disabled: false,
    disableBoxShadow: true
  },
  render: args => {
    const [selectedEmoji, setSelectedEmoji] = (0,react.useState)(null);
    const handleEmojiSelect = emojiData => {
      setSelectedEmoji(emojiData);
    };
    return /*#__PURE__*/react.createElement(Container/* default */.A, {
      display: "flex",
      direction: "column",
      gap: "4"
    }, /*#__PURE__*/react.createElement(Container/* default */.A, {
      display: "flex",
      alignItems: "center",
      gap: "2"
    }, /*#__PURE__*/react.createElement(Text/* default */.A, null, /*#__PURE__*/react.createElement("strong", null, "Last Selected:")), /*#__PURE__*/react.createElement(Text/* default */.A, null, selectedEmoji ? selectedEmoji.native : 'None')), /*#__PURE__*/react.createElement(Container/* default */.A, {
      display: "flex",
      gap: "4",
      wrap: "wrap",
      minHeight: "500px"
    }, /*#__PURE__*/react.createElement(Container/* default */.A, {
      display: "flex",
      direction: "column",
      alignItems: "center",
      gap: "2"
    }, /*#__PURE__*/react.createElement(EmojiPicker, _extends({}, args, {
      onEmojiSelect: handleEmojiSelect
    }), /*#__PURE__*/react.createElement("div", {
      style: {
        padding: '8px 16px',
        border: '2px dashed #ccc',
        borderRadius: '4px',
        cursor: 'pointer',
        textAlign: 'center'
      }
    }, "Click me! \uD83C\uDFAF")), /*#__PURE__*/react.createElement(Text/* default */.A, {
      size: "b_xs"
    }, "Custom Div"))));
  },
  parameters: {
    docs: {
      source: {
        code: "import { EmojiPicker } from '@fiverr-private/emoji_picker';\nimport { Button } from '@fiverr-private/button';\n\nconst handleEmojiSelect = (emojiData: EmojiSelection) => {\n  console.log('Selected:', emojiData);\n};\n\n// Custom div trigger\n<EmojiPicker onEmojiSelect={handleEmojiSelect}>\n  <div style={{\n    padding: '8px 16px',\n    border: '2px dashed #ccc',\n    borderRadius: '4px',\n    cursor: 'pointer',\n    textAlign: 'center'\n  }}>\n    Click me! \uD83C\uDFAF\n  </div>\n</EmojiPicker>\n"
      }
    }
  }
};
const FloatingPopover = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    // eslint-disable-next-line no-console
    onEmojiSelect: data => console.log(data),
    size: 'md',
    variant: 'ghost',
    disabled: false,
    disableBoxShadow: true,
    appendToBody: true
  },
  play: function () {
    var _ref7 = _asyncToGenerator(function (_ref8) {
      let {
        canvasElement
      } = _ref8;
      return function* () {
        const emojiButton = (0,dist/* within */.ux)(canvasElement).getByRole('button', {
          name: /emoji/i
        });
        yield (0,src/* takeScreenshot */.w)();
        yield dist/* userEvent */.Q4.click(emojiButton, {
          delay: 400
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x4) {
      return _ref7.apply(this, arguments);
    };
  }(),
  render: args => /*#__PURE__*/react.createElement(Container/* default */.A, {
    display: "flex",
    direction: "column",
    gap: "4",
    height: "500px",
    padding: "1"
  }, /*#__PURE__*/react.createElement(EmojiPicker, args)),
  parameters: {
    docs: {
      source: {
        code: "import { EmojiPicker } from '@fiverr-private/emoji_picker';\n\nconst handleEmojiSelect = (data: EmojiSelection) => {\n  console.log(data);\n};\n\n<EmojiPicker onEmojiSelect={handleEmojiSelect} appendToBody={true}/>;\n\n"
      }
    }
  }
};
const meta = {
  title: 'Emoji Picker/Emoji Picker',
  component: EmojiPicker,
  parameters: {
    docs: {
      description: {
        component: "\nA flexible emoji picker component with a default button trigger. Can be customized with different sizes, disabled state, or custom trigger elements via children. Opens emoji picker in a popover when clicked.\n        "
      }
    }
  }
};
/* harmony default export */ const index_stories = (meta);
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    // eslint-disable-next-line no-console\n    onEmojiSelect: (data: EmojiSelection) => console.log(data),\n    size: 'md',\n    variant: 'ghost',\n    disabled: false,\n    disableBoxShadow: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const emojiButton = within(canvasElement).getByRole('button', {\n      name: /emoji/i\n    });\n    await takeScreenshot();\n    await userEvent.click(emojiButton, {\n      delay: 400\n    });\n    const popoverContent = canvasElement.querySelector('[role=\"dialog\"]');\n    expect(popoverContent).toBeInTheDocument();\n    await takeScreenshot();\n    await userEvent.click(emojiButton, {\n      delay: 400\n    });\n    expect(popoverContent).not.toBeInTheDocument();\n    await takeScreenshot();\n  },\n  render: args => <Container display=\"flex\" direction=\"column\" gap=\"4\" height=\"500px\" padding=\"1\">\n      <EmojiPicker {...args} />\n    </Container>,\n  parameters: {\n    docs: {\n      source: {\n        code: `import { EmojiPicker } from '@fiverr-private/emoji_picker';\n\nconst handleEmojiSelect = (data: EmojiSelection) => {\n  console.log(data);\n};\n\n<EmojiPicker onEmojiSelect={handleEmojiSelect} />;\n\n`\n      }\n    }\n  }\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
WithSelectionTracking.parameters = {
  ...WithSelectionTracking.parameters,
  docs: {
    ...WithSelectionTracking.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    // eslint-disable-next-line no-console\n    onEmojiSelect: (data: EmojiSelection) => console.log(data),\n    size: 'md',\n    variant: 'ghost',\n    disabled: false\n  },\n  render: args => {\n    const [selectedEmoji, setSelectedEmoji] = useState<EmojiSelection | null>(null);\n    const [emojiHistory, setEmojiHistory] = useState<{\n      emoji: string;\n      name: string;\n      id: string;\n    }[]>([]);\n    const handleEmojiSelect = (emojiData: EmojiSelection) => {\n      setSelectedEmoji(emojiData);\n      setEmojiHistory(prev => [{\n        emoji: emojiData.native,\n        name: emojiData.name,\n        id: emojiData.id\n      }, ...prev.slice(0, 4)]);\n    };\n    return <Container display=\"flex\" direction=\"column\" gap=\"4\">\n        <Container display=\"flex\" gap=\"4\">\n          <Container width=\"300px\" height=\"500px\">\n            <EmojiPicker {...args} onEmojiSelect={handleEmojiSelect} />\n          </Container>\n\n          <Container display=\"flex\" direction=\"column\" gap=\"4\" flex=\"1\">\n            {/* Current Selection Details */}\n            <Card padding=\"4\" borderRadius=\"lg\" backgroundColor=\"grey_100\">\n              <Heading as=\"h5\" size=\"h_xxs\" marginBottom=\"2\">\n                Current Selection\n              </Heading>\n              {selectedEmoji ? <Container display=\"flex\" direction=\"column\" gap=\"1\">\n                  <Text>\n                    <strong>Emoji:</strong> {selectedEmoji.native} ({selectedEmoji.name})\n                  </Text>\n                  <Text size=\"b_xs\">\n                    <strong>ID:</strong> {selectedEmoji.id}\n                  </Text>\n                  <Text size=\"b_xs\">\n                    <strong>Unicode:</strong> {selectedEmoji.unified}\n                  </Text>\n                </Container> : <Text color=\"bodySecondary\">Select an emoji to see details</Text>}\n            </Card>\n\n            {/* Selection History */}\n            <Card padding=\"4\" borderRadius=\"lg\" backgroundColor=\"blue_100\">\n              <Heading as=\"h5\" size=\"h_xxs\" marginBottom=\"2\">\n                Recent Selections\n              </Heading>\n              {emojiHistory.length > 0 ? <Container display=\"flex\" direction=\"column\" gap=\"2\">\n                  {emojiHistory.map(item => <Container key={item.id} display=\"flex\" alignItems=\"center\" gap=\"2\">\n                      <Text>{item.emoji}</Text>\n                      <Text size=\"b_xs\">{item.name}</Text>\n                    </Container>)}\n                </Container> : <Text size=\"b_xs\" color=\"bodySecondary\">\n                  No selections yet\n                </Text>}\n            </Card>\n          </Container>\n        </Container>\n      </Container>;\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `import { EmojiPicker } from '@fiverr-private/emoji_picker';\nimport { useState } from 'react';\n\nconst [selectedEmoji, setSelectedEmoji] = useState(null);\nconst [emojiHistory, setEmojiHistory] = useState([]);\n\nconst handleEmojiSelect = (emojiData) => {\n  setSelectedEmoji(emojiData);\n\n  // Add to history for tracking/analytics\n  setEmojiHistory(prev => [{\n    emoji: emojiData.native,\n    name: emojiData.name,\n    id: emojiData.id,\n    selectedAt: new Date()\n  }, ...prev.slice(0, 4)]);\n};\n\n<EmojiPicker onEmojiSelect={handleEmojiSelect} />`\n      }\n    }\n  }\n}",
      ...WithSelectionTracking.parameters?.docs?.source
    }
  }
};
AllSizes.parameters = {
  ...AllSizes.parameters,
  docs: {
    ...AllSizes.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    // eslint-disable-next-line no-console\n    onEmojiSelect: (data: EmojiSelection) => console.log(data),\n    variant: 'filled',\n    disabled: false\n  },\n  render: args => {\n    const [selectedEmoji, setSelectedEmoji] = useState<EmojiSelection | null>(null);\n    const handleEmojiSelect = (emojiData: EmojiSelection) => {\n      setSelectedEmoji(emojiData);\n    };\n    return <Container display=\"flex\" direction=\"column\" gap=\"4\">\n        <Container display=\"flex\" alignItems=\"center\" gap=\"2\">\n          <Text>\n            <strong>Last Selected:</strong>\n          </Text>\n          <Text>{selectedEmoji ? selectedEmoji.native : 'None'}</Text>\n        </Container>\n\n        <Container display=\"flex\" gap=\"4\" wrap=\"wrap\" alignItems=\"flexEnd\" alignContent=\"flexStart\" minHeight=\"500px\">\n          <EmojiPicker {...args} onEmojiSelect={handleEmojiSelect} size=\"lg\" />\n          <EmojiPicker {...args} onEmojiSelect={handleEmojiSelect} size=\"md\" />\n          <EmojiPicker {...args} onEmojiSelect={handleEmojiSelect} size=\"sm\" />\n        </Container>\n      </Container>;\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `import { EmojiPicker } from '@fiverr-private/emoji_picker';\nimport { useState } from 'react';\n\nconst [selectedEmoji, setSelectedEmoji] = useState(null);\n\nconst handleEmojiSelect = (emojiData: EmojiSelection) => {\n  setSelectedEmoji(emojiData);\n};\n\n// Small size\n<EmojiPicker onEmojiSelect={handleEmojiSelect} size=\"sm\" />\n\n// Medium size (default)\n<EmojiPicker onEmojiSelect={handleEmojiSelect} size=\"md\" />\n\n// Large size\n<EmojiPicker onEmojiSelect={handleEmojiSelect} size=\"lg\" />`\n      }\n    }\n  }\n}",
      ...AllSizes.parameters?.docs?.source
    }
  }
};
DisabledState.parameters = {
  ...DisabledState.parameters,
  docs: {
    ...DisabledState.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  play: async ({\n    canvasElement\n  }) => {\n    const emojiButton = within(canvasElement).getByRole('button', {\n      name: /emoji/i\n    });\n    expect(emojiButton).toBeDisabled();\n    await takeScreenshot();\n  },\n  args: {\n    // eslint-disable-next-line no-console\n    onEmojiSelect: (data: EmojiSelection) => console.log(data),\n    size: 'md',\n    variant: 'ghost',\n    disabled: true\n  },\n  render: args => <Container display=\"flex\" direction=\"column\" gap=\"4\">\n      <EmojiPicker {...args} />\n    </Container>,\n  parameters: {\n    docs: {\n      source: {\n        code: `import { EmojiPicker } from '@fiverr-private/emoji_picker';\n\nconst handleEmojiSelect = (emojiData: EmojiSelection) => {\n  console.log('Selected:', emojiData);\n};\n\n<EmojiPicker onEmojiSelect={handleEmojiSelect} disabled />`\n      }\n    }\n  }\n}",
      ...DisabledState.parameters?.docs?.source
    }
  }
};
CustomTriggers.parameters = {
  ...CustomTriggers.parameters,
  docs: {
    ...CustomTriggers.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  play: async ({\n    canvasElement\n  }) => {\n    await takeScreenshot();\n    const customTrigger = within(canvasElement).getByText(/Click me! \uD83C\uDFAF/i);\n    await userEvent.click(customTrigger, {\n      delay: 400\n    });\n    await takeScreenshot();\n  },\n  args: {\n    // eslint-disable-next-line no-console\n    onEmojiSelect: (data: EmojiSelection) => console.log(data),\n    disabled: false,\n    disableBoxShadow: true\n  },\n  render: args => {\n    const [selectedEmoji, setSelectedEmoji] = useState<EmojiSelection | null>(null);\n    const handleEmojiSelect = (emojiData: EmojiSelection) => {\n      setSelectedEmoji(emojiData);\n    };\n    return <Container display=\"flex\" direction=\"column\" gap=\"4\">\n        <Container display=\"flex\" alignItems=\"center\" gap=\"2\">\n          <Text>\n            <strong>Last Selected:</strong>\n          </Text>\n          <Text>{selectedEmoji ? selectedEmoji.native : 'None'}</Text>\n        </Container>\n\n        <Container display=\"flex\" gap=\"4\" wrap=\"wrap\" minHeight=\"500px\">\n          <Container display=\"flex\" direction=\"column\" alignItems=\"center\" gap=\"2\">\n            <EmojiPicker {...args} onEmojiSelect={handleEmojiSelect}>\n              <div style={{\n              padding: '8px 16px',\n              border: '2px dashed #ccc',\n              borderRadius: '4px',\n              cursor: 'pointer',\n              textAlign: 'center'\n            }}>\n                Click me! \uD83C\uDFAF\n              </div>\n            </EmojiPicker>\n            <Text size=\"b_xs\">Custom Div</Text>\n          </Container>\n        </Container>\n      </Container>;\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `import { EmojiPicker } from '@fiverr-private/emoji_picker';\nimport { Button } from '@fiverr-private/button';\n\nconst handleEmojiSelect = (emojiData: EmojiSelection) => {\n  console.log('Selected:', emojiData);\n};\n\n// Custom div trigger\n<EmojiPicker onEmojiSelect={handleEmojiSelect}>\n  <div style={{\n    padding: '8px 16px',\n    border: '2px dashed #ccc',\n    borderRadius: '4px',\n    cursor: 'pointer',\n    textAlign: 'center'\n  }}>\n    Click me! \uD83C\uDFAF\n  </div>\n</EmojiPicker>\n`\n      }\n    }\n  }\n}",
      ...CustomTriggers.parameters?.docs?.source
    }
  }
};
FloatingPopover.parameters = {
  ...FloatingPopover.parameters,
  docs: {
    ...FloatingPopover.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    // eslint-disable-next-line no-console\n    onEmojiSelect: (data: EmojiSelection) => console.log(data),\n    size: 'md',\n    variant: 'ghost',\n    disabled: false,\n    disableBoxShadow: true,\n    appendToBody: true\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const emojiButton = within(canvasElement).getByRole('button', {\n      name: /emoji/i\n    });\n    await takeScreenshot();\n    await userEvent.click(emojiButton, {\n      delay: 400\n    });\n    await takeScreenshot();\n  },\n  render: args => <Container display=\"flex\" direction=\"column\" gap=\"4\" height=\"500px\" padding=\"1\">\n      <EmojiPicker {...args} />\n    </Container>,\n  parameters: {\n    docs: {\n      source: {\n        code: `import { EmojiPicker } from '@fiverr-private/emoji_picker';\n\nconst handleEmojiSelect = (data: EmojiSelection) => {\n  console.log(data);\n};\n\n<EmojiPicker onEmojiSelect={handleEmojiSelect} appendToBody={true}/>;\n\n`\n      }\n    }\n  }\n}",
      ...FloatingPopover.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","WithSelectionTracking","AllSizes","DisabledState","CustomTriggers","FloatingPopover"];

/***/ }),

/***/ "../layout_components/dist/esm/src/components/Card/Card/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../layout_components/dist/esm/src/components/Card/shared.js");
const _excluded = ["children", "borderRadius", "variant", "dataTrackTag"];
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



const Card = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      children,
      borderRadius = 'sm',
      variant = 'default',
      dataTrackTag = 'card'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread(_objectSpread({
    ref: ref
  }, variant === 'shadow' ? _shared__WEBPACK_IMPORTED_MODULE_2__/* .shadow */ .r : _shared__WEBPACK_IMPORTED_MODULE_2__/* .border */ .P), {}, {
    dataTrackTag: dataTrackTag,
    borderRadius: borderRadius
  }, restProps), children);
});
Card.displayName = 'Card';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);
;
Card.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Card"
};

/***/ }),

/***/ "../layout_components/dist/esm/src/components/Card/shared.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ border),
/* harmony export */   r: () => (/* binding */ shadow)
/* harmony export */ });
const border = {
  borderColor: 'border',
  borderStyle: 'solid',
  borderWidth: 'sm'
};
const shadow = {
  boxShadow: 'aa'
};

/***/ }),

/***/ "../layout_components/dist/esm/src/components/Flex/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Layout/index.js");
const _excluded = ["children", "display"];
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


const Flex = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      children,
      display = 'flex'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    ref: ref,
    display: display
  }, restProps), children);
});
Flex.displayName = 'Flex';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Flex);
;
Flex.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Flex"
};

/***/ }),

/***/ "../layout_components/dist/esm/src/components/Layout/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ "../theme/dist/esm/src/atoms/utilityClasses.ve.css.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* binding */ paddingX_0_xxl),
  q: () => (/* binding */ placeholder)
});

// EXTERNAL MODULE: ../theme/dist/esm/theme/dist/esm/src/theme.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../theme/dist/esm/src/theme.ve.css.js.vanilla.css","source":"#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"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
var extracted = __webpack_require__("../theme/dist/esm/theme/dist/esm/src/theme.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{\"fileName\":\"../theme/dist/esm/src/theme.ve.css.js.vanilla.css\",\"source\":\"#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\"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js");
;// ../theme/dist/esm/src/theme/dist/esm/src/atoms/utilityClasses.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../theme/dist/esm/src/atoms/utilityClasses.ve.css.js.vanilla.css","source":"Ll8xb2dnNWRwMTo6cGxhY2Vob2xkZXIgewogIGNvbG9yOiB2YXIoLS1ocGthemYxdik7CiAgdGV4dC1vdmVyZmxvdzogdmFyKC0taHBrYXpmN2QpOwogIGZvbnQtc2l6ZTogdmFyKC0taHBrYXpmOGUpOwogIGxpbmUtaGVpZ2h0OiB2YXIoLS1ocGthemY4dyk7CiAgZm9udC1mYW1pbHk6IHZhcigtLWhwa2F6ZjRoKTsKfQpAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNzYwcHgpIHsKICBib2R5IC5fMW9nZzVkcDAgewogICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1ocGthemY0dCk7CiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1ocGthemY0dCk7CiAgfQp9"}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const webpack_plugin_extracted = ({});
;// ../theme/dist/esm/src/atoms/utilityClasses.ve.css.js


var paddingX_0_xxl = '_1ogg5dp0';
var placeholder = '_1ogg5dp1';

/***/ }),

/***/ "../typography/dist/esm/src/components/Heading/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Heading)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Typography/index.js
var Typography = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
;// ../typography/dist/esm/src/components/Heading/helpers.js
const SIZES = {
  1: 'h_xxl',
  2: 'h_xl',
  3: 'h_lg',
  4: 'h_md',
  5: 'h_sm',
  6: 'h_xs',
  7: 'h_xxs'
};
const getResponsiveObject = as => {
  const size = Number(as.replace('h', ''));
  return {
    default: SIZES[size + 1],
    sm: SIZES[size]
  };
};
;// ../typography/dist/esm/src/components/Heading/index.js
const _excluded = ["as", "color", "fontWeight", "children", "size", "dataTrackTag"];
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



const Heading = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      as = 'h1',
      color = 'heading',
      fontWeight = 'bold',
      children,
      size,
      dataTrackTag = 'heading'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const defaultResponsive = getResponsiveObject(as);
  return /*#__PURE__*/react.createElement(Typography/* default */.A, _objectSpread({
    ref: ref,
    as: as,
    fontWeight: fontWeight,
    size: size || defaultResponsive,
    color: color,
    dataTrackTag: dataTrackTag
  }, restProps), children);
});
Heading.displayName = 'Heading';
/* harmony default export */ const components_Heading = (Heading);
;
Heading.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Heading"
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
//# sourceMappingURL=1617.f4590baa.iframe.bundle.js.map