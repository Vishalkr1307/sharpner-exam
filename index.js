const express=require("express")
const app = express()
const path = require("path")
const db=require("./config/db")
const BookingSlot=require("./route/bookingslot")
const bookingData=require("./module/task")
const User=require("./route/user")
const UserData=require("./module/user")
app.set("view engine",'views')
app.set("views",'ejs')
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
require("dotenv").config()
const port=process.env.PORT ||8000

app.use("/bookingslot",BookingSlot)
app.use("/auth",User)
// bookingData.hasOne(UserData)

app.get("/",async (req,res)=>{
    try{
        const data=await bookingData.findAll()
        const user=await UserData.findAll()
        

        res.render(path.join(__dirname,'views','index.ejs'),{tasks:data,User:user})
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

