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
exports.Teams = void 0;
var api_1 = require("../api");
var node_fetch_1 = require("node-fetch");
var Teams = /** @class */ (function (_super) {
    __extends(Teams, _super);
    function Teams(additional_headers) {
        return _super.call(this, additional_headers) || this;
    }
    Teams.prototype.fetchTeams = function () {
        return node_fetch_1["default"](this.api_url + "v2/" + this.year + "/teams.json", this.headers)
            .then(function (res) { return res.json(); });
    };
    Teams.prototype.fetchTeamsConfig = function () {
        return node_fetch_1["default"](this.api_url + this.year + "/teams_config.json", this.headers)
            .then(function (res) { return res.json(); });
    };
    Teams.prototype.fetchTeamsConfigYear = function (configYear) {
        return node_fetch_1["default"](this.api_url + configYear + "/teams_config.json", this.headers)
            .then(function (res) { return res.json(); });
    };
    Teams.prototype.fetchTeamSchedule = function (urlName) {
        return node_fetch_1["default"](this.api_url + "v1/" + this.year + "/teams/" + urlName + "/schedule.json", this.headers)
            .then(function (res) { return res.json(); });
    };
    Teams.prototype.fetchTeamScheduleYear = function (scheduleYear, urlName) {
        return node_fetch_1["default"](this.api_url + "v1/" + scheduleYear + "/teams/" + urlName + "/schedule.json", this.headers)
            .then(function (res) { return res.json(); });
    };
    Teams.prototype.fetchTeamRoster = function (urlName) {
        return node_fetch_1["default"](this.api_url + "v1/" + this.year + "/teams/" + urlName + "/roster.json", this.headers)
            .then(function (res) { return res.json(); });
    };
    Teams.prototype.fetchTeamLeaders = function (urlName) {
        return node_fetch_1["default"](this.api_url + "v1/" + this.year + "/teams/" + urlName + "/leaders.json", this.headers)
            .then(function (res) { return res.json(); });
    };
    return Teams;
}(api_1.NbaApi));
exports.Teams = Teams;
