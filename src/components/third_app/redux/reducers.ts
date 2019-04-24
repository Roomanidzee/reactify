import {ADD_TASK} from "./action_types";

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
        default:
            return state;
    }

};
