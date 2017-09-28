var Program2 = (function () {
    function Program2() {
        this.adresse = "https://couchdb.itacademy.dk/onsdag/2017";
    }
    Program2.prototype.hentData2 = function (cb) {
        var output;
        fetch(this.adresse)
            .then(function (response) { return response.json(); })
            .then(function (data) {
            cb(data);
        });
        //return output
    };
    Program2.prototype.hentData = function () {
        var _this = this;
        var output;
        fetch(this.adresse)
            .then(function (response) { return response.json(); })
            .then(function (data) {
            data.products.forEach(function (item, index) {
                output = data.products[index];
                _this.showHTML(output);
            });
            //data.products.forEach((value, index, data) => {
            //    console.log(value)
            //    console.log(index)
            //    console.log(data)
            //});
        });
        //return output
    };
    Program2.prototype.showHTML = function (data) {
        console.log(data);
        var colorList = "";
        var starList = "";
        var stars = data.stars;
        var colors = data.colors;
        colors.forEach(function (item, index) {
            colorList += "<div style=\"width: 10px; height: 10px; background-color:" + item + "; border: solid black 1px; display:inline-block;\"></div> " + item + "<br/>";
            //console.log(index); // 0, 1, 2
        });
        colorList += "";
        for (var i = 1; i <= stars; i++) {
            starList += "<i class=\"fa fa-star\" aria-hidden=\"true\"> </i>";
        }
        var html = "<table style=\"border:solid black 1px; width: 600px; padding: 10px 20px 10px 20px;\"><tr><td>\n\t\t\t\t<h2>" + data.title + "</h2>\n<p>" + starList + "</p>\n\t\t\t\t<p>" + data.description + "</p>\n            <p><b>Colors:</b><br/> " + colorList + "</p>\n            <p><b>Price: " + data.price + "</b></p>\n\t\t</td><td style=\"text-align: right;\">\n<img src=\"" + data.image + "\" style=\"width:300px;\" />\n        </td></tr></table><br/>";
        document.getElementById("myDiv").innerHTML += html;
    };
    return Program2;
}());
var myApp2 = new Program2();
myApp2.hentData();
myApp2.hentData2(function (data) { return myApp2.showHTML(data.products[0]); });
//# sourceMappingURL=Torsdag2.js.map