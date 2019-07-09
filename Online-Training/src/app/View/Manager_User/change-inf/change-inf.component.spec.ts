import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeInfComponent } from './change-inf.component';

describe('ChangeInfComponent', () => {
  let component: ChangeInfComponent;
  let fixture: ComponentFixture<ChangeInfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeInfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
