var express = require('express');
var router = express.Router();

router.get('/orders', function(req, res, next) {
  res.render('orders');
});

module.exports = router;
