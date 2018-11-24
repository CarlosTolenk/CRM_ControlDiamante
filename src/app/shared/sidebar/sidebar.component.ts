import { Component, AfterViewInit, OnInit, DoCheck } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit, DoCheck {
  showMenu = '';
  showSubMenu = '';
  public user;
  public sidebarnavItems: any[];
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = element;
    } else {
      this.showSubMenu = '0';
    }
  }

  constructor(private modalService: NgbModal, private router: Router, private route: ActivatedRoute) {}
  // End open close
  ngOnInit() {
    this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
  }

  ngDoCheck(){
    this.user = JSON.parse(localStorage.getItem('user'));
  }
}
