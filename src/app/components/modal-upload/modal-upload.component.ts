import { SubirArchivosService } from './../../services/upload-files/subir-archivos.service';
import { Component, OnInit } from '@angular/core';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  imagenSubir: File;
  imagenTemp: string;


  constructor(
    public _subirArchivoService: SubirArchivosService,
    public _modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
  }

  cerrarModal() {
    this.imagenTemp = null;
    this.imagenSubir = null;

    this._modalUploadService.ocultarModal();
  }

  seleccionarImagen( archivo: File ) {
    // COFIRMACIÓN DE IMAGEN
    if (!archivo ) {
      this.imagenSubir = null;
      return;
    }

    if ( archivo.type.indexOf('image')<0 ) {
      swal('Solo imagenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }

    // PROCESAR LA IMAGEN

    this.imagenSubir = archivo;

    let reader = new FileReader();

    reader.readAsDataURL(archivo);
    // let urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => {
      //  console.log(reader.result);
      this.imagenTemp = reader.result;
    } ;

    // console.log('evento: ', event);
  }

  subirImagen() {

    this._subirArchivoService.subirArchivo( this.imagenSubir, this._modalUploadService.tipo, this._modalUploadService.id)
                              .then( resp => {

                                console.log(resp);

                                this._modalUploadService.notificacion.emit( resp );
                                this.cerrarModal();

                              })
                              .catch( err => {

                                console.log('Error en la carga...');

                              });

  }



}
