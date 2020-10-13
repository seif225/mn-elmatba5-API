const jwt=require('jsonwebtoken')
const User = require('../Models/UserModel')
const auth = async(req,res,next)=>{

    try{
        const token = req.header('Authorization').replace('Bearer ' ,'');
        console.log('token: '+token)
        const decoded = await jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findOne({
            where :{
                tokens:decoded
            }
        }
        )
        
        if(!user) throw new Error('unauthorized !!! ')
        console.log(decoded)
    
    }
    catch(e){
        res.status(500).send(e)
    }


    next();
}


module.exports = auth;