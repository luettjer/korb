"use strict";
exports.__esModule = true;
var api_1 = require("./api/");
var teams = new api_1.Teams();
teams.fetchTeams().then(function (r) { return console.log(r); });
//teams.fetchTeamsConfig().then(r => console.log(r));
//teams.fetchTeamsConfigYear(2015).then(r => console.log(2015, r));
//teams.fetchTeamSchedule("wizards").then(r => console.log(r));
//teams.fetchTeamScheduleYear(2015, "wizards").then(r => console.log(2015, r));
//teams.fetchTeamRoster("wizards").then(r => console.log(r));
//teams.fetchTeamLeaders("wizards").then(r => console.log(r));
//let players: Players = new Players();
//players.fetchPlayers().then(r => console.log(r));
//players.fetchAllstars(2018).then(r => console.log(r));
//players.fetchPlayerInfo("203507").then(r => console.log(r.league.standard.stats));
//players.fetchPlayerUberStats("203507").then(r => console.log(r));
//players.fetchPlayerGameLog("203507").then(r => console.log(r.league.standard));
//let league: League = new League();
//league.fetchCoaches().then(r => console.log(r.league.standard));
//league.fetchSchedule().then(r => console.log(r));
//league.fetchStandings().then(r => console.log(r));
//league.fetchMiniStandings().then(r => console.log(r));
//league.fetchConferenceStandings().then(r => console.log(r));
//league.fetchDivisionStandings().then(r => console.log(r));
//league.fetchTeamStatsLeader().then(r => console.log(r));
//league.fetchLastFiveGameTeamStats().then(r => console.log(r));
//let scores: Scores = new Scores();
//scores.fetchScores(new Date("2020-01-01")).then(r => console.log(r));
//let date = new Date("2020-01-01");
//scores.fetchScoresForDate(date).then(r => console.log(r));
//let games: Games = new Games();
//games.fetchMiniBoxscore(new Date("2020-02-04"), "0021900751").then(r => console.log(r));
//games.fetchPlayByPlay(new Date("2020-02-04"), "0021900751", 3).then(r => console.log(r));
//games.fetchLeadTracker(new Date("2020-02-04"), "0021900751", 3).then(r => console.log(r));
// let win: Electron.BrowserWindow | null;
// function createWindow() {
//   win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       nodeIntegration: true
//     }
//   });
//   win.loadFile(
//     path.join(__dirname, "../public/index.html")
//   );
//   win.on("closed", () => {
//     win = null;
//   });
// }
// app.on("ready", () => {
//   createWindow();
// });
// if(process.platform === "darwin") {
//   app.on("window-all-closed", () => {
//     app.quit();
//   });
// }
// app.on("activate", () => {
//   if(win === null)
//     createWindow();
// });
