import React from 'react';
import Layout from '../components/Layout/Layout';
import {MdEmail} from 'react-icons/md'
import {BiPhone} from 'react-icons/bi'

const Contact = () => {
  return (
  
    <Layout title={"Contact-EcommereceApp"}>
      <div className='box'>
        <div class="container  ">
      <div class="row ">
    <div class="col m-5">
     <img src='contact.jpeg' className='CI' alt='contact'></img>
    </div>
    <div class="col m-5">
    <h1 className="text-left fs-1 bg-black text-white p-3 m-0"><b>Contact Us</b></h1>
    <p className='mt-3 ml-0'>
        Feel free to reach out to us for any inquiries or assistance.
    </p>
    <div>
    <div className='ml-0'>
   <p><MdEmail/>:www.abc@gmail.com</p>
   <p><BiPhone/>:34983596978</p>

    </div>
    </div>
   
</div>
    </div>

    </div>

    </div>

    </Layout>
  );
}

export default Contact;
