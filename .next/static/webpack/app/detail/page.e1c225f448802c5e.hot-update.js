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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst DetailPage = ()=>{\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const title = searchParams.get(\"title\");\n    const content = searchParams.get(\"content\");\n    const id = searchParams.get(\"id\");\n    const decodedTitle = title ? atob(title) : \"\";\n    const decodedContent = content ? atob(content) : \"\";\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [showDeletePopup, setShowDeletePopup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [edit, setedit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleDeleteClick = ()=>{\n        setShowDeletePopup(true);\n    };\n    const handleCancelDelete = ()=>{\n        setShowDeletePopup(false);\n    };\n    const handleConfirmDelete = async ()=>{\n        try {\n            const response = await fetch(\"/api/deleteblog?id=\".concat(id), {\n                method: \"DELETE\"\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to delete blog\");\n            }\n            if (response.ok) {\n                router.push(\"/myblogs\");\n                router.reload();\n            }\n            console.log(\"Blog deleted successfully\");\n        } catch (error) {\n            console.error(\"Error deleting blog:\", error.message);\n        } finally{\n            setShowDeletePopup(false);\n        }\n    };\n    const handleedit = ()=>{\n        setedit(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-10\",\n        children: [\n            !edit && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between items-center mb-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl font-bold\",\n                                children: decodedTitle\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-10 items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex font-bold gap-1 items-center cursor-pointer\",\n                                        onClick: handleedit,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Edit\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"edit.svg\",\n                                                alt: \"edit\",\n                                                className: \"w-7 cursor-pointer\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex font-bold gap-1 items-center cursor-pointer\",\n                                        onClick: handleDeleteClick,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: \"Delete\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"delete.svg\",\n                                                alt: \"delete\",\n                                                className: \"w-7 cursor-pointer\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                lineNumber: 55,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-700\",\n                        children: decodedContent\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                        lineNumber: 66,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true),\n            showDeletePopup && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white rounded-lg shadow-lg p-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl font-bold mb-3\",\n                            children: \"Are you sure you want to delete?\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                            lineNumber: 74,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-end gap-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-4 py-2 bg-red-500 text-white rounded-md\",\n                                    onClick: handleConfirmDelete,\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"px-4 py-2 bg-gray-300 text-gray-800 rounded-md\",\n                                    onClick: handleCancelDelete,\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                            lineNumber: 75,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                    lineNumber: 73,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                lineNumber: 72,\n                columnNumber: 17\n            }, undefined),\n            edit && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"formcontent\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                            lineNumber: 86,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3\",\n                            id: \"title\",\n                            type: \"text\",\n                            placeholder: decodedTitle\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                            lineNumber: 87,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3\",\n                            id: \"content\",\n                            type: \"text\",\n                            placeholder: decodedContent\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                            lineNumber: 94,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                    lineNumber: 85,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n                lineNumber: 84,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Vivek\\\\blog\\\\my-app\\\\app\\\\detail\\\\page.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_s(DetailPage, \"6ECwXErFMGIcHB+zjZQgfualaPg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = DetailPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailPage);\nvar _c;\n$RefreshReg$(_c, \"DetailPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWNuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdEM7R0FwR01SOztRQUNtQkYsNERBQWVBO1FBTXJCQyxzREFBU0E7OztLQVB0QkM7QUFzR04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2RldGFpbC9wYWdlLmpzP2E3OWEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuXHJcbmNvbnN0IERldGFpbFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuICAgIGNvbnN0IHRpdGxlID0gc2VhcmNoUGFyYW1zLmdldCgndGl0bGUnKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBzZWFyY2hQYXJhbXMuZ2V0KCdjb250ZW50Jyk7XHJcbiAgICBjb25zdCBpZCA9IHNlYXJjaFBhcmFtcy5nZXQoJ2lkJyk7XHJcbiAgICBjb25zdCBkZWNvZGVkVGl0bGUgPSB0aXRsZSA/IGF0b2IodGl0bGUpIDogJyc7XHJcbiAgICBjb25zdCBkZWNvZGVkQ29udGVudCA9IGNvbnRlbnQgPyBhdG9iKGNvbnRlbnQpIDogJyc7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW3Nob3dEZWxldGVQb3B1cCwgc2V0U2hvd0RlbGV0ZVBvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlZGl0LCBzZXRlZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dEZWxldGVQb3B1cCh0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FuY2VsRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dEZWxldGVQb3B1cChmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNvbmZpcm1EZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9kZWxldGVibG9nP2lkPSR7aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGRlbGV0ZSBibG9nJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL215YmxvZ3MnKVxyXG4gICAgICAgICAgICAgICAgcm91dGVyLnJlbG9hZCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Jsb2cgZGVsZXRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBibG9nOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldFNob3dEZWxldGVQb3B1cChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVlZGl0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldGVkaXQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMTBcIj5cclxuICAgICAgICAgICAgeyFlZGl0ICYmIChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi01Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPntkZWNvZGVkVGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZ2FwLTEwIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmb250LWJvbGQgZ2FwLTEgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyJyBvbkNsaWNrPXtoYW5kbGVlZGl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FZGl0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiZWRpdC5zdmdcIiBhbHQ9XCJlZGl0XCIgY2xhc3NOYW1lPSd3LTcgY3Vyc29yLXBvaW50ZXInIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZvbnQtYm9sZCBnYXAtMSBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUNsaWNrfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGVsZXRlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiZGVsZXRlLnN2Z1wiIGFsdD1cImRlbGV0ZVwiIGNsYXNzTmFtZT0ndy03IGN1cnNvci1wb2ludGVyJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj57ZGVjb2RlZENvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7LyogRGVsZXRlIENvbmZpcm1hdGlvbiBQb3B1cCAqL31cclxuICAgICAgICAgICAge3Nob3dEZWxldGVQb3B1cCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIGJnLWdyYXktODAwIGJnLW9wYWNpdHktNTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgei01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbGcgcC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTNcIj5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlPzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZW5kIGdhcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTQgcHktMiBiZy1yZWQtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1tZFwiIG9uQ2xpY2s9e2hhbmRsZUNvbmZpcm1EZWxldGV9PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctZ3JheS0zMDAgdGV4dC1ncmF5LTgwMCByb3VuZGVkLW1kXCIgb25DbGljaz17aGFuZGxlQ2FuY2VsRGVsZXRlfT5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHtlZGl0ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctd2hpdGUgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQtbGcgcHktMyBweC00IG1iLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0ge2RlY29kZWRUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhbHVlPXtkZWNvZGVkVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLXdoaXRlIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkLWxnIHB5LTMgcHgtNCBtYi0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0ge2RlY29kZWRDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2YWx1ZT17ZGVjb2RlZFRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsUGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VSb3V0ZXIiLCJEZXRhaWxQYWdlIiwic2VhcmNoUGFyYW1zIiwidGl0bGUiLCJnZXQiLCJjb250ZW50IiwiaWQiLCJkZWNvZGVkVGl0bGUiLCJhdG9iIiwiZGVjb2RlZENvbnRlbnQiLCJyb3V0ZXIiLCJzaG93RGVsZXRlUG9wdXAiLCJzZXRTaG93RGVsZXRlUG9wdXAiLCJlZGl0Iiwic2V0ZWRpdCIsImhhbmRsZURlbGV0ZUNsaWNrIiwiaGFuZGxlQ2FuY2VsRGVsZXRlIiwiaGFuZGxlQ29uZmlybURlbGV0ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJvayIsIkVycm9yIiwicHVzaCIsInJlbG9hZCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1lc3NhZ2UiLCJoYW5kbGVlZGl0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJvbkNsaWNrIiwicCIsImltZyIsInNyYyIsImFsdCIsImJ1dHRvbiIsImZvcm0iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/detail/page.js\n"));

/***/ })

});