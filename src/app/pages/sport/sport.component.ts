import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sport, SportEvents } from 'src/app/models/sport.model';
import { LEAGUES_URL } from 'src/app/utils/sportListUrl.util';

@Component({
  selector: 'sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent {
  public title: string = ''
  public leaguesUrl: string = LEAGUES_URL;
  public leagues: Sport[]  = [];

  constructor(private activateRoute: ActivatedRoute){
    this.activateRoute.params.subscribe( params => {
      this.title = params['strSport']
      this.getLiveSore(params['strSport'])
    } )
  }

  getLiveSore(sport: string) {
    return fetch(this.leaguesUrl + '?s=' + sport)
    .then(resp => resp.json())
    .then(data => {
      this.leagues = data.leagues.filter( (league: Sport) => {
        return league.strSport === sport
      } )
      console.log(this.leagues)
    })
  }

}

