"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/detail/page",{

/***/ "(app-pages-browser)/./app/detail/page.js":
/*!****************************!*\
  !*** ./app/detail/page.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst DetailPage = ()=>{\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const title = searchParams.get(\"title\");\n    const content = searchParams.get(\"content\");\n    const id = searchParams.get(\"id\");\n    const decodedTitle = title ? atob(title) : \"\";\n    const decodedContent = content ? atob(content) : \"\";\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [showDeletePopup, setShowDeletePopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [edit, setedit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleDeleteClick = ()=>{\n        setShowDeletePopup(true);\n    };\n    const handleCancelDelete = ()=>{\n        setShowDeletePopup(false);\n    };\n    const handleConfirmDelete = async ()=>{\n        try {\n            const response = await fetch(\"/api/deleteblog?id=\".concat(id), {\n                method: \"DELETE\"\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to delete blog\");\n            }\n            if (response.ok) {\n                router.push(\"/myblogs\");\n                router.reload();\n            }\n            console.log(\"Blog deleted successfully\");\n        } catch (error) {\n            console.error(\"Error deleting blog:\", error.message);\n        } finally{\n            setShowDeletePopup(false);\n        }\n    };\n    const handleedit = ()=>{\n        setedit(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10\",\n        children: [\n            !edit && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl font-bold\",\n                                children: decodedTitle\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-10 items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex font-bold gap-1 items-center cursor-pointer\",\n                                        onClick: handleedit,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Edit\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"edit.svg\",\n                                                alt: \"edit\",\n                                                className: \"w-7 cursor-pointer\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex font-bold gap-1 items-center cursor-pointer\",\n                                        onClick: handleDeleteClick,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Delete\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"delete.svg\",\n                                                alt: \"delete\",\n                                                className: \"w-7 cursor-pointer\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                lineNumber: 55,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-700\",\n                        children: decodedContent\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true),\n            edit && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"formcontent m-5 flex flex-col gap-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"space-y-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"title\",\n                                    className: \"font-bold text-3xl\",\n                                    children: \"Edit Title:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded-lg py-3 px-4 mt-2 focus:outline-none focus:border-blue-500\",\n                                    id: \"title\",\n                                    type: \"text\",\n                                    placeholder: decodedTitle\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                            lineNumber: 73,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"content\",\n                                    className: \"font-bold text-3xl\",\n                                    children: \"Edit Content:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    className: \"appearance-none block w-full h-64 bg-white text-gray-700 border border-gray-300 rounded-lg py-3 px-4 mt-2 focus:outline-none focus:border-blue-500\",\n                                    id: \"content\",\n                                    placeholder: decodedContent\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                            lineNumber: 83,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                            lineNumber: 92,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                    lineNumber: 72,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                lineNumber: 71,\n                columnNumber: 17\n            }, undefined),\n            showDeletePopup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white rounded-lg shadow-lg p-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl font-bold mb-3\",\n                            children: \"Are you sure you want to delete?\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                            lineNumber: 101,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-end gap-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-4 py-2 bg-red-500 text-white rounded-md\",\n                                    onClick: handleConfirmDelete,\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-4 py-2 bg-gray-300 text-gray-800 rounded-md\",\n                                    onClick: handleCancelDelete,\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                            lineNumber: 102,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                    lineNumber: 100,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                lineNumber: 99,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DetailPage, \"6ECwXErFMGIcHB+zjZQgfualaPg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = DetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailPage);\nvar _c;\n$RefreshReg$(_c, \"DetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kZXRhaWwvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3dDO0FBQ1U7QUFDTjtBQUU1QyxNQUFNSSxhQUFhOztJQUNmLE1BQU1DLGVBQWVILGdFQUFlQTtJQUNwQyxNQUFNSSxRQUFRRCxhQUFhRSxHQUFHLENBQUM7SUFDL0IsTUFBTUMsVUFBVUgsYUFBYUUsR0FBRyxDQUFDO0lBQ2pDLE1BQU1FLEtBQUtKLGFBQWFFLEdBQUcsQ0FBQztJQUM1QixNQUFNRyxlQUFlSixRQUFRSyxLQUFLTCxTQUFTO0lBQzNDLE1BQU1NLGlCQUFpQkosVUFBVUcsS0FBS0gsV0FBVztJQUNqRCxNQUFNSyxTQUFTViwwREFBU0E7SUFDeEIsTUFBTSxDQUFDVyxpQkFBaUJDLG1CQUFtQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNlLE1BQU1DLFFBQVEsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1pQixvQkFBb0I7UUFDdEJILG1CQUFtQjtJQUN2QjtJQUVBLE1BQU1JLHFCQUFxQjtRQUN2QkosbUJBQW1CO0lBQ3ZCO0lBRUEsTUFBTUssc0JBQXNCO1FBQ3hCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sc0JBQXlCLE9BQUhiLEtBQU07Z0JBQ3JEYyxRQUFRO1lBQ1o7WUFFQSxJQUFJLENBQUNGLFNBQVNHLEVBQUUsRUFBRTtnQkFDZCxNQUFNLElBQUlDLE1BQU07WUFDcEI7WUFDQSxJQUFJSixTQUFTRyxFQUFFLEVBQUU7Z0JBQ2JYLE9BQU9hLElBQUksQ0FBQztnQkFDWmIsT0FBT2MsTUFBTTtZQUNqQjtZQUNBQyxRQUFRQyxHQUFHLENBQUM7UUFDaEIsRUFBRSxPQUFPQyxPQUFPO1lBQ1pGLFFBQVFFLEtBQUssQ0FBQyx3QkFBd0JBLE1BQU1DLE9BQU87UUFDdkQsU0FBVTtZQUNOaEIsbUJBQW1CO1FBQ3ZCO0lBQ0o7SUFFQSxNQUFNaUIsYUFBYTtRQUNmZixRQUFRO0lBQ1o7SUFFQSxxQkFDSSw4REFBQ2dCO1FBQUlDLFdBQVU7O1lBQ1YsQ0FBQ2xCLHNCQUNFOztrQ0FDSSw4REFBQ2lCO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0M7Z0NBQUdELFdBQVU7MENBQXNCeEI7Ozs7OzswQ0FDcEMsOERBQUN1QjtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNEO3dDQUFJQyxXQUFVO3dDQUFtREUsU0FBU0o7OzBEQUN2RSw4REFBQ0s7MERBQUU7Ozs7OzswREFDSCw4REFBQ0M7Z0RBQUlDLEtBQUk7Z0RBQVdDLEtBQUk7Z0RBQU9OLFdBQVU7Ozs7Ozs7Ozs7OztrREFFN0MsOERBQUNEO3dDQUFJQyxXQUFVO3dDQUFtREUsU0FBU2xCOzswREFDdkUsOERBQUNtQjswREFBRTs7Ozs7OzBEQUNILDhEQUFDQztnREFBSUMsS0FBSTtnREFBYUMsS0FBSTtnREFBU04sV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUl6RCw4REFBQ0c7d0JBQUVILFdBQVU7a0NBQWlCdEI7Ozs7Ozs7O1lBSXJDSSxzQkFDRyw4REFBQ2lCO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDTztvQkFBS1AsV0FBVTs7c0NBQ1osOERBQUNEOzs4Q0FDRyw4REFBQ1M7b0NBQU1DLFNBQVE7b0NBQVFULFdBQVU7OENBQXFCOzs7Ozs7OENBQ3RELDhEQUFDVTtvQ0FDR1YsV0FBVTtvQ0FDVnpCLElBQUc7b0NBQ0hvQyxNQUFLO29DQUNMQyxhQUFhcEM7Ozs7Ozs7Ozs7OztzQ0FJckIsOERBQUN1Qjs7OENBQ0csOERBQUNTO29DQUFNQyxTQUFRO29DQUFVVCxXQUFVOzhDQUFxQjs7Ozs7OzhDQUN4RCw4REFBQ2E7b0NBQ0diLFdBQVU7b0NBQ1Z6QixJQUFHO29DQUNIcUMsYUFBYWxDOzs7Ozs7Ozs7Ozs7c0NBSXJCLDhEQUFDb0M7NEJBQU9kLFdBQVU7c0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTWhDcEIsaUNBQ0csOERBQUNtQjtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRzs0QkFBRUgsV0FBVTtzQ0FBeUI7Ozs7OztzQ0FDdEMsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ2M7b0NBQU9kLFdBQVU7b0NBQTZDRSxTQUFTaEI7OENBQXFCOzs7Ozs7OENBQzdGLDhEQUFDNEI7b0NBQU9kLFdBQVU7b0NBQWlERSxTQUFTakI7OENBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE1SDtHQTFHTWY7O1FBQ21CRiw0REFBZUE7UUFNckJDLHNEQUFTQTs7O0tBUHRCQztBQTRHTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGV0YWlsL3BhZ2UuanM/YTc5YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5cclxuY29uc3QgRGV0YWlsUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBzZWFyY2hQYXJhbXMuZ2V0KCd0aXRsZScpO1xyXG4gICAgY29uc3QgY29udGVudCA9IHNlYXJjaFBhcmFtcy5nZXQoJ2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGlkID0gc2VhcmNoUGFyYW1zLmdldCgnaWQnKTtcclxuICAgIGNvbnN0IGRlY29kZWRUaXRsZSA9IHRpdGxlID8gYXRvYih0aXRsZSkgOiAnJztcclxuICAgIGNvbnN0IGRlY29kZWRDb250ZW50ID0gY29udGVudCA/IGF0b2IoY29udGVudCkgOiAnJztcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBbc2hvd0RlbGV0ZVBvcHVwLCBzZXRTaG93RGVsZXRlUG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2VkaXQsIHNldGVkaXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0RlbGV0ZVBvcHVwKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYW5jZWxEZWxldGUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2hvd0RlbGV0ZVBvcHVwKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ29uZmlybURlbGV0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL2RlbGV0ZWJsb2c/aWQ9JHtpZH1gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIGJsb2cnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbXlibG9ncycpXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucmVsb2FkKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQmxvZyBkZWxldGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGJsb2c6JywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0U2hvd0RlbGV0ZVBvcHVwKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZWVkaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0ZWRpdCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0xMFwiPlxyXG4gICAgICAgICAgICB7IWVkaXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+e2RlY29kZWRUaXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtMTAgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZvbnQtYm9sZCBnYXAtMSBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9e2hhbmRsZWVkaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVkaXQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJlZGl0LnN2Z1wiIGFsdD1cImVkaXRcIiBjbGFzc05hbWU9J3ctNyBjdXJzb3ItcG9pbnRlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZm9udC1ib2xkIGdhcC0xIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlcicgb25DbGljaz17aGFuZGxlRGVsZXRlQ2xpY2t9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5EZWxldGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJkZWxldGUuc3ZnXCIgYWx0PVwiZGVsZXRlXCIgY2xhc3NOYW1lPSd3LTcgY3Vyc29yLXBvaW50ZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPntkZWNvZGVkQ29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtlZGl0ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybWNvbnRlbnQgbS01IGZsZXggZmxleC1jb2wgZ2FwLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsXCI+RWRpdCBUaXRsZTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy13aGl0ZSB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBweS0zIHB4LTQgbXQtMiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2RlY29kZWRUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlPXtkZWNvZGVkVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGVudFwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bFwiPkVkaXQgQ29udGVudDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBoLTY0IGJnLXdoaXRlIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHB5LTMgcHgtNCBtdC0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2RlY29kZWRDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmFsdWU9e2RlY29kZWRDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPScnPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgey8qIERlbGV0ZSBDb25maXJtYXRpb24gUG9wdXAgKi99XHJcbiAgICAgICAgICAgIHtzaG93RGVsZXRlUG9wdXAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCBiZy1ncmF5LTgwMCBiZy1vcGFjaXR5LTUwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHotNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnIHAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi0zXCI+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWRcIiBvbkNsaWNrPXtoYW5kbGVDb25maXJtRGVsZXRlfT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWdyYXktMzAwIHRleHQtZ3JheS04MDAgcm91bmRlZC1tZFwiIG9uQ2xpY2s9e2hhbmRsZUNhbmNlbERlbGV0ZX0+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlU2VhcmNoUGFyYW1zIiwidXNlUm91dGVyIiwiRGV0YWlsUGFnZSIsInNlYXJjaFBhcmFtcyIsInRpdGxlIiwiZ2V0IiwiY29udGVudCIsImlkIiwiZGVjb2RlZFRpdGxlIiwiYXRvYiIsImRlY29kZWRDb250ZW50Iiwicm91dGVyIiwic2hvd0RlbGV0ZVBvcHVwIiwic2V0U2hvd0RlbGV0ZVBvcHVwIiwiZWRpdCIsInNldGVkaXQiLCJoYW5kbGVEZWxldGVDbGljayIsImhhbmRsZUNhbmNlbERlbGV0ZSIsImhhbmRsZUNvbmZpcm1EZWxldGUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwib2siLCJFcnJvciIsInB1c2giLCJyZWxvYWQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtZXNzYWdlIiwiaGFuZGxlZWRpdCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwib25DbGljayIsInAiLCJpbWciLCJzcmMiLCJhbHQiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/detail/page.js\n"));

/***/ })

});