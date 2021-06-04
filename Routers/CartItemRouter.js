const connection = require('../connection/connection.js')
const cartItem = require('../Models/CartItemModel.js')
const express = require('express')
const router = new express.Router();
const auth = require('../auth/Auth.js')
const Meal = require('../Models/MealModel.js')
const User = require('../Models/UserModel.js')
const Cart = require('../Models/CartModel.js')


router.post('/addToCart' , auth , async (req,res)=>{
    const userId = req.query.id;
    
    if(userId===null || userId===undefined) 
        return res.status(505).send('id cannot be null')

    try {
        const user = await User.findOne({
        where:{
            id:userId
        },
        include:{model:Cart}
    });

    console.log(user);
    res.send(user);
}
catch(e){
    console.log(e);
    res.status(501).send(e);
}

}
    
    
    )

module.exports = router;