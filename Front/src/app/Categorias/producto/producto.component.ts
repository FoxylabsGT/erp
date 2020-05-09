import { Component, OnInit } from '@angular/core';
import { Productos } from '../../../models/productos.model';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './producto.component.html'
})
export class productoComponent implements OnInit{
  producto$: any;
  constructor(private dataService: DataService, private router: Router) {}

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  getItems(data){
    console.log(data)
    localStorage.setItem('ProductoID', data.id)
    
}
ObtenerProducto(id: number){
  return      this.dataService.getProducto(id).subscribe(data => {
    this.producto$ = data;
    
 })
}
  ngOnInit() {
    const ProductoID = localStorage.getItem('ProductosID') as string;
    this.ObtenerProducto(Number(JSON.parse(ProductoID)));
    }
}