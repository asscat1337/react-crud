const {DataTypes} = require('sequelize');
const connection = require('./config');
const Dashboard = require("./Dasboard");


const Department = connection.define('department',{
    department_id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false
    },
    title:{
        type:DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName:true,
    timestamps:false
})
Department.associate=(model)=>{
    model.department.belongsTo(model.dashboard)
}

module.exports = Department