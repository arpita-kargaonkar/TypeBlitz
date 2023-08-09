import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import CreateGame from '../pages/CreateGame/CreateGame';
import Typeracer from '../pages/TypeRacer/TypeRacer';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/joingame" element={<CreateGame/>}/>
            <Route path="/game/new"  element={<Typeracer />} />
        </Routes>
    );
};

export default AppRouter;