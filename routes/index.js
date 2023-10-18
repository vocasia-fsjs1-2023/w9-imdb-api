const router= require("express").Router();
const movieRouter= require("./movies/index");
const reviewRouter= require("./reviews/index");

router.use("/movie", movieRouter);
router.use("/review", reviewRouter);
module.exports=router;