import React from "react";
import Step from "./step";

const History = ({ newHistory, onStepClick, onResetClick }) => {
  // const [history, setHistory] = useState([]);

  const renderSteps = () => {
    // console.log(history);
    return newHistory.map((item, index) => (
      <Step
        key={index}
        stepNumber={index}
        stepBoard={item}
        onStepClick={onStepClick}
      />
    ));
  };
  return (
    <div>
      <button type="button" onClick={onResetClick}>
        Restart Game
      </button>
      {renderSteps()}
    </div>
  );
};
export default History;
