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
    const userId = req.body.userId;
    const mealId = req.body.mealId;
    
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
      const cartItem = await CartItem.create({
        MealId:mealId,
        CartCartId:cartId
      })
        
      console.log(cartItem)
    res.send(cartItem);
}
catch(e){
   if(e.name==="SequelizeUniqueConstraintError"){
       console.log('mawgod asa7by');
       res.status(500).send({
           from: "seif",
           to: "smsm",
           message:"yasta el bta3 da mawgod fe elcart aslan :D ,  ana 3arf enk hat7tag error unique 3ashan t'handle el user w tbtlo toast w kda :D 7elwa el tarre2a d :D ? ha3mlk kman code lel error 3ashan t3rf t2fsho :D "
           ,code : "69"
       });
   }
   
    console.log(e);
    res.status(501).send(e);
}

}
    
    
    )

module.exports = router;