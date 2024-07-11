const express = require('express');
const router  = express.Router();
const userModel = require('../models/UserModel');

router.get('/',async (req,res)=>{
    try{
        res.render('UserHomePage.ejs');
    }
    catch(err){
        console.error("Error in "+err)
    }
});

router.post('/register',async(req,res)=>{
    const {name, email, password} = req.body;
    try{
        const User = await userModel.create({
            name : req.body.nameForRegister, 
            email : req.body.emailForRegister, 
            password :req.body.passwordForRegister,
        });
        console.log(User);
        res.redirect('/user/');
    }
    catch(err){console.error("Error in registering the user" + err)}
});

router.post('/login', async(req,res)=>{
    const User = await userModel.findOne({email : req.body.loginEmail , password : req.body.loginPassword})
    console.log(User);
    if(!User){res.send("User not exist, Kindly Register Or Something went wrong")}
    else{
        res.redirect("/user/");
    }
});

module.exports = router;