var db = require('../dbconnection');
var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/', function (req, res) {
    res.send('api works');
});

// Get all posts
router.get('/posts', function (req, res) {
    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    db.query("Select * from expenses", function (err, rows) {
        console.log(rows);
        res.status(200).json(rows);
    });


});

module.exports = router;