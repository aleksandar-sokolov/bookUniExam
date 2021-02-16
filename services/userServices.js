const User = require('../models/User');

function register(username, email, password) {
    //TODO: check for username and email in DB 
    let user = new User({ username, email, password });

    return user.save();
};

function login(username, password) {
    return User.findOne({ username })
        .then(userdata => {
            if (!userdata) {
                throw new Error('User do not exist');
            } else if (userdata.password !== password) {
                throw new Error('Password doesn\'t match!')
            } else {
                return userdata
            }
        })
        .catch(e => {
            throw e;
        });
};

module.exports = {
    register,
    login,
};

