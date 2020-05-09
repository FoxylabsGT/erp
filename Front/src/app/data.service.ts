import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Categorias } from '../models/categorias.model';
import { Productos } from '../models/productos.model';
import { Login } from '../models/usuarios.model';
import { Venta } from '../models/Venta.model';
import { VentaDetalle } from '../models/VentaDetalle.model';
import { Mandado } from '../models/mandado.model';
import { Subject, Observable } from 'rxjs';
import 'rxjs/Rx';
import { Howl } from 'howler';
import { PedidosEstados } from '../models/pedidosEstados.model';
import { SucursalesUsuarios } from '../models/SucursalesUsuariosAdmin.model';
import { TaxisUsuariosPedir } from '../models/taxis_usuarios_pedi.model';
import { taxisUsuariosAdmin } from '../models/taxis_sucursal_usuarios_admin.model';
import { Filas } from '../models/filas.model';

Request
@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private _http: HttpClient) { }

  getCategoriasURL = 'https://foxylabs-ventas.herokuapp.com/api/categorias/get_all';

  getCategorias() {
    return this._http.get<Categorias[]>(this.getCategoriasURL);
  }

  getProductosURL = 'https://foxylabs-ventas.herokuapp.com/api/productos/get_all';

  getProductos() {
    return this._http.get<Productos[]>(this.getProductosURL);
  }

  getProductoURL = 'https://foxylabs-ventas.herokuapp.com/api/productos/get_';

  getProducto(id: number) {
    
    return this._http.get<any>(this.getProductoURL+id);
  }

  GetUsuariosURL = 'https://mototaxy.herokuapp.com/api/taxis_usuarios/get_all';

  
  GetLoginURL = 'https://mototaxy.herokuapp.com/api/taxis_usuarios/login';
  
  Login(email: string, pass: string) {
    let formulario= {taxis_usuarios_email: email, taxis_usuarios_pass: pass};

    return this._http.post<any>(this.GetLoginURL, formulario)
 };
  getUsuariosUrl = 'https://mototaxy.herokuapp.com/api/taxis_usuarios/get_'

   getVentasURL = 'https://foxylabs-ventas.herokuapp.com/api/venta/get_all';

   getVentasDetalleURL = 'https://foxylabs-ventas.herokuapp.com/api/venta_detalle/get_all';

   getMandadosURL = 'https://mototaxy.herokuapp.com/api/taxis_mandados/pedir_';

   getPedidosEstadoURL = 'https://mototaxy.herokuapp.com/api/taxis_pedir_estados/get_all';

   updatePedidosEstadoURL = 'https://mototaxy.herokuapp.com/api/taxis_usuarios_pedir/update_';

   productosByCategoryURL = 'https://foxylabs-ventas.herokuapp.com/api/categorias_productos/categoria_';
   
  getSucurcaslUsuarioByUSerURL = 'https://mototaxy.herokuapp.com/api/taxis_sucursal_usuarios_admin/user_';

  getUsuarioPedirByAddressURL = 'https://mototaxy.herokuapp.com/api/taxis_usuarios_pedir/address_';

  getMandadosByIDURL = 'https://mototaxy.herokuapp.com/api/taxis_mandados/get_';

  GetFilasURL = 'https://mototaxy.herokuapp.com/api/taxis_usuarios_pedir/count_address_';

  getUsuarios(id:number){
    return this._http.get<any>(this.getUsuariosUrl+id)
  }

  getFilas(id:number){
    return this._http.get<any>(this.GetFilasURL+id)
  }

   ProductosByCategory(id: number) {
    return this._http.get<Productos[]>(this.productosByCategoryURL+id)
 };
 getSucurcaslUsuarioByUSer(id: number) {
  return this._http.get<taxisUsuariosAdmin[]>(this.getSucurcaslUsuarioByUSerURL+id)
};
getUsuarioPedirByAddress(id: number) {
  return this._http.get<any>(this.getUsuarioPedirByAddressURL+id)
};
getMandadosByID(id: number) {
  return this._http.get<Mandado[]>(this.getMandadosByIDURL+id)
};
  getVentas() {
    return this._http.get<Venta[]>(this.getVentasURL);
  }
  getVentasDetalle() {
    return this._http.get<VentaDetalle[]>(this.getVentasDetalleURL);
  }
  getMandados(id: number) {
    return this._http.get<Mandado[]>(this.getMandadosURL+id);
  }
  private onDestroy$ = new Subject<void>();
  ngOnDestroy(): void {
    this.onDestroy$.next();
}
  //--------------------------------------------------------------------------------------------
  updatePedidoEstadoto2(id: number) {
    console.log("el pedido se ha cambiado a estado 2");
    let formulario = {"taxis_usuarios_pedir_estado": 2};
    return  this._http.put<TaxisUsuariosPedir[]>(this.updatePedidosEstadoURL + id, formulario);
    
  }
  updatePedidoEstadoto3(id: number) {
    console.log("el pedido se ha cambiado a estado 3");
    let formulario = {"taxis_usuarios_pedir_estado": 3};
    return  this._http.put<TaxisUsuariosPedir[]>(this.updatePedidosEstadoURL + id, formulario);
    
  } 
  updatePedidoEstadoto4(id: number) {
    console.log("el pedido se ha cambiado a estado 4");
    let formulario = {"taxis_usuarios_pedir_estado": 4};
    return  this._http.put<TaxisUsuariosPedir[]>(this.updatePedidosEstadoURL + id, formulario);
    
  } 
  PedidosEstado1URL = 'https://mototaxy.herokuapp.com/api/taxis_sucursal_usuarios_admin/muchas_cosas_';
    //--------------------------------------------------------------------------------------------
  PedidosEstado1(id: number){
    let formulario = {"estados": 1};
    return this._http.put<any>(this.PedidosEstado1URL + id, formulario)
  }
  PedidosEstado2(id: number){
    let formulario = {"estados": 2};
    return this._http.put<any>(this.PedidosEstado1URL + id, formulario)
  }
  PedidosEstado3(id: number){
    let formulario = {"estados": 3};
    return this._http.put<any>(this.PedidosEstado1URL + id, formulario)
  }
  PedidosEstado4(id: number){
    let formulario = {"estados": 4};
    return this._http.put<any>(this.PedidosEstado1URL + id, formulario)
  }
  CambioPedidosEstado(id: number){
    let formulario = {"taxis_usuarios_pedir_estado": 2};
    return  this._http.put<TaxisUsuariosPedir[]>(this.updatePedidosEstadoURL + id, formulario);
  }

  getPedidosEstado() {
    return this._http.get<PedidosEstados[]>(this.getPedidosEstadoURL);
  }
  //--------------------------------------------------------------------------------------------
  private _refreshNeeded$ = new Subject<void>();
  get refreshNeeded() {
	  return this._refreshNeeded$;
  }
  //--------------------------------------------------------------------------------------------
  getData2(id: number) {
    const DireccionID = localStorage.getItem('DireccionID') as string;
    const MandadoID = localStorage.getItem('taxisUsuariosPedirID') as string;
    this.getUsuarioPedirByAddress(Number(JSON.parse(DireccionID)));
    return Observable.interval(5000).flatMap(() => {
    return this._http.get<TaxisUsuariosPedir[]>(this.getUsuarioPedirByAddressURL+id);
    });

  }

  getData(id: number) {
    const value = localStorage.getItem('UsuarioID') as string;
    this.PedidosEstado1(Number(JSON.parse(value)));
    return Observable.interval(5000).flatMap(() => {
      console.log("refresco con exito")
      let formulario = {"estados": 1};
      return this._http.put<any>(this.PedidosEstado1URL + id, formulario)
    });

  }

  getData3(id: number) {
    const value = localStorage.getItem('UsuarioID') as string;
    this.PedidosEstado2(Number(JSON.parse(value)));
    return Observable.interval(20000).flatMap(() => {
      console.log("refresco con exito")
      let formulario = {"estados": 2};
      return this._http.put<any>(this.PedidosEstado1URL + id, formulario)
    });

  }
  getData4(id: number) {
    const value = localStorage.getItem('UsuarioID') as string;
    this.PedidosEstado3(Number(JSON.parse(value)));
    return Observable.interval(20000).flatMap(() => {
      console.log("refresco con exito")
      let formulario = {"estados": 3};
      return this._http.put<any>(this.PedidosEstado1URL + id, formulario)
    });
  }
  getData5(id: number) {
    const value = localStorage.getItem('UsuarioID') as string;
    this.PedidosEstado4(Number(JSON.parse(value)));
    return Observable.interval(20000).flatMap(() => {
      console.log("refresco con exito")
      let formulario = {"estados": 4};
      return this._http.put<any>(this.PedidosEstado1URL + id, formulario)
    });
  }
  getDataFilas1(id: number){
    const DireccionID = localStorage.getItem('DireccionID') as string;
    this.GetFilasPorEstado1(Number(DireccionID))
    return Observable.interval(5000).flatMap(() => {
      let estado1 = {"estados": 1}
      return this._http.put<any>(this.FilasPorEstadoURL + id, estado1) 
    });
  }
  getDataFilas2(id: number){
    const DireccionID = localStorage.getItem('DireccionID') as string;
    this.GetFilasPorEstado1(Number(DireccionID))
    return Observable.interval(5000).flatMap(() => {
      let estado1 = {"estados": 2}
      return this._http.put<any>(this.FilasPorEstadoURL + id, estado1) 
    });
  }
  getDataFilas3(id: number){
    const DireccionID = localStorage.getItem('DireccionID') as string;
    this.GetFilasPorEstado1(Number(DireccionID))
    return Observable.interval(5000).flatMap(() => {
      let estado1 = {"estados": 3}
      return this._http.put<any>(this.FilasPorEstadoURL + id, estado1) 
    });
  }
  getDataFilas4(id: number){
    const DireccionID = localStorage.getItem('DireccionID') as string;
    this.GetFilasPorEstado1(Number(DireccionID))
    return Observable.interval(5000).flatMap(() => {
      let estado1 = {"estados": 4}
      return this._http.put<any>(this.FilasPorEstadoURL + id, estado1) 
    });
  }
  //--------------------------------------------------------------------------------------------

  HistorialURL = 'https://mototaxy.herokuapp.com/api/taxis_pedir_estados/get_all';

  getHistorial(){
    return this._http.get<any>(this.HistorialURL)
  }
  HistorialPorDireccionURL = 'https://mototaxy.herokuapp.com/api/taxis_pedir_estados/address_'

  getHistorialPorDireccion(id:number){
    return this._http.get<any>(this.HistorialPorDireccionURL + id)
  }
  getDataHistorial(id: number) {
    const value = localStorage.getItem('DireccionID') as string;
    this.getHistorialPorDireccion(Number(JSON.parse(value)));
    return Observable.interval(20000).flatMap(() => {
      console.log("refresco con exito")
      return this._http.get<any>(this.HistorialPorDireccionURL + id)
    });
  }
    //--------------------------------------------------------------------------------------------
    FilasPorEstadoURL = 'https://mototaxy.herokuapp.com/api/taxis_usuarios_pedir/status_count_address_';
    
  GetFilasPorEstado1(id: number){
    let formulario = {"estados": 1}
    return this._http.put<any>(this.FilasPorEstadoURL + id, formulario) 
  }
  GetFilasPorEstado2(id: number){
    let formulario = {"estados": 2}
    return this._http.put<any>(this.FilasPorEstadoURL + id, formulario) 
  }
  GetFilasPorEstado3(id: number){
    let formulario = {"estados": 3}
    return this._http.put<any>(this.FilasPorEstadoURL + id, formulario) 
  }
  GetFilasPorEstado4(id: number){
    let formulario = {"estados": 4}
    return this._http.put<any>(this.FilasPorEstadoURL + id, formulario) 
  }

  //--------------------------------------------------------------------------------------------
  cambiosestadoURL = 'https://mototaxy.herokuapp.com/api/taxis_pedir_estados/pedir_'

  CambiosEstado(id: number){
    return this._http.get<any>(this.cambiosestadoURL + id)
  }

  }
