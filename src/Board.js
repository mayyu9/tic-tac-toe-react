import React, { useState } from 'react';
import Square from './Square';
import { calculateWinner }  from './helpers'; 

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true); // keep track of next players info
    // const [gameOver, setGameOver] = useState(false);


    const squareHandler = (index) => {
        
        if(calculateWinner(squares) || squares[index]) return;

        const nextSquares = squares.slice(); // create a copy of the squares
        if(xIsNext) {
            nextSquares[index] = 'X';
        } else {
            nextSquares[index] = 'O';
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    const winner = calculateWinner(squares);
    let status;

    if(winner){
        status = 'Winner: ' + winner;
        // setGameOver(true);
    } else {
        status = 'Next Player: ' + (xIsNext ? 'X' : 'O');
    }

    const handleReset= () => {
        // setSquares(Array(9).fill(null));
        status = null;
    }
    
    return(
        <>
        <div className='board-row'>
            <Square value={squares[0]} onSquareClick = {() =>squareHandler(0)} />
            <Square value={squares[1]} onSquareClick = {() =>squareHandler(1)} />
            <Square value={squares[2]} onSquareClick = {() =>squareHandler(2)} />
        </div>
        <div className='board-row'>
            <Square value={squares[3]} onSquareClick = {() =>squareHandler(3)} />
            <Square value={squares[4]} onSquareClick = {() =>squareHandler(4)} />
            <Square value={squares[5]} onSquareClick = {() =>squareHandler(5)} />
        </div>
        <div className='board-row'>
            <Square value={squares[6]} onSquareClick = {() =>squareHandler(6)} />
            <Square value={squares[7]} onSquareClick = {() =>squareHandler(7)} />
            <Square value={squares[8]} onSquareClick = {() =>squareHandler(8)} />
        </div>

        <div>{status}</div>
        {/* {gameOver ? (<div><button type='button' onClick={handleReset}>Reset</button></div>) : null} */}
        </>
    )
};

export default Board;
