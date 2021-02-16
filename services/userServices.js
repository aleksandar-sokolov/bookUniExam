const User = require('../models/User');

function register (username, email, password) {
    //TODO: check for username and email in DB 
    let user = new User({username, email, password});

    return user.save();
};

module.exports = {
    register,
};

