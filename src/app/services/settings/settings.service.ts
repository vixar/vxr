import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {
  // crear propiedad del tipo de la interface
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };
  constructor(  @Inject(DOCUMENT) private _document ) {
    this.cargarAjustes();
  }

  // funciones que van a permitir grarbar y mantener el tema en el localStorage
  guardaAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes() {

    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));

      this.aplicrTema( this.ajustes.tema);
    } else {
      console.log('Usando valores predeterminados');

    }
  }

  aplicrTema ( tema: string ) {

    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardaAjustes();

  }

}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
