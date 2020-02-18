import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import {PayPalPaymentsService} from '../../services/paypal-payments';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

export interface result {
  count: number;
  data: Array<Payment>;
  page_num: number;
  page_size: number;
}


export interface Payment {
  number: string;
  suscription: string;
  cedula: string;
  movil: string;
  sku: Date;
  isActive: boolean;
  _id: string,
  amount: number;
  identificacion: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit, AfterViewInit {

  public history: Array<result>;
  public selectedVal: string;
  displayedColumns: string[] = ['index', 'client', 'cedula', 'movil', 'identificacion', 'suscription', 'amount', 'date', 'sku', 'isActive'];
  dataSource: MatTableDataSource<result>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private _paypalServices: PayPalPaymentsService) {
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);


  }

  ngOnInit() {
    this.selectedVal = '1';
    this.getDataReq().then(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public onValChange(val: string) {
    this.selectedVal = val;
    this._paypalServices.getPaymentWhere(this.selectedVal.toString())
      .subscribe((data: any) => {
        this.history = data.data;
        console.log(this.history);
        this.dataSource.data = this.history;


      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getDataReq() {
    console.log('Entrnado  a la promesa');
    return new Promise((resolve, reject) => {
      this._paypalServices.getPaymentWhere(this.selectedVal.toString())
        .subscribe((data: any) => {
          this.history = data.data;
          console.log(this.history);
          this.dataSource = new MatTableDataSource(this.history);
          resolve();
        });
    });
  }

  onUpdateStatus(status, id) {
    let statusChange = !status;
    console.log(statusChange);
    console.log(id);
    this._paypalServices.putPaymentStatus(statusChange, id)
      .subscribe((data: any) => {
        if (data) {
          this._paypalServices.getPaymentWhere(this.selectedVal.toString())
            .subscribe((data: any) => {
              this.history = data.data;
              console.log(this.history);
              this.dataSource.data = this.history;
            });
        }
      });
  }


}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}



