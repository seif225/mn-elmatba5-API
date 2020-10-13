const connection = require('../connection/connection.js');
const Sequelize = require('sequelize')
const User = require('../Models/UserModel')
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
         primaryKey:true
    },
    category:{
        type:Sequelize.TEXT,
        allowNull:false

    },
    price:{
        type:Sequelize.NUMBER,
        allowNull:false
    },
    orderCount:{
        type:Sequelize.NUMBER,
        defaultValue:0
    },
    quantity:{
        defaultValue:0,
        type:Sequelize.NUMBER
    },
    min :{
        type:Sequelize.NUMBER,
        allowNull:false,
    },
    max:{ type:Sequelize.NUMBER,
        allowNull:false,},

    prepareTime:{type:Sequelize.NUMBER,
            allowNull:false,
        },
    postTime:{
        type:Sequelize.NUMBER,
        allowNull:false,
    },
    userId:{
        type:Sequelize.TEXT,
        allowNull:false,
        unique:true
    }    

})

module.exports = Meal;