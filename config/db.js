const {Sequelize}=require("sequelize")

const data=new Sequelize("node-task",'root','Vishal@1307',{
    host:"localhost",
    dialect:"mysql"
})

module.exports=data