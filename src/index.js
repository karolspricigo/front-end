import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TextField from '@material-ui/core/TextField';
//import registerServiceWorker from '.registerServiceWorker';;
import { BrowserRouter } from 'react-router-dom';
 
 
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));
//registerServiceWorker();