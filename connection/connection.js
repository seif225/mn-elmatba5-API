const Sequelize = require('sequelize')
const connection = new Sequelize(process.env.CLEARDB_DATABASE_URL,{
    host: 'us-cdbr-east-02.cleardb.com',
    dialect: 'mysql'
  });
module.exports=connection