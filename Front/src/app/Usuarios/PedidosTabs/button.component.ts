import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ViewCell} from 'ng2-smart-table';
import {Router} from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../../data.service';

@Component({
selector: 'button-view',
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
<h6>{{EstadoDescripcion.taxis_mandados_descripcion}}</h6>
	
	<br>
	<h4>Cambios del pedido</h4>
	<p *ngFor="let e of Estados"> estado: {{e.estado}} fechahora cambio: {{e.fechahora}}</p>
</div>
<div class="modal-footer">
	<button type="button" class="btn btn-light" (click)="modal.close('Close click')">Close</button>
</div>
</ng-template>
<a (click)="openVerticallyCentered(content3)">{{renderValue}} para más informacion del pedido haga clic aqui</a>`
})
export class CustomRenderComponent implements ViewCell, OnInit {
renderValue: string;

@Input() value: string | number;
@Input() rowData: any;

constructor(
private router: Router, private modalService: NgbModal, private dataService: DataService
) {

}

ngOnInit() {
this.renderValue = this.value.toString();


}

Estados: any;
EstadoDescripcion: any;

CambiosEstado(id: string){
	localStorage.setItem('taxisusuariospedir', id.toString())
	return this.dataService.CambiosEstado(Number(id))
	.subscribe(data => {
		this.Estados = data;
		console.log("data equals: "+ JSON.stringify(data))
		this.EstadoDescripcion = this.Estados[0]; 
	})
}
onCellClick(event: any) {

}
openVerticallyCentered(content3) {
	(console.log("imprimir modal con info del id: " + this.value))
	this.CambiosEstado(this.value.toString())
	this.modalService.open(content3, { centered: true, size: 'lg' });
}
}

