import {createStore,applyMiddleware,combineReducers} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import reducer from "./reducer/reducer";
import authReducer from "./reducer/authReducer";

const rootReducer = combineReducers({
    dashboard:reducer,
    auth:authReducer
})

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store

