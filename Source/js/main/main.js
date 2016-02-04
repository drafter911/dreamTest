var User = require("../modules/user"),
    HttpMethods = require("../modules/httpMethods"),
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
console.dir('vasya');