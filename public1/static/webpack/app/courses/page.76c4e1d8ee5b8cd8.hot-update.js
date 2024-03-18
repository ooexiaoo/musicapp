"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/courses/page",{

/***/ "(app-pages-browser)/./src/app/courses/page.tsx":
/*!**********************************!*\
  !*** ./src/app/courses/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ui_3d_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/3d-card */ \"(app-pages-browser)/./src/components/ui/3d-card.tsx\");\n/* harmony import */ var _data_music_course_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/data/music_course.json */ \"(app-pages-browser)/./src/data/music_course.json\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nfunction page() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-black py-12 pt-36\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white\",\n                children: [\n                    \"All Courses (\",\n                    _data_music_course_json__WEBPACK_IMPORTED_MODULE_4__.courses.length,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-center\",\n                children: _data_music_course_json__WEBPACK_IMPORTED_MODULE_4__.courses.map((course)=>// eslint-disable-next-line react/jsx-key\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_3d_card__WEBPACK_IMPORTED_MODULE_3__.CardContainer, {\n                        className: \"inter-var m-4 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_3d_card__WEBPACK_IMPORTED_MODULE_3__.CardBody, {\n                            className: \"bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_3d_card__WEBPACK_IMPORTED_MODULE_3__.CardItem, {\n                                    translateZ: \"50\",\n                                    className: \"text-xl font-bold text-neutral-600 dark:text-white\",\n                                    children: course.title\n                                }, void 0, false, {\n                                    fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_3d_card__WEBPACK_IMPORTED_MODULE_3__.CardItem, {\n                                    as: \"p\",\n                                    translateZ: \"60\",\n                                    className: \"text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300\",\n                                    children: course.description\n                                }, void 0, false, {\n                                    fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_3d_card__WEBPACK_IMPORTED_MODULE_3__.CardItem, {\n                                    translateZ: \"100\",\n                                    className: \"w-full mt-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        src: course.image,\n                                        height: \"1000\",\n                                        width: \"1000\",\n                                        className: \"h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl\",\n                                        alt: \"thumbnail\"\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 11\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 9\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between items-center mt-20\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_3d_card__WEBPACK_IMPORTED_MODULE_3__.CardItem, {\n                                            translateZ: 20,\n                                            as: next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                            href: \"https://twitter.com/mannupaaji\",\n                                            target: \"__blank\",\n                                            className: \"px-4 py-2 rounded-xl text-xs font-normal dark:text-white\",\n                                            children: \"Try now →\"\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 11\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_3d_card__WEBPACK_IMPORTED_MODULE_3__.CardItem, {\n                                            translateZ: 20,\n                                            as: \"button\",\n                                            className: \"px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold\",\n                                            children: \"Sign up\"\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 11\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 9\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 25\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY291cnNlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFK0I7QUFDTDtBQUNrRDtBQUMzQjtBQUNwQjtBQUU3QixTQUFTTztJQUNQLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7O29CQUFzRTtvQkFDbEVKLDREQUFrQixDQUFDTyxNQUFNO29CQUFDOzs7Ozs7OzBCQUN4Qyw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBQ1ZKLDREQUFrQixDQUFDUSxHQUFHLENBQUMsQ0FBQ0MsU0FDakIseUNBQXlDO2tDQUN6Qyw4REFBQ1gsaUVBQWFBO3dCQUFDTSxXQUFVO2tDQUMzQyw0RUFBQ1AsNERBQVFBOzRCQUFDTyxXQUFVOzs4Q0FDbEIsOERBQUNMLDREQUFRQTtvQ0FDUFcsWUFBVztvQ0FDWE4sV0FBVTs4Q0FFVEssT0FBT0UsS0FBSzs7Ozs7OzhDQUVmLDhEQUFDWiw0REFBUUE7b0NBQ1BhLElBQUc7b0NBQ0hGLFlBQVc7b0NBQ1hOLFdBQVU7OENBRVRLLE9BQU9JLFdBQVc7Ozs7Ozs4Q0FFckIsOERBQUNkLDREQUFRQTtvQ0FBQ1csWUFBVztvQ0FBTU4sV0FBVTs4Q0FDbkMsNEVBQUNULGtEQUFLQTt3Q0FDSm1CLEtBQUtMLE9BQU9NLEtBQUs7d0NBQ2pCQyxRQUFPO3dDQUNQQyxPQUFNO3dDQUNOYixXQUFVO3dDQUNWYyxLQUFJOzs7Ozs7Ozs7Ozs4Q0FHUiw4REFBQ2Y7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDTCw0REFBUUE7NENBQ1BXLFlBQVk7NENBQ1pFLElBQUlYLGlEQUFJQTs0Q0FDUmtCLE1BQUs7NENBQ0xDLFFBQU87NENBQ1BoQixXQUFVO3NEQUNYOzs7Ozs7c0RBR0QsOERBQUNMLDREQUFRQTs0Q0FDUFcsWUFBWTs0Q0FDWkUsSUFBRzs0Q0FDSFIsV0FBVTtzREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdYO0FBRUEsK0RBQWVGLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb3Vyc2VzL3BhZ2UudHN4PzJlNDciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG4gXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmRCb2R5LCBDYXJkQ29udGFpbmVyLCBDYXJkSXRlbSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvM2QtY2FyZFwiO1xuaW1wb3J0IGNvdXJzZURhdGEgZnJvbSBcIkAvZGF0YS9tdXNpY19jb3Vyc2UuanNvblwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIHBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctYmxhY2sgcHktMTIgcHQtMzZcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC03eGwgdGV4dC1jZW50ZXIgZm9udC1zYW5zIGZvbnQtYm9sZCBtYi04IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIEFsbCBDb3Vyc2VzICh7Y291cnNlRGF0YS5jb3Vyc2VzLmxlbmd0aH0pPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7Y291cnNlRGF0YS5jb3Vyc2VzLm1hcCgoY291cnNlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvanN4LWtleVxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250YWluZXIgY2xhc3NOYW1lPVwiaW50ZXItdmFyIG0tNCBcIj5cbiAgICAgIDxDYXJkQm9keSBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIHJlbGF0aXZlIGdyb3VwL2NhcmQgIGRhcms6aG92ZXI6c2hhZG93LTJ4bCBkYXJrOmhvdmVyOnNoYWRvdy1lbWVyYWxkLTUwMC9bMC4xXSBkYXJrOmJnLWJsYWNrIGRhcms6Ym9yZGVyLXdoaXRlL1swLjJdIGJvcmRlci1ibGFjay9bMC4xXSB3LWF1dG8gc206dy1bMzByZW1dIGgtYXV0byByb3VuZGVkLXhsIHAtNiBib3JkZXIgIFwiPlxuICAgICAgICA8Q2FyZEl0ZW1cbiAgICAgICAgICB0cmFuc2xhdGVaPVwiNTBcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtbmV1dHJhbC02MDAgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtjb3Vyc2UudGl0bGV9XG4gICAgICAgIDwvQ2FyZEl0ZW0+XG4gICAgICAgIDxDYXJkSXRlbVxuICAgICAgICAgIGFzPVwicFwiXG4gICAgICAgICAgdHJhbnNsYXRlWj1cIjYwXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LW5ldXRyYWwtNTAwIHRleHQtc20gbWF4LXctc20gbXQtMiBkYXJrOnRleHQtbmV1dHJhbC0zMDBcIlxuICAgICAgICA+XG4gICAgICAgICAge2NvdXJzZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9DYXJkSXRlbT5cbiAgICAgICAgPENhcmRJdGVtIHRyYW5zbGF0ZVo9XCIxMDBcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtNFwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtjb3Vyc2UuaW1hZ2V9XG4gICAgICAgICAgICBoZWlnaHQ9XCIxMDAwXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwMFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYwIHctZnVsbCBvYmplY3QtY292ZXIgcm91bmRlZC14bCBncm91cC1ob3Zlci9jYXJkOnNoYWRvdy14bFwiXG4gICAgICAgICAgICBhbHQ9XCJ0aHVtYm5haWxcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ2FyZEl0ZW0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG10LTIwXCI+XG4gICAgICAgICAgPENhcmRJdGVtXG4gICAgICAgICAgICB0cmFuc2xhdGVaPXsyMH1cbiAgICAgICAgICAgIGFzPXtMaW5rfVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vbWFubnVwYWFqaVwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfX2JsYW5rXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkLXhsIHRleHQteHMgZm9udC1ub3JtYWwgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBUcnkgbm93IOKGklxuICAgICAgICAgIDwvQ2FyZEl0ZW0+XG4gICAgICAgICAgPENhcmRJdGVtXG4gICAgICAgICAgICB0cmFuc2xhdGVaPXsyMH1cbiAgICAgICAgICAgIGFzPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkLXhsIGJnLWJsYWNrIGRhcms6Ymctd2hpdGUgZGFyazp0ZXh0LWJsYWNrIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNpZ24gdXBcbiAgICAgICAgICA8L0NhcmRJdGVtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZEJvZHk+XG4gICAgPC9DYXJkQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsIkNhcmRCb2R5IiwiQ2FyZENvbnRhaW5lciIsIkNhcmRJdGVtIiwiY291cnNlRGF0YSIsIkxpbmsiLCJwYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJjb3Vyc2VzIiwibGVuZ3RoIiwibWFwIiwiY291cnNlIiwidHJhbnNsYXRlWiIsInRpdGxlIiwiYXMiLCJkZXNjcmlwdGlvbiIsInNyYyIsImltYWdlIiwiaGVpZ2h0Iiwid2lkdGgiLCJhbHQiLCJocmVmIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/courses/page.tsx\n"));

/***/ })

});