import './App.css';
import   React, {   useEffect,useState } from "react";
import history from './history';
import Home from './component/Home'
import io from "socket.io-client"
import CreateGame from './component/Creatgame';

import {
  BrowserRouter,Route,Routes} from "react-router-dom";

 

const socket =   io('/',{
  autoConnect:false,
  withCredentials:true,
})

function App() {
  const [gameState,setGameState] = useState({_id:"",isOpen:false,player:[],words:[]})
  
  useEffect(()=>{
     console.log('hillo')
     socket.connect();
     socket.on('updateGame', (game)=>{
       // alert("hee")
       setGameState(game);
       console.log(game);
       
     })
    socket.on("connect_error",()=>{
      console.log("server error")
    })
    return()=>{
      socket.removeAllListeners();
    }
  })

  useEffect(()=>{
    if(gameState._id!=="")
      // console.log("hire")
      history.push(`/game/${gameState._id}`)
  },[gameState._id])

  useEffect(()=>{
    socket.on('getplayer',(palyingArray)=>{
      console.log("new player")
      console.log(palyingArray)
    })
  })
  return (
    <div className="App">
       
      

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/joingame" element={<CreateGame/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;