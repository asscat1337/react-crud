import {createStore,applyMiddleware,combineReducers} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import reducer from "./reducer/reducer";
import authReducer from "./reducer/authReducer";
import adminReducer from "./reducer/adminReducer";

const rootReducer = combineReducers({
    dashboard:reducer,
    auth:authReducer,
    admin:adminReducer
})

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store

