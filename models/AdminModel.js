const mongoose = require('mongoose');
 
const adminSchema = mongoose.Schema({
    name : {type : String},
    email : {type:String},
    password : {type:String},
    cart : {type : Array,default:[]},
    order : {type:Array,default:[]},
    isAdmin : {type : Boolean,default:false},
    contact : {type : Number},
    picture:{type:String},
});

const adminModel = mongoose.model('adminModel',adminSchema);
module.exports = adminModel;