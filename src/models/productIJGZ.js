const mongoose = require('mongoose');

const productIJGZSchema = new mongoose.Schema({
    nombreIJGZ: {type:String, required:true},
    descripcion:{type:String, required:false},
    precioIJGZ:{type:Number, required:true}
});

module.exports = mongoose.model('ProductIJGZ', productIJGZSchema);