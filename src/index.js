import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import {store,persisted} from "./store/store";
import {PersistGate} from "reduxjs-toolkit-persist/integration/react";


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
     <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persisted}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
     </React.StrictMode>,
)
