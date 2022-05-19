import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"; //react router provider
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import { } from 'redux';
// reducers
import { meetReducer } from './store/meetsReducers/reducers';
import { loginReducer } from './store/login/reducers';

import { devToolsEnhancer } from 'redux-devtools-extension';
import { ThemeProvider } from 'styled-components';
import { Theme } from './Theme/Pallete';

const reducers = combineReducers({ meetInfo: meetReducer, userInfo: loginReducer });
export const store = createStore(reducers, (process.env.NODE_ENV === "development") ? devToolsEnhancer({ name: "mentoresHN" }) : null);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
