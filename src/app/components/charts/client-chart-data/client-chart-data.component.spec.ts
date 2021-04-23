import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientChartDataComponent } from './client-chart-data.component';

describe('ClientChartDataComponent', () => {
  let component: ClientChartDataComponent;
  let fixture: ComponentFixture<ClientChartDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientChartDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientChartDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
