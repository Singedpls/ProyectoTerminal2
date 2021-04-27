import { TestBed } from '@angular/core/testing';

import { TechnicianreportService } from './technicianreport.service';

describe('TechnicianreportService', () => {
  let service: TechnicianreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicianreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
