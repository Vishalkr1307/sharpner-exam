const path=require("path")
const rootPath=require("..//util/rootpath")
const BookingSlot = require("..//module/task")

const showBookingslot=async (req,res)=>{
    try{

        res.render(path.join(rootPath,'views','bookingslot.ejs'))

    }
    catch(err){
        return res.status(400).send("bad request")
    }

}
const postBookingslot=async(req,res)=>{
    try{
        let book=await BookingSlot.create(req.body)
        await book.save()
        
        return res.status(200).send("slot created")

    }
    catch(err){
        return res.status(400).send("bad request")
    }
}
module.exports={showBookingslot,postBookingslot}