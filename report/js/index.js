import React from 'react';
import ReactDOM from "react-dom";
import {Router} from 'react-router'
import { createHashHistory } from 'history'
import Routes from './routes/index'

import './index.css';

const history =  createHashHistory()

ReactDOM.render(
  <Router
    routes={Routes}
    history={history}
  />,
  document.getElementById('root')
);