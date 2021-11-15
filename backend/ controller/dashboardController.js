const Dashboard = require('../model/Dasboard');
const Department = require('../model/Department');
const State = require('../model/State');
class dashboardController{
    async getData(req,res,next){
        try{
            await Dashboard.findAll()
                .then(data=>res.json(data))
        }catch (e) {
            console.log(e)
        }
    }
    async getDepartment(req,res,next){
        try {
            await Department.findAll()
                .then(data=>res.json(data))
        }catch (e) {
            console.log(e)
        }
    }
    async getState(req,res,next){
        try{
            await State.findAll()
                .then(data=>res.json(data))
        }catch (e) {
            console.log(e)
        }
    }
    async addDashboard(req,res,next){
        try{
            await Dashboard.create(req.body)
                .then(res.send().status(200))
        }catch (e) {
            console.log(e)
        }
    }
    async deleteData(req,res,next){
        try{
            const {id} = req.body
            await Dashboard.destroy({where:{
                dashboard_id:id
            }})
            .then(()=>res.send().status(200))
        }catch(e){
            console.log(e)
        }
    }
    async updateDashboard(req,res,next){
        try{
            const {dashboard_id} = req.body
            await Dashboard.update(req.body,{
                where:{
                    dashboard_id
                }
            }).then(res.send().status(200))
        }catch(e){
            console.log(e)
        }
    }
}


module.exports = new dashboardController()