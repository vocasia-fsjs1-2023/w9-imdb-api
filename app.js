const express = require("express");
const bodyParser = require("body-parser");
const routers = require("./routes/index");
const { movie } = require("./models");
const movieController= require("./controllers/movieController");
const { review } = require("./models");
const reviewController= require("./controllers/reviewController");
const app = express();
const port = 3000;

app.use(bodyParser.text());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is ready!");
});

app.use(routers);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}...`);
});