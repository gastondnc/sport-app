export type Sport = {
  idSport:         string;
  strSport:        string;
  strFormat:       StrFormat;
  strSportThumb:   string;
  strSportThumbBW: string;
  strSportIconGreen: string;
  strSportDescription: string;
}

export type IdSportList = {
  idSport:         string;
  strSport:        string;
}

export enum StrFormat {
  EventSport = "EventSport",
  TeamvsTeam = "TeamvsTeam",
}

export enum Endpoint {
  ALL_SPORTS = 'all_sports',
  VIDEOS = 'eventshighlights'
}



