import './App.css';
import React from "react";
import AppRouter from './router/AppRouter';
import GameProvider from './contexts/GameContext';

const App = () => {
  return (
    <div className="App">
      <GameProvider>
        <AppRouter />
      </GameProvider>
    </div>
  );
}

export default App;