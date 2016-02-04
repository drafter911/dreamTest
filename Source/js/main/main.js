var User = require("../modules/user"),
    HttpMethods = require("../modules/httpMethods"),
    httpMethods = new HttpMethods("text"),
    user = new User("text");

httpMethods.getUsers(renderUserList);

function renderUserList(data) {
    var users = data;
    var $el = document.getElementById('main');
    for (var k in users) {

        if (users[k].hasOwnProperty('subordinates')) {
            //var subordinates = filterUsers(users,  users[k].id);
            var subordinates = filterUsers(users,  users[k].subordinates);

            $el.innerHTML += '<li id="' + users[k].id + '">'
                + users[k].position + ' (id: ' + users[k].id + ')' + '<ul>' +
                subordinates + '</ul></li>';
            //$el = document.getElementById(users[k].id);
        }
    }
    console.log(users);
}

function filterUsers(users, idArray) {
    var result = '';

    for (var k = 0; k < users.length; k++) {
        for(var l = 0; l < idArray.length; l++) {
            if (users[k].hasOwnProperty('id')) {
                if (users[k].id === idArray[l]) {
                    result += '<li id="' + users[k].id + '">' + users[k].position + users[k].id + '</li>';
                }
            }
        }
    }
    return result;
}

function createSubusersString(subUsers) {
    var users = subUsers.subordinates;
    var result = '';
    for (var k in users) {
        result += '<li>' + users[k].position + '</li>';
    }
    return '<ul>' + result + '</ul>';
}

//
//document.getElementById("fat").onclick = function () {
//    require(["./Fattyfier"], function (Fattyfier) {
//        var fattyfier = new Fattyfier("text");
//        fattyfier.fat();
//    });
//}