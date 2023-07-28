import { TestBed } from '@angular/core/testing';

import { GetcitiesService } from './getcities.service';

describe('GetcitiesService', () => {
  let service: GetcitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
