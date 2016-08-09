(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else if(typeof exports === 'object')
		exports["ngemForm"] = factory(require("angular"));
	else
		root["ngemForm"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(1);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _index2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angularG = __webpack_require__(2);

	var _angularG2 = _interopRequireDefault(_angularG);

	var _textfield = __webpack_require__(4);

	var _textfield2 = _interopRequireDefault(_textfield);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ngModuleName = 'ngemForm';

	exports.default = ngModuleName;


	var ngModule = _angularG2.default.module(ngModuleName, []);

	ngModule.directive('textfield', _textfield2.default);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _angular = __webpack_require__(3);

	var _angular2 = _interopRequireDefault(_angular);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angularG = __webpack_require__(2);

	var _angularG2 = _interopRequireDefault(_angularG);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function textfield() {
	    return {
	        restrict: "AE",
	        scope: {
	            rule: "@",
	            label: "@",
	            prehold: "@",
	            model: "=",
	            require: "@",
	            minlength: "@",
	            maxlength: "@"
	        },
	        template: "<div class= \"input-group\">" + "<span class=\"input-group-addon\" id=\"basic-addon1\">{{label}}</span>" + "<input type=\"text\" class=\"form-control\" placeholder=\"{{prehold}}\" " + "ng-model=\"model\" aria-describedby=\"basic-addon1\" ng-required=\"require\" " + "ng-minlength=\"minlength\" ng-maxlength=\"maxlength\" ng-pattern=\"rule\">" + "</div>"
	    };
	};

	exports.default = textfield;

/***/ }
/******/ ])
});
;