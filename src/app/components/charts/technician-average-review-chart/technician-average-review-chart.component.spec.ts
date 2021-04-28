import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianAverageReviewChartComponent } from './technician-average-review-chart.component';

describe('TechnicianAverageReviewChartComponent', () => {
  let component: TechnicianAverageReviewChartComponent;
  let fixture: ComponentFixture<TechnicianAverageReviewChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicianAverageReviewChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianAverageReviewChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
