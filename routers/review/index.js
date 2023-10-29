const ReviewController = require("../../controller/reviewController");
const router = require("express").Router();

router.post("/", ReviewController.createReview);
router.get("/", ReviewController.reviewList);
router.put("/:id", ReviewController.reviewUpdateData);
router.delete("/:id", ReviewController.reviewDelete);

module.exports = router;