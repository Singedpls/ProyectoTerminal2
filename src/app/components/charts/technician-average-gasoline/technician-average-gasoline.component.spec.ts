import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianAverageGasolineComponent } from './technician-average-gasoline.component';

describe('TechnicianAverageGasolineComponent', () => {
  let component: TechnicianAverageGasolineComponent;
  let fixture: ComponentFixture<TechnicianAverageGasolineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicianAverageGasolineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianAverageGasolineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
