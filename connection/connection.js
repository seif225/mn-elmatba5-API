const Sequelize = require('sequelize')
const connection = new Sequelize('heroku_c62be069c0c1251', 'ba7684c3b5c9fa', '07d880e6',{
    host:'us-cdbr-east-02.cleardb.com',
    dialect: 'mysql',
    define: {
        timestamps: false
      }
  });
module.exports=connection