import { Component, Input } from '@angular/core';
import { Sport } from 'src/app/models/sport.model';

@Component({
  selector: 'sport-item',
  templateUrl: './sport-item.component.html',
  styleUrls: ['./sport-item.component.css']
})
export class SportItemComponent {
  @Input('item') item: {icon: string; link: string} = {icon: '', link: ''};
  constructor(){}

}
