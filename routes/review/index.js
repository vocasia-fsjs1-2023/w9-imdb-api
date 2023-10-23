const reviewController = require('../../controllers/reviewController');
const router = require("express").Router()

router.get('/', reviewController.getAllReviews);
router.post('/', reviewController.Postreview);
router.put('/:id', reviewController.Putreview);
router.delete('/:id', reviewController.Deletereview);

module.exports = router;