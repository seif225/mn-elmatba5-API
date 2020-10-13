const connection = require('../connection/connection.js')
const User = require('../Models/UserModel.js')
const express = require('express')
const router = new express.Router();
const auth = require('../auth/Auth.js')
const jwt = require('jsonwebtoken')
const Meal = require('../Models/MealModel.js')


router.post('/addMeal',auth , (req,res)=>{
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
    }
})


module.exports = router