const pm = require("../model/postmodel")
const {v4:uuid}=require("uuid")


let addpost=async(req,res)=>{
    try{
    let data=new pm({...req.body,"_id":uuid()})
    await data.save()
    res.json({"msg":"post added"})
    }
    catch(err) {
        console.error(err);  // Log the error for debugging
        res.status(500).json({ "msg": "Internal server error" });  // Send an error response
    }
}


let getpost=async(req,res)=>{
    try{
        let data=await pm.find({})
        res.json(data)
    
    }    
    catch(err){
        console.error(err);  // Log the error for debugging
        res.status(500).json({ "msg": "post error" });  // Send an error response
    }
}


const getcatpost=async(req,res)=>{
    try{
        const data=await pm.find({[req.params.cat]:req.params.value})
        res.json(data)
    }
    catch(err)
    {

    }
}

const updpost=async(req,res)=>{
    try{
        await pm.findByIdAndUpdate({"_id":req.body._id},{"title":req.body.title,"body":req.body.body,"cat":req.body.cat})
        res.json({"msg":"upd done"})
    }
    catch(err){
        res.json(err)
    }
}

const delPost = async (req, res) => {
    try {
      await pm.findByIdAndDelete({"_id": req.params._id });
      res.json({ msg: "Post deleted successfully" });
    } catch (err) {
      res.json(err);
    }
  };

module.exports={addpost,getpost,getcatpost,updpost,delPost}