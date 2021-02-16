const moongose = require('mongoose');

const hotelSchema = new moongose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!']
    },
    city: {
        type: String,
        required: [true, 'City is required!']
    },
    imageUrl: {
        type: String,
        required: [true, 'imageUrl is required!']
    },
    freeRooms: {
        type: Number,
        required: [true, 'Free Rooms is required!'],
        min: 1,
        max: 100
    },
    guests: [
        {
            type: moongose.Types.ObjectId,
            ref: 'User'
        }
    ],
    owner: {
        type: moongose.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = moongose.model('Hotel', hotelSchema); 