import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Login } from '../../../models/usuarios.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { json, local } from 'd3';
import { taxisUsuariosAdmin } from '../../../models/taxis_sucursal_usuarios_admin.model';
import { TaxisUsuariosPedir } from '../../../models/taxis_usuarios_pedi.model';
import { SucursalesUsuarios } from '../../../models/SucursalesUsuariosAdmin.model';
import { Mandado } from '../../../models/mandado.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
   Form: FormGroup;
  email: "";
  password: "";
  recoverform: "";

  taxisUsuariosAdmin$: taxisUsuariosAdmin[];
  TaxisUsuariosPedir$: TaxisUsuariosPedir[];


  constructor(private dataService: DataService, private fb: FormBuilder, private router: Router) {
    this.Form = this.fb.group({
      email: [ '', Validators.compose([ Validators.required, Validators.email ]) ],
      password: [ '', Validators.compose([ Validators.required, Validators.minLength(1) ]) ]
    })
  }
  public Log = false

  showMessageSoon() {
    setTimeout(() => {
      this.Log = true
    }, 2000)
  }
  

  grabarDireccionID(id: number){
    return this.dataService.getSucurcaslUsuarioByUSer(id)
    .subscribe(data => {
      localStorage.setItem('DireccionID', data[0].id_direccion.toString())
      this.taxisUsuariosAdmin$ = data;
      setTimeout(() => {      }, 2000)

    } 
      )
  }
  
	ObtnerPorDireccionID(id: number){
		return this.dataService.getUsuarioPedirByAddress(id)
		.subscribe(data => {
		  this.TaxisUsuariosPedir$ = data;
		  localStorage.setItem('taxisUsuariosPedirID', data[0].taxis_usuarios_pedir_id.toString())

		})
    }
    Mandado$: Mandado[];
  ObtenerMandado(id:number){
      this.dataService.getMandados(id)
      .subscribe(data => {
        this.Mandado$ = data;
      });
    }
    
  LoginFunction(email: string, psw: string){
    email = this.Form.controls["email"].value;
    psw = this.Form.controls["password"].value;
    this.showMessageSoon();
    return  this.dataService.Login(email, psw)
    .subscribe(data => {
      localStorage.setItem('UsuarioID', data.taxis_usuarios_id);
      const value = localStorage.getItem('UsuarioID') as string;
      this.grabarDireccionID(Number(JSON.parse(value)));
      const DireccionID = localStorage.getItem('DireccionID') as string;
      this.ObtnerPorDireccionID(Number(JSON.parse(DireccionID)));
      const MandadoID = localStorage.getItem('taxisUsuariosPedirID') as string;
      this.ObtenerMandado(Number(JSON.parse(MandadoID)));
      this.router.navigate([`/Usuarios/UsuariosPedidos`]);
      //localStorage.setItem('DireccionID', JSON.stringify(this.taxisUsuariosAdmin$.id_direccion));
   })
    
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }


  ngOnInit() {
      
  
  }
}
