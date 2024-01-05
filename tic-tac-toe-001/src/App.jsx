import React from "react";

import "./App.css";

import Board from "./components/Board/Board";

const App = () => {
    return (
        <>
            <div className="flexWrapper">
                <h1>Tic Tac Toe - 001</h1>
                <Board />
            </div>
        </>
    );
};

export default App;
