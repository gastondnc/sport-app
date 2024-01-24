import { Component, Input } from '@angular/core';
import { Sport } from 'src/app/models/sport.model';

@Component({
  selector: 'sport-items',
  templateUrl: './sport-items.component.html',
  styleUrls: ['./sport-items.component.css']
})
export class SportItemsComponent {
  @Input('list') list: {icon: string; link: string}[] = [];
  constructor(){}

}
