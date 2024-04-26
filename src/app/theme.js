'use client';

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#000', // Default MUI blue
    },
    secondary: {
      main: '#ffc107', // Default MUI orange
    },
    error: {
      main: '#dc3545', // Default MUI red for errors
    },
    background: {
      default: '#f5f5f5', // Light background color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Set base font family
    h1: {
      fontSize: '2rem', // Adjust heading size
    },
    body1: {
      fontSize: '0.875rem', // Adjust body text size
    },
  },
  spacing: 8, // Set default spacing unit for margins/paddings
  breakpoints: {
    values: {
      xs: 0, // Extra small screen size
      sm: 600, // Small screen size
      md: 900, // Medium screen size
      lg: 1200, // Large screen size
      xl: 1536, // Extra large screen size
    },
  },
  components: {
    MuiButton: { // Override button styles
      defaultProps: {
        variant: 'outlined', // Set default button variant
      },
      styleOverrides: {
        root: {
            fontSize: '0.875rem', // Adjust button text size
            borderRadius:10, // Set default button border radius
        },
      },
    },
  },
});

export default theme;
