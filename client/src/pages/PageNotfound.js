import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';

const PageNotfound = () => {
  return (
   <Layout title={"Go Back- Page Not Found"}>
   <div className='text-center fs-1 mt-5'>
   <h1>404</h1>
    <h3>
        Page Not Found!
    </h3>

    <Link  to="/"class="btn btn-secondary"  role="button">Go Back Home</Link>
   </div>
    
   </Layout>
  );
}

export default PageNotfound;
