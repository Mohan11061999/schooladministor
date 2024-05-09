'use client';
import { createTheme } from '@mui/material/styles';

const theme = {
  palette: {
    primary: {
      main: '#7F3B8F',
      bg: '#FCEFFF',
    },
    secondary: {
      main: '#6f51b0',
      bg: '#eae8ff'
    },
    error: {
      main: '#ff5445',
      bg: '#ffe6e6'
    },
    warning: {
      main: '#a37c29',
      bg: '#ffe7ab'
    },
    pending: {
      main: '#de7850',
      bg: '#ffebd9'
    },
    info: {
      main: '#587ebf',
      bg: '#dcecfc'
    },
    success: {
      main: '#3e8020',
      bg: '#e3f5da',
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
    MuiButton: {
      styleOverrides: {
        root: {
          // textTransform: 'capitalize',
          // borderRadius: 10,
          // padding: '10px 20px',
          // '&:hover': {
          //   boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
          // }
        }
      }
    }
  },
};

export const Theme = createTheme(theme);
