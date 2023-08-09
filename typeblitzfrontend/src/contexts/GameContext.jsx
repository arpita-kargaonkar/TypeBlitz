import React, { useState } from "react";

const GameContext = React.createContext();

export const useGame = () => React.useContext(GameContext);

const GameProvider = ({ children }) => {
    const [firstName, setFirstName] = useState("");
    const [gameState,setGameState] = useState({_id:"",isOpen:false,player:[],words:[]})

    const value = {
        firstName,
        setFirstName,
        gameState,
        setGameState
    };
    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
};

export default GameProvider;