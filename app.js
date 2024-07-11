const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');

// MiddleWares 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

// Connecting To mongoose Database
const mongooseConnection = require('./config/mongooseConnection');

// Importing Models 
const userModel = require('./models/UserModel');
const productModel = require('./models/ProductsModel');
const adminModel = require('./models/AdminModel');


// Setting Up View Engine 
app.set('view engine','ejs');

// Setting us Routes '/ कुछ भी' के आगे
const adminRouter = require('./routes/adminRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter') ;
const indexRouter = require('./routes/index');

// Applying Routing
app.use('/',indexRouter);
app.use('/admin',adminRouter);
app.use('/user',userRouter);
app.use('/product',productRouter);


const port = 4098;
app.listen(port,function(req,res){
    console.log(`Server is Listening on Port Number ${port}`);
});
