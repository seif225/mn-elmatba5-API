const connection = require('../connection/connection.js');
const Sequelize = require('sequelize');
const Meal = require('./MealModel.js')

const CartItem=connection.define('Cart_item',{
    item_id:{
        type: Sequelize.UUID,
         defaultValue: Sequelize.UUIDV4 ,
         primaryKey:true,
        
    },
   
    discount:{
        type:Sequelize.FLOAT,
        defaultValue:1
    },
   
    quantity:{
        type:Sequelize.INTEGER,
        defaultValue:1
    }
})





module.exports=CartItem;