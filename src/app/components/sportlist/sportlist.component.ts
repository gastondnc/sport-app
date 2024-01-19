import { Component } from '@angular/core';

// Imports de entorno de desarrollo //
import { Sport } from 'src/app/models/sport.model';
import { SportsService } from 'src/app/services/sports.service';

@Component({
  selector: 'sportlist',
  templateUrl: './sportlist.component.html',
  styleUrls: ['./sportlist.component.css']
})

export class SportlistComponent {
  public sportsList: Sport[] = [];

  constructor(private sportsServices: SportsService){
    this.sportsServices.getSportList().subscribe( (sportList) => {
      this.sportsList = sportList
    } );
  }

}







