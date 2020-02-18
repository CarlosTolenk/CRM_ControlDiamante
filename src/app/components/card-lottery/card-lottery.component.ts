import {Component, Input, OnInit} from '@angular/core';
import {LotteryBase, LotteryLotto, LotteryNormal} from '../../models/loterry';
import * as moment from 'moment';
import Timestamp = firebase.firestore.Timestamp;
import * as firebase from '../../../../node_modules/firebase';

@Component({
  selector: 'app-card-lottery',
  templateUrl: './card-lottery.component.html',
  styleUrls: ['./card-lottery.component.css']
})
export class CardLotteryComponent implements OnInit {


  @Input()
  lotteryNormal: LotteryNormal;

  panelOpenState = false;

  constructor() {
  }

  ngOnInit() {
  }

  getDiff(date: Timestamp) {
    const publicationDate = moment(date.toDate());
    const now = moment();
    const elapsedTime: number = now.diff(publicationDate, 'hours');
    return this.getColorDate(elapsedTime);
  }

  getColorDate(elapsedTime: number): string {
    if (elapsedTime > 24) {
      return 'gray';
    } else if (elapsedTime <= 7 && elapsedTime > 12) {
      return 'cornflowerblue';
    }
    return 'green';
  }

  getPushishedDate(date: Timestamp) {
    const datePubhished = date.toDate();
    return moment(datePubhished).format('DD-MM-YYYY');
  }
}
