const jwt = require('jsonwebtoken')
const authJWT =(req,res,next)=>{
    const authHeader = req.headers.authorization
    console.log(authHeader)
    if(authHeader){
        const token = authHeader.split(' ')[1];
        jwt.verify(token,process.env.ACCESS_SECRET,(err,user)=>{
            if(err){
                console.log(err)
                return res.sendStatus(403)
            }
            req.user = user
            next()
        })
    }else{
        res.sendStatus(401)
    }
}


module.exports = authJWT