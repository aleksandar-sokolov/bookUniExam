const { Router } = require('express');

const router = Router();

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/:id/profile', (req, res) => {
    res.render('profile');
});

router.get('/logout', (req, res) => {
    res.redirect('/')
});



module.exports = router; 