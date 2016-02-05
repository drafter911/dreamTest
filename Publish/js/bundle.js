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
	    HttpMethods = __webpack_require__(2),
	    httpMethods = new HttpMethods("text"),
	    user = new User("text");

	httpMethods.getUsers(renderUserList);

	function renderUserList(data) {
	    var users = data;
	    var $el = document.getElementById("main");
	    renderUsers(users, $el);
	    console.log(users);
	}

	function renderUsers(users, $el) {
	    for (var k in users) {
	        var user = users[k];
	        if (!user.hasOwnProperty("parentId")) {
	            renderUser(user, $el);
	            addListParentElem(user.id);
	            $el = document.getElementById(user.id + "UL");
	            var parentId = user.id;
	            for (var j in users) {
	                user = users[j];
	                if (user.hasOwnProperty("parentId")) {
	                    if (user.parentId === parentId) {
	                        renderUser(user, $el);
	                        addListParentElem(user.id);
	                        var $el2 = document.getElementById(user.id + "UL");
	                        var parentId2 = user.id;
	                        for (var i in users) {
	                            user = users[i];
	                            if (user.hasOwnProperty("parentId")) {
	                                if (user.parentId === parentId2) {
	                                    renderUser(user, $el2);
	                                    addListParentElem(user.id);
	                                    var $el3 = document.getElementById(user.id + "UL");
	                                    var parentId3 = user.id;
	                                    for (var m in users) {
	                                        user = users[m];
	                                        if (user.hasOwnProperty("parentId")) {
	                                            if (user.parentId === parentId3) {
	                                                renderUser(user, $el3);
	                                            }
	                                        }
	                                    }
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	        }
	    }
	}

	function renderUser(obj, parent) {
	    var node = document.createElement("li");
	    var textNode = document.createTextNode(obj.position + "(" + obj.id + ")");
	    node.id = obj.id;
	    node.appendChild(textNode);
	    parent.appendChild(node);
	}

	function addListParentElem(id) {
	    document.getElementById(id).innerHTML += "<ul id=\"" + id + "UL\"></ul>";
	}

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
/* 2 */
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