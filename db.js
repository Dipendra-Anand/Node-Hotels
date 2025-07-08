
//connection between mongoose and mongodb

const mongoose=require('mongoose');

const mongoURL= 'mongodb://127.0.0.1:27017/hotels'

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("database connected");
})
db.on('error',()=>{
    console.log("database error");
})
db.on('disconnected',()=>{
    console.log("database disconnected");
})

module.exports=db;