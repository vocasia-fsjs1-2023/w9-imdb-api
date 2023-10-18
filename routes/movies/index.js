const router= require("express").Router();
const movieController= require("../../controllers/movieController");

router.post('/', movieController.addMovie);
router.get('/', movieController.getMovie);
router.get('/:id', movieController.getId_Movie);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovie);

module.exports=router;