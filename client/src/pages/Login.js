import React,{useState} from 'react';
import Layout from '../components/Layout/Layout';
import {useNavigate,useLocation} from 'react-router-dom'
import axios from 'axios'
import {toast } from 'react-toastify';
import '../style/AuthStyle.css'
import { useAuth } from '../Context/auth';
const Login = () => {
    
    const navigate=useNavigate()
    const location=useLocation()
    //states for  manage  value 
    
    const [email,setEmail]=useState("")

    const [password,setPassword]=useState("")
    const [auth,setAuth]=useAuth()

    const reg = () => toast.success("login successfully");
//handle  Email input---------------------------------
    const handleEmail = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
      };
//handle  password input---------------------------------
    const handlePassword = (event) => {
      const newPassword = event.target.value;
      setPassword(newPassword);
    }; 

const HandleSubmit = async(event) => {
        event.preventDefault();
        try {
          const res = await axios.post('/auth/login', {
            email,
            password,
 
          });
         
          if(res.data.success){
            toast.success("user registration successful") 

            //fill data
            setAuth({...auth,
            user:res.data.user,
            token:res.data.token
        })

        //store in local storage
        localStorage.setItem('auth',JSON.stringify(res.data))
            navigate(location.state||"/") 
      
          }
          else{
            toast.error(res.data.message)
          }
          
        } catch (error) {
          console.log('Error', error)
        toast.error("something went wrong")}
        }
  return (
   <>
     <Layout title={"Register Please!"}>
        <div className="form-container">
          <h1>Login please👻</h1>

    <form onSubmit={HandleSubmit}>
  <div className=" mt-3">
   
{/* ----------Email--------------------------------- */}
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email
    </label>

    <input
      type="email"
      value={email}
       onChange={handleEmail}
      className="form-control"
      id="exampleInputEmail1"
    />
    <div id="emailHelp" className="form-text HintEmail">
      We'll never share your email with anyone else.
    </div>
  </div>
  {/* ----------password--------------------------------- */}
  <div className="">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      value={password}
      onChange={handlePassword}
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>


 <div className='text-center mt-3'>
 <button type="submit" className="btn btn-primary" onClick={reg}>
    login
  </button>
 </div>

</form>
       </div>
    </Layout>
   </>
  );
}

export default Login;
