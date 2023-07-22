import React,{useState} from "react";
import io from "socket.io-client"



const socket =   io('/',{
    autoConnect:false,
    withCredentials:true,
  })


  const CreateGame = props=>{
    const [nickName,setNickName] = useState("")
    const onChange = e=>{
        setNickName(e.target.value);
    }
    const onSubmit =e=>{
        e.preventDefault();
        console.log(nickName)
        socket.connect();
        
        socket.emit('nick',nickName)
    }
    return(
        <div className="row">
            <div className="col-sm"></div>
            <div className="col-sm-8">
                <h1 className="text-center">Create Game</h1>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="nickName">Enter Nick name</label>
                        <input type="text" name="nickName"
                                           value={nickName}
                                           onChange={onChange}
                                           placeholder="Enter Nick Name"
                                           className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>  
            </div>
        </div>
    )
  }

  export default CreateGame;