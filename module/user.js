const {Sequelize,DataTypes}=require("sequelize")
const db=require("..//config/db")
const user=db.define("user",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    taskId:{
        type:DataTypes.STRING,
        allowNull:false,
    }
})

module.exports=user