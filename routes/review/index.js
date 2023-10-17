const ReviewController = require('../../controllers/reviewController');
const router = require('express').Router();

router.post('/', ReviewController.postReview);
router.get('/', ReviewController.getReview);

module.exports = router;