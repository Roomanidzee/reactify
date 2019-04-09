import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import FormExampleComponent from "./components/fourth_app/main_page";

const container = document.getElementById("root");
ReactDOM.render(<FormExampleComponent />, container);

serviceWorker.unregister();
