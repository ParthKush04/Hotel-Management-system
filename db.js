const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://parth_kush04:parth_kush04@cluster0.5axh0hx.mongodb.net/mern_rooms'

mongoose.connect(mongoURL,{useUnifiedTopology : true,useNewUrlParser : true})

var connection = mongoose.connection

connection.on('error',()=>{
    console.log("Connection failed")
})
connection.on('connected',()=>{
    console.log("MongoDb connected successfully")
})

module.exports = mongoose