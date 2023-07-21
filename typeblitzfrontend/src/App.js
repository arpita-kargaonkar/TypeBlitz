import './App.css';
import   React, {   useEffect,useState } from "react";
import history from './history';
import Home from './component/Home'
import io from "socket.io-client"
import CreateGame from './component/Creatgame';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:"/game/create" ,
    element:<CreateGame/>
  }
])

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
  return (
    <div className="App">
       
      <React.StrictMode>
        
        <RouterProvider history={history}router={router}/>
      </React.StrictMode>

    </div>
  );
}

export default App;