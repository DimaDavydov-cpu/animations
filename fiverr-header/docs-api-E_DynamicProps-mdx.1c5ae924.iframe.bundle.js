"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[77,1077,1923,2278,2937,3594,3601,3666,4367,4691,5502,5758,6151,7394,7770,8124,8135,8815,9610,9630],{

/***/ "../storybook_helpers/dist/esm/src/components/StorySubtitle/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../theme/dist/esm/src/components/Box/index.js");


const StorySubtitle = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fiverr_private_theme__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    as: "p",
    color: "bodySecondary",
    paddingBottom: "6",
    fontSize: {
      default: 'b_md',
      md: 'b_xl'
    }
  }, children);
};
StorySubtitle.displayName = 'StorySubtitle';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorySubtitle);
;
StorySubtitle.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "StorySubtitle"
};

/***/ }),

/***/ "./src/docs/api/E_DynamicProps.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ E_DynamicProps)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+blocks@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0.83__nlqkbpiednyo7fahryc45gzkge/node_modules/@storybook/blocks/dist/index.mjs + 13 modules
var dist = __webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0.83__nlqkbpiednyo7fahryc45gzkge/node_modules/@storybook/blocks/dist/index.mjs");
// EXTERNAL MODULE: ../typography/dist/esm/src/components/Text/index.js
var Text = __webpack_require__("../typography/dist/esm/src/components/Text/index.js");
// EXTERNAL MODULE: ../layout_components/dist/esm/src/components/Stack/index.js + 1 modules
var Stack = __webpack_require__("../layout_components/dist/esm/src/components/Stack/index.js");
;// ./src/docs/api/assets/image.png
const image_namespaceObject = __webpack_require__.p + "static/media/image.cb83599d.png";
// EXTERNAL MODULE: ../storybook_helpers/dist/esm/src/components/StorySubtitle/index.js
var StorySubtitle = __webpack_require__("../storybook_helpers/dist/esm/src/components/StorySubtitle/index.js");
// EXTERNAL MODULE: ./src/docs/api/helpers.tsx
var helpers = __webpack_require__("./src/docs/api/helpers.tsx");
;// ./src/docs/api/E_DynamicProps.mdx



/*@jsxRuntime automatic @jsxImportSource react*/









function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    h2: "h2",
    a: "a",
    h5: "h5",
    h3: "h3",
    pre: "pre",
    code: "code"
  }, (0,lib/* useMDXComponents */.RP)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(dist/* Meta */.W8, {
      title: "API/Dynamic Props"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Title */.hE, {
      children: "Dynamic Props"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Unstyled */.di, {
      children: (0,jsx_runtime.jsx)(StorySubtitle/* default */.A, {
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "To provide a full and comprehensive API, the size and color props have different behavior behind the scenes, while\ntheir usage pattern remains consistent with other styling props."
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "styling-approach-for-color-and-size-properties",
      children: "Styling approach for Color and Size Properties"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Unlike other styling props that generate CSS classes using pre-defined values and utility classes\n(atoms), props such as color, width, height, etc., are based on the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "?path=/docs/styling-api-how-does-it-work-advanced--docs#dynamic",
        children: "dynamic API"
      }), " to\nsupport an unlimited set of values. This means that classes will be created only when the prop is used."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h5, {
      id: "note---color-props-support-the-theme-palette--while-other-props-support-all-css-properties-except-numerical-values",
      children: ["Note - Color props support the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "?path=/story/styling-api-theme-themevars--page",
        children: "theme palette"
      }), " , while other props support all CSS properties except numerical values"]
    }), "\n", (0,jsx_runtime.jsx)(helpers/* DynamicProps */.Sy, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "background-image",
      children: "Background image"
    }), "\n", (0,jsx_runtime.jsx)(dist/* Canvas */.Hl, {
      children: (0,jsx_runtime.jsx)(Stack/* default */.A, {
        background: `center / contain url(${image_namespaceObject})`,
        height: "30vh"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "<Stack background={`center / contain url(${image})`} height=\"30vh\"></Stack>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "calc",
      children: "Calc"
    }), "\n", (0,jsx_runtime.jsx)(Text/* default */.A, {
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "calc()"
        }), " in CSS is very useful and sometimes it's only way to achieve a certain size to an element. Vanilla Extract\nhas a ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://vanilla-extract.style/documentation/packages/css-utils/#calc",
          target: "_blank",
          rel: "nofollow noopener noreferrer",
          children: "function util"
        }), " that wraps and helps\nperforming calculations. The above util is supported only inside ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*.ve.css.ts"
        }), " files. If you want to use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "calc()"
        }), " in\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "*.ts"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*.tsx"
        }), " files you can use CSS's regular calc directly as string. See both examples below"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "// *.ts/tsx\n\n<Container width={{ default: 'calc(100% -100px)', md: 'calc(100% - 50px)' }}>Content</Container>\n<Container width=\"calc(100% - 10px)\">Content</Container>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-jsx",
        children: "// *.ve.css.ts\n\nimport { styling, calc } from '@fiverr-private/theme';\n\nconst styles = styling({\n  width: calc('100%').subtract('10px').toString(), // When using expression chains it is necessary to call toString()\n  minWidth: calc.subtract('100%', '5px'), // When using single expression without chains no need to call toString()\n  height: 'calc(100vh - 50px)', // Use CSS calc() directly as string\n});\n"
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
/* harmony default export */ const E_DynamicProps = (MDXContent);


/***/ })

}]);
//# sourceMappingURL=docs-api-E_DynamicProps-mdx.1c5ae924.iframe.bundle.js.map