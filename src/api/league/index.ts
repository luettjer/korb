import { NbaApi } from "../";
import fetch from "node-fetch";

export class League extends NbaApi {
  constructor(additional_headers?: object) {
    super(additional_headers);
  }

  fetchCoaches() {
    return fetch(this.api_url + "v1/" + this.year + "/coaches.json")
    .then(res => res.json());
  }

  fetchSchedule() {
    return fetch(this.api_url + "v1/" + this.year + "/schedule.json")
    .then(res => res.json());
  } 

  fetchStandings() {
    return fetch(this.api_url + "v1/current/standings_all.json")
    .then(res => res.json());
  }

  fetchMiniStandings() {
    return fetch(this.api_url + "v1/current/standings_all_no_sort_keys.json")
    .then(res => res.json());
  }

  fetchConferenceStandings() {
    return fetch(this.api_url + "v1/current/standings_conference.json")
    .then(res => res.json());
  }
  
  fetchDivisionStandings() {
    return fetch(this.api_url + "v1/current/standings_division.json")
    .then(res => res.json());
  }

  fetchTeamStatsLeader() {
    return fetch(this.api_url + "v1/" + this.year + "/team_stats_rankings.json")
    .then(res => res.json());
  }

  // deprecated?
  fetchLastFiveGameTeamStats() {
    return fetch(this.api_url + "v1/" + this.year + "/team_stats_last_five_games.json")
    .then(res => res.json());
  }
}
