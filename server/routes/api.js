
var db = require('../dbconnection');
var express = require('express');
var router = express.Router();
var result = [];

/* GET api listing. */
// router.get('/', function (req, res) {
//     res.send('api works');
// });


// Get all Expenses
router.get('/expenseDetails', function (req, res) {
    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    result = [];
    db.query("SELECT SUM(e.amount) as expense  FROM `expenses`  e  WHERE MONTH(e.date) = MONTH(CURDATE());SELECT SUM(i.amount) as income  FROM `income`  i  WHERE MONTH(i.date) = MONTH(CURDATE())", function (err, rows) {
        console.log(rows);
        if (err) {
            res.status(500).json(err);
            return;
        }
        result.push(rows[0][0]);
        result.push(rows[1][0]);
        result = [].concat.apply([], result);
        var dashBoard = Object.assign({}, result[0], result[1]);
        res.status(200).json(dashBoard);
    });


});

//Create Expense
router.post('/expenses', function (req, res) {
    if (req.body) {
        db.query('INSERT INTO expenses SET ?', req.body, function (err, result) {
            if (err) {
                res.status(500).json({ 'code': 500, 'message': err });
            }
            res.status(200).json(result);
        });
    }

});

router.get('/categories', function (req, res) {
    if (req.body) {
        db.query('SELECT * from categories WHERE category_type ="EXPENSE"', req.body, function (err, result) {
            if (err) {
                res.status(500).json({ 'code': 500, 'message': "Cannot insert into database" });
            }
            res.status(200).json(result);
        });
    }

});



module.exports = router;