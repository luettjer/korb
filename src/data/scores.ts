import * as path from "path";
import * as low from "lowdb";
import * as LocalStorage from "lowdb/adapters/LocalStorage";
import { Scores } from "../api/scores/";

const scores: Scores = new Scores();

export default {
  scores: {},
  getScores: function(date: Date) {
    return scores.fetchScores(date);
  },
};
