import React, { useEffect, useState } from "react";
import axios from "axios";
//import { AiFillAliwangwang } from "react-icons/ai";

function Users() {
    const [tasks, settasks] = useState([]);
    
    // useEffect(()=>{
    //   const getTasks = async () => {
    //     const tasksFromServer = await fetchTasks()
    //     settasks(tasksFromServer)
    //   }

    //   getTasks()
    // }, [])
  
    // const token = "28|SAfVBW0FYi17OQmGIQVyNbuOweSsB8HKdkPZdKeZ";
    // const fetchTasks = async (task)=>{
    //   const res = await fetch('http://emp.cognitiveitsolutions.ca/public/api/announcements',{
    //     method:'GET',
    //     headers:{
    //       'Content-type':'application/json',
    //       'Authorization': 'Bearer ' + token
    //     },
    //     body: JSON.stringify(task)
    //   })
    //   const data = await res.json()
    //   return data
      
    // }
    // console.log( tasks.data );
    //let token = "10|tSCbAhMqXC1MIAae6wYyOMoy7I0ky6Rb6Mx9lkzQ";

    // let token = "10|tSCbAhMqXC1MIAae6wYyOMoy7I0ky6Rb6Mx9lkzQ";
    // let data = axios.get('http://192.168.18.6:8000/api/announcements', {
    //   headers: {
    //     Authorization: 'Bearer ' + token //the token is a variable which holds the token
    //   }

    //  });
    



    // const token = "28|SAfVBW0FYi17OQmGIQVyNbuOweSsB8HKdkPZdKeZ";
    // const data = axios.get('http://192.168.18.6:8000/api/announcements', {
    //   headers: {
    //     Authorization: 'Bearer ' + token //the token is a variable which holds the token
    //   }

    //  });

    // console.log( data );
    
      useEffect(() => {
      const token = "29|XRtgHBo6IHwnF919yAvl9UNlL3mGcMjOdVc20S3m";
      const headers = {
        'Authorization': 'Bearer ' + token
    };
       //axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
       axios.get("http://emp.cognitiveitsolutions.ca/public/api/announcements",{headers}).then((data) => {

        //console.log(data.data);
        settasks(data.data?.data);
      });
      
     }, []);

     // POST request using axios with set headers
     const token = "29|XRtgHBo6IHwnF919yAvl9UNlL3mGcMjOdVc20S3m";
//const element = document.querySelector('#post-request-set-headers .article-id');
const article = { detail: 'Axios POST Request Example' };
const headers = { 
    'Authorization': 'Bearer ' + token
};
axios.post('http://emp.cognitiveitsolutions.ca/public/api/announcements', article, { headers })
    .then(response => console.log('posting data',response));





  //   axios({
  //     url: 'http://127.0.0.1/myapi/test.php',
  //     method: 'get',
  //     headers: {
  //         'X-Id-Token': '28|SAfVBW0FYi17OQmGIQVyNbuOweSsB8HKdkPZdKeZ',
  //         'Content-Type': 'application/json'
  //     }
  //  })
  //  .then(response => {
  //     console.log(response)
  //  }) 
  //  .catch(err => {
  //     console.log(err);
  //  });

    


  return (
    <div>
      <center><h1>USERS</h1></center>
      
      {/* {
            tasks.data.map((task,index) => (
              
              <p key={index}>{task.detail}</p>
               
            ))
          } */}

      <table width="50%" border="1" align="center" cellPadding="5">
        <thead>
        <tr>
                    <th>id</th>
                    <th>detail</th>
        </tr>
        </thead>
        <tbody>
          
         
           
      {tasks.map((item, i) => {
        return (
            
                <tr key={i}>
                    <td align="center">{item?.id}</td>
                    <td align="center">{item?.detail}</td>
                </tr>
         
        );
      })}

    
      </tbody>
      </table>
    </div>
  )
}

export default Users
