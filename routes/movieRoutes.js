const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

// Endpoint untuk mendapatkan semua film
router.get("", movieController.getAllMovies);

// Endpoint untuk mendapatkan film berdasarkan ID
router.get("/:id", movieController.getMovieById);

// Endpoint untuk membuat film baru
router.post("", movieController.createMovie);

// Endpoint untuk memperbarui film berdasarkan ID
router.put("/:id", movieController.updateMovie);

// Endpoint untuk menghapus film berdasarkan ID
router.delete("/:id", movieController.deleteMovie);

module.exports = router;
