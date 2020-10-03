import React, { useState } from "react";
import Cell from "./Cell";

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(3,100px)",
  gridTemplateRows: "repeat(3,100px)",
  gridGap: "5px",
  padding: "5px",
};

const GameBoard = ({ nextPlayer, onChange, currentBoard }) => {
  const [nextPlayerContent, setNextPlayerContent] = useState(nextPlayer);

  const handleClick = (row, col) => {
    currentBoard[row][col] = nextPlayerContent;
    let newNextPlayer = nextPlayerContent === "X" ? "0" : "X";
    setNextPlayerContent(newNextPlayer);
    onChange(newNextPlayer, currentBoard);
  };

  const createMatrix = (rows, cols) => {
    let ElementsMatrix = [];
    for (let i = 0; i < rows; i++) {
      ElementsMatrix[i] = [];
      for (let j = 0; j < cols; j++) {
        ElementsMatrix[i][j] = (
          <Cell
            content={currentBoard[i][j]}
            key={(i, j)}
            nextPlayer={nextPlayerContent}
            row={i}
            col={j}
            handleClick={handleClick}
          />
        );
      }
    }
    return ElementsMatrix;
  };

  const renderBoard = () => {
    if (currentBoard.length) {
      const rows = currentBoard.length;
      const cols = currentBoard[0].length;
      return createMatrix(rows, cols);
    } else return <h1>Loading...</h1>;
  };

  return <div style={style}>{renderBoard()}</div>;
};
export default GameBoard;
