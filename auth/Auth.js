const jwt=require('jsonwebtoken')
const auth = async(req,res,next)=>{

    try{
        const token = req.header('Authorization').replace('Bearer ' ,'');
        console.log('token: '+token)
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        //const user = await User.findOne({_id:decoded._id, 'tokens.token':token})
        console.log(decoded)
    
    }
    catch(e){
        throw new Error ('unauthorized action!')
    }


    next();
}


module.exports = auth;