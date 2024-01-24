export type Sport = {
  idSport: string;
  idLeague: string;
  strSport: string;
  strLeague: string;
  strFormat: StrFormat;
  strSportThumb: string;
  strSportThumbBW: string;
  strSportIconGreen: string;
  strSportDescription: string;
  strLeagueAlternate: string;
}


export type IdSportList = {
  idSport: string;
  strSport: string;
}

export enum StrFormat {
  EventSport = "EventSport",
  TeamvsTeam = "TeamvsTeam",
}

export enum Endpoint {
  ALL_SPORTS = 'all_sports',
  VIDEOS = 'eventshighlights',
  LIVESORE = 'livescore',
  LEAGUES = 'all_leagues',
  LOOKUP_LEAGUE = 'lookupleague',
  EVENTS_SEASON = 'eventsseason',
  EVENTS_PAST_LEAGUE = 'eventspastleague',

}


export type SportEvent = {
  idLiveScore: string;
  idEvent: string;
  strSport: StrSport;
  idLeague: string;
  strLeague: string;
  idHomeTeam: string;
  idAwayTeam: string;
  strHomeTeam: string;
  strAwayTeam: string;
  strHomeTeamBadge: string;
  strAwayTeamBadge: string;
  strLeagueAlternate: string;
  intHomeScore: string;
  intAwayScore: string;
  strPlayer: null;
  idPlayer: null;
  intEventScore: null;
  intEventScoreTotal: null;
  strStatus: StrStatus;
  strProgress: string;
  strEventTime: string;
  dateEvent: Date;
  updated: Date;
  strResult: string;
  strTime: string;
  strVideo: string;
  strFilename: string;
  strCountry: string;
  strEvent: string;
  strEventAlternate: string;
  strDescriptionEN: string;
  strPoster: string;
  strThumb: string;
  strCity: string;
}

export enum StrSport {
  Soccer = "Soccer",
  MotorSport = "Motorsport",
  ExtremeSport = "Extreme Sport",
  ESports = "ESports",
  Basketball = "Basketball",
  Wintersports = "Wintersports",
  IceHockey = "Ice Hockey",
  AmericanFootball = "American Football",
  Rugby = "Rugby",
  Tennis = "Tennis",
  Cycling = "Cycling",
  Skiing = "Skiing",
}

export enum StrStatus {
  HT = "HT",
  The1H = "1H",
  The2H = "2H",
}

export type SportLenguaje = {
  leagues: League[];
}

export type League = {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate: null | string;
}





export type SportEvents = {
  idEvent:           string;
  idSoccerXML:       null;
  idAPIfootball:     null;
  strEvent:          string;
  strEventAlternate: null;
  strFilename:       string;
  strSport:          StrSport;
  idLeague:          string;
  strLeague:         StrLeague;
  strSeason:         string;
  strDescriptionEN:  string;
  strHomeTeam:       null;
  strAwayTeam:       null;
  intHomeScore:      null;
  intRound:          string;
  intAwayScore:      null;
  intSpectators:     null;
  strOfficial:       null;
  strTimestamp:      Date;
  dateEvent:         Date;
  dateEventLocal:    Date;
  strTime:           string;
  strTimeLocal:      string;
  strTVStation:      null;
  idHomeTeam:        null;
  idAwayTeam:        null;
  intScore:          null;
  intScoreVotes:     null;
  strResult:         string;
  strVenue:          string;
  strCountry:        string;
  strCity:           string;
  strPoster:         string;
  strSquare:         string;
  strFanart:         string;
  strThumb:          string;
  strBanner:         string;
  strMap:            string;
  strTweet1:         string;
  strTweet2:         string;
  strTweet3:         string;
  strVideo:          string;
  strStatus:         string;
  strPostponed:      StrPostponed;
  strLocked:         StrLocked;
}

export enum StrLeague {
  MotoGP = "MotoGP",
}

export enum StrLocked {
  Unlocked = "unlocked",
}

export enum StrPostponed {
  No = "no",
}

export enum StrSport {
  Motorsport = "Motorsport",
}


















