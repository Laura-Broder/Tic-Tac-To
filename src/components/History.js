import React from "react";
import Button from "../stories/Button";
import Step from "./step";

const History = ({ newHistory, onStepClick, onResetClick }) => {
  const renderSteps = () => {
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
    <div className="history">
      <Button
        backgroundColor="rgba(215,137,215,1)"
        label="Restart Game"
        onClick={onResetClick}
        primary
        size="large"
      />
      <div className="history-steps">{renderSteps()}</div>
    </div>
  );
};
export default History;
