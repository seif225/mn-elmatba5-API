const express = require('express')
const app = express()

const port = process.env.PORT ;
const connection = require('./connection/connection.js')
const UserRouter = require('./Routers/UserRouter.js')
const bodyParser = require('body-parser')
const MealRouter = require('./Routers/MealRouter')
app.use(bodyParser.json())
app.use(UserRouter)
app.use(MealRouter)

connect();
async function connect(){
try{
  const con= await connection.sync({logging:true})
   console.log('Success')
}
catch(e){
 console.log(e)
}
}


app.listen(port ,() =>{
    console.log(`server started at port ${port}`)
})

