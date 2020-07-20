/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./RemoteComponent.js":
/*!****************************!*\
  !*** ./RemoteComponent.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [unused] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.g, __webpack_require__.* */
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar useDynamicScript = function useDynamicScript(url) {\n  var _React$useState = React.useState(false),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      ready = _React$useState2[0],\n      setReady = _React$useState2[1];\n\n  var _React$useState3 = React.useState(false),\n      _React$useState4 = _slicedToArray(_React$useState3, 2),\n      failed = _React$useState4[0],\n      setFailed = _React$useState4[1];\n\n  React.useEffect(function () {\n    if (!url) {\n      return;\n    }\n\n    var element = document.createElement('script');\n    element.src = url;\n    element.type = 'text/javascript';\n    element.async = true;\n    setReady(false);\n    setFailed(false);\n\n    element.onload = function () {\n      console.log(\"Dynamic Script Loaded: \".concat(url));\n      setReady(true);\n    };\n\n    element.onerror = function () {\n      console.error(\"Dynamic Script Error: \".concat(url));\n      setReady(false);\n      setFailed(true);\n    };\n\n    document.head.appendChild(element);\n    return function () {\n      console.log(\"Dynamic Script Removed: \".concat(url));\n      document.head.removeChild(element);\n    };\n  }, [url]);\n  return {\n    ready: ready,\n    failed: failed\n  };\n};\n\nvar RemoteComponent = function RemoteComponent(_ref) {\n  var remote = _ref.remote,\n      scope = _ref.scope,\n      module = _ref.module,\n      _ref$fallback = _ref.fallback,\n      fallback = _ref$fallback === void 0 ? /*#__PURE__*/React.createElement(\"div\", null, \"Loading...\") : _ref$fallback,\n      children = _ref.children;\n\n  var _useDynamicScript = useDynamicScript(remote),\n      ready = _useDynamicScript.ready,\n      failed = _useDynamicScript.failed;\n\n  if (!scope || !module) {\n    throw new Error('You must specify scope and module to import a Remote Component');\n  }\n\n  if (!ready || failed || !__webpack_require__.g) {\n    return null;\n  }\n\n  __webpack_require__.g[scope].init(Object.assign({\n    react: {\n      get: function get() {\n        return Promise.resolve(function () {\n          return __webpack_require__(/*! react */ \"react\");\n        });\n      },\n      loaded: true\n    }\n  }, __webpack_require__.g.__webpack_require__ ? __webpack_require__.g.__webpack_require__.o : {}));\n  var Component = React.lazy(function () {\n    return __webpack_require__.g[scope].get(\"./\".concat(module)).then(function (factory) {\n      var Module = factory();\n      return Module;\n    });\n  });\n  return /*#__PURE__*/React.createElement(React.Suspense, {\n    fallback: fallback\n  }, /*#__PURE__*/React.createElement(Component, null, children));\n};\n\n/* unused harmony default export */ var _unused_webpack_default_export = ((/* unused pure expression or super */ null && (RemoteComponent)));\n\n//# sourceURL=webpack://utils/./RemoteComponent.js?");

/***/ }),

/***/ "./webpack-shared-config.js":
/*!**********************************!*\
  !*** ./webpack-shared-config.js ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

eval("var baseConfig = {\n  resolve: {\n    extensions: ['.jsx', '.js', '.ts', '.tsx', '.json']\n  },\n  module: {\n    rules: [{\n      test: /\\.(ts|tsx)$/,\n      exclude: /node_modules/,\n      use: [{\n        loader: 'babel-loader',\n        options: {\n          presets: ['@babel/preset-react', '@babel/preset-typescript', '@babel/preset-env']\n        }\n      }]\n    }, {\n      test: /\\.(js|jsx)$/,\n      exclude: /node_modules/,\n      use: [{\n        loader: 'babel-loader',\n        options: {\n          presets: ['@babel/preset-react', '@babel/preset-env']\n        }\n      }]\n    }]\n  }\n};\nmodule.exports = baseConfig;\n\n//# sourceURL=webpack://utils/./webpack-shared-config.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! exports [maybe provided (runtime-defined)] [maybe used (runtime-defined)] */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("module.exports = React;\n\n//# sourceURL=webpack://utils/external_%22React%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! namespace exports */
/*! export RemoteComponent [provided] [unused] [could be renamed] */
/*! export WebpackConfig [provided] [unused] [could be renamed] */
/*! other exports [not provided] [unused] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.* */
eval("/* harmony import */ var _RemoteComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RemoteComponent */ \"./RemoteComponent.js\");\n/* harmony import */ var _webpack_shared_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webpack-shared-config */ \"./webpack-shared-config.js\");\n/* harmony import */ var _webpack_shared_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_webpack_shared_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n//# sourceURL=webpack://utils/./index.js?");
})();

/******/ })()
;