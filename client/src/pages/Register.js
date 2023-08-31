import React from 'react';
import Layout from '../components/Layout/Layout';

const Register = () => {
  return (
    <Layout title={"Register Please!"}>
        <div className="register">
          <h1>Register Page</h1>

    <form>
    {/* ----------Name--------------------------------- */}
  <div className=" mt-3">
  <label htmlFor="exampleInputName" className="form-label">
      Name
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputName"
    />
   
{/* ----------Email--------------------------------- */}
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email
    </label>
    <input
      type="email"
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
      className="form-control"
      id="exampleInputName"
    />
      {/* ----------address--------------------------------- */}

  <label htmlFor="exampleInputaddress" className="form-label">
    Address
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputaddress"
    />

 
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

       </div>

      
    </Layout>
  );
}

export default Register;
