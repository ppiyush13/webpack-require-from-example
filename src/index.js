import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './index.css';

render(<App/>, document.getElementById('root'));

window.react = React;
window.MICROFRONT_END_BASE_URL_MF1 = 'http://localhost:13005/';