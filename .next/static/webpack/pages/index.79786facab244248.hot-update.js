"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Contador() {\n    var adicionarContador1 = function adicionarContador1() {\n        setContador(contador + 1);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), contador = ref[0], setContador = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: contador\n        }, void 0, false, {\n            fileName: \"D:\\\\Teste API Deschamps\\\\teste-api\\\\pages\\\\index.js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Teste API Deschamps\\\\teste-api\\\\pages\\\\index.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n}\n_s(Contador, \"VhlnxxH3xh7Qs17KADUJ8wvRSZs=\");\n_c = Contador;\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Teste API Deschamps\\\\teste-api\\\\pages\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: adicionarContador\n            }, void 0, false, {\n                fileName: \"D:\\\\Teste API Deschamps\\\\teste-api\\\\pages\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Teste API Deschamps\\\\teste-api\\\\pages\\\\index.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"Contador\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUFnQztBQUVoQyxTQUFTQyxRQUFRLEdBQUU7UUFHTkMsa0JBQWlCLEdBQTFCLFNBQVNBLGtCQUFpQixHQUFFO1FBQ3hCQyxXQUFXLENBQUNDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7SUFKRCxJQUFnQ0osR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBQW5DSSxRQUFRLEdBQWlCSixHQUFVLEdBQTNCLEVBQUVHLFdBQVcsR0FBSUgsR0FBVSxHQUFkO0lBTTVCLHFCQUNJLDhEQUFDSyxLQUFHO2tCQUNBLDRFQUFDQSxLQUFHO3NCQUFFRCxRQUFROzs7OztnQkFBTzs7Ozs7WUFDbkIsQ0FDVDtBQUNMLENBQUM7R0FaUUgsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBY2pCLFNBQVNLLElBQUksR0FBRTtJQUNYLHFCQUNJLDhEQUFDRCxLQUFHOzswQkFDQSw4REFBQ0EsS0FBRzswQkFBQyxNQUFJOzs7OztvQkFBTTswQkFDZiw4REFBQ0UsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFTixpQkFBaUI7Ozs7O29CQUFXOzs7Ozs7WUFDM0MsQ0FDVDtBQUNMLENBQUM7QUFQUUksTUFBQUEsSUFBSTtBQVNiLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIENvbnRhZG9yKCl7XHJcbiAgICBjb25zdCBbY29udGFkb3IsIHNldENvbnRhZG9yXSA9IHVzZVN0YXRlKClcclxuXHJcbiAgICBmdW5jdGlvbiBhZGljaW9uYXJDb250YWRvcigpe1xyXG4gICAgICAgIHNldENvbnRhZG9yKGNvbnRhZG9yICsgMSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e2NvbnRhZG9yfTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBIb21lKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+SG9tZTwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkaWNpb25hckNvbnRhZG9yfT48L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNvbnRhZG9yIiwiYWRpY2lvbmFyQ29udGFkb3IiLCJzZXRDb250YWRvciIsImNvbnRhZG9yIiwiZGl2IiwiSG9tZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});