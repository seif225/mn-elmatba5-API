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
       
    },
    address: {
        type: Sequelize.TEXT,
       
    },
    city:{
        type: Sequelize.TEXT,
       
    },
    gov :{
        type: Sequelize.TEXT,
        
    },
    first_name:{
        type: Sequelize.TEXT,
        
    }
    ,
    last_name:{
        type: Sequelize.TEXT,
      
    }
})

module.exports=Cart;