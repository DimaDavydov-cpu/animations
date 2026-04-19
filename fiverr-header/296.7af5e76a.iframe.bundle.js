"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[296],{

/***/ "../media/dist/esm/src/components/Video/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Video)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/PauseSolid.js
var PauseSolid = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/PauseSolid.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/PlaySolid.js
var PlaySolid = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/PlaySolid.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/SoundMuted.js
var SoundMuted = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/SoundMuted.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/SoundMax.js
var SoundMax = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/SoundMax.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js
var translate = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+i18n-react@3.5.2/node_modules/@fiverr-private/i18n-react/dist/esm/src/translate/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../button/dist/esm/src/components/IconButton/index.js
var IconButton = __webpack_require__("../button/dist/esm/src/components/IconButton/index.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/theme.ve.css.js
var theme_ve_css = __webpack_require__("../theme/dist/esm/src/theme.ve.css.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/shared/themeVars/index.js
var themeVars = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
;// ../media/dist/esm/src/components/Video/components/CustomControls/CircularProgress.js


const containerSize = 32;
const radius = containerSize / 2;
const strokeWidth = 2;
const CircularProgress = _ref => {
  let {
    percentage
  } = _ref;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - percentage * circumference;
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    display: "flex",
    position: "absolute",
    width: containerSize,
    height: containerSize
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "svg",
    transform: "rotate(-180deg)",
    top: 0,
    left: 0,
    position: "absolute",
    height: radius * 2,
    width: radius * 2
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "circle",
    transition: "stroke-dashoffset 0.35s",
    transform: "rotate(90deg)",
    style: {
      transformOrigin: 'center'
    },
    stroke: themeVars/* colors */.Tj.grey_900,
    fill: themeVars/* colors */.Tj.transparent,
    strokeWidth: strokeWidth,
    r: normalizedRadius,
    cx: radius,
    cy: radius
  }), /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "circle",
    transition: "stroke-dashoffset 0.35s",
    transform: "rotate(90deg)",
    stroke: themeVars/* colors */.Tj.white,
    fill: themeVars/* colors */.Tj.transparent,
    strokeWidth: strokeWidth,
    strokeDasharray: "".concat(circumference, " ").concat(circumference),
    style: {
      strokeDashoffset,
      transformOrigin: 'center'
    },
    r: normalizedRadius,
    cx: radius,
    cy: radius
  })));
};
CircularProgress.displayName = 'CircularProgress';
/* harmony default export */ const CustomControls_CircularProgress = (CircularProgress);
;
CircularProgress.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CircularProgress"
};
;// ../media/dist/esm/src/components/Video/components/CustomControls/ControlsIconButton.js





const ControlsIconButton = _ref => {
  let {
    children,
    onClick,
    percentagePlayed,
    ariaLabel
  } = _ref;
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    borderRadius: "circle",
    height: 32,
    width: 32,
    backgroundColor: "grey_1200",
    opacity: '0.8',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    transition: "opacity ".concat(theme_ve_css/* tokens */.L.animationDuration.slow1)
  }, !(0,lodash.isNil)(percentagePlayed) && /*#__PURE__*/react.createElement(CustomControls_CircularProgress, {
    percentage: percentagePlayed
  }), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    variant: "ghost",
    shape: "circle",
    onClick: onClick,
    size: "xs",
    "aria-label": ariaLabel,
    background: {
      default: 'transparent',
      hover: 'transparent',
      active: 'transparent'
    }
  }, children));
};
ControlsIconButton.displayName = 'ControlsIconButton';
/* harmony default export */ const CustomControls_ControlsIconButton = (ControlsIconButton);
;
ControlsIconButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ControlsIconButton"
};
;// ../media/dist/esm/src/components/Video/components/CustomControls/index.js





const CustomControls = _ref => {
  let {
    videoRef,
    setIsMuted,
    isMuted,
    isPlaying,
    setIsPlaying
  } = _ref;
  const [percentagePlayed, setPercentagePlayed] = (0,react.useState)(0);
  const mediaElement = videoRef.current;
  (0,react.useEffect)(() => {
    if (mediaElement) {
      const handleTimeUpdate = () => {
        setPercentagePlayed(mediaElement.currentTime / mediaElement.duration);
      };
      const handleEnded = () => {
        setIsPlaying(false);
      };
      mediaElement.addEventListener('timeupdate', handleTimeUpdate);
      mediaElement.addEventListener('ended', handleEnded);
      return () => {
        mediaElement.removeEventListener('timeupdate', handleTimeUpdate);
        mediaElement.removeEventListener('ended', handleEnded);
      };
    }
  }, [mediaElement, setIsPlaying]);
  const handleMuteClick = e => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  const handlePlayClick = e => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    height: "100%",
    position: "absolute",
    width: "100%",
    boxSizing: "borderBox",
    zIndex: "1",
    display: "flex",
    alignItems: "flexEnd"
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    boxSizing: "borderBox",
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingX: "3",
    paddingBottom: "3",
    gap: "2"
  }, /*#__PURE__*/react.createElement(CustomControls_ControlsIconButton, {
    onClick: handlePlayClick,
    percentagePlayed: percentagePlayed,
    ariaLabel: (0,translate/* translate */.T)('media.video.togglePlay')
  }, isPlaying ? /*#__PURE__*/react.createElement(PauseSolid/* default */.A, {
    size: "sm",
    color: "white"
  }) : /*#__PURE__*/react.createElement(PlaySolid/* default */.A, {
    size: "sm",
    color: "white"
  })), /*#__PURE__*/react.createElement(CustomControls_ControlsIconButton, {
    onClick: handleMuteClick,
    ariaLabel: (0,translate/* translate */.T)('media.video.toggleMute')
  }, isMuted ? /*#__PURE__*/react.createElement(SoundMuted/* default */.A, {
    size: "sm",
    color: "white"
  }) : /*#__PURE__*/react.createElement(SoundMax/* default */.A, {
    size: "sm",
    color: "white"
  }))));
};
CustomControls.displayName = 'CustomControls';
/* harmony default export */ const components_CustomControls = (CustomControls);
;
CustomControls.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CustomControls"
};
;// ../media/dist/esm/src/components/Video/components/Sources/index.js

const Sources = _ref => {
  let {
    sources
  } = _ref;
  return /*#__PURE__*/react.createElement(react.Fragment, null, sources.map(_ref2 => {
    let {
      src,
      type
    } = _ref2;
    return /*#__PURE__*/react.createElement("source", {
      role: "source",
      key: Math.floor(Math.random() * 100),
      src: src,
      type: type
    });
  }));
};
/* harmony default export */ const components_Sources = (Sources);
;
Sources.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Sources"
};
// EXTERNAL MODULE: ../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js + 1 modules
var getContext = __webpack_require__("../../node_modules/.pnpm/@fiverr-private+fiverr_context@1.7.0/node_modules/@fiverr-private/fiverr_context/dist/esm/src/FiverrContext/withBrowserContext/getContext.js");
;// ../media/dist/esm/src/components/Video/components/Subtitle/index.js

const Subtitle = _ref => {
  let {
    src,
    label,
    srcLang,
    active = false
  } = _ref;
  return /*#__PURE__*/react.createElement("track", {
    role: "track",
    label: label,
    srcLang: srcLang,
    src: src,
    default: active,
    kind: "subtitles"
  });
};
/* harmony default export */ const components_Subtitle = (Subtitle);
;
Subtitle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Subtitle"
};
;// ../media/dist/esm/src/components/Video/components/Subtitles/index.js
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



const Subtitles = _ref => {
  let {
    subtitles
  } = _ref;
  const {
    locale
  } = (0,getContext/* default */.A)();
  const filteredSubtitles = (0,react.useMemo)(() => {
    const withActiveLocale = subtitle => {
      const {
        srcLang
      } = subtitle;
      return _objectSpread(_objectSpread({}, subtitle), {}, {
        active: locale === srcLang
      });
    };
    return subtitles.map(withActiveLocale);
  }, [subtitles, locale]);
  return /*#__PURE__*/react.createElement(react.Fragment, null, filteredSubtitles.map(_ref2 => {
    let {
      src,
      label,
      srcLang,
      active
    } = _ref2;
    return /*#__PURE__*/react.createElement(components_Subtitle, {
      key: src,
      src: src,
      label: label,
      srcLang: srcLang,
      active: active
    });
  }));
};
/* harmony default export */ const components_Subtitles = (Subtitles);
;
Subtitles.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Subtitles"
};
;// ../media/dist/esm/src/components/Video/index.js
const _excluded = ["controls", "sources", "poster", "preload", "autoPlay", "width", "objectFit", "subtitles", "playOnHover", "withHoverActions", "muted", "onMouseEnter", "onMouseLeave", "onMouseOut", "preventHoverPause", "dataTrackTag"];
function Video_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Video_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? Video_ownKeys(Object(t), !0).forEach(function (r) {
      Video_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Video_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function Video_defineProperty(e, r, t) {
  return (r = Video_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Video_toPropertyKey(t) {
  var i = Video_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function Video_toPrimitive(t, r) {
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





const Video = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
      controls = true,
      sources = [],
      poster = '',
      preload = '',
      autoPlay = false,
      width = '100%',
      objectFit = 'cover',
      subtitles = [],
      playOnHover,
      withHoverActions = true,
      muted,
      onMouseEnter,
      onMouseLeave,
      onMouseOut,
      preventHoverPause,
      dataTrackTag = 'video'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  const videoRef = (0,react.useRef)(null);
  const [isMuted, setIsMuted] = (0,react.useState)(playOnHover ? true : muted);
  const [isPlaying, setIsPlaying] = (0,react.useState)(false);
  const [isAssetsLoaded, setIsAssetsLoaded] = (0,react.useState)(false);
  const includeHoverActions = playOnHover && withHoverActions;
  (0,react.useImperativeHandle)(ref, () => videoRef.current);
  const handleMouseEnter = e => {
    if (playOnHover) {
      var _videoRef$current;
      (_videoRef$current = videoRef.current) === null || _videoRef$current === void 0 || _videoRef$current.play();
      setIsPlaying(true);
      setIsAssetsLoaded(true);
    }
    onMouseEnter === null || onMouseEnter === void 0 || onMouseEnter(e);
  };
  const handleMouseOut = e => {
    if (playOnHover && isPlaying && !(preventHoverPause !== null && preventHoverPause !== void 0 && preventHoverPause(e))) {
      var _videoRef$current2;
      (_videoRef$current2 = videoRef.current) === null || _videoRef$current2 === void 0 || _videoRef$current2.pause();
      setIsPlaying(false);
    }
    onMouseOut === null || onMouseOut === void 0 || onMouseOut(e);
  };
  const handleMouseLeave = e => {
    if (playOnHover && isPlaying && !(preventHoverPause !== null && preventHoverPause !== void 0 && preventHoverPause(e))) {
      var _videoRef$current3;
      (_videoRef$current3 = videoRef.current) === null || _videoRef$current3 === void 0 || _videoRef$current3.pause();
      setIsPlaying(false);
    }
    onMouseLeave === null || onMouseLeave === void 0 || onMouseLeave(e);
  };
  const Wrapper = includeHoverActions ? Box/* default */.A : react.Fragment;
  const wrapperProps = includeHoverActions ? {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  } : {};
  return /*#__PURE__*/react.createElement(Wrapper, wrapperProps, includeHoverActions && /*#__PURE__*/react.createElement(components_CustomControls, {
    videoRef: videoRef,
    isMuted: isMuted,
    setIsMuted: setIsMuted,
    isPlaying: isPlaying,
    setIsPlaying: setIsPlaying
  }), /*#__PURE__*/react.createElement(Box/* default */.A, Video_objectSpread({
    as: "video",
    objectFit: objectFit,
    ref: videoRef,
    autoPlay: autoPlay,
    controls: playOnHover ? false : controls,
    muted: isMuted,
    poster: poster,
    preload: preload,
    crossOrigin: "anonymous",
    role: "video",
    width: width,
    onMouseEnter: includeHoverActions ? undefined : handleMouseEnter,
    onMouseLeave: includeHoverActions ? undefined : handleMouseLeave,
    onMouseOut: handleMouseOut,
    dataTrackTag: dataTrackTag
  }, restProps), (!playOnHover || isAssetsLoaded) && /*#__PURE__*/react.createElement(components_Sources, {
    sources: sources
  }), /*#__PURE__*/react.createElement(components_Subtitles, {
    subtitles: subtitles
  })));
});
Video.displayName = 'Video';
/* harmony default export */ const components_Video = (Video);
;
Video.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Video"
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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/PauseSolid.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const PauseSolidIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('PauseSolidIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    fill: _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .Tj[color],
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4 4a.667.667 0 0 1 .667-.667H6A.667.667 0 0 1 6.667 4v8a.667.667 0 0 1-.667.666H4.667A.667.667 0 0 1 4 12zM9.334 4A.667.667 0 0 1 10 3.333h1.334A.667.667 0 0 1 12 4v8a.667.667 0 0 1-.666.666H10A.667.667 0 0 1 9.334 12z"
  }));
};
PauseSolidIcon.id = 'PauseSolidIcon';
PauseSolidIcon.displayName = 'PauseSolidIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PauseSolidIcon);
;
PauseSolidIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PauseSolidIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/PlaySolid.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const PlaySolidIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('PlaySolidIcon')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    height: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SYSTEM_ICON_SIZES */ .bh[size],
    fill: _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* .colors */ .Tj[color],
    viewBox: "0 0 16 16",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M3.5 3.86c0-.913 1-1.472 1.778-.994l6.728 4.14c.74.456.74 1.532 0 1.988l-6.728 4.14A1.167 1.167 0 0 1 3.5 12.14z",
    clipRule: "evenodd"
  }));
};
PlaySolidIcon.id = 'PlaySolidIcon';
PlaySolidIcon.displayName = 'PlaySolidIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaySolidIcon);
;
PlaySolidIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PlaySolidIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/SoundMax.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const SoundMaxIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('SoundMaxIcon')
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
    d: "M11.375 6.475A3.33 3.33 0 0 1 12.05 8.5a3.33 3.33 0 0 1-.675 2.025m2.025-5.4c.844.922 1.35 2.096 1.35 3.375s-.506 2.453-1.35 3.375M4.625 6.137H2.6a1.35 1.35 0 0 0-1.35 1.35v2.025c0 .746.604 1.35 1.35 1.35h2.025L9.35 13.9V3.1z",
    vectorEffect: "non-scaling-stroke"
  }));
};
SoundMaxIcon.id = 'SoundMaxIcon';
SoundMaxIcon.displayName = 'SoundMaxIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SoundMaxIcon);
;
SoundMaxIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SoundMaxIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/SoundMuted.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const SoundMutedIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('SoundMutedIcon')
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
    d: "m12.05 7.15 2.7 2.7m-2.7 0 2.7-2.7M4.625 6.137H2.6a1.35 1.35 0 0 0-1.35 1.35v2.025c0 .746.604 1.35 1.35 1.35h2.025L9.35 13.9V3.1z",
    vectorEffect: "non-scaling-stroke"
  }));
};
SoundMutedIcon.id = 'SoundMutedIcon';
SoundMutedIcon.displayName = 'SoundMutedIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SoundMutedIcon);
;
SoundMutedIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SoundMutedIcon"
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
//# sourceMappingURL=296.7af5e76a.iframe.bundle.js.map