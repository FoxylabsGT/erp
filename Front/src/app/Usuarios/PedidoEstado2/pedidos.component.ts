import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import {Howl, Howler} from 'howler';
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
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notifier',
  templateUrl: './pedidos.component.html'
})
export class Pedidos2Component implements OnInit {
	actuales: number = 0;
	
  	/**
	 * Notifier service
	 */
	private notifier: NotifierService;

	/**
	 * Constructor
	 *
	 * @param {NotifierService} notifier Notifier service
	 */
	public constructor( notifier: NotifierService, private dataService: DataService, private router: Router ) {
		this.notifier = notifier;
	}

	/**
	 * Show a notification
	 *
	 * @param {string} type    Notification type
	 * @param {string} message Notification message
	 */
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

	/**
	 * Hide oldest notification
	 */
	public hideOldestNotification(): void {
		this.notifier.hideOldest();
	}

	/**
	 * Hide newest notification
	 */
	public hideNewestNotification(): void {
		this.notifier.hideNewest();
	}

	/**
	 * Hide all notifications at once
	 */
	public hideAllNotifications(): void {
		this.notifier.hideAll();
	}

	/**
	 * Show a specific notification (with a custom notification ID)
	 *
	 * @param {string} type    Notification type
	 * @param {string} message Notification message
	 * @param {string} id      Notification ID
	 */
	public showSpecificNotification( type: string, message: string, id: string ): void {
		this.notifier.show( {
			id,
			message,
			type
		} );
	}

	/**
	 * Hide a specific notification (by a given notification ID)
	 *
	 * @param {string} id Notification ID
	 */
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

			
			this.router.navigate([`/Usuarios/Usuarios2`]);
		})
	}

	CambioEstadoto3(){
		const taxis_usuarios_pedir_id = localStorage.getItem('taxis_usuarios_pedir_id') as string;
			const value = localStorage.getItem('UsuarioID') as string;
		return this.dataService.updatePedidoEstadoto3(Number(JSON.parse(taxis_usuarios_pedir_id)))
		.subscribe(data => {
			this.actuales = this.actuales - 1;
			this.dataService.getData3(Number(JSON.parse(value)))
			.subscribe(data => {
			this.PedidosProcesando = [];
			this.PedidosProcesando = data;
			this.ObtenerPedidosProcesando(Number(JSON.parse(value)))
			const DireccionID = localStorage.getItem('DireccionID') as string;
			this.ObtenerFilas(Number(JSON.parse(DireccionID)));
			})
			
			this.router.navigate([`/Usuarios/Usuarios2`]);
		})
		
	}
	getItems(data){
		localStorage.setItem('taxis_usuarios_pedir_id', data.taxis_usuarios_pedir_id)
		
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

	  currentJustify = 'start';

  currentOrientation = 'horizontal';
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
  ngOnInit(){
	
	const MandadoID = localStorage.getItem('taxisUsuariosPedirID') as string;
	const DireccionID = localStorage.getItem('DireccionID') as string;
	const value = localStorage.getItem('UsuarioID') as string;
	this.grabarDireccionID(Number(JSON.parse(value)));
		this.ObtenerPedidosProcesando(Number(JSON.parse(value)))
		this.ObtnerPorDireccionID(Number(JSON.parse(DireccionID)));
		this.ObtenerMandado(Number(JSON.parse(MandadoID)));
		this.dataService.getData3(Number(JSON.parse(value)))
		.subscribe(data => {
		this.PedidosProcesando = [];
		this.PedidosProcesando = data;
		this.ObtenerPedidosProcesando(Number(JSON.parse(value)))
		const DireccionID = localStorage.getItem('DireccionID') as string;
		this.ObtenerFilas(Number(JSON.parse(DireccionID)));
		})
	this.ObtenerFilas(Number(JSON.parse(DireccionID)));
		
  }

}
