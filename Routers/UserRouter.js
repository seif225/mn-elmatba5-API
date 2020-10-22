const connection = require('../connection/connection.js')
const User = require('../Models/UserModel.js')
const express = require('express')
const router = new express.Router();
const auth = require('../auth/Auth.js')
const jwt = require('jsonwebtoken')

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

module.exports = router;
