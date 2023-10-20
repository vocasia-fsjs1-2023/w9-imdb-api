const reviewController = require("../../controllers/reviewController");
const router = require("express").Router();

router.post("/", reviewController.postReview);
router.get("/", reviewController.getAllReview);
router.put("/:id", reviewController.putReviewId);
router.delete("/:id", reviewController.deleteReviewId);

module.exports = router;