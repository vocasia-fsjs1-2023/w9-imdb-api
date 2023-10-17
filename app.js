const express = require('express');
const bodyParser = require('body-parser');

const MovieController = require('./controllers/movieController');
const ReviewController = require('./controllers/reviewController');

const routers = require('./routes/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hellow word');
});

app.use(routers);

// PUT Movie
app.put('/movie/:id', MovieController.putUser);

// DELETE Movie
app.delete('/movie/:id', MovieController.delUser);

// DELETE Review
app.delete('/review/:id', ReviewController.delReview);

// PUT Review
app.put('/review/:id', ReviewController.putReview);

app.listen(3000, function () {
    console.log('Server running on port 3000');
});