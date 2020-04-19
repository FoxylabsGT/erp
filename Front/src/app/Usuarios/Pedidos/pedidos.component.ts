import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-notifier',
  templateUrl: './pedidos.component.html'
})
export class PedidosComponent implements OnInit {

  	/**
	 * Notifier service
	 */
	private notifier: NotifierService;

	/**
	 * Constructor
	 *
	 * @param {NotifierService} notifier Notifier service
	 */
	public constructor( notifier: NotifierService ) {
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
	
  ngOnInit() {
	  
  }

}
