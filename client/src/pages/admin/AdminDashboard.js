import React from 'react';
import Layout from '../../components/Layout/Layout';
import { NavLink } from 'react-router-dom';
import AdminMenu from '../../components/Layout/AdminMenu';
import { useAuth } from '../../Context/auth';

const AdminDashboard = () => {
  const [auth]=useAuth()

  return (
    <>
<Layout>
<div className="container-fluid mt-5 p-3">
  <div className="row">

    <div className="col-md-3"><AdminMenu/></div>
    <div className="col-md-9">
      <div className="card w-75 p-3">
        <h2>Admin name: {auth?.user?.name}</h2>
        <h2>Admin email: {auth?.user?.email}</h2>
        <h2>Admin contact: {auth?.user?.phone}</h2>
 
      </div>
    </div>
  </div>
</div>

</Layout>
    </>
  );
}

export default AdminDashboard;
