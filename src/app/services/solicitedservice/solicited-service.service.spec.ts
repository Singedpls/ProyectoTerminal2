import { TestBed } from '@angular/core/testing';

import { SolicitedServiceService } from './solicited-service.service';

describe('SolicitedServiceService', () => {
  let service: SolicitedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
