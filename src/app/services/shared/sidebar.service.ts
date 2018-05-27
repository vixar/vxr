import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      Titulo: 'Inicio',
      Icono: 'mdi mdi-gauge',
      Submenu: [
        { Titulo: 'Dashboard', url: '/dashboard' },
        { Titulo: 'ProgressBar', url: '/progress' },
        { Titulo: 'Gráficas', url: '/graficas1' },
        { Titulo: 'promesas', url: '/promesas' },
        { Titulo: 'rxjs', url: '/rxjs' },
      ]
    },
    {
      Titulo: 'Administración',
      Icono: 'mdi mdi-folder-lock-open',
      Submenu: [
        { Titulo: 'Usuarios', url: '/usuarios' },
        { Titulo: 'Hospitales', url: '/hospitales' },
        { Titulo: 'Médicos', url: '/medicos' }
      ]
    }
  ];


  constructor() { }

}
