import { Endpoint } from "../models/sport.model"

const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/60130162/'
const BASE_V2_URL = 'https://www.thesportsdb.com/api/v2/json/60130162/'
export const ALL_SPORTS_URL = `${BASE_URL}${Endpoint.ALL_SPORTS}.php`;
export const HIGHLIGHTS_URL = `${BASE_URL}${Endpoint.VIDEOS}.php`;
export const LIVESCORE_URL = `${BASE_V2_URL}${Endpoint.LIVESORE}.php`;
export const LEAGUES_URL = `${BASE_URL}${Endpoint.LEAGUES}.php`;
export const LOOKUP_LEAGUE_URL = `${BASE_URL}${Endpoint.LOOKUP_LEAGUE}.php`;
export const EVENTS_LEAGUE_URL = `${BASE_URL}${Endpoint.EVENTS_PAST_LEAGUE}.php`;





// thesportsdb.com/api/v2/json/APIKEY/livescore.php?s=Soccer
// thesportsdb.com/api/v1/json/60130162/all_leagues.php
// thesportsdb.com/api/v1/json/3/lookupleague.php?id=4346
//thesportsdb.com/api/v1/json/60130162/eventsseason.php?id=4393&s=2023
// thesportsdb.com/api/v1/json/60130162/eventspastleague.php?id=4407
