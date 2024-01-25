import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

// Imports de entorno de desarrollo //
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  private initialFormValue = {
    name: '',
    lastName: '',
    email: ''
  };
  public user: User = this.initialFormValue;
  public isChecked: boolean = false;

  constructor(){
    this.getSessionStorage()
  }


  onSubmit(userForm: NgForm) {
    console.log(this.user)
    console.log(userForm)
    console.log(this.isChecked)
    if(this.isChecked) {
      this.setSessionStorage();
    }else{
      userForm.reset();
      // this.user = this.initialFormValue
      this.deleteStorage()
    }
  }



  setSessionStorage() {
    sessionStorage.setItem('userData', JSON.stringify(this.user));
  }

  getSessionStorage() {
    const storageData = sessionStorage.getItem('userData')
      if(storageData) {
        this.user = JSON.parse(storageData)
        this.isChecked = true
      }
  }

  deleteStorage() {
    sessionStorage.removeItem('userData');
  }






}






