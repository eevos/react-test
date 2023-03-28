"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Header(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: createTitle(props.title)\n    }, void 0, false, {\n        fileName: \"/home/edwin/testsites/react-test/src/pages/index.jsx\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\nfunction Paragraph() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"https://nextjs.org/learn/foundations/from-javascript-to-react/displaying-data-with-props\"\n    }, void 0, false, {\n        fileName: \"/home/edwin/testsites/react-test/src/pages/index.jsx\",\n        lineNumber: 7,\n        columnNumber: 11\n    }, this);\n}\nfunction createTitle(title) {\n    if (title) {\n        return title;\n    }\n    return \"Default title\";\n}\nfunction HomePage() {\n    const [likes, setLikes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const names = [\n        \"Ada Lovelace\",\n        \"Grace Hopper\",\n        \"Margaret Hamilton\",\n        \"Toonypep\"\n    ];\n    function handleClick() {\n        setLikes(likes + 1);\n    }\n    function handleUnClick() {\n        setLikes(likes - 1);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"test\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"React title\"\n            }, void 0, false, {\n                fileName: \"/home/edwin/testsites/react-test/src/pages/index.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"2nd title\"\n            }, void 0, false, {\n                fileName: \"/home/edwin/testsites/react-test/src/pages/index.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                fileName: \"/home/edwin/testsites/react-test/src/pages/index.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Paragraph, {}, void 0, false, {\n                fileName: \"/home/edwin/testsites/react-test/src/pages/index.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: names.map((name)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: name\n                    }, name, false, {\n                        fileName: \"/home/edwin/testsites/react-test/src/pages/index.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/edwin/testsites/react-test/src/pages/index.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: \"Like\"\n            }, void 0, false, {\n                fileName: \"/home/edwin/testsites/react-test/src/pages/index.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: likes\n            }, void 0, false, {\n                fileName: \"/home/edwin/testsites/react-test/src/pages/index.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleUnClick,\n                children: \"UnLike\"\n            }, void 0, false, {\n                fileName: \"/home/edwin/testsites/react-test/src/pages/index.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/edwin/testsites/react-test/src/pages/index.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnQztBQUVoQyxTQUFTQyxPQUFPQyxLQUFLLEVBQUU7SUFDckIscUJBQU8sOERBQUNDO2tCQUFJQyxZQUFZRixNQUFNRyxLQUFLOzs7Ozs7QUFDckM7QUFDQSxTQUFTQyxZQUFZO0lBQ25CLHFCQUFRLDhEQUFDQztrQkFBRTs7Ozs7O0FBQ2I7QUFFQSxTQUFTSCxZQUFZQyxLQUFLLEVBQUU7SUFDMUIsSUFBSUEsT0FBTztRQUNULE9BQU9BO0lBQ1QsQ0FBQztJQUNELE9BQU87QUFDVDtBQUVlLFNBQVNHLFdBQVc7SUFDakMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1XLFFBQVE7UUFDWjtRQUNFO1FBQ0E7UUFDQTtLQUFXO0lBRWYsU0FBU0MsY0FBYztRQUNyQkYsU0FBU0QsUUFBUTtJQUNuQjtJQUNBLFNBQVNJLGdCQUFnQjtRQUN2QkgsU0FBU0QsUUFBUTtJQUNuQjtJQUVBLHFCQUNFLDhEQUFDSztRQUFJQyxJQUFHOzswQkFFTiw4REFBQ2Q7Z0JBQU9JLE9BQU07Ozs7OzswQkFDZCw4REFBQ0o7Z0JBQU9JLE9BQU07Ozs7OzswQkFDZCw4REFBQ0o7Ozs7OzBCQUNELDhEQUFDSzs7Ozs7MEJBRUQsOERBQUNVOzBCQUNFTCxNQUFNTSxHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNDO2tDQUFlRDt1QkFBUEE7Ozs7Ozs7Ozs7MEJBSWIsOERBQUNFO2dCQUFPQyxTQUFTVDswQkFBYTs7Ozs7OzBCQUM5Qiw4REFBQ0w7MEJBQUdFOzs7Ozs7MEJBQ0osOERBQUNXO2dCQUFPQyxTQUFTUjswQkFBZTs7Ozs7Ozs7Ozs7O0FBR3RDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC10ZXN0Ly4vc3JjL3BhZ2VzL2luZGV4LmpzeD9kMzVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG4gIHJldHVybiA8aDE+e2NyZWF0ZVRpdGxlKHByb3BzLnRpdGxlKX08L2gxPlxufVxuZnVuY3Rpb24gUGFyYWdyYXBoKCkge1xuICByZXR1cm4gKDxwPmh0dHBzOi8vbmV4dGpzLm9yZy9sZWFybi9mb3VuZGF0aW9ucy9mcm9tLWphdmFzY3JpcHQtdG8tcmVhY3QvZGlzcGxheWluZy1kYXRhLXdpdGgtcHJvcHM8L3A+KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUaXRsZSh0aXRsZSkge1xuICBpZiAodGl0bGUpIHtcbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cbiAgcmV0dXJuICdEZWZhdWx0IHRpdGxlJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFtsaWtlcywgc2V0TGlrZXNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IG5hbWVzID0gW1xuICAgICdBZGEgTG92ZWxhY2UnXG4gICAgLCAnR3JhY2UgSG9wcGVyJ1xuICAgICwgJ01hcmdhcmV0IEhhbWlsdG9uJ1xuICAgICwgJ1Rvb255cGVwJ107XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgc2V0TGlrZXMobGlrZXMgKyAxKTtcbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVVbkNsaWNrKCkge1xuICAgIHNldExpa2VzKGxpa2VzIC0gMSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJ0ZXN0XCI+XG4gICAgICB7LyogTmVzdGluZyB0aGUgSGVhZGVyIGNvbXBvbmVudCAqL31cbiAgICAgIDxIZWFkZXIgdGl0bGU9XCJSZWFjdCB0aXRsZVwiIC8+XG4gICAgICA8SGVhZGVyIHRpdGxlPVwiMm5kIHRpdGxlXCIgLz5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxQYXJhZ3JhcGggLz5cblxuICAgICAgPHVsPlxuICAgICAgICB7bmFtZXMubWFwKChuYW1lKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17bmFtZX0+e25hbWV9PC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5MaWtlPC9idXR0b24+XG4gICAgICA8cD57bGlrZXN9PC9wPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVVbkNsaWNrfT5Vbkxpa2U8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIZWFkZXIiLCJwcm9wcyIsImgxIiwiY3JlYXRlVGl0bGUiLCJ0aXRsZSIsIlBhcmFncmFwaCIsInAiLCJIb21lUGFnZSIsImxpa2VzIiwic2V0TGlrZXMiLCJuYW1lcyIsImhhbmRsZUNsaWNrIiwiaGFuZGxlVW5DbGljayIsImRpdiIsImlkIiwidWwiLCJtYXAiLCJuYW1lIiwibGkiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.jsx"));
module.exports = __webpack_exports__;

})();