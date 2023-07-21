import React from "react";
import {useNavigate} from 'react-router-dom'

const Home=()=>{
    let  navigate =useNavigate();
    return(
        <div >
            <h1>Welcome to typeBlitz</h1>
            <button type='button' onClick={()=>navigate('/Creategame')} >Play with friends</button>
            <button type='button' onClick={()=>navigate('/creategame')}> Join game randoml</button>
        </div>
    );
}

export default Home;