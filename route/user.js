const express=require("express")
const router=express.Router();
const {addUser,getUser}=require("..//controller/user")
router.post("/addUser",addUser)
router.get("/getUser",getUser)

module.exports=router