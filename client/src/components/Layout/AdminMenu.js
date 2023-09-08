import React from 'react';
import Layout from './Layout';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
  return (
    <>
          
      <div className='text-center'>
      <div className='list-group'>
      <h2>Admin pannel</h2>

  <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">
Create Product
  </NavLink>
  <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action">
 Create categories
  </NavLink>
  <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action">
users
  </NavLink>
  
  </div>
  </div>

    </>
  );
}

export default AdminMenu;
