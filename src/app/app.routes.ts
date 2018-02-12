import {RouterModule, Routes} from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';




const appRoutes: Routes = [
    // primero creamos las rutas para las paginas
    {
        // este path sin ruta va a redireccionar al componente
        path: '',
        // el cual tiene HIJOS que son:
        component: PagesComponent,
        children: [
            // estos:
            {path: 'dashboard', component: DashboardComponent},
            {path: 'progress', component: ProgressComponent},
            {path: 'graficas1', component: Graficas1Component},
            // si el path llega vacio, redirecciona al dashboard
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

        ]
    },
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    // ruta cuando no exite ruta
    {path: '**', component: PagenotfoundComponent}
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, {useHash: true});
