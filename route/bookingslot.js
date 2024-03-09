const express=require("express")
const router=express.Router()
const {showBookingslot,postBookingslot}=require("..//controller/bookingslot")

router.get("",showBookingslot)
router.post("/addSlot",postBookingslot)

module.exports =router