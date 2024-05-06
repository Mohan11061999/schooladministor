'use client';
import { createTheme } from '@mui/material/styles';

const theme = {
  palette: {
    primary: {
      main: '#7F3B8F',
    },
    secondary: {
      main: '#F2F2F2',
    },
    // error: {
    //   main: '#C02942', 
    // },
    warning: {
      main: '#F7D09B',
    },
    // info: {
    //   main: '#9B59B6', 
    // },
    success: {
      main: '#73A96B',
    },
    background: {
      default: '#f7f9fa',
      paper: "#fff"
    }
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontWeight: 600,
      fontSize: '2.375rem',
      lineHeight: 1.21
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.27
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.33
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4
    },
    h5: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5
    },
    h6: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.57
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
      color: '#999'
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.57,
      color: '#999'
    },
    body2: {
      fontSize: '0.75rem',
      lineHeight: 1.66,
      color: '#999'
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.57,
      color: '#999'
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.66,
      color: '#999'
    },
    overline: {
      lineHeight: 1.66,
      color: '#999'
    },
    button: {
      textTransform: 'capitalize'
    }
  },
  components: {

  },
};

export const Theme = createTheme(theme);
