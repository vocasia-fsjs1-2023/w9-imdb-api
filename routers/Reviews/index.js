const ReviewController = require("../../controller/reviewController")
const router = require("express").Router()

router.post('/', ReviewController.addReview);
router.get('/', ReviewController.getReview);
router.get('/:id', ReviewController.getReviewId);
router.put("/:id", ReviewController.updateReview);
router.delete("/:id", ReviewController.deleteReview);

module.exports = router;