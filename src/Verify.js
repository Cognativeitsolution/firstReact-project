//import {Link} from "react-router-dom";
import loader1 from './images/loader1.gif';
import $ from 'jquery';
import logo from './images/logo.png';
import axios from "axios";
import './Config';


function Verify() {
    function getInput(n) {
        if(n == 1){
            if($("#digit_1").val() > 0){
               $("#digit_1").val('');
            }
        }
        if(n == 2){
            if($("#digit_2").val() > 0){
               $("#digit_2").val('');
            }
        }
        if(n == 3){
            if($("#digit_3").val() > 0){
               $("#digit_3").val('');
            }
        }
        if(n == 4){
            if($("#digit_4").val() > 0){
               $("#digit_4").val('');
            }
        }
        if(n == 5){
            if($("#digit_5").val() > 0){
               $("#digit_5").val('');
            }
        }
    }



    const verify_submit = () =>{
        var digit_1 = $("#digit_1").val();
        var digit_2 = $("#digit_2").val();
        var digit_3 = $("#digit_3").val();
        var digit_4 = $("#digit_4").val();
        var digit_5 = $("#digit_5").val();
        
        $("#verify_submit").hide();
        $("#loader1").show();

        var verify_code = digit_1+digit_2+digit_3+digit_4+digit_5;
        
        const token=global.getCookie('token');
            const headers = {
                'Authorization': 'Bearer ' + token
              };
              const article = { verify_code: verify_code };
              axios.post(global.baseurl + "api/verify-email",article,{headers}).then((data) => {
                  console.log(data.data);
                  if(data.data.message){
                    alert('Wrong Code');
                    $("#verify_submit").show();
                    $("#loader1").hide();
                  }else{
                    
                    //   alert('Email or Password Not Match...');
                    //   document.cookie="token=;"+global.localPath;
                  
                      
                      //document.cookie="token="+data.data.data.token+";"+global.localPath;
                        //   const role = data.data.data.roles;
                        //   const roles = [
                        //           role.id,
                        //           role.name
                        //       ];
                        //   document.cookie="roles="+roles+";"+global.localPath;
                        //   document.cookie="permissions="+data.data.data.permissions+";"+global.localPath;
                     //window.location.href = global.localPath + "login";
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
        
  return (
    <div className="container_verify mt2 animate__animated animate__slideInUp" >
        <h1 className="text_center"><img src={logo}  alt="logo" className="logo" width="200" /></h1>
        <h1 className="text_center mt1">Write Verification Code</h1>
        <h1 className="text_center ">Which is Send You on Email</h1>
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
                <input type="number" id="digit_1" onKeyDown={() => getInput('1')} maxlength="1" className="form_control_verify"/>
                <input type="number" id="digit_2" onKeyDown={() => getInput('2')} maxlength="1" className="form_control_verify"/>
                <input type="number" id="digit_3" onKeyDown={() => getInput('3')} maxlength="1" className="form_control_verify"/>
                <input type="number" id="digit_4" onKeyDown={() => getInput('4')} maxlength="1" className="form_control_verify"/>
                <input type="number" id="digit_5" onKeyDown={() => getInput('5')} maxlength="1" className="form_control_verify"/>
            </div>

            
            
            
            <div className="text_center mt1">
                
                <button type="submit" onClick={verify_submit} id="verify_submit"  className="btn_submit_form2">VERIFY</button>
                <button type="submit" id="loader1" className="loader_btn"><img src={loader1} width="20" alt="loader" /></button>
            </div>
            
        </div>
    </div>
  )
}

export default Verify
