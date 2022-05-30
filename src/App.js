import React, {useState} from 'react'
import {Routes,Navigate, Route} from 'react-router-dom'
import {useLocation} from "react-router-dom";
import 'bootstrap/scss/bootstrap.scss'
import './App.css';
import Add from "./pages/Add/Add";
import Login from "./pages/Login/Login";
import Dashboard, {AppContext} from "./pages/Dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import Admin from "./pages/Admin/Admin";
import Edit from './pages/Edit/Edit'
import HeaderPage from "./components/Header/HeaderPage/HeaderPage";
import NotFound from "./pages/NotFound/NotFound";
import {ThemeProvider,createTheme} from "@mui/material";


function App() {
    //// переделать смену темы
    const location = useLocation()
    const [open,setOpen] = React.useState(false)
    const [editable,setEditable] = React.useState(false)
    const [openComments,setOpenComments] = React.useState(false)
    const [darkState,setDarkState] = React.useState(true)

    const darkTheme = createTheme({
        palette:{
            mode: darkState ? "dark":"light"
        }
    })

    React.useEffect(()=>{
        if(localStorage.getItem('theme') !== 'dark'){
            setDarkState(false)
        }
    },[])

  return (
      <AppContext.Provider value={{open,setOpen,editable,setEditable,openComments,setOpenComments,darkState,setDarkState}}>
          <ThemeProvider theme={darkTheme}>
          {!location.pathname.includes('login') && (
              <HeaderPage/>
          )}
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
              <Route path="/edit/:id" element={<Edit/>}/>
              <Route path="/add"
                     element={
                          <PrivateRoute>
                             <Add/>
                          </PrivateRoute>
                     }
                     exact/>
              <Route path="/login" element={<Login/>} exact/>
              <Route path="/admin" element={<Admin/>} exact/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
          </ThemeProvider>
      </AppContext.Provider>
  )
}
export default App;
