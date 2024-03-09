const express=require("express")
const app = express()
const path = require("path")
const db=require("./config/db")
const BookingSlot=require("./route/bookingslot")
const bookingData=require("./module/task")
app.set("view engine",'views')
app.set("views",'ejs')
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
require("dotenv").config()
const port=process.env.PORT ||8000

app.use("/bookingslot",BookingSlot)

app.get("/",async (req,res)=>{
    try{
        const data=await bookingData.findAll()
        

        res.render(path.join(__dirname,'views','index.ejs'),{tasks:data})
    }
    catch(err){
        return res.status(400).send("Invalid url")
    }

})
db.sync().then((res)=>{
    console.log("database connection established")
    app.listen(port,()=>{
        console.log(`listening on ${port}`)
    })
    
}).catch((err)=>{
    console.log(err)
})

