const routes = require("express").Router();
const movieRoutes = require("./movies/index");
const reviewRoutes = require("./reviews/index");

routes.use("/movie", movieRoutes);
routes.use("/review", reviewRoutes);

module.exports = routes;