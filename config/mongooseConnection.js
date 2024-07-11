const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/EyeGla')
.then(()=>{console.log("Connected to Database successfully")})
.catch((err)=>{console.log("Error in connecting to database"+err)})

module.exports = mongoose.connection;