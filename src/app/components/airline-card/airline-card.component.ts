import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-airline-card',
  templateUrl: './airline-card.component.html',
  styleUrls: ['./airline-card.component.css'],
})
export class AirlineCardComponent implements OnInit {
  @Input() airlines: any;

  constructor() {}

  ngOnInit(): void {}
}
