import { PerfilComponent } from './perfil/perfil.component';

import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/services.index';


const pagesRoutes: Routes = [
    {
        // este path sin ruta va a redireccionar al componente
        path: '',
        // el cual tiene HIJOS que son:
        component: PagesComponent,
        canActivate: [ LoginGuardGuard ],
        children: [
            // estos:
            {path: 'dashboard', component: DashboardComponent, data: {Titulo: 'Dashboard'} },
            {path: 'progress', component: ProgressComponent, data: {Titulo: 'Progress'}},
            {path: 'graficas1', component: Graficas1Component, data: {Titulo: 'Statistics'}},
            {path: 'promesas', component: PromesasComponent, data: {Titulo: 'Promise'}},
            {path: 'rxjs', component: RxjsComponent, data: {Titulo: 'RxJs'}},
            {path: 'account-settings', component: AccountSettingsComponent, data: {Titulo: 'Settings'}},
            {path: 'perfil', component: PerfilComponent, data: {Titulo: 'Perfil'}},
            // si el path llega vacio, redirecciona al dashboard
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
