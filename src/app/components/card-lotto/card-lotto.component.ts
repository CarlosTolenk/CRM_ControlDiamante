import {Component, Input, OnInit} from '@angular/core';
import {LotteryLotto, LotteryNormal} from '../../models/loterry';
import * as moment from 'moment';
import Timestamp = firebase.firestore.Timestamp;
import * as firebase from '../../../../node_modules/firebase';

@Component({
  selector: 'app-card-lotto',
  templateUrl: './card-lotto.component.html',
  styleUrls: ['./card-lotto.component.css']
})
export class CardLottoComponent implements OnInit {

  @Input()
  lotteryLotto: LotteryLotto;

  constructor() { }

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
