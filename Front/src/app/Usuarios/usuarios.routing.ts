import { Routes } from '@angular/router';

import { PedidosComponent } from './Pedidos/pedidos.component';
import { Pedidos2Component } from './PedidoEstado2/pedidos.component';
import { Pedidos3Component } from './PedidoEstado3/pedidos.component';
import { Pedidos4Component } from './PedidosEstado4/pedidos.component';
import { PedidosHistoricoComponent } from './PedidosHistorico/pedidos.component';
import { PedidosTabsComponent } from './PedidosTabs/pedidostabs.component';

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
		  },
		  {
			path: 'Usuarios2',
			component: Pedidos2Component,
			data: {
			  title: 'pedidos en proceso',
			  urls: [
				{ title: 'Usuarios', url: '/Usuarios' },
				{ title: 'ngComponent' },
				{ title: 'pedidos en proceso' }
			  ]
			}
		  },
		  {
			path: 'Usuarios3',
			component: Pedidos3Component,
			data: {
			  title: 'pedidos entregados a motoristas',
			  urls: [
				{ title: 'Usuarios', url: '/Usuarios' },
				{ title: 'ngComponent' },
				{ title: 'pedidos en entregados a motoristas' }
			  ]
			}
		  },
		  {
			path: 'Usuarios4',
			component: Pedidos4Component,
			data: {
			  title: 'pedidos Finalizados',
			  urls: [
				{ title: 'Usuarios', url: '/Usuarios' },
				{ title: 'ngComponent' },
				{ title: 'pedidos entregados a clientes' }
			  ]
			}
		  },
		  {
			path: 'UsuariosHistorico',
			component: PedidosHistoricoComponent,
			data: {
			  title: 'Historial Pedidos',
			  urls: [
				{ title: 'Usuarios', url: '/Usuarios' },
				{ title: 'ngComponent' },
				{ title: 'pedidos Historico' }
			  ]
			}
		  },
		  {
			path: 'UsuariosPedidos',
			component: PedidosTabsComponent,
			data: {
			  title: 'pedidos',
			  urls: [
				{ title: 'Usuarios', url: '/Usuarios' },
				{ title: 'ngComponent' },
				{ title: 'pedidos Historico' }
			  ]
			}
		  }
		]
	  }
];