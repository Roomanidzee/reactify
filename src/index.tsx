import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import UserCardComponent from "./components/second_app/card_with_users";

const container = document.getElementById("root");
ReactDOM.render(<UserCardComponent />, container);

serviceWorker.unregister();
