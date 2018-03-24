import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  // Cambio de titutlo de pagina auntomatico
  // Declaracion de variable
  label: string = '';

  constructor(
    private router: Router,
    public title: Title,
    public meta: Meta) {

      // ejecucion del método o función
      this.getDataRoute().subscribe(data => {

        console.log( data );

        this.label = data.Titulo;
        this.title.setTitle( this.label );

        // creación de meta tags:

        let metaTag: MetaDefinition = {
          name: 'Description',
          content: this.label
        };

        this.meta.updateTag(metaTag);

        // Fin creación meta tags.

      });
  }
  // función que extrae la informacion del DOM usando ng
  getDataRoute() {

    return this.router.events
      .filter( event => event instanceof ActivationEnd )
      .filter( (event: ActivationEnd) => event.snapshot.firstChild == null )
      .map ( (event: ActivationEnd) => event.snapshot.data);
  }

  ngOnInit() {
  }

}
