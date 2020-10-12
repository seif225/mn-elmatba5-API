const Sequelize = require('sequelize')
const connection = new Sequelize(process.env.CLEARDB_DATABASE_URL);
module.exports=connection