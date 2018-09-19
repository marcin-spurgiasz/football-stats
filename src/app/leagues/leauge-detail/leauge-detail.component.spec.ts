import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LeaugeDetailComponent} from './leauge-detail.component';

describe('LeaugeDetailComponent', () => {
  let component: LeaugeDetailComponent;
  let fixture: ComponentFixture<LeaugeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeaugeDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaugeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
