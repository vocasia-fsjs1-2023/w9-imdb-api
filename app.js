const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const db = require("./models"); // Import model-model yang telah Anda definisikan
const movieRoutes = require("./routes/movieRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

app.use(express.json());

// Gunakan rute-rute yang telah Anda definisikan
app.use("/movies", movieRoutes);
app.use("/reviews", reviewRoutes);

// Sync database dan mulai server
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
