import {UPDATE_STATE} from "../type/menuType";

const initialState = {
    open: false,
};

export function menuReducer(state = initialState, action) {
    if (action.type === UPDATE_STATE){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}