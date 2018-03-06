import { element } from 'protractor';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef,  } from '@angular/core';
// import { ViewChild } from '@angular/core/src/metadata/di';
// import { Output } from '@angular/core/src/metadata/directives';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-incrementardor',
  templateUrl: './incrementardor.component.html',
  styles: []
})
export class IncrementardorComponent implements OnInit {


  // para apuntar a un elemento html con unas etiquetas del tipo almoadilla
  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Leyenda', this.leyenda);
    // console.log('progreso', this.porcentaje);
  }

  ngOnInit() {
    // console.log('progreso', this.porcentaje);
  }

  onChange(newValue: number) {

    // let elemHTML: any = document.getElementsByName('porcentaje')[0];

    // console.log(this.txtProgress);

    if (newValue >= 100) {

      this.porcentaje = 100;

      this.cambioValor.emit( this.porcentaje );

    } else if (newValue <= 0) {

      this.porcentaje = 0;


      // this.cambioValor.emit( this.porcentaje );
    } else {

      this.porcentaje = newValue;

    }

    this.txtProgress.nativeElement.value = this.porcentaje;
    // elemHTML.value = (this.porcentaje);

    this.cambioValor.emit( this.porcentaje );

  }

  cambiarValor( valor ) {

    if (this.porcentaje >= 100) {

      this.porcentaje = 100;
    }

    if (this.porcentaje <= 0) {

      this.porcentaje = 0;
    }
    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit( this.porcentaje );
    this.txtProgress.nativeElement.focus();
  }

}
