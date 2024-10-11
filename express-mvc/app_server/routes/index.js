
var express = require('express');
var router = express.Router();

const mainController = require('../controllers/main');

/* GET home page. */
router.get('/', mainController.index);

//buat route ke halaman kontak (/kontak) dengan method get

router.get("/kontak", mainController.kontak);

module.exports = router;