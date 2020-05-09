import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Productos } from '../../../models/productos.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './productos.component.html'
})
export class productosComponent implements OnInit{
  productos$: Productos[];
  constructor(private dataService: DataService, private router: Router) {}
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  getItems(data){
    console.log(data)
    localStorage.setItem('ProductosID', data.id)
    
}
  ObtenerProductos(id: number){
    return this.dataService.ProductosByCategory(id) 
      .subscribe(data => this.productos$ = data);
  }
  ngOnInit() {
    const CategoriaID = localStorage.getItem('CategoriaID') as string;
    this.ObtenerProductos(Number(JSON.parse(CategoriaID)));
  }
}