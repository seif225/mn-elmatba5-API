const connection = require('../connection/connection.js')
const cartItem = require('../Models/CartItemModel.js')
const express = require('express')
const router = new express.Router();
const auth = require('../auth/Auth.js')
const Meal = require('../Models/MealModel.js')
const User = require('../Models/UserModel.js')
const Cart = require('../Models/CartModel.js')


router.post('/addToCart' , auth , async (req,res)=>{
    const userId = req.query.userId;
    const mealId = req.query.mealId;
    
    try {if(userId===null || userId===undefined) 
         throw new Error('User Id cannot be null')

        if(mealId===null || mealId===undefined) 
        throw new Error('meal Id cannot be null')}
        catch(e){
            res.status(404).send(e)
        }

    try {
        const user = await User.findOne({
            where:{id:userId },
            include:{model:Cart}  
                  });

      const cartId = user.Cart.cart_id; 
      console.log(cartId)           


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