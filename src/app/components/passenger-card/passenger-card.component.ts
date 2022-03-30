import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.css'],
})
export class PassengerCardComponent implements OnInit {
  @Input() passengers: any;
  @Output() updateDataEvent = new EventEmitter<any>();
  @Output() deleteDataEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
