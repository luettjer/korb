import * as path from "path";
import * as low from "lowdb";
import * as LocalStorage from "lowdb/adapters/LocalStorage";
import { Scores } from "../api/scores/";
import Teams from "../data/teams";

const scores: Scores = new Scores();
const teams = Teams.allTeams();

export default {
  scores: {},
  getScores: function(date: Date) {
    return new Promise( (resolve, reject) => {
      console.log(teams);
      scores.fetchScores(date).then( (scores) => {
        resolve(scores);
      });
    });
  },
};
