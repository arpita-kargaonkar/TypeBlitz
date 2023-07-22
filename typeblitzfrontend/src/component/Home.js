import React,{useState} from "react";
// import {useNavigate} from 'react-router-dom'
import { BrowserRouter ,Routes, Route, Link ,useNavigate} from 'react-router-dom';
import "./Home.css"

const Home=()=>{
    let  navigate =useNavigate();

    const [fname,setfName] = useState("")
    const onChange = e=>{
        setfName(e.target.value);
    }
    const onSubmit =e=>{
        // e.preventDefault();
         
        // alert(fname)
        console.log(fname)

    }

    return(
        <>
        <div class="tab">Welcome to TextBlitz</div>
   <div class="box">
    <h2 style={{color: "aliceblue"}}>The TextBlitz</h2>
    <p style={{color: "aliceblue"}}>Test and improve your typing skills with this 
        thrilling and engaging Speed Typing Game. Race against the clock to type the given words as quickly and accurately as possible. Challenge your friends or compete with players worldwide in real-time multiplayer mode. </p>
   </div> 
   
   
   <div class="user">
    <h3>Enter your username</h3>
    <form  >
        <input type="text" id="fname" name="fname" placeholder="username"
                                                    value={fname}
                                                    onChange={onChange}/><br/><br/>

    <button class="button" type="submit" onClick={onSubmit}><Link to='/joingame' state={{name:fname}}>Next</Link></button><br/>

    <span class="skip" onClick={onSubmit}> <Link to='/joingame'  state={{name:''}}>Skip for now</Link> </span>
    </form>
   </div>
        
        </>
    );
}

export default Home;
/* <div >
    <h1>Welcome to typeBlitz</h1>
    <button type='button'   ><Link to='/joingame'>Multi PLayer</Link></button>
     
</div> */