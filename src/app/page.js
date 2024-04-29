'use client';

import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography, Button, Switch, Grid } from "@mui/material";
import { lightTheme } from "./_theme/lightTheme";
import { darkTheme } from "./_theme/darkTheme";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Grid container justifyContent={"flex-end"} alignItems={"center"} >
        <Switch checked={darkMode} onChange={handleThemeChange} />
        <Typography variant="h1">{darkMode?"🌙Dark":"🔆Light"}</Typography>
      </Grid>
    </ThemeProvider>
  );
};

export default Home