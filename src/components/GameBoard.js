import React from "react";
import Cell from "./Cell";

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(3,100px)",
  gridTemplateRows: "repeat(3,100px)",
  gridGap: "5px",
  padding: "5px",
};

const GameBoard = ({ onChange, currentBoard }) => {
  const createMatrix = (rows, cols) => {
    let ElementsMatrix = [];
    for (let i = 0; i < rows; i++) {
      ElementsMatrix[i] = [];
      for (let j = 0; j < cols; j++) {
        ElementsMatrix[i][j] = (
          <Cell
            content={currentBoard[i][j]}
            key={(i, j)}
            row={i}
            col={j}
            handleClick={onChange}
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

  return (
    <div className="container" style={style}>
      {renderBoard()}
    </div>
  );
};
export default GameBoard;
