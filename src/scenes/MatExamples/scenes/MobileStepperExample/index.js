import React, { useState } from "react";
import { MobileStepper, Button, Slide } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import styles from "./styles";

function getSteps() {
  return ["Select campaign settings", "Create an ad group", "Create an ad"];
}

const useStyles = makeStyles(styles);

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

const MobileStepperExample = props => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();

  const steps = getSteps();
  const maxSteps = steps.length;

  const content = getStepContent(activeStep);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>{content}</div>
      <br />

      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Slide>
    </div>
  );
};

export default MobileStepperExample;
