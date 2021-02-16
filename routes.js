const { Router } = require('express');

//TODO: import controlers 
const homeController = require('./controllers/homeController')

const router = Router();

//TODO: set routes 
router.use('/', homeController)

module.exports = router; 
