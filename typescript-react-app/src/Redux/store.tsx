import { createStore,applyMiddleware,compose } from "redux";
import rootReducer from "../Redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { fetchTodo } from "../Redux/actions";
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
  store.dispatch<any>(fetchTodo());
export const persistor=persistStore(store);
  export default {store,persistor};