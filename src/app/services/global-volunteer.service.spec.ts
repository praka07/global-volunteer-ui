import { TestBed } from '@angular/core/testing';

import { GlobalVolunteerService } from './global-volunteer.service';

describe('GlobalVolunteerService', () => {
  let service: GlobalVolunteerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalVolunteerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
