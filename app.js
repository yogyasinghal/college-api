var express = require("express");
var path = require('path');
const bodyParser = require('body-parser');

const mongoose  = require('mongoose');
var cors = require('cors');
var app = express();
var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');

// require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

mongoose.connect('mongodb+srv://yogya:yogya1083@cluster0.q4prt.mongodb.net/yogya?retryWrites=true&w=majority',
{ useUnifiedTopology: true },
{ useNewUrlParser: true },
function(err,db){
    if (err){
        console.log(err);
    }
    else{
        console.log("connected to db");
    }
});

app.use(cors());
//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', indexRouter);
app.use('/register',registerRouter)
module.exports = app;

