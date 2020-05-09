import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';
import { QuillModule } from 'ngx-quill';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgFallimgModule } from 'ng-fallimg';

import { AppsRoutes } from './apps.routing';
import { ChatComponent } from './chat/chat.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { TodoComponent } from './todo/todo.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgbModalModule,
        CalendarModule.forRoot(),
        QuillModule.forRoot(),
        DragulaModule.forRoot(),
        RouterModule.forChild(AppsRoutes),
        PerfectScrollbarModule,
        Ng2SearchPipeModule,
        NgFallimgModule.forRoot({
            default: '../../assets/images/gallery/IMGNotFound.jpg',
          })
    ],
    declarations: [
        ChatComponent,
        TicketlistComponent,
        TicketdetailsComponent,
        TaskboardComponent,
        TodoComponent,
        ContactComponent,
        FullcalendarComponent
    ]
})
export class AppsModule { }
