import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianDataComponent } from './technician-data.component';

describe('TechnicianDataComponent', () => {
  let component: TechnicianDataComponent;
  let fixture: ComponentFixture<TechnicianDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicianDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
