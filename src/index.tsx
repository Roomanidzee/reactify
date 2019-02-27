import React from 'react';
import ReactDOM from 'react-dom';

import {Calculator} from "./components/calculator";

import './index.css';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById("root");
ReactDOM.render(<Calculator />, container);

serviceWorker.unregister();
