var Torsdag = (function () {
    function Torsdag() {
        this.adresse = "https://couchdb.itacademy.dk/onsdag/2017";
    }
    Torsdag.prototype.hentData = function () {
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
    Torsdag.prototype.showHTML = function (data) {
        var DHTML = " <div class=\"table-responsive\">\n                <table class=\"table table-hover\">\n                <thead>\n                    <tr>\n                        <th>Imager</th>\n                        <th>Title </th>\n                        <th>Description</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td><img src=\"" + data.image + "\" class=\"img-responsive\" /></td>\n                        <td>" + data.title + "</td>\n                        <td>" + data.description + "</td>\n                    </tr>\n                </tbody>\n                </table>\n            </div>";
        document.getElementById("myDiv").innerHTML += DHTML;
    };
    return Torsdag;
}());
// call it here... 
var app = new Torsdag();
var appData = app.hentData();
//# sourceMappingURL=Torsdag.js.map