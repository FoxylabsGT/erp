import { Component } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  templateUrl: 'widget-app.component.html'
})
export class WidgetappComponent {
	public config: PerfectScrollbarConfigInterface = {};

	feeds: Object[] = [
		{
			bg: 'bg-light-info',
			icon: 'far fa-bell',
			msg: 'You have 4 pending tasks.',
			time: 'Just Now'
		},
		{
			bg: 'bg-light-success',
			icon: 'ti-server',
			msg: 'New user registered.',
			time: '5 Hours ago'
		},
		{
			bg: 'bg-light-warning',
			icon: 'ti-shopping-cart',
			msg: 'Server #1 overloaded.',
			time: '2 Hours ago'
		},
		{
			bg: 'bg-light-danger',
			icon: 'ti-user',
			msg: 'New order received.',
			time: '31 May'
		},
		{
			bg: 'bg-light-inverse',
			icon: 'far fa-bell',
			msg: 'New user registered.',
			time: '30 May'
		},
		{
			bg: 'bg-light-info',
			icon: 'far fa-bell',
			msg: 'New Version just arrived.',
			time: 'Just Now'
		},
		{
			bg: 'bg-light-danger',
			icon: 'ti-user',
			msg: 'New user registered.',
			time: '30 May'
		}
	];
}
