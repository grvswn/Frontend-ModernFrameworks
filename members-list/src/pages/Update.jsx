import React, { useState } from 'react';
import axios from 'axios';
import {useLocation, useNavigate} from "react-router-dom";

const dbLink = "https://3000-grvswn-backendmodernfra-hsddfvwx9hi.ws-us110.gitpod.io";

const Update=()=> {
  const [member,setMember]=useState({
    username:"",
    email:""
  });

  const navigate=useNavigate();
  const location=useLocation();

  const memberId = location.pathname.split("/")[2];

  const handleChange=(e)=>{
    setMember((prev)=>({ ...prev, [e.target.name]:e.target.value}));
  };
  
  const handleClick =async e=>{
    e.preventDefault()
    try{
      await axios.put(dbLink+"/members/"+memberId, member)
      navigate("/")
    }catch(err){
      console.log(err)
    };
  };

  return (
    <div className='container'>
      <h1>Update Member Details</h1>
      <input
      type='text'
      placeholder='Username'
      onChange={handleChange}
      name='username'
      />
      <input
      type='text'
      placeholder='Email'
      onChange={handleChange}
      name='email'
      />
      
      <button className='btn btn-primary' onClick={handleClick}>Update</button>
    </div>
  );
};

export default Update;