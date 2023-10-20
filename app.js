const express = require("express");
const routers = require("./routes/index");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(routers);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});