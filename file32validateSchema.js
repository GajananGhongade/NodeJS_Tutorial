const mongoose = require('mongoose');
const productScema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    categories:String
})

module.exports = mongoose.model('studs', productScema);