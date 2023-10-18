const router= require("express").Router();
const reviewController= require("../../controllers/reviewController");

router.post('/', reviewController.addReview);
router.get('/', reviewController.getReview);
router.put('/:id', reviewController.updateReview);
router.delete('/:id', reviewController.deleteReview);

module.exports=router;