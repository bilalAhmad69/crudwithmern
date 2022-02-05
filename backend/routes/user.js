const express = require("express");
const {User} = require("../models/user")
const router = express.Router();
router.get("/" , async (req,res)=>{
    let user = await User.find();
    res.status(200).send(user);
});
router.post("/" , async(req,res)=>{
    try{
     let user = await User({
         name:req.body.name,
         username:req.body.username,
         email:req.body.email,
         phone:req.body.phone
     });
     user = await user.save();
     res.status(200).send(user);
    }
    catch (e) {
        console.log(e.message);
    }

});
router.put("/:id" , async(req,res)=>{
    
    try{
     let user = await User.findByIdAndUpdate(req.params.id, {
         name : req.body.name ,
         username:req.body.username,
         email:req.body.email,
         phone:req.body.phone 
     });
     res.status(200).send("Succesfully edited");
    }
    catch (e){
        res.status(400).send(e.message);
    }
   
});
router.delete("/:id" ,  async(req,res)=>{
    try{
        
    let user = await User.deleteOne({_id: req.params.id})
    res.json("user deleted succesfully")
    }

    catch (e) 
    {
        console.log(e.message)
    }
})
module.exports = router