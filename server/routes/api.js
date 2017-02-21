
var db = require('../dbconnection');
var express = require('express');
var router = express.Router();

/* GET api listing. */
// router.get('/', function (req, res) {
//     res.send('api works');
// });

// Get all Expenses
router.get('/expenseDetails', function (req, res) {
    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    db.query("Select * from expenses", function (err, rows) {
        console.log(rows);
        res.status(200).json(rows);
    });


});

//Create Expense
router.post('/createExpense', function (req, res) {
    if (req.body) {
        db.query('INSERT INTO expenses SET ?', req.body, function (err, result) {
            if (err) {
                res.status(500).json({ 'code': 500, 'message': "Cannot insert into database" });
            }
            res.status(200).json(result);
        });
    }

});

module.exports = router;