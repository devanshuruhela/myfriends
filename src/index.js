import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import { friend } from './friend';
import 'tachyons'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Card id={friend[1].id} name={friend[1].name} email={friend[1].email}/>
      <Card id={friend[2].id} name={friend[2].name} email={friend[2].email}/>
      <Card id={friend[3].id} name={friend[3].name} email={friend[3].email}/>
      <Card id={friend[4].id} name={friend[4].name} email={friend[4].email}/>
      <Card id={friend[5].id} name={friend[5].name} email={friend[5].email}/>
      <Card id={friend[6].id} name={friend[6].name} email={friend[6].email}/>
   
    </div>
  </React.StrictMode>,
 document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
