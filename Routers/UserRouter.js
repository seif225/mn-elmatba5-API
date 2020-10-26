const connection = require('../connection/connection.js')
const User = require('../Models/UserModel.js')
const express = require('express')
const router = new express.Router();
const auth = require('../auth/Auth.js')
const jwt = require('jsonwebtoken')
const Meal = require('../Models/MealModel')
var multer  = require('multer')
const getStream = require('get-stream')
var fs = require('fs');

var upload = multer({ dest: 'uploads/' })


router.post('/createUser',async(req,res)=>{

let token = jwt.sign(req.body.id.toString(),process.env.JWT_SECRET);
try{
   
    let user = await User.findOne({
       where :{ phone : req.body.phone}
    });

    //console.log(...req.body)
    
    console.log("PHONE!!!!!"+req.body.phone)


    if (user){ 
        user.tokens=token;
        console.log(user)
        console.log('***USER ALREADY EXISTS , returning user')
        return res.status(200).send(user)
    }

     user = await User.create({
       ...req.body,'tokens':token
    });
    res.status(200).send(user)
}
catch(e){
    res.status(500).send(e)
    console.log(e)
}
})

router.get('/getUserById', auth ,async (req,res)=>{
   try{ const id = req.query.userId;
    const user = await User.findOne({
        where :{id}
    })
    res.status(200).send(user)
} 
catch(e){
    console.log(e+"")
    res.status(500).send(e)
}

});


router.get('/getUserWithMeals', auth,async (req,res)=>{
    const id = req.query.userId;
    try{const user = await User.findOne({
        where:{id},
       include :{model : Meal}
    })
    res.status(200).send(user)
}
    catch(e){
        console.log(e)
    }
})



router.post('/profile', upload.any('avatar'), 
 (req, res, next)=> {
    const file = req.file;
    const body = req.body
    console.log(file)
    console.log(body)
    next();
  })


module.exports = router;
