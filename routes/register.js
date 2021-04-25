var express = require('express');
var router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');

router.post('/',(req,res,next)=>{
    console.log("body");
    console.log(req.body);
    console.log("body");
    User.find({number:req.body.user.number})
    .exec()
    .then(user=>{
        if (user.length>=1){
            return res.status(409).json({message:'Email Exists'});
                res.send("user Exists");
        }
        else{
            const product = new User({
                _id : new mongoose.Types.ObjectId(),
                firstname:req.body.user.firstname,
                lastname:req.body.user.lastname,
                email:req.body.user.email,
                number:req.body.user.number,
                college:req.body.user.college,
                year:req.body.user.year,
                city:req.body.user.city,
                });
                // console.log("user = ",product);
                product.save()
                    .then(result=>{
                        console.log("success save");
                        console.log(result);
                        res.status(201).json({
                            message:'Handling Post req to /products',
                            createdProducts : result
                        });
                        // res.send("Login Successfull");
                    })
                    .catch(err=> {
                        console.log("..........................................");
                        console.log(err);
                        // res.send("l");
                        res.status(500).json({error : err});
                        // res.send("Please Enter Correct Email Address");
                        });
        }
    })

})

module.exports = router;