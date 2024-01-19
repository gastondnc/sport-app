import { Component } from '@angular/core';

// imports de entorno de desarrollo //
import { Sport } from 'src/app/models/sport.model';
import { SportsService } from 'src/app/services/sports.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  public sportsList: Sport[] = [];

  constructor(private sportsServices: SportsService){
    this.sportsServices.getSportList().subscribe( (sportList) => {
      this.sportsList = sportList
    } );
  }

}









