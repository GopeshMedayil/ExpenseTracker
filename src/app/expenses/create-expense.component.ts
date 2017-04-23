import { Component } from '@angular/core';
import { ExpenseService } from './expenses.service';
import { Http, Headers } from '@angular/http';

@Component({
    selector: "add-expense",
    templateUrl: './addexpense.component.html',
    styleUrls: ['./addexpense.component.css'],
    providers: [ExpenseService]
})


export class AddExpenseComponent {
    categories = []

    constructor(private _expenseService: ExpenseService) {
        var _this = this;

        this._expenseService.getCategories()
            .subscribe(function (categoryDetails) {
                console.log("categoryDetails", categoryDetails);
                _this.categories = categoryDetails
            }, function (err) {
                if (err.status == 0) {
                    //alert("No Data Loaded");
                    console.log(_this)
                    _this.categories = []
                }
                console.log("In Error", err)
            })


    }

    createExpense(value: any) {
        console.log(value)
        this._expenseService.createExpense(value).subscribe(function (expenseResponse) {
            alert("Expense Created Successfully")

        }, function (err) {

        })
    }

}