(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[5907],{

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

/***/ "../data_display/src/components/Tag/TagContext/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ TagContext),
/* harmony export */   v: () => (/* binding */ useTagContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const TagContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useTagContext = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TagContext);
  return context;
};

/***/ }),

/***/ "../data_display/src/components/Tag/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Tag)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
;// ../data_display/src/components/Tag/utils.ts
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
const getElement = (href, hasClickEvent, clickableArea) => {
  if (href) {
    return {
      element: 'a',
      role: 'link'
    };
  }
  if (hasClickEvent && clickableArea === 'tag') {
    return {
      element: 'button',
      role: 'button'
    };
  }
  return _objectSpread({
    element: 'div'
  }, hasClickEvent && clickableArea === 'multi' ? {
    role: 'button',
    tabIndex: 0
  } : {});
};
;// ../data_display/src/components/data_display/src/components/Tag/styles.ve.css.ts.vanilla.css!=!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"../data_display/src/components/Tag/styles.ve.css.ts.vanilla.css","source":"Ll8xZ25tOXYyMCB7CiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7CiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7CiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDsKfQ=="}!../../node_modules/.pnpm/@vanilla-extract+webpack-plugin@2.3.4_@types+node@22.13.10_babel-plugin-macros@3.1.0_webpack@5.103.0/node_modules/@vanilla-extract/webpack-plugin/extracted.js
// extracted by mini-css-extract-plugin
/* harmony default export */ const extracted = ({});
;// ../data_display/src/components/Tag/styles.ve.css.ts

var conversational = '_1gnm9v20';
;// ../data_display/src/components/Tag/styles.ts
const _excluded = ["paddingRightWithCloseIcon"];
function styles_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function styles_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? styles_ownKeys(Object(t), !0).forEach(function (r) {
      styles_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : styles_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function styles_defineProperty(e, r, t) {
  return (r = styles_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function styles_toPropertyKey(t) {
  var i = styles_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function styles_toPrimitive(t, r) {
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

const PROPS_BY_SIZE = {
  xs: {
    height: 24,
    fontSize: 'b_xs',
    lineHeight: 'b_xs',
    paddingX: '3',
    paddingY: '1',
    gap: '1',
    paddingRightWithCloseIcon: '0'
  },
  sm: {
    height: 32,
    fontSize: 'b_sm',
    lineHeight: 'b_sm',
    paddingX: '3',
    paddingY: '1',
    gap: '1',
    paddingRightWithCloseIcon: '1'
  },
  md: {
    height: 36,
    fontSize: 'b_md',
    lineHeight: 'b_md',
    paddingX: '4',
    paddingY: '1.5',
    gap: '1.5',
    paddingRightWithCloseIcon: '1.5'
  }
};
const getTagStyles = _ref => {
  let {
    size,
    isInteractive,
    variant,
    hasCloseIcon,
    shape,
    isDark
  } = _ref;
  const _PROPS_BY_SIZE$size = PROPS_BY_SIZE[size],
    {
      paddingRightWithCloseIcon
    } = _PROPS_BY_SIZE$size,
    rest = _objectWithoutProperties(_PROPS_BY_SIZE$size, _excluded);
  const defaultOutlineBackground = isDark ? 'white_10' : 'white';
  const defaultFilledBackground = isDark ? 'white_10' : 'grey_300';
  return styles_objectSpread(styles_objectSpread(styles_objectSpread(styles_objectSpread(styles_objectSpread(styles_objectSpread({}, rest), {}, {
    color: isDark ? 'grey_400' : 'grey_1200',
    outlineColor: {
      focusVisible: isDark ? 'grey_400' : 'grey_1200'
    },
    outlineStyle: {
      focusVisible: 'solid'
    },
    outlineWidth: {
      focusVisible: 'md'
    },
    outlineOffset: {
      focusVisible: 'sm'
    },
    decoration: isInteractive ? {
      hover: 'none'
    } : undefined,
    boxSizing: 'borderBox'
  }, shape === 'default' ? {
    borderRadius: 'circle'
  } : {
    className: conversational
  }), {}, {
    display: 'flex',
    alignItems: 'center'
  }, hasCloseIcon && {
    paddingRight: paddingRightWithCloseIcon
  }), {}, {
    width: 'fit-content',
    fontWeight: 'normal',
    userSelect: 'none'
  }, variant === 'filled' && {
    backgroundColor: isInteractive ? {
      default: defaultFilledBackground,
      hover: isDark ? 'white_20' : 'grey_400',
      active: isDark ? 'white_20' : 'grey_500'
    } : defaultFilledBackground
  }), variant === 'outline' && {
    borderWidth: 'sm',
    borderColor: 'border',
    borderStyle: 'solid',
    backgroundColor: isInteractive ? {
      default: defaultOutlineBackground,
      hover: isDark ? 'white_20' : 'grey_200',
      active: isDark ? 'white_20' : 'grey_500'
    } : defaultOutlineBackground
  }), {}, {
    flexShrink: 0,
    maxWidth: '100%'
  });
};
// EXTERNAL MODULE: ../data_display/src/components/Tag/TagContext/index.tsx
var TagContext = __webpack_require__("../data_display/src/components/Tag/TagContext/index.tsx");
;// ../data_display/src/components/Tag/index.tsx
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}







const Tag = /*#__PURE__*/(0,react.forwardRef)((_ref, ref) => {
  let {
    size = 'md',
    variant = 'filled',
    onClick,
    href,
    children,
    target,
    ariaLabel,
    hideOnClick,
    onKeyDown,
    tabIndex,
    maxWidth,
    clickableArea = 'tag',
    shape = 'default',
    goExperimental = false,
    theme = 'light',
    dataTrackTag = 'tag',
    dataTrackValue
  } = _ref;
  const [isOpen, setIsOpen] = (0,react.useState)(true);
  const hasClickEvent = Boolean(onClick || hideOnClick);
  const hasCloseIcon = !!(0,findChildByType/* findChildByType */.B)(children, 'TagCloseIcon');
  const isDark = goExperimental || theme === 'dark';
  const onTagClick = e => {
    if (hideOnClick && clickableArea === 'tag') {
      setIsOpen(false);
    }
    onClick === null || onClick === void 0 || onClick(e);
  };
  const {
    element,
    role,
    tabIndex: elementTabIndex
  } = getElement(href, hasClickEvent, clickableArea);
  const isInteractive = Boolean(role);
  const props = {
    onClick: hasClickEvent ? onTagClick : undefined,
    href,
    role,
    target,
    'aria-label': ariaLabel,
    onKeyDown,
    tabIndex: !(0,lodash.isNil)(elementTabIndex) ? elementTabIndex : tabIndex
  };
  if (!isOpen) {
    return null;
  }
  return /*#__PURE__*/react.createElement(TagContext/* TagContext */.Q.Provider, {
    value: {
      setIsOpen,
      clickableArea,
      variant,
      hideOnClick,
      size,
      isDark
    }
  }, /*#__PURE__*/react.createElement(Box/* default */.A, _extends({}, getTagStyles({
    size,
    isInteractive,
    variant,
    hasCloseIcon,
    shape,
    isDark
  }), {
    as: element,
    ref: ref,
    maxWidth: maxWidth
  }, props, {
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }), children));
});
Tag.displayName = 'Tag';
/* harmony default export */ const components_Tag = (Tag);
try {
    // @ts-ignore
    Tag.displayName = "Tag";
    // @ts-ignore
    Tag.__docgenInfo = { "description": "", "displayName": "Tag", "props": { "children": { "defaultValue": null, "description": "Any node that can be rendered.", "name": "children", "required": true, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "variant": { "defaultValue": { value: "filled" }, "description": "The Tag variant.", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"outline\"" }, { "value": "\"filled\"" }] } }, "size": { "defaultValue": { value: "md" }, "description": "The Tag size.", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"xs\"" }] } }, "hideOnClick": { "defaultValue": null, "description": "Hide the tag when clicked.", "name": "hideOnClick", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "clickableArea": { "defaultValue": { value: "tag" }, "description": "", "name": "clickableArea", "required": false, "type": { "name": "enum", "value": [{ "value": "\"tag\"" }, { "value": "\"closeButton\"" }, { "value": "\"multi\"" }] } }, "onKeyDown": { "defaultValue": null, "description": "", "name": "onKeyDown", "required": false, "type": { "name": "KeyboardEventHandler<HTMLElement>" } }, "tabIndex": { "defaultValue": null, "description": "", "name": "tabIndex", "required": false, "type": { "name": "number" } }, "shape": { "defaultValue": { value: "default" }, "description": "@ignore", "name": "shape", "required": false, "type": { "name": "enum", "value": [{ "value": "\"default\"" }, { "value": "\"conversational\"" }] } }, "goExperimental": { "defaultValue": { value: "false" }, "description": "@deprecated This is a temporary prop and should be deprecated soon, please use theme='dark' instead\n@ignore", "name": "goExperimental", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "theme": { "defaultValue": { value: "light" }, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } }, "dataTrackTag": { "defaultValue": { value: "tag" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "ariaLabel": { "defaultValue": null, "description": "ariaLabel is required when the tag using \"href\" or \"onClick\" props.", "name": "ariaLabel", "required": false, "type": { "name": "string" } }, "onClick": { "defaultValue": null, "description": "On tag click handler.\nWhen using, ariaLabel prop is required.", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLElement>" } }, "href": { "defaultValue": null, "description": "Adding href to tag.\nWhen using, ariaLabel prop is required.", "name": "href", "required": false, "type": { "name": "string" } }, "target": { "defaultValue": null, "description": "Tag href target.", "name": "target", "required": false, "type": { "name": "enum", "value": [{ "value": "\"_self\"" }, { "value": "\"_blank\"" }, { "value": "\"_parent\"" }, { "value": "\"_top\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../data_display/src/components/Tag/index.tsx#Tag"] = { docgenInfo: Tag.__docgenInfo, name: "Tag", path: "../data_display/src/components/Tag/index.tsx#Tag" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../data_display/src/components/TagCollection/ShowMoreTag/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _fiverr_private_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../popover/dist/esm/src/components/Popover/index.js");
/* harmony import */ var _fiverr_private_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContent/index.js");
/* harmony import */ var _fiverr_private_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverContext/index.js");
/* harmony import */ var _fiverr_private_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../popover/dist/esm/src/components/Popover/PopoverAnchor/index.js");
/* harmony import */ var _fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
/* harmony import */ var _Tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../data_display/src/components/Tag/index.tsx");
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}





const ShowMoreAnchor = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
    size,
    variant,
    theme,
    hiddenTagsCount,
    children
  } = _ref;
  const {
    floatingData: {
      refs
    }
  } = (0,_fiverr_private_popover__WEBPACK_IMPORTED_MODULE_5__/* .usePopoverContext */ .C)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => refs.reference.current);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    cursor: "pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tag__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
    size: size,
    variant: variant,
    theme: theme
  }, /*#__PURE__*/ /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(children) || typeof children === 'function' ? (0,_fiverr_private_ui_utils__WEBPACK_IMPORTED_MODULE_7__/* .renderChildren */ .s)(children, {
    hiddenTagsCount
  }) : "+ ".concat(hiddenTagsCount)));
});
ShowMoreAnchor.displayName = 'ShowMoreAnchor';
const ShowMoreTag = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref2, ref) => {
  let {
    hiddenTagsCount,
    hiddenTags,
    size = 'md',
    variant = 'filled',
    theme = 'light',
    children
  } = _ref2;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_popover__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_popover__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ShowMoreAnchor, {
    ref: ref,
    size: size,
    variant: variant,
    theme: theme,
    hiddenTagsCount: hiddenTagsCount
  }, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_popover__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, _extends({}, theme === 'dark' && {
    backgroundColor: 'grey_1200'
  }, {
    disablePadding: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    direction: "column",
    overflow: "auto",
    maxHeight: "323px",
    padding: "5"
  }, hiddenTags)));
});
ShowMoreTag.displayName = 'ShowMoreTag';
Object.assign(ShowMoreTag, {
  id: 'ShowMoreTag'
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowMoreTag);
try {
    // @ts-ignore
    ShowMoreAnchor.displayName = "ShowMoreAnchor";
    // @ts-ignore
    ShowMoreAnchor.__docgenInfo = { "description": "", "displayName": "ShowMoreAnchor", "props": { "variant": { "defaultValue": { value: "filled" }, "description": "Variant of the ShowMoreTag.", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"outline\"" }, { "value": "\"filled\"" }] } }, "size": { "defaultValue": { value: "md" }, "description": "Size of the ShowMoreTag.", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"xs\"" }] } }, "children": { "defaultValue": null, "description": "Content to be rendered inside the ShowMoreTag, based on hiddenTagsCount.", "name": "children", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }, { "value": "({ hiddenTagsCount }: { hiddenTagsCount: number; }) => ReactNode" }] } }, "hiddenTagsCount": { "defaultValue": null, "description": "@ignore", "name": "hiddenTagsCount", "required": false, "type": { "name": "number" } }, "hiddenTags": { "defaultValue": null, "description": "@ignore", "name": "hiddenTags", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "theme": { "defaultValue": { value: "light" }, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../data_display/src/components/TagCollection/ShowMoreTag/index.tsx#ShowMoreAnchor"] = { docgenInfo: ShowMoreAnchor.__docgenInfo, name: "ShowMoreAnchor", path: "../data_display/src/components/TagCollection/ShowMoreTag/index.tsx#ShowMoreAnchor" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../data_display/src/components/TagCollection/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DarkModeTags: () => (/* binding */ DarkModeTags),
  NoOverflow: () => (/* binding */ NoOverflow),
  OverrideDefaults: () => (/* binding */ OverrideDefaults),
  Primary: () => (/* binding */ Primary),
  VeryLongTags: () => (/* binding */ VeryLongTags),
  WithCustomShowMore: () => (/* binding */ WithCustomShowMore),
  WithoutShowMore: () => (/* binding */ WithoutShowMore),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryStack/index.js
var StoryStack = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryStack/index.js");
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StoryText/index.js
var StoryText = __webpack_require__("../storybook_helpers/dist/esm/src/components/StoryText/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Card/Card/index.js
var Card = __webpack_require__("../layout_components/dist/esm/src/components/Card/Card/index.js");
// EXTERNAL MODULE: ../data_display/src/components/Tag/index.tsx + 4 modules
var Tag = __webpack_require__("../data_display/src/components/Tag/index.tsx");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Wrap/index.js
var Wrap = __webpack_require__("../layout_components/dist/esm/src/components/Wrap/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js
var excludeChildrenByType = __webpack_require__("../ui_utils/dist/esm/src/utils/excludeChildrenByType/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
// EXTERNAL MODULE: ../hooks/dist/esm/src/hooks/useElementSize/index.js + 1 modules
var useElementSize = __webpack_require__("../hooks/dist/esm/src/hooks/useElementSize/index.js");
;// ../data_display/src/components/TagCollection/index.tsx





const TagCollection = _ref => {
  let {
    children,
    size,
    variant,
    minHeight,
    height = '100%',
    maxHeight,
    minWidth,
    width = '100%',
    maxWidth,
    gap,
    justifyContent,
    theme = 'light',
    dataTrackTag = 'tag_collection',
    dataTrackValue
  } = _ref;
  const showMoreTag = (0,findChildByType/* findChildByType */.B)(children, 'ShowMoreTag');
  const shouldShowMore = !(0,lodash.isNil)(showMoreTag);
  const childrenAsTagsArray = (0,react.useMemo)(() => (0,excludeChildrenByType/* excludeChildrenByType */.h)(children, 'ShowMoreTag'), [children]);
  const ref = (0,react.useRef)(null);
  const [originalTags, setOriginalTags] = (0,react.useState)([...childrenAsTagsArray]);
  const [tagsToShow, setTagsToShow] = (0,react.useState)([...childrenAsTagsArray]);
  const [hiddenTags, setHiddenTags] = (0,react.useState)([]);
  const [overflowingTagIndex, setOverflowingTagIndex] = (0,react.useState)(null);
  const [readyToShowTags, setReadyToShowTags] = (0,react.useState)(false);
  const windowSize = (0,useElementSize/* default */.A)(typeof window !== 'undefined' ? window : null);
  (0,react.useEffect)(() => {
    setOverflowingTagIndex(null);
    setReadyToShowTags(false);
    setOriginalTags([...childrenAsTagsArray]);
    setTagsToShow([...childrenAsTagsArray]);
    setHiddenTags([]);
  }, [windowSize, childrenAsTagsArray]);

  // FIRST RENDER - Initial Generation of Tags, Checking which tags overflow (setting overflowingTagIndex)
  (0,react.useEffect)(() => {
    if (ref.current && !overflowingTagIndex) {
      const containerBottomPosition = ref.current.offsetTop + ref.current.offsetHeight;
      const childrenElements = Object.values(ref.current.children);
      for (let i = 0; i < childrenElements.length; i++) {
        const child = childrenElements[i];
        const childBottomPosition = child.offsetTop + child.offsetHeight;
        if (childBottomPosition > containerBottomPosition) {
          setOverflowingTagIndex(i);
          setTagsToShow([...originalTags.slice(0, i)]);
          setHiddenTags([...originalTags.slice(i)]);
          break;
        }
      }
    }
  }, [overflowingTagIndex, originalTags]);

  // SECOND RENDER - if the show more tag is itself overflowing, reduce one more tag
  (0,react.useEffect)(() => {
    if (shouldShowMore && ref.current && !!overflowingTagIndex) {
      const containerBottomPosition = ref.current.offsetTop + ref.current.offsetHeight;
      const childrenElements = Object.values(ref.current.children);
      const showMoreElement = childrenElements[overflowingTagIndex];
      const showMoreElementBottomPosition = showMoreElement.offsetTop + showMoreElement.offsetHeight;
      if (showMoreElementBottomPosition > containerBottomPosition) {
        setOverflowingTagIndex(overflowingTagIndex - 1);
        setTagsToShow([...originalTags.slice(0, overflowingTagIndex - 1)]);
        setHiddenTags([...originalTags.slice(overflowingTagIndex - 1)]);
      } else {
        setReadyToShowTags(true);
      }
    } else if (ref.current) {
      setReadyToShowTags(true);
    }
  }, [shouldShowMore, overflowingTagIndex, originalTags]);
  return /*#__PURE__*/react.createElement(Wrap/* default */.A, {
    minHeight: minHeight,
    height: height,
    maxHeight: maxHeight,
    minWidth: minWidth,
    width: width,
    maxWidth: maxWidth,
    overflow: "hidden",
    alignItems: "center",
    alignContent: "flexStart",
    visibility: readyToShowTags ? 'visible' : 'hidden',
    ref: ref,
    gap: gap,
    justifyContent: justifyContent,
    dataTrackTag: dataTrackTag,
    dataTrackValue: dataTrackValue
  }, tagsToShow.map(tagComponent => (0,render_children/* renderChildren */.s)(tagComponent, {
    size: size || tagComponent.props.size,
    variant: variant || tagComponent.props.variant,
    theme: theme || tagComponent.props.theme
  })), shouldShowMore && overflowingTagIndex && (0,render_children/* renderChildren */.s)(showMoreTag, {
    hiddenTagsCount: originalTags.length - tagsToShow.length,
    hiddenTags: hiddenTags.map(tagComponent => (0,render_children/* renderChildren */.s)(tagComponent, {
      size: size || tagComponent.props.size,
      variant: variant || tagComponent.props.variant,
      theme: theme || tagComponent.props.theme
    })),
    variant: variant || showMoreTag.props.variant,
    size: size || showMoreTag.props.size,
    theme: theme || showMoreTag.props.theme
  }));
};
TagCollection.displayName = 'TagCollection';
/* harmony default export */ const components_TagCollection = (TagCollection);
try {
    // @ts-ignore
    TagCollection.displayName = "TagCollection";
    // @ts-ignore
    TagCollection.__docgenInfo = { "description": "", "displayName": "TagCollection", "props": { "children": { "defaultValue": null, "description": "List of Tags to be Rendered.", "name": "children", "required": false, "type": { "name": "boolean", "value": [{ "value": "string" }, { "value": "number" }, { "value": "false" }, { "value": "true" }, { "value": "{}" }, { "value": "ReactElement<any, string | JSXElementConstructor<any>>" }, { "value": "Iterable<ReactNode>" }, { "value": "ReactPortal" }] } }, "variant": { "defaultValue": null, "description": "Override the variant of the Tags.", "name": "variant", "required": false, "type": { "name": "enum", "value": [{ "value": "\"outline\"" }, { "value": "\"filled\"" }] } }, "size": { "defaultValue": null, "description": "Override the size of the Tags.", "name": "size", "required": false, "type": { "name": "enum", "value": [{ "value": "\"sm\"" }, { "value": "\"md\"" }, { "value": "\"xs\"" }] } }, "theme": { "defaultValue": { value: "light" }, "description": "", "name": "theme", "required": false, "type": { "name": "enum", "value": [{ "value": "\"light\"" }, { "value": "\"dark\"" }] } }, "dataTrackTag": { "defaultValue": { value: "tag_collection" }, "description": "", "name": "dataTrackTag", "required": false, "type": { "name": "string" } }, "dataTrackValue": { "defaultValue": null, "description": "", "name": "dataTrackValue", "required": false, "type": { "name": "string" } }, "gap": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "gap", "required": false, "type": { "name": "enum", "value": [{ "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }] } }, "maxWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxWidth", "required": false, "type": { "name": "CSSProperty" } }, "maxHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "maxHeight", "required": false, "type": { "name": "CSSProperty" } }, "minWidth": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minWidth", "required": false, "type": { "name": "CSSProperty" } }, "minHeight": { "defaultValue": null, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "minHeight", "required": false, "type": { "name": "CSSProperty" } }, "width": { "defaultValue": { value: "100%" }, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "width", "required": false, "type": { "name": "CSSProperty" } }, "height": { "defaultValue": { value: "100%" }, "description": "<pre>Support single value with valid CSS properties,\n or object as follows:\n `{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "height", "required": false, "type": { "name": "CSSProperty" } }, "justifyContent": { "defaultValue": null, "description": "<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "justifyContent", "required": false, "type": { "name": "enum", "value": [{ "value": "\"center\"" }, { "value": "\"stretch\"" }, { "value": "\"baseline\"" }, { "value": "\"spaceAround\"" }, { "value": "\"spaceEvenly\"" }, { "value": "\"spaceBetween\"" }, { "value": "\"flexStart\"" }, { "value": "\"flexEnd\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../data_display/src/components/TagCollection/index.tsx#TagCollection"] = { docgenInfo: TagCollection.__docgenInfo, name: "TagCollection", path: "../data_display/src/components/TagCollection/index.tsx#TagCollection" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../data_display/src/components/TagCollection/ShowMoreTag/index.tsx
var ShowMoreTag = __webpack_require__("../data_display/src/components/TagCollection/ShowMoreTag/index.tsx");
;// ../data_display/src/components/TagCollection/stories/index.stories.tsx
const _excluded = ["children"],
  _excluded2 = ["children"],
  _excluded3 = ["children"],
  _excluded4 = ["children"],
  _excluded5 = ["children"];
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




const TagCollectionHeight = '84px';
const Primary = {
  tags: ['sidebar-ignore']
};
const NoOverflow = {
  tags: ['sidebar-ignore'],
  args: {
    children: [...new Array(5)].map((_, i) => /*#__PURE__*/react.createElement(Tag/* default */.A, {
      key: i
    }, "Hello World", i + 1))
  },
  parameters: {
    docs: {
      description: ''
    }
  }
};
const WithoutShowMore = {
  tags: ['sidebar-ignore'],
  parameters: {
    docs: {
      description: 'Do not render the ShowMoreTag component'
    }
  },
  render: _ref => {
    let {
        children
      } = _ref,
      args = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
      height: "450px",
      justifyContent: "flexEnd",
      direction: "column"
    }, /*#__PURE__*/react.createElement(Card/* default */.A, {
      height: "fit-content",
      padding: "4",
      borderRadius: "lg"
    }, /*#__PURE__*/react.createElement(components_TagCollection, _extends({
      width: "100%",
      minWidth: "200px",
      height: TagCollectionHeight
    }, args), children)));
  }
};
const OverrideDefaults = {
  tags: ['sidebar-ignore'],
  args: {
    variant: 'outline',
    size: 'sm'
  }
};
const WithCustomShowMore = {
  tags: ['sidebar-ignore'],
  args: {
    children: [...new Array(20)].map((_, i) => /*#__PURE__*/react.createElement(Tag/* default */.A, {
      key: i
    }, "Hello World", i + 1))
  },
  parameters: {
    docs: {
      source: {
        code: "const childrenTags = [...new Array(20)].map((_, i) => <Tag key={i}>Hello World{i + 1}</Tag>);\n\nreturn (\n  <StoryStack height=\"450px\" justifyContent=\"flexEnd\" direction=\"column\">\n    <StoryStack borderStyle=\"solid\" borderColor=\"black\" borderWidth=\"sm\">\n      <TagCollection width=\"100%\" minWidth=\"200px\" height=\"84px\" {...args}>\n        {childrenTags}\n        <ShowMoreTag>{({ hiddenTagsCount }) => <StoryText>Show {hiddenTagsCount} More</StoryText>}</ShowMoreTag>\n      </TagCollection>\n    </StoryStack>\n  </StoryStack>\n);"
      }
    }
  },
  render: _ref2 => {
    let {
        children
      } = _ref2,
      args = _objectWithoutProperties(_ref2, _excluded2);
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
      height: "450px",
      justifyContent: "flexEnd",
      direction: "column"
    }, /*#__PURE__*/react.createElement(Card/* default */.A, {
      height: "fit-content",
      padding: "4",
      borderRadius: "lg"
    }, /*#__PURE__*/react.createElement(components_TagCollection, _extends({
      width: "100%",
      minWidth: "200px",
      height: TagCollectionHeight
    }, args), children, /*#__PURE__*/react.createElement(ShowMoreTag/* default */.A, null, _ref3 => {
      let {
        hiddenTagsCount
      } = _ref3;
      return /*#__PURE__*/react.createElement(StoryText/* default */.A, null, "Show ", hiddenTagsCount, " More");
    }))));
  }
};
const VeryLongTags = {
  tags: ['sidebar-ignore'],
  args: {
    children: [/*#__PURE__*/react.createElement(Tag/* default */.A, {
      key: -1
    }, /*#__PURE__*/react.createElement(StoryText/* default */.A, {
      color: "grey_1200",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    }, "Very Very Very Long Tag Which Has Many Characters And Should Overflow Once It Is Actually Too Long Because We Want To Show Ellipsis")), ...[...new Array(20)].map((_, i) => /*#__PURE__*/react.createElement(Tag/* default */.A, {
      key: i
    }, "Hello World", i + 1))]
  },
  parameters: {
    docs: {
      description: {
        story: "Click the last tag (with +x) to see the hidden tags.\n\nYou'll have to set the inner overflow rules yourself in order to show the ellipsis in a tag"
      }
    }
  },
  render: _ref4 => {
    let {
        children
      } = _ref4,
      args = _objectWithoutProperties(_ref4, _excluded3);
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
      height: "450px",
      justifyContent: "flexEnd",
      direction: "column"
    }, /*#__PURE__*/react.createElement(Card/* default */.A, {
      height: "fit-content",
      padding: "4",
      borderRadius: "lg"
    }, /*#__PURE__*/react.createElement(components_TagCollection, _extends({
      width: "100%",
      minWidth: "200px",
      height: TagCollectionHeight
    }, args), children, /*#__PURE__*/react.createElement(ShowMoreTag/* default */.A, null))));
  }
};
const meta = {
  title: 'Data Display/TagCollection',
  component: components_TagCollection,
  args: {
    children: [...new Array(20)].map((_, i) => /*#__PURE__*/react.createElement(Tag/* default */.A, {
      key: i
    }, "Hello World", i + 1))
  },
  parameters: {
    docs: {
      description: {
        story: 'Click the last tag (with +x) to see the hidden tags.'
      }
    }
  },
  render: _ref5 => {
    let {
        children
      } = _ref5,
      args = _objectWithoutProperties(_ref5, _excluded4);
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
      height: "450px",
      justifyContent: "flexEnd",
      direction: "column"
    }, /*#__PURE__*/react.createElement(Card/* default */.A, {
      height: "fit-content",
      padding: "4",
      borderRadius: "lg"
    }, /*#__PURE__*/react.createElement(components_TagCollection, _extends({
      width: "100%",
      minWidth: "200px",
      height: TagCollectionHeight
    }, args), children, /*#__PURE__*/react.createElement(ShowMoreTag/* default */.A, null))));
  }
};
const DarkModeTags = {
  tags: ['sidebar-ignore'],
  args: {
    children: [...[...new Array(20)].map((_, i) => /*#__PURE__*/react.createElement(Tag/* default */.A, {
      key: i
    }, "Hello World", i + 1))]
  },
  parameters: {
    docs: {
      description: {
        story: "Click the last tag (with +x) to see the hidden tags.\n\nYou'll have to set the inner overflow rules yourself in order to show the ellipsis in a tag"
      }
    }
  },
  render: _ref6 => {
    let {
        children
      } = _ref6,
      args = _objectWithoutProperties(_ref6, _excluded5);
    return /*#__PURE__*/react.createElement(StoryStack/* default */.A, {
      height: "450px",
      justifyContent: "flexEnd",
      direction: "column"
    }, /*#__PURE__*/react.createElement(Card/* default */.A, {
      height: "fit-content",
      padding: "4",
      borderRadius: "lg",
      backgroundColor: "black"
    }, /*#__PURE__*/react.createElement(components_TagCollection, _extends({
      width: "100%",
      minWidth: "200px",
      height: TagCollectionHeight,
      theme: "dark"
    }, args), children, /*#__PURE__*/react.createElement(ShowMoreTag/* default */.A, null))));
  }
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
NoOverflow.parameters = {
  ...NoOverflow.parameters,
  docs: {
    ...NoOverflow.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    children: [...new Array(5)].map((_, i) => <Tag key={i}>Hello World{i + 1}</Tag>)\n  },\n  parameters: {\n    docs: {\n      description: ''\n    }\n  }\n}",
      ...NoOverflow.parameters?.docs?.source
    }
  }
};
WithoutShowMore.parameters = {
  ...WithoutShowMore.parameters,
  docs: {
    ...WithoutShowMore.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  parameters: {\n    docs: {\n      description: 'Do not render the ShowMoreTag component'\n    }\n  },\n  render: ({\n    children,\n    ...args\n  }) => <StoryStack height=\"450px\" justifyContent=\"flexEnd\" direction=\"column\">\n      <Card height=\"fit-content\" padding=\"4\" borderRadius=\"lg\">\n        <TagCollection width=\"100%\" minWidth=\"200px\" height={TagCollectionHeight} {...args}>\n          {children}\n        </TagCollection>\n      </Card>\n    </StoryStack>\n}",
      ...WithoutShowMore.parameters?.docs?.source
    }
  }
};
OverrideDefaults.parameters = {
  ...OverrideDefaults.parameters,
  docs: {
    ...OverrideDefaults.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    variant: 'outline',\n    size: 'sm'\n  }\n}",
      ...OverrideDefaults.parameters?.docs?.source
    }
  }
};
WithCustomShowMore.parameters = {
  ...WithCustomShowMore.parameters,
  docs: {
    ...WithCustomShowMore.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    children: [...new Array(20)].map((_, i) => <Tag key={i}>Hello World{i + 1}</Tag>)\n  },\n  parameters: {\n    docs: {\n      source: {\n        code: `const childrenTags = [...new Array(20)].map((_, i) => <Tag key={i}>Hello World{i + 1}</Tag>);\n\nreturn (\n  <StoryStack height=\"450px\" justifyContent=\"flexEnd\" direction=\"column\">\n    <StoryStack borderStyle=\"solid\" borderColor=\"black\" borderWidth=\"sm\">\n      <TagCollection width=\"100%\" minWidth=\"200px\" height=\"84px\" {...args}>\n        {childrenTags}\n        <ShowMoreTag>{({ hiddenTagsCount }) => <StoryText>Show {hiddenTagsCount} More</StoryText>}</ShowMoreTag>\n      </TagCollection>\n    </StoryStack>\n  </StoryStack>\n);`\n      }\n    }\n  },\n  render: ({\n    children,\n    ...args\n  }) => <StoryStack height=\"450px\" justifyContent=\"flexEnd\" direction=\"column\">\n      <Card height=\"fit-content\" padding=\"4\" borderRadius=\"lg\">\n        <TagCollection width=\"100%\" minWidth=\"200px\" height={TagCollectionHeight} {...args}>\n          {children}\n          <ShowMoreTag>{({\n            hiddenTagsCount\n          }) => <StoryText>Show {hiddenTagsCount} More</StoryText>}</ShowMoreTag>\n        </TagCollection>\n      </Card>\n    </StoryStack>\n}",
      ...WithCustomShowMore.parameters?.docs?.source
    }
  }
};
VeryLongTags.parameters = {
  ...VeryLongTags.parameters,
  docs: {
    ...VeryLongTags.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    children: [<Tag key={-1}>\n        <StoryText color=\"grey_1200\" overflow=\"hidden\" whiteSpace=\"nowrap\" textOverflow=\"ellipsis\">\n          Very Very Very Long Tag Which Has Many Characters And Should Overflow Once It Is Actually Too Long Because We\n          Want To Show Ellipsis\n        </StoryText>\n      </Tag>, ...[...new Array(20)].map((_, i) => <Tag key={i}>Hello World{i + 1}</Tag>)]\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: `Click the last tag (with +x) to see the hidden tags.\n\nYou'll have to set the inner overflow rules yourself in order to show the ellipsis in a tag`\n      }\n    }\n  },\n  render: ({\n    children,\n    ...args\n  }) => <StoryStack height=\"450px\" justifyContent=\"flexEnd\" direction=\"column\">\n      <Card height=\"fit-content\" padding=\"4\" borderRadius=\"lg\">\n        <TagCollection width=\"100%\" minWidth=\"200px\" height={TagCollectionHeight} {...args}>\n          {children}\n          <ShowMoreTag />\n        </TagCollection>\n      </Card>\n    </StoryStack>\n}",
      ...VeryLongTags.parameters?.docs?.source
    }
  }
};
DarkModeTags.parameters = {
  ...DarkModeTags.parameters,
  docs: {
    ...DarkModeTags.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    children: [...[...new Array(20)].map((_, i) => <Tag key={i}>Hello World{i + 1}</Tag>)]\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: `Click the last tag (with +x) to see the hidden tags.\n\nYou'll have to set the inner overflow rules yourself in order to show the ellipsis in a tag`\n      }\n    }\n  },\n  render: ({\n    children,\n    ...args\n  }) => <StoryStack height=\"450px\" justifyContent=\"flexEnd\" direction=\"column\">\n      <Card height=\"fit-content\" padding=\"4\" borderRadius=\"lg\" backgroundColor=\"black\">\n        <TagCollection width=\"100%\" minWidth=\"200px\" height={TagCollectionHeight} theme=\"dark\" {...args}>\n          {children}\n          <ShowMoreTag />\n        </TagCollection>\n      </Card>\n    </StoryStack>\n}",
      ...DarkModeTags.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","NoOverflow","WithoutShowMore","OverrideDefaults","WithCustomShowMore","VeryLongTags","DarkModeTags"];

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

/***/ "../layout_components/dist/esm/src/components/Card/Card/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "../layout_components/dist/esm/src/components/Wrap/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Flex/index.js");
const _excluded = ["children", "gap", "wrap", "dataTrackTag"];
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


const Wrap = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      children,
      gap = {
        default: '3'
      },
      wrap = {
        default: 'wrap'
      },
      dataTrackTag = 'wrap'
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Flex__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    dataTrackTag: dataTrackTag,
    ref: ref,
    gap: gap,
    wrap: wrap
  }, restProps), children);
});
Wrap.displayName = 'Wrap';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrap);
;
Wrap.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Wrap"
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

/***/ "../storybook_helpers/dist/esm/src/components/StoryText/index.js":
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

/***/ })

}]);
//# sourceMappingURL=5907.4537df0b.iframe.bundle.js.map