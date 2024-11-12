import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlysealsComponent } from './hourlyseals.component';

describe('HourlysealsComponent', () => {
  let component: HourlysealsComponent;
  let fixture: ComponentFixture<HourlysealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HourlysealsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HourlysealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
