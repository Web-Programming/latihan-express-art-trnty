const express = require("express");
const router = express.Router();
const housingController = require("../controllers/housingcontroller");
// Fungsi dan Rute Index Kita Gunakan Untuk Memanggil Semua Data Dalam Database MongoDB
router.get("/", housingController.Index);
module.exports = router;