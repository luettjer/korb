import { NbaApi } from "../api";
import fetch from "node-fetch";

export class Teams extends NbaApi {
  constructor(additional_headers?: object) {
    super(additional_headers);
  }

  fetchTeams() {
    return fetch(this.api_url + "v2/" + this.year + "/teams.json", this.headers)
    .then(res => res.json());
  }

  fetchTeamsConfig() {
    return fetch(this.api_url + this.year + "/teams_config.json", this.headers)
    .then(res => res.json());
  }

  fetchTeamsConfigYear(configYear: number) {
    return fetch(this.api_url + configYear + "/teams_config.json", this.headers)
    .then(res => res.json());
  }

  fetchTeamSchedule(urlName: string) {
    return fetch(this.api_url + "v1/" + this.year + "/teams/" + urlName + "/schedule.json", this.headers)
    .then(res => res.json());
  }

  fetchTeamScheduleYear(scheduleYear: number, urlName: string) {
    return fetch(this.api_url + "v1/" + scheduleYear + "/teams/" + urlName + "/schedule.json", this.headers)
    .then(res => res.json()); 
  }

  fetchTeamRoster(urlName: string) {
    return fetch(this.api_url + "v1/" + this.year + "/teams/" + urlName + "/roster.json", this.headers)
    .then(res => res.json());
  }

  fetchTeamLeaders(urlName: string) {
    return fetch(this.api_url + "v1/"  + this.year + "/teams/" + urlName + "/leaders.json", this.headers)
    .then(res => res.json());
  } 
}
