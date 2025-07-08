
//schema of menu items data

const mongoose=require('mongoose');

const menuitem=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    indegrients:{
        type:[String],
        default:[]
    },
    price:{
        type:Number,
        default:0,
        required:true
    }
})

const menu=mongoose.model('menu',menuitem);
module.exports=menu;