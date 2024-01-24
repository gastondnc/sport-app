import { Component, Input } from '@angular/core';



@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input('message') message: string = '';
  public isShowModal: boolean = true;


  constructor(){}

}




