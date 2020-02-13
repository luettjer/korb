import { NbaApi } from "../";
import fetch from "node-fetch";

export class Scores extends NbaApi {
  constructor(additional_headers?: object) {
    super(additional_headers);
  }
  
  fetchScores(game_date: Date) {
    return fetch(this.api_url + "v2/" + this.getNbaDate(game_date) + "/scoreboard.json")
    .then(res => res.json());
  }
}
