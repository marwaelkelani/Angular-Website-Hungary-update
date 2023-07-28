import { TestBed } from '@angular/core/testing';

import { GetweatherService } from './getweather.service';

describe('GetweatherService', () => {
  let service: GetweatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetweatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
