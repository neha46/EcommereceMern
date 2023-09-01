import React,{useState} from 'react';
import Layout from '../components/Layout/Layout';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {toast } from 'react-toastify';
import '../style/AuthStyle.css'



const Register = () => {
   const navigate=useNavigate()
    //states for  manage  value 
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    const [password,setPassword]=useState("")

    const reg = () => toast.success("registered successfully");
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
//handle phone input---------------------------------
const handlePhone = (event) => {
  const newPhone = event.target.value;
  setPhone(newPhone);
}; 
//handle  Address input---------------------------------
const handleAddress = (event) => {
  const newAddress = event.target.value;
  setAddress(newAddress);
}; 
//handle submit---------------------------------
const HandleSubmit = async(event) => {
  event.preventDefault();
  try {
    const res = await axios.post('/auth/register', {
      name,
      email,
      password,
      phone,
      address,
    });
    if(res.data.success){
      toast.success("user registration successful") 
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
        <div className="form-container">
          <h1>Register Page👩‍🍳</h1>

    <form onSubmit={HandleSubmit}>
    {/* ----------Name--------------------------------- */}
  <div className=" mt-3">
  <label htmlFor="exampleInputName" className="form-label">
      Name
    </label>
    <input
      type="text"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      className="form-control"
      id="exampleInputName"
    />
   
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
  {/* ----------phone--------------------------------- */}

  <label htmlFor="exampleInputphone" className="form-label">
      Phone
    </label>
    <input
      type="number"
      value={phone}
      onChange={handlePhone}
      className="form-control"
      id="exampleInputName"
    />
      {/* ----------address--------------------------------- */}

  <label htmlFor="exampleInputaddress" className="form-label">
    Address
    </label>
    <input
      type="text"
      value={address}
      onChange={handleAddress}
      className="form-control"
      id="exampleInputaddress"
    />

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

export default Register;
