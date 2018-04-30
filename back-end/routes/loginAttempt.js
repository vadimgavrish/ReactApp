var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  const email = req.body.username;
  const pass = req.body.password;

  res.locals.connection.query(`SELECT * FROM Users WHERE Email='${email}' AND Password='${pass}'`, 
    function (error, results, fields) {
      if (error) throw error;

      if (results.length === 0) {
        res.send(JSON.stringify('err'));
      } else {
        // set cookie 🍪
        res.send(JSON.stringify(results[0].UserName));
      }
    }
  );
});

module.exports = router;

// let hash = bcrypt.hashSync( user + pwd, 10 );
