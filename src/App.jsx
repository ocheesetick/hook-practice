import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import UseState from "./pages/UseState";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/useState' element={<UseState />} />
        </Routes>
    );
};

export default App;
