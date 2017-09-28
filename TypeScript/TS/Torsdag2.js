//http://www.sochix.ru/how-to-integrate-webpack-into-visual-studio-2015/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NetStatus;
(function (NetStatus) {
    NetStatus[NetStatus["Offline"] = 0] = "Offline";
    NetStatus[NetStatus["Online"] = 1] = "Online";
})(NetStatus || (NetStatus = {}));
var OfflineSupport = (function () {
    function OfflineSupport() {
        this.netWorkStatus = NetStatus.Online;
    }
    OfflineSupport.prototype.hentDataFraLocalStorage = function () { };
    return OfflineSupport;
}());
var Program2 = (function (_super) {
    __extends(Program2, _super);
    function Program2() {
        var _this = _super.call(this) || this;
        _this.adresse = "https://couchdb.itacademy.dk/onsdag/2017";
        return _this;
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
        var html = "<div class=\"col-sm-6\"><div class=\"row\" style=\"padding: 10px 20px 10px 20px;\"><div class=\"col-sm-6 text-left\">\n\t\t\t\t<h2>" + data.title + "</h2>\n<p>" + starList + "</p>\n\t\t\t\t<p>" + data.description + "</p>\n            <p><b>Colors:</b><br/> " + colorList + "</p>\n            <p><b>Price: " + data.price + "</b></p>\n\t\t</div><div class=\"col-sm-6\">\n<img src=\"" + data.image + "\" class=\"img-responsive\" />\n        </div></div></div>";
        document.getElementById("myDiv").innerHTML += html;
    };
    return Program2;
}(OfflineSupport));
var myApp2 = new Program2();
myApp2.hentData();
myApp2.hentData2(function (data) { return myApp2.showHTML(data.products[0]); });
//myApp2.hentData2((data: dataresponse) => { data.products.filter(data => data.stars >=2) });
//const orders = [
//    {
//        item: "Product1",
//        price: 10
//    },
//    {
//        item: "Product2",
//        price: 20
//    },
//    {
//        item: "Product3",
//        price: 30
//    }
//]
//const priceTotal = orders.map(data = > data.price).reduce()
//# sourceMappingURL=Torsdag2.js.map