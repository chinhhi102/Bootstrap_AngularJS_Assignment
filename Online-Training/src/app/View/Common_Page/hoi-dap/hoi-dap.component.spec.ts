import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoiDapComponent } from './hoi-dap.component';

describe('HoiDapComponent', () => {
  let component: HoiDapComponent;
  let fixture: ComponentFixture<HoiDapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoiDapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoiDapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
