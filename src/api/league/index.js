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
exports.League = void 0;
var api_1 = require("../api");
var node_fetch_1 = require("node-fetch");
var League = /** @class */ (function (_super) {
    __extends(League, _super);
    function League(additional_headers) {
        return _super.call(this, additional_headers) || this;
    }
    // fetches Season information
    League.prototype.fetchToday = function () {
        return node_fetch_1["default"](this.api_url + "v3/today.json")
            .then(function (res) { return res.json(); });
    };
    League.prototype.fetchCoaches = function () {
        return node_fetch_1["default"](this.api_url + "v1/" + this.year + "/coaches.json")
            .then(function (res) { return res.json(); });
    };
    League.prototype.fetchSchedule = function () {
        return node_fetch_1["default"](this.api_url + "v1/" + this.year + "/schedule.json")
            .then(function (res) { return res.json(); });
    };
    League.prototype.fetchStandings = function () {
        return node_fetch_1["default"](this.api_url + "v1/current/standings_all.json")
            .then(function (res) { return res.json(); });
    };
    League.prototype.fetchMiniStandings = function () {
        return node_fetch_1["default"](this.api_url + "v1/current/standings_all_no_sort_keys.json")
            .then(function (res) { return res.json(); });
    };
    League.prototype.fetchConferenceStandings = function () {
        return node_fetch_1["default"](this.api_url + "v1/current/standings_conference.json")
            .then(function (res) { return res.json(); });
    };
    League.prototype.fetchDivisionStandings = function () {
        return node_fetch_1["default"](this.api_url + "v1/current/standings_division.json")
            .then(function (res) { return res.json(); });
    };
    League.prototype.fetchTeamStatsLeader = function () {
        return node_fetch_1["default"](this.api_url + "v1/" + this.year + "/team_stats_rankings.json")
            .then(function (res) { return res.json(); });
    };
    // deprecated?
    League.prototype.fetchLastFiveGameTeamStats = function () {
        return node_fetch_1["default"](this.api_url + "v1/" + this.year + "/team_stats_last_five_games.json")
            .then(function (res) { return res.json(); });
    };
    return League;
}(api_1.NbaApi));
exports.League = League;
