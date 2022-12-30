import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiFillAliwangwang } from "react-icons/ai";

function Users() {
    const [post, setPost] = useState([]);

    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
        console.log(data);
        setPost(data?.data);
      });
    }, []);
//   const [tasks, setTasks] = useState([
//         {
//             id:1,
//             name:'Abid',
//             email:'abid@gmail.com',
//         },
//         {
//             id:2,
//             name:'Raza',
//             email:'raza@gmail.com',
//         },
//         {
//             id:3,
//             name:'Wali',
//             email:'wali@gmail.com',
//         }
//     ]);

//     const onClicked =(id)=>{
//         setTasks(
            
//             tasks.map((task) =>
            
//             task.id === id ? { ...task, name:"ok" } : task
                
//             )
//         )
//     }

  return (
    // <div><center><h1>Users</h1></center>
    // <table width="50%" border="1" align="center" >
    //     <thead>
    //         <tr>
    //             <th>Name</th>
    //             <th>Email</th>
    //         </tr>
    //     </thead>
    //     <tbody>
    //     {tasks.map((task) => 
    //         <>
    //         <tr>
    //             <td align="center" ><h3 key={task.id} >{task.name}</h3></td>
    //             <td align="center"><button className="btn_sm btn_secondary" key={task.id} onClick={() => onClicked(task.id)}>check</button></td>
    //         </tr>
    //         </>
    //             )}
    //     </tbody>
    // </table>
    // </div>
    <div>
      <center><h1>USERS</h1></center>
      <table width="50%" border="1" align="center" cellPadding="5">
        <thead>
        <tr>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Address</th>
        </tr>
        </thead>
        <tbody>        
      {post.map((item, i) => {
        return (
            
                <tr key={i}>
                    <td align="center">{item?.name} <AiFillAliwangwang /></td>
                    <td align="center">{item?.username}</td>
                    <td align="center">{item?.email}</td>
                    <td align="center">{item?.address.street}</td>
                </tr>
         
        );
      })}
      </tbody>
      </table>
    </div>
  )
}

export default Users
