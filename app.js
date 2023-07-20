const express = require("express")
const app = express();
const socketio = require('socket.io')
const mongoose = require('mongoose')

const expressServer = app.listen(5000)  //this reture http object which will pass in socket,io
const io = socketio(expressServer)

mongoose.connect("mongodb://localhost:27017/typeBlitz").then(
    console.log("server connected")
)
console.log("hi")

 
