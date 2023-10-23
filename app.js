const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { Movie, Review } = require("./models");
const MovieController = require('./controllers/movieController');
const ReviewController = require('./controllers/reviewController');
const routes = require("./routes/index");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use(routes);

// Custom route
app.get("/", (req, res) => {
    res.send("Hello Word");
});

// Port
const port = 3000;

app.listen(port, () => {
    console.log(`Aplikasi contoh sedang mendengarkan port ${port}`);
});
