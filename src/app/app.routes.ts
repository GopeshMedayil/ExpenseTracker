import { Routes } from '@angular/router'

import { ExpensesComponent } from './expenses/expenses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddExpenseComponent } from './expenses/create-expense.component';


export const appRoutes: Routes = [

    {
        path: '',
        component: DashboardComponent
    }, {
        path: 'expenses',
        component: ExpensesComponent
    }, {
        path: 'addExpense',
        component: AddExpenseComponent
    },
];

