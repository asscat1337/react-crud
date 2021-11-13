const {DataTypes} = require('sequelize')
const connection = require('./config');


const Dashboard = connection.define('dashboard',{
    dashboard_id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        type:DataTypes.INTEGER,
    },
    from:{
        type:DataTypes.STRING,
        allowNull: false
    },
    patient:{
        type:DataTypes.STRING,
        allowNull:false
    },
    department:{
        type:DataTypes.STRING,
        allowNull:false
    },
    state:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    freezeTableName:true,
    timestamps:false
})

module.exports = Dashboard