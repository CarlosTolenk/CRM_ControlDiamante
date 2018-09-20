import { Component, AfterViewInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

declare var require: any;

const data: any = require('./data.json');

@Component({
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }
  // This is for the dashboar line chart
  // lineChart
  // tslint:disable-next-line:max-line-length
  public lineChartData: Array<any> = [{ data: [0, 5, 6, 8, 25, 9, 8, 24], label: 'Site A' }, { data: [0, 3, 1, 2, 8, 1, 5, 1], label: 'Site B' }];
  public lineChartLabels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8'];
  public lineChartOptions: any = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            color: 'rgba(120, 130, 140, 0.13)'
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            color: 'rgba(120, 130, 140, 0.13)'
          }
        }
      ]
    },
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(6,215,156,0.1)',
      borderColor: 'rgba(6,215,156,1)',
      pointBackgroundColor: 'rgba(6,215,156,1)',
      pointBorderColor: '#fff',

      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(6,215,156,0.5)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(57,139,247,0.2)',
      borderColor: 'rgba(57,139,247,1)',
      pointBackgroundColor: 'rgba(57,139,247,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(57,139,247,0.5)'
    }
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';

  // lineChart
  public lineChartData1: Array<any> = [{ data: [50, 130, 80, 70, 180, 105, 250], label: 'Sales' }];

  public lineChartLabels1: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions1: any = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        }
      ]
    },
    lineTension: 10,
    responsive: true,
    maintainAspectRatio: false,
    elements: { line: { tension: 0 } }
  };
  public lineChartColors1: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(6,215,156,0.0)',
      borderColor: 'rgba(57,139,247,1)',
      pointBackgroundColor: 'rgba(57,139,247,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(57,139,247,0.5)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(57,139,247,0.0)',
      borderColor: 'rgba(57,139,247,1)',
      pointBackgroundColor: 'rgba(57,139,247,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(57,139,247,0.5)'
    }
  ];
  public lineChartLegend1 = false;
  public lineChartType1 = 'line';

  // Doughnut
  public doughnutChartLabels: string[] = ['Tablet', 'Desktop', 'Mobile', 'Other'];
  public doughnutChartOptions: any = {
    borderWidth: 2,
    maintainAspectRatio: false
  };
  public doughnutChartData: number[] = [150, 450, 200, 20];
  public doughnutChartType = 'doughnut';

  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    barThickness: 5
  };

  public barChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  public barChartType = 'bar';
  public barChartLegend = false;

  // tslint:disable-next-line:max-line-length
  public barChartData: any[] = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Iphone 8' }, { data: [28, 48, 40, 19, 86, 27, 90], label: 'Iphone X' },  { data: [18, 45, 25,19, 26, 107, 86], label: 'Iphone 5' },  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Iphone X' }];
  public barChartColors: Array<any> = [{ backgroundColor: '#06d79c' }, { backgroundColor: '#398bf7' }, { backgroundColor: '#A88bf7' }, { backgroundColor: '#c2c40f' }];

  ngAfterViewInit() {}
}
