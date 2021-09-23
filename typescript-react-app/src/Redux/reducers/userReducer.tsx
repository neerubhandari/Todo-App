import { FETCH_USER_SUCCESS, FETCH_USER_REQUEST, FETCH_USER_FAIL } from "../actions/types";
interface Action {
    type: string,
    payload?: string
}
interface TodoType {
    user: [],
    loading: boolean,
    error: string
}
const initialState: TodoType = {
    user: [],
    loading: true,
    error: "Error"
};
function UserReducer(state = initialState, action: Action) {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return { ...state, loading: true } 
        case FETCH_USER_SUCCESS:
            return {
                ...state, user: action.payload,
                loading: false,
            }; 
        case FETCH_USER_FAIL:
            return {
                loading: false,
                user: [],
                error: action.payload, 
            };
        default:
            return state;
    }
}
export default UserReducer;
