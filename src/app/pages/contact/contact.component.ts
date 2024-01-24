import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

// Imports de entorno de desarrollo //
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public user: User = {
    name: '',
    lastName: '',
    email: ''
  };


  constructor(){}

  onSubmit(userForm: NgForm) {
    console.log(this.user)
    userForm.reset()
  }



}
