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
exports.Games = void 0;
var api_1 = require("../api");
var node_fetch_1 = require("node-fetch");
var Games = /** @class */ (function (_super) {
    __extends(Games, _super);
    function Games(additional_headers) {
        return _super.call(this, additional_headers) || this;
    }
    Games.prototype.fetchBoxscore = function (game_date, game_id) {
        return node_fetch_1["default"](this.api_url + "v1/" + this.getNbaDate(game_date) + "/" + game_id + "_boxscore.json")
            .then(function (res) { return res.json(); });
    };
    Games.prototype.fetchMiniBoxscore = function (game_date, game_id) {
        return node_fetch_1["default"](this.api_url + "v1/" + this.getNbaDate(game_date) + "/" + game_id + "_mini_boxscore.json")
            .then(function (res) { return res.json(); });
    };
    Games.prototype.fetchPlayByPlay = function (game_date, game_id, period) {
        return node_fetch_1["default"](this.api_url + "v1/" + this.getNbaDate(game_date) + "/" + game_id + "_pbp_" + period + ".json")
            .then(function (res) { return res.json(); });
    };
    Games.prototype.fetchLeadTracker = function (game_date, game_id, period) {
        return node_fetch_1["default"](this.api_url + "v1/" + this.getNbaDate(game_date) + "/" + game_id + "_lead_tracker_" + period + ".json")
            .then(function (res) { return res.json(); });
    };
    return Games;
}(api_1.NbaApi));
exports.Games = Games;
