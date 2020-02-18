import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLottoComponent } from './card-lotto.component';

describe('CardLottoComponent', () => {
  let component: CardLottoComponent;
  let fixture: ComponentFixture<CardLottoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLottoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
