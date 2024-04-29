'use client';
import { createTheme } from '@mui/material/styles';

const darkPalette = {
    palette: {
        mode: "dark",
        primary: {
          main: "#9400D3",
        }
    },
    typography: {
      h1: {
        fontSize: "23px",
      },
    },
    components: {
      
    },
  };
  
  
  export const darkTheme = createTheme(darkPalette);