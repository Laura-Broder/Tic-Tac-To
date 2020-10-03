import React, { useState, useEffect } from "react";
import GameBoard from "./GameBoard";
import History from "./History";

const GameBoardContainer = () => {
  const [nextPlayer, setNextPlayer] = useState("X");
  const [history, setHistory] = useState([]);
  const [board, setBoard] = useState([]);
  const [winner, setWinner] = useState("");

  const onChange = (nextPlayerContent, newBoard) => {
    setNextPlayer(nextPlayerContent);
    const newHistory = history;
    newHistory.push(newBoard);
    setHistory(newHistory);
    setBoard(newBoard);
    const isWin = checkWin();
    if (isWin) {
      handleWin(isWin);
    }
  };
  const handleWin = (isWin) => {
    setWinner(isWin);
    setHistory([]);
    // block game until game reset is clicked
  };
  const checkWin = () => {
    const rows = board.length;
    const cols = board[0].length;
    for (let row = 0; row < rows; row++) {
      const rowWin = board[row].every((cell) => {
        return cell === board[row][0];
      });
      if (rowWin && board[row][0]) {
        console.log(board[row][0]);
        return board[row][0];
      }

      for (let col = 0; col < cols; col++) {
        let colWin = false;
        for (let row = 0; row < rows; row++) {
          colWin = board[row][col] === board[0][col];
        }
        if (colWin && board[0][col]) {
          console.log(board[0][col]);
          return board[0][col];
        }
      }
    }
  };
  const onStepClick = (stepNumber) => {
    const newHistory = history;
    newHistory.splice(stepNumber);
    setHistory(newHistory);
  };
  const onResetClick = () => {
    setBoard(createMatrix(3, 3));
    setHistory([]);
    setNextPlayer("X");
    setWinner("");
  };
  const createMatrix = (rows, cols) => {
    let newDataArray = [];
    for (let i = 0; i < rows; i++) {
      newDataArray[i] = [];
      for (let j = 0; j < cols; j++) {
        newDataArray[i][j] = "";
      }
    }
    return newDataArray;
  };
  const renderNextPlayer = () => {
    return winner ? (
      <h2>The Winner is {winner}</h2>
    ) : (
      <div>NextPlayer: {nextPlayer}</div>
    );
  };
  useEffect(() => {
    setBoard(createMatrix(3, 3));
  }, []);

  return (
    <div>
      {board.length ? (
        <GameBoard
          nextPlayer={nextPlayer}
          onChange={onChange}
          currentBoard={board}
        />
      ) : (
        <h1>Loading</h1>
      )}
      <div>
        <History
          newHistory={history}
          onStepClick={onStepClick}
          onResetClick={onResetClick}
        />
        {renderNextPlayer()}
      </div>
    </div>
  );
};
export default GameBoardContainer;
