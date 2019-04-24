import {createStore, combineReducers} from "redux";
import {task_reducer} from "./reducers";


const reducers = combineReducers({
    taskReducer: task_reducer
});

const store = createStore(reducers);

export default store;
