import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import axios from "axios";
//import React, { useEffect } from "react";
import Login from "./Login";
import ForgotPassword from './Forgot_password';
import SignUp from './SignUp';
import Users from './Users';
import Counter from './Counter';
import Dashboard from './Dashboard';
import Company from './Company';
import './Config';
import './css/style.css';
import './css/animate.min.css';
//const a = 0;
var auth = false;
function App() {
  
  useEffect(() => {
    
    const token=global.getCookie('token');
    const headers = {
      'Authorization': 'Bearer ' + token
    };
   // const article = {  };
    axios.get(global.baseurl + "api/roles",{headers}).then((data) => {
        if(data.data.message){
            auth = true;
            console.log(auth);
        }
        
        }).catch(() => {
            console.log(auth);
            auth = false;
            console.log(auth);
        })
    }, []);
  return (
    
    <Router>
        <div className='App'>
            <Routes>
                <Route path='/' exact element={<SignUp/>} />
                <Route path='/login' element={<Login/>} />
                
                <Route path='/forgot_password' element={<ForgotPassword/>} />
                <Route path='/users' element={<Users/>} />
                <Route path='/Counter' element={<Counter/>} />
                
                <Route path='/dashboard' element={<Dashboard authorized={auth}/>} />
                <Route path='/company' element={<Company/>} />
                
            </Routes>
        </div>
    </Router>
  );
}

export default App;
