import { NbaApi } from "../";
import fetch from "node-fetch";

export class Teams extends NbaApi {
  constructor(additional_headers?: object) {
    super();

    if(additional_headers) {
      this.headers = Object.assign(this.headers, additional_headers);
    }
  }

  getTeams() {
    return fetch(this.api_url + "v2/" + this.year + "/teams.json", this.headers)
    .then(res => res.json());
  }

  getTeamsMetaData() {
    return fetch(this.api_url + this.year + "/teams_config.json", this.headers)
    .then(res => res.json());
  }

  getTeamSchedule(urlName: string) {
    return fetch(this.api_url + "v1/" + this.year + "/teams/" + urlName + "/schedule.json", this.headers)
    .then(res => res.json());
  }

  getTeamRoster(urlName: string) {
    return fetch(this.api_url + "v1/" + this.year + "/teams/" + urlName + "/roster.json", this.headers)
    .then(res => res.json());
  }

  getTeamLeaders(urlName: string) {
    return fetch(this.api_url + "v1/"  + this.year + "/teams/" + urlName + "/leaders.json", this.headers)
    .then(res => res.json());
  }
}
