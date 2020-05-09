import { NgModule, Pipe, PipeTransform } from '@angular/core';
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
import { FileUploadModule } from 'ng2-file-upload';
import { BrowserModule } from '@angular/platform-browser';
import { NgFallimgModule } from 'ng-fallimg';
import { filter,reduce } from 'rxjs/operators';

@Pipe({ name: 'pairs' })
export class PairsPipe implements PipeTransform {
  transform(array) {
    return array.reduce((result, item, index) => (
      index % 2 ? result : [...result, [item, array[index + 1]]]
    ), []);
  }
}

@NgModule({
  imports:  [    
    CommonModule,
    FileUploadModule,
    RouterModule.forChild(CategoriasRoutes),
    NgFallimgModule.forRoot({
      default: '../../assets/images/gallery/IMGNotFound.jpg',
    })],
declarations: [CarritoComponent, categoriasComponent, productoComponent, productosComponent, PairsPipe]
  })
  export class CategoriasModule {}