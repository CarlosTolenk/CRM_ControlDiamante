import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLotteryComponent } from './card-lottery.component';

describe('CardLotteryComponent', () => {
  let component: CardLotteryComponent;
  let fixture: ComponentFixture<CardLotteryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLotteryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLotteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
