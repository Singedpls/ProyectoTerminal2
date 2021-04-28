import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Techniciandata2comparisonComponent } from './techniciandata2comparison.component';

describe('Techniciandata2comparisonComponent', () => {
  let component: Techniciandata2comparisonComponent;
  let fixture: ComponentFixture<Techniciandata2comparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Techniciandata2comparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Techniciandata2comparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
