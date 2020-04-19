import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

export const Approutes: Routes = [
	{
		path: '',
		component: FullComponent,
		children: [
//--------------------------------------------------------------------------------------------------------------------------------------------
			{ path: 'Usuarios', loadChildren: () => import('./Usuarios/usuarios.module').then(m => m.UsuariosModule) },
			{ path: 'Categorias', loadChildren: () => import('./Categorias/categorias.module').then(m => m.CategoriasModule) },
//--------------------------------------------------------------------------------------------------------------------------------------------

			{ path: '', redirectTo: '/Categorias/Categorias', pathMatch: 'full' },
			{
				path: 'starter',
				loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
			},
			{
				path: 'component',
				loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
			}
		]
	},
	{
		path: '',
		component: BlankComponent,
		children: [
			{
				path: 'authentication',
				loadChildren:
					() => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: '/authentication/404'
	}
];
