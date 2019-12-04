import React, { useState } from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";

function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown step";
  }
}

const StepperExample = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = getSteps();

  return (
    <Stepper alternativeLabel activeStep={activeStep}>
      {steps.map(label => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperExample;
