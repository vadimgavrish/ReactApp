var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.locals.connection.query('Select UserID, UserName, Email FROM Users', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results));
    });
});

module.exports = router;
