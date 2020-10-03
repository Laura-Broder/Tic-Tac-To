import React from "react";
import ReactDOM from "react-dom";
import GameBoardContainer from "./GameBoardContainer";

it("returns the winner", () => {
  const winner = "Even";
  const result = GameBoardContainer.renderNextPlayer();
  expect(result).toEqual("Nobody Won");
});
