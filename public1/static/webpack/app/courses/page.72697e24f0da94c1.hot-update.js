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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ui_3d_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/3d-card */ \"(app-pages-browser)/./src/components/ui/3d-card.tsx\");\n/* harmony import */ var _data_music_course_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/data/music_course.json */ \"(app-pages-browser)/./src/data/music_course.json\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_ui_background_beams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/background-beams */ \"(app-pages-browser)/./src/components/ui/background-beams.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\nfunction page() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-black py-12 pt-36 z-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"z-10 text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white\",\n                children: [\n                    \"All Courses (\",\n                    _data_music_course_json__WEBPACK_IMPORTED_MODULE_4__.courses.length,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_background_beams__WEBPACK_IMPORTED_MODULE_6__.BackgroundBeams, {\n                className: \"z-0 fixed\"\n            }, void 0, false, {\n                fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-center z-10\",\n                children: _data_music_course_json__WEBPACK_IMPORTED_MODULE_4__.courses.map((course)=>// eslint-disable-next-line react/jsx-key\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_3d_card__WEBPACK_IMPORTED_MODULE_3__.CardContainer, {\n                        className: \"inter-var m-4 z-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_3d_card__WEBPACK_IMPORTED_MODULE_3__.CardBody, {\n                            className: \"bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border z-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_3d_card__WEBPACK_IMPORTED_MODULE_3__.CardItem, {\n                                    translateZ: \"50\",\n                                    className: \"text-xl font-bold text-neutral-600 dark:text-white\",\n                                    children: course.title\n                                }, void 0, false, {\n                                    fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_3d_card__WEBPACK_IMPORTED_MODULE_3__.CardItem, {\n                                    as: \"p\",\n                                    translateZ: \"60\",\n                                    className: \"text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300\",\n                                    children: course.description\n                                }, void 0, false, {\n                                    fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_3d_card__WEBPACK_IMPORTED_MODULE_3__.CardItem, {\n                                    translateZ: \"100\",\n                                    className: \"w-full mt-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        src: course.image,\n                                        height: \"1000\",\n                                        width: \"1000\",\n                                        className: \"h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl\",\n                                        alt: course.title\n                                    }, void 0, false, {\n                                        fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between items-center mt-20\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_3d_card__WEBPACK_IMPORTED_MODULE_3__.CardItem, {\n                                            translateZ: 20,\n                                            as: next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                            href: \"https://twitter.com/exiavp\",\n                                            target: \"__blank\",\n                                            className: \"px-4 py-2 rounded-xl text-xs font-normal dark:text-white\",\n                                            children: \"Try now →\"\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_3d_card__WEBPACK_IMPORTED_MODULE_3__.CardItem, {\n                                            translateZ: 20,\n                                            as: \"button\",\n                                            className: \"px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold\",\n                                            children: \"Sign up\"\n                                        }, void 0, false, {\n                                            fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {}, void 0, false, {\n                fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/MINE/backup/Projects/Random Projects/React Tutorial/chaiaurcode/src/app/courses/page.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY291cnNlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRStCO0FBQ0w7QUFDa0Q7QUFDM0I7QUFDcEI7QUFDc0M7QUFFbkUsU0FBU1E7SUFDUCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOztvQkFBMkU7b0JBQ3pFTCw0REFBa0IsQ0FBQ1EsTUFBTTtvQkFBQzs7Ozs7OzswQkFDeEMsOERBQUNOLDRFQUFlQTtnQkFBQ0csV0FBVTs7Ozs7OzBCQUM3Qiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pMLDREQUFrQixDQUFDUyxHQUFHLENBQUMsQ0FBQ0MsU0FDdkIseUNBQXlDO2tDQUN6Qyw4REFBQ1osaUVBQWFBO3dCQUFDTyxXQUFVO2tDQUN2Qiw0RUFBQ1IsNERBQVFBOzRCQUFDUSxXQUFVOzs4Q0FDbEIsOERBQUNOLDREQUFRQTtvQ0FDUFksWUFBVztvQ0FDWE4sV0FBVTs4Q0FFVEssT0FBT0UsS0FBSzs7Ozs7OzhDQUVmLDhEQUFDYiw0REFBUUE7b0NBQ1BjLElBQUc7b0NBQ0hGLFlBQVc7b0NBQ1hOLFdBQVU7OENBRVRLLE9BQU9JLFdBQVc7Ozs7Ozs4Q0FFckIsOERBQUNmLDREQUFRQTtvQ0FBQ1ksWUFBVztvQ0FBTU4sV0FBVTs4Q0FDbkMsNEVBQUNWLGtEQUFLQTt3Q0FDSm9CLEtBQUtMLE9BQU9NLEtBQUs7d0NBQ2pCQyxRQUFPO3dDQUNQQyxPQUFNO3dDQUNOYixXQUFVO3dDQUNWYyxLQUFLVCxPQUFPRSxLQUFLOzs7Ozs7Ozs7Ozs4Q0FHckIsOERBQUNSO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ04sNERBQVFBOzRDQUNQWSxZQUFZOzRDQUNaRSxJQUFJWixpREFBSUE7NENBQ1JtQixNQUFLOzRDQUNMQyxRQUFPOzRDQUNQaEIsV0FBVTtzREFDWDs7Ozs7O3NEQUdELDhEQUFDTiw0REFBUUE7NENBQ1BZLFlBQVk7NENBQ1pFLElBQUc7NENBQ0hSLFdBQVU7c0RBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBU1gsOERBQUNpQjs7Ozs7Ozs7Ozs7QUFHUDtBQUVBLCtEQUFlbkIsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvdXJzZXMvcGFnZS50c3g/MmU0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkQm9keSwgQ2FyZENvbnRhaW5lciwgQ2FyZEl0ZW0gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpLzNkLWNhcmRcIjtcbmltcG9ydCBjb3Vyc2VEYXRhIGZyb20gXCJAL2RhdGEvbXVzaWNfY291cnNlLmpzb25cIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgQmFja2dyb3VuZEJlYW1zIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9iYWNrZ3JvdW5kLWJlYW1zXCI7XG5cbmZ1bmN0aW9uIHBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctYmxhY2sgcHktMTIgcHQtMzYgei0wXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiei0xMCB0ZXh0LWxnIG1kOnRleHQtN3hsIHRleHQtY2VudGVyIGZvbnQtc2FucyBmb250LWJvbGQgbWItOCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgIEFsbCBDb3Vyc2VzICh7Y291cnNlRGF0YS5jb3Vyc2VzLmxlbmd0aH0pPC9oMT5cbiAgICAgICAgPEJhY2tncm91bmRCZWFtcyBjbGFzc05hbWU9XCJ6LTAgZml4ZWRcIi8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIHotMTBcIj5cbiAgICAgICAge2NvdXJzZURhdGEuY291cnNlcy5tYXAoKGNvdXJzZSkgPT4gKFxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gta2V5XG4gICAgICAgICAgPENhcmRDb250YWluZXIgY2xhc3NOYW1lPVwiaW50ZXItdmFyIG0tNCB6LTEwXCI+XG4gICAgICAgICAgICA8Q2FyZEJvZHkgY2xhc3NOYW1lPVwiYmctZ3JheS01MCByZWxhdGl2ZSBncm91cC9jYXJkICBkYXJrOmhvdmVyOnNoYWRvdy0yeGwgZGFyazpob3ZlcjpzaGFkb3ctZW1lcmFsZC01MDAvWzAuMV0gZGFyazpiZy1ibGFjayBkYXJrOmJvcmRlci13aGl0ZS9bMC4yXSBib3JkZXItYmxhY2svWzAuMV0gdy1hdXRvIHNtOnctWzMwcmVtXSBoLWF1dG8gcm91bmRlZC14bCBwLTYgYm9yZGVyIHotMTBcIj5cbiAgICAgICAgICAgICAgPENhcmRJdGVtXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWj1cIjUwXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LW5ldXRyYWwtNjAwIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y291cnNlLnRpdGxlfVxuICAgICAgICAgICAgICA8L0NhcmRJdGVtPlxuICAgICAgICAgICAgICA8Q2FyZEl0ZW1cbiAgICAgICAgICAgICAgICBhcz1cInBcIlxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVo9XCI2MFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1uZXV0cmFsLTUwMCB0ZXh0LXNtIG1heC13LXNtIG10LTIgZGFyazp0ZXh0LW5ldXRyYWwtMzAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb3Vyc2UuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIDwvQ2FyZEl0ZW0+XG4gICAgICAgICAgICAgIDxDYXJkSXRlbSB0cmFuc2xhdGVaPVwiMTAwXCIgY2xhc3NOYW1lPVwidy1mdWxsIG10LTRcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17Y291cnNlLmltYWdlfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwMFwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMDBcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02MCB3LWZ1bGwgb2JqZWN0LWNvdmVyIHJvdW5kZWQteGwgZ3JvdXAtaG92ZXIvY2FyZDpzaGFkb3cteGxcIlxuICAgICAgICAgICAgICAgICAgYWx0PXtjb3Vyc2UudGl0bGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9DYXJkSXRlbT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbXQtMjBcIj5cbiAgICAgICAgICAgICAgICA8Q2FyZEl0ZW1cbiAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVo9ezIwfVxuICAgICAgICAgICAgICAgICAgYXM9e0xpbmt9XG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9leGlhdnBcIlxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX19ibGFua1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgcm91bmRlZC14bCB0ZXh0LXhzIGZvbnQtbm9ybWFsIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVHJ5IG5vdyDihpJcbiAgICAgICAgICAgICAgICA8L0NhcmRJdGVtPlxuICAgICAgICAgICAgICAgIDxDYXJkSXRlbVxuICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWj17MjB9XG4gICAgICAgICAgICAgICAgICBhcz1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgcm91bmRlZC14bCBiZy1ibGFjayBkYXJrOmJnLXdoaXRlIGRhcms6dGV4dC1ibGFjayB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1ib2xkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTaWduIHVwXG4gICAgICAgICAgICAgICAgPC9DYXJkSXRlbT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgIDwvQ2FyZENvbnRhaW5lcj5cbiAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJDYXJkQm9keSIsIkNhcmRDb250YWluZXIiLCJDYXJkSXRlbSIsImNvdXJzZURhdGEiLCJMaW5rIiwiQmFja2dyb3VuZEJlYW1zIiwicGFnZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiY291cnNlcyIsImxlbmd0aCIsIm1hcCIsImNvdXJzZSIsInRyYW5zbGF0ZVoiLCJ0aXRsZSIsImFzIiwiZGVzY3JpcHRpb24iLCJzcmMiLCJpbWFnZSIsImhlaWdodCIsIndpZHRoIiwiYWx0IiwiaHJlZiIsInRhcmdldCIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/courses/page.tsx\n"));

/***/ })

});