import { TestBed } from '@angular/core/testing';

import { CalendarWithCompanyService } from './calendar-with-company.service';

describe('CalendarWithCompanyService', () => {
  let service: CalendarWithCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarWithCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
