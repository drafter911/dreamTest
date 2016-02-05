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
        if (!user.hasOwnProperty('parentId')) {
            renderUser(user, $el);
            addListParentElem(user.id);
            $el = document.getElementById(user.id + 'UL');
            var parentId = user.id;
            for (var j in users) {
                user = users[j];
                if (user.hasOwnProperty('parentId')) {
                    if (user.parentId === parentId) {
                        renderUser(user, $el);
                        addListParentElem(user.id);
                        var $el2 = document.getElementById(user.id + 'UL');
                        var parentId2 = user.id;
                        for (var i in users) {
                            user = users[i];
                            if (user.hasOwnProperty('parentId')) {
                                if (user.parentId === parentId2) {
                                    renderUser(user, $el2);
                                    addListParentElem(user.id);
                                    var $el3 = document.getElementById(user.id + 'UL');
                                    var parentId3 = user.id;
                                    for (var m in users) {
                                        user = users[m];
                                        if (user.hasOwnProperty('parentId')) {
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
    var node = document.createElement('li');
    var textNode = document.createTextNode(obj.position + '(' + obj.id + ')');
    node.id = obj.id;
    node.appendChild(textNode);
    parent.appendChild(node);
}

function addListParentElem(id){
    document.getElementById(id).innerHTML += '<ul id="'+ id + 'UL"></ul>';
}
