const {Router} = require('express');

const router = Router(); 

router.get('/add', (req, res) => {
    res.render('create');
});

router.get('/:id/details', (req, res) => {
    res.render('details')
});

router.get('/:id/edit', (req, res) => {
    res.render('edit')
});

module.exports = router; 
