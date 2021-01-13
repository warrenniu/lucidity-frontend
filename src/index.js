import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './Redux/rootReducer';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'fontsource-roboto';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// const store = createStore(rootReducer, applyMiddleware(thunk))

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33a472',
			main: '#000',
      dark: '#d3d3d3',
      contrastText: '#000',
    },
    secondary: {
      light: '#000',
      main: '#000',
      dark: '#000',
      contrastText: '#fff',
		}
	},
})
ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Provider store={store}> */}
    <MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>
    {/* </Provider> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
