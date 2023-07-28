import { TestBed } from '@angular/core/testing';

import { GetweatherdetailsService } from './getweatherdetails.service';

describe('GetweatherdetailsService', () => {
  let service: GetweatherdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetweatherdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
