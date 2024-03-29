import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


// Imports de entorno de desarrollo //
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { HomeComponent } from '../pages/home/home.component';
import { LicensingComponent } from '../pages/licensing/licensing.component';
import { PrivacyPolicyComponent } from '../pages/privacy-policy/privacy-policy.component';
import { SportsComponent } from '../pages/sports/sports.component';
import { SportComponent } from '../pages/sport/sport.component';
import { EventsSportComponent } from '../pages/events-sport/events-sport.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sports',
    component: SportsComponent
  },
  {
    path: 'sports/:strSport',
    component: SportComponent
  },
  {
    path: 'sports/:strSport/:idLeague',
    component: EventsSportComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path:'privacy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'licensing',
    component: LicensingComponent
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class RoutingModule { }




