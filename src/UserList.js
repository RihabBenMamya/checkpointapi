import axios from 'axios';
import { useState,useEffect } from 'react';
const UserList =() =>{

    const [listOfUSer, setListOfUSer]=useState([]);
    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log(res);
        setListOfUSer(res.data);
      })
    });
    
    return (
      <div>
       <ul>
       { listOfUSer.map(item => (
       <li>{item.name} </li>
       ))}
      </ul>
      </div>
    );
  }
export default UserList;