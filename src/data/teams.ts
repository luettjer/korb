import * as path from "path";
import * as low from "lowdb";
import * as LocalStorage from "lowdb/adapters/LocalStorage";
import { Teams } from "../api/teams/";

const teams: Teams = new Teams();
const teamsAdapter = new LocalStorage("db");
const teamsDb = low(teamsAdapter);

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
  fetchAllTeams: function(): Promise<{}> {
      if(this.checkIfUpdate()) {
        teams.fetchTeams().then(async (data) => {
          console.info("#info => fetched teams");

          let teamsConfig = await teams.fetchTeamsConfig()
          console.log(teamsConfig);

          teamsDb.setState({
            teams: data.league.standard,
            lastUpdate: new Date(),
          });
          teamsDb.write();
        });
      } else {
        console.info("#info => teams up to date");
      }

      return teamsDb.getState();
  },
  allTeams: function() {
    let teams = this.fetchAllTeams().then(t => console.log(t));
    return teams;
  },
  team: function(teams: Array<Object>, teamId: string) {
    let team = teams.filter((t: any) => { 
      if(t.teamId === teamId) return t;
    });

    return team[0];
  }
};
