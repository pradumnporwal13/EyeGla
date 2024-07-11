const mongoose = require('mongoose');

const productSchema =  mongoose.Schema({
    image : {type : String},
    name :{type : String},
    price : {type : Number},
    discount :{type:Number,default:0},
    bgColor : {type : String},
    pannelColor : {type : String},

})
 
const productModel = mongoose.model('productModel',productSchema);
module.exports = productModel;