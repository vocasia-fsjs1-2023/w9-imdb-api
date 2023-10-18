const DifferentMovieController = require('../../controllers/differentMovieController');
const router = require('express').Router();

router.post('/', DifferentMovieController.createMovie);
router.get('/', DifferentMovieController.getAllMovies);
router.get('/:id', DifferentMovieController.getMovieById);
router.delete('/:id', DifferentMovieController.deleteMovie);
router.put('/:id', DifferentMovieController.updateMovie);

module.exports = router;