//import {Link} from "react-router-dom";
import $ from 'jquery';
import logo from './images/logo_white.png';
import axios from "axios";
import './Config';



const verify_submit = () =>{
    var verify_code = $("#verify_code").val();
    
    const token=global.getCookie('token');
        const headers = {
            'Authorization': 'Bearer ' + token
          };
          const article = { verify_code: verify_code };
          axios.post(global.baseurl + "api/verify-email",article,{headers}).then((data) => {
              console.log(data.data);
              if(data.data.message){
                
                //   alert('Email or Password Not Match...');
                //   document.cookie="token=;"+global.localPath;
              
                  alert('Success...');
                  //document.cookie="token="+data.data.data.token+";"+global.localPath;
                    //   const role = data.data.data.roles;
                    //   const roles = [
                    //           role.id,
                    //           role.name
                    //       ];
                    //   document.cookie="roles="+roles+";"+global.localPath;
                    //   document.cookie="permissions="+data.data.data.permissions+";"+global.localPath;
                 window.location.href = global.localPath + "login";
              }
                
          }).catch((err) => {
              if (err.response) {
                console.log(err.response);
                   alert('Something Wrong');
                //   document.cookie="token=;"+global.localPath;
                } else if (err.request) {
                    alert('Something Wrong');
                } else {
                    alert('Something Wrong');
                }
                
          })
}

function SignUp() {
  return (
    <div className="container_login mt2 animate__animated animate__slideInLeft" >
        <h1 className="text_center"><img src={logo}  alt="logo" className="logo" width="200" /></h1>
        <h1 className="color_three text_center mt2">Please Verify Your Account</h1>
        <div className="form">
            {/* <label className="checkcontainer">Worker
                <input type="radio" checked="checked" name="radio"/>
                <span className="radiobtn"></span>
            </label>
            <label className="checkcontainer">Company
                <input type="radio"  name="radio"/>
                <span className="radiobtn"></span>
            </label> */}
            <div className="form_group">
                <input type="number" id="verify_code" className="form_control" name="text" placeholder="verify code"/>
            </div>
            
            
            <div className="text_center">
                
                <button type="submit" onClick={verify_submit} id="submit"  className="btn_primary">VERIFY</button>
            </div>
            
        </div>
    </div>
  )
}

export default SignUp
