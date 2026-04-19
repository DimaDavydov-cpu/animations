(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[9145],{

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

/***/ "../attachments/src/components/Attachments/Attachment/AttachmentRetryBtn/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../button/dist/esm/src/components/IconButton/index.js");
/* harmony import */ var _fiverr_private_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../button/dist/esm/src/components/TextButton/index.js");
/* harmony import */ var _fiverr_private_i18n_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js");
/* harmony import */ var _fiverr_private_i18n_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
/* harmony import */ var _fiverr_private_fiverr_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
/* harmony import */ var _fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Refresh.js");





const AttachmentRetryBtn = _ref => {
  let {
    onClick,
    variant,
    dataTrackTag = 'attachment_retry_button',
    dataTrackValue
  } = _ref;
  const {
    isTouch
  } = (0,_fiverr_private_fiverr_context__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)();
  if (variant !== 'list' && !isTouch) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      dataTrackTag: dataTrackTag,
      dataTrackValue: dataTrackValue,
      onClick: onClick,
      "aria-label": (0,_fiverr_private_i18n_react__WEBPACK_IMPORTED_MODULE_4__/* .translate */ .T)('attachments.retry'),
      intent: "primary",
      size: "xs"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_visuals__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    alignSelf: isTouch && variant === 'list' ? 'flexStart' : undefined,
    onClick: onClick,
    size: "sm",
    variant: variant === 'list' ? 'default' : 'underline'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_i18n_react__WEBPACK_IMPORTED_MODULE_3__/* .I18n */ .F, {
    k: "attachments.retry"
  }));
};
AttachmentRetryBtn.displayName = 'AttachmentRetryBtn';
AttachmentRetryBtn.id = 'AttachmentRetryBtn';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttachmentRetryBtn);
try {
    // @ts-ignore
    AttachmentRetryBtn.displayName = "AttachmentRetryBtn";
    // @ts-ignore
    AttachmentRetryBtn.__docgenInfo = { "description": "", "displayName": "AttachmentRetryBtn", "props": { "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": true, "type": { "name": "MouseEventHandler<HTMLButtonElement>" } }, "variant": { "defaultValue": null, "description": "@ignore", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"list\"" }, { "value": "\"grid\"" }, { "value": "\"single\"" }] } }, "dataTrackTag": { "defaultValue": { value: "attachment_retry_button" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../attachments/src/components/Attachments/Attachment/AttachmentRetryBtn/index.tsx#AttachmentRetryBtn"] = { docgenInfo: AttachmentRetryBtn.__docgenInfo, name: "AttachmentRetryBtn", path: "../attachments/src/components/Attachments/Attachment/AttachmentRetryBtn/index.tsx#AttachmentRetryBtn" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../attachments/src/components/Attachments/Attachment/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Attachments_Attachment)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
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
var File = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/l1/File.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
;// ../attachments/src/components/Attachments/Asset/utils.ts
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
;// ../attachments/src/components/Attachments/Asset/index.tsx







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
  }) : isVideo && /*#__PURE__*/react.createElement(l1_Video/* default */.A, null), isPdf && /*#__PURE__*/react.createElement(Pdf/* default */.A, null), isAudio && /*#__PURE__*/react.createElement(Audio/* default */.A, null), (isDocument || isOther) && /*#__PURE__*/react.createElement(File/* default */.A, null)));
};
/* harmony default export */ const Attachments_Asset = (Asset);
try {
    // @ts-ignore
    Asset.displayName = "Asset";
    // @ts-ignore
    Asset.__docgenInfo = { "description": "", "displayName": "Asset", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "theme": { "defaultValue": null, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "variant": { "defaultValue": null, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"list\"" }, { "value": "\"grid\"" }, { "value": "\"single\"" }] } }, "url": { "defaultValue": null, "description": "", "name": "url", "required": false, "type": { "name": "string" } }, "hasError": { "defaultValue": null, "description": "", "name": "hasError", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "showPreview": { "defaultValue": null, "description": "A boolean flag indicating whether the attachment should display a preview", "name": "showPreview", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../attachments/src/components/Attachments/Asset/index.tsx#Asset"] = { docgenInfo: Asset.__docgenInfo, name: "Asset", path: "../attachments/src/components/Attachments/Asset/index.tsx#Asset" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../attachments/src/components/Attachments/hooks/useActiveState.ts

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
;// ../attachments/src/components/Attachments/Attachment/RemoveButton/index.tsx



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
try {
    // @ts-ignore
    RemoveButton.displayName = "RemoveButton";
    // @ts-ignore
    RemoveButton.__docgenInfo = { "description": "", "displayName": "RemoveButton", "props": { "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLButtonElement>" } }, "variant": { "defaultValue": null, "description": "", "name": "variant", "required": true, "type": { "name": "enum", "value": [{ "value": "\"list\"" }, { "value": "\"grid\"" }, { "value": "\"single\"" }] } }, "theme": { "defaultValue": null, "description": "", "name": "theme", "required": true, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../attachments/src/components/Attachments/Attachment/RemoveButton/index.tsx#RemoveButton"] = { docgenInfo: RemoveButton.__docgenInfo, name: "RemoveButton", path: "../attachments/src/components/Attachments/Attachment/RemoveButton/index.tsx#RemoveButton" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../attachments/src/components/Attachments/utils.ts
var utils = __webpack_require__("../attachments/src/components/Attachments/utils.ts");
// EXTERNAL MODULE: ../data_display/dist/esm/src/components/Status/index.js + 1 modules
var Status = __webpack_require__("../data_display/dist/esm/src/components/Status/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js
var I18n = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js");
;// ../attachments/src/components/Attachments/Attachment/AttachmentStatus/index.tsx



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
try {
    // @ts-ignore
    AttachmentStatus.displayName = "AttachmentStatus";
    // @ts-ignore
    AttachmentStatus.__docgenInfo = { "description": "", "displayName": "AttachmentStatus", "props": { "status": { "defaultValue": null, "description": "", "name": "status", "required": true, "type": { "name": "enum", "value": [{ "value": "\"active\"" }, { "value": "\"deleted\"" }, { "value": "\"archived\"" }, { "value": "\"restore_in_progress\"" }] } }, "variant": { "defaultValue": null, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"list\"" }, { "value": "\"grid\"" }, { "value": "\"single\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../attachments/src/components/Attachments/Attachment/AttachmentStatus/index.tsx#AttachmentStatus"] = { docgenInfo: AttachmentStatus.__docgenInfo, name: "AttachmentStatus", path: "../attachments/src/components/Attachments/Attachment/AttachmentStatus/index.tsx#AttachmentStatus" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../attachments/src/components/Attachments/Attachment/AttachmentGridItem/index.tsx













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
  }, isTouch ? (0,utils/* renderAttachmentsChildren */.e)(retryBtn, {
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
  }), hasError && (0,utils/* renderAttachmentsChildren */.e)(retryBtn, {
    variant,
    theme,
    setIsTooltipOpen
  }), (0,utils/* renderAttachmentsChildren */.e)(restChildren, {
    variant,
    theme,
    setIsTooltipOpen
  }))))));
};
AttachmentGridItem.displayName = 'AttachmentGridItem';
/* harmony default export */ const Attachment_AttachmentGridItem = (AttachmentGridItem);
try {
    // @ts-ignore
    AttachmentGridItem.displayName = "AttachmentGridItem";
    // @ts-ignore
    AttachmentGridItem.__docgenInfo = { "description": "", "displayName": "AttachmentGridItem", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "fileSize": { "defaultValue": null, "description": "The size of the file in bytes.", "name": "fileSize", "required": false, "type": { "name": "number" } }, "showPreview": { "defaultValue": null, "description": "A boolean flag indicating whether the attachment should display a preview", "name": "showPreview", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "onRemove": { "defaultValue": null, "description": "If provided, a remove button is displayed and triggers this callback when clicked.", "name": "onRemove", "required": false, "type": { "name": "() => void" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "string" } }, "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLDivElement>" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "variant": { "defaultValue": null, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"list\"" }, { "value": "\"grid\"" }, { "value": "\"single\"" }] } }, "goExperimental": { "defaultValue": null, "description": "@deprecated This is a temporary prop and should be deprecated soon, please use theme='dark' instead\n@ignore", "name": "goExperimental", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "theme": { "defaultValue": null, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } }, "hasError": { "defaultValue": null, "description": "", "name": "hasError", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "url": { "defaultValue": null, "description": "", "name": "url", "required": false, "type": { "name": "string" } }, "status": { "defaultValue": null, "description": "", "name": "status", "required": false, "type": { "name": "enum", "value": [{ "value": "\"active\"" }, { "value": "\"deleted\"" }, { "value": "\"archived\"" }, { "value": "\"restore_in_progress\"" }] } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../attachments/src/components/Attachments/Attachment/AttachmentGridItem/index.tsx#AttachmentGridItem"] = { docgenInfo: AttachmentGridItem.__docgenInfo, name: "AttachmentGridItem", path: "../attachments/src/components/Attachments/Attachment/AttachmentGridItem/index.tsx#AttachmentGridItem" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/browser/index.js + 21 modules
var browser = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+localization@3.0.1/node_modules/@fiverr-private/localization/dist/esm/src/browser/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
;// ../attachments/src/components/Attachments/Attachment/AttachmentListItem/index.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
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
  }, !(isTouch && hasError) && /*#__PURE__*/react.createElement(Text/* default */.A, _extends({
    color: theme === 'dark' ? 'white' : undefined,
    size: "b_sm",
    fontWeight: "semibold"
  }, ellipsisPros), name), /*#__PURE__*/react.createElement(Text/* default */.A, _extends({
    size: "b_sm",
    color: hasError ? 'validationError' : 'bodySecondary'
  }, ellipsisPros), hasError ? error : fileSize === null || fileSize === void 0 ? void 0 : fileSize.toLocaleUpperCase()), hasError && isTouch && (0,utils/* renderAttachmentsChildren */.e)(retryBtn, {
    variant,
    theme
  }))), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    flexShrink: 0,
    gap: "2"
  }, hasError && isActive && !isTouch && (0,utils/* renderAttachmentsChildren */.e)(retryBtn, {
    variant,
    theme
  }), /*#__PURE__*/react.createElement(Container/* default */.A, {
    hidden: !isActive || isTouch
  }, (0,utils/* renderAttachmentsChildren */.e)(restChildren, {
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
try {
    // @ts-ignore
    AttachmentListItem.displayName = "AttachmentListItem";
    // @ts-ignore
    AttachmentListItem.__docgenInfo = { "description": "", "displayName": "AttachmentListItem", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "fileSize": { "defaultValue": null, "description": "The size of the file in bytes.", "name": "fileSize", "required": false, "type": { "name": "number" } }, "showPreview": { "defaultValue": null, "description": "A boolean flag indicating whether the attachment should display a preview", "name": "showPreview", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "onRemove": { "defaultValue": null, "description": "If provided, a remove button is displayed and triggers this callback when clicked.", "name": "onRemove", "required": false, "type": { "name": "() => void" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "string" } }, "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLDivElement>" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "variant": { "defaultValue": null, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"list\"" }, { "value": "\"grid\"" }, { "value": "\"single\"" }] } }, "goExperimental": { "defaultValue": null, "description": "@deprecated This is a temporary prop and should be deprecated soon, please use theme='dark' instead\n@ignore", "name": "goExperimental", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "theme": { "defaultValue": null, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } }, "hasError": { "defaultValue": null, "description": "", "name": "hasError", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "url": { "defaultValue": null, "description": "", "name": "url", "required": false, "type": { "name": "string" } }, "status": { "defaultValue": null, "description": "", "name": "status", "required": false, "type": { "name": "enum", "value": [{ "value": "\"active\"" }, { "value": "\"deleted\"" }, { "value": "\"archived\"" }, { "value": "\"restore_in_progress\"" }] } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../attachments/src/components/Attachments/Attachment/AttachmentListItem/index.tsx#AttachmentListItem"] = { docgenInfo: AttachmentListItem.__docgenInfo, name: "AttachmentListItem", path: "../attachments/src/components/Attachments/Attachment/AttachmentListItem/index.tsx#AttachmentListItem" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../attachments/src/components/Attachments/Attachment/index.tsx
const _excluded = ["variant", "theme", "goExperimental", "dataTrackTag"];
function Attachment_extends() {
  return Attachment_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Attachment_extends.apply(null, arguments);
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
    return /*#__PURE__*/react.createElement(Attachment_AttachmentListItem, Attachment_extends({
      dataTrackTag: dataTrackTag
    }, restProps, {
      variant: variant,
      theme: currentTheme
    }));
  }
  return /*#__PURE__*/react.createElement(Attachment_AttachmentGridItem, Attachment_extends({
    dataTrackTag: dataTrackTag
  }, restProps, {
    variant: variant,
    theme: currentTheme
  }));
};
Attachment.displayName = 'Attachment';
/* harmony default export */ const Attachments_Attachment = (Attachment);
try {
    // @ts-ignore
    Attachment.displayName = "Attachment";
    // @ts-ignore
    Attachment.__docgenInfo = { "description": "", "displayName": "Attachment", "props": { "name": { "defaultValue": null, "description": "", "name": "name", "required": true, "type": { "name": "string" } }, "fileSize": { "defaultValue": null, "description": "The size of the file in bytes.", "name": "fileSize", "required": false, "type": { "name": "number" } }, "showPreview": { "defaultValue": null, "description": "A boolean flag indicating whether the attachment should display a preview", "name": "showPreview", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "onRemove": { "defaultValue": null, "description": "If provided, a remove button is displayed and triggers this callback when clicked.", "name": "onRemove", "required": false, "type": { "name": "() => void" } }, "error": { "defaultValue": null, "description": "", "name": "error", "required": false, "type": { "name": "string" } }, "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLDivElement>" } }, "width": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "variant": { "defaultValue": { value: "single" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"list\"" }, { "value": "\"grid\"" }, { "value": "\"single\"" }] } }, "goExperimental": { "defaultValue": { value: "false" }, "description": "@deprecated This is a temporary prop and should be deprecated soon, please use theme='dark' instead\n@ignore", "name": "goExperimental", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "theme": { "defaultValue": { value: "light" }, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } }, "hasError": { "defaultValue": null, "description": "", "name": "hasError", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "url": { "defaultValue": null, "description": "", "name": "url", "required": false, "type": { "name": "string" } }, "status": { "defaultValue": null, "description": "", "name": "status", "required": false, "type": { "name": "enum", "value": [{ "value": "\"active\"" }, { "value": "\"deleted\"" }, { "value": "\"archived\"" }, { "value": "\"restore_in_progress\"" }] } }, "dataTrackTag": { "defaultValue": { value: "attachment" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../attachments/src/components/Attachments/Attachment/index.tsx#Attachment"] = { docgenInfo: Attachment.__docgenInfo, name: "Attachment", path: "../attachments/src/components/Attachments/Attachment/index.tsx#Attachment" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../attachments/src/components/Attachments/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DarkGridNoPreview: () => (/* binding */ DarkGridNoPreview),
  DarkListNoPreview: () => (/* binding */ DarkListNoPreview),
  Error: () => (/* binding */ Error),
  Grid: () => (/* binding */ Grid),
  Primary: () => (/* binding */ Primary),
  Single: () => (/* binding */ Single),
  SingleError: () => (/* binding */ SingleError),
  SingleWithAttachmentRetrieveBtn: () => (/* binding */ SingleWithAttachmentRetrieveBtn),
  SingleWithoutRemove: () => (/* binding */ SingleWithoutRemove),
  WithAttachmentStatus: () => (/* binding */ WithAttachmentStatus),
  WithCarousel: () => (/* binding */ WithCarousel),
  WithoutPreviewGrid: () => (/* binding */ WithoutPreviewGrid),
  WithoutPreviewList: () => (/* binding */ WithoutPreviewList),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs + 1 modules
var dist = __webpack_require__("../../node_modules/.pnpm/@storybook+test@7.6.20/node_modules/@storybook/test/dist/index.mjs");
// EXTERNAL MODULE: ../carousel/dist/esm/src/components/Carousel/index.js + 5 modules
var Carousel = __webpack_require__("../carousel/dist/esm/src/components/Carousel/index.js");
// EXTERNAL MODULE: ../carousel/dist/esm/src/components/Arrows/index.js + 2 modules
var Arrows = __webpack_require__("../carousel/dist/esm/src/components/Arrows/index.js");
// EXTERNAL MODULE: ../carousel/dist/esm/src/components/Track/index.js
var Track = __webpack_require__("../carousel/dist/esm/src/components/Track/index.js");
// EXTERNAL MODULE: ../carousel/dist/esm/src/components/Slide/index.js + 2 modules
var Slide = __webpack_require__("../carousel/dist/esm/src/components/Slide/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js
var src = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+e2e_storybook_utils@1.0.0/node_modules/@fiverr-private/e2e_storybook_utils/dist/esm/src/index.js");
// EXTERNAL MODULE: ../attachments/src/components/Attachments/utils.ts
var utils = __webpack_require__("../attachments/src/components/Attachments/utils.ts");
;// ../attachments/src/components/Attachments/index.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
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
  return /*#__PURE__*/react.createElement(Stack/* default */.A, _extends({
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    role: "group",
    width: "100%"
  }, props), (0,utils/* renderAttachmentsChildren */.e)(children, {
    variant,
    theme: goExperimental ? 'dark' : theme
  }));
};
Attachments.displayName = 'Attachments';
/* harmony default export */ const components_Attachments = (Attachments);
try {
    // @ts-ignore
    Attachments.displayName = "Attachments";
    // @ts-ignore
    Attachments.__docgenInfo = { "description": "", "displayName": "Attachments", "props": { "variant": { "defaultValue": { value: "list" }, "description": "", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"list\"" }, { "value": "\"grid\"" }] } }, "goExperimental": { "defaultValue": { value: "false" }, "description": "@deprecated This is a temporary prop and should be deprecated soon, please use theme='dark' instead\n@ignore", "name": "goExperimental", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "theme": { "defaultValue": { value: "light" }, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } }, "dataTrackTag": { "defaultValue": { value: "attachments" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../attachments/src/components/Attachments/index.tsx#Attachments"] = { docgenInfo: Attachments.__docgenInfo, name: "Attachments", path: "../attachments/src/components/Attachments/index.tsx#Attachments" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../attachments/src/components/Attachments/Attachment/index.tsx + 7 modules
var Attachment = __webpack_require__("../attachments/src/components/Attachments/Attachment/index.tsx");
// EXTERNAL MODULE: ../attachments/src/components/Attachments/Attachment/AttachmentRetryBtn/index.tsx
var AttachmentRetryBtn = __webpack_require__("../attachments/src/components/Attachments/Attachment/AttachmentRetryBtn/index.tsx");
// EXTERNAL MODULE: ../button/dist/esm/src/components/Button/index.js + 1 modules
var Button = __webpack_require__("../button/dist/esm/src/components/Button/index.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/TextButton/index.js + 1 modules
var TextButton = __webpack_require__("../button/dist/esm/src/components/TextButton/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js
var translate = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js
var I18n = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js + 1 modules
var getContext = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/index.js + 1 modules
var Modal = __webpack_require__("../overlay/dist/esm/src/components/Modal/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/ModalTrigger/index.js
var ModalTrigger = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalTrigger/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/ModalContent/index.js + 2 modules
var ModalContent = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalContent/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/ModalHeader/index.js
var ModalHeader = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalHeader/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/ModalBody/index.js + 2 modules
var ModalBody = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalBody/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/ModalFooter/index.js
var ModalFooter = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalFooter/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useKeyboardShortcuts/index.js + 2 modules
var useKeyboardShortcuts = __webpack_require__("../hooks/dist/esm/src/hooks/useKeyboardShortcuts/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/ModalContext/index.js
var ModalContext = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalContext/index.js");
;// ../overlay/dist/esm/src/components/Modal/ModalCancelBtn/index.js





const ModalCancelBtn = _ref => {
  let {
    onClick,
    children = /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
      k: "overlay.modal.cancelButton.cta"
    }),
    size = 'md',
    dataTrackTag = 'modal_cancel_button',
    dataTrackValue
  } = _ref;
  const {
    close
  } = (0,ModalContext/* useModalContext */.k)();
  const ref = (0,react.useRef)(null);
  const getTarget = (0,react.useCallback)(() => ref.current, [ref]);
  const onTrigger = e => {
    onClick === null || onClick === void 0 || onClick(e);
    close === null || close === void 0 || close();
  };
  (0,useKeyboardShortcuts/* default */.A)([{
    trigger: 'enter',
    handler: onTrigger
  }, {
    trigger: 'space',
    handler: onTrigger
  }], getTarget);
  return /*#__PURE__*/react.createElement(Button/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    ref: ref,
    size: size,
    variant: "ghost",
    onClick: onTrigger
  }, children);
};
ModalCancelBtn.displayName = 'ModalCancelBtn';
/* harmony default export */ const Modal_ModalCancelBtn = (ModalCancelBtn);
;
ModalCancelBtn.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ModalCancelBtn"
};
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Refresh.js
var Refresh = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Refresh.js");
;// ../attachments/src/components/Attachments/Attachment/AttachmentRetrieveBtn/index.tsx







const AttachmentRetrieveBtn = _ref => {
  let {
    onClick,
    variant,
    copies,
    setIsTooltipOpen,
    dataTrackTag = 'attachment_retrieve_button',
    dataTrackValue
  } = _ref;
  const [isModalOpen, setIsModalOpen] = (0,react.useState)(false);
  const {
    isTouch
  } = (0,getContext/* default */.A)();
  const handleModalOpen = () => {
    setIsModalOpen(true);
    setIsTooltipOpen === null || setIsTooltipOpen === void 0 || setIsTooltipOpen(false);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsTooltipOpen === null || setIsTooltipOpen === void 0 || setIsTooltipOpen(true);
  };
  let buttonContent;
  if (variant !== 'list' && !isTouch) {
    buttonContent = /*#__PURE__*/react.createElement(Button/* default */.A, {
      dataTrackTag: dataTrackTag,
      dataTrackValue: dataTrackValue,
      "aria-label": (0,translate/* translate */.T)('attachments.retrieve'),
      intent: "primary",
      size: "sm"
    }, /*#__PURE__*/react.createElement(Refresh/* default */.A, null), /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
      k: "attachments.retrieve"
    }));
  } else {
    const isWithCopies = copies === null || copies === void 0 ? void 0 : copies.retrieveButtonText;
    const buttonText = isWithCopies ? copies.retrieveButtonText() : /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
      k: "attachments.retrieve"
    });
    buttonContent = /*#__PURE__*/react.createElement(TextButton/* default */.A, {
      dataTrackTag: dataTrackTag,
      dataTrackValue: dataTrackValue,
      alignSelf: isTouch && variant === 'list' ? 'flexStart' : undefined,
      size: "sm",
      variant: variant === 'list' && !isWithCopies ? 'default' : 'underline'
    }, isWithCopies && /*#__PURE__*/react.createElement(Refresh/* default */.A, null), buttonText);
  }
  return /*#__PURE__*/react.createElement(Modal/* default */.A, {
    isOpen: isModalOpen,
    onOpen: handleModalOpen,
    onClose: handleModalClose
  }, /*#__PURE__*/react.createElement(ModalTrigger/* default */.A, null, buttonContent), /*#__PURE__*/react.createElement(ModalContent/* default */.A, {
    dataTrackTag: 'attachment_retrieve_modal'
  }, /*#__PURE__*/react.createElement(ModalHeader/* default */.A, null, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "attachments.retrieveModal.title"
  })), /*#__PURE__*/react.createElement(ModalBody/* default */.A, null, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    style: {
      display: 'inline'
    },
    color: "grey_1000"
  }, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "attachments.retrieveModal.description"
  }))), /*#__PURE__*/react.createElement(ModalFooter/* default */.A, null, /*#__PURE__*/react.createElement(Modal_ModalCancelBtn, {
    dataTrackTag: "attachment_cancel_button",
    onClick: () => setIsModalOpen(false)
  }, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "attachments.retrieveModal.cancel"
  })), /*#__PURE__*/react.createElement(Button/* default */.A, {
    dataTrackTag: "attachment_submit_retrieve_button",
    onClick: e => {
      onClick === null || onClick === void 0 || onClick(e);
      setIsModalOpen(false);
    },
    intent: "primary"
  }, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "attachments.retrieveModal.submit"
  })))));
};
AttachmentRetrieveBtn.displayName = 'AttachmentRetrieveBtn';
AttachmentRetrieveBtn.id = 'AttachmentRetrieveBtn';
/* harmony default export */ const Attachment_AttachmentRetrieveBtn = (AttachmentRetrieveBtn);
try {
    // @ts-ignore
    AttachmentRetrieveBtn.displayName = "AttachmentRetrieveBtn";
    // @ts-ignore
    AttachmentRetrieveBtn.__docgenInfo = { "description": "", "displayName": "AttachmentRetrieveBtn", "props": { "onClick": { "defaultValue": null, "description": "", "name": "onClick", "required": true, "type": { "name": "MouseEventHandler<HTMLButtonElement>" } }, "variant": { "defaultValue": null, "description": "@ignore", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"list\"" }, { "value": "\"grid\"" }, { "value": "\"single\"" }] } }, "copies": { "defaultValue": null, "description": "", "name": "copies", "required": false, "type": { "name": "{ retrieveButtonText: () => ReactNode; }" } }, "setIsTooltipOpen": { "defaultValue": null, "description": "", "name": "setIsTooltipOpen", "required": false, "type": { "name": "(open: boolean) => void" } }, "dataTrackTag": { "defaultValue": { value: "attachment_retrieve_button" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../attachments/src/components/Attachments/Attachment/AttachmentRetrieveBtn/index.tsx#AttachmentRetrieveBtn"] = { docgenInfo: AttachmentRetrieveBtn.__docgenInfo, name: "AttachmentRetrieveBtn", path: "../attachments/src/components/Attachments/Attachment/AttachmentRetrieveBtn/index.tsx#AttachmentRetrieveBtn" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../attachments/src/components/Attachments/stories/data.ts
const mockFiles = [{
  name: 'compressed.tracemonkey-pldi-09.pdf',
  url: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
  size: 34343
}, {
  name: 'nature.jpg',
  url: 'https://picsum.photos/200',
  size: 1245678
}, {
  name: 'example_video.mp4',
  url: 'https://fiverr-res.cloudinary.com/video/upload/video-attachments/generic_asset/asset/4827fa56a23003b9b28e940dfbf904c5-1734871459295/Header%201440x864',
  size: 23456789
}, {
  name: 'song.mp3',
  url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  size: 4567890
}, {
  name: 'beautiful-landscape.png',
  url: 'https://picsum.photos/300',
  size: 678912
}, {
  name: 'sample-video.mp4',
  url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  size: 1048576
}, {
  name: 'funny-cat.gif',
  url: 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
  size: 345678
}, {
  name: 'holiday-trip.mov',
  url: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/v1/video-attachments/generic_asset/asset/4934b0c8f6441211d97f83585a7c9c00-1722433273322/Vontelle%20Cutdown-%20Breakthrough%20V5',
  size: 2097152
}, {
  name: 'resume.docx',
  url: 'https://example.com/resume.docx',
  size: 102340
}, {
  name: 'compressed-09.pdf',
  url: 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
  size: 34343
}];
const AttachmentStatuses = ['restore_in_progress', 'archived', 'deleted', 'active'];
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useElementSize/index.js + 1 modules
var useElementSize = __webpack_require__("../hooks/dist/esm/src/hooks/useElementSize/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useConst/index.js
var useConst = __webpack_require__("../hooks/dist/esm/src/hooks/useConst/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/utils/index.js
var src_utils = __webpack_require__("../storybook_helpers/dist/esm/src/utils/index.js");
;// ../attachments/src/components/Attachments/stories/utils.ts



const mobileContext = {
  userAgent: 'Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; SCH-I535 Build/KOT49H) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
  isTouch: true,
  isMobile: true
};
const useSetMobileContext = function () {
  let customContext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mobileContext;
  const {
    width
  } = (0,useElementSize/* default */.A)(window);
  const fiverrContext = (0,useConst/* default */.A)(() => (0,getContext/* default */.A)());
  if (width && width < 600) {
    (0,src_utils/* setFiverrContext */.G)(customContext);
  } else {
    (0,src_utils/* setFiverrContext */.G)(fiverrContext);
  }
};
;// ../attachments/src/components/Attachments/stories/index.stories.tsx
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
  tags: ['sidebar-ignore', 'snapshot-ignore']
};
const Grid = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  args: {
    variant: 'grid'
  }
};
const WithCarousel = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  parameters: {
    docs: {
      source: {
        code: "\n<Carousel\n  width=\"98%\"\n  breakpoints={{\n    default: 4,\n  }}\n  scrollType=\"row\"\n>\n  <Arrows />\n  <Track autoSlidesWidth>\n    {mockFiles.map((file) => (\n      <Slide key={file.name}>\n        <Attachment\n          showPreview={true}\n          key={file.name}\n          name={file?.name}\n          fileSize={file.size}\n          url={file.url}\n          onRemove={() => alert('Removed')}\n          variant=\"grid\"\n        />\n      </Slide>\n    ))}\n  </Track>\n</Carousel>\n)"
      }
    }
  },
  render: () => /*#__PURE__*/react.createElement(Carousel/* default */.A, {
    width: "98%",
    breakpoints: {
      default: 4
    },
    scrollType: "row"
  }, /*#__PURE__*/react.createElement(Arrows/* default */.A, null), /*#__PURE__*/react.createElement(Track/* default */.A, {
    autoSlidesWidth: true
  }, mockFiles.map(file => /*#__PURE__*/react.createElement(Slide/* default */.A, {
    key: file.name
  }, /*#__PURE__*/react.createElement(Attachment/* default */.A, {
    showPreview: true,
    key: file.name,
    name: file === null || file === void 0 ? void 0 : file.name,
    fileSize: file.size,
    url: file.url,
    onRemove: () => alert('Removed'),
    variant: "grid"
  })))))
};
const WithoutPreviewList = {
  tags: ['sidebar-ignore'],
  render: () => {
    const [files, setFiles] = (0,react.useState)(mockFiles);
    return /*#__PURE__*/react.createElement(components_Attachments, null, files.map((file, index) => /*#__PURE__*/react.createElement(Attachment/* default */.A, {
      key: file.name,
      name: file === null || file === void 0 ? void 0 : file.name,
      fileSize: file.size,
      url: file.url,
      onRemove: () => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
      }
    })));
  },
  parameters: {
    docs: {
      source: {
        code: "\nconst [files, setFiles] = useState(mockFiles);\n\nreturn  (\n  <Attachments>\n    {files.map((file, index) => (\n      <Attachment\n        key={file.name}\n        name={file?.name}\n        fileSize={file.size}\n        url={file.url}\n        onRemove={() => {\n          const updatedFiles = [...files];\n          updatedFiles.splice(index, 1);\n          setFiles(updatedFiles);\n        }} />\n    ))}\n  </Attachments>"
      }
    }
  },
  play: function () {
    var _ref = _asyncToGenerator(function (_ref2) {
      let {
        canvasElement
      } = _ref2;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const attachment = canvas.getByRole('group');
        yield dist/* userEvent */.Q4.hover(attachment.children[0]);
        yield (0,src/* takeScreenshot */.w)();
        const removeButton = attachment.getElementsByTagName('button')[0];
        yield dist/* userEvent */.Q4.click(removeButton);
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x) {
      return _ref.apply(this, arguments);
    };
  }()
};
const WithoutPreviewGrid = {
  tags: ['sidebar-ignore'],
  args: {
    variant: 'grid'
  },
  render: args => {
    const [files, setFiles] = (0,react.useState)(mockFiles);
    return /*#__PURE__*/react.createElement(components_Attachments, args, files.map((file, index) => /*#__PURE__*/react.createElement(Attachment/* default */.A, {
      key: file.name,
      name: file === null || file === void 0 ? void 0 : file.name,
      fileSize: file.size,
      url: file.url,
      onRemove: () => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
      }
    })));
  },
  parameters: {
    docs: {
      source: {
        code: "\nconst [files, setFiles] = useState(mockFiles);\n\nreturn (\n  <Attachments variant='grid'>\n    {files.map((file, index) => (\n      <Attachment\n        key={file.name}\n        name={file?.name}\n        fileSize={file.size}\n        url={file.url}\n        onRemove={() => {\n          const updatedFiles = [...files];\n          updatedFiles.splice(index, 1);\n          setFiles(updatedFiles);\n        }}\n      />\n    ))}\n  </Attachments>\n)"
      }
    }
  },
  play: function () {
    var _ref3 = _asyncToGenerator(function (_ref4) {
      let {
        canvasElement
      } = _ref4;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        const attachment = canvas.getByRole('group');
        yield dist/* userEvent */.Q4.hover(attachment.children[0]);
        yield (0,src/* takeScreenshot */.w)();
        const removeButton = attachment.getElementsByTagName('button')[0];
        yield dist/* userEvent */.Q4.click(removeButton);
        yield (0,src/* takeScreenshot */.w)();
      }();
    });
    return function play(_x2) {
      return _ref3.apply(this, arguments);
    };
  }()
};
const Error = {
  tags: ['sidebar-ignore'],
  render: () => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column"
  }, /*#__PURE__*/react.createElement(components_Attachments, {
    variant: "grid"
  }, mockFiles.slice(0, 2).map(file => /*#__PURE__*/react.createElement(Attachment/* default */.A, {
    hasError: true,
    error: "Error message",
    key: file.name,
    name: file === null || file === void 0 ? void 0 : file.name,
    onRemove: () => alert('Removed')
  }, /*#__PURE__*/react.createElement(AttachmentRetryBtn/* default */.A, {
    onClick: () => alert('Retry')
  })))), /*#__PURE__*/react.createElement(components_Attachments, null, mockFiles.slice(0, 2).map(file => /*#__PURE__*/react.createElement(Attachment/* default */.A, {
    hasError: true,
    error: "Error message",
    key: file.name,
    name: file === null || file === void 0 ? void 0 : file.name,
    onRemove: () => alert('Removed')
  }, /*#__PURE__*/react.createElement(AttachmentRetryBtn/* default */.A, {
    onClick: () => alert('Retry')
  })))))
};
const Single = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: () => {
    var _mockFiles$;
    return /*#__PURE__*/react.createElement(Stack/* default */.A, null, /*#__PURE__*/react.createElement(Attachment/* default */.A, {
      showPreview: true,
      key: mockFiles[1].name,
      name: (_mockFiles$ = mockFiles[1]) === null || _mockFiles$ === void 0 ? void 0 : _mockFiles$.name,
      fileSize: mockFiles[1].size,
      url: mockFiles[1].url,
      onRemove: () => alert('Removed'),
      variant: "single"
    }));
  }
};
const SingleError = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: () => {
    var _mockFiles$2;
    return /*#__PURE__*/react.createElement(Stack/* default */.A, null, /*#__PURE__*/react.createElement(Attachment/* default */.A, {
      hasError: true,
      key: mockFiles[1].name,
      name: (_mockFiles$2 = mockFiles[1]) === null || _mockFiles$2 === void 0 ? void 0 : _mockFiles$2.name,
      fileSize: mockFiles[1].size,
      url: mockFiles[1].url,
      width: 400,
      height: 400,
      onRemove: () => alert('Removed'),
      variant: "single"
    }, /*#__PURE__*/react.createElement(AttachmentRetryBtn/* default */.A, {
      onClick: () => alert('Retry')
    })));
  }
};
const SingleWithoutRemove = {
  tags: ['sidebar-ignore', 'snapshot-ignore'],
  render: () => {
    var _mockFiles$3;
    return /*#__PURE__*/react.createElement(Stack/* default */.A, null, /*#__PURE__*/react.createElement(Attachment/* default */.A, {
      showPreview: true,
      key: mockFiles[1].name,
      name: (_mockFiles$3 = mockFiles[1]) === null || _mockFiles$3 === void 0 ? void 0 : _mockFiles$3.name,
      fileSize: mockFiles[1].size,
      url: mockFiles[1].url,
      variant: "single"
    }));
  }
};
const WithAttachmentStatus = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'Attachment status is supported for single variant only.'
      }
    }
  },
  render: () => /*#__PURE__*/react.createElement(Stack/* default */.A, {
    wrap: "wrap",
    gap: "2"
  }, AttachmentStatuses.map(status => {
    var _mockFiles$4;
    return /*#__PURE__*/react.createElement(Attachment/* default */.A, {
      key: mockFiles[1].name,
      name: (_mockFiles$4 = mockFiles[1]) === null || _mockFiles$4 === void 0 ? void 0 : _mockFiles$4.name,
      fileSize: mockFiles[1].size,
      url: mockFiles[1].url,
      width: 208,
      height: 144,
      variant: "single",
      status: status
    });
  }))
};
const SingleWithAttachmentRetrieveBtn = {
  tags: ['sidebar-ignore'],
  render: () => {
    var _mockFiles$5, _mockFiles$6, _mockFiles$7;
    return /*#__PURE__*/react.createElement(Stack/* default */.A, {
      direction: "column"
    }, /*#__PURE__*/react.createElement(Attachment/* default */.A, {
      key: mockFiles[1].name,
      name: (_mockFiles$5 = mockFiles[1]) === null || _mockFiles$5 === void 0 ? void 0 : _mockFiles$5.name,
      fileSize: mockFiles[1].size,
      url: mockFiles[1].url,
      width: 208,
      height: 144,
      variant: "single",
      status: "archived"
    }, /*#__PURE__*/react.createElement(Attachment_AttachmentRetrieveBtn, {
      onClick: () => alert('Retrieve')
    })), /*#__PURE__*/react.createElement(Attachment/* default */.A, {
      key: mockFiles[1].name,
      name: (_mockFiles$6 = mockFiles[1]) === null || _mockFiles$6 === void 0 ? void 0 : _mockFiles$6.name,
      fileSize: mockFiles[1].size,
      url: mockFiles[1].url,
      width: 208,
      height: 144,
      variant: "list"
    }, /*#__PURE__*/react.createElement(Attachment_AttachmentRetrieveBtn, {
      onClick: () => alert('Retrieve'),
      variant: "list"
    })), /*#__PURE__*/react.createElement(Attachment/* default */.A, {
      key: mockFiles[1].name,
      name: (_mockFiles$7 = mockFiles[1]) === null || _mockFiles$7 === void 0 ? void 0 : _mockFiles$7.name,
      fileSize: mockFiles[1].size,
      url: mockFiles[1].url,
      width: 208,
      height: 144,
      variant: "list"
    }, /*#__PURE__*/react.createElement(Attachment_AttachmentRetrieveBtn, {
      onClick: () => alert('Retrieve'),
      variant: "list",
      copies: {
        retrieveButtonText: () => 'Custom retrieve text'
      }
    })));
  },
  play: function () {
    var _ref5 = _asyncToGenerator(function (_ref6) {
      let {
        canvasElement
      } = _ref6;
      return function* () {
        const canvas = (0,dist/* within */.ux)(canvasElement);
        yield new Promise(resolve => setTimeout(resolve, 300));
        const attachmentContainers = Array.from(canvasElement.querySelectorAll('[tabindex="0"]'));
        for (const container of attachmentContainers) {
          yield dist/* userEvent */.Q4.hover(container, {
            delay: 100
          });
        }
        const retrieveButtons = canvas.getAllByText('Retrieve').filter(btn => btn.closest('button') || btn.getAttribute('role') === 'button');
        const customRetrieveButtons = canvas.getAllByText('Custom retrieve text').filter(btn => btn.closest('button') || btn.getAttribute('role') === 'button');
        const allRetrieveButtons = [...retrieveButtons, ...customRetrieveButtons];
        for (let i = 0; i < allRetrieveButtons.length; i++) {
          const button = allRetrieveButtons[i].closest('button') || allRetrieveButtons[i];
          yield dist/* userEvent */.Q4.click(button, {
            delay: 800
          });
          yield (0,src/* takeScreenshot */.w)();
          const modal = document.getElementsByTagName('article')[0];
          if (modal) {
            const modalButtons = (0,dist/* within */.ux)(modal).getAllByRole('button');
            const cancelButton = modalButtons.find(btn => {
              var _btn$textContent;
              return (_btn$textContent = btn.textContent) === null || _btn$textContent === void 0 ? void 0 : _btn$textContent.toLowerCase().includes('cancel');
            });
            if (cancelButton) {
              yield dist/* userEvent */.Q4.click(cancelButton, {
                delay: 500
              });
            }
          }
          const closedModal = document.getElementsByTagName('article')[0];
          (0,dist/* expect */.E3)(closedModal).toBeUndefined();
        }
      }();
    });
    return function play(_x3) {
      return _ref5.apply(this, arguments);
    };
  }()
};
const MobileContextDecorator = Story => {
  useSetMobileContext();
  return /*#__PURE__*/react.createElement(Story, null);
};
const DarkListNoPreview = {
  tags: ['sidebar-ignore'],
  args: {
    theme: 'dark'
  },
  render: args => /*#__PURE__*/react.createElement(Container/* default */.A, {
    backgroundColor: args.theme === 'dark' ? 'black' : undefined,
    padding: args.theme === 'dark' ? '2' : undefined
  }, /*#__PURE__*/react.createElement(components_Attachments, args, mockFiles.map(file => /*#__PURE__*/react.createElement(Attachment/* default */.A, {
    showPreview: false,
    key: file.name,
    name: file === null || file === void 0 ? void 0 : file.name,
    fileSize: file.size,
    url: file.url,
    onRemove: () => alert('Removed')
  }))))
};
const DarkGridNoPreview = {
  tags: ['sidebar-ignore'],
  args: {
    variant: 'grid',
    theme: 'dark'
  },
  render: args => /*#__PURE__*/react.createElement(Container/* default */.A, {
    backgroundColor: args.theme === 'dark' ? 'black' : undefined,
    padding: args.theme === 'dark' ? '2' : undefined
  }, /*#__PURE__*/react.createElement(components_Attachments, args, mockFiles.map(file => /*#__PURE__*/react.createElement(Attachment/* default */.A, {
    showPreview: false,
    key: file.name,
    name: file === null || file === void 0 ? void 0 : file.name,
    fileSize: file.size,
    url: file.url,
    onRemove: () => alert('Removed')
  }))))
};
const meta = {
  title: 'Attachments/Attachment',
  render: args => /*#__PURE__*/react.createElement(Container/* default */.A, {
    backgroundColor: args.theme === 'dark' ? 'black' : undefined,
    padding: args.theme === 'dark' ? '2' : undefined
  }, /*#__PURE__*/react.createElement(components_Attachments, args, mockFiles.map(file => /*#__PURE__*/react.createElement(Attachment/* default */.A, {
    showPreview: true,
    key: file.name,
    name: file === null || file === void 0 ? void 0 : file.name,
    fileSize: file.size,
    url: file.url,
    onRemove: () => alert('Removed')
  })))),
  component: components_Attachments,
  decorators: [MobileContextDecorator]
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
Grid.parameters = {
  ...Grid.parameters,
  docs: {
    ...Grid.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  args: {\n    variant: 'grid'\n  }\n}",
      ...Grid.parameters?.docs?.source
    }
  }
};
WithCarousel.parameters = {
  ...WithCarousel.parameters,
  docs: {
    ...WithCarousel.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  parameters: {\n    docs: {\n      source: {\n        code: `\n<Carousel\n  width=\"98%\"\n  breakpoints={{\n    default: 4,\n  }}\n  scrollType=\"row\"\n>\n  <Arrows />\n  <Track autoSlidesWidth>\n    {mockFiles.map((file) => (\n      <Slide key={file.name}>\n        <Attachment\n          showPreview={true}\n          key={file.name}\n          name={file?.name}\n          fileSize={file.size}\n          url={file.url}\n          onRemove={() => alert('Removed')}\n          variant=\"grid\"\n        />\n      </Slide>\n    ))}\n  </Track>\n</Carousel>\n)`\n      }\n    }\n  },\n  render: () => <Carousel width=\"98%\" breakpoints={{\n    default: 4\n  }} scrollType=\"row\">\n      <Arrows />\n      <Track autoSlidesWidth>\n        {mockFiles.map(file => <Slide key={file.name}>\n            <Attachment showPreview={true} key={file.name} name={file?.name} fileSize={file.size} url={file.url} onRemove={() => alert('Removed')} variant=\"grid\" />\n          </Slide>)}\n      </Track>\n    </Carousel>\n}",
      ...WithCarousel.parameters?.docs?.source
    }
  }
};
WithoutPreviewList.parameters = {
  ...WithoutPreviewList.parameters,
  docs: {
    ...WithoutPreviewList.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => {\n    const [files, setFiles] = useState(mockFiles);\n    return <Attachments>\n        {files.map((file, index) => <Attachment key={file.name} name={file?.name} fileSize={file.size} url={file.url} onRemove={() => {\n        const updatedFiles = [...files];\n        updatedFiles.splice(index, 1);\n        setFiles(updatedFiles);\n      }} />)}\n      </Attachments>;\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `\nconst [files, setFiles] = useState(mockFiles);\n\nreturn  (\n  <Attachments>\n    {files.map((file, index) => (\n      <Attachment\n        key={file.name}\n        name={file?.name}\n        fileSize={file.size}\n        url={file.url}\n        onRemove={() => {\n          const updatedFiles = [...files];\n          updatedFiles.splice(index, 1);\n          setFiles(updatedFiles);\n        }} />\n    ))}\n  </Attachments>`\n      }\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const attachment = canvas.getByRole('group');\n    await userEvent.hover(attachment.children[0]);\n    await takeScreenshot();\n    const removeButton = attachment.getElementsByTagName('button')[0];\n    await userEvent.click(removeButton);\n    await takeScreenshot();\n  }\n}",
      ...WithoutPreviewList.parameters?.docs?.source
    }
  }
};
WithoutPreviewGrid.parameters = {
  ...WithoutPreviewGrid.parameters,
  docs: {
    ...WithoutPreviewGrid.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    variant: 'grid'\n  },\n  render: args => {\n    const [files, setFiles] = useState(mockFiles);\n    return <Attachments {...args}>\n        {files.map((file, index) => <Attachment key={file.name} name={file?.name} fileSize={file.size} url={file.url} onRemove={() => {\n        const updatedFiles = [...files];\n        updatedFiles.splice(index, 1);\n        setFiles(updatedFiles);\n      }} />)}\n      </Attachments>;\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `\nconst [files, setFiles] = useState(mockFiles);\n\nreturn (\n  <Attachments variant='grid'>\n    {files.map((file, index) => (\n      <Attachment\n        key={file.name}\n        name={file?.name}\n        fileSize={file.size}\n        url={file.url}\n        onRemove={() => {\n          const updatedFiles = [...files];\n          updatedFiles.splice(index, 1);\n          setFiles(updatedFiles);\n        }}\n      />\n    ))}\n  </Attachments>\n)`\n      }\n    }\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const attachment = canvas.getByRole('group');\n    await userEvent.hover(attachment.children[0]);\n    await takeScreenshot();\n    const removeButton = attachment.getElementsByTagName('button')[0];\n    await userEvent.click(removeButton);\n    await takeScreenshot();\n  }\n}",
      ...WithoutPreviewGrid.parameters?.docs?.source
    }
  }
};
Error.parameters = {
  ...Error.parameters,
  docs: {
    ...Error.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <Stack direction=\"column\">\n      <Attachments variant=\"grid\">\n        {mockFiles.slice(0, 2).map(file => <Attachment hasError error=\"Error message\" key={file.name} name={file?.name} onRemove={() => alert('Removed')}>\n            <AttachmentRetryBtn onClick={() => alert('Retry')} />\n          </Attachment>)}\n      </Attachments>\n\n      <Attachments>\n        {mockFiles.slice(0, 2).map(file => <Attachment hasError error=\"Error message\" key={file.name} name={file?.name} onRemove={() => alert('Removed')}>\n            <AttachmentRetryBtn onClick={() => alert('Retry')} />\n          </Attachment>)}\n      </Attachments>\n    </Stack>\n}",
      ...Error.parameters?.docs?.source
    }
  }
};
Single.parameters = {
  ...Single.parameters,
  docs: {
    ...Single.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: () => <Stack>\n      <Attachment showPreview key={mockFiles[1].name} name={mockFiles[1]?.name} fileSize={mockFiles[1].size} url={mockFiles[1].url} onRemove={() => alert('Removed')} variant=\"single\" />\n    </Stack>\n}",
      ...Single.parameters?.docs?.source
    }
  }
};
SingleError.parameters = {
  ...SingleError.parameters,
  docs: {
    ...SingleError.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: () => <Stack>\n      <Attachment hasError key={mockFiles[1].name} name={mockFiles[1]?.name} fileSize={mockFiles[1].size} url={mockFiles[1].url} width={400} height={400} onRemove={() => alert('Removed')} variant=\"single\">\n        <AttachmentRetryBtn onClick={() => alert('Retry')} />\n      </Attachment>\n    </Stack>\n}",
      ...SingleError.parameters?.docs?.source
    }
  }
};
SingleWithoutRemove.parameters = {
  ...SingleWithoutRemove.parameters,
  docs: {
    ...SingleWithoutRemove.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-ignore'],\n  render: () => <Stack>\n      <Attachment showPreview key={mockFiles[1].name} name={mockFiles[1]?.name} fileSize={mockFiles[1].size} url={mockFiles[1].url} variant=\"single\" />\n    </Stack>\n}",
      ...SingleWithoutRemove.parameters?.docs?.source
    }
  }
};
WithAttachmentStatus.parameters = {
  ...WithAttachmentStatus.parameters,
  docs: {
    ...WithAttachmentStatus.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'Attachment status is supported for single variant only.'\n      }\n    }\n  },\n  render: () => <Stack wrap=\"wrap\" gap=\"2\">\n      {AttachmentStatuses.map(status => <Attachment key={mockFiles[1].name} name={mockFiles[1]?.name} fileSize={mockFiles[1].size} url={mockFiles[1].url} width={208} height={144} variant=\"single\" status={status} />)}\n    </Stack>\n}",
      ...WithAttachmentStatus.parameters?.docs?.source
    }
  }
};
SingleWithAttachmentRetrieveBtn.parameters = {
  ...SingleWithAttachmentRetrieveBtn.parameters,
  docs: {
    ...SingleWithAttachmentRetrieveBtn.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  render: () => <Stack direction=\"column\">\n      <Attachment key={mockFiles[1].name} name={mockFiles[1]?.name} fileSize={mockFiles[1].size} url={mockFiles[1].url} width={208} height={144} variant=\"single\" status=\"archived\">\n        <AttachmentRetrieveBtn onClick={() => alert('Retrieve')} />\n      </Attachment>\n      <Attachment key={mockFiles[1].name} name={mockFiles[1]?.name} fileSize={mockFiles[1].size} url={mockFiles[1].url} width={208} height={144} variant=\"list\">\n        <AttachmentRetrieveBtn onClick={() => alert('Retrieve')} variant=\"list\" />\n      </Attachment>\n      <Attachment key={mockFiles[1].name} name={mockFiles[1]?.name} fileSize={mockFiles[1].size} url={mockFiles[1].url} width={208} height={144} variant=\"list\">\n        <AttachmentRetrieveBtn onClick={() => alert('Retrieve')} variant=\"list\" copies={{\n        retrieveButtonText: () => 'Custom retrieve text'\n      }} />\n      </Attachment>\n    </Stack>,\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    await new Promise(resolve => setTimeout(resolve, 300));\n    const attachmentContainers = Array.from(canvasElement.querySelectorAll('[tabindex=\"0\"]')) as HTMLElement[];\n    for (const container of attachmentContainers) {\n      await userEvent.hover(container, {\n        delay: 100\n      });\n    }\n    const retrieveButtons = canvas.getAllByText('Retrieve').filter(btn => btn.closest('button') || btn.getAttribute('role') === 'button');\n    const customRetrieveButtons = canvas.getAllByText('Custom retrieve text').filter(btn => btn.closest('button') || btn.getAttribute('role') === 'button');\n    const allRetrieveButtons = [...retrieveButtons, ...customRetrieveButtons];\n    for (let i = 0; i < allRetrieveButtons.length; i++) {\n      const button = allRetrieveButtons[i].closest('button') || allRetrieveButtons[i];\n      await userEvent.click(button as HTMLElement, {\n        delay: 800\n      });\n      await takeScreenshot();\n      const modal = document.getElementsByTagName('article')[0];\n      if (modal) {\n        const modalButtons = within(modal).getAllByRole('button');\n        const cancelButton = modalButtons.find(btn => btn.textContent?.toLowerCase().includes('cancel'));\n        if (cancelButton) {\n          await userEvent.click(cancelButton, {\n            delay: 500\n          });\n        }\n      }\n      const closedModal = document.getElementsByTagName('article')[0];\n      expect(closedModal).toBeUndefined();\n    }\n  }\n}",
      ...SingleWithAttachmentRetrieveBtn.parameters?.docs?.source
    }
  }
};
DarkListNoPreview.parameters = {
  ...DarkListNoPreview.parameters,
  docs: {
    ...DarkListNoPreview.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    theme: 'dark'\n  },\n  render: args => <Container backgroundColor={args.theme === 'dark' ? 'black' : undefined} padding={args.theme === 'dark' ? '2' : undefined}>\n      <Attachments {...args}>\n        {mockFiles.map(file => <Attachment showPreview={false} key={file.name} name={file?.name} fileSize={file.size} url={file.url} onRemove={() => alert('Removed')} />)}\n      </Attachments>\n    </Container>\n}",
      ...DarkListNoPreview.parameters?.docs?.source
    }
  }
};
DarkGridNoPreview.parameters = {
  ...DarkGridNoPreview.parameters,
  docs: {
    ...DarkGridNoPreview.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    variant: 'grid',\n    theme: 'dark'\n  },\n  render: args => <Container backgroundColor={args.theme === 'dark' ? 'black' : undefined} padding={args.theme === 'dark' ? '2' : undefined}>\n      <Attachments {...args}>\n        {mockFiles.map(file => <Attachment showPreview={false} key={file.name} name={file?.name} fileSize={file.size} url={file.url} onRemove={() => alert('Removed')} />)}\n      </Attachments>\n    </Container>\n}",
      ...DarkGridNoPreview.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","Grid","WithCarousel","WithoutPreviewList","WithoutPreviewGrid","Error","Single","SingleError","SingleWithoutRemove","WithAttachmentStatus","SingleWithAttachmentRetrieveBtn","DarkListNoPreview","DarkGridNoPreview"];

/***/ }),

/***/ "../attachments/src/components/Attachments/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ renderAttachmentsChildren)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");


const renderAttachmentsChildren = (children, _ref) => {
  let {
    variant,
    theme,
    setIsTooltipOpen
  } = _ref;
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.map(react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children), child => (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .renderChildren */ .s)(child, {
    variant,
    theme,
    setIsTooltipOpen
  }));
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

/***/ "../hooks/dist/esm/src/hooks/useConst/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

/**
 * Creates value exactly once.
 * `useMemo` doesn't guarantee this - https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily.
 */
const useConst = initial => {
  // We could also use `useState` but that's more
  // expensive internally due to reducer handling which we don't need.
  const valueRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  if (valueRef.current === null) {
    valueRef.current = initial();
  }
  return valueRef.current;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useConst);

/***/ }),

/***/ "../hooks/dist/esm/src/hooks/useElementSize/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ "../overlay/dist/esm/src/components/Modal/ModalBody/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Modal_ModalBody)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/ModalContext/index.js
var ModalContext = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalContext/index.js");
;// ../overlay/dist/esm/src/components/Modal/overlay/dist/esm/src/components/Modal/ModalBody/styles.ve.css.js.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../overlay/dist/esm/src/components/Modal/ModalBody/styles.ve.css.js.vanilla.css","source":"Ll8xeTZiOGM4MDpsYXN0LWNoaWxkIHsKICBwYWRkaW5nLWJvdHRvbTogMjRweDsKfQpAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkgewogIC5fMXk2YjhjODA6bGFzdC1jaGlsZCB7CiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDsKICB9Cn0="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../overlay/dist/esm/src/components/Modal/ModalBody/styles.ve.css.js

var containerStyle = '_1y6b8c80';
;// ../overlay/dist/esm/src/components/Modal/ModalBody/index.js




const ModalBody = _ref => {
  let {
    children,
    topPadding = false
  } = _ref;
  const {
    centered,
    isFullscreen
  } = (0,ModalContext/* useModalContext */.k)();
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    overflowY: "auto",
    direction: "column",
    gap: "0",
    height: isFullscreen ? '100%' : {
      default: '100%',
      md: 'auto'
    },
    paddingX: {
      default: '6',
      md: '8'
    },
    paddingTop: topPadding ? {
      default: '6',
      md: '8'
    } : '0',
    paddingBottom: "0",
    alignItems: centered ? 'center' : undefined,
    className: containerStyle
  }, children);
};
ModalBody.displayName = 'ModalBody';
/* harmony default export */ const Modal_ModalBody = (ModalBody);
;
ModalBody.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ModalBody"
};

/***/ }),

/***/ "../overlay/dist/esm/src/components/Modal/ModalContent/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Modal_ModalContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/components/Fade/index.js + 1 modules
var Fade = __webpack_require__("../transition/dist/esm/src/components/Fade/index.js");
// EXTERNAL MODULE: ../transition/dist/esm/src/components/SlideFade/index.js + 1 modules
var SlideFade = __webpack_require__("../transition/dist/esm/src/components/SlideFade/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/components/Portal/index.js + 1 modules
var Portal = __webpack_require__("../ui_utils/dist/esm/src/components/Portal/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js
var useIsomorphicLayoutEffect = __webpack_require__("../hooks/dist/esm/src/hooks/useIsomorphicLayoutEffect/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/hooks/useExitOnEscape/index.js
var useExitOnEscape = __webpack_require__("../overlay/dist/esm/src/hooks/useExitOnEscape/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Overlay/index.js + 1 modules
var Overlay = __webpack_require__("../overlay/dist/esm/src/components/Overlay/index.js");
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/ModalContext/index.js
var ModalContext = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalContext/index.js");
;// ../overlay/dist/esm/src/components/Modal/ModalContent/constants.js
const DIALOG_WIDTH = {
  sm: 520,
  md: 600,
  lg: 720,
  xl: 900,
  xxl: 1060
};
const MODAL_SIZES = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl'
};
const fullWidthProps = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
  borderRadius: 'none',
  maxHeight: 'unset',
  maxWidth: '100%',
  width: '100%'
};
// EXTERNAL MODULE: ../theme/dist/esm/src/atoms/styles.ve.css.js + 1 modules
var styles_ve_css = __webpack_require__("../theme/dist/esm/src/atoms/styles.ve.css.js");
;// ../overlay/dist/esm/src/components/Modal/ModalContent/utils.js


const getConditionalSize = size => {
  if (typeof size === 'object') {
    return (0,styles_ve_css/* mapResponsiveStyles */.d0)(size, value => DIALOG_WIDTH[value]);
  }
  return DIALOG_WIDTH[size || 'md'];
};
;// ../overlay/dist/esm/src/components/Modal/ModalContent/index.js
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










const ModalContent = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
    children,
    closeOnOverlayClick = true,
    initialFocusRef,
    renderWhenClosed = false,
    size = 'md',
    zIndex = 'overlay',
    closeOnEscapeKey = true,
    overlayTestId,
    disablePortal,
    onAnimationStart,
    onAnimationEnd,
    dataTrackTag = 'modal',
    dataTrackValue
  } = _ref;
  const contentRef = react.useRef(null);
  const {
    close,
    isOpen,
    isDark,
    isFullscreen
  } = (0,ModalContext/* useModalContext */.k)();
  (0,useIsomorphicLayoutEffect/* default */.A)(() => {
    if (contentRef.current && isOpen) {
      if (initialFocusRef !== null && initialFocusRef !== void 0 && initialFocusRef.current) {
        initialFocusRef.current.focus();
        return;
      }
      contentRef.current.focus();
    }
  }, [initialFocusRef, isOpen, contentRef]);
  (0,useExitOnEscape/* useExitOnEscape */.k)({
    enabled: closeOnEscapeKey,
    close,
    isOpen
  });
  const Wrapper = disablePortal ? react.Fragment : Portal/* default */.A;
  const wrapperProps = disablePortal ? undefined : {
    height: 0
  };
  return /*#__PURE__*/react.createElement(Wrapper, wrapperProps, /*#__PURE__*/react.createElement(Container/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    zIndex: zIndex,
    position: "relative",
    ref: ref
  }, /*#__PURE__*/react.createElement(Fade/* default */.A, {
    delay: {
      enter: 'fast1',
      exit: 'moderate1'
    },
    in: isOpen,
    unmountOnExit: !renderWhenClosed
  }, /*#__PURE__*/react.createElement(Overlay/* default */.A, {
    zIndex: "-1",
    lockBodyScroll: isOpen,
    onClick: closeOnOverlayClick ? close : undefined,
    dataTestId: overlayTestId
  })), /*#__PURE__*/react.createElement(SlideFade/* default */.A, {
    delay: "fast3",
    in: isOpen,
    unmountOnExit: !renderWhenClosed,
    onAnimationStart: onAnimationStart,
    onAnimationEnd: onAnimationEnd
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    width: "100%",
    pointerEvents: "none",
    gap: "0"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, _objectSpread({
    as: "article",
    direction: "column",
    gap: "0",
    backgroundColor: isDark ? 'black' : 'white',
    overflow: "hidden",
    maxHeight: "90vh",
    maxWidth: {
      default: '90vw',
      lg: '1060px'
    },
    borderRadius: isDark ? '2xl' : 'xl',
    width: getConditionalSize(size),
    "aria-modal": true,
    role: "dialog",
    style: {
      pointerEvents: 'auto'
    }
  }, isFullscreen && fullWidthProps), /*#__PURE__*/react.createElement(Stack/* default */.A, {
    ref: contentRef,
    tabIndex: -1,
    height: "100%",
    minHeight: 0,
    position: "relative",
    direction: "column",
    flex: "1",
    gap: "0"
  }, children))))));
});
ModalContent.displayName = 'ModalContent';
/* harmony default export */ const Modal_ModalContent = (ModalContent);
;
ModalContent.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ModalContent"
};

/***/ }),

/***/ "../overlay/dist/esm/src/components/Modal/ModalContext/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ ModalContext),
/* harmony export */   k: () => (/* binding */ useModalContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const ModalContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useModalContext = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ModalContext);
  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalContextProvider');
  }
  return context;
};

/***/ }),

/***/ "../overlay/dist/esm/src/components/Modal/ModalFooter/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalContext/index.js");



const ModalFooter = _ref => {
  let {
    children,
    justifyContent: justifyContentProp
  } = _ref;
  const {
    centered,
    isFullscreen
  } = (0,_ModalContext__WEBPACK_IMPORTED_MODULE_2__/* .useModalContext */ .k)();
  const defaultJustifyContent = centered ? 'center' : 'flexEnd';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    alignItems: "center",
    justifyContent: justifyContentProp !== null && justifyContentProp !== void 0 ? justifyContentProp : defaultJustifyContent,
    gap: "3",
    padding: {
      default: '6',
      md: '8'
    },
    borderTopWidth: isFullscreen ? 'sm' : undefined
  }, children);
};
ModalFooter.displayName = 'ModalFooter';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalFooter);
;
ModalFooter.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ModalFooter"
};

/***/ }),

/***/ "../overlay/dist/esm/src/components/Modal/ModalHeader/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _fiverr_private_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../typography/dist/esm/src/components/Heading/index.js");
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalContext/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../overlay/dist/esm/src/components/Modal/constants.js");
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






const ModalHeader = _ref => {
  let {
    children,
    floating = false
  } = _ref;
  const {
    centered,
    isDark
  } = (0,_ModalContext__WEBPACK_IMPORTED_MODULE_7__/* .useModalContext */ .k)();
  const closeButton = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .findChildByType */ .B)(children, _constants__WEBPACK_IMPORTED_MODULE_8__/* .MODAL_CLOSE_BTN_ID */ .g);
  const restOfChildren = (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .excludeChildrenByType */ .h)(children, _constants__WEBPACK_IMPORTED_MODULE_8__/* .MODAL_CLOSE_BTN_ID */ .g);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, _objectSpread(_objectSpread({
    position: floating ? 'absolute' : 'relative'
  }, floating && {
    top: 0,
    left: 0,
    right: 0
  }), {}, {
    paddingY: "4",
    paddingRight: "6",
    paddingLeft: {
      default: '6',
      md: '8'
    },
    gap: "0",
    color: isDark ? 'grey_300' : undefined
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    textAlign: centered ? 'center' : undefined,
    margin: "auto",
    flex: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_typography__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    as: "h4",
    marginTop: "2",
    color: isDark ? 'inherit' : undefined
  }, (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .renderChildren */ .s)(restOfChildren))), (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_1__/* .renderChildren */ .s)(closeButton));
};
ModalHeader.displayName = 'ModalHeader';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalHeader);
;
ModalHeader.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ModalHeader"
};

/***/ }),

/***/ "../overlay/dist/esm/src/components/Modal/ModalTrigger/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalContext/index.js");



const ModalTrigger = _ref => {
  let {
    children,
    as = 'span',
    dataTestId,
    isDisabled = false,
    fullWidth = false,
    dataTrackTag = 'modal_trigger',
    dataTrackValue
  } = _ref;
  const {
    open
  } = (0,_ModalContext__WEBPACK_IMPORTED_MODULE_2__/* .useModalContext */ .k)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    as: as,
    onClick: isDisabled ? undefined : open,
    "data-testid": dataTestId,
    width: fullWidth ? '100%' : undefined,
    "data-track-tag": dataTrackTag,
    "data-track-value": dataTrackValue
  }, children);
};
ModalTrigger.displayName = 'ModalTrigger';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalTrigger);
;
ModalTrigger.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ModalTrigger"
};

/***/ }),

/***/ "../overlay/dist/esm/src/components/Modal/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ MODAL_CLOSE_BTN_ID)
/* harmony export */ });
const MODAL_CLOSE_BTN_ID = 'ModalCloseBtnId';

/***/ }),

/***/ "../overlay/dist/esm/src/components/Modal/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Modal)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useElementSize/index.js + 1 modules
var useElementSize = __webpack_require__("../hooks/dist/esm/src/hooks/useElementSize/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../overlay/dist/esm/src/components/Modal/hooks/useIsFullscreen/index.js



const DEFAULT_FULL_SCREEN_BREAKPOINT = 'md';
const getFullscreenBreakpoint = _ref => {
  let {
    fullScreenBreakpoint,
    mobileFullScreen
  } = _ref;
  if (fullScreenBreakpoint !== undefined) {
    return fullScreenBreakpoint;
  }
  if (mobileFullScreen !== undefined) {
    return mobileFullScreen ? DEFAULT_FULL_SCREEN_BREAKPOINT : 'none';
  }
  return DEFAULT_FULL_SCREEN_BREAKPOINT;
};
const isFullscreenActive = _ref2 => {
  let {
    breakpoint,
    windowWidth
  } = _ref2;
  const breakpoints = themeVars/* numericBreakpoints */.Uf;
  if (breakpoint === 'none') {
    return false;
  }
  if (breakpoint === 'all') {
    return true;
  }
  if (breakpoint === 'sm' && windowWidth < breakpoints.sm) {
    return true;
  }
  if (breakpoint === 'md' && windowWidth < breakpoints.md) {
    return true;
  }
  return false;
};
const useIsFullscreen = (fullScreenBreakpoint, mobileFullScreen) => {
  (0,react.useEffect)(() => {
    if (mobileFullScreen !== undefined) {
      // eslint-disable-next-line no-console
      console.warn('Modal: The mobileFullScreen prop is deprecated, please use the fullScreenBreakpoint prop instead');
    }
  }, [mobileFullScreen]);
  const breakpoint = getFullscreenBreakpoint({
    fullScreenBreakpoint,
    mobileFullScreen
  });
  const {
    width: windowWidth
  } = (0,useElementSize/* default */.A)(typeof window !== 'undefined' ? window : null);
  return isFullscreenActive({
    breakpoint,
    windowWidth
  });
};
// EXTERNAL MODULE: ../overlay/dist/esm/src/components/Modal/ModalContext/index.js
var ModalContext = __webpack_require__("../overlay/dist/esm/src/components/Modal/ModalContext/index.js");
;// ../overlay/dist/esm/src/components/Modal/index.js



const Modal = _ref => {
  let {
    autoOpen = false,
    children,
    centered = false,
    isOpen,
    onClose = () => undefined,
    onOpen = () => undefined,
    fullScreenBreakpoint,
    mobileFullScreen,
    goExperimental = false,
    theme = 'light'
  } = _ref;
  const isDark = goExperimental || theme === 'dark';
  const [innerIsOpen, setInnerIsOpen] = react.useState(autoOpen);
  const isFullscreen = useIsFullscreen(fullScreenBreakpoint, mobileFullScreen);
  const close = react.useCallback(() => {
    setInnerIsOpen(false);
    onClose();
  }, [onClose]);
  const open = react.useCallback(() => {
    setInnerIsOpen(true);
    onOpen();
  }, [onOpen]);
  if (autoOpen && isOpen) {
    throw new Error("Modal: Don't use both autoOpen and isOpen together, autoOpen is only meant to be used with the trigger component");
  }
  return /*#__PURE__*/react.createElement(ModalContext/* ModalContext */.V.Provider, {
    value: {
      isOpen: isOpen !== null && isOpen !== void 0 ? isOpen : innerIsOpen,
      close,
      centered,
      open,
      isDark,
      isFullscreen
    }
  }, children);
};
Modal.displayName = 'Modal';
/* harmony default export */ const components_Modal = (Modal);
;
Modal.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Modal"
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

/***/ "../ui_utils/dist/esm/src/utils/getComponentProps/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Refresh.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const RefreshIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('RefreshIcon')
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
    d: "M14.75 8.818a6.75 6.75 0 1 1-.903-3.375m.528-3.375-.327 3.75-3.798-.375",
    vectorEffect: "non-scaling-stroke"
  }));
};
RefreshIcon.id = 'RefreshIcon';
RefreshIcon.displayName = 'RefreshIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RefreshIcon);
;
RefreshIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "RefreshIcon"
};

/***/ })

}]);
//# sourceMappingURL=9145.61cbd4da.iframe.bundle.js.map