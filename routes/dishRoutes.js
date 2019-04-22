const express = require('express');
const dishController = require('../controllers/dishes');

const router = express.Router();

router.get('/',  dishController.getDishes);
router.get('/dish/:id', dishController.getDishById);
router.post('/add-new-dish', dishController.upload, dishController.postADish);
router.put('/dish/:id', dishController.upload, dishController.editDish);
router.delete('/dish/:id', dishController.deleteADish);

module.exports = router
