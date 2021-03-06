import React from 'react';
import ReactDOM from 'react-dom';
import { provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
//import Card from './Card';
import App from './Containers/App'
import 'tachyons'
import reportWebVitals from './reportWebVitals';
import { searchfreind } from './reducers';

const store = createStore(searchfreind)

ReactDOM.render(
  <React.StrictMode>
    <provider store={store}>
      <App />
    </provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
