import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallLotteryComponent } from './ball-lottery.component';

describe('BallLotteryComponent', () => {
  let component: BallLotteryComponent;
  let fixture: ComponentFixture<BallLotteryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallLotteryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
