const Hotel = require('../models/Hotel')

function getAll() {
    return Hotel.find().lean();
};

function getById (id){
    return Hotel.findById(id).lean();
};

function create (data, owner){
    let hotel = new Hotel({...data, owner});

    return hotel.save();
};

module.exports = {
    getAll,
    getById,
    create,
}