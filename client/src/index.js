import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { createBrowserHistory } from "history";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import lightGreen from '@material-ui/core/colors/lightGreen';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: grey[900]
    },
    secondary: {
        main: lightGreen[500]
    }
  },
  status: {
    danger: 'orange',
  },
  typography: {
      h3: {
          color: 'orange'
      }
  }
});

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();