var express = require('express');
var router = express.Router();

//panggil controller main
var mainController = require("../controllers/main");

/* GET home page. */
router.get('/', mainController.index);
router.get('/kontak', mainController.kontak);
router.get("/profil", mainController.profil);

module.exports = router;

