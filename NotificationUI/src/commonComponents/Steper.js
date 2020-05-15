import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps(Steps) {
    console.log(Steps)
    return [Steps.first, Steps.second, Steps.last];
}

function getStepContent(stepIndex, Details) {
    switch (stepIndex) {
        case 0:
            return Details.first;
        case 1:
            return Details.second;
        case 2:
            return Details.last;
        default:
            return 'Unknown stepIndex';
    }
}

export default function HorizontalLabelPositionBelowStepper({ Steps, Details, children, activeStep }) {
    const classes = useStyles();

    const steps = getSteps(Steps);

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>

                    </div>
                ) : (
                        <div>


                            <Typography className={classes.instructions}>{getStepContent(activeStep, Details)}</Typography>

                        </div>
                    )}
            </div>
        </div>
    );
}