const connection = require('../connection/connection.js')
const User = require('../Models/UserModel.js')
const Cart = require('../Models/CartModel.js')
const express = require('express')
const router = new express.Router();
const auth = require('../auth/Auth.js')
const jwt = require('jsonwebtoken')
const Meal = require('../Models/MealModel')
var multer  = require('multer')
const getStream = require('get-stream')
var fs = require('fs');
const { Op } = require("sequelize");

var upload = multer({ dest: 'uploads/' })


router.post('/createUser',async(req,res)=>{

let token = jwt.sign(req.body.id.toString(),process.env.JWT_SECRET);

try{
   
    let user = await User.findOne({
       where :{ phone : req.body.phone}
    });

    //console.log(...req.body)
    
    console.log("PHONE!!!!!"+req.body.phone)


    if (user){ 
        user.tokens=token;
        console.log(user)
        console.log('***USER ALREADY EXISTS , returning user')
        return res.status(200).send(user)
    }

     user = await User.create({
       ...req.body,'tokens':token
    });
    console.log(req.body.id)

    var cart = await Cart.create({
        userId:req.body.id
    });
    res.status(200).send(user)
}
catch(e){
    res.status(500).send(e)
    console.log(e)
}
})

router.get('/getUserById', auth ,async (req,res)=>{
   try{ const id = req.query.userId;
    const user = await User.findOne({
        where :{id},
        attributes:{ exclude:['tokens']}
    })
    res.status(200).send(user)
} 
catch(e){
    console.log(e+"")
    res.status(500).send(e)
}

});


router.get('/getUserWithMeals', auth,async (req,res)=>{
    const id = req.query.userId;
    try{const user = await User.findOne({
        where:{id},
        attributes : {exclude : ['tokens']},
       include :{model : Meal}
    })
    res.status(200).send(user)
}
    catch(e){
        console.log(e)
    }
})



// router.post('/profile', upload.any('avatar'),  (req, res, next)=> {
//     const file = req.file;
//     const body = req.body
//     console.log(file)
//     console.log(body)
//     next();
//   })

router.post('/profile' , auth ,async(req,res)=>{
  
    const id = req.query.userId;
    const imageinField = req.query.image;
    try
    {
      const user =await User.update({userImage:imageinField},{
          where:
           {id}   
        
      })
      console.log(user);
      //console.log(image)
      console.log(id)
      console.log(imageinField)
      console.log(user.image)
    }
    catch(e){
        console.log(e)
        res.status(500).send(e)
    }

})
  
  router.post('/searchMeals',auth,async(req,res)=>{
      const sort = req.query.sort;
      var search = req.query.search;
        console.log(sort)
        console.log(search)
        console.log(search.toLowerCase())
        var order =  ['title', 'ASC']
        if(sort==2)    order = ['title', 'DESC']
        if(sort==3)    order =  ['price', 'ASC']
        if(sort==4)    order = ['price', 'DESC']
            console.log(order)
              try{
          const meals = await Meal.findAll({
              where:{
                  title:{ [Op.iLike]:'%'+ search + '%' }
              },
              order:[order]
          })

          res.status(200).send(meals)
      }
      catch(e){
          console.log(e)
        res.status(404).send(e)

      }
  })


module.exports = router;
