import { TestBed } from '@angular/core/testing';

import { PersonActivityService } from './person-activity.service';

describe('PersonActivityService', () => {
  let service: PersonActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});