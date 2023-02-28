import { createGlobalState } from "react-hooks-global-state";
global.baseurl = "http://emp.cognitiveitsolutions.ca/public/";
global.localPath = "http://localhost:3000/";
// //global.token = "111";http://resume.cognitiveitsolutions.ca/public/
// var tokenm='1';http://emp.cognitiveitsolutions.ca/public/


  global.getCookie =(cname)=>{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i=0; i < ca.length; i++){
        var c = ca[i];
        while(c.charAt(0)===' '){
            c=c.substring(1);
        }
        if(c.indexOf(name)===0){
            return c.substring(name.length,c.length);
        }
    }
    return "";
}


const { setGlobalState, useGlobalState} = createGlobalState({
    token2:'0'
});
let chk = 0;
// function Config() {
//   return (
//     <div>
      
//     </div>
//   )
// }

export {chk,useGlobalState, setGlobalState};
