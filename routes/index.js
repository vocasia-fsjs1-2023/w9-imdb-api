const router = require("express").Router();
const movieRouter = require("./movie/index");
const reviewRouter = require("./review/index");

router.use('/Movie', movieRouter);
router.use('/Review', reviewRouter);
module.exports = router;