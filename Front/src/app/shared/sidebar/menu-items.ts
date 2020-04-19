import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
	{
		path: '',
		title: 'Pedidos App',
		icon: 'mdi mdi-dots-horizontal',
		class: 'nav-small-cap',
		extralink: true,
		label: '',
		labelClass: '',
		submenu: []
	},
	{
		path: '',
		title: 'Vistas',
		icon: 'mdi mdi-gauge',
		class: 'has-arrow',
		label: '',
    	labelClass: 'side-badge badge badge-info',
		extralink: false,
		submenu: [
			{
				path: '/Categorias/Categorias',
				title: 'Categorias',
				icon: 'mdi mdi-adjust',
				class: '',
				label: '',
				labelClass: '',
				extralink: false,
				submenu: []
			},
			{
				path: '/Categorias/Productos',
				title: 'Productos',
				icon: 'mdi mdi-adjust',
				class: '',
				label: '',
				labelClass: '',
				extralink: false,
				submenu: []
			},
			{
				path: '/Categorias/Producto',
				title: 'Producto',
				icon: 'mdi mdi-adjust',
				class: '',
				label: '',
				labelClass: '',
				extralink: false,
				submenu: []
			},
			{
				path: '/Categorias/Carrito',
				title: 'Carrito',
				icon: 'mdi mdi-adjust',
				class: '',
				label: '',
				labelClass: '',
				extralink: false,
				submenu: []
			},
			{
				path: '/Usuarios/Usuarios',
				title: 'Pedidos Asignados',
				icon: 'mdi mdi-adjust',
				class: '',
				label: '',
				labelClass: '',
				extralink: false,
				submenu: []
			}
		]
	}
]