import React from "react";

const Step = ({ stepNumber, stepBoard, onStepClick }) => {
  return (
    <button
      type="button"
      onClick={() => {
        onStepClick(stepNumber);
      }}>
      Step{stepNumber + 1}
    </button>
  );
};

export default Step;
