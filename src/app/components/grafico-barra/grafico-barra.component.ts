import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra',
  templateUrl: './grafico-barra.component.html',
  styles: []
})
export class GraficoBarraComponent implements OnInit {

  @Input() barChartOptions: any = {};
  @Input() barChartLabels: string[] = [];
  @Input() barChartType: string = '';
  @Input() barChartData: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
