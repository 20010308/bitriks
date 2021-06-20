import {UPDATE_STATE} from "../type/menuType";


export function update_state(data) {
    return{
        type: UPDATE_STATE,
        payload: data
    }
}