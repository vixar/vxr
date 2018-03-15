import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      Titulo: 'Principal',
      Icono: 'mdi mdi-gauge',
      Submenu: [
        { Titulo: 'Dashboard', url: '/dashboard' },
        { Titulo: 'ProgressBar', url: '/progress' },
        { Titulo: 'Gráficas', url: '/graficas1' },
      ]
    }
  ];


  constructor() { }

}
