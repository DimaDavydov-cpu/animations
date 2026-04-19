"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[8145],{

/***/ "../media/src/components/QRCode/stories/index.stories.tsx":
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/qrcode.react@3.2.0_react@17.0.2/node_modules/qrcode.react/lib/esm/index.js
var esm = __webpack_require__("../../node_modules/.pnpm/qrcode.react@3.2.0_react@17.0.2/node_modules/qrcode.react/lib/esm/index.js");
;// ../media/src/components/QRCode/constants.ts
const DEFAULT_SIZE = 100;
const QUALITY_LEVEL = 'H';
const ROLE = 'img';
const ICON_RATIO = 0.25;

// IMPORTANT: in case of brand update this image should be replaced manually
const DEFAULT_ICON_IMAGE_URL = 'https://fiverr-res.cloudinary.com/npm-assets/layout-server/favicon.52df53a.ico';
;// ../media/src/components/QRCode/utils.ts

const calculateIconSize = size => Math.round(size * ICON_RATIO);
const generateImageSettings = size => {
  const iconSize = calculateIconSize(size);
  return {
    src: DEFAULT_ICON_IMAGE_URL,
    excavate: true,
    height: iconSize,
    width: iconSize
  };
};
;// ../media/src/components/QRCode/index.tsx




const QRCode = _ref => {
  let {
    url,
    size = DEFAULT_SIZE,
    ariaLabel,
    dataTrackTag = 'qrcode',
    dataTrackValue
  } = _ref;
  const imageSettings = (0,react.useMemo)(() => generateImageSettings(size), [size]);
  return /*#__PURE__*/react.createElement(esm/* QRCodeSVG */.hp, {
    value: url,
    size: size,
    level: QUALITY_LEVEL,
    "aria-label": ariaLabel,
    role: ROLE,
    imageSettings: imageSettings,
    "data-track-tag": dataTrackTag,
    "data-track-value": dataTrackValue
  });
};
QRCode.displayName = 'QRCode';
/* harmony default export */ const components_QRCode = (QRCode);
try {
    // @ts-ignore
    QRCode.displayName = "QRCode";
    // @ts-ignore
    QRCode.__docgenInfo = { "description": "", "displayName": "QRCode", "props": { "url": { "defaultValue": null, "description": "The link on which the QR image which be encoded upon", "name": "url", "required": true, "type": { "name": "string" } }, "size": { "defaultValue": { value: "100" }, "description": "This value will define the dimensions of the QR code", "name": "size", "required": false, "type": { "name": "number" } }, "ariaLabel": { "defaultValue": null, "description": "An aria label to placed on the SVG element itself", "name": "ariaLabel", "required": false, "type": { "name": "string" } }, "dataTrackTag": { "defaultValue": { value: "qrcode" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../media/src/components/QRCode/index.tsx#QRCode"] = { docgenInfo: QRCode.__docgenInfo, name: "QRCode", path: "../media/src/components/QRCode/index.tsx#QRCode" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../media/src/components/QRCode/stories/index.stories.tsx

const defaultArgs = {
  url: 'https://www.fiverr.com/'
};
const Primary = {
  tags: ['sidebar-ignore', 'snapshot-delayed:200']
};
const meta = {
  args: defaultArgs,
  title: 'Media/QRCode',
  component: components_QRCode
};
/* harmony default export */ const index_stories = (meta);
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore', 'snapshot-delayed:200']\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary"];

/***/ })

}]);
//# sourceMappingURL=components-QRCode-stories-index-stories.10a8df57.iframe.bundle.js.map