"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Scores = void 0;
var api_1 = require("../api");
var node_fetch_1 = require("node-fetch");
var Scores = /** @class */ (function (_super) {
    __extends(Scores, _super);
    function Scores(additional_headers) {
        return _super.call(this, additional_headers) || this;
    }
    Scores.prototype.fetchScores = function (game_date) {
        return node_fetch_1["default"](this.api_url + "v2/" + this.getNbaDate(game_date) + "/scoreboard.json")
            .then(function (res) { return res.json(); });
    };
    return Scores;
}(api_1.NbaApi));
exports.Scores = Scores;
