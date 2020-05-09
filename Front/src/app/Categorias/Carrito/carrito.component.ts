import { Component, OnInit } from '@angular/core';
import { Venta } from '../../../models/Venta.model';
import { VentaDetalle } from '../../../models/VentaDetalle.model';
import { DataService } from '../../data.service';

@Component({
  templateUrl: './carrito.component.html'
})
export class CarritoComponent implements OnInit{
  Venta$: Venta[];
  VentaDetalle$: VentaDetalle[];

  constructor(private dataService: DataService) {}
  
  ngOnInit(){
     this.dataService.getVentas() 
    .subscribe(data => this.Venta$ = data);
    this.dataService.getVentasDetalle()
    .subscribe(data2 => this.VentaDetalle$ = data2)
  }
}