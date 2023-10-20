const movieController = require("../../controllers/movieController");
const router = require("express").Router();

router.post("/", movieController.postMovie);
router.get("/", movieController.getAllMovie);
router.get("/:id", movieController.getMovieId);
router.put("/:id", movieController.putMovieId);
router.delete("/:id", movieController.deleteMovieId);

module.exports = router;