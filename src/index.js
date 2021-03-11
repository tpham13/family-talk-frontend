import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(

  /* Using the <Provider> component provided by the React Redux library, 
  we gave our components the ability to be connected to the store. */ 
  
    <Provider store={ store }>
    
       <Router><App /></Router>
     
    </Provider>,
  document.getElementById('root')
);

