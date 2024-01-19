import { Component, OnInit } from '@angular/core';

// Imports de entorno de desarrollo //
import { initFlowbite } from 'flowbite'
import { SportsService } from './services/sports.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'sport-app';

  constructor(private sportsServices: SportsService){
    this.sportsServices.setSportList();
  }

  ngOnInit(): void {
    initFlowbite();
  }

}



