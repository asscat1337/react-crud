import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import App from './App';
import Add from "./components/pages/Add/Add";
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                    <Route path="/dashboard" element={<App/>}/>
                    <Route path="add" element={<Add/>}/>
              </Routes>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

