import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'modal',
    template: `
	<ng-template #content3 let-modal>
    <div class="modal-header">
        <h4 class="modal-title">Informacion: </h4>
        <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
                <span aria-hidden="true">&times;</span>
            </button>
    </div>
    <div class="modal-body">
        <h4>Descripcion del pedido: </h4>
        <br>
        <h4>Cambios del pedido</h4>
        <p *ngFor="let e of Estados"> estado: {{e.estado}} fechahora cambio: {{e.fechahora}}</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-light" (click)="modal.close('Close click')">Close</button>
    </div>
</ng-template>
    `,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
    constructor(private el: ElementRef) { }
    ngOnInit() {
        // we added this so that when the backdrop is clicked the modal is closed.
        this.el.nativeElement.addEventListener('click', ()=> {
            this.close()
        })
    }
    close() {
        this.el.nativeElement.classList.remove('sshow')
        this.el.nativeElement.classList.add('hhidden')
    }
}