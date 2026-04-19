"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[4530],{

/***/ "../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RP: () => (/* binding */ useMDXComponents),
/* harmony export */   xA: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* unused harmony exports MDXContext, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types.js').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components | MergeComponents | null | undefined} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode | null | undefined} [children]
 *   Children.
 *
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components | null | undefined}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return React.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  /** @type {Components} */
  let allComponents

  if (disableParentContext) {
    allComponents =
      typeof components === 'function'
        ? components({})
        : components || emptyObject
  } else {
    allComponents = useMDXComponents(components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}


/***/ }),

/***/ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_require__("../../node_modules/.pnpm/object-assign@4.1.1/node_modules/object-assign/index.js");var f=__webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js"),g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ "../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else // removed by dead control flow
{}


/***/ }),

/***/ "../theme/src/stories/themeVars.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ stories_themeVars)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+blocks@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0.83__nlqkbpiednyo7fahryc45gzkge/node_modules/@storybook/blocks/dist/index.mjs + 13 modules
var dist = __webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0.83__nlqkbpiednyo7fahryc45gzkge/node_modules/@storybook/blocks/dist/index.mjs");
// EXTERNAL MODULE: ../theme/src/shared/themeVars/index.ts
var themeVars = __webpack_require__("../theme/src/shared/themeVars/index.ts");
// EXTERNAL MODULE: ../theme/src/components/Box/index.tsx + 16 modules
var Box = __webpack_require__("../theme/src/components/Box/index.tsx");
;// ../theme/src/stories/helpers.tsx


const getSemanticColors = semanticTokens => Object.keys(semanticTokens).reduce((acc, curr) => {
  acc[curr] = themeVars/* colors */.Tj[semanticTokens[curr]];
  return acc;
}, {});
const DesignTokenOptions = _ref => {
  let {
    token,
    options = []
  } = _ref;
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    display: "flex",
    gap: "2",
    alignItems: "center"
  }, options.map((option, index) => /*#__PURE__*/react.createElement(Box/* default */.A, {
    borderColor: "border",
    borderStyle: "solid",
    borderWidth: "sm",
    key: index,
    padding: "8",
    outlineColor: "grey_1200",
    outlineStyle: "solid",
    outlineWidth: token.startsWith('outline') ? 'sm' : undefined,
    [token]: option
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "p"
  }, option))));
};
const TypographyDesignTokenOptions = _ref2 => {
  let {
    token,
    options = []
  } = _ref2;
  return /*#__PURE__*/react.createElement(Box/* default */.A, {
    display: "flex",
    gap: "2"
  }, options.map(option => /*#__PURE__*/react.createElement(Box/* default */.A, {
    as: "p",
    color: "grey_1200",
    fontStyle: "normal",
    fontSize: "b_md",
    key: option,
    [token]: option
  }, option)));
};
try {
    // @ts-ignore
    getSemanticColors.displayName = "getSemanticColors";
    // @ts-ignore
    getSemanticColors.__docgenInfo = { "description": "", "displayName": "getSemanticColors", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../theme/src/stories/helpers.tsx#getSemanticColors"] = { docgenInfo: getSemanticColors.__docgenInfo, name: "getSemanticColors", path: "../theme/src/stories/helpers.tsx#getSemanticColors" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    DesignTokenOptions.displayName = "DesignTokenOptions";
    // @ts-ignore
    DesignTokenOptions.__docgenInfo = { "description": "", "displayName": "DesignTokenOptions", "props": { "token": { "defaultValue": null, "description": "", "name": "token", "required": true, "type": { "name": "string" } }, "options": { "defaultValue": { value: "[]" }, "description": "", "name": "options", "required": false, "type": { "name": "string[]" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../theme/src/stories/helpers.tsx#DesignTokenOptions"] = { docgenInfo: DesignTokenOptions.__docgenInfo, name: "DesignTokenOptions", path: "../theme/src/stories/helpers.tsx#DesignTokenOptions" };
}
catch (__react_docgen_typescript_loader_error) { }
try {
    // @ts-ignore
    TypographyDesignTokenOptions.displayName = "TypographyDesignTokenOptions";
    // @ts-ignore
    TypographyDesignTokenOptions.__docgenInfo = { "description": "", "displayName": "TypographyDesignTokenOptions", "props": { "token": { "defaultValue": null, "description": "", "name": "token", "required": true, "type": { "name": "string" } }, "options": { "defaultValue": { value: "[]" }, "description": "", "name": "options", "required": false, "type": { "name": "string[]" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../theme/src/stories/helpers.tsx#TypographyDesignTokenOptions"] = { docgenInfo: TypographyDesignTokenOptions.__docgenInfo, name: "TypographyDesignTokenOptions", path: "../theme/src/stories/helpers.tsx#TypographyDesignTokenOptions" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ../theme/src/shared/themeVars/semanticTokens.ts
var semanticTokens = __webpack_require__("../theme/src/shared/themeVars/semanticTokens.ts");
;// ../theme/src/stories/themeVars.mdx



/*@jsxRuntime automatic @jsxImportSource react*/





function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    h2: "h2",
    h3: "h3",
    code: "code"
  }, (0,lib/* useMDXComponents */.RP)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Meta */.W8, {
      title: "Theme/Theme"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Title */.hE, {
      children: "Theme"
    }), "\n", (0,jsx_runtime.jsx)("h2", {
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "Penta's Design Tokens provide a consistent and scalable way to represent colors, typography, spacing, and other key\ndesign attributes. By utilizing these tokens, you can ensure a cohesive and harmonious look and feel across your\nFiverr-related projects."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "colors",
      children: "Colors"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "colors-palette",
      children: "Colors palette"
    }), "\n", (0,jsx_runtime.jsx)(Box/* default */.A, {
      maxWidth: "100%",
      overflowX: "scroll",
      children: (0,jsx_runtime.jsxs)(dist/* ColorPalette */.rE, {
        children: [(0,jsx_runtime.jsx)(dist/* ColorItem */.Jl, {
          title: "Blues",
          subtitle: "Penta blues",
          colors: themeVars/* blueColors */.xw
        }), (0,jsx_runtime.jsx)(dist/* ColorItem */.Jl, {
          title: "Business",
          subtitle: "Penta businesses",
          colors: themeVars/* businessColors */.XW
        }), (0,jsx_runtime.jsx)(dist/* ColorItem */.Jl, {
          title: "Greens",
          subtitle: "Penta greens",
          colors: themeVars/* greenColors */.Db
        }), (0,jsx_runtime.jsx)(dist/* ColorItem */.Jl, {
          title: "Greys",
          subtitle: "Penta greys",
          colors: themeVars/* greyColors */.yJ
        }), (0,jsx_runtime.jsx)(dist/* ColorItem */.Jl, {
          title: "Blues",
          subtitle: "Penta blues",
          colors: themeVars/* blueColors */.xw
        }), (0,jsx_runtime.jsx)(dist/* ColorItem */.Jl, {
          title: "Light Oranges",
          subtitle: "Penta light oranges",
          colors: themeVars/* lightOrangeColors */.nr
        }), (0,jsx_runtime.jsx)(dist/* ColorItem */.Jl, {
          title: "Oranges",
          subtitle: "Penta oranges",
          colors: themeVars/* orangeColors */.hp
        }), (0,jsx_runtime.jsx)(dist/* ColorItem */.Jl, {
          title: "Pinks",
          subtitle: "Penta pinks",
          colors: themeVars/* pinkColors */.rF
        }), (0,jsx_runtime.jsx)(dist/* ColorItem */.Jl, {
          title: "Purples",
          subtitle: "Penta purples",
          colors: themeVars/* purpleColors */.PY
        }), (0,jsx_runtime.jsx)(dist/* ColorItem */.Jl, {
          title: "Reds",
          subtitle: "Penta reds",
          colors: themeVars/* redColors */.sf
        }), (0,jsx_runtime.jsx)(dist/* ColorItem */.Jl, {
          title: "Teals",
          subtitle: "Penta teals",
          colors: themeVars/* tealColors */.LO
        }), (0,jsx_runtime.jsx)(dist/* ColorItem */.Jl, {
          title: "Yellows",
          subtitle: "Penta yellows",
          colors: themeVars/* yellowColors */.hG
        }), (0,jsx_runtime.jsx)(dist/* ColorItem */.Jl, {
          title: "Whites",
          subtitle: "Penta whites",
          colors: themeVars/* whiteColors */.IK
        }), (0,jsx_runtime.jsx)(dist/* ColorItem */.Jl, {
          title: "Blacks",
          subtitle: "Penta blacks",
          colors: themeVars/* blackColors */.mQ
        }), (0,jsx_runtime.jsx)(dist/* ColorItem */.Jl, {
          title: "Gradients",
          subtitle: "Penta gradients",
          colors: themeVars/* gradientColors */.vn
        }), (0,jsx_runtime.jsx)(dist/* ColorItem */.Jl, {
          title: "Validations",
          subtitle: "info / error / warning / success",
          colors: getSemanticColors(themeVars/* validationColors */.Ys)
        }), (0,jsx_runtime.jsx)(dist/* ColorItem */.Jl, {
          title: "Semantic",
          subtitle: "Semantic colors",
          colors: getSemanticColors(semanticTokens/* semanticTokens */.ll)
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "spacing-marginpadding-gap",
      children: "Spacing (margin,padding, gap)"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Unstyled */.di, {
      children: (0,jsx_runtime.jsx)(DesignTokenOptions, {
        token: "padding",
        options: Object.keys(themeVars/* spacing */.YK)
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "box-shadows",
      children: "Box shadows"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Unstyled */.di, {
      children: (0,jsx_runtime.jsx)(DesignTokenOptions, {
        token: "boxShadow",
        options: Object.keys(themeVars/* boxShadows */.FR)
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "borders",
      children: "Borders"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "border-style",
      children: "Border style"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Unstyled */.di, {
      children: (0,jsx_runtime.jsx)(DesignTokenOptions, {
        token: "borderStyle",
        options: Object.keys(themeVars/* borderStyle */.G8)
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "border-width",
      children: "Border width"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Unstyled */.di, {
      children: (0,jsx_runtime.jsx)(DesignTokenOptions, {
        token: "borderWidth",
        options: Object.keys(themeVars/* borderWidth */.$X)
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "border-radius",
      children: "Border radius"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Unstyled */.di, {
      children: (0,jsx_runtime.jsx)(DesignTokenOptions, {
        token: "borderRadius",
        options: Object.keys(themeVars/* borderRadiuses */.vj)
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "outline",
      children: "Outline"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "outline-width",
      children: "Outline width"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Unstyled */.di, {
      children: (0,jsx_runtime.jsx)(DesignTokenOptions, {
        token: "outlineWidth",
        options: Object.keys(themeVars/* outlineWidth */.FX)
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "outline-offsets",
      children: "Outline offsets"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Unstyled */.di, {
      children: (0,jsx_runtime.jsx)(DesignTokenOptions, {
        token: "outlineOffset",
        options: Object.keys(themeVars/* outlineOffset */.mN)
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typography",
      children: "Typography"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "body-sizes",
      children: "Body sizes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "b_xs=12px , b_sm=14px , b_md=16px , b_lg=18px , b_xl=20px , b_xxl=24px"
      })
    }), "\n", (0,jsx_runtime.jsx)(dist/* Typeset */.F7, {
      fontSizes: Object.values(themeVars/* bodyFontSizes */.gQ),
      fontWeight: themeVars/* fontWeight */.Wy.normal,
      sampleText: "Text",
      fontFamily: themeVars/* fontFamily */.mw.primary
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "heading-sizes",
      children: "Heading sizes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "h_xxs=16px , h_xs=18px , h_sm=20px , h_md=24px , h_lg=28px , h_xl=32px , h_xxl=40px"
      })
    }), "\n", (0,jsx_runtime.jsx)(dist/* Typeset */.F7, {
      fontSizes: Object.values(themeVars/* headingFontSizes */.gA),
      fontWeight: themeVars/* fontWeight */.Wy.bold,
      sampleText: "Heading",
      fontFamily: themeVars/* fontFamily */.mw.primary
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "font-families",
      children: "Font families"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Unstyled */.di, {
      children: (0,jsx_runtime.jsx)(TypographyDesignTokenOptions, {
        token: "fontFamily",
        options: Object.keys(themeVars/* fontFamily */.mw)
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "font-weight",
      children: "Font weight"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Unstyled */.di, {
      children: (0,jsx_runtime.jsx)(TypographyDesignTokenOptions, {
        token: "fontWeight",
        options: Object.keys(themeVars/* fontWeight */.Wy)
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "font-styles",
      children: "Font styles"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Unstyled */.di, {
      children: (0,jsx_runtime.jsx)(TypographyDesignTokenOptions, {
        token: "fontStyle",
        options: Object.keys(themeVars/* fontStyle */.xC)
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.RP)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const stories_themeVars = (MDXContent);


/***/ })

}]);
//# sourceMappingURL=stories-themeVars-mdx.775cc6fa.iframe.bundle.js.map