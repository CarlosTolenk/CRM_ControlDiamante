import {Component, OnInit} from '@angular/core';
import {LotteryService} from '../../services/lottery.service';
import {LecEventsService} from '../../services/lec-post.service';
import {LotteryBase} from '../../models/loterry';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  lotteries: LotteryBase[] = [];
  events: any[] = [];

  constructor(private lotteryService: LotteryService, private lecEventsService: LecEventsService) {
  }

  ngOnInit() {
    this.lotteryService.getLottery().subscribe((lotteries: LotteryBase[]) => {
      this.lotteries = lotteries;
    });
    this.lecEventsService.getAllEvents().subscribe((events) => {
      this.events = events;
    });
  }

  get LotteryNormal() {
    return this.lotteries.filter((lottery) => lottery.tipo === 'normal');
  }

  get LotteryLotto() {
    return this.lotteries.filter((lottery) => lottery.tipo === 'loto');
  }

}
