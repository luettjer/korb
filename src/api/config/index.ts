const API_URL = "https://data.nba.com/prod/";
const HEADER = {
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "de, en-US",
    "Connection": "keep-alive",
    "Host": "data.nba.com",
    "Referer": "https://stats.nba.com/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:68.0) Gecko/20100101 Firefox/68.0",
};

let today = new Date();
const YEAR = today.getMonth() > 5 ? today.getFullYear() : today.getFullYear() -1;

export { HEADER, API_URL, YEAR };
