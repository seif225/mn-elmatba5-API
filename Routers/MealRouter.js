const connection = require('../connection/connection.js')
const User = require('../Models/UserModel.js')
const express = require('express')
const router = new express.Router();
const auth = require('../auth/Auth.js')
const jwt = require('jsonwebtoken')
const Meal = require('../Models/MealModel.js')
const Sequelize = require('sequelize')
const { QueryTypes } = require('sequelize');


router.post('/addMeal',auth , async(req,res)=>{
    const body = req.body;
    try{
        const meal = await Meal.create({
            ...body
        })
        console.log(meal)
        return res.status(200).send(meal)
    }
    catch(e){
        console.log(e)
        res.status(500).send(e + "internal server error")
        //next(e)
    }
})


router.get('/getUsersInCategory',auth,async(req,res)=>{

const category = req.query.category;
var page = Number(req.query.page);
console.log("offset "+page)

try {
   
    const users = await User.findAll({
        limit:5,
        offset:page,
        attributes:{exclude :['tokens']},
        include:{
            attributes:[],
            model:Meal,
            where :{category} 
        },
       
    })

    console.log(users)
    res.status(200).send(users)
}
catch(e){
console.log(e)
res.status(500).send(e)
}

})

router.get('/getAllMeals',async(req,res)=>{
    const sort = req.query.sort;
    let cond ;
    if(sort==1) cond = ['title','ASC'] 
    if(sort==2) cond = ['title','DESC']
    if(sort==3) cond = ['price','ASC']
    if(sort==4) cond = ['price','DESC']

    try{
        const meals = await Meal.findAll({ order:[
            cond,  
              ]})
        res.status(200).send(meals)
    
    }
    catch(e){
    console.log(e)
    res.status(404).send(e)
    }
})

router.get('/getMealsByUserId', auth , async (req,res)=>{
  try{  const UserId = req.query.userId;
 
    const meals = await Meal.findAll({
        where:{UserId}
    })
    console.log(meals)
    res.status(200).send(meals);

}
catch(e){
    console.log(e)
    res.status(500).send(e)
}
})


router.get('/getOneMealById',auth,async(req,res)=>{
    const id = req.query.mealId;
    try{
        const meal = await Meal.findOne({
                where : {id}

            })
            res.send(meal)
   
        }

    catch(e){
        console.log(e)
        res.status(500)
    }
})




module.exports = router