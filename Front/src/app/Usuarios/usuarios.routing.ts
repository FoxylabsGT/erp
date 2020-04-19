import { Routes } from '@angular/router';

import { PedidosComponent } from './Pedidos/pedidos.component';

export const UsuariosRoutes: Routes = [
	{
		path: '',
		children: [
		  {
			path: 'Usuarios',
			component: PedidosComponent,
			data: {
			  title: 'pedidos',
			  urls: [
				{ title: 'Usuarios', url: '/Usuarios' },
				{ title: 'ngComponent' },
				{ title: 'pedidos' }
			  ]
			}
		  }
		]
	  }
];