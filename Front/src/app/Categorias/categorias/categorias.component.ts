import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Categorias } from '../../../models/categorias.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './categorias.component.html'
})
export class categoriasComponent implements OnInit {
 
  categorias$: Categorias[];

  constructor(private dataService: DataService, private router: Router) {}
  
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  getItems(data){
    localStorage.setItem('CategoriaID', data.id)
    
}
  ProductosFunction(id: number){
    
  }

  ngOnInit() {
    return this.dataService.getCategorias() 
      .subscribe(data => {
        this.categorias$ = data;
        console.log(data)
      });
  }
}