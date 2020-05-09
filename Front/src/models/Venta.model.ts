import { DatePipe, DecimalPipe } from "@angular/common";

export class Venta {
	id: number;
	id_usuario: number;
	id_direcciones: number;
	total: DecimalPipe;
	no_transaccion: number;
	estado: number;
	fechahora_entrega:DatePipe;
	fechahora: DatePipe
}