import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import TaskListComponent from "./components/third_app/task_list";

const container = document.getElementById("root");
ReactDOM.render(<TaskListComponent />, container);

serviceWorker.unregister();
