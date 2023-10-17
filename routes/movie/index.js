const MovieController = require('../../controllers/movieController');
const router = require('express').Router();

router.get('/', MovieController.getUser);
router.post('/', MovieController.addMovie);
router.put('/:id', MovieController.putUser);
router.delete('/:id', MovieController.delUser);

module.exports = router; 