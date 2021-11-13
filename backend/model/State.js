const {DataTypes} = require('sequelize');
const connection = require('./config');


const State = connection.define('state',{
    state_id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER,
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

module.exports = State