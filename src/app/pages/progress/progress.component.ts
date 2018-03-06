import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentajeAzul: number = 30;
  porcentajeVerde: number = 70;

  constructor() { }

  ngOnInit() {
  }
  // actualizar(event: number) {
  //   console.log('Evento: ', event);
  // }

}
