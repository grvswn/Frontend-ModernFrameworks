import React, { useState } from 'react';
import axios from 'axios';
import {useLocation, useNavigate} from "react-router-dom";

const dbLink = process.env.REACT_APP_DB_LINK;

const Update=()=> {
  
  const navigate=useNavigate();
  const location=useLocation();
  const memberToEdit = location.state;

  const [member,setMember]=useState({
    username:memberToEdit.username,
    email:memberToEdit.email
  });

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
      <h1>Updating Member Details for: {memberToEdit.username}</h1>
      <label>New Username</label><input
      type='text'
      placeholder={memberToEdit.username}
      onChange={handleChange}
      name='username'
      />
      <label>New Email</label><input
      type='text'
      placeholder={memberToEdit.email}
      onChange={handleChange}
      name='email'
      />
      
      <button className='btn btn-primary' onClick={handleClick}>Update</button>
    </div>
  );
};

export default Update;