import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './Redux/rootReducer';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'fontsource-roboto';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


const store = createStore(rootReducer, applyMiddleware(thunk))

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33a472',
      main: '#8d53ff',
      dark: '#d3d3d3',
      contrastText: '#8d53ff',
    },
    secondary: {
      light: '#824AFF',
      main: '#824AFF',
      dark: '#824AFF',
      contrastText: '#fff',
    }
  },
})
ReactDOM.render(
    <Router>
      <CssBaseline />
      <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
      </Provider>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
