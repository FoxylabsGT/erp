import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CalendarModule, CalendarDateFormatter } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';
import { QuillModule } from 'ngx-quill';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { CategoriasRoutes } from './categorias.routing';
import { CarritoComponent } from './Carrito/carrito.component';
import { categoriasComponent } from './categorias/categorias.component';
import { productoComponent } from './producto/producto.component';
import { productosComponent } from './Productos/productos.component';

@NgModule({
  imports:  [RouterModule.forChild(CategoriasRoutes)],
declarations: [CarritoComponent, categoriasComponent, productoComponent, productosComponent]
  })
  export class CategoriasModule {}