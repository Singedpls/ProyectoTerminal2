import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicledepartureComponent } from './vehicledeparture.component';

describe('VehicledepartureComponent', () => {
  let component: VehicledepartureComponent;
  let fixture: ComponentFixture<VehicledepartureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicledepartureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicledepartureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
