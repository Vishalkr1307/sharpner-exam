const express=require("express")
const router=express.Router();
const {addUser,getUser,deleteUser}=require("..//controller/user")
router.post("/addUser",addUser)
router.get("/getUser",getUser)
router.delete("/delete/:id",deleteUser)

module.exports=router