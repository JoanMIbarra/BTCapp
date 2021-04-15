var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', {title:title});
});

let title="Log in"
module.exports = router;
