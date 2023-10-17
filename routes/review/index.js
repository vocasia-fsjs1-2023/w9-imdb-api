const ReviewController = require('../../controllers/reviewController');
const router = require('express').Router();

router.post('/', ReviewController.postReview);
router.get('/', ReviewController.getReview);
router.delete('/:id', ReviewController.delReview);
router.put('/:id', ReviewController.putReview);

module.exports = router;