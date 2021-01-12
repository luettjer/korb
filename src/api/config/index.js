"use strict";
exports.__esModule = true;
exports.YEAR = exports.API_URL = exports.HEADER = void 0;
var API_URL = "https://data.nba.com/prod/";
exports.API_URL = API_URL;
var HEADER = {
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "de, en-US",
    "Connection": "keep-alive",
    "Host": "data.nba.com",
    "Referer": "https://stats.nba.com/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:68.0) Gecko/20100101 Firefox/68.0"
};
exports.HEADER = HEADER;
var today = new Date();
var YEAR = today.getMonth() > 5 ? today.getFullYear() : today.getFullYear() - 1;
exports.YEAR = YEAR;
