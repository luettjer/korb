import { NbaApi } from "../api";
import fetch from "node-fetch";

export class Players extends NbaApi {

  constructor(additional_headers?: object) {
    super(additional_headers);
  }

  fetchPlayers() {
    return fetch(this.api_url + "v1/" + this.year + "/players.json")
    .then(res => res.json()); 
  }
  
  fetchAllstars(year: number) {
    return fetch(this.api_url + "v1/allstar/" + year + "/AS_roster.json")
    .then(res => res.json());
  }

  fetchPlayerInfo(person_id: string) {
    return fetch(this.api_url + "v1/" + this.year + "/players/" + person_id + "_profile.json")
    .then(res => res.json());
  }

  fetchPlayerGameLog(person_id: string) {
    return fetch(this.api_url + "v1/" + this.year + "/players/" + person_id + "_gamelog.json")
    .then(res => res.json());
  }
  
  // deprecated?
  fetchPlayerUberStats(person_id: string) {
    return fetch(this.api_url + "v1/" + this.year + "/players/" + person_id + "_uber_stats.json")
    .then(res => res.json());
  }
}
