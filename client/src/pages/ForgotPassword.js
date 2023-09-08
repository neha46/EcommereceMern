
import React,{useState} from 'react';
import Layout from '../components/Layout/Layout';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {toast } from 'react-toastify';
import '../style/AuthStyle.css'



const ForgotPassword = () => {
   const navigate=useNavigate()
    //states for  manage  value 
    const [email,setEmail]=useState("")
 
    const [newPassword,setNewPassword]=useState("")

    const [answer,setAnswer]=useState("")

    const reg = () => toast.success("password reseted sucessfully");
//handle  Email input---------------------------------
    const handleEmail = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
      };
//handle  password input---------------------------------
    const handlePassword = (event) => {
      const NewPassword = event.target.value;
      setNewPassword(NewPassword);
    }; 

//handle submit---------------------------------
const HandleSubmit = async(event) => {
  event.preventDefault();
  try {
    const res = await axios.post('/auth/forgot-password', {
    
      email,
      newPassword,
      answer,
    });
    if(res.data.success){
      toast.success("password reset successful") 
      navigate("/login")

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
        <div className="form-container ">
          <h1 className=''>Reset Password💫</h1>

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
      NewPassword
    </label>
    <input
      type="password"
      value={newPassword}
      onChange={handlePassword}
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  {/* ----------answer----------------------- */}
     <div className=" mt-3">
  <label htmlFor="answer" className="form-label">
      answer
    </label>
    <input
      type="text"
      value={answer}
      onChange={(e)=>setAnswer(e.target.value)}
      className="form-control"
      id="answer" placeholder='enter your your favourite song?'
    />
    </div>

 <div className='text-center mt-3'>
 <button type="submit" className="btn btn-primary" onClick={reg}>
    Submit
  </button>
 </div>

</form>
       </div>

      
    </Layout>
    </>
  );
}

export default ForgotPassword;
