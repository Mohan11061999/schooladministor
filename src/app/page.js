'use client';

import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography, Grid } from "@mui/material";
import { lightTheme } from "./_theme/lightTheme";
import { darkTheme } from "./_theme/darkTheme";
import ColorMode from "./_components/colorMode/page";
import SignIn from "./_components/Signin/page";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Grid container justifyContent={"flex-end"} alignItems={"center"} padding={"10px 20px"} >
        <ColorMode darkMode={darkMode} handleThemeChange={handleThemeChange} />
      </Grid>
      <Grid container justifyContent={"center"} alignItems={"center"} height={"70vh"} >
        <SignIn />
      </Grid>
    </ThemeProvider>
  );
};

export default Home