function HttpMethods() {
}

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