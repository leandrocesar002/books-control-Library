import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';

export default function App() {
  const theme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          textField: {
            marginTop: 15,
            fontSize: 16,
            width: 400,
            height: 49,
            paddingTop: 15,
            background: 'white',
          },
          input: {
            backgroundColor: 'primary',
            marginTop: 12,
          },
          margin: {
            width: 400,
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme} />;
}
