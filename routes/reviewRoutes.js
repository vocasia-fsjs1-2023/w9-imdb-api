const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

// Endpoint untuk mendapatkan semua ulasan
router.get("", reviewController.getAllReviews);

// Endpoint untuk mendapatkan ulasan berdasarkan ID
router.get("/:id", reviewController.getReviewById);

// Endpoint untuk membuat ulasan baru
router.post("", reviewController.createReview);

// Endpoint untuk memperbarui ulasan berdasarkan ID
router.put("/:id", reviewController.updateReview);

// Endpoint untuk menghapus ulasan berdasarkan ID
router.delete("/:id", reviewController.deleteReview);

module.exports = router;
