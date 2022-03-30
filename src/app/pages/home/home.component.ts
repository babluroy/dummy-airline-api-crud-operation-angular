import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/models/Airline';
import { AirlineService } from 'src/app/services/airline.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  airlines: Airline[] = [];
  showForm: boolean = false;
  // Reactive form
  createForm: any;
  submitted: boolean = false;

  constructor(
    private airlineService: AirlineService,
    private toastr: ToastrService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAirlines();
    // Form
    this.createForm = this.formbuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      country: ['', Validators.required],
      logo: ['', Validators.required],
      slogan: ['', Validators.required],
      head_quaters: ['', Validators.required],
      website: ['', Validators.required],
      established: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.createForm !== undefined) {
      this.submitted = true;
      if (this.createForm.invalid) {
        return;
      }
      // save airline
      this.toastr.info('Processing the data...Please wait...');
      this.airlineService
        .saveAirline(this.createForm.value)
        .subscribe((result: any) => {
          if (result) {
            this.router.navigate(['/airline'], {
              queryParams: { airline: result.id },
            });
          } else {
            this.toastr.error('Something went wrong');
          }
        });
    }
  }

  onReset = () => {
    this.submitted = false;
    this.createForm.reset();
  };

  get formRef() {
    return this.createForm.controls;
  }

  getAirlines = () => {
    this.airlineService.getAllAirlines().subscribe(
      (airline: any) => {
        this.airlines = airline.slice(0, 100);
        console.log(airline);
      },
      (err) => {
        console.log(err);
        this.toastr.error('Something went wrong');
      }
    );
  };

  toggleModal = () => {
    this.showForm = !this.showForm;
    this.onReset();
  };
}
