const movieController = require('../../controllers/movieController');
const router = require("express").Router()

router.get('/', movieController.Getmovie);
router.get('/:id', movieController.GetmovieId);
router.post('/', movieController.Postmovie);
router.put('/:id', movieController.Putmovie);
router.delete('/:id', movieController.Deletemovie);

module.exports = router;