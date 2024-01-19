import { Endpoint } from "../models/sport.model"

const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/60130162/'
export const ALL_SPORTS_URL = `${BASE_URL}${Endpoint.ALL_SPORTS}.php`;
export const HIGHLIGHTS_URL = `${BASE_URL}${Endpoint.VIDEOS}.php`;
