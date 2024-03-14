import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

const dbLink = process.env.REACT_APP_DB_LINK;

const Members=()=> {
  const [members, setMembers]= useState([]);
  const navigate=useNavigate();

  useEffect(()=>{
    const fetchAllMembers= async ()=>{
        try{
          const res=await axios.get(dbLink+"/members/");
          setMembers(res.data.members);
        }catch(err){
          console.log(err);
        }
    };
    fetchAllMembers();
  },[]);

  const handleDelete= async (id)=>{
    try{
      await axios.delete(dbLink+"/members/"+id);
      window.location.reload();
    }catch(err){
      console.log(err);
    };
  };

  return (
    <div className="container">
      <h1>Clubhous3 Members List</h1>
      <div>
        {members.map(member=>(
          <div className="mt-2" key={member.id}>
            <h2>{member.username}</h2>
            <p>{member.email}</p>
            <button className='btn btn-outline-secondary btn-sm' onClick={()=>{
                        navigate(`/update/${member.id}`, {
                          state: member
                      })
                    }}>Update</button>
            <button className='btn btn-outline-danger btn-sm' onClick={()=>handleDelete(member.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;