import { DatePipe, DecimalPipe }  from '@angular/common';

export class VentaDetalle {
	id: number;
	id_venta: number;
	id_productos: number;
	cantidad: number;
	precio: DecimalPipe;
	estado: string;
	fechahora: DatePipe

}