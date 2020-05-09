import { DatePipe, Time } from "@angular/common";

export class TaxisUsuariosPedir {
	taxis_usuarios_pedir_id: number;
	taxis_usuarios_pedir_taxis_usuarios_id: number;
	taxis_usuarios_pedir_long: number;
	taxis_usuarios_pedir_lat: number;
	taxis_usuarios_pedir_direccion: string;
	taxis_usuarios_pedir_estado: number;
	taxis_usuarios_pedir_taxis_usuarios_direcciones_id: number;
	taxis_usuarios_pedir_taxis_vehiculos_taxista_id: number;
	taxis_usuarios_pedir_taxis_usuarios_pedir_tipo: number;
	taxis_usuarios_pedir_fecha: DatePipe;
	taxis_usuarios_pedir_hora: Time;
	taxis_usuarios_pedir_taxis_usuarios_pedir_puja_id: number;
	taxis_usuarios_pedir_taxis_cobros_tipos: number;
	taxis_usuarios_pedir_taxis_categoria_id: number;
	taxis_mandados_descripcion: string;
}