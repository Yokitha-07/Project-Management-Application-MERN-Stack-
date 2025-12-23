const express = require('express');
require('dotenv').config();
const mongoose = require("mongoose");
const app = express();
const taskRoutes = require('./routers/taskRoute');
const cors = require('cors');

//Middleware
app.use((req,res,next)=>{
    console.log("path "+ req.path + " method "+ req.method);
    next();
})

app.use(express.json());

app.use(cors({
    origin: "*", // Allow all frontend origins
    methods: ["GET","POST","PATCH","DELETE","OPTIONS"],
    allowedHeaders: ["Content-Type","Authorization"]
}));

/* app.get('/',(req,res)=>{          //api
    res.send("Hello World");
}); */

app.use('/api/tasks', taskRoutes)

//DB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB connected"))
    .catch((error) => console.log(error));


module.exports = app;


    


