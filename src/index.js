import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import App from './App';

import './index.css';
import './variables.css';
import back from './images/back.png';

document.getElementsByTagName('body')[0].style.backgroundImage = `url(${back})`;

ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>,
    document.getElementById('root')
);

