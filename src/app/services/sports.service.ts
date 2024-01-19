import { Injectable } from '@angular/core';

// imports de entorno de desarrollo //
import { ALL_SPORTS_URL } from '../utils/sportListUrl.util';
import { IdSportList, Sport } from '../models/sport.model';
import { ID_SPORT_LIST } from '../utils/idSportList.utli';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SportsService {
  private sportsUrl: string = ALL_SPORTS_URL;
  private idSportList: IdSportList[] = ID_SPORT_LIST;
  private sportList: Sport[] = [];
  public sportList$: BehaviorSubject<Sport[]> = new BehaviorSubject<Sport[]>(this.sportList);

  constructor() {}

  public getSportList(): Observable<Sport[]>{
    return this.sportList$.asObservable()
  }

  public setSportList() {
    fetch(this.sportsUrl)
    .then(resp => resp.json())
    .then(data => {
      this.sportList = data.sports.filter( (sport: Sport) => {
        return this.idSportList.some( selected => selected.idSport === sport.idSport );
      } )
      this.sportList$.next(this.sportList);
      console.log(this.sportList);
    })
  }

}












