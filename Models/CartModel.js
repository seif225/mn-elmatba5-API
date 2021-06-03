const connection = require('../connection/connection.js');
const Sequelize = require('sequelize');
const CartItem = require('../Models/CartItemModel.js')

const Cart = connection.define('Cart',{
    cart_id:{
        type: Sequelize.UUID,
         defaultValue: Sequelize.UUIDV4 ,
         primaryKey:true,
        
    },
    email:{
        type:Sequelize.TEXT,
        isEmail: true,
      defaultValue:""
       
    },
    address: {
        type: Sequelize.TEXT,
        defaultValue:""
       
    },
    city:{
        type: Sequelize.TEXT,
        defaultValue:""
       
    },
    gov :{
        type: Sequelize.TEXT,
        defaultValue:""
        
    },
    first_name:{
        type: Sequelize.TEXT,
        defaultValue:""
        
    }
    ,
    last_name:{
        type: Sequelize.TEXT,
        defaultValue:""
      
    }
})

Cart.hasMany(CartItem)
CartItem.belongsTo(Cart)

module.exports=Cart;