const Sequelize = require('sequelize')
const connection = new Sequelize(
  'postgres://xdbsocbaxgogof:6b7b209aaa6d02fcc00e5c7e00ccb802006d1b49e2f6cc9fc1818ebf4307cdec@ec2-107-22-241-205.compute-1.amazonaws.com:5432/dai1oh9ms5fkb0',
   
   {
    host:'ec2-107-22-241-205.compute-1.amazonaws.com',
    port:5432,
    dialect: 'postgres',
    define: {
        timestamps: true
      }
  }); 
  
module.exports=connection