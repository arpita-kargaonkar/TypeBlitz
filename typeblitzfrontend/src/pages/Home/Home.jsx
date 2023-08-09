import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Home.css"
import { useNavigate } from "react-router-dom";
import { connectSocket, disconnectSocket, socket } from "../../services/socket";
import { useGame } from "../../contexts/GameContext";

const Home = () => {
    const navigate = useNavigate();
    const { firstName, setFirstName } = useGame();

    useEffect(() => {
        connectSocket();

        // socket.on('updateGame', (state)=>{
        //     setGameState(state);
        // })
        socket.on("connect_error",()=>{
            console.log("Something went wrong!");
        })
        socket.on('getPlayer', (_) => {
            // param is the players array
            console.log('here player')
            navigate(`/game/new`);
        });

        return () => {
        disconnectSocket();
        }
    }, []);

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
                <div>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        placeholder="First Name"
                        defaultValue={firstName}
                        onChange={(e) => setFirstName(e.target.value)}/>
                     {/* will see links afterwards */}
                    <Link to='/joingame'>Next</Link>
                    <Link to='/joingame' state={{name:''}}>Skip for now</Link>
                </div>
            </div>
        </>
    );
}

export default Home;