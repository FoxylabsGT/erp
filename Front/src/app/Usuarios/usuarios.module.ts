import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosRoutes } from './usuarios.routing';
import { PedidosComponent } from './Pedidos/pedidos.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { NgFallimgModule } from 'ng-fallimg';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Pedidos2Component } from './PedidoEstado2/pedidos.component';
import { Pedidos3Component } from './PedidoEstado3/pedidos.component';
import { Pedidos4Component } from './PedidosEstado4/pedidos.component';
import { PedidosHistoricoComponent } from './PedidosHistorico/pedidos.component';
import { PedidosTabsComponent } from './PedidosTabs/pedidostabs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CustomRenderComponent } from './PedidosTabs/button.component';

@NgModule({
  
  
  imports: [
    CommonModule,
    NgxDatatableModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NotifierModule,
    RouterModule.forChild(UsuariosRoutes), NotifierModule,
    NgFallimgModule.forRoot({
      default: '../../assets/images/gallery/IMGNotFound.jpg',
    })],
  declarations: [PedidosComponent, Pedidos2Component, Pedidos3Component, Pedidos4Component, PedidosHistoricoComponent, PedidosTabsComponent, CustomRenderComponent],
  entryComponents: [CustomRenderComponent]
  })
  export class UsuariosModule {}