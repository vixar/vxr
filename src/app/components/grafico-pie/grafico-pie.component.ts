import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-pie',
  templateUrl: './grafico-pie.component.html',
  styles: []
})
export class GraficoPieComponent implements OnInit {

  @Input() pieChartLabels: string[] = [];
  @Input() pieChartData: number[] = [];
  @Input() pieChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
