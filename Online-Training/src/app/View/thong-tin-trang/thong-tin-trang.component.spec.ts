import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinTrangComponent } from './thong-tin-trang.component';

describe('ThongTinTrangComponent', () => {
  let component: ThongTinTrangComponent;
  let fixture: ComponentFixture<ThongTinTrangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinTrangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinTrangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
