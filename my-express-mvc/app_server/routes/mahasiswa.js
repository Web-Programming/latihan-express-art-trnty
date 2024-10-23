var express = require('express');
var router = express.Router();

const mhsController = require('../controllers/mahasiswa');
router.get("/", mhsController.index); //list mahasiswa
router.post("/insert", mhsController.insert); //insert mahasiswa
router.patch("/update/:id", mhsController.update); //mengupdate mahasiswa
router.get("/show/:id", mhsController.show); //show detail mahasiswa by id
router.delete("/delete/:id", mhsController.destroy); //delete mahasiswa by id

module.exports = router;