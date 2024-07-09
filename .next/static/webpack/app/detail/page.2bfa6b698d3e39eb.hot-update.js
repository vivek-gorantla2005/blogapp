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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst DetailPage = ()=>{\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const title = searchParams.get(\"title\");\n    const content = searchParams.get(\"content\");\n    const id = searchParams.get(\"id\");\n    const decodedTitle = title ? atob(title) : \"\";\n    const decodedContent = content ? atob(content) : \"\";\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [showDeletePopup, setShowDeletePopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [edit, setedit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [updatetitle, setupdatetitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [updatecontent, setupdatecontent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleDeleteClick = ()=>{\n        setShowDeletePopup(true);\n    };\n    const handleCancelDelete = ()=>{\n        setShowDeletePopup(false);\n    };\n    const handleConfirmDelete = async ()=>{\n        try {\n            const response = await fetch(\"/api/deleteblog?id=\".concat(id), {\n                method: \"DELETE\"\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to delete blog\");\n            }\n            if (response.ok) {\n                router.push(\"/myblogs\");\n                router.reload();\n            }\n            console.log(\"Blog deleted successfully\");\n        } catch (error) {\n            console.error(\"Error deleting blog:\", error.message);\n        } finally{\n            setShowDeletePopup(false);\n        }\n    };\n    const handleedit = ()=>{\n        setedit(true);\n    };\n    const handleSubmit = ()=>{\n        console.log();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10\",\n        children: [\n            !edit && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl font-bold\",\n                                children: decodedTitle\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                lineNumber: 61,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-10 items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex font-bold gap-1 items-center cursor-pointer\",\n                                        onClick: handleedit,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Edit\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"edit.svg\",\n                                                alt: \"edit\",\n                                                className: \"w-7 cursor-pointer\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex font-bold gap-1 items-center cursor-pointer\",\n                                        onClick: handleDeleteClick,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Delete\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                                lineNumber: 68,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"delete.svg\",\n                                                alt: \"delete\",\n                                                className: \"w-7 cursor-pointer\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                lineNumber: 62,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-700\",\n                        children: decodedContent\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true),\n            edit && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"formcontent m-5 flex flex-col gap-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"space-y-6\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"title\",\n                                    className: \"font-bold text-3xl\",\n                                    children: \"Edit Title:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded-lg py-3 px-4 mt-2 focus:outline-none focus:border-blue-500\",\n                                    id: \"title\",\n                                    type: \"text\",\n                                    defaultValue: decodedTitle,\n                                    value: updatetitle,\n                                    onChange: (e)=>setupdatetitle(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                            lineNumber: 80,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"content\",\n                                    className: \"font-bold text-3xl\",\n                                    children: \"Edit Content:\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    className: \"appearance-none block w-full h-64 bg-white text-gray-700 border border-gray-300 rounded-lg py-3 px-4 mt-2 focus:outline-none focus:border-blue-500\",\n                                    id: \"content\",\n                                    defaultValue: decodedContent,\n                                    value: updatecontent,\n                                    onChange: (e)=>setupdatecontent(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                            lineNumber: 91,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                            lineNumber: 101,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                    lineNumber: 79,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                lineNumber: 78,\n                columnNumber: 17\n            }, undefined),\n            showDeletePopup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white rounded-lg shadow-lg p-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl font-bold mb-3\",\n                            children: \"Are you sure you want to delete?\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                            lineNumber: 116,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-end gap-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-4 py-2 bg-red-500 text-white rounded-md\",\n                                    onClick: handleConfirmDelete,\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-4 py-2 bg-gray-300 text-gray-800 rounded-md\",\n                                    onClick: handleCancelDelete,\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                            lineNumber: 117,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                    lineNumber: 115,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                lineNumber: 114,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DetailPage, \"kPckJBKglr4ubIvoC9ogRGRsoRk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = DetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailPage);\nvar _c;\n$RefreshReg$(_c, \"DetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kZXRhaWwvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3dDO0FBQ1U7QUFDTjtBQUU1QyxNQUFNSSxhQUFhOztJQUNmLE1BQU1DLGVBQWVILGdFQUFlQTtJQUNwQyxNQUFNSSxRQUFRRCxhQUFhRSxHQUFHLENBQUM7SUFDL0IsTUFBTUMsVUFBVUgsYUFBYUUsR0FBRyxDQUFDO0lBQ2pDLE1BQU1FLEtBQUtKLGFBQWFFLEdBQUcsQ0FBQztJQUM1QixNQUFNRyxlQUFlSixRQUFRSyxLQUFLTCxTQUFTO0lBQzNDLE1BQU1NLGlCQUFpQkosVUFBVUcsS0FBS0gsV0FBVztJQUNqRCxNQUFNSyxTQUFTViwwREFBU0E7SUFDeEIsTUFBTSxDQUFDVyxpQkFBaUJDLG1CQUFtQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNlLE1BQU1DLFFBQVEsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2lCLGFBQVlDLGVBQWUsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQzlDLE1BQU0sQ0FBQ21CLGVBQWNDLGlCQUFpQixHQUFHcEIsK0NBQVFBLENBQUM7SUFFbEQsTUFBTXFCLG9CQUFvQjtRQUN0QlAsbUJBQW1CO0lBQ3ZCO0lBRUEsTUFBTVEscUJBQXFCO1FBQ3ZCUixtQkFBbUI7SUFDdkI7SUFFQSxNQUFNUyxzQkFBc0I7UUFDeEIsSUFBSTtZQUNBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxzQkFBeUIsT0FBSGpCLEtBQU07Z0JBQ3JEa0IsUUFBUTtZQUNaO1lBRUEsSUFBSSxDQUFDRixTQUFTRyxFQUFFLEVBQUU7Z0JBQ2QsTUFBTSxJQUFJQyxNQUFNO1lBQ3BCO1lBQ0EsSUFBSUosU0FBU0csRUFBRSxFQUFFO2dCQUNiZixPQUFPaUIsSUFBSSxDQUFDO2dCQUNaakIsT0FBT2tCLE1BQU07WUFDakI7WUFDQUMsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCLEVBQUUsT0FBT0MsT0FBTztZQUNaRixRQUFRRSxLQUFLLENBQUMsd0JBQXdCQSxNQUFNQyxPQUFPO1FBQ3ZELFNBQVU7WUFDTnBCLG1CQUFtQjtRQUN2QjtJQUNKO0lBRUEsTUFBTXFCLGFBQWE7UUFDZm5CLFFBQVE7SUFDWjtJQUVBLE1BQU1vQixlQUFlO1FBQ2pCTCxRQUFRQyxHQUFHO0lBQ2Y7SUFFQSxxQkFDSSw4REFBQ0s7UUFBSUMsV0FBVTs7WUFDVixDQUFDdkIsc0JBQ0U7O2tDQUNJLDhEQUFDc0I7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDQztnQ0FBR0QsV0FBVTswQ0FBc0I3Qjs7Ozs7OzBDQUNwQyw4REFBQzRCO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ0Q7d0NBQUlDLFdBQVU7d0NBQW1ERSxTQUFTTDs7MERBQ3ZFLDhEQUFDTTswREFBRTs7Ozs7OzBEQUNILDhEQUFDQztnREFBSUMsS0FBSTtnREFBV0MsS0FBSTtnREFBT04sV0FBVTs7Ozs7Ozs7Ozs7O2tEQUU3Qyw4REFBQ0Q7d0NBQUlDLFdBQVU7d0NBQW1ERSxTQUFTbkI7OzBEQUN2RSw4REFBQ29COzBEQUFFOzs7Ozs7MERBQ0gsOERBQUNDO2dEQUFJQyxLQUFJO2dEQUFhQyxLQUFJO2dEQUFTTixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSXpELDhEQUFDRzt3QkFBRUgsV0FBVTtrQ0FBaUIzQjs7Ozs7Ozs7WUFJckNJLHNCQUNHLDhEQUFDc0I7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNPO29CQUFLUCxXQUFVO29CQUFZUSxVQUFVVjs7c0NBQ2xDLDhEQUFDQzs7OENBQ0csOERBQUNVO29DQUFNQyxTQUFRO29DQUFRVixXQUFVOzhDQUFxQjs7Ozs7OzhDQUN0RCw4REFBQ1c7b0NBQ0dYLFdBQVU7b0NBQ1Y5QixJQUFHO29DQUNIMEMsTUFBSztvQ0FDTEMsY0FBYzFDO29DQUNkMkMsT0FBU25DO29DQUNUb0MsVUFBVSxDQUFDQyxJQUFJcEMsZUFBZW9DLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7O3NDQUdwRCw4REFBQ2Y7OzhDQUNHLDhEQUFDVTtvQ0FBTUMsU0FBUTtvQ0FBVVYsV0FBVTs4Q0FBcUI7Ozs7Ozs4Q0FDeEQsOERBQUNrQjtvQ0FDR2xCLFdBQVU7b0NBQ1Y5QixJQUFHO29DQUNIMkMsY0FBY3hDO29DQUNkeUMsT0FBU2pDO29DQUNUa0MsVUFBVSxDQUFDQyxJQUFJbEMsaUJBQWlCa0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7Ozs7c0NBR3RELDhEQUFDSzs0QkFDR1AsTUFBSzs0QkFDTFosV0FBVTtzQ0FDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTWnpCLGlDQUNHLDhEQUFDd0I7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0c7NEJBQUVILFdBQVU7c0NBQXlCOzs7Ozs7c0NBQ3RDLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNtQjtvQ0FBT25CLFdBQVU7b0NBQTZDRSxTQUFTakI7OENBQXFCOzs7Ozs7OENBQzdGLDhEQUFDa0M7b0NBQU9uQixXQUFVO29DQUFpREUsU0FBU2xCOzhDQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRNUg7R0F6SE1uQjs7UUFDbUJGLDREQUFlQTtRQU1yQkMsc0RBQVNBOzs7S0FQdEJDO0FBMkhOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kZXRhaWwvcGFnZS5qcz9hNzlhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcblxyXG5jb25zdCBEZXRhaWxQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IHNlYXJjaFBhcmFtcy5nZXQoJ3RpdGxlJyk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gc2VhcmNoUGFyYW1zLmdldCgnY29udGVudCcpO1xyXG4gICAgY29uc3QgaWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdpZCcpO1xyXG4gICAgY29uc3QgZGVjb2RlZFRpdGxlID0gdGl0bGUgPyBhdG9iKHRpdGxlKSA6ICcnO1xyXG4gICAgY29uc3QgZGVjb2RlZENvbnRlbnQgPSBjb250ZW50ID8gYXRvYihjb250ZW50KSA6ICcnO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFtzaG93RGVsZXRlUG9wdXAsIHNldFNob3dEZWxldGVQb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZWRpdCwgc2V0ZWRpdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdXBkYXRldGl0bGUsc2V0dXBkYXRldGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdXBkYXRlY29udGVudCxzZXR1cGRhdGVjb250ZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dEZWxldGVQb3B1cCh0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dEZWxldGVQb3B1cChmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNvbmZpcm1EZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9kZWxldGVibG9nP2lkPSR7aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGRlbGV0ZSBibG9nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL215YmxvZ3MnKVxyXG4gICAgICAgICAgICAgICAgcm91dGVyLnJlbG9hZCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Jsb2cgZGVsZXRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBibG9nOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldFNob3dEZWxldGVQb3B1cChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVlZGl0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldGVkaXQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coKSAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTEwXCI+XHJcbiAgICAgICAgICAgIHshZWRpdCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItNSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj57ZGVjb2RlZFRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGdhcC0xMCBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZm9udC1ib2xkIGdhcC0xIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlcicgb25DbGljaz17aGFuZGxlZWRpdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RWRpdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImVkaXQuc3ZnXCIgYWx0PVwiZWRpdFwiIGNsYXNzTmFtZT0ndy03IGN1cnNvci1wb2ludGVyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmb250LWJvbGQgZ2FwLTEgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyJyBvbkNsaWNrPXtoYW5kbGVEZWxldGVDbGlja30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRlbGV0ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImRlbGV0ZS5zdmdcIiBhbHQ9XCJkZWxldGVcIiBjbGFzc05hbWU9J3ctNyBjdXJzb3ItcG9pbnRlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+e2RlY29kZWRDb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge2VkaXQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtY29udGVudCBtLTUgZmxleCBmbGV4LWNvbCBnYXAtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzcGFjZS15LTZcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGxcIj5FZGl0IFRpdGxlOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLXdoaXRlIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHB5LTMgcHgtNCBtdC0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RlY29kZWRUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHt1cGRhdGV0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpPT5zZXR1cGRhdGV0aXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGVudFwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bFwiPkVkaXQgQ29udGVudDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBoLTY0IGJnLXdoaXRlIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHB5LTMgcHgtNCBtdC0yIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZWNvZGVkQ29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHt1cGRhdGVjb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PnNldHVwZGF0ZWNvbnRlbnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHsvKiBEZWxldGUgQ29uZmlybWF0aW9uIFBvcHVwICovfVxyXG4gICAgICAgICAgICB7c2hvd0RlbGV0ZVBvcHVwICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBoLWZ1bGwgYmctZ3JheS04MDAgYmctb3BhY2l0eS01MCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB6LTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZyBwLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItM1wiPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGU/PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgZ2FwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLXJlZC01MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kXCIgb25DbGljaz17aGFuZGxlQ29uZmlybURlbGV0ZX0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1ncmF5LTMwMCB0ZXh0LWdyYXktODAwIHJvdW5kZWQtbWRcIiBvbkNsaWNrPXtoYW5kbGVDYW5jZWxEZWxldGV9PkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVNlYXJjaFBhcmFtcyIsInVzZVJvdXRlciIsIkRldGFpbFBhZ2UiLCJzZWFyY2hQYXJhbXMiLCJ0aXRsZSIsImdldCIsImNvbnRlbnQiLCJpZCIsImRlY29kZWRUaXRsZSIsImF0b2IiLCJkZWNvZGVkQ29udGVudCIsInJvdXRlciIsInNob3dEZWxldGVQb3B1cCIsInNldFNob3dEZWxldGVQb3B1cCIsImVkaXQiLCJzZXRlZGl0IiwidXBkYXRldGl0bGUiLCJzZXR1cGRhdGV0aXRsZSIsInVwZGF0ZWNvbnRlbnQiLCJzZXR1cGRhdGVjb250ZW50IiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJoYW5kbGVDYW5jZWxEZWxldGUiLCJoYW5kbGVDb25maXJtRGVsZXRlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsIm9rIiwiRXJyb3IiLCJwdXNoIiwicmVsb2FkIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSIsImhhbmRsZWVkaXQiLCJoYW5kbGVTdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm9uQ2xpY2siLCJwIiwiaW1nIiwic3JjIiwiYWx0IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiZGVmYXVsdFZhbHVlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/detail/page.js\n"));

/***/ })

});