var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Beranda' });
});

router.get('paketwisata', function(req, res, next) {
  res.render('paketwisata', { title: 'Package Holiday' });
});

router.get('orderpaket', function(req, res, next) {
  res.render('orderpaket', { title: 'Order Package' });
});

router.get('orderdetail', function(req, res, next) {
  res.render('orderdetail', { title: 'Detail Package' });
});

module.exports = router;
