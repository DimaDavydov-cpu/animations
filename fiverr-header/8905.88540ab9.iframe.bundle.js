(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[8905],{

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

/***/ "../data_display/src/components/Timeline/TimelineContext/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ useTimelineContext),
/* harmony export */   h: () => (/* binding */ TimelineContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const TimelineContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  orientation: 'horizontal',
  currentIndex: 0,
  totalCount: 0,
  centered: false,
  stretched: false,
  disabledItems: new Set(),
  mode: 'full'
});
const useTimelineContext = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TimelineContext);

/***/ }),

/***/ "../data_display/src/components/Timeline/TimelineItem/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Timeline_TimelineItem)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../data_display/src/components/Timeline/TimelineContext/index.tsx
var TimelineContext = __webpack_require__("../data_display/src/components/Timeline/TimelineContext/index.tsx");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Center/index.js
var Center = __webpack_require__("../layout_components/dist/esm/src/components/Center/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
;// ../data_display/src/components/Timeline/utils/index.ts
const getDividerColor = function (isCompleted) {
  let disabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (disabled) {
    return 'grey_500';
  }
  if (isCompleted) {
    return 'grey_1200';
  }
  return 'grey_800';
};
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/findChildByType/index.js
var findChildByType = __webpack_require__("../ui_utils/dist/esm/src/utils/findChildByType/index.js");
;// ../data_display/src/components/Timeline/hooks/useFindElements.ts

const useFindElements = children => {
  const icon = (0,findChildByType/* findChildByType */.B)(children, 'TimelineIcon');
  const title = (0,findChildByType/* findChildByType */.B)(children, 'TimelineTitle');
  const description = (0,findChildByType/* findChildByType */.B)(children, 'TimelineDescription');
  return {
    icon,
    title,
    description
  };
};
;// ../data_display/src/components/Timeline/TimelineItem/TimelineHorizontalItem.tsx






const TimelineHorizontalItem = _ref => {
  let {
    isFirst,
    isLast,
    isCompleted,
    isActive,
    disabled,
    isNextItemDisabled,
    isPrevItemDisabled,
    state,
    children
  } = _ref;
  const {
    centered,
    totalCount,
    stretched
  } = (0,TimelineContext/* useTimelineContext */._)();
  const {
    icon,
    title,
    description
  } = useFindElements(children);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    width: !centered && isLast || stretched ? 'auto' : "calc(100% / ".concat(totalCount, ")"),
    flexShrink: 0,
    direction: "column",
    alignItems: "center",
    gap: "1"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    alignItems: centered ? 'center' : 'flexStart',
    justifyContent: centered ? 'center' : 'flexStart',
    gap: "1",
    width: "100%",
    position: "relative"
  }, !isFirst && /*#__PURE__*/react.createElement(Container/* default */.A, {
    right: centered ? 'calc(50% + 16px)' : undefined,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: 0,
    height: "2px",
    backgroundColor: getDividerColor(isCompleted || isActive, disabled || isPrevItemDisabled)
  }), /*#__PURE__*/react.createElement(Center/* default */.A, {
    backgroundColor: "white",
    zIndex: "2",
    height: 32,
    paddingX: "1"
  }, (0,render_children/* renderChildren */.s)(icon, {
    state,
    disabled
  })), !isLast && /*#__PURE__*/react.createElement(Container/* default */.A, {
    left: centered ? 'calc(50% + 16px)' : 0,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: 0,
    height: "2px",
    backgroundColor: getDividerColor(isCompleted, disabled || isNextItemDisabled)
  })), (title || description) && /*#__PURE__*/react.createElement(Stack/* default */.A, {
    paddingX: "1",
    direction: "column",
    gap: "0",
    width: "100%"
  }, title && (0,render_children/* renderChildren */.s)(title, {
    disabled,
    isActive
  }), description && (0,render_children/* renderChildren */.s)(description, {
    disabled
  }))), !isLast && stretched && /*#__PURE__*/react.createElement(Container/* default */.A, {
    position: "relative",
    marginTop: "4",
    top: "-1px",
    width: "100%",
    height: "2px",
    backgroundColor: getDividerColor(isCompleted, disabled || isNextItemDisabled)
  }));
};
TimelineHorizontalItem.displayName = 'TimelineHorizontalItem';
/* harmony default export */ const TimelineItem_TimelineHorizontalItem = (TimelineHorizontalItem);
try {
    // @ts-ignore
    TimelineHorizontalItem.displayName = "TimelineHorizontalItem";
    // @ts-ignore
    TimelineHorizontalItem.__docgenInfo = { "description": "", "displayName": "TimelineHorizontalItem", "props": { "isFirst": { "defaultValue": null, "description": "", "name": "isFirst", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isLast": { "defaultValue": null, "description": "", "name": "isLast", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isCompleted": { "defaultValue": null, "description": "", "name": "isCompleted", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isActive": { "defaultValue": null, "description": "", "name": "isActive", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isNextItemDisabled": { "defaultValue": null, "description": "", "name": "isNextItemDisabled", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isPrevItemDisabled": { "defaultValue": null, "description": "", "name": "isPrevItemDisabled", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "state": { "defaultValue": null, "description": "", "name": "state", "required": true, "type": { "name": "enum", "value": [{ "value": "\"current\"" }, { "value": "\"completed\"" }, { "value": "\"notStarted\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../data_display/src/components/Timeline/TimelineItem/TimelineHorizontalItem.tsx#TimelineHorizontalItem"] = { docgenInfo: TimelineHorizontalItem.__docgenInfo, name: "TimelineHorizontalItem", path: "../data_display/src/components/Timeline/TimelineItem/TimelineHorizontalItem.tsx#TimelineHorizontalItem" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../data_display/src/components/Timeline/TimelineItem/TimelineVerticalItem.tsx





const TimelineVerticalItem = _ref => {
  let {
    isLast,
    isCompleted,
    isActive,
    disabled,
    isNextItemDisabled,
    state,
    isFirst,
    children
  } = _ref;
  const {
    icon,
    title,
    description
  } = useFindElements(children);
  return /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "row",
    alignItems: "stretch",
    height: !isLast ? '100%' : 'auto',
    gap: "2"
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, {
    alignItems: "center",
    direction: "column",
    gap: "0",
    minHeight: !isLast ? '86px' : 'auto',
    position: "relative"
  }, (0,render_children/* renderChildren */.s)(icon, {
    state,
    disabled,
    isFirst,
    isLast
  }), !isLast && /*#__PURE__*/react.createElement(Container/* default */.A, {
    height: "100%",
    width: "2px",
    backgroundColor: getDividerColor(isCompleted, disabled || isNextItemDisabled)
  })), (title || description) && /*#__PURE__*/react.createElement(Stack/* default */.A, {
    direction: "column",
    gap: "0"
  }, title && (0,render_children/* renderChildren */.s)(title, {
    disabled,
    isActive,
    withoutDescription: !description
  }), description && (0,render_children/* renderChildren */.s)(description, {
    disabled
  })));
};
TimelineVerticalItem.displayName = 'TimelineVerticalItem';
/* harmony default export */ const TimelineItem_TimelineVerticalItem = (TimelineVerticalItem);
try {
    // @ts-ignore
    TimelineVerticalItem.displayName = "TimelineVerticalItem";
    // @ts-ignore
    TimelineVerticalItem.__docgenInfo = { "description": "", "displayName": "TimelineVerticalItem", "props": { "isLast": { "defaultValue": null, "description": "", "name": "isLast", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isCompleted": { "defaultValue": null, "description": "", "name": "isCompleted", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isActive": { "defaultValue": null, "description": "", "name": "isActive", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isNextItemDisabled": { "defaultValue": null, "description": "", "name": "isNextItemDisabled", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "state": { "defaultValue": null, "description": "", "name": "state", "required": true, "type": { "name": "enum", "value": [{ "value": "\"current\"" }, { "value": "\"completed\"" }, { "value": "\"notStarted\"" }] } }, "isFirst": { "defaultValue": null, "description": "", "name": "isFirst", "required": true, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../data_display/src/components/Timeline/TimelineItem/TimelineVerticalItem.tsx#TimelineVerticalItem"] = { docgenInfo: TimelineVerticalItem.__docgenInfo, name: "TimelineVerticalItem", path: "../data_display/src/components/Timeline/TimelineItem/TimelineVerticalItem.tsx#TimelineVerticalItem" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../data_display/src/components/Timeline/TimelineItem/index.tsx




const TimelineItem = _ref => {
  let {
    index = 0,
    children,
    disabled
  } = _ref;
  const {
    orientation,
    currentIndex,
    totalCount,
    disabledItems
  } = (0,TimelineContext/* useTimelineContext */._)();
  const isActive = currentIndex === index;
  const isCompleted = index < currentIndex;
  const isFirst = index === 0;
  const isLast = index === totalCount - 1;
  const isNextItemDisabled = disabledItems.has(index + 1);
  const isPrevItemDisabled = disabledItems.has(index - 1);
  let state = 'notStarted';
  if (isActive) {
    state = 'current';
  } else if (isCompleted) {
    state = 'completed';
  }
  if (orientation === 'vertical') {
    return /*#__PURE__*/react.createElement(TimelineItem_TimelineVerticalItem, {
      isLast: isLast,
      isActive: isActive,
      isCompleted: isCompleted,
      disabled: disabled,
      isNextItemDisabled: isNextItemDisabled,
      state: state,
      isFirst: isFirst
    }, children);
  }
  return /*#__PURE__*/react.createElement(TimelineItem_TimelineHorizontalItem, {
    isFirst: isFirst,
    isLast: isLast,
    isCompleted: isCompleted,
    isActive: isActive,
    disabled: disabled,
    isNextItemDisabled: isNextItemDisabled,
    isPrevItemDisabled: isPrevItemDisabled,
    state: state
  }, children);
};
TimelineItem.displayName = 'TimelineItem';
/* harmony default export */ const Timeline_TimelineItem = (TimelineItem);
try {
    // @ts-ignore
    TimelineItem.displayName = "TimelineItem";
    // @ts-ignore
    TimelineItem.__docgenInfo = { "description": "", "displayName": "TimelineItem", "props": { "index": { "defaultValue": { value: "0" }, "description": "", "name": "index", "required": false, "type": { "name": "number" } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../data_display/src/components/Timeline/TimelineItem/index.tsx#TimelineItem"] = { docgenInfo: TimelineItem.__docgenInfo, name: "TimelineItem", path: "../data_display/src/components/Timeline/TimelineItem/index.tsx#TimelineItem" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../data_display/src/components/Timeline/stories/index.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  HorizontalCentered: () => (/* binding */ HorizontalCentered),
  HorizontalNotCentered: () => (/* binding */ HorizontalNotCentered),
  ManyItems: () => (/* binding */ ManyItems),
  Primary: () => (/* binding */ Primary),
  Vertical: () => (/* binding */ Vertical),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ index_stories)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Container/index.js
var Container = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Check.js
var Check = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Check.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Pencil.js
var Pencil = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Pencil.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Duration.js
var Duration = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Duration.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/OrderBox.js
var OrderBox = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/OrderBox.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/Trophy.js
var Trophy = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/Trophy.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/render_children/index.js + 2 modules
var render_children = __webpack_require__("../ui_utils/dist/esm/src/utils/render_children/index.js");
// EXTERNAL MODULE: ../data_display/src/components/Timeline/TimelineContext/index.tsx
var TimelineContext = __webpack_require__("../data_display/src/components/Timeline/TimelineContext/index.tsx");
;// ../data_display/src/components/Timeline/index.tsx
const _excluded = ["children", "orientation", "centered", "stretched", "currentIndex", "mode"];
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




const Timeline = _ref => {
  let {
      children,
      orientation = 'horizontal',
      centered = false,
      stretched = false,
      currentIndex,
      mode = 'full'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const totalCount = react.Children.count(children);
  const stackDirection = orientation === 'horizontal' ? 'row' : 'column';
  const disabledItems = react.useMemo(() => {
    const set = new Set();
    react.Children.forEach(children, (child, index) => {
      if (/*#__PURE__*/ /*#__PURE__*/(0,react.isValidElement)(child) && child.props.disabled) {
        set.add(index);
      }
    });
    return set;
  }, [children]);
  return /*#__PURE__*/react.createElement(TimelineContext/* TimelineContext */.h.Provider, {
    value: {
      orientation,
      currentIndex,
      totalCount,
      centered,
      stretched,
      disabledItems,
      mode
    }
  }, /*#__PURE__*/react.createElement(Stack/* default */.A, _extends({
    gap: "0",
    width: "100%",
    alignItems: "flexStart",
    direction: stackDirection,
    justifyContent: stretched ? 'spaceBetween' : undefined
  }, rest), react.Children.map(children, (child, index) => (0,render_children/* renderChildren */.s)(child, {
    key: index,
    index
  }))));
};
Timeline.displayName = 'Timeline';
/* harmony default export */ const components_Timeline = (Timeline);
try {
    // @ts-ignore
    Timeline.displayName = "Timeline";
    // @ts-ignore
    Timeline.__docgenInfo = { "description": "", "displayName": "Timeline", "props": { "orientation": { "defaultValue": { value: "horizontal" }, "description": "", "name": "orientation", "required": false, "type": { "name": "enum", "value": [{ "value": "\"horizontal\"" }, { "value": "\"vertical\"" }] } }, "centered": { "defaultValue": { value: "false" }, "description": "", "name": "centered", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "stretched": { "defaultValue": { value: "false" }, "description": "", "name": "stretched", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "currentIndex": { "defaultValue": null, "description": "", "name": "currentIndex", "required": true, "type": { "name": "number" } }, "mode": { "defaultValue": { value: "full" }, "description": "", "name": "mode", "required": false, "type": { "name": "enum", "value": [{ "value": "\"compact\"" }, { "value": "\"full\"" }] } }, "margin": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "margin", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginX": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginX", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginY": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginY", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginBottom": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginBottom", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginLeft": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginLeft", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginRight": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginRight", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } }, "marginTop": { "defaultValue": null, "description": "Values are in units, every unit = 4px. E.g. for value=\"1\", result will be 4px<pre>Support single value, or object as follows:\n`{ default: <value>, sm: <value>, md: <value>, lg: <value>, xl: <value> }`</pre>", "name": "marginTop", "required": false, "type": { "name": "enum", "value": [{ "value": "\"auto\"" }, { "value": "\"1\"" }, { "value": "\"0\"" }, { "value": "\"0.5\"" }, { "value": "\"1.5\"" }, { "value": "\"2\"" }, { "value": "\"2.5\"" }, { "value": "\"3\"" }, { "value": "\"4\"" }, { "value": "\"5\"" }, { "value": "\"6\"" }, { "value": "\"7\"" }, { "value": "\"8\"" }, { "value": "\"9\"" }, { "value": "\"10\"" }, { "value": "\"11\"" }, { "value": "\"12\"" }, { "value": "\"14\"" }, { "value": "\"16\"" }, { "value": "\"20\"" }, { "value": "\"24\"" }, { "value": "\"28\"" }, { "value": "\"32\"" }, { "value": "\"px\"" }, { "value": "\"autoX\"" }, { "value": "\"autoY\"" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../data_display/src/components/Timeline/index.tsx#Timeline"] = { docgenInfo: Timeline.__docgenInfo, name: "Timeline", path: "../data_display/src/components/Timeline/index.tsx#Timeline" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../data_display/src/components/Timeline/TimelineItem/index.tsx + 4 modules
var TimelineItem = __webpack_require__("../data_display/src/components/Timeline/TimelineItem/index.tsx");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Center/index.js
var Center = __webpack_require__("../layout_components/dist/esm/src/components/Center/index.js");
// EXTERNAL MODULE: ../visuals/dist/esm/src/components/generated_visuals/system/CheckCircleSolid.js
var CheckCircleSolid = __webpack_require__("../visuals/dist/esm/src/components/generated_visuals/system/CheckCircleSolid.js");
;// ../data_display/src/components/Timeline/TimelineIcon/index.tsx



const defaultIcons = {
  current: () => /*#__PURE__*/react.createElement(Center/* default */.A, {
    width: 16,
    height: 16,
    borderRadius: "circle",
    backgroundColor: "grey_1200"
  }, /*#__PURE__*/react.createElement(Container/* default */.A, {
    backgroundColor: "white",
    width: "4px",
    height: "4px",
    borderRadius: "circle"
  })),
  completed: () => /*#__PURE__*/react.createElement(CheckCircleSolid/* default */.A, {
    size: "sm",
    color: "grey_1200"
  }),
  notStarted: () => /*#__PURE__*/react.createElement(Container/* default */.A, {
    width: 16,
    height: 16,
    borderRadius: "circle",
    borderWidth: "md",
    borderColor: "grey_800"
  }),
  disabled: () => /*#__PURE__*/react.createElement(Container/* default */.A, {
    width: 16,
    height: 16,
    borderRadius: "circle",
    borderWidth: "md",
    borderColor: "grey_500"
  })
};
const TimelineIcon = _ref => {
  let {
    children,
    state,
    disabled,
    isFirst,
    isLast
  } = _ref;
  if (children) {
    const backgroundColor = state === 'notStarted' ? 'white' : 'grey_1200';
    return /*#__PURE__*/react.createElement(Center/* default */.A, {
      paddingTop: isFirst ? undefined : '1',
      paddingBottom: isLast ? undefined : '1',
      backgroundColor: "white",
      zIndex: "2"
    }, /*#__PURE__*/react.createElement(Center/* default */.A, {
      width: 32,
      height: 32,
      borderRadius: "circle",
      backgroundColor: disabled ? 'grey_300' : backgroundColor
    }, children));
  }
  return /*#__PURE__*/react.createElement(Center/* default */.A, {
    flexShrink: "0",
    height: 24,
    borderRadius: "circle",
    backgroundColor: "white",
    zIndex: "2"
  }, defaultIcons[disabled ? 'disabled' : state || 'notStarted']());
};
TimelineIcon.displayName = 'TimelineIcon';
TimelineIcon.id = 'TimelineIcon';
/* harmony default export */ const Timeline_TimelineIcon = (TimelineIcon);
try {
    // @ts-ignore
    TimelineIcon.displayName = "TimelineIcon";
    // @ts-ignore
    TimelineIcon.__docgenInfo = { "description": "", "displayName": "TimelineIcon", "props": { "state": { "defaultValue": null, "description": "", "name": "state", "required": false, "type": { "name": "enum", "value": [{ "value": "\"current\"" }, { "value": "\"completed\"" }, { "value": "\"notStarted\"" }] } }, "isFirst": { "defaultValue": null, "description": "", "name": "isFirst", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isLast": { "defaultValue": null, "description": "", "name": "isLast", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../data_display/src/components/Timeline/TimelineIcon/index.tsx#TimelineIcon"] = { docgenInfo: TimelineIcon.__docgenInfo, name: "TimelineIcon", path: "../data_display/src/components/Timeline/TimelineIcon/index.tsx#TimelineIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../theme/dist/esm/src/components/Box/index.js
var Box = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");
;// ../data_display/src/components/Timeline/TimelineTitle/index.tsx
function TimelineTitle_extends() {
  return TimelineTitle_extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, TimelineTitle_extends.apply(null, arguments);
}



const TimelineTitle = _ref => {
  let {
    children,
    disabled,
    isActive,
    withoutDescription = false
  } = _ref;
  const {
    mode,
    orientation,
    centered
  } = (0,TimelineContext/* useTimelineContext */._)();
  const isCompactMode = mode === 'compact';
  if (isCompactMode && !isActive) {
    return null;
  }
  const withoutDescriptionStyle = withoutDescription ? {
    height: 24,
    display: 'flex',
    alignItems: 'center'
  } : {};
  return /*#__PURE__*/react.createElement(Box/* default */.A, TimelineTitle_extends({
    fontSize: "b_sm",
    width: "100%",
    lineHeight: "b_sm",
    color: disabled ? 'grey_800' : 'bodyPrimary',
    textAlign: centered && orientation === 'horizontal' ? 'center' : 'start'
  }, withoutDescriptionStyle), children);
};
TimelineTitle.displayName = 'TimelineTitle';
TimelineTitle.id = 'TimelineTitle';
/* harmony default export */ const Timeline_TimelineTitle = (TimelineTitle);
try {
    // @ts-ignore
    TimelineTitle.displayName = "TimelineTitle";
    // @ts-ignore
    TimelineTitle.__docgenInfo = { "description": "", "displayName": "TimelineTitle", "props": { "withoutDescription": { "defaultValue": { value: "false" }, "description": "", "name": "withoutDescription", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } }, "isActive": { "defaultValue": null, "description": "", "name": "isActive", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../data_display/src/components/Timeline/TimelineTitle/index.tsx#TimelineTitle"] = { docgenInfo: TimelineTitle.__docgenInfo, name: "TimelineTitle", path: "../data_display/src/components/Timeline/TimelineTitle/index.tsx#TimelineTitle" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../data_display/src/components/Timeline/TimelineDescription/index.tsx



const TimelineDescription = _ref => {
  let {
    children,
    disabled
  } = _ref;
  const {
    centered,
    mode,
    orientation
  } = (0,TimelineContext/* useTimelineContext */._)();
  if (mode === 'compact') {
    return null;
  }
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    color: disabled ? 'grey_800' : 'bodySecondary',
    fontSize: "b_sm",
    lineHeight: "b_sm",
    textAlign: centered ? 'center' : 'start',
    width: orientation === 'horizontal' ? '100%' : undefined
  }, children);
};
TimelineDescription.displayName = 'TimelineDescription';
TimelineDescription.id = 'TimelineDescription';
/* harmony default export */ const Timeline_TimelineDescription = (TimelineDescription);
try {
    // @ts-ignore
    TimelineDescription.displayName = "TimelineDescription";
    // @ts-ignore
    TimelineDescription.__docgenInfo = { "description": "", "displayName": "TimelineDescription", "props": { "state": { "defaultValue": null, "description": "", "name": "state", "required": false, "type": { "name": "enum", "value": [{ "value": "\"current\"" }, { "value": "\"completed\"" }, { "value": "\"notStarted\"" }] } }, "disabled": { "defaultValue": null, "description": "", "name": "disabled", "required": false, "type": { "name": "boolean", "value": [{ "value": "false" }, { "value": "true" }] } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../data_display/src/components/Timeline/TimelineDescription/index.tsx#TimelineDescription"] = { docgenInfo: TimelineDescription.__docgenInfo, name: "TimelineDescription", path: "../data_display/src/components/Timeline/TimelineDescription/index.tsx#TimelineDescription" };
}
catch (__react_docgen_typescript_loader_error) { }
;// ../data_display/src/components/Timeline/stories/index.stories.tsx








const ProgressCurrentLabel = () => /*#__PURE__*/react.createElement(Stack/* default */.A, {
  direction: "column",
  gap: "0.5"
}, /*#__PURE__*/react.createElement(Container/* default */.A, {
  color: "blue_1000",
  fontWeight: "bold"
}, "In progress"), /*#__PURE__*/react.createElement(Container/* default */.A, {
  color: "bodySecondary"
}, "(2/3 tasks done)"));
const DeliveryCompletedLabel = () => /*#__PURE__*/react.createElement(Stack/* default */.A, {
  direction: "column",
  gap: "0.5",
  width: "150px",
  paddingBottom: "10"
}, /*#__PURE__*/react.createElement(Container/* default */.A, {
  fontWeight: "normal"
}, "Delivered on time"), /*#__PURE__*/react.createElement(Container/* default */.A, {
  fontWeight: "normal"
}, "No issues"), /*#__PURE__*/react.createElement(Container/* default */.A, {
  fontWeight: "normal"
}, "This is a long label with extra padding bottom"));
const Primary = {
  tags: ['sidebar-ignore'],
  args: {
    currentIndex: 1,
    orientation: 'horizontal'
  },
  render: args => /*#__PURE__*/react.createElement(components_Timeline, args, /*#__PURE__*/react.createElement(TimelineItem/* default */.A, null, /*#__PURE__*/react.createElement(Timeline_TimelineIcon, null), /*#__PURE__*/react.createElement(Timeline_TimelineTitle, null, "Step 1"), /*#__PURE__*/react.createElement(Timeline_TimelineDescription, null, "Step 1 description")), /*#__PURE__*/react.createElement(TimelineItem/* default */.A, {
    disabled: true
  }, /*#__PURE__*/react.createElement(Timeline_TimelineIcon, null), /*#__PURE__*/react.createElement(Timeline_TimelineTitle, null, "Step 2"), /*#__PURE__*/react.createElement(Timeline_TimelineDescription, null, "Step 2 description")), /*#__PURE__*/react.createElement(TimelineItem/* default */.A, null, /*#__PURE__*/react.createElement(Timeline_TimelineIcon, null), /*#__PURE__*/react.createElement(Timeline_TimelineTitle, null, "Step 3"), /*#__PURE__*/react.createElement(Timeline_TimelineDescription, null, "Step 3 description")), /*#__PURE__*/react.createElement(TimelineItem/* default */.A, null, /*#__PURE__*/react.createElement(Timeline_TimelineIcon, null), /*#__PURE__*/react.createElement(Timeline_TimelineTitle, null, "Step 4"), /*#__PURE__*/react.createElement(Timeline_TimelineDescription, null, "Step 4 description")), /*#__PURE__*/react.createElement(TimelineItem/* default */.A, null, /*#__PURE__*/react.createElement(Timeline_TimelineIcon, null), /*#__PURE__*/react.createElement(Timeline_TimelineTitle, null, "Step 5"), /*#__PURE__*/react.createElement(Timeline_TimelineDescription, null, "Step 5 description")), /*#__PURE__*/react.createElement(TimelineItem/* default */.A, null, /*#__PURE__*/react.createElement(Timeline_TimelineIcon, null), /*#__PURE__*/react.createElement(Timeline_TimelineTitle, null, "Step 6"), /*#__PURE__*/react.createElement(Timeline_TimelineDescription, null, "Step 6 description")))
};
const Vertical = {
  tags: ['sidebar-ignore'],
  args: {
    currentIndex: 3,
    orientation: 'vertical'
  },
  render: _ref => {
    let {
      currentIndex,
      orientation
    } = _ref;
    const timelineItems = [{
      icon: {
        completed: /*#__PURE__*/react.createElement(Check/* default */.A, {
          size: "sm",
          color: "white"
        }),
        current: /*#__PURE__*/react.createElement(Pencil/* default */.A, null),
        notStarted: /*#__PURE__*/react.createElement(Pencil/* default */.A, null)
      },
      title: {
        completed: 'Requirements submitted',
        current: 'Requirements needed',
        notStarted: 'Requirements needed'
      },
      description: 'First step description',
      disabled: false
    }, {
      icon: {
        completed: /*#__PURE__*/react.createElement(Check/* default */.A, {
          size: "sm",
          color: "white"
        }),
        current: /*#__PURE__*/react.createElement(Duration/* default */.A, {
          size: "sm",
          color: "white"
        }),
        notStarted: /*#__PURE__*/react.createElement(Duration/* default */.A, {
          size: "lg"
        })
      },
      title: 'In progress',
      description: undefined,
      disabled: false
    }, {
      icon: {
        completed: /*#__PURE__*/react.createElement(Check/* default */.A, {
          size: "sm",
          color: "grey_800"
        }),
        current: /*#__PURE__*/react.createElement(OrderBox/* default */.A, {
          size: "sm",
          color: "white"
        }),
        notStarted: /*#__PURE__*/react.createElement(OrderBox/* default */.A, null)
      },
      title: 'Delivery',
      description: {
        completed: /*#__PURE__*/react.createElement(DeliveryCompletedLabel, null),
        current: null,
        notStarted: null
      },
      disabled: true
    }, {
      icon: {
        completed: /*#__PURE__*/react.createElement(Check/* default */.A, {
          size: "sm",
          color: "white"
        }),
        current: /*#__PURE__*/react.createElement(Trophy/* default */.A, {
          size: "sm",
          color: "white"
        }),
        notStarted: /*#__PURE__*/react.createElement(Trophy/* default */.A, null)
      },
      title: 'Order completed',
      description: undefined,
      disabled: false
    }];
    const getState = index => {
      if (index < currentIndex) {
        return 'completed';
      }
      if (index === currentIndex) {
        return 'current';
      }
      return 'notStarted';
    };
    return /*#__PURE__*/react.createElement(components_Timeline, {
      currentIndex: currentIndex,
      orientation: orientation
    }, timelineItems.map((item, index) => {
      var _item$description, _item$title;
      const state = getState(index);
      const description = ((_item$description = item.description) === null || _item$description === void 0 ? void 0 : _item$description[state]) || item.description;
      const title = ((_item$title = item.title) === null || _item$title === void 0 ? void 0 : _item$title[state]) || item.title;
      return /*#__PURE__*/react.createElement(TimelineItem/* default */.A, {
        key: index,
        disabled: item.disabled
      }, /*#__PURE__*/react.createElement(Timeline_TimelineIcon, null, item.icon[state]), title && /*#__PURE__*/react.createElement(Timeline_TimelineTitle, null, title), description && /*#__PURE__*/react.createElement(Timeline_TimelineDescription, null, description));
    }));
  }
};
const HorizontalCentered = {
  tags: ['sidebar-ignore'],
  args: {
    currentIndex: 1,
    orientation: 'horizontal',
    centered: true
  },
  render: _ref2 => {
    let {
      currentIndex,
      orientation,
      centered
    } = _ref2;
    const timelineItems = [{
      icon: {
        completed: /*#__PURE__*/react.createElement(Check/* default */.A, {
          size: "sm",
          color: "white"
        }),
        current: /*#__PURE__*/react.createElement(Pencil/* default */.A, null),
        notStarted: /*#__PURE__*/react.createElement(Pencil/* default */.A, null)
      },
      title: {
        completed: 'Requirements submitted',
        current: 'Requirements needed',
        notStarted: 'Requirements needed'
      }
    }, {
      icon: {
        completed: /*#__PURE__*/react.createElement(Check/* default */.A, {
          size: "sm",
          color: "white"
        }),
        current: /*#__PURE__*/react.createElement(Duration/* default */.A, {
          size: "sm",
          color: "white"
        }),
        notStarted: /*#__PURE__*/react.createElement(Duration/* default */.A, {
          size: "lg"
        })
      },
      title: {
        completed: /*#__PURE__*/react.createElement(ProgressCurrentLabel, null),
        current: /*#__PURE__*/react.createElement(ProgressCurrentLabel, null),
        notStarted: /*#__PURE__*/react.createElement(ProgressCurrentLabel, null)
      }
    }, {
      icon: {
        completed: /*#__PURE__*/react.createElement(Check/* default */.A, {
          size: "sm",
          color: "white"
        }),
        current: /*#__PURE__*/react.createElement(OrderBox/* default */.A, {
          size: "sm",
          color: "white"
        }),
        notStarted: /*#__PURE__*/react.createElement(OrderBox/* default */.A, null)
      },
      title: {
        completed: 'Delivery reviewed',
        current: 'Delivery',
        notStarted: 'Delivery'
      }
    }, {
      icon: {
        completed: /*#__PURE__*/react.createElement(Check/* default */.A, {
          size: "sm",
          color: "white"
        }),
        current: /*#__PURE__*/react.createElement(Trophy/* default */.A, {
          size: "sm",
          color: "white"
        }),
        notStarted: /*#__PURE__*/react.createElement(Trophy/* default */.A, null)
      },
      title: {
        completed: 'Order completed',
        current: 'Order completed',
        notStarted: 'Order completed'
      }
    }];
    const getState = index => {
      if (index < currentIndex) {
        return 'completed';
      }
      if (index === currentIndex) {
        return 'current';
      }
      return 'notStarted';
    };
    return /*#__PURE__*/react.createElement(components_Timeline, {
      currentIndex: currentIndex,
      orientation: orientation,
      centered: centered
    }, timelineItems.map((item, index) => {
      const state = getState(index);
      return /*#__PURE__*/react.createElement(TimelineItem/* default */.A, {
        key: index
      }, /*#__PURE__*/react.createElement(Timeline_TimelineIcon, null, item.icon[state]), /*#__PURE__*/react.createElement(Timeline_TimelineTitle, null, item.title[state]));
    }));
  }
};
const HorizontalNotCentered = {
  tags: ['sidebar-ignore'],
  args: {
    currentIndex: 1,
    orientation: 'horizontal',
    centered: false
  },
  render: _ref3 => {
    let {
      currentIndex,
      orientation,
      centered
    } = _ref3;
    const timelineItems = [{
      icon: {
        completed: /*#__PURE__*/react.createElement(Check/* default */.A, {
          size: "sm",
          color: "white"
        }),
        current: /*#__PURE__*/react.createElement(Pencil/* default */.A, null),
        notStarted: /*#__PURE__*/react.createElement(Pencil/* default */.A, null)
      },
      title: {
        completed: 'Requirements submitted',
        current: 'Requirements needed',
        notStarted: 'Requirements needed'
      }
    }, {
      icon: {
        completed: /*#__PURE__*/react.createElement(Check/* default */.A, {
          size: "sm",
          color: "white"
        }),
        current: /*#__PURE__*/react.createElement(Duration/* default */.A, {
          size: "sm",
          color: "white"
        }),
        notStarted: /*#__PURE__*/react.createElement(Duration/* default */.A, {
          size: "lg"
        })
      },
      title: {
        completed: /*#__PURE__*/react.createElement(ProgressCurrentLabel, null),
        current: /*#__PURE__*/react.createElement(ProgressCurrentLabel, null),
        notStarted: /*#__PURE__*/react.createElement(ProgressCurrentLabel, null)
      }
    }, {
      icon: {
        completed: /*#__PURE__*/react.createElement(Check/* default */.A, {
          size: "sm",
          color: "white"
        }),
        current: /*#__PURE__*/react.createElement(OrderBox/* default */.A, {
          size: "sm",
          color: "white"
        }),
        notStarted: /*#__PURE__*/react.createElement(OrderBox/* default */.A, null)
      },
      title: {
        completed: 'Delivery reviewed',
        current: 'Delivery',
        notStarted: 'Delivery'
      }
    }, {
      icon: {
        completed: /*#__PURE__*/react.createElement(Check/* default */.A, {
          size: "sm",
          color: "white"
        }),
        current: /*#__PURE__*/react.createElement(Trophy/* default */.A, {
          size: "sm",
          color: "white"
        }),
        notStarted: /*#__PURE__*/react.createElement(Trophy/* default */.A, null)
      },
      title: {
        completed: 'Order completed',
        current: 'Order completed',
        notStarted: 'Order completed'
      }
    }];
    const getState = index => {
      if (index < currentIndex) {
        return 'completed';
      }
      if (index === currentIndex) {
        return 'current';
      }
      return 'notStarted';
    };
    return /*#__PURE__*/react.createElement(components_Timeline, {
      currentIndex: currentIndex,
      orientation: orientation,
      centered: centered
    }, timelineItems.map((item, index) => {
      const state = getState(index);
      return /*#__PURE__*/react.createElement(TimelineItem/* default */.A, {
        key: index
      }, /*#__PURE__*/react.createElement(Timeline_TimelineIcon, null, item.icon[state]), /*#__PURE__*/react.createElement(Timeline_TimelineTitle, null, item.title[state]));
    }));
  }
};
const ManyItems = {
  tags: ['sidebar-ignore'],
  args: {
    currentIndex: 7,
    orientation: 'horizontal'
  },
  render: args => /*#__PURE__*/react.createElement(components_Timeline, args, /*#__PURE__*/react.createElement(TimelineItem/* default */.A, null, /*#__PURE__*/react.createElement(Timeline_TimelineIcon, null), /*#__PURE__*/react.createElement(Timeline_TimelineTitle, null, "Step 1")), /*#__PURE__*/react.createElement(TimelineItem/* default */.A, null, /*#__PURE__*/react.createElement(Timeline_TimelineIcon, null), /*#__PURE__*/react.createElement(Timeline_TimelineTitle, null, "Step 2")), /*#__PURE__*/react.createElement(TimelineItem/* default */.A, null, /*#__PURE__*/react.createElement(Timeline_TimelineIcon, null), /*#__PURE__*/react.createElement(Timeline_TimelineTitle, null, "Step 3")), /*#__PURE__*/react.createElement(TimelineItem/* default */.A, null, /*#__PURE__*/react.createElement(Timeline_TimelineIcon, null), /*#__PURE__*/react.createElement(Timeline_TimelineTitle, null, "Step 4")), /*#__PURE__*/react.createElement(TimelineItem/* default */.A, null, /*#__PURE__*/react.createElement(Timeline_TimelineIcon, null), /*#__PURE__*/react.createElement(Timeline_TimelineTitle, null, "Step 5")), /*#__PURE__*/react.createElement(TimelineItem/* default */.A, null, /*#__PURE__*/react.createElement(Timeline_TimelineIcon, null), /*#__PURE__*/react.createElement(Timeline_TimelineTitle, null, "Step 6")), /*#__PURE__*/react.createElement(TimelineItem/* default */.A, null, /*#__PURE__*/react.createElement(Timeline_TimelineIcon, null), /*#__PURE__*/react.createElement(Timeline_TimelineTitle, null, "Step 7")), /*#__PURE__*/react.createElement(TimelineItem/* default */.A, null, /*#__PURE__*/react.createElement(Timeline_TimelineIcon, null), /*#__PURE__*/react.createElement(Timeline_TimelineTitle, null, "Step 8")), /*#__PURE__*/react.createElement(TimelineItem/* default */.A, null, /*#__PURE__*/react.createElement(Timeline_TimelineIcon, null), /*#__PURE__*/react.createElement(Timeline_TimelineTitle, null, "Step 9")), /*#__PURE__*/react.createElement(TimelineItem/* default */.A, null, /*#__PURE__*/react.createElement(Timeline_TimelineIcon, null), /*#__PURE__*/react.createElement(Timeline_TimelineTitle, null, "Step 10")))
};
const meta = {
  title: 'Data Display/Timeline',
  component: components_Timeline
};
/* harmony default export */ const index_stories = (meta);
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...Primary.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    currentIndex: 1,\n    orientation: 'horizontal'\n  },\n  render: args => <Timeline {...args}>\n      <TimelineItem>\n        <TimelineIcon />\n        <TimelineTitle>Step 1</TimelineTitle>\n        <TimelineDescription>Step 1 description</TimelineDescription>\n      </TimelineItem>\n      <TimelineItem disabled>\n        <TimelineIcon />\n        <TimelineTitle>Step 2</TimelineTitle>\n        <TimelineDescription>Step 2 description</TimelineDescription>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineIcon />\n        <TimelineTitle>Step 3</TimelineTitle>\n        <TimelineDescription>Step 3 description</TimelineDescription>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineIcon />\n        <TimelineTitle>Step 4</TimelineTitle>\n        <TimelineDescription>Step 4 description</TimelineDescription>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineIcon />\n        <TimelineTitle>Step 5</TimelineTitle>\n        <TimelineDescription>Step 5 description</TimelineDescription>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineIcon />\n        <TimelineTitle>Step 6</TimelineTitle>\n        <TimelineDescription>Step 6 description</TimelineDescription>\n      </TimelineItem>\n    </Timeline>\n}",
      ...Primary.parameters?.docs?.source
    }
  }
};
Vertical.parameters = {
  ...Vertical.parameters,
  docs: {
    ...Vertical.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    currentIndex: 3,\n    orientation: 'vertical'\n  },\n  render: ({\n    currentIndex,\n    orientation\n  }) => {\n    const timelineItems = [{\n      icon: {\n        completed: <CheckIcon size=\"sm\" color=\"white\" />,\n        current: <PencilIcon />,\n        notStarted: <PencilIcon />\n      },\n      title: {\n        completed: 'Requirements submitted',\n        current: 'Requirements needed',\n        notStarted: 'Requirements needed'\n      },\n      description: 'First step description',\n      disabled: false\n    }, {\n      icon: {\n        completed: <CheckIcon size=\"sm\" color=\"white\" />,\n        current: <DurationIcon size=\"sm\" color=\"white\" />,\n        notStarted: <DurationIcon size=\"lg\" />\n      },\n      title: 'In progress',\n      description: undefined,\n      disabled: false\n    }, {\n      icon: {\n        completed: <CheckIcon size=\"sm\" color=\"grey_800\" />,\n        current: <OrderBoxIcon size=\"sm\" color=\"white\" />,\n        notStarted: <OrderBoxIcon />\n      },\n      title: 'Delivery',\n      description: {\n        completed: <DeliveryCompletedLabel />,\n        current: null,\n        notStarted: null\n      },\n      disabled: true\n    }, {\n      icon: {\n        completed: <CheckIcon size=\"sm\" color=\"white\" />,\n        current: <TrophyIcon size=\"sm\" color=\"white\" />,\n        notStarted: <TrophyIcon />\n      },\n      title: 'Order completed',\n      description: undefined,\n      disabled: false\n    }];\n    const getState = (index: number) => {\n      if (index < currentIndex) {\n        return 'completed';\n      }\n      if (index === currentIndex) {\n        return 'current';\n      }\n      return 'notStarted';\n    };\n    return <Timeline currentIndex={currentIndex} orientation={orientation}>\n        {timelineItems.map((item, index) => {\n        const state = getState(index);\n        const description = item.description?.[state] || item.description;\n        const title = item.title?.[state] || item.title;\n        return <TimelineItem key={index} disabled={item.disabled}>\n              <TimelineIcon>{item.icon[state]}</TimelineIcon>\n              {title && <TimelineTitle>{title}</TimelineTitle>}\n              {description && <TimelineDescription>{description}</TimelineDescription>}\n            </TimelineItem>;\n      })}\n      </Timeline>;\n  }\n}",
      ...Vertical.parameters?.docs?.source
    }
  }
};
HorizontalCentered.parameters = {
  ...HorizontalCentered.parameters,
  docs: {
    ...HorizontalCentered.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    currentIndex: 1,\n    orientation: 'horizontal',\n    centered: true\n  },\n  render: ({\n    currentIndex,\n    orientation,\n    centered\n  }) => {\n    const timelineItems = [{\n      icon: {\n        completed: <CheckIcon size=\"sm\" color=\"white\" />,\n        current: <PencilIcon />,\n        notStarted: <PencilIcon />\n      },\n      title: {\n        completed: 'Requirements submitted',\n        current: 'Requirements needed',\n        notStarted: 'Requirements needed'\n      }\n    }, {\n      icon: {\n        completed: <CheckIcon size=\"sm\" color=\"white\" />,\n        current: <DurationIcon size=\"sm\" color=\"white\" />,\n        notStarted: <DurationIcon size=\"lg\" />\n      },\n      title: {\n        completed: <ProgressCurrentLabel />,\n        current: <ProgressCurrentLabel />,\n        notStarted: <ProgressCurrentLabel />\n      }\n    }, {\n      icon: {\n        completed: <CheckIcon size=\"sm\" color=\"white\" />,\n        current: <OrderBoxIcon size=\"sm\" color=\"white\" />,\n        notStarted: <OrderBoxIcon />\n      },\n      title: {\n        completed: 'Delivery reviewed',\n        current: 'Delivery',\n        notStarted: 'Delivery'\n      }\n    }, {\n      icon: {\n        completed: <CheckIcon size=\"sm\" color=\"white\" />,\n        current: <TrophyIcon size=\"sm\" color=\"white\" />,\n        notStarted: <TrophyIcon />\n      },\n      title: {\n        completed: 'Order completed',\n        current: 'Order completed',\n        notStarted: 'Order completed'\n      }\n    }];\n    const getState = (index: number): TimelineState => {\n      if (index < currentIndex) {\n        return 'completed';\n      }\n      if (index === currentIndex) {\n        return 'current';\n      }\n      return 'notStarted';\n    };\n    return <Timeline currentIndex={currentIndex} orientation={orientation} centered={centered}>\n        {timelineItems.map((item, index) => {\n        const state = getState(index);\n        return <TimelineItem key={index}>\n              <TimelineIcon>{item.icon[state]}</TimelineIcon>\n              <TimelineTitle>{item.title[state]}</TimelineTitle>\n            </TimelineItem>;\n      })}\n      </Timeline>;\n  }\n}",
      ...HorizontalCentered.parameters?.docs?.source
    }
  }
};
HorizontalNotCentered.parameters = {
  ...HorizontalNotCentered.parameters,
  docs: {
    ...HorizontalNotCentered.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    currentIndex: 1,\n    orientation: 'horizontal',\n    centered: false\n  },\n  render: ({\n    currentIndex,\n    orientation,\n    centered\n  }) => {\n    const timelineItems = [{\n      icon: {\n        completed: <CheckIcon size=\"sm\" color=\"white\" />,\n        current: <PencilIcon />,\n        notStarted: <PencilIcon />\n      },\n      title: {\n        completed: 'Requirements submitted',\n        current: 'Requirements needed',\n        notStarted: 'Requirements needed'\n      }\n    }, {\n      icon: {\n        completed: <CheckIcon size=\"sm\" color=\"white\" />,\n        current: <DurationIcon size=\"sm\" color=\"white\" />,\n        notStarted: <DurationIcon size=\"lg\" />\n      },\n      title: {\n        completed: <ProgressCurrentLabel />,\n        current: <ProgressCurrentLabel />,\n        notStarted: <ProgressCurrentLabel />\n      }\n    }, {\n      icon: {\n        completed: <CheckIcon size=\"sm\" color=\"white\" />,\n        current: <OrderBoxIcon size=\"sm\" color=\"white\" />,\n        notStarted: <OrderBoxIcon />\n      },\n      title: {\n        completed: 'Delivery reviewed',\n        current: 'Delivery',\n        notStarted: 'Delivery'\n      }\n    }, {\n      icon: {\n        completed: <CheckIcon size=\"sm\" color=\"white\" />,\n        current: <TrophyIcon size=\"sm\" color=\"white\" />,\n        notStarted: <TrophyIcon />\n      },\n      title: {\n        completed: 'Order completed',\n        current: 'Order completed',\n        notStarted: 'Order completed'\n      }\n    }];\n    const getState = (index: number): TimelineState => {\n      if (index < currentIndex) {\n        return 'completed';\n      }\n      if (index === currentIndex) {\n        return 'current';\n      }\n      return 'notStarted';\n    };\n    return <Timeline currentIndex={currentIndex} orientation={orientation} centered={centered}>\n        {timelineItems.map((item, index) => {\n        const state = getState(index);\n        return <TimelineItem key={index}>\n              <TimelineIcon>{item.icon[state]}</TimelineIcon>\n              <TimelineTitle>{item.title[state]}</TimelineTitle>\n            </TimelineItem>;\n      })}\n      </Timeline>;\n  }\n}",
      ...HorizontalNotCentered.parameters?.docs?.source
    }
  }
};
ManyItems.parameters = {
  ...ManyItems.parameters,
  docs: {
    ...ManyItems.parameters?.docs,
    source: {
      originalSource: "{\n  tags: ['sidebar-ignore'],\n  args: {\n    currentIndex: 7,\n    orientation: 'horizontal'\n  },\n  render: args => <Timeline {...args}>\n      <TimelineItem>\n        <TimelineIcon />\n        <TimelineTitle>Step 1</TimelineTitle>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineIcon />\n        <TimelineTitle>Step 2</TimelineTitle>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineIcon />\n        <TimelineTitle>Step 3</TimelineTitle>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineIcon />\n        <TimelineTitle>Step 4</TimelineTitle>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineIcon />\n        <TimelineTitle>Step 5</TimelineTitle>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineIcon />\n        <TimelineTitle>Step 6</TimelineTitle>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineIcon />\n        <TimelineTitle>Step 7</TimelineTitle>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineIcon />\n        <TimelineTitle>Step 8</TimelineTitle>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineIcon />\n        <TimelineTitle>Step 9</TimelineTitle>\n      </TimelineItem>\n      <TimelineItem>\n        <TimelineIcon />\n        <TimelineTitle>Step 10</TimelineTitle>\n      </TimelineItem>\n    </Timeline>\n}",
      ...ManyItems.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Primary","Vertical","HorizontalCentered","HorizontalNotCentered","ManyItems"];

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

/***/ "../layout_components/dist/esm/src/components/Container/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../layout_components/dist/esm/src/components/Layout/index.js");
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


const Container = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((_ref, ref) => {
  let {
      children
    } = _ref,
    restProps = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _objectSpread({
    ref: ref
  }, restProps), children);
});
Container.displayName = 'Container';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);
;
Container.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Container"
};

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

/***/ "../ui_utils/dist/esm/src/utils/render_children/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ renderChildren)
});

// UNUSED EXPORTS: useParentPropsOverrideContext

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../ui_utils/dist/esm/src/utils/utils/index.js
var utils = __webpack_require__("../ui_utils/dist/esm/src/utils/utils/index.js");
;// ../ui_utils/dist/esm/src/utils/render_children/parentPropsOverrideContext.js

const parentPropsOverrideContext_ParentPropsOverrideContext = /*#__PURE__*/(0,react.createContext)({});
;// ../ui_utils/dist/esm/src/utils/render_children/renderBuilderChildren.js
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


const renderBuilderChildren = function (child) {
  var _child$props;
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const mergedProps = _objectSpread(_objectSpread({}, (child === null || child === void 0 || (_child$props = child.props) === null || _child$props === void 0 || (_child$props = _child$props.block) === null || _child$props === void 0 || (_child$props = _child$props.component) === null || _child$props === void 0 ? void 0 : _child$props.options) || {}), props);
  return /*#__PURE__*/react.createElement(parentPropsOverrideContext_ParentPropsOverrideContext.Provider, {
    value: mergedProps
  }, child);
};
;
renderBuilderChildren.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "renderBuilderChildren"
};
;// ../ui_utils/dist/esm/src/utils/render_children/index.js
function render_children_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function render_children_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? render_children_ownKeys(Object(t), !0).forEach(function (r) {
      render_children_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : render_children_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function render_children_defineProperty(e, r, t) {
  return (r = render_children_toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function render_children_toPropertyKey(t) {
  var i = render_children_toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function render_children_toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}




/**
 * Safely gets a renderable output of most given values.
 */
const FALLBACK_VALUE = null;
const useParentPropsOverrideContext = () => useContext(ParentPropsOverrideContext);
const renderChildren = function (child) {
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  let rendered = child;
  if ((0,utils/* isBuilderChildren */.z)(rendered)) {
    return renderBuilderChildren(rendered, props);
  }
  const mergedProps = render_children_objectSpread(render_children_objectSpread({}, rendered ? rendered.props : {}), props);
  if (/*#__PURE__*/react.isValidElement(rendered)) {
    return /*#__PURE__*/react.cloneElement(rendered, mergedProps);
  }
  if (typeof child === 'function') {
    rendered = child(mergedProps);
  }
  if (['undefined', 'boolean'].includes(typeof rendered)) {
    return FALLBACK_VALUE;
  }
  return rendered;
};
;
renderChildren.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "renderChildren"
};

/***/ }),

/***/ "../ui_utils/dist/esm/src/utils/utils/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ childrenIdMatch),
/* harmony export */   z: () => (/* binding */ isBuilderChildren)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");

const isObject = child => typeof child === 'object';
const isBuilderChildren = child => {
  var _child$props;
  return isObject(child) && (child === null || child === void 0 || (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.block) && child.props.block['@type'] === '@builder.io/sdk:Element';
};
const childrenIdMatch = (child, id) => {
  if (isBuilderChildren(child)) {
    var _child$props$block;
    return (_child$props$block = child.props.block) === null || _child$props$block === void 0 || (_child$props$block = _child$props$block.component) === null || _child$props$block === void 0 || (_child$props$block = _child$props$block.name) === null || _child$props$block === void 0 ? void 0 : _child$props$block.endsWith(":".concat(id));
  }
  return isObject(child) && child.type.id === id;
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/constants.js":
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

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Check.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const CheckIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('CheckIcon')
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
    d: "m1.25 9.306 3.92 3.92 9.58-10.452",
    vectorEffect: "non-scaling-stroke"
  }));
};
CheckIcon.id = 'CheckIcon';
CheckIcon.displayName = 'CheckIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckIcon);
;
CheckIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CheckIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/CheckCircleSolid.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const CheckCircleSolidIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('CheckCircleSolidIcon')
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
    d: "M8 15.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15m3.327-9.146a.698.698 0 0 0-1.072-.894l-3 3.6-1.552-1.553a.698.698 0 0 0-.987.986l2.093 2.093a.697.697 0 0 0 1.03-.046z",
    clipRule: "evenodd"
  }));
};
CheckCircleSolidIcon.id = 'CheckCircleSolidIcon';
CheckCircleSolidIcon.displayName = 'CheckCircleSolidIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckCircleSolidIcon);
;
CheckCircleSolidIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "CheckCircleSolidIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Duration.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const DurationIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('DurationIcon')
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
    d: "M7.118 1.27a6.75 6.75 0 1 0 4.471 12.337m2.204-2.403a7 7 0 0 1-.52.76M9.457 1.292q.396.103.772.25m2.067 1.248q.304.262.58.555m1.335 1.973q.18.383.314.786m.37 2.409a7 7 0 0 1-.065.818M8.55 5.48v3l-1.693 1.5",
    vectorEffect: "non-scaling-stroke"
  }));
};
DurationIcon.id = 'DurationIcon';
DurationIcon.displayName = 'DurationIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DurationIcon);
;
DurationIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "DurationIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/OrderBox.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const OrderBoxIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('OrderBoxIcon')
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
    d: "M8 14.666c-.234 0-.464-.062-.667-.18L2.667 11.82A1.33 1.33 0 0 1 2 10.667V5.334a1.33 1.33 0 0 1 .667-1.154l4.666-2.666a1.33 1.33 0 0 1 1.334 0l4.666 2.666A1.33 1.33 0 0 1 14 5.334v5.333a1.33 1.33 0 0 1-.667 1.153l-4.666 2.667a1.33 1.33 0 0 1-.667.179m0 0V8M2.18 4.64 8 8.007l5.82-3.367M5.5 3l5 3",
    vectorEffect: "non-scaling-stroke"
  }));
};
OrderBoxIcon.id = 'OrderBoxIcon';
OrderBoxIcon.displayName = 'OrderBoxIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderBoxIcon);
;
OrderBoxIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "OrderBoxIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Pencil.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const PencilIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('PencilIcon')
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
    d: "m9.86 3.146 2.953 2.47m-10.547 4.94 8.319-8.4a2.334 2.334 0 0 1 3.243 0 2.2 2.2 0 0 1 0 3.164l-8.61 8.116L1 14.671z",
    vectorEffect: "non-scaling-stroke"
  }));
};
PencilIcon.id = 'PencilIcon';
PencilIcon.displayName = 'PencilIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PencilIcon);
;
PencilIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PencilIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/generated_visuals/system/Trophy.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../visuals/dist/esm/src/components/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../visuals/dist/esm/src/components/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../visuals/dist/esm/src/utils/index.js");




const TrophyIcon = _ref => {
  let {
    size = 'sm',
    color = 'currentColor',
    dataTrackTag = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .pascalToSnake */ .e)('TrophyIcon')
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
    d: "M8 10.996c-1.491 0-2.7 1.51-2.7 3.374h5.4c0-1.863-1.209-3.374-2.7-3.374m0 0c-2.15 0-3.91-3.86-4.05-8.742a.61.61 0 0 1 .616-.625h6.868c.345 0 .626.28.616.625-.14 4.882-1.9 8.742-4.05 8.742m4.387-8.1h2.363l-.16 1.126c-.179 1.243-.267 1.865-.514 2.401a4.05 4.05 0 0 1-1.164 1.481c-.463.367-1.046.6-2.212 1.066M3.613 2.895H1.25l.16 1.127c.179 1.243.267 1.865.514 2.401a4.05 4.05 0 0 0 1.164 1.481c.463.367 1.046.6 2.212 1.066",
    vectorEffect: "non-scaling-stroke"
  }));
};
TrophyIcon.id = 'TrophyIcon';
TrophyIcon.displayName = 'TrophyIcon';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrophyIcon);
;
TrophyIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "TrophyIcon"
};

/***/ }),

/***/ "../visuals/dist/esm/src/components/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ pascalToSnake)
/* harmony export */ });
const pascalToSnake = str => str.replace(/[A-Z]/g, (letter, index) => index === 0 ? letter.toLowerCase() : "_".concat(letter.toLowerCase()));

/***/ })

}]);
//# sourceMappingURL=8905.88540ab9.iframe.bundle.js.map