const movieController = require("../../controllers/movie_controller");
const routes = require("express").Router();

routes.post("", movieController.addMovie);
routes.get("", movieController.getAllMovie);
routes.get("/:id", movieController.getMovieId);
routes.put("/:id", movieController.updateMovie);
routes.delete("/:id", movieController.deleteMovie);

module.exports = routes;
