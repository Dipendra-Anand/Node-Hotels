
//main server

const express=require('express');
const db=require('./db')
const app=express();
const bodyparser=require('body-parser');
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
app.use(bodyparser.json())

//middleware
const logtime=(req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] Request made to ${e=req.originalUrl}`);
    next();
    
}

app.use(logtime);

passport.use(new LocalStrategy(async (username,password, done)=>{
    try {
        console.log('credentials recieved',username,password);
        const user=await person.findOne({username});
        if(!user){
            return done(null,false,{message:'incorrect username'});
        }
        const ispassword=user.password==password?true:false;
        if(ispassword){
            return(null,user);
        }
        else{
            return done(null,false,{message:'incoorect password'});
        }

    } catch (error) {
        return done(error);
    }
}))

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session: false})

//welcome page
app.get('/',(req,res)=>{
    res.send("hello there! its my server");
})


//all routes
const personroutes=require('./Routes/personroutes');
app.use('/',personroutes);
const menuroutes=require('./Routes/menuroutes');
const person = require('./schemas/personmodel');
app.use('/',menuroutes);

//server listening at port 3000
app.listen(3000,()=>{
    console.log("server listening at port 3000");
})

//to be continued.