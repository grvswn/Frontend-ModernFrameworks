import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const dbLink = "https://3000-grvswn-backendmodernfra-hsddfvwx9hi.ws-us108.gitpod.io";

const Create=()=> {
  const [member,setMember]=useState({
    username:"",
    email:""
  });

  const navigate=useNavigate();

  const handleChange=(e)=>{
    setMember((prev)=>({ ...prev, [e.target.name]:e.target.value}));
  };
  
  const handleClick =async e=>{
    e.preventDefault()
    try{
      await axios.post(dbLink+"/members/", member)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  };

  return (
    <div className='container'>
      <h1>Add New Member</h1>
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
      
      <button className="btn btn-primary" onClick={handleClick}>Add</button>
    </div>
  );
};

export default Create;