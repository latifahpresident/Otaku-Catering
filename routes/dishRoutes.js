const express = require('express');
const dishController = require('../controllers/dishes');

const router = express.Router();

router.get('/', dishController.getDishes);
router.get('/dish/:id', dishController.getDishById);
router.post('/add-new-dish', dishController.postADish);

module.exports = router
