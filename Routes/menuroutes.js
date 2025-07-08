
//menu routing  is written here

const express=require('express');
const router=express.Router();
const menu=require('./../schemas/Menuitems');
router.post('/menu',async (req,res)=>{
    try {
        const data=req.body;
        const newmenu=new menu(data);
        const response=await newmenu.save()
        console.log('menu saved sucessfully');
        res.status(200).json(response);
        

    } catch (error) {
        console.log('error in menu saving');
        res.status(500).json(error);
        
        
    }
})

router.get('/menu',async (req,res)=>{
    try {
        const data=await menu.find();
        console.log('data fetched sucessfuly');
        res.status(200).json(data);
        
    } catch (error) {
        console.log('error found');
        res.status(500).json(error)
        
    }
})

module.exports=router;