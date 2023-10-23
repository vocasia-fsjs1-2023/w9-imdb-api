const moviecontroller = require("../../controllers/moviecontroller");
const routes = require("express").Router();

routes.post("", moviecontroller.addMovie);
routes.get("", moviecontroller.getMovie);
routes.get("/:id", moviecontroller.getMovieId);
routes.put("/:id", moviecontroller.updateMovie);
routes.delete("/:id", moviecontroller.deleteMovie);

module.exports = routes;