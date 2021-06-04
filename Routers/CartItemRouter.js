const connection = require('../connection/connection.js')
const cartItem = require('../Models/CartItemModel.js')
const express = require('express')
const router = new express.Router();
const auth = require('../auth/Auth.js')
const Meal = require('../Models/MealModel.js')
const User = require('../Models/UserModel.js')
const Cart = require('../Models/CartModel.js')
const CartItem = require('../Models/CartItemModel.js')


router.post('/addToCart' , auth , async (req,res)=>{
    const userId = req.query.userId;
    const mealId = req.query.mealId;
    
    if(userId===null || userId===undefined) 
        return res.status(505).send(new Error('User Id cannot be null'))

        if(mealId===null || mealId===undefined) 
        return res.status(505).send(new Error('meal Id cannot be null'))

    try {
        const user = await User.findOne({
            where:{id:userId },
            include:{model:Cart}  
                  });

      const cartId = user.Cart.cart_id; 
      const cartItem = CartItemModel.Create({
        MealId:mealId,
        CartCartId:cartId
      })
        
    res.send(user);
}
catch(e){
    console.log(e);
    res.status(501).send(e);
}

}
    
    
    )

module.exports = router;