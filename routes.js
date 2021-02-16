const { Router } = require('express');

//TODO: import controlers 

const router = Router();

//TODO: set routes 
router.get('/', (req, res) => {
    res.render('home')
})

module.exports = router; 
