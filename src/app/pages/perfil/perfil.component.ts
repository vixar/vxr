import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/services.index';
import { Usuario } from '../../models/usuario.model';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {

  usuario: Usuario;

  imagenSubir: File;
  imagenTemp: string;

  constructor( public _usuarioService: UsuarioService) {
    this.usuario = this._usuarioService.usuario;
  }

  ngOnInit() {
  }

  guardar( usuario: Usuario) {

    this.usuario.nombre = usuario.nombre;
    if( !this.usuario.google) {

      this.usuario.email = usuario.email;

    }

    this._usuarioService.actualizarUsuario( this.usuario ).subscribe();

  }

  seleccionarImagen( archivo: File ) {
    if (!archivo ) {
      this.imagenSubir = null;
      return;
    }

    if ( archivo.type.indexOf('image')<0 ) {
      swal('Solo imagenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();

    let urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => {
       console.log(reader.result);
      this.imagenTemp = reader.result;
    } ;

    // console.log('evento: ', event);
  }

  cambiarImagen() {
    console.log( this.imagenSubir );
    this._usuarioService.cambiarImagen( this.imagenSubir, this.usuario._id);
  }


}
