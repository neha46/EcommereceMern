import { useState,useContext,useEffect,createContext, children } from "react";
import axios  from "axios";


const AuthContext=createContext()
const AuthProvider=({children})=>{
    const [auth,setAuth]=useState({
        user:null,
        token:""
    })  

    //set default axios  for authentication
    axios.defaults.headers.common["Authorization"]=auth?.token 
    useEffect(()=>{
        const data=localStorage.getItem('auth')
        if(data)
        {
            const ParseData=JSON.parse(data)
            setAuth({...auth,
            user:ParseData.user,
            token:ParseData.token
        })
        }
        //elint - disable- next line
       
    },[])
return (
    <AuthContext.Provider value={[auth,setAuth]}>
        {children}
    </AuthContext.Provider>
)
}
//custom hook
const useAuth=()=>useContext(AuthContext)
export {useAuth,AuthProvider}