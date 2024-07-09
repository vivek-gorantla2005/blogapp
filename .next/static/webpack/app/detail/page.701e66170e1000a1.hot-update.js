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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst DetailPage = ()=>{\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const title = searchParams.get(\"title\");\n    const content = searchParams.get(\"content\");\n    const id = searchParams.get(\"id\");\n    const decodedTitle = title ? atob(title) : \"\";\n    const decodedContent = content ? atob(content) : \"\";\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [showDeletePopup, setShowDeletePopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleDeleteClick = ()=>{\n        setShowDeletePopup(true);\n    };\n    const handleCancelDelete = ()=>{\n        setShowDeletePopup(false);\n    };\n    const handleConfirmDelete = async ()=>{\n        try {\n            const response = await fetch(\"/api/deleteblog?id=\".concat(id), {\n                method: \"DELETE\"\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to delete blog\");\n            }\n            if (response.ok) {\n                router.push(\"/myblogs\");\n                router.reload();\n            }\n            console.log(\"Blog deleted successfully\");\n        } catch (error) {\n            console.error(\"Error deleting blog:\", error.message);\n        } finally{\n            setShowDeletePopup(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold\",\n                        children: decodedTitle\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-10 items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex font-bold gap-1 items-center cursor-pointer\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Edit\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"edit.svg\",\n                                        alt: \"edit\",\n                                        className: \"w-7 cursor-pointer\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex font-bold gap-1 items-center cursor-pointer\",\n                                onClick: handleDeleteClick,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"delete.svg\",\n                                        alt: \"delete\",\n                                        className: \"w-7 cursor-pointer\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-700\",\n                children: decodedContent\n            }, void 0, false, {\n                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined),\n            showDeletePopup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white rounded-lg shadow-lg p-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl font-bold mb-3\",\n                            children: \"Are you sure you want to delete?\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                            lineNumber: 66,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-end gap-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-4 py-2 bg-red-500 text-white rounded-md\",\n                                    onClick: handleConfirmDelete,\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-4 py-2 bg-gray-300 text-gray-800 rounded-md\",\n                                    onClick: handleCancelDelete,\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                            lineNumber: 67,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                    lineNumber: 65,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                lineNumber: 64,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DetailPage, \"7khAPe+bwoJgK+Qn7DGmt1lkZ0M=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = DetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailPage);\nvar _c;\n$RefreshReg$(_c, \"DetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kZXRhaWwvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3dDO0FBQ1U7QUFDTjtBQUU1QyxNQUFNSSxhQUFhOztJQUNmLE1BQU1DLGVBQWVILGdFQUFlQTtJQUNwQyxNQUFNSSxRQUFRRCxhQUFhRSxHQUFHLENBQUM7SUFDL0IsTUFBTUMsVUFBVUgsYUFBYUUsR0FBRyxDQUFDO0lBQ2pDLE1BQU1FLEtBQUtKLGFBQWFFLEdBQUcsQ0FBQztJQUM1QixNQUFNRyxlQUFlSixRQUFRSyxLQUFLTCxTQUFTO0lBQzNDLE1BQU1NLGlCQUFpQkosVUFBVUcsS0FBS0gsV0FBVztJQUNqRCxNQUFNSyxTQUFTViwwREFBU0E7SUFDeEIsTUFBTSxDQUFDVyxpQkFBaUJDLG1CQUFtQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUV2RCxNQUFNZSxvQkFBb0I7UUFDdEJELG1CQUFtQjtJQUN2QjtJQUVBLE1BQU1FLHFCQUFxQjtRQUN2QkYsbUJBQW1CO0lBQ3ZCO0lBRUEsTUFBTUcsc0JBQXNCO1FBQ3hCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sc0JBQXlCLE9BQUhYLEtBQU07Z0JBQ3JEWSxRQUFRO1lBQ1o7WUFFQSxJQUFJLENBQUNGLFNBQVNHLEVBQUUsRUFBRTtnQkFDZCxNQUFNLElBQUlDLE1BQU07WUFDcEI7WUFDQSxJQUFHSixTQUFTRyxFQUFFLEVBQUM7Z0JBQ1hULE9BQU9XLElBQUksQ0FBQztnQkFDWlgsT0FBT1ksTUFBTTtZQUNqQjtZQUNBQyxRQUFRQyxHQUFHLENBQUM7UUFDaEIsRUFBRSxPQUFPQyxPQUFPO1lBQ1pGLFFBQVFFLEtBQUssQ0FBQyx3QkFBd0JBLE1BQU1DLE9BQU87UUFDdkQsU0FBUztZQUNMZCxtQkFBbUI7UUFDdkI7SUFDSjtJQUVBLHFCQUNJLDhEQUFDZTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBc0JyQjs7Ozs7O2tDQUNwQyw4REFBQ29CO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDRTtrREFBRTs7Ozs7O2tEQUNILDhEQUFDQzt3Q0FBSUMsS0FBSTt3Q0FBV0MsS0FBSTt3Q0FBT0wsV0FBVTs7Ozs7Ozs7Ozs7OzBDQUU3Qyw4REFBQ0Q7Z0NBQUlDLFdBQVU7Z0NBQW1ETSxTQUFTckI7O2tEQUN2RSw4REFBQ2lCO2tEQUFFOzs7Ozs7a0RBQ0gsOERBQUNDO3dDQUFJQyxLQUFJO3dDQUFhQyxLQUFJO3dDQUFTTCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXpELDhEQUFDRTtnQkFBRUYsV0FBVTswQkFBaUJuQjs7Ozs7O1lBRzdCRSxpQ0FDRyw4REFBQ2dCO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNFOzRCQUFFRixXQUFVO3NDQUF5Qjs7Ozs7O3NDQUN0Qyw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDTztvQ0FBT1AsV0FBVTtvQ0FBNkNNLFNBQVNuQjs4Q0FBcUI7Ozs7Ozs4Q0FDN0YsOERBQUNvQjtvQ0FBT1AsV0FBVTtvQ0FBaURNLFNBQVNwQjs4Q0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVIO0dBdEVNYjs7UUFDbUJGLDREQUFlQTtRQU1yQkMsc0RBQVNBOzs7S0FQdEJDO0FBd0VOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kZXRhaWwvcGFnZS5qcz9hNzlhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcblxyXG5jb25zdCBEZXRhaWxQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IHNlYXJjaFBhcmFtcy5nZXQoJ3RpdGxlJyk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gc2VhcmNoUGFyYW1zLmdldCgnY29udGVudCcpO1xyXG4gICAgY29uc3QgaWQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdpZCcpOyAgXHJcbiAgICBjb25zdCBkZWNvZGVkVGl0bGUgPSB0aXRsZSA/IGF0b2IodGl0bGUpIDogJyc7XHJcbiAgICBjb25zdCBkZWNvZGVkQ29udGVudCA9IGNvbnRlbnQgPyBhdG9iKGNvbnRlbnQpIDogJyc7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW3Nob3dEZWxldGVQb3B1cCwgc2V0U2hvd0RlbGV0ZVBvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93RGVsZXRlUG9wdXAodHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhbmNlbERlbGV0ZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93RGVsZXRlUG9wdXAoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDb25maXJtRGVsZXRlID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9kZWxldGVibG9nP2lkPSR7aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBkZWxldGUgYmxvZycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbXlibG9ncycpXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucmVsb2FkKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQmxvZyBkZWxldGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGJsb2c6JywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfWZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRTaG93RGVsZXRlUG9wdXAoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi01Jz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj57ZGVjb2RlZFRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtMTAgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmb250LWJvbGQgZ2FwLTEgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RWRpdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJlZGl0LnN2Z1wiIGFsdD1cImVkaXRcIiBjbGFzc05hbWU9J3ctNyBjdXJzb3ItcG9pbnRlcicgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmb250LWJvbGQgZ2FwLTEgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyJyBvbkNsaWNrPXtoYW5kbGVEZWxldGVDbGlja30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5EZWxldGU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiZGVsZXRlLnN2Z1wiIGFsdD1cImRlbGV0ZVwiIGNsYXNzTmFtZT0ndy03IGN1cnNvci1wb2ludGVyJy8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj57ZGVjb2RlZENvbnRlbnR9PC9wPlxyXG5cclxuICAgICAgICAgICAgey8qIERlbGV0ZSBDb25maXJtYXRpb24gUG9wdXAgKi99XHJcbiAgICAgICAgICAgIHtzaG93RGVsZXRlUG9wdXAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCBiZy1ncmF5LTgwMCBiZy1vcGFjaXR5LTUwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHotNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnIHAtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi0zXCI+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT88L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZCBnYXAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctcmVkLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWRcIiBvbkNsaWNrPXtoYW5kbGVDb25maXJtRGVsZXRlfT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtNCBweS0yIGJnLWdyYXktMzAwIHRleHQtZ3JheS04MDAgcm91bmRlZC1tZFwiIG9uQ2xpY2s9e2hhbmRsZUNhbmNlbERlbGV0ZX0+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VSb3V0ZXIiLCJEZXRhaWxQYWdlIiwic2VhcmNoUGFyYW1zIiwidGl0bGUiLCJnZXQiLCJjb250ZW50IiwiaWQiLCJkZWNvZGVkVGl0bGUiLCJhdG9iIiwiZGVjb2RlZENvbnRlbnQiLCJyb3V0ZXIiLCJzaG93RGVsZXRlUG9wdXAiLCJzZXRTaG93RGVsZXRlUG9wdXAiLCJoYW5kbGVEZWxldGVDbGljayIsImhhbmRsZUNhbmNlbERlbGV0ZSIsImhhbmRsZUNvbmZpcm1EZWxldGUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwib2siLCJFcnJvciIsInB1c2giLCJyZWxvYWQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiaW1nIiwic3JjIiwiYWx0Iiwib25DbGljayIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/detail/page.js\n"));

/***/ })

});