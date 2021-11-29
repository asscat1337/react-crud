import React, {useState} from 'react'
import {Routes,Navigate, Route} from 'react-router-dom'
import {useSelector} from "react-redux";
import 'bootstrap/scss/bootstrap.scss'
import './App.css';
import Add from "./pages/Add/Add";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import Admin from "./pages/Admin/Admin";

console.log(process.env.REACT_APP_KEY)

function App() {
  return (
        <Routes>
            <Route path="/" element={
                <PrivateRoute>
                    <Dashboard/>
                </PrivateRoute>
            }>
            </Route>
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
            <Route path="/login" element={<Login/>} exact/>
            <Route path="/admin" element={<Admin/>} exact/>
        </Routes>
  )
}
export default App;
