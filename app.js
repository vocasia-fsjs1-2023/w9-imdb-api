const express = require("express");
const bodyParser = require("body-parser");

const MovieController = require("./controller/movieController");
const ReviewController = require("./controller/reviewController");

const routers = require("./routers/index");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3000;

app.use(routers);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });  