const mongoose = require('mongoose'),
Springkasteel = new mongoose.Schema({
    _id: {type: String},
    naam: {type: String},
    huurprijs: {type: Number},
    hoogte: {type: Number},
    breedte: {type: Number},
    diepte: {type: Number},
    maximumPersonen: {type: Number}
},
{
    colletion: 'Springkasteel'
}
);

module.exports = mongoose.model('Springkasteel', Springkasteel);