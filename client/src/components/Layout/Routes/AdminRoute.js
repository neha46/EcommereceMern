import { useAuth } from "../../../Context/auth";
import { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";

import React from 'react';
import axios from "axios";
import Spinner from "../Spinner";

export default function AdminRoute(){

    const [ok,setOk]=useState(false)
    const [auth,setAuth]=useAuth()
    console.log(auth);
    useEffect(()=>{
      const authCheck= async()=>{
        const res=await axios.get('/auth/adminAuth')
        if(res.data.ok){
          setOk(true)
        }
        else
        {
          setOk(false)
        }
      }
      if(auth?.token) authCheck();
    },[auth?.token])

  return ok?<Outlet/>: <Spinner path="/"/>
  }
