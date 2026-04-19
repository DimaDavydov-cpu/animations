(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[5846],{

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

/***/ "../data_display/dist/esm/src/components/Status/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Status)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
;// ../data_display/dist/esm/src/components/Status/constants.js
const TYPES = {
  NEUTRAL: 'neutral',
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error',
  SPECIAL: 'special',
  WARNING: 'warning'
};
const COLORS_BY_TYPE = {
  neutral: {
    color: 'grey_1200',
    backgroundColor: 'grey_400'
  },
  info: {
    color: 'blue_1100',
    backgroundColor: 'blue_200'
  },
  warning: {
    color: 'yellow_1200',
    backgroundColor: 'yellow_200'
  },
  success: {
    color: 'green_1100',
    backgroundColor: 'green_200'
  },
  error: {
    color: 'red_1100',
    backgroundColor: 'red_200'
  },
  special: {
    color: 'purple_1100',
    backgroundColor: 'purple_200'
  }
};
;// ../data_display/dist/esm/src/components/Status/index.js
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



const Status = _ref => {
  let {
    type = 'neutral',
    children,
    dataTrackTag = 'status',
    dataTrackValue
  } = _ref;
  return /*#__PURE__*/react.createElement(Box/* default */.A, _objectSpread({
    borderRadius: "sm",
    minHeight: "20px",
    display: "flex",
    alignItems: "center",
    paddingX: "2",
    width: "fit-content",
    letterSpacing: "0.5px",
    fontSize: "b_xxs",
    lineHeight: "b_xs",
    fontWeight: "bold",
    userSelect: "none",
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, COLORS_BY_TYPE[type]), children);
};
Status.displayName = 'Status';
/* harmony default export */ const components_Status = (Status);
;
Status.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Status"
};

/***/ }),

/***/ "../dropzone/src/components/Dropzone/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Dark: () => (/* binding */ Dark),
  DarkLean: () => (/* binding */ DarkLean),
  FullExampleMultipleFiles: () => (/* binding */ FullExampleMultipleFiles),
  FullExampleSingleFile: () => (/* binding */ FullExampleSingleFile),
  FullExampleSingleFileLean: () => (/* binding */ FullExampleSingleFileLean),
  NoDisclaimer: () => (/* binding */ NoDisclaimer),
  Primary: () => (/* binding */ Primary),
  TouchDevice: () => (/* binding */ TouchDevice),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs + 1 modules
var dist = __webpack_require__("../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/utils/index.js
var utils = __webpack_require__("../storybook_helpers/dist/esm/src/utils/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js
var src = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/TimesButton/index.js
var TimesButton = __webpack_require__("../button/dist/esm/src/components/TimesButton/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js + 1 modules
var getContext = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js
var excludeChildrenByType = __webpack_require__("../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Overlay/index.js + 1 modules
var Overlay = __webpack_require__("../overlay/dist/esm/src/components/Overlay/index.js");
// EXTERNAL MODULE: ../tooltip/dist/esm/src/components/Tooltip/index.js
var Tooltip = __webpack_require__("../tooltip/dist/esm/src/components/Tooltip/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Typography/index.js
var Typography = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
// EXTERNAL MODULE: ../media/dist/esm/src/components/Video/index.js + 6 modules
var Video = __webpack_require__("../media/dist/esm/src/components/Video/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Center/index.js
var Center = __webpack_require__("../layout_components/dist/esm/src/components/Center/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/ErrorCircle.js
var ErrorCircle = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/ErrorCircle.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/l1/Image.js
var Image = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/l1/Image.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/l1/Video.js
var l1_Video = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/l1/Video.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/l1/Pdf.js
var Pdf = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/l1/Pdf.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/l1/Audio.js
var Audio = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/l1/Audio.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/l1/File.js
var l1_File = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/l1/File.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
;// ../attachments/dist/esm/src/components/Attachments/Asset/utils.js
const fileTypes = {
  pdf: ['pdf'],
  document: ['doc', 'docx', 'xls', 'xlsx', 'csv', 'ppt', 'pptx', 'txt'],
  image: ['jpg', 'jpeg', 'png', 'gif', 'svg', 'bmp', 'tiff', 'heic', 'webp'],
  video: ['mp4', 'mov', 'avi', 'mkv', 'webm'],
  audio: ['mp3', 'wav', 'aac', 'ogg']
};
const getFileType = name => {
  var _name$split$pop;
  const fileExtension = (_name$split$pop = name.split('.').pop()) === null || _name$split$pop === void 0 ? void 0 : _name$split$pop.toLowerCase();
  let fileType = 'other';
  for (const [type, extensions] of Object.entries(fileTypes)) {
    if (fileExtension && extensions.includes(fileExtension)) {
      fileType = type;
      break;
    }
  }
  return {
    isImage: fileType === 'image',
    isVideo: fileType === 'video',
    isPdf: fileType === 'pdf',
    isDocument: fileType === 'document',
    isAudio: fileType === 'audio',
    isOther: fileType === 'other'
  };
};
const getSize = (variant, width, height) => {
  if (variant === 'list') {
    return {
      width: 44,
      height: 44
    };
  }
  if (variant === 'grid') {
    return {
      width: 88,
      height: 88
    };
  }
  return {
    width,
    height
  };
};
;// ../attachments/dist/esm/src/components/Attachments/Asset/index.js







const Asset = _ref => {
  let {
    showPreview,
    hasError,
    variant,
    width: widthProp = '100%',
    height: heightProp = '100%',
    url,
    name,
    children,
    theme: themeProp
  } = _ref;
  const {
    isImage,
    isAudio,
    isDocument,
    isPdf,
    isVideo,
    isOther
  } = (0,react.useMemo)(() => getFileType(name), [name]);
  const {
    width,
    height
  } = getSize(variant, widthProp, heightProp);
  const {
    isTouch
  } = (0,getContext/* default */.A)();
  const isDark = themeProp === 'dark';
  const backgroundColor = isDark ? 'white_20' : 'grey_200';
  const errorColor = isDark ? 'red_1200' : 'red_100';
  return /*#__PURE__*/react.createElement(Center/* default */.A, {
    overflow: "hidden",
    key: name,
    borderRadius: "lg",
    backgroundColor: hasError ? errorColor : backgroundColor,
    flexShrink: 0,
    width: width,
    height: height,
    display: "flex",
    direction: "column",
    color: isDark ? 'grey_700' : 'grey_1200'
  }, hasError ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Center/* default */.A, {
    gap: "1"
  }, /*#__PURE__*/react.createElement(ErrorCircle/* default */.A, {
    color: isDark ? 'red_600' : 'red_900',
    size: variant === 'list' ? 'sm' : 'lg'
  }), isTouch && children)) : /*#__PURE__*/react.createElement(react.Fragment, null, isImage && showPreview && url ? /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "img",
    alt: name,
    src: url,
    objectFit: "cover",
    style: {
      objectPosition: 'center'
    },
    width: "100%",
    height: "100%"
  }) : isImage && /*#__PURE__*/react.createElement(Image/* default */.A, null), isVideo && showPreview && url ? /*#__PURE__*/react.createElement(Video/* default */.A, {
    controls: false,
    height: "100%",
    sources: [{
      src: url,
      type: 'video/mp4'
    }]
  }) : isVideo && /*#__PURE__*/react.createElement(l1_Video/* default */.A, null), isPdf && /*#__PURE__*/react.createElement(Pdf/* default */.A, null), isAudio && /*#__PURE__*/react.createElement(Audio/* default */.A, null), (isDocument || isOther) && /*#__PURE__*/react.createElement(l1_File/* default */.A, null)));
};
/* harmony default export */ const Attachments_Asset = (Asset);
;
Asset.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Asset"
};
;// ../attachments/dist/esm/src/components/Attachments/hooks/useActiveState.js

const useActiveState = () => {
  const [isActive, setIsActive] = (0,react.useState)(false);
  const handleMouseLeave = (0,react.useCallback)(() => setIsActive(false), []);
  const handleFocus = (0,react.useCallback)(() => setIsActive(true), []);
  const handleBlur = (0,react.useCallback)(e => {
    if (!e.target.contains(e.relatedTarget)) {
      setIsActive(false);
    }
  }, []);
  const handleMouseEnter = (0,react.useCallback)(() => {
    setIsActive(true);
  }, []);
  return {
    isActive,
    handleMouseEnter,
    handleMouseLeave,
    handleFocus,
    handleBlur
  };
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js
var translate = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
;// ../attachments/dist/esm/src/components/Attachments/Attachment/RemoveButton/index.js



const RemoveButton = _ref => {
  let {
    onClick,
    variant,
    theme
  } = _ref;
  if (!onClick) {
    return null;
  }
  const isDark = theme === 'dark';
  return /*#__PURE__*/react.createElement(TimesButton/* default */.A, {
    onClick: onClick,
    ariaLabel: (0,translate/* translate */.T)('attachments.remove'),
    size: variant === 'list' ? 'sm' : 'xs',
    theme: theme === 'dark' ? 'light' : 'dark',
    variant: variant === 'list' || isDark ? 'ghost' : 'filled',
    dataTrackTag: "attachment_remove_button"
  });
};
RemoveButton.displayName = 'RemoveButton';
/* harmony default export */ const Attachment_RemoveButton = (RemoveButton);
;
RemoveButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "RemoveButton"
};
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
;// ../attachments/dist/esm/src/components/Attachments/utils.js


const renderAttachmentsChildren = (children, _ref) => {
  let {
    variant,
    theme,
    setIsTooltipOpen
  } = _ref;
  return react.Children.map(react.Children.toArray(children), child => (0,render_children/* renderChildren */.s)(child, {
    variant,
    theme,
    setIsTooltipOpen
  }));
};
;
renderAttachmentsChildren.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "renderAttachmentsChildren"
};
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/Status/index.js + 1 modules
var Status = __webpack_require__("../data_display/dist/esm/src/components/Status/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js
var I18n = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js");
;// ../attachments/dist/esm/src/components/Attachments/Attachment/AttachmentStatus/index.js



const ATTACHMENTS_CONFIG = {
  deleted: {
    i18nKey: 'attachments.statuses.deleted',
    statusVariant: 'error'
  },
  archived: {
    i18nKey: 'attachments.statuses.archived',
    statusVariant: 'neutral'
  },
  restore_in_progress: {
    i18nKey: 'attachments.statuses.restore_in_progress',
    statusVariant: 'info'
  }
};
const AttachmentStatus = _ref => {
  let {
    status,
    variant
  } = _ref;
  if (variant !== 'single' || status === 'active') {
    return null;
  }
  return /*#__PURE__*/react.createElement(Status/* default */.A, {
    dataTrackTag: "attachment_status",
    dataTrackValue: status,
    type: ATTACHMENTS_CONFIG[status].statusVariant
  }, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: ATTACHMENTS_CONFIG[status].i18nKey
  }));
};
AttachmentStatus.displayName = 'AttachmentStatus';
AttachmentStatus.id = 'AttachmentStatus';
/* harmony default export */ const Attachment_AttachmentStatus = (AttachmentStatus);
;
AttachmentStatus.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AttachmentStatus"
};
;// ../attachments/dist/esm/src/components/Attachments/Attachment/AttachmentGridItem/index.js













const AttachmentGridItem = _ref => {
  let {
    showPreview,
    onRemove,
    error,
    onClick,
    width,
    height,
    hasError,
    url,
    name,
    children,
    variant,
    theme,
    status,
    dataTrackTag,
    dataTrackValue
  } = _ref;
  const {
    isActive,
    handleMouseEnter,
    handleMouseLeave,
    handleFocus,
    handleBlur
  } = useActiveState();
  const {
    isTouch
  } = (0,getContext/* default */.A)();
  const [isTooltipOpen, setIsTooltipOpen] = (0,react.useState)(false);
  const retryBtn = (0,findChildByType/* findChildByType */.B)(children, 'AttachmentRetryBtn');
  const restChildren = (0,excludeChildrenByType/* excludeChildrenByType */.h)(children, 'AttachmentRetryBtn');
  const tooltipContent = /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0",
    color: "inherit"
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, null, name), error && /*#__PURE__*/react.createElement(Typography/* default */.A, null, error));
  const handleTooltipMouseEnter = () => {
    setIsTooltipOpen(true);
    handleMouseEnter();
  };
  const handleTooltipMouseLeave = () => {
    setIsTooltipOpen(false);
    handleMouseLeave();
  };
  return /*#__PURE__*/react.createElement(Container/* default */.A, {
    paddingTop: "2",
    onMouseEnter: handleTooltipMouseEnter,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onMouseLeave: handleTooltipMouseLeave,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(Tooltip/* default */.A, {
    content: tooltipContent,
    appendToBody: true,
    as: "div",
    withDelay: false,
    size: "sm",
    isOpen: isTooltipOpen
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    onClick: onClick,
    position: "relative",
    tabIndex: 0,
    width: "fit-content",
    borderRadius: "lg"
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    justifyContent: "flexEnd"
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    position: "absolute",
    top: "8px",
    left: "8px",
    zIndex: "1"
  }, status && /*#__PURE__*/react.createElement(Attachment_AttachmentStatus, {
    status: status,
    variant: variant
  })), isTouch && onRemove && /*#__PURE__*/react.createElement(Container/* default */.A, {
    position: "absolute",
    top: "-8px",
    right: "-6px",
    zIndex: "1"
  }, /*#__PURE__*/react.createElement(TimesButton/* default */.A, {
    onClick: onRemove,
    ariaLabel: "delete",
    size: "3xs",
    theme: "dark",
    variant: "filled",
    shape: "circle"
  })), /*#__PURE__*/react.createElement(Attachments_Asset, {
    url: url,
    name: name,
    hasError: hasError,
    variant: variant,
    showPreview: showPreview,
    width: width,
    height: height,
    theme: theme
  }, isTouch ? renderAttachmentsChildren(retryBtn, {
    variant,
    theme,
    setIsTooltipOpen
  }) : null)), isActive && !isTouch && /*#__PURE__*/react.createElement(Overlay/* default */.A, {
    lockBodyScroll: false,
    position: "absolute",
    borderRadius: "lg"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "1",
    alignItems: "flexEnd",
    padding: "2",
    height: "100%"
  }, /*#__PURE__*/react.createElement(Attachment_RemoveButton, {
    onClick: onRemove,
    variant: variant,
    theme: theme
  }), hasError && renderAttachmentsChildren(retryBtn, {
    variant,
    theme,
    setIsTooltipOpen
  }), renderAttachmentsChildren(restChildren, {
    variant,
    theme,
    setIsTooltipOpen
  }))))));
};
AttachmentGridItem.displayName = 'AttachmentGridItem';
/* harmony default export */ const Attachment_AttachmentGridItem = (AttachmentGridItem);
;
AttachmentGridItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AttachmentGridItem"
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/browser/index.js + 21 modules
var browser = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/browser/index.js");
;// ../attachments/dist/esm/src/components/Attachments/Attachment/AttachmentListItem/index.js
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










const AttachmentListItem = _ref => {
  let {
    error,
    showPreview,
    onRemove,
    onClick,
    hasError,
    name,
    fileSize: fileSizeProp,
    url,
    children,
    variant,
    theme,
    dataTrackTag,
    dataTrackValue
  } = _ref;
  const {
    isTouch
  } = (0,getContext/* default */.A)();
  const {
    isActive,
    handleMouseEnter,
    handleMouseLeave,
    handleFocus,
    handleBlur
  } = useActiveState();
  const retryBtn = (0,findChildByType/* findChildByType */.B)(children, 'AttachmentRetryBtn');
  const restChildren = (0,excludeChildrenByType/* excludeChildrenByType */.h)(children, 'AttachmentRetryBtn');
  const fileSize = fileSizeProp ? (0,browser/* fileSizeFormat */.ti)({
    bytes: fileSizeProp,
    options: {
      maximumFractionDigits: 0
    }
  }) : undefined;
  const ellipsisPros = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  };
  const getBackgroundColor = isActive => {
    if (theme === 'dark') {
      return isActive ? 'white_20' : 'white_10';
    }
    return isActive ? 'grey_100' : undefined;
  };
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    gap: "6",
    paddingY: "1.5",
    paddingX: "2",
    justifyContent: "spaceBetween",
    borderRadius: "sm",
    alignItems: "center",
    onFocus: handleFocus,
    onBlur: handleBlur,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    tabIndex: 0,
    onClick: onClick,
    backgroundColor: getBackgroundColor(isActive),
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    gap: "4",
    overflow: "hidden"
  }, /*#__PURE__*/react.createElement(Attachments_Asset, {
    name: name,
    url: url,
    hasError: hasError,
    variant: variant,
    showPreview: showPreview,
    theme: theme
  }), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0",
    overflow: "hidden"
  }, !(isTouch && hasError) && /*#__PURE__*/react.createElement(Text/* default */.A, _objectSpread({
    color: theme === 'dark' ? 'white' : undefined,
    size: "b_sm",
    fontWeight: "semibold"
  }, ellipsisPros), name), /*#__PURE__*/react.createElement(Text/* default */.A, _objectSpread({
    size: "b_sm",
    color: hasError ? 'validationError' : 'bodySecondary'
  }, ellipsisPros), hasError ? error : fileSize === null || fileSize === void 0 ? void 0 : fileSize.toLocaleUpperCase()), hasError && isTouch && renderAttachmentsChildren(retryBtn, {
    variant,
    theme
  }))), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    flexShrink: 0,
    gap: "2"
  }, hasError && isActive && !isTouch && renderAttachmentsChildren(retryBtn, {
    variant,
    theme
  }), /*#__PURE__*/react.createElement(Container/* default */.A, {
    hidden: !isActive || isTouch
  }, renderAttachmentsChildren(restChildren, {
    variant,
    theme
  })), (isActive || isTouch) && /*#__PURE__*/react.createElement(Attachment_RemoveButton, {
    variant: variant,
    onClick: onRemove,
    theme: theme
  })));
};
AttachmentListItem.displayName = 'AttachmentListItem';
/* harmony default export */ const Attachment_AttachmentListItem = (AttachmentListItem);
;
AttachmentListItem.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AttachmentListItem"
};
;// ../attachments/dist/esm/src/components/Attachments/Attachment/index.js
const _excluded = ["variant", "theme", "goExperimental", "dataTrackTag"];
function Attachment_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Attachment_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Attachment_ownKeys(Object(t), !0).forEach(function (r) {
      Attachment_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Attachment_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Attachment_defineProperty(e, r, t) {
  return (r = Attachment_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Attachment_toPropertyKey(t) {
  var i = Attachment_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function Attachment_toPrimitive(t, r) {
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



const Attachment = _ref => {
  let {
      variant = 'single',
      theme = 'light',
      goExperimental = false,
      dataTrackTag = 'attachment'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const currentTheme = goExperimental ? 'dark' : theme;
  if (variant === 'list') {
    return /*#__PURE__*/react.createElement(Attachment_AttachmentListItem, Attachment_objectSpread(Attachment_objectSpread({
      dataTrackTag: dataTrackTag
    }, restProps), {}, {
      variant: variant,
      theme: currentTheme
    }));
  }
  return /*#__PURE__*/react.createElement(Attachment_AttachmentGridItem, Attachment_objectSpread(Attachment_objectSpread({
    dataTrackTag: dataTrackTag
  }, restProps), {}, {
    variant: variant,
    theme: currentTheme
  }));
};
Attachment.displayName = 'Attachment';
/* harmony default export */ const Attachments_Attachment = (Attachment);
;
Attachment.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Attachment"
};
;// ../attachments/dist/esm/src/components/Attachments/index.js
function Attachments_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Attachments_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Attachments_ownKeys(Object(t), !0).forEach(function (r) {
      Attachments_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Attachments_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Attachments_defineProperty(e, r, t) {
  return (r = Attachments_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Attachments_toPropertyKey(t) {
  var i = Attachments_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function Attachments_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}



const Attachments = _ref => {
  let {
    children,
    variant = 'list',
    goExperimental = false,
    theme = 'light',
    dataTrackTag = 'attachments',
    dataTrackValue
  } = _ref;
  const props = variant === 'list' ? {
    direction: 'column',
    gap: '1'
  } : {
    wrap: 'wrap',
    columnGap: '4',
    rowGap: '2'
  };
  return /*#__PURE__*/react.createElement(Stack/* default */.A, Attachments_objectSpread({
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    role: "group",
    width: "100%"
  }, props), renderAttachmentsChildren(children, {
    variant,
    theme: goExperimental ? 'dark' : theme
  }));
};
Attachments.displayName = 'Attachments';
/* harmony default export */ const components_Attachments = (Attachments);
;
Attachments.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Attachments"
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dropzone@14.3.8_react@17.0.2/node_modules/react-dropzone/dist/es/index.js + 5 modules
var es = __webpack_require__("../../node_modules/.pnpm/react-dropzone@14.3.8_react@17.0.2/node_modules/react-dropzone/dist/es/index.js");
// EXTERNAL MODULE: ../inputs/dist/esm/src/components/Input/index.js
var Input = __webpack_require__("../inputs/dist/esm/src/components/Input/index.js");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/Loader/index.js + 1 modules
var Loader = __webpack_require__("../feedback/dist/esm/src/components/Loader/index.js");
// EXTERNAL MODULE: ../feedback/dist/esm/src/components/ProgressLine/index.js + 2 modules
var ProgressLine = __webpack_require__("../feedback/dist/esm/src/components/ProgressLine/index.js");
;// ../dropzone/src/components/Dropzone/UploadingBody/index.tsx





const UploadingBody = _ref => {
  let {
    acceptedFiles = [],
    progressPercent,
    variant,
    theme
  } = _ref;
  const isSingleFileUploading = acceptedFiles.length === 1;
  if (variant === 'lean') {
    return /*#__PURE__*/react.createElement(Center/* default */.A, {
      width: 42,
      height: 42,
      paddingTop: "1"
    }, /*#__PURE__*/react.createElement(Loader/* default */.A, {
      size: "sm",
      color: theme === 'dark' ? 'grey_300' : undefined
    }));
  }
  return /*#__PURE__*/react.createElement(Center/* default */.A, {
    direction: "column",
    gap: "6"
  }, isSingleFileUploading ? /*#__PURE__*/react.createElement(Typography/* default */.A, {
    textAlign: "center",
    fontWeight: "semibold",
    color: theme === 'dark' ? 'grey_300' : 'bodyPrimary'
  }, "\u2018", acceptedFiles[0].name, "\u2019") : /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: theme === 'dark' ? 'grey_300' : 'bodyPrimary'
  }, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "dropzone.uploading_body.files_count",
    templates: {
      count: text => /*#__PURE__*/react.createElement(Typography/* default */.A, {
        as: "span",
        fontWeight: "semibold",
        color: theme === 'dark' ? 'grey_300' : 'bodyPrimary'
      }, text)
    },
    params: {
      count: acceptedFiles.length
    }
  })), /*#__PURE__*/react.createElement(Container/* default */.A, {
    width: "230px"
  }, /*#__PURE__*/react.createElement(ProgressLine/* default */.A, {
    percent: progressPercent
  })));
};
UploadingBody.displayName = 'UploadingBody';
UploadingBody.id = 'UploadingBody';
/* harmony default export */ const Dropzone_UploadingBody = (UploadingBody);
try {
    // @ts-ignore
    UploadingBody.displayName = "UploadingBody";
    // @ts-ignore
    UploadingBody.__docgenInfo = { "description": "", "displayName": "UploadingBody", "props": { "theme": { "defaultValue": null, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } }, "variant": { "defaultValue": null, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"lean\"" }] } }, "progressPercent": { "defaultValue": null, "description": "", "name": "progressPercent", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../dropzone/src/components/Dropzone/UploadingBody/index.tsx#UploadingBody"] = { docgenInfo: UploadingBody.__docgenInfo, name: "UploadingBody", path: "../dropzone/src/components/Dropzone/UploadingBody/index.tsx#UploadingBody" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../button/dist/esm/src/components/IconButton/index.js
var IconButton = __webpack_require__("../button/dist/esm/src/components/IconButton/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/Button/index.js + 1 modules
var Button = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Plus.js
var Plus = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Plus.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Upload.js
var Upload = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Upload.js");
;// ../dropzone/src/components/Dropzone/IdleBody/index.tsx







const IdleBody = _ref => {
  let {
    disabled,
    multiple,
    variant,
    theme
  } = _ref;
  const {
    isTouch
  } = (0,getContext/* default */.A)();
  const isDark = theme === 'dark';
  if (variant === 'lean') {
    return /*#__PURE__*/react.createElement(IconButton/* default */.A, {
      disabled: disabled,
      "aria-label": (0,translate/* translate */.T)('dropzone.idle_body.button_text'),
      size: "md",
      variant: "ghost",
      colorScheme: isDark ? 'white' : undefined
    }, /*#__PURE__*/react.createElement(Plus/* default */.A, {
      size: "sm"
    }));
  }
  const lightColor = disabled ? 'bodySecondary' : 'bodyPrimary';
  return /*#__PURE__*/react.createElement(Center/* default */.A, {
    gap: "3"
  }, !isTouch && /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: isDark ? 'grey_300' : lightColor
  }, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: multiple ? 'dropzone.idle_body.text_multi' : 'dropzone.idle_body.text'
  })), /*#__PURE__*/react.createElement(Button/* default */.A, {
    disabled: disabled,
    variant: "outline",
    tabIndex: -1,
    colorScheme: isDark ? 'white' : undefined,
    type: "button"
  }, /*#__PURE__*/react.createElement(Upload/* default */.A, null), /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: multiple ? 'dropzone.idle_body.button_text_multi' : 'dropzone.idle_body.button_text'
  })));
};
IdleBody.displayName = 'IdleBody';
IdleBody.id = 'IdleBody';
/* harmony default export */ const Dropzone_IdleBody = (IdleBody);
try {
    // @ts-ignore
    IdleBody.displayName = "IdleBody";
    // @ts-ignore
    IdleBody.__docgenInfo = { "description": "", "displayName": "IdleBody", "props": { "theme": { "defaultValue": null, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "variant": { "defaultValue": null, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"lean\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../dropzone/src/components/Dropzone/IdleBody/index.tsx#IdleBody"] = { docgenInfo: IdleBody.__docgenInfo, name: "IdleBody", path: "../dropzone/src/components/Dropzone/IdleBody/index.tsx#IdleBody" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../dropzone/src/components/Dropzone/Disclaimer/utils.ts



const getDisclaimerMessage = _ref => {
  let {
    maxSize,
    accept,
    maxFiles
  } = _ref;
  const messageParts = [];
  const acceptExtensions = (0,lodash.flatten)(accept ? Object.values(accept) : []);
  const maxSizeStr = maxSize && (0,browser/* fileSizeFormat */.ti)({
    bytes: maxSize,
    options: {
      maximumFractionDigits: 0
    }
  });
  const hasExtensions = !(0,lodash.isEmpty)(acceptExtensions);
  const hasMaxSize = Boolean(maxSizeStr);
  const hasMaxFiles = Boolean(maxFiles);
  if (hasExtensions) {
    messageParts.push("".concat((0,translate/* translate */.T)('dropzone.idle_body.disclaimer.upload_formats'), "\n").concat(acceptExtensions.join(', ')));
  }
  if (hasMaxSize) {
    messageParts.push((0,translate/* translate */.T)('dropzone.idle_body.disclaimer.max_size', {
      params: {
        max_size: maxSizeStr
      }
    }));
  }
  if (hasMaxFiles) {
    messageParts.push((0,translate/* translate */.T)('dropzone.idle_body.disclaimer.max_files', {
      params: {
        max_files: maxFiles
      }
    }));
  }
  return messageParts.join('; ');
};
;// ../dropzone/src/components/Dropzone/Disclaimer/index.tsx



const Disclaimer = _ref => {
  let {
    showDisclaimer,
    maxSize,
    accept,
    maxFiles,
    theme
  } = _ref;
  let message = '';
  if (showDisclaimer) {
    message = getDisclaimerMessage({
      maxSize,
      maxFiles,
      accept
    });
  }
  if (!message) {
    return null;
  }
  return /*#__PURE__*/react.createElement(Typography/* default */.A, {
    color: theme === 'dark' ? 'grey_300' : 'bodySecondary',
    size: "b_sm",
    textAlign: "center",
    whiteSpace: "preWrap",
    dataTrackTag: "dropzone_disclaimer"
  }, message);
};
Disclaimer.displayName = 'Disclaimer';
/* harmony default export */ const Dropzone_Disclaimer = (Disclaimer);
try {
    // @ts-ignore
    Disclaimer.displayName = "Disclaimer";
    // @ts-ignore
    Disclaimer.__docgenInfo = { "description": "", "displayName": "Disclaimer", "props": { "theme": { "defaultValue": null, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } }, "showDisclaimer": { "defaultValue": null, "description": "", "name": "showDisclaimer", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "maxFiles": { "defaultValue": null, "description": "", "name": "maxFiles", "required": false, "type": { "name": "number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../dropzone/src/components/Dropzone/Disclaimer/index.tsx#Disclaimer"] = { docgenInfo: Disclaimer.__docgenInfo, name: "Disclaimer", path: "../dropzone/src/components/Dropzone/Disclaimer/index.tsx#Disclaimer" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../dropzone/src/components/Dropzone/index.tsx
const Dropzone_excluded = ["showDisclaimer", "isLoading", "maxFiles", "isError", "onBlur", "onFocus", "name", "children", "minHeight", "disabled", "accept", "maxSize", "progressPercent", "multiple", "variant", "goExperimental", "theme", "dataTrackTag", "dataTrackValue"];
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function Dropzone_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Dropzone_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Dropzone_ownKeys(Object(t), !0).forEach(function (r) {
      Dropzone_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Dropzone_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Dropzone_defineProperty(e, r, t) {
  return (r = Dropzone_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Dropzone_toPropertyKey(t) {
  var i = Dropzone_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function Dropzone_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Dropzone_objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = Dropzone_objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function Dropzone_objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}










const Dropzone = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      showDisclaimer = true,
      isLoading,
      maxFiles,
      isError,
      onBlur,
      onFocus,
      name,
      children,
      minHeight,
      disabled,
      accept,
      maxSize,
      progressPercent,
      multiple,
      variant = 'default',
      goExperimental,
      theme = 'light',
      dataTrackTag = 'dropzone',
      dataTrackValue
    } = _ref,
    props = Dropzone_objectWithoutProperties(_ref, Dropzone_excluded);
  const isDark = goExperimental || theme === 'dark';
  const {
    getInputProps,
    getRootProps,
    isDragActive,
    inputRef,
    acceptedFiles
  } = (0,es/* useDropzone */.VB)(Dropzone_objectSpread(Dropzone_objectSpread({}, props), {}, {
    disabled,
    maxFiles,
    accept,
    maxSize,
    multiple
  }));
  const stateColor = isDragActive ? 'grey_1200' : 'border';
  const bodyByState = isLoading ? /*#__PURE__*/react.createElement(Dropzone_UploadingBody, {
    acceptedFiles: acceptedFiles,
    progressPercent: progressPercent,
    variant: variant,
    theme: theme
  }) : /*#__PURE__*/react.createElement(Dropzone_IdleBody, {
    multiple: multiple,
    disabled: disabled,
    variant: variant,
    theme: theme
  });
  (0,react.useImperativeHandle)(ref, () => inputRef.current);
  const getBackgroundColor = () => {
    if (isDark) {
      return isDragActive ? 'white_20' : 'white_10';
    }
    return isDragActive || disabled ? 'grey_100' : {
      default: 'white',
      hover: isLoading || disabled ? undefined : 'grey_100'
    };
  };
  const getBorderColor = () => {
    if (isDark) {
      return 'white_20';
    }
    return isError ? 'validationError' : {
      default: stateColor,
      hover: isLoading || disabled ? undefined : 'grey_1200'
    };
  };
  return /*#__PURE__*/react.createElement(Center/* default */.A, _extends({
    cursor: disabled ? 'notAllowed' : 'pointer',
    backgroundColor: getBackgroundColor(),
    minHeight: minHeight,
    borderStyle: "dashed",
    borderColor: getBorderColor(),
    outlineColor: {
      focusVisible: 'grey_1200'
    },
    outlineWidth: {
      focusVisible: 'md'
    },
    outlineStyle: {
      focusVisible: 'solid'
    },
    borderRadius: "lg",
    borderWidth: "sm",
    paddingTop: "4",
    paddingBottom: (showDisclaimer || isLoading) && variant === 'default' ? '4' : undefined,
    paddingX: "6",
    outlineOffset: {
      focusVisible: 'sm'
    }
  }, getRootProps({
    onBlur,
    onFocus
  }), {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }), /*#__PURE__*/react.createElement(Input/* default */.A, getInputProps({
    name
  })), /*#__PURE__*/ /*#__PURE__*/(0,react.isValidElement)(children) ? (0,render_children/* renderChildren */.s)(children, {
    isDragActive
  }) : /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Container/* default */.A, {
    paddingTop: "2",
    paddingBottom: "6"
  }, bodyByState), variant === 'default' && (isLoading ? /*#__PURE__*/react.createElement(Typography/* default */.A, {
    textAlign: "center",
    size: "b_sm",
    color: isDark ? 'grey_300' : 'bodySecondary'
  }, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "dropzone.uploading_body.upload_in_progress",
    params: {
      count: acceptedFiles.length
    }
  })) : /*#__PURE__*/react.createElement(Dropzone_Disclaimer, {
    showDisclaimer: showDisclaimer,
    maxSize: maxSize,
    accept: accept,
    maxFiles: maxFiles,
    theme: theme
  }))));
});
Dropzone.displayName = 'Dropzone';
/* harmony default export */ const components_Dropzone = (Dropzone);
try {
    // @ts-ignore
    Dropzone.displayName = "Dropzone";
    // @ts-ignore
    Dropzone.__docgenInfo = { "description": "", "displayName": "Dropzone", "props": { "isLoading": { "defaultValue": null, "description": "", "name": "isLoading", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isError": { "defaultValue": null, "description": "", "name": "isError", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "maxFiles": { "defaultValue": null, "description": "", "name": "maxFiles", "required": false, "type": { "name": "number" } }, "showDisclaimer": { "defaultValue": { value: "true" }, "description": "", "name": "showDisclaimer", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "progressPercent": { "defaultValue": null, "description": "", "name": "progressPercent", "required": false, "type": { "name": "number" } }, "variant": { "defaultValue": { value: "default" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"lean\"" }] } }, "goExperimental": { "defaultValue": null, "description": "@deprecated This is a temporary prop and should be deprecated soon, please use theme='dark' instead\n@ignore", "name": "goExperimental", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "theme": { "defaultValue": { value: "light" }, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } }, "dataTrackTag": { "defaultValue": { value: "dropzone" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../dropzone/src/components/Dropzone/index.tsx#Dropzone"] = { docgenInfo: Dropzone.__docgenInfo, name: "Dropzone", path: "../dropzone/src/components/Dropzone/index.tsx#Dropzone" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../dropzone/src/components/Dropzone/test_utils.ts
const mobileContext = {
  userAgent: 'Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; SCH-I535 Build/KOT49H) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
  locale: 'en-US',
  isTouch: true
};
;// ../dropzone/src/components/Dropzone/stories/index.stories.tsx
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










const MB5 = 1000000 * 5;
const defaultAccept = {
  'image/*': ['.jpg', '.jpeg', '.png'],
  'video/*': ['.avi', '.mp4']
};
const Primary = {
  tags: ['sidebar-ignore']
};
const FullSingleFile = args => {
  const [isLoading, setIsLoading] = (0,react.useState)(false);
  const [progress, setProgress] = (0,react.useState)(0);
  const [file, setFile] = (0,react.useState)();
  const [errors, setErrors] = (0,react.useState)();
  const onDropAccepted = acceptedFiles => {
    const onDropCompleted = () => {
      setIsLoading(false);
      setFile(acceptedFiles[0]);
      setProgress(0);
    };
    const onDropProgress = currentProgress => {
      setProgress(currentProgress);
    };
    setErrors([]);
    setIsLoading(true);
    mockFileUploader({
      onCompleted: onDropCompleted,
      onProgress: onDropProgress
    });
  };
  const onDropRejected = fileRejections => {
    setIsLoading(false);
    setErrors(fileRejections[0].errors);
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, file ? /*#__PURE__*/react.createElement(Attachments_Attachment, {
    showPreview: true,
    size: file.size,
    name: file.name,
    url: URL.createObjectURL(file),
    onRemove: () => setFile(undefined),
    height: "500px",
    width: "800px"
  }) : /*#__PURE__*/react.createElement(components_Dropzone, index_stories_extends({
    isError: Boolean(errors === null || errors === void 0 ? void 0 : errors.length)
  }, args, {
    onDropRejected: onDropRejected,
    onDropAccepted: onDropAccepted,
    isLoading: isLoading,
    progressPercent: progress
  })), !(0,lodash.isEmpty)(errors) && /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    color: "validationError"
  }, errors === null || errors === void 0 ? void 0 : errors.map(e => e.message).join('\n')));
};
const mockFileUploader = _ref => {
  let {
    onCompleted,
    onProgress
  } = _ref;
  let uploadProgress = 0;
  const intervalId = setInterval(() => {
    if (uploadProgress === 100) {
      clearInterval(intervalId);
      onCompleted();
    } else {
      uploadProgress += 10;
      onProgress(uploadProgress);
    }
  }, 100);
};
const fileExample = [new File(['hello'], 'hello.png', {
  type: 'image/png'
})];
const multipleFilesExample = [new File(['hello'], 'hello.png', {
  type: 'image/png'
}), new File(['hello2'], 'hello2.jpg', {
  type: 'image/jpg'
})];
const FullExampleSingleFile = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png']
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'A full usage example for a single file dropzone component. Everything outside the dashed area is on consumer responsibility (e.g show uploaded files / rejected files). The example shows the supported functionality.'
      },
      source: {
        code: "const [isLoading, setIsLoading] = useState(false);\nconst [progress, setProgress] = useState(0);\nconst [file, setFile] = useState<File>();\nconst [errors, setErrors] = useState<FileError[]>();\n\nconst onDropAccepted: DropzoneProps['onDropAccepted'] = (acceptedFiles) => {\n  const onDropCompleted = () => {\n    setIsLoading(false);\n    setFile(acceptedFiles[0]);\n    setProgress(0);\n  };\n\n  const onDropProgress = (currentProgress: number) => {\n    setProgress(currentProgress);\n  };\n\n  setErrors([]);\n  setIsLoading(true);\n  mockFileUploader({ onCompleted: onDropCompleted, onProgress: onDropProgress });\n};\n\nconst onDropRejected: DropzoneProps['onDropRejected'] = (fileRejections) => {\n  setIsLoading(false);\n  setErrors(fileRejections[0].errors);\n};\n\nreturn (\n  <>\n    {file ? (\n      <Attachment\n      showPreview\n        size={file.size}\n        name={file.name}\n        url={URL.createObjectURL(file)}\n        onRemove={() => setFile(undefined)}\n      />\n    ) : (\n      <Dropzone\n        isError={Boolean(errors?.length)}\n        {...args}\n        onDropRejected={onDropRejected}\n        onDropAccepted={onDropAccepted}\n        isLoading={isLoading}\n        progressPercent={progress}\n      />\n    )}\n    {!isEmpty(errors) && (\n      <Text size=\"b_sm\" color=\"validationError\" >\n        {errors?.map((e) => e.message).join('\n')}\n      </Text>\n    )}\n  </>\n);\n"
      }
    }
  },
  render: args => /*#__PURE__*/react.createElement(FullSingleFile, args),
  play: function () {
    var _ref2 = _asyncToGenerator(function (_ref3) {
      let {
        canvasElement
      } = _ref3;
      return function* () {
        yield (0,src/* takeScreenshot */.w)();
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const dropzone = canvas.getByRole('presentation');
        const input = dropzone.children[0];
        yield dist/* userEvent */.Q4.upload(input, fileExample);
        yield (0,dist/* waitFor */.fm)(() => {
          (0,dist/* expect */.E3)(dropzone).not.toBeInTheDocument();
        }, {
          timeout: 4000
        });
        yield (0,dist/* waitFor */.fm)(() => {
          (0,dist/* expect */.E3)(canvas.getByAltText(fileExample[0].name)).toBeInTheDocument();
        });
        yield (0,src/* takeScreenshot */.w)();
        yield dist/* fireEvent */.rC.mouseOver(canvas.getByAltText(fileExample[0].name));
        yield (0,src/* takeScreenshot */.w)();
        yield (0,dist/* waitFor */.fm)(() => {
          (0,dist/* expect */.E3)(canvas.getByLabelText('Remove')).toBeInTheDocument();
        });
        yield dist/* userEvent */.Q4.click(canvas.getByLabelText('Remove'));
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x) {
      return _ref2.apply(this, arguments);
    };
  }()
};
const FullExampleSingleFileLean = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png']
    },
    variant: 'lean'
  },
  parameters: {
    docs: {
      description: {
        story: 'A full usage example for a single file dropzone component. Everything outside the dashed area is on consumer responsibility (e.g show uploaded files / rejected files). The example shows the supported functionality.'
      },
      source: {
        code: "const [isLoading, setIsLoading] = useState(false);\nconst [progress, setProgress] = useState(0);\nconst [file, setFile] = useState<File>();\nconst [errors, setErrors] = useState<FileError[]>();\n\nconst onDropAccepted: DropzoneProps['onDropAccepted'] = (acceptedFiles) => {\n  const onDropCompleted = () => {\n    setIsLoading(false);\n    setFile(acceptedFiles[0]);\n    setProgress(0);\n  };\n\n  const onDropProgress = (currentProgress: number) => {\n    setProgress(currentProgress);\n  };\n\n  setErrors([]);\n  setIsLoading(true);\n  mockFileUploader({ onCompleted: onDropCompleted, onProgress: onDropProgress });\n};\n\nconst onDropRejected: DropzoneProps['onDropRejected'] = (fileRejections) => {\n  setIsLoading(false);\n  setErrors(fileRejections[0].errors);\n};\n\nreturn (\n  <>\n    {file ? (\n      <AspectRatio ratio=\"16/9\" position=\"relative\" maxWidth=\"800px\" marginX=\"auto\">\n        <Image alt={file.name} src={URL.createObjectURL(file)} />\n        <Container position=\"absolute\" top=\"24px\" right=\"24px\">\n          <IconButton\n            variant=\"ghost\"\n            colorScheme=\"white\"\n            aria-label=\"Remove Image\"\n            onClick={() => setFile(undefined)}\n          >\n            <TrashBinSolidIcon />\n          </IconButton>\n        </Container>\n      </AspectRatio>\n    ) : (\n      <Dropzone\n        {...args}\n        onDropRejected={onDropRejected}\n        onDropAccepted={onDropAccepted}\n        isLoading={isLoading}\n        progressPercent={progress}\n      />\n    )}\n    {!isEmpty(errors) && (\n      <Text size=\"b_sm\" color=\"validationError\">\n        {errors?.map((e) => e.message).join('\\n')}\n      </Text>\n    )}\n  </>\n);"
      }
    }
  },
  render: args => /*#__PURE__*/react.createElement(FullSingleFile, args),
  play: function () {
    var _ref4 = _asyncToGenerator(function (_ref5) {
      let {
        canvasElement
      } = _ref5;
      return function* () {
        yield (0,src/* takeScreenshot */.w)();
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const dropzone = canvas.getByRole('presentation');
        const input = dropzone.children[0];
        yield dist/* userEvent */.Q4.upload(input, fileExample);
        yield (0,dist/* waitFor */.fm)(() => {
          (0,dist/* expect */.E3)(dropzone).not.toBeInTheDocument();
        }, {
          timeout: 3000
        });
        yield (0,dist/* waitFor */.fm)(() => {
          (0,dist/* expect */.E3)(canvas.getByAltText(fileExample[0].name)).toBeInTheDocument();
        });
        yield (0,src/* takeScreenshot */.w)();
        yield dist/* fireEvent */.rC.mouseOver(canvas.getByAltText(fileExample[0].name));
        yield (0,src/* takeScreenshot */.w)(400);
        yield (0,dist/* waitFor */.fm)(() => {
          (0,dist/* expect */.E3)(canvas.getByLabelText('Remove')).toBeInTheDocument();
        });
        yield dist/* userEvent */.Q4.click(canvas.getByLabelText('Remove'));
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x2) {
      return _ref4.apply(this, arguments);
    };
  }()
};
const FullExampleMultipleFiles = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    multiple: true,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png']
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'A full usage example for a multiple files dropzone component. Everything outside the dashed area is on consumer responsibility (e.g show uploaded files / rejected files). The example shows the supported functionality.'
      },
      source: {
        code: "const [isLoading, setIsLoading] = useState(false);\nconst [progress, setProgress] = useState(0);\nconst [files, setFiles] = useState<File[]>([]);\nconst [fileRejections, setFileRejections] = useState<FileRejection[]>([]);\nconst maxFiles = 10 - files.length;\n\nconst onDropAccepted: DropzoneProps['onDropAccepted'] = (acceptedFiles) => {\n  const onDropCompleted = () => {\n    setIsLoading(false);\n    setProgress(0);\n    setFiles([...files, ...acceptedFiles]);\n  };\n\n  const onDropProgress = (currentProgress: number) => {\n    setProgress(currentProgress);\n  };\n\n  setIsLoading(true);\n  mockFileUploader({ onCompleted: onDropCompleted, onProgress: onDropProgress });\n};\n\nconst onDropRejected: DropzoneProps['onDropRejected'] = (newFileRejections) => {\n  setIsLoading(false);\n  setFileRejections([...fileRejections, ...newFileRejections]);\n};\n\nreturn (\n  <>\n    <Dropzone\n      {...args}\n      maxFiles={maxFiles}\n      onDropRejected={onDropRejected}\n      onDropAccepted={onDropAccepted}\n      isLoading={isLoading}\n      progressPercent={progress}\n    />\n    {(!isEmpty(fileRejections) || !isEmpty(files)) && (\n      <Attachments>\n        {files.map((file, index) => (\n          <Attachment\n            size={file.size}\n            key={file.name}\n            name={file.name}\n            url={URL.createObjectURL(file)}\n            onRemove={() => {\n              const updatedFiles = [...files];\n              updatedFiles.splice(index, 1);\n              setFiles(updatedFiles);\n            }}\n          ></Attachment>\n        ))}\n        {fileRejections.map(({ file, errors }, index) => (\n          <Attachment\n            hasError\n            error={errors?.map((e) => e.message).join('\n')}\n            key={file.name}\n            name={file.name}\n            onRemove={() => {\n              const updatedFileRejections = [...fileRejections];\n              updatedFileRejections.splice(index, 1);\n              setFileRejections(updatedFileRejections);\n            }}\n          ></Attachment>\n        ))}\n      </Attachments>\n    )}\n  </>\n);"
      }
    }
  },
  render: args => {
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    const [progress, setProgress] = (0,react.useState)(0);
    const [files, setFiles] = (0,react.useState)([]);
    const [fileRejections, setFileRejections] = (0,react.useState)([]);
    const maxFiles = 10 - files.length;
    const onDropAccepted = acceptedFiles => {
      const onDropCompleted = () => {
        setIsLoading(false);
        setProgress(0);
        setFiles([...files, ...acceptedFiles]);
      };
      const onDropProgress = currentProgress => {
        setProgress(currentProgress);
      };
      setIsLoading(true);
      mockFileUploader({
        onCompleted: onDropCompleted,
        onProgress: onDropProgress
      });
    };
    const onDropRejected = newFileRejections => {
      setIsLoading(false);
      setFileRejections([...fileRejections, ...newFileRejections]);
    };
    return /*#__PURE__*/react.createElement(Stack/* default */.A, {
      gap: "4",
      direction: "column"
    }, /*#__PURE__*/react.createElement(components_Dropzone, index_stories_extends({}, args, {
      maxFiles: maxFiles,
      onDropRejected: onDropRejected,
      onDropAccepted: onDropAccepted,
      isLoading: isLoading,
      progressPercent: progress
    })), (!(0,lodash.isEmpty)(fileRejections) || !(0,lodash.isEmpty)(files)) && /*#__PURE__*/react.createElement(components_Attachments, null, files.map((file, index) => /*#__PURE__*/react.createElement(Attachments_Attachment, {
      fileSize: file.size,
      key: file.name,
      name: file.name,
      url: URL.createObjectURL(file),
      onRemove: () => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
      }
    })), fileRejections.map((_ref6, index) => {
      let {
        file,
        errors
      } = _ref6;
      return /*#__PURE__*/react.createElement(Attachments_Attachment, {
        hasError: true,
        error: errors === null || errors === void 0 ? void 0 : errors.map(e => e.message).join('\n'),
        key: file.name,
        name: file.name,
        onRemove: () => {
          const updatedFileRejections = [...fileRejections];
          updatedFileRejections.splice(index, 1);
          setFileRejections(updatedFileRejections);
        }
      });
    })));
  },
  play: function () {
    var _ref7 = _asyncToGenerator(function (_ref8) {
      let {
        canvasElement
      } = _ref8;
      return function* () {
        yield (0,src/* takeScreenshot */.w)();
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const dropzone = canvas.getByRole('presentation');
        const input = dropzone.children[0];
        yield dist/* userEvent */.Q4.upload(input, multipleFilesExample);
        yield (0,dist/* waitFor */.fm)(() => {
          (0,dist/* expect */.E3)(canvas.getByText('Drag and drop files or')).toBeInTheDocument();
        }, {
          timeout: 3000
        });
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x3) {
      return _ref7.apply(this, arguments);
    };
  }()
};
const Dark = {
  tags: ['sidebar-ignore'],
  args: {
    theme: 'dark'
  }
};
const DarkLean = {
  tags: ['sidebar-ignore'],
  args: {
    theme: 'dark',
    variant: 'lean'
  }
};
const NoDisclaimer = {
  tags: ['sidebar-ignore'],
  args: {
    showDisclaimer: false
  }
};
const TouchDevice = {
  tags: ['sidebar-ignore'],
  decorators: [Story => {
    (0,utils/* setFiverrContext */.G)(mobileContext);
    return /*#__PURE__*/react.createElement(Story, null);
  }]
};
TouchDevice.parameters = {
  docs: {
    story: {
      inline: false
    }
  }
};
const meta = {
  title: 'Dropzone/Dropzone',
  args: {
    maxSize: MB5,
    accept: defaultAccept
  },
  component: components_Dropzone,
  render: args => /*#__PURE__*/react.createElement(Container/* default */.A, {
    backgroundColor: args.theme === 'dark' ? 'black' : undefined,
    padding: args.theme === 'dark' ? '2' : undefined
  }, /*#__PURE__*/react.createElement(components_Dropzone, args))
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
FullExampleSingleFile.parameters = {
  ...FullExampleSingleFile.parameters,
  docs: {
    ...FullExampleSingleFile.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    accept: {\n      'image/*': ['.jpg', '.jpeg', '.png']\n    }\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'A full usage example for a single file dropzone component. Everything outside the dashed area is on consumer responsibility (e.g show uploaded files / rejected files). The example shows the supported functionality.'\n      },\n      source: {\n        code: `const [isLoading, setIsLoading] = useState(false);\nconst [progress, setProgress] = useState(0);\nconst [file, setFile] = useState<File>();\nconst [errors, setErrors] = useState<FileError[]>();\n\nconst onDropAccepted: DropzoneProps['onDropAccepted'] = (acceptedFiles) => {\n  const onDropCompleted = () => {\n    setIsLoading(false);\n    setFile(acceptedFiles[0]);\n    setProgress(0);\n  };\n\n  const onDropProgress = (currentProgress: number) => {\n    setProgress(currentProgress);\n  };\n\n  setErrors([]);\n  setIsLoading(true);\n  mockFileUploader({ onCompleted: onDropCompleted, onProgress: onDropProgress });\n};\n\nconst onDropRejected: DropzoneProps['onDropRejected'] = (fileRejections) => {\n  setIsLoading(false);\n  setErrors(fileRejections[0].errors);\n};\n\nreturn (\n  <>\n    {file ? (\n      <Attachment\n      showPreview\n        size={file.size}\n        name={file.name}\n        url={URL.createObjectURL(file)}\n        onRemove={() => setFile(undefined)}\n      />\n    ) : (\n      <Dropzone\n        isError={Boolean(errors?.length)}\n        {...args}\n        onDropRejected={onDropRejected}\n        onDropAccepted={onDropAccepted}\n        isLoading={isLoading}\n        progressPercent={progress}\n      />\n    )}\n    {!isEmpty(errors) && (\n      <Text size=\"b_sm\" color=\"validationError\" >\n        {errors?.map((e) => e.message).join('\\n')}\n      </Text>\n    )}\n  </>\n);\n`\n      }\n    }\n  },\n  render: args => <FullSingleFile {...args} />,\n  play: async ({\n    canvasElement\n  }) => {\n    await takeScreenshot();\n    const canvas = within(canvasElement);\n    const dropzone = canvas.getByRole('presentation');\n    const input = dropzone.children[0] as HTMLElement;\n    await userEvent.upload(input, fileExample);\n    await waitFor(() => {\n      expect(dropzone).not.toBeInTheDocument();\n    }, {\n      timeout: 4000\n    });\n    await waitFor(() => {\n      expect(canvas.getByAltText(fileExample[0].name)).toBeInTheDocument();\n    });\n    await takeScreenshot();\n    await fireEvent.mouseOver(canvas.getByAltText(fileExample[0].name));\n    await takeScreenshot();\n    await waitFor(() => {\n      expect(canvas.getByLabelText('Remove')).toBeInTheDocument();\n    });\n    await userEvent.click(canvas.getByLabelText('Remove'));\n    await takeScreenshot();\n  }\n}",
      ...FullExampleSingleFile.parameters?.docs?.source
    }
  }
};
FullExampleSingleFileLean.parameters = {
  ...FullExampleSingleFileLean.parameters,
  docs: {
    ...FullExampleSingleFileLean.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    accept: {\n      'image/*': ['.jpg', '.jpeg', '.png']\n    },\n    variant: 'lean'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'A full usage example for a single file dropzone component. Everything outside the dashed area is on consumer responsibility (e.g show uploaded files / rejected files). The example shows the supported functionality.'\n      },\n      source: {\n        code: `const [isLoading, setIsLoading] = useState(false);\nconst [progress, setProgress] = useState(0);\nconst [file, setFile] = useState<File>();\nconst [errors, setErrors] = useState<FileError[]>();\n\nconst onDropAccepted: DropzoneProps['onDropAccepted'] = (acceptedFiles) => {\n  const onDropCompleted = () => {\n    setIsLoading(false);\n    setFile(acceptedFiles[0]);\n    setProgress(0);\n  };\n\n  const onDropProgress = (currentProgress: number) => {\n    setProgress(currentProgress);\n  };\n\n  setErrors([]);\n  setIsLoading(true);\n  mockFileUploader({ onCompleted: onDropCompleted, onProgress: onDropProgress });\n};\n\nconst onDropRejected: DropzoneProps['onDropRejected'] = (fileRejections) => {\n  setIsLoading(false);\n  setErrors(fileRejections[0].errors);\n};\n\nreturn (\n  <>\n    {file ? (\n      <AspectRatio ratio=\"16/9\" position=\"relative\" maxWidth=\"800px\" marginX=\"auto\">\n        <Image alt={file.name} src={URL.createObjectURL(file)} />\n        <Container position=\"absolute\" top=\"24px\" right=\"24px\">\n          <IconButton\n            variant=\"ghost\"\n            colorScheme=\"white\"\n            aria-label=\"Remove Image\"\n            onClick={() => setFile(undefined)}\n          >\n            <TrashBinSolidIcon />\n          </IconButton>\n        </Container>\n      </AspectRatio>\n    ) : (\n      <Dropzone\n        {...args}\n        onDropRejected={onDropRejected}\n        onDropAccepted={onDropAccepted}\n        isLoading={isLoading}\n        progressPercent={progress}\n      />\n    )}\n    {!isEmpty(errors) && (\n      <Text size=\"b_sm\" color=\"validationError\">\n        {errors?.map((e) => e.message).join('\\\\n')}\n      </Text>\n    )}\n  </>\n);`\n      }\n    }\n  },\n  render: args => <FullSingleFile {...args} />,\n  play: async ({\n    canvasElement\n  }) => {\n    await takeScreenshot();\n    const canvas = within(canvasElement);\n    const dropzone = canvas.getByRole('presentation');\n    const input = dropzone.children[0] as HTMLElement;\n    await userEvent.upload(input, fileExample);\n    await waitFor(() => {\n      expect(dropzone).not.toBeInTheDocument();\n    }, {\n      timeout: 3000\n    });\n    await waitFor(() => {\n      expect(canvas.getByAltText(fileExample[0].name)).toBeInTheDocument();\n    });\n    await takeScreenshot();\n    await fireEvent.mouseOver(canvas.getByAltText(fileExample[0].name));\n    await takeScreenshot(400);\n    await waitFor(() => {\n      expect(canvas.getByLabelText('Remove')).toBeInTheDocument();\n    });\n    await userEvent.click(canvas.getByLabelText('Remove'));\n    await takeScreenshot();\n  }\n}",
      ...FullExampleSingleFileLean.parameters?.docs?.source
    }
  }
};
FullExampleMultipleFiles.parameters = {
  ...FullExampleMultipleFiles.parameters,
  docs: {
    ...FullExampleMultipleFiles.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    multiple: true,\n    accept: {\n      'image/*': ['.jpg', '.jpeg', '.png']\n    }\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'A full usage example for a multiple files dropzone component. Everything outside the dashed area is on consumer responsibility (e.g show uploaded files / rejected files). The example shows the supported functionality.'\n      },\n      source: {\n        code: `const [isLoading, setIsLoading] = useState(false);\nconst [progress, setProgress] = useState(0);\nconst [files, setFiles] = useState<File[]>([]);\nconst [fileRejections, setFileRejections] = useState<FileRejection[]>([]);\nconst maxFiles = 10 - files.length;\n\nconst onDropAccepted: DropzoneProps['onDropAccepted'] = (acceptedFiles) => {\n  const onDropCompleted = () => {\n    setIsLoading(false);\n    setProgress(0);\n    setFiles([...files, ...acceptedFiles]);\n  };\n\n  const onDropProgress = (currentProgress: number) => {\n    setProgress(currentProgress);\n  };\n\n  setIsLoading(true);\n  mockFileUploader({ onCompleted: onDropCompleted, onProgress: onDropProgress });\n};\n\nconst onDropRejected: DropzoneProps['onDropRejected'] = (newFileRejections) => {\n  setIsLoading(false);\n  setFileRejections([...fileRejections, ...newFileRejections]);\n};\n\nreturn (\n  <>\n    <Dropzone\n      {...args}\n      maxFiles={maxFiles}\n      onDropRejected={onDropRejected}\n      onDropAccepted={onDropAccepted}\n      isLoading={isLoading}\n      progressPercent={progress}\n    />\n    {(!isEmpty(fileRejections) || !isEmpty(files)) && (\n      <Attachments>\n        {files.map((file, index) => (\n          <Attachment\n            size={file.size}\n            key={file.name}\n            name={file.name}\n            url={URL.createObjectURL(file)}\n            onRemove={() => {\n              const updatedFiles = [...files];\n              updatedFiles.splice(index, 1);\n              setFiles(updatedFiles);\n            }}\n          ></Attachment>\n        ))}\n        {fileRejections.map(({ file, errors }, index) => (\n          <Attachment\n            hasError\n            error={errors?.map((e) => e.message).join('\\n')}\n            key={file.name}\n            name={file.name}\n            onRemove={() => {\n              const updatedFileRejections = [...fileRejections];\n              updatedFileRejections.splice(index, 1);\n              setFileRejections(updatedFileRejections);\n            }}\n          ></Attachment>\n        ))}\n      </Attachments>\n    )}\n  </>\n);`\n      }\n    }\n  },\n  render: args => {\n    const [isLoading, setIsLoading] = useState(false);\n    const [progress, setProgress] = useState(0);\n    const [files, setFiles] = useState<File[]>([]);\n    const [fileRejections, setFileRejections] = useState<FileRejection[]>([]);\n    const maxFiles = 10 - files.length;\n    const onDropAccepted: DropzoneProps['onDropAccepted'] = acceptedFiles => {\n      const onDropCompleted = () => {\n        setIsLoading(false);\n        setProgress(0);\n        setFiles([...files, ...acceptedFiles]);\n      };\n      const onDropProgress = (currentProgress: number) => {\n        setProgress(currentProgress);\n      };\n      setIsLoading(true);\n      mockFileUploader({\n        onCompleted: onDropCompleted,\n        onProgress: onDropProgress\n      });\n    };\n    const onDropRejected: DropzoneProps['onDropRejected'] = newFileRejections => {\n      setIsLoading(false);\n      setFileRejections([...fileRejections, ...newFileRejections]);\n    };\n    return <Stack gap=\"4\" direction=\"column\">\n        <Dropzone {...args} maxFiles={maxFiles} onDropRejected={onDropRejected} onDropAccepted={onDropAccepted} isLoading={isLoading} progressPercent={progress} />\n        {(!isEmpty(fileRejections) || !isEmpty(files)) && <Attachments>\n            {files.map((file, index) => <Attachment fileSize={file.size} key={file.name} name={file.name} url={URL.createObjectURL(file)} onRemove={() => {\n          const updatedFiles = [...files];\n          updatedFiles.splice(index, 1);\n          setFiles(updatedFiles);\n        }}></Attachment>)}\n            {fileRejections.map(({\n          file,\n          errors\n        }, index) => <Attachment hasError error={errors?.map(e => e.message).join('\\n')} key={file.name} name={file.name} onRemove={() => {\n          const updatedFileRejections = [...fileRejections];\n          updatedFileRejections.splice(index, 1);\n          setFileRejections(updatedFileRejections);\n        }}></Attachment>)}\n          </Attachments>}\n      </Stack>;\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    await takeScreenshot();\n    const canvas = within(canvasElement);\n    const dropzone = canvas.getByRole('presentation');\n    const input = dropzone.children[0] as HTMLElement;\n    await userEvent.upload(input, multipleFilesExample);\n    await waitFor(() => {\n      expect(canvas.getByText('Drag and drop files or')).toBeInTheDocument();\n    }, {\n      timeout: 3000\n    });\n    await takeScreenshot();\n  }\n}",
      ...FullExampleMultipleFiles.parameters?.docs?.source
    }
  }
};
Dark.parameters = {
  ...Dark.parameters,
  docs: {
    ...Dark.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    theme: 'dark'\n  }\n}",
      ...Dark.parameters?.docs?.source
    }
  }
};
DarkLean.parameters = {
  ...DarkLean.parameters,
  docs: {
    ...DarkLean.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    theme: 'dark',\n    variant: 'lean'\n  }\n}",
      ...DarkLean.parameters?.docs?.source
    }
  }
};
NoDisclaimer.parameters = {
  ...NoDisclaimer.parameters,
  docs: {
    ...NoDisclaimer.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    showDisclaimer: false\n  }\n}",
      ...NoDisclaimer.parameters?.docs?.source
    }
  }
};
TouchDevice.parameters = {
  ...TouchDevice.parameters,
  docs: {
    ...TouchDevice.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  decorators: [Story => {\n    setFiverrContext(mobileContext);\n    return <Story />;\n  }]\n}",
      ...TouchDevice.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","FullExampleSingleFile","FullExampleSingleFileLean","FullExampleMultipleFiles","Dark","DarkLean","NoDisclaimer","TouchDevice"];

/***/ }),

/***/ "../feedback/dist/esm/src/components/Loader/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Loader)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Spinner.js
var Spinner = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Spinner.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/l1/Spinner.js
var l1_Spinner = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/l1/Spinner.js");
;// ../feedback/dist/esm/src/components/Loader/constants.js
const SYSTEM_SIZE_MAP = {
  sm: 'sm',
  md: 'md'
};
const L1_SIZE_MAP = {
  lg: 'sm',
  xl: 'md'
};
;// ../feedback/dist/esm/src/components/Loader/index.js
const _excluded = ["size", "color", "dataTestId", "dataTrackTag"];
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




const Loader = _ref => {
  let {
      size = 'md',
      color = 'grey_1000',
      dataTestId,
      dataTrackTag = 'loader'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const {
    SpinnerComponent,
    iconSize
  } = Object.keys(SYSTEM_SIZE_MAP).includes(size) ? {
    SpinnerComponent: Spinner/* default */.A,
    iconSize: SYSTEM_SIZE_MAP[size]
  } : {
    SpinnerComponent: l1_Spinner/* default */.A,
    iconSize: L1_SIZE_MAP[size]
  };
  return /*#__PURE__*/react.createElement(Container/* default */.A, _objectSpread(_objectSpread({
    "data-testid": dataTestId,
    display: "flex"
  }, restProps), {}, {
    dataTrackTag: dataTrackTag
  }), /*#__PURE__*/react.createElement(SpinnerComponent, {
    size: iconSize,
    color: color
  }));
};
Loader.displayName = 'Loader';
/* harmony default export */ const components_Loader = (Loader);
;
Loader.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Loader"
};

/***/ }),

/***/ "../feedback/dist/esm/src/components/ProgressLine/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_ProgressLine)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/theme.ve.css.js
var theme_ve_css = __webpack_require__("../theme/dist/esm/src/theme.ve.css.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
// EXTERNAL MODULE: ../tooltip/dist/esm/src/components/Tooltip/index.js
var Tooltip = __webpack_require__("../tooltip/dist/esm/src/components/Tooltip/index.js");
;// ../feedback/dist/esm/src/components/ProgressLine/constants.js
/**
 * The bottom limit of percentage.
 */const MIN_PERCENT = 0;
/**
 * The upper limit of percentage.
 */
const MAX_PERCENT = 100;
const LINE_HEIGHT = 8;
;// ../feedback/dist/esm/src/components/ProgressLine/helpers.js

/**
 * Gets a "safe" percent for progressbars.
 */
const getProgressPercent = percent => {
  if (isNaN(percent) || percent <= MIN_PERCENT) {
    return MIN_PERCENT;
  }
  if (percent >= MAX_PERCENT) {
    return MAX_PERCENT;
  }
  return percent;
};
const getProgressColors = _ref => {
  let {
    progressColor,
    trackColor
  } = _ref;
  const progressBackgroundColor = progressColor === 'paused' ? 'grey_800' : 'grey_1200';
  const trackBackgroundColor = trackColor === 'white' ? 'white' : 'grey_300';
  return {
    progressBackgroundColor,
    trackBackgroundColor
  };
};
;// ../feedback/dist/esm/src/components/ProgressLine/index.js
const _excluded = ["percent", "threshold", "startLabel", "endLabel", "progressTooltip", "appendTooltipToBody", "progressColor", "trackColor", "borderRadius", "dataTrackTag"];
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







const ProgressLine = _ref => {
  let {
      percent = 0,
      threshold,
      startLabel,
      endLabel,
      progressTooltip,
      appendTooltipToBody = false,
      progressColor = 'default',
      trackColor = 'default',
      borderRadius = 'circle',
      dataTrackTag = 'progress_line'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const progressWidth = getProgressPercent(percent);
  const {
    progressBackgroundColor,
    trackBackgroundColor
  } = getProgressColors({
    progressColor,
    trackColor
  });
  return /*#__PURE__*/react.createElement(Stack/* default */.A, _objectSpread(_objectSpread({
    alignItems: "center",
    role: "progressbar",
    "aria-valuenow": percent,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, restProps), {}, {
    dataTrackTag: dataTrackTag
  }), startLabel && /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold",
    color: "bodySecondary"
  }, startLabel), /*#__PURE__*/react.createElement(Box/* default */.A, {
    height: LINE_HEIGHT,
    flex: "1",
    position: "relative",
    backgroundColor: trackBackgroundColor,
    borderRadius: borderRadius
  }, threshold && /*#__PURE__*/react.createElement(Box/* default */.A, {
    height: LINE_HEIGHT,
    position: "absolute",
    left: "".concat(threshold, "%"),
    width: 2,
    backgroundColor: "grey_1000"
  }), /*#__PURE__*/react.createElement(Box/* default */.A, _objectSpread({
    height: LINE_HEIGHT,
    width: "".concat(progressWidth, "%"),
    backgroundColor: progressBackgroundColor,
    transition: "".concat(theme_ve_css/* tokens */.L.animationDuration.moderate1, " ").concat(theme_ve_css/* tokens */.L.animationTiming.linear, " width")
  }, progressWidth === MAX_PERCENT ? {
    borderRadius
  } : {
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius
  })), progressTooltip && /*#__PURE__*/react.createElement(Box/* default */.A, {
    position: "absolute",
    left: "".concat(progressWidth, "%"),
    top: 0
  }, /*#__PURE__*/react.createElement(Tooltip/* default */.A, {
    isOpen: true,
    content: progressTooltip,
    appendToBody: appendTooltipToBody
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "span",
    height: LINE_HEIGHT,
    width: 0.1
  })))), endLabel && /*#__PURE__*/react.createElement(Text/* default */.A, {
    size: "b_sm",
    fontWeight: "bold",
    color: "bodySecondary"
  }, endLabel));
};
ProgressLine.displayName = 'ProgressLine';
/* harmony default export */ const components_ProgressLine = (ProgressLine);
;
ProgressLine.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ProgressLine"
};

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

/***/ "../hooks/dist/esm/src/hooks/useLockBodyScroll/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js");

const HIDDEN = 'hidden';
/**
 * Allows to lock document body overflow
 * @returns `void`
 */
const useLockBodyScroll = function () {
  let enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  (0,_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(() => {
    // Get original body overflow
    const originalOverflowStyle = window.getComputedStyle(document.body).overflow;
    if (enabled && originalOverflowStyle !== HIDDEN) {
      // Prevent scrolling on mount
      document.body.style.overflow = HIDDEN;
      // Re-enable scrolling when component unmounts
      return () => {
        document.body.style.overflow = originalOverflowStyle;
      };
    }
    return () => undefined;
  }, [enabled]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLockBodyScroll);

/***/ }),

/***/ "../inputs/dist/esm/src/components/Input/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";

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

/***/ "../overlay/dist/esm/src/components/Overlay/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Overlay)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useLockBodyScroll/index.js
var useLockBodyScroll = __webpack_require__("../hooks/dist/esm/src/hooks/useLockBodyScroll/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/utils/hex2rgb/index.js
var hex2rgb = __webpack_require__("../theme/dist/esm/src/utils/hex2rgb/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../overlay/dist/esm/src/components/Overlay/constants.js

const OPACITY_VALUES = {
  high: '0.8',
  low: '0.55'
};
const COLORS = {
  white: themeVars/* colors */.Tj.white,
  grey: themeVars/* colors */.Tj.grey_1200
};
;// ../overlay/dist/esm/src/components/Overlay/index.js
const _excluded = ["children", "opacity", "lockBodyScroll", "background", "position", "zIndex", "className", "onClick", "dataTestId", "style", "dataTrackTag"];
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





const Overlay = _ref => {
  let {
      children,
      opacity = 'low',
      lockBodyScroll = true,
      background = 'grey',
      position = 'fixed',
      zIndex = 'overlay',
      className,
      onClick,
      dataTestId,
      style,
      dataTrackTag = 'overlay'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  (0,useLockBodyScroll/* default */.A)(lockBodyScroll);
  const backgroundColor = "rgba(".concat((0,hex2rgb/* hex2rgb */.x)(COLORS[background]), ", ").concat(OPACITY_VALUES[opacity], ")");
  return /*#__PURE__*/react.createElement(Container/* default */.A, _objectSpread(_objectSpread({
    width: "100%",
    height: "100%",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    className: className,
    style: style,
    zIndex: zIndex,
    background: backgroundColor,
    position: position,
    onClick: onClick,
    "data-testid": dataTestId
  }, rest), {}, {
    dataTrackTag: dataTrackTag
  }), children);
};
Overlay.displayName = 'Overlay';
/* harmony default export */ const components_Overlay = (Overlay);
;
Overlay.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Overlay"
};

/***/ }),

/***/ "../popover/dist/esm/src/components/Popover/PopoverAnchor/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../popover/dist/esm/src/components/Popover/PopoverChevron/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../popover/dist/esm/src/components/Popover/PopoverContent/index.js":
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

/***/ "../popover/dist/esm/src/components/Popover/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../storybook_helpers/dist/esm/src/utils/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ setFiverrContext),
/* harmony export */   f: () => (/* binding */ ExcludedProps)
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
const ExcludedProps = ['hidden', 'className', 'style', 'display', 'position', 'as', 'margin', 'marginX', 'marginY', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop', 'padding', 'paddingX', 'paddingY', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop', 'visibility', 'cursor', 'overflow', 'overflowX', 'overflowY', 'userSelect', 'maxWidth', 'maxHeight', 'minWidth', 'minHeight', 'width', 'height', 'textAlign', 'outlineWidth', 'outlineOffset', 'outlineColor', 'outlineStyle', 'top', 'bottom', 'right', 'left', 'transform', 'centered', 'background', 'backgroundColor', 'gap', 'borderRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius', 'boxShadow', 'borderStyle', 'borderColor', 'borderWidth', 'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth', 'href', 'target', 'wrap', 'justifyContent', 'justifySelf', 'alignSelf', 'alignItems', 'direction', 'flex', 'flexShrink', 'flexGrow', 'flexBasis', 'size', 'color', 'decoration', 'textOverflow', 'whiteSpace', 'fontStyle', 'fontWeight', 'fontFamily', 'fontSize', 'lineHeight', 'letterSpacing', 'gridTemplateAreas', 'ratio', 'boxSizing', 'listStyleType', 'templateRows', 'templateColumns', 'autoColumns', 'autoRows', 'columnGap', 'rowGap', 'templateAreas', 'rowStart', 'columnStart', 'rowEnd', 'columnEnd', 'gridArea', 'fill', 'order', 'htmlHidden', 'pointerEvents', 'zIndex', 'transition', 'opacity', 'overflowWrap', 'wordBreak'];
const setFiverrContext = function () {
  let context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  window.initialData = window.initialData || {};
  window.initialData.FiverrContext = _objectSpread(_objectSpread({}, window.initialData.FiverrContext), context);
};

/***/ }),

/***/ "../theme/dist/esm/src/utils/hex2rgb/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ hex2rgb)
/* harmony export */ });
const hex2rgb = hex => {
  let hexValue = hex;
  // In case hex is shortened - #fff or #000
  if (hexValue.length === 4) {
    const repeatedValue = hexValue.slice(1, 4);
    hexValue = "#".concat(repeatedValue).concat(repeatedValue);
  }
  const r = parseInt(hexValue.slice(1, 3), 16);
  const g = parseInt(hexValue.slice(3, 5), 16);
  const b = parseInt(hexValue.slice(5, 7), 16);
  return "".concat(r, ", ").concat(g, ", ").concat(b);
};

/***/ }),

/***/ "../tooltip/dist/esm/src/components/Tooltip/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../ui_utils/dist/esm/src/utils/findChildByType/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ findChildByType)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../ui_utils/dist/esm/src/utils/utils/index.js");


const findChildByType = (children, id) => react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).find(child => (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .childrenIdMatch */ .i)(child, id));

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/l1/Audio.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");



const AudioL1Icon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor'
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .L1_ICON_SIZES */ .vy[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .L1_ICON_SIZES */ .vy[size],
    fill: "none",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getStrokeColor */ ._)(color),
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M9 3v18M6 7v10m6-11v12m3-9v6m3-8v10m3-6v2M3 11v2",
    vectorEffect: "non-scaling-stroke"
  }));
};
AudioL1Icon.displayName = 'AudioL1Icon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AudioL1Icon);
;
AudioL1Icon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AudioL1Icon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/l1/File.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");



const FileL1Icon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor'
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .L1_ICON_SIZES */ .vy[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .L1_ICON_SIZES */ .vy[size],
    fill: "none",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getStrokeColor */ ._)(color),
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M17.857 22H7.143C5.959 22 5 21 5 19.765V5.235C5 4.001 5.96 3 7.143 3h7.5L20 8.588v11.177C20 20.999 19.04 22 17.857 22",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getStrokeColor */ ._)(color),
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M14.5 4v3.889c0 .614.497 1.111 1.111 1.111H19.5M8 13h5.571M8 17h9",
    vectorEffect: "non-scaling-stroke"
  }));
};
FileL1Icon.displayName = 'FileL1Icon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileL1Icon);
;
FileL1Icon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "FileL1Icon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/l1/Image.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");



const ImageL1Icon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor'
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .L1_ICON_SIZES */ .vy[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .L1_ICON_SIZES */ .vy[size],
    fill: "none",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getStrokeColor */ ._)(color),
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getStrokeColor */ ._)(color),
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M21.5 19.5v-15a2 2 0 0 0-2-2h-15a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2Z",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getStrokeColor */ ._)(color),
    strokeWidth: 1.5,
    d: "m5.5 21.5 8.845-7.96a2 2 0 0 1 2.448-.178L21.5 16.5",
    vectorEffect: "non-scaling-stroke"
  }));
};
ImageL1Icon.displayName = 'ImageL1Icon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageL1Icon);
;
ImageL1Icon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ImageL1Icon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/l1/Pdf.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");



const PdfL1Icon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor'
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .L1_ICON_SIZES */ .vy[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .L1_ICON_SIZES */ .vy[size],
    fill: "none",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getStrokeColor */ ._)(color),
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m4 12.998.02-9.002A2 2 0 0 1 6.022 2l6.974.008L20 8.995l-.008 4.003M13 2.498v4.5a2 2 0 0 0 2 2h4.5M4 22v-2m0 0v-4c1.5 0 3.5.086 3.5 2 0 1.977-2.09 2-3.5 2M14 19.025c0-3.5-2.5-3-4-3v6c1.5 0 4 .5 4-3",
    vectorEffect: "non-scaling-stroke"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M15.75 22a.75.75 0 0 0 1.5 0zm.75-6v-.75a.75.75 0 0 0-.75.75zm3 .75a.75.75 0 0 0 0-1.5zm-.5 3.5a.75.75 0 0 0 0-1.5zM16.5 22h.75v-6h-1.5v6zm0-6v.75h3v-1.5h-3zm-.5 3.5v.75h3v-1.5h-3z",
    vectorEffect: "non-scaling-stroke"
  }));
};
PdfL1Icon.displayName = 'PdfL1Icon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PdfL1Icon);
;
PdfL1Icon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PdfL1Icon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/l1/Spinner.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const SpinnerL1Icon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('SpinnerL1Icon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_2__/* .L1_ICON_SIZES */ .vy[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_2__/* .L1_ICON_SIZES */ .vy[size],
    viewBox: "0 0 32 32",
    "data-track-tag": dataTrackTag,
    fill: _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .Tj[color]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M16 0a16 16 0 0 0 0 32 16 16 0 0 0 0-32m0 4a12 12 0 0 1 0 24 12 12 0 0 1 0-24",
    opacity: 0.18
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M16 0a16 16 0 0 1 16 16h-4A12 12 0 0 0 16 4z"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("animateTransform", {
    attributeName: "transform",
    dur: "0.8s",
    from: "0 16 16",
    repeatCount: "indefinite",
    to: "360 16 16",
    type: "rotate"
  })));
};
SpinnerL1Icon.displayName = 'SpinnerL1Icon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpinnerL1Icon);
;
SpinnerL1Icon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SpinnerL1Icon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/l1/Video.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");



const VideoL1Icon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor'
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .L1_ICON_SIZES */ .vy[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .L1_ICON_SIZES */ .vy[size],
    fill: "none",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getStrokeColor */ ._)(color),
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m18 15.5 4 2.5V7l-4 2.5m0 8.5V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-3-8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0",
    vectorEffect: "non-scaling-stroke"
  }));
};
VideoL1Icon.displayName = 'VideoL1Icon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoL1Icon);
;
VideoL1Icon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "VideoL1Icon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/ErrorCircle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const ErrorCircleIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('ErrorCircleIcon')
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
    d: "M8 5.255v2.7m0 2.686h.006M14.75 8a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0",
    vectorEffect: "non-scaling-stroke"
  }));
};
ErrorCircleIcon.id = 'ErrorCircleIcon';
ErrorCircleIcon.displayName = 'ErrorCircleIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorCircleIcon);
;
ErrorCircleIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ErrorCircleIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Plus.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const PlusIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('PlusIcon')
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
    d: "M8 1.25v13.5M14.75 8H1.25",
    vectorEffect: "non-scaling-stroke"
  }));
};
PlusIcon.id = 'PlusIcon';
PlusIcon.displayName = 'PlusIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlusIcon);
;
PlusIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PlusIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Upload.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const UploadIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('UploadIcon')
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
    d: "M5.823 3.928 8 1.75l2.177 2.178M8 10.46V2.28m6.968 10.357-.193 1.158a1.74 1.74 0 0 1-1.719 1.455H2.944a1.74 1.74 0 0 1-1.718-1.455l-.193-1.158",
    vectorEffect: "non-scaling-stroke"
  }));
};
UploadIcon.id = 'UploadIcon';
UploadIcon.displayName = 'UploadIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadIcon);
;
UploadIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "UploadIcon"
};

/***/ })

}]);
//# sourceMappingURL=5846.5334467e.iframe.bundle.js.map