import React, { useEffect,useState,Suspense,lazy } from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import axios from "axios";
//import React, { useEffect } from "react";
//import Login from "./Login";
import ForgotPassword from './Forgot_password';
import SignUp from './SignUp';
import Users from './Users';
import Counter from './Counter';
// import Dashboard from './Dashboard';

import Company from './Company';
import './Config';
import './css/style.css';
import './css/animate.min.css';
const Login = lazy(()=>import('./Login'));
const Verify = lazy(()=>import('./Verify'));
const Dashboard = lazy(()=>import('./Dashboard'));

function App() {
  const [isLoading, setLoading] = useState(0);
  const [islogin, setLogin] = useState(0);
  
  useEffect(() => {
    
    const token=global.getCookie('token');
    const headers = {
      'Authorization': 'Bearer ' + token
    };
   // const article = {  };
    axios.get(global.baseurl + "api/roles",{headers}).then((data) => {
        if(data.data.message){
            setLogin(1);
            setLoading(1);
        }
        
        }).catch(() => {
           setLogin(0);
           setLoading(1);
        })
    }, []);
    
    if (isLoading === 0) {
      return null;
    }
      
    
  return (
    
    <Router>
        <div className='App' >
          <Suspense fallback={<div>please wait.</div>}>
          
            <Routes>
                <Route path='/' exact element={<SignUp/>} />
                <Route path='/verify' element={<Verify/>} />
                <Route path='/login' element={<Login/>} />
                
                <Route path='/forgot_password' element={<ForgotPassword/>} />
                <Route path='/users' element={<Users/>} />
                <Route path='/Counter' element={<Counter/>} />
                
                {islogin === 0 ? (
                        <>
                        <Route path='/dashboard' element={<Navigate replace to="/login" />} />
                        
                        </>
                      ) : (
                        <>
                        <Route path='/dashboard' element={<Dashboard/>} />
                        
                        
                        </>
                      )}
                
                
                <Route path='/company' element={<Company/>} />
                
            </Routes>
            </Suspense>
        </div>
    </Router>
    
  );
  
}

export default App;
