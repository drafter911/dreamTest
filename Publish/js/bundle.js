/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "./Publish/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var User = __webpack_require__(1),
	    HttpMethods = __webpack_require__(3),
	    httpMethods = new HttpMethods("text"),
	    user = new User("text");

	var users = httpMethods.getUsers();
	console.dir(users);
	User();
	//
	//document.getElementById("fat").onclick = function () {
	//    require(["./Fattyfier"], function (Fattyfier) {
	//        var fattyfier = new Fattyfier("text");
	//        fattyfier.fat();
	//    });
	//}
	console.dir("vasya");

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	function User() {}

	User.prototype.alet = function () {
	    console.log('1');
	};

	module.exports = User;

	//function alet() {
	//    alert('1');
	//}

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	"use strict";

	function HttpMethods() {}

	HttpMethods.prototype.getUsers = function () {
	    var data_file = "/users";
	    var http_request = new XMLHttpRequest();
	    try {
	        // Opera 8.0+, Firefox, Chrome, Safari
	        http_request = new XMLHttpRequest();
	    } catch (e) {
	        // Internet Explorer Browsers
	        try {
	            http_request = new ActiveXObject("Msxml2.XMLHTTP");
	        } catch (e) {

	            try {
	                http_request = new ActiveXObject("Microsoft.XMLHTTP");
	            } catch (e) {
	                // Something went wrong
	                alert("Your browser broke!");
	                return false;
	            }
	        }
	    }

	    http_request.onreadystatechange = function () {

	        if (http_request.readyState == 4) {
	            // Javascript function JSON.parse to parse JSON data
	            var jsonObj = JSON.parse(http_request.responseText);
	            console.log(jsonObj);

	            // jsonObj variable now contains the data structure and can
	            // be accessed as jsonObj.name and jsonObj.country.
	            //document.getElementById("Name").innerHTML = jsonObj.name;
	            //document.getElementById("Country").innerHTML = jsonObj.country;
	        }
	    };

	    http_request.open("GET", data_file, true);
	    http_request.send();
	};

	module.exports = HttpMethods;

/***/ }
/******/ ]);