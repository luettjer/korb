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
exports.Players = void 0;
var api_1 = require("../api");
var node_fetch_1 = require("node-fetch");
var Players = /** @class */ (function (_super) {
    __extends(Players, _super);
    function Players(additional_headers) {
        return _super.call(this, additional_headers) || this;
    }
    Players.prototype.fetchPlayers = function () {
        return node_fetch_1["default"](this.api_url + "v1/" + this.year + "/players.json")
            .then(function (res) { return res.json(); });
    };
    Players.prototype.fetchAllstars = function (year) {
        return node_fetch_1["default"](this.api_url + "v1/allstar/" + year + "/AS_roster.json")
            .then(function (res) { return res.json(); });
    };
    Players.prototype.fetchPlayerInfo = function (person_id) {
        return node_fetch_1["default"](this.api_url + "v1/" + this.year + "/players/" + person_id + "_profile.json")
            .then(function (res) { return res.json(); });
    };
    Players.prototype.fetchPlayerGameLog = function (person_id) {
        return node_fetch_1["default"](this.api_url + "v1/" + this.year + "/players/" + person_id + "_gamelog.json")
            .then(function (res) { return res.json(); });
    };
    // deprecated?
    Players.prototype.fetchPlayerUberStats = function (person_id) {
        return node_fetch_1["default"](this.api_url + "v1/" + this.year + "/players/" + person_id + "_uber_stats.json")
            .then(function (res) { return res.json(); });
    };
    return Players;
}(api_1.NbaApi));
exports.Players = Players;
