const router = require("express").Router();
const moviesRouter = require("./Movies/index");
const reviewRouter = require("./Reviews/index");

router.use('/movie', moviesRouter);
router.use('/review', reviewRouter);

module.exports = router;