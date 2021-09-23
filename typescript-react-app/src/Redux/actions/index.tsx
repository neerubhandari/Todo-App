import { FETCH_TODO_SUCCESS, LOG_IN, LOG_OUT,FETCH_USER_SUCCESS/* ,FETCH_TODO_FAIL,FETCH_TODO_REQUEST, DATA_ADDED, DATA_UPDATED, DATA_DELETED  */ } from './types';
import axios from 'axios'
import { Dispatch } from 'redux';
import { Todo,User } from '../../typesInterface';
export const fetchTodoSuccess = (todo: Todo[]) => {
    return {
        type: FETCH_TODO_SUCCESS,
        payload: todo,
    };
};  
export const fetchUserSuccess = (user: User[]) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user,
    };
};  
export const Login = () => {
    return {
        type: LOG_IN,
    };
}; 
export const Logout = () => {
    return {
        type: LOG_OUT,
    };
};
//load Todo
export const fetchTodo = () => {
    return function (dispatch: Dispatch) {
        const signedUpUser =  JSON.parse(localStorage.getItem('user')!)
        signedUpUser &&  axios.get(`http://localhost:3007/user/${signedUpUser.id}/todo`)
            .then((res) => {
                const data = res.data;
                dispatch(fetchTodoSuccess(data));
            })
            .catch((err) => {
                console.log(err)
            });
    };
};

//load User
export const fetchUser = () => {
    return function (dispatch: Dispatch) {
        axios
            .get("http://localhost:3007/user")
            .then((res) => {
                const data = res.data;
                dispatch(fetchUserSuccess(data));
            })
            .catch((err) => {
                console.log(err)
            });
    };
};