const connection = require('../connection/connection.js')
const User = require('../Models/User.js')
const express = require('express')
const router = new express.Router();
const auth = require('../auth/Auth.js')
const jwt = require('jsonwebtoken')

router.post('/createUser',async(req,res)=>{
    let token = jwt.sign({_id:req.body.id.toString()},process.env.JWT_SECRET);

try{
    const user = await User.findAll({
        phone : req.body.phone
    });
    if (user){ 
        user.tokens.concat({token})
        console.log('***USER ALREADY EXISTS , returning user')
        return res.status(200).send(user)}

     user = await User.create({
       ...req.body,token
    });
    res.status(200).send(user)
}
catch(e){
    res.status(500).send(e)
    console.log(e)
}
})

module.exports = router;
