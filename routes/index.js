var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
const Users = require('../models/user');
const mongoose = require('mongoose');
const path = require('path');

// yogya
// yogya1083
// mongo
/* GET home page. */
router.get('/',(req, res, next)=> {
    console.log("index.js req = ",req);
    Users.find({})
    // .sort(name,1)
    .exec()
    .then((user)=>{
        console.log("users = ",user);
        res.statusCode =200;
        res.json(user);
        // res.send(dish);
    })
    .catch(err=> {
      console.log("error in catch");
        res.status(500).json({error : err});
    });
});

module.exports = router;
