const mongoose = require('mongoose')

//shema

const GameSchema=new mongoose.Schema({
    words:[{type:string}],
    StartTime:{
        type:Number
    },
    players:[
        playerSchema
    ],
    isStarted:{
        type:Boolean,
        default:true
    },
    isOver:{
        type:Boolean,
        default:false
    }
     

})

module.exports= mongoose.model('Game',GameSchema)



const playerSchema = new mongoose.Schema({
    currentWordIndex:{
        type:Number,
        default:0
    },
    socketID:{
        type:String
    },
    WordPerMin:{
        type:Number,
        default:-1
    },
    userName:{
        type:String
    }
})