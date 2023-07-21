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

let arr=[]
let palyingArray=[]

io.on('connect',(socket)=>{
    console.log('A user connected')
    socket.on('nick',async(nickName)=>{
        try{
            const moneyadvice =   Moneytype
            let game = new Game();
            game.words = await moneyadvice();
            let player ={
                socketID: socket.id,
                isPartyLeader:true,
                nickName
            }
            game.players.push(player)
            game = await game.save();

            const gameID = game._id.toString();
            socket.join(gameID);
            console.log(gameID)
            io.emit('updateGame',game);
            // console.log(game)
        }catch(err){
            console.log(err)
        }
        // console.log(nickName)
    })
})

httpServer.listen(3001);
 
