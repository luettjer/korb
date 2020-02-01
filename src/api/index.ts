import * as config from "./config/";
import * as loki from "lokijs";

export class NbaApi {
  protected storage: loki;
  protected headers: object;
  protected api_url: string; 
  protected year: number;

  constructor() {
    this.headers = config.ApiHeaders;
    this.api_url = config.API_URL;
    this.year = config.YEAR
    this.storage = new loki("nba_data");
  }

}
