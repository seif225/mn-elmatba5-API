const Sequelize = require('sequelize')
const connection = new Sequelize(
  'yTLSQ1FA4T',
   'yTLSQ1FA4T', 
   'GQ4jlUCbS9',{
    host:'remotemysql.com',
    dialect: 'mysql',
    define: {
        timestamps: true
      }
  });
module.exports=connection