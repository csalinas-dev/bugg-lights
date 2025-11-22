'use client';

import { responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';

const headings = {
  fontFamily: '"Bree Serif", serif',
  marginBottom: '0.25em',
}

const body = {
  fontFamily: '"Nunito", "Helvetica", "Arial", sans-serif',
}

let theme = createTheme({
  palette: {
    background: {
      default: '#090806',
      paper: '#1f283d',
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
    ...body,
    h1: headings,
    h2: headings,
    h3: headings,
    h4: headings,
    h5: headings,
    h6: headings,
    body1: body,
    body2: body,
  },
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true, // Use gap instead of margin
      },
    },
  },
});

theme = responsiveFontSizes(theme);


export function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}