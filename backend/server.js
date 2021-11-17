require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const router = require('./router/router');
const authRouter = require('./router/authRouter');

app.use(express.json());
app.use(cors());

app.use('/',router);
app.use('/auth',authRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Server started ${process.env.PORT}`)
})