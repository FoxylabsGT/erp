import { Component, OnInit } from '@angular/core';
import * as tableData from './smart-data-table';
import { NotifierService } from 'angular-notifier';
import { Howl, Howler} from 'howler';
import { Mandado } from '../../../models/mandado.model';
import { DataService } from '../../data.service';
import { interval, timer } from 'rxjs';
import { Routes, RouterModule, Router } from '@angular/router';
import { PedidosEstados } from '../../../models/pedidosEstados.model';
import { parse } from 'querystring';
import { TaxisUsuariosPedir } from '../../../models/taxis_usuarios_pedi.model';
import { Filas } from '../../../models/filas.model';
//import { setTimeout } from 'timers';
import { taxisUsuariosAdmin } from '../../../models/taxis_sucursal_usuarios_admin.model';
import { NgbTabChangeEvent, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalDataSource } from 'ng2-smart-table';
import { data } from '../../../../../../package/main/src/app/table/smart-table/smart-data-table';
@Component({
  selector: 'app-ngbd-tabs',
  templateUrl: './pedidostabs.component.html'
})
export class PedidosTabsComponent implements OnInit{  
	
  currentJustify = 'start';

  currentOrientation = 'horizontal';
  actuales: number = 0;
	
  PedidosHistorial : any;
  ObtenerPedidosHistorial(){
	return this.dataService.getHistorial()
	.subscribe(data => {
	this.PedidosHistorial = [];
	  this.PedidosHistorial = data;
	})
  }
  HistorialDireccion: any;
  ObtenerPedidosHistorialpordireccion(id: number){
	return this.dataService.getHistorialPorDireccion(id)
	.subscribe(data => {
	this.HistorialDireccion = [];
	  this.HistorialDireccion = data;
	})
  }
  	source2: LocalDataSource;

	private notifier: NotifierService;

	public constructor( notifier: NotifierService, private dataService: DataService, private router: Router, private modalService: NgbModal ) {
		this.notifier = notifier;
		this.source2 = this.PedidosHistorial // create the source
	}

	settings2 = tableData.settings2;

	public showNotification( type: string, message: string ): void {
		this.notifier.notify( type, message );
		let sound = new Howl({
			src: ["../../../assets/music/notification_bell.mp3"],
			autoplay: true,
			onend: function() {
			  console.log('El sonido de notificacion funciona correctamente');
			}
			  });
		sound.play();
	}

	public hideOldestNotification(): void {
		this.notifier.hideOldest();
	}

	public hideNewestNotification(): void {
		this.notifier.hideNewest();
	}


	public hideAllNotifications(): void {
		this.notifier.hideAll();
	}

	public showSpecificNotification( type: string, message: string, id: string ): void {
		this.notifier.show( {
			id,
			message,
			type
		} );
	}

	public hideSpecificNotification( id: string ): void {
		this.notifier.hide( id );
	}
	status: boolean = false;
	
	clicked = false;
	clickEvent(){
		console.log("El boton se ha bloqueado")
    	this.status = !this.status;       
	}
	  clearStorage(){
		localStorage.clear();
		this.Refresh()
	  }
	  

	Refresh()
	{
		setTimeout(() => {
			window.location.reload();
		}, 1000);
	}
	  Filas$: Filas[];
	Mandado$: Mandado[];
	TaxisUsuariosPedir$: any;
	PedidosEstados$: PedidosEstados[];


	ObtnerPorDireccionID(id: number){
		return this.dataService.getUsuarioPedirByAddress(id)
		.subscribe(data => {
		  this.TaxisUsuariosPedir$ = data;
		  localStorage.setItem('taxisUsuariosPedirID', data[0].taxis_usuarios_pedir_id.toString())
		  console.log("taxisUsuariosPedirID... "+localStorage.getItem('taxisUsuariosPedirID'))
		})
	  }
	ObtenerMandado(id:number){
		this.dataService.getMandados(id)
		.subscribe(data => {
			this.Mandado$ = data;
		});
	}
	PedidoEstado1(id:number){

		let sound = new Howl({
			src: ["../../../assets/music/notification_bell.mp3"],
			onend: function() {
			  console.log('El sonido de notificacion funciona correctamente');
			}
	});
		this.dataService.getUsuarioPedirByAddress(id)
		.subscribe(data => {
		this.TaxisUsuariosPedir$ = data;
		if(JSON.stringify(data.taxis_usuarios_pedir_estado) == "1"){
			console.log(JSON.stringify(data));
			sound.play();
		}else if (data.taxis_usuarios_pedir_estado !== 1){
			console.log("el sonido a parado")
		}
	});
	}

	SoundLoop(){
		
	}

	ObtenerFilas(id:number){

		let sound = new Howl({
			src: ["../../../assets/music/notification_bell.mp3"], 
			loop: false,
			onend: function() {
			  console.log('El sonido de notificacion funciona correctamente');
			}
			  });
		return this.dataService.getFilas(id)
		.subscribe(data => {
			this.Filas$ = data;
			let nuevas = data;
			if( data.filas > 0){
				this.actuales = data.filas;
				sound.play();
			}else if(data.filas = 0){
				sound.loop(false);
				sound.pause();
				sound.stop();
			}
		})
	}

	CambioEstadoto2(){
		const taxis_usuarios_pedir_id = localStorage.getItem('taxis_usuarios_pedir_id') as string;
		
		return this.dataService.updatePedidoEstadoto2(Number(JSON.parse(taxis_usuarios_pedir_id)))
		.subscribe(data => {
			this.actuales = this.actuales = 0;

			
			this.router.navigate([`/Usuarios/UsuariosPedidos`]);
		})
	}

	CambioEstadoto3(){
		const taxis_usuarios_pedir_id = localStorage.getItem('taxis_usuarios_pedir_id') as string;
		
		return this.dataService.updatePedidoEstadoto3(Number(JSON.parse(taxis_usuarios_pedir_id)))
		.subscribe(data => {
			this.actuales = this.actuales - 1;

			
			this.router.navigate([`/Usuarios/UsuariosPedidos`]);
		})
		
	}
	getItems(data){
		localStorage.setItem('taxis_usuarios_pedir_id', data.taxis_usuarios_pedir_id)
		
	}

	Estados: any;
	EstadoDescripcion: any;

	CambiosEstado(id: number){
		localStorage.setItem('taxisusuariospedir', id.toString())
		console.log("id obtenid: "+id)
		return this.dataService.CambiosEstado(id)
		.subscribe(data => {
			this.Estados = data;
			console.log("data equals: "+data)
			this.EstadoDescripcion = this.Estados[0]; 
		})
	}
	

	taxisUsuariosAdmin$: taxisUsuariosAdmin[];
	grabarDireccionID(id: number){
		return this.dataService.getSucurcaslUsuarioByUSer(id)
		.subscribe(data => {
		  localStorage.setItem('DireccionID', data[0].id_direccion.toString())
		  this.taxisUsuariosAdmin$ = data;
			console.log("direccionID "+localStorage.getItem('DireccionID'))
	
		} 
		  )
	  }

  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === 'tab-preventchange2') {
      $event.preventDefault();
    }
  }


  PedidosProcesando : any;
  ObtenerPedidosProcesando(id: number){
    return this.dataService.PedidosEstado2(id)
    .subscribe(data => {
	this.PedidosProcesando = [];
      this.PedidosProcesando = data;
    })
  }

  PedidosEntregados : any;
  ObtenerPedidosEntregados(id: number){
    return this.dataService.PedidosEstado3(id)
    .subscribe(data => {
	this.PedidosEntregados = [];
      this.PedidosEntregados = data;
    })
  }

  PedidosPendientes : any;
  ObtenerPedidosPendientes(id: number){
    return this.dataService.PedidosEstado1(id)
    .subscribe(data => {
	this.PedidosPendientes = [];
      this.PedidosPendientes = data;
    })
  }

  PedidosFinalizados : any;
  ObtenerPedidosFinalizados(id: number){
    return this.dataService.PedidosEstado4(id)
    .subscribe(data => {
	this.PedidosFinalizados = [];
      this.PedidosFinalizados = data;
    })
  }

	//--------------------------------------------------------------------------------------------
	FilasEstado1: any;
	ObtenerFilasEstado1(id: number){
		return this.dataService.GetFilasPorEstado1(id)
		.subscribe(data => {
			this.FilasEstado1 = data;
		})
	}
	FilasEstado2: any;
	ObtenerFilasEstado2(id: number){
		return this.dataService.GetFilasPorEstado2(id)
		.subscribe(data => {
			this.FilasEstado2 = data;
				})
	}
	FilasEstado3: any;
	ObtenerFilasEstado3(id: number){
		return this.dataService.GetFilasPorEstado3(id)
		.subscribe(data => {
			this.FilasEstado3 = data;
		})
	}
	FilasEstado4: any;
	ObtenerFilasEstado4(id: number){
		return this.dataService.GetFilasPorEstado4(id)
		.subscribe(data => {
			this.FilasEstado4 = data;
		})
	}
	//--------------------------------------------------------------------------------------------
	ShowModal(){
		console.log("mostrara un modal")
	}
	openVerticallyCentered(content3) {
		this.modalService.open(content3, { centered: true, size: 'lg' });
	}
	//--------------------------------------------------------------------------------------------

  ngOnInit(){
	
	const MandadoID = localStorage.getItem('taxisUsuariosPedirID') as string;
	const DireccionID = localStorage.getItem('DireccionID') as string;
	const value = localStorage.getItem('UsuarioID') as string;
	this.grabarDireccionID(Number(JSON.parse(value)));
	const estado = localStorage.getItem('id_taxi_pedi') as string;
		//this.ObtenerData(Number(JSON.parse(value)))
		this.ObtenerPedidosProcesando(Number(JSON.parse(value)))
		this.ObtnerPorDireccionID(Number(JSON.parse(DireccionID)));
		this.ObtenerMandado(Number(JSON.parse(MandadoID)));
		this.HistorialDireccion = [];
		this.ObtenerPedidosHistorialpordireccion(Number(JSON.parse(DireccionID)));
		this.dataService.getData(Number(JSON.parse(value)))
		.subscribe(data => {
			const DireccionID = localStorage.getItem('DireccionID') as string;
			this.ObtenerFilas(Number(JSON.parse(DireccionID)));
			this.ObtenerFilasEstado1(Number(JSON.parse(DireccionID)))
			this.ObtenerFilasEstado2(Number(JSON.parse(DireccionID)))
			this.ObtenerFilasEstado3(Number(JSON.parse(DireccionID)))
			this.ObtenerFilasEstado4(Number(JSON.parse(DireccionID)))
		this.PedidosPendientes = [];
		this.PedidosPendientes = data;
		this.ObtenerPedidosPendientes(Number(JSON.parse(value)))
		this.ObtenerFilas(Number(JSON.parse(DireccionID)));
		})
		this.dataService.getData2(Number(JSON.parse(DireccionID)))
		.subscribe(data => {
			const DireccionID = localStorage.getItem('DireccionID') as string;
			this.ObtenerFilas(Number(JSON.parse(DireccionID)));
			this.ObtenerFilasEstado1(Number(JSON.parse(DireccionID)))
			this.ObtenerFilasEstado2(Number(JSON.parse(DireccionID)))
			this.ObtenerFilasEstado3(Number(JSON.parse(DireccionID)))
			this.ObtenerFilasEstado4(Number(JSON.parse(DireccionID)))
		this.PedidosPendientes = [];
		this.PedidosPendientes = data;
		this.ObtenerPedidosPendientes(Number(JSON.parse(value)))
		this.ObtenerFilas(Number(JSON.parse(DireccionID)));
		})
		this.dataService.getData3(Number(JSON.parse(value)))
		.subscribe(data => {
			const DireccionID = localStorage.getItem('DireccionID') as string;
			this.ObtenerFilas(Number(JSON.parse(DireccionID)));
			this.ObtenerFilasEstado1(Number(JSON.parse(DireccionID)))
			this.ObtenerFilasEstado2(Number(JSON.parse(DireccionID)))
			this.ObtenerFilasEstado3(Number(JSON.parse(DireccionID)))
			this.ObtenerFilasEstado4(Number(JSON.parse(DireccionID)))
		this.PedidosProcesando = [];
		this.PedidosProcesando = data;
		this.ObtenerPedidosProcesando(Number(JSON.parse(value)))
		this.ObtenerFilas(Number(JSON.parse(DireccionID)));
		})
		this.dataService.getData4(Number(JSON.parse(value)))
		.subscribe(data => {
			const DireccionID = localStorage.getItem('DireccionID') as string;
			this.ObtenerFilas(Number(JSON.parse(DireccionID)));
			this.ObtenerFilasEstado1(Number(JSON.parse(DireccionID)))
			this.ObtenerFilasEstado2(Number(JSON.parse(DireccionID)))
			this.ObtenerFilasEstado3(Number(JSON.parse(DireccionID)))
			this.ObtenerFilasEstado4(Number(JSON.parse(DireccionID)))
		this.PedidosEntregados = [];
		this.PedidosEntregados = data;
		this.ObtenerPedidosEntregados(Number(JSON.parse(value)))
		this.ObtenerFilas(Number(JSON.parse(DireccionID)));
		})
		this.dataService.getData5(Number(JSON.parse(value)))
		.subscribe(data => {
			const DireccionID = localStorage.getItem('DireccionID') as string;
			this.ObtenerFilas(Number(JSON.parse(DireccionID)));
			this.ObtenerFilasEstado1(Number(JSON.parse(DireccionID)))
			this.ObtenerFilasEstado2(Number(JSON.parse(DireccionID)))
			this.ObtenerFilasEstado3(Number(JSON.parse(DireccionID)))
			this.ObtenerFilasEstado4(Number(JSON.parse(DireccionID)))
		this.PedidosFinalizados = [];
		this.PedidosFinalizados = data;
		this.ObtenerPedidosFinalizados(Number(JSON.parse(value)))
		this.ObtenerFilas(Number(JSON.parse(DireccionID)));
		})
		this.dataService.getDataHistorial(Number(JSON.parse(DireccionID)))
		.subscribe(data => {
			this.HistorialDireccion = [];
			this.ObtenerPedidosHistorialpordireccion(Number(JSON.parse(DireccionID)));
		})
		this.dataService.getDataFilas1(Number(JSON.parse(DireccionID)))
		.subscribe(data => {
			this.ObtenerFilasEstado1(Number(JSON.parse(DireccionID)))
		})
		this.dataService.getDataFilas2(Number(JSON.parse(DireccionID)))
		.subscribe(data => {
			this.ObtenerFilasEstado2(Number(JSON.parse(DireccionID)))
		})
		this.dataService.getDataFilas3(Number(JSON.parse(DireccionID)))
		.subscribe(data => {
			this.ObtenerFilasEstado3(Number(JSON.parse(DireccionID)))
		})
		this.dataService.getDataFilas4(Number(JSON.parse(DireccionID)))
		.subscribe(data => {
			this.ObtenerFilasEstado4(Number(JSON.parse(DireccionID)))
		})
		/*this.dataService.getData(Number(JSON.parse(value)))
		.subscribe(data => {
		this.UsuarioInfo = [];
		this.UsuarioInfo = data;
		this.ObtenerData(Number(JSON.parse(value)))
		const DireccionID = localStorage.getItem('DireccionID') as string;
		this.ObtenerFilas(Number(JSON.parse(DireccionID)));
		this.ObtenerFilasEstado1(Number(JSON.parse(DireccionID)));
		this.ObtenerFilasEstado2(Number(JSON.parse(DireccionID)))
		this.ObtenerFilasEstado3(Number(JSON.parse(DireccionID)))
		this.ObtenerFilasEstado4(Number(JSON.parse(DireccionID)))
		})
		this.dataService.getData2(Number(JSON.parse(DireccionID)))
		.subscribe(data => {
		this.UsuarioInfo = [];
		this.UsuarioInfo = data;
		this.ObtenerData(Number(JSON.parse(value)))
		const DireccionID = localStorage.getItem('DireccionID') as string;
		this.ObtenerFilas(Number(JSON.parse(DireccionID)));
		this.ObtenerFilasEstado1(Number(JSON.parse(DireccionID)));
		this.ObtenerFilasEstado2(Number(JSON.parse(DireccionID)))
		this.ObtenerFilasEstado3(Number(JSON.parse(DireccionID)))
		this.ObtenerFilasEstado4(Number(JSON.parse(DireccionID)))
		})
		this.dataService.getData3(Number(JSON.parse(value)))
		.subscribe(data => {
		this.UsuarioInfo = [];
		this.UsuarioInfo = data;
		this.ObtenerData2(Number(JSON.parse(value)))
		const DireccionID = localStorage.getItem('DireccionID') as string;
		this.ObtenerFilas(Number(JSON.parse(DireccionID)));
		this.ObtenerFilasEstado1(Number(JSON.parse(DireccionID)));
		this.ObtenerFilasEstado2(Number(JSON.parse(DireccionID)))
		this.ObtenerFilasEstado3(Number(JSON.parse(DireccionID)))
		this.ObtenerFilasEstado4(Number(JSON.parse(DireccionID)))
		})*/
	this.ObtenerFilas(Number(JSON.parse(DireccionID)));
	this.ObtenerFilasEstado1(Number(JSON.parse(DireccionID)))
	this.ObtenerFilasEstado2(Number(JSON.parse(DireccionID)))
	this.ObtenerFilasEstado3(Number(JSON.parse(DireccionID)))
	this.ObtenerFilasEstado4(Number(JSON.parse(DireccionID)))
  }
}
