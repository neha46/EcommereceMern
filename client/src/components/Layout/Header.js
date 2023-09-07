import React, { useState } from 'react';
import {NavLink,Link} from 'react-router-dom'
import {SiPrestashop} from 'react-icons/si'
import { useAuth } from '../../Context/auth';
import {toast} from 'react-hot-toast'

const Header = () => {
  const [auth,setAuth]=useAuth('')
  const handlelogout=()=>{
    setAuth({...auth,
    user:null,token:''})
    localStorage.removeItem("auth")
    toast.success('logout successfully')


  }
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" >
    <SiPrestashop/>EccoApp
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">


      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" aria-current="page" >
            Home
          </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink to="/categories" className="nav-link" >
            Categories
          </NavLink>
        </li>
      {
        !auth.user?(<>
          <li className="nav-item">
          <NavLink to="/login" className="nav-link" >
            Login
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/register" className="nav-link" >
            Register
          </NavLink>
        </li></>):(<>

          <li className="nav-item">
          <NavLink onClick={handlelogout} to="/login" className="nav-link" >
            logout
          </NavLink>
        </li>
        </>)
      }
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link" >
            Cart(0)
          </NavLink>
        </li>
    
        <li className="nav-item dropdown">
          <NavLink to="/dropdown"
            className="nav-link dropdown-toggle"
         
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </NavLink>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/" className="dropdown-item" >
                Action
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="dropdown-item" >
                Another action
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="dropdown-item" >
                Something else here
              </NavLink>
            </li>
          </ul>
        </li>
 
      </ul>
    </div>
  </div>
</nav>


   </>
  );
}

export default Header;
