import { NbaApi } from "../api";
import fetch from "node-fetch";

export class Games extends NbaApi {
  constructor(additional_headers?: object) {
    super(additional_headers);
  }

  fetchBoxscore(game_date: Date, game_id: string) {
    return fetch(this.api_url + "v1/" + this.getNbaDate(game_date) + "/" + game_id + "_boxscore.json")
    .then(res => res.json());
  }

  fetchMiniBoxscore(game_date: Date, game_id: string) {
    return fetch(this.api_url + "v1/" + this.getNbaDate(game_date) + "/" + game_id + "_mini_boxscore.json")
    .then(res => res.json());
  }

  fetchPlayByPlay(game_date: Date, game_id: string, period: number) {
    return fetch(this.api_url + "v1/" + this.getNbaDate(game_date) + "/" + game_id + "_pbp_" + period + ".json")
    .then(res => res.json());
  } 

  fetchLeadTracker(game_date: Date, game_id: string, period: number) {
    return fetch(this.api_url + "v1/" + this.getNbaDate(game_date) + "/" + game_id + "_lead_tracker_" + period + ".json")
    .then(res => res.json());
  }
}
