import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class DashBoardService {
    private _url: string = "http://localhost:3000/api/expenseDetails";

    constructor(private _http: Http) { }

    getDashBoardData() {
        return this._http.get(this._url)
            .map((response: Response) => response.json())
    }

}