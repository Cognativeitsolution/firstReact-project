import capt from './images/google-recaptcha.png';
import {Link} from "react-router-dom";
import $ from 'jquery';

const login_submit = () =>{
    var email = $("#email").val();
    var password = $("#password").val();
    
    
    if (email === '' ) {
        alert('Email Field is Empty');
    }
    else if (password === '' ) {
        alert('Password Field is Empty');
    }
    else if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert('Please Enter Valid Email Address');
    }else{
        alert('Success');
    }
}
function Login() {
  return (
    <div className="container_login animate__animated animate__bounceIn" >
        <h1 className="text_center">Employment Agency Tool</h1>
        <h1 className="color_three text_center">Log-In</h1>
        <div className="form">
            
            <div className="form_group">
                <input type="email" id="email" className="form_control" name="text" placeholder="Email"/>
            </div>
            <div className="form_group">
                <input type="password" id="password" class="form_control" name="text" placeholder="Password"/>
            </div>
            <label className="checkcontainer">Remember me
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>
            <label className="checkcontainer pull_right">
                <Link to="/forgot_password" className="text_right color_two"> Forgot Password</Link>
            </label>
            
            <p className="text_right mt0">Register yourself by cliking <Link to="/" className="color_two"> Here</Link></p>
            
            <img src={capt} width="170" alt="captcha" />
            
            <div className="text_center">
                <h3>OR</h3>
                <button type="submit" className="btn_light logo_google">SIGN-IN WITH GOOGLE</button>
                <button type="submit" className="btn_light logo_link">SIGN-IN WITH LINKEDIN</button>
                <button type="submit" id="submit" onClick={login_submit} className="btn_primary">LOGIN</button>
            </div>
            
        </div>
    </div>
  )
}

export default Login
