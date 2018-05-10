import { Usuario } from './../../models/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(
     public http: HttpClient,
     public router:Router

    ) {
    this.cargarStorage();
  }

  // saber si esta logueado el usuario
  estaLogueado() {
    return (this.token.length > 5)? true : false;
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }
  // Función para guardar en el LocalStorage
  guardarStorage( id: string, token: string, usuario: Usuario ) {

    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify( usuario ));

    this.usuario = usuario;
    this.token = token;

  }
  // LOGOUT
  logout() {
    this.token = '';
    this.usuario = null;

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);

  }

  // LOGIN GOOGLE

  loginGoogle( token: string ) {
    let url = URL_SERVICIOS + '/login/google';

    return this.http.post( url, { token } )
                .map( (resp:any) => {

                    this.guardarStorage( resp.id, resp.token, resp.user);
                return true;
              });
  }
  // LOGIN NORMAL

  login ( usuario: Usuario, recordar:boolean = false ) {

      if (recordar) {
        localStorage.setItem('email', usuario.email);
      } else {
        localStorage.removeItem('email');
      }

      let url = URL_SERVICIOS + '/login';
      return this.http.post( url, usuario )
                  .map( (resp: any) => {

                    this.guardarStorage( resp.id, resp.token, resp.user);

                  return true;


                  });

  }

  // REGISTER

  crearUsuario( usuario: Usuario ) {
    let url = URL_SERVICIOS + '/user';

    return this.http.post( url, usuario)
                .map( (resp: any) => {

                  swal('Usuario Creado', usuario.nombre, 'success');

                  return resp.usuario;
                });

  }


}
