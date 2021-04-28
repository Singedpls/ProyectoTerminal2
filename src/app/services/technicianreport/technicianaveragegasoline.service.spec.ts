import { TestBed } from '@angular/core/testing';

import { TechnicianaveragegasolineService } from './technicianaveragegasoline.service';

describe('TechnicianaveragegasolineService', () => {
  let service: TechnicianaveragegasolineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicianaveragegasolineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
