import { TestBed } from '@angular/core/testing';

import { ClientChartService } from './client-chart.service';

describe('ClientChartService', () => {
  let service: ClientChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
