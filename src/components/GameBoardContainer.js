import React, { useState, useEffect } from "react";
import GameBoard from "./GameBoard";
import History from "./History";

const GameBoardContainer = () => {
  const [nextPlayer, setNextPlayer] = useState("X");
  const [history, setHistory] = useState([]);
  const [board, setBoard] = useState([]);
  const [winner, setWinner] = useState("");
  const [activeBoard, setActiveBoard] = useState(true);

  const onChange = (row, col) => {
    if (activeBoard) {
      const newBoard = updateBoard(row, col);
      // change the next player
      setNextPlayer(updateNextPlayer());
      // save board to history
      updateHistory(newBoard);
      // update the board display
      setBoard(newBoard);
      // check if won
      const isWin = checkWin(newBoard);
      if (isWin) {
        setActiveBoard(false);
        setWinner(isWin);
      }
    }
  };
  // update board
  const updateBoard = (row, col) => {
    const newBoard = JSON.parse(JSON.stringify(board));
    newBoard[row][col] = nextPlayer;
    return newBoard;
  };
  // change the next player
  const updateNextPlayer = () => {
    return nextPlayer === "X" ? "0" : "X";
  };
  // save board to history
  const updateHistory = (newBoard) => {
    if (history.length === 0) {
      setHistory([JSON.parse(JSON.stringify(newBoard))]);
    } else {
      const newHistory = JSON.parse(JSON.stringify(history));
      newHistory.push(JSON.parse(JSON.stringify(newBoard)));
      setHistory(newHistory);
    }
  };
  const checkWin = (newBoard) => {
    console.log(newBoard);
    const rows = newBoard.length;
    const cols = newBoard[0].length;
    // check rows
    for (let row = 0; row < rows; row++) {
      const rowWin = newBoard[row].every((cell) => {
        return cell === newBoard[row][0];
      });
      if (rowWin && newBoard[row][0]) {
        return newBoard[row][0];
      }
    }
    // check columns
    for (let col = 0; col < cols; col++) {
      let colWin = true;
      for (let row = 0; row < rows && colWin; row++) {
        colWin = newBoard[row][col] === newBoard[0][col];
      }
      if (colWin && newBoard[0][col]) {
        return newBoard[0][col];
      }
    }
    // check diagonal (assume the board is square)
    let diag1Win = true;
    for (let i = 0; i < cols; i++) {
      diag1Win = newBoard[i][i] === newBoard[0][0];
    }
    if (diag1Win && newBoard[0][0]) {
      return newBoard[0][0];
    }
    let diag2Win = true;
    for (let col = cols; col > 0; col--) {
      for (let row = 0; row < rows; row++) {
        diag2Win = newBoard[row][col] === newBoard[0][cols];
      }
    }
    if (diag2Win && newBoard[0][cols]) {
      return newBoard[0][cols];
    }
    // check if even
    if (history.length === 8) {
      return "Even";
    }
  };
  const onStepClick = (stepNumber) => {
    if (stepNumber !== history.length - 1) {
      setActiveBoard(true);
    }
    const newHistory = JSON.parse(JSON.stringify(history));
    newHistory.length = stepNumber + 1;
    setHistory(JSON.parse(JSON.stringify(newHistory)));
    setBoard(newHistory[stepNumber]);
    setWinner("");
    if (stepNumber % 2) {
      setNextPlayer("X");
    } else {
      setNextPlayer("0");
    }
  };
  const onResetClick = () => {
    setActiveBoard(true);
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
    if (winner) {
      if (winner === "Even") {
        return "Nobody Won";
      }
      return `The Winner is ${winner}`;
    } else {
      return `The Next Player is ${nextPlayer}`;
    }
  };
  useEffect(() => {
    setBoard(createMatrix(3, 3));
  }, []);

  return (
    <div className="container">
      {board.length ? (
        <GameBoard
          nextPlayer={nextPlayer}
          onChange={onChange}
          currentBoard={board}
        />
      ) : (
        <h1>Loading</h1>
      )}
      <footer>
        <h2>{renderNextPlayer()}</h2>
        <History
          newHistory={history}
          onStepClick={onStepClick}
          onResetClick={onResetClick}
        />
      </footer>
    </div>
  );
};
export default GameBoardContainer;
