import { Injectable } from '@angular/core';

// imports de entorno de desarrollo //
import { ALL_SPORTS_URL } from '../utils/sportListUrl.util';
import { IdSportList, Sport } from '../models/sport.model';
import { ID_SPORT_LIST } from '../utils/idSportList.utli';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SportsService {
  private sportsUrl: string = ALL_SPORTS_URL;
  private idSportList: IdSportList[] = ID_SPORT_LIST;
  private sportList: Sport[] = [];
  public sportList$: BehaviorSubject<Sport[]> = new BehaviorSubject<Sport[]>(this.sportList); //Nos da la ultima información emitida
  // public sportList$: Subject<Sport[]> = new Subject<Sport[]>();// Nos da la infomación a partir de la suscripción

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
      console.log(this.sportList);
      this.sportList$.next(this.sportList);
    })
    .catch(err => console.log('ERROR',err));
  }

}












