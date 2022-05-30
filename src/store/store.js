import {configureStore,combineReducers} from "@reduxjs/toolkit";
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1";
import {persistStore,FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE} from "reduxjs-toolkit-persist";
import storage from 'reduxjs-toolkit-persist/lib/storage'
import authReducer from "./reducer/authReducer";
import reducer from "./reducer/reducer";


const persistConfig = {
    key:'root',
    storage,
    stateReconciler:autoMergeLevel1
}

const reducers = combineReducers({
        auth:authReducer.reducer,
        dashboard:reducer.reducer
})

const persistedReducer = persistReducer(persistConfig,reducers)


const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>{
       return getDefaultMiddleware({
                serializableCheck:{
                    ignoreActions:[
                        FLUSH,
                        REHYDRATE,
                        PAUSE,
                        PERSIST,
                        PURGE,
                        REGISTER
                    ]
                }
        })
    }

})

const persisted = persistStore(store)

export  {
    store,
    persisted
}
