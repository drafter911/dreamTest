var User = require("../modules/user"),
    HttpMethods = require("../modules/httpMethods"),
    httpMethods = new HttpMethods("text"),
    user = new User("text");

httpMethods.getUsers(renderUserList);

function renderUserList(data) {
    var users = data;
    var $el = document.getElementById('main');
    for (var k in users) {
        //$el.innerHTML = $el.innerHTML + '<li id="'+users[k].id+'">' + users[k].position + '</li>';
        if (users[k].hasOwnProperty('subordinates')) {
            var subordinates = filterUsers(users, users[k].subordinates, users[k].id);

            $el.innerHTML = $el.innerHTML + '<li id="' + users[k].id + '">'
                + users[k].position + ' (id: ' + users[k].id + ')' +
                createSubusersString(filterUsers(users, users[k].subordinates, users[k].id)) + '</li>';
        }
        //else {
        //    $el.innerHTML = $el.innerHTML + '<li id="' + users[k].id + '">'
        //        + users[k].position + ' (id: ' + users[k].id + ')' + '</li>';
        //}
        //console.log(filterUsers(users, users[k].subordinates, users[k].id));
    }
    console.log(users);
}

function filterUsers(users, idArray, id) {
    var result = {
        "subordinates": [],
        "subordinatesNumbers": []
    };

    for (var k in users) {
        if (users[k].hasOwnProperty('parentId')) {
            if (users[k].parentId === id) {
                result.subordinates.push(users[k]);
                result.subordinatesNumbers.push(k);
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