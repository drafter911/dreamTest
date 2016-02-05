var User = require("../modules/user"),
    HttpMethods = require("../modules/httpMethods"),
    httpMethods = new HttpMethods("text"),
    user = new User("text");

httpMethods.getUsers(renderUserList);

function renderUserList(data) {
    var users = data;
    var $el = document.getElementById('main');
    renderUsers(users, $el);
    console.log(users);
}

function renderUsers(users, $el) {
    for (var k in users) {
        var user = users[k];
        renderUser(user, $el);
        if(user.hasOwnProperty('subordinates')){
            document.getElementById(user.id).innerHTML += '<ul id="'+ user.id + 'UL"'+ '></ul>';
            $el = document.getElementById(user.id + 'UL');
            for(var l in user.subordinates){
                for(var j in users){
                    if(users[j].id == user.subordinates[l]){
                        renderUser(users[j], $el);
                    }
                }
            }
            //renderUsers(users);
        }
    }
}

function renderUser(obj, parent) {
    var node = document.createElement('li');
    var textNode = document.createTextNode(obj.position + '(' + obj.id + ')');
    node.id = obj.id;
    node.appendChild(textNode);
    parent.appendChild(node);
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
