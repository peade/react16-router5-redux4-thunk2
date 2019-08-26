import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AllRoutes from './router/Index'
import * as serviceWorker from './serviceWorker';
// console.log(Routes)
// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<AllRoutes />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
