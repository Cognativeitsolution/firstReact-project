import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Login from "./Login";
import ForgotPassword from './Forgot_password';
import SignUp from './SignUp';
import Users from './Users';
import Dashboard from './Dashboard';

import './css/style.css';
import './css/animate.min.css';

// const onClick = () =>{
//     let history = useHistory();
//     history.push("/login");
// }
function App() {
  return (
    
    <Router>
        <div className='App'>
            <Routes>
                <Route path='/' exact element={<SignUp/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/forgot_password' element={<ForgotPassword/>} />
                <Route path='/users' element={<Users/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
