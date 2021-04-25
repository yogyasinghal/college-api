const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        // unique:true,
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    number:{
        type:Number,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },


});
//plural form of Product is the name of collection 
module.exports = mongoose.model('User',userSchema);