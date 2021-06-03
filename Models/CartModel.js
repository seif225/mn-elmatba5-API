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
        allowNull:false
    },
    address: {
        type: Sequelize.TEXT,
        allowNull:false
    },
    city:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    gov :{
        type: Sequelize.TEXT,
        allowNull:false
    },
    first_name:{
        type: Sequelize.TEXT,
        allowNull:false
    }
    ,
    last_name:{
        type: Sequelize.TEXT,
        allowNull:false
    }
})

module.exports=Cart;