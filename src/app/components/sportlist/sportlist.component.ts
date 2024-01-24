import { Component, OnDestroy } from '@angular/core';
import { Subject, Subscription, take, takeUntil } from 'rxjs';

// Imports de entorno de desarrollo //
import { Sport } from 'src/app/models/sport.model';
import { SportsService } from 'src/app/services/sports.service';

@Component({
  selector: 'sportlist',
  templateUrl: './sportlist.component.html',
  styleUrls: ['./sportlist.component.css']
})

export class SportlistComponent implements OnDestroy{
  public sportsList: Sport[] = [];
  private destroy$: Subject<boolean> = new Subject()


  constructor(private sportsServices: SportsService){

    this.sportsServices
      .getSportList()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe( (sportList) => {
        console.log('lalalala', sportList.length)
        this.sportsList = sportList
      } );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.complete()
  }

}
