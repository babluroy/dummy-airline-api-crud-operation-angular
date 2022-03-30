import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Airline } from '../models/Airline';
import { Passenger } from '../models/Passenger';

@Injectable({
  providedIn: 'root',
})
export class AirlineService {
  private url = 'https://api.instantwebtools.net/v1';

  constructor(private http: HttpClient) {}

  getAllAirlines = () => {
    return this.http.get(`${this.url}/airlines`);
  };

  getAnAirline = (id: string) => {
    return this.http.get(`${this.url}/airlines/${id}`);
  };

  saveAirline = (data: Airline) => {
    return this.http.post(`${this.url}/airlines`, data);
  };

  getAllPassengers = (currentPage: number) => {
    return this.http.get(`${this.url}/passenger?page=${currentPage}&size=10`);
  };

  savePassenger = (data: Passenger) => {
    return this.http.post(`${this.url}/passenger`, data);
  };

  getpassenger = (id: string) => {
    return this.http.get(`${this.url}/passenger/${id}`);
  };

  updatePassenger = (id: string, data: any) => {
    return this.http.put(`${this.url}/passenger/${id}`, data);
  };

  deletePassenger = (id: string) => {
    return this.http.delete(`${this.url}/passenger/${id}`);
  };
}
