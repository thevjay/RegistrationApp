let mongoose=require("mongoose")
let pmsch=new mongoose.Schema({
    "_id":String,
    "title":String,
    "body":String,
    "uid":String,
    "name":String,
    "date":Date,
    "cat":String,
    "status":{
        type:Boolean,
        default:false
    }


})
let pm=mongoose.model("posts",pmsch)
module.exports=pm
