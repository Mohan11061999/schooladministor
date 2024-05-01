'use client';

import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography, Grid } from "@mui/material";
import { lightTheme } from "./_theme/lightTheme";
import { darkTheme } from "./_theme/darkTheme";
import ColorMode from "./_components/colorMode/page";
import SignIn from "./_components/Signin/page";
import { useContext } from "react";
import { ThemeContext } from "./_context/themeContext";
import { useRouter } from "next/navigation";

const Home = () => {

  const { darkMode, setDarkMode } = useContext(ThemeContext);
  console.log(darkMode,setDarkMode,"darkMode");;
  const router = useRouter();
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