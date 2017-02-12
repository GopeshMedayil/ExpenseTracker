import { ExpensesComponent } from './expenses/expenses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router'

export const appRoutes: Routes = [
    {
        path: 'expenses',
        component: ExpensesComponent
    },
    {
        path: '',
        component: DashboardComponent
    }
];

