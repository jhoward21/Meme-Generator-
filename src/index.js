import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function MyApp() {
  return (
  <div
  ><h1>Hello World!</h1>
    <h2>This is a list of sports</h2>
    <p>I love sports and enjoy playing them.</p>
    <ul>
  <li>Football</li>
  <li>Baseball</li>
  <li>Basketball</li>
    </ul>
  </div>
  )
}


//JSX
ReactDOM.render(
  <MyApp />,
document.getElementById
("root"))



