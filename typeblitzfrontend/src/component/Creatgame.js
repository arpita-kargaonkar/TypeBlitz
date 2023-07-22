import React,{useState} from "react";
import io from "socket.io-client"
import "./Creatgame.css"
import { useLocation} from 'react-router-dom';


const socket =   io('/',{
    autoConnect:false,
    withCredentials:true,
  })


  const CreateGame = props=>{

    const location = useLocation();
    console.log('create')
    console.log(location.state.name)
    let nickName
    if(location.state.name == ''){
        nickName="userID"
    }else{

        nickName = location.state.name
    }
    // const [nickName,setNickName] = useState("")
    // const onChange = e=>{
    //     setNickName(e.target.value);
    // }
    const onSubmit =e=>{
        e.preventDefault();
        console.log(nickName)
        socket.connect();
        
        socket.emit('nick',nickName)
    }

    const multiplay =e=>{
        e.preventDefault();
        console.log(nickName)
        socket.connect();
        
        socket.emit('nick',nickName)
    }
    
    return(
        <div  >
            <div class="tab"><h3>Hello {nickName}!!</h3>
            <h4>Settings</h4></div>

            <div class="player">
        <button class="button">Single Player</button><br/><br/><br/>
        <button class="button" onClick={multiplay}>MultiPlayer</button>
    </div>

             
        </div>
    )
  }

  export default CreateGame;