import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import TaskListComponent from "./components/third_app/task_list";

import {Provider} from "react-redux";
import store from "./components/third_app/redux/store";

const container = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
       <TaskListComponent />
    </Provider>,
    container);

serviceWorker.unregister();
