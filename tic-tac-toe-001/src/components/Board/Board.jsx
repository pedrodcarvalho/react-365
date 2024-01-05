import React, { useState } from "react";

import "./Board.css";

import Square from "../Square/Square";

const Board = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState('X');
    const [winner, setWinner] = useState(null);

    const calculateWinner = (board) => {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winPatterns.map((pattern) => {
            if (pattern.every((index) => board[index] === "X")) {
                setWinner("X");
            }
            else if (pattern.every((index) => board[index] === "O")) {
                setWinner("O");
            }

            if (board.every((square) => square !== null)) {
                setWinner("Draw");
            }
        });
    };

    const handleClick = (index) => {
        board[index] = turn;

        setBoard((prevBoard) => [...prevBoard] = board);
        setTurn((prevTurn) => (prevTurn === "X" ? "O" : "X"));

        calculateWinner(board);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setTurn('X');
        setWinner(null);
    };

    return (
        <>
            <div className='board'>
                {board.map((square, index) => (
                    <Square key={index} value={square} onClick={() => { handleClick(index) }} />
                ))}
            </div>
            {
                winner &&
                <>
                    <h1>{winner !== 'Draw' ? `${winner} Wins!` : winner}</h1>
                    <button onClick={resetGame}>Reset</button >
                </>
            }
        </>
    );
};

export default Board;
