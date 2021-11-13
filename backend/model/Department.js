const {DataTypes} = require('sequelize');
const connection = require('./config');


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

module.exports = Department