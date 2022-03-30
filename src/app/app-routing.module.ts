import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlineComponent } from './pages/airline/airline.component';
import { HomeComponent } from './pages/home/home.component';
import { PassengerComponent } from './pages/passenger/passenger.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'airline',
    component: AirlineComponent,
  },
  {
    path: 'passenger',
    component: PassengerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
