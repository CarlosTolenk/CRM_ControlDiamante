import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-events',
  templateUrl: './card-events.component.html',
  styleUrls: ['./card-events.component.css']
})
export class CardEventsComponent implements OnInit {

  @Input()
  event: any;


  constructor() {
  }

  ngOnInit() {
  }


  getShowDescription() {

  }

  goToDetail(link: string) {
    const win = window.open(link, '_blank');
    win.focus();
  }

}
