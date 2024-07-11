// इस page की सारी routes '/admin/कुछ भी' से शुरू होगी |
const express = require("express");
const router = express.Router(); // Add () to call the function
const productModel = require('../models/ProductsModel');
const userModel = require("../models/UserModel");

router.get("/", (req, res) => {
  res.render("AdminHomePage.ejs");
});

router.get("/createnewproduct", (req, res) => {
  res.render("CreateNewProduct.ejs");
});

// For Creating new User
router.post("/createnewproduct", async (req, res) => {
  const product = await productModel.create({
    image: req.body.image,
    name: req.body.name,
    price: req.body.price,
    discount: req.body.discount,
    bgColor: req.body.bgColor,
    pannelColor: req.body.pannelColor,
  });
  res.redirect('/admin');
});

// For Reading All Users
router.get('/allusers',async (req,res)=>{
  const allUsers = await userModel.find();
  res.render('AllUsersPage.ejs',{allUsers});
})

// For Deleting Single User 
router.get('/delete/:id',async(req,res)=>{
  try{
    const User = await userModel.findByIdAndDelete({_id : req.params.id});
    res.redirect('/admin/allusers');
  }
  catch(err){
    console.log("Error in deleting project"+err);
  }
});

module.exports = router;
