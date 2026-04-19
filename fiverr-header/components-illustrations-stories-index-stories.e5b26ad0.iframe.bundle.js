(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[454],{

/***/ "../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ assignInlineVars)
});

// UNUSED EXPORTS: setElementVars

;// ../../node_modules/.pnpm/@vanilla-extract+private@1.0.6/node_modules/@vanilla-extract/private/dist/vanilla-extract-private.esm.js
function vanilla_extract_private_esm_getVarName(variable) {
  var matches = variable.match(/^var\((.*)\)$/);
  if (matches) {
    return matches[1];
  }
  return variable;
}

function vanilla_extract_private_esm_get(obj, path) {
  var result = obj;
  for (var key of path) {
    if (!(key in result)) {
      throw new Error("Path ".concat(path.join(' -> '), " does not exist in object"));
    }
    result = result[key];
  }
  return result;
}

function vanilla_extract_private_esm_walkObject(obj, fn) {
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var clone = {};
  for (var key in obj) {
    var _value = obj[key];
    var currentPath = [...path, key];
    if (typeof _value === 'string' || typeof _value === 'number' || _value == null) {
      clone[key] = fn(_value, currentPath);
    } else if (typeof _value === 'object' && !Array.isArray(_value)) {
      clone[key] = vanilla_extract_private_esm_walkObject(_value, fn, currentPath);
    } else {
      console.warn("Skipping invalid key \"".concat(currentPath.join('.'), "\". Should be a string, number, null or object. Received: \"").concat(Array.isArray(_value) ? 'Array' : typeof _value, "\""));
    }
  }
  return clone;
}



;// ../../node_modules/.pnpm/@vanilla-extract+dynamic@2.1.2/node_modules/@vanilla-extract/dynamic/dist/vanilla-extract-dynamic.esm.js


function assignInlineVars(varsOrContract, tokens) {
  var styles = {};
  if (typeof tokens === 'object') {
    var _contract = varsOrContract;
    vanilla_extract_private_esm_walkObject(tokens, (value, path) => {
      if (value == null) {
        return;
      }
      var varName = vanilla_extract_private_esm_get(_contract, path);
      styles[vanilla_extract_private_esm_getVarName(varName)] = String(value);
    });
  } else {
    var _vars = varsOrContract;
    for (var varName in _vars) {
      var value = _vars[varName];
      if (value == null) {
        continue;
      }
      styles[vanilla_extract_private_esm_getVarName(varName)] = value;
    }
  }
  Object.defineProperty(styles, 'toString', {
    value: function value() {
      return Object.keys(this).map(key => "".concat(key, ":").concat(this[key])).join(';');
    },
    writable: false
  });
  return styles;
}

function setVar(element, variable, value) {
  element.style.setProperty(getVarName(variable), value);
}
function setElementVars(element, varsOrContract, tokens) {
  if (typeof tokens === 'object') {
    var _contract = varsOrContract;
    walkObject(tokens, (value, path) => {
      if (value == null) {
        return;
      }
      setVar(element, get(_contract, path), String(value));
    });
  } else {
    var _vars = varsOrContract;
    for (var varName in _vars) {
      var value = _vars[varName];
      if (value == null) {
        continue;
      }
      setVar(element, varName, _vars[varName]);
    }
  }
}




/***/ }),

/***/ "../../node_modules/.pnpm/@vanilla-extract+sprinkles@1.6.3_@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0_/node_modules/@vanilla-extract/sprinkles/createRuntimeSprinkles/dist/vanilla-extract-sprinkles-createRuntimeSprinkles.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: () => (/* binding */ createSprinkles)
});

// UNUSED EXPORTS: createAtomsFn

;// ../../node_modules/.pnpm/@vanilla-extract+sprinkles@1.6.3_@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0_/node_modules/@vanilla-extract/sprinkles/dist/createSprinkles-74286718.esm.js
function toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == typeof i ? i : String(i);
}

function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
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
function _objectSpread2(e) {
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

var createSprinkles_74286718_esm_createSprinkles = composeStyles => function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var sprinklesStyles = Object.assign({}, ...args.map(a => a.styles));
  var sprinklesKeys = Object.keys(sprinklesStyles);
  var shorthandNames = sprinklesKeys.filter(property => 'mappings' in sprinklesStyles[property]);
  var sprinklesFn = props => {
    var classNames = [];
    var shorthands = {};
    var nonShorthands = _objectSpread2({}, props);
    var hasShorthands = false;
    for (var shorthand of shorthandNames) {
      var value = props[shorthand];
      if (value != null) {
        var sprinkle = sprinklesStyles[shorthand];
        hasShorthands = true;
        for (var propMapping of sprinkle.mappings) {
          shorthands[propMapping] = value;
          if (nonShorthands[propMapping] == null) {
            delete nonShorthands[propMapping];
          }
        }
      }
    }
    var finalProps = hasShorthands ? _objectSpread2(_objectSpread2({}, shorthands), nonShorthands) : props;
    var _loop = function _loop() {
      var propValue = finalProps[prop];
      var sprinkle = sprinklesStyles[prop];
      try {
        if (sprinkle.mappings) {
          // Skip shorthands
          return 1; // continue
        }
        if (typeof propValue === 'string' || typeof propValue === 'number') {
          if (false) // removed by dead control flow
{}
          classNames.push(sprinkle.values[propValue].defaultClass);
        } else if (Array.isArray(propValue)) {
          for (var responsiveIndex = 0; responsiveIndex < propValue.length; responsiveIndex++) {
            var responsiveValue = propValue[responsiveIndex];
            if (responsiveValue != null) {
              var conditionName = sprinkle.responsiveArray[responsiveIndex];
              if (false) // removed by dead control flow
{}
              classNames.push(sprinkle.values[responsiveValue].conditions[conditionName]);
            }
          }
        } else {
          for (var _conditionName in propValue) {
            // Conditional style
            var _value = propValue[_conditionName];
            if (_value != null) {
              if (false) // removed by dead control flow
{}
              classNames.push(sprinkle.values[_value].conditions[_conditionName]);
            }
          }
        }
      } catch (e) {
        if (false) // removed by dead control flow
{ var _value2, _conditionName2, _responsiveValue, breakpointCount, invalidPropValue, format; }
        throw e;
      }
    };
    for (var prop in finalProps) {
      if (_loop()) continue;
    }
    return composeStyles(classNames.join(' '));
  };
  return Object.assign(sprinklesFn, {
    properties: new Set(sprinklesKeys)
  });
};



;// ../../node_modules/.pnpm/@vanilla-extract+sprinkles@1.6.3_@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0_/node_modules/@vanilla-extract/sprinkles/createRuntimeSprinkles/dist/vanilla-extract-sprinkles-createRuntimeSprinkles.esm.js


var composeStyles = classList => classList;
var createSprinkles = function createSprinkles() {
  return createSprinkles_74286718_esm_createSprinkles(composeStyles)(...arguments);
};

/** @deprecated - Use `createSprinkles` */
var createAtomsFn = (/* unused pure expression or super */ null && (createSprinkles));




/***/ }),

/***/ "../../node_modules/.pnpm/@vanilla-extract+sprinkles@1.6.3_@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0_/node_modules/@vanilla-extract/sprinkles/createUtils/dist/vanilla-extract-sprinkles-createUtils.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ createMapValueFn)
});

// UNUSED EXPORTS: createNormalizeValueFn

;// ../../node_modules/.pnpm/@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0/node_modules/@vanilla-extract/css/functionSerializer/dist/vanilla-extract-css-functionSerializer.browser.esm.js
function addFunctionSerializer(target, recipe) {
  // TODO: Update to "__function_serializer__" in future.
  // __recipe__ is the backwards compatible name
  Object.defineProperty(target, '__recipe__', {
    value: recipe,
    writable: false
  });
  return target;
}



;// ../../node_modules/.pnpm/@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0/node_modules/@vanilla-extract/css/recipe/dist/vanilla-extract-css-recipe.browser.esm.js


/**
 * @deprecated Use 'addFunctionSerializer' from '@vanilla-extract/css/functionSerializer'
 */
var addRecipe = addFunctionSerializer;



;// ../../node_modules/.pnpm/@vanilla-extract+sprinkles@1.6.3_@vanilla-extract+css@1.17.1_babel-plugin-macros@3.1.0_/node_modules/@vanilla-extract/sprinkles/createUtils/dist/vanilla-extract-sprinkles-createUtils.esm.js


function createNormalizeValueFn(properties) {
  var {
    conditions
  } = properties;
  if (!conditions) {
    throw new Error('Styles have no conditions');
  }
  function normalizeValue(value) {
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      if (!conditions.defaultCondition) {
        throw new Error('No default condition');
      }
      return {
        [conditions.defaultCondition]: value
      };
    }
    if (Array.isArray(value)) {
      if (!('responsiveArray' in conditions)) {
        throw new Error('Responsive arrays are not supported');
      }
      var returnValue = {};
      for (var index in conditions.responsiveArray) {
        if (value[index] != null) {
          returnValue[conditions.responsiveArray[index]] = value[index];
        }
      }
      return returnValue;
    }
    return value;
  }
  return addRecipe(normalizeValue, {
    importPath: '@vanilla-extract/sprinkles/createUtils',
    importName: 'createNormalizeValueFn',
    args: [{
      conditions: properties.conditions
    }]
  });
}
function createMapValueFn(properties) {
  var {
    conditions
  } = properties;
  if (!conditions) {
    throw new Error('Styles have no conditions');
  }
  var normalizeValue = createNormalizeValueFn(properties);
  function mapValue(value, mapFn) {
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      if (!conditions.defaultCondition) {
        throw new Error('No default condition');
      }
      return mapFn(value, conditions.defaultCondition);
    }
    var normalizedObject = Array.isArray(value) ? normalizeValue(value) : value;
    var mappedObject = {};
    for (var _key in normalizedObject) {
      if (normalizedObject[_key] != null) {
        mappedObject[_key] = mapFn(normalizedObject[_key], _key);
      }
    }
    return mappedObject;
  }
  return addRecipe(mapValue, {
    importPath: '@vanilla-extract/sprinkles/createUtils',
    importName: 'createMapValueFn',
    args: [{
      conditions: properties.conditions
    }]
  });
}




/***/ }),

/***/ "../../node_modules/.pnpm/classnames@2.5.1/node_modules/classnames/index.js":
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else // removed by dead control flow
{}
}());


/***/ }),

/***/ "../storybook_helpers/dist/esm/src/components/StoryGrid/index.js":
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


const StoryGrid = _ref => {
  let {
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    display: "grid",
    templateColumns: "25%_25%_25%_25%",
    gap: "4"
  }, props), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoryGrid);
;
StoryGrid.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StoryGrid"
};

/***/ }),

/***/ "../visuals/src/components/constants.ts":
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

/***/ "../visuals/src/components/generated_visuals/illustrations/InboxEmptyInitial.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/src/components/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/src/utils/index.ts");



const InboxEmptyInitialIllustration = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .pascalToSnake */ .e)('InboxEmptyInitialIllustration')
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: _constants__WEBPACK_IMPORTED_MODULE_1__/* .ILLUSTRATIONS_SIZES */ .FO[size].width,
    height: _constants__WEBPACK_IMPORTED_MODULE_1__/* .ILLUSTRATIONS_SIZES */ .FO[size].height,
    fill: "none",
    viewBox: "0 0 280 225",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    clipPath: "url(#inbox_empty_initial_svg__a)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "url(#inbox_empty_initial_svg__b)",
    d: "M31.006 215.296h31.071v135.956H31.006z",
    transform: "rotate(-180 31.006 215.296)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "url(#inbox_empty_initial_svg__c)",
    d: "M0 0h31.071v135.956H0z",
    transform: "matrix(1 0 0 -1 248.861 215.296)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    filter: "url(#inbox_empty_initial_svg__d)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "url(#inbox_empty_initial_svg__e)",
    d: "M139.871 19.695 48.3 76.132v96.15H231.44v-96.15z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    stroke: "#DADBDD",
    strokeLinejoin: "bevel",
    strokeWidth: 1.5,
    d: "M70.131 49.342H209.61v110.679H70.131z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    stroke: "#DADBDD",
    strokeLinejoin: "bevel",
    strokeWidth: 1.5,
    d: "m48.285 172.691 182.97-96.576v96.576z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    stroke: "#DADBDD",
    strokeLinejoin: "bevel",
    strokeWidth: 1.5,
    d: "M231.256 172.691 48.299 76.115v96.576z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "#DADBDD",
    strokeLinejoin: "bevel",
    strokeWidth: 1.5,
    d: "M59.266 162.064H98.54M59.266 152.809h26.807"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "url(#inbox_empty_initial_svg__f)",
    d: "M243.293 142.899h45.956v206.86h-45.956z",
    transform: "rotate(90 243.293 142.899)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    stroke: "#DADBDD",
    strokeLinejoin: "bevel",
    strokeWidth: 1.5,
    d: "M212.858 137.339c18.127 0 32.822 14.695 32.822 32.823 0 18.127-14.695 32.822-32.822 32.822s-32.823-14.695-32.823-32.822 14.696-32.823 32.823-32.823Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
    cx: 26.751,
    cy: 26.751,
    r: 26.751,
    fill: "url(#inbox_empty_initial_svg__g)",
    transform: "matrix(-1 0 0 1 239.609 143.41)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
    d: "M218.143 164.234c-1.495 3.556-4.933 5.926-9.119 5.926-4.035 0-7.623-2.37-9.118-5.926M219.967 155.58c-.467 1.114-1.544 1.856-2.854 1.856-1.263 0-2.387-.742-2.854-1.856M203.777 155.58c-.468 1.114-1.544 1.856-2.855 1.856-1.263 0-2.386-.742-2.854-1.856"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", {
    id: "inbox_empty_initial_svg__b",
    x1: 62.077,
    x2: 31.006,
    y1: 283.274,
    y2: 283.274,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", {
    id: "inbox_empty_initial_svg__c",
    x1: 31.071,
    x2: 0,
    y1: 67.978,
    y2: 67.978,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", {
    id: "inbox_empty_initial_svg__e",
    x1: 136.964,
    x2: 130.975,
    y1: 1.755,
    y2: 126.247,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", {
    id: "inbox_empty_initial_svg__f",
    x1: 289.249,
    x2: 243.293,
    y1: 246.329,
    y2: 246.329,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient", {
    id: "inbox_empty_initial_svg__g",
    x1: 0.857,
    x2: 62.43,
    y1: -19.075,
    y2: 61.065,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    stopColor: "#256020"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
    offset: 1,
    stopColor: "#D0E500"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
    id: "inbox_empty_initial_svg__a"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "M0 .5h280v224H0z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("filter", {
    id: "inbox_empty_initial_svg__d",
    width: 218.021,
    height: 187.466,
    x: 30.86,
    y: 2.256,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feOffset", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feGaussianBlur", {
    stdDeviation: 8.72
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1109_254"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1109_254",
    result: "shape"
  }))));
};
InboxEmptyInitialIllustration.displayName = 'InboxEmptyInitialIllustration';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InboxEmptyInitialIllustration);
try {
    // @ts-ignore
    InboxEmptyInitialIllustration.displayName = "InboxEmptyInitialIllustration";
    // @ts-ignore
    InboxEmptyInitialIllustration.__docgenInfo = { "description": "", "displayName": "InboxEmptyInitialIllustration", "props": { "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('InboxEmptyInitialIllustration')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/illustrations/InboxEmptyInitial.tsx#InboxEmptyInitialIllustration"] = { docgenInfo: InboxEmptyInitialIllustration.__docgenInfo, name: "InboxEmptyInitialIllustration", path: "../visuals/src/components/generated_visuals/illustrations/InboxEmptyInitial.tsx#InboxEmptyInitialIllustration" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../visuals/src/components/illustrations/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  IllustrationWrapper: () => (/* binding */ IllustrationWrapper),
  Illustrations: () => (/* binding */ Illustrations),
  Primary: () => (/* binding */ Primary),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// NAMESPACE OBJECT: ../visuals/src/components/illustrations/index.ts
var illustrations_namespaceObject = {};
__webpack_require__.r(illustrations_namespaceObject);
__webpack_require__.d(illustrations_namespaceObject, {
  BriefsIllustration: () => (Briefs),
  GeneralErrorIllustration: () => (GeneralError),
  InboxContinueToChatIllustration: () => (InboxContinueToChat),
  InboxEmptyInitialIllustration: () => (InboxEmptyInitial/* default */.A),
  InboxEmptyInitialMinimizedIllustration: () => (InboxEmptyInitialMinimized),
  InboxNoResultsIllustration: () => (InboxNoResults),
  NoFreelancersFoundIllustration: () => (NoFreelancersFound),
  NotificationsEmptyInitialIllustration: () => (NotificationsEmptyInitial),
  OrdersActiveIllustration: () => (OrdersActive),
  OrdersAllResultsIllustration: () => (OrdersAllResults),
  OrdersCanceledIllustration: () => (OrdersCanceled),
  OrdersCompletedIllustration: () => (OrdersCompleted),
  OrdersNoResultsIllustration: () => (OrdersNoResults),
  ReviewsIllustration: () => (Reviews),
  SavedDeliveriesIllustration: () => (SavedDeliveries),
  SavedGigsIllustration: () => (SavedGigs),
  SavedSellersIllustration: () => (SavedSellers),
  SavedSellersNoHeartIllustration: () => (SavedSellersNoHeart),
  SearchIllustration: () => (Search),
  SuccessIllustration: () => (Success)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryGrid/index.js
var StoryGrid = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryGrid/index.js");
// EXTERNAL MODULE: ../visuals/src/components/constants.ts
var constants = __webpack_require__("../visuals/src/components/constants.ts");
// EXTERNAL MODULE: ../visuals/src/utils/index.ts
var utils = __webpack_require__("../visuals/src/utils/index.ts");
;// ../visuals/src/components/generated_visuals/illustrations/Briefs.tsx



const BriefsIllustration = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('BriefsIllustration')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* ILLUSTRATIONS_SIZES */.FO[size].width,
    height: constants/* ILLUSTRATIONS_SIZES */.FO[size].height,
    fill: "none",
    viewBox: "0 0 280 225",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#briefs_svg__a)"
  }, /*#__PURE__*/react.createElement("g", {
    opacity: 0.4
  }, /*#__PURE__*/react.createElement("g", {
    filter: "url(#briefs_svg__b)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M39.667 175.167h70.054a9.333 9.333 0 0 0 9.333-9.334v-108.5A9.333 9.333 0 0 0 109.721 48H39.667a9.333 9.333 0 0 0-9.333 9.333v108.5a9.334 9.334 0 0 0 9.333 9.334"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#E4E5E7",
    strokeLinejoin: "bevel",
    strokeWidth: 1.167,
    d: "M39.667 175.167h70.054a9.333 9.333 0 0 0 9.333-9.334v-108.5A9.333 9.333 0 0 0 109.721 48H39.667a9.333 9.333 0 0 0-9.333 9.333v108.5a9.334 9.334 0 0 0 9.333 9.334Z"
  })), /*#__PURE__*/react.createElement("rect", {
    width: 66.888,
    height: 2.676,
    x: 39.949,
    y: 64.147,
    fill: "#E4E5E7",
    rx: 1.338
  }), /*#__PURE__*/react.createElement("rect", {
    width: 35.488,
    height: 2.535,
    x: 40.084,
    y: 72.148,
    fill: "#E4E5E7",
    rx: 1.267
  }), /*#__PURE__*/react.createElement("rect", {
    width: 66.888,
    height: 2.676,
    x: 39.949,
    y: 91.044,
    fill: "#E4E5E7",
    rx: 1.338
  }), /*#__PURE__*/react.createElement("rect", {
    width: 35.488,
    height: 2.535,
    x: 40.084,
    y: 99.045,
    fill: "#E4E5E7",
    rx: 1.267
  }), /*#__PURE__*/react.createElement("rect", {
    width: 69.005,
    height: 49.289,
    x: 39.951,
    y: 115.689,
    fill: "url(#briefs_svg__c)",
    rx: 7
  })), /*#__PURE__*/react.createElement("g", {
    opacity: 0.4
  }, /*#__PURE__*/react.createElement("g", {
    filter: "url(#briefs_svg__d)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M169.167 175.167h70.054a9.333 9.333 0 0 0 9.333-9.334v-108.5A9.333 9.333 0 0 0 239.221 48h-70.054a9.334 9.334 0 0 0-9.334 9.333v108.5a9.334 9.334 0 0 0 9.334 9.334"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#E4E5E7",
    strokeLinejoin: "bevel",
    strokeWidth: 1.167,
    d: "M169.167 175.167h70.054a9.333 9.333 0 0 0 9.333-9.334v-108.5A9.333 9.333 0 0 0 239.221 48h-70.054a9.334 9.334 0 0 0-9.334 9.333v108.5a9.334 9.334 0 0 0 9.334 9.334Z"
  })), /*#__PURE__*/react.createElement("rect", {
    width: 66.888,
    height: 2.676,
    x: 169.449,
    y: 64.147,
    fill: "#E4E5E7",
    rx: 1.338
  }), /*#__PURE__*/react.createElement("rect", {
    width: 35.488,
    height: 2.535,
    x: 169.583,
    y: 72.148,
    fill: "#E4E5E7",
    rx: 1.267
  }), /*#__PURE__*/react.createElement("rect", {
    width: 66.888,
    height: 2.676,
    x: 169.449,
    y: 91.044,
    fill: "#E4E5E7",
    rx: 1.338
  }), /*#__PURE__*/react.createElement("rect", {
    width: 35.488,
    height: 2.535,
    x: 169.583,
    y: 99.045,
    fill: "#E4E5E7",
    rx: 1.267
  }), /*#__PURE__*/react.createElement("rect", {
    width: 69.005,
    height: 49.289,
    x: 169.451,
    y: 115.689,
    fill: "url(#briefs_svg__e)",
    rx: 7
  })), /*#__PURE__*/react.createElement("g", {
    filter: "url(#briefs_svg__f)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M94.5 190.834h91.333a9.334 9.334 0 0 0 9.334-9.334v-139a9.334 9.334 0 0 0-9.334-9.333H94.5a9.333 9.333 0 0 0-9.333 9.333v139a9.334 9.334 0 0 0 9.333 9.334"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#E4E5E7",
    strokeLinejoin: "bevel",
    strokeWidth: 1.167,
    d: "M94.5 190.834h91.333a9.334 9.334 0 0 0 9.334-9.334v-139a9.334 9.334 0 0 0-9.334-9.333H94.5a9.333 9.333 0 0 0-9.333 9.333v139a9.334 9.334 0 0 0 9.333 9.334Z"
  })), /*#__PURE__*/react.createElement("rect", {
    width: 88.667,
    height: 68.833,
    x: 96.834,
    y: 111,
    fill: "url(#briefs_svg__g)",
    rx: 7
  }), /*#__PURE__*/react.createElement("rect", {
    width: 88.667,
    height: 3.166,
    x: 96.834,
    y: 51.344,
    fill: "#E4E5E7",
    rx: 1.583
  }), /*#__PURE__*/react.createElement("rect", {
    width: 47.044,
    height: 3,
    x: 97.013,
    y: 60.813,
    fill: "#E4E5E7",
    rx: 1.5
  }), /*#__PURE__*/react.createElement("rect", {
    width: 88.667,
    height: 3.166,
    x: 96.834,
    y: 81.344,
    fill: "#E4E5E7",
    rx: 1.583
  }), /*#__PURE__*/react.createElement("rect", {
    width: 47.044,
    height: 3,
    x: 97.013,
    y: 90.813,
    fill: "#E4E5E7",
    rx: 1.5
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#briefs_svg__h)",
    d: "M85.166 197.333h85.167v171.5H85.166z",
    transform: "rotate(-180 85.166 197.333)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#briefs_svg__i)",
    d: "M194.833 25.833H280v171.5h-85.167z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#briefs_svg__j)",
    d: "M140.696 127.729c.252-1.011 1.689-1.011 1.941 0l.411 1.65a20 20 0 0 0 14.573 14.573l1.65.411c1.011.252 1.011 1.689 0 1.941l-1.65.411a20 20 0 0 0-14.573 14.573l-.411 1.65c-.252 1.011-1.689 1.011-1.941 0l-.411-1.65a20 20 0 0 0-14.573-14.573l-1.65-.411c-1.011-.252-1.011-1.689 0-1.941l1.65-.411a20 20 0 0 0 14.573-14.573z"
  })), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "briefs_svg__c",
    x1: 143.459,
    x2: 102.492,
    y1: 195.785,
    y2: 95.439,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "briefs_svg__e",
    x1: 272.959,
    x2: 231.992,
    y1: 195.785,
    y2: 95.439,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "briefs_svg__g",
    x1: 98.254,
    x2: 170.392,
    y1: 86.46,
    y2: 207.402,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#256020"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D0E500"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "briefs_svg__h",
    x1: 170.333,
    x2: 85.166,
    y1: 283.083,
    y2: 283.083,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "briefs_svg__i",
    x1: 280,
    x2: 194.833,
    y1: 111.583,
    y2: 111.583,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "briefs_svg__j",
    x1: 120.708,
    x2: 158.88,
    y1: 111.777,
    y2: 168.583,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#F5F5F5",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#F5F5F5"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "briefs_svg__b",
    width: 108.554,
    height: 147,
    x: 20.417,
    y: 38.083,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4.667
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_20359_17011"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_20359_17011",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "briefs_svg__d",
    width: 108.554,
    height: 147,
    x: 149.917,
    y: 38.083,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4.667
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_20359_17011"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_20359_17011",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "briefs_svg__f",
    width: 130.723,
    height: 178.389,
    x: 74.805,
    y: 22.806,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4.889
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_20359_17011"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_20359_17011",
    result: "shape"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "briefs_svg__a"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 .5h280v224H0z"
  }))));
};
BriefsIllustration.displayName = 'BriefsIllustration';
/* harmony default export */ const Briefs = (BriefsIllustration);
try {
    // @ts-ignore
    BriefsIllustration.displayName = "BriefsIllustration";
    // @ts-ignore
    BriefsIllustration.__docgenInfo = { "description": "", "displayName": "BriefsIllustration", "props": { "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('BriefsIllustration')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/illustrations/Briefs.tsx#BriefsIllustration"] = { docgenInfo: BriefsIllustration.__docgenInfo, name: "BriefsIllustration", path: "../visuals/src/components/generated_visuals/illustrations/Briefs.tsx#BriefsIllustration" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/illustrations/GeneralError.tsx



const GeneralErrorIllustration = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('GeneralErrorIllustration')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* ILLUSTRATIONS_SIZES */.FO[size].width,
    height: constants/* ILLUSTRATIONS_SIZES */.FO[size].height,
    fill: "none",
    viewBox: "0 0 240 192",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("g", {
    opacity: 0.4
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M17.87 55.6a6 6 0 0 1 5.224-6.687L169.99 30.877a6 6 0 0 1 6.686 5.224l11.456 93.299a6 6 0 0 1-5.224 6.687L36.012 154.123a6 6 0 0 1-6.686-5.224z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "m182.787 135.094.122.993-146.897 18.036-.122-.992zm4.353-5.572-11.455-93.3a5 5 0 0 0-5.572-4.353L23.216 49.906a5 5 0 0 0-4.354 5.572l11.456 93.299a5 5 0 0 0 5.572 4.354l.122.992a6 6 0 0 1-6.641-4.919l-.045-.305-11.456-93.3a6 6 0 0 1 5.224-6.686L169.99 30.877l.307-.03a6 6 0 0 1 6.379 5.254l11.456 93.299.03.307a6 6 0 0 1-4.949 6.334l-.305.046-.122-.993a5 5 0 0 0 4.353-5.572"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#general_error_svg__a)",
    fillOpacity: 0.4,
    d: "M23.564 60.946a1 1 0 0 1 .87-1.115l146.897-18.036a1 1 0 0 1 1.115.87l10.724 87.344a1 1 0 0 1-.87 1.115L35.403 149.16a1 1 0 0 1-1.115-.87z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#222325",
    d: "M24.818 54.747a1 1 0 1 1-1.985.243 1 1 0 0 1 1.985-.243"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "M28.788 54.26a1 1 0 1 1-1.985.243 1 1 0 0 1 1.985-.244M32.758 53.772a1 1 0 1 1-1.985.243 1 1 0 0 1 1.985-.243"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "url(#general_error_svg__b)",
    d: "M0 0h46v194H0z",
    transform: "matrix(0 1 1 0 17 109.502)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M63.002 35.5a6 6 0 0 1 6-6h148a6 6 0 0 1 6 6v94a6 6 0 0 1-6 6h-148a6 6 0 0 1-6-6z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "M217.002 134.5v1h-148v-1zm5-5v-94a5 5 0 0 0-5-5h-148a5 5 0 0 0-5 5v94a5 5 0 0 0 5 5v1a6 6 0 0 1-5.992-5.691l-.008-.309v-94a6 6 0 0 1 6-6h148l.309.008a6 6 0 0 1 5.691 5.992v94l-.008.309a6 6 0 0 1-5.683 5.683l-.309.008v-1a5 5 0 0 0 5-5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#general_error_svg__c)",
    fillOpacity: 0.4,
    d: "M68.002 41.5a1 1 0 0 1 1-1h148a1 1 0 0 1 1 1v88a1 1 0 0 1-1 1h-148a1 1 0 0 1-1-1z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#222325",
    d: "M70.002 35.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "M74.002 35.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M78.002 35.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#general_error_svg__d)",
    shapeRendering: "crispEdges"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M181.502 125c0 20.987-17.013 38-38 38s-38-17.013-38-38 17.013-38 38-38 38 17.013 38 38"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "M181.002 125c0-20.711-16.789-37.5-37.5-37.5s-37.5 16.789-37.5 37.5 16.789 37.5 37.5 37.5 37.5-16.789 37.5-37.5m1 0c0 21.263-17.237 38.5-38.5 38.5s-38.5-17.237-38.5-38.5 17.237-38.5 38.5-38.5 38.5 17.237 38.5 38.5"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#general_error_svg__e)",
    d: "M110.502 125c0 18.225 14.775 33 33 33s33-14.775 33-33-14.775-33-33-33-33 14.775-33 33"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#general_error_svg__f)",
    d: "M144.002 139a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#general_error_svg__g)",
    d: "M144.002 104a3 3 0 0 1 3 3v23a3 3 0 1 1-6 0v-23a3 3 0 0 1 3-3"
  })), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "general_error_svg__a",
    x1: 200.811,
    x2: 126.676,
    y1: 141.031,
    y2: 3.115,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "general_error_svg__b",
    x1: 46,
    x2: 0,
    y1: 97,
    y2: 97,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "general_error_svg__c",
    x1: 234.167,
    x2: 177.394,
    y1: 142.59,
    y2: -3.334,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "general_error_svg__e",
    x1: 175.444,
    x2: 99.487,
    y1: 68.469,
    y2: 167.33,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#256020"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D0E500"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "general_error_svg__f",
    x1: 125.002,
    x2: 155.002,
    y1: 65.5,
    y2: 149,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff",
    stopOpacity: 0
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "general_error_svg__g",
    x1: 125.002,
    x2: 155.002,
    y1: 65.5,
    y2: 149,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff",
    stopOpacity: 0
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "general_error_svg__d",
    width: 93,
    height: 93,
    x: 97.002,
    y: 78.5,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_2990_660"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_2990_660",
    result: "shape"
  }))));
};
GeneralErrorIllustration.displayName = 'GeneralErrorIllustration';
/* harmony default export */ const GeneralError = (GeneralErrorIllustration);
try {
    // @ts-ignore
    GeneralErrorIllustration.displayName = "GeneralErrorIllustration";
    // @ts-ignore
    GeneralErrorIllustration.__docgenInfo = { "description": "", "displayName": "GeneralErrorIllustration", "props": { "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('GeneralErrorIllustration')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/illustrations/GeneralError.tsx#GeneralErrorIllustration"] = { docgenInfo: GeneralErrorIllustration.__docgenInfo, name: "GeneralErrorIllustration", path: "../visuals/src/components/generated_visuals/illustrations/GeneralError.tsx#GeneralErrorIllustration" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/illustrations/InboxContinueToChat.tsx



const InboxContinueToChatIllustration = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('InboxContinueToChatIllustration')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* ILLUSTRATIONS_SIZES */.FO[size].width,
    height: constants/* ILLUSTRATIONS_SIZES */.FO[size].height,
    fill: "none",
    viewBox: "0 0 280 225",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#inbox_continue_to_chat_svg__a)"
  }, /*#__PURE__*/react.createElement("g", {
    filter: "url(#inbox_continue_to_chat_svg__b)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#DADBDD",
    strokeWidth: 1.5,
    d: "M139.766 78.14c27.858 0 50.788 22.584 50.788 50.442s-22.93 50.442-50.788 50.442-50.788-22.584-50.788-50.442 22.93-50.442 50.788-50.442Z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 43.723,
    cy: 43.723,
    r: 43.723,
    fill: "url(#inbox_continue_to_chat_svg__c)",
    transform: "matrix(-1 0 0 1 183.489 84.859)"
  }), /*#__PURE__*/react.createElement("mask", {
    id: "inbox_continue_to_chat_svg__e",
    width: 88,
    height: 89,
    x: 96,
    y: 84,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: 'alpha'
    }
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 139.765,
    cy: 128.582,
    r: 43.724,
    fill: "url(#inbox_continue_to_chat_svg__d)"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#fff",
    mask: "url(#inbox_continue_to_chat_svg__e)"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 139.768,
    cy: 116.252,
    r: 15.657
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 139.769,
    cy: 179.879,
    r: 42.867
  }))), /*#__PURE__*/react.createElement("g", {
    opacity: 0.5
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#DADBDD",
    strokeWidth: 1.5,
    d: "M237.856 87.185c22.863 0 41.681 18.534 41.681 41.397s-18.818 41.397-41.681 41.397-41.682-18.534-41.682-41.397 18.819-41.397 41.682-41.397Z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 35.883,
    cy: 35.883,
    r: 35.883,
    fill: "url(#inbox_continue_to_chat_svg__f)",
    transform: "matrix(-1 0 0 1 273.74 92.698)"
  }), /*#__PURE__*/react.createElement("mask", {
    id: "inbox_continue_to_chat_svg__h",
    width: 73,
    height: 73,
    x: 201,
    y: 92,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: 'alpha'
    }
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 237.855,
    cy: 128.582,
    r: 35.883,
    fill: "url(#inbox_continue_to_chat_svg__g)"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#fff",
    mask: "url(#inbox_continue_to_chat_svg__h)"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 237.856,
    cy: 118.461,
    r: 12.85
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 237.857,
    cy: 170.68,
    r: 35.181
  }))), /*#__PURE__*/react.createElement("g", {
    opacity: 0.5
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#DADBDD",
    strokeWidth: 1.5,
    d: "M41.681 87.185c22.863 0 41.682 18.534 41.682 41.397s-18.819 41.397-41.682 41.397S0 151.445 0 128.582 18.818 87.185 41.68 87.185Z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 35.883,
    cy: 35.883,
    r: 35.883,
    fill: "url(#inbox_continue_to_chat_svg__i)",
    transform: "matrix(-1 0 0 1 77.319 92.678)"
  }), /*#__PURE__*/react.createElement("mask", {
    id: "inbox_continue_to_chat_svg__k",
    width: 73,
    height: 73,
    x: 5,
    y: 92,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: 'alpha'
    }
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 41.435,
    cy: 128.561,
    r: 35.883,
    fill: "url(#inbox_continue_to_chat_svg__j)"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#fff",
    mask: "url(#inbox_continue_to_chat_svg__k)"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 41.439,
    cy: 118.441,
    r: 12.85
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 41.438,
    cy: 170.659,
    r: 35.181
  }))), /*#__PURE__*/react.createElement("path", {
    fill: "url(#inbox_continue_to_chat_svg__l)",
    d: "M30.523 179.576h31.006v135.671H30.523z",
    transform: "rotate(-180 30.523 179.576)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#inbox_continue_to_chat_svg__m)",
    d: "M0 0h31.006v135.671H0z",
    transform: "matrix(1 0 0 -1 248.994 182.153)"
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#inbox_continue_to_chat_svg__n)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M217.281 58.566h-34.772c-11.333 0-20.539 9.206-20.539 20.539v20.537h55.311c11.332 0 20.538-9.205 20.538-20.537 0-11.333-9.206-20.539-20.538-20.539"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#DADBDD",
    strokeWidth: 1.5,
    d: "M217.281 58.566h-34.772c-11.333 0-20.539 9.206-20.539 20.539v20.537h55.311c11.332 0 20.538-9.205 20.538-20.537 0-11.333-9.206-20.539-20.538-20.539Z"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "#222325",
    d: "M188.061 84.314a3.473 3.473 0 1 0 0-6.946 3.473 3.473 0 0 0 0 6.946M199.887 80.841a3.473 3.473 0 1 0 0-6.946 3.473 3.473 0 0 0 0 6.946M211.719 84.314a3.473 3.473 0 1 0 0-6.946 3.473 3.473 0 0 0 0 6.946"
  })), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "inbox_continue_to_chat_svg__c",
    x1: 1.401,
    x2: 102.04,
    y1: -31.177,
    y2: 99.809,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#256020"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D0E500"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "inbox_continue_to_chat_svg__d",
    x1: 105.569,
    x2: 165.782,
    y1: 96.941,
    y2: 167.622,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#7A7A7A",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#7A7A7A"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "inbox_continue_to_chat_svg__f",
    x1: 59.431,
    x2: 6.728,
    y1: 84.101,
    y2: 8.971,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "inbox_continue_to_chat_svg__g",
    x1: 209.79,
    x2: 259.206,
    y1: 102.614,
    y2: 160.621,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#7A7A7A",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#7A7A7A"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "inbox_continue_to_chat_svg__i",
    x1: 59.431,
    x2: 6.728,
    y1: 84.101,
    y2: 8.971,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "inbox_continue_to_chat_svg__j",
    x1: 13.371,
    x2: 62.786,
    y1: 102.594,
    y2: 160.601,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#7A7A7A",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#7A7A7A"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "inbox_continue_to_chat_svg__l",
    x1: 61.53,
    x2: 30.523,
    y1: 247.412,
    y2: 247.412,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "inbox_continue_to_chat_svg__m",
    x1: 31.006,
    x2: 0,
    y1: 67.836,
    y2: 67.836,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("filter", {
    id: "inbox_continue_to_chat_svg__b",
    width: 127.552,
    height: 126.859,
    x: 75.99,
    y: 65.153,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 6.119
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1109_391"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1109_391",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "inbox_continue_to_chat_svg__n",
    width: 93.348,
    height: 58.576,
    x: 153.22,
    y: 49.816,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1109_391"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1109_391",
    result: "shape"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "inbox_continue_to_chat_svg__a"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 .5h280v224H0z"
  }))));
};
InboxContinueToChatIllustration.displayName = 'InboxContinueToChatIllustration';
/* harmony default export */ const InboxContinueToChat = (InboxContinueToChatIllustration);
try {
    // @ts-ignore
    InboxContinueToChatIllustration.displayName = "InboxContinueToChatIllustration";
    // @ts-ignore
    InboxContinueToChatIllustration.__docgenInfo = { "description": "", "displayName": "InboxContinueToChatIllustration", "props": { "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('InboxContinueToChatIllustration')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/illustrations/InboxContinueToChat.tsx#InboxContinueToChatIllustration"] = { docgenInfo: InboxContinueToChatIllustration.__docgenInfo, name: "InboxContinueToChatIllustration", path: "../visuals/src/components/generated_visuals/illustrations/InboxContinueToChat.tsx#InboxContinueToChatIllustration" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../visuals/src/components/generated_visuals/illustrations/InboxEmptyInitial.tsx
var InboxEmptyInitial = __webpack_require__("../visuals/src/components/generated_visuals/illustrations/InboxEmptyInitial.tsx");
;// ../visuals/src/components/generated_visuals/illustrations/InboxEmptyInitialMinimized.tsx



const InboxEmptyInitialMinimizedIllustration = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('InboxEmptyInitialMinimizedIllustration')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* ILLUSTRATIONS_SIZES */.FO[size].width,
    height: constants/* ILLUSTRATIONS_SIZES */.FO[size].height,
    fill: "none",
    viewBox: "0 0 280 225",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("g", {
    filter: "url(#inbox_empty_initial_minimized_svg__a)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "url(#inbox_empty_initial_minimized_svg__b)",
    d: "M139.886 18.42 45.794 76.41v98.799h188.185V76.41z"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#DADBDD",
    strokeLinejoin: "bevel",
    d: "M68.226 48.883h143.32V162.61H68.226z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#DADBDD",
    strokeLinejoin: "bevel",
    d: "m45.779 175.629 188.009-99.235v99.235z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#DADBDD",
    strokeLinejoin: "bevel",
    d: "M233.788 175.629 45.793 76.394v99.235z"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#DADBDD",
    strokeLinejoin: "bevel",
    d: "M58.205 162.896H98.56M58.205 153.385H85.75"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#inbox_empty_initial_minimized_svg__c)",
    d: "M246.157 145.017h47.222v212.557h-47.222z",
    transform: "rotate(90 246.157 145.017)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#DADBDD",
    strokeLinejoin: "bevel",
    d: "M214.884 139.303c18.626 0 33.726 15.1 33.726 33.727s-15.1 33.726-33.726 33.726c-18.627 0-33.726-15.1-33.726-33.726 0-18.627 15.099-33.727 33.726-33.727Z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 27.488,
    cy: 27.488,
    r: 27.488,
    fill: "url(#inbox_empty_initial_minimized_svg__d)",
    transform: "matrix(-1 0 0 1 242.372 145.542)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#inbox_empty_initial_minimized_svg__e)",
    fillRule: "evenodd",
    d: "M209.926 157.167c2.87-1.551 6.285-1.928 9.495-1.068s5.979 2.894 7.689 5.672c1.711 2.782 2.221 6.086 1.392 9.182l-1.387 5.174c-.485 1.81.025 4.337.735 6.496.378 1.146.025 2.297-.649 3.068-.679.777-1.8 1.288-3.024.96l-24.151-6.471c-1.224-.328-1.939-1.331-2.139-2.344-.198-1.004.072-2.177.972-2.981 1.695-1.515 3.4-3.448 3.885-5.258l1.386-5.174c.83-3.097 2.923-5.703 5.796-7.256",
    clipRule: "evenodd"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#inbox_empty_initial_minimized_svg__f)",
    d: "M210.226 189.927c-4.328-1.16-5.231-4.709-5.332-6.067l12.982 3.479c-.766 1.125-3.323 3.747-7.65 2.588"
  }), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "inbox_empty_initial_minimized_svg__b",
    x1: 136.899,
    x2: 130.746,
    y1: -0.015,
    y2: 127.906,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "inbox_empty_initial_minimized_svg__c",
    x1: 293.38,
    x2: 246.157,
    y1: 251.295,
    y2: 251.295,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "inbox_empty_initial_minimized_svg__d",
    x1: 0.881,
    x2: 64.15,
    y1: -19.6,
    y2: 62.747,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#256020"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D0E500"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "inbox_empty_initial_minimized_svg__e",
    x1: 207.214,
    x2: 225.315,
    y1: 143.243,
    y2: 191.457,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#F5F5F5",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#F5F5F5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "inbox_empty_initial_minimized_svg__f",
    x1: 205.383,
    x2: 205.036,
    y1: 182.691,
    y2: 191.066,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#F5F5F5",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#F5F5F5"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "inbox_empty_initial_minimized_svg__a",
    width: 204.186,
    height: 172.789,
    x: 37.794,
    y: 10.42,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1109_335"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1109_335",
    result: "shape"
  }))));
};
InboxEmptyInitialMinimizedIllustration.displayName = 'InboxEmptyInitialMinimizedIllustration';
/* harmony default export */ const InboxEmptyInitialMinimized = (InboxEmptyInitialMinimizedIllustration);
try {
    // @ts-ignore
    InboxEmptyInitialMinimizedIllustration.displayName = "InboxEmptyInitialMinimizedIllustration";
    // @ts-ignore
    InboxEmptyInitialMinimizedIllustration.__docgenInfo = { "description": "", "displayName": "InboxEmptyInitialMinimizedIllustration", "props": { "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('InboxEmptyInitialMinimizedIllustration')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/illustrations/InboxEmptyInitialMinimized.tsx#InboxEmptyInitialMinimizedIllustration"] = { docgenInfo: InboxEmptyInitialMinimizedIllustration.__docgenInfo, name: "InboxEmptyInitialMinimizedIllustration", path: "../visuals/src/components/generated_visuals/illustrations/InboxEmptyInitialMinimized.tsx#InboxEmptyInitialMinimizedIllustration" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/illustrations/InboxNoResults.tsx



const InboxNoResultsIllustration = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('InboxNoResultsIllustration')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* ILLUSTRATIONS_SIZES */.FO[size].width,
    height: constants/* ILLUSTRATIONS_SIZES */.FO[size].height,
    fill: "none",
    viewBox: "0 0 280 225",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("g", {
    filter: "url(#inbox_no_results_svg__a)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M205.452 85.464h-46.687c-15.216 0-27.577 12.36-27.577 27.576v27.576h74.264c15.216 0 27.576-12.36 27.576-27.576s-12.36-27.576-27.576-27.576"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#DADBDD",
    d: "M205.452 85.464h-46.687c-15.216 0-27.577 12.36-27.577 27.576v27.576h74.264c15.216 0 27.576-12.36 27.576-27.576s-12.36-27.576-27.576-27.576Z"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "#222325",
    d: "M166.221 117.796a4.664 4.664 0 1 0-.001-9.327 4.664 4.664 0 0 0 .001 9.327M182.099 117.796a4.664 4.664 0 1 0-.001-9.327 4.664 4.664 0 0 0 .001 9.327M197.985 117.796a4.663 4.663 0 1 0 0-9.326 4.663 4.663 0 0 0 0 9.326"
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#inbox_no_results_svg__b)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M83.67 76.66c20.094 0 36.632 16.289 36.632 36.381 0 20.093-16.538 36.381-36.631 36.381s-36.63-16.288-36.63-36.381c0-20.092 16.537-36.38 36.63-36.38"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#DADBDD",
    d: "M83.67 76.66c20.094 0 36.632 16.289 36.632 36.381 0 20.093-16.538 36.381-36.631 36.381s-36.63-16.288-36.63-36.381c0-20.092 16.537-36.38 36.63-36.38Z"
  })), /*#__PURE__*/react.createElement("circle", {
    cx: 31.535,
    cy: 31.535,
    r: 31.535,
    fill: "url(#inbox_no_results_svg__c)",
    transform: "matrix(-1 0 0 1 115.207 81.506)"
  }), /*#__PURE__*/react.createElement("mask", {
    id: "inbox_no_results_svg__e",
    width: 64,
    height: 64,
    x: 52,
    y: 81,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: 'alpha'
    }
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 83.671,
    cy: 113.041,
    r: 31.535,
    fill: "url(#inbox_no_results_svg__d)"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#fff",
    mask: "url(#inbox_no_results_svg__e)"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 83.673,
    cy: 104.148,
    r: 11.293
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 83.673,
    cy: 150.039,
    r: 30.918
  })), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "inbox_no_results_svg__c",
    x1: 1.011,
    x2: 73.596,
    y1: -22.486,
    y2: 71.986,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#256020"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D0E500"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "inbox_no_results_svg__d",
    x1: 59.007,
    x2: 102.435,
    y1: 90.221,
    y2: 141.199,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#7A7A7A",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#7A7A7A"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "inbox_no_results_svg__a",
    width: 118.84,
    height: 72.152,
    x: 122.688,
    y: 76.964,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1109_315"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1109_315",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "inbox_no_results_svg__b",
    width: 90.262,
    height: 89.762,
    x: 38.54,
    y: 68.16,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1109_315"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1109_315",
    result: "shape"
  }))));
};
InboxNoResultsIllustration.displayName = 'InboxNoResultsIllustration';
/* harmony default export */ const InboxNoResults = (InboxNoResultsIllustration);
try {
    // @ts-ignore
    InboxNoResultsIllustration.displayName = "InboxNoResultsIllustration";
    // @ts-ignore
    InboxNoResultsIllustration.__docgenInfo = { "description": "", "displayName": "InboxNoResultsIllustration", "props": { "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('InboxNoResultsIllustration')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/illustrations/InboxNoResults.tsx#InboxNoResultsIllustration"] = { docgenInfo: InboxNoResultsIllustration.__docgenInfo, name: "InboxNoResultsIllustration", path: "../visuals/src/components/generated_visuals/illustrations/InboxNoResults.tsx#InboxNoResultsIllustration" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/illustrations/NoFreelancersFound.tsx



const NoFreelancersFoundIllustration = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('NoFreelancersFoundIllustration')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* ILLUSTRATIONS_SIZES */.FO[size].width,
    height: constants/* ILLUSTRATIONS_SIZES */.FO[size].height,
    fill: "none",
    viewBox: "0 0 280 225",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("g", {
    opacity: 0.4
  }, /*#__PURE__*/react.createElement("g", {
    filter: "url(#no_freelancers_found_svg__a)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 82.597,
    height: 99.319,
    x: 41.864,
    y: 69.511,
    fill: "#fff",
    rx: 3.226
  }), /*#__PURE__*/react.createElement("rect", {
    width: 82.597,
    height: 99.319,
    x: 41.864,
    y: 69.511,
    stroke: "#DADBDD",
    strokeWidth: 0.864,
    rx: 3.226
  })), /*#__PURE__*/react.createElement("path", {
    fill: "url(#no_freelancers_found_svg__b)",
    fillOpacity: 0.4,
    d: "M81.583 84.204c12.39 0 22.434 10.044 22.434 22.434 0 5.082-1.691 9.768-4.539 13.529-3.99-5.572-10.517-9.204-17.893-9.204-7.378 0-13.908 3.632-17.898 9.206a22.34 22.34 0 0 1-4.539-13.531c0-12.39 10.044-22.434 22.435-22.434m.002 8.073a8.034 8.034 0 1 0 .001 16.068 8.034 8.034 0 0 0-.001-16.068"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#E4E5E7",
    strokeLinecap: "round",
    strokeWidth: 2.395,
    d: "m63.706 158.344 52.414-.229"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 53.826,
    cy: 158.282,
    r: 4.926,
    fill: "#E4E5E7"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "url(#no_freelancers_found_svg__c)",
    d: "M0 0h37v123H0z",
    transform: "matrix(-1 0 0 1 78 58)"
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#no_freelancers_found_svg__d)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 105.618,
    height: 127,
    x: 89.929,
    y: 53.499,
    fill: "#fff",
    rx: 5.333
  }), /*#__PURE__*/react.createElement("rect", {
    width: 105.618,
    height: 127,
    x: 89.929,
    y: 53.499,
    stroke: "#EFEFF0",
    strokeWidth: 1.429,
    rx: 5.333
  })), /*#__PURE__*/react.createElement("g", {
    filter: "url(#no_freelancers_found_svg__e)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#EFEFF0",
    strokeWidth: 0.5,
    d: "M143 62.5c20.987 0 38 17.013 38 38s-17.013 38-38 38-38-17.014-38-38 17.013-38 38-38Z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 32.883,
    cy: 32.883,
    r: 32.883,
    fill: "url(#no_freelancers_found_svg__f)",
    transform: "matrix(-1 0 0 1 175.883 67.553)"
  }), /*#__PURE__*/react.createElement("mask", {
    id: "no_freelancers_found_svg__h",
    width: 66,
    height: 67,
    x: 110,
    y: 67,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: 'alpha'
    }
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 142.999,
    cy: 100.435,
    r: 32.883,
    fill: "url(#no_freelancers_found_svg__g)"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#fff",
    mask: "url(#no_freelancers_found_svg__h)"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 143.002,
    cy: 91.161,
    r: 11.775
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 143.002,
    cy: 139.012,
    r: 32.239
  }))), /*#__PURE__*/react.createElement("path", {
    stroke: "#DADBDD",
    strokeLinecap: "round",
    strokeWidth: 3,
    d: "M126 154.5h33M117 165.748l51.259-.205"
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#no_freelancers_found_svg__i)"
  }, /*#__PURE__*/react.createElement("foreignObject", {
    width: 75.387,
    height: 73.648,
    x: 152.6,
    y: 122.1
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      backdropFilter: 'blur(3.2px)',
      clipPath: 'url(#no_freelancers_found_svg__j)',
      height: '100%',
      width: '100%'
    }
  })), /*#__PURE__*/react.createElement("path", {
    fill: "#F5F5F5",
    fillOpacity: 0.3,
    stroke: "#E4E5E7",
    strokeWidth: 0.8,
    d: "M190.293 128.9c17.072 0 30.893 13.453 30.894 30.024s-13.822 30.024-30.894 30.024-30.893-13.453-30.893-30.024 13.821-30.023 30.893-30.024Z",
    "data-figma-bg-blur-radius": 6.4
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "m221.601 187.209-3.546 3.546-8.354-8.354 3.546-3.546z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "m239.351 202.817-5.683 5.683-17.026-17.026 5.683-5.683z"
  })), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "no_freelancers_found_svg__b",
    x1: 64.037,
    x2: 94.931,
    y1: 90.403,
    y2: 126.67,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#7A7A7A",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#7A7A7A"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "no_freelancers_found_svg__c",
    x1: 37,
    x2: 0,
    y1: 61.5,
    y2: 61.5,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "no_freelancers_found_svg__f",
    x1: 1.054,
    x2: 76.74,
    y1: -23.447,
    y2: 75.062,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#256020"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D0E500"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "no_freelancers_found_svg__g",
    x1: 117.281,
    x2: 162.565,
    y1: 76.639,
    y2: 129.796,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#7A7A7A",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#7A7A7A"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "no_freelancers_found_svg__a",
    width: 97.289,
    height: 114.01,
    x: 34.519,
    y: 62.165,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 3.457
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1330_396"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1330_396",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "no_freelancers_found_svg__d",
    width: 129.904,
    height: 151.286,
    x: 77.786,
    y: 41.357,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 5.714
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1330_396"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1330_396",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "no_freelancers_found_svg__e",
    width: 92.5,
    height: 92.5,
    x: 96.75,
    y: 54.249,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1330_396"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1330_396",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "no_freelancers_found_svg__i",
    width: 96.351,
    height: 96,
    x: 151,
    y: 124.5,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", {
    dy: 4
  }), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1330_396"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1330_396",
    result: "shape"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "no_freelancers_found_svg__j",
    transform: "translate(-152.6 -122.1)"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M190.293 128.9c17.072 0 30.893 13.453 30.894 30.024s-13.822 30.024-30.894 30.024-30.893-13.453-30.893-30.024 13.821-30.023 30.893-30.024"
  }))));
};
NoFreelancersFoundIllustration.displayName = 'NoFreelancersFoundIllustration';
/* harmony default export */ const NoFreelancersFound = (NoFreelancersFoundIllustration);
try {
    // @ts-ignore
    NoFreelancersFoundIllustration.displayName = "NoFreelancersFoundIllustration";
    // @ts-ignore
    NoFreelancersFoundIllustration.__docgenInfo = { "description": "", "displayName": "NoFreelancersFoundIllustration", "props": { "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('NoFreelancersFoundIllustration')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/illustrations/NoFreelancersFound.tsx#NoFreelancersFoundIllustration"] = { docgenInfo: NoFreelancersFoundIllustration.__docgenInfo, name: "NoFreelancersFoundIllustration", path: "../visuals/src/components/generated_visuals/illustrations/NoFreelancersFound.tsx#NoFreelancersFoundIllustration" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/illustrations/NotificationsEmptyInitial.tsx



const NotificationsEmptyInitialIllustration = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('NotificationsEmptyInitialIllustration')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* ILLUSTRATIONS_SIZES */.FO[size].width,
    height: constants/* ILLUSTRATIONS_SIZES */.FO[size].height,
    fill: "none",
    viewBox: "0 0 280 225",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("g", {
    filter: "url(#notifications_empty_initial_svg__a)"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 28.355,
    cy: 28.355,
    r: 28.355,
    fill: "url(#notifications_empty_initial_svg__b)",
    transform: "scale(-1 1)rotate(-15 479.855 680.853)"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 7.829,
    cy: 7.829,
    r: 7.829,
    fill: "#FBFBFB",
    stroke: "#DADBDD",
    transform: "scale(-1 1)rotate(-15 41.457 659.262)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#FBFBFB",
    fillRule: "evenodd",
    stroke: "#DADBDD",
    d: "M114.63 51.126c12.99-7.022 28.443-8.726 42.972-4.834s27.06 13.096 34.798 25.672c7.747 12.589 10.055 27.54 6.3 41.556l-6.274 23.415c-2.196 8.193.111 19.63 3.327 29.4 1.708 5.189.111 10.399-2.939 13.886-3.075 3.517-8.146 5.832-13.686 4.347L69.822 155.28c-5.54-1.485-8.775-6.025-9.68-10.608-.897-4.545.325-9.855 4.4-13.495 7.67-6.853 15.385-15.604 17.58-23.797l6.275-23.416c3.755-14.015 13.23-25.81 26.233-32.838Z",
    clipRule: "evenodd"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#DADBDD",
    d: "m89.137 125.475 88.165 23.624"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#DADBDD",
    strokeLinejoin: "bevel",
    d: "M197.9 44.417c16.065 0 29.088 13.023 29.088 29.087 0 16.065-13.023 29.088-29.088 29.088s-29.088-13.023-29.088-29.088 13.023-29.088 29.088-29.088Z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 21.962,
    cy: 21.962,
    r: 21.962,
    fill: "url(#notifications_empty_initial_svg__c)",
    transform: "matrix(-1 0 0 1 219.864 51.541)"
  }), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "notifications_empty_initial_svg__b",
    x1: 85.753,
    x2: 5.317,
    y1: 70.238,
    y2: 7.089,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "notifications_empty_initial_svg__c",
    x1: 0.704,
    x2: 51.255,
    y1: -15.66,
    y2: 50.134,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#256020"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D0E500"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "notifications_empty_initial_svg__a",
    width: 157.599,
    height: 181.408,
    x: 51.365,
    y: 22.398,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1109_359"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1109_359",
    result: "shape"
  }))));
};
NotificationsEmptyInitialIllustration.displayName = 'NotificationsEmptyInitialIllustration';
/* harmony default export */ const NotificationsEmptyInitial = (NotificationsEmptyInitialIllustration);
try {
    // @ts-ignore
    NotificationsEmptyInitialIllustration.displayName = "NotificationsEmptyInitialIllustration";
    // @ts-ignore
    NotificationsEmptyInitialIllustration.__docgenInfo = { "description": "", "displayName": "NotificationsEmptyInitialIllustration", "props": { "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('NotificationsEmptyInitialIllustration')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/illustrations/NotificationsEmptyInitial.tsx#NotificationsEmptyInitialIllustration"] = { docgenInfo: NotificationsEmptyInitialIllustration.__docgenInfo, name: "NotificationsEmptyInitialIllustration", path: "../visuals/src/components/generated_visuals/illustrations/NotificationsEmptyInitial.tsx#NotificationsEmptyInitialIllustration" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/illustrations/OrdersActive.tsx



const OrdersActiveIllustration = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('OrdersActiveIllustration')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* ILLUSTRATIONS_SIZES */.FO[size].width,
    height: constants/* ILLUSTRATIONS_SIZES */.FO[size].height,
    fill: "none",
    viewBox: "0 0 242 193",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_active_svg__a)"
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#orders_active_svg__b)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 180,
    height: 50.571,
    x: 22.286,
    y: 71.643,
    fill: "#fff",
    rx: 6
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "M177.429 100.786a1.714 1.714 0 0 1 0 3.428H84a1.714 1.714 0 1 1 0-3.428zM134.571 89.643a1.715 1.715 0 1 1 0 3.428h-50.57a1.714 1.714 0 1 1 0-3.428z"
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_active_svg__c)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 39.555,
    height: 38.59,
    x: 28.074,
    y: 77.431,
    fill: "url(#orders_active_svg__d)",
    rx: 2.251
  }))), /*#__PURE__*/react.createElement("rect", {
    width: 179,
    height: 49.571,
    x: 22.786,
    y: 72.143,
    stroke: "#E4E5E7",
    rx: 5.5
  })), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_active_svg__e)",
    opacity: 0.4
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#orders_active_svg__f)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 154.286,
    height: 43.347,
    x: 35.223,
    y: 127.54,
    fill: "#fff",
    rx: 5.143
  }), /*#__PURE__*/react.createElement("rect", {
    width: 84.347,
    height: 3.308,
    x: 86.582,
    y: 151.521,
    fill: "#E4E5E7",
    rx: 1.654
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "M86.652 142.419c0-.913.74-1.654 1.653-1.654h56.232a1.654 1.654 0 0 1 0 3.308H88.305a1.654 1.654 0 0 1-1.653-1.654"
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_active_svg__g)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 33.904,
    height: 33.077,
    x: 40.185,
    y: 132.501,
    fill: "url(#orders_active_svg__h)",
    rx: 2.894
  }))), /*#__PURE__*/react.createElement("rect", {
    width: 153.429,
    height: 42.49,
    x: 35.652,
    y: 127.969,
    stroke: "#E4E5E7",
    strokeWidth: 0.857,
    rx: 4.714
  })), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_active_svg__i)",
    opacity: 0.4
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#orders_active_svg__j)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 154.286,
    height: 43.347,
    x: 35.223,
    y: 22.786,
    fill: "#fff",
    rx: 5.143
  }), /*#__PURE__*/react.createElement("rect", {
    width: 84.347,
    height: 3.308,
    x: 86.582,
    y: 46.767,
    fill: "#E4E5E7",
    rx: 1.654
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "M86.652 37.664c0-.913.74-1.654 1.654-1.654h56.231a1.654 1.654 0 0 1 0 3.308H88.306c-.914 0-1.654-.74-1.654-1.654"
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_active_svg__k)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 33.904,
    height: 33.077,
    x: 40.185,
    y: 27.747,
    fill: "url(#orders_active_svg__l)",
    rx: 2.894
  }))), /*#__PURE__*/react.createElement("rect", {
    width: 153.429,
    height: 42.49,
    x: 35.652,
    y: 23.214,
    stroke: "#E4E5E7",
    strokeWidth: 0.857,
    rx: 4.714
  })), /*#__PURE__*/react.createElement("path", {
    fill: "url(#orders_active_svg__m)",
    d: "M0 0h44.571v177.429H0z",
    transform: "matrix(0 1 1 0 22.286 127.357)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#orders_active_svg__n)",
    d: "M0 0h44.571v180H0z",
    transform: "matrix(0 -1 -1 0 202.286 66.5)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#E4E5E7",
    strokeLinejoin: "bevel",
    strokeWidth: 1.126,
    d: "M214.013 33.5c14.919 0 27.013 12.094 27.013 27.013s-12.094 27.013-27.013 27.013S187 75.432 187 60.513 199.094 33.5 214.013 33.5Z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 22.016,
    cy: 22.016,
    r: 22.016,
    fill: "url(#orders_active_svg__o)",
    transform: "matrix(-1 0 0 1 236.03 38.497)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M207.5 60.5A6.5 6.5 0 1 0 214 54v-3a9.5 9.5 0 0 1 9.5 9.5A9.5 9.5 0 0 1 214 70a9.5 9.5 0 0 1-9.5-9.5z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    fillOpacity: 0.5,
    d: "M214 54a6.5 6.5 0 0 0-6.5 6.5h-3A9.5 9.5 0 0 1 214 51z"
  }), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_active_svg__d",
    x1: 87.406,
    x2: 48.419,
    y1: 140.14,
    y2: 70.222,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_active_svg__h",
    x1: 91.041,
    x2: 57.623,
    y1: 186.252,
    y2: 126.322,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_active_svg__l",
    x1: 91.041,
    x2: 57.623,
    y1: 81.497,
    y2: 21.568,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_active_svg__m",
    x1: 44.571,
    x2: 0,
    y1: 88.714,
    y2: 88.714,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_active_svg__n",
    x1: 44.571,
    x2: 0,
    y1: 90,
    y2: 90,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_active_svg__o",
    x1: 0.705,
    x2: 51.38,
    y1: -15.698,
    y2: 50.257,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#256020"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D0E500"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_active_svg__a",
    width: 191.192,
    height: 61.763,
    x: 16.69,
    y: 66.047,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 2.798
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1736_1390"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1736_1390",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_active_svg__c",
    width: 57.563,
    height: 56.599,
    x: 19.07,
    y: 68.427,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4.502
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1736_1390"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1736_1390",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_active_svg__e",
    width: 163.879,
    height: 52.94,
    x: 30.427,
    y: 122.744,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 2.398
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1736_1390"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1736_1390",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_active_svg__g",
    width: 46.372,
    height: 45.545,
    x: 33.951,
    y: 126.268,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 3.117
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1736_1390"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1736_1390",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_active_svg__i",
    width: 163.879,
    height: 52.94,
    x: 30.427,
    y: 17.989,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 2.398
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1736_1390"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1736_1390",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_active_svg__k",
    width: 46.372,
    height: 45.545,
    x: 33.951,
    y: 21.513,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 3.117
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1736_1390"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1736_1390",
    result: "shape"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "orders_active_svg__b"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 180,
    height: 50.571,
    x: 22.286,
    y: 71.643,
    fill: "#fff",
    rx: 6
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "orders_active_svg__f"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 154.286,
    height: 43.347,
    x: 35.223,
    y: 127.54,
    fill: "#fff",
    rx: 5.143
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "orders_active_svg__j"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 154.286,
    height: 43.347,
    x: 35.223,
    y: 22.786,
    fill: "#fff",
    rx: 5.143
  }))));
};
OrdersActiveIllustration.displayName = 'OrdersActiveIllustration';
/* harmony default export */ const OrdersActive = (OrdersActiveIllustration);
try {
    // @ts-ignore
    OrdersActiveIllustration.displayName = "OrdersActiveIllustration";
    // @ts-ignore
    OrdersActiveIllustration.__docgenInfo = { "description": "", "displayName": "OrdersActiveIllustration", "props": { "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('OrdersActiveIllustration')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/illustrations/OrdersActive.tsx#OrdersActiveIllustration"] = { docgenInfo: OrdersActiveIllustration.__docgenInfo, name: "OrdersActiveIllustration", path: "../visuals/src/components/generated_visuals/illustrations/OrdersActive.tsx#OrdersActiveIllustration" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/illustrations/OrdersAllResults.tsx



const OrdersAllResultsIllustration = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('OrdersAllResultsIllustration')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* ILLUSTRATIONS_SIZES */.FO[size].width,
    height: constants/* ILLUSTRATIONS_SIZES */.FO[size].height,
    fill: "none",
    viewBox: "0 0 240 193",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_all_results_svg__a)"
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#orders_all_results_svg__b)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 180,
    height: 50.571,
    x: 30,
    y: 71.643,
    fill: "#fff",
    rx: 6
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "M185.143 100.786a1.714 1.714 0 1 1 0 3.428H91.714a1.714 1.714 0 1 1 0-3.428zM142.286 89.643a1.715 1.715 0 0 1 0 3.428H91.714a1.714 1.714 0 1 1 0-3.428z"
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_all_results_svg__c)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 39.555,
    height: 38.59,
    x: 35.788,
    y: 77.431,
    fill: "url(#orders_all_results_svg__d)",
    rx: 2.251
  })), /*#__PURE__*/react.createElement("path", {
    fill: "url(#orders_all_results_svg__e)",
    d: "M65.523 87.077c.002 5.505-4.484 9.967-10.024 9.976 5.54.012 10.03 4.477 10.032 9.982l-20.095-.006c0-5.505 4.485-9.967 10.024-9.976-5.54-.012-10.03-4.477-10.031-9.981z"
  })), /*#__PURE__*/react.createElement("rect", {
    width: 179,
    height: 49.571,
    x: 30.5,
    y: 72.143,
    stroke: "#E4E5E7",
    rx: 5.5
  })), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_all_results_svg__f)",
    opacity: 0.4
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#orders_all_results_svg__g)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 154.286,
    height: 43.347,
    x: 42.938,
    y: 127.54,
    fill: "#fff",
    rx: 5.143
  }), /*#__PURE__*/react.createElement("rect", {
    width: 84.347,
    height: 3.308,
    x: 94.296,
    y: 151.521,
    fill: "#E4E5E7",
    rx: 1.654
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "M94.366 142.419c0-.913.74-1.654 1.654-1.654h56.231a1.655 1.655 0 0 1 0 3.308H96.02a1.654 1.654 0 0 1-1.654-1.654"
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_all_results_svg__h)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 33.904,
    height: 33.077,
    x: 47.899,
    y: 132.501,
    fill: "url(#orders_all_results_svg__i)",
    rx: 2.894
  }))), /*#__PURE__*/react.createElement("rect", {
    width: 153.429,
    height: 42.49,
    x: 43.366,
    y: 127.969,
    stroke: "#E4E5E7",
    strokeWidth: 0.857,
    rx: 4.714
  })), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_all_results_svg__j)",
    opacity: 0.4
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#orders_all_results_svg__k)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 154.286,
    height: 43.347,
    x: 42.938,
    y: 22.786,
    fill: "#fff",
    rx: 5.143
  }), /*#__PURE__*/react.createElement("rect", {
    width: 84.347,
    height: 3.308,
    x: 94.296,
    y: 46.767,
    fill: "#E4E5E7",
    rx: 1.654
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "M94.366 37.664c0-.913.74-1.654 1.654-1.654h56.231a1.654 1.654 0 0 1 0 3.308H96.02c-.914 0-1.654-.74-1.654-1.654"
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_all_results_svg__l)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 33.904,
    height: 33.077,
    x: 47.899,
    y: 27.747,
    fill: "url(#orders_all_results_svg__m)",
    rx: 2.894
  }))), /*#__PURE__*/react.createElement("rect", {
    width: 153.429,
    height: 42.49,
    x: 43.366,
    y: 23.214,
    stroke: "#E4E5E7",
    strokeWidth: 0.857,
    rx: 4.714
  })), /*#__PURE__*/react.createElement("path", {
    fill: "url(#orders_all_results_svg__n)",
    d: "M0 0h44.571v177.429H0z",
    transform: "matrix(0 1 1 0 30 127.357)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#orders_all_results_svg__o)",
    d: "M0 0h44.571v180H0z",
    transform: "matrix(0 -1 -1 0 210 66.5)"
  }), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_all_results_svg__d",
    x1: 22.714,
    x2: 85.285,
    y1: 70.786,
    y2: 124.786,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#256020"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D0E500"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_all_results_svg__e",
    x1: 45.682,
    x2: 63.358,
    y1: 81.474,
    y2: 107.961,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#F5F5F5",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#F5F5F5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_all_results_svg__i",
    x1: 98.755,
    x2: 65.337,
    y1: 186.252,
    y2: 126.322,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_all_results_svg__m",
    x1: 98.755,
    x2: 65.337,
    y1: 81.497,
    y2: 21.568,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_all_results_svg__n",
    x1: 44.571,
    x2: 0,
    y1: 88.714,
    y2: 88.714,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_all_results_svg__o",
    x1: 44.571,
    x2: 0,
    y1: 90,
    y2: 90,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_all_results_svg__a",
    width: 191.192,
    height: 61.763,
    x: 24.404,
    y: 66.047,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 2.798
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1735_1012"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1735_1012",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_all_results_svg__c",
    width: 57.563,
    height: 56.599,
    x: 26.784,
    y: 68.427,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4.502
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1735_1012"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1735_1012",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_all_results_svg__f",
    width: 163.879,
    height: 52.94,
    x: 38.141,
    y: 122.744,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 2.398
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1735_1012"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1735_1012",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_all_results_svg__h",
    width: 46.372,
    height: 45.545,
    x: 41.665,
    y: 126.268,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 3.117
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1735_1012"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1735_1012",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_all_results_svg__j",
    width: 163.879,
    height: 52.94,
    x: 38.141,
    y: 17.989,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 2.398
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1735_1012"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1735_1012",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_all_results_svg__l",
    width: 46.372,
    height: 45.545,
    x: 41.665,
    y: 21.513,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 3.117
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1735_1012"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1735_1012",
    result: "shape"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "orders_all_results_svg__b"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 180,
    height: 50.571,
    x: 30,
    y: 71.643,
    fill: "#fff",
    rx: 6
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "orders_all_results_svg__g"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 154.286,
    height: 43.347,
    x: 42.938,
    y: 127.54,
    fill: "#fff",
    rx: 5.143
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "orders_all_results_svg__k"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 154.286,
    height: 43.347,
    x: 42.938,
    y: 22.786,
    fill: "#fff",
    rx: 5.143
  }))));
};
OrdersAllResultsIllustration.displayName = 'OrdersAllResultsIllustration';
/* harmony default export */ const OrdersAllResults = (OrdersAllResultsIllustration);
try {
    // @ts-ignore
    OrdersAllResultsIllustration.displayName = "OrdersAllResultsIllustration";
    // @ts-ignore
    OrdersAllResultsIllustration.__docgenInfo = { "description": "", "displayName": "OrdersAllResultsIllustration", "props": { "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('OrdersAllResultsIllustration')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/illustrations/OrdersAllResults.tsx#OrdersAllResultsIllustration"] = { docgenInfo: OrdersAllResultsIllustration.__docgenInfo, name: "OrdersAllResultsIllustration", path: "../visuals/src/components/generated_visuals/illustrations/OrdersAllResults.tsx#OrdersAllResultsIllustration" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/illustrations/OrdersCanceled.tsx



const OrdersCanceledIllustration = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('OrdersCanceledIllustration')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* ILLUSTRATIONS_SIZES */.FO[size].width,
    height: constants/* ILLUSTRATIONS_SIZES */.FO[size].height,
    fill: "none",
    viewBox: "0 0 240 193",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_canceled_svg__a)"
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#orders_canceled_svg__b)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 180,
    height: 50.571,
    x: 22.286,
    y: 71.643,
    fill: "#fff",
    rx: 6
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#E4E5E7",
    strokeLinecap: "round",
    strokeWidth: 4,
    d: "M84.286 102.214h92.857M84 91.357h50.571"
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_canceled_svg__c)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 39.555,
    height: 38.59,
    x: 28.074,
    y: 77.431,
    fill: "url(#orders_canceled_svg__d)",
    rx: 2.251
  }))), /*#__PURE__*/react.createElement("rect", {
    width: 179,
    height: 49.571,
    x: 22.786,
    y: 72.143,
    stroke: "#E4E5E7",
    rx: 5.5
  })), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_canceled_svg__e)",
    opacity: 0.4
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#orders_canceled_svg__f)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 154.286,
    height: 43.347,
    x: 35.223,
    y: 127.54,
    fill: "#fff",
    rx: 5.143
  }), /*#__PURE__*/react.createElement("rect", {
    width: 84.347,
    height: 3.308,
    x: 86.582,
    y: 151.521,
    fill: "#E4E5E7",
    rx: 1.654
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "M86.652 142.419c0-.913.74-1.654 1.653-1.654h56.232a1.654 1.654 0 0 1 0 3.308H88.305a1.654 1.654 0 0 1-1.653-1.654"
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_canceled_svg__g)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 33.904,
    height: 33.077,
    x: 40.185,
    y: 132.501,
    fill: "url(#orders_canceled_svg__h)",
    rx: 2.894
  }))), /*#__PURE__*/react.createElement("rect", {
    width: 153.429,
    height: 42.49,
    x: 35.652,
    y: 127.969,
    stroke: "#E4E5E7",
    strokeWidth: 0.857,
    rx: 4.714
  })), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_canceled_svg__i)",
    opacity: 0.4
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#orders_canceled_svg__j)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 154.286,
    height: 43.347,
    x: 35.223,
    y: 22.786,
    fill: "#fff",
    rx: 5.143
  }), /*#__PURE__*/react.createElement("rect", {
    width: 84.347,
    height: 3.308,
    x: 86.582,
    y: 46.767,
    fill: "#E4E5E7",
    rx: 1.654
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "M86.652 37.664c0-.913.74-1.654 1.654-1.654h56.231a1.654 1.654 0 0 1 0 3.308H88.306c-.914 0-1.654-.74-1.654-1.654"
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_canceled_svg__k)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 33.904,
    height: 33.077,
    x: 40.185,
    y: 27.747,
    fill: "url(#orders_canceled_svg__l)",
    rx: 2.894
  }))), /*#__PURE__*/react.createElement("rect", {
    width: 153.429,
    height: 42.49,
    x: 35.652,
    y: 23.214,
    stroke: "#E4E5E7",
    strokeWidth: 0.857,
    rx: 4.714
  })), /*#__PURE__*/react.createElement("path", {
    fill: "url(#orders_canceled_svg__m)",
    d: "M0 0h44.571v177.429H0z",
    transform: "matrix(0 1 1 0 22.286 127.357)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#orders_canceled_svg__n)",
    d: "M0 0h44.571v180H0z",
    transform: "matrix(0 -1 -1 0 202.286 66.5)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#E4E5E7",
    strokeLinejoin: "bevel",
    strokeWidth: 1.126,
    d: "M200.582 42.5c12.788 0 23.154 10.367 23.154 23.154 0 12.788-10.366 23.154-23.154 23.154s-23.154-10.366-23.154-23.154S187.795 42.5 200.582 42.5Z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 18.871,
    cy: 18.871,
    r: 18.871,
    fill: "url(#orders_canceled_svg__o)",
    transform: "matrix(-1 0 0 1 219.454 46.783)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "m200.645 63.28 5.205-5.205 2.436 2.437-5.206 5.204 5.206 5.206-2.436 2.435-5.205-5.205-5.352 5.352-2.436-2.436 5.352-5.352-5.352-5.352 2.436-2.435z"
  }), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_canceled_svg__d",
    x1: 87.406,
    x2: 48.419,
    y1: 140.14,
    y2: 70.222,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_canceled_svg__h",
    x1: 91.041,
    x2: 57.623,
    y1: 186.252,
    y2: 126.322,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_canceled_svg__l",
    x1: 91.041,
    x2: 57.623,
    y1: 81.497,
    y2: 21.568,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_canceled_svg__m",
    x1: 44.571,
    x2: 0,
    y1: 88.714,
    y2: 88.714,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_canceled_svg__n",
    x1: 44.571,
    x2: 0,
    y1: 90,
    y2: 90,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_canceled_svg__o",
    x1: 0.605,
    x2: 44.04,
    y1: -13.456,
    y2: 43.077,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#256020"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D0E500"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_canceled_svg__a",
    width: 191.192,
    height: 61.763,
    x: 16.69,
    y: 66.047,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 2.798
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1736_1258"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1736_1258",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_canceled_svg__c",
    width: 57.563,
    height: 56.599,
    x: 19.07,
    y: 68.427,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4.502
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1736_1258"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1736_1258",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_canceled_svg__e",
    width: 163.879,
    height: 52.94,
    x: 30.427,
    y: 122.744,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 2.398
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1736_1258"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1736_1258",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_canceled_svg__g",
    width: 46.372,
    height: 45.545,
    x: 33.951,
    y: 126.268,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 3.117
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1736_1258"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1736_1258",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_canceled_svg__i",
    width: 163.879,
    height: 52.94,
    x: 30.427,
    y: 17.989,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 2.398
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1736_1258"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1736_1258",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_canceled_svg__k",
    width: 46.372,
    height: 45.545,
    x: 33.951,
    y: 21.513,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 3.117
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1736_1258"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1736_1258",
    result: "shape"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "orders_canceled_svg__b"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 180,
    height: 50.571,
    x: 22.286,
    y: 71.643,
    fill: "#fff",
    rx: 6
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "orders_canceled_svg__f"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 154.286,
    height: 43.347,
    x: 35.223,
    y: 127.54,
    fill: "#fff",
    rx: 5.143
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "orders_canceled_svg__j"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 154.286,
    height: 43.347,
    x: 35.223,
    y: 22.786,
    fill: "#fff",
    rx: 5.143
  }))));
};
OrdersCanceledIllustration.displayName = 'OrdersCanceledIllustration';
/* harmony default export */ const OrdersCanceled = (OrdersCanceledIllustration);
try {
    // @ts-ignore
    OrdersCanceledIllustration.displayName = "OrdersCanceledIllustration";
    // @ts-ignore
    OrdersCanceledIllustration.__docgenInfo = { "description": "", "displayName": "OrdersCanceledIllustration", "props": { "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('OrdersCanceledIllustration')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/illustrations/OrdersCanceled.tsx#OrdersCanceledIllustration"] = { docgenInfo: OrdersCanceledIllustration.__docgenInfo, name: "OrdersCanceledIllustration", path: "../visuals/src/components/generated_visuals/illustrations/OrdersCanceled.tsx#OrdersCanceledIllustration" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/illustrations/OrdersCompleted.tsx



const OrdersCompletedIllustration = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('OrdersCompletedIllustration')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* ILLUSTRATIONS_SIZES */.FO[size].width,
    height: constants/* ILLUSTRATIONS_SIZES */.FO[size].height,
    fill: "none",
    viewBox: "0 0 240 193",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_completed_svg__a)"
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#orders_completed_svg__b)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 180,
    height: 50.571,
    x: 22.286,
    y: 71.643,
    fill: "#fff",
    rx: 6
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "M177.429 100.786a1.714 1.714 0 0 1 0 3.428H84a1.714 1.714 0 1 1 0-3.428zM134.571 89.643a1.715 1.715 0 1 1 0 3.428H84a1.714 1.714 0 1 1 0-3.428z"
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_completed_svg__c)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 39.555,
    height: 38.59,
    x: 28.074,
    y: 77.431,
    fill: "url(#orders_completed_svg__d)",
    rx: 3
  }))), /*#__PURE__*/react.createElement("rect", {
    width: 179,
    height: 49.571,
    x: 22.786,
    y: 72.143,
    stroke: "#E4E5E7",
    rx: 5.5
  })), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_completed_svg__e)",
    opacity: 0.4
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#orders_completed_svg__f)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 154.286,
    height: 43.347,
    x: 35.223,
    y: 127.54,
    fill: "#fff",
    rx: 5.143
  }), /*#__PURE__*/react.createElement("rect", {
    width: 84.347,
    height: 3.308,
    x: 86.582,
    y: 151.521,
    fill: "#E4E5E7",
    rx: 1.654
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "M86.652 142.419c0-.913.74-1.654 1.653-1.654h56.232a1.654 1.654 0 0 1 0 3.308H88.305a1.654 1.654 0 0 1-1.653-1.654"
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_completed_svg__g)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 33.904,
    height: 33.077,
    x: 40.185,
    y: 132.502,
    fill: "url(#orders_completed_svg__h)",
    rx: 2.894
  }))), /*#__PURE__*/react.createElement("rect", {
    width: 153.429,
    height: 42.49,
    x: 35.652,
    y: 127.969,
    stroke: "#E4E5E7",
    strokeWidth: 0.857,
    rx: 4.714
  })), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_completed_svg__i)",
    opacity: 0.4
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#orders_completed_svg__j)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 154.286,
    height: 43.347,
    x: 35.223,
    y: 22.786,
    fill: "#fff",
    rx: 5.143
  }), /*#__PURE__*/react.createElement("rect", {
    width: 98.404,
    height: 3.308,
    x: 86.57,
    y: 47.624,
    fill: "#E4E5E7",
    rx: 1.654
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "M86.652 38.522c0-.914.74-1.654 1.653-1.654h66.155a1.654 1.654 0 0 1 0 3.307H88.305c-.913 0-1.653-.74-1.653-1.653"
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_completed_svg__k)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 33.429,
    height: 33.429,
    x: 41.143,
    y: 27.5,
    fill: "url(#orders_completed_svg__l)",
    rx: 2.894
  }))), /*#__PURE__*/react.createElement("rect", {
    width: 153.429,
    height: 42.49,
    x: 35.652,
    y: 23.214,
    stroke: "#E4E5E7",
    strokeWidth: 0.857,
    rx: 4.714
  })), /*#__PURE__*/react.createElement("path", {
    fill: "url(#orders_completed_svg__m)",
    d: "M0 0h44.571v177.429H0z",
    transform: "matrix(0 1 1 0 22.286 127.357)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#orders_completed_svg__n)",
    d: "M0 0h44.571v180H0z",
    transform: "matrix(0 -1 -1 0 202.286 66.5)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#E4E5E7",
    strokeLinejoin: "bevel",
    strokeWidth: 1.126,
    d: "M200.583 42.5c12.787 0 23.154 10.367 23.154 23.154 0 12.788-10.367 23.154-23.154 23.154-12.788 0-23.154-10.366-23.154-23.154S187.795 42.5 200.583 42.5Z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 18.871,
    cy: 18.871,
    r: 18.871,
    fill: "url(#orders_completed_svg__o)",
    transform: "matrix(-1 0 0 1 219.454 46.783)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M210 61.379 198.637 73 191 65.367l2.524-2.407 5.084 5.081 8.84-9.041z"
  }), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_completed_svg__d",
    x1: 87.406,
    x2: 48.419,
    y1: 140.14,
    y2: 70.222,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_completed_svg__h",
    x1: 91.041,
    x2: 57.623,
    y1: 186.252,
    y2: 126.323,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_completed_svg__l",
    x1: 91.286,
    x2: 57.079,
    y1: 81.821,
    y2: 21.974,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_completed_svg__m",
    x1: 44.571,
    x2: 0,
    y1: 88.714,
    y2: 88.714,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_completed_svg__n",
    x1: 44.571,
    x2: 0,
    y1: 90,
    y2: 90,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_completed_svg__o",
    x1: 0.605,
    x2: 44.04,
    y1: -13.456,
    y2: 43.077,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#256020"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D0E500"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_completed_svg__a",
    width: 191.192,
    height: 61.763,
    x: 16.69,
    y: 66.047,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 2.798
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1736_1133"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1736_1133",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_completed_svg__c",
    width: 57.563,
    height: 56.599,
    x: 19.07,
    y: 68.427,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4.502
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1736_1133"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1736_1133",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_completed_svg__e",
    width: 163.879,
    height: 52.94,
    x: 30.427,
    y: 122.744,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 2.398
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1736_1133"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1736_1133",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_completed_svg__g",
    width: 46.372,
    height: 45.545,
    x: 33.951,
    y: 126.268,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 3.117
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1736_1133"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1736_1133",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_completed_svg__i",
    width: 163.879,
    height: 52.94,
    x: 30.427,
    y: 17.989,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 2.398
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1736_1133"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1736_1133",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_completed_svg__k",
    width: 45.896,
    height: 45.896,
    x: 34.909,
    y: 21.266,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 3.117
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1736_1133"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1736_1133",
    result: "shape"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "orders_completed_svg__b"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 180,
    height: 50.571,
    x: 22.286,
    y: 71.643,
    fill: "#fff",
    rx: 6
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "orders_completed_svg__f"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 154.286,
    height: 43.347,
    x: 35.223,
    y: 127.54,
    fill: "#fff",
    rx: 5.143
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "orders_completed_svg__j"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 154.286,
    height: 43.347,
    x: 35.223,
    y: 22.786,
    fill: "#fff",
    rx: 5.143
  }))));
};
OrdersCompletedIllustration.displayName = 'OrdersCompletedIllustration';
/* harmony default export */ const OrdersCompleted = (OrdersCompletedIllustration);
try {
    // @ts-ignore
    OrdersCompletedIllustration.displayName = "OrdersCompletedIllustration";
    // @ts-ignore
    OrdersCompletedIllustration.__docgenInfo = { "description": "", "displayName": "OrdersCompletedIllustration", "props": { "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('OrdersCompletedIllustration')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/illustrations/OrdersCompleted.tsx#OrdersCompletedIllustration"] = { docgenInfo: OrdersCompletedIllustration.__docgenInfo, name: "OrdersCompletedIllustration", path: "../visuals/src/components/generated_visuals/illustrations/OrdersCompleted.tsx#OrdersCompletedIllustration" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/illustrations/OrdersNoResults.tsx



const OrdersNoResultsIllustration = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('OrdersNoResultsIllustration')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* ILLUSTRATIONS_SIZES */.FO[size].width,
    height: constants/* ILLUSTRATIONS_SIZES */.FO[size].height,
    fill: "none",
    viewBox: "0 0 240 193",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_no_results_svg__a)"
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#orders_no_results_svg__b)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 180,
    height: 50.571,
    x: 41.697,
    y: 46.786,
    fill: "#fff",
    rx: 6
  }), /*#__PURE__*/react.createElement("rect", {
    width: 98.404,
    height: 3.859,
    x: 101.616,
    y: 74.763,
    fill: "#E4E5E7",
    rx: 1.929
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "M101.616 64.15c0-1.065.863-1.93 1.929-1.93h65.603a1.93 1.93 0 1 1 0 3.86h-65.603a1.93 1.93 0 0 1-1.929-1.93"
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_no_results_svg__c)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 39.555,
    height: 38.59,
    x: 47.486,
    y: 52.574,
    fill: "url(#orders_no_results_svg__d)",
    rx: 2.251
  })), /*#__PURE__*/react.createElement("path", {
    fill: "url(#orders_no_results_svg__e)",
    d: "M77.69 61.805c.001 5.505-4.485 9.967-10.025 9.976 5.54.011 10.03 4.477 10.032 9.982l-20.094-.007c-.002-5.504 4.484-9.966 10.023-9.975-5.54-.012-10.03-4.477-10.031-9.982z"
  })), /*#__PURE__*/react.createElement("rect", {
    width: 179,
    height: 49.571,
    x: 42.197,
    y: 47.286,
    stroke: "#E4E5E7",
    rx: 5.5
  })), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_no_results_svg__f)",
    opacity: 0.4
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#orders_no_results_svg__g)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 154.286,
    height: 43.347,
    x: 54.554,
    y: 102.683,
    fill: "#fff",
    rx: 5.143
  }), /*#__PURE__*/react.createElement("rect", {
    width: 84.347,
    height: 3.308,
    x: 105.913,
    y: 126.665,
    fill: "#E4E5E7",
    rx: 1.654
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "M105.983 117.562c0-.913.74-1.654 1.654-1.654h56.231a1.655 1.655 0 0 1 0 3.308h-56.231a1.654 1.654 0 0 1-1.654-1.654"
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_no_results_svg__h)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 33.904,
    height: 33.077,
    x: 59.516,
    y: 107.645,
    fill: "url(#orders_no_results_svg__i)",
    fillOpacity: 0.4,
    rx: 2.894
  }))), /*#__PURE__*/react.createElement("rect", {
    width: 153.429,
    height: 42.49,
    x: 54.983,
    y: 103.112,
    stroke: "#E4E5E7",
    strokeWidth: 0.857,
    rx: 4.714
  })), /*#__PURE__*/react.createElement("g", {
    filter: "url(#orders_no_results_svg__j)"
  }, /*#__PURE__*/react.createElement("foreignObject", {
    width: 67.977,
    height: 67.48,
    x: 12.84,
    y: 66.046
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      backdropFilter: 'blur(3.2px)',
      clipPath: 'url(#orders_no_results_svg__k)',
      height: '100%',
      width: '100%'
    }
  })), /*#__PURE__*/react.createElement("path", {
    fill: "url(#orders_no_results_svg__l)",
    fillOpacity: 0.7,
    stroke: "#E4E5E7",
    strokeWidth: 0.8,
    d: "M73.01 93.069c4.031 14.407-4.423 29.092-18.882 32.802-14.458 3.71-29.449-4.96-33.48-19.367-4.032-14.408 4.423-29.093 18.881-32.803s29.449 4.96 33.48 19.368Z",
    "data-figma-bg-blur-radius": 6.4
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "m32.01 131.356-2.999-1.744 3.898-6.828 3 1.745z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#E4E5E7",
    d: "m25.016 145.609-4.819-2.799 7.965-13.935 4.819 2.8z"
  })), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("filter", {
    id: "orders_no_results_svg__a",
    width: 191.192,
    height: 61.763,
    x: 36.101,
    y: 41.19,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 2.798
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1734_815"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1734_815",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_no_results_svg__c",
    width: 57.563,
    height: 56.599,
    x: 38.481,
    y: 43.57,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4.502
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1734_815"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1734_815",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_no_results_svg__f",
    width: 163.879,
    height: 52.94,
    x: 49.758,
    y: 97.887,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 2.398
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1734_815"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1734_815",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_no_results_svg__h",
    width: 46.372,
    height: 45.545,
    x: 53.282,
    y: 101.411,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 3.117
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1734_815"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1734_815",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "orders_no_results_svg__j",
    width: 71.177,
    height: 89.163,
    x: 11.24,
    y: 68.446,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", {
    dy: 4
  }), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1734_815"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1734_815",
    result: "shape"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_no_results_svg__d",
    x1: 34.412,
    x2: 96.983,
    y1: 45.929,
    y2: 99.929,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#256020"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D0E500"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_no_results_svg__e",
    x1: 57.848,
    x2: 75.524,
    y1: 56.202,
    y2: 82.689,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#F5F5F5",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#F5F5F5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_no_results_svg__i",
    x1: 110.372,
    x2: 76.954,
    y1: 161.395,
    y2: 101.465,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "orders_no_results_svg__l",
    x1: 81.075,
    x2: 24.437,
    y1: 63.344,
    y2: 128.704,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#F5F5F5",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#F5F5F5"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "orders_no_results_svg__k",
    transform: "translate(-12.84 -66.046)"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M73.01 93.069c4.031 14.407-4.423 29.092-18.882 32.802-14.458 3.71-29.449-4.96-33.48-19.367-4.032-14.408 4.423-29.093 18.881-32.803s29.449 4.96 33.48 19.368"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "orders_no_results_svg__b"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 180,
    height: 50.571,
    x: 41.697,
    y: 46.786,
    fill: "#fff",
    rx: 6
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "orders_no_results_svg__g"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 154.286,
    height: 43.347,
    x: 54.554,
    y: 102.683,
    fill: "#fff",
    rx: 5.143
  }))));
};
OrdersNoResultsIllustration.displayName = 'OrdersNoResultsIllustration';
/* harmony default export */ const OrdersNoResults = (OrdersNoResultsIllustration);
try {
    // @ts-ignore
    OrdersNoResultsIllustration.displayName = "OrdersNoResultsIllustration";
    // @ts-ignore
    OrdersNoResultsIllustration.__docgenInfo = { "description": "", "displayName": "OrdersNoResultsIllustration", "props": { "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('OrdersNoResultsIllustration')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/illustrations/OrdersNoResults.tsx#OrdersNoResultsIllustration"] = { docgenInfo: OrdersNoResultsIllustration.__docgenInfo, name: "OrdersNoResultsIllustration", path: "../visuals/src/components/generated_visuals/illustrations/OrdersNoResults.tsx#OrdersNoResultsIllustration" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/illustrations/Reviews.tsx



const ReviewsIllustration = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('ReviewsIllustration')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* ILLUSTRATIONS_SIZES */.FO[size].width,
    height: constants/* ILLUSTRATIONS_SIZES */.FO[size].height,
    fill: "none",
    viewBox: "0 0 240 193",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#reviews_svg__a)"
  }, /*#__PURE__*/react.createElement("g", {
    opacity: 0.5
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#E4E5E7",
    d: "M47.51 72.128c14.835 0 26.861 12.026 26.861 26.86s-12.026 26.86-26.86 26.86h-.65C32.025 125.848 20 113.822 20 98.988s12.026-26.86 26.86-26.86z"
  }), /*#__PURE__*/react.createElement("ellipse", {
    cx: 23.404,
    cy: 23.282,
    fill: "url(#reviews_svg__b)",
    rx: 23.404,
    ry: 23.282,
    transform: "matrix(-1 0 0 1 70.59 75.705)"
  }), /*#__PURE__*/react.createElement("mask", {
    id: "reviews_svg__d",
    width: 48,
    height: 48,
    x: 23,
    y: 75,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: 'alpha'
    }
  }, /*#__PURE__*/react.createElement("ellipse", {
    cx: 47.184,
    cy: 98.988,
    fill: "url(#reviews_svg__c)",
    rx: 23.404,
    ry: 23.283
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#fff",
    mask: "url(#reviews_svg__d)"
  }, /*#__PURE__*/react.createElement("ellipse", {
    cx: 47.186,
    cy: 92.421,
    rx: 8.381,
    ry: 8.337
  }), /*#__PURE__*/react.createElement("ellipse", {
    cx: 47.186,
    cy: 126.302,
    rx: 22.946,
    ry: 22.827
  }))), /*#__PURE__*/react.createElement("g", {
    opacity: 0.5
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#E4E5E7",
    d: "M184.363 72.128c14.834 0 26.86 12.026 26.86 26.86s-12.026 26.86-26.86 26.86h-.651c-14.834 0-26.86-12.026-26.86-26.86s12.026-26.86 26.86-26.86z"
  }), /*#__PURE__*/react.createElement("ellipse", {
    cx: 23.404,
    cy: 23.282,
    fill: "url(#reviews_svg__e)",
    rx: 23.404,
    ry: 23.282,
    transform: "matrix(-1 0 0 1 207.442 75.705)"
  }), /*#__PURE__*/react.createElement("mask", {
    id: "reviews_svg__g",
    width: 48,
    height: 48,
    x: 160,
    y: 75,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: 'alpha'
    }
  }, /*#__PURE__*/react.createElement("ellipse", {
    cx: 184.036,
    cy: 98.988,
    fill: "url(#reviews_svg__f)",
    rx: 23.404,
    ry: 23.283
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#fff",
    mask: "url(#reviews_svg__g)"
  }, /*#__PURE__*/react.createElement("ellipse", {
    cx: 184.038,
    cy: 92.421,
    rx: 8.381,
    ry: 8.337
  }), /*#__PURE__*/react.createElement("ellipse", {
    cx: 184.038,
    cy: 126.302,
    rx: 22.946,
    ry: 22.827
  }))), /*#__PURE__*/react.createElement("g", {
    opacity: 0.5
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#E4E5E7",
    d: "M116.033 64.17c19.23 0 34.819 15.588 34.819 34.818s-15.589 34.819-34.819 34.819h-.843c-19.23 0-34.82-15.589-34.82-34.819S95.96 64.17 115.19 64.17z"
  }), /*#__PURE__*/react.createElement("ellipse", {
    cx: 30.338,
    cy: 30.181,
    fill: "url(#reviews_svg__h)",
    rx: 30.338,
    ry: 30.181,
    transform: "matrix(-1 0 0 1 145.95 68.807)"
  }), /*#__PURE__*/react.createElement("mask", {
    id: "reviews_svg__j",
    width: 61,
    height: 62,
    x: 85,
    y: 68,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: 'alpha'
    }
  }, /*#__PURE__*/react.createElement("ellipse", {
    cx: 115.61,
    cy: 98.989,
    fill: "url(#reviews_svg__i)",
    rx: 30.338,
    ry: 30.181
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#fff",
    mask: "url(#reviews_svg__j)"
  }, /*#__PURE__*/react.createElement("ellipse", {
    cx: 115.612,
    cy: 90.476,
    rx: 10.864,
    ry: 10.808
  }), /*#__PURE__*/react.createElement("ellipse", {
    cx: 115.612,
    cy: 134.396,
    rx: 29.744,
    ry: 29.59
  }))), /*#__PURE__*/react.createElement("path", {
    fill: "url(#reviews_svg__k)",
    d: "M71 165.64h51v135.295H71z",
    transform: "rotate(-180 71 165.64)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#reviews_svg__l)",
    d: "M163 30.345h56V165.64h-56z"
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#reviews_svg__m)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M211.005 24.377h-70.01C126.652 24.377 115 35.97 115 50.242v25.865h96.005c14.344 0 25.995-11.593 25.995-25.865s-11.651-25.865-25.995-25.865"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#E4E5E7",
    d: "M211.005 24.377h-70.01C126.652 24.377 115 35.97 115 50.242v25.865h96.005c14.344 0 25.995-11.593 25.995-25.865s-11.651-25.865-25.995-25.865Z"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "url(#reviews_svg__n)",
    d: "M121 50.242c0-10.978 10.195-19.896 22.746-19.896h64.509c12.55 0 22.745 8.918 22.745 19.896S220.805 70.14 208.255 70.14H121z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#reviews_svg__o)",
    d: "m175 42.284 2.489 4.533 5.08.966-3.542 3.768.651 5.13L175 54.476l-4.678 2.205.651-5.13-3.542-3.768 5.081-.966z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#reviews_svg__p)",
    d: "m193 42.284 2.489 4.533 5.08.966-3.542 3.768.651 5.13L193 54.476l-4.678 2.205.651-5.13-3.542-3.768 5.08-.966z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#reviews_svg__q)",
    d: "m211 42.284 2.489 4.533 5.08.966-3.542 3.768.651 5.13L211 54.476l-4.678 2.205.651-5.13-3.542-3.768 5.08-.966z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#reviews_svg__r)",
    d: "m139 42.284 2.489 4.533 5.08.966-3.542 3.768.651 5.13L139 54.476l-4.678 2.205.651-5.13-3.542-3.768 5.081-.966z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#reviews_svg__s)",
    d: "m157 42.284 2.489 4.533 5.08.966-3.542 3.768.651 5.13L157 54.476l-4.678 2.205.651-5.13-3.542-3.768 5.08-.966z"
  })), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "reviews_svg__b",
    x1: 38.762,
    x2: 4.627,
    y1: 54.568,
    y2: 5.654,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "reviews_svg__c",
    x1: 28.88,
    x2: 60.916,
    y1: 82.139,
    y2: 119.941,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#7A7A7A",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#7A7A7A"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "reviews_svg__e",
    x1: 38.762,
    x2: 4.627,
    y1: 54.568,
    y2: 5.654,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "reviews_svg__f",
    x1: 165.732,
    x2: 197.768,
    y1: 82.139,
    y2: 119.941,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#7A7A7A",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#7A7A7A"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "reviews_svg__h",
    x1: 50.248,
    x2: 5.998,
    y1: 70.737,
    y2: 7.329,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "reviews_svg__i",
    x1: 91.882,
    x2: 133.411,
    y1: 77.148,
    y2: 126.15,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#7A7A7A",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#7A7A7A"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "reviews_svg__k",
    x1: 122,
    x2: 71,
    y1: 233.288,
    y2: 233.288,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "reviews_svg__l",
    x1: 219,
    x2: 163,
    y1: 97.992,
    y2: 97.992,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "reviews_svg__n",
    x1: 121,
    x2: 262.842,
    y1: 50.592,
    y2: 50.592,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#256020"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D0E500"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "reviews_svg__o",
    x1: 149.242,
    x2: 163.372,
    y1: 37.821,
    y2: 58.848,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#F5F5F5",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#F5F5F5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "reviews_svg__p",
    x1: 149.242,
    x2: 163.372,
    y1: 37.821,
    y2: 58.848,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#F5F5F5",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#F5F5F5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "reviews_svg__q",
    x1: 149.242,
    x2: 163.372,
    y1: 37.821,
    y2: 58.848,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#F5F5F5",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#F5F5F5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "reviews_svg__r",
    x1: 149.242,
    x2: 163.372,
    y1: 37.821,
    y2: 58.848,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#F5F5F5",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#F5F5F5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "reviews_svg__s",
    x1: 149.242,
    x2: 163.372,
    y1: 37.821,
    y2: 58.848,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#F5F5F5",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#F5F5F5"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "reviews_svg__a"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 .5h240v192H0z"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "reviews_svg__m",
    width: 139,
    height: 68.731,
    x: 106.5,
    y: 15.877,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_2063_684"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_2063_684",
    result: "shape"
  }))));
};
ReviewsIllustration.displayName = 'ReviewsIllustration';
/* harmony default export */ const Reviews = (ReviewsIllustration);
try {
    // @ts-ignore
    ReviewsIllustration.displayName = "ReviewsIllustration";
    // @ts-ignore
    ReviewsIllustration.__docgenInfo = { "description": "", "displayName": "ReviewsIllustration", "props": { "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('ReviewsIllustration')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/illustrations/Reviews.tsx#ReviewsIllustration"] = { docgenInfo: ReviewsIllustration.__docgenInfo, name: "ReviewsIllustration", path: "../visuals/src/components/generated_visuals/illustrations/Reviews.tsx#ReviewsIllustration" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/illustrations/SavedDeliveries.tsx



const SavedDeliveriesIllustration = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('SavedDeliveriesIllustration')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* ILLUSTRATIONS_SIZES */.FO[size].width,
    height: constants/* ILLUSTRATIONS_SIZES */.FO[size].height,
    fill: "none",
    viewBox: "0 0 280 225",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#saved_deliveries_svg__a)"
  }, /*#__PURE__*/react.createElement("g", {
    opacity: 0.5
  }, /*#__PURE__*/react.createElement("g", {
    filter: "url(#saved_deliveries_svg__b)",
    transform: "rotate(-7.167 169.449 81.204)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 97.204,
    height: 94.026,
    x: 169.449,
    y: 81.204,
    fill: "#fff",
    rx: 3.733
  }), /*#__PURE__*/react.createElement("rect", {
    width: 97.204,
    height: 94.026,
    x: 169.449,
    y: 81.204,
    stroke: "#DADBDD",
    rx: 3.733
  })), /*#__PURE__*/react.createElement("path", {
    fill: "url(#saved_deliveries_svg__c)",
    d: "M175.426 86.013h86.548v82.996h-86.548z",
    transform: "rotate(-7.167 175.426 86.013)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "m221.67 94.342 7.128 14.246 13.448-8.644-5.103 15.08 15.661 3.332-14.342 7.083 8.703 13.352-15.184-5.064-3.355 15.554-7.131-14.244-13.445 8.639 5.1-15.076-15.662-3.335 14.343-7.08-8.7-13.356 15.181 5.068z"
  })), /*#__PURE__*/react.createElement("g", {
    opacity: 0.5
  }, /*#__PURE__*/react.createElement("g", {
    filter: "url(#saved_deliveries_svg__d)",
    transform: "rotate(8.308 17.203 69.495)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 97.204,
    height: 94.026,
    x: 17.203,
    y: 69.495,
    fill: "#fff",
    rx: 3.733
  }), /*#__PURE__*/react.createElement("rect", {
    width: 97.204,
    height: 94.026,
    x: 17.203,
    y: 69.495,
    stroke: "#DADBDD",
    rx: 3.733
  })), /*#__PURE__*/react.createElement("path", {
    fill: "url(#saved_deliveries_svg__e)",
    d: "M21.605 75.625h86.727v83.167H21.605z",
    transform: "rotate(8.308 21.605 75.625)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M61.27 125.44c23.686 31.798-35.934 23.089-4.146-.605-31.788 23.694-23.081-35.945.605-4.147-23.686-31.798 35.934-23.089 4.146.606 31.788-23.695 23.081 35.944-.606 4.146"
  })), /*#__PURE__*/react.createElement("g", {
    filter: "url(#saved_deliveries_svg__f)",
    transform: "rotate(-2.572 77.524 54.98)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 117.23,
    height: 113.397,
    x: 77.524,
    y: 54.98,
    fill: "#fff",
    rx: 3.733
  }), /*#__PURE__*/react.createElement("rect", {
    width: 117.23,
    height: 113.397,
    x: 77.524,
    y: 54.98,
    stroke: "#DADBDD",
    rx: 3.733
  })), /*#__PURE__*/react.createElement("path", {
    fill: "url(#saved_deliveries_svg__g)",
    d: "M83.281 60.495h106.217v101.858H83.281z",
    transform: "rotate(-2.572 83.281 60.495)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#saved_deliveries_svg__h)",
    d: "M139.618 109.012c15.085-.673 27.864 10.927 28.542 25.909l-54.63 2.438c-.677-14.982 11.002-27.673 26.088-28.347m26.084-28.347c.677 14.983-11.002 27.674-26.087 28.347-15.086.673-27.865-10.926-28.543-25.909z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#saved_deliveries_svg__i)",
    d: "M20.18 180.456h20.554v135.956H20.18z",
    transform: "rotate(-180 20.18 180.456)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#saved_deliveries_svg__j)",
    d: "M0 0h23.189v135.956H0z",
    transform: "matrix(1 0 0 -1 256.434 180.456)"
  })), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_deliveries_svg__c",
    x1: 247.099,
    x2: 187.058,
    y1: 183.273,
    y2: 94.021,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_deliveries_svg__e",
    x1: 93.425,
    x2: 33.261,
    y1: 173.087,
    y2: 83.649,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_deliveries_svg__g",
    x1: 84.983,
    x2: 200.855,
    y1: 24.181,
    y2: 181.446,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#256020"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D0E500"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_deliveries_svg__h",
    x1: 111.077,
    x2: 162.365,
    y1: 67.855,
    y2: 137.702,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#F5F5F5",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#F5F5F5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_deliveries_svg__i",
    x1: 40.733,
    x2: 20.18,
    y1: 248.434,
    y2: 248.434,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_deliveries_svg__j",
    x1: 23.189,
    x2: 0,
    y1: 67.978,
    y2: 67.978,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("filter", {
    id: "saved_deliveries_svg__b",
    width: 124.304,
    height: 121.547,
    x: 161.385,
    y: 61.012,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1109_224"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1109_224",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "saved_deliveries_svg__d",
    width: 125.771,
    height: 123.086,
    x: -4.384,
    y: 61.495,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1109_224"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1109_224",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "saved_deliveries_svg__f",
    width: 138.874,
    height: 135.217,
    x: 69.187,
    y: 41.382,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1109_224"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1109_224",
    result: "shape"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "saved_deliveries_svg__a"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 .5h280v224H0z"
  }))));
};
SavedDeliveriesIllustration.displayName = 'SavedDeliveriesIllustration';
/* harmony default export */ const SavedDeliveries = (SavedDeliveriesIllustration);
try {
    // @ts-ignore
    SavedDeliveriesIllustration.displayName = "SavedDeliveriesIllustration";
    // @ts-ignore
    SavedDeliveriesIllustration.__docgenInfo = { "description": "", "displayName": "SavedDeliveriesIllustration", "props": { "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('SavedDeliveriesIllustration')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/illustrations/SavedDeliveries.tsx#SavedDeliveriesIllustration"] = { docgenInfo: SavedDeliveriesIllustration.__docgenInfo, name: "SavedDeliveriesIllustration", path: "../visuals/src/components/generated_visuals/illustrations/SavedDeliveries.tsx#SavedDeliveriesIllustration" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/illustrations/SavedGigs.tsx



const SavedGigsIllustration = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('SavedGigsIllustration')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* ILLUSTRATIONS_SIZES */.FO[size].width,
    height: constants/* ILLUSTRATIONS_SIZES */.FO[size].height,
    fill: "none",
    viewBox: "0 0 280 224",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#saved_gigs_svg__a)"
  }, /*#__PURE__*/react.createElement("g", {
    filter: "url(#saved_gigs_svg__b)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 106.046,
    height: 127.514,
    x: 86.693,
    y: 49.06,
    fill: "#fff",
    rx: 3.733
  }), /*#__PURE__*/react.createElement("rect", {
    width: 106.046,
    height: 127.514,
    x: 86.693,
    y: 49.06,
    stroke: "#DADBDD",
    rx: 3.733
  })), /*#__PURE__*/react.createElement("path", {
    fill: "url(#saved_gigs_svg__c)",
    d: "M92.785 55.354h93.863v90.011H92.785z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#saved_gigs_svg__d)",
    d: "M140.728 123.856c-1.635-1.283-3.245-2.516-4.817-3.786-4.187-3.346-8.3-6.781-12.009-10.63-1.509-1.572-2.993-3.22-4.15-5.032-2-3.132-2.214-6.617-1.208-10.101 1.208-4.19 3.861-7.234 8.2-8.655 4.665-1.547 9.821.138 12.928 4.138.352.453.679.944 1.068 1.497.164-.239.302-.44.441-.654 1.911-2.817 4.502-4.704 7.96-5.32 4.062-.718 7.545.49 10.438 3.282 3.898 3.774 5.03 10.115 2.678 14.945-.918 1.9-2.339 3.472-3.797 5.019-4.226 4.479-8.979 8.416-13.809 12.278-1.27 1.019-2.565 2-3.923 3.057z"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#E4E5E7",
    strokeLinecap: "round",
    strokeWidth: 2.772,
    d: "m114.736 163.111 67.294-.293"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 102.051,
    cy: 163.032,
    r: 6.325,
    fill: "#E4E5E7"
  }), /*#__PURE__*/react.createElement("g", {
    opacity: 0.4
  }, /*#__PURE__*/react.createElement("g", {
    filter: "url(#saved_gigs_svg__e)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 95.577,
    height: 114.926,
    x: 199.855,
    y: 54.537,
    fill: "#fff",
    rx: 3.733
  }), /*#__PURE__*/react.createElement("rect", {
    width: 95.577,
    height: 114.926,
    x: 199.855,
    y: 54.537,
    stroke: "#DADBDD",
    rx: 3.733
  })), /*#__PURE__*/react.createElement("path", {
    fill: "url(#saved_gigs_svg__f)",
    d: "M205.347 60.21h84.597v81.125h-84.597z"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#E4E5E7",
    strokeLinecap: "round",
    strokeWidth: 2.772,
    d: "m225.13 157.33 60.65-.265"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 213.697,
    cy: 157.258,
    r: 5.7,
    fill: "#E4E5E7"
  })), /*#__PURE__*/react.createElement("g", {
    opacity: 0.4
  }, /*#__PURE__*/react.createElement("g", {
    filter: "url(#saved_gigs_svg__g)"
  }, /*#__PURE__*/react.createElement("rect", {
    width: 95.577,
    height: 114.926,
    x: -16,
    y: 54.537,
    fill: "#fff",
    rx: 3.733
  }), /*#__PURE__*/react.createElement("rect", {
    width: 95.577,
    height: 114.926,
    x: -16,
    y: 54.537,
    stroke: "#DADBDD",
    rx: 3.733
  })), /*#__PURE__*/react.createElement("path", {
    fill: "url(#saved_gigs_svg__h)",
    d: "M-10.509 60.21H74.09v81.125H-10.51z"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#E4E5E7",
    strokeLinecap: "round",
    strokeWidth: 2.772,
    d: "m9.274 157.33 60.651-.265"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: -2.158,
    cy: 157.258,
    r: 5.7,
    fill: "#E4E5E7"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "url(#saved_gigs_svg__i)",
    d: "M30.789 179.956H61.86v135.956H30.789z",
    transform: "rotate(-180 30.789 179.956)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#saved_gigs_svg__j)",
    d: "M0 0h31.071v135.956H0z",
    transform: "matrix(1 0 0 -1 249.645 179.956)"
  })), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_gigs_svg__c",
    x1: 94.289,
    x2: 196.684,
    y1: 23.263,
    y2: 162.237,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#256020"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D0E500"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_gigs_svg__d",
    x1: 118.531,
    x2: 150.632,
    y1: 74.201,
    y2: 130.232,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#F5F5F5",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#F5F5F5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_gigs_svg__f",
    x1: 275.404,
    x2: 216.717,
    y1: 155.278,
    y2: 68.037,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_gigs_svg__h",
    x1: 59.548,
    x2: 0.861,
    y1: 155.278,
    y2: 68.037,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_gigs_svg__i",
    x1: 61.86,
    x2: 30.789,
    y1: 247.934,
    y2: 247.934,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_gigs_svg__j",
    x1: 31.071,
    x2: 0,
    y1: 67.978,
    y2: 67.978,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("filter", {
    id: "saved_gigs_svg__b",
    width: 123.046,
    height: 144.514,
    x: 78.193,
    y: 40.56,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1109_148"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1109_148",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "saved_gigs_svg__e",
    width: 112.577,
    height: 131.926,
    x: 191.355,
    y: 46.037,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1109_148"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1109_148",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "saved_gigs_svg__g",
    width: 112.577,
    height: 131.926,
    x: -24.5,
    y: 46.037,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 4
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1109_148"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1109_148",
    result: "shape"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "saved_gigs_svg__a"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 0h280v224H0z"
  }))));
};
SavedGigsIllustration.displayName = 'SavedGigsIllustration';
/* harmony default export */ const SavedGigs = (SavedGigsIllustration);
try {
    // @ts-ignore
    SavedGigsIllustration.displayName = "SavedGigsIllustration";
    // @ts-ignore
    SavedGigsIllustration.__docgenInfo = { "description": "", "displayName": "SavedGigsIllustration", "props": { "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('SavedGigsIllustration')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/illustrations/SavedGigs.tsx#SavedGigsIllustration"] = { docgenInfo: SavedGigsIllustration.__docgenInfo, name: "SavedGigsIllustration", path: "../visuals/src/components/generated_visuals/illustrations/SavedGigs.tsx#SavedGigsIllustration" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/illustrations/SavedSellers.tsx



const SavedSellersIllustration = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('SavedSellersIllustration')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* ILLUSTRATIONS_SIZES */.FO[size].width,
    height: constants/* ILLUSTRATIONS_SIZES */.FO[size].height,
    fill: "none",
    viewBox: "0 0 280 225",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#saved_sellers_svg__a)"
  }, /*#__PURE__*/react.createElement("g", {
    filter: "url(#saved_sellers_svg__b)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#DADBDD",
    d: "M139.803 58.992c29.547 0 53.5 23.953 53.5 53.5s-23.953 53.5-53.5 53.5-53.5-23.952-53.5-53.5 23.953-53.5 53.5-53.5Z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 46.295,
    cy: 46.295,
    r: 46.295,
    fill: "url(#saved_sellers_svg__c)",
    transform: "matrix(-1 0 0 1 186.099 66.106)"
  }), /*#__PURE__*/react.createElement("mask", {
    id: "saved_sellers_svg__e",
    width: 94,
    height: 93,
    x: 93,
    y: 66,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: 'alpha'
    }
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 139.803,
    cy: 112.401,
    r: 46.295,
    fill: "url(#saved_sellers_svg__d)"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#fff",
    mask: "url(#saved_sellers_svg__e)"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 139.806,
    cy: 99.345,
    r: 16.578
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 139.807,
    cy: 166.715,
    r: 45.389
  })), /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#DADBDD",
    d: "M182.09 132.903c8.712 0 15.883 7.063 15.883 15.776 0 8.712-7.171 15.775-15.884 15.775-8.712 0-15.883-7.063-15.883-15.775s7.171-15.776 15.884-15.776Z"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "#222325",
    d: "M181.794 157.144c-.66-.518-1.31-1.016-1.945-1.529-1.691-1.351-3.351-2.738-4.849-4.292-.609-.635-1.208-1.3-1.675-2.031-.808-1.265-.894-2.672-.488-4.079.488-1.691 1.559-2.92 3.311-3.494 1.883-.625 3.965.056 5.219 1.671.142.183.274.381.432.604.066-.096.121-.177.177-.264.772-1.137 1.818-1.899 3.214-2.148 1.64-.29 3.047.198 4.214 1.325 1.574 1.524 2.031 4.084 1.082 6.034-.371.767-.945 1.402-1.533 2.027-1.706 1.808-3.626 3.397-5.575 4.957-.513.411-1.036.807-1.584 1.234z"
  })), /*#__PURE__*/react.createElement("g", {
    opacity: 0.5
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#DADBDD",
    d: "M243.714 68.569c24.3 0 44 19.699 44 43.999s-19.7 44-44 44-44-19.699-44-44 19.699-44 44-44Z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 37.994,
    cy: 37.994,
    r: 37.994,
    fill: "url(#saved_sellers_svg__f)",
    transform: "matrix(-1 0 0 1 281.709 74.575)"
  }), /*#__PURE__*/react.createElement("mask", {
    id: "saved_sellers_svg__h",
    width: 77,
    height: 77,
    x: 205,
    y: 74,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: 'alpha'
    }
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 243.713,
    cy: 112.569,
    r: 37.994,
    fill: "url(#saved_sellers_svg__g)"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#fff",
    mask: "url(#saved_sellers_svg__h)"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 243.715,
    cy: 101.853,
    r: 13.605
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 243.715,
    cy: 157.143,
    r: 37.25
  }))), /*#__PURE__*/react.createElement("g", {
    opacity: 0.5
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#DADBDD",
    d: "M36 68.569c24.3 0 44 19.699 44 43.999s-19.7 44-44 44-44-19.699-44-44 19.7-44 44-44Z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 37.994,
    cy: 37.994,
    r: 37.994,
    fill: "url(#saved_sellers_svg__i)",
    transform: "matrix(-1 0 0 1 73.994 74.575)"
  }), /*#__PURE__*/react.createElement("mask", {
    id: "saved_sellers_svg__k",
    width: 76,
    height: 77,
    x: -2,
    y: 74,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: 'alpha'
    }
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 36,
    cy: 112.569,
    r: 37.994,
    fill: "url(#saved_sellers_svg__j)"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#fff",
    mask: "url(#saved_sellers_svg__k)"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 36.004,
    cy: 101.853,
    r: 13.605
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 36.004,
    cy: 157.143,
    r: 37.25
  }))), /*#__PURE__*/react.createElement("path", {
    fill: "url(#saved_sellers_svg__l)",
    d: "M30.793 180.456h31.071v135.956H30.793z",
    transform: "rotate(-180 30.793 180.456)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#saved_sellers_svg__m)",
    d: "M0 0h31.071v135.956H0z",
    transform: "matrix(1 0 0 -1 248.649 180.456)"
  })), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_sellers_svg__c",
    x1: 1.483,
    x2: 108.042,
    y1: -33.011,
    y2: 105.679,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#256020"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D0E500"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_sellers_svg__d",
    x1: 103.595,
    x2: 167.35,
    y1: 78.899,
    y2: 153.738,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#7A7A7A",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#7A7A7A"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_sellers_svg__f",
    x1: 62.927,
    x2: 7.124,
    y1: 89.048,
    y2: 9.498,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_sellers_svg__g",
    x1: 213.998,
    x2: 266.32,
    y1: 85.074,
    y2: 146.493,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#7A7A7A",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#7A7A7A"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_sellers_svg__i",
    x1: 62.927,
    x2: 7.124,
    y1: 89.048,
    y2: 9.498,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_sellers_svg__j",
    x1: 6.285,
    x2: 58.607,
    y1: 85.074,
    y2: 146.493,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#7A7A7A",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#7A7A7A"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_sellers_svg__l",
    x1: 61.864,
    x2: 30.793,
    y1: 248.434,
    y2: 248.434,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_sellers_svg__m",
    x1: 31.071,
    x2: 0,
    y1: 67.978,
    y2: 67.978,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "saved_sellers_svg__a"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 .5h280v224H0z"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "saved_sellers_svg__b",
    width: 137.145,
    height: 132.475,
    x: 73.566,
    y: 46.255,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 6.119
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1109_182"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1109_182",
    result: "shape"
  }))));
};
SavedSellersIllustration.displayName = 'SavedSellersIllustration';
/* harmony default export */ const SavedSellers = (SavedSellersIllustration);
try {
    // @ts-ignore
    SavedSellersIllustration.displayName = "SavedSellersIllustration";
    // @ts-ignore
    SavedSellersIllustration.__docgenInfo = { "description": "", "displayName": "SavedSellersIllustration", "props": { "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('SavedSellersIllustration')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/illustrations/SavedSellers.tsx#SavedSellersIllustration"] = { docgenInfo: SavedSellersIllustration.__docgenInfo, name: "SavedSellersIllustration", path: "../visuals/src/components/generated_visuals/illustrations/SavedSellers.tsx#SavedSellersIllustration" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/illustrations/SavedSellersNoHeart.tsx



const SavedSellersNoHeartIllustration = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('SavedSellersNoHeartIllustration')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* ILLUSTRATIONS_SIZES */.FO[size].width,
    height: constants/* ILLUSTRATIONS_SIZES */.FO[size].height,
    fill: "none",
    viewBox: "0 0 280 225",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#saved_sellers_no_heart_svg__a)"
  }, /*#__PURE__*/react.createElement("g", {
    filter: "url(#saved_sellers_no_heart_svg__b)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#DADBDD",
    d: "M139.803 58.992c29.547 0 53.5 23.953 53.5 53.5s-23.953 53.5-53.5 53.5-53.5-23.952-53.5-53.5 23.953-53.5 53.5-53.5Z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 46.295,
    cy: 46.295,
    r: 46.295,
    fill: "url(#saved_sellers_no_heart_svg__c)",
    transform: "matrix(-1 0 0 1 186.099 66.106)"
  }), /*#__PURE__*/react.createElement("mask", {
    id: "saved_sellers_no_heart_svg__e",
    width: 94,
    height: 93,
    x: 93,
    y: 66,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: 'alpha'
    }
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 139.803,
    cy: 112.401,
    r: 46.295,
    fill: "url(#saved_sellers_no_heart_svg__d)"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#fff",
    mask: "url(#saved_sellers_no_heart_svg__e)"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 139.807,
    cy: 99.345,
    r: 16.578
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 139.807,
    cy: 166.715,
    r: 45.389
  }))), /*#__PURE__*/react.createElement("g", {
    opacity: 0.5
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#DADBDD",
    d: "M243.713 68.569c24.301 0 44 19.699 44 43.999s-19.699 44-44 44-44-19.699-44-44 19.7-44 44-44Z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 37.994,
    cy: 37.994,
    r: 37.994,
    fill: "url(#saved_sellers_no_heart_svg__f)",
    transform: "matrix(-1 0 0 1 281.708 74.575)"
  }), /*#__PURE__*/react.createElement("mask", {
    id: "saved_sellers_no_heart_svg__h",
    width: 77,
    height: 77,
    x: 205,
    y: 74,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: 'alpha'
    }
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 243.712,
    cy: 112.569,
    r: 37.994,
    fill: "url(#saved_sellers_no_heart_svg__g)"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#fff",
    mask: "url(#saved_sellers_no_heart_svg__h)"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 243.715,
    cy: 101.853,
    r: 13.605
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 243.715,
    cy: 157.143,
    r: 37.25
  }))), /*#__PURE__*/react.createElement("g", {
    opacity: 0.5
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    stroke: "#DADBDD",
    d: "M36 68.569c24.3 0 44 19.699 44 43.999s-19.7 44-44 44-44-19.699-44-44 19.7-44 44-44Z"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 37.994,
    cy: 37.994,
    r: 37.994,
    fill: "url(#saved_sellers_no_heart_svg__i)",
    transform: "matrix(-1 0 0 1 73.994 74.575)"
  }), /*#__PURE__*/react.createElement("mask", {
    id: "saved_sellers_no_heart_svg__k",
    width: 76,
    height: 77,
    x: -2,
    y: 74,
    maskUnits: "userSpaceOnUse",
    style: {
      maskType: 'alpha'
    }
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 36,
    cy: 112.569,
    r: 37.994,
    fill: "url(#saved_sellers_no_heart_svg__j)"
  })), /*#__PURE__*/react.createElement("g", {
    fill: "#fff",
    mask: "url(#saved_sellers_no_heart_svg__k)"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 36.004,
    cy: 101.853,
    r: 13.605
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 36.004,
    cy: 157.143,
    r: 37.25
  }))), /*#__PURE__*/react.createElement("path", {
    fill: "url(#saved_sellers_no_heart_svg__l)",
    d: "M30.793 180.456h31.071v135.956H30.793z",
    transform: "rotate(-180 30.793 180.456)"
  }), /*#__PURE__*/react.createElement("path", {
    fill: "url(#saved_sellers_no_heart_svg__m)",
    d: "M0 0h31.071v135.956H0z",
    transform: "matrix(1 0 0 -1 248.648 180.456)"
  })), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_sellers_no_heart_svg__c",
    x1: 1.483,
    x2: 108.042,
    y1: -33.011,
    y2: 105.679,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#256020"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D0E500"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_sellers_no_heart_svg__d",
    x1: 103.595,
    x2: 167.349,
    y1: 78.899,
    y2: 153.738,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#7A7A7A",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#7A7A7A"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_sellers_no_heart_svg__f",
    x1: 62.927,
    x2: 7.124,
    y1: 89.048,
    y2: 9.498,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_sellers_no_heart_svg__g",
    x1: 213.997,
    x2: 266.32,
    y1: 85.074,
    y2: 146.493,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#7A7A7A",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#7A7A7A"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_sellers_no_heart_svg__i",
    x1: 62.927,
    x2: 7.124,
    y1: 89.048,
    y2: 9.498,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D5D5D5"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_sellers_no_heart_svg__j",
    x1: 6.285,
    x2: 58.607,
    y1: 85.074,
    y2: 146.493,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#7A7A7A",
    stopOpacity: 0.6
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#7A7A7A"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_sellers_no_heart_svg__l",
    x1: 61.864,
    x2: 30.793,
    y1: 248.434,
    y2: 248.434,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "saved_sellers_no_heart_svg__m",
    x1: 31.071,
    x2: 0,
    y1: 67.978,
    y2: 67.978,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "saved_sellers_no_heart_svg__a"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M0 .5h280v224H0z"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "saved_sellers_no_heart_svg__b",
    width: 132.475,
    height: 132.475,
    x: 73.566,
    y: 46.255,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 6.119
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_20359_17230"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_20359_17230",
    result: "shape"
  }))));
};
SavedSellersNoHeartIllustration.displayName = 'SavedSellersNoHeartIllustration';
/* harmony default export */ const SavedSellersNoHeart = (SavedSellersNoHeartIllustration);
try {
    // @ts-ignore
    SavedSellersNoHeartIllustration.displayName = "SavedSellersNoHeartIllustration";
    // @ts-ignore
    SavedSellersNoHeartIllustration.__docgenInfo = { "description": "", "displayName": "SavedSellersNoHeartIllustration", "props": { "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('SavedSellersNoHeartIllustration')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/illustrations/SavedSellersNoHeart.tsx#SavedSellersNoHeartIllustration"] = { docgenInfo: SavedSellersNoHeartIllustration.__docgenInfo, name: "SavedSellersNoHeartIllustration", path: "../visuals/src/components/generated_visuals/illustrations/SavedSellersNoHeart.tsx#SavedSellersNoHeartIllustration" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/illustrations/Search.tsx



const SearchIllustration = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('SearchIllustration')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* ILLUSTRATIONS_SIZES */.FO[size].width,
    height: constants/* ILLUSTRATIONS_SIZES */.FO[size].height,
    fill: "none",
    viewBox: "0 0 80 80",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#search_svg__a)"
  }, /*#__PURE__*/react.createElement("path", {
    stroke: "#222325",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: 10,
    strokeWidth: 1.6,
    d: "M28 26.5h24m-37 6h51m-46 6h40M39.98 64.803l3.666 4.78M21 54.68H9V10.581h62V54.68H45M9.217 19.459h61M13 14.867h1.069m3.7 0h1.07m3.206 0h1.069m9.603 51.84c6.352 0 11.5-5.16 11.5-11.526s-5.148-11.526-11.5-11.526c-6.35 0-11.5 5.16-11.5 11.526s5.15 11.525 11.5 11.525"
  })), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("clipPath", {
    id: "search_svg__a"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M8 9.5h64v61H8z"
  }))));
};
SearchIllustration.displayName = 'SearchIllustration';
/* harmony default export */ const Search = (SearchIllustration);
try {
    // @ts-ignore
    SearchIllustration.displayName = "SearchIllustration";
    // @ts-ignore
    SearchIllustration.__docgenInfo = { "description": "", "displayName": "SearchIllustration", "props": { "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('SearchIllustration')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/illustrations/Search.tsx#SearchIllustration"] = { docgenInfo: SearchIllustration.__docgenInfo, name: "SearchIllustration", path: "../visuals/src/components/generated_visuals/illustrations/Search.tsx#SearchIllustration" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/generated_visuals/illustrations/Success.tsx



const SuccessIllustration = _ref => {
  let {
    size = 'md',
    dataTrackTag = (0,utils/* pascalToSnake */.e)('SuccessIllustration')
  } = _ref;
  return /*#__PURE__*/react.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: constants/* ILLUSTRATIONS_SIZES */.FO[size].width,
    height: constants/* ILLUSTRATIONS_SIZES */.FO[size].height,
    fill: "none",
    viewBox: "0 0 240 193",
    "data-track-tag": dataTrackTag
  }, /*#__PURE__*/react.createElement("g", {
    filter: "url(#success_svg__a)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M50 67.7a6.2 6.2 0 0 1 6.2-6.2H183.8A6.2 6.2 0 0 1 190 67.7v86.37a6.2 6.2 0 0 1-6.199 6.199H56.199A6.2 6.2 0 0 1 50 154.07z"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "#EFEFF0",
    d: "M55 73.23h129.231v81.847H55z"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#D0E500",
    strokeWidth: 2,
    d: "m174.935 89.85-3.642-3.643M77.936 85.85l-3.643-3.643"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#F1F4CB",
    strokeWidth: 2,
    d: "m159.589 77.35-4.82 1.817"
  }), /*#__PURE__*/react.createElement("foreignObject", {
    width: 146.654,
    height: 91.654,
    x: 46.27,
    y: 81.673
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      backdropFilter: 'blur(9.16px)',
      clipPath: 'url(#success_svg__b)',
      height: '100%',
      width: '100%'
    }
  })), /*#__PURE__*/react.createElement("g", {
    "data-figma-bg-blur-radius": 18.327,
    filter: "url(#success_svg__c)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "url(#success_svg__d)",
    fillOpacity: 0.5,
    d: "M64.597 103.665A3.665 3.665 0 0 1 68.263 100h102.669a3.665 3.665 0 0 1 3.665 3.665V155h-110z",
    shapeRendering: "crispEdges"
  })), /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M138.935 142.207v3h-38.178v-3zM145.692 133.592v3H94v-3z",
    opacity: 0.5
  }), /*#__PURE__*/react.createElement("g", {
    filter: "url(#success_svg__e)"
  }, /*#__PURE__*/react.createElement("circle", {
    cx: 120.5,
    cy: 91.5,
    r: 31.5,
    fill: "#fff"
  }), /*#__PURE__*/react.createElement("circle", {
    cx: 120.5,
    cy: 91.5,
    r: 28,
    fill: "url(#success_svg__f)"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#fff",
    strokeWidth: 4,
    d: "m108.297 94.418 9.152 6.375 15.254-17.053"
  })), /*#__PURE__*/react.createElement("path", {
    stroke: "#F1F4CB",
    strokeWidth: 2,
    d: "m94.436 69.85-3.643-3.643M112.435 42.85l-3.642-3.643"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#D0E500",
    strokeWidth: 2,
    d: "M95.823 62.494 98.318 60M65.5 93.058l2.495-2.494M133.5 48.058l2.494-2.494"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#F1F4CB",
    strokeWidth: 2,
    d: "m68.5 48.058 2.495-2.494"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#D0E500",
    strokeWidth: 2,
    d: "m172.935 38.85-3.642-3.643M70.27 60.676 66.5 58.5"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#687200",
    strokeWidth: 2,
    d: "m84.5 77.932 1.44-6.364M85.694 57.5l-4.068 2.349M54.194 51l-4.068 2.349"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#F1F4CB",
    strokeWidth: 2.154,
    d: "m192.954 46.38 3.566-2.058"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#687200",
    strokeWidth: 2.154,
    d: "m210.763 89.559 3.567-2.06M167.297 56.144l-4.934 6.616"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#F1F4CB",
    strokeWidth: 2.154,
    d: "m205.797 70.144-4.934 6.616"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#687200",
    strokeWidth: 2.154,
    d: "m134.5 41.622 1.641 5.011"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#D0E500",
    strokeWidth: 2.154,
    d: "m166.5 60.121 5.004 3.761"
  }), /*#__PURE__*/react.createElement("path", {
    stroke: "#687200",
    strokeWidth: 2.154,
    d: "M186.079 90.364 188.442 89"
  }), /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("filter", {
    id: "success_svg__a",
    width: 164.796,
    height: 123.566,
    x: 37.602,
    y: 61.5,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", {
    dy: 12.398
  }), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 6.199
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0.144352 0 0 0 0 0.144352 0 0 0 0 0.144352 0 0 0 0.07 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1758_1572"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1758_1572",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "success_svg__c",
    width: 146.654,
    height: 91.654,
    x: 46.27,
    y: 81.673,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", null), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 9.163
  }), /*#__PURE__*/react.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1758_1572"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1758_1572",
    result: "shape"
  })), /*#__PURE__*/react.createElement("filter", {
    id: "success_svg__e",
    width: 87.475,
    height: 87.475,
    x: 76.763,
    y: 50.763,
    colorInterpolationFilters: "sRGB",
    filterUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("feFlood", {
    floodOpacity: 0,
    result: "BackgroundImageFix"
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    in: "SourceAlpha",
    result: "hardAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), /*#__PURE__*/react.createElement("feOffset", {
    dy: 3
  }), /*#__PURE__*/react.createElement("feGaussianBlur", {
    stdDeviation: 6.119
  }), /*#__PURE__*/react.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_1758_1572"
  }), /*#__PURE__*/react.createElement("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow_1758_1572",
    result: "shape"
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "success_svg__d",
    x1: 119.597,
    x2: 119.597,
    y1: 100,
    y2: 155,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#fff"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), /*#__PURE__*/react.createElement("linearGradient", {
    id: "success_svg__f",
    x1: 75.433,
    x2: 160.367,
    y1: 55.3,
    y2: 133.3,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react.createElement("stop", {
    stopColor: "#256020"
  }), /*#__PURE__*/react.createElement("stop", {
    offset: 1,
    stopColor: "#D0E500"
  })), /*#__PURE__*/react.createElement("clipPath", {
    id: "success_svg__b",
    transform: "translate(-46.27 -81.673)"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M64.597 103.665A3.665 3.665 0 0 1 68.263 100h102.669a3.665 3.665 0 0 1 3.665 3.665V155h-110z"
  }))));
};
SuccessIllustration.displayName = 'SuccessIllustration';
/* harmony default export */ const Success = (SuccessIllustration);
try {
    // @ts-ignore
    SuccessIllustration.displayName = "SuccessIllustration";
    // @ts-ignore
    SuccessIllustration.__docgenInfo = { "description": "", "displayName": "SuccessIllustration", "props": { "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": { value: "pascalToSnake('SuccessIllustration')" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/generated_visuals/illustrations/Success.tsx#SuccessIllustration"] = { docgenInfo: SuccessIllustration.__docgenInfo, name: "SuccessIllustration", path: "../visuals/src/components/generated_visuals/illustrations/Success.tsx#SuccessIllustration" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/illustrations/index.ts




















;// ../visuals/src/components/wrappers/Illustration.tsx

const Illustration = _ref => {
  let {
    visual: IllustrationElement,
    size = 'sm'
  } = _ref;
  return /*#__PURE__*/react.createElement(IllustrationElement, {
    size: size
  });
};
/* harmony default export */ const wrappers_Illustration = (Illustration);
try {
    // @ts-ignore
    Illustration.displayName = "Illustration";
    // @ts-ignore
    Illustration.__docgenInfo = { "description": "", "displayName": "Illustration", "props": { "visual": { "defaultValue": null, "description": "", "name": "visual", "required": true, "type": { "name": "FC<IllustrationType>" } }, "size": { "defaultValue": { value: "sm" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/wrappers/Illustration.tsx#Illustration"] = { docgenInfo: Illustration.__docgenInfo, name: "Illustration", path: "../visuals/src/components/wrappers/Illustration.tsx#Illustration" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/illustrations/stories/Demo.tsx


const Demo = _ref => {
  let {
    iconName,
    size = 'md'
  } = _ref;
  const Illustration = illustrations_namespaceObject[iconName];
  return /*#__PURE__*/react.createElement(Illustration, {
    size: size
  });
};
/* harmony default export */ const stories_Demo = (Demo);
try {
    // @ts-ignore
    Demo.displayName = "Demo";
    // @ts-ignore
    Demo.__docgenInfo = { "description": "", "displayName": "Demo", "props": { "iconName": { "defaultValue": null, "description": "", "name": "iconName", "required": true, "type": { "name": "enum", "value": [{ "value": "\"BriefsIllustration\"" }, { "value": "\"GeneralErrorIllustration\"" }, { "value": "\"InboxContinueToChatIllustration\"" }, { "value": "\"InboxEmptyInitialIllustration\"" }, { "value": "\"InboxEmptyInitialMinimizedIllustration\"" }, { "value": "\"InboxNoResultsIllustration\"" }, { "value": "\"NoFreelancersFoundIllustration\"" }, { "value": "\"NotificationsEmptyInitialIllustration\"" }, { "value": "\"OrdersActiveIllustration\"" }, { "value": "\"OrdersAllResultsIllustration\"" }, { "value": "\"OrdersCanceledIllustration\"" }, { "value": "\"OrdersCompletedIllustration\"" }, { "value": "\"OrdersNoResultsIllustration\"" }, { "value": "\"ReviewsIllustration\"" }, { "value": "\"SavedDeliveriesIllustration\"" }, { "value": "\"SavedGigsIllustration\"" }, { "value": "\"SavedSellersIllustration\"" }, { "value": "\"SavedSellersNoHeartIllustration\"" }, { "value": "\"SearchIllustration\"" }, { "value": "\"SuccessIllustration\"" }] } }, "size": { "defaultValue": { value: "md" }, "description": "", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"lg\"" }] } }, "dataTrackTag": { "defaultValue": null, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../visuals/src/components/illustrations/stories/Demo.tsx#Demo"] = { docgenInfo: Demo.__docgenInfo, name: "Demo", path: "../visuals/src/components/illustrations/stories/Demo.tsx#Demo" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../visuals/src/components/illustrations/stories/index.stories.tsx






// Remove Illustrations from the storybook because it's deprecated
// SearchIllustration can be removed after consumers of `@fiverr-private/table` are updated to `1.1.0`.
const DEPRECATED_ILLUSTRATIONS = ['SearchIllustration'];
const illustrationsArr = Object.values(illustrations_namespaceObject).filter(Illustration => !DEPRECATED_ILLUSTRATIONS.includes(Illustration.displayName));
const Primary = {
  tags: ['sidebar-ignore', 'snapshot-ignore']
};
const Illustrations = {
  tags: ['sidebar-ignore'],
  parameters: {
    viewport: {
      defaultViewport: 'CustomViewport',
      viewports: {
        CustomViewport: {
          styles: {
            height: 2500,
            width: 1280
          }
        }
      }
    }
  },
  render: () => /*#__PURE__*/react.createElement(StoryGrid/* default */.A, {
    templateColumns: "33%_33%_33%",
    paddingY: "4"
  }, illustrationsArr.map(Illustration => /*#__PURE__*/react.createElement(Illustration, {
    key: Illustration.displayName
  })))
};
const IllustrationWrapper = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      description: {
        story: 'An alternative way to use and icon and defining the size, helpful for a better integration of Penta MCP with figma visuals.'
      },
      source: {
        code: "import { Illustration, SavedDeliveriesIllustration } from '@fiverr-private/visuals';\n\n<Illustration visual={SavedDeliveriesIllustration} size=\"md\" />\n"
      }
    }
  },
  render: _ref => {
    let {
      size
    } = _ref;
    return /*#__PURE__*/react.createElement(wrappers_Illustration, {
      visual: SavedDeliveries,
      size: size
    });
  }
};
const meta = {
  args: {
    iconName: 'InboxEmptyInitialIllustration',
    size: 'md'
  },
  title: 'Visuals/Illustrations',
  component: stories_Demo
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
Illustrations.parameters = {
  ...Illustrations.parameters,
  docs: {
    ...Illustrations.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    viewport: {\n      defaultViewport: 'CustomViewport',\n      viewports: {\n        CustomViewport: {\n          styles: {\n            height: 2500,\n            width: 1280\n          }\n        }\n      }\n    }\n  },\n  render: () => <StoryGrid templateColumns=\"33%_33%_33%\" paddingY=\"4\">\n      {illustrationsArr.map(Illustration => <Illustration key={Illustration.displayName} />)}\n    </StoryGrid>\n}",
      ...Illustrations.parameters?.docs?.source
    }
  }
};
IllustrationWrapper.parameters = {
  ...IllustrationWrapper.parameters,
  docs: {
    ...IllustrationWrapper.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      description: {\n        story: 'An alternative way to use and icon and defining the size, helpful for a better integration of Penta MCP with figma visuals.'\n      },\n      source: {\n        code: `import { Illustration, SavedDeliveriesIllustration } from '@fiverr-private/visuals';\n\n<Illustration visual={SavedDeliveriesIllustration} size=\"md\" />\n`\n      }\n    }\n  },\n  render: ({\n    size\n  }) => <Illustration visual={SavedDeliveriesIllustration} size={size} />\n}",
      ...IllustrationWrapper.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","Illustrations","IllustrationWrapper"];

/***/ }),

/***/ "../visuals/src/utils/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ pascalToSnake)
/* harmony export */ });
const pascalToSnake = str => str.replace(/[A-Z]/g, (letter, index) => index === 0 ? letter.toLowerCase() : "_".concat(letter.toLowerCase()));

/***/ })

}]);
//# sourceMappingURL=components-illustrations-stories-index-stories.e5b26ad0.iframe.bundle.js.map