import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class ExpenseService {
    private _categoryUrl: string = "http://localhost:3000/api/categories";
    private _createExpenseUrl: string = "http://localhost:3000/api/expenses"

    constructor(private _http: Http) { }

    getCategories() {
        return this._http.get(this._categoryUrl)
            .map((response: Response) => response.json())
    }

    createExpense(expense: any) {
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json');

        return this._http.post(this._createExpenseUrl, expense).map((response: Response) => response.json())
    }

}