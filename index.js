const express = require('express')
const app = express()
const port = process.env.PORT | 3000;
const connection = require('./connection/connection.js')


connect();
async function connect(){
try{
  await connection.sync({logging:true})
   
}
catch(e){
 console.log(e)
}
}


app.listen(port ,() =>{
    console.log(`server started at port ${port}`)
})

