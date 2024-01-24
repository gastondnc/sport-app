import {  Component, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

// Imports de entorno de desarrollo //
import { ActivatedRoute } from '@angular/router';
import { SportEvents } from 'src/app/models/sport.model';
import { ModalVideoComponent } from 'src/app/shared/modal-video/modal-video.component';
import { EVENTS_LEAGUE_URL } from 'src/app/utils/sportListUrl.util';

@Component({
  selector: 'events-sport',
  templateUrl: './events-sport.component.html',
  styleUrls: ['./events-sport.component.css']
})
export class EventsSportComponent{
  @ViewChild('modalVideo') modalVideo: ModalVideoComponent | null = null;
  public title: string = '';
  public eventsLeaguetUrl: string = EVENTS_LEAGUE_URL;
  public eventsLeague: SportEvents[] = [];
  public modalMessage = 'No events available';
  public videoUrl: SafeUrl = '';

  constructor(private activateRoute: ActivatedRoute, private sanitizer: DomSanitizer){
    this.activateRoute.params.subscribe( params => {
      this.getEventsLeague(params['idLeague'])
    } )
  }

  getEventsLeague(idLeague: string) {
    return fetch(this.eventsLeaguetUrl + '?id=' + idLeague)
    .then(resp => resp.json())
    .then(data => {
      this.eventsLeague = data.events
      console.log(this.eventsLeague)
    })
    .catch(err => console.log('ERROR',err))
  }

  getThumbUrl(strThumb: string): string {
    if(!strThumb) {
      return '../../../assets/imgs/defaulImg.jpg'
    }
    else{
      return strThumb
    }
  }

  openVideo(urlVideo: string) {
    console.log(urlVideo.replace('watch?v=', 'embed/'))
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(urlVideo.replace('watch?v=', 'embed/'))
    this.modalVideo?.open(this.videoUrl)
  }

  //"https://www.youtube.com/watch?v=R3o0U24hqbE"

}






