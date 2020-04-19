import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ticket } from './ticket';

@Component({
    templateUrl: './ticketlist.component.html'
})
export class TicketlistComponent implements OnInit {

    tickets: Ticket[] = new Array();

    tickt: FormGroup;

    constructor(private modalService: NgbModal, private fb: FormBuilder) { }

    searchText: any;

    open(content) {
        this.modalService.open(content, { size: 'sm', centered: true });
    }

    ngOnInit() {

        this.tickt = this.fb.group({
            id: ['', [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
            creator: ['', Validators.required],
            title: ['', Validators.required],
            assignee: ['', Validators.required],
            status: ['', Validators.required],
            product: ['', Validators.required],
            date: ['', Validators.required]
        });

        this.tickt.valueChanges.subscribe((d: any) => {
            this.logValidationErrors(this.tickt);
        });

        this.tickets = [
            {
                id: 77,
                creator: 'Eric Pratt',
                title: 'Elegant Theme Side Menu Open OnClick',
                assignee: 'Alice Bohr',
                status: 'In Progress',
                labelbg: 'warning',
                product: 'Elegant Admin',
                date: '2018-05-01'
            },
            {
                id: 78,
                creator: 'Steve',
                title: 'Xtreme theme dropdown issue',
                assignee: 'Jonathan',
                status: 'Open',
                labelbg: 'success',
                product: 'Xtreme Admin',
                date: '2018-05-03'
            },
            {
                id: 79,
                creator: 'Mark',
                title: 'Header issue in material admin',
                assignee: 'Smith J',
                status: 'Closed',
                labelbg: 'danger',
                product: 'Material Admin',
                date: '2018-05-02'
            },
            {
                id: 80,
                creator: 'John Doe',
                title: 'Sidebar issue in Nice admin',
                assignee: 'Vincent',
                status: 'In Progress',
                labelbg: 'warning',
                product: 'Nice Admin',
                date: '2018-05-06'
            },
            {
                id: 81,
                creator: 'Jennifer',
                title: 'Elegant Theme Side Menu Open OnClick',
                assignee: 'Chris Martin',
                status: 'Open',
                labelbg: 'success',
                product: 'Elagant Admin',
                date: '2018-05-04'
            },
            {
                id: 82,
                creator: 'Harper',
                title: 'Header issue in admin pro admin',
                assignee: 'James F',
                status: 'Closed',
                labelbg: 'danger',
                product: 'Adminpro Admin',
                date: '2018-05-03'
            },
            {
                id: 83,
                creator: 'Billy John',
                title: 'Elegant Theme Side Menu Open OnClick',
                assignee: 'Jonathan',
                status: 'In Progress',
                labelbg: 'warning',
                product: 'Elegant Admin',
                date: '2018-05-05'
            },
            {
                id: 84,
                creator: 'Allen Brook',
                title: 'adminpress Theme Side Menu not opening',
                assignee: 'Smith J',
                status: 'Open',
                labelbg: 'success',
                product: 'Adminpress Admin',
                date: '2018-05-04'
            },
            {
                id: 85,
                creator: 'Olivia Hart',
                title: 'Charts not proper in xtreme admin',
                assignee: 'Markus',
                status: 'Closed',
                labelbg: 'danger',
                product: 'Xtreme Admin',
                date: '2018-05-02'
            },
            {
                id: 86,
                creator: 'Luis Orys',
                title: 'Psd not availabel with package',
                assignee: 'Jane',
                status: 'Closed',
                labelbg: 'danger',
                product: 'Material Admin',
                date: '2018-05-03'
            }
        ];
    }

    logValidationErrors(group: FormGroup) {

        Object.keys(group.controls).forEach((key: string) => {
            const ac = group.get(key);

            this.formsErrors[key] = '';
            if (ac && !ac.valid && (ac.touched || ac.dirty)) {
                const message = this.ValidationMessage[key];
                for (const errorKey in ac.errors) {
                    if (errorKey) {
                        this.formsErrors[key] += message[errorKey] + '    ';
                    }
                }

            }
            if (ac instanceof FormGroup) {
                this.logValidationErrors(ac)
            }

        })
    }

    ValidationMessage = {
        creator: { required: 'Required field.' },
        title: { required: 'Required field.' },
        assignee: { required: 'Required field.' },
        status: { required: 'Required field.' },
        product: { required: 'Required field.' },
        date: { required: 'Required field.' },
        id: {
            required: 'Required field.',
            maxlength: 'Max length is 3 digits.',
            pattern: 'Should be numbers only.'
        }
    }

    formsErrors = {}

    addTicket() {
        let tkt: Ticket = new Ticket();
        tkt.id = this.tickt.get('id').value;
        tkt.creator = this.tickt.get('creator').value;
        tkt.title = this.tickt.get('title').value;
        tkt.assignee = this.tickt.get('assignee').value;
        tkt.status = this.tickt.get('status').value;
        tkt.product = this.tickt.get('product').value;
        tkt.date = this.tickt.get('date').value;

        switch (tkt.status) {
            case 'In Progress':
                tkt.labelbg = 'warning';
                break;

            case 'Open':
                tkt.labelbg = 'success';
                break;

            case 'Closed':
                tkt.labelbg = 'danger';
                break;

            default:
        }

        this.tickets.push(tkt);
    }
}
