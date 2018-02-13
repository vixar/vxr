import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';



const pagesRoutes: Routes = [
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
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
