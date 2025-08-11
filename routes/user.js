const express=require('express');
const {handleUserSignup}=require('../controllers/user')

const router=express.Router();

// signup

router.post('/',handleUserSignup);



module.exports=router;

