const {DataTypes} = require('sequelize')
const Department = require('./Department')
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
    },
    last_state_update:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    departmentId:{
        type:DataTypes.INTEGER,
        references:{
            model:Department,
            key:'department_id'
        }
    }
},{
    freezeTableName:true,
    timestamps:false
})

Dashboard.hasMany(Department,{foreignKey:'department_id',constraints:false})

module.exports = Dashboard