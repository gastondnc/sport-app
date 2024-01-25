import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Sport } from 'src/app/models/sport.model';
import { SportsService } from 'src/app/services/sports.service';

@Component({
  selector: 'search-sports',
  templateUrl: './search-sports.component.html',
  styleUrls: ['./search-sports.component.css']
})
export class SearchSportsComponent {
 public sportSearch: Sport[] =  []


  constructor(private sportService: SportsService){}



  onSubmit(inputSearch: NgForm) {
    console.log(inputSearch)
    this.sportService.getSportList().subscribe(sportList => {
      console.log(sportList)

    })
  }

}
