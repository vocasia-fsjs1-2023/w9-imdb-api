const MovieController = require("../../controller/movieController");
const router = require("express").Router()

router.post("/", MovieController.createMovie);
router.get("/", MovieController.getMovieList);
router.put("/:id", MovieController.movieUpdateData);
router.patch("/:id", MovieController.movieUpdate);
router.delete("/:id", MovieController.movieDelete);

module.exports = router;