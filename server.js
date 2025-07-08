
//main server

const express=require('express');
const db=require('./db')
const app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.json())

//welcome page
app.get('/',(req,res)=>{
    res.send("hello there! its my server");
})

//all routes
const personroutes=require('./Routes/personroutes');
app.use('/',personroutes);
const menuroutes=require('./Routes/menuroutes');
app.use('/',menuroutes);

//server listening at port 3000
app.listen(3000,()=>{
    console.log("server listening at port 3000");
})