const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/MovieController');
const ReviewController = require('../controllers/ReviewController');

router.post('/movies', MovieController.createMovie);
router.get('/movies', MovieController.getAllMovies);
router.get('/movies/:id', MovieController.getMovieById);
router.put('/movies/:id', MovieController.updateMovie);
router.delete('/movies/:id', MovieController.deleteMovie);

router.post('/reviews', ReviewController.createReview);
router.get('/reviews', ReviewController.getAllReviews);
router.get('/reviews/:id', ReviewController.getReviewById);
router.put('/reviews/:id', ReviewController.updateReview);
router.delete('/reviews/:id', ReviewController.deleteReview);

module.exports = router;
