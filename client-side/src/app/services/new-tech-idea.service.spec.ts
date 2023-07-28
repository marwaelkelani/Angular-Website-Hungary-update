import { TestBed } from '@angular/core/testing';

import { NewTechIdeaService } from './new-tech-idea.service';

describe('NewTechIdeaService', () => {
  let service: NewTechIdeaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewTechIdeaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
