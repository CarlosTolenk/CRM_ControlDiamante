import {Component, Input, OnInit} from '@angular/core';
import {element} from 'protractor';

@Component({
  selector: 'app-table-ball-lottery',
  templateUrl: './table-ball-lottery.component.html',
  styleUrls: ['./table-ball-lottery.component.css']
})
export class TableBallLotteryComponent implements OnInit {

  @Input()
  number: Number;

  public tableNumber: number[][];

  constructor() {
  }

  ngOnInit() {
    this.tableNumber = this.createTable(10, 10);
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
    const position = this.getPositionTable(Number(this.number));
    const positionReverse = [this.getReversePosition(position[0]), this.getReversePosition(position[1])];
    return this.tableNumber[positionReverse[1]][positionReverse[0]];
  }

  get jalaJala() {
    const container = [];
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

  createTable(rows, cols) {
    const tableNumber = [];
    let counter = 0;
    for (let col = 0; col < rows; col++) {
      tableNumber.push([]);
      tableNumber[col].push(new Array(cols));
      for (let row = 0; row < cols; row++) {
        tableNumber[col][row] = counter;
        counter++;
      }
    }
    return tableNumber;
  }


  getPositionTable(number) {
    let position = [];
    this.tableNumber.map((elements, row) => {
      elements.map((element, col) => {
        if (element === number) {
          position.push(col);
          position.push(row);
          return true;
        }
      });
    });
    return position;
  }

  getReversePosition(number: number) {
    if (number >= 5) {
      return number - 5;
    } else {
      return number + 5;
    }
  }

}
