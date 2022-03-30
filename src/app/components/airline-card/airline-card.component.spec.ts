import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineCardComponent } from './airline-card.component';

describe('AirlineCardComponent', () => {
  let component: AirlineCardComponent;
  let fixture: ComponentFixture<AirlineCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlineCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
