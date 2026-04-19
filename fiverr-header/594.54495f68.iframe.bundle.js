"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[594],{

/***/ "../media/src/components/ImageCrop/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Primary: () => (/* binding */ Primary),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Camera.js
var Camera = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Camera.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryStack/index.js
var StoryStack = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryText/index.js
var StoryText = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryText/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-easy-crop@4.7.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-easy-crop/index.module.js + 1 modules
var index_module = __webpack_require__("../../node_modules/.pnpm/react-easy-crop@4.7.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-easy-crop/index.module.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js
var I18n = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/components/I18n/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
;// ../media/src/components/ImageCrop/constants.ts
const DEFAULT_CROP = {
  x: 0,
  y: 0
};
const DEFAULT_ASPECT_RATIO = 4 / 3;
const DEFAULT_SHAPE = 'rect';
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Typography/index.js
var Typography = __webpack_require__("../typography/dist/esm/src/components/Typography/index.js");
;// ../media/src/components/ImageCrop/Range/constants.ts
const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.1;
;// ../media/src/components/ImageCrop/media/src/components/ImageCrop/Range/styles.ve.css.ts.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../media/src/components/ImageCrop/Range/styles.ve.css.ts.vanilla.css","source":"LnZqdGR4MTA6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHsKICBhcHBlYXJhbmNlOiBub25lOwogIGJvcmRlcjogMXB4IHNvbGlkICMyMjIzMjU7CiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsKICBib3JkZXItcmFkaXVzOiA5OTk5cHg7CiAgd2lkdGg6IDI0cHg7CiAgaGVpZ2h0OiAyNHB4OwogIGJveC1zaGFkb3c6IDAgLjE0cHggMi4yOTI2NnB4IHJnYmEoMCwgMCwgMCwgLjAzMjMxMTQpLCAwIC4zN3B4IDQuNDI2MjZweCByZ2JhKDAsIDAsIDAsIC4wNDc2ODg2KSwgMCAzcHggN3B4IHJnYmEoMCwgMCwgMCwgLjA5KTsKICBwb3NpdGlvbjogcmVsYXRpdmU7Cn0="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../media/src/components/ImageCrop/Range/styles.ve.css.ts

var zoomRange = 'vjtdx10';
;// ../media/src/components/ImageCrop/Range/index.tsx





const Range = _ref => {
  let {
    zoom,
    onChange
  } = _ref;
  const zoomPercentage = (0,react.useMemo)(() => Math.floor((zoom - MIN_ZOOM) / (MAX_ZOOM - MIN_ZOOM) * 100), [zoom]);
  (0,react.useEffect)(() => {
    document.documentElement.style.setProperty('--crop-zoom', "".concat(zoomPercentage, "%"));
  }, [zoomPercentage]);
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    display: "flex",
    direction: "column"
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "label",
    htmlFor: "range",
    display: "flex",
    justifyContent: "spaceBetween",
    color: "grey_1100",
    lineHeight: "b_md",
    fontSize: "b_md",
    fontWeight: "semibold",
    marginBottom: "4",
    dataTrackTag: "image_crop_range",
    dataTrackValue: String(zoom)
  }, /*#__PURE__*/react.createElement(Typography/* default */.A, {
    as: "span"
  }, "Zoom"), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    as: "span"
  }, zoomPercentage, "%")), /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "input",
    id: "range",
    type: "range",
    value: zoom,
    min: MIN_ZOOM,
    max: MAX_ZOOM,
    step: ZOOM_STEP,
    height: "4px",
    backgroundColor: "grey_900",
    borderRadius: "md",
    width: "100%",
    "aria-labelledby": "Zoom",
    appearance: "none",
    onChange: e => {
      onChange(Number(e.target.value));
    },
    className: zoomRange
  }));
};
Range.displayName = 'Range';
/* harmony default export */ const ImageCrop_Range = (Range);
try {
    // @ts-ignore
    Range.displayName = "Range";
    // @ts-ignore
    Range.__docgenInfo = { "description": "", "displayName": "Range", "props": { "zoom": { "defaultValue": null, "description": "", "name": "zoom", "required": true, "type": { "name": "number" } }, "onChange": { "defaultValue": null, "description": "", "name": "onChange", "required": true, "type": { "name": "(zoom: number) => void" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../media/src/components/ImageCrop/Range/index.tsx#Range"] = { docgenInfo: Range.__docgenInfo, name: "Range", path: "../media/src/components/ImageCrop/Range/index.tsx#Range" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../media/src/components/ImageCrop/index.tsx







const ImageCrop = _ref => {
  let {
    aspectRatio = DEFAULT_ASPECT_RATIO,
    shape = DEFAULT_SHAPE,
    src,
    crop: _crop = DEFAULT_CROP,
    onChange,
    width = '100%',
    height = '220px',
    dataTrackTag = 'image_crop',
    dataTrackValue
  } = _ref;
  const [crop, setCrop] = (0,react.useState)(_crop);
  const [cropSize, setCropSize] = (0,react.useState)({
    width: 0,
    height: 0
  });
  const [zoom, setZoom] = (0,react.useState)(1);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Box/* default */.A, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue,
    width: width,
    height: height,
    backgroundColor: "black",
    position: "relative",
    marginBottom: "3",
    flex: 1
  }, /*#__PURE__*/react.createElement(index_module/* default */.Ay, {
    image: src,
    crop: crop,
    cropSize: cropSize,
    cropShape: shape,
    zoom: zoom,
    onCropChange: setCrop,
    onCropComplete: onChange,
    onZoomChange: setZoom,
    onMediaLoaded: _ref2 => {
      let {
        width,
        height
      } = _ref2;
      if (shape === 'round') {
        const diameter = Math.min(width, height);
        setCropSize({
          width: diameter,
          height: diameter
        });
      } else {
        const cropHeight = width / aspectRatio;
        setCropSize({
          width,
          height: Math.min(cropHeight, height)
        });
      }
    }
  })), /*#__PURE__*/react.createElement(Text/* default */.A, {
    marginBottom: "8",
    textAlign: "center",
    width: "100%",
    color: "bodySecondary"
  }, /*#__PURE__*/react.createElement(I18n/* I18n */.F, {
    k: "media.imageCrop.dragImage"
  })), /*#__PURE__*/react.createElement(ImageCrop_Range, {
    zoom: zoom,
    onChange: setZoom
  }));
};
ImageCrop.displayName = 'ImageCrop';
/* harmony default export */ const components_ImageCrop = (ImageCrop);
try {
    // @ts-ignore
    ImageCrop.displayName = "ImageCrop";
    // @ts-ignore
    ImageCrop.__docgenInfo = { "description": "", "displayName": "ImageCrop", "props": { "aspectRatio": { "defaultValue": { value: "4 / 3" }, "description": "Aspect of the cropper.\nIt's ratio between its width and its height.\nDefaults to 4/3.", "name": "aspectRatio", "required": false, "type": { "name": "number" } }, "shape": { "defaultValue": { value: "rect" }, "description": "Shape of the crop area.\nDefaults to 'rect'.", "name": "shape", "required": false, "type": { "name": "enum", "value": [{ "value": "\"rect\"" }, { "value": "\"round\"" }] } }, "crop": { "defaultValue": null, "description": "Position of the media.\nDefaults to { x: 0, y: 0 } or center the media under the cropper.", "name": "crop", "required": false, "type": { "name": "Point" } }, "src": { "defaultValue": null, "description": "The image to be cropped.", "name": "src", "required": true, "type": { "name": "string" } }, "onChange": { "defaultValue": null, "description": "Callback function.\nIt will be passed the corresponding cropped area { x, y, height, width } as an argument.", "name": "onChange", "required": true, "type": { "name": "(area: Area) => void" } }, "height": { "defaultValue": { value: "220px" }, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": { value: "100%" }, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "dataTrackTag": { "defaultValue": { value: "image_crop" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../media/src/components/ImageCrop/index.tsx#ImageCrop"] = { docgenInfo: ImageCrop.__docgenInfo, name: "ImageCrop", path: "../media/src/components/ImageCrop/index.tsx#ImageCrop" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../media/src/components/ImageCrop/stories/index.stories.tsx
const _excluded = ["shape"];
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




const Demo = _ref => {
  let {
      shape
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const [image, setImage] = (0,react.useState)('');
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    alignItems: "center",
    position: "relative",
    marginBottom: "6"
  }, /*#__PURE__*/react.createElement(Camera/* default */.A, {
    color: "grey_1100"
  }), /*#__PURE__*/react.createElement(StoryText/* default */.A, {
    as: "label",
    htmlFor: "myImage",
    decoration: "underline",
    cursor: "pointer"
  }, "Upload new image"), /*#__PURE__*/react.createElement("input", {
    type: "file",
    style: {
      display: 'none'
    },
    id: "myImage",
    name: "myImage",
    onChange: event => {
      var _event$target$files;
      const file = (_event$target$files = event.target.files) === null || _event$target$files === void 0 ? void 0 : _event$target$files[0];
      if (file) {
        setImage(URL.createObjectURL(file));
      }
    }
  })), image && /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
    height: "500px",
    display: "block",
    marginBottom: "9"
  }, /*#__PURE__*/react.createElement(components_ImageCrop, _extends({}, rest, {
    shape: shape,
    src: image,
    onChange: () => ({})
  }))));
};
const Primary = {
  tags: ['sidebar-ignore']
};
const meta = {
  title: 'Media/ImageCrop',
  component: components_ImageCrop,
  args: {
    shape: 'rect'
  },
  parameters: {
    docs: {
      source: {
        code: "const [image, setImage] = useState('');\n\nreturn (\n    <>\n      <StoryStack alignItems=\"center\" position=\"relative\" marginBottom=\"6\">\n        <CameraIcon color={grey_1100} />\n        <StoryText as=\"label\" htmlFor=\"myImage\" decoration=\"underline\" cursor=\"pointer\">\n          Upload new image\n        </StoryText>\n        <input\n          type=\"file\"\n          style={{ display: 'none' }}\n          id=\"myImage\"\n          name=\"myImage\"\n          onChange={(event) => {\n            const file = event.target.files?.[0];\n            if (file) {\n              setImage(URL.createObjectURL(file));\n            }\n          }}\n        />\n      </StoryStack>\n      {image && (\n        <StoryStack height=\"500px\" display=\"block\" marginBottom=\"9\">\n          <ImageCrop shape={shape} src={image} onChange={() => ({})} />\n        </StoryStack>\n      )}\n    </>\n);"
      }
    }
  },
  render: args => /*#__PURE__*/react.createElement(Demo, args)
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
};;const __namedExportsOrder = ["Primary"];

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

/***/ "../storybook_helpers/dist/esm/src/components/StoryText/index.js":
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


const StoryText = _ref => {
  let {
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    as: "p",
    fontWeight: "normal",
    color: "grey_900",
    fontFamily: "primary",
    fontSize: "b_md",
    lineHeight: "b_md"
  }, props), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoryText);
;
StoryText.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StoryText"
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

/***/ }),

/***/ "../visuals/dist/esm/src/components/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Camera.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const CameraIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('CameraIcon')
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
    d: "M4.963 3.95H2.6A1.35 1.35 0 0 0 1.25 5.3v7.425c0 .746.604 1.35 1.35 1.35h10.8a1.35 1.35 0 0 0 1.35-1.35V5.3a1.35 1.35 0 0 0-1.35-1.35h-2.363m.338 1.013-.859-2.576a.675.675 0 0 0-.64-.462H6.124a.675.675 0 0 0-.64.462l-.859 2.576m5.74 4.387a2.363 2.363 0 1 1-4.726-.001 2.363 2.363 0 0 1 4.725.001",
    vectorEffect: "non-scaling-stroke"
  }));
};
CameraIcon.id = 'CameraIcon';
CameraIcon.displayName = 'CameraIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CameraIcon);
;
CameraIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CameraIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ pascalToSnake)
/* harmony export */ });
const pascalToSnake = str => str.replace(/[A-Z]/g, (letter, index) => index === 0 ? letter.toLowerCase() : "_".concat(letter.toLowerCase()));

/***/ })

}]);
//# sourceMappingURL=594.54495f68.iframe.bundle.js.map