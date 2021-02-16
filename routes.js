const { Router } = require('express');

//TODO: import controlers 
const homeController = require('./controllers/homeController');
const hotelController = require('./controllers/hotelController');


const router = Router();

//TODO: set routes 
router.use('/', homeController);
router.use('/hotel', hotelController);

module.exports = router; 
