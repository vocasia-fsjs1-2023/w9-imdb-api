const DifferentReviewController = require('../../controllers/differentReviewController'); 
const router = require('express').Router();

router.post('/', DifferentReviewController.createReview);
router.get('/', DifferentReviewController.getAllReviews);
router.get('/:id', DifferentReviewController.getReviewById);
router.delete('/:id', DifferentReviewController.deleteReview);
router.put('/:id', DifferentReviewController.updateReview);

module.exports = router;
