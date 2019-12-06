import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./styles";

function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

const useStyles = makeStyles(styles);

const StepperExample = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(1);

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Button variant="contained" onClick={handleReset}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.backButton}
            >
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        )}
      </div>
      <fieldset>
        <legend>Current</legend>
        Lorem Ipsum
      </fieldset>
    </div>
  );
};

export default StepperExample;
