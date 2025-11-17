'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#090806',
      paper: '#090806',
    },
    text: {
      primary: '#FFFCF3',
    },
    primary: {
      main: '#308B3B',
    },
    secondary: {
      main: '#DB2518',
    },
    info: {
      main: '#2E6BA4',
    },
    warning: {
      main: '#FCC81C',
    },
  },
  typography: {
    fontFamily: '"Nunito", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Bree Serif", serif',
    },
    h2: {
      fontFamily: '"Bree Serif", serif',
    },
    h3: {
      fontFamily: '"Bree Serif", serif',
    },
    body1: {
      fontFamily: '"Nunito", "Helvetica", "Arial", sans-serif',
    },
    body2: {
      fontFamily: '"Nunito", "Helvetica", "Arial", sans-serif',
    },
  },
});

export function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}