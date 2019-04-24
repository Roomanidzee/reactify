import {createStore} from "redux";
import {task_reducer} from "./reducers";

const store = createStore(task_reducer);

export default store;
