const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/User');

class AuthController{
    async login(req,res,next){
        try{
            const {login,password} = req.body;
            const findUser = await User.findOne({where:{
                login
                }})
            const hashedPassword = await bcrypt.compare(password,findUser.password)
            if(hashedPassword){
                const JWTToken = jwt.sign({
                    login:findUser.login,
                    id:findUser.user_id
                },process.env.ACCESS_SECRET,{
                    "expiresIn":"3 days"
                })
                return res.status(200).json({
                    success:true,
                    token:JWTToken
                })
            }
        }catch (e) {
            console.log(e)
        }
    }
    async register(req,res,next){
        try{
            const {login,password} = req.body
            const candidate = await User.findOne({where:{
                login
            }})
            if(!candidate){
                const hashPassword = await bcrypt.hash(password,3)
                await User.create({
                    login,
                    password:hashPassword
                }).then(()=>res.json({message:'Пользователь зарегистрирован'}))
            }
            if(candidate){
                return res.json({error:'Пользователь уже зарегистрирован'}).status(403)
            }
        }catch (e) {
            console.log(e)
        }
    }
}



module.exports = new AuthController()