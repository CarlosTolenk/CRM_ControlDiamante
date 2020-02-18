import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ball-lottery',
  templateUrl: './ball-lottery.component.html',
  styleUrls: ['./ball-lottery.component.css']
})
export class BallLotteryComponent implements OnInit {

  @Input()
  number: Number;

  @Input()
  color: string;

  @Input()
  publicationDate: Date;

  constructor() {
  }

  ngOnInit() {
  }

  getNumberFill(number: Number) {
    if (number <= 9) {
      return `0${number}`;
    }
    return number;
  }

}
