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

	httpMethods.getUsers(renderUserList);

	function renderUserList(data) {
	    var users = data;
	    var $el = document.getElementById("main");
	    for (var k in users) {

	        if (users[k].hasOwnProperty("subordinates")) {
	            //var subordinates = filterUsers(users,  users[k].id);
	            var subordinates = filterUsers(users, users[k].subordinates);

	            $el.innerHTML += "<li id=\"" + users[k].id + "\">" + users[k].position + " (id: " + users[k].id + ")" + "<ul>" + subordinates + "</ul></li>";
	            //$el = document.getElementById(users[k].id);
	        }
	    }
	    console.log(users);
	}

	function filterUsers(users, idArray) {
	    var result = "";

	    for (var k = 0; k < users.length; k++) {
	        for (var l = 0; l < idArray.length; l++) {
	            if (users[k].hasOwnProperty("id")) {
	                if (users[k].id === idArray[l]) {
	                    result += "<li id=\"" + users[k].id + "\">" + users[k].position + users[k].id + "</li>";
	                }
	            }
	        }
	    }
	    return result;
	}

	function createSubusersString(subUsers) {
	    var users = subUsers.subordinates;
	    var result = "";
	    for (var k in users) {
	        result += "<li>" + users[k].position + "</li>";
	    }
	    return "<ul>" + result + "</ul>";
	}

	//
	//document.getElementById("fat").onclick = function () {
	//    require(["./Fattyfier"], function (Fattyfier) {
	//        var fattyfier = new Fattyfier("text");
	//        fattyfier.fat();
	//    });
	//}

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	function User() {}

	User.prototype.alet = function () {
	    console.log('1');
	};

	module.exports = User;

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	"use strict";

	function HttpMethods() {}

	HttpMethods.prototype.getUsers = function (func) {
	    var data_file = "/users";
	    var httpRequest = new XMLHttpRequest();

	    try {
	        // Opera 8.0+, Firefox, Chrome, Safari
	        httpRequest = new XMLHttpRequest();
	    } catch (e) {
	        // Internet Explorer Browsers
	        try {
	            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
	        } catch (e) {

	            try {
	                httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	            } catch (e) {
	                // Something went wrong
	                alert("Your browser broke!");
	                return false;
	            }
	        }
	    }

	    httpRequest.open("GET", data_file, true);

	    httpRequest.send();

	    httpRequest.onreadystatechange = function () {

	        if (httpRequest.readyState == 4) {
	            func(JSON.parse(httpRequest.responseText));
	        }
	    };
	};

	module.exports = HttpMethods;

/***/ }
/******/ ]);