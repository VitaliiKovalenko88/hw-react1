import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from 'index.styled';



ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

