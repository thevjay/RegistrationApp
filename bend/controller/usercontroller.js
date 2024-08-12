const usermod = require("../model/usermodel")
const bcrypt=require("bcryptjs")
const jwt=require('jsonwebtoken')

let add=async(req,res)=>{
    try{
        let result=await usermod.findById({"_id":req.body._id})
        if(result){
            res.json({"msg":"With given email account exists"})
        }
        else{
            const hash=await bcrypt.hash(req.body.pwd,8)
            let data=new usermod({...req.body,"pwd":hash})
            await data.save()
            res.json({"msg":"registration done"})
        }
    }
    catch(err){
        console.error('Error during user registration:', err);
        return res.status(500).json({ "msg": "An error occurred during registration" });
    }
}

let login = async (req, res) => {
    try {
      let data = await usermod.findById({ "_id": req.body._id });
      if (data) {
        let f = await bcrypt.compare(req.body.pwd, data.pwd);
        if (f) {
          const token = jwt.sign({ "_id": req.body._id }, "fsd4");
          res.json({ "token": token, "name": data.name, "_id": data._id, "message": "Successfully Logged In" });
        } else {
          res.status(400).json({ "message": "Invalid Password" });
        }
      } else {
        res.status(400).json({ "message": "Invalid User details" });
      }
    } catch (err) {
      console.error('Error during login:', err);
      res.status(500).json({ "msg": "An error occurred during login" });
    }
}
module.exports={add,login}