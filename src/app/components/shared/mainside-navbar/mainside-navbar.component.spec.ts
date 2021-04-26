import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsideNavbarComponent } from './mainside-navbar.component';

describe('MainsideNavbarComponent', () => {
  let component: MainsideNavbarComponent;
  let fixture: ComponentFixture<MainsideNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainsideNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainsideNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
