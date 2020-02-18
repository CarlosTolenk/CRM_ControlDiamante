import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEventsComponent } from './card-events.component';

describe('CardEventsComponent', () => {
  let component: CardEventsComponent;
  let fixture: ComponentFixture<CardEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
