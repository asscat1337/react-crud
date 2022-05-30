require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

const router = require('./router/router');
const authRouter = require('./router/authRouter');
const adminRouter = require('./router/adminRouter')


app.use(express.static(path.resolve(__dirname,'../build')));

app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}));

app.use('/',router);
app.use('/auth',authRouter);
app.use('/admin',adminRouter)

// app.get('*',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'../build','index.html'))
// })

app.listen(process.env.PORT,()=>{
    console.log(`Server started ${process.env.PORT}`)
})