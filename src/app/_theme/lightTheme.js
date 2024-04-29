'use client';
import { createTheme } from '@mui/material/styles';

const lightPalette = {
    palette: {
      mode: "light",
    },
    typography: {
      h1: {
        fontSize: "23px",
      },
    },
};
  
export const lightTheme = createTheme(lightPalette);