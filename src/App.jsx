import loader2 from './images/loader2.gif';
import React, { useEffect,useState,Suspense,lazy } from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import axios from "axios";
import ForgotPassword from './Forgot_password';
import Company from './Company';
import Worker from './Worker';
import './Config';
import './css/style.css';
import './css/animate.min.css';
const Login = lazy(()=>import('./Login'));
const SignUp = lazy(()=>import('./SignUp'));
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
        
          <Suspense fallback={<div><img src={loader2} width="30%" className='loader2' alt="loader" /></div>}>
          
            <Routes>
                <Route path='/' exact element={<SignUp/>} />
                <Route path='/verify' element={<Verify/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/forgot_password' element={<ForgotPassword/>} />
                
                
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
                <Route path='/worker' element={<Worker/>} />
                
            </Routes>
            </Suspense>
        </div>
    </Router>
    
  );
  
}

export default App;
