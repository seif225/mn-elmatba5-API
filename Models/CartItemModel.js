const connection = require('../connection/connection.js');
const Sequelize = require('sequelize');
const Meal = require('./MealModel.js')

const CartItem=connection.define('Cart_item',{
    item_id:{
        type: Sequelize.UUID,
         defaultValue: Sequelize.UUIDV4 ,
         primaryKey:true,
        
    },
    init_price:{
        type:Sequelize.FLOAT,
        allowNull:false
    },
    discount:{
        type:Sequelize.FLOAT,
        defaultValue:1
    },
    final_price:{
        type:Sequelize.FLOAT,
        defaultValue:this.discount*this.init_price
    },
    quantity:{
        type:Sequelize.INTEGER,
        defaultValue:1
    }
})

Meal.hasOne(CartItem);
CartItem.belongsTo(Meal);



module.exports=CartItem;