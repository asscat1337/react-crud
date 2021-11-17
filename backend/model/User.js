const {DataTypes} = require('sequelize');
const connection = require('./config');

const User = connection.define('user',{
    user_id:{
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER,
        allowNull:false
    },
    login:{
        type:DataTypes.STRING,
        allowNull: false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    freezeTableName:true,
    timestamps:false
})


module.exports = User