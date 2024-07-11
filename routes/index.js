const express = require('express');
const router  = express.Router();

router.get('/',(req,res)=>{
    res.render('LoginAndSignupPage.ejs');
});

module.exports = router;