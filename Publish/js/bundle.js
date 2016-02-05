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
	    $el.innerHTML = "";
	    renderUsers(users, $el);
	    addEventToBtns($el.getElementsByTagName("button"));
	}

	function renderUsers(users, $el) {
	    for (var k in users) {
	        var user = users[k],
	            prop = "parentId";
	        if (!user.hasOwnProperty(prop)) {
	            renderUser(user, $el);
	            addListParentElem(user.id);
	            $el = document.getElementById(user.id + "UL");
	            var parentId = user.id;

	            for (var j in users) {
	                user = users[j];
	                if (user.hasOwnProperty(prop)) {
	                    if (user.parentId === parentId) {
	                        renderUser(user, $el);
	                        addListParentElem(user.id);
	                        var $el2 = document.getElementById(user.id + "UL");
	                        var parentId2 = user.id;

	                        for (var i in users) {
	                            user = users[i];
	                            if (user.hasOwnProperty(prop)) {
	                                if (user.parentId === parentId2) {
	                                    renderUser(user, $el2);
	                                    addListParentElem(user.id);
	                                    var $el3 = document.getElementById(user.id + "UL");
	                                    var parentId3 = user.id;

	                                    for (var m in users) {
	                                        user = users[m];
	                                        if (user.hasOwnProperty(prop)) {
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
	    var btn = document.createElement("button");
	    var btnTextNode = document.createTextNode("Rise");
	    btn.appendChild(btnTextNode);
	    node.id = obj.id;
	    node.appendChild(textNode);
	    if (obj.level > 2 && obj.isRise === false) {
	        node.appendChild(btn);
	    }
	    parent.appendChild(node);
	}

	function addListParentElem(id) {
	    document.getElementById(id).innerHTML += "<ul id=\"" + id + "UL\"></ul>";
	}

	function addEventToBtns(arr) {
	    for (var i = 0; i < arr.length; i++) {
	        arr[i].addEventListener("click", riseUp, false);
	    }
	}

	function riseUp(e) {
	    var params = JSON.stringify({ id: e.target.parentNode.getAttribute("id") });
	    httpMethods.changeUsers(renderUserList, params);
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
	    var xhttp = new XMLHttpRequest();

	    xhttp.open("GET", "/users", true);
	    xhttp.send();
	    xhttp.onreadystatechange = function () {

	        if (xhttp.readyState == 4) {
	            func(JSON.parse(xhttp.responseText));
	        }
	    };
	};

	HttpMethods.prototype.changeUsers = function (func, data) {
	    var xhttp = new XMLHttpRequest();
	    xhttp.open("POST", "/users", true);
	    xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
	    xhttp.send(data);
	    xhttp.onreadystatechange = function () {

	        if (xhttp.readyState == 4) {
	            func(JSON.parse(xhttp.responseText));
	        }
	    };
	};

	module.exports = HttpMethods;

/***/ }
/******/ ]);