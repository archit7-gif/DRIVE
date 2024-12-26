


const express = require('express');
const userRouter = require('./routes/user.routes')
const dotenv = require('dotenv')
dotenv.config();

const connectToDB= require("./config/db")
connectToDB();

const cookieParser = require('cookie-parser')
const app = express();
const indexRouter = require('./routes/index.route')

// console.log('JWT_SECRET in app.js:', process.env.JWT_SECRET);





app.set('view engine','ejs')
app.use(cookieParser())

// middleware 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.get('/',(req,res)=>{ res.render("index");})


app.use('/', indexRouter)

app.use('/user',userRouter)






app.listen(3000, ()=>{console.log('Server daud raha hai')})











