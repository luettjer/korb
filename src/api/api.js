"use strict";
exports.__esModule = true;
exports.NbaApi = void 0;
var config = require("./config/");
var NbaApi = /** @class */ (function () {
    function NbaApi(additional_headers) {
        this.headers = config.HEADER;
        this.api_url = config.API_URL;
        this.year = config.YEAR;
        if (additional_headers) {
            this.headers = Object.assign(this.headers, additional_headers);
        }
    }
    NbaApi.prototype.getNbaDate = function (date) {
        var month = date.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        var day = date.getDate();
        day = day < 10 ? '0' + day : day;
        return date.getFullYear().toString() + month + day;
    };
    return NbaApi;
}());
exports.NbaApi = NbaApi;
