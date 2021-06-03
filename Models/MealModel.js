const connection = require('../connection/connection.js');
const Sequelize = require('sequelize')
const User = require('../Models/UserModel')
const CartItem = require('../Models/CartItemModel.js')
const Meal = require('./MealModel.js')


const Meal = connection.define('Meal',{
    title:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    description :{
        type:Sequelize.TEXT,
        allowNull:false

    },
    id:{
        type: Sequelize.UUID,
         defaultValue: Sequelize.UUIDV4 ,
         primaryKey:true,
        
    },
    category:{  
        type:Sequelize.TEXT,
        allowNull:false

    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    orderCount:{
        type:Sequelize.INTEGER,
        defaultValue:0
    },
    quantity:{
        defaultValue:0,
        type:Sequelize.INTEGER
    },
    min :{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    max:{ type:Sequelize.INTEGER,
        allowNull:false,},

    prepareTime:{type:Sequelize.INTEGER,
            defaultValue:45
        },
    postTime:{
        type:Sequelize.INTEGER,
        allowNull:false,
    } 

})


module.exports = Meal;