import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// Toastr
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirlineCardComponent } from './components/airline-card/airline-card.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AirlineComponent } from './pages/airline/airline.component';
import { PassengerComponent } from './pages/passenger/passenger.component';
import { PassengerCardComponent } from './components/passenger-card/passenger-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AirlineCardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AirlineComponent,
    PassengerComponent,
    PassengerCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
