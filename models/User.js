const moongose = require('mongoose');

const userSchema = new moongose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    bookedHotels: [{
        type: moongose.Types.ObjectId,
        ref: 'Hotel'
    }],
    offeredHotels: [{
        type: moongose.Types.ObjectId,
        ref: 'Hotel'
    }],

});

module.exports = moongose.model('User', userSchema); 
