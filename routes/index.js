const express = require("express");
const router = express.Router();

// Impor rute-rute lainnya
const movieRoutes = require("./movieRoutes");
const reviewRoutes = require("./reviewRoutes");

// Gabungkan rute-rute tersebut
router.use("/movie", movieRoutes);
router.use("/review", reviewRoutes);

module.exports = router;
