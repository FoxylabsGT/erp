import { Component, OnInit, ViewChild } from '@angular/core';
import * as tableData from './smart-data-table';
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
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'app-notifier',
  templateUrl: './pedidos.component.html'
})

export class PedidosHistoricoComponent implements OnInit {
	actuales: number = 0;
	//---------------------------------------------------------------------------------------------
	PedidosHistorial : any;
	ObtenerPedidosHistorial(){
	  return this.dataService.getHistorial()
	  .subscribe(data => {
	  this.PedidosHistorial = [];
		this.PedidosHistorial = data;
	  })
	}

	private notifier: NotifierService;

	source2: LocalDataSource;
	

	public constructor( notifier: NotifierService, private dataService: DataService, private router: Router ) {
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
	getItems(data){
		localStorage.setItem('taxis_usuarios_pedir_id', data.taxis_usuarios_pedir_id)
		
	}
	taxisUsuariosAdmin$: taxisUsuariosAdmin[];
	grabarDireccionID(id: number){
		return this.dataService.getSucurcaslUsuarioByUSer(id)
		.subscribe(data => {
		  localStorage.setItem('DireccionID', data[0].id_direccion.toString())
		  this.taxisUsuariosAdmin$ = data;
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

  ngOnInit(){
	
	const MandadoID = localStorage.getItem('taxisUsuariosPedirID') as string;
	const DireccionID = localStorage.getItem('DireccionID') as string;
	const value = localStorage.getItem('UsuarioID') as string;
	this.grabarDireccionID(Number(JSON.parse(value)));
		this.ObtenerPedidosHistorial()
		this.ObtnerPorDireccionID(Number(JSON.parse(DireccionID)));
		this.ObtenerMandado(Number(JSON.parse(MandadoID)));
		//this.dataService.getData4(Number(JSON.parse(value)));
		this.PedidosHistorial = [];
		this.ObtenerPedidosHistorial()
		/*this.ObtenerFilas(Number(JSON.parse(DireccionID)));
		.subscribe(data => {
		this.PedidosHistorial = [];
		this.PedidosHistorial = data;
		this.ObtenerPedidosHistorial()
		const DireccionID = localStorage.getItem('DireccionID') as string;
		this.ObtenerFilas(Number(JSON.parse(DireccionID)));
		})*/
	this.ObtenerFilas(Number(JSON.parse(DireccionID)));
  }

}
