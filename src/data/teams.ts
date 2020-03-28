import * as path from "path";
import * as low from "lowdb";
import * as LocalStorage from "lowdb/adapters/LocalStorage";
import { Teams } from "../api/teams/";

const teams: Teams = new Teams();
const teamsAdapter = new LocalStorage("db");
const teamsDb = low(teamsAdapter);

let allTeams;

teamsDb.defaults({
  teams: [],
  lastUpdate: false,
});


export default {
  checkIfUpdate: function() {
    let today: Date = new Date();
    let lastUpdate = teamsDb.get("lastUpdate").value();
    lastUpdate = !lastUpdate ? lastUpdate : new Date(lastUpdate);
    //
    // looks like shit
    return !lastUpdate || 
      today.getFullYear() > lastUpdate.getFullYear() || 
      today.getFullYear() === lastUpdate.getFullYear && today.getMonth() > lastUpdate.getMonth();
  },
  fetchAllTeams: function() {
    return new Promise((resolve,reject) => {
      if(this.checkIfUpdate()) {
        teams.fetchTeams().then((data) => {
          console.info("#info => fetched teams");

          teamsDb.setState({
            teams: data.league.standard,
            lastUpdate: new Date(),
          });
          teamsDb.write();
        });
      } else {
        console.info("#info => teams up to date");
      }

      resolve(teamsDb.getState());
    });
  },
  allTeams: function(): Object {
    return teamsDb.getState().teams;
  },
  team: function(teams: Array<Object>, teamId: string) {
    let team = teams.filter((t: any) => { 
      if(t.teamId === teamId) return t;
    });

    return team[0];
  }
};
