var Program = (function () {
    function Program() {
        this.adresse = "https://couchdb.itacademy.dk/onsdag/2017";
    }
    Program.prototype.hentData = function () {
        var _this = this;
        var output;
        fetch(this.adresse)
            .then(function (response) { return response.json(); })
            .then(function (data) {
            data.products.forEach(function (item, index) {
                output = data.products[index];
                _this.showHTML(output);
            });
        });
        return output;
    };
    Program.prototype.showHTML = function (data) {
        console.log(data);
        var colorList = "<ul>";
        var starList = "";
        var stars = data.stars;
        var colors = data.colors;
        colors.forEach(function (item, index) {
            colorList += "<li>" + item + "</li>";
            //console.log(index); // 0, 1, 2
        });
        colorList += "</ul>";
        for (var i = 1; i <= stars; i++) {
            starList += "<i class=\"fa fa-star\" aria-hidden=\"true\"> </i>";
        }
        var html = "<table style=\"border:solid black 1px; width: 600px; padding: 10px 20px 10px 20px;\"><tr><td>\n\t\t\t\t<h2>" + data.title + "</h2>\n<p>" + starList + "</p>\n\t\t\t\t<p>" + data.description + "</p>\n            <p><b>Colors:</b><br/> " + colorList + "</p>\n            <p><b>Price: " + data.price + "</b></p>\n\t\t</td><td style=\"text-align: right;\">\n<img src=\"" + data.image + "\" style=\"width:300px;\" />\n        </td></tr></table><br/>";
        document.getElementById("myDiv").innerHTML += html;
    };
    return Program;
}());
// call it here... 
var myApp = new Program();
var data = myApp.hentData();
//# sourceMappingURL=Test1.js.map