import React from 'react';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppRouter from './AppRouter';
import { mainTheme } from '../themes';
import AppStyled from './AppStyled';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={mainTheme}>
      <AppStyled />
      <Router>
        <Switch>
          <AppRouter />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
