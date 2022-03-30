import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Airline } from 'src/app/models/Airline';
import { AirlineService } from 'src/app/services/airline.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css'],
})
export class AirlineComponent implements OnInit {
  airline_id: string | null = null;
  airline: Airline | null = null;

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private airlineService: AirlineService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.airline_id = params['airline'];
      console.log(this.airline_id);

      // get data
      if (this.airline_id !== null) {
        this.airlineService.getAnAirline(this.airline_id).subscribe(
          (airline: any) => {
            this.airline = airline;
            console.log(this.airline);
          },
          (err) => {
            console.log(err);
            this.toastr.error('Something went wrong');
          }
        );
      }
    });
  }
}
