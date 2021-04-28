import { TestBed } from '@angular/core/testing';

import { TechnicianaveragereviewService } from './technicianaveragereview.service';

describe('TechnicianaveragereviewService', () => {
  let service: TechnicianaveragereviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicianaveragereviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
