import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-ball-lottery',
  templateUrl: './table-ball-lottery.component.html',
  styleUrls: ['./table-ball-lottery.component.css']
})
export class TableBallLotteryComponent implements OnInit {

  @Input()
  number: Number;

  constructor() {
  }

  ngOnInit() {
  }

  get fillNumberByZero() {
    if (this.number <= 9) {
      return `0${this.number}`;
    }
    return this.number;
  }

  get reverse() {

    if (this.number <= 9) {
      const fillNumberOfZero = `0${this.number}`;
      return fillNumberOfZero.split('').reverse().join('');
    }
    const changed = this.number.toString();
    return changed.split('').reverse().join('');
  }

  get inverse() {
    return this.number;
  }

  get jalaJala() {
    let container = [];
    const number = Number(this.number);
    let i = 0;
    do {
      if (i === 0) {
        const nextNumber = this.getNextNumber(number);
        container.push(nextNumber);
      } else {
        const nextNumber = this.getNextNumber(container[i - 1]);
        container.push(nextNumber);
      }
      i++;
    } while (i < 3);

    const jalaJala = this.getSortAndString(container);
    return jalaJala.join(' - ');
  }

  getNextNumber(number): Number {
    if (number >= 75) {
      return (number + 25) - 100;
    } else {
      return number + 25;
    }
  }

  getSortAndString(numbers: Number[]): any[] {
    // @ts-ignore
    const numberOrderBy = numbers.sort((a: Number, b: Number) => a - b);
    return numberOrderBy.map((number) => {
      if (number <= 9) {
        return `0${number}`;
      }
      return number;
    });

  }
}
