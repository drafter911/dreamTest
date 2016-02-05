var User = require("../modules/user"),
    HttpMethods = require("../modules/httpMethods"),
    httpMethods = new HttpMethods("text"),
    user = new User("text");

httpMethods.getUsers(renderUserList);

function renderUserList(data) {
    var users = data;
    var $el = document.getElementById('main');
    $el.innerHTML = '';
    renderUsers(users, $el);
    addEventToBtns($el.getElementsByTagName('button'));
}

function renderUsers(users, $el) {
    for (var k in users) {
        var user = users[k],
            prop = 'parentId';
        if (!user.hasOwnProperty(prop)) {
            renderUser(user, $el);
            addListParentElem(user.id);
            $el = document.getElementById(user.id + 'UL');
            var parentId = user.id;

            for (var j in users) {
                user = users[j];
                if (user.hasOwnProperty(prop)) {
                    if (user.parentId === parentId) {
                        renderUser(user, $el);
                        addListParentElem(user.id);
                        var $el2 = document.getElementById(user.id + 'UL');
                        var parentId2 = user.id;

                        for (var i in users) {
                            user = users[i];
                            if (user.hasOwnProperty(prop)) {
                                if (user.parentId === parentId2) {
                                    renderUser(user, $el2);
                                    addListParentElem(user.id);
                                    var $el3 = document.getElementById(user.id + 'UL');
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
    var node = document.createElement('li');
    var textNode = document.createTextNode(obj.position + '(' + obj.id + ')');
    var btn = document.createElement('button');
    var btnTextNode = document.createTextNode('Rise');
    btn.appendChild(btnTextNode);
    node.id = obj.id;
    node.appendChild(textNode);
    if (obj.level > 2 && obj.isRise === false) {
        node.appendChild(btn);
    }
    parent.appendChild(node);
}

function addListParentElem(id) {
    document.getElementById(id).innerHTML += '<ul id="' + id + 'UL"></ul>';
}

function addEventToBtns(arr) {
    for(var i = 0; i < arr.length; i++){
        (arr[i]).addEventListener('click', riseUp, false);
    }
}

function riseUp(e){
    var params = JSON.stringify({"id": e.target.parentNode.getAttribute('id')});
    httpMethods.changeUsers(renderUserList, params);
}
