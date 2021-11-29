const bcrypt = require('bcrypt');
const User = require('../model/User');
const Department = require('../model/Department')
const fs = require('fs');
const csvParser = require('csv-parser');

class adminController {
    async addListUser(req,res,next){
        try{
            const {fio,login,password} = req.body;
            const findUser = await User.findOne({where:{
                login
                }
            })
            if(findUser){
                return res.status(400).json({'message':'Данный пользователь существует'})
            }
            const generatePassword = await bcrypt.hash(password,3);
            await User.create({
                fio,login,
                password:generatePassword
            }).then(res.send().status(200))
        }catch (e) {
            console.log(e)
        }
    }
    async showListUser(req,res,next){
        try{
            await User.findAll()
                .then(data=>res.json(data))
        }catch (e) {
            console.log(e)
        }
    }
    async downloadFiles(req,res,next){
        try{
            const result = [];
            const file = req.file.filename
            fs.createReadStream(`./files/${file}`,{encoding:null})
                .pipe(csvParser())
                .on('data',(data)=>result.push(data))
                .on('end',()=>{
                    result.map(async (item)=>{
                        await Department.create({
                            title:item.otd
                        })
                    })
                 return res.json({message:'ok'}).status(200)
                })

        }catch (e) {
            console.log(e)
        }
    }
}



module.exports = new adminController()