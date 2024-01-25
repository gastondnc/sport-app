import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



// Imports de entorno de desarrollo //
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SportsComponent } from './pages/sports/sports.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { LicensingComponent } from './pages/licensing/licensing.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { RoutingModule } from './routing/routing.module';
import { SportlistComponent } from './components/sportlist/sportlist.component';
import { SportItemsComponent } from './components/sport-items/sport-items.component';
import { SportItemComponent } from './components/sport-item/sport-item.component';
import { SliderComponent } from './components/slider/slider.component';
import { SportComponent } from './pages/sport/sport.component';
import { EventsSportComponent } from './pages/events-sport/events-sport.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ModalVideoComponent } from './shared/modal-video/modal-video.component';
import { FormsModule } from '@angular/forms';
import { SearchSportsComponent } from './components/search-sports/search-sports.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SportsComponent,
    AboutComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    LicensingComponent,
    LayoutComponent,
    SportlistComponent,
    SportItemsComponent,
    SportItemComponent,
    SliderComponent,
    SportComponent,
    EventsSportComponent,
    ModalComponent,
    ModalVideoComponent,
    SearchSportsComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
