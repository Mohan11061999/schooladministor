'use client';
import React from 'react'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import StudCard from './studCard';
import { Grid } from '@mui/material';

const steps = [
    {
        label: 'Sathya',

    },
    {
        label: 'Saran',

    },
    {
        label: 'Kailash',

    },
    {
        label: 'Risha',

    },
    {
        label: 'Sarath',

    },
    {
        label: 'Jannath',

    },
];

const StudCarosel = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Grid container direction={"column"} justifyContent={"center"} gap={12} >
            <Grid item container gap={2} justifyContent={"space-around"} alignItems={"center"}>
                {steps[activeStep - 1]?.label ? <StudCard name={steps[activeStep - 1].label} /> : <></>}

                <StudCard name={steps[activeStep].label} />

                {steps[activeStep + 1]?.label ? <StudCard name={steps[activeStep + 1].label} /> : <></>}

            </Grid>
            <Grid item  >
                <MobileStepper
                    variant="dots"
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
            </Grid>
        </Grid >




    );

}

export default StudCarosel