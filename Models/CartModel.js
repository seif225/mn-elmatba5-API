const connection = require('../connection/connection.js');
const Sequelize = require('sequelize');

const Cart = connection.define('Cart',{
    cart_id:{
        type: Sequelize.UUID,
         defaultValue: Sequelize.UUIDV4 ,
         primaryKey:true,
        
    },
    email:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    address: {
        type: Sequelize.TEXT,
        allowNull:true
    },
    city:{
        type: Sequelize.TEXT,
        allowNull:true
    },
    gov :{
        type: Sequelize.TEXT,
        allowNull:true
    },
    first_name:{
        type: Sequelize.TEXT,
        allowNull:true
    }
    ,
    last_name:{
        type: Sequelize.TEXT,
        allowNull:true
    }
})

module.exports=Cart;