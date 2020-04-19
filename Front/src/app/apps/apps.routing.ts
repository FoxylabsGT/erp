import { Routes } from '@angular/router';

import { ChatComponent } from './chat/chat.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { TodoComponent } from './todo/todo.component';
import { ContactComponent } from './contact/contact.component';

export const AppsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'chat',
        component: ChatComponent,
        data: {
          title: '',
          urls: [
            
          ]
        }
      },
      {
        path: 'ticketlist',
        component: TicketlistComponent,
        data: {
          title: 'Ticket List',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Ticket List' }
          ]
        }
      },
      {
        path: 'ticketdetails',
        component: TicketdetailsComponent,
        data: {
          title: 'Ticket Details',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Ticket Details' }
          ]
        }
      },
      {
        path: 'taskboard',
        component: TaskboardComponent,
        data: {
          title: 'Taskboard',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Taskboard' }
          ]
        }
      },
      {
        path: 'fullcalendar',
        component: FullcalendarComponent,
        data: {
          title: 'Full-Calendar',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Full-Calendar' }
          ]
        }
      },
	  {
        path: 'todo',
        component: TodoComponent,
        data: {
          title: 'Todo App',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Todo App' }
          ]
        }
      },
	  {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Contact' }
          ]
        }
      }
    ]
  }
];
