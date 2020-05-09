import { DatePipe, DecimalPipe } from"@angular/common"

export class Productos {
	id: number;
	id_productos: number;
	titulo: string;
	descripcion: string;
	precio: DecimalPipe;
	img: string;
	estado: number;
	fechahora: DatePipe
}