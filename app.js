const express = require("express")
const app = express();
var cors = require('cors')
const mongoose = require('mongoose')
// import { createServer } from "http";
const httpServer = require("http").createServer();
app.use(cors())
const  io = require('socket.io')(httpServer,{
    cors:{
        origin:"http://localhost:3001"
    }
})

 
//schema
const Game= require('./models/Game')
//api call
const Moneytype = require('./Moneytype.js')
mongoose.connect("mongodb://localhost:27017/typeBlitz").then(
    console.log("server connected")
)
console.log("hi")

io.on('connection',(socket)=>{
    socket.emit('test',"this is from client")
})

httpServer.listen(3001);
 
