import * as path from "path";
import { Teams } from "../api/teams/";
import * as low from "lowdb";
import * as LocalStorage from "lowdb/adapters/LocalStorage";

const teams: Teams = new Teams();
const teamsAdapter = new LocalStorage("db");
const teamsDb = low(teamsAdapter);

teamsDb.defaults({
  teams: [],
  lastUpdate: false,
});


export default () => {
  let today: Date = new Date();
  let lastUpdate: any = teamsDb.get("lastUpdate").value();

  console.info(lastUpdate);
  lastUpdate = !lastUpdate ? lastUpdate : new Date(lastUpdate);
  // looks like shit
  let doUpdate: boolean = !lastUpdate || 
    today.getFullYear() > lastUpdate.getFullYear() || 
    today.getFullYear() === lastUpdate.getFullYear && today.getMonth() > lastUpdate.getMonth();
  return new Promise((resolve,reject) => {
    if(doUpdate) {
      teams.fetchTeams().then((data) => {
        console.info("#info => fetched teams");

        teamsDb.setState({
          teams: data.league.standard,
          lastUpdate: new Date(),
        });
        teamsDb.write();

        resolve(teamsDb.getState());
      });
    } else {
      console.info("#info => teams up to date");
      resolve(teamsDb.getState());
    }
  });

  return teamsDb.getState();
}
