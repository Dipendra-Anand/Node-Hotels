
//perosn routing is written here

const express=require('express');
const router=express.Router();
const person=require('./../schemas/personmodel');
router.post('/person',async (req,res)=>{
  try {

         const data=req.body;
         const newperson=new person(data);
         const response=await newperson.save();
         console.log('data saved successfully');
         res.status(200).json(response);
         
        } catch (error) {
            console.log('error in data saving');
            res.status(500).json({error:'internal error'});
 }
    
})
router.get('/person',async (req,res)=>{
    try {
        const data=await person.find();
        console.log('data fetchde successfullly');
        res.status(200).json(data);
        
    } catch (error) {
        console.log('error in data fetching');
        res.status(500).json({error:'internal fetching error'});
        
        
    }
})
router.get('/person/:worktype',async(req,res)=>{
    try {
        const  worktype=req.params.worktype;
        if(worktype=='chef'||worktype=='worker'||worktype=='waiter'){
            const data=await person.find({work:worktype});
            console.log('valid request');
            res.status(200).json(data);
            
        }
        else{
            console.log('error');
            res.status(404).json(error);
            
        }

    } catch (error) {
         console.log('error');
            res.status(500).json(error);
    }
})

module.exports=router;