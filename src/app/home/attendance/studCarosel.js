'use client';
import React from 'react'
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import StudCard from './studCard';
import { Grid, Hidden, IconButton, MenuItem, Select, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
        <Grid container direction={"column"} justifyContent={"space-around"} gap={12}  >
            <Grid item container justifyContent={"space-between"} alignItems={"center"} height={"70px"} px={3} >
                <Grid item>
                    <Typography variant="h3">Students</Typography>
                </Grid>
                <Grid item>
                    <Select
                        size='small'
                        value={10}
                        sx={{ width: 150 }}
                    >
                        <MenuItem value={10} >Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </Grid>
            </Grid>
            <Grid item container gap={2} justifyContent={"space-around"} alignItems={"center"} overflow={"hidden"} >
                <IconButton onClick={handleBack} disabled={activeStep === 0} size='large'  ><ArrowBackIosIcon /></IconButton>
                <Hidden lgDown >
                    <motion.div initial={{ scale: 0.7 }}  >
                        {steps[activeStep - 1]?.label ? <StudCard name={steps[activeStep - 1].label} /> : <></>}
                    </motion.div>
                </Hidden>
                <motion.div initial={{ scale: 0.9 }}  >
                    <StudCard name={steps[activeStep].label} handleNext={handleNext} />
                </motion.div>
                <Hidden lgDown >
                    <motion.div initial={{ scale: 0.7 }} >
                        {steps[activeStep + 1]?.label ? <StudCard name={steps[activeStep + 1].label} /> : <></>}
                    </motion.div>
                </Hidden>
                <IconButton onClick={handleNext} disabled={activeStep === maxSteps - 1} ><ArrowForwardIosIcon /></IconButton>
            </Grid>
            <Grid item container justifyContent={"center"} alignItems={"center"} >
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                />
            </Grid>
        </Grid >




    );

}

export default StudCarosel