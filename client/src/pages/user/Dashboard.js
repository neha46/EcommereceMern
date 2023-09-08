import React from 'react';
import Layout from '../../components/Layout/Layout';
import UserMenu from '../../components/Layout/UserMenu';
import { useAuth } from '../../Context/auth';
const Dashboard = () => {
  const [auth]=useAuth()
  return (
<Layout>
<div className="container-fluid mt-5 p-3">
  <div className="row">

    <div className="col-md-3"><UserMenu/></div>
    <div className="col-md-9">
      <div className="card w-75 p-3">
        <h2>User name: {auth?.user?.name}</h2>
        <h2>User email: {auth?.user?.email}</h2>
        <h2>User contact: {auth?.user?.phone}</h2>
 
      </div>
    </div>
  </div>
</div>

</Layout>
  );
}

export default Dashboard;
