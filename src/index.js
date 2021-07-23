import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App  from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
let me ="meshv patel";
let sec = <div>hi i am {me} </div>  ;  var happy= "niothusbn";
let th = <p>{sec} i learnt bit about react now. { console.log("hello") } </p>

ReactDOM.render( th , document.getElementById("me")    );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
