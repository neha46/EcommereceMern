import React from 'react';
import {Link} from 'react-router-dom'
import About from '../../pages/About ';
import Policy from '../../pages/Policy';
import Contact from '../../pages/Contact'

const Footer = () => {  
  return (
    <div className="footer">
      <h1 className='text-center'>All rights are reserved 	&copy; :B.Tech Wali</h1>
 <div className="foot-link">
 <Link to="/about" className='color'>About</Link>|
 <Link to ="/policy">Policy</Link>|
 <Link to ="/contact">Contact</Link>
 </div>
    </div>
  );
}
export default Footer;
