import { TestBed } from '@angular/core/testing';

import { GetattractionsService } from './getattractions.service';

describe('GetattractionsService', () => {
  let service: GetattractionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetattractionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
