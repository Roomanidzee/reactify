import {ADD_TASK, COMPLETE_TASK} from "./action_types";

export const initialState = {
    tasks: []
};

export const task_reducer = (state: any = initialState, action: { type: any; tasks: any; }) => {

    switch(action.type){
        case ADD_TASK:
            return {
              ...state,
              tasks: [...state.tasks, action.tasks]
            };

        case COMPLETE_TASK:

            //копипастнуть сюда реализацию из компонента

            return {
              ...state,
              tasks:  action.tasks
            };
        default:
            return state;
    }

};
