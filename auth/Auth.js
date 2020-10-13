const jwt=require('jsonwebtoken')
const User = require('../Models/UserModel')
const auth = async(req,res,next)=>{

    try{
        const token = req.header('Authorization').replace('Bearer ' ,'');
        console.log('token: '+token)
        const decoded = await jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findOne({
            where :{
                tokens:token
            }
        }
        )
        
        if(!user) throw new Error('unauthorized !!! ')
        console.log(decoded)
        console.log(user)
    
    next();

    }
    catch(e){
        console.log(e)
        res.status(400).send('unauthotized lol')
    }


}


module.exports = auth;