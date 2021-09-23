import { FETCH_TODO_SUCCESS, FETCH_TODO_REQUEST, FETCH_TODO_FAIL } from "../actions/types";
interface Action {
    type: string,
    payload?: string
}
interface TodoType {
    todo: [],
    loading: boolean,
    error: string
}
const initialState: TodoType = {
    todo: [],
    loading: true,
    error: "Error"
}
function TodoReducer(state = initialState, action: Action) {
    switch (action.type) {
        case FETCH_TODO_REQUEST:
            return { ...state, loading: true } 
        case FETCH_TODO_SUCCESS:
            return {
                ...state, todo: action.payload,
                loading: false,
            };
        case FETCH_TODO_FAIL:
            return {
                loading: false,
                todo: [],
                error: action.payload,
            };
        default:
            return state;
    }
}
export default TodoReducer;
