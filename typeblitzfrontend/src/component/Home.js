import React from "react";
// import {useNavigate} from 'react-router-dom'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import CreateGame from "./Creatgame";
const Home=()=>{
    // let  navigate =useNavigate();
    return(
        <>
        <div >
            <h1>Welcome to typeBlitz</h1>
            <button type='button'   ><Link to='/joingame'>Play with friends</Link></button>
            <button type='button'  ><Link to='/joingame'>Join game randoml</Link> </button>
        </div>
        <Routes>
            <Route exact path='/joingame' element={<CreateGame/>}/>
        </Routes>
        </>
    );
}

export default Home;