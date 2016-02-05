function HttpMethods() {
}

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