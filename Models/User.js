const connection = require('../connection/connection.js')
const Sequelize=require('sequelize');
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
    type:Sequelize.INTEGER
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
    type:Sequelize.ARRAY(Sequelize.STRING),
    allowNull:false
}
}
)

module.exports = User;