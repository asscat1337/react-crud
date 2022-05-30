const Dashboard = require('../model/Dasboard');
const Department = require('../model/Department');
const State = require('../model/State');
const dayjs = require('dayjs')
class dashboardController{
    async getData(req,res,next){
        try{
            await Dashboard.findAll()
                .then(data=>{
                    const mappedData = data.map(item=>{
                        return {
                            ...item.dataValues,
                            children:[]
                        }
                    })
                    return res.json(mappedData)
                })
        }catch (e) {
            console.log(e)
        }
    }
    async getDepartment(req,res,next){
        try {
            await Department.findAll()
                .then(data=>{
                    const mappedData=data.map(item=>{
                        return {
                            value:item.title,
                            label:item.title
                        }
                    })
                    return res.json(mappedData)
                })
        }catch (e) {
            console.log(e)
        }
    }
    async getState(req,res,next){
        try{
            const {id} = req.params
            await State.findAll({where:{
                patient_id:id
                }})
                .then(data=>res.json(data))
        }catch (e) {
            console.log(e)
        }
    }
    async addDashboard(req,res,next){
        try{
            const data = (await Dashboard.create({
                ...req.body,
                last_state_update: dayjs().format('YYYY-MM-DD HH:mm:ss')
            }, {
            })).get({plain:true})

            return res.status(200).json({...data,children:[]})
        }catch (e) {
            console.log(e)
            console.log(e)
        }
    }
    async addState(req,res,next){
        try{
            const {patient_id,title} = req.body
            const newComments = await State.create({
                title,patient_id,date:dayjs().format('YYYY-MM-DD HH:mm:ss')
            })

            await Dashboard.update({
                last_state_update:newComments.date
            },{
                where:{
                    dashboard_id:patient_id
                }
            })

            return res.status(200).json(newComments)
        }catch (e) {
            console.log(e)
        }
    }
    async deleteData(req,res,next){
        try{
            const {id} = req.body
            console.log(id)
            await Dashboard.destroy({where:{
                dashboard_id:id
            }})
            .then(async ()=>{
                await State.destroy({
                    where:{
                        patient_id:id
                    }
                })
            })
                .then(res.status(200).send())
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
    async updatePatientState(req,res,next){
        try{
            const {patient_id,title} = req.body
            await Dashboard.update({state:title,last_state_update:dayjs().format('YYYY-MM-DD')},{
                where:{
                    dashboard_id:patient_id
                }
            }).then(res.send().status(200))
        }
        catch (e) {
            console.log(e)
        }
    }
}


module.exports = new dashboardController()