import {app, BrowserWindow} from "electron";
import * as path from "path";
import { Teams } from "./api/teams/";

let api: Teams = new Teams();
api.getTeams().then(r => console.log(r));
api.getTeamsMetaData().then(r => console.log(r));
api.getTeamSchedule("wizards").then(r => console.log(r));
api.getTeamRoster("wizards").then(r => console.log(r));
api.getTeamLeaders("wizards").then(r => console.log(r));
let win: Electron.BrowserWindow | null;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile(path.join(__dirname, "../app/static/index.html"));
  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

if(process.platform === "darwin") {
  app.on("window-all-closed", () => {
    app.quit();
  });
}

app.on("activate", () => {
  if(win === null)
    createWindow();
});
