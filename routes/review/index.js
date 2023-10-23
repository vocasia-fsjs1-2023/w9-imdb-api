const reviewcontroller = require("../../controllers/reviewcontroller");
const routes = require("express").Router();

routes.post("", reviewcontroller.addReview);
routes.get("", reviewcontroller.getReview);
routes.put("/:id", reviewcontroller.updateReview);
routes.delete("/:id", reviewcontroller.deleteReview);

module.exports = routes;