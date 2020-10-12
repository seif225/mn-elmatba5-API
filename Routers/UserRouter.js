const connection = require('../connection/connection.js')
const User = require('../Models/User.js')
const express = require('express')
const router = new express.Router();

router.post('/createUser',async(req,res)=>{
try{
    const user = await User.create({
        id:"sdfgh",
        name:"seif",
        phone:"01006569774"
    });
    res.status(200).send(user)
}
catch(e){
    res.status(500).send(e)
}
})

module.exports = router;
