//import 
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const cors = require('cors')
const connectDb = require('./config/db')

//dotenv config
dotenv.config();               //if dotenv file is not in root folder then use dotenv.config({path:'pathsource'})

//mongodb connection 
connectDb();
//rest object create variable which contains all features of express 
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))  ;       //give sort message on console like which url hit,time,which response come


//routes create
//1.test route
app.use("/api/v1/test",require("./routes/testRoutes"));
//auth route
app.use("/api/v1/auth",require("./routes/authRoutes"));
//inventory routes
app.use("/api/v1/inventory",require("./routes/inventoryRoutes"));

//port create
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT,()=>
{
    console.log(`Node server running in ${process.env.DEV_MODE} on port ${process.env.PORT}`
      .red
    );
});