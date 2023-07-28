import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherdetailsComponent } from './weatherdetails.component';

describe('WeatherdetailsComponent', () => {
  let component: WeatherdetailsComponent;
  let fixture: ComponentFixture<WeatherdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherdetailsComponent]
    });
    fixture = TestBed.createComponent(WeatherdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
