var Users = require("../modules/user"),
    HttpMethods = require("../modules/httpMethods"),
    httpMethods = new HttpMethods("text"),
    users = new Users("text");

httpMethods.getUsers(renderUserList);

function renderUserList(data) {
    var usersList = data;
    var $el = document.getElementById('main');
    $el.innerHTML = '';
    users.renderUsers(usersList, $el);
    addEventToBtns($el.getElementsByTagName('button'));
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
