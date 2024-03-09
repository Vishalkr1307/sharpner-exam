const {Sequelize,DataTypes}=require("sequelize")
const db=require("..//config/db")
const task=db.define("task",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,

    },
    time:{
        type: DataTypes.TIME,
        allowNull:false,
    },
    seat:{
        type: DataTypes.INTEGER,
        allowNull:false,
    }
    
})

module.exports =task