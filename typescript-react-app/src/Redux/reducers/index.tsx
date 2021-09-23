import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import TodoReducer from "./TodoReducer";
import { loginReducer } from "./auth";
import UserReducer from "./userReducer";
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['loginReducer']
}
const rootReducer = combineReducers({
    TodoReducer: TodoReducer,
    loginReducer: loginReducer,
    UserReducer:UserReducer
});
export default persistReducer(persistConfig, rootReducer);