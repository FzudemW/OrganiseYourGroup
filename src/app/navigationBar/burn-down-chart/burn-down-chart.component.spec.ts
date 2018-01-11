import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurnDownChartComponent } from './burn-down-chart.component';

describe('BurnDownChartComponent', () => {
  let component: BurnDownChartComponent;
  let fixture: ComponentFixture<BurnDownChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurnDownChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurnDownChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
