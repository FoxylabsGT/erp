import { Component, AfterViewInit } from '@angular/core';
import * as c3 from 'c3';

@Component({
  templateUrl: './ticketdetails.component.html'
})
export class TicketdetailsComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    const chart = c3.generate({
      bindto: '#visitor',
      data: {
        columns: [['Open', 4], ['Closed', 2], ['In progress', 2], ['Other', 0]],
        type: 'donut'
      },
      donut: {
        label: {
          show: false
        },
        title: 'Tickets',
        width: 35
      },
      legend: {
        hide: true
      },
      color: {
        pattern: ['#ffb22b', '#398bf7', '#ef5350', '#06d79c']
      }
    });
  }
}
