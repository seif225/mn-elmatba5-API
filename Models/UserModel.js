const connection = require('../connection/connection.js')
const Sequelize=require('sequelize');
const Meal = require('./MealModel.js')
const Cart = require('./CartModel.js')
const User = connection.define('User' , 
{
   
name : {
    allowNull:false,
    type: Sequelize.STRING,
},
id: {
    allowNull:false,
    unique : true,
    type:Sequelize.STRING,
    primaryKey:true
},
phone : {
    allowNull:false,
    unique:true,
    type:Sequelize.STRING(14)
},
subType:{
    defaultValue:1,
    allowNull:false,
    type:Sequelize.INTEGER
},
bio:{
    type:Sequelize.TEXT
},
tokens:{
    type:Sequelize.TEXT,
    allowNull:false
}
,
userImage:{
    type:Sequelize.STRING
}
}
)

User.hasMany(Meal,{
   // foreignKey:'userId'
})
User.hasOne(Cart)
Meal.belongsTo(User)
Cart.belongsTo(User)
Cart.sync();

module.exports = User;