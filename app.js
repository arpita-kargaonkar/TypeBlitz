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
            // console.log(game)'
            console.log(game.players.length)
            if(arr.length==0){

                arr.push(player)
            }else{
                if(arr[arr.length-1].socketID!=player.socketID){
                    arr.push(player)
                }
            }
            
             
        }catch(err){
            console.log(err)
        }
        if(arr.length>=2){
            let p1obj=arr[0]
            let p2obj=arr[1];
            // let p3obj=arr[3]

            palyingArray.push(p1obj)
            palyingArray.push(p2obj)
            // palyingArray.push(p3obj)
            // if(p2obj.socketID == p1obj.socketID ){

            //     arr.splice(1,2);
            // }else{
            //     console.log("dont")
            //     palyingArray.push(p2obj)
            // }
             
            if(palyingArray.length==2){
                arr.splice(0,2)
                io.emit('getplayer',palyingArray)
                palyingArray.splice(0,2)
                 
            }
        }
        // console.log(nickName)
        console.log(arr.length)
    })
})

httpServer.listen(3001);
 
