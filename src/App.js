import React, {useState} from 'react'
import {Routes,Navigate, Route} from 'react-router-dom'
import {useSelector} from "react-redux";
import 'bootstrap/scss/bootstrap.scss'
import './App.css';
import Add from "./components/pages/Add/Add";
import Login from "./components/pages/Login/Login";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import AppContext from "./hooks/context";

function App() {
  return (
        <Routes>
            <Route path="/">
                <Route path="/dashboard"
                       element={
                           <PrivateRoute>
                               <Dashboard/>
                           </PrivateRoute>
                       }>
                </Route>
                <Route path="/add"
                       element={
                           <PrivateRoute>
                               <Add/>
                           </PrivateRoute>
                       }
                       exact/>
            </Route>
            <Route path="/login" element={<Login/>} exact/>
        </Routes>
  )
}
export default App;
