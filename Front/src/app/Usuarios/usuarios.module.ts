import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosRoutes } from './usuarios.routing';
import { PedidosComponent } from './Pedidos/pedidos.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

@NgModule({
  imports: [RouterModule.forChild(UsuariosRoutes), NotifierModule],
  declarations: [PedidosComponent]
  })
  export class UsuariosModule {}