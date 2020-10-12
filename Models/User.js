const connection = require('../connection/connection.js')
const { Sequelize, DataTypes } = require('sequelize');
const User = connection.define('User' , 
{
name : {
    allowNull:false,
    type: DataTypes.STRING,
},
id: {
    allowNull:false,
    unique : true,
    type:DataTypes.STRING,
    primaryKey:true
},
phone : {
    allowNull:false,
    unique:true,
    type:DataTypes.NUMBER
},
subType:{
    //defaultValue:1,
    allowNull:false,
    type:DataTypes.NUMBER
},
bio:{
    type:DataTypes.TEXT
},
tokens:{
    type:DataTypes.ARRAY(DataTypes.STRING),
    allowNull:false
}
}
)

module.exports = User;