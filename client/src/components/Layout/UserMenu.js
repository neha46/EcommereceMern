import React from 'react';
import Layout from './Layout';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  return (
    <>
          
      <div className='text-center'>
      <div className='list-group'>
      <h2>User pannel</h2>

  <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">
profile
  </NavLink>
  <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action">
orders
  </NavLink>

  </div>
  </div>

    </>
  );
}

export default UserMenu;
