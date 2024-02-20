const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();

const PORT = 8000;

//Import routes
const taskRoute = require('./routes/taskRoute');

//middleware
app.use(bodyParser.json());

app.use(taskRoute);


//Connect MongoDB cloud database
const DB_URL = "mongodb+srv://Test1:Test1@cluster1.lshemxo.mongodb.net/TestAPP?retryWrites=true&w=majority";
  
  mongoose.connect(DB_URL)
  .then(()=>{
      console.log('DB connected!');
  })
  .catch((err)=>console.log("Db connected faild!", err));
  
  app.listen(PORT, ()=>{
      console.log(`App is running on ${PORT}`);
  })