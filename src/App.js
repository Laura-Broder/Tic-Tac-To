import React from "react";
import "./App.css";
import GameBoardContainer from "./components/GameBoardContainer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <GameBoardContainer />
    </div>
  );
}

export default App;
