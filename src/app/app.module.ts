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
import { SportsIconsComponent } from './components/sports-icons/sports-icons.component';


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
    SportsIconsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
