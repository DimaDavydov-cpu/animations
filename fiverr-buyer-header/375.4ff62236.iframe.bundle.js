"use strict";
(self["webpackChunk_fiverr_private_penta_playground"] = self["webpackChunk_fiverr_private_penta_playground"] || []).push([[375],{

/***/ "../../node_modules/.pnpm/@storybook+addon-docs@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0_wshr3tsegpoh5z4ny2orxoudtu/node_modules/@storybook/addon-docs/dist/DocsRenderer-NNNQARDV.mjs":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DocsRenderer: () => (/* reexport */ DocsRenderer)
});

// UNUSED EXPORTS: defaultComponents

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+react-dom-shim@7.6.20_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/react-dom-shim/dist/react-16.mjs
var react_16 = __webpack_require__("../../node_modules/.pnpm/@storybook+react-dom-shim@7.6.20_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/@storybook/react-dom-shim/dist/react-16.mjs");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@storybook+blocks@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0.83__nlqkbpiednyo7fahryc45gzkge/node_modules/@storybook/blocks/dist/index.mjs + 15 modules
var dist = __webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0.83__nlqkbpiednyo7fahryc45gzkge/node_modules/@storybook/blocks/dist/index.mjs");
;// ../../node_modules/.pnpm/@storybook+addon-docs@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0_wshr3tsegpoh5z4ny2orxoudtu/node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs




var defaultComponents={code:dist/* CodeOrSourceMdx */.XA,a:dist/* AnchorMdx */.zE,...dist/* HeadersMdx */.Sw},ErrorBoundary=class extends react.Component{constructor(){super(...arguments);this.state={hasError:!1};}static getDerivedStateFromError(){return {hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err);}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react.createElement(react.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=dist/* Docs */.kQ;return new Promise((resolve,reject)=>{__webpack_require__.e(/* import() */ 811).then(__webpack_require__.bind(__webpack_require__, "../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@17.0.2/node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,react_16/* renderElement */.d)(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve());})},this.unmount=element=>{(0,react_16/* unmountElement */.H)(element);};}};



;// ../../node_modules/.pnpm/@storybook+addon-docs@7.6.20_@types+react-dom@17.0.26_@types+react@17.0.83__@types+react@17.0_wshr3tsegpoh5z4ny2orxoudtu/node_modules/@storybook/addon-docs/dist/DocsRenderer-NNNQARDV.mjs



/***/ })

}]);
//# sourceMappingURL=375.4ff62236.iframe.bundle.js.map