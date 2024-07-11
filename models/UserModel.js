const mongoose = require('mongoose');
 
const userSchema = mongoose.Schema({
    name : {type : String},
    email : {type:String},
    password : {type:String},
    cart : {type : Array,default:[]},
    order : {type:Array,default:[]},
    contact : {type : Number},
    isAdmin : {type : Boolean,default:false},
    picture:{type:String},
});

const userModel = mongoose.model('userModel',userSchema);
module.exports = userModel;