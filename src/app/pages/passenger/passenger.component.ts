import { Component, OnInit } from '@angular/core';
import { AirlineService } from 'src/app/services/airline.service';
import { ToastrService } from 'ngx-toastr';
import { Passenger } from '../../models/Passenger';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css'],
})
export class PassengerComponent implements OnInit {
  passengers: any = [];
  pageNo: number = 0;
  // FORM
  showForm: boolean = false;
  formData: Passenger = {
    name: '',
    trips: 0,
    airline: 0,
  };
  passengerId: string | null = null;
  updateBtn: boolean = false;
  deleteModal: boolean = false;

  constructor(
    private airlineService: AirlineService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllPassengers();
  }

  getAllPassengers = () => {
    this.airlineService.getAllPassengers(this.pageNo).subscribe(
      (passenger: any) => {
        this.passengers = passenger.data;
        console.log(passenger);
      },
      (err) => {
        console.log(err);
        this.toastr.error('Something went wrong');
      }
    );
  };

  nextPage = () => {
    this.pageNo = this.pageNo + 1;
    this.getAllPassengers();
  };

  prevPage = () => {
    this.pageNo = this.pageNo - 1;
    this.getAllPassengers();
  };

  toggleModal = () => {
    this.onReset();
    this.showForm = !this.showForm;
    this.updateBtn = false;
  };

  onSubmit = () => {
    this.airlineService.savePassenger(this.formData).subscribe(
      (result) => {
        console.log(result);
        this.toastr.success('Passenger Created Successfully');
      },
      (err) => {
        console.log(err);
        this.toastr.error('Something went wrong');
      }
    );
  };

  onReset = () => {
    this.formData = {
      name: '',
      trips: 0,
      airline: 0,
    };
  };

  fetchPassengerData = (item: string) => {
    this.airlineService.getpassenger(item).subscribe((passenger: any) => {
      console.log(passenger);
      this.formData.name = passenger.name;
      this.formData.trips = passenger.trips;
      this.formData.airline = passenger.airline[0].id;
    });
    this.passengerId = item;
    this.showForm = true;
    this.updateBtn = true;
  };

  updatePassenger = () => {
    if (this.passengerId !== null) {
      this.airlineService
        .updatePassenger(this.passengerId, this.formData)
        .subscribe(
          (result) => {
            console.log(result);
            this.toastr.success('Passenger updated successfully');
            this.getAllPassengers();
          },
          (err) => {
            this.toastr.error('Something went wrong');
          }
        );
    }
    this.toggleModal();
  };

  toggleDeleteModal = () => {
    this.deleteModal = !this.deleteModal;
  };

  fetchId = (id: string) => {
    this.passengerId = id;
    this.toggleDeleteModal();
  };

  deletePassenger = () => {
    if (this.passengerId !== null) {
      this.airlineService.deletePassenger(this.passengerId).subscribe(
        (result) => {
          console.log(result);
          this.toastr.success('Passenger has been deleted successfully');
          this.getAllPassengers();
          this.toggleDeleteModal();
        },
        (err) => {
          console.log(err);
          this.toastr.error('Something went wrong');
          this.toggleDeleteModal();
        }
      );
    }
  };
}
