import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBallLotteryComponent } from './table-ball-lottery.component';

describe('TableBallLotteryComponent', () => {
  let component: TableBallLotteryComponent;
  let fixture: ComponentFixture<TableBallLotteryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBallLotteryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBallLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
