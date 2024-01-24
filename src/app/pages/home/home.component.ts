import { ChangeDetectionStrategy, Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

// imports de entorno de desarrollo //
import { Sport } from 'src/app/models/sport.model';
import { SportsService } from 'src/app/services/sports.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class HomeComponent implements OnDestroy {
  public sportsList: Sport[] = [];
  private suscription$: Subscription;
  public sliderList: string[] = [];
  public iconList: any[] = [];
  constructor(private sportsServices: SportsService){
    this.suscription$ =  this.sportsServices.getSportList().subscribe( (sportList) => {
      console.log(sportList)
      this.sportsList = sportList
      this.setSliderList()
      this.setIconList()
    } );
  }

  ngOnDestroy(): void {
    this.suscription$.unsubscribe()
  }

  setSliderList() {
    this.sliderList = this.sportsList.map( item => item.strSportThumb )
  }

  setIconList() {
    this.iconList = this.sportsList.map( (item: Sport) => {
      return {
        icon : item.strSportIconGreen,
        link: `sports/${item.strSport}`
      }
    } )
  }

}









