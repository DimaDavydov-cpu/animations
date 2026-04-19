"use strict";
(self["webpackChunk_fiverr_private_penta_storybook"] = self["webpackChunk_fiverr_private_penta_storybook"] || []).push([[77,1077,1923,2278,2937,3594,3601,3666,4367,5502,5758,6151,7394,7770,8124,8135,8232,8815,9610,9630],{

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

/***/ "./src/docs/api/A_Breakpoints.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-runtime.js");
/* harmony import */ var _Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0.83__nlqkbpiednyo7fahryc45gzkge/node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../layout_components/dist/esm/src/components/Container/index.js");
/* harmony import */ var _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../theme/dist/esm/src/shared/themeVars/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/docs/api/helpers.tsx");
/* harmony import */ var _fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../storybook_helpers/dist/esm/src/components/StorySubtitle/index.js");



/*@jsxRuntime automatic @jsxImportSource react*/









function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    h2: "h2",
    code: "code",
    pre: "pre",
    a: "a",
    h5: "h5"
  }, (0,_Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .RP)(), props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      title: "API/Breakpoints"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {
      children: "Breakpoints"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Unstyled */ .di, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_fiverr_private_storybook_helpers__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
          children: "In our design system, some props support responsive behavior to create adaptive and flexible components that respond\nto different screen sizes and devices(mobile first approach)."
        })
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "supported-breakpoints",
      children: "Supported Breakpoints"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Our design system supports the following predefined breakpoints:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_helpers__WEBPACK_IMPORTED_MODULE_6__/* .StoryContainer */ .HB, {
      display: "flex",
      justifyContent: "spaceAround",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_helpers__WEBPACK_IMPORTED_MODULE_6__/* .Breakpoints */ .Rp, {
        breakpoints: _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_5__/* .breakpoints */ .fi,
        partial: true,
        title: "Breakpoints"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_helpers__WEBPACK_IMPORTED_MODULE_6__/* .Breakpoints */ .Rp, {
        breakpoints: _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_5__/* .breakpointsReverse */ .$o,
        partial: true,
        title: "BreakpointsReverse"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["A prop is considered responsive if its type starts with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Responsive"
      }), ", e.g.,\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "ResponsiveSpacingType"
      }), ". These responsive props can be used with an API that allows you to pass an object, where each key represents a supported breakpoint, and the associated value represents the styling you want to apply at that specific breakpoint."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Resize the page to check the responsive behavior"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_helpers__WEBPACK_IMPORTED_MODULE_6__/* .StoryContainer */ .HB, {
      display: "flex",
      gap: "3",
      backgroundColor: "grey_200",
      direction: {
        sm: 'row',
        md: 'column',
        lg: 'row',
        xl: 'column'
      },
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        padding: "10",
        backgroundColor: "grey_500"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        padding: "10",
        backgroundColor: "grey_600"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_fiverr_private_layout_components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        padding: "10",
        backgroundColor: "grey_700"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Stack\n  direction={{\n    sm: 'row',\n    md: 'column',\n    lg: 'row',\n    xl: 'column',\n  }}\n>\n  <Container padding=\"10\" backgroundColor=\"grey_500\" />\n  <Container padding=\"10\" backgroundColor=\"grey_600\" />\n  <Container padding=\"10\" backgroundColor=\"grey_700\" />\n</Stack>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "mobile-first",
      children: "Mobile First"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "When using responsive styling props, if you specify a value for a particular breakpoint, it will be applied only at that breakpoint. If a breakpoint is not specified, it will inherit the value from the nearest smaller breakpoint."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "So, both of the following examples will produce the same result:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Stack\n  direction={{\n    sm: 'row',\n    md: 'row',\n    lg: 'column',\n    xl: 'column',\n  }}\n>\n  <Container />\n  <Container />\n  <Container />\n</Stack>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "<Stack\n  direction={{\n    sm: 'row',\n    lg: 'column',\n  }}\n>\n  <Container />\n  <Container />\n  <Container />\n</Stack>\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "breakpoints-and-breakpointsreverse---media-query-strings",
      children: "Breakpoints and BreakpointsReverse - media query strings"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Breakpoints and BreakpointsReverse are both exported from the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "@fiverr-private/theme"
      }), " package as objects containing responsive media query strings.\nThese values are useful when creating ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "?path=/story/styling-api-api-styling--page#breakpoints",
        children: "custom responsive classes"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h5, {
      id: "note---xxl-breakpoint-is-exported-from-the-breakpoints-object-but-is-not-part-of-the-responsive-behavior",
      children: "Note - 'xxl' breakpoint is exported from the breakpoints object but is not part of the responsive behavior."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { theme } from '@fiverr-private/theme';\n\ntheme.breakpoints;\ntheme.breakpointsReverse;\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "numeric-values",
      children: "Numeric values"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Breakpoints and BreakpointsReverse are both exported from the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "@fiverr-private/theme"
      }), " package as objects numeric values."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_helpers__WEBPACK_IMPORTED_MODULE_6__/* .StoryContainer */ .HB, {
      display: "flex",
      justifyContent: "spaceAround",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_helpers__WEBPACK_IMPORTED_MODULE_6__/* .Breakpoints */ .Rp, {
        breakpoints: _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_5__/* .numericBreakpoints */ .Uf,
        partial: true,
        title: "Breakpoints"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_helpers__WEBPACK_IMPORTED_MODULE_6__/* .Breakpoints */ .Rp, {
        breakpoints: _fiverr_private_theme__WEBPACK_IMPORTED_MODULE_5__/* .numericBreakpointsReverse */ .wi,
        partial: true,
        title: "BreakpointsReverse"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-tsx",
        children: "import { theme } from '@fiverr-private/theme';\n\ntheme.numericBreakpoints;\ntheme.numericBreakpointsReverse;\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,_Volumes_fiverr_dev_penta_sphinx_node_modules_pnpm_storybook_addon_docs_7_6_20_types_react_dom_17_0_26_types_react_17_0_83_types_react_17_0_wshr3tsegpoh5z4ny2orxoudtu_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .RP)(), props.components);
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);


/***/ })

}]);
//# sourceMappingURL=docs-api-A_Breakpoints-mdx.4310bac1.iframe.bundle.js.map