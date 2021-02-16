const { Router } = require('express');

const hotelServices = require('../services/hotelServices');

const router = Router();

router.get('/add', (req, res) => {
    res.render('create');
});
// body: { hotel: 'name', city: 'city', 'free-rooms': '3', imgUrl: 'image' }
router.post('/add', (req, res) => {
    hotelServices.create(req.body, 'testOwner')
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));
});

router.get('/:id/details', (req, res) => {
    res.render('details')
});

router.get('/:id/edit', (req, res) => {
    res.render('edit')
});

module.exports = router; 
