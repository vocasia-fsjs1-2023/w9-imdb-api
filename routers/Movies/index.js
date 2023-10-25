const MovieController = require("../../controller/movieController")
const router = require("express").Router()

router.post('/', MovieController.addMovie);
router.get('/', MovieController.getMovie);
router.get('/:id', MovieController.getMovieId);
router.put("/:id", MovieController.updateMovie);
router.delete("/:id", MovieController.deleteMovie);

module.exports = router;