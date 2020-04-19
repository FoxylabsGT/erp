import { Routes } from '@angular/router';
import { CarritoComponent } from './Carrito/carrito.component';
import { categoriasComponent } from './categorias/categorias.component';
import { productosComponent } from './Productos/productos.component';
import { productoComponent } from './producto/producto.component';

export const CategoriasRoutes: Routes = [
	{
		path: '',
		children: [
		  {
			path: 'Carrito',
			component: CarritoComponent,
			data: {
			  title: 'Carrito',
			  urls: [
				{ title: 'Categorias', url: '/Categorias' },
				{ title: 'Carrito' }
			  ]
			}
		  },
		  {
			path: 'Categorias',
			component: categoriasComponent,
			data: {
			  title: 'Categorias',
			  urls: [
				{ title: 'Categorias', url: '/Categorias' },
				{ title: 'Categorias' }
			  ]
			}
		  },
		  {
			path: 'Productos',
			component: productosComponent,
			data: {
			  title: 'Productos',
			  urls: [
				{ title: 'Categorias', url: '/Categorias' },
				{ title: 'Productos' }
			  ]
			}
		  },
		  {
			path: 'Producto',
			component: productoComponent,
			data: {
			  title: 'Producto',
			  urls: [
				{ title: 'Categorias', url: '/Categorias' },
				{ title: 'Producto' }
			  ]
			}
		  }
		]
	  }
];