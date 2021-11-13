const {Sequelize} = require('sequelize');
const {DB_PORT,DB_HOST,DB,DB_PASSWORD,DB_USER} = process.env

const connection = new Sequelize(DB,DB_USER,DB_PASSWORD,{
    host:DB_HOST,
    dialect:'mysql'
})

async function init() {
    try{
        await connection.authenticate()
        console.log('Connected to db')
        await connection.sync({alter:true})
    }catch (e) {
        console.log(e)
    }
}
init()

module.exports = connection