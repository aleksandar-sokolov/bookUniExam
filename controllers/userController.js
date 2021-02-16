const { Router } = require('express');

const userServices = require('../services/userServices');

const router = Router();

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {
    userServices.login(req.body.username, req.body.password)
        .then(userdata => {
            res.cookie('username', userdata.username);
            res.cookie('email', userdata.email);
            res.redirect('/');
            
        })
        .catch(e => {
            console.log(e);
            res.redirect('/user/login')
        });
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    let data = req.body;
    userServices.register(
        data.username,
        data.email,
        data.password,
    )
        .then(userdata => {
            console.log(userdata);
            res.redirect('/user/login');
        })
        .catch(err => {
            console.log(err);
            res.render('register');
        })

});

router.get('/:id/profile', (req, res) => {
    res.render('profile');
});

router.get('/logout', (req, res) => {
    res.redirect('/')
});



module.exports = router; 