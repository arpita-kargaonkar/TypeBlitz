import './App.css';
import   React, {   useEffect } from "react";
import history from './history';
import Home from './component/Home'
import io from "socket.io-client"
 
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
  }
])

const socket =   io('/',{
  autoConnect:false,
  withCredentials:true,
})

function App() {
  useEffect(()=>{
     console.log('hi')
     socket.connect();
     socket.on('test',msg=>{
      console.log(msg)
    })
    socket.on("connect_error",()=>{
      console.log("server error")
    })
  })
  return (
    <div className="App">
       
      <React.StrictMode>
        
        <RouterProvider history={history}router={router}/>
      </React.StrictMode>

    </div>
  );
}

export default App;