const MovieController = require('../../controllers/movieController');
const router = require('express').Router();

router.get('/', MovieController.getUser);
router.post('/', MovieController.addMovie);

module.exports = router; 