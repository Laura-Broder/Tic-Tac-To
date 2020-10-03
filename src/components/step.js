import React from "react";
import Button from "../stories/Button";

const Step = ({ stepNumber, onStepClick }) => {
  return (
    <Button
      backgroundColor="#9d65c9"
      label={`Go to Step #${stepNumber + 1}`}
      onClick={() => {
        onStepClick(stepNumber);
      }}
      primary={false}
      size="small"
    />
  );
};

export default Step;
