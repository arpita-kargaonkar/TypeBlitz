import React  from "react";
import "./CreateGame.css";
import { connectSocket,socket,disconnectSocket } from "../../services/socket";
import { useGame } from "../../contexts/GameContext";

  const CreateGame = () => {
    const { firstName } = useGame();

    const handleMultiplay = (e) => {
        e.preventDefault();
        connectSocket();
        socket.emit('nick', firstName)
        return () => {
            disconnectSocket();
        }
    }
    
    return(
        <div>
            <div class="tab">
                <h3>Hello {firstName}!!</h3>
                <h4>Settings</h4>
            </div>
            <div class="player">
                <button class="button">Single Player</button>
                {/* instead of <br>, do the styling from css */}
                <button class="button" onClick={handleMultiplay}>MultiPlayer</button>
            </div>
        </div>
    )
  }

  export default CreateGame;